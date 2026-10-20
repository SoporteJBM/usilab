/**
 * AHORCADO con 4 niveles. Cada estación tiene el suyo (Hongos, Bacterias, Virus, Parásitos)
 * y Microscopio tiene uno con las fotos reales: se adivina qué hongo es.
 * Regla de los ahorcados con imagen: cada pregunta tiene su foto real y la respuesta es el
 * nombre con el que se registró esa foto. Sin foto, no hay pregunta.
 */
import { AGENTES_MICROSCOPIO, AHORCADO, AHORCADO_PUNTOS, AHORCADOS, FOTOS, type Nivel, type NivelAhorcado, type PalabraAhorcado } from "../../content";
import { alAzar, mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { cortarRacha, estado, guardar, sumarPuntos } from "../../estado/progreso";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel, pintarMarcador } from "../../ui/marco";
import { ampliable } from "../../ui/visor";
import { ocultarRespuesta } from "../../lib/texto";
import { reportarError } from "../../ui/reportar";
import { elegirModo } from "./niveles";
import { mostrarTablero } from "./tablero";

const NIVEL: Record<Nivel, NivelAhorcado> = { f: "facil", m: "medio", d: "dificil", x: "muydificil" };
const NIVELES_AHORCADO: NivelAhorcado[] = ["facil", "medio", "dificil", "muydificil"];
const DETALLE: Record<Nivel, string> = { f: "3 letras reveladas", m: "1 letra revelada", d: "Sin letras reveladas", x: "Sin letras · solo 4 errores" };
/** Errores permitidos: en Muy difícil son menos. */
export const MAX_ERRORES: Record<NivelAhorcado, number> = { facil: 6, medio: 6, dificil: 6, muydificil: 4 };
const REVELAR: Record<NivelAhorcado, number> = { facil: 3, medio: 1, dificil: 0, muydificil: 0 };
const LETRAS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
/** Tema del «¿Sabías que...?» antes de cada palabra. */
const TEMA_DATO: Record<string, string> = { hongos: "hongos", bacterias: "bacterias", virus: "virus", parasitos: "parasitos", microscopio: "micro" };

interface FuenteAhorcado {
  nombre: string;
  imagen: boolean;
  pregunta: string;
  niveles: Record<NivelAhorcado, PalabraAhorcado[]>;
}

/**
 * Microscopio: solo las fotos de hongos. La respuesta es el nombre completo con que se registró la foto
 * (la especie si la foto la tiene, p. ej. ASPERGILLUS NIGER). Fácil, Medio y Difícil llevan el criterio de
 * la ficha como pista. Muy difícil: cualquiera de las fotos de hongos, sin criterio.
 */
const NIVEL_FOTO: Record<string, NivelAhorcado> = {
  "Candida albicans": "facil", "Fusarium": "facil", "Rhizopus": "facil", "Penicillium": "facil",
  "Aspergillus": "medio", "Cladosporium": "medio", "Alternaria": "medio", "Sporothrix schenckii": "medio",
  "Trichophyton rubrum": "dificil", "Trichophyton mentagrophytes": "dificil", "Epidermophyton floccosum": "dificil",
  "Microsporum canis": "dificil", "Histoplasma capsulatum": "dificil", "Paracoccidioides brasiliensis": "dificil",
};
const DERMATOFITOS = ["Trichophyton rubrum", "Trichophyton mentagrophytes", "Epidermophyton floccosum", "Microsporum canis"];
function ahorcadoMicroscopio(): FuenteAhorcado {
  const niveles: Record<NivelAhorcado, PalabraAhorcado[]> = { facil: [], medio: [], dificil: [], muydificil: [] };
  for (const f of FOTOS) {
    const ag = AGENTES_MICROSCOPIO.find((a) => a.nombre === f.agente);
    if (!ag || ag.grupo !== "Hongos") continue;
    const nombre = (f.especie ?? f.agente).toUpperCase();
    const nivel = NIVEL_FOTO[f.agente];
    if (nivel) niveles[nivel].push({ id: "foto" + f.numero, palabra: nombre, pista: (DERMATOFITOS.includes(f.agente) ? "Dermatofito. " : "") + ag.criterio, foto: f.archivo });
    niveles.muydificil.push({ id: "foto-x" + f.numero, palabra: nombre, pista: "Solo la foto: fíjate en las hifas, los conidios y cómo se agrupan.", foto: f.archivo });
  }
  return { nombre: "Microscopio", imagen: true, pregunta: "¿Qué hongo es? (nombre completo)", niveles };
}

/** De dónde salen las palabras: una estación, Microscopio o (sin estación) la lista general. */
export function fuenteAhorcado(area?: string): FuenteAhorcado | null {
  if (!area) return { nombre: "Ahorcado", imagen: false, pregunta: "", niveles: AHORCADO };
  if (area === "microscopio") return ahorcadoMicroscopio();
  const a = AHORCADOS[area];
  return a ? { nombre: a.nombre, imagen: false, pregunta: "", niveles: a.niveles } : null;
}

/** Palabras válidas de un nivel: en los ahorcados con imagen, solo las que tienen foto. */
export function palabrasDe(fuente: FuenteAhorcado, nivel: NivelAhorcado): PalabraAhorcado[] {
  const lista = fuente.niveles[nivel] ?? [];
  return fuente.imagen ? lista.filter((x) => Boolean(x.foto)) : lista;
}

export function totalAhorcado(area?: string): number {
  const f = fuenteAhorcado(area);
  return f ? NIVELES_AHORCADO.reduce((n, k) => n + palabrasDe(f, k).length, 0) : 0;
}


const idDe = (x: PalabraAhorcado) => x.id ?? x.palabra;

export const menuAhorcado = vista("el ahorcado", (area?: string, volver: () => void = mostrarTablero) => {
  const f = fuenteAhorcado(area);
  if (!f) throw new AppError("Ese ahorcado no existe.", "datos", area);
  elegirModo({
    titulo: area ? "Ahorcado · " + f.nombre : "Ahorcado",
    memoria: area ? "ahorcado-" + area : "ahorcado",
    detalle: (k) => {
      const n = palabrasDe(f, NIVEL[k]).length;
      if (!n) return f.imagen ? "Sin fotos todavía" : "Sin palabras todavía";
      return n + (f.imagen ? (n === 1 ? " foto" : " fotos") : " palabras") + " · " + DETALLE[k] + " · " + AHORCADO_PUNTOS[NIVEL[k]] + " pts";
    },
    alConfirmar: (k) => conDatoCurioso(() => jugarAhorcado(NIVEL[k], area, volver), area ? TEMA_DATO[area] ?? "ahorcado" : "ahorcado"),
    alVolver: volver,
  });
});

export const jugarAhorcado = vista("el ahorcado", (nivel: NivelAhorcado, area?: string, volver: () => void = mostrarTablero) => {
  const fuente = fuenteAhorcado(area);
  if (!fuente) throw new AppError("Ese ahorcado no existe.", "datos", area);
  const lista = palabrasDe(fuente, nivel);
  const titulo = area ? "Ahorcado · " + fuente.nombre : "Ahorcado";
  if (!lista.length) {
    const p0 = abrirPanel("jugar");
    p0.append(mk("h2", null, titulo), mk("p", "note", fuente.imagen ? "Este nivel todavía no tiene fotos." : "Este nivel todavía no tiene palabras."), boton("Volver", "ghost", volver));
    return;
  }
  // No repite palabras hasta haber visto todas las del nivel.
  const clave = area ? area + ":" + nivel : nivel;
  let vistas = (estado.ahorcadoVistas[clave] ?? []).filter((w) => lista.some((x) => idDe(x) === w));
  if (vistas.length >= lista.length) vistas = [];
  const item = alAzar(lista.filter((x) => !vistas.includes(idDe(x))))!;
  estado.ahorcadoVistas[clave] = [...vistas, idDe(item)];
  guardar();

  const palabra = item.palabra.toUpperCase();
  const pts = AHORCADO_PUNTOS[nivel];
  const maxErrores = MAX_ERRORES[nivel];
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
  const otra = boton(fuente.imagen ? "Otra foto" : "Otra palabra", "primary", () => conDatoCurioso(() => jugarAhorcado(nivel, area, volver), area ? TEMA_DATO[area] ?? "ahorcado" : "ahorcado"));
  otra.hidden = true;
  const fila = mk("div", "row");
  fila.append(otra, boton(area ? "Volver" : "Volver al tablero", "ghost", volver));

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
    fila.after(reportarError(() => ({ tipo: "ahorcado", estacion: area ?? "ahorcado", id: idDe(item), texto: (fuente.imagen ? "[foto " + (item.foto ?? "") + "] " : "") + item.pista, correcta: palabra })));
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
  p.append(mk("h2", null, titulo));
  if (fuente.imagen && item.foto) {
    const caja = mk("div", "hang-img");
    const img = mk("img");
    img.src = item.foto; img.alt = "Foto de microscopio para adivinar";
    caja.append(ampliable(img, "Foto para adivinar"), mk("small", null, "Foto real del laboratorio · toca la foto para verla en detalle"));
    p.append(caja);
  }
  const pista = ocultarRespuesta(item.pista, palabra);
  p.append(mk("p", "case", (fuente.imagen ? fuente.pregunta + " Pista: " : "Pista: ") + pista), estadoTxt, palabraEl, teclado, msg, fila);
});
