/**
 * Sustituto de @supabase/supabase-js para el artefacto (node build.mjs --artefacto).
 * En el artefacto no hay Supabase: las cuentas y los datos usan las capacidades de claude.ai.
 * Así el artefacto no carga la librería y pesa menos.
 */
export type SupabaseClient = never;
export type User = { id: string; email?: string };
export function createClient(): never {
  throw new Error("Supabase no está disponible en el artefacto.");
}
