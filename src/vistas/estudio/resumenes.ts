import { CON_PREGUNTAS } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { dominadasDe } from "../../estado/progreso";
import { abrirPanel } from "../../ui/marco";
import { elegirNivel } from "../jugar/tablero";
import { encabezado } from "./comun";

export const mostrarResumenes = vista("los resúmenes", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Resúmenes por tema", "Toca un tema para abrirlo.");
  const lista = mk("div", "study-list");
  for (const st of CON_PREGUNTAS) {
    const d = mk("details", "topic");
    const tot = st.preguntas.length;
    d.append(mk("summary", null, st.nombre + (tot ? "  ·  " + dominadasDe(st.id) + "/" + tot + " dominadas" : "")));
    d.append(mk("p", "study", st.resumen));
    if (tot) d.append(boton("Practicar este tema", "ghost", () => elegirNivel(st.id)));
    lista.append(d);
  }
  p.append(lista);
});
