/** ENTRENADOR DE VIRUS: ejercicios cortos que se repiten hasta dominarlos. */
import {
  CO_TEST, ESQUEMAS, GRUPOS_BALTIMORE, PASOS_DX_VIH, PROTEINAS, RANGOS_CARGA, RANGOS_CD4, SITUACIONES_TARV, VIRUS_BALTIMORE,
  type GrupoBaltimore,
} from "../../content/entrenador-virus";
import { alAzar, mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel } from "../../ui/marco";
import { jugarPreguntas, type ItemQuiz } from "./quiz";
import { mostrarTablero } from "./tablero";
import { mostrarFlujogramas } from "../estudio/flujogramas";
import { FLUJOGRAMAS } from "../../content";

const POR_RONDA = 10;
const PUNTOS = 10;

/** Ítem con la correcta y hasta 3 distractores distintos, mezclados. */
function item(pregunta: string, correcta: string, pool: string[], extra: Partial<ItemQuiz> = {}): ItemQuiz {
  const distractores = mezclar([...new Set(pool.filter((x) => x !== correcta))]).slice(0, 3);
  const opciones = mezclar([correcta, ...distractores]);
  return { pregunta, opciones, respuesta: opciones.indexOf(correcta), ...extra };
}

const entre = (a: number, b: number) => a + Math.floor(Math.random() * (b - a + 1));
const redondo = (n: number, paso: number) => Math.max(0, Math.round(n / paso) * paso);
const fmt = (n: number) => n.toLocaleString("es-PE");

// ---- Generadores ----
function baltimore(): ItemQuiz[] {
  const grupos = Object.values(GRUPOS_BALTIMORE);
  return mezclar(VIRUS_BALTIMORE).slice(0, POR_RONDA).map(([virus, g, familia]) => {
    // Distractores cercanos: los grupos vecinos confunden más.
    const orden = Object.keys(GRUPOS_BALTIMORE) as GrupoBaltimore[];
    const i = orden.indexOf(g);
    const cercanos = [orden[i - 1], orden[i + 1], g === "VI" ? "VII" : g === "VII" ? "VI" : undefined]
      .filter((x): x is GrupoBaltimore => !!x).map((x) => GRUPOS_BALTIMORE[x]);
    const pool = [...new Set([...cercanos, ...mezclar(grupos)])];
    const it = item("¿En qué grupo de Baltimore está: " + virus + "?", GRUPOS_BALTIMORE[g], pool, {
      pista: "Familia " + familia + ".",
      explicacion: virus + ": " + familia + " → grupo " + GRUPOS_BALTIMORE[g] + ".",
    });
    // Mantiene el orden I → VII en las opciones para que se lea como tabla.
    const ordenadas = [...it.opciones].sort((a, b) => grupos.indexOf(a) - grupos.indexOf(b));
    return { ...it, opciones: ordenadas, respuesta: ordenadas.indexOf(GRUPOS_BALTIMORE[g]) };
  });
}

function cd4(): ItemQuiz[] {
  const textos = RANGOS_CD4.map((r) => r[2]);
  const items: ItemQuiz[] = [];
  for (let k = 0; k < 6; k++) {
    const [a, b, interp] = alAzar(RANGOS_CD4)!;
    const n = redondo(entre(a, b), 5);
    const opciones = mezclar([interp, ...mezclar(textos.filter((t) => t !== interp)).slice(0, 3)]).sort((x, y) => textos.indexOf(x) - textos.indexOf(y));
    items.push({
      pregunta: "Paciente con VIH y CD4 de " + fmt(n) + " células/mm³. ¿Cómo se interpreta?",
      opciones, respuesta: opciones.indexOf(interp),
      pista: "SIDA es menos de 200; normal es 500 a 1 200.",
      explicacion: "Normal: 500–1 200. Moderada: 350–500. Riesgo y profilaxis: 200–350. SIDA: < 200. Riesgo muy alto: < 50.",
    });
  }
  const cargas = RANGOS_CARGA.map((r) => r[2]);
  for (let k = 0; k < 4; k++) {
    const [a, b, interp] = alAzar(RANGOS_CARGA)!;
    const n = b < 20 ? entre(a, b) : redondo(entre(a, b), b > 10000 ? 1000 : 50);
    const texto = b < 20 ? "menos de 20 copias/mL" : fmt(n) + " copias/mL";
    items.push({
      pregunta: "Carga viral de VIH: " + texto + ". ¿Cómo se clasifica?",
      opciones: cargas, respuesta: cargas.indexOf(interp),
      pista: "Los cortes son 1 000 y 10 000.",
      explicacion: "Indetectable: < 20–50 copias/mL. Baja: < 1 000. Moderada: 1 000–10 000. Alta: > 10 000.",
    });
  }
  return mezclar(items);
}

function tarv(): ItemQuiz[] {
  const todos = Object.values(ESQUEMAS);
  return mezclar(SITUACIONES_TARV).slice(0, POR_RONDA).map((s) => {
    const opciones = [...todos].sort();
    const correcta = ESQUEMAS[s.esquema];
    // 5 esquemas: se quita uno al azar que no sea la respuesta, para dejar 4 opciones.
    const quitar = alAzar(opciones.filter((o) => o !== correcta))!;
    const finales = opciones.filter((o) => o !== quitar);
    return { caso: s.caso, pregunta: "¿Qué esquema indica el MINSA?", opciones: finales, respuesta: finales.indexOf(correcta), pista: "TLD es la regla; piensa qué la impide.", explicacion: s.porque };
  });
}

function coTest(): ItemQuiz[] {
  const manejos = CO_TEST.map((c) => c.manejo);
  const esColpo = (t: string) => t.startsWith("Colposcopia");
  return mezclar([...CO_TEST, ...mezclar(CO_TEST)].slice(0, 8)).map((c) => {
    // Evita poner dos variantes de «colposcopia» juntas: confundirían sin enseñar.
    const pool = manejos.filter((m) => m !== c.manejo && !(esColpo(m) && esColpo(c.manejo)));
    return item("Citología: " + c.citologia + ". VPH: " + c.vph + ". ¿Qué se hace?", c.manejo, pool, {
      pista: "Mira primero si hay VPH 16/18 o lesión de alto grado.",
      explicacion: c.porque,
    });
  });
}

function proteinas(): ItemQuiz[] {
  return mezclar(PROTEINAS).slice(0, POR_RONDA).map((p) => {
    const mismos = PROTEINAS.filter((x) => x.virus === p.virus && x !== p);
    const otros = PROTEINAS.filter((x) => x.virus !== p.virus);
    const pool = [...mezclar(mismos), ...mezclar(otros)];
    if (Math.random() < 0.5) {
      return item("¿Qué hace " + p.nombre + " del " + p.virus + "?", p.funcion, pool.map((x) => x.funcion), { pista: "Es del " + p.virus + ".", explicacion: p.nombre + ": " + p.funcion + "." });
    }
    return item("¿Qué proteína del " + p.virus + "… " + p.funcion.charAt(0).toLowerCase() + p.funcion.slice(1) + "?", p.nombre, pool.map((x) => x.nombre), { explicacion: p.nombre + ": " + p.funcion + "." });
  });
}

function diagnosticoVih(): ItemQuiz[] {
  // Escenarios completos y en orden: cada paso continúa el anterior.
  return mezclar(PASOS_DX_VIH).flatMap((esc) => esc.pasos.map((paso, i) =>
    item(paso.situacion, paso.correcta, paso.distractores, {
      caso: esc.titulo + " · paso " + (i + 1) + " de " + esc.pasos.length,
      explicacion: paso.porque,
    }),
  ));
}

const EJERCICIOS: { id: string; titulo: string; detalle: string; generar: () => ItemQuiz[] }[] = [
  { id: "baltimore", titulo: "Clasificación de Baltimore", detalle: VIRUS_BALTIMORE.length + " virus: ¿en qué grupo va cada uno?", generar: baltimore },
  { id: "cd4", titulo: "VIH: CD4 y carga viral", detalle: "Te doy un valor y lo interpretas", generar: cd4 },
  { id: "dx", titulo: "VIH: diagnóstico paso a paso", detalle: PASOS_DX_VIH.length + " situaciones: tamizaje, discordantes, ventana y neonato", generar: diagnosticoVih },
  { id: "tarv", titulo: "VIH: ¿qué esquema le doy?", detalle: SITUACIONES_TARV.length + " situaciones del MINSA", generar: tarv },
  { id: "cotest", titulo: "VPH: manejo del co-test", detalle: "Citología + VPH → qué se hace", generar: coTest },
  { id: "proteinas", titulo: "Proteínas y su función", detalle: PROTEINAS.length + " proteínas del VIH, VPH y HTLV-1", generar: proteinas },
];

function jugarEjercicio(id: string, volver: () => void): void {
  const e = EJERCICIOS.find((x) => x.id === id) ?? EJERCICIOS[0];
  conDatoCurioso(() => {
    jugarPreguntas("Entrenador · " + e.titulo, e.generar(), PUNTOS, {
      pista: "mitad",
      alSalir: () => mostrarEntrenadorVirus(volver),
      otraVez: () => jugarEjercicio(id, volver),
      textoVolver: "Volver al entrenador",
    });
  }, "virus");
}

export const mostrarEntrenadorVirus = vista("el entrenador de virus", (volver: () => void = mostrarTablero) => {
  const p = abrirPanel("jugar");
  p.append(mk("h2", null, "Entrenador de Virus"), mk("p", "note", "Ejercicios cortos para fijar lo que más toman: clasificación, VIH, VPH y proteínas. Cada ronda sale distinta."));
  const menu = mk("div", "menu");
  for (const e of EJERCICIOS) {
    const b = boton("", null, () => jugarEjercicio(e.id, volver));
    b.dataset.ejercicio = e.id;
    b.append(mk("span", null, e.titulo), mk("small", null, e.detalle));
    menu.append(b);
  }
  const flujos = boton("", null, () => mostrarFlujogramas(() => mostrarEntrenadorVirus(volver), "jugar"));
  flujos.dataset.ejercicio = "flujogramas";
  flujos.append(mk("span", null, "Flujogramas (preguntas abiertas)"), mk("small", null, FLUJOGRAMAS.filter((f) => f.tema === "Virus").length + " flujogramas: respóndelos o ármalos en orden"));
  menu.append(flujos);
  p.append(menu, boton("Volver", "ghost", volver));
});

// Exportado para las pruebas: genera una ronda sin dibujar nada.
export const _generadores = { baltimore, cd4, tarv, coTest, proteinas, diagnosticoVih };
