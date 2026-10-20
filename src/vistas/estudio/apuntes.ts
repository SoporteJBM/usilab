/** APUNTES: la teoría de Tuberculosis, resistencia y micología, por clase y por microorganismo. */
import { APUNTES, type Apunte, type Bloque } from "../../content";
import { AppError, vista } from "../../lib/errores";
import { boton, botonTarjeta, mk } from "../../lib/dom";
import { textoRico } from "../../lib/texto-rico";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";
import { estaLeido, marcarLeido } from "../../estado/progreso";
import { leer, escribir } from "../../lib/almacen";
import { esAncho, vistaRepintable } from "../../ui/ancho";
import { icono } from "../../ui/secciones";
import { elegirNivel } from "../jugar/tablero";

/** Sección del juego donde se practica cada apunte. */
function seccionDe(a: Apunte): string {
  if (/tb|tuberculosis/.test(a.id)) return "tuberculosis";
  if (/resisten/.test(a.id)) return "resistencia";
  return "hongos";
}

/** Tamaño de letra de los apuntes (se recuerda en este dispositivo). */
const TAMANOS = [16, 17, 19, 21, 23];
const CLAVE_LETRA = "reto:letra-apunte";
function tamano(): number {
  const v = leer(CLAVE_LETRA);
  return typeof v === "number" && v >= 0 && v < TAMANOS.length ? v : esAncho() ? 2 : 1;
}

export const apunte = (id: string): Apunte | undefined => APUNTES.find((a) => a.id === id);

/** Grupos en el orden en que aparecen. */
function grupos(): [string, Apunte[]][] {
  const m = new Map<string, Apunte[]>();
  for (const a of APUNTES) m.set(a.grupo, [...(m.get(a.grupo) ?? []), a]);
  return [...m.entries()];
}

const DESCRIPCION_GRUPO: Record<string, string> = {
  "Clases de teoría": "Cada clase completa, con sus tablas. ⭐ marca lo que el profesor resalta como clave.",
  "Resumen por microorganismo": "Cada agente en el mismo orden: qué es, cómo se reconoce, cómo llega, cómo enferma, clínica, diagnóstico, tratamiento y lo que no debes olvidar.",
  "Comparar hongos": "Cómo separar los hongos que atacan la misma zona y las tablas generales para repasar todo junto.",
};

export const mostrarApuntes = vista("los apuntes", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Apuntes de teoría", "Tuberculosis, resistencia a los antibióticos y micología, explicados.");
  for (const [g, lista] of grupos()) {
    p.append(mk("h3", "grp", g));
    if (DESCRIPCION_GRUPO[g]) p.append(mk("p", "note", DESCRIPCION_GRUPO[g]));
    const grid = mk("div", "tools apuntes-lista");
    for (const a of lista) {
      const tablas = a.bloques.filter((b) => b.t === "tabla").length;
      grid.append(botonTarjeta("tool apunte-item", a.titulo, a.subtitulo || "", tablas ? tablas + (tablas === 1 ? " tabla" : " tablas") : null, () => mostrarApunte(a.id)));
    }
    p.append(grid);
  }
});

function pintarLista(b: Extract<Bloque, { t: "lista" }>): HTMLElement {
  const raiz = mk(b.orden ? "ol" : "ul", "ap-lista");
  let ultimo: HTMLElement | null = null;
  let sub: HTMLElement | null = null;
  for (const item of b.items) {
    const anidado = item.startsWith("  ");
    const li = mk("li");
    li.append(textoRico(item.trim()));
    if (anidado && ultimo) {
      if (!sub) { sub = mk("ul", "ap-sublista"); ultimo.append(sub); }
      sub.append(li);
    } else {
      raiz.append(li);
      ultimo = li;
      sub = null;
    }
  }
  return raiz;
}

function celda(tag: "th" | "td", texto: string, cls: string | null = null): HTMLElement {
  const c = mk(tag, cls);
  texto.split("\n").forEach((linea, i) => {
    if (i) c.append(mk("br"));
    c.append(textoRico(linea));
  });
  return c;
}

export function pintarTabla(columnas: string[], filas: string[][]): HTMLElement {
  const wrap = mk("div", "tablewrap");
  const table = mk("table", "kt");
  if (columnas.length) {
    const tr = mk("tr");
    columnas.forEach((c) => tr.append(celda("th", c)));
    table.append(tr);
  }
  filas.forEach((r) => {
    const tr = mk("tr");
    r.forEach((c, i) => tr.append(i ? celda("td", c) : celda("th", c, "rowh")));
    table.append(tr);
  });
  wrap.append(table);
  return wrap;
}

export function pintarBloques(bloques: Bloque[], prefijo: string): HTMLElement[] {
  let n = 0;
  return bloques.map((b) => {
    if (b.t === "h") { const h = mk("h3", "ap-sub"); h.id = prefijo + "-" + n++; h.append(textoRico(b.texto)); return h; }
    if (b.t === "p") { const x = mk("p", "ap-p"); x.append(textoRico(b.texto)); return x; }
    if (b.t === "lista") return pintarLista(b);
    return pintarTabla(b.columnas, b.filas);
  });
}

export const mostrarApunte = vista("el apunte", (id: string, volver: () => void = mostrarApuntes) => {
  const a = apunte(id);
  if (!a) throw new AppError("Ese apunte no existe.", "datos", id);
  const p = abrirPanel("estudio");
  encabezado(p, a.titulo, undefined, volver, volver === mostrarApuntes ? "← Apuntes" : "← Volver");
  p.querySelector("h2")?.classList.add("ap-titulo");
  p.insertBefore(mk("small", "ag-kicker", a.grupo + (a.subtitulo ? " · " + a.subtitulo : "")), p.querySelector("h2"));

  const subtitulos = a.bloques.filter((b): b is Extract<Bloque, { t: "h" }> => b.t === "h");
  if (subtitulos.length > 2) {
    const nav = mk("nav", "chips ap-indice");
    nav.setAttribute("aria-label", "Partes del apunte");
    subtitulos.forEach((s, i) => nav.append(boton(s.texto.replace(/\s*⭐/g, ""), "chip", () => document.getElementById("ap-" + i)?.scrollIntoView({ behavior: "smooth", block: "start" }))));
    p.append(nav);
  }
  if (a.bloques.some((b) => JSON.stringify(b).includes("⭐"))) p.append(mk("p", "note", "⭐ = lo que el profesor resalta como clave."));

  const cuerpo = mk("article", "apunte");
  cuerpo.append(...pintarBloques(a.bloques, "ap"));
  let t = tamano();
  const aplicarLetra = () => { cuerpo.style.setProperty("--ap-letra", TAMANOS[t] + "px"); menos.disabled = t === 0; mas.disabled = t === TAMANOS.length - 1; };
  const menos = boton("A−", "ap-letra", () => { t = Math.max(0, t - 1); escribir(CLAVE_LETRA, t); aplicarLetra(); });
  const mas = boton("A+", "ap-letra mas", () => { t = Math.min(TAMANOS.length - 1, t + 1); escribir(CLAVE_LETRA, t); aplicarLetra(); });
  menos.setAttribute("aria-label", "Letra más chica");
  mas.setAttribute("aria-label", "Letra más grande");
  aplicarLetra();

  // Herramientas: índice, tamaño de letra, marcar como leído y practicar (a la derecha en computadora).
  const herr = mk("aside", "ap-herr");
  herr.setAttribute("aria-label", "Herramientas del apunte");
  if (subtitulos.length) {
    const ind = mk("nav", "ap-en-este");
    ind.setAttribute("aria-label", "En este apunte");
    ind.append(mk("h3", null, "En este apunte"));
    subtitulos.forEach((x, k) => ind.append(boton(x.texto.replace(/\s*⭐/g, ""), "ap-salto", () => document.getElementById("ap-" + k)?.scrollIntoView({ behavior: "smooth", block: "start" }))));
    herr.append(ind);
  }
  const letra = mk("div", "ap-letras");
  letra.setAttribute("role", "group");
  letra.setAttribute("aria-label", "Tamaño de letra");
  letra.append(menos, mas);
  const leido = boton("", "ap-leido", () => { marcarLeido(a.id, !estaLeido(a.id)); pintarLeido(); });
  const pintarLeido = () => {
    const si = estaLeido(a.id);
    leido.replaceChildren(icono("check", 18), document.createTextNode(si ? "Leído" : "Marcar como leído"));
    leido.classList.toggle("on", si);
    leido.setAttribute("aria-pressed", String(si));
    document.querySelector(".ap-clases .ap-clase.actual .ap-marca")?.replaceChildren(document.createTextNode(si ? "✓" : ""));
  };
  pintarLeido();
  const st = seccionDe(a);
  herr.append(letra, leido, boton("Practica este tema", "primary ap-practicar", () => elegirNivel(st)));

  // Anterior y siguiente dentro del mismo grupo
  const lista = APUNTES.filter((x) => x.grupo === a.grupo);
  const i = lista.indexOf(a);
  const fila = mk("div", "row ap-nav");
  if (i > 0) fila.append(boton("← " + lista[i - 1].titulo, "ghost", () => mostrarApunte(lista[i - 1].id, volver)));
  if (i < lista.length - 1) fila.append(boton(lista[i + 1].titulo + " →", "primary", () => mostrarApunte(lista[i + 1].id, volver)));

  if (!esAncho()) { p.append(cuerpo, herr, fila); return; }

  // Computadora: lista de clases a la izquierda, texto al centro y herramientas a la derecha.
  vistaRepintable(() => mostrarApunte(id, volver));
  p.classList.add("apunte-ancho");
  const clases = mk("nav", "ap-clases");
  clases.setAttribute("aria-label", a.grupo);
  const leidas = lista.filter((x) => estaLeido(x.id)).length;
  clases.append(mk("p", "ap-clases-tit", a.grupo + " · " + leidas + " de " + lista.length + " leídas"));
  for (const x of lista) {
    const b = boton("", "ap-clase" + (x.id === a.id ? " actual" : ""), () => mostrarApunte(x.id, volver));
    if (x.id === a.id) b.setAttribute("aria-current", "page");
    b.append(mk("span", "ap-marca", estaLeido(x.id) ? "✓" : ""), mk("span", null, x.titulo));
    clases.append(b);
  }
  const centro = mk("div", "ap-centro");
  centro.append(...Array.from(p.childNodes), cuerpo, fila);
  p.replaceChildren(clases, centro, herr);
});
