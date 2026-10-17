/** Buscador en todo el material. */
import { indiceBusqueda } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { sinTildes } from "../../lib/texto";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";

const MAX = 40;

/** Caja de búsqueda reutilizable. */
export function buscador(valor: string, id: string, placeholder: string, alBuscar: (t: string) => void): HTMLElement {
  const fila = mk("div", "search-row");
  const inp = mk("input", "search");
  inp.type = "search"; inp.id = id; inp.value = valor; inp.placeholder = placeholder;
  inp.maxLength = 80;
  inp.setAttribute("aria-label", "Buscar en el material de estudio");
  const ir = () => { const t = inp.value.trim(); if (t) alBuscar(t); };
  inp.onkeydown = (e) => { if (e.key === "Enter") ir(); };
  fila.append(inp, boton("Buscar", "primary", ir));
  return fila;
}

export function resultados(texto: string) {
  const palabras = sinTildes(texto).split(/\s+/).filter((w) => w.length > 1);
  if (!palabras.length) return [];
  return indiceBusqueda().filter((it) => {
    const h = sinTildes(it.titulo + " " + it.texto + " " + it.tipo);
    return palabras.every((w) => h.includes(w));
  });
}

export const buscar = vista("el buscador", (texto: string) => {
  const p = abrirPanel("estudio");
  encabezado(p, "Resultados");
  p.append(buscador(texto, "study-search-2", "Buscar", buscar));
  const res = resultados(texto);
  p.append(mk("p", "note", res.length
    ? res.length + " resultado" + (res.length === 1 ? "" : "s") + " para «" + texto + "»"
    : "Sin resultados para «" + texto + "». Prueba con otra palabra, por ejemplo el nombre del agente."));
  const lista = mk("div", "results");
  for (const it of res.slice(0, MAX)) {
    const c = mk("div", "result");
    c.append(mk("small", null, it.tipo), mk("strong", null, it.titulo), mk("p", "study", it.texto));
    lista.append(c);
  }
  if (res.length > MAX) lista.append(mk("p", "note", "Mostrando " + MAX + ". Escribe algo más específico para afinar."));
  p.append(lista);
});
