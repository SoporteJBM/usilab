// Servidor estático mínimo para las pruebas (sirve dist-test/).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const raiz = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", process.env.OUT_DIR || "dist-test");
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".jpg": "image/jpeg", ".png": "image/png", ".map": "application/json" };
const puerto = Number(process.env.PORT) || 4173;

http.createServer((req, res) => {
  const url = decodeURIComponent((req.url || "/").split("?")[0]);
  let archivo = path.normalize(path.join(raiz, url === "/" ? "index.html" : url));
  if (!archivo.startsWith(raiz)) { res.writeHead(403); res.end(); return; }
  if (!fs.existsSync(archivo) || fs.statSync(archivo).isDirectory()) archivo = path.join(raiz, "index.html");
  res.writeHead(200, { "Content-Type": tipos[path.extname(archivo)] || "application/octet-stream" });
  fs.createReadStream(archivo).pipe(res);
}).listen(puerto, () => console.log("Pruebas en http://localhost:" + puerto));
