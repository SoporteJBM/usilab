/**
 * FLUJOGRAMA CON FOTO: el alumno hace el flujograma de un caso en papel, le toma una foto y Claude lo corrige
 * con la clave de la clase y el flujograma modelo. El nivel cambia qué se pide y qué tan estricta es la corrección.
 * La letra que no se entiende cuenta como no escrita y baja la nota.
 */
import { AREAS_FLUJO, CASOS_FLUJO, CRITERIOS_FLUJO, LOGICA_FLUJO, NIVELES_FLUJO, NOMBRE_NIVEL, ORDEN_FLUJO, type CasoFlujo, type CriterioFlujo, type Nivel } from "../../content";
import { escribir, leer } from "../../lib/almacen";
import { boton, mk } from "../../lib/dom";
import { sinTildes } from "../../lib/texto";
import { corregirConFoto, puedeCorregirFotos } from "../../servicios/corrector";
import { ampliable } from "../../ui/visor";

export const ESCALA_FLUJO = 4; // cada criterio de 0 a 4; la nota se lleva a 20
export const APRUEBA_FLUJO = 11;
const NOMBRES = Object.fromEntries(CRITERIOS_FLUJO) as Record<CriterioFlujo, string>;
const TIPO = { ini: "Inicio", pro: "Paso", dec: "Decisión", fin: "Final" } as const;

export const casoFlujo = (id: string): CasoFlujo | undefined => CASOS_FLUJO.find((c) => c.id === id);
export const casosDeArea = (area: string): CasoFlujo[] => CASOS_FLUJO.filter((c) => c.area === area);
export const nombreEnfermedad = (c: CasoFlujo): string => c.clave.enfermedad.split(/[.(:]/)[0].trim();

// ---- Historial de notas (en el dispositivo) ----
const HISTORIAL = "reto-flujo-eval";
type Historial = Record<string, { mejor: number; ultima: number; intentos: number }>;
export function historialFlujo(): Historial {
  const h = leer(HISTORIAL);
  return h && typeof h === "object" ? (h as Historial) : {};
}
function guardarNota(clave: string, nota: number): void {
  const h = historialFlujo();
  const previo = h[clave] ?? { mejor: 0, ultima: 0, intentos: 0 };
  h[clave] = { mejor: Math.max(previo.mejor, nota), ultima: nota, intentos: previo.intentos + 1 };
  escribir(HISTORIAL, h);
}
export const mejorNotaFlujo = (id: string): number => Math.max(0, ...(["f", "m", "d", "x"] as Nivel[]).map((k) => historialFlujo()[id + ":" + k]?.mejor ?? 0));

// ---- Flujograma modelo ----
/** Dibuja el flujograma: inicio y final redondeados, decisiones en rombo, flechas con «Sí»/«No». */
export function dibujarFlujoGrafico(c: CasoFlujo): HTMLElement {
  const fig = mk("figure", "fg");
  fig.setAttribute("role", "img");
  fig.setAttribute("aria-label", "Flujograma: " + c.grafico.map((n) => n[2]).join(" → "));
  const ley = mk("div", "fg-leyenda");
  ORDEN_FLUJO.forEach((k) => ley.append(mk("span", "fg-ley fg-" + k, NOMBRES[k])));
  fig.append(ley);
  c.grafico.forEach(([tipo, crit, texto, rama], i) => {
    const fila = mk("div", "fg-fila" + (tipo === "dec" ? " con-rama" : ""));
    const n = mk("div", "fg-nodo fg-" + tipo + " fg-" + crit);
    n.append(mk("small", null, NOMBRES[crit] ?? ""), mk("span", null, texto));
    fila.append(n);
    if (tipo === "dec" && rama) {
      const r = mk("div", "fg-rama");
      r.append(mk("b", null, "No"), mk("span", "fg-rama-caja", rama));
      fila.append(r);
    }
    fig.append(fila);
    if (i < c.grafico.length - 1) {
      const fl = mk("div", "fg-flecha");
      if (tipo === "dec") fl.append(mk("b", null, "Sí"));
      fig.append(fl);
    }
  });
  return fig;
}

/** El mismo flujograma en texto, para que Claude corrija contra él. */
function flujoModeloTexto(c: CasoFlujo): string {
  return c.grafico.map(([tipo, crit, texto, rama], i) =>
    (i + 1) + ". [" + TIPO[tipo] + " · " + NOMBRES[crit] + "] " + texto + (tipo === "dec" ? "  → Sí: sigue al paso " + (i + 2) + (rama ? " · No: " + rama : "") : ""),
  ).join("\n");
}

export function promptFlujo(c: CasoFlujo, k: Nivel): string {
  const N = NIVELES_FLUJO[k];
  const rubrica = N.criterios.map((key, i) => (i + 1) + ". " + NOMBRES[key] + " — clave: " + (key === "logica" ? LOGICA_FLUJO : c.clave[key])).join("\n");
  return [
    "Eres un docente de Microbiología y Parasitología de una facultad de medicina en Perú. Corriges con RIGOR el flujograma que un alumno hizo a mano. La imagen adjunta es la FOTO de su flujograma.",
    "",
    "CASO CLÍNICO QUE RECIBIÓ EL ALUMNO:",
    c.caso,
    N.revela ? "(En este nivel le dijimos la enfermedad: " + nombreEnfermedad(c) + ".)" : "(No le dijimos la enfermedad: debía identificarla.)",
    "",
    N.rigor,
    "",
    "CRITERIOS A EVALUAR, con la CLAVE de lo visto en clase (" + AREAS_FLUJO[c.area].fuente + "). Evalúa SOLO contra esta clave y SOLO estos criterios:",
    rubrica,
    "",
    "FLUJOGRAMA MODELO (la solución gráfica oficial). Compara la ESTRUCTURA de la foto con este: qué nodos tiene, en qué orden, si las flechas unen causa y efecto y si las decisiones tienen salidas Sí y No:",
    flujoModeloTexto(c),
    "",
    "REGLAS:",
    "- Cada criterio se califica de 0 a 4 (entero): 4 completo y correcto para este nivel, 3 casi completo, 2 la mitad, 1 apenas, 0 ausente o incorrecto.",
    "- Un dato incorrecto (fármaco, receptor, genotipo, examen) baja el criterio aunque el resto esté bien; un error grave lo deja en 0 o 1.",
    "- No regales puntos por escribir mucho ni por ideas vagas. Si falta algo de la clave que este nivel exige, dilo.",
    "- Acepta sinónimos correctos (p. ej. «retrovirus» o «lentivirus» para el VIH) si el significado es el mismo.",
    "- Cita lo que escribió el alumno («escribiste»), di exactamente en qué falló y cómo debería ser.",
    "- LETRA: lee con cuidado, pero NUNCA adivines. Si una palabra, sigla o parte no se distingue con seguridad, trátala como NO escrita: no suma puntos y baja la nota de su criterio (un criterio cuyo contenido clave no se entiende queda en 0 o 1, con estado «ilegible»). Dilo sin rodeos en ese criterio («No se entiende: …») y agrégala a la lista \"ilegibles\" con dónde está. En un examen real, lo que no se entiende tampoco se califica.",
    "- Si la foto completa no se puede leer (borrosa, oscura, cortada) o no es un flujograma hecho a mano, responde legible=false y deja criterios vacío.",
    "- Una lista de texto sin forma de flujograma (sin flechas ni cajas) tiene como máximo 1 en «Lógica del flujograma».",
    "- Español claro y breve; háblale al alumno de tú.",
    "",
    "Responde SOLO con este JSON (sin texto antes ni después):",
    '{"legible": true, "motivo_no_legible": "", "ilegibles": ["palabra o parte que no se entiende y dónde está"], "criterios": [{"criterio": "' + NOMBRES[N.criterios[0]] + '", "puntaje": 3, "estado": "parcial", "escribiste": "...", "fallo": "...", "correccion": "..."}], "errores_graves": ["..."], "fortalezas": ["..."], "resumen": "...", "siguiente_paso": "..."}',
    "\"criterios\" debe tener exactamente " + N.criterios.length + " elementos, en el orden dado, con estado uno de: completo, parcial, ausente, incorrecto, ilegible. Si todo se entiende, \"ilegibles\" va vacío.",
  ].join("\n");
}

interface RespuestaCorreccion {
  legible?: boolean; motivo_no_legible?: string; ilegibles?: unknown[];
  criterios?: { criterio?: string; puntaje?: unknown; estado?: string; escribiste?: string; fallo?: string; correccion?: string }[];
  errores_graves?: unknown[]; fortalezas?: unknown[]; resumen?: string; siguiente_paso?: string;
}

/** Pinta la corrección. Devuelve la nota sobre 20, o null si la foto no se pudo leer. */
export function pintarEvaluacion(box: HTMLElement, c: CasoFlujo, crudo: unknown, k: Nivel, verSolucion?: () => void): number | null {
  const N = NIVELES_FLUJO[k];
  const r = crudo as RespuestaCorreccion | null;
  box.replaceChildren();
  if (!r || typeof r !== "object") throw { code: "invalid_json" };
  if (r.legible === false) {
    box.append(mk("p", "msg no", "No se pudo leer tu flujograma: " + (r.motivo_no_legible || "la foto no es clara.") + " Toma otra foto con más luz y que salga toda la hoja."));
    return null;
  }
  const lista = Array.isArray(r.criterios) ? r.criterios : [];
  const num = (x: unknown) => { const n = Math.round(Number(x)); return Number.isFinite(n) ? Math.min(ESCALA_FLUJO, Math.max(0, n)) : 0; };
  const items = N.criterios.map((key, i) => {
    const t = NOMBRES[key];
    const e = lista.find((x) => x && sinTildes(String(x.criterio || "")).startsWith(sinTildes(t).slice(0, 6))) || lista[i] || {};
    return { key, t, puntaje: num(e.puntaje), estado: String(e.estado || "ausente"), escribiste: e.escribiste || "", fallo: e.fallo || "", correccion: e.correccion || "" };
  });
  const nota = Math.round((20 * items.reduce((n, x) => n + x.puntaje, 0)) / (ESCALA_FLUJO * items.length));
  guardarNota(c.id + ":" + k, nota);
  const aprob = nota >= APRUEBA_FLUJO;
  const cab = mk("div", "exam-nota " + (aprob ? "aprob" : "desaprob"));
  cab.append(mk("small", null, "Corrección · " + NOMBRE_NIVEL[k]), mk("strong", null, nota + " / 20"), mk("span", null, aprob ? "Aprobado" : "Desaprobado"));
  box.append(cab);
  if (r.resumen) box.append(mk("p", "fe-resumen", String(r.resumen)));
  const ilegibles = Array.isArray(r.ilegibles) ? r.ilegibles.filter(Boolean) : [];
  if (ilegibles.length) {
    const s = mk("section", "fe-ilegible");
    s.append(mk("h3", null, "Letra que no se entiende"), mk("p", null, "Estas partes contaron como no escritas y bajaron tu nota. En el examen tampoco se califica lo que no se lee: escribe más claro."));
    const ul = mk("ul");
    ilegibles.forEach((t) => ul.append(mk("li", null, String(t))));
    s.append(ul);
    box.append(s);
  }
  const errs = Array.isArray(r.errores_graves) ? r.errores_graves.filter(Boolean) : [];
  if (errs.length) { const s = mk("section", "ag-sec p"); s.append(mk("h3", null, "Errores graves")); errs.forEach((t) => s.append(mk("p", null, "• " + t))); box.append(s); }
  items.forEach((x) => {
    const card = mk("details", "fe-crit " + (x.estado === "ilegible" ? "ileg" : x.puntaje === ESCALA_FLUJO ? "ok" : x.puntaje >= 2 ? "medio" : "mal"));
    if (x.puntaje < ESCALA_FLUJO) card.open = true;
    const sum = mk("summary");
    sum.append(mk("span", null, x.t), mk("b", null, x.puntaje + " / " + ESCALA_FLUJO));
    card.append(sum, mk("small", "fe-estado", x.estado.charAt(0).toUpperCase() + x.estado.slice(1)));
    if (x.escribiste) card.append(mk("p", "fe-tuyo", "Escribiste: " + x.escribiste));
    if (x.fallo) card.append(mk("p", "fe-fallo", "En qué fallaste: " + x.fallo));
    if (x.correccion) card.append(mk("p", "fe-corr", "Cómo debería ser: " + x.correccion));
    const ref = mk("details", "fe-ref");
    ref.append(mk("summary", null, "Ver la clave de la clase"), mk("p", null, x.key === "logica" ? LOGICA_FLUJO : c.clave[x.key]));
    card.append(ref);
    box.append(card);
  });
  const fort = Array.isArray(r.fortalezas) ? r.fortalezas.filter(Boolean) : [];
  if (fort.length) { const s = mk("section", "ag-sec t"); s.append(mk("h3", null, "Lo que hiciste bien")); fort.forEach((t) => s.append(mk("p", null, "• " + t))); box.append(s); }
  if (r.siguiente_paso) { const s = mk("section", "ag-sec x"); s.append(mk("h3", null, "Para la próxima"), mk("p", null, String(r.siguiente_paso))); box.append(s); }
  const modelo = mk("details", "topic fe-modelo");
  modelo.append(mk("summary", null, "Ver el flujograma modelo"), dibujarFlujoGrafico(c));
  box.append(modelo);
  if (verSolucion) box.append(boton("Ver la solución completa en Estudio", "ghost", verSolucion));
  box.append(mk("p", "note", "La corrección la hace Claude con la clave de la clase; puede equivocarse al leer letra a mano. Si algo no te cuadra, compáralo con la clave."));
  box.scrollIntoView({ behavior: "smooth", block: "start" });
  return nota;
}

/** Achica la foto a 1600 px de lado mayor (JPEG): sube rápido y se lee bien. */
function reducirImagen(file: File): Promise<Blob> {
  return new Promise((resolve) => {
    try {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        try {
          const max = 1600, k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight));
          const cv = document.createElement("canvas");
          cv.width = Math.round(img.naturalWidth * k); cv.height = Math.round(img.naturalHeight * k);
          cv.getContext("2d")!.drawImage(img, 0, 0, cv.width, cv.height);
          URL.revokeObjectURL(url);
          cv.toBlob((b) => resolve(b || file), "image/jpeg", 0.85);
        } catch { resolve(file); }
      };
      img.onerror = () => { URL.revokeObjectURL(url); resolve(file); };
      img.src = url;
    } catch { resolve(file); }
  });
}

export interface FotoEnRonda { caso: CasoFlujo; nivel: Nivel; puntos: number }
export interface AccionesFoto {
  /** Se llama una vez con la nota (o null si se saltó). */
  alTerminar: (nota: number | null) => void;
  alSeguir: () => void;
  alSalir: () => void;
  verSolucion?: (id: string) => void;
}

/** Pregunta de flujograma con foto dentro de una ronda. */
export function montarFotoFlujo(p: HTMLElement, it: FotoEnRonda, a: AccionesFoto, textoSeguir = "Siguiente"): void {
  const N = NIVELES_FLUJO[it.nivel];
  const c = it.caso;
  p.append(mk("small", "ag-kicker", N.nombre + " · " + NOMBRE_NIVEL[it.nivel]), mk("p", "case", c.caso));
  if (N.revela) p.append(mk("p", "fj-revela", "Diagnóstico: " + nombreEnfermedad(c)));
  const pasos = mk("ol", "fe-pasos");
  const li1 = mk("li", null, "En papel, haz el flujograma con flechas. Se califica:");
  const inc = mk("div", "fe-criterios");
  N.criterios.forEach((key) => inc.append(mk("span", "fe-chip", NOMBRES[key])));
  li1.append(inc);
  const li2 = mk("li", null, "Usa formas de flujograma: inicio y final en óvalo, pasos en rectángulo" + (it.nivel === "x" ? " y al menos una decisión en rombo con Sí y No." : ", decisiones en rombo."));
  const muestra = mk("div", "fg-muestra");
  ([["fg-ini", "Inicio"], ["fg-pro", "Paso"], ["fg-dec", "¿Decisión?"], ["fg-fin", "Final"]] as const).forEach(([k2, t]) => { const d = mk("span", "fg-nodo " + k2); d.append(mk("span", null, t)); muestra.append(d); });
  li2.append(muestra);
  pasos.append(li1, li2, mk("li", null, "Escribe con letra clara: lo que no se entienda cuenta como no escrito y baja tu nota."), mk("li", null, "Tómale una foto nítida y envíala. Se aprueba con " + APRUEBA_FLUJO + " de 20."));
  const prev = mk("div", "fe-preview");
  prev.hidden = true;
  const msg = mk("p", "msg");
  msg.setAttribute("role", "status");
  const res = mk("div", "fe-resultado");
  const fb = mk("p", "feedback");
  fb.setAttribute("role", "status");
  let archivo: File | null = null;
  let terminado = false;

  const elegir = (capturar: boolean) => {
    const inp = mk("input");
    inp.type = "file"; inp.accept = "image/*";
    if (capturar) inp.setAttribute("capture", "environment");
    inp.onchange = () => {
      const f = inp.files?.[0];
      if (!f) return;
      archivo = f;
      const im = mk("img");
      im.alt = "Tu flujograma"; im.src = URL.createObjectURL(f);
      prev.replaceChildren(ampliable(im, "Tu flujograma"));
      prev.hidden = false;
      enviar.disabled = false;
      msg.textContent = ""; msg.className = "msg";
    };
    inp.click();
  };
  const foto = boton("📷 Tomar foto", "primary", () => elegir(true));
  const gal = boton("Galería", "ghost", () => elegir(false));
  const enviar = boton("Enviar a corregir", "primary", () => void mandar());
  enviar.disabled = true;
  const filaFoto = mk("div", "row");
  filaFoto.append(foto, gal);
  const sig = boton(textoSeguir, "primary", a.alSeguir);
  sig.hidden = true;
  const saltar = boton("Saltar", "ghost", () => { if (!terminado) { terminado = true; a.alTerminar(null); } a.alSeguir(); });
  const fila = mk("div", "row");
  fila.append(sig, saltar, boton("Salir", "ghost", a.alSalir));
  p.append(pasos, filaFoto, prev, enviar, msg, fb, res, fila);

  void puedeCorregirFotos().then((ok) => {
    if (ok) return;
    filaFoto.hidden = true; enviar.hidden = true;
    msg.className = "msg no";
    msg.textContent = "Aquí no se pueden mandar fotos a Claude. Abre la página con tu cuenta de Claude para hacer esta pregunta, o toca «Saltar».";
  });

  const bloquear = (si: boolean) => { enviar.disabled = si; foto.disabled = si; gal.disabled = si; saltar.disabled = si; };
  const mandar = async () => {
    if (!archivo || enviar.disabled) return;
    bloquear(true);
    msg.className = "msg ok";
    msg.textContent = "Claude está revisando tu flujograma… puede tardar hasta un minuto.";
    try {
      const r = await corregirConFoto(promptFlujo(c, it.nivel), await reducirImagen(archivo));
      const nota = pintarEvaluacion(res, c, r, it.nivel, a.verSolucion ? () => a.verSolucion!(c.id) : undefined);
      msg.textContent = ""; msg.className = "msg";
      if (nota == null) { bloquear(false); return; }
      filaFoto.hidden = true; enviar.hidden = true; prev.hidden = true; saltar.hidden = true;
      const pts = Math.round((it.puntos * nota) / 20);
      terminado = true;
      a.alTerminar(nota);
      fb.className = "feedback " + (nota >= APRUEBA_FLUJO ? "ok" : "no");
      fb.textContent = "Tu flujograma: " + nota + "/20" + (pts ? " · +" + pts + " puntos" : "");
      sig.hidden = false;
    } catch (e) {
      console.error("[reto] flujograma con foto", e);
      const code = (e as { code?: string } | null)?.code;
      msg.className = "msg no";
      msg.textContent =
        code === "not_granted" ? "Para corregir, permite que esta página use Claude (te lo pregunta al enviar). Si lo rechazaste, recarga la página." :
        code === "rate_limited" ? "Llegaste al límite de uso de Claude por ahora. Espera un rato o toca «Saltar»." :
        code === "image_rejected" ? "La foto no se pudo usar. Prueba con otra foto en JPG o PNG." :
        code === "invalid_json" ? "No pude leer la corrección. Inténtalo otra vez." :
        "No se pudo corregir. Revisa tu conexión e inténtalo otra vez.";
      bloquear(false);
    }
  };
}
