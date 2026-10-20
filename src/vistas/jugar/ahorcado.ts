/** AHORCADO con 4 niveles. */
import { AHORCADO, AHORCADO_PUNTOS, type Nivel, type NivelAhorcado } from "../../content";
import { alAzar, mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { cortarRacha, estado, guardar, sumarPuntos } from "../../estado/progreso";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel, pintarMarcador } from "../../ui/marco";
import { elegirModo } from "./niveles";
import { mostrarTablero } from "./tablero";

const NIVEL: Record<Nivel, NivelAhorcado> = { f: "facil", m: "medio", d: "dificil", x: "muydificil" };
const DETALLE: Record<Nivel, string> = { f: "3 letras reveladas", m: "1 letra revelada", d: "Sin letras reveladas", x: "Agentes poco comunes · solo 5 errores" };
const REVELAR: Record<NivelAhorcado, number> = { facil: 3, medio: 1, dificil: 0, muydificil: 0 };
const LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export const menuAhorcado = vista("el ahorcado", () => {
  elegirModo({
    titulo: "Ahorcado",
    memoria: "ahorcado",
    detalle: (k) => AHORCADO[NIVEL[k]].length + " palabras · " + DETALLE[k] + " · " + AHORCADO_PUNTOS[NIVEL[k]] + " pts",
    alConfirmar: (k) => conDatoCurioso(() => jugarAhorcado(NIVEL[k]), "ahorcado"),
    alVolver: mostrarTablero,
  });
});

export const jugarAhorcado = vista("el ahorcado", (nivel: NivelAhorcado) => {
  const lista = AHORCADO[nivel];
  if (!lista?.length) throw new AppError("No hay palabras en este nivel.", "datos", nivel);
  // No repite palabras hasta haber visto todas las del nivel.
  let vistas = (estado.ahorcadoVistas[nivel] ?? []).filter((w) => lista.some((x) => x.palabra === w));
  if (vistas.length >= lista.length) vistas = [];
  const item = alAzar(lista.filter((x) => !vistas.includes(x.palabra)))!;
  estado.ahorcadoVistas[nivel] = [...vistas, item.palabra];
  guardar();

  const palabra = item.palabra.toUpperCase();
  const pts = AHORCADO_PUNTOS[nivel];
  const maxErrores = nivel === "muydificil" ? 5 : 6;
  const adivinadas = new Set<string>();
  mezclar([...new Set(palabra.replace(/[^A-Z]/g, "").split(""))]).slice(0, REVELAR[nivel]).forEach((l) => adivinadas.add(l));
  let errores = 0;
  let terminado = false;

  const p = abrirPanel("jugar");
  const estadoTxt = mk("p", "note");
  const palabraEl = mk("p", "word");
  palabraEl.setAttribute("aria-live", "polite");
  const teclado = mk("div", "kb");
  const msg = mk("p", "feedback");
  msg.setAttribute("role", "status");
  const otra = boton("Otra palabra", "primary", () => conDatoCurioso(() => jugarAhorcado(nivel), "ahorcado"));
  otra.hidden = true;
  const fila = mk("div", "row");
  fila.append(otra, boton("Volver al tablero", "ghost", mostrarTablero));

  // Espacios y guiones se muestran tal cual; solo se adivinan letras.
  const completa = () => palabra.split("").every((ch) => !/[A-Z]/.test(ch) || adivinadas.has(ch));
  const refrescar = () => {
    estadoTxt.textContent = "Errores: " + errores + " de " + maxErrores;
    // Cada palabra va en su bloque para que el espacio entre palabras se note (p. ej. PAPILOMA HUMANO).
    palabraEl.replaceChildren(...palabra.split(" ").map((parte) => mk("span", "w-parte", parte.split("").map((ch) => (!/[A-Z]/.test(ch) || adivinadas.has(ch) ? ch : "_")).join(" "))));
  };
  const terminar = (gano: boolean) => {
    terminado = true;
    teclado.querySelectorAll("button").forEach((b) => { b.disabled = true; });
    if (gano) { sumarPuntos(pts); msg.className = "feedback ok"; msg.textContent = "¡Lo adivinaste! +" + pts + " puntos"; }
    else { cortarRacha(); msg.className = "feedback no"; msg.textContent = "Era " + palabra + "."; }
    otra.hidden = false;
    pintarMarcador();
  };

  for (const l of LETRAS) {
    const b = boton(l, null, () => {
      if (terminado || b.disabled) return;
      b.disabled = true;
      if (palabra.includes(l)) { adivinadas.add(l); b.classList.add("hit"); }
      else { errores += 1; b.classList.add("miss"); }
      refrescar();
      if (completa()) terminar(true);
      else if (errores >= maxErrores) terminar(false);
    });
    if (adivinadas.has(l)) { b.disabled = true; b.classList.add("hit"); }
    teclado.append(b);
  }

  refrescar();
  p.append(mk("h2", null, "Ahorcado"), mk("p", "case", "Pista: " + item.pista), estadoTxt, palabraEl, teclado, msg, fila);
});
