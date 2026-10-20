/** APUNTES: la teoría de Tuberculosis, resistencia y micología, por clase y por microorganismo. */
import { APUNTES, type Apunte, type Bloque } from "../../content";
import { AppError, vista } from "../../lib/errores";
import { boton, botonTarjeta, mk } from "../../lib/dom";
import { textoRico } from "../../lib/texto-rico";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";

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
  p.append(cuerpo);

  // Anterior y siguiente dentro del mismo grupo
  const lista = APUNTES.filter((x) => x.grupo === a.grupo);
  const i = lista.indexOf(a);
  const fila = mk("div", "row ap-nav");
  if (i > 0) fila.append(boton("← " + lista[i - 1].titulo, "ghost", () => mostrarApunte(lista[i - 1].id, volver)));
  if (i < lista.length - 1) fila.append(boton(lista[i + 1].titulo + " →", "primary", () => mostrarApunte(lista[i + 1].id, volver)));
  p.append(fila);
});
