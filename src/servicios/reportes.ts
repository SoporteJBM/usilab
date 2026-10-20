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
import { esArtefacto } from "../config";
import { dbClaude, errorClaude, perfiles } from "./claude";
import { sesion } from "./sesion";

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
  if (esArtefacto && sesion.claude) {
    // Artefacto: cada persona guarda sus reportes en reportes/<su id>; solo el dueño los lee todos.
    try {
      const d = await dbClaude();
      if (d) {
        const ref = d.doc("reportes/" + sesion.claude.id);
        const doc = await ref.get();
        const previos = Array.isArray(doc.data()?.lista) ? (doc.data()!.lista as unknown[]) : [];
        await ref.set({ lista: [...previos, r].slice(-MAXIMO_GUARDADOS) });
        return { ok: true, data: null };
      }
    } catch (e) {
      return { ok: false, error: errorClaude(e) };
    }
  }
  // TODO(base de datos): reemplazar por
  //   return intentar((c) => c.from("reportes").insert({ ...r }));
  const lista = [...reportesGuardados(), r].slice(-MAXIMO_GUARDADOS);
  escribir(CLAVE, lista);
  console.info("[reto] reporte de error (aún sin base de datos)", r);
  await new Promise((res) => setTimeout(res, 200));
  return { ok: true, data: null };
}

export interface ReporteRecibido extends Reporte { autor: string }

/** Solo el dueño del artefacto: todos los reportes, los más nuevos primero. */
export async function reportesRecibidos(): Promise<Resultado<ReporteRecibido[]>> {
  if (!esArtefacto) return { ok: false, error: "Disponible cuando se configure la base de datos." };
  try {
    const d = await dbClaude();
    if (!d) return { ok: false, error: "No se pudieron cargar." };
    const snap = await d.collection("reportes").get();
    const out: (ReporteRecibido & { uid: string })[] = [];
    for (const doc of snap.docs) {
      const lista = doc.data()?.lista;
      if (!Array.isArray(lista)) continue;
      for (const r of lista as Reporte[]) if (r && typeof r.texto === "string") out.push({ ...r, uid: doc.id, autor: "" });
    }
    const ps = await perfiles([...new Set(out.map((x) => x.uid))]);
    out.forEach((x) => { x.autor = ps[x.uid]?.name || "Alumno"; });
    return { ok: true, data: out.sort((a, b) => (a.enviado < b.enviado ? 1 : -1)) };
  } catch (e) {
    return { ok: false, error: errorClaude(e) };
  }
}
