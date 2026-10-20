/** Ranking de puntos. Hoy existe en el artefacto (colección `ranking`); en la web llegará con Supabase. */
import { esArtefacto } from "../config";
import { dbClaude, errorClaude, perfiles } from "./claude";
import { idCuenta } from "./sesion";
import type { Resultado } from "./supabase";

export interface FilaRanking { id: string; nombre: string; foto: string; puntos: number; dominadas: number; soyYo: boolean }

export const hayRanking = esArtefacto;

export async function ranking(limite = 50): Promise<Resultado<FilaRanking[]>> {
  if (!esArtefacto) return { ok: false, error: "El ranking estará disponible cuando se configure el ingreso con cuenta." };
  try {
    const d = await dbClaude();
    if (!d) return { ok: false, error: "No se pudo abrir el ranking." };
    const snap = await d.collection("ranking").orderBy("score", "desc").limit(limite).get();
    const ids = snap.docs.map((x) => x.id);
    const ps = await perfiles(ids);
    const yo = idCuenta();
    return {
      ok: true,
      data: snap.docs.map((x) => {
        const v = (x.data() || {}) as { score?: number; dominadas?: number };
        return { id: x.id, nombre: ps[x.id]?.name || "Alumno", foto: ps[x.id]?.avatarUrl || "", puntos: Number(v.score) || 0, dominadas: Number(v.dominadas) || 0, soyYo: x.id === yo };
      }),
    };
  } catch (e) {
    return { ok: false, error: errorClaude(e) };
  }
}
