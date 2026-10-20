/**
 * Diseño para computadora (Propuesta A): desde 900 px de ancho hay menú lateral,
 * Inicio tipo tablero, Jugar en cuadrícula, preguntas en modo enfoque y apuntes en tres columnas.
 * En pantallas más angostas todo sigue igual que antes.
 */
export const CONSULTA_ANCHO = "(min-width: 900px)";

const mq = typeof window !== "undefined" && window.matchMedia ? window.matchMedia(CONSULTA_ANCHO) : null;

export const esAncho = (): boolean => Boolean(mq?.matches);

/** Avisa cuando se cruza el límite (p. ej. al agrandar la ventana) para volver a pintar la vista. */
export function alCambiarAncho(fn: () => void): void {
  mq?.addEventListener?.("change", () => fn());
}

/** Vista que se puede volver a pintar sin perder nada (Inicio, tablero, apunte). */
let repintar: (() => void) | null = null;
export function vistaRepintable(fn: (() => void) | null): void { repintar = fn; }
alCambiarAncho(() => { try { repintar?.(); } catch (e) { console.error("[reto] al repintar", e); } });
