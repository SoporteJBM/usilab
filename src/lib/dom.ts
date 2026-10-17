import { AppError, protegido } from "./errores";

/** Busca un elemento que debe existir en index.html. */
export function $<T extends HTMLElement = HTMLElement>(selector: string): T {
  const el = document.querySelector<T>(selector);
  if (!el) throw new AppError("Falta una parte de la página. Recarga.", "interno", selector);
  return el;
}

/** Crea un elemento con clase y texto. El texto siempre va como textContent (nunca HTML). */
export function mk<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string | null, text?: string | null): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

/** Botón cuyo clic está protegido contra errores. */
export function boton(texto: string, cls: string | null, accion: (ev: MouseEvent) => unknown): HTMLButtonElement {
  const b = mk("button", cls, texto);
  b.type = "button";
  b.onclick = protegido(accion, "botón «" + texto + "»");
  return b;
}

/** Botón de dos líneas (título y detalle), usado en menús y tarjetas. */
export function botonTarjeta(cls: string, titulo: string, detalle: string, extra: string | null, accion: () => unknown): HTMLButtonElement {
  const b = mk("button", cls);
  b.type = "button";
  b.append(mk("strong", null, titulo), mk("span", null, detalle));
  if (extra != null) b.append(mk("small", null, extra));
  b.onclick = protegido(accion, titulo);
  return b;
}

/** Miniatura que abre la foto en grande. */
export function miniatura(src: string, etiqueta: string, abrir: () => void): HTMLButtonElement {
  const b = boton("", "thumb", abrir);
  b.setAttribute("aria-label", "Ver foto de " + etiqueta);
  const im = mk("img");
  im.src = src; im.alt = ""; im.loading = "lazy";
  im.onerror = () => { b.hidden = true; };
  b.append(im);
  return b;
}

export function irA(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
