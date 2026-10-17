/** Pantalla "¿Sabías que...?" antes de cada juego. */
import { DATOS_CURIOSOS } from "../content";
import { $ } from "../lib/dom";
import { reportar } from "../lib/errores";

let ultimo = "";

export function conDatoCurioso(fn: () => void, tema: string): void {
  const loader = $("#loader");
  const pool = DATOS_CURIOSOS[tema]?.length ? DATOS_CURIOSOS[tema] : Object.values(DATOS_CURIOSOS).flat();
  let f = pool[Math.floor(Math.random() * pool.length)] ?? "";
  if (f === ultimo && pool.length > 1) f = pool[(pool.indexOf(f) + 1) % pool.length];
  ultimo = f;
  $("#fact").textContent = f;
  loader.hidden = false;
  let hecho = false;
  const seguir = () => {
    if (hecho) return;
    hecho = true;
    loader.hidden = true;
    loader.onclick = null;
    try { fn(); } catch (e) { reportar(e, "después del dato curioso"); }
  };
  loader.onclick = seguir;
  setTimeout(seguir, 3200);
}
