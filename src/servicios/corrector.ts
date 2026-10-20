/**
 * Corrección de flujogramas por foto con Claude.
 * - Artefacto: usa la capacidad "sample" de claude.ai (la paga la cuenta de quien mira).
 * - Web: estará disponible con una Edge Function de Supabase y una API key guardada allí (nunca en la página).
 */
import { esArtefacto } from "../config";
import { sampleClaude } from "./claude";

/** true si esta versión de la página puede corregir fotos. */
export const hayCorrector = esArtefacto;

/** Comprueba en el momento si se pueden mandar imágenes a Claude. */
export async function puedeCorregirFotos(): Promise<boolean> {
  if (!hayCorrector) return false;
  const s = await sampleClaude();
  if (!s) return false;
  try { const lim = await s.limits(); return !!lim?.images; } catch { return false; }
}

/** Manda el prompt y la foto; devuelve el JSON de la corrección. Lanza { code } si algo falla. */
export async function corregirConFoto(prompt: string, foto: Blob): Promise<unknown> {
  const s = hayCorrector ? await sampleClaude() : null;
  if (!s) throw { code: "not_granted" };
  return s.json(prompt, { images: [foto], modelTier: "complex" });
}
