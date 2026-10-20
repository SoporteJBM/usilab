import { expect, test } from "@playwright/test";
import { APUNTES, TABLAS, TARJETAS } from "../../src/content";
import { abrir, comoInvitado, erroresDePagina, sinScrollHorizontal } from "./ayuda";

async function irAEstudio(page: import("@playwright/test").Page) {
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
}

test("apuntes de teoría: índice, lectura con formato, tablas y navegación", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await irAEstudio(page);
  await expect(page.locator(".tool.apuntes small")).toHaveText(APUNTES.length + " apuntes");
  await page.locator(".tool.apuntes").click();
  await expect(page.locator(".apunte-item")).toHaveCount(APUNTES.length);
  await page.locator(".apunte-item", { hasText: "Tuberculosis" }).first().click();
  await expect(page.getByRole("heading", { name: "Tuberculosis", level: 2 })).toBeVisible();
  // La negrita sale como negrita, sin asteriscos.
  await expect(page.locator("article.apunte strong", { hasText: "ácidos micólicos" }).first()).toBeVisible();
  await expect(page.locator("article.apunte")).not.toContainText("**");
  await expect(page.locator("article.apunte table.kt").first()).toBeVisible();
  // Índice del apunte y siguiente apunte
  await page.locator(".ap-indice .chip", { hasText: "Tratamiento MINSA" }).click();
  await page.locator(".ap-nav button.primary").click();
  await expect(page.getByRole("heading", { name: "Resistencia a los antibióticos", level: 2 })).toBeVisible();
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("tablas por tema, tarjetas de teoría, ficha nueva y buscador en los apuntes", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await irAEstudio(page);
  await page.locator(".tool.tablas").click();
  await expect(page.getByText(TABLAS.length + " tablas para comparar")).toBeVisible();
  await page.getByRole("tab", { name: /^Hongos por zona del cuerpo/ }).click();
  await expect(page.locator("#tabla-zona-1 h3")).toHaveText("Pulmón");
  await page.getByRole("tab", { name: /^Laboratorio/ }).click();
  await expect(page.locator("#tabla-medios .thumb")).toHaveCount(5);
  await expect(page.locator("#tabla-medios .marca-atlas").first()).toBeVisible();

  // Tarjetas de teoría
  await irAEstudio(page);
  await page.locator(".tool.tarjetas").click();
  await page.getByRole("button", { name: "Toda la teoría · " + TARJETAS.length }).click();
  await expect(page.locator(".flash small")).toContainText("Teoría ·");
  await page.getByRole("button", { name: "Ver respuesta" }).click();
  await expect(page.locator(".flash .fa")).toBeVisible();

  // Buscador: encuentra el apunte y lo abre
  await irAEstudio(page);
  await page.locator("#study-search").fill("cuerpos muriformes");
  await page.getByRole("button", { name: "Buscar", exact: true }).click();
  await page.getByRole("button", { name: "Abrir el apunte" }).first().click();
  await expect(page.locator("article.apunte")).toContainText("muriformes");

  // Ficha nueva desde el índice
  await irAEstudio(page);
  await page.locator(".tool.indice").click();
  await page.getByRole("button", { name: /Pneumocystis jirovecii/ }).first().click();
  await expect(page.getByRole("heading", { name: "Pneumocystis jirovecii" })).toBeVisible();
  await page.getByRole("button", { name: /Leer el resumen completo/ }).click();
  await expect(page.locator("article.apunte")).toContainText("TMP-SMX");
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("estaciones nuevas: Tuberculosis y Resistencia se juegan y suman puntos", async ({ page }) => {
  const { ESTACIONES } = await import("../../src/content");
  const { elegirNivel, responder } = await import("./ayuda");
  await abrir(page);
  await comoInvitado(page);
  for (const nombre of ["Tuberculosis", "Resistencia a los antibióticos"]) {
    const st = ESTACIONES.find((s) => s.nombre === nombre)!;
    await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
    const tarjeta = page.locator(".station").filter({ has: page.locator("h2", { hasText: new RegExp("^" + nombre + "$") }) });
    await expect(tarjeta).toContainText(String(st.preguntas.length));
    await tarjeta.getByRole("button", { name: /^(Jugar|Entrar)$/ }).click();
    await elegirNivel(page, "Fácil");
    await responder(page, true);
  }
  await expect(page.locator("#score")).not.toHaveText("0");
  expect(erroresDePagina(page)).toEqual([]);
});
