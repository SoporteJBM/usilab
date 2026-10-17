import { PARES } from "../../content";
import { agente, fotosDe } from "../../catalogo";
import { vista } from "../../lib/errores";
import { miniatura, mk } from "../../lib/dom";
import { abrirPanel, verFoto } from "../../ui/marco";
import { encabezado } from "./comun";

export const mostrarNoConfundir = vista("No confundir", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "No confundir", "Lee la diferencia y fíjate en la clave de cada uno.");
  for (const par of PARES) {
    const caja = mk("div", "par");
    const cols = mk("div", "par-cols");
    for (const n of [par.a, par.b]) {
      const ag = agente(n);
      const c = mk("div", "par-col");
      c.append(mk("strong", null, n));
      const f = fotosDe(n)[0];
      if (f) c.append(miniatura(f.archivo, n, () => verFoto(f.archivo, n)));
      c.append(mk("p", "key", ag?.clave ?? ""), mk("p", "small-text", ag?.criterio ?? ""));
      cols.append(c);
    }
    caja.append(cols, mk("p", "dif", par.diferencia));
    p.append(caja);
  }
});
