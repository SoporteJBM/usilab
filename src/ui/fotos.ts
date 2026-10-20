/** Tira de miniaturas con su origen: las imágenes de atlas llevan la marca «Atlas». */
import { miniatura, mk } from "../lib/dom";
import { verFoto } from "./visor";

export interface FotoTira {
  archivo: string;
  fuente: "laboratorio" | "atlas";
  /** Texto para el visor y el lector de pantalla. */
  etiqueta: string;
}

export function notaFuentes(fotos: FotoTira[]): string {
  const lab = fotos.some((f) => f.fuente === "laboratorio");
  const atlas = fotos.some((f) => f.fuente === "atlas");
  if (lab && atlas) return "Fotos del laboratorio del curso; las marcadas con «Atlas» son imágenes de referencia.";
  if (atlas) return "Imágenes de referencia de atlas de microbiología.";
  return "Fotos del laboratorio del curso.";
}

/** Devuelve la tira y una nota corta del origen. Vacío si no hay fotos. */
export function tiraDeFotos(fotos: FotoTira[], conNota = true): HTMLElement[] {
  if (!fotos.length) return [];
  const tira = mk("div", "strip");
  for (const f of fotos) {
    const b = miniatura(f.archivo, f.etiqueta, () => verFoto(f.archivo, f.etiqueta));
    if (f.fuente === "atlas") { b.classList.add("atlas"); b.append(mk("span", "marca-atlas", "Atlas")); }
    tira.append(b);
  }
  return conNota ? [tira, mk("p", "note", notaFuentes(fotos))] : [tira];
}
