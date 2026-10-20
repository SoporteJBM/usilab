/** Formulario de sugerencias: cualquiera puede responderlo, con o sin cuenta. */
import { boton, mk } from "../lib/dom";
import { protegido } from "../lib/errores";
import { MAX_TEXTO, RECOMENDARIA, SECCIONES, TEMAS_MEJORA, enviarSugerencia, type Sugerencia } from "../servicios/sugerencias";

const ETIQUETAS_UTILIDAD = ["Nada útil", "Poco útil", "Más o menos", "Útil", "Muy útil"];

function pregunta(numero: number, titulo: string, ayuda?: string): HTMLFieldSetElement {
  const fs = mk("fieldset", "sug-q");
  const leyenda = mk("legend");
  leyenda.append(mk("span", "sug-num", String(numero)), document.createTextNode(titulo));
  fs.append(leyenda);
  if (ayuda) fs.append(mk("small", "note", ayuda));
  return fs;
}

/** Grupo de opciones donde se elige una (radio) o varias (multi). */
function opciones(valores: readonly string[], multi: boolean, alCambiar: (sel: string[]) => void, nombre: string): HTMLDivElement {
  const caja = mk("div", "chips");
  caja.setAttribute("role", multi ? "group" : "radiogroup");
  caja.setAttribute("aria-label", nombre);
  const sel = new Set<string>();
  for (const v of valores) {
    const b = boton(v, "chip", () => {
      if (multi) { if (sel.has(v)) sel.delete(v); else sel.add(v); }
      else { const ya = sel.has(v); sel.clear(); if (!ya) sel.add(v); }
      caja.querySelectorAll<HTMLButtonElement>(".chip").forEach((x) => {
        const on = sel.has(x.textContent ?? "");
        x.classList.toggle("on", on);
        x.setAttribute(multi ? "aria-pressed" : "aria-checked", String(on));
      });
      alCambiar([...sel]);
    });
    if (!multi) b.setAttribute("role", "radio");
    b.setAttribute(multi ? "aria-pressed" : "aria-checked", "false");
    caja.append(b);
  }
  return caja;
}

function areaTexto(id: string, placeholder: string, filas = 3): { caja: HTMLDivElement; campo: HTMLTextAreaElement } {
  const caja = mk("div", "sug-texto");
  const campo = mk("textarea");
  campo.id = id; campo.rows = filas; campo.maxLength = MAX_TEXTO; campo.placeholder = placeholder;
  const cuenta = mk("small", "note", "0 / " + MAX_TEXTO);
  campo.oninput = () => { cuenta.textContent = campo.value.length + " / " + MAX_TEXTO; };
  caja.append(campo, cuenta);
  return { caja, campo };
}

export function formularioSugerencias(contenedor: HTMLElement): void {
  const tarjeta = mk("section", "sug");
  tarjeta.setAttribute("aria-labelledby", "sug-titulo");
  const h = mk("h3", null, "¿Cómo mejoramos MiUsiLab?");
  h.id = "sug-titulo";
  tarjeta.append(h, mk("p", "note", "Toma un minuto. Todas las preguntas son opcionales: responde las que quieras."));

  const datos: Sugerencia = { utilidad: null, seccionFavorita: null, mejorar: [], temaNuevo: "", cambios: "", problemas: "", recomendaria: null, nombre: "", enviado: "" };
  const f = mk("form", "sug-form");
  f.noValidate = true;

  // 1. Utilidad
  const q1 = pregunta(1, "¿Qué tan útil te parece MiUsiLab para estudiar?");
  const escala = mk("div", "sug-rate");
  escala.setAttribute("role", "radiogroup");
  escala.setAttribute("aria-label", "Utilidad del 1 al 5");
  const leyenda = mk("small", "note", "Toca un número");
  for (let i = 1; i <= 5; i++) {
    const b = boton(String(i), "sug-n", () => {
      datos.utilidad = datos.utilidad === i ? null : i;
      escala.querySelectorAll<HTMLButtonElement>(".sug-n").forEach((x, k) => {
        x.classList.toggle("on", datos.utilidad != null && k < datos.utilidad);
        x.setAttribute("aria-checked", String(k + 1 === datos.utilidad));
      });
      leyenda.textContent = datos.utilidad ? ETIQUETAS_UTILIDAD[datos.utilidad - 1] : "Toca un número";
    });
    b.setAttribute("role", "radio");
    b.setAttribute("aria-checked", "false");
    b.setAttribute("aria-label", i + ": " + ETIQUETAS_UTILIDAD[i - 1]);
    escala.append(b);
  }
  q1.append(escala, leyenda);

  // 2. Sección favorita
  const q2 = pregunta(2, "¿Qué sección usas más?");
  q2.append(opciones(SECCIONES, false, (s) => { datos.seccionFavorita = s[0] ?? null; }, "Sección que más usas"));

  // 3. Qué mejorar
  const q3 = pregunta(3, "¿Qué parte deberíamos mejorar?", "Puedes marcar varias.");
  q3.append(opciones(TEMAS_MEJORA, true, (s) => { datos.mejorar = s; }, "Partes a mejorar"));

  // 4. Tema nuevo
  const q4 = pregunta(4, "¿Qué tema o curso te gustaría que agreguemos?");
  const t4 = areaTexto("sug-tema", "Por ejemplo: más casos de parásitos, Farmacología, Fisiología…", 2);
  q4.append(t4.caja);

  // 5. Cambios
  const q5 = pregunta(5, "¿Qué cambiarías o agregarías?");
  const t5 = areaTexto("sug-mejora", "Por ejemplo: un modo examen con tiempo, más fotos del microscopio…");
  q5.append(t5.caja);

  // 6. Problemas
  const q6 = pregunta(6, "¿Algo no funcionó o fue confuso?");
  const t6 = areaTexto("sug-falla", "Qué pasó y en qué parte de la página. Si fue en el celular, dinos cuál.");
  q6.append(t6.caja);

  // 7. Recomendaría
  const q7 = pregunta(7, "¿Le recomendarías MiUsiLab a un compañero?");
  q7.append(opciones(RECOMENDARIA, false, (s) => { datos.recomendaria = s[0] ?? null; }, "Recomendarías MiUsiLab"));

  // 8. Nombre opcional
  const q8 = pregunta(8, "Tu nombre (opcional)", "Solo si quieres que sepamos quién lo envió.");
  const nombre = mk("input", "sug-input");
  nombre.id = "sug-nombre"; nombre.type = "text"; nombre.maxLength = 60; nombre.autocomplete = "name";
  q8.append(nombre);

  const msg = mk("p", "msg");
  msg.setAttribute("role", "status");
  const enviar = mk("button", "primary", "Enviar sugerencia");
  enviar.type = "submit";
  const pie = mk("div", "sug-pie");
  pie.append(enviar, msg);

  f.append(q1, q2, q3, q4, q5, q6, q7, q8, pie);
  const limpiar = () => { if (msg.classList.contains("no")) { msg.textContent = ""; msg.className = "msg"; } };
  f.addEventListener("input", limpiar);
  f.addEventListener("click", (e) => { if (e.target !== enviar) limpiar(); });

  f.onsubmit = protegido(async (e: SubmitEvent) => {
    e.preventDefault();
    if (enviar.disabled) return;
    Object.assign(datos, {
      temaNuevo: t4.campo.value.trim(), cambios: t5.campo.value.trim(), problemas: t6.campo.value.trim(),
      nombre: nombre.value.trim(), enviado: new Date().toISOString(),
    });
    enviar.disabled = true;
    msg.className = "msg ok"; msg.textContent = "Enviando…";
    try {
      const r = await enviarSugerencia({ ...datos, mejorar: [...datos.mejorar] });
      if (!r.ok) { msg.className = "msg no"; msg.textContent = r.error; return; }
      tarjeta.replaceChildren(
        mk("h3", null, "¡Gracias!"),
        mk("p", "note", "Recibimos tu sugerencia. La vamos a revisar para la próxima versión."),
        boton("Enviar otra", "ghost", () => { const tmp = mk("div"); formularioSugerencias(tmp); if (tmp.firstElementChild) tarjeta.replaceWith(tmp.firstElementChild); }),
      );
      tarjeta.classList.add("enviada");
    } finally {
      enviar.disabled = false;
    }
  }, "formulario de sugerencias");

  tarjeta.append(f);
  contenedor.append(tarjeta);
}
