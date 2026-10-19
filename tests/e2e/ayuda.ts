import { expect, type Page } from "@playwright/test";
import { enunciado, todasLasPreguntas } from "../../src/catalogo";

/** Abre la página limpia (sin datos guardados) y, si se pide, prepara localStorage antes de cargar. */
export async function abrir(page: Page, preparar?: Record<string, string>): Promise<void> {
  const errores: string[] = [];
  page.on("pageerror", (e) => errores.push(e.message));
  (page as unknown as { __errores: string[] }).__errores = errores;
  await page.addInitScript((datos) => {
    if (sessionStorage.getItem("__preparado")) return;
    sessionStorage.setItem("__preparado", "1");
    localStorage.clear();
    for (const [k, v] of Object.entries(datos || {})) localStorage.setItem(k, v);
  }, preparar ?? {});
  await page.goto("/");
}

export const erroresDePagina = (page: Page): string[] => (page as unknown as { __errores: string[] }).__errores;

export async function comoInvitado(page: Page): Promise<void> {
  await page.getByRole("button", { name: "Jugar como invitado" }).click();
  await expect(page.getByRole("heading", { name: "Inicio" })).toBeVisible();
}

/** Salta la pantalla "¿Sabías que...?". */
export async function saltarDato(page: Page): Promise<void> {
  const loader = page.locator("#loader");
  await expect(loader).toBeVisible();
  await loader.click();
  await expect(loader).toBeHidden();
}

export async function elegirNivel(page: Page, nivel: "Fácil" | "Medio" | "Difícil" | "Muy difícil"): Promise<void> {
  await page.locator(".level", { hasText: nivel }).first().click();
  await page.getByRole("button", { name: "Confirmar: " + nivel }).click();
  await saltarDato(page);
}

// Respuestas correctas sacadas del mismo contenido que usa la página.
export const RESPUESTAS = new Map(todasLasPreguntas().map(({ q }) => [(q.caso ?? "") + "|" + enunciado(q), q.correcta]));

/** Responde la pregunta de opción múltiple en pantalla, bien o mal a propósito. Devuelve la correcta. */
export async function responder(page: Page, bien: boolean): Promise<string> {
  const panel = page.locator("#panel");
  const opciones = panel.locator(".opts button");
  await expect(opciones.first()).toBeEnabled();
  const caso = (await panel.locator("p.case").count()) ? (await panel.locator("p.case").first().textContent()) ?? "" : "";
  const pregunta = (await panel.locator("p:not([class])").first().textContent()) ?? "";
  const correcta = RESPUESTAS.get(caso + "|" + pregunta);
  expect(correcta, "pregunta no encontrada en el contenido: " + pregunta).toBeTruthy();
  const textos = (await opciones.allTextContents()).map((t) => t.trim());
  expect(textos).toHaveLength(4);
  expect(textos).toContain(correcta);
  const i = bien ? textos.indexOf(correcta!) : textos.findIndex((t) => t !== correcta);
  await opciones.nth(i).click();
  await expect(panel.locator(".feedback")).toHaveClass(bien ? /ok/ : /no/);
  return correcta!;
}

/** Sin desplazamiento horizontal. */
export async function sinScrollHorizontal(page: Page): Promise<void> {
  const ancho = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(ancho).toBeLessThanOrEqual(1);
}
