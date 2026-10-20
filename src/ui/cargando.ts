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
  // Se queda hasta que el alumno toque la pantalla o presione Enter (o Espacio).
  let hecho = false;
  const tecla = (e: KeyboardEvent) => {
    if (e.repeat || (e.key !== "Enter" && e.key !== " ")) return;
    e.preventDefault();
    seguir();
  };
  const seguir = () => {
    if (hecho) return;
    hecho = true;
    loader.hidden = true;
    loader.onclick = null;
    document.removeEventListener("keydown", tecla);
    try { fn(); } catch (e) { reportar(e, "después del dato curioso"); }
  };
  loader.onclick = seguir;
  // Un poco de espera para que el Enter que abrió el juego no salte el dato.
  setTimeout(() => {
    if (hecho) return;
    document.addEventListener("keydown", tecla);
    document.getElementById("fact-seguir")?.focus({ preventScroll: true });
  }, 250);
}
