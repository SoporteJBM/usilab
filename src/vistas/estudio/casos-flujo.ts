/**
 * CASOS CON FLUJOGRAMA: la solución de cada caso del «Flujograma con foto», con su flujograma modelo
 * y la explicación por criterio. Sirve para estudiar en cualquier versión de la página.
 */
import { AREAS_FLUJO, CRITERIOS_FLUJO, LOGICA_FLUJO, ORDEN_FLUJO } from "../../content";
import { AppError, vista } from "../../lib/errores";
import { boton, irA, mk } from "../../lib/dom";
import { hayCorrector } from "../../servicios/corrector";
import { abrirPanel } from "../../ui/marco";
import { casoFlujo, casosDeArea, dibujarFlujoGrafico, mejorNotaFlujo, nombreEnfermedad } from "../jugar/flujo-foto";
import { elegirModoFotoFlujo } from "../jugar/modos";
import { mostrarEstudio } from "./hub";

const NOMBRES = Object.fromEntries(CRITERIOS_FLUJO);

export const mostrarSolucionesFlujo = vista("los casos con flujograma", (volver: () => void = mostrarEstudio, area?: "virus" | "hongos") => {
  const p = abrirPanel("estudio");
  p.append(boton("← Volver", "ghost back", volver), mk("h2", null, "Casos con flujograma"));
  p.append(mk("p", "note", "La solución de cada caso, en el orden en que debe ir el flujograma: de la causa a la consecuencia." + (hayCorrector ? " Estúdiala y luego ponte a prueba con el Flujograma con foto." : "")));
  const areas = area ? [area] : (Object.keys(AREAS_FLUJO) as ("virus" | "hongos")[]);
  if (!area) {
    const nav = mk("div", "chips");
    areas.forEach((a) => nav.append(boton(AREAS_FLUJO[a].nombre, "chip", () => irA("fs-" + a))));
    p.append(nav);
  }
  const atras = () => mostrarSolucionesFlujo(volver, area);
  for (const a of areas) {
    const casos = casosDeArea(a);
    const t = mk("h3", "fs-area", AREAS_FLUJO[a].nombre + " · " + casos.length + " casos");
    t.id = "fs-" + a;
    const lista = mk("div", "results");
    for (const c of casos) {
      const r = mejorNotaFlujo(c.id);
      const card = boton("", "result fe-caso", () => mostrarSolucionFlujo(c.id, atras));
      card.append(mk("small", null, c.tema + " · " + nombreEnfermedad(c) + (r ? " · tu mejor nota " + r + "/20" : "")), mk("p", "study", c.caso));
      lista.append(card);
    }
    p.append(t, lista);
  }
});

export const mostrarSolucionFlujo = vista("la solución del caso", (id: string, volver: () => void) => {
  const c = casoFlujo(id);
  if (!c) throw new AppError("Ese caso no existe.", "datos", id);
  const p = abrirPanel("estudio");
  p.append(boton("← Volver", "ghost back", volver), mk("small", "ag-kicker", c.tema + " · solución"), mk("h2", null, nombreEnfermedad(c)));
  p.append(mk("p", "case", c.caso), dibujarFlujoGrafico(c));
  const exp = mk("details", "topic fs-exp");
  exp.append(mk("summary", null, "Explicación detallada por criterio"));
  const ol = mk("ol", "fs-flujo");
  ORDEN_FLUJO.forEach((k) => {
    const li = mk("li", "fs-" + k);
    li.append(mk("strong", null, NOMBRES[k]), mk("p", null, c.clave[k]));
    ol.append(li);
  });
  exp.append(ol);
  const logica = mk("section", "ag-sec x");
  logica.append(mk("h3", null, "Lógica del flujograma"), mk("p", null, LOGICA_FLUJO));
  p.append(exp, logica);
  if (hayCorrector) {
    const fila = mk("div", "row");
    fila.append(boton("Ponerme a prueba con este caso", "primary", () => elegirModoFotoFlujo(c.area, () => mostrarSolucionFlujo(id, volver), id)));
    p.append(fila);
  }
});
