import { expect, test } from "@playwright/test";
import { abrir, comoInvitado, elegirNivel, erroresDePagina, responder, saltarDato } from "./ayuda";

test("Mis errores: se guarda lo fallado y se borra al acertarlo", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  const nav = page.locator("#topnav");
  await nav.getByRole("button", { name: "Estudio" }).click();
  await expect(page.locator(".tool.errores small")).toHaveText("Sin errores todavía");

  // Falla 2 preguntas de Hongos.
  await nav.getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: "Hongos" }).getByRole("button", { name: "Jugar" }).click();
  await elegirNivel(page, "Medio");
  for (let i = 0; i < 2; i++) { await responder(page, false); await page.getByRole("button", { name: "Siguiente" }).click(); }
  await expect(page.locator("#streak")).toHaveText("0");

  await nav.getByRole("button", { name: "Estudio" }).click();
  await expect(page.locator(".tool.errores small")).toHaveText("2 por repasar");
  await page.locator(".tool.errores").click();
  await expect(page.locator(".result")).toHaveCount(2);
  await expect(page.locator(".result small").first()).toContainText("fallada 1 vez");

  // Practicar: falla una otra vez y acierta la otra.
  await page.getByRole("button", { name: "Practicar mis errores (2)" }).click();
  await saltarDato(page);
  await responder(page, false);
  await page.getByRole("button", { name: "Siguiente" }).click();
  await responder(page, true);
  await page.getByRole("button", { name: "Siguiente" }).click();
  await page.getByRole("button", { name: "Ver mis errores" }).click();
  await expect(page.locator(".result")).toHaveCount(1);
  await expect(page.locator(".result small")).toContainText("fallada 2 veces");

  // Quitarla a mano.
  await page.getByRole("button", { name: "Ya la sé, quitarla" }).click();
  await expect(page.getByText("Todavía no tienes errores guardados.")).toBeVisible();

  // Persistencia tras recargar.
  await page.reload();
  await comoInvitado(page);
  await nav.getByRole("button", { name: "Estudio" }).click();
  await expect(page.locator(".tool.errores small")).toHaveText("Sin errores todavía");
  expect(erroresDePagina(page)).toEqual([]);
});
