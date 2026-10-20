/** MICROSCOPIO: fotos reales, identificar por criterio y pares que se confunden. */
import { AGENTES_MICROSCOPIO, FOTOS, NOMBRE_NIVEL, PARES, PISTA, PUNTOS, type AgenteMicroscopio, type Nivel } from "../../content";
import { agente } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel, type Seccion } from "../../ui/marco";
import { elegirModo } from "./niveles";
import { jugarPreguntas, type ItemQuiz } from "./quiz";
import { mostrarTablero } from "./tablero";

const N_OPCIONES: Record<Nivel, number> = { f: 3, m: 4, d: 4, x: 4 };
const DESCRIPCION: Record<Nivel, string> = {
  f: "3 opciones · pista gratis",
  m: "4 opciones · pista a mitad de puntos",
  d: "4 opciones · sin pistas",
  x: "4 opciones, siempre con el hongo que más se le parece · sin pistas",
};

/** Opciones: la correcta, primero los agentes con los que se confunde y luego otros al azar. */
function opciones(correcta: string, pool: string[], n: number): string[] {
  const pares = PARES.filter((x) => x.a === correcta || x.b === correcta).map((x) => (x.a === correcta ? x.b : x.a));
  const resto = mezclar(pool.filter((x) => x !== correcta && !pares.includes(x)));
  return mezclar([...new Set([correcta, ...pares, ...resto])].slice(0, n));
}

function itemsFoto(k: Nivel): ItemQuiz[] {
  const hongos = AGENTES_MICROSCOPIO.filter((x) => x.grupo === "Hongos").map((x) => x.nombre);
  // Ronda equilibrada: una foto de cada agente y el resto sin repetir foto.
  const porAgente = new Map<string, typeof FOTOS>();
  for (const f of mezclar(FOTOS)) porAgente.set(f.agente, [...(porAgente.get(f.agente) ?? []), f]);
  const ronda = [...porAgente.values()].map((l) => l.shift()!).filter(Boolean);
  const resto = mezclar([...porAgente.values()].flat());
  while (ronda.length < 10 && resto.length) ronda.push(resto.shift()!);
  return mezclar(ronda).flatMap((f) => {
    const ag = agente(f.agente);
    if (!ag) return [];
    const ops = opciones(f.agente, hongos, N_OPCIONES[k]);
    return [{ img: f.archivo, pregunta: "¿Qué es? (foto " + f.numero + ")", opciones: ops, respuesta: ops.indexOf(f.agente), pista: ag.clave, ficha: ag }];
  });
}

function itemsCriterio(k: Nivel): ItemQuiz[] {
  return mezclar(AGENTES_MICROSCOPIO).slice(0, 10).map((ag) => {
    const pool = AGENTES_MICROSCOPIO.filter((x) => x.grupo === ag.grupo || (ag.grupo === "Bacterias" && x.grupo === "Hongos")).map((x) => x.nombre);
    const ops = opciones(ag.nombre, pool, N_OPCIONES[k]);
    return { caso: ag.criterio, pregunta: "¿Qué es?", opciones: ops, respuesta: ops.indexOf(ag.nombre), pista: "Producción: " + ag.produce, ficha: ag };
  });
}

function itemsPares(): ItemQuiz[] {
  return mezclar(PARES).flatMap((par) => {
    const objetivo = Math.random() < 0.5 ? par.a : par.b;
    const ag = agente(objetivo);
    if (!ag) return [];
    const ops = [par.a, par.b];
    return [{ caso: ag.criterio, pregunta: "¿Cuál de los dos es?", opciones: ops, respuesta: ops.indexOf(objetivo), pista: "Fíjate en: " + ag.clave, explicacion: par.diferencia, ficha: ag }];
  });
}

function jugar(nombre: string, generar: (k: Nivel) => ItemQuiz[]): void {
  elegirModo({
    titulo: nombre,
    memoria: "micro-" + nombre,
    detalle: (k) => DESCRIPCION[k],
    alVolver: mostrarMicroscopio,
    alConfirmar: (k) => conDatoCurioso(() => {
      jugarPreguntas(nombre + " · " + NOMBRE_NIVEL[k], generar(k), PUNTOS[k], {
        pista: PISTA[k],
        alSalir: mostrarMicroscopio,
        otraVez: () => jugar(nombre, generar),
        textoVolver: "Volver al microscopio",
      });
    }, "micro"),
  });
}

export const mostrarMicroscopio = vista("el microscopio", () => {
  const p = abrirPanel("jugar");
  p.append(mk("h2", null, "Microscopio"), mk("p", "note", "Fotos reales del laboratorio del curso."));
  const menu = mk("div", "menu");
  const conFoto = new Set(FOTOS.map((f) => f.agente)).size;
  const opcionesMenu: [string, string, () => void][] = [
    ["Identificar fotos", "Ronda de 10 fotos reales al azar, " + FOTOS.length + " en total", () => jugar("Identificar fotos", itemsFoto)],
    ["Por criterio", "Te describo lo que se ve; tú dices qué es (" + AGENTES_MICROSCOPIO.length + " estructuras)", () => jugar("Por criterio", itemsCriterio)],
    ["Pares que se confunden", PARES.length + " pares donde más se pierden puntos", () => jugar("Pares que se confunden", itemsPares)],
    ["Mapa de cobertura", "Qué tenemos de cada estructura: foto " + conFoto + " de " + AGENTES_MICROSCOPIO.length, () => mostrarCobertura(mostrarMicroscopio, "jugar")],
  ];
  for (const [t, s, fn] of opcionesMenu) {
    const b = boton("", null, fn);
    b.append(mk("span", null, t), mk("small", null, s));
    menu.append(b);
  }
  p.append(menu, boton("Volver al tablero", "ghost", mostrarTablero));
});

export const mostrarCobertura = vista("el mapa de cobertura", (volver: () => void, seccion: Seccion) => {
  const p = abrirPanel(seccion);
  p.append(mk("h2", null, "Mapa de cobertura"));
  const conteo = new Map<string, number>();
  FOTOS.forEach((f) => conteo.set(f.agente, (conteo.get(f.agente) ?? 0) + 1));
  p.append(mk("p", "note", "Fotos reales en " + conteo.size + " de " + AGENTES_MICROSCOPIO.length + " estructuras. Las demás se practican con el criterio escrito. Cada práctica nueva puede llenar una casilla de foto."));
  const wrap = mk("div", "tablewrap");
  const t = mk("table", "cov");
  const head = mk("tr");
  ["Estructura", "Fotos", "Criterio", "Produce", "Tratamiento"].forEach((h) => head.append(mk("th", null, h)));
  t.append(head);
  let grupo = "";
  AGENTES_MICROSCOPIO.forEach((ag: AgenteMicroscopio) => {
    if (ag.grupo !== grupo) {
      grupo = ag.grupo;
      const gr = mk("tr"); const td = mk("td", "grp", grupo); td.colSpan = 5; gr.append(td); t.append(gr);
    }
    const tr = mk("tr");
    const nombre = mk("td"); nombre.append(mk("em", null, ag.nombre));
    const n = conteo.get(ag.nombre) ?? 0;
    tr.append(nombre, mk("td", n ? "yes" : "no", n ? String(n) : "—"), mk("td", "yes", "✓"), mk("td", "yes", "✓"), mk("td", "yes", "✓"));
    t.append(tr);
  });
  wrap.append(t);
  p.append(wrap, boton("Volver", "ghost", volver));
});
