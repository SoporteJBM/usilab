/** Partes fijas de la página: menú superior, marcador, panel principal y foto ampliada. */
import { $ } from "../lib/dom";
import { estado } from "../estado/progreso";

export type Seccion = "inicio" | "jugar" | "estudio" | "comentarios";

/** Cada vista que abre un temporizador (p. ej. comentarios) registra aquí cómo detenerlo. */
let alSalir: (() => void) | null = null;
export function alSalirDeVista(fn: () => void): void { alSalir = fn; }
function cerrarVistaAnterior(): void {
  if (!alSalir) return;
  const fn = alSalir; alSalir = null;
  try { fn(); } catch (e) { console.error("[reto] al salir de la vista", e); }
}

/** Marca la sección activa del menú superior (o lo oculta con null). */
export function marcarSeccion(s: Seccion | null): void {
  const nav = $("#topnav");
  nav.hidden = !s;
  nav.querySelectorAll<HTMLButtonElement>("button[data-k]").forEach((b) => {
    const on = b.dataset.k === s;
    b.classList.toggle("on", on);
    b.setAttribute("aria-current", on ? "page" : "false");
  });
}

/** Limpia y devuelve el panel principal, ocultando lo demás. */
export function abrirPanel(seccion: Seccion = "jugar", clase = ""): HTMLElement {
  cerrarVistaAnterior();
  $("#login").hidden = true;
  $("#home").hidden = true;
  marcarSeccion(seccion);
  const p = $("#panel");
  p.hidden = false;
  p.replaceChildren();
  p.className = "panel" + (clase ? " " + clase : "");
  window.scrollTo({ top: 0 });
  return p;
}

/** Muestra el tablero de estaciones (que no usa el panel). */
export function abrirTablero(): HTMLElement {
  cerrarVistaAnterior();
  $("#login").hidden = true;
  $("#panel").hidden = true;
  marcarSeccion("jugar");
  const h = $("#home");
  h.hidden = false;
  h.replaceChildren();
  return h;
}

export function abrirLogin(): HTMLElement {
  cerrarVistaAnterior();
  $("#panel").hidden = true;
  $("#home").hidden = true;
  $("#who").hidden = true;
  marcarSeccion(null);
  const l = $("#login");
  l.hidden = false;
  l.replaceChildren();
  return l;
}

export function pintarMarcador(): void {
  $("#score").textContent = String(Math.round(estado.puntos * 10) / 10);
  $("#streak").textContent = String(estado.racha);
}

export function pintarInsignia(n: number | null): void {
  const el = document.getElementById("nav-badge");
  if (el) el.textContent = n ? String(n) : "";
}

export { verFoto } from "./visor";
