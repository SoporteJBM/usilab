/** RANKING: puntos de quienes entraron con su cuenta. */
import { vista } from "../lib/errores";
import { boton, mk } from "../lib/dom";
import { ranking } from "../servicios/ranking";
import { abrirPanel } from "../ui/marco";
import { mostrarTablero } from "./jugar/tablero";

export const mostrarRanking = vista("el ranking", async (volver: () => void = mostrarTablero) => {
  const p = abrirPanel("jugar");
  p.append(mk("h2", null, "Ranking"), mk("p", "note", "Puntos de quienes entraron con su cuenta."));
  const lista = mk("ol", "rank");
  lista.append(mk("li", "empty", "Cargando…"));
  p.append(lista, boton("Volver", "ghost", volver));
  const r = await ranking();
  lista.replaceChildren();
  if (!r.ok) { lista.append(mk("li", "empty", r.error)); return; }
  if (!r.data.length) { lista.append(mk("li", "empty", "Todavía no hay nadie. Juega una ronda y serás el primero.")); return; }
  r.data.forEach((f, i) => {
    const li = mk("li", f.soyYo ? "me" : "");
    const img = mk("img");
    img.src = f.foto; img.alt = "";
    if (!f.foto) img.style.visibility = "hidden";
    const pts = mk("span", "pts", Math.round(f.puntos) + " pts");
    pts.append(mk("small", null, f.dominadas + " dominadas"));
    li.append(mk("span", "pos", String(i + 1)), img, mk("span", "nm", f.nombre + (f.soyYo ? " (tú)" : "")), pts);
    lista.append(li);
  });
});
