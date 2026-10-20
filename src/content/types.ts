/**
 * Tipos del contenido de estudio.
 * Todo el contenido vive en src/content/*.ts y se valida con `npm run validate`.
 */

/** f = fácil, m = medio, d = difícil, x = muy difícil */
export type Nivel = "f" | "m" | "d" | "x";

export interface Pregunta {
  /** Identificador estable ("hongos-001"). El avance se guarda con él: no lo cambies ni lo reutilices. */
  id: string;
  nivel: Nivel;
  /** Caso clínico (opcional). Si existe y no hay `pregunta`, se pregunta el diagnóstico. */
  caso?: string;
  pregunta?: string;
  correcta: string;
  /** Al menos 3. En cada ronda se eligen 3 al azar. */
  distractores: string[];
  pista?: string;
  explicacion?: string;
}

export interface Estacion {
  id: string;
  nombre: string;
  descripcion: string;
  /** Texto de "Estudiar"; los saltos de línea se respetan. */
  resumen: string;
  preguntas: Pregunta[];
}

/** Tema de solo lectura (sin banco de preguntas propio). */
export type TemaLectura = Omit<Estacion, "preguntas">;

export interface AgenteMicroscopio {
  grupo: string;
  nombre: string;
  criterio: string;
  produce: string;
  tratamiento: string;
  /** Dato clave para reconocerlo de un vistazo. */
  clave: string;
}

export interface Par {
  a: string;
  b: string;
  diferencia: string;
}

export interface Foto {
  /** Debe coincidir con el `nombre` de un AgenteMicroscopio. */
  agente: string;
  numero: number;
  archivo: string;
  /** "laboratorio": foto tomada en el curso; "atlas": imagen de referencia de un atlas de microbiología. */
  fuente: "laboratorio" | "atlas";
  /** Nombre completo si la foto es de una especie concreta (p. ej. "Aspergillus niger"). */
  especie?: string;
}

/** Foto suelta con su pie (medios de cultivo, colonias). */
export interface FotoPie {
  archivo: string;
  pie: string;
  fuente: "laboratorio" | "atlas";
}

export interface Perfil {
  queEs?: string;
  reconoce?: string;
  produce?: string;
  contagio?: string;
  diagnostico?: string;
  tratamiento?: string;
  datoExamen?: string;
  /** Nombre del AgenteMicroscopio relacionado (para fotos y "No confundir"). */
  fichaMicroscopio?: string;
  /** Fotos propias de la ficha (colonias, placas), además de las del microscopio. */
  fotos?: FotoPie[];
  /** Id del apunte con el resumen completo de este agente. */
  apunte?: string;
}

export interface ItemIndice {
  nombre: string;
  /** Frase que se busca en el material. "A|B" acepta cualquiera de las dos. */
  busqueda: string;
}

export interface SeccionIndice {
  titulo: string;
  grupos: { grupo: string; items: ItemIndice[] }[];
}

export interface Tabla {
  id: string;
  titulo: string;
  columnas: string[];
  filas: string[][];
  /** Grupo para ordenar las tablas en Estudio (p. ej. "Laboratorio", "Tuberculosis", "Hongos"). */
  grupo?: string;
  /** Nota corta bajo el título. */
  nota?: string;
  fotos?: FotoPie[];
}

export interface Reino {
  nombre: string;
  clave: string;
  descripcion: string;
}

export interface PalabraAhorcado {
  palabra: string;
  pista: string;
  /** Foto real que hay que reconocer (solo en los ahorcados con imagen). */
  foto?: string;
  /** Identificador si la misma palabra se repite con fotos distintas. */
  id?: string;
}

export type NivelAhorcado = "facil" | "medio" | "dificil" | "muydificil";

/** Bloque de un apunte. Texto con **negrita** y *cursiva*. */
export type Bloque =
  | { t: "h"; texto: string }
  | { t: "p"; texto: string }
  /** Items que empiezan con dos espacios son subpuntos del anterior. */
  | { t: "lista"; orden?: boolean; items: string[] }
  | { t: "tabla"; columnas: string[]; filas: string[][] };

export interface Apunte {
  id: string;
  grupo: string;
  titulo: string;
  subtitulo: string;
  bloques: Bloque[];
}

/** Tarjeta de repaso suelta (no es pregunta del juego). */
export interface Tarjeta {
  id: string;
  tema: string;
  pregunta: string;
  respuesta: string;
  detalle: string;
}
