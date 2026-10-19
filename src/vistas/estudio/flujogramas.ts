/**
 * FLUJOGRAMAS: preguntas abiertas como las del examen.
 * - «Responder»: escribes (o haces en papel) tu flujograma, ves el modelo y te autoevalúas con las claves.
 * - «Armar en orden»: ordenas los pasos mezclados (con algunos pasos falsos) y se corrige solo.
 */
import { FLUJOGRAMAS, type Flujograma } from "../../content";
import { escribir, leer } from "../../lib/almacen";
import { mezclar } from "../../lib/azar";
import { AppError, vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { sumarPuntos } from "../../estado/progreso";
import { abrirPanel, pintarMarcador, type Seccion } from "../../ui/marco";
import { mostrarEstudio } from "./hub";

const PUNTOS_PERFECTO = 20;
const claveBorrador = (id: string) => "reto-flujo-borrador:" + id;

function buscar(id: string): Flujograma {
  const f = FLUJOGRAMAS.find((x) => x.id === id);
  if (!f) throw new AppError("Ese flujograma no existe.", "datos", id);
  return f;
}

/** Dibuja el flujograma modelo: cajas unidas por flechas, decisiones con su salida lateral. */
export function dibujarFlujo(f: Flujograma): HTMLOListElement {
  const ol = mk("ol", "flujo");
  ol.setAttribute("aria-label", "Flujograma: " + f.titulo);
  for (const p of f.pasos) {
    const li = mk("li", p.decision ? "decision" : "paso");
    li.append(mk("span", "flujo-caja", p.texto));
    if (p.rama) li.append(mk("small", "flujo-rama", p.rama));
    ol.append(li);
  }
  return ol;
}

export const mostrarFlujogramas = vista("los flujogramas", (volver: () => void = mostrarEstudio, seccion: Seccion = "estudio") => {
  const p = abrirPanel(seccion);
  p.append(boton("← Volver", "ghost back", volver), mk("h2", null, "Flujogramas"));
  p.append(mk("p", "note", "Preguntas abiertas como las del examen. Respóndelas en papel o aquí, compara con el modelo y revisa qué claves incluiste. También puedes armarlos ordenando los pasos."));
  const lista = mk("div", "results");
  for (const f of FLUJOGRAMAS) {
    const c = mk("div", "result flujo-item");
    c.append(mk("small", null, f.tema + " · " + f.pasos.length + " pasos"), mk("strong", null, f.titulo), mk("p", "study", f.consigna));
    const fila = mk("div", "row");
    const atras = () => mostrarFlujogramas(volver, seccion);
    fila.append(
      boton("Responder", "primary", () => responderFlujo(f.id, atras, seccion)),
      boton("Armar en orden", "ghost", () => armarFlujo(f.id, atras, seccion)),
    );
    c.append(fila);
    lista.append(c);
  }
  p.append(lista);
});

export const responderFlujo = vista("el flujograma", (id: string, volver: () => void, seccion: Seccion = "estudio") => {
  const f = buscar(id);
  const p = abrirPanel(seccion);
  p.append(boton("← Flujogramas", "ghost back", volver), mk("h2", null, f.titulo));
  p.append(mk("p", "case", f.consigna));

  const borrador = leer(claveBorrador(id));
  const ta = mk("textarea", "flujo-texto");
  ta.id = "flujo-respuesta";
  ta.rows = 8;
  ta.maxLength = 3000;
  ta.placeholder = "Escribe los pasos en orden, uno por línea. Usa → para las flechas y «¿…?» para las decisiones.\nTambién puedes hacerlo en papel y solo tocar «Ver modelo».";
  ta.value = typeof borrador === "string" ? borrador : "";
  ta.setAttribute("aria-label", "Tu flujograma");
  let pausa: ReturnType<typeof setTimeout> | undefined;
  ta.oninput = () => { clearTimeout(pausa); pausa = setTimeout(() => escribir(claveBorrador(id), ta.value), 500); };

  const resultado = mk("div", "flujo-modelo");
  const ver = boton("Ver modelo y autoevaluarme", "primary", () => {
    escribir(claveBorrador(id), ta.value);
    ver.hidden = true;
    resultado.replaceChildren(mk("h3", null, "Flujograma modelo"), dibujarFlujo(f));

    resultado.append(mk("h3", null, "¿Qué incluiste?"), mk("p", "note", "Marca las claves que tu respuesta tenía. Sé honesta: así sabes qué repasar."));
    const marcador = mk("p", "flujo-puntaje");
    marcador.setAttribute("role", "status");
    const marcadas = new Set<number>();
    const pintarPuntaje = () => {
      const n = marcadas.size;
      const total = f.claves.length;
      const nota = Math.round((20 * n) / total);
      marcador.textContent = n + " de " + total + " claves · " + nota + "/20" + (n === total ? " · ¡Completo!" : "");
      marcador.className = "flujo-puntaje " + (nota >= 11 ? "ok" : "no");
    };
    const lista = mk("ul", "flujo-claves");
    f.claves.forEach((clave, i) => {
      const li = mk("li");
      const l = mk("label");
      const cb = mk("input");
      cb.type = "checkbox";
      cb.onchange = () => { if (cb.checked) marcadas.add(i); else marcadas.delete(i); pintarPuntaje(); };
      l.append(cb, mk("span", null, clave));
      li.append(l);
      lista.append(li);
    });
    pintarPuntaje();
    const fila = mk("div", "row");
    fila.append(
      boton("Armar en orden", "ghost", () => armarFlujo(id, volver, seccion)),
      boton("Borrar mi respuesta", "ghost", () => { escribir(claveBorrador(id), ""); responderFlujo(id, volver, seccion); }),
    );
    resultado.append(lista, marcador, fila);
    resultado.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  p.append(ta, ver, resultado);
});

export const armarFlujo = vista("el flujograma", (id: string, volver: () => void, seccion: Seccion = "estudio") => {
  const f = buscar(id);
  const p = abrirPanel(seccion);
  p.append(boton("← Flujogramas", "ghost back", volver), mk("h2", null, f.titulo));
  p.append(mk("p", "note", "Toca los pasos en el orden correcto. Ojo: hay " + f.intrusos.length + " pasos que no van. Toca un paso de tu lista para quitarlo."));

  const correctos = f.pasos.map((x) => x.texto);
  const fichas = mezclar([...correctos, ...f.intrusos]);
  const elegidos: string[] = [];
  let revisado = false;

  const tuyo = mk("ol", "flujo-armado");
  tuyo.setAttribute("aria-label", "Tu flujograma");
  const banco = mk("div", "flujo-banco");
  const msg = mk("p", "feedback");
  msg.setAttribute("role", "status");
  const revisar = boton("Revisar", "primary", () => corregir());
  const fila = mk("div", "row");
  const modelo = mk("div", "flujo-modelo");

  const pintar = () => {
    tuyo.replaceChildren();
    if (!elegidos.length) tuyo.append(mk("li", "vacio", "Aquí aparecen los pasos que vayas tocando."));
    elegidos.forEach((t, i) => {
      const li = mk("li");
      const b = boton(t, "flujo-elegido", () => { if (revisado) return; elegidos.splice(i, 1); pintar(); });
      b.setAttribute("aria-label", "Paso " + (i + 1) + ": " + t + ". Toca para quitarlo.");
      if (revisado) {
        const ok = correctos[i] === t;
        li.className = ok ? "bien" : f.intrusos.includes(t) ? "intruso" : "mal";
      }
      li.append(b);
      tuyo.append(li);
    });
    banco.replaceChildren();
    for (const t of fichas) {
      if (elegidos.includes(t)) continue;
      const b = boton(t, "flujo-ficha", () => { if (revisado) return; elegidos.push(t); pintar(); });
      b.disabled = revisado;
      banco.append(b);
    }
    revisar.disabled = revisado || elegidos.length === 0;
  };

  const corregir = () => {
    revisado = true;
    const enSuSitio = elegidos.filter((t, i) => correctos[i] === t).length;
    const intrusos = elegidos.filter((t) => f.intrusos.includes(t)).length;
    const perfecto = enSuSitio === correctos.length && elegidos.length === correctos.length;
    msg.className = "feedback " + (perfecto ? "ok" : "no");
    msg.textContent = perfecto
      ? "¡Perfecto! +" + PUNTOS_PERFECTO + " puntos"
      : enSuSitio + " de " + correctos.length + " pasos en su lugar" + (intrusos ? " · " + intrusos + (intrusos === 1 ? " paso falso" : " pasos falsos") : "") + ".";
    if (perfecto) { sumarPuntos(PUNTOS_PERFECTO); pintarMarcador(); }
    pintar();
    modelo.replaceChildren(mk("h3", null, "Flujograma modelo"), dibujarFlujo(f));
    fila.replaceChildren(
      boton("Otra vez", "primary", () => armarFlujo(id, volver, seccion)),
      boton("Responder como pregunta abierta", "ghost", () => responderFlujo(id, volver, seccion)),
    );
  };

  fila.append(revisar, boton("Empezar de nuevo", "ghost", () => { if (!revisado) { elegidos.length = 0; pintar(); } }));
  p.append(tuyo, mk("h3", "flujo-sub", "Pasos disponibles"), banco, msg, fila, modelo);
  pintar();
});
