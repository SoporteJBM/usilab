/**
 * «Reportar error» en una pregunta, palabra del ahorcado o flujograma.
 *
 * TODAVÍA NO SE GUARDA EN LA BASE DE DATOS: mientras no haya Supabase, el reporte se valida
 * y queda guardado en este dispositivo (clave `reto-reportes`) para no perderlo.
 * Para conectarlo, crear la tabla `reportes` en Supabase (cualquiera puede insertar,
 * solo el dueño puede leer) y reemplazar el bloque marcado con TODO por un insert con `intentar()`.
 */
import { escribir, leer } from "../lib/almacen";
import type { Resultado } from "./supabase";

export const MAX_COMENTARIO = 400;
export const MOTIVOS = [
  "La respuesta correcta está mal",
  "Hay dos respuestas correctas",
  "La pregunta está mal escrita o confusa",
  "La pista o la explicación está mal",
  "Error de ortografía",
  "Otro",
] as const;
const CLAVE = "reto-reportes";
const MAXIMO_GUARDADOS = 100;

export interface Reporte {
  tipo: "pregunta" | "ahorcado" | "flujograma" | "examen";
  /** Estación o sección (virus, hongos, microscopio...). */
  estacion?: string;
  /** Id de la pregunta, palabra o flujograma. */
  id?: string;
  /** Lo que vio el alumno: caso + pregunta, o la pista del ahorcado. */
  texto: string;
  /** Respuesta que la página da por correcta. */
  correcta: string;
  opciones?: string[];
  motivo: string;
  comentario: string;
  enviado: string; // ISO
}

export function validarReporte(r: Reporte): string | null {
  if (!r.motivo) return "Elige qué está mal.";
  if (!(MOTIVOS as readonly string[]).includes(r.motivo)) return "Motivo no válido.";
  if (r.motivo === "Otro" && !r.comentario.trim()) return "Cuéntanos qué está mal.";
  if (r.comentario.length > MAX_COMENTARIO) return "El comentario puede tener hasta " + MAX_COMENTARIO + " caracteres.";
  return null;
}

/** Reportes guardados en este dispositivo (los más nuevos al final). */
export function reportesGuardados(): Reporte[] {
  const x = leer(CLAVE);
  return Array.isArray(x) ? (x as Reporte[]).filter((r) => r && typeof r.texto === "string") : [];
}

export async function enviarReporte(r: Reporte): Promise<Resultado<null>> {
  const error = validarReporte(r);
  if (error) return { ok: false, error };
  // TODO(base de datos): reemplazar por
  //   return intentar((c) => c.from("reportes").insert({ ...r }));
  const lista = [...reportesGuardados(), r].slice(-MAXIMO_GUARDADOS);
  escribir(CLAVE, lista);
  console.info("[reto] reporte de error (aún sin base de datos)", r);
  await new Promise((res) => setTimeout(res, 200));
  return { ok: true, data: null };
}
