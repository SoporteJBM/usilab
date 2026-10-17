import { TABLAS } from "../../content";
import { vista } from "../../lib/errores";
import { boton, irA, mk } from "../../lib/dom";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";

export const mostrarTablas = vista("las tablas", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Tablas clave", "Del material de las prácticas y del banco de laboratorio.");
  const chips = mk("div", "chips");
  TABLAS.forEach((tb) => chips.append(boton(tb.titulo, "chip", () => irA("tabla-" + tb.id))));
  p.append(chips);
  for (const tb of TABLAS) {
    const sec = mk("section", "tabla");
    sec.id = "tabla-" + tb.id;
    sec.append(mk("h3", null, tb.titulo));
    const wrap = mk("div", "tablewrap");
    const table = mk("table", "kt");
    const hr = mk("tr");
    tb.columnas.forEach((c) => hr.append(mk("th", null, c)));
    table.append(hr);
    tb.filas.forEach((r) => {
      const tr = mk("tr");
      r.forEach((c, i) => tr.append(mk(i ? "td" : "th", i ? null : "rowh", c)));
      table.append(tr);
    });
    wrap.append(table);
    sec.append(wrap);
    p.append(sec);
  }
});
