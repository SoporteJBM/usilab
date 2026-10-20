/** Página de un agente: todo lo que hay sobre él (ficha, fotos, pares, preguntas). */
import { INDICE, PARES, PERFILES, type Perfil } from "../../content";
import { agente, busquedaDe, fotosDe, todasLasPreguntas } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, miniatura, mk } from "../../lib/dom";
import { sinTildes } from "../../lib/texto";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel, verFoto } from "../../ui/marco";
import { aItem, jugarPreguntas } from "../jugar/quiz";
import { buscar } from "./buscador";
import { mostrarEstudio } from "./hub";

const SECCIONES: [keyof Perfil, string, string][] = [
  ["queEs", "Qué es", "q"], ["reconoce", "Cómo se reconoce", "r"], ["produce", "Qué produce", "p"],
  ["contagio", "Cómo se contagia", "c"], ["diagnostico", "Diagnóstico", "d"], ["tratamiento", "Tratamiento", "t"], ["datoExamen", "Dato de examen", "x"],
];

export function preguntasDe(nombre: string) {
  const alts = busquedaDe(nombre).split("|").map(sinTildes);
  return todasLasPreguntas().filter(({ q }) => {
    const h = sinTildes([q.caso, q.pregunta, q.correcta, q.explicacion].filter(Boolean).join(" "));
    return alts.some((a) => h.includes(a));
  });
}

/** Abre la página del agente; si no tiene ficha, busca su nombre en el material. */
export function abrirAgente(nombre: string, volver?: () => void): void {
  if (PERFILES[nombre]) mostrarAgente(nombre, volver);
  else buscar(busquedaDe(nombre).split("|")[0]);
}

export const mostrarAgente = vista("la ficha del agente", (nombre: string, volver: () => void = mostrarEstudio) => {
  const pf = PERFILES[nombre];
  if (!pf) return buscar(nombre);
  const p = abrirPanel("estudio");
  let ubicacion = "";
  INDICE.forEach((sec) => sec.grupos.forEach((g) => { if (g.items.some((it) => it.nombre === nombre)) ubicacion = sec.titulo + " · " + g.grupo; }));
  p.append(boton("← Volver", "ghost back", volver), mk("small", "ag-kicker", ubicacion), mk("h2", "ag-name", nombre));

  const ficha = pf.fichaMicroscopio ? agente(pf.fichaMicroscopio) : undefined;
  const fotos = pf.fichaMicroscopio ? fotosDe(pf.fichaMicroscopio) : [];
  if (fotos.length) {
    const tira = mk("div", "strip");
    fotos.forEach((f) => tira.append(miniatura(f.archivo, nombre, () => verFoto(f.archivo, nombre))));
    p.append(tira, mk("p", "note", "Fotos reales del laboratorio del curso."));
  }

  const cuerpo = mk("div", "ag-body");
  for (const [k, titulo, cls] of SECCIONES) {
    let v = pf[k];
    if (k === "reconoce" && !v && ficha) v = ficha.criterio;
    if (!v) continue;
    const s = mk("section", "ag-sec " + cls);
    s.append(mk("h3", null, titulo), mk("p", null, v));
    cuerpo.append(s);
  }
  p.append(cuerpo);

  const f = pf.fichaMicroscopio;
  const pares = f ? PARES.filter((x) => x.a === f || x.b === f) : [];
  if (pares.length) {
    const s = mk("section", "ag-sec conf");
    s.append(mk("h3", null, "No confundir"));
    pares.forEach((x) => s.append(mk("p", null, "Con " + (x.a === f ? x.b : x.a) + ": " + x.diferencia)));
    p.append(s);
  }

  const preg = preguntasDe(nombre);
  const fila = mk("div", "row");
  if (preg.length) {
    const otra = () => mostrarAgente(nombre, volver);
    fila.append(
      boton("Practicar solo " + nombre + " (" + Math.min(preg.length, 10) + ")", "primary", () => conDatoCurioso(() => {
        jugarPreguntas(nombre, mezclar(preg).slice(0, 10).map(({ est, q }) => aItem(q, est)), 10, { seccion: "estudio", alSalir: otra, otraVez: otra, textoVolver: "Volver a " + nombre });
      }, "casos")),
      boton("Ver sus " + preg.length + " preguntas con respuesta", "ghost", () => buscar(busquedaDe(nombre).split("|")[0])),
    );
  }
  p.append(fila);
});
