import { avisar } from "./errores";

/**
 * localStorage seguro: puede no existir (modo privado), estar lleno o tener datos corruptos.
 * Nada aquí lanza errores; quien llama decide qué hacer con un `null`.
 */
let avisado = false;

export function leer(clave: string): unknown {
  let crudo: string | null;
  try {
    crudo = localStorage.getItem(clave);
  } catch {
    return null;
  }
  if (crudo == null) return null;
  try {
    return JSON.parse(crudo);
  } catch (e) {
    // Dato roto: se aparta para no perderlo y se empieza limpio.
    console.warn("[reto] dato local corrupto en", clave, e);
    try {
      localStorage.setItem(clave + ":corrupto", crudo);
      localStorage.removeItem(clave);
    } catch { /* nada */ }
    return null;
  }
}

export function escribir(clave: string, valor: unknown): boolean {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (e) {
    console.warn("[reto] no se pudo guardar en el dispositivo", e);
    if (!avisado) {
      avisado = true;
      avisar("No se pudo guardar tu avance en este dispositivo (¿modo privado o memoria llena?).", "info");
    }
    return false;
  }
}
