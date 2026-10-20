/**
 * Formulario "¿Cómo mejoramos MiUsiLab?".
 *
 * TODAVÍA NO SE GUARDA EN LA BASE DE DATOS: `enviarSugerencia` valida y simula el envío.
 * Para conectarlo, crear la tabla `sugerencias` en Supabase (cualquiera puede insertar,
 * solo el dueño puede leer) y reemplazar el cuerpo marcado con TODO por un insert con `intentar()`.
 */
import type { Resultado } from "./supabase";

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
  // TODO(base de datos): reemplazar por
  //   return intentar((c) => c.from("sugerencias").insert({ ...s }));
  console.info("[reto] sugerencia (aún sin base de datos)", s);
  await new Promise((r) => setTimeout(r, 300));
  return { ok: true, data: null };
}
