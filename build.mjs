// Compila la página a dist/.
//   node build.mjs            → producción (minificado, nombres con hash)
//   node build.mjs --dev      → servidor local con recarga en http://localhost:5173
//   node build.mjs --mock     → usa una base de datos falsa en memoria (para pruebas)
//   node build.mjs --artefacto → un solo HTML para el artefacto de claude.ai (dist-artefacto/), con el CSS,
//                                el JS y las fotos adentro; cuentas, datos y corrección con las capacidades de Claude.
// La configuración se lee de .env o de variables de entorno: SUPABASE_URL, SUPABASE_ANON_KEY, GOOGLE=1.
import * as esbuild from "esbuild";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.dirname(fileURLToPath(import.meta.url));
const args = new Set(process.argv.slice(2));
const dev = args.has("--dev");
const mock = args.has("--mock");
const artefacto = args.has("--artefacto");
const salida = path.join(raiz, process.env.OUT_DIR || (artefacto ? "dist-artefacto" : "dist"));

function leerEnv() {
  const env = { ...process.env };
  const archivo = path.join(raiz, ".env");
  if (fs.existsSync(archivo)) {
    for (const linea of fs.readFileSync(archivo, "utf8").split(/\r?\n/)) {
      const m = linea.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/);
      if (m && env[m[1]] === undefined) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
    }
  }
  return env;
}

const env = leerEnv();
const config = artefacto
  ? { supabaseUrl: "", supabaseAnonKey: "", google: false, plataforma: "artefacto" }
  : mock
  ? { supabaseUrl: "https://mock.supabase.co", supabaseAnonKey: "mock", google: false }
  : { supabaseUrl: env.SUPABASE_URL || "", supabaseAnonKey: env.SUPABASE_ANON_KEY || "", google: env.GOOGLE === "1" };

if (!mock && config.supabaseUrl && !/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(config.supabaseUrl)) {
  console.warn("Aviso: SUPABASE_URL no parece una URL de Supabase:", config.supabaseUrl);
}
if (!mock && !artefacto && !config.supabaseUrl) console.warn("Aviso: sin SUPABASE_URL. La página funcionará solo en modo invitado.");

// En pruebas, @supabase/supabase-js se reemplaza por un simulador.
const simulador = {
  name: "supabase-simulado",
  setup(b) {
    b.onResolve({ filter: /^@supabase\/supabase-js$/ }, () => ({ path: path.join(raiz, "tests/mocks/supabase.ts") }));
  },
};

function copiar(origen, destino) {
  for (const e of fs.readdirSync(origen, { withFileTypes: true })) {
    const o = path.join(origen, e.name), d = path.join(destino, e.name);
    if (e.isDirectory()) { fs.mkdirSync(d, { recursive: true }); copiar(o, d); }
    else fs.copyFileSync(o, d);
  }
}

function escribirHtml(metafile) {
  const salidas = Object.keys(metafile.outputs).map((f) => path.relative(salida, path.join(raiz, f)).split(path.sep).join("/"));
  const js = salidas.find((f) => /^assets\/main.*\.js$/.test(f));
  const css = salidas.find((f) => /^assets\/main.*\.css$/.test(f));
  if (!js || !css) throw new Error("No se generaron main.js / main.css");
  const html = fs.readFileSync(path.join(raiz, "src/index.html"), "utf8").replace("__JS__", js).replace("__CSS__", css);
  fs.writeFileSync(path.join(salida, "index.html"), html);
}

const opciones = {
  entryPoints: [path.join(raiz, "src/main.ts")],
  bundle: true,
  format: "esm",
  target: ["es2020", "safari15", "chrome90", "firefox90"],
  outdir: path.join(salida, "assets"),
  entryNames: dev ? "[name]" : "[name]-[hash]",
  minify: !dev,
  sourcemap: true,
  metafile: true,
  legalComments: "none",
  define: { __CONFIG__: JSON.stringify(config) },
  plugins: [
    ...(mock ? [simulador] : []),
    { name: "html", setup(b) { b.onEnd((r) => { if (!r.errors.length) { copiar(path.join(raiz, "public"), salida); escribirHtml(r.metafile); } }); } },
  ],
  logLevel: "info",
};

// Artefacto: sin Supabase (se usan las capacidades de claude.ai).
const sinSupabase = {
  name: "sin-supabase",
  setup(b) {
    b.onResolve({ filter: /^@supabase\/supabase-js$/ }, () => ({ path: path.join(raiz, "src/servicios/sin-supabase.ts") }));
  },
};

/** Arma el HTML del artefacto: documento completo con todo adentro (CSS, JS y fotos). */
async function construirArtefacto() {
  const r = await esbuild.build({
    ...opciones,
    format: "iife",
    entryNames: "[name]",
    sourcemap: false,
    write: false,
    plugins: [sinSupabase],
  });
  const texto = (re) => {
    const f = r.outputFiles.find((o) => re.test(o.path));
    if (!f) throw new Error("No se generó " + re);
    return f.text;
  };
  let js = texto(/main\.js$/);
  const css = texto(/main\.css$/);
  // Fotos: van como data: URI (el artefacto no puede cargar archivos sueltos).
  const dirImg = path.join(raiz, "public/img");
  for (const f of fs.readdirSync(dirImg)) {
    const uri = "data:image/jpeg;base64," + fs.readFileSync(path.join(dirImg, f)).toString("base64");
    js = js.split('"img/' + f + '"').join(JSON.stringify(uri));
  }
  if (/"img\/[^"]+\.jpg"/.test(js)) throw new Error("Quedó una foto sin incrustar");
  const plantilla = fs.readFileSync(path.join(raiz, "src/index.html"), "utf8");
  const titulo = plantilla.match(/<title>.*<\/title>/)[0];
  const fuentes = plantilla.match(/<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com[^>]*>/)[0];
  const cuerpo = plantilla.split(/<body>/)[1].split(/<\/body>/)[0].replace(/<script[^>]*__JS__[^>]*><\/script>/, "").trim();
  // Documento completo: los artefactos publicados en claude.ai ya no ponen el esqueleto.
  const html = [
    "<!doctype html>",
    '<html lang="es">',
    "<head>",
    '<meta charset="utf-8">',
    '<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">',
    '<meta name="theme-color" content="#2F7D6B">',
    titulo,
    '<meta name="description" content="Juego para estudiar Microbiología y Parasitología (ambiente de pruebas de MiUsiLab).">',
    '<link rel="preconnect" href="https://fonts.googleapis.com">',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    fuentes,
    "<style>\n" + css + "\n</style>",
    "</head>",
    "<body>",
    cuerpo,
    "<script>\n" + js.replace(/<\/script/gi, "<\\/script") + "\n</script>",
    "</body>",
    "</html>",
  ].join("\n");
  fs.writeFileSync(path.join(salida, "reto-microbiologia.html"), html);
  console.log("Artefacto: " + path.relative(raiz, path.join(salida, "reto-microbiologia.html")) + " (" + Math.round(html.length / 1024) + " KB)");
}

fs.rmSync(salida, { recursive: true, force: true });
fs.mkdirSync(salida, { recursive: true });

if (dev) {
  const ctx = await esbuild.context(opciones);
  await ctx.watch();
  const { port } = await ctx.serve({ servedir: salida, port: Number(env.PORT) || 5173 });
  console.log(`\n  Abre http://localhost:${port}\n`);
} else if (artefacto) {
  await construirArtefacto();
} else {
  await esbuild.build(opciones);
}
