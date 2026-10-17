/** ÍNDICE DEL CURSO: qué se ve en cada tema. Cada elemento muestra cuánto material hay sobre él. */
import { INDICE, PERFILES, type SeccionIndice } from "../../content";
import { cuantos, indiceBusqueda } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, irA, mk } from "../../lib/dom";
import { sinTildes } from "../../lib/texto";
import { abrirPanel } from "../../ui/marco";
import { abrirAgente } from "./agente";
import { encabezado } from "./comun";

export interface ItemConConteo { nombre: string; busqueda: string; n: number }

/** Grupos de una sección con solo los elementos que tienen material o ficha. */
export function gruposConMaterial(sec: SeccionIndice): { grupo: string; items: ItemConConteo[] }[] {
  const idx = indiceBusqueda();
  return sec.grupos
    .map((g) => ({ grupo: g.grupo, items: g.items.map((it) => ({ ...it, n: cuantos(it.busqueda, idx) })).filter((x) => x.n > 0 || PERFILES[x.nombre]) }))
    .filter((g) => g.items.length);
}

/** Lista de botones de agentes; cada uno abre su página. */
export function listaDeAgentes(items: ItemConConteo[], volver: () => void): HTMLElement {
  const ul = mk("div", "idx-items");
  for (const it of items) {
    const b = boton("", "idx-item", () => abrirAgente(it.nombre, volver));
    b.append(mk("span", null, it.nombre), mk("b", null, String(it.n)));
    b.setAttribute("aria-label", it.nombre + ": " + it.n + " elementos de estudio");
    ul.append(b);
  }
  return ul;
}

export const mostrarIndice = vista("el índice", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Índice del curso", "Todo lo que se ve en la página, por tema. El número dice cuánto material hay de cada uno; tócalo para verlo.");
  const nav = mk("div", "chips");
  INDICE.forEach((sec) => nav.append(boton(sec.titulo, "chip", () => irA("idx-" + sinTildes(sec.titulo)))));
  p.append(nav);
  for (const sec of INDICE) {
    const s = mk("section", "idx-sec");
    s.id = "idx-" + sinTildes(sec.titulo);
    const grupos = gruposConMaterial(sec);
    const total = grupos.reduce((n, g) => n + g.items.length, 0);
    const h = mk("h3", null, sec.titulo);
    h.append(mk("small", null, total + (sec.titulo === "Laboratorio" || sec.titulo === "Tratamientos" ? " temas" : " agentes")));
    s.append(h);
    for (const g of grupos) s.append(mk("h4", null, g.grupo), listaDeAgentes(g.items, mostrarIndice));
    p.append(s);
  }
});
