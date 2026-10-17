/**
 * Simulador de @supabase/supabase-js para las pruebas (node build.mjs --mock).
 * Guarda todo en localStorage["__mock_db"] para sobrevivir recargas.
 * Para simular fallas: localStorage["__mock_falla"] = "red" | "error" | "lento".
 */
export interface User { id: string; email?: string }
interface Session { user: User }
type Evento = "SIGNED_IN" | "SIGNED_OUT" | "PASSWORD_RECOVERY" | "INITIAL_SESSION";
interface Err { message: string; status?: number; code?: string }

interface Db {
  usuarios: { id: string; email: string; pw: string; apodo: string }[];
  sesion: string | null;
  progreso: Record<string, { estado: unknown; puntos: number; dominadas: number }>;
  comentarios: { id: number; user_id: string; texto: string; creado: string }[];
  sig: number;
}

const leer = (): Db => {
  try { return JSON.parse(localStorage.getItem("__mock_db") || "") as Db; }
  catch { return { usuarios: [], sesion: null, progreso: {}, comentarios: [], sig: 1 }; }
};
const guardar = (d: Db) => localStorage.setItem("__mock_db", JSON.stringify(d));
const falla = () => localStorage.getItem("__mock_falla");

async function responder<T>(fn: (d: Db) => T): Promise<{ data: T | null; error: Err | null; count?: number | null }> {
  const f = falla();
  if (f === "red") throw new TypeError("Failed to fetch");
  if (f === "lento") await new Promise((r) => setTimeout(r, 60000));
  await new Promise((r) => setTimeout(r, 30));
  if (f === "error") return { data: null, error: { message: "internal error", status: 500 } };
  const d = leer();
  try {
    const data = fn(d);
    guardar(d);
    return { data, error: null };
  } catch (e) {
    return { data: null, error: { message: (e as Error).message } };
  }
}

const usuarioActual = (d: Db): User | null => {
  const u = d.usuarios.find((x) => x.id === d.sesion);
  return u ? { id: u.id, email: u.email } : null;
};

class Consulta implements PromiseLike<{ data: unknown; error: Err | null; count?: number | null }> {
  private filtros: [string, unknown][] = [];
  private accion: "select" | "upsert" | "insert" | "delete" = "select";
  private fila: Record<string, unknown> = {};
  private unica = false;
  private soloConteo = false;
  constructor(private tabla: string) {}
  select(_c?: string, o?: { count?: string; head?: boolean }) { if (o?.head) this.soloConteo = true; return this; }
  eq(c: string, v: unknown) { this.filtros.push([c, v]); return this; }
  maybeSingle() { this.unica = true; return this; }
  upsert(f: Record<string, unknown>) { this.accion = "upsert"; this.fila = f; return this; }
  insert(f: Record<string, unknown>) { this.accion = "insert"; this.fila = f; return this; }
  delete() { this.accion = "delete"; return this; }
  then<A, B>(ok?: ((v: { data: unknown; error: Err | null; count?: number | null }) => A | PromiseLike<A>) | null, mal?: ((e: unknown) => B | PromiseLike<B>) | null): PromiseLike<A | B> {
    return this.ejecutar().then(ok, mal);
  }
  private async ejecutar() {
    const r = await responder((d) => {
      const yo = usuarioActual(d);
      if (!yo) throw new Error("JWT expired");
      if (this.tabla === "progreso") {
        if (this.accion === "upsert") { d.progreso[yo.id] = this.fila as Db["progreso"][string]; return null; }
        const p = d.progreso[yo.id];
        return p ? { estado: p.estado } : null;
      }
      if (this.tabla === "perfiles") {
        const u = d.usuarios.find((x) => x.id === yo.id);
        return u ? { apodo: u.apodo } : null;
      }
      if (this.tabla === "comentarios") {
        if (this.accion === "insert") {
          const texto = String(this.fila.texto || "");
          if (!texto.trim() || texto.length > 500) throw new Error("violates check constraint");
          d.comentarios.push({ id: d.sig++, user_id: yo.id, texto, creado: new Date().toISOString() });
          return null;
        }
        if (this.accion === "delete") {
          const id = this.filtros.find(([c]) => c === "id")?.[1];
          d.comentarios = d.comentarios.filter((c) => !(c.id === id && c.user_id === yo.id));
          return null;
        }
        return this.soloConteo ? null : d.comentarios;
      }
      throw new Error("tabla desconocida");
    });
    if (this.soloConteo && !r.error) r.count = leer().comentarios.length;
    void this.unica;
    return r;
  }
}

export function createClient(_url: string, _key: string, _o?: unknown) {
  const oyentes: ((e: Evento, s: Session | null) => void)[] = [];
  const emitir = (e: Evento) => { const u = usuarioActual(leer()); oyentes.forEach((f) => f(e, u ? { user: u } : null)); };
  const sesionDe = (d: Db) => { const u = usuarioActual(d); return u ? { user: u } : null; };
  return {
    auth: {
      onAuthStateChange(cb: (e: Evento, s: Session | null) => void) { oyentes.push(cb); return { data: { subscription: { unsubscribe() {} } } }; },
      getSession: () => responder((d) => ({ session: sesionDe(d) })).then((r) => ({ data: r.data ?? { session: null }, error: r.error })),
      async signInWithPassword({ email, password }: { email: string; password: string }) {
        const r = await responder((d) => {
          const u = d.usuarios.find((x) => x.email === email && x.pw === password);
          if (!u) throw new Error("Invalid login credentials");
          d.sesion = u.id;
          return { user: { id: u.id, email: u.email }, session: { user: { id: u.id, email: u.email } } };
        });
        if (!r.error) setTimeout(() => emitir("SIGNED_IN"), 0);
        return { data: r.data ?? { user: null, session: null }, error: r.error };
      },
      async signUp({ email, password, options }: { email: string; password: string; options?: { data?: { apodo?: string }; emailRedirectTo?: string } }) {
        const r = await responder((d) => {
          if (d.usuarios.some((x) => x.email === email)) throw new Error("User already registered");
          const u = { id: "u" + d.sig++, email, pw: password, apodo: options?.data?.apodo || email.split("@")[0] };
          d.usuarios.push(u);
          d.sesion = u.id;
          return { user: { id: u.id, email }, session: { user: { id: u.id, email } } };
        });
        if (!r.error) setTimeout(() => emitir("SIGNED_IN"), 0);
        return { data: r.data ?? { user: null, session: null }, error: r.error };
      },
      async signOut() { const r = await responder((d) => { d.sesion = null; return null; }); emitir("SIGNED_OUT"); return { error: r.error }; },
      resetPasswordForEmail: (_e: string, _o?: unknown) => responder(() => ({})),
      updateUser: (_a: { password: string }) => responder(() => ({ user: null })),
      signInWithOAuth: (_a: unknown) => responder(() => ({ provider: "google", url: null })),
    },
    from: (t: string) => new Consulta(t),
    rpc: (nombre: string, _a?: unknown) => responder((d) => {
      const yo = usuarioActual(d);
      if (!yo) throw new Error("JWT expired");
      if (nombre !== "comentarios_recientes") throw new Error("función desconocida");
      return d.comentarios.slice().reverse().map((c) => ({ id: c.id, apodo: d.usuarios.find((u) => u.id === c.user_id)?.apodo ?? "Alumno", texto: c.texto, creado: c.creado, soy_yo: c.user_id === yo.id }));
    }),
  };
}

export type SupabaseClient = ReturnType<typeof createClient>;
