/** Botón «Reportar error» con su formulario corto, para poner bajo cualquier pregunta. */
import { boton, mk } from "../lib/dom";
import { protegido } from "../lib/errores";
import { MAX_COMENTARIO, MOTIVOS, enviarReporte, type Reporte } from "../servicios/reportes";

type DatosReporte = Omit<Reporte, "motivo" | "comentario" | "enviado">;

/** Devuelve un bloque con el botón; al tocarlo se despliega el formulario debajo. */
export function reportarError(datos: () => DatosReporte): HTMLElement {
  const caja = mk("div", "reporte");
  const abrir = boton("⚑ Reportar error", "reporte-btn", () => {
    abrir.hidden = true;
    caja.append(formulario());
  });
  abrir.setAttribute("aria-label", "Reportar un error en esta pregunta");
  caja.append(abrir);

  const formulario = () => {
    const f = mk("form", "reporte-form");
    f.noValidate = true;
    f.append(mk("strong", null, "¿Qué está mal?"));
    let motivo = "";
    const chips = mk("div", "chips");
    chips.setAttribute("role", "radiogroup");
    chips.setAttribute("aria-label", "Qué está mal");
    for (const m of MOTIVOS) {
      const c = boton(m, "chip", () => {
        motivo = motivo === m ? "" : m;
        chips.querySelectorAll<HTMLButtonElement>(".chip").forEach((x) => {
          const on = x.textContent === motivo;
          x.classList.toggle("on", on);
          x.setAttribute("aria-checked", String(on));
        });
      });
      c.setAttribute("role", "radio");
      c.setAttribute("aria-checked", "false");
      chips.append(c);
    }
    const comentario = mk("textarea");
    comentario.rows = 3;
    comentario.maxLength = MAX_COMENTARIO;
    comentario.placeholder = "Opcional: ¿cuál sería la respuesta correcta o qué cambiarías?";
    comentario.setAttribute("aria-label", "Comentario");
    const msg = mk("p", "reporte-msg");
    msg.setAttribute("role", "status");
    const enviar = mk("button", "primary", "Enviar reporte");
    enviar.type = "submit";
    const cancelar = boton("Cancelar", "ghost", () => { f.remove(); abrir.hidden = false; });
    const fila = mk("div", "row");
    fila.append(enviar, cancelar);
    f.append(chips, comentario, msg, fila);
    f.onsubmit = protegido(async (ev: Event) => {
      ev.preventDefault();
      enviar.disabled = true;
      msg.className = "reporte-msg";
      msg.textContent = "Enviando…";
      const r = await enviarReporte({ ...datos(), motivo, comentario: comentario.value.trim(), enviado: new Date().toISOString() });
      if (!r.ok) {
        msg.className = "reporte-msg no";
        msg.textContent = r.error;
        enviar.disabled = false;
        return;
      }
      caja.replaceChildren(mk("p", "reporte-msg ok", "Gracias. Tu reporte quedó registrado para revisar esta pregunta."));
    }, "reportar error");
    return f;
  };
  return caja;
}
