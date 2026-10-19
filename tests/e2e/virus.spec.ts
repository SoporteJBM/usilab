import { expect, test, type Page } from "@playwright/test";
import { _generadores } from "../../src/vistas/jugar/entrenador-virus";
import { armarExamen, notaSobre20 } from "../../src/vistas/jugar/examen";
import { ESTACIONES } from "../../src/content";
import { abrir, comoInvitado, erroresDePagina, RESPUESTAS, sinScrollHorizontal } from "./ayuda";

test("entrenador: cada ejercicio genera preguntas válidas", () => {
  for (const [nombre, generar] of Object.entries(_generadores)) {
    for (let vuelta = 0; vuelta < 40; vuelta++) {
      const items = generar();
      expect(items.length, nombre).toBeGreaterThan(0);
      for (const it of items) {
        expect(it.opciones.length, nombre + ": " + it.pregunta).toBeGreaterThanOrEqual(2);
        expect(new Set(it.opciones).size, nombre + ": opciones repetidas en " + it.pregunta).toBe(it.opciones.length);
        expect(it.respuesta, nombre + ": sin respuesta en " + it.pregunta).toBeGreaterThanOrEqual(0);
      }
    }
  }
});

test("examen: reparto por nivel y nota sobre 20", () => {
  const virus = ESTACIONES.find((e) => e.id === "virus")!;
  const ex = armarExamen(virus.preguntas);
  expect(ex).toHaveLength(20);
  expect(new Set(ex.map((q) => q.id)).size).toBe(20);
  const n = (k: string) => ex.filter((q) => q.nivel === k).length;
  expect([n("f"), n("m"), n("d"), n("x")]).toEqual([4, 6, 6, 4]);
  expect(notaSobre20(20, 20)).toBe(20);
  expect(notaSobre20(11, 20)).toBe(11);
  expect(notaSobre20(0, 20)).toBe(0);
});

async function abrirExamenVirus(page: Page) {
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await page.locator(".station", { hasText: /^Virus/ }).getByRole("button", { name: "Examen" }).click();
  await expect(page.getByRole("heading", { name: "Modo examen · Virus" })).toBeVisible();
  await page.getByRole("button", { name: "Empezar examen" }).click();
  await expect(page.locator(".exam-dot")).toHaveCount(20);
}

test("examen: responder todo bien da 20/20 y guarda la mejor nota", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirExamenVirus(page);
  await sinScrollHorizontal(page);
  for (let i = 0; i < 20; i++) {
    const caso = (await page.locator(".exam-cuerpo p.case").count()) ? (await page.locator(".exam-cuerpo p.case").textContent()) ?? "" : "";
    const preg = (await page.locator(".exam-preg").textContent()) ?? "";
    const correcta = RESPUESTAS.get(caso + "|" + preg);
    expect(correcta, preg).toBeTruthy();
    await page.locator(".exam-cuerpo .opts button", { hasText: correcta! }).first().click();
    await expect(page.locator(".exam-cuerpo .opts button.sel")).toHaveCount(1);
    // Sin feedback inmediato
    await expect(page.locator(".exam-cuerpo .opts button.right, .exam-cuerpo .opts button.wrong")).toHaveCount(0);
    if (i < 19) await page.getByRole("button", { name: "Siguiente →" }).click();
  }
  await expect(page.locator(".exam-prog")).toHaveText("20 de 20 respondidas");
  await page.getByRole("button", { name: "Terminar examen" }).click();
  await expect(page.locator(".exam-nota strong")).toHaveText("20 / 20");
  await expect(page.locator(".exam-nota")).toHaveClass(/aprob/);
  await expect(page.locator(".exam-filtro")).toBeHidden();
  await page.getByRole("button", { name: "Volver" }).click();
  await page.locator(".station", { hasText: /^Virus/ }).getByRole("button", { name: "Examen" }).click();
  await expect(page.locator(".exam-record")).toContainText("Tu mejor nota: 20");
  expect(erroresDePagina(page)).toEqual([]);
});

test("examen: entregar en blanco pide confirmar, desaprueba y llena Mis errores", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirExamenVirus(page);
  // Navegar con los puntos y cambiar de idea
  await page.locator(".exam-dot").nth(4).click();
  await expect(page.locator(".exam-cuerpo .note")).toHaveText("Pregunta 5 de 20");
  await page.locator(".exam-cuerpo .opts button").first().click();
  await page.locator(".exam-cuerpo .opts button").first().click();
  await expect(page.locator(".exam-cuerpo .opts button.sel")).toHaveCount(0);
  const fin = page.getByRole("button", { name: "Terminar examen" });
  await fin.click();
  await expect(page.getByRole("button", { name: /Te faltan 20/ })).toBeVisible();
  await page.getByRole("button", { name: /Te faltan 20/ }).click();
  await expect(page.locator(".exam-nota strong")).toHaveText("0 / 20");
  await expect(page.locator(".exam-nota")).toHaveClass(/desaprob/);
  await expect(page.locator("ol.exam-rev li.mal")).toHaveCount(20);
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
  await expect(page.locator(".tool.errores small")).toHaveText("20 por repasar");
});

test("examen: al acabarse el tiempo se entrega solo", async ({ page }) => {
  await page.clock.install();
  await abrir(page);
  await comoInvitado(page);
  await abrirExamenVirus(page);
  await expect(page.locator(".exam-reloj")).toHaveText("30:00");
  await page.clock.fastForward("28:30");
  await expect(page.locator(".exam-reloj")).toHaveClass(/poco/);
  await page.clock.fastForward("02:00");
  await expect(page.locator(".exam-nota small")).toHaveText("Se acabó el tiempo");
});

test("entrenador de virus: se abre desde Inicio y se juega una ronda", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator(".reino.vir").getByRole("button", { name: "Ver todo" }).click();
  await page.getByRole("button", { name: "Entrenador de Virus" }).click();
  await expect(page.locator(".menu button")).toHaveCount(7);
  for (const id of ["baltimore", "cd4", "dx", "tarv", "cotest", "proteinas"]) {
    await page.locator(`.menu button[data-ejercicio="${id}"]`).click();
    await page.locator("#loader").click();
    await expect(page.locator(".opts button").first()).toBeVisible();
    await page.locator(".opts button").first().click();
    await expect(page.locator(".feedback")).toHaveClass(/ok|no/);
    await sinScrollHorizontal(page);
    await page.getByRole("button", { name: "Salir" }).click();
    await expect(page.getByRole("heading", { name: "Entrenador de Virus" })).toBeVisible();
  }
  await page.getByRole("button", { name: "Volver" }).click();
  await expect(page.getByRole("heading", { name: "Virus", exact: true })).toBeVisible();
  expect(erroresDePagina(page)).toEqual([]);
});
