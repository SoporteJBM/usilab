import { expect, test } from "@playwright/test";
import { abrir, elegirNivel, erroresDePagina, responder, sinScrollHorizontal } from "./ayuda";

// Diseño para computadora (desde 1100 px): menú lateral, Inicio tipo tablero, Jugar en cuadrícula,
// preguntas en modo enfoque con teclado y apuntes en tres columnas.

async function entrar(page: import("@playwright/test").Page) {
  await abrir(page);
  await page.getByRole("button", { name: "Jugar como invitado" }).click();
  await expect(page.getByRole("heading", { name: "Hola" })).toBeVisible();
}

test("menú lateral, Inicio tipo tablero y Jugar en cuadrícula", async ({ page }) => {
  await entrar(page);
  const lateral = page.locator("#lateral");
  await expect(lateral).toBeVisible();
  await expect(page.locator("#topnav")).toBeHidden();
  await expect(lateral.getByRole("button", { name: "Inicio" })).toHaveAttribute("aria-current", "page");
  await expect(lateral.locator("#lat-cuenta")).toContainText("Invitado");

  // Tablero: meta del día, continuar, examen, 4 reinos y novedades
  await expect(page.locator(".ia-meta")).toContainText("Meta del día");
  await expect(page.locator(".ia-meta .an-texto")).toHaveText("0/20");
  await expect(page.locator(".ia-seguir")).toContainText("Aún no has jugado");
  await expect(page.locator(".ia-examen")).toContainText("Examen del curso");
  await expect(page.locator(".ia-reino")).toHaveCount(4);
  await expect(page.locator(".ia-nov")).toHaveCount(2);
  await sinScrollHorizontal(page);

  // Jugar: 8 secciones con anillo, filtros y fila aparte
  await lateral.getByRole("button", { name: "Jugar" }).click();
  await expect(page.locator(".ta-card")).toHaveCount(8);
  await expect(page.locator(".ta-card .anillo")).toHaveCount(8);
  await expect(page.locator(".ta-otra", { hasText: "Microscopio" })).toBeVisible();
  await page.getByRole("button", { name: "TB y resistencia" }).click();
  await expect(page.locator(".ta-card")).toHaveCount(2);
  await expect(page.getByRole("button", { name: "TB y resistencia" })).toHaveAttribute("aria-pressed", "true");
  await page.locator(".ta-filtros").getByRole("button", { name: "Todas", exact: true }).click();
  await expect(page.locator(".ta-card")).toHaveCount(8);
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("pregunta en modo enfoque: sin menú, segmentos, teclas 1–4 y Enter; luego Continuar y meta del día", async ({ page }) => {
  await entrar(page);
  await page.locator("#lateral").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".ta-card.sec-bacterias .ta-titulo").click();
  await elegirNivel(page, "Fácil");

  await expect(page.locator("#lateral")).toBeHidden();
  await expect(page.locator(".q-barra")).toBeVisible();
  await expect(page.locator(".q-segs .seg")).toHaveCount(5);
  await expect(page.locator(".q-main .opts button")).toHaveCount(4);
  await expect(page.locator(".q-lado")).toBeVisible();

  // Primera con teclado: se elige con un número y se sigue con Enter.
  await page.keyboard.press("2");
  await expect(page.locator(".q-lado .feedback")).not.toBeEmpty();
  await expect(page.locator(".q-segs .seg.ok, .q-segs .seg.no")).toHaveCount(1);
  await page.locator("body").click({ position: { x: 5, y: 300 } });
  await page.keyboard.press("Enter");
  await expect(page.locator(".q-cuenta")).toHaveText("2 de 5");

  // Las demás, bien
  for (let i = 1; i < 5; i++) {
    await responder(page, true);
    await page.getByRole("button", { name: "Siguiente" }).click();
  }
  await expect(page.getByRole("heading", { name: /de 5/ })).toBeVisible();
  await expect(page.locator("#lateral")).toBeVisible();

  await page.locator("#lateral").getByRole("button", { name: "Inicio" }).click();
  await expect(page.locator(".ia-meta .an-texto")).toHaveText("5/20");
  await expect(page.locator(".ia-seguir")).toContainText("Bacterias");
  await expect(page.locator(".ia-seguir")).toContainText("Nivel Fácil");
  await page.locator(".ia-seguir").click();
  await expect(page.locator(".level").first()).toBeVisible();
  expect(erroresDePagina(page)).toEqual([]);
});

test("apuntes en tres columnas: lista con ✓, índice, tamaño de letra y marcar como leído", async ({ page }) => {
  await entrar(page);
  await page.locator("#lateral").getByRole("button", { name: "Estudio" }).click();
  await page.getByRole("button", { name: /Apuntes de teoría/ }).click();
  await page.getByRole("button", { name: /^Tuberculosis/ }).first().click();

  await expect(page.locator(".apunte-ancho")).toBeVisible();
  await expect(page.locator(".ap-clases .ap-clase")).toHaveCount(9);
  await expect(page.locator(".ap-clases-tit")).toContainText("0 de 9 leídas");
  await expect(page.locator(".ap-en-este")).toContainText("Generalidades");
  await expect(page.locator(".ap-centro .ap-indice")).toBeHidden();

  const antes = await page.locator("article.apunte .ap-p").first().evaluate((e) => getComputedStyle(e).fontSize);
  await page.getByRole("button", { name: "Letra más grande" }).click();
  const despues = await page.locator("article.apunte .ap-p").first().evaluate((e) => getComputedStyle(e).fontSize);
  expect(parseFloat(despues)).toBeGreaterThan(parseFloat(antes));

  await page.getByRole("button", { name: "Marcar como leído" }).click();
  await expect(page.locator(".ap-leido")).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".ap-clase.actual .ap-marca")).toHaveText("✓");

  // Al cambiar de apunte la lista ya cuenta la leída
  await page.locator(".ap-clase", { hasText: "Candida" }).click();
  await expect(page.locator(".ap-clases-tit")).toContainText("1 de 9 leídas");
  await expect(page.getByRole("button", { name: "Practica este tema" })).toBeVisible();
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});
