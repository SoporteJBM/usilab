import { expect, test } from "@playwright/test";
import { abrir, comoInvitado, elegirNivel, erroresDePagina, responder, saltarDato, sinScrollHorizontal } from "./ayuda";

test("invitado: inicio, menú y una ronda completa que guarda el avance", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  for (const g of ["Bacterias", "Hongos", "Virus", "Parásitos"]) await expect(page.locator(".reino h3", { hasText: g })).toBeVisible();
  await sinScrollHorizontal(page);

  // Menú superior
  const nav = page.locator("#topnav");
  await nav.getByRole("button", { name: "Jugar" }).click();
  await expect(page.locator("#home .station")).toHaveCount(12); // con Tuberculosis y Resistencia
  await expect(page.locator("#home .atajo")).toHaveCount(2);
  await nav.getByRole("button", { name: "Estudio" }).click();
  await expect(page.getByRole("heading", { name: "Estudio" })).toBeVisible();
  await nav.getByRole("button", { name: "Comentarios" }).click();
  await expect(page.getByRole("heading", { name: "¿Cómo mejoramos MiUsiLab?" })).toBeVisible();
  await expect(page.getByText("Muro de comentarios")).toHaveCount(0);

  // Ronda de Bacterias en fácil: 5 preguntas, todas bien.
  await nav.getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: "Bacterias" }).getByRole("button", { name: "Jugar" }).click();
  await elegirNivel(page, "Fácil");
  for (let i = 0; i < 5; i++) {
    await responder(page, true);
    await page.getByRole("button", { name: "Siguiente" }).click();
  }
  await expect(page.getByRole("heading", { name: /5 de 5/ })).toBeVisible();
  await expect(page.locator("#score")).toHaveText("25");

  // Al recargar, el avance sigue ahí.
  await page.reload();
  await comoInvitado(page);
  await expect(page.locator("#score")).toHaveText("25");
  await expect(page.locator(".reino.bac .rstat")).toContainText("5 dominadas");
  expect(erroresDePagina(page)).toEqual([]);
});

test("agente: desde Inicio se abre su ficha y se practica solo ese agente", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator(".reino.bac").getByRole("button", { name: "Ver todo" }).click();
  await page.locator(".idx-item", { hasText: "Escherichia coli" }).click();
  await expect(page.locator("h2.ag-name")).toHaveText("Escherichia coli");
  await expect(page.locator(".ag-sec h3", { hasText: "Qué es" })).toBeVisible();
  await page.getByRole("button", { name: /Practicar solo Escherichia coli/ }).click();
  await saltarDato(page);
  await responder(page, true);
  await expect(page.locator("#topnav button.on")).toHaveText("Estudio");
});

test("ahorcado y microscopio abren y se juegan", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: "Hongos" }).getByRole("button", { name: "Jugar" }).click();
  await page.locator(".modo-ahorcado").click();
  await elegirNivel(page, "Fácil");
  await expect(page.locator(".word")).toBeVisible();
  await page.locator(".kb button:not([disabled])").first().click();
  await expect(page.locator(".note", { hasText: /Errores: \d de 6/ })).toBeVisible();

  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: "Microscopio" }).getByRole("button", { name: "Entrar" }).click();
  await page.getByRole("button", { name: /Identificar fotos/ }).click();
  await elegirNivel(page, "Medio");
  await expect(page.locator(".photo img")).toBeVisible();
  await expect(page.locator(".opts button")).toHaveCount(4);
  await page.locator(".opts button").first().click();
  await expect(page.locator("dl.ficha")).toBeVisible();
  await sinScrollHorizontal(page);
});

test("estudio: buscador, tarjetas, tablas e índice", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
  await page.locator("#study-search").fill("voriconazol");
  await page.locator("#study-search").press("Enter");
  await expect(page.locator(".note", { hasText: /resultados? para «voriconazol»/ })).toBeVisible();
  await page.getByRole("button", { name: "← Estudio" }).click();
  await page.locator(".tool.tarjetas").click();
  await page.getByRole("button", { name: /^Todos los temas/ }).click();
  await page.getByRole("button", { name: "Ver respuesta" }).click();
  await expect(page.locator(".fback .fa")).toBeVisible();
  await page.getByRole("button", { name: "← Tarjetas" }).click();
  await page.getByRole("button", { name: "← Estudio" }).click();
  await page.locator(".tool.tablas").click();
  await expect(page.locator("table.kt").first()).toBeVisible();
  await page.getByRole("button", { name: "← Estudio" }).click();
  await page.locator(".tool.indice").click();
  await expect(page.locator(".idx-sec h3", { hasText: "Hongos" })).toBeVisible();
  await sinScrollHorizontal(page);
});

test("pantalla angosta (340 px): nada se sale del ancho", async ({ page }) => {
  await page.setViewportSize({ width: 340, height: 740 });
  await abrir(page);
  await sinScrollHorizontal(page);
  await comoInvitado(page);
  await sinScrollHorizontal(page);
  const nav = page.locator("#topnav");
  for (const s of ["Jugar", "Estudio", "Comentarios", "Inicio"]) {
    await nav.getByRole("button", { name: s }).click();
    await sinScrollHorizontal(page);
  }
  await page.locator(".reino.hon").getByRole("button", { name: "Ver todo" }).click();
  await page.locator(".idx-item", { hasText: "Aspergillus fumigatus" }).click();
  await sinScrollHorizontal(page);
});

test("la marca MiUsiLab está arriba a la izquierda y lleva al inicio", async ({ page }) => {
  await abrir(page);
  await expect(page).toHaveTitle(/MiUsiLab/);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  // Va arriba y alineada a la izquierda del contenido (en pantallas de 960 px o más queda fija en el margen).
  const marca = page.locator("a.marca");
  const caja = await marca.boundingBox();
  const contenido = await page.locator(".wrap").boundingBox();
  const ancho = page.viewportSize()!.width;
  expect(caja!.x).toBeLessThan(ancho >= 960 ? 40 : contenido!.x + 40);
  expect(caja!.y).toBeLessThan(60);
  await marca.click();
  await expect(page.locator("#topnav button.on")).toHaveText("Inicio");
});

test("el «¿Sabías que...?» espera a que el alumno toque o presione Enter", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator(".reino.bac").getByRole("button", { name: "Ver todo" }).click();
  await page.locator(".idx-item", { hasText: "Escherichia coli" }).click();
  await page.getByRole("button", { name: /Practicar solo Escherichia coli/ }).click();
  const loader = page.locator("#loader");
  await expect(loader).toBeVisible();
  await page.waitForTimeout(4000); // antes se iba solo a los 3,2 s
  await expect(loader).toBeVisible();
  await expect(page.locator("#fact-seguir")).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(loader).toBeHidden();
  await expect(page.locator(".opts button").first()).toBeVisible();
});
