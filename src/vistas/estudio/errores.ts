/**
 * MIS ERRORES: las preguntas falladas en cualquier juego.
 * - Se guardan por id de pregunta, así sobreviven a cambios en el banco.
 * - Se borran solas al acertarlas (aquí o en otro juego).
 * - Si una pregunta se elimina del banco, su error desaparece al cargar (ver estado/progreso.ts).
 */
import { enunciado, pregunta } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { estado, guardar, listaDeErrores } from "../../estado/progreso";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel } from "../../ui/marco";
import { aItem, jugarPreguntas } from "../jugar/quiz";
import { encabezado } from "./comun";
import { dePregunta, jugarTarjetas } from "./tarjetas";

const POR_RONDA = 10;

export const mostrarErrores = vista("Mis errores", () => {
  const p = abrirPanel("estudio");
  const lista = listaDeErrores().flatMap((e) => { const u = pregunta(e.id); return u ? [{ ...e, ...u }] : []; });
  encabezado(p, "Mis errores", lista.length ? "Se borran solos cuando aciertas la pregunta en un juego o aquí." : "");
  if (!lista.length) {
    p.append(mk("p", "empty-note", "Todavía no tienes errores guardados. Cuando falles una pregunta en cualquier juego, aparecerá aquí para que la repases."));
    return;
  }
  // La ronda prioriza las más falladas y luego las mezcla.
  const ronda = () => mezclar(lista.slice(0, POR_RONDA)).map(({ est, q }) => aItem(q, est));
  const fila = mk("div", "row");
  fila.append(
    boton("Practicar mis errores (" + Math.min(lista.length, POR_RONDA) + ")", "primary", () => conDatoCurioso(() => {
      jugarPreguntas("Mis errores", ronda(), 10, { seccion: "estudio", alSalir: mostrarErrores, otraVez: mostrarErrores, textoVolver: "Ver mis errores" });
    }, "casos")),
    boton("Como tarjetas", "ghost", () => jugarTarjetas(lista.map(({ est, q }) => dePregunta({ est, q })), "Mis errores", mostrarErrores)),
  );
  p.append(fila);

  const cont = mk("div", "results");
  for (const { est, q, veces } of lista) {
    const c = mk("div", "result");
    c.append(mk("small", null, est.nombre + " · fallada " + veces + (veces === 1 ? " vez" : " veces")));
    if (q.caso) c.append(mk("p", "case", q.caso));
    c.append(mk("strong", null, enunciado(q)), mk("p", "fa", q.correcta));
    if (q.explicacion) c.append(mk("p", "why", q.explicacion));
    const quitar = boton("Ya la sé, quitarla", "c-del", () => {
      const m = estado.errores[est.id];
      if (m) { delete m[q.id]; if (!Object.keys(m).length) delete estado.errores[est.id]; }
      guardar();
      mostrarErrores();
    });
    c.append(quitar);
    cont.append(c);
  }
  p.append(cont);
});
