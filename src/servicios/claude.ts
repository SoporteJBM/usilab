/**
 * Acceso a las capacidades del artefacto de claude.ai (window.claude.use):
 * - "user": quién está mirando (id, nombre, foto) y si es el dueño.
 * - "db": base de datos compartida del artefacto (documentos y colecciones).
 * - "sample": pedirle a Claude que corrija (con imágenes).
 * Fuera del artefacto todo devuelve null y la página sigue funcionando como invitado.
 */
export interface PerfilClaude { id: string; name: string; avatarUrl?: string }
export interface UsuarioClaude {
  me(): Promise<PerfilClaude>;
  profiles(ids: string[]): Promise<Record<string, { name?: string; avatarUrl?: string }>>;
  isOwner(): Promise<boolean>;
}
export interface FotoDoc { id: string; exists: boolean; data(): Record<string, unknown> | undefined }
export interface RefDoc { get(): Promise<FotoDoc>; set(datos: Record<string, unknown>): Promise<unknown> }
export interface Consulta {
  orderBy(campo: string, dir?: "asc" | "desc"): Consulta;
  limit(n: number): Consulta;
  get(): Promise<{ docs: FotoDoc[] }>;
}
export interface DbClaude { doc(ruta: string): RefDoc; collection(ruta: string): Consulta }
export interface SampleClaude {
  limits(): Promise<{ images?: unknown } | null>;
  json(prompt: string, opciones: { images?: Blob[]; modelTier?: string }): Promise<unknown>;
}

type Capacidad = "user" | "db" | "sample";
interface VentanaClaude { claude?: { use?: (n: Capacidad) => Promise<unknown> } }

const cache = new Map<Capacidad, Promise<unknown>>();
function usar<T>(nombre: Capacidad, espera = 8000): Promise<T | null> {
  if (!cache.has(nombre)) {
    const w = (typeof window !== "undefined" ? window : {}) as VentanaClaude;
    const p = w.claude?.use
      ? Promise.race([w.claude.use(nombre).catch(() => null), new Promise((r) => setTimeout(() => r(null), espera))])
      : Promise.resolve(null);
    cache.set(nombre, p);
  }
  return cache.get(nombre) as Promise<T | null>;
}

export const usuarioClaude = () => usar<UsuarioClaude>("user");
export const dbClaude = () => usar<DbClaude>("db");
export const sampleClaude = () => usar<SampleClaude>("sample", 15000);

let dueno: Promise<boolean> | null = null;
/** true si quien mira es el dueño del artefacto (ve sugerencias y reportes de todos). */
export function esDueno(): Promise<boolean> {
  if (!dueno) dueno = usuarioClaude().then((u) => (u ? u.isOwner().catch(() => false) : false));
  return dueno;
}

/** Nombres y fotos de varios usuarios a la vez; nunca falla. */
export async function perfiles(ids: string[]): Promise<Record<string, { name?: string; avatarUrl?: string }>> {
  const u = await usuarioClaude();
  if (!u || !ids.length) return {};
  try { return (await u.profiles(ids)) || {}; } catch { return {}; }
}

/** Mensaje claro para los errores del artefacto. */
export function errorClaude(e: unknown): string {
  const code = (e as { code?: string } | null)?.code;
  if (code === "invalid_argument" || code === "permission_denied") return "Tu acceso a esta página no permite guardar en línea. Pide acceso de colaborador.";
  if (code === "not_granted") return "Para usar esto, permite que la página use Claude (te lo pregunta). Si lo rechazaste, recarga la página.";
  if (code === "rate_limited") return "Llegaste al límite de uso de Claude por ahora. Espera un rato.";
  return "No se pudo conectar. Revisa tu conexión e inténtalo otra vez.";
}
