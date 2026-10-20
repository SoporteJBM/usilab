/** Ingreso: entrar, crear cuenta, recuperar contraseña o jugar como invitado. */
import { CONFIG, esArtefacto } from "../config";
import { avisar, protegido, vista } from "../lib/errores";
import { $, boton, mk } from "../lib/dom";
import { crearCuenta, entrar, entrarConCorreo, entrarConGoogle, nuevaContrasena, olvideContrasena, salir, sesion, sincronizar } from "../servicios/sesion";
import { db } from "../servicios/supabase";
import { abrirLogin, pintarMarcador } from "../ui/marco";
import { actualizarInsignia } from "./comentarios";
import { mostrarInicio } from "./inicio";
import { mostrarRanking } from "./ranking";

let pestana: "entrar" | "crear" = "entrar";
let entrando = false;

function campo(etiqueta: string, tipo: string, id: string, auto: string): HTMLLabelElement {
  const l = mk("label", "field");
  const i = mk("input");
  i.type = tipo; i.id = id; i.autocomplete = auto as AutoFill; i.required = true;
  if (tipo === "email") i.inputMode = "email";
  l.append(mk("span", null, etiqueta), i);
  return l;
}
const valor = (id: string) => (document.getElementById(id) as HTMLInputElement | null)?.value ?? "";

/** Pasa de la pantalla de ingreso al Inicio. Protegido contra dobles llamadas. */
export async function ingresar(modo: "cuenta" | "invitado"): Promise<void> {
  if (entrando || sesion.modo) return;
  entrando = true;
  try {
    const aviso = await entrar(modo);
    pintarCabecera();
    pintarMarcador();
    mostrarInicio();
    if (aviso) avisar(aviso, "info");
    void actualizarInsignia();
    if (modo === "cuenta") void sincronizar();
  } finally {
    entrando = false;
  }
}

/** Cuenta en el menú lateral (computadora): foto o inicial, nombre y botón para entrar o salir. */
function pintarCuentaLateral(): void {
  const caja = document.getElementById("lat-cuenta");
  if (!caja) return;
  caja.replaceChildren();
  const cuenta = sesion.modo === "cuenta";
  const nombre = cuenta ? (esArtefacto ? sesion.claude?.name || "Tu cuenta" : sesion.apodo) : "Invitado";
  const foto = mk("span", "lat-foto");
  foto.setAttribute("aria-hidden", "true");
  if (esArtefacto && cuenta && sesion.claude?.avatarUrl) {
    const img = mk("img");
    img.src = sesion.claude.avatarUrl; img.alt = "";
    img.onerror = () => { img.remove(); foto.textContent = (nombre || "?").trim().charAt(0).toUpperCase(); };
    foto.append(img);
  } else foto.textContent = (nombre || "?").trim().charAt(0).toUpperCase();
  const textos = mk("span", "lat-quien");
  textos.append(mk("strong", null, nombre), mk("small", null, cuenta ? (esArtefacto ? "Cuenta de Claude" : "Tu cuenta") : "Avance en este dispositivo"));
  caja.append(foto, textos, boton(cuenta ? "Salir" : "Entrar", "lat-salir", async () => {
    await salir();
    pestana = "entrar";
    pintarMarcador();
    mostrarLogin();
  }));
  const r = document.getElementById("lat-ranking");
  if (r) r.hidden = !(esArtefacto && cuenta);
}

export function pintarCabecera(): void {
  pintarCuentaLateral();
  const w = $("#who");
  w.replaceChildren();
  w.hidden = false;
  if (esArtefacto && sesion.modo === "cuenta" && sesion.claude?.avatarUrl) {
    const img = mk("img");
    img.src = sesion.claude.avatarUrl; img.alt = "";
    w.append(img);
  }
  w.append(mk("strong", null, sesion.modo === "cuenta" ? (esArtefacto ? sesion.claude?.name || "Tu cuenta" : sesion.apodo) : "Invitado"));
  const s = mk("span", "sync", sesion.modo === "cuenta" ? "" : "Avance solo en este dispositivo");
  s.id = "sync";
  w.append(s);
  if (esArtefacto && sesion.modo === "cuenta") w.append(boton("Ranking", "ghost", () => mostrarRanking()));
  w.append(boton(sesion.modo === "cuenta" ? "Cerrar sesión" : "Entrar con cuenta", "ghost", async () => {
    await salir();
    pestana = "entrar";
    pintarMarcador();
    mostrarLogin();
  }));
}

export const mostrarLogin = vista("el ingreso", () => {
  const caja = abrirLogin();
  const msg = mk("p", "msg");
  msg.setAttribute("role", "status");
  const decir = (t: string, ok = false) => { msg.textContent = t; msg.className = "msg " + (ok ? "ok" : "no"); };

  if (esArtefacto) {
    caja.append(mk("h2", null, "Entra para guardar tu avance"));
    if (!sesion.lista) {
      caja.append(mk("p", "note", "Comprobando tu cuenta de Claude…"));
    } else if (sesion.claude) {
      const cuenta = mk("div", "acct");
      if (sesion.claude.avatarUrl) { const img = mk("img"); img.src = sesion.claude.avatarUrl; img.alt = ""; cuenta.append(img); }
      const txt = mk("div");
      txt.append(mk("strong", null, sesion.claude.name || "Tu cuenta"), mk("small", null, "Cuenta de Claude"));
      cuenta.append(txt);
      caja.append(cuenta, boton("Entrar", "primary", () => ingresar("cuenta")),
        mk("p", "note", "No hay contraseña: entras con la cuenta de Claude con la que abriste esta página. Tu avance queda guardado en tu cuenta, lo ves en cualquier dispositivo y apareces en el ranking."));
    } else {
      caja.append(mk("p", "note", "No encontramos una cuenta con acceso a esta página. Puedes jugar como invitado: tu avance se guarda solo en este dispositivo."));
    }
  } else if (!db()) {
    caja.append(mk("h2", null, "Bienvenido"), mk("p", "note", "El ingreso con cuenta todavía no está configurado. Puedes jugar como invitado: tu avance se guarda en este dispositivo."));
  } else if (sesion.recuperando) {
    caja.append(mk("h2", null, "Crea una contraseña nueva"));
    const f = mk("form", "auth");
    f.noValidate = true;
    const b = mk("button", "primary", "Guardar contraseña");
    b.type = "submit";
    f.append(campo("Contraseña nueva (mínimo 8 caracteres)", "password", "pw-new", "new-password"), b, msg);
    f.onsubmit = protegido(async (e: SubmitEvent) => {
      e.preventDefault();
      b.disabled = true;
      const r = await nuevaContrasena(valor("pw-new"));
      b.disabled = false;
      if (!r.ok) return decir(r.error);
      decir("Contraseña actualizada.", true);
      setTimeout(() => void ingresar("cuenta"), 600);
    }, "nueva contraseña");
    caja.append(f);
    return;
  } else if (!sesion.lista) {
    caja.append(mk("h2", null, "Bienvenido"), mk("p", "note", "Comprobando tu sesión…"));
  } else {
    const crear = pestana === "crear";
    caja.append(mk("h2", null, crear ? "Crea tu cuenta" : "Entra para guardar tu avance"));
    const tabs = mk("div", "tabs");
    ([["entrar", "Entrar"], ["crear", "Crear cuenta"]] as const).forEach(([k, t]) => {
      const b = boton(t, "tab" + (pestana === k ? " on" : ""), () => { pestana = k; mostrarLogin(); });
      b.setAttribute("aria-pressed", String(pestana === k));
      tabs.append(b);
    });
    const f = mk("form", "auth");
    f.noValidate = true;
    if (crear) f.append(campo("Apodo (así te verán tus compañeros)", "text", "apodo", "nickname"));
    f.append(campo("Correo", "email", "email", "email"));
    f.append(campo("Contraseña" + (crear ? " (mínimo 8 caracteres)" : ""), "password", "pw", crear ? "new-password" : "current-password"));
    const enviar = mk("button", "primary", crear ? "Crear cuenta" : "Entrar");
    enviar.type = "submit";
    f.append(enviar, msg);
    f.onsubmit = protegido(async (e: SubmitEvent) => {
      e.preventDefault();
      if (enviar.disabled) return;
      const email = valor("email").trim();
      const pw = valor("pw");
      enviar.disabled = true;
      decir("Un momento…", true);
      try {
        if (crear) {
          const r = await crearCuenta(valor("apodo").trim(), email, pw);
          if (!r.ok) return decir(r.error);
          if (r.data.confirmar) return decir("Te enviamos un correo para confirmar tu cuenta. Ábrelo y vuelve a esta página.", true);
        } else {
          const r = await entrarConCorreo(email, pw);
          if (!r.ok) return decir(r.error);
        }
        // El evento SIGNED_IN también llama a ingresar(); `ingresar` ignora la segunda llamada.
        await ingresar("cuenta");
      } finally {
        enviar.disabled = false;
      }
    }, "formulario de ingreso");
    caja.append(tabs, f);
    if (CONFIG.google) {
      caja.append(mk("p", "or", "o"), boton("Continuar con Google", "google", async () => {
        const r = await entrarConGoogle();
        if (!r.ok) decir("No se pudo abrir Google: " + r.error);
      }));
    }
    if (!crear) {
      caja.append(boton("¿Olvidaste tu contraseña?", "link", async () => {
        const r = await olvideContrasena(valor("email").trim());
        decir(r.ok ? "Te enviamos un enlace para crear una contraseña nueva." : r.error, r.ok);
      }));
    }
  }
  caja.append(boton("Jugar como invitado", "ghost", () => ingresar("invitado")));
});
