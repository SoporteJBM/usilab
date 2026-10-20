/** JUGAR: tablero de estaciones, elegir nivel y rondas de preguntas. */
import { AGENTES_MICROSCOPIO, CASOS, ESTACIONES, FOTOS, MICROSCOPIO, NOMBRE_NIVEL, PISTA, PUNTOS, type Estacion, type Nivel } from "../../content";
import { estacion } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { boton, botonTarjeta, mk } from "../../lib/dom";
import { dominadasDe, estado, recordarUltima, rondaTerminada } from "../../estado/progreso";
import { esAncho, vistaRepintable } from "../../ui/ancho";
import { anillo, GRUPO_DE, GRUPOS, icono, type Grupo } from "../../ui/secciones";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel, abrirTablero, pintarMarcador } from "../../ui/marco";
import { elegirModo } from "./niveles";
import { aItem, jugarPreguntas } from "./quiz";
import { mostrarMicroscopio } from "./microscopio";
import { elegirModoFotoFlujo, modosExtra } from "./modos";
import { hayCorrector } from "../../servicios/corrector";
import { CASOS_FLUJO } from "../../content";
import { mostrarSolucionesFlujo } from "../estudio/casos-flujo";
import { EXAMEN_CURSO, introExamen, PREGUNTAS_EXAMEN, PREGUNTAS_EXAMEN_CURSO } from "./examen";
import { mostrarRepaso, resumenRepaso } from "./repaso";
import { mostrarEntrenadorVirus } from "./entrenador-virus";

const TAMANO_RONDA: Record<string, number> = { casos: 4 };

function tamanoRonda(st: Estacion, k?: Nivel): number {
  const n = k ? st.preguntas.filter((q) => q.nivel === k).length : st.preguntas.length;
  return Math.min(TAMANO_RONDA[st.id] ?? 5, n);
}

/** Ronda al azar: primero las que todavía no dominas, luego las demás. */
function armarRonda(st: Estacion, k: Nivel) {
  const m = estado.dominadas[st.id] || {};
  const delNivel = st.preguntas.filter((q) => q.nivel === k);
  const nuevas = mezclar(delNivel.filter((q) => !m[q.id]));
  const vistas = mezclar(delNivel.filter((q) => m[q.id]));
  return mezclar([...nuevas, ...vistas].slice(0, tamanoRonda(st, k)));
}

function estacionOError(id: string): Estacion {
  const st = estacion(id);
  if (!st) throw new AppError("Ese tema no existe.", "datos", id);
  return st;
}

export const elegirNivel = vista("el nivel", (id: string) => {
  const st = estacionOError(id);
  const m = estado.dominadas[id] || {};
  elegirModo({
    titulo: st.nombre,
    memoria: id,
    detalle: (k) => {
      const ids = st.preguntas.filter((q) => q.nivel === k);
      const n = tamanoRonda(st, k);
      return ids.length + " preguntas · " + ids.filter((q) => m[q.id]).length + " dominadas" + (n ? " · rondas de " + n : "");
    },
    alConfirmar: (k) => conDatoCurioso(() => iniciarRonda(id, k), id),
    alVolver: mostrarTablero,
    extras: modosExtra(id, () => elegirNivel(id)),
  });
});

export const iniciarRonda = vista("la ronda", (id: string, k: Nivel) => {
  const st = estacionOError(id);
  recordarUltima(id, k);
  const items = armarRonda(st, k).map((q) => aItem(q, st));
  jugarPreguntas(st.nombre + " · " + NOMBRE_NIVEL[k], items, PUNTOS[k] * (id === "casos" ? 2 : 1), {
    pista: PISTA[k],
    alSalir: mostrarTablero,
    otraVez: () => elegirNivel(id),
    alTerminar: () => rondaTerminada(id),
    textoVolver: "Volver al tablero",
  });
});

interface Tarjeta { id: string; nombre: string; descripcion: string; resumen: string; nota: string; jugar?: () => void; textoJugar?: string; total: number; hechas: number; examen?: () => void }

function tarjetas(): Tarjeta[] {
  const deEstacion = (st: Estacion): Tarjeta => ({
    id: st.id, nombre: st.nombre, descripcion: st.descripcion, resumen: st.resumen,
    total: st.preguntas.length, hechas: dominadasDe(st.id),
    nota: st.preguntas.length ? dominadasDe(st.id) + " de " + st.preguntas.length + " dominadas · 4 niveles" : "Solo lectura",
    jugar: st.preguntas.length ? () => elegirNivel(st.id) : undefined,
    examen: st.preguntas.length >= PREGUNTAS_EXAMEN ? () => introExamen(st.id, mostrarTablero) : undefined,
  });
  return [
    ...ESTACIONES.flatMap((st) => st.id !== "virus" ? [deEstacion(st)] : [deEstacion(st), {
      id: "entrenador-virus", nombre: "Entrenador de Virus", descripcion: "Baltimore, VIH paso a paso, CD4, esquemas, co-test y proteínas",
      resumen: "Ejercicios cortos para fijar lo que más se pregunta de Virus. Cada ronda sale distinta.", total: 0, hechas: 0,
      nota: "6 ejercicios", jugar: () => mostrarEntrenadorVirus(mostrarTablero), textoJugar: "Entrenar",
    }]),
    { ...MICROSCOPIO, total: 0, hechas: 0, nota: FOTOS.length + " fotos · " + AGENTES_MICROSCOPIO.length + " estructuras", jugar: mostrarMicroscopio, textoJugar: "Entrar" },
    deEstacion(CASOS),
  ];
}

/** Atajos que valen para todo el curso: repaso de hoy y examen completo. */
export function atajosCurso(volver: () => void): HTMLElement {
  const caja = mk("div", "atajos");
  caja.append(
    botonTarjeta("atajo atajo-repaso", "Repaso de hoy", "Las preguntas que estás por olvidar, de todas las secciones.", resumenRepaso(), () => mostrarRepaso(volver)),
    botonTarjeta("atajo atajo-examen", "Examen del curso", PREGUNTAS_EXAMEN_CURSO + " preguntas de todas las secciones, con tiempo y nota sobre 20.", estado.examenes[EXAMEN_CURSO] ? "Tu mejor nota: " + estado.examenes[EXAMEN_CURSO].mejor + "/20" : "Simula el examen final", () => introExamen(EXAMEN_CURSO, volver)),
  );
  return caja;
}

/** Filtro elegido en el tablero de computadora (se mantiene mientras la página esté abierta). */
let filtro: Grupo | "todas" = "todas";

/** JUGAR para computadora: cuadrícula de 4 columnas con filtros; cada sección con color, ícono y anillo de % dominado. */
function tableroAncho(): void {
  const home = abrirTablero();
  vistaRepintable(mostrarTablero);
  home.className = "tablero-ancho";
  const cab = mk("div", "ta-cab");
  cab.append(mk("h2", null, "Jugar"));
  const filtros = mk("div", "ta-filtros");
  filtros.setAttribute("role", "group");
  filtros.setAttribute("aria-label", "Filtrar secciones");
  for (const g of GRUPOS) {
    const b = boton(g.nombre, "ta-filtro" + (filtro === g.clave ? " on" : ""), () => { filtro = g.clave; tableroAncho(); });
    b.setAttribute("aria-pressed", String(filtro === g.clave));
    filtros.append(b);
  }
  cab.append(filtros);
  home.append(cab, atajosCurso(mostrarTablero));

  const grid = mk("section", "ta-grid");
  grid.setAttribute("aria-label", "Secciones");
  const conBanco = ESTACIONES.filter((st) => GRUPO_DE[st.id] && st.preguntas.length && (filtro === "todas" || GRUPO_DE[st.id] === filtro));
  for (const st of conBanco) {
    const total = st.preguntas.length;
    const dom = dominadasDe(st.id);
    const card = mk("article", "ta-card sec-" + st.id);
    const arriba = mk("div", "ta-arriba");
    const ic = mk("span", "sec-ico");
    ic.append(icono(st.id, 24));
    arriba.append(ic, anillo(dom / total, 56, 6, Math.round((100 * dom) / total) + "%", Math.round((100 * dom) / total) + " % dominado de " + st.nombre));
    const jugar = boton(st.nombre, "ta-titulo", () => elegirNivel(st.id));
    const fila = mk("div", "ta-acciones");
    fila.append(boton("Resumen", "ghost", () => mostrarResumen(st.id)));
    if (total >= PREGUNTAS_EXAMEN) fila.append(boton("Examen", "ghost", () => introExamen(st.id, mostrarTablero)));
    card.append(arriba, jugar, mk("p", null, st.descripcion), mk("small", "ta-cuenta", total + " preguntas · " + dom + " dominadas"), fila);
    grid.append(card);
  }
  if (!conBanco.length) grid.append(mk("p", "note", "No hay secciones en este grupo."));
  home.append(grid);

  // Otras formas de practicar
  const otras = mk("section", "ta-otras");
  otras.append(mk("h3", null, "Otras formas de practicar"));
  const lista = mk("div", "ta-otras-lista");
  const contagio = ESTACIONES.find((st) => st.id === "contagio");
  const extra: [string, string, string, () => void][] = [
    ["casos", CASOS.nombre, CASOS.descripcion, () => elegirNivel(CASOS.id)],
    ["microscopio", MICROSCOPIO.nombre, MICROSCOPIO.descripcion, mostrarMicroscopio],
  ];
  if (contagio) extra.push(["contagio", contagio.nombre, contagio.descripcion, () => mostrarResumen(contagio.id)]);
  extra.push(["entrenador-virus", "Entrenador de Virus", "Baltimore, VIH paso a paso, CD4 y más", () => mostrarEntrenadorVirus(mostrarTablero)]);
  for (const [id, nombre, desc, fn] of extra) {
    const b = mk("button", "ta-otra");
    b.type = "button";
    b.onclick = () => fn();
    const t = mk("span");
    t.append(mk("strong", null, nombre), mk("small", null, desc));
    b.append(icono(id, 26), t);
    lista.append(b);
  }
  otras.append(lista);
  if (hayCorrector) {
    const fe = mk("div", "ta-flujo");
    const t = mk("span");
    t.append(mk("strong", null, "Flujograma con foto"), mk("small", null, "Hazlo en papel, mándale la foto a Claude y te corrige según el nivel."));
    const bs = mk("div", "row");
    bs.append(
      boton("Ver soluciones", "ghost", () => mostrarSolucionesFlujo(mostrarTablero)),
      boton("Virus", "primary", () => elegirModoFotoFlujo("virus", mostrarTablero)),
      boton("Hongos", "primary", () => elegirModoFotoFlujo("hongos", mostrarTablero)),
    );
    fe.append(icono("flujo-foto", 26), t, bs);
    otras.append(fe);
  }
  home.append(otras);
  pintarMarcador();
}

export const mostrarTablero = vista("el tablero", () => {
  if (esAncho()) return tableroAncho();
  const home = abrirTablero();
  vistaRepintable(mostrarTablero);
  home.className = "grid";
  home.append(atajosCurso(mostrarTablero));
  for (const t of tarjetas()) {
    const card = mk("article", "station");
    card.append(mk("h2", null, t.nombre), mk("p", null, t.descripcion));
    if (t.total) {
      const bar = mk("div", "bar");
      const fill = mk("span");
      fill.style.width = (100 * t.hechas / t.total) + "%";
      bar.append(fill);
      card.append(bar);
    }
    card.append(mk("p", "note", t.nota));
    const fila = mk("div", "row");
    fila.append(boton("Estudiar", "ghost", () => mostrarResumen(t.id)));
    if (t.examen) fila.append(boton("Examen", "ghost", t.examen));
    if (t.jugar) fila.append(boton(t.textoJugar ?? "Jugar", "primary", t.jugar));
    card.append(fila);
    home.append(card);
  }
  if (hayCorrector) {
    // Flujograma con foto: se juega aquí; la solución está en Estudio.
    const card = mk("article", "station fe-station");
    card.append(mk("h2", null, "Flujograma con foto"), mk("p", null, "Haz el flujograma de un caso en papel, mándale la foto a Claude y te corrige según el nivel."));
    card.append(mk("p", "note", CASOS_FLUJO.filter((c) => c.area === "virus").length + " casos de Virus · " + CASOS_FLUJO.filter((c) => c.area === "hongos").length + " de Hongos · nota sobre 20"));
    const fila = mk("div", "row");
    fila.append(
      boton("Ver soluciones", "ghost", () => mostrarSolucionesFlujo(mostrarTablero)),
      boton("Virus", "primary", () => elegirModoFotoFlujo("virus", mostrarTablero)),
      boton("Hongos", "primary", () => elegirModoFotoFlujo("hongos", mostrarTablero)),
    );
    card.append(fila);
    home.append(card);
  }
  pintarMarcador();
});

export const mostrarResumen = vista("el resumen", (id: string) => {
  const t = tarjetas().find((x) => x.id === id);
  if (!t) throw new AppError("Ese tema no existe.", "datos", id);
  const p = abrirPanel("jugar");
  p.append(mk("h2", null, t.nombre), mk("p", "study", t.resumen));
  const fila = mk("div", "row");
  fila.append(boton("Volver", "ghost", mostrarTablero));
  if (t.jugar) fila.append(boton(t.total ? "Jugar esta estación" : t.textoJugar ?? "Jugar", "primary", t.jugar));
  p.append(fila);
});
