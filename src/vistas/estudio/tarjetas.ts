/** Tarjetas de repaso: pregunta delante, respuesta detrás. */
import { NOMBRE_NIVEL, TARJETAS, TEMAS_TARJETAS, type Tarjeta } from "../../content";
import { CON_PREGUNTAS, enunciado, todasLasPreguntas, type PreguntaUbicada } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { estaDominada } from "../../estado/progreso";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";

/** Lo que muestra una tarjeta, venga de una pregunta del juego o de las tarjetas de teoría. */
export interface Carta {
  kicker: string;
  caso?: string;
  frente: string;
  respuesta: string;
  detalle?: string;
}

const deTarjeta = (t: Tarjeta): Carta => ({ kicker: "Teoría · " + t.tema, frente: t.pregunta, respuesta: t.respuesta, detalle: t.detalle });
export const dePregunta = ({ est, q }: PreguntaUbicada): Carta => ({ kicker: est.nombre + " · " + NOMBRE_NIVEL[q.nivel], caso: q.caso, frente: enunciado(q), respuesta: q.correcta, detalle: q.explicacion });

export const menuTarjetas = vista("las tarjetas", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Tarjetas de repaso", "Elige un tema. Las tarjetas que marques como «Repasar» vuelven a salir más adelante.");

  p.append(mk("h3", "grp", "Teoría: Tuberculosis, resistencia y hongos"));
  p.append(mk("p", "note", "Tarjetas del curso con la idea clave por delante y la explicación por detrás."));
  const teoria = mk("div", "chips");
  teoria.append(boton("Toda la teoría · " + TARJETAS.length, "chip", () => jugarTarjetas(TARJETAS.map(deTarjeta), "Teoría: todos los temas")));
  for (const tema of TEMAS_TARJETAS) {
    const lista = TARJETAS.filter((t) => t.tema === tema);
    if (lista.length) teoria.append(boton(tema + " · " + lista.length, "chip", () => jugarTarjetas(lista.map(deTarjeta), tema)));
  }
  p.append(teoria);

  p.append(mk("h3", "grp", "Preguntas del juego"));
  const chips = mk("div", "chips");
  const todas = todasLasPreguntas();
  chips.append(boton("Todos los temas · " + todas.length, "chip", () => jugarTarjetas(todas.map(dePregunta), "Todos los temas")));
  for (const st of CON_PREGUNTAS.filter((s) => s.preguntas.length)) {
    chips.append(boton(st.nombre + " · " + st.preguntas.length, "chip", () => jugarTarjetas(st.preguntas.map((q) => dePregunta({ est: st, q })), st.nombre)));
  }
  p.append(chips);
  p.append(boton("Solo las que aún no domino", "ghost", () => jugarTarjetas(todas.filter(({ est, q }) => !estaDominada(est.id, q.id)).map(dePregunta), "Las que aún no domino")));
});

export const jugarTarjetas = vista("las tarjetas", (lista: Carta[], titulo: string, volver: () => void = menuTarjetas) => {
  const cola = mezclar(lista).slice(0, 30).map((x) => ({ ...x, repasada: false }));
  const total = cola.length;
  let sabidas = 0;
  let repaso = 0;

  const siguiente = () => {
    const p = abrirPanel("estudio");
    p.append(boton("← Tarjetas", "ghost back", volver));
    if (!cola.length) {
      p.append(mk("h2", null, total ? "¡Terminaste!" : titulo));
      p.append(mk("p", "note", total ? "Sabías " + sabidas + " de " + total + " a la primera. Marcaste " + repaso + " para repasar." : "No hay tarjetas aquí. ¡Ya dominas todas!"));
      if (total) p.append(boton("Otra tanda", "primary", () => jugarTarjetas(lista, titulo, volver)));
      return;
    }
    const it = cola[0];
    p.append(mk("p", "note", titulo + " · quedan " + cola.length));
    const card = mk("div", "flash");
    card.append(mk("small", null, it.kicker));
    if (it.caso) card.append(mk("p", "case", it.caso));
    card.append(mk("p", "fq", it.frente));
    const reverso = mk("div", "fback");
    reverso.hidden = true;
    reverso.append(mk("p", "fa", it.respuesta));
    if (it.detalle) reverso.append(mk("p", "why", it.detalle));
    card.append(reverso);
    const fila = mk("div", "row");
    const no = boton("Repasar", "ghost", () => {
      cola.shift();
      if (!it.repasada) repaso++;
      it.repasada = true;
      cola.splice(Math.min(3, cola.length), 0, it);
      siguiente();
    });
    const si = boton("Lo sabía", "primary", () => { cola.shift(); if (!it.repasada) sabidas++; siguiente(); });
    const ver = boton("Ver respuesta", "primary", () => {
      reverso.hidden = false; ver.hidden = true; no.hidden = false; si.hidden = false; si.focus();
    });
    no.hidden = true; si.hidden = true;
    card.onclick = (e) => { const t = e.target as HTMLElement; if (!ver.hidden && (t === card || t.closest(".fq, .case"))) ver.click(); };
    fila.append(ver, no, si);
    p.append(card, fila);
  };
  siguiente();
});
