/** INICIO: el curso dividido en Bacterias, Hongos, Virus y Parásitos. */
import { ESTACIONES, INDICE, REINOS } from "../content";
import { AppError, vista } from "../lib/errores";
import { boton, botonTarjeta, mk } from "../lib/dom";
import { CON_PREGUNTAS } from "../catalogo";
import { mostrarComentarios } from "./comentarios";
import { mostrarEstudio } from "./estudio/hub";
import { dominadasDe, estado, META_DIARIA, respondidasHoy } from "../estado/progreso";
import { sesion } from "../servicios/sesion";
import { abrirPanel } from "../ui/marco";
import { gruposConMaterial, listaDeAgentes } from "./estudio/indice";
import { dePregunta, jugarTarjetas } from "./estudio/tarjetas";
import { atajosCurso, elegirNivel, mostrarTablero } from "./jugar/tablero";
import { EXAMEN_CURSO, introExamen, PREGUNTAS_EXAMEN, PREGUNTAS_EXAMEN_CURSO } from "./jugar/examen";
import { mostrarRepaso, resumenRepaso } from "./jugar/repaso";
import { buscar } from "./estudio/buscador";
import { estacion } from "../catalogo";
import { NOMBRE_NIVEL } from "../content";
import { esAncho, vistaRepintable } from "../ui/ancho";
import { anillo, icono } from "../ui/secciones";
import { protegido } from "../lib/errores";
import { mostrarEntrenadorVirus } from "./jugar/entrenador-virus";

const gruposDe = (nombre: string) => {
  const sec = INDICE.find((s) => s.titulo === nombre);
  return sec ? gruposConMaterial(sec) : [];
};

/** Novedades del curso que se muestran en el Inicio de computadora. */
const NOVEDADES: { etiqueta: string; cls: string; texto: string }[] = [
  { etiqueta: "Estudio", cls: "nov-estudio", texto: "Apuntes de las clases 7, 8 y 9 y un resumen por microorganismo" },
  { etiqueta: "Nuevo", cls: "nov-nuevo", texto: "Secciones de Tuberculosis y Resistencia" },
];

/** Tarjeta que es un solo botón grande. */
function tarjetaBoton(cls: string, accion: () => unknown, etiqueta: string): HTMLButtonElement {
  const b = mk("button", cls);
  b.type = "button";
  b.setAttribute("aria-label", etiqueta);
  b.onclick = protegido(accion, etiqueta);
  return b;
}

/** INICIO para computadora: tablero con meta del día, continuar, examen, avance por reino y novedades. */
function tableroInicio(): void {
  const p = abrirPanel("inicio", "inicio inicio-ancho");
  vistaRepintable(mostrarInicio);

  const cab = mk("div", "ia-cab");
  const hoy = new Date().toLocaleDateString("es-PE", { weekday: "long", day: "numeric", month: "long" });
  const saludo = mk("div");
  saludo.append(
    mk("p", "ia-fecha", hoy.charAt(0).toUpperCase() + hoy.slice(1) + " · Microbiología y Parasitología"),
    mk("h2", "ia-hola", sesion.modo === "cuenta" && sesion.apodo ? "Hola, " + sesion.apodo.split(" ")[0] : "Hola"),
  );
  const busca = mk("div", "ia-buscar");
  const inp = mk("input");
  inp.type = "search"; inp.placeholder = "Buscar agente, tema o pregunta…"; inp.maxLength = 80;
  inp.setAttribute("aria-label", "Buscar en el material de estudio");
  inp.onkeydown = (e) => { if (e.key === "Enter" && inp.value.trim()) buscar(inp.value.trim()); };
  busca.append(icono("buscar", 18), inp);
  cab.append(saludo, busca);

  // Fila 1: meta del día, continuar, examen
  const fila = mk("section", "ia-fila");
  fila.setAttribute("aria-label", "Para hoy");

  const n = respondidasHoy();
  const meta = mk("div", "ia-meta");
  const textoMeta = n >= META_DIARIA ? "¡Cumpliste la meta de hoy!" : n ? n + " preguntas hoy, te faltan " + (META_DIARIA - n) : "Responde " + META_DIARIA + " preguntas hoy";
  const cuerpoMeta = mk("div", "ia-meta-txt");
  cuerpoMeta.append(mk("span", "ia-etq", "Meta del día"), mk("h3", null, textoMeta), mk("small", null, resumenRepaso()));
  cuerpoMeta.append(boton("Repaso de hoy", "ia-btn-meta", () => mostrarRepaso(mostrarInicio)));
  meta.append(anillo(n / META_DIARIA, 96, 10, Math.min(n, META_DIARIA) + "/" + META_DIARIA, "Meta del día: " + n + " de " + META_DIARIA + " preguntas"), cuerpoMeta);

  const u = estado.ultima ? estacion(estado.ultima.est) : undefined;
  let seguir: HTMLElement;
  if (u && estado.ultima) {
    const nivel = estado.ultima.nivel;
    const delNivel = u.preguntas.filter((q) => q.nivel === nivel);
    const dom = delNivel.filter((q) => estado.dominadas[u.id]?.[q.id]).length;
    seguir = tarjetaBoton("ia-seguir sec-" + u.id, () => elegirNivel(u.id), "Continuar con " + u.nombre + ", nivel " + NOMBRE_NIVEL[nivel]);
    const cab2 = mk("span", "ia-seguir-cab");
    const ic = mk("span", "sec-ico");
    ic.append(icono(u.id, 22));
    const tt = mk("span");
    tt.append(mk("strong", null, u.nombre), mk("small", null, "Nivel " + NOMBRE_NIVEL[nivel]));
    cab2.append(ic, tt);
    const bar = mk("span", "ia-barra");
    const fill = mk("span");
    fill.style.width = (delNivel.length ? (100 * dom) / delNivel.length : 0) + "%";
    bar.append(fill);
    seguir.append(mk("span", "ia-etq", "Continuar donde lo dejaste"), cab2, bar, mk("small", "ia-pie", dom + " de " + delNivel.length + " dominadas en este nivel"));
  } else {
    seguir = tarjetaBoton("ia-seguir", mostrarTablero, "Empezar a jugar");
    seguir.append(mk("span", "ia-etq", "Continuar donde lo dejaste"), mk("strong", "ia-vacio", "Aún no has jugado"), mk("small", "ia-pie", "Elige una sección en Jugar y aquí verás por dónde vas."));
  }

  const ex = estado.examenes[EXAMEN_CURSO];
  const examen = tarjetaBoton("ia-examen", () => introExamen(EXAMEN_CURSO, mostrarInicio), "Examen del curso");
  const pieEx = mk("span", "ia-pie-fila");
  pieEx.append(mk("small", null, ex ? "Tu mejor nota: " + ex.mejor + "/20" : "Aún no lo has dado"), mk("span", "ia-ir", "Empezar"));
  examen.append(mk("span", "ia-etq", "Examen del curso"), mk("strong", null, PREGUNTAS_EXAMEN_CURSO + " preguntas de todas las secciones, con tiempo y nota sobre 20"), pieEx);

  fila.append(meta, seguir, examen);

  // Avance por reino
  const avance = mk("section", "ia-avance");
  const cabA = mk("div", "ia-sec-cab");
  cabA.append(mk("h3", null, "Tu avance"), boton("Ver todas las secciones", "ia-link", mostrarTablero));
  const reinos = mk("div", "ia-reinos");
  for (const r of REINOS) {
    const st = ESTACIONES.find((s) => s.nombre === r.nombre);
    const total = st?.preguntas.length ?? 0;
    const dom = st ? dominadasDe(st.id) : 0;
    const card = tarjetaBoton("ia-reino sec-" + (st?.id ?? r.clave), () => mostrarReino(r.nombre), r.nombre);
    card.append(mk("strong", null, r.nombre), mk("span", null, r.descripcion), mk("small", null, total + " preguntas · " + (total ? Math.round((100 * dom) / total) : 0) + " % dominado"));
    reinos.append(card);
  }
  avance.append(cabA, reinos);

  const nov = mk("section", "ia-novedades");
  nov.setAttribute("aria-label", "Novedades");
  for (const x of NOVEDADES) {
    const it = mk("div", "ia-nov");
    it.append(mk("span", "ia-tag " + x.cls, x.etiqueta), mk("span", null, x.texto));
    nov.append(it);
  }

  p.append(cab, fila, avance, nov, mk("p", "ia-nota", "Contenido tomado de los PDF del curso y los bancos del laboratorio."));
}

export const mostrarInicio = vista("Inicio", () => {
  if (esAncho()) return tableroInicio();
  const p = abrirPanel("inicio", "inicio");
  vistaRepintable(mostrarInicio);
  p.append(mk("h2", null, sesion.modo === "cuenta" && sesion.apodo ? "Hola, " + sesion.apodo : "Inicio"));
  const intro = mk("section", "intro");
  intro.append(mk("p", "intro-lead", "Una forma de estudiar Microbiología y Parasitología jugando. Todo sale de lo visto en clase: las prácticas, el banco de laboratorio y preguntas revisadas una por una. La meta no es memorizar, sino entender el porqué, para poder responder aunque el profesor pregunte de otra forma."));
  const items = mk("div", "intro-items");
  const totalPreg = CON_PREGUNTAS.reduce((n, s) => n + s.preguntas.length, 0);
  items.append(
    botonTarjeta("intro-item", "Jugar", totalPreg + " preguntas en 4 niveles, fotos de microscopio, ahorcado y casos clínicos.", null, mostrarTablero),
    botonTarjeta("intro-item", "Estudio", "Buscador, tarjetas de repaso, tus errores, tablas clave y una ficha de cada agente.", null, mostrarEstudio),
    botonTarjeta("intro-item", "Comentarios", "Dudas, avisos y sugerencias entre compañeros.", null, mostrarComentarios),
  );
  intro.append(items);
  p.append(intro, atajosCurso(mostrarInicio));
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
      boton("Tarjetas de repaso", "ghost", () => jugarTarjetas(st.preguntas.map((q) => dePregunta({ est: st, q })), nombre, () => mostrarReino(nombre))),
    );
    const volverAqui = () => mostrarReino(nombre);
    if (st.preguntas.length >= PREGUNTAS_EXAMEN) fila.append(boton("Modo examen", "ghost", () => introExamen(st.id, volverAqui)));
    if (st.id === "virus") fila.append(boton("Entrenador de Virus", "ghost", () => mostrarEntrenadorVirus(volverAqui)));
    const res = mk("details", "topic");
    res.append(mk("summary", null, "Resumen del tema"), mk("p", "study", st.resumen));
    p.append(fila, res);
  }
  p.append(mk("p", "note", "Toca un agente para ver todo lo que hay sobre él: resúmenes, fichas, tablas y preguntas."));
  for (const g of gruposDe(nombre)) p.append(mk("h4", "grp-title", g.grupo), listaDeAgentes(g.items, () => mostrarReino(nombre)));
});
