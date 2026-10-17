/**
 * Manejo central de errores.
 *
 * Regla: ninguna acción del usuario debe dejar la página congelada o en blanco.
 * - `protegido(fn)` envuelve manejadores de eventos (botones, formularios).
 * - `vista(fn)` envuelve pantallas completas: si fallan, muestra una pantalla de rescate.
 * - `instalarManejadoresGlobales()` atrapa lo que se escape (errores y promesas sin catch).
 * Todo termina en `reportar()`, que registra el detalle en consola y muestra un aviso corto en español.
 */

export type TipoError = "red" | "auth" | "datos" | "permiso" | "interno";

/** Error con un mensaje pensado para mostrarse al alumno. */
export class AppError extends Error {
  constructor(
    public readonly mensaje: string,
    public readonly tipo: TipoError = "interno",
    public readonly causa?: unknown,
  ) {
    super(mensaje);
    this.name = "AppError";
  }
}

const GENERICO = "Algo salió mal. Si se repite, recarga la página.";

export function esErrorDeRed(err: unknown): boolean {
  if (typeof navigator !== "undefined" && navigator.onLine === false) return true;
  const m = err instanceof Error ? err.message : String(err ?? "");
  return /failed to fetch|networkerror|network request failed|load failed|fetch failed/i.test(m);
}

/** Convierte cualquier error en un texto que el alumno pueda entender. */
export function mensajeDe(err: unknown): string {
  if (err instanceof AppError) return err.mensaje;
  if (esErrorDeRed(err)) return "Sin conexión. Revisa tu internet e inténtalo otra vez.";
  return GENERICO;
}

// ---- Aviso flotante (toast) ----
let temporizador: ReturnType<typeof setTimeout> | undefined;
export function avisar(texto: string, tipo: "error" | "ok" | "info" = "error"): void {
  try {
    let t = document.getElementById("aviso");
    if (!t) {
      t = document.createElement("div");
      t.id = "aviso";
      t.setAttribute("role", "status");
      t.setAttribute("aria-live", "polite");
      document.body.append(t);
    }
    t.textContent = texto;
    t.className = "aviso " + tipo;
    t.hidden = false;
    clearTimeout(temporizador);
    temporizador = setTimeout(() => { if (t) t.hidden = true; }, 5000);
    t.onclick = () => { if (t) t.hidden = true; };
  } catch {
    /* Si ni el DOM está disponible, solo queda la consola. */
  }
}

// Evita mostrar el mismo aviso diez veces seguidas si un error se repite en bucle.
let ultimo = { texto: "", t: 0 };

/** Registra el error y avisa al alumno. Nunca lanza. */
export function reportar(err: unknown, contexto = ""): void {
  try {
    console.error("[reto]" + (contexto ? " " + contexto + ":" : ""), err);
    const texto = mensajeDe(err);
    const ahora = Date.now();
    if (texto === ultimo.texto && ahora - ultimo.t < 3000) return;
    ultimo = { texto, t: ahora };
    avisar(texto, "error");
  } catch {
    /* nada */
  }
}

type Fn<A extends unknown[]> = (...args: A) => unknown;

/** Envuelve un manejador: atrapa errores síncronos y promesas rechazadas. */
export function protegido<A extends unknown[]>(fn: Fn<A>, contexto = ""): (...args: A) => void {
  return (...args: A) => {
    try {
      const r = fn(...args);
      if (r && typeof (r as Promise<unknown>).then === "function") {
        (r as Promise<unknown>).catch((e) => reportar(e, contexto));
      }
    } catch (e) {
      reportar(e, contexto);
    }
  };
}

// La pantalla de rescate necesita volver al inicio, pero errores.ts no debe importar vistas.
let irAlInicio: () => void = () => location.reload();
export function definirRescate(fn: () => void): void { irAlInicio = fn; }

/** Pantalla que reemplaza a una vista que falló al dibujarse. */
export function pantallaDeRescate(nombre: string): void {
  try {
    const p = document.getElementById("panel");
    if (!p) return;
    for (const id of ["home", "login"]) { const el = document.getElementById(id); if (el) el.hidden = true; }
    p.hidden = false;
    p.className = "panel rescate";
    p.replaceChildren();
    const h = document.createElement("h2");
    h.textContent = "No se pudo abrir " + nombre;
    const t = document.createElement("p");
    t.textContent = "Tu avance está a salvo. Vuelve al inicio o recarga la página.";
    const fila = document.createElement("div");
    fila.className = "row";
    const ini = document.createElement("button");
    ini.type = "button"; ini.className = "primary"; ini.textContent = "Ir al inicio";
    ini.onclick = () => { try { irAlInicio(); } catch { location.reload(); } };
    const rec = document.createElement("button");
    rec.type = "button"; rec.className = "ghost"; rec.textContent = "Recargar";
    rec.onclick = () => location.reload();
    fila.append(ini, rec);
    p.append(h, t, fila);
  } catch {
    /* nada */
  }
}

/** Envuelve una pantalla completa: si falla al dibujarse, muestra la pantalla de rescate. */
export function vista<A extends unknown[]>(nombre: string, fn: (...args: A) => void | Promise<void>): (...args: A) => void {
  return (...args: A) => {
    const fallar = (e: unknown) => { reportar(e, "vista " + nombre); pantallaDeRescate(nombre); };
    try {
      const r = fn(...args);
      if (r && typeof r.then === "function") r.catch(fallar);
    } catch (e) {
      fallar(e);
    }
  };
}

/** Último recurso: lo que nadie atrapó. */
export function instalarManejadoresGlobales(): void {
  window.addEventListener("error", (ev) => {
    // Errores de recursos (una imagen que no carga) no traen `error`: no merecen aviso.
    if (!ev.error) return;
    reportar(ev.error, "global");
  });
  window.addEventListener("unhandledrejection", (ev) => {
    reportar(ev.reason, "promesa");
  });
}
