/**
 * Acceso a Supabase. Todas las llamadas pasan por `intentar()`, que:
 * - nunca lanza: devuelve { ok, data } o { ok: false, error } con un mensaje en español;
 * - corta a los 12 s si el servidor no responde;
 * - detecta la falta de internet antes de llamar.
 */
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { CONFIG, hayCuentas } from "../config";
import { esErrorDeRed } from "../lib/errores";

let cliente: SupabaseClient | null | undefined;

/** Cliente único, o null si no hay base de datos configurada o no se pudo crear. */
export function db(): SupabaseClient | null {
  if (cliente !== undefined) return cliente;
  if (!hayCuentas) return (cliente = null);
  try {
    cliente = createClient(CONFIG.supabaseUrl, CONFIG.supabaseAnonKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });
  } catch (e) {
    console.error("[reto] no se pudo crear el cliente de Supabase", e);
    cliente = null;
  }
  return cliente;
}

export type Resultado<T> = { ok: true; data: T } | { ok: false; error: string; causa?: unknown };

interface ErrorSupabase { message?: string; code?: string; status?: number }
interface Respuesta { error: ErrorSupabase | null }

const SIN_RED = "Sin conexión. Revisa tu internet e inténtalo otra vez.";

/** Traduce los mensajes de Supabase (en inglés) a algo útil para el alumno. */
export function traducir(err: unknown): string {
  if (esErrorDeRed(err)) return SIN_RED;
  const e = (err ?? {}) as ErrorSupabase;
  const t = String(e.message || err || "");
  if (/Invalid login credentials/i.test(t)) return "Correo o contraseña incorrectos.";
  if (/Email not confirmed/i.test(t)) return "Primero confirma tu correo: revisa tu bandeja de entrada.";
  if (/already registered|already been registered|already exists/i.test(t)) return "Ese correo ya tiene cuenta. Usa la pestaña Entrar.";
  if (/rate limit|too many/i.test(t) || e.status === 429) return "Demasiados intentos. Espera unos minutos.";
  if (/Password should be|weak password/i.test(t)) return "La contraseña es muy débil. Usa al menos 8 caracteres.";
  if (/same password|different from the old/i.test(t)) return "La contraseña nueva debe ser distinta de la anterior.";
  if (/JWT|token.*expired|session.*missing|not authenticated/i.test(t) || e.status === 401) return "Tu sesión expiró. Vuelve a entrar.";
  if (/row-level security|permission denied/i.test(t) || e.code === "42501") return "No tienes permiso para hacer eso.";
  if (/violates check constraint/i.test(t)) return "El dato no es válido (revisa la longitud).";
  if (/timeout|tard/i.test(t)) return "El servidor tardó demasiado. Inténtalo otra vez.";
  return "No se pudo completar. Inténtalo otra vez.";
}

/**
 * Ejecuta una llamada a Supabase de forma segura.
 * `op` recibe el cliente y devuelve la promesa de Supabase ({ data, error, ... }).
 */
export async function intentar<R extends Respuesta>(op: (c: SupabaseClient) => PromiseLike<R>, ms = 12000): Promise<Resultado<Omit<R, "error">>> {
  const c = db();
  if (!c) return { ok: false, error: "El ingreso con cuenta no está configurado." };
  if (typeof navigator !== "undefined" && navigator.onLine === false) return { ok: false, error: SIN_RED };
  let reloj: ReturnType<typeof setTimeout> | undefined;
  try {
    const limite = new Promise<never>((_, rechazar) => { reloj = setTimeout(() => rechazar(new Error("timeout")), ms); });
    const r = await Promise.race([Promise.resolve(op(c)), limite]);
    if (r.error) return { ok: false, error: traducir(r.error), causa: r.error };
    const { error: _e, ...resto } = r;
    return { ok: true, data: resto };
  } catch (e) {
    console.warn("[reto] supabase", e);
    return { ok: false, error: traducir(e), causa: e };
  } finally {
    clearTimeout(reloj);
  }
}
