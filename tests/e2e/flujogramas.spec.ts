import { expect, test } from "@playwright/test";
import { FLUJOGRAMAS } from "../../src/content";
import { abrir, comoInvitado, erroresDePagina, sinScrollHorizontal } from "./ayuda";

const ciclo = FLUJOGRAMAS.find((f) => f.id === "vih-ciclo")!;

async function abrirLista(page: import("@playwright/test").Page) {
  await abrir(page);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
  await page.locator(".tool.flujogramas").click();
  await expect(page.locator(".flujo-item")).toHaveCount(FLUJOGRAMAS.length);
}

test("flujograma abierto: borrador guardado, modelo y autoevaluación", async ({ page }) => {
  await abrirLista(page);
  await page.locator(".flujo-item", { hasText: ciclo.titulo }).getByRole("button", { name: "Responder" }).click();
  await page.locator("#flujo-respuesta").fill("gp120 → CD4\n→ gp41\n→ transcriptasa inversa");
  // El borrador sobrevive a salir y volver.
  await page.waitForTimeout(700);
  await page.getByRole("button", { name: "← Flujogramas" }).click();
  await page.locator(".flujo-item", { hasText: ciclo.titulo }).getByRole("button", { name: "Responder" }).click();
  await expect(page.locator("#flujo-respuesta")).toHaveValue(/transcriptasa inversa/);

  await page.getByRole("button", { name: "Ver modelo y autoevaluarme" }).click();
  await expect(page.locator("ol.flujo > li")).toHaveCount(ciclo.pasos.length);
  await expect(page.locator("ol.flujo li.decision")).toHaveCount(ciclo.pasos.filter((p) => p.decision).length);
  const claves = page.locator("ul.flujo-claves input");
  await expect(claves).toHaveCount(ciclo.claves.length);
  await expect(page.locator(".flujo-puntaje")).toHaveText(`0 de ${ciclo.claves.length} claves · 0/20`);
  for (let i = 0; i < ciclo.claves.length; i++) await claves.nth(i).check();
  await expect(page.locator(".flujo-puntaje")).toHaveText(`${ciclo.claves.length} de ${ciclo.claves.length} claves · 20/20 · ¡Completo!`);
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("armar en orden: perfecto suma puntos; los pasos falsos se marcan", async ({ page }) => {
  await abrirLista(page);
  await page.locator(".flujo-item", { hasText: ciclo.titulo }).getByRole("button", { name: "Armar en orden" }).click();
  await expect(page.locator(".flujo-ficha")).toHaveCount(ciclo.pasos.length + ciclo.intrusos.length);
  // Primero un intento con error: un paso falso y quitarlo.
  await page.locator(".flujo-ficha", { hasText: ciclo.intrusos[0] }).click();
  await expect(page.locator(".flujo-elegido")).toHaveCount(1);
  await page.locator(".flujo-elegido").first().click();
  await expect(page.locator(".flujo-elegido")).toHaveCount(0);
  for (const paso of ciclo.pasos) await page.locator(".flujo-ficha", { hasText: paso.texto }).first().click();
  await page.getByRole("button", { name: "Revisar" }).click();
  await expect(page.locator(".feedback")).toHaveText("¡Perfecto! +20 puntos");
  await expect(page.locator("#score")).toHaveText("20");
  await expect(page.locator("ol.flujo-armado li.bien")).toHaveCount(ciclo.pasos.length);

  await page.getByRole("button", { name: "Otra vez" }).click();
  await page.locator(".flujo-ficha", { hasText: ciclo.intrusos[1] }).click();
  await page.getByRole("button", { name: "Revisar" }).click();
  await expect(page.locator("ol.flujo-armado li.intruso")).toHaveCount(1);
  await expect(page.locator(".feedback")).toContainText("1 paso falso");
  await sinScrollHorizontal(page);
});

test("los flujogramas también se abren desde el Entrenador de Virus", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: "Entrenador de Virus" }).getByRole("button", { name: "Entrenar" }).click();
  await page.locator('.menu button[data-ejercicio="flujogramas"]').click();
  await expect(page.getByRole("heading", { name: "Flujogramas" })).toBeVisible();
  await expect(page.locator("#topnav button.on")).toHaveText("Jugar");
  await page.getByRole("button", { name: "← Volver" }).click();
  await expect(page.getByRole("heading", { name: "Entrenador de Virus" })).toBeVisible();
});
