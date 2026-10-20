import { expect, test, type Page } from "@playwright/test";
import { abrir, elegirNivel, erroresDePagina, responder, saltarDato, sinScrollHorizontal } from "../e2e/ayuda";

const PNG = Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==", "base64");
const store = (page: Page) => page.evaluate(() => (window as unknown as { __store: Record<string, unknown> }).__store);

async function entrarConCuenta(page: Page) {
  await expect(page.locator(".acct strong")).toHaveText("Ana Prueba");
  await page.getByRole("button", { name: "Entrar", exact: true }).click();
  await expect(page.getByRole("heading", { name: "Hola, Ana Prueba" })).toBeVisible();
}
async function abrirEstacion(page: Page, nombre: string) {
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station").filter({ has: page.locator("h2", { hasText: new RegExp("^" + nombre + "$") }) }).getByRole("button", { name: /^(Jugar|Entrar)$/ }).click();
}

test("entra con la cuenta de Claude, pasa el avance antiguo y guarda en la cuenta y el ranking", async ({ page }) => {
  // Avance del artefacto antiguo guardado en este dispositivo.
  const antiguo = { score: 120, streak: 3, mastered: { virus: { 0: true, 5: true } }, errores: { hongos: { 2: 1 } }, rounds: { virus: 4 } };
  await abrir(page, { "reto-micro-v3:u_test": JSON.stringify(antiguo) });
  await expect(page.getByText("No hay contraseña: entras con la cuenta de Claude")).toBeVisible();
  await entrarConCuenta(page);
  await expect(page.locator("#score")).toHaveText("120");
  await expect(page.locator(".reino.vir .rstat")).toContainText("2 dominadas");
  await expect(page.locator(".who img")).toBeVisible();

  // Una ronda: el avance se sube a data/users/<id>/progreso y el puntaje al ranking.
  await abrirEstacion(page, "Bacterias");
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await expect.poll(async () => ((await store(page))["ranking/u_test"] as { score?: number } | undefined)?.score, { timeout: 6000 }).toBe(125);
  const prog = (await store(page))["data/users/u_test/progreso"] as { version: number; puntos: number; dominadas: Record<string, Record<string, true>> };
  expect(prog.version).toBe(4);
  expect(Object.keys(prog.dominadas.virus)).toEqual(["virus-001", "virus-006"]);

  // Ranking
  await page.getByRole("button", { name: "Ranking" }).click();
  await expect(page.locator("ol.rank li.me")).toContainText("Ana Prueba (tú)");
  await expect(page.locator("ol.rank li.me .pts")).toContainText("125 pts");
  expect(erroresDePagina(page)).toEqual([]);
});

test("comentarios, sugerencias y reportes llegan a la base del artefacto y el dueño los ve", async ({ page }) => {
  await abrir(page);
  await entrarConCuenta(page);
  // Reportar un error en una pregunta.
  await abrirEstacion(page, "Bacterias");
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await page.locator(".reporte-btn").click();
  await page.locator(".reporte-form .chip", { hasText: "Error de ortografía" }).click();
  await page.getByRole("button", { name: "Enviar reporte" }).click();
  await expect(page.locator(".reporte-msg.ok")).toBeVisible();

  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  // Sugerencia
  await page.locator(".sug-n").nth(3).click();
  await page.locator("#sug-mejora").fill("Más casos de parásitos");
  await page.getByRole("button", { name: "Enviar sugerencia" }).click();
  await expect(page.getByRole("heading", { name: "¡Gracias!" })).toBeVisible();
  // Comentario
  await page.locator("#c-text").fill("¿Alguien tiene el resumen de hongos?");
  await page.getByRole("button", { name: "Publicar" }).click();
  await expect(page.locator("ol.comments li.mine")).toContainText("¿Alguien tiene el resumen de hongos?");
  const s = await store(page);
  expect((s["comentarios/u_test"] as { msgs: unknown[] }).msgs).toHaveLength(1);
  expect((s["sugerencias/u_test"] as { envios: { cambios: string }[] }).envios[0].cambios).toBe("Más casos de parásitos");
  expect((s["reportes/u_test"] as { lista: { motivo: string }[] }).lista[0].motivo).toBe("Error de ortografía");

  // El dueño ve las bandejas al volver a Comentarios.
  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  await expect(page.locator("details.bandeja summary").first()).toContainText("Sugerencias recibidas: 1");
  await expect(page.locator("details.bandeja summary").nth(1)).toContainText("Reportes de errores: 1");
  // Borrar el comentario
  await page.locator("ol.comments .c-del").click();
  await page.locator("ol.comments .c-del").click();
  await expect(page.locator("ol.comments li.mine")).toHaveCount(0);
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("flujograma con foto: Claude corrige y la nota suma puntos", async ({ page }) => {
  await abrir(page);
  await entrarConCuenta(page);
  await abrirEstacion(page, "Virus");
  await expect(page.locator(".modo-extra")).toHaveCount(4); // foto, flujogramas, mixto y ahorcado
  await page.locator(".modo-foto").click();
  await elegirNivel(page, "Fácil");
  await expect(page.locator(".fj-revela")).toContainText("Diagnóstico:");
  const [fc] = await Promise.all([page.waitForEvent("filechooser"), page.getByRole("button", { name: "Galería" }).click()]);
  await fc.setFiles({ name: "flujo.png", mimeType: "image/png", buffer: PNG });
  await page.getByRole("button", { name: "Enviar a corregir" }).click();
  await expect(page.locator(".exam-nota strong")).toHaveText("18 / 20"); // 4 criterios: 2+4+4+4 = 14/16
  await expect(page.locator(".feedback")).toContainText("Tu flujograma: 18/20");
  const prompts = await page.evaluate(() => (window as unknown as { __prompts: { prompt: string; imagenes: number }[] }).__prompts);
  expect(prompts).toHaveLength(1);
  expect(prompts[0].imagenes).toBe(1);
  expect(prompts[0].prompt).toContain("exactamente 4 elementos");
  await expect(page.locator("details.fe-modelo")).toBeVisible();
  expect(erroresDePagina(page)).toEqual([]);
});

test("como invitado: lee comentarios, juega y ve las soluciones de los casos", async ({ page }) => {
  await abrir(page);
  await page.getByRole("button", { name: "Jugar como invitado" }).click();
  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  await expect(page.getByText("Entra con tu cuenta para comentar. Como invitado puedes leer.")).toBeVisible();
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
  await page.locator(".tool.flujo-eval").click();
  await expect(page.locator(".fe-caso")).toHaveCount(22);
  await page.locator(".fe-caso").first().click();
  await expect(page.locator("figure.fg")).toBeVisible();
  // Lo de la página está igual: ahorcado de Hongos y el visor de fotos en Microscopio.
  await abrirEstacion(page, "Hongos");
  await page.locator(".modo-ahorcado").click();
  await elegirNivel(page, "Fácil");
  await expect(page.locator(".word")).toBeVisible();
  await abrirEstacion(page, "Microscopio");
  await page.getByRole("button", { name: /Ahorcado con fotos/ }).click();
  await elegirNivel(page, "Fácil");
  await page.locator(".hang-img img").click();
  await expect(page.locator("#lightbox")).toBeVisible();
  const src = await page.locator("#lightbox img").getAttribute("src");
  expect(src?.startsWith("data:image/jpeg;base64,")).toBe(true);
  await page.keyboard.press("Escape");
  await saltarDato(page).catch(() => {});
  expect(erroresDePagina(page)).toEqual([]);
});

test("fuera de claude.ai funciona como invitado", async ({ page }) => {
  await page.goto("/sin-claude");
  await expect(page.getByText("No encontramos una cuenta con acceso a esta página")).toBeVisible({ timeout: 15000 });
  await page.getByRole("button", { name: "Jugar como invitado" }).click();
  await expect(page.getByRole("heading", { name: "Inicio" })).toBeVisible();
  expect(erroresDePagina(page) ?? []).toEqual([]);
});
