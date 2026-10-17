/** COMENTARIOS entre compañeros. Se recargan cada 30 s mientras la pantalla está abierta. */
import { vista } from "../lib/errores";
import { boton, mk } from "../lib/dom";
import { hace } from "../lib/texto";
import { MAX, borrar, contar, porQueNo, publicar, puedePublicar, recientes, type Comentario } from "../servicios/comentarios";
import { abrirPanel, alSalirDeVista, pintarInsignia } from "../ui/marco";

export async function actualizarInsignia(): Promise<void> {
  const n = await contar();
  pintarInsignia(n);
}

export const mostrarComentarios = vista("Comentarios", () => {
  const p = abrirPanel("comentarios");
  p.append(mk("h2", null, "Comentarios"));
  const lista = mk("ol", "comments");
  let activo = true;
  let cargando = false;

  const pintar = (items: Comentario[]) => {
    lista.replaceChildren();
    if (!items.length) {
      lista.append(mk("li", "empty", puedePublicar() ? "Todavía no hay comentarios. Escribe el primero." : "Todavía no hay comentarios para mostrar."));
      return;
    }
    for (const it of items) {
      const li = mk("li", it.mio ? "mine" : "");
      const cab = mk("div", "c-head");
      cab.append(mk("strong", null, it.autor + (it.mio ? " (tú)" : "")), mk("small", null, hace(it.t)));
      li.append(cab, mk("p", "c-text", it.texto));
      if (it.mio) {
        let armado = false;
        const del = boton("Borrar", "c-del", async () => {
          if (!armado) {
            armado = true;
            del.textContent = "¿Seguro? Toca otra vez para borrar";
            setTimeout(() => { armado = false; if (!del.disabled) del.textContent = "Borrar"; }, 4000);
            return;
          }
          del.disabled = true;
          const r = await borrar(it.id);
          if (!r.ok) { del.disabled = false; del.textContent = "No se pudo borrar: " + r.error; return; }
          await cargar();
        });
        li.append(del);
      }
      lista.append(li);
    }
  };

  const cargar = async () => {
    if (!activo || cargando) return;
    cargando = true;
    try {
      const r = await recientes();
      if (!activo) return;
      if (!r.ok) {
        // Si ya había comentarios en pantalla, se dejan y solo se avisa.
        if (!lista.querySelector("li:not(.empty)")) { lista.replaceChildren(mk("li", "empty", "No se pudieron cargar los comentarios. " + r.error)); }
        return;
      }
      pintar(r.data);
      pintarInsignia(r.data.length);
    } finally {
      cargando = false;
    }
  };

  if (puedePublicar()) {
    const f = mk("form", "comment-form");
    const ta = mk("textarea");
    ta.id = "c-text"; ta.maxLength = MAX; ta.rows = 3;
    ta.placeholder = "Escribe tu duda, aviso o sugerencia…";
    ta.setAttribute("aria-label", "Tu comentario");
    const cuenta = mk("span", "note", "0 / " + MAX);
    const enviar = mk("button", "primary", "Publicar");
    enviar.type = "submit";
    const msg = mk("p", "msg");
    msg.setAttribute("role", "status");
    ta.oninput = () => { cuenta.textContent = ta.value.length + " / " + MAX; };
    f.onsubmit = async (e) => {
      e.preventDefault();
      if (enviar.disabled) return;
      enviar.disabled = true;
      msg.textContent = "";
      try {
        const r = await publicar(ta.value);
        if (r.ok) {
          ta.value = ""; cuenta.textContent = "0 / " + MAX;
          msg.className = "msg ok"; msg.textContent = "Publicado.";
          await cargar();
        } else {
          msg.className = "msg no"; msg.textContent = r.error;
        }
      } catch (err) {
        console.error(err);
        msg.className = "msg no"; msg.textContent = "No se pudo publicar. Inténtalo otra vez.";
      } finally {
        enviar.disabled = false;
      }
    };
    const fila = mk("div", "row");
    fila.append(enviar, cuenta);
    f.append(ta, fila, msg);
    p.append(f);
    lista.append(mk("li", "empty", "Cargando…"));
  } else {
    p.append(mk("p", "note", porQueNo()));
    lista.append(mk("li", "empty", "Todavía no hay comentarios para mostrar."));
  }
  p.append(lista);

  if (puedePublicar()) {
    void cargar();
    const iv = setInterval(() => void cargar(), 30000);
    alSalirDeVista(() => { activo = false; clearInterval(iv); });
  }
});
