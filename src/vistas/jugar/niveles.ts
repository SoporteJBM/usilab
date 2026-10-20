/** Elegir modo: se toca un nivel y luego se confirma. */
import { NIVELES, NOMBRE_NIVEL, type Nivel } from "../../content";
import { boton, mk } from "../../lib/dom";
import { estado, guardar } from "../../estado/progreso";
import { abrirPanel, type Seccion } from "../../ui/marco";

export interface OpcionesNivel {
  titulo: string;
  /** Texto bajo cada nivel (cuántas preguntas, etc.). */
  detalle?: (k: Nivel) => string;
  alConfirmar: (k: Nivel) => void;
  alVolver: () => void;
  /** Clave para recordar el último nivel elegido en este juego. */
  memoria: string;
  seccion?: Seccion;
  /** Elementos que van bajo los niveles (p. ej. botones de otros modos). */
  extras?: HTMLElement[];
}

export function elegirModo(o: OpcionesNivel): void {
  const p = abrirPanel(o.seccion ?? "jugar");
  p.append(mk("h2", null, o.titulo), mk("p", "note", "Elige el modo y confirma."));
  const caja = mk("div", "levels");
  caja.setAttribute("role", "radiogroup");
  caja.setAttribute("aria-label", "Nivel");
  let sel: Nivel | null = estado.ultimoNivel[o.memoria] ?? null;
  const confirmar = boton("Confirmar", "primary", () => {
    if (!sel) return;
    estado.ultimoNivel[o.memoria] = sel;
    guardar();
    o.alConfirmar(sel);
  });
  const pintar = () => {
    caja.querySelectorAll<HTMLButtonElement>(".level").forEach((b) => {
      const on = b.dataset.k === sel;
      b.classList.toggle("on", on);
      b.setAttribute("aria-checked", String(on));
    });
    confirmar.disabled = !sel;
    confirmar.textContent = sel ? "Confirmar: " + NOMBRE_NIVEL[sel] : "Confirmar";
  };
  for (const lv of NIVELES) {
    const b = boton("", "level " + lv.clave, () => { sel = lv.clave; pintar(); });
    b.dataset.k = lv.clave;
    b.setAttribute("role", "radio");
    b.append(mk("strong", null, lv.nombre), mk("span", null, lv.descripcion));
    const extra = o.detalle?.(lv.clave);
    if (extra) b.append(mk("small", null, extra));
    caja.append(b);
  }
  const fila = mk("div", "row");
  fila.append(confirmar, boton("Volver", "ghost", o.alVolver));
  p.append(caja, ...(o.extras ?? []), fila);
  pintar();
}
