/** INICIO: el curso dividido en Bacterias, Hongos, Virus y Parásitos. */
import { ESTACIONES, INDICE, REINOS } from "../content";
import { AppError, vista } from "../lib/errores";
import { boton, botonTarjeta, mk } from "../lib/dom";
import { CON_PREGUNTAS } from "../catalogo";
import { mostrarComentarios } from "./comentarios";
import { mostrarEstudio } from "./estudio/hub";
import { dominadasDe } from "../estado/progreso";
import { sesion } from "../servicios/sesion";
import { abrirPanel } from "../ui/marco";
import { gruposConMaterial, listaDeAgentes } from "./estudio/indice";
import { jugarTarjetas } from "./estudio/tarjetas";
import { elegirNivel, mostrarTablero } from "./jugar/tablero";

const gruposDe = (nombre: string) => {
  const sec = INDICE.find((s) => s.titulo === nombre);
  return sec ? gruposConMaterial(sec) : [];
};

export const mostrarInicio = vista("Inicio", () => {
  const p = abrirPanel("inicio", "inicio");
  p.append(mk("h2", null, sesion.modo === "cuenta" && sesion.apodo ? "Hola, " + sesion.apodo : "Inicio"));
  const intro = mk("section", "intro");
  intro.append(mk("p", "intro-lead", "Una forma de estudiar Microbiología y Parasitología jugando. Todo sale de lo visto en clase: las prácticas, el banco de laboratorio y preguntas revisadas por Mafer. La meta no es memorizar, sino entender el porqué, para poder responder aunque el profesor pregunte de otra forma."));
  const items = mk("div", "intro-items");
  const totalPreg = CON_PREGUNTAS.reduce((n, s) => n + s.preguntas.length, 0);
  items.append(
    botonTarjeta("intro-item", "Jugar", totalPreg + " preguntas en 4 niveles, fotos reales de microscopio, ahorcado y casos clínicos.", null, mostrarTablero),
    botonTarjeta("intro-item", "Estudio", "Buscador, tarjetas de repaso, tus errores, tablas clave y una ficha de cada agente.", null, mostrarEstudio),
    botonTarjeta("intro-item", "Comentarios", "Dudas, avisos y sugerencias entre compañeros.", null, mostrarComentarios),
  );
  intro.append(items);
  p.append(intro);
  p.append(mk("p", "note", "El curso se divide en cuatro grandes grupos. Elige uno para ver qué agentes se estudian y practicarlos."));
  const grid = mk("div", "reinos");
  for (const r of REINOS) {
    const st = ESTACIONES.find((s) => s.nombre === r.nombre);
    const agentes = gruposDe(r.nombre).flatMap((g) => g.items);
    const total = st?.preguntas.length ?? 0;
    const dom = st ? dominadasDe(st.id) : 0;
    const card = mk("article", "reino " + r.clave);
    card.append(mk("h3", null, r.nombre), mk("p", "rdesc", r.descripcion));
    const chips = mk("div", "rchips");
    agentes.slice(0, 7).forEach((a) => chips.append(mk("span", "rchip", a.nombre)));
    if (agentes.length > 7) chips.append(mk("span", "rchip more", "+" + (agentes.length - 7) + " más"));
    const bar = mk("div", "bar");
    const fill = mk("span");
    fill.style.width = total ? (100 * dom / total) + "%" : "0%";
    bar.append(fill);
    const fila = mk("div", "row");
    fila.append(boton("Ver todo", "ghost", () => mostrarReino(r.nombre)));
    if (st) fila.append(boton("Practicar", "primary", () => elegirNivel(st.id)));
    card.append(chips, bar, mk("small", "rstat", agentes.length + " agentes · " + total + " preguntas · " + dom + " dominadas"), fila);
    grid.append(card);
  }
  p.append(grid);
});

export const mostrarReino = vista("el grupo", (nombre: string) => {
  const r = REINOS.find((x) => x.nombre === nombre);
  if (!r) throw new AppError("Ese grupo no existe.", "datos", nombre);
  const st = ESTACIONES.find((s) => s.nombre === nombre);
  const p = abrirPanel("inicio");
  p.append(boton("← Inicio", "ghost back", mostrarInicio), mk("h2", null, nombre), mk("p", "note", r.descripcion));
  if (st) {
    const fila = mk("div", "row");
    fila.append(
      boton("Practicar " + nombre.toLowerCase(), "primary", () => elegirNivel(st.id)),
      boton("Tarjetas de repaso", "ghost", () => jugarTarjetas(st.preguntas.map((q) => ({ est: st, q })), nombre, () => mostrarReino(nombre))),
    );
    const res = mk("details", "topic");
    res.append(mk("summary", null, "Resumen del tema"), mk("p", "study", st.resumen));
    p.append(fila, res);
  }
  p.append(mk("p", "note", "Toca un agente para ver todo lo que hay sobre él: resúmenes, fichas, tablas y preguntas."));
  for (const g of gruposDe(nombre)) p.append(mk("h4", "grp-title", g.grupo), listaDeAgentes(g.items, () => mostrarReino(nombre)));
});
