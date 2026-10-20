/**
 * Visor de fotos a pantalla completa con zoom: pellizcar, rueda del mouse, doble toque
 * o botones; arrastrar cuando está acercada. Se cierra con «Cerrar», Esc o tocando fuera de la foto.
 */
import { mk } from "../lib/dom";

const ZOOM_MAX = 6;

export function verFoto(src: string, titulo: string): void {
  document.getElementById("lightbox")?.remove();
  const v = mk("div", "lightbox");
  v.id = "lightbox";
  v.setAttribute("role", "dialog");
  v.setAttribute("aria-modal", "true");
  v.setAttribute("aria-label", titulo || "Foto ampliada");

  const escena = mk("div", "lb-stage");
  const im = mk("img");
  im.src = src; im.alt = titulo || ""; im.draggable = false;
  im.onerror = () => { escena.replaceChildren(mk("p", null, "No se pudo cargar la foto.")); };
  escena.append(im);

  const barra = mk("div", "lb-bar");
  const menos = mk("button", null, "−"), mas = mk("button", null, "+"), ajustar = mk("button", null, "Ajustar"), cerrar = mk("button", "lb-cerrar", "Cerrar ✕");
  [menos, mas, ajustar, cerrar].forEach((b) => { b.type = "button"; });
  menos.setAttribute("aria-label", "Alejar");
  mas.setAttribute("aria-label", "Acercar");
  barra.append(menos, mas, ajustar, cerrar);
  v.append(escena, barra, mk("p", null, (titulo ? titulo + " · " : "") + "Pellizca, usa la rueda o toca dos veces para acercar"));
  document.body.append(v);

  let z = 1, x = 0, y = 0;
  const limitar = () => {
    const r = escena.getBoundingClientRect();
    const mx = Math.max(0, (im.offsetWidth * z - r.width) / 2), my = Math.max(0, (im.offsetHeight * z - r.height) / 2);
    x = Math.min(mx, Math.max(-mx, x));
    y = Math.min(my, Math.max(-my, y));
  };
  const pintar = () => { limitar(); im.style.transform = "translate(" + x + "px," + y + "px) scale(" + z + ")"; escena.classList.toggle("zoom", z > 1); };
  /** Acerca manteniendo fijo el punto (px, py), medido desde el centro de la escena. */
  const zoomEn = (nz: number, px = 0, py = 0) => {
    nz = Math.min(ZOOM_MAX, Math.max(1, nz));
    x = px - (px - x) * (nz / z);
    y = py - (py - y) * (nz / z);
    z = nz;
    if (z === 1) { x = 0; y = 0; }
    pintar();
  };
  const centro = (cx: number, cy: number): [number, number] => { const r = escena.getBoundingClientRect(); return [cx - r.left - r.width / 2, cy - r.top - r.height / 2]; };

  const teclas = (e: KeyboardEvent) => {
    if (e.key === "Escape") salir();
    else if (e.key === "+" || e.key === "=") zoomEn(z * 1.6);
    else if (e.key === "-") zoomEn(z / 1.6);
  };
  const salir = () => { v.remove(); document.removeEventListener("keydown", teclas); };
  document.addEventListener("keydown", teclas);
  menos.onclick = () => zoomEn(z / 1.6);
  mas.onclick = () => zoomEn(z * 1.6);
  ajustar.onclick = () => zoomEn(1);
  cerrar.onclick = salir;
  escena.addEventListener("wheel", (e) => { e.preventDefault(); const [px, py] = centro(e.clientX, e.clientY); zoomEn(z * (e.deltaY < 0 ? 1.25 : 0.8), px, py); }, { passive: false });

  // Arrastre, pellizco y doble toque con pointer events (sirve igual para dedo y mouse).
  const punteros = new Map<number, [number, number]>();
  let pellizco: { d: number; z: number; c: [number, number] } | null = null;
  let movido = false, ultimoToque = 0;
  let cierre: ReturnType<typeof setTimeout> | undefined;
  const sobreFoto = (cx: number, cy: number) => { const r = im.getBoundingClientRect(); return cx >= r.left && cx <= r.right && cy >= r.top && cy <= r.bottom; };
  escena.addEventListener("pointerdown", (e) => {
    escena.setPointerCapture(e.pointerId);
    punteros.set(e.pointerId, [e.clientX, e.clientY]);
    movido = false;
    if (punteros.size === 2) {
      const [a, b] = [...punteros.values()];
      pellizco = { d: Math.hypot(a[0] - b[0], a[1] - b[1]), z, c: centro((a[0] + b[0]) / 2, (a[1] + b[1]) / 2) };
    }
  });
  escena.addEventListener("pointermove", (e) => {
    const previo = punteros.get(e.pointerId);
    if (!previo) return;
    punteros.set(e.pointerId, [e.clientX, e.clientY]);
    if (punteros.size === 2 && pellizco) {
      const [a, b] = [...punteros.values()];
      zoomEn(pellizco.z * Math.hypot(a[0] - b[0], a[1] - b[1]) / pellizco.d, pellizco.c[0], pellizco.c[1]);
      movido = true;
    } else if (punteros.size === 1 && z > 1) {
      x += e.clientX - previo[0];
      y += e.clientY - previo[1];
      pintar();
      if (Math.abs(e.clientX - previo[0]) + Math.abs(e.clientY - previo[1]) > 2) movido = true;
    }
  });
  const soltar = (e: PointerEvent) => {
    const unico = punteros.size === 1;
    punteros.delete(e.pointerId);
    if (punteros.size < 2) pellizco = null;
    if (e.type !== "pointerup" || !unico || movido) return;
    const ahora = Date.now();
    if (ahora - ultimoToque < 320) {
      clearTimeout(cierre);
      ultimoToque = 0;
      const [px, py] = centro(e.clientX, e.clientY);
      zoomEn(z > 1 ? 1 : 2.5, px, py);
    } else {
      ultimoToque = ahora;
      if (z === 1 && !sobreFoto(e.clientX, e.clientY)) cierre = setTimeout(salir, 330);
    }
  };
  escena.addEventListener("pointerup", soltar);
  escena.addEventListener("pointercancel", soltar);
  cerrar.focus({ preventScroll: true });
}

/** Hace que una imagen se pueda tocar para abrirla en el visor. */
export function ampliable(img: HTMLImageElement, titulo: string): HTMLImageElement {
  img.classList.add("ampliable");
  img.tabIndex = 0;
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", "Ver la foto en detalle");
  img.title = "Toca para ver en detalle";
  img.onclick = () => verFoto(img.src, titulo);
  img.onkeydown = (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); verFoto(img.src, titulo); } };
  return img;
}
