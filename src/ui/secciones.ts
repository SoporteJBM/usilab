/** Color, ícono y grupo de cada sección (diseño para computadora). El color vive en CSS: clase «sec-<id>». */

export type Grupo = "micro" | "lab" | "tb";

export const GRUPOS: { clave: Grupo | "todas"; nombre: string }[] = [
  { clave: "todas", nombre: "Todas" },
  { clave: "micro", nombre: "Microorganismos" },
  { clave: "lab", nombre: "Laboratorio y tratamiento" },
  { clave: "tb", nombre: "TB y resistencia" },
];

/** Trazos de cada ícono (SVG 24×24, solo líneas). */
const ICONOS: Record<string, string> = {
  bacterias: "M8 6h8a4 4 0 0 1 0 12H8a4 4 0 0 1 0-12zM4 12H2M22 12h-2",
  hongos: "M12 21V11M12 11c-3 0-6-2-6-5h12c0 3-3 5-6 5zM12 11l-4 4M12 14l4 3",
  virus: "M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10zM12 2v5M12 17v5M2 12h5M17 12h5M5 5l3.5 3.5M15.5 15.5L19 19M19 5l-3.5 3.5M8.5 15.5L5 19",
  parasitos: "M5 18c0-6 4-6 6-6s6 0 6-6M5 18a2 2 0 1 0 0 .1M17 6a2 2 0 1 0 0 .1",
  laboratorio: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7 15h10",
  tratamientos: "M10.5 20.5a5 5 0 0 1-7-7l7-7a5 5 0 0 1 7 7zM7 10l7 7",
  tuberculosis: "M12 3v18M8 7c-3 1-4 5-4 9 2 1 5 0 6-3M16 7c3 1 4 5 4 9-2 1-5 0-6-3",
  resistencia: "M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z",
  casos: "M4 21v-2a4 4 0 0 1 4-4h4M10 3a4 4 0 1 0 0 8a4 4 0 1 0 0-8M18 14v6M15 17h6",
  microscopio: "M6 21h12M9 17h6M12 17v-4M10 3h4M11 3v4l-3 6 4 2 3-6-2-2",
  contagio: "M6 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6M18 3a3 3 0 1 0 0 6a3 3 0 1 0 0-6M18 15a3 3 0 1 0 0 6a3 3 0 1 0 0-6M8.6 10.5l6.8-3M8.6 13.5l6.8 3",
  "entrenador-virus": "M4 12h3l3-7 4 14 3-7h3",
  "flujo-foto": "M4 7h4l2-3h4l2 3h4v12H4zM12 10a3 3 0 1 0 0 6a3 3 0 1 0 0-6",
  inicio: "M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
  jugar: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  estudio: "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z",
  tarjetas: "M3 6h14v14H3zM7 3h12a2 2 0 0 1 2 2v12",
  comentarios: "M4 5h16v11H9l-5 4z",
  buscar: "M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14M20 20l-4-4",
  racha: "M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-6 2 1 3 0 3-4z",
  libro: "M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4zM20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z",
  check: "M5 12l5 5 9-10",
  cerrar: "M6 6l12 12M18 6L6 18",
};

export const GRUPO_DE: Record<string, Grupo> = {
  bacterias: "micro", hongos: "micro", virus: "micro", parasitos: "micro",
  laboratorio: "lab", tratamientos: "lab",
  tuberculosis: "tb", resistencia: "tb",
};

/** Ícono de líneas que toma el color del texto (currentColor). */
export function icono(nombre: string, tam = 24): SVGSVGElement {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("width", String(tam)); svg.setAttribute("height", String(tam));
  svg.setAttribute("viewBox", "0 0 24 24"); svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor"); svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round"); svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("aria-hidden", "true");
  const p = document.createElementNS(ns, "path");
  p.setAttribute("d", ICONOS[nombre] ?? ICONOS.libro);
  svg.append(p);
  return svg;
}

/** Anillo de avance (0 a 1). `texto` va al centro; `etiqueta` es lo que oye un lector de pantalla. */
export function anillo(fraccion: number, tam: number, grosor: number, texto: string, etiqueta: string, cls = ""): SVGSVGElement {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  const r = (tam - grosor) / 2;
  const c = 2 * Math.PI * r;
  const f = Math.max(0, Math.min(1, fraccion));
  svg.setAttribute("width", String(tam)); svg.setAttribute("height", String(tam));
  svg.setAttribute("viewBox", "0 0 " + tam + " " + tam);
  svg.setAttribute("role", "img"); svg.setAttribute("aria-label", etiqueta);
  svg.setAttribute("class", "anillo " + cls);
  const fondo = document.createElementNS(ns, "circle");
  const arco = document.createElementNS(ns, "circle");
  for (const el of [fondo, arco]) {
    el.setAttribute("cx", String(tam / 2)); el.setAttribute("cy", String(tam / 2)); el.setAttribute("r", String(r));
    el.setAttribute("fill", "none"); el.setAttribute("stroke-width", String(grosor));
  }
  fondo.setAttribute("class", "an-fondo");
  arco.setAttribute("class", "an-arco");
  arco.setAttribute("stroke-linecap", "round");
  arco.setAttribute("stroke-dasharray", (c * f).toFixed(1) + " " + c.toFixed(1));
  arco.setAttribute("transform", "rotate(-90 " + tam / 2 + " " + tam / 2 + ")");
  if (f === 0) arco.setAttribute("stroke-opacity", "0");
  const t = document.createElementNS(ns, "text");
  t.setAttribute("x", String(tam / 2)); t.setAttribute("y", String(tam / 2));
  t.setAttribute("text-anchor", "middle"); t.setAttribute("dominant-baseline", "central");
  t.setAttribute("class", "an-texto");
  t.textContent = texto;
  svg.append(fondo, arco, t);
  return svg;
}
