/**
 * REPASO INTELIGENTE: cada pregunta respondida entra en una de 5 cajas.
 * Si la aciertas sube de caja y vuelve más espaciada (1, 3, 7, 16 y 35 días);
 * si la fallas vuelve a la caja 1 y toca repasarla hoy. «Repaso de hoy» trae las que tocan.
 */
import { pregunta } from "../../catalogo";
import { vista } from "../../lib/errores";
import { boton, mk } from "../../lib/dom";
import { CAJAS, DIAS_POR_CAJA, enRepaso, estado, fecha, pendientesDeRepaso, proximoRepaso } from "../../estado/progreso";
import { conDatoCurioso } from "../../ui/cargando";
import { abrirPanel } from "../../ui/marco";
import { aItem, jugarPreguntas } from "./quiz";

export const PREGUNTAS_REPASO = 10;
const PUNTOS_REPASO = 10;

/** «hoy», «mañana», «en 3 días» o la fecha. */
export function cuandoToca(f: string): string {
  if (f <= fecha(0)) return "hoy";
  if (f === fecha(1)) return "mañana";
  for (let d = 2; d <= 6; d++) if (f === fecha(d)) return "en " + d + " días";
  const [a, m, dd] = f.split("-").map(Number);
  return "el " + new Date(a, m - 1, dd).toLocaleDateString("es-PE", { day: "numeric", month: "long" });
}

export const mostrarRepaso = vista("el repaso de hoy", (volver: () => void) => {
  const p = abrirPanel("jugar");
  const pendientes = pendientesDeRepaso();
  p.append(mk("h2", null, "Repaso de hoy"));
  p.append(mk("p", "note", "Cada pregunta que respondes entra al repaso. Si la aciertas, vuelve cada vez más espaciada (1, 3, 7, 16 y 35 días); si la fallas, vuelve hoy. Así repasas justo lo que estás por olvidar."));

  const total = enRepaso();
  if (!total) {
    p.append(mk("p", "repaso-vacio", "Todavía no tienes preguntas en repaso. Juega rondas en cualquier sección y la página te las irá trayendo para repasar."));
    p.append(boton("Volver", "ghost", volver));
    return;
  }

  // Cajas: cuántas preguntas hay en cada nivel de memoria.
  const cajas = mk("div", "repaso-cajas");
  for (let c = 1; c <= CAJAS; c++) {
    const n = Object.values(estado.repaso).filter((r) => r.caja === c).length;
    const caja = mk("div", "repaso-caja c" + c);
    caja.append(mk("strong", null, String(n)), mk("small", null, "Caja " + c + (c === 1 ? " · nuevas o falladas" : " · cada " + DIAS_POR_CAJA[c] + " días")));
    cajas.append(caja);
  }
  p.append(cajas);

  const fila = mk("div", "row");
  if (pendientes.length) {
    const n = Math.min(PREGUNTAS_REPASO, pendientes.length);
    p.append(mk("p", "repaso-hoy", pendientes.length + (pendientes.length === 1 ? " pregunta toca hoy." : " preguntas tocan hoy.") + (pendientes.length > n ? " Van de " + n + " en " + n + "." : "")));
    fila.append(boton("Empezar repaso (" + n + ")", "primary", () => conDatoCurioso(() => jugarRepaso(volver), "casos")));
  } else {
    const prox = proximoRepaso();
    p.append(mk("p", "repaso-hoy ok", "¡Nada pendiente por hoy!" + (prox ? " Tu próximo repaso es " + cuandoToca(prox) + "." : "")));
  }
  fila.append(boton("Volver", "ghost", volver));
  p.append(fila);
});

export const jugarRepaso = vista("el repaso", (volver: () => void) => {
  const items = pendientesDeRepaso().slice(0, PREGUNTAS_REPASO).flatMap(({ id }) => {
    const x = pregunta(id);
    if (!x) return [];
    return [aItem(x.q, x.est)];
  });
  jugarPreguntas("Repaso de hoy", items, PUNTOS_REPASO, {
    pista: "mitad",
    alSalir: () => mostrarRepaso(volver),
    otraVez: () => mostrarRepaso(volver),
    textoVolver: "Volver",
  });
});

/** Texto corto para tarjetas: «8 preguntas para hoy». */
export function resumenRepaso(): string {
  const n = pendientesDeRepaso().length;
  if (n) return n + (n === 1 ? " pregunta para hoy" : " preguntas para hoy");
  return enRepaso() ? "Al día · nada pendiente hoy" : "Empieza jugando cualquier sección";
}

