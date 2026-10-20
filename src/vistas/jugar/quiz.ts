/** Motor de preguntas de opción múltiple, usado por todos los juegos de preguntas. */
import type { AgenteMicroscopio, Estacion, Flujograma, Pregunta } from "../../content";
import { enunciado } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { boton, mk } from "../../lib/dom";
import { acierto, estado, fallo, guardar } from "../../estado/progreso";
import { APRUEBA_FLUJO, montarFotoFlujo, type FotoEnRonda } from "./flujo-foto";
import { mostrarSolucionFlujo } from "../estudio/casos-flujo";
import { armadoFlujo } from "../estudio/flujogramas";
import { abrirPanel, pintarMarcador, type Seccion } from "../../ui/marco";
import { ampliable } from "../../ui/visor";
import { reportarError } from "../../ui/reportar";

export interface ItemQuiz {
  /** Para registrar dominadas y errores. Sin esto, la pregunta solo suma puntos. */
  estacion?: string;
  preguntaId?: string;
  img?: string;
  caso?: string;
  pregunta: string;
  opciones: string[];
  respuesta: number;
  pista?: string;
  explicacion?: string;
  ficha?: AgenteMicroscopio;
  /** Pregunta de flujograma: se arma en orden en lugar de elegir una opción. */
  flujo?: FlujoEnRonda;
  /** Flujograma en papel con foto, corregido por Claude. */
  fotoFlujo?: FotoEnRonda;
}

export function itemFotoFlujo(f: FotoEnRonda): ItemQuiz {
  return { pregunta: f.caso.caso, opciones: [], respuesta: -1, fotoFlujo: f };
}

export interface FlujoEnRonda {
  f: Flujograma;
  /** Pasos falsos que se mezclan (dependen del nivel). */
  intrusos: string[];
  /** En Muy difícil no se muestra el título, solo la consigna. */
  ocultarTitulo?: boolean;
  puntos: number;
}

/** Ítem de flujograma para las rondas (Modo flujogramas y Modo mixto). */
export function itemFlujo(fl: FlujoEnRonda): ItemQuiz {
  return { pregunta: fl.f.consigna, opciones: [], respuesta: -1, flujo: fl };
}

export type ModoPista = "gratis" | "mitad" | "ninguna";

export interface OpcionesQuiz {
  pista?: ModoPista;
  alSalir: () => void;
  otraVez: () => void;
  alTerminar?: () => void;
  seccion?: Seccion;
  /** Texto del botón final para volver. */
  textoVolver?: string;
}

/** Convierte una pregunta del banco en un ítem: siempre 4 opciones (la correcta y 3 distractores al azar). */
export function aItem(q: Pregunta, est: Estacion | string): ItemQuiz {
  const opciones = mezclar([q.correcta, ...mezclar(q.distractores).slice(0, 3)]);
  return {
    estacion: typeof est === "string" ? est : est.id,
    preguntaId: q.id,
    caso: q.caso,
    pregunta: enunciado(q),
    opciones,
    respuesta: opciones.indexOf(q.correcta),
    pista: q.pista,
    explicacion: q.explicacion,
  };
}

/** Descarta ítems mal formados en lugar de mostrar una pregunta imposible. */
function valido(it: ItemQuiz): boolean {
  if (it.flujo) return it.flujo.f.pasos.length >= 2;
  if (it.fotoFlujo) return !!it.fotoFlujo.caso;
  const ok = Array.isArray(it.opciones) && it.opciones.length >= 2 && it.respuesta >= 0 && it.respuesta < it.opciones.length && new Set(it.opciones).size === it.opciones.length;
  if (!ok) console.warn("[reto] pregunta descartada por mal formada", it);
  return ok;
}

export function jugarPreguntas(titulo: string, todos: ItemQuiz[], base: number, o: OpcionesQuiz): void {
  const items = todos.filter(valido);
  const seccion = o.seccion ?? "jugar";
  let i = 0;
  let aciertos = 0;

  const final = () => {
    o.alTerminar?.();
    const p = abrirPanel(seccion);
    if (!items.length) {
      p.append(mk("h2", null, titulo), mk("p", "note", "No hay preguntas disponibles aquí todavía."));
    } else {
      p.append(mk("h2", null, titulo + ": " + aciertos + " de " + items.length));
      p.append(mk("p", "note", aciertos === items.length ? "Ronda perfecta." : "Otra ronda trae preguntas distintas, empezando por las que aún no dominas."));
    }
    const fila = mk("div", "row");
    if (items.length) fila.append(boton("Otra ronda", "primary", o.otraVez));
    fila.append(boton(o.textoVolver ?? "Volver", "ghost", o.alSalir));
    p.append(fila);
  };

  const siguiente = () => {
    if (i >= items.length) return final();
    const it = items[i];
    const p = abrirPanel(seccion);
    let usoPista = false;
    let respondida = false;
    p.append(mk("h2", null, titulo), mk("p", "note", (i + 1) + " de " + items.length));
    if (it.img) {
      const marco = mk("div", "photo");
      const im = mk("img");
      im.src = it.img; im.alt = "Foto de microscopio";
      im.onerror = () => { marco.replaceChildren(mk("p", "note", "No se pudo cargar la foto. Responde con la pista o pasa a la siguiente.")); };
      marco.append(ampliable(im, "Foto para identificar"), mk("span", "lupa", "🔍 Toca para ampliar"));
      p.append(marco);
    }
    if (it.flujo) { pintarFlujo(p, it.flujo); return; }
    if (it.fotoFlujo) {
      const f = it.fotoFlujo;
      p.querySelector(".note")!.textContent = (i + 1) + " de " + items.length + " · flujograma en papel";
      montarFotoFlujo(p, f, {
        alTerminar: (nota) => {
          if (nota == null) return;
          const pts = Math.round((f.puntos * nota) / 20);
          if (nota >= APRUEBA_FLUJO) { aciertos += 1; acierto(undefined, undefined, pts); }
          else { fallo(undefined, undefined); estado.puntos += pts; guardar(); }
          pintarMarcador();
        },
        alSeguir: () => { i += 1; siguiente(); },
        alSalir: o.alSalir,
        verSolucion: (id) => mostrarSolucionFlujo(id, () => { i += 1; siguiente(); }),
      }, i === items.length - 1 ? "Ver resultado" : "Siguiente");
      return;
    }
    if (it.caso) p.append(mk("p", "case", it.caso));
    p.append(mk("p", null, it.pregunta));

    const textoPista = mk("p", "hint", it.pista ?? "");
    textoPista.hidden = true;
    const opciones = mk("div", "opts");
    const fb = mk("p", "feedback");
    fb.setAttribute("role", "status");
    const extra = mk("div");
    const fila = mk("div", "row");
    const modo = o.pista ?? "mitad";

    const bPista = boton(modo === "gratis" ? "Ver pista" : "Pista (la mitad de puntos)", "ghost", () => {
      if (modo !== "gratis") usoPista = true;
      textoPista.hidden = false;
      bPista.disabled = true;
    });
    bPista.hidden = modo === "ninguna" || !it.pista;
    const bSig = boton("Siguiente", "primary", () => { i += 1; siguiente(); });
    bSig.hidden = true;
    fila.append(bPista, bSig, boton("Salir", "ghost", o.alSalir));

    it.opciones.forEach((texto, k) => {
      const b = boton(texto, null, () => {
        if (respondida) return; // evita doble clic
        respondida = true;
        opciones.querySelectorAll("button").forEach((x) => { x.disabled = true; });
        bPista.disabled = true;
        if (k === it.respuesta) {
          b.classList.add("right");
          const pts = usoPista ? base / 2 : base;
          aciertos += 1;
          acierto(it.estacion, it.preguntaId, pts);
          fb.className = "feedback ok";
          fb.textContent = "Correcto. +" + pts + " puntos";
        } else {
          b.classList.add("wrong");
          opciones.children[it.respuesta]?.classList.add("right");
          fallo(it.estacion, it.preguntaId);
          fb.className = "feedback no";
          fb.textContent = "Era " + it.opciones[it.respuesta] + ".";
        }
        if (it.explicacion) extra.append(mk("p", "why", it.explicacion));
        if (it.ficha) {
          const dl = mk("dl", "ficha");
          ([["Qué es", it.ficha.nombre], ["Criterio", it.ficha.criterio], ["Produce", it.ficha.produce], ["Tratamiento", it.ficha.tratamiento]] as const)
            .forEach(([k2, v]) => dl.append(mk("dt", null, k2), mk("dd", null, v)));
          extra.append(dl);
        }
        extra.append(reportarError(() => ({
          tipo: "pregunta", estacion: it.estacion, id: it.preguntaId ?? (it.img ? "foto:" + it.img : undefined),
          texto: (it.caso ? it.caso + " " : "") + it.pregunta, correcta: it.opciones[it.respuesta], opciones: it.opciones,
        })));
        bSig.hidden = false;
        bSig.focus();
        pintarMarcador();
      });
      opciones.append(b);
    });
    p.append(textoPista, opciones, fb, extra, fila);
  };

  /** Pregunta de flujograma: se arma tocando los pasos; perfecto = correcta. */
  const pintarFlujo = (p: HTMLElement, fl: FlujoEnRonda) => {
    p.append(mk("p", "flujo-etq", "Flujograma"));
    if (!fl.ocultarTitulo) p.append(mk("h3", "flujo-tit", fl.f.titulo));
    p.append(mk("p", "case", fl.f.consigna));
    p.append(mk("p", "note", fl.intrusos.length ? "Toca los pasos en orden. Hay " + fl.intrusos.length + (fl.intrusos.length === 1 ? " paso que no va." : " pasos que no van.") : "Toca los pasos en el orden correcto."));
    const fila = mk("div", "row");
    const bSig = boton(i === items.length - 1 ? "Ver resultado" : "Siguiente", "primary", () => { i += 1; siguiente(); });
    bSig.hidden = true;
    const bSaltar = boton("Saltar", "ghost", () => { i += 1; siguiente(); });
    fila.append(bSaltar, bSig, boton("Salir", "ghost", o.alSalir));
    p.append(armadoFlujo(fl.f, fl.intrusos, (r) => {
      bSaltar.hidden = true;
      if (r.perfecto) { aciertos += 1; acierto(undefined, undefined, fl.puntos); }
      else fallo(undefined, undefined);
      bSig.hidden = false;
      pintarMarcador();
      fila.after(reportarError(() => ({ tipo: "flujograma", estacion: fl.f.tema.toLowerCase(), id: fl.f.id, texto: fl.f.consigna, correcta: fl.f.pasos.map((x) => x.texto).join(" → ") })));
    }, { puntos: fl.puntos }), fila);
  };

  siguiente();
}
