/**
 * MODO EXAMEN: simula un examen real.
 * 20 preguntas mezcladas de los 4 niveles, con tiempo, sin pistas y sin ver si acertaste
 * hasta el final. Se puede volver atrás y cambiar respuestas. Al terminar: nota sobre 20,
 * revisión con explicaciones, y lo fallado pasa a «Mis errores».
 */
import { NOMBRE_NIVEL, type Estacion, type Nivel, type Pregunta } from "../../content";
import { CON_PREGUNTAS, enunciado, estacion, todasLasPreguntas } from "../../catalogo";
import { mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { acierto, estado, fallo, registrarExamen } from "../../estado/progreso";
import { abrirPanel, alSalirDeVista, pintarMarcador } from "../../ui/marco";
import { aItem, type ItemQuiz } from "./quiz";
import { reportarError } from "../../ui/reportar";

export const PREGUNTAS_EXAMEN = 20;
export const SEGUNDOS_POR_PREGUNTA = 90;
export const NOTA_APROBATORIA = 11;
/** Reparto por nivel: como un examen real, la mayoría son de dificultad media y alta. */
const REPARTO: Record<Nivel, number> = { f: 4, m: 6, d: 6, x: 4 };
const PUNTOS: Record<Nivel, number> = { f: 5, m: 10, d: 20, x: 40 };

interface Reactivo { q: Pregunta; est: Estacion; item: ItemQuiz; elegida: number | null }

/** Id especial del examen de todo el curso. */
export const EXAMEN_CURSO = "curso";
export const PREGUNTAS_EXAMEN_CURSO = 30;
const REPARTO_CURSO: Record<Nivel, number> = { f: 6, m: 9, d: 9, x: 6 };

interface FuenteExamen { id: string; nombre: string; total: number; armar: () => { q: Pregunta; est: Estacion }[] }

/**
 * Examen de todo el curso: respeta el reparto por nivel y, dentro de cada nivel,
 * va tomando preguntas de cada sección por turnos para que todas aparezcan.
 */
export function armarExamenCurso(total = PREGUNTAS_EXAMEN_CURSO): { q: Pregunta; est: Estacion }[] {
  const todas = todasLasPreguntas();
  const elegidas: { q: Pregunta; est: Estacion }[] = [];
  const escala = total / PREGUNTAS_EXAMEN_CURSO;
  for (const k of Object.keys(REPARTO_CURSO) as Nivel[]) {
    const cuota = Math.round(REPARTO_CURSO[k] * escala);
    const porSeccion = mezclar(CON_PREGUNTAS.map((est) => mezclar(todas.filter((x) => x.est.id === est.id && x.q.nivel === k)))).filter((l) => l.length);
    let tomadas = 0;
    while (tomadas < cuota && porSeccion.some((l) => l.length)) {
      for (const l of porSeccion) {
        if (tomadas >= cuota) break;
        const x = l.shift();
        if (x) { elegidas.push(x); tomadas += 1; }
      }
    }
  }
  const resto = mezclar(todas.filter((x) => !elegidas.includes(x)));
  while (elegidas.length < total && resto.length) elegidas.push(resto.shift()!);
  return mezclar(elegidas.slice(0, total));
}

function fuenteExamen(estId: string): FuenteExamen {
  if (estId === EXAMEN_CURSO) {
    const n = Math.min(PREGUNTAS_EXAMEN_CURSO, todasLasPreguntas().length);
    return { id: EXAMEN_CURSO, nombre: "Todo el curso", total: n, armar: () => armarExamenCurso(n) };
  }
  const st = estacion(estId);
  if (!st) throw new AppError("Ese tema no existe.", "datos", estId);
  return { id: st.id, nombre: st.nombre, total: Math.min(PREGUNTAS_EXAMEN, st.preguntas.length), armar: () => armarExamen(st.preguntas).map((q) => ({ q, est: st })) };
}

/** Elige las preguntas respetando el reparto; si un nivel no alcanza, completa con otros. */
export function armarExamen(preguntas: Pregunta[], total = PREGUNTAS_EXAMEN): Pregunta[] {
  const elegidas: Pregunta[] = [];
  for (const k of Object.keys(REPARTO) as Nivel[]) elegidas.push(...mezclar(preguntas.filter((q) => q.nivel === k)).slice(0, REPARTO[k]));
  const resto = mezclar(preguntas.filter((q) => !elegidas.includes(q)));
  while (elegidas.length < Math.min(total, preguntas.length) && resto.length) elegidas.push(resto.shift()!);
  return mezclar(elegidas.slice(0, total));
}

export const notaSobre20 = (aciertos: number, total: number): number => (total ? Math.round((20 * aciertos) / total) : 0);
const mmss = (s: number) => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");

export const introExamen = vista("el modo examen", (estId: string, volver: () => void) => {
  const st = fuenteExamen(estId);
  const p = abrirPanel("jugar", "examen");
  const total = st.total;
  const minutos = Math.round((total * SEGUNDOS_POR_PREGUNTA) / 60);
  p.append(mk("h2", null, "Modo examen · " + st.nombre));
  const reglas = mk("ul", "exam-reglas");
  [
    total + " preguntas de los 4 niveles, mezcladas" + (st.id === EXAMEN_CURSO ? ", de todas las secciones del curso" : ""),
    minutos + " minutos; al acabarse el tiempo se entrega solo",
    "Sin pistas y sin ver si acertaste hasta el final",
    "Puedes volver atrás y cambiar respuestas",
    "Nota sobre 20; se aprueba con " + NOTA_APROBATORIA,
  ].forEach((t) => reglas.append(mk("li", null, t)));
  p.append(reglas);
  const r = estado.examenes[estId];
  if (r) p.append(mk("p", "exam-record", "Tu mejor nota: " + r.mejor + " · última: " + r.ultima + " · " + r.intentos + (r.intentos === 1 ? " intento" : " intentos")));
  const fila = mk("div", "row");
  fila.append(boton("Empezar examen", "primary", () => rendirExamen(estId, volver)), boton("Volver", "ghost", volver));
  p.append(fila);
});

export const rendirExamen = vista("el examen", (estId: string, volver: () => void) => {
  const st = fuenteExamen(estId);
  const reactivos: Reactivo[] = st.armar().map(({ q, est }) => ({ q, est, item: aItem(q, est), elegida: null }));
  if (!reactivos.length) throw new AppError("Este tema todavía no tiene preguntas.", "datos", estId);

  const p = abrirPanel("jugar", "examen");
  const duracion = reactivos.length * SEGUNDOS_POR_PREGUNTA;
  const inicio = Date.now();
  let actual = 0;
  let terminado = false;

  // Barra superior: tiempo y progreso. El panel se crea una vez; solo se redibuja el cuerpo.
  const barra = mk("div", "exam-bar");
  const reloj = mk("strong", "exam-reloj", mmss(duracion));
  reloj.setAttribute("role", "timer");
  reloj.setAttribute("aria-label", "Tiempo restante");
  const progreso = mk("span", "exam-prog");
  barra.append(mk("span", "exam-tit", st.nombre), progreso, reloj);
  const puntos = mk("nav", "exam-dots");
  puntos.setAttribute("aria-label", "Ir a la pregunta");
  const cuerpo = mk("div", "exam-cuerpo");
  p.append(barra, puntos, cuerpo);

  const restante = () => Math.max(0, duracion - Math.floor((Date.now() - inicio) / 1000));
  const tic = setInterval(() => {
    if (terminado) return;
    const s = restante();
    reloj.textContent = mmss(s);
    reloj.classList.toggle("poco", s <= 120);
    if (s === 0) entregar(true);
  }, 1000);
  alSalirDeVista(() => { terminado = true; clearInterval(tic); });

  const pintarPuntos = () => {
    puntos.replaceChildren();
    reactivos.forEach((r, i) => {
      const b = boton(String(i + 1), "exam-dot" + (r.elegida != null ? " ok" : "") + (i === actual ? " on" : ""), () => { actual = i; pintar(); });
      b.setAttribute("aria-label", "Pregunta " + (i + 1) + (r.elegida != null ? ", respondida" : ", sin responder"));
      if (i === actual) b.setAttribute("aria-current", "step");
      puntos.append(b);
    });
    const hechas = reactivos.filter((r) => r.elegida != null).length;
    progreso.textContent = hechas + " de " + reactivos.length + " respondidas";
  };

  const pintar = () => {
    const r = reactivos[actual];
    cuerpo.replaceChildren();
    cuerpo.append(mk("p", "note", "Pregunta " + (actual + 1) + " de " + reactivos.length + (st.id === EXAMEN_CURSO ? " · " + r.est.nombre : "")));
    if (r.item.caso) cuerpo.append(mk("p", "case", r.item.caso));
    cuerpo.append(mk("p", "exam-preg", r.item.pregunta));
    const opts = mk("div", "opts");
    opts.setAttribute("role", "radiogroup");
    r.item.opciones.forEach((texto, k) => {
      const b = boton(texto, r.elegida === k ? "sel" : null, () => {
        r.elegida = r.elegida === k ? null : k; // tocar de nuevo la quita
        pintar();
      });
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(r.elegida === k));
      opts.append(b);
    });
    cuerpo.append(opts);

    const fila = mk("div", "row exam-nav");
    const ant = boton("← Anterior", "ghost", () => { actual -= 1; pintar(); });
    ant.disabled = actual === 0;
    fila.append(ant);
    if (actual < reactivos.length - 1) fila.append(boton("Siguiente →", "primary", () => { actual += 1; pintar(); }));
    const faltan = reactivos.filter((x) => x.elegida == null).length;
    let armado = false;
    const fin = boton("Terminar examen", actual === reactivos.length - 1 ? "primary" : "ghost", () => {
      if (faltan && !armado) {
        armado = true;
        fin.textContent = "Te faltan " + faltan + ". Toca otra vez para entregar";
        return;
      }
      entregar(false);
    });
    fila.append(fin);
    cuerpo.append(fila);
    pintarPuntos();
  };

  const entregar = (porTiempo: boolean) => {
    if (terminado) return;
    terminado = true;
    clearInterval(tic);
    const usados = duracion - restante();
    let aciertos = 0;
    const porNivel: Record<Nivel, [number, number]> = { f: [0, 0], m: [0, 0], d: [0, 0], x: [0, 0] };
    for (const r of reactivos) {
      const bien = r.elegida === r.item.respuesta;
      porNivel[r.q.nivel][1] += 1;
      if (bien) { aciertos += 1; porNivel[r.q.nivel][0] += 1; acierto(r.est.id, r.q.id, PUNTOS[r.q.nivel]); }
      else fallo(r.est.id, r.q.id);
    }
    const nota = notaSobre20(aciertos, reactivos.length);
    registrarExamen(st.id, nota);
    pintarMarcador();
    resultados(nota, aciertos, porNivel, usados, porTiempo);
  };

  const resultados = (nota: number, aciertos: number, porNivel: Record<Nivel, [number, number]>, usados: number, porTiempo: boolean) => {
    barra.remove();
    puntos.remove();
    cuerpo.replaceChildren();
    const aprobado = nota >= NOTA_APROBATORIA;
    const tarjeta = mk("div", "exam-nota " + (aprobado ? "aprob" : "desaprob"));
    tarjeta.append(mk("small", null, porTiempo ? "Se acabó el tiempo" : "Examen entregado"), mk("strong", null, nota + " / 20"),
      mk("span", null, (aprobado ? "Aprobado" : "Desaprobado") + " · " + aciertos + " de " + reactivos.length + " correctas · " + mmss(usados) + " min"));
    cuerpo.append(tarjeta);
    const r = estado.examenes[st.id];
    if (r && r.intentos > 1) cuerpo.append(mk("p", "exam-record", nota >= r.mejor ? "¡Es tu mejor nota!" : "Tu mejor nota sigue siendo " + r.mejor + "."));

    const tabla = mk("div", "exam-niveles");
    (Object.keys(porNivel) as Nivel[]).forEach((k) => {
      const [b, t] = porNivel[k];
      if (!t) return;
      const c = mk("div", "exam-nivel " + k);
      c.append(mk("small", null, NOMBRE_NIVEL[k]), mk("strong", null, b + "/" + t));
      tabla.append(c);
    });
    cuerpo.append(tabla);
    if (st.id === EXAMEN_CURSO) {
      // Por sección: dónde estás más flojo.
      const porSeccion = new Map<string, [number, number]>();
      for (const x of reactivos) {
        const v = porSeccion.get(x.est.nombre) ?? [0, 0];
        v[1] += 1;
        if (x.elegida === x.item.respuesta) v[0] += 1;
        porSeccion.set(x.est.nombre, v);
      }
      const secs = mk("div", "exam-secciones");
      secs.append(mk("h3", null, "Por sección"));
      [...porSeccion.entries()].sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]).forEach(([nombre, [b, t]]) => {
        const fila = mk("div", "exam-sec");
        const barra = mk("span", "exam-sec-barra");
        const lleno = mk("span");
        lleno.style.width = Math.round((100 * b) / t) + "%";
        barra.append(lleno);
        fila.append(mk("span", "exam-sec-nombre", nombre), barra, mk("strong", null, b + "/" + t));
        secs.append(fila);
      });
      cuerpo.append(secs);
    }
    const fallas = reactivos.filter((x) => x.elegida !== x.item.respuesta).length;
    if (fallas) cuerpo.append(mk("p", "note", (fallas === 1 ? "La que fallaste o dejaste en blanco quedó" : "Las " + fallas + " que fallaste o dejaste en blanco quedaron") + " en Estudio › Mis errores."));

    const fila = mk("div", "row");
    fila.append(boton("Otro examen", "primary", () => rendirExamen(st.id, volver)), boton("Volver", "ghost", volver));
    cuerpo.append(fila);

    // Revisión
    cuerpo.append(mk("h3", "exam-rev-tit", "Revisión"));
    let soloErrores = fallas > 0;
    const filtro = boton("", "ghost exam-filtro", () => { soloErrores = !soloErrores; pintarRevision(); });
    const lista = mk("ol", "exam-rev");
    const pintarRevision = () => {
      filtro.textContent = soloErrores ? "Ver todas" : "Ver solo las que fallé";
      filtro.hidden = !fallas;
      lista.replaceChildren();
      reactivos.forEach((x, i) => {
        const bien = x.elegida === x.item.respuesta;
        if (soloErrores && bien) return;
        const li = mk("li", bien ? "bien" : "mal");
        li.append(mk("small", null, (i + 1) + " · " + (st.id === EXAMEN_CURSO ? x.est.nombre + " · " : "") + NOMBRE_NIVEL[x.q.nivel] + " · " + (bien ? "Correcta" : x.elegida == null ? "Sin responder" : "Incorrecta")));
        if (x.q.caso) li.append(mk("p", "case", x.q.caso));
        li.append(mk("strong", null, enunciado(x.q)));
        if (!bien && x.elegida != null) li.append(mk("p", "exam-tuya", "Tu respuesta: " + x.item.opciones[x.elegida]));
        li.append(mk("p", "fa", "Correcta: " + x.q.correcta));
        if (x.q.explicacion) li.append(mk("p", "why", x.q.explicacion));
        li.append(reportarError(() => ({ tipo: "examen", estacion: x.est.id, id: x.q.id, texto: (x.q.caso ? x.q.caso + " " : "") + enunciado(x.q), correcta: x.q.correcta, opciones: x.item.opciones })));
        lista.append(li);
      });
    };
    cuerpo.append(filtro, lista);
    pintarRevision();
    window.scrollTo({ top: 0 });
  };

  pintar();
});
