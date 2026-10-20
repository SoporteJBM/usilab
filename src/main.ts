/**
 * Punto de entrada. Orden:
 * 1. Manejadores globales de errores (antes que cualquier otra cosa).
 * 2. Menú superior.
 * 3. Pantalla de ingreso y revisión de la sesión guardada.
 */
import "./estilos/index.css";
import { definirRescate, instalarManejadoresGlobales, reportar } from "./lib/errores";
import { $ } from "./lib/dom";
import { iniciarAutenticacion, sesion } from "./servicios/sesion";
import { mostrarComentarios } from "./vistas/comentarios";
import { mostrarEstudio } from "./vistas/estudio/hub";
import { mostrarInicio } from "./vistas/inicio";
import { mostrarTablero } from "./vistas/jugar/tablero";
import { ingresar, mostrarLogin } from "./vistas/login";
import { menuTarjetas } from "./vistas/estudio/tarjetas";
import { mostrarRanking } from "./vistas/ranking";
import { icono } from "./ui/secciones";

instalarManejadoresGlobales();
definirRescate(() => (sesion.modo ? mostrarInicio() : mostrarLogin()));

async function arrancar(): Promise<void> {
  const NAV: Record<string, () => void> = { inicio: mostrarInicio, jugar: mostrarTablero, estudio: mostrarEstudio, comentarios: mostrarComentarios };
  $("#topnav").addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-k]");
    if (b && NAV[b.dataset.k ?? ""]) NAV[b.dataset.k!]();
  });

  // Menú lateral (computadora): mismas secciones, más Flashcards y Ranking.
  const LATERAL: Record<string, () => void> = { ...NAV, tarjetas: () => menuTarjetas(), ranking: () => mostrarRanking(mostrarInicio) };
  const lateral = $("#lateral");
  lateral.querySelectorAll<HTMLButtonElement>(".lat-nav button[data-k]").forEach((b) => b.prepend(icono(b.dataset.k ?? "", 20)));
  lateral.querySelector(".lat-racha")?.prepend(icono("racha", 16));
  lateral.addEventListener("click", (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>("button[data-k]");
    if (b && LATERAL[b.dataset.k ?? ""]) LATERAL[b.dataset.k!]();
  });

  // La marca MiUsiLab lleva al inicio (si ya entró).
  document.querySelectorAll<HTMLAnchorElement>("a.marca, a.lat-marca").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); if (sesion.modo) mostrarInicio(); }));

  mostrarLogin();
  await iniciarAutenticacion((evento) => {
    if (evento === "recuperar") mostrarLogin();
    if (evento === "entro") void ingresar("cuenta");
  });
  if (sesion.usuario && !sesion.recuperando && !sesion.modo) await ingresar("cuenta");
  else if (!sesion.modo) mostrarLogin();
}

arrancar().catch((e) => {
  reportar(e, "arranque");
  // Aunque falle la base de datos, siempre se puede jugar como invitado.
  try { mostrarLogin(); } catch { /* nada */ }
});
