/**
 * Formulario "¿Cómo mejoramos MiUsiLab?".
 *
 * TODAVÍA NO SE GUARDA EN LA BASE DE DATOS: `enviarSugerencia` valida y simula el envío.
 * Para conectarlo, crear la tabla `sugerencias` en Supabase (cualquiera puede insertar,
 * solo el dueño puede leer) y reemplazar el cuerpo marcado con TODO por un insert con `intentar()`.
 */
import type { Resultado } from "./supabase";
import { esArtefacto } from "../config";
import { dbClaude, errorClaude, perfiles } from "./claude";
import { sesion } from "./sesion";

export const MAX_TEXTO = 600;

export const SECCIONES = ["Jugar", "Microscopio", "Ahorcado", "Casos clínicos", "Estudio", "Mis errores"] as const;
export const TEMAS_MEJORA = ["Preguntas", "Dificultad", "Microscopio", "Ahorcado", "Casos clínicos", "Zona de estudio", "Diseño", "Velocidad", "Otro"] as const;
export const RECOMENDARIA = ["Sí", "Tal vez", "No"] as const;

export interface Sugerencia {
  utilidad: number | null;          // 1 a 5
  seccionFavorita: string | null;
  mejorar: string[];
  temaNuevo: string;
  cambios: string;
  problemas: string;
  recomendaria: string | null;
  nombre: string;                   // opcional
  enviado: string;                  // ISO
}

/** Revisa que haya al menos una respuesta y que los textos no pasen el límite. */
export function validar(s: Sugerencia): string | null {
  const algo = s.utilidad || s.seccionFavorita || s.mejorar.length || s.temaNuevo || s.cambios || s.problemas || s.recomendaria;
  if (!algo) return "Responde al menos una pregunta antes de enviar.";
  if (s.utilidad != null && (s.utilidad < 1 || s.utilidad > 5)) return "La utilidad va del 1 al 5.";
  for (const t of [s.temaNuevo, s.cambios, s.problemas]) if (t.length > MAX_TEXTO) return "Cada respuesta puede tener hasta " + MAX_TEXTO + " caracteres.";
  if (s.nombre.length > 60) return "El nombre puede tener hasta 60 caracteres.";
  return null;
}

export async function enviarSugerencia(s: Sugerencia): Promise<Resultado<null>> {
  const error = validar(s);
  if (error) return { ok: false, error };
  if (esArtefacto) {
    // Artefacto: cada persona guarda sus envíos en sugerencias/<su id>; solo el dueño los lee todos.
    const id = sesion.claude?.id;
    if (!id) return { ok: false, error: "Abre la página con tu cuenta de Claude para poder enviar sugerencias." };
    try {
      const d = await dbClaude();
      if (!d) return { ok: false, error: "No se pudo enviar. Inténtalo otra vez." };
      const ref = d.doc("sugerencias/" + id);
      const doc = await ref.get();
      const previos = Array.isArray(doc.data()?.envios) ? (doc.data()!.envios as unknown[]) : [];
      await ref.set({ envios: [...previos, { ...s, t: Date.now() }].slice(-20) });
      return { ok: true, data: null };
    } catch (e) {
      return { ok: false, error: errorClaude(e) };
    }
  }
  // TODO(base de datos): reemplazar por
  //   return intentar((c) => c.from("sugerencias").insert({ ...s }));
  console.info("[reto] sugerencia (aún sin base de datos)", s);
  await new Promise((r) => setTimeout(r, 300));
  return { ok: true, data: null };
}

/** Sugerencia tal como llega a la bandeja del dueño (incluye el formato antiguo del artefacto). */
export interface SugerenciaRecibida { autor: string; t: number; utilidad: number | null; partes: [string, string][] }

/** Solo el dueño del artefacto: todas las sugerencias, las más nuevas primero. */
export async function sugerenciasRecibidas(): Promise<Resultado<SugerenciaRecibida[]>> {
  if (!esArtefacto) return { ok: false, error: "Disponible cuando se configure la base de datos." };
  try {
    const d = await dbClaude();
    if (!d) return { ok: false, error: "No se pudieron cargar." };
    const snap = await d.collection("sugerencias").get();
    const out: (SugerenciaRecibida & { uid: string })[] = [];
    for (const doc of snap.docs) {
      const envios = (doc.data()?.envios ?? []) as Record<string, unknown>[];
      if (!Array.isArray(envios)) continue;
      for (const e of envios) {
        if (!e || typeof e !== "object") continue;
        const txt = (v: unknown) => (typeof v === "string" ? v.trim() : Array.isArray(v) ? v.join(", ") : "");
        const partes: [string, string][] = ([
          ["Sección que más usa", txt(e.seccionFavorita)],
          ["Mejorar", txt(e.mejorar ?? e.temas)],
          ["Tema nuevo", txt(e.temaNuevo)],
          ["Cambiaría o agregaría", txt(e.cambios ?? e.mejora)],
          ["No funcionó o fue confuso", txt(e.problemas ?? e.falla)],
          ["¿La recomendaría?", txt(e.recomendaria)],
          ["Nombre", txt(e.nombre)],
        ] as [string, string][]).filter(([, v]) => v);
        const utilidad = Number(e.utilidad ?? e.nota) || null;
        out.push({ uid: doc.id, autor: "", t: Number(e.t) || Date.parse(String(e.enviado)) || 0, utilidad, partes });
      }
    }
    const ps = await perfiles([...new Set(out.map((x) => x.uid))]);
    out.forEach((x) => { x.autor = ps[x.uid]?.name || "Alumno"; });
    return { ok: true, data: out.sort((a, b) => b.t - a.t) };
  } catch (e) {
    return { ok: false, error: errorClaude(e) };
  }
}
