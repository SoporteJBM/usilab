/** TABLAS CLAVE: agrupadas por tema, con atajos y fotos cuando las hay. */
import { GRUPOS_TABLAS, TABLAS, type Tabla } from "../../content";
import { vista } from "../../lib/errores";
import { boton, irA, mk } from "../../lib/dom";
import { abrirPanel } from "../../ui/marco";
import { tiraDeFotos } from "../../ui/fotos";
import { pintarTabla } from "./apuntes";
import { encabezado } from "./comun";

function porGrupo(): [string, Tabla[]][] {
  const orden = [...GRUPOS_TABLAS, ...new Set(TABLAS.map((t) => t.grupo ?? "Otras"))].filter((g, i, a) => a.indexOf(g) === i);
  return orden.map((g) => [g, TABLAS.filter((t) => (t.grupo ?? "Otras") === g)] as [string, Tabla[]]).filter(([, l]) => l.length);
}

export const mostrarTablas = vista("las tablas", (grupo?: string) => {
  const p = abrirPanel("estudio");
  const grupos = porGrupo();
  const actual = grupos.find(([g]) => g === grupo) ?? grupos[0];
  encabezado(p, "Tablas clave", TABLAS.length + " tablas para comparar de un vistazo. Elige un tema.");

  const temas = mk("div", "chips tabla-temas");
  temas.setAttribute("role", "tablist");
  for (const [g, l] of grupos) {
    const b = boton(g + " · " + l.length, "chip" + (g === actual[0] ? " on" : ""), () => mostrarTablas(g));
    b.setAttribute("role", "tab");
    b.setAttribute("aria-selected", String(g === actual[0]));
    temas.append(b);
  }
  p.append(temas);

  const [, lista] = actual;
  if (lista.length > 3) {
    const atajos = mk("div", "chips tabla-atajos");
    lista.forEach((tb) => atajos.append(boton(tb.titulo, "chip ghost", () => irA("tabla-" + tb.id))));
    p.append(atajos);
  }
  for (const tb of lista) {
    const sec = mk("section", "tabla");
    sec.id = "tabla-" + tb.id;
    sec.append(mk("h3", null, tb.titulo));
    if (tb.nota) sec.append(mk("p", "note", tb.nota));
    if (tb.fotos?.length) sec.append(...tiraDeFotos(tb.fotos.map((f) => ({ archivo: f.archivo, fuente: f.fuente, etiqueta: f.pie }))));
    sec.append(pintarTabla(tb.columnas, tb.filas));
    p.append(sec);
  }
});
