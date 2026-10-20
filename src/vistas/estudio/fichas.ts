import { AGENTES_MICROSCOPIO } from "../../content";
import { fotosDe } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { abrirPanel } from "../../ui/marco";
import { tiraDeFotos } from "../../ui/fotos";
import { mostrarCobertura } from "../jugar/microscopio";
import { encabezado } from "./comun";

export const mostrarFichas = vista("las fichas", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Fichas de microscopio", "Fotos del laboratorio del curso y, marcadas con «Atlas», imágenes de referencia. Toca una foto para verla en grande.");
  let grupo = "";
  for (const ag of AGENTES_MICROSCOPIO) {
    if (ag.grupo !== grupo) { grupo = ag.grupo; p.append(mk("h3", "grp", grupo)); }
    const card = mk("div", "ficha-card");
    card.append(mk("strong", null, ag.nombre), mk("p", "key", "Clave: " + ag.clave));
    const fotos = fotosDe(ag.nombre);
    card.append(...tiraDeFotos(fotos.map((f) => ({ archivo: f.archivo, fuente: f.fuente, etiqueta: f.especie ?? ag.nombre })), false));
    const dl = mk("dl", "ficha");
    ([["Criterio", ag.criterio], ["Produce", ag.produce], ["Tratamiento", ag.tratamiento]] as const).forEach(([k, v]) => dl.append(mk("dt", null, k), mk("dd", null, v)));
    card.append(dl);
    p.append(card);
  }
  p.append(boton("Mapa de cobertura del microscopio", "ghost", () => mostrarCobertura(mostrarFichas, "estudio")));
});
