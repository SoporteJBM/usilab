/** Consultas sobre el contenido, compartidas por varias vistas. */
import { AGENTES_MICROSCOPIO, CASOS, ESTACIONES, FOTOS, INDICE, PARES, TABLAS, type AgenteMicroscopio, type Estacion, type Foto, type Pregunta } from "./content";
import { sinTildes } from "./lib/texto";

/** Estaciones con banco de preguntas (las del tablero y Casos clínicos). */
export const CON_PREGUNTAS: Estacion[] = [...ESTACIONES, CASOS];

const porId = new Map(CON_PREGUNTAS.map((e) => [e.id, e]));
export const estacion = (id: string): Estacion | undefined => porId.get(id);

export interface PreguntaUbicada { est: Estacion; q: Pregunta }

export function todasLasPreguntas(): PreguntaUbicada[] {
  return CON_PREGUNTAS.flatMap((est) => est.preguntas.map((q) => ({ est, q })));
}

const preguntas = new Map(todasLasPreguntas().map((x) => [x.q.id, x]));
export const pregunta = (id: string): PreguntaUbicada | undefined => preguntas.get(id);

export const agente = (nombre: string): AgenteMicroscopio | undefined => AGENTES_MICROSCOPIO.find((a) => a.nombre === nombre);
export const fotosDe = (nombre: string): Foto[] => FOTOS.filter((f) => f.agente === nombre);

export const TEXTO_DIAGNOSTICO = "¿Cuál es el diagnóstico más probable?";
export const enunciado = (q: Pregunta): string => q.pregunta || TEXTO_DIAGNOSTICO;

// ---- Índice de búsqueda ----
export interface Entrada { tipo: string; titulo: string; texto: string }

let cache: Entrada[] | null = null;
/** Todo el material buscable: resúmenes, fichas, tablas, pares y preguntas con su respuesta. */
export function indiceBusqueda(): Entrada[] {
  if (cache) return cache;
  const idx: Entrada[] = [];
  CON_PREGUNTAS.forEach((st) => idx.push({ tipo: "Resumen", titulo: st.nombre, texto: st.resumen }));
  AGENTES_MICROSCOPIO.forEach((a) => idx.push({ tipo: "Ficha de microscopio", titulo: a.nombre, texto: "Criterio: " + a.criterio + "\nProduce: " + a.produce + "\nTratamiento: " + a.tratamiento }));
  TABLAS.forEach((tb) => tb.filas.forEach((r) => idx.push({ tipo: tb.titulo, titulo: r[0], texto: r.slice(1).join(" · ") })));
  PARES.forEach((p) => idx.push({ tipo: "No confundir", titulo: p.a + " vs " + p.b, texto: p.diferencia }));
  todasLasPreguntas().forEach(({ est, q }) => idx.push({
    tipo: "Pregunta · " + est.nombre,
    titulo: (q.caso ? q.caso + " " : "") + (q.pregunta || "¿Diagnóstico?"),
    texto: "Respuesta: " + q.correcta + (q.explicacion ? "\n" + q.explicacion : ""),
  }));
  return (cache = idx);
}

/** Cuántas entradas mencionan la frase ("A|B" acepta cualquiera). */
export function cuantos(busqueda: string, idx: Entrada[] = indiceBusqueda()): number {
  const alts = busqueda.split("|").map(sinTildes);
  return idx.filter((it) => { const h = sinTildes(it.titulo + " " + it.texto); return alts.some((a) => h.includes(a)); }).length;
}

export function busquedaDe(nombre: string): string {
  for (const sec of INDICE) for (const g of sec.grupos) for (const it of g.items) if (it.nombre === nombre) return it.busqueda;
  return nombre;
}
