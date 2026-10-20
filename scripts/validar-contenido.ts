/**
 * Revisa el contenido antes de publicar: `npm run validar` (también corre en `npm run build`).
 * ERROR = rompe el juego, detiene la publicación. AVISO = conviene revisarlo, pero no bloquea.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  AGENTES_MICROSCOPIO, AHORCADO, AHORCADO_PUNTOS, AHORCADOS, APUNTES, CASOS, DATOS_CURIOSOS, ESTACIONES, FLUJOGRAMAS, FOTOS, INDICE, PARES, PERFILES, REINOS, TABLAS, TARJETAS, TEMAS_TARJETAS,
  type Estacion, type NivelAhorcado,
} from "../src/content";
import { raicesRespuesta, sinTildes } from "../src/lib/texto";

const raiz = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errores: string[] = [];
const avisos: string[] = [];
const error = (m: string) => errores.push(m);
const aviso = (m: string) => avisos.push(m);
const norm = (s: string) => s.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ");
const vacio = (s: unknown) => typeof s !== "string" || !s.trim();

// ---- Preguntas ----
const NIVELES = ["f", "m", "d", "x"] as const;
const ids = new Map<string, string>();
const enunciados = new Map<string, string>();

function revisarEstacion(st: Estacion, conPreguntas: boolean): void {
  if (vacio(st.id) || vacio(st.nombre)) error(`Estación sin id o nombre: ${JSON.stringify(st.nombre)}`);
  if (vacio(st.resumen)) aviso(`${st.nombre}: no tiene resumen.`);
  if (conPreguntas && !st.preguntas.length) aviso(`${st.nombre}: no tiene preguntas (se muestra como solo lectura).`);
  st.preguntas.forEach((q, i) => {
    const donde = `${st.nombre} #${i + 1} (${q.id ?? "sin id"})`;
    if (vacio(q.id)) error(`${donde}: falta el id.`);
    else {
      if (!q.id.startsWith(st.id + "-")) error(`${donde}: el id debe empezar con "${st.id}-".`);
      if (ids.has(q.id)) error(`${donde}: id repetido (también en ${ids.get(q.id)}). Cada pregunta necesita un id único.`);
      ids.set(q.id, donde);
    }
    if (!NIVELES.includes(q.nivel)) error(`${donde}: nivel "${q.nivel}" no válido (usa f, m, d o x).`);
    if (vacio(q.pregunta) && vacio(q.caso)) error(`${donde}: no tiene ni pregunta ni caso.`);
    if (vacio(q.correcta)) error(`${donde}: falta la respuesta correcta.`);
    if (!Array.isArray(q.distractores)) { error(`${donde}: "distractores" debe ser una lista.`); return; }
    const d = q.distractores.filter((x) => !vacio(x));
    if (d.length !== q.distractores.length) error(`${donde}: hay distractores vacíos.`);
    const unicos = new Set(d.map(norm));
    if (unicos.size < 3) error(`${donde}: necesita al menos 3 distractores distintos (tiene ${unicos.size}). Siempre se muestran 4 opciones.`);
    if (unicos.size !== d.length) aviso(`${donde}: hay distractores repetidos.`);
    if (!vacio(q.correcta) && unicos.has(norm(q.correcta))) error(`${donde}: la respuesta correcta también aparece como distractor.`);
    const clave = norm((q.caso ?? "") + "|" + (q.pregunta ?? ""));
    if (enunciados.has(clave)) aviso(`${donde}: mismo enunciado que ${enunciados.get(clave)}.`);
    else enunciados.set(clave, donde);
    if (q.nivel === "f" && vacio(q.pista)) aviso(`${donde}: es fácil y no tiene pista (en fácil la pista es gratis).`);
  });
  if (conPreguntas && st.preguntas.length) {
    for (const k of NIVELES) {
      const n = st.preguntas.filter((q) => q.nivel === k).length;
      if (n === 0) aviso(`${st.nombre}: el nivel ${k} no tiene preguntas.`);
      else if (n < 5 && st.id !== "casos") aviso(`${st.nombre}: el nivel ${k} tiene solo ${n} preguntas (la ronda es de 5).`);
    }
  }
}
ESTACIONES.forEach((st) => revisarEstacion(st, st.id !== "contagio"));
revisarEstacion(CASOS, true);
const idsEstacion = [...ESTACIONES, CASOS].map((s) => s.id);
if (new Set(idsEstacion).size !== idsEstacion.length) error("Hay dos estaciones con el mismo id.");

// ---- Microscopio y fotos ----
const nombresAgentes = new Set(AGENTES_MICROSCOPIO.map((a) => a.nombre));
if (nombresAgentes.size !== AGENTES_MICROSCOPIO.length) error("Hay dos estructuras de microscopio con el mismo nombre.");
AGENTES_MICROSCOPIO.forEach((a) => {
  for (const k of ["grupo", "nombre", "criterio", "produce", "tratamiento", "clave"] as const) if (vacio(a[k])) error(`Microscopio ${a.nombre}: falta "${k}".`);
});
PARES.forEach((p) => {
  if (!nombresAgentes.has(p.a)) error(`No confundir: "${p.a}" no existe en el microscopio.`);
  if (!nombresAgentes.has(p.b)) error(`No confundir: "${p.b}" no existe en el microscopio.`);
  if (vacio(p.diferencia)) error(`No confundir ${p.a} vs ${p.b}: falta la diferencia.`);
});
FOTOS.forEach((f) => {
  if (!nombresAgentes.has(f.agente)) error(`Foto ${f.numero}: el agente "${f.agente}" no existe en el microscopio.`);
  if (!fs.existsSync(path.join(raiz, "public", f.archivo))) error(`Foto ${f.numero}: no existe el archivo public/${f.archivo}.`);
});
if (new Set(FOTOS.map((f) => f.archivo)).size !== FOTOS.length) error("Hay fotos repetidas.");

FOTOS.forEach((f) => { if (f.fuente !== "laboratorio" && f.fuente !== "atlas") error(`Foto ${f.numero}: falta la fuente (laboratorio o atlas).`); });
if (new Set(FOTOS.map((f) => f.numero)).size !== FOTOS.length) error("Hay dos fotos con el mismo número.");
const existe = (archivo: string) => fs.existsSync(path.join(raiz, "public", archivo));

// ---- Apuntes y tarjetas de teoría ----
const idsApuntes = new Set(APUNTES.map((a) => a.id));
if (idsApuntes.size !== APUNTES.length) error("Hay dos apuntes con el mismo id.");
APUNTES.forEach((a) => {
  if (vacio(a.titulo) || !a.bloques.length) error(`Apunte ${a.id}: falta el título o el contenido.`);
  a.bloques.forEach((b, i) => {
    if (b.t === "tabla") b.filas.forEach((f, j) => { if (b.columnas.length && f.length !== b.columnas.length) error(`Apunte ${a.id}, tabla del bloque ${i + 1}, fila ${j + 1}: no coincide con las columnas.`); });
    const texto = JSON.stringify(b);
    if ((texto.match(/\*\*/g) ?? []).length % 2) aviso(`Apunte ${a.id}, bloque ${i + 1}: hay un ** sin cerrar.`);
  });
});
if (new Set(TARJETAS.map((t) => t.id)).size !== TARJETAS.length) error("Hay dos tarjetas con el mismo id.");
TARJETAS.forEach((t) => {
  for (const k of ["tema", "pregunta", "respuesta"] as const) if (vacio(t[k])) error(`Tarjeta ${t.id}: falta "${k}".`);
  if (!TEMAS_TARJETAS.includes(t.tema)) error(`Tarjeta ${t.id}: el tema "${t.tema}" no está en TEMAS_TARJETAS.`);
});

// ---- Fichas de agentes e índice ----
const enIndice = new Set(INDICE.flatMap((s) => s.grupos.flatMap((g) => g.items.map((i) => i.nombre))));
for (const [nombre, pf] of Object.entries(PERFILES)) {
  if (pf.fichaMicroscopio && !nombresAgentes.has(pf.fichaMicroscopio)) error(`Ficha ${nombre}: fichaMicroscopio "${pf.fichaMicroscopio}" no existe.`);
  if (!enIndice.has(nombre)) aviso(`Ficha ${nombre}: no aparece en el índice, así que nadie llega a ella.`);
  if (vacio(pf.queEs)) aviso(`Ficha ${nombre}: falta "queEs".`);
  if (pf.apunte && !idsApuntes.has(pf.apunte)) error(`Ficha ${nombre}: el apunte "${pf.apunte}" no existe.`);
  (pf.fotos ?? []).forEach((f) => { if (!existe(f.archivo)) error(`Ficha ${nombre}: no existe public/${f.archivo}.`); });
}
INDICE.forEach((s) => s.grupos.forEach((g) => g.items.forEach((it) => { if (vacio(it.busqueda)) error(`Índice ${it.nombre}: falta la búsqueda.`); })));
REINOS.forEach((r) => {
  if (!INDICE.some((s) => s.titulo === r.nombre)) error(`Inicio: el grupo "${r.nombre}" no tiene sección en el índice.`);
  if (!ESTACIONES.some((s) => s.nombre === r.nombre)) aviso(`Inicio: el grupo "${r.nombre}" no tiene estación para practicar.`);
});

// ---- Tablas ----
if (new Set(TABLAS.map((t) => t.id)).size !== TABLAS.length) error("Hay dos tablas con el mismo id.");
TABLAS.forEach((t) => (t.fotos ?? []).forEach((f) => { if (!existe(f.archivo)) error(`Tabla "${t.titulo}": no existe public/${f.archivo}.`); }));
TABLAS.forEach((t) => t.filas.forEach((f, i) => {
  if (f.length !== t.columnas.length) error(`Tabla "${t.titulo}", fila ${i + 1}: tiene ${f.length} celdas y la tabla ${t.columnas.length} columnas.`);
}));

// ---- Ahorcado ----
const NIVELES_A: NivelAhorcado[] = ["facil", "medio", "dificil", "muydificil"];
const palabras = new Map<string, string>();
NIVELES_A.forEach((k) => {
  const lista = AHORCADO[k];
  if (!lista?.length) { error(`Ahorcado: el nivel ${k} no tiene palabras.`); return; }
  if (!(AHORCADO_PUNTOS[k] > 0)) error(`Ahorcado: faltan los puntos del nivel ${k}.`);
  lista.forEach((w) => {
    if (!/^[A-Z][A-Z \-]*$/.test(w.palabra)) error(`Ahorcado (${k}) "${w.palabra}": solo mayúsculas A-Z sin tildes ni Ñ (el teclado no las tiene).`);
    if (vacio(w.pista)) error(`Ahorcado (${k}) "${w.palabra}": falta la pista.`);
    if (palabras.has(w.palabra)) aviso(`Ahorcado: "${w.palabra}" está en ${palabras.get(w.palabra)} y en ${k}.`);
    palabras.set(w.palabra, k);
  });
});

// ---- Ahorcado de cada estación ----
for (const [area, A] of Object.entries(AHORCADOS)) {
  NIVELES_A.forEach((k) => {
    const lista = A.niveles[k];
    if (!lista?.length) { error(`Ahorcado ${A.nombre}: el nivel ${k} no tiene palabras.`); return; }
    if (lista.length < 8) aviso(`Ahorcado ${A.nombre} (${k}): solo ${lista.length} palabras; conviene tener 8 o más.`);
    const vistas = new Set<string>();
    lista.forEach((w) => {
      const donde = `Ahorcado ${A.nombre} (${k}) "${w.palabra}"`;
      if (!/^[A-Z][A-Z ]*[A-Z]$/.test(w.palabra)) error(`${donde}: solo mayúsculas A-Z y espacios, sin tildes ni Ñ.`);
      if (vacio(w.pista)) error(`${donde}: falta la pista.`);
      if (vistas.has(w.palabra)) error(`${donde}: está repetida en el mismo nivel.`);
      vistas.add(w.palabra);
      // La pista no puede decir la respuesta (ni un pedazo, como «aspergilar» para ASPERGILLUS).
      const pista = sinTildes(w.pista).toUpperCase();
      const delata = raicesRespuesta(w.palabra).filter((r) => pista.split(/[^A-Z]+/).some((x) => x.includes(r)));
      if (delata.length) error(`${donde}: la pista revela la respuesta (${delata.join(", ")}).`);
    });
  });
  if (area !== area.toLowerCase()) error(`Ahorcado: el id «${area}» debe ir en minúsculas.`);
}

// ---- Flujogramas ----
const idsFlujo = new Set<string>();
FLUJOGRAMAS.forEach((f) => {
  if (idsFlujo.has(f.id)) error(`Flujograma "${f.id}": id repetido.`);
  idsFlujo.add(f.id);
  if (vacio(f.titulo) || vacio(f.consigna)) error(`Flujograma "${f.id}": falta título o consigna.`);
  if (f.pasos.length < 3) error(`Flujograma "${f.titulo}": necesita al menos 3 pasos.`);
  if (f.claves.length < 3) error(`Flujograma "${f.titulo}": necesita al menos 3 claves para autoevaluarse.`);
  const textos = f.pasos.map((p) => norm(p.texto));
  if (new Set(textos).size !== textos.length) error(`Flujograma "${f.titulo}": hay pasos repetidos (al armarlo no se distinguirían).`);
  f.intrusos.forEach((t) => { if (textos.includes(norm(t))) error(`Flujograma "${f.titulo}": el paso falso "${t}" es igual a un paso real.`); });
  if (!f.intrusos.length) aviso(`Flujograma "${f.titulo}": no tiene pasos falsos.`);
});

// ---- Datos curiosos ----
for (const [tema, lista] of Object.entries(DATOS_CURIOSOS)) if (!lista.length || lista.some(vacio)) error(`Datos curiosos "${tema}": vacío o con textos vacíos.`);

// ---- Resultado ----
const total = [...ESTACIONES, CASOS].reduce((n, s) => n + s.preguntas.length, 0);
console.log(`Contenido: ${total} preguntas, ${AGENTES_MICROSCOPIO.length} estructuras, ${FOTOS.length} fotos, ${Object.keys(PERFILES).length} fichas, ${palabras.size} palabras, ${APUNTES.length} apuntes, ${TABLAS.length} tablas, ${TARJETAS.length} tarjetas de teoría.`);
if (avisos.length) { console.log(`\n${avisos.length} aviso(s):`); avisos.forEach((a) => console.log("  · " + a)); }
if (errores.length) {
  console.error(`\n${errores.length} ERROR(ES) — corrígelos antes de publicar:`);
  errores.forEach((e) => console.error("  ✗ " + e));
  process.exit(1);
}
console.log("\nContenido válido ✓");
