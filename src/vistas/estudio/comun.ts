import { mk, boton } from "../../lib/dom";
import { mostrarEstudio } from "./hub";

/** Encabezado de las herramientas de estudio: volver, título y subtítulo. */
export function encabezado(p: HTMLElement, titulo: string, sub?: string, volver: () => void = mostrarEstudio, textoVolver = "← Estudio"): void {
  p.append(boton(textoVolver, "ghost back", volver), mk("h2", null, titulo));
  if (sub) p.append(mk("p", "note", sub));
}
