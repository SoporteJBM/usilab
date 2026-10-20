/**
 * Avance del alumno: puntos, racha, preguntas dominadas y errores.
 *
 * Todo dato que entra (de localStorage o de la base de datos) pasa por `sanear()`,
 * que descarta lo que no tenga la forma esperada o apunte a preguntas que ya no existen.
 * Así un dato viejo o manipulado nunca rompe la página.
 */
import { pregunta } from "../catalogo";
import type { Nivel } from "../content";

export interface Estado {
  version: 4;
  puntos: number;
  racha: number;
  /** estación → id de pregunta → true */
  dominadas: Record<string, Record<string, true>>;
  /** estación → rondas jugadas */
  rondas: Record<string, number>;
  /** palabras del ahorcado ya vistas por nivel (para no repetir); clave «nivel» o «estación:nivel» */
  ahorcadoVistas: Record<string, string[]>;
  /** último nivel elegido en cada juego */
  ultimoNivel: Record<string, Nivel>;
  /** estación → id de pregunta → veces fallada */
  errores: Record<string, Record<string, number>>;
  /** estación → resultados del modo examen (nota sobre 20) */
  examenes: Record<string, { mejor: number; ultima: number; intentos: number }>;
  /** Repaso inteligente: id de pregunta → caja (1 a 5) y fecha en que toca repasarla */
  repaso: Record<string, { caja: number; toca: string }>;
}

export const vacio = (): Estado => ({ version: 4, puntos: 0, racha: 0, dominadas: {}, rondas: {}, ahorcadoVistas: {}, ultimoNivel: {}, errores: {}, examenes: {}, repaso: {} });

const NIVELES_OK = new Set(["f", "m", "d", "x"]);
const NIVELES_AHORCADO = new Set(["facil", "medio", "dificil", "muydificil"]);

const esObjeto = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x);
const numero = (x: unknown): number => (typeof x === "number" && Number.isFinite(x) && x >= 0 ? x : 0);

/** Conserva solo preguntas que existen y pertenecen a esa estación. */
function porPregunta<T>(x: unknown, valor: (v: unknown) => T | null): Record<string, Record<string, T>> {
  const out: Record<string, Record<string, T>> = {};
  if (!esObjeto(x)) return out;
  for (const [est, mapa] of Object.entries(x)) {
    if (!esObjeto(mapa)) continue;
    for (const [id, v] of Object.entries(mapa)) {
      const p = pregunta(id);
      const val = valor(v);
      if (!p || p.est.id !== est || val === null) continue;
      (out[est] ??= {})[id] = val;
    }
  }
  return out;
}

export function sanear(x: unknown): Estado {
  const e = vacio();
  if (!esObjeto(x)) return e;
  e.puntos = numero(x.puntos);
  e.racha = Math.floor(numero(x.racha));
  e.dominadas = porPregunta(x.dominadas, (v) => (v === true ? (true as const) : null));
  e.errores = porPregunta(x.errores, (v) => { const n = Math.floor(numero(v)); return n > 0 ? n : null; });
  if (esObjeto(x.rondas)) for (const [k, v] of Object.entries(x.rondas)) { const n = Math.floor(numero(v)); if (n) e.rondas[k] = n; }
  if (esObjeto(x.ultimoNivel)) for (const [k, v] of Object.entries(x.ultimoNivel)) if (typeof v === "string" && NIVELES_OK.has(v)) e.ultimoNivel[k] = v as Nivel;
  if (esObjeto(x.examenes)) {
    for (const [k, v] of Object.entries(x.examenes)) {
      if (!esObjeto(v)) continue;
      const nota = (n: unknown) => Math.min(20, numero(n));
      const intentos = Math.floor(numero(v.intentos));
      if (intentos > 0) e.examenes[k] = { mejor: nota(v.mejor), ultima: nota(v.ultima), intentos };
    }
  }
  if (esObjeto(x.repaso)) {
    for (const [id, v] of Object.entries(x.repaso)) {
      if (!pregunta(id) || !esObjeto(v)) continue;
      const caja = Math.floor(numero(v.caja));
      if (caja >= 1 && caja <= CAJAS && typeof v.toca === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v.toca)) e.repaso[id] = { caja, toca: v.toca };
    }
  }
  if (esObjeto(x.ahorcadoVistas)) {
    for (const [k, v] of Object.entries(x.ahorcadoVistas)) {
      const nivel = k.includes(":") ? k.split(":")[1] : k;
      const valida = /^([a-z-]{1,30}:)?[a-z]+$/.test(k) && NIVELES_AHORCADO.has(nivel);
      if (valida && Array.isArray(v)) e.ahorcadoVistas[k] = v.filter((w): w is string => typeof w === "string").slice(0, 500);
    }
  }
  return e;
}

// ---- Estado vivo ----
export const estado: Estado = vacio();

type Oyente = () => void;
const oyentes: Oyente[] = [];
/** Avisa cada vez que el avance cambia (la sincronización y el marcador se cuelgan de aquí). */
export function alCambiar(fn: Oyente): void { oyentes.push(fn); }

export function reemplazar(nuevo: unknown): void {
  const s = sanear(nuevo);
  Object.assign(estado, s);
}

export function guardar(): void {
  for (const fn of oyentes) {
    try { fn(); } catch (e) { console.error("[reto] oyente de guardar", e); }
  }
}

// ---- Repaso inteligente (repetición espaciada, cajas de Leitner) ----
/** Días hasta el siguiente repaso según la caja: si aciertas sube de caja y se espacia más. */
export const DIAS_POR_CAJA = [0, 1, 3, 7, 16, 35];
export const CAJAS = 5;

/** Fecha local en formato AAAA-MM-DD, con `dias` de diferencia. */
export function fecha(dias = 0, desde = new Date()): string {
  const d = new Date(desde.getFullYear(), desde.getMonth(), desde.getDate() + dias);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}

function programar(id: string, bien: boolean): void {
  const previo = estado.repaso[id];
  if (bien) {
    const caja = Math.min(CAJAS, (previo?.caja ?? 0) + 1);
    estado.repaso[id] = { caja, toca: fecha(DIAS_POR_CAJA[caja]) };
  } else {
    // Fallada: vuelve a la caja 1 y toca repasarla hoy mismo.
    estado.repaso[id] = { caja: 1, toca: fecha(0) };
  }
}

export interface PendienteRepaso { est: string; id: string; caja: number; toca: string }
/** Preguntas que tocan hoy (o antes): las más atrasadas y de caja más baja primero. */
export function pendientesDeRepaso(hoy = fecha(0)): PendienteRepaso[] {
  const out: PendienteRepaso[] = [];
  for (const [id, r] of Object.entries(estado.repaso)) {
    const p = pregunta(id);
    if (p && r.toca <= hoy) out.push({ est: p.est.id, id, caja: r.caja, toca: r.toca });
  }
  return out.sort((a, b) => (a.toca < b.toca ? -1 : a.toca > b.toca ? 1 : a.caja - b.caja));
}
/** Próxima fecha con repaso pendiente, o null si no hay ninguna programada. */
export function proximoRepaso(): string | null {
  const fechas = Object.values(estado.repaso).map((r) => r.toca).sort();
  return fechas[0] ?? null;
}
export const enRepaso = (): number => Object.keys(estado.repaso).length;

// ---- Operaciones ----
export function acierto(est: string | undefined, id: string | undefined, puntos: number): void {
  estado.puntos += puntos;
  estado.racha += 1;
  if (est && id && pregunta(id)) {
    (estado.dominadas[est] ??= {})[id] = true;
    programar(id, true);
    if (estado.errores[est]) {
      delete estado.errores[est][id];
      if (!Object.keys(estado.errores[est]).length) delete estado.errores[est];
    }
  }
  guardar();
}

export function fallo(est: string | undefined, id: string | undefined): void {
  estado.racha = 0;
  if (est && id && pregunta(id)) {
    programar(id, false);
    const m = (estado.errores[est] ??= {});
    m[id] = (m[id] || 0) + 1;
  }
  guardar();
}

export function sumarPuntos(puntos: number): void { estado.puntos += puntos; estado.racha += 1; guardar(); }
export function cortarRacha(): void { estado.racha = 0; guardar(); }
export function rondaTerminada(est: string): void { estado.rondas[est] = (estado.rondas[est] || 0) + 1; guardar(); }

export function registrarExamen(est: string, nota: number): void {
  const previo = estado.examenes[est];
  estado.examenes[est] = { mejor: Math.max(previo?.mejor ?? 0, nota), ultima: nota, intentos: (previo?.intentos ?? 0) + 1 };
  guardar();
}

export const dominadasDe = (est: string): number => Object.keys(estado.dominadas[est] || {}).length;
export const estaDominada = (est: string, id: string): boolean => Boolean(estado.dominadas[est]?.[id]);
export const totalDominadas = (): number => Object.values(estado.dominadas).reduce((n, m) => n + Object.keys(m).length, 0);

export interface ErrorGuardado { est: string; id: string; veces: number }
/** Errores existentes, los más fallados primero. */
export function listaDeErrores(): ErrorGuardado[] {
  const out: ErrorGuardado[] = [];
  for (const [est, m] of Object.entries(estado.errores)) for (const [id, veces] of Object.entries(m)) if (pregunta(id)) out.push({ est, id, veces });
  return out.sort((a, b) => b.veces - a.veces);
}
