/** Tarjetas de repaso: pregunta delante, respuesta detrás. */
import { NOMBRE_NIVEL } from "../../content";
import { CON_PREGUNTAS, enunciado, todasLasPreguntas, type PreguntaUbicada } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { estaDominada } from "../../estado/progreso";
import { abrirPanel } from "../../ui/marco";
import { encabezado } from "./comun";

export const menuTarjetas = vista("las tarjetas", () => {
  const p = abrirPanel("estudio");
  encabezado(p, "Tarjetas de repaso", "Elige un tema. Las tarjetas que marques como «Repasar» vuelven a salir más adelante.");
  const chips = mk("div", "chips");
  const todas = todasLasPreguntas();
  chips.append(boton("Todos los temas · " + todas.length, "chip", () => jugarTarjetas(todas, "Todos los temas")));
  for (const st of CON_PREGUNTAS.filter((s) => s.preguntas.length)) {
    chips.append(boton(st.nombre + " · " + st.preguntas.length, "chip", () => jugarTarjetas(st.preguntas.map((q) => ({ est: st, q })), st.nombre)));
  }
  p.append(chips);
  p.append(boton("Solo las que aún no domino", "ghost", () => jugarTarjetas(todas.filter(({ est, q }) => !estaDominada(est.id, q.id)), "Las que aún no domino")));
});

export const jugarTarjetas = vista("las tarjetas", (lista: PreguntaUbicada[], titulo: string, volver: () => void = menuTarjetas) => {
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
    card.append(mk("small", null, it.est.nombre + " · " + NOMBRE_NIVEL[it.q.nivel]));
    if (it.q.caso) card.append(mk("p", "case", it.q.caso));
    card.append(mk("p", "fq", enunciado(it.q)));
    const reverso = mk("div", "fback");
    reverso.hidden = true;
    reverso.append(mk("p", "fa", it.q.correcta));
    if (it.q.explicacion) reverso.append(mk("p", "why", it.q.explicacion));
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
