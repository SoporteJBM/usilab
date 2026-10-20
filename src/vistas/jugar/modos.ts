/**
 * Modos extra de cada estación (aparecen bajo los niveles):
 * - Modo flujogramas (Virus y Hongos): ronda de 3 flujogramas para armar en orden.
 * - Modo mixto (Virus y Hongos): 6 preguntas + 2 flujogramas mezclados.
 * - Ahorcado (Hongos, Bacterias, Virus, Parásitos).
 * El nivel cambia la dificultad: Fácil sin pasos falsos; Medio con 1; Difícil con todos;
 * Muy difícil con todos, más pasos de otro flujograma del tema y sin título.
 */
import { FLUJOGRAMAS, NOMBRE_NIVEL, PISTA, PUNTOS, type Estacion, type Flujograma, type Nivel } from "../../content";
import { estacion } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { botonTarjeta, mk } from "../../lib/dom";
import { estado, rondaTerminada } from "../../estado/progreso";
import { conDatoCurioso } from "../../ui/cargando";
import { menuAhorcado, totalAhorcado } from "./ahorcado";
import { elegirModo } from "./niveles";
import { aItem, itemFlujo, itemFotoFlujo, jugarPreguntas, type FlujoEnRonda } from "./quiz";
import { NIVELES_FLUJO } from "../../content";
import { hayCorrector } from "../../servicios/corrector";
import { casoFlujo, casosDeArea, historialFlujo, nombreEnfermedad } from "./flujo-foto";

const TEMA_FLUJO: Record<string, string> = { virus: "Virus", hongos: "Hongos" };
export const PREGUNTAS_MIXTO = 6;
export const FLUJOS_MIXTO = 2;
const FLUJOS_RONDA = 3;
const DIFICULTAD_FLUJO: Record<Nivel, string> = {
  f: "sin pasos falsos",
  m: "1 paso falso",
  d: "todos los pasos falsos",
  x: "pasos falsos de otros flujogramas y sin título",
};

const flujogramasDe = (id: string): Flujograma[] => FLUJOGRAMAS.filter((f) => f.tema === TEMA_FLUJO[id]);

/** Arma el flujograma según el nivel. */
export function flujoSegunNivel(f: Flujograma, k: Nivel): FlujoEnRonda {
  const reales = new Set(f.pasos.map((p) => p.texto));
  let intrusos = k === "f" ? [] : k === "m" ? mezclar(f.intrusos).slice(0, 1) : [...f.intrusos];
  if (k === "x") {
    const ajenos = mezclar(FLUJOGRAMAS.filter((g) => g.tema === f.tema && g.id !== f.id).flatMap((g) => g.pasos.map((p) => p.texto)))
      .filter((t) => !reales.has(t) && !intrusos.includes(t));
    intrusos = [...intrusos, ...ajenos.slice(0, 2)];
  }
  return { f, intrusos, ocultarTitulo: k === "x", puntos: PUNTOS[k] * 2 };
}

function estacionOError(id: string): Estacion {
  const st = estacion(id);
  if (!st) throw new AppError("Ese tema no existe.", "datos", id);
  return st;
}

export const elegirModoFlujo = vista("el modo flujogramas", (id: string, volver: () => void) => {
  const st = estacionOError(id);
  const n = flujogramasDe(id).length;
  elegirModo({
    titulo: "Modo flujogramas · " + st.nombre,
    memoria: "flujo-" + id,
    detalle: (k) => Math.min(FLUJOS_RONDA, n) + " flujogramas de " + n + " · " + DIFICULTAD_FLUJO[k],
    alConfirmar: (k) => conDatoCurioso(() => rondaFlujogramas(id, k, volver), id),
    alVolver: volver,
  });
});

export const rondaFlujogramas = vista("el modo flujogramas", (id: string, k: Nivel, volver: () => void) => {
  const st = estacionOError(id);
  const items = mezclar(flujogramasDe(id)).slice(0, FLUJOS_RONDA).map((f) => itemFlujo(flujoSegunNivel(f, k)));
  jugarPreguntas("Flujogramas · " + st.nombre + " · " + NOMBRE_NIVEL[k], items, PUNTOS[k], {
    alSalir: volver,
    otraVez: () => elegirModoFlujo(id, volver),
    textoVolver: "Volver",
  });
});

export const elegirModoMixto = vista("el modo mixto", (id: string, volver: () => void) => {
  const st = estacionOError(id);
  const nf = Math.min(FLUJOS_MIXTO, flujogramasDe(id).length);
  elegirModo({
    titulo: "Modo mixto · " + st.nombre,
    memoria: "mixto-" + id,
    detalle: (k) => Math.min(PREGUNTAS_MIXTO, st.preguntas.filter((q) => q.nivel === k).length) + " preguntas + " + nf + " flujogramas · " + DIFICULTAD_FLUJO[k],
    alConfirmar: (k) => conDatoCurioso(() => rondaMixta(id, k, volver), id),
    alVolver: volver,
  });
});

export const rondaMixta = vista("el modo mixto", (id: string, k: Nivel, volver: () => void) => {
  const st = estacionOError(id);
  const m = estado.dominadas[id] || {};
  const delNivel = st.preguntas.filter((q) => q.nivel === k);
  const preguntas = [...mezclar(delNivel.filter((q) => !m[q.id])), ...mezclar(delNivel.filter((q) => m[q.id]))].slice(0, PREGUNTAS_MIXTO).map((q) => aItem(q, st));
  const flujos = mezclar(flujogramasDe(id)).slice(0, FLUJOS_MIXTO).map((f) => itemFlujo(flujoSegunNivel(f, k)));
  jugarPreguntas("Mixto · " + st.nombre + " · " + NOMBRE_NIVEL[k], mezclar([...preguntas, ...flujos]), PUNTOS[k], {
    pista: PISTA[k],
    alSalir: volver,
    otraVez: () => elegirModoMixto(id, volver),
    alTerminar: () => rondaTerminada(id),
    textoVolver: "Volver",
  });
});

// ---- Flujograma con foto (corrige Claude) ----
const FOTOS_RONDA = 3;

export const elegirModoFotoFlujo = vista("el flujograma con foto", (area: string, volver: () => void, casoId?: string) => {
  const caso = casoId ? casoFlujo(casoId) : undefined;
  const st = estacion(area);
  const h = historialFlujo();
  elegirModo({
    titulo: caso ? "Flujograma · " + nombreEnfermedad(caso) : "Flujograma con foto · " + (st?.nombre ?? area),
    memoria: "foto-" + area,
    detalle: (k) => NIVELES_FLUJO[k].desc + (casoId && h[casoId + ":" + k] ? " · tu mejor nota: " + h[casoId + ":" + k].mejor + "/20" : ""),
    alConfirmar: (k) => conDatoCurioso(() => rondaFotoFlujo(area, k, volver, casoId), area),
    alVolver: volver,
  });
});

export const rondaFotoFlujo = vista("el flujograma con foto", (area: string, k: Nivel, volver: () => void, casoId?: string) => {
  const unico = casoId ? casoFlujo(casoId) : undefined;
  const casos = unico ? [unico] : mezclar(casosDeArea(area)).slice(0, FOTOS_RONDA);
  if (!casos.length) throw new AppError("No hay casos para este tema.", "datos", area);
  const nombre = estacion(area)?.nombre ?? area;
  jugarPreguntas("Flujograma con foto · " + nombre + " · " + NOMBRE_NIVEL[k], casos.map((c) => itemFotoFlujo({ caso: c, nivel: k, puntos: PUNTOS[k] * 2 })), PUNTOS[k], {
    alSalir: volver,
    otraVez: () => elegirModoFotoFlujo(area, volver, casoId),
    textoVolver: "Volver",
  });
});

/** Botones de los modos extra para ponerlos bajo los niveles de una estación. */
export function modosExtra(id: string, volver: () => void): HTMLElement[] {
  const st = estacion(id);
  if (!st) return [];
  const out: HTMLElement[] = [];
  if (flujogramasDe(id).length) {
    out.push(botonTarjeta("modo-extra modo-flujo", "Modo flujogramas", "Arma flujogramas en orden; el nivel decide cuántos pasos falsos hay", flujogramasDe(id).length + " flujogramas", () => elegirModoFlujo(id, volver)));
    out.push(botonTarjeta("modo-extra modo-mixto", "Modo mixto", "Todo " + st.nombre + " junto: " + PREGUNTAS_MIXTO + " preguntas + " + FLUJOS_MIXTO + " flujogramas, mezclados", null, () => elegirModoMixto(id, volver)));
  }
  if (hayCorrector && casosDeArea(id).length) {
    out.push(botonTarjeta("modo-extra modo-foto", "Flujograma con foto", "Hazlo en papel, mándale la foto a Claude y te corrige según el nivel", casosDeArea(id).length + " casos · nota sobre 20", () => elegirModoFotoFlujo(id, volver)));
  }
  const n = totalAhorcado(id);
  if (n) out.push(botonTarjeta("modo-extra modo-ahorcado", "Ahorcado", "Adivina el nombre con su pista", n + " palabras en 4 niveles", () => menuAhorcado(id, volver)));
  if (!out.length) return [];
  return [mk("p", "note modos-nota", "Además de las rondas de preguntas, cada nivel (Fácil, Medio, Difícil y Muy difícil) tiene estos modos:"), ...out];
}
