/**
 * Muro de comentarios.
 * - Web: tabla `comentarios` y función `comentarios_recientes` en supabase/schema.sql.
 * - Artefacto: cada persona guarda sus mensajes en comentarios/<su id> ({ msgs: [{ id, t, txt }] });
 *   el dueño de la página puede borrar cualquiera.
 */
import { esArtefacto } from "../config";
import { dbClaude, errorClaude, esDueno, perfiles } from "./claude";
import { db, intentar, type Resultado } from "./supabase";
import { sesion } from "./sesion";

export interface Comentario { id: string; autor: string; texto: string; t: number; mio: boolean; puedeBorrar: boolean }

export const MAX = 500;

/** Escribir: con cuenta. */
export const puedePublicar = (): boolean =>
  esArtefacto ? sesion.modo === "cuenta" && !!sesion.claude : sesion.modo === "cuenta" && !!db() && !!sesion.usuario;

/** Leer: en el artefacto también los invitados; en la web, solo con cuenta. */
export const puedeLeer = (): boolean => (esArtefacto ? !!sesion.claude : puedePublicar());

export function porQueNo(): string {
  if (esArtefacto) return "Entra con tu cuenta para comentar. Como invitado puedes leer.";
  return !db() ? "Los comentarios estarán disponibles cuando se configure el ingreso con cuenta." : "Entra con tu cuenta para leer y escribir comentarios.";
}

interface Fila { id: number; apodo: string; texto: string; creado: string; soy_yo: boolean }
interface Mensaje { id: string; t: number; txt: string }
const mensajes = (x: unknown): Mensaje[] => {
  const m = (x as { msgs?: unknown } | undefined)?.msgs;
  return Array.isArray(m) ? m.filter((v): v is Mensaje => !!v && typeof (v as Mensaje).txt === "string") : [];
};

export async function recientes(): Promise<Resultado<Comentario[]>> {
  if (!puedeLeer()) return { ok: true, data: [] };
  if (esArtefacto) {
    try {
      const d = await dbClaude();
      if (!d) return { ok: false, error: "No se pudieron cargar los comentarios." };
      const [snap, dueno] = await Promise.all([d.collection("comentarios").get(), esDueno()]);
      const items: (Comentario & { uid: string })[] = [];
      for (const doc of snap.docs) {
        for (const m of mensajes(doc.data())) {
          const mio = doc.id === sesion.claude?.id;
          items.push({ id: doc.id + ":" + m.id, uid: doc.id, autor: "", texto: m.txt, t: Number(m.t) || 0, mio, puedeBorrar: mio || dueno });
        }
      }
      const ps = await perfiles([...new Set(items.map((i) => i.uid))]);
      items.forEach((i) => { i.autor = ps[i.uid]?.name || "Alumno"; });
      return { ok: true, data: items.sort((a, b) => b.t - a.t).slice(0, 100) };
    } catch (e) {
      return { ok: false, error: errorClaude(e) };
    }
  }
  const r = await intentar((c) => c.rpc("comentarios_recientes", { limite: 100 }));
  if (!r.ok) return r;
  const filas = Array.isArray(r.data.data) ? (r.data.data as Fila[]) : [];
  return {
    ok: true,
    data: filas
      .filter((f) => f && typeof f.texto === "string")
      .map((f) => ({ id: String(f.id), autor: f.apodo || "Alumno", texto: f.texto, t: Date.parse(f.creado) || Date.now(), mio: !!f.soy_yo, puedeBorrar: !!f.soy_yo })),
  };
}

export async function contar(): Promise<number | null> {
  if (!puedeLeer()) return null;
  if (esArtefacto) {
    try {
      const d = await dbClaude();
      if (!d) return null;
      const snap = await d.collection("comentarios").get();
      return snap.docs.reduce((n, doc) => n + mensajes(doc.data()).length, 0);
    } catch { return null; }
  }
  const r = await intentar((c) => c.from("comentarios").select("id", { count: "exact", head: true }));
  return r.ok ? r.data.count ?? 0 : null;
}

export async function publicar(texto: string): Promise<Resultado<unknown>> {
  const limpio = texto.trim();
  if (!limpio) return { ok: false, error: "Escribe algo antes de publicar." };
  if (limpio.length > MAX) return { ok: false, error: "Máximo " + MAX + " caracteres." };
  if (esArtefacto) {
    const id = sesion.claude?.id;
    if (!id || sesion.modo !== "cuenta") return { ok: false, error: "Entra con tu cuenta para publicar." };
    try {
      const d = await dbClaude();
      if (!d) return { ok: false, error: "No se pudo publicar." };
      const ref = d.doc("comentarios/" + id);
      const previos = mensajes((await ref.get()).data());
      const nuevo: Mensaje = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), t: Date.now(), txt: limpio };
      await ref.set({ msgs: [...previos, nuevo].slice(-50) });
      return { ok: true, data: null };
    } catch (e) {
      return { ok: false, error: errorClaude(e) };
    }
  }
  if (!sesion.usuario) return { ok: false, error: "Entra con tu cuenta para publicar." };
  const uid = sesion.usuario.id;
  return intentar((c) => c.from("comentarios").insert({ user_id: uid, texto: limpio }));
}

export async function borrar(c: Comentario): Promise<Resultado<unknown>> {
  if (esArtefacto) {
    const [uid, mid] = c.id.split(":");
    try {
      const d = await dbClaude();
      if (!d) return { ok: false, error: "No se pudo borrar." };
      const ref = d.doc("comentarios/" + uid);
      const doc = await ref.get();
      if (!doc.exists) return { ok: true, data: null };
      await ref.set({ msgs: mensajes(doc.data()).filter((m) => m.id !== mid) });
      return { ok: true, data: null };
    } catch (e) {
      return { ok: false, error: errorClaude(e) };
    }
  }
  return intentar((cl) => cl.from("comentarios").delete().eq("id", Number(c.id)));
}
