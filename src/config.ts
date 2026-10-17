/**
 * Configuración inyectada al compilar (build.mjs la toma de .env o de variables de entorno).
 * Sin URL ni clave, la página funciona solo en modo invitado.
 */
declare const __CONFIG__: {
  supabaseUrl: string;
  supabaseAnonKey: string;
  google: boolean;
};

export const CONFIG = __CONFIG__;

/** true si hay base de datos configurada (ingreso con cuenta, comentarios). */
export const hayCuentas = Boolean(CONFIG.supabaseUrl && CONFIG.supabaseAnonKey);
