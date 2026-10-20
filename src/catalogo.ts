/** Consultas sobre el contenido, compartidas por varias vistas. */
import { textoPlano } from "./lib/texto-rico";
import { AGENTES_MICROSCOPIO, APUNTES, CASOS, ESTACIONES, FOTOS, INDICE, PARES, TABLAS, TARJETAS, type AgenteMicroscopio, type Estacion, type Foto, type Pregunta } from "./content";
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
export interface Entrada { tipo: string; titulo: string; texto: string; /** Id del apunte donde está, para abrirlo. */ apunte?: string }

let cache: Entrada[] | null = null;
/** Todo el material buscable: resúmenes, fichas, tablas, pares y preguntas con su respuesta. */
export function indiceBusqueda(): Entrada[] {
  if (cache) return cache;
  const idx: Entrada[] = [];
  CON_PREGUNTAS.forEach((st) => idx.push({ tipo: "Resumen", titulo: st.nombre, texto: st.resumen }));
  AGENTES_MICROSCOPIO.forEach((a) => idx.push({ tipo: "Ficha de microscopio", titulo: a.nombre, texto: "Criterio: " + a.criterio + "\nProduce: " + a.produce + "\nTratamiento: " + a.tratamiento }));
  TABLAS.forEach((tb) => tb.filas.forEach((r) => idx.push({ tipo: "Tabla · " + tb.titulo, titulo: textoPlano(r[0]), texto: textoPlano(r.slice(1).join(" · ")) })));
  // Apuntes: un resultado por apartado (subtítulo), con su texto.
  APUNTES.forEach((a) => {
    let titulo = a.titulo;
    let partes: string[] = [];
    const cerrar = () => { if (partes.length) idx.push({ tipo: "Apunte · " + a.titulo, titulo, texto: partes.join("\n"), apunte: a.id }); partes = []; };
    for (const b of a.bloques) {
      if (b.t === "h") { cerrar(); titulo = textoPlano(b.texto).replace(/\s*⭐/g, ""); }
      else if (b.t === "p") partes.push(textoPlano(b.texto));
      else if (b.t === "lista") partes.push(...b.items.map((x) => "• " + textoPlano(x.trim())));
      else partes.push(...b.filas.map((r) => textoPlano(r.join(" · "))));
    }
    cerrar();
  });
  TARJETAS.forEach((t) => idx.push({ tipo: "Tarjeta · " + t.tema, titulo: t.pregunta, texto: "Respuesta: " + t.respuesta + "\n" + t.detalle }));
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
