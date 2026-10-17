import { AGENTES_MICROSCOPIO } from "../../content";
import { fotosDe } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, miniatura, mk } from "../../lib/dom";
import { abrirPanel, verFoto } from "../../ui/marco";
import { mostrarCobertura } from "../jugar/microscopio";
import { encabezado } from "./comun";

export const mostrarFichas = vista("las fichas", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Fichas de microscopio", "Las fotos son del laboratorio de Mafer. Toca una foto para verla en grande.");
  let grupo = "";
  for (const ag of AGENTES_MICROSCOPIO) {
    if (ag.grupo !== grupo) { grupo = ag.grupo; p.append(mk("h3", "grp", grupo)); }
    const card = mk("div", "ficha-card");
    card.append(mk("strong", null, ag.nombre), mk("p", "key", "Clave: " + ag.clave));
    const fotos = fotosDe(ag.nombre);
    if (fotos.length) {
      const tira = mk("div", "strip");
      fotos.forEach((f) => tira.append(miniatura(f.archivo, ag.nombre, () => verFoto(f.archivo, ag.nombre))));
      card.append(tira);
    }
    const dl = mk("dl", "ficha");
    ([["Criterio", ag.criterio], ["Produce", ag.produce], ["Tratamiento", ag.tratamiento]] as const).forEach(([k, v]) => dl.append(mk("dt", null, k), mk("dd", null, v)));
    card.append(dl);
    p.append(card);
  }
  p.append(boton("Mapa de cobertura del microscopio", "ghost", () => mostrarCobertura(mostrarFichas, "estudio")));
});
