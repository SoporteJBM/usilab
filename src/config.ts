/**
 * Configuración inyectada al compilar (build.mjs la toma de .env o de variables de entorno).
 * Sin URL ni clave, la página funciona solo en modo invitado.
 */
declare const __CONFIG__: {
  supabaseUrl: string;
  supabaseAnonKey: string;
  google: boolean;
  /** "artefacto" cuando se compila como artefacto de claude.ai (cuentas, datos y corrección con Claude). */
  plataforma?: "artefacto";
};

// Fuera de la compilación (p. ej. cuando las pruebas importan módulos sueltos) no hay __CONFIG__.
export const CONFIG: typeof __CONFIG__ = typeof __CONFIG__ !== "undefined" ? __CONFIG__ : { supabaseUrl: "", supabaseAnonKey: "", google: false };

/** true si hay base de datos configurada (ingreso con cuenta, comentarios). */
export const hayCuentas = Boolean(CONFIG.supabaseUrl && CONFIG.supabaseAnonKey);

/**
 * Dónde viven las cuentas y los datos compartidos:
 * - "supabase": la página web con base de datos configurada.
 * - "artefacto": el artefacto de claude.ai (cuenta de Claude, base de datos del artefacto y Claude para corregir).
 * - "ninguna": solo invitado; todo queda en el dispositivo.
 */
export type Plataforma = "supabase" | "artefacto" | "ninguna";
export const PLATAFORMA: Plataforma = CONFIG.plataforma === "artefacto" ? "artefacto" : hayCuentas ? "supabase" : "ninguna";
export const esArtefacto = PLATAFORMA === "artefacto";
