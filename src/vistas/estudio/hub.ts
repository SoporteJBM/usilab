/** ESTUDIO: buscador y herramientas de repaso. */
import { AGENTES_MICROSCOPIO, ESTACIONES, FLUJOGRAMAS, INDICE, PARES, TABLAS } from "../../content";
import { todasLasPreguntas } from "../../catalogo";
import { vista } from "../../lib/errores";
import { botonTarjeta, mk } from "../../lib/dom";
import { listaDeErrores } from "../../estado/progreso";
import { abrirPanel } from "../../ui/marco";
import { buscador, buscar } from "./buscador";
import { menuTarjetas } from "./tarjetas";
import { mostrarErrores } from "./errores";
import { mostrarTablas } from "./tablas";
import { mostrarFichas } from "./fichas";
import { mostrarNoConfundir } from "./confundir";
import { mostrarResumenes } from "./resumenes";
import { mostrarIndice } from "./indice";
import { mostrarFlujogramas } from "./flujogramas";

export const mostrarEstudio = vista("Estudio", () => {
  const p = abrirPanel("estudio");
  p.append(mk("h2", null, "Estudio"));
  p.append(buscador("", "study-search", "Buscar: Proteus, McFarland, rueda de timón, voriconazol…", buscar));
  const nErr = listaDeErrores().length;
  const nTemas = INDICE.reduce((n, sec) => n + sec.grupos.reduce((m, g) => m + g.items.length, 0), 0);
  const herramientas: [string, string, string, string, () => void][] = [
    ["indice", "Índice del curso", "Qué se ve en cada tema: qué hongos, bacterias, virus, parásitos, técnicas y fármacos.", nTemas + " temas y agentes", mostrarIndice],
    ["tarjetas", "Tarjetas de repaso", "Pregunta por delante, respuesta por detrás. Repite las que no sabes.", todasLasPreguntas().length + " tarjetas", menuTarjetas],
    ["errores", "Mis errores", "Las preguntas que fallaste en los juegos, para repasarlas.", nErr ? nErr + " por repasar" : "Sin errores todavía", mostrarErrores],
    ["flujogramas", "Flujogramas", "Preguntas abiertas: arma el flujograma y compáralo con el modelo.", FLUJOGRAMAS.length + " flujogramas", () => mostrarFlujogramas()],
    ["tablas", "Tablas clave", "Medios, antibiograma, orina, heces y tratamientos de elección.", TABLAS.length + " tablas", mostrarTablas],
    ["fichas", "Fichas de microscopio", "Criterio, qué produce y tratamiento, con fotos reales del laboratorio.", AGENTES_MICROSCOPIO.length + " estructuras", mostrarFichas],
    ["confundir", "No confundir", "Los pares que más se confunden en el examen, lado a lado.", PARES.length + " pares", mostrarNoConfundir],
    ["resumenes", "Resúmenes por tema", "Las ideas clave de cada sección del juego.", (ESTACIONES.length + 1) + " temas", mostrarResumenes],
  ];
  const grid = mk("div", "tools");
  for (const [k, t, d, s, fn] of herramientas) grid.append(botonTarjeta("tool " + k, t, d, s, fn));
  p.append(grid);
});
