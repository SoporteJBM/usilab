/**
 * Sesión del alumno (cuenta o invitado) y sincronización del avance.
 *
 * - Invitado: el avance vive solo en localStorage.
 * - Cuenta: se guarda en localStorage al instante y en Supabase 1,5 s después (agrupando cambios).
 *   Si no hay internet, se reintenta al volver la conexión. Nunca se pierde lo local.
 */
import type { User } from "@supabase/supabase-js";
import { escribir, leer } from "../lib/almacen";
import { alCambiar, estado, reemplazar, sanear, totalDominadas, vacio } from "../estado/progreso";
import { db, intentar, type Resultado } from "./supabase";

export const CLAVE = "reto-micro-v4";

export const sesion = {
  usuario: null as User | null,
  apodo: "",
  modo: null as null | "cuenta" | "invitado",
  /** true cuando ya se sabe si hay sesión guardada */
  lista: false,
  /** true si se llegó desde el enlace de "olvidé mi contraseña" */
  recuperando: false,
};

const claveLocal = () => (sesion.modo === "cuenta" && sesion.usuario ? CLAVE + ":" + sesion.usuario.id : CLAVE);
const urlRegreso = () => location.origin + location.pathname;

// ---- Indicador "Guardando…" ----
function mostrarSync(t: string): void {
  const el = document.getElementById("sync");
  if (el) el.textContent = t;
}

// ---- Guardado ----
let reloj: ReturnType<typeof setTimeout> | undefined;
let sincronizando = false;
let pendiente = false;

alCambiar(() => {
  if (!sesion.modo) return;
  escribir(claveLocal(), estado);
  if (sesion.modo === "cuenta") {
    clearTimeout(reloj);
    reloj = setTimeout(() => void sincronizar(), 1500);
  }
});

/** Sube el avance a la cuenta. Si ya hay una subida en curso, encola otra al terminar. */
export async function sincronizar(): Promise<boolean> {
  if (sesion.modo !== "cuenta" || !sesion.usuario) return false;
  if (sincronizando) { pendiente = true; return false; }
  sincronizando = true;
  mostrarSync("Guardando…");
  const id = sesion.usuario.id;
  const r = await intentar((c) => c.from("progreso").upsert({
    user_id: id,
    estado: JSON.parse(JSON.stringify(estado)),
    puntos: Math.round(estado.puntos),
    dominadas: totalDominadas(),
    actualizado: new Date().toISOString(),
  }));
  mostrarSync(r.ok ? "Guardado en tu cuenta" : r.error.startsWith("Sin conexión") ? "Sin conexión: se guarda en este dispositivo" : "No se pudo guardar en tu cuenta: " + r.error);
  sincronizando = false;
  if (pendiente) { pendiente = false; return sincronizar(); }
  return r.ok;
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => { if (sesion.modo === "cuenta") void sincronizar(); });
  // Al cerrar o cambiar de pestaña, guarda lo pendiente.
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && sesion.modo === "cuenta" && reloj) { clearTimeout(reloj); reloj = undefined; void sincronizar(); }
  });
}

// ---- Entrar ----
/** Carga el avance y deja la sesión lista. Devuelve un aviso si algo no se pudo traer de la cuenta. */
export async function entrar(modo: "cuenta" | "invitado"): Promise<string | null> {
  sesion.modo = modo;
  let aviso: string | null = null;
  let datos = leer(claveLocal());
  if (modo === "cuenta" && sesion.usuario) {
    const id = sesion.usuario.id;
    const [prog, perfil] = await Promise.all([
      intentar((c) => c.from("progreso").select("estado").eq("user_id", id).maybeSingle()),
      intentar((c) => c.from("perfiles").select("apodo").eq("id", id).maybeSingle()),
    ]);
    const apodo = perfil.ok ? (perfil.data.data as { apodo?: string } | null)?.apodo : undefined;
    sesion.apodo = apodo || (sesion.usuario.email || "alumno").split("@")[0];
    if (prog.ok) {
      const remoto = sanear((prog.data.data as { estado?: unknown } | null)?.estado);
      const local = datos == null ? null : sanear(datos);
      // Se queda con el que tenga más puntos: así no se pierde lo jugado sin conexión.
      if (!local || remoto.puntos >= local.puntos) datos = remoto;
    } else {
      aviso = "No se pudo traer tu avance de la cuenta (" + prog.error + "). Usamos el de este dispositivo.";
    }
    // Primera vez con cuenta en este dispositivo: trae lo jugado como invitado.
    if (datos == null || sanear(datos).puntos === 0) {
      const invitado = leer(CLAVE);
      if (invitado != null && sanear(invitado).puntos > 0) datos = invitado;
    }
  }
  reemplazar(datos ?? vacio());
  if (modo === "cuenta") escribir(claveLocal(), estado);
  return aviso;
}

export async function salir(): Promise<void> {
  clearTimeout(reloj);
  if (sesion.modo === "cuenta") {
    await sincronizar();
    await intentar((c) => c.auth.signOut());
  }
  sesion.modo = null;
  sesion.usuario = null;
  sesion.apodo = "";
  reemplazar(vacio());
}

// ---- Autenticación ----
type Evento = "entro" | "recuperar" | "salio";

/** Revisa si hay sesión guardada y escucha los cambios (confirmación de correo, Google, recuperación). */
export async function iniciarAutenticacion(alEvento: (e: Evento) => void): Promise<void> {
  const c = db();
  if (c) {
    try {
      c.auth.onAuthStateChange((evento, s) => {
        try {
          if (evento === "PASSWORD_RECOVERY") { sesion.recuperando = true; sesion.usuario = s?.user ?? null; alEvento("recuperar"); return; }
          if (evento === "SIGNED_IN" && s && !sesion.modo && !sesion.recuperando) { sesion.usuario = s.user; alEvento("entro"); }
          if (evento === "SIGNED_OUT") { sesion.usuario = null; }
        } catch (e) { console.error("[reto] evento de sesión", e); }
      });
    } catch (e) { console.error("[reto] onAuthStateChange", e); }
    const r = await intentar((cl) => cl.auth.getSession(), 8000);
    sesion.usuario = r.ok ? r.data.data.session?.user ?? null : null;
  }
  sesion.lista = true;
}

const correoValido = (s: string) => /^\S+@\S+\.\S+$/.test(s);
const falla = (error: string): Resultado<never> => ({ ok: false, error });

export async function entrarConCorreo(email: string, pw: string): Promise<Resultado<unknown>> {
  if (!correoValido(email)) return falla("Escribe un correo válido.");
  if (!pw) return falla("Escribe tu contraseña.");
  const r = await intentar((c) => c.auth.signInWithPassword({ email, password: pw }));
  if (r.ok && r.data.data.user) sesion.usuario = r.data.data.user;
  return r;
}

/** ok + `confirmar: true` cuando falta abrir el correo de confirmación. */
export async function crearCuenta(apodo: string, email: string, pw: string): Promise<Resultado<{ confirmar: boolean }>> {
  if (apodo.length < 2 || apodo.length > 30) return falla("El apodo debe tener entre 2 y 30 caracteres.");
  if (!correoValido(email)) return falla("Escribe un correo válido.");
  if (pw.length < 8) return falla("La contraseña debe tener al menos 8 caracteres.");
  const r = await intentar((c) => c.auth.signUp({ email, password: pw, options: { data: { apodo }, emailRedirectTo: urlRegreso() } }));
  if (!r.ok) return r;
  if (r.data.data.session) sesion.usuario = r.data.data.session.user;
  return { ok: true, data: { confirmar: !r.data.data.session } };
}

export async function olvideContrasena(email: string): Promise<Resultado<unknown>> {
  if (!correoValido(email)) return falla("Escribe tu correo arriba y vuelve a tocar aquí.");
  return intentar((c) => c.auth.resetPasswordForEmail(email, { redirectTo: urlRegreso() }));
}

export async function nuevaContrasena(pw: string): Promise<Resultado<unknown>> {
  if (pw.length < 8) return falla("La contraseña debe tener al menos 8 caracteres.");
  const r = await intentar((c) => c.auth.updateUser({ password: pw }));
  if (r.ok) sesion.recuperando = false;
  return r;
}

export async function entrarConGoogle(): Promise<Resultado<unknown>> {
  return intentar((c) => c.auth.signInWithOAuth({ provider: "google", options: { redirectTo: urlRegreso() } }));
}
