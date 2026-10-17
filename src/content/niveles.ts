import type { Nivel } from "./types";

export const NIVELES: { clave: Nivel; nombre: string; descripcion: string }[] = [
  {
    "clave": "f",
    "nombre": "Fácil",
    "descripcion": "Preguntas básicas. La pista es gratis."
  },
  {
    "clave": "m",
    "nombre": "Medio",
    "descripcion": "Preguntas más complejas. La pista cuesta la mitad de los puntos."
  },
  {
    "clave": "d",
    "nombre": "Difícil",
    "descripcion": "Preguntas realmente difíciles. Sin pistas."
  },
  {
    "clave": "x",
    "nombre": "Muy difícil",
    "descripcion": "Razonamiento en varios pasos, mecanismos y trampas. Sin pistas."
  }
];

export const PUNTOS: Record<Nivel, number> = { f: 5, m: 10, d: 20, x: 40 };
export const PISTA: Record<Nivel, "gratis" | "mitad" | "ninguna"> = { f: "gratis", m: "mitad", d: "ninguna", x: "ninguna" };
export const NOMBRE_NIVEL: Record<Nivel, string> = { f: "Fácil", m: "Medio", d: "Difícil", x: "Muy difícil" };
