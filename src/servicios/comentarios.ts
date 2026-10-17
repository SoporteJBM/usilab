/** Muro de comentarios (tabla `comentarios` y función `comentarios_recientes` en supabase/schema.sql). */
import { db, intentar, type Resultado } from "./supabase";
import { sesion } from "./sesion";

export interface Comentario { id: number; autor: string; texto: string; t: number; mio: boolean }

export const MAX = 500;

export const puedePublicar = (): boolean => sesion.modo === "cuenta" && !!db() && !!sesion.usuario;

export function porQueNo(): string {
  return !db() ? "Los comentarios estarán disponibles cuando se configure el ingreso con cuenta." : "Entra con tu cuenta para leer y escribir comentarios.";
}

interface Fila { id: number; apodo: string; texto: string; creado: string; soy_yo: boolean }

export async function recientes(): Promise<Resultado<Comentario[]>> {
  if (!puedePublicar()) return { ok: true, data: [] };
  const r = await intentar((c) => c.rpc("comentarios_recientes", { limite: 100 }));
  if (!r.ok) return r;
  const filas = Array.isArray(r.data.data) ? (r.data.data as Fila[]) : [];
  return {
    ok: true,
    data: filas
      .filter((f) => f && typeof f.texto === "string")
      .map((f) => ({ id: f.id, autor: f.apodo || "Alumno", texto: f.texto, t: Date.parse(f.creado) || Date.now(), mio: !!f.soy_yo })),
  };
}

export async function contar(): Promise<number | null> {
  if (!puedePublicar()) return null;
  const r = await intentar((c) => c.from("comentarios").select("id", { count: "exact", head: true }));
  return r.ok ? r.data.count ?? 0 : null;
}

export async function publicar(texto: string): Promise<Resultado<unknown>> {
  const limpio = texto.trim();
  if (!limpio) return { ok: false, error: "Escribe algo antes de publicar." };
  if (limpio.length > MAX) return { ok: false, error: "Máximo " + MAX + " caracteres." };
  if (!sesion.usuario) return { ok: false, error: "Entra con tu cuenta para publicar." };
  const uid = sesion.usuario.id;
  return intentar((c) => c.from("comentarios").insert({ user_id: uid, texto: limpio }));
}

export async function borrar(id: number): Promise<Resultado<unknown>> {
  return intentar((c) => c.from("comentarios").delete().eq("id", id));
}
