import { expect, test, type Page } from "@playwright/test";
import { AHORCADOS, FLUJOGRAMAS, FOTOS } from "../../src/content";
import { ocultarRespuesta } from "../../src/lib/texto";
import { abrir, comoInvitado, elegirNivel, erroresDePagina, responder, saltarDato, sinScrollHorizontal } from "./ayuda";

async function irAJugar(page: Page) {
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
}
async function abrirEstacion(page: Page, nombre: string) {
  await irAJugar(page);
  await page.locator(".station").filter({ has: page.locator("h2", { hasText: new RegExp("^" + nombre + "$") }) }).getByRole("button", { name: /^(Jugar|Entrar)$/ }).click();
}
/** Toca todas las letras de la respuesta. */
async function escribirRespuesta(page: Page, respuesta: string) {
  for (const l of new Set(respuesta.replace(/[^A-Z]/g, ""))) {
    const b = page.locator(".kb button", { hasText: new RegExp("^" + l + "$") });
    if (await b.isEnabled()) await b.click();
  }
}

test("ahorcado de Hongos: respuestas con nombre completo y Muy difícil con 4 errores", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Hongos");
  await expect(page.locator(".modo-extra")).toHaveCount(3); // flujogramas, mixto y ahorcado
  await page.locator(".modo-ahorcado").click();
  await expect(page.getByRole("heading", { name: "Ahorcado · Hongos" })).toBeVisible();
  await expect(page.locator(".level.x small")).toContainText("solo 4 errores");
  await elegirNivel(page, "Muy difícil");
  await expect(page.locator(".note", { hasText: "Errores: 0 de 4" })).toBeVisible();
  // Identificar la palabra por su pista y resolverla.
  const pista = (await page.locator("#panel .case").innerText()).replace(/^Pista: /, "");
  const item = AHORCADOS.hongos.niveles.muydificil.find((w) => ocultarRespuesta(w.pista, w.palabra) === pista);
  expect(item, "pista no encontrada: " + pista).toBeTruthy();
  await escribirRespuesta(page, item!.palabra);
  await expect(page.locator(".feedback")).toHaveText("¡Lo adivinaste! +30 puntos");
  if (item!.palabra.includes(" ")) await expect(page.locator(".word .w-parte")).toHaveCount(item!.palabra.split(" ").length);
  // Reportar error también está en el ahorcado.
  await expect(page.locator(".reporte-btn")).toBeVisible();
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});

test("microscopio: ahorcado con fotos (nombre completo) y visor con zoom", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Microscopio");
  await page.getByRole("button", { name: /Ahorcado con fotos/ }).click();
  await expect(page.locator(".level.x small")).toContainText(FOTOS.length + " fotos");
  await elegirNivel(page, "Fácil");
  const img = page.locator(".hang-img img");
  await expect(img).toBeVisible();
  const src = await img.getAttribute("src");
  const foto = FOTOS.find((f) => f.archivo === src);
  expect(foto, "foto desconocida " + src).toBeTruthy();
  await expect(page.locator("#panel .case")).toContainText("¿Qué hongo es? (nombre completo)");

  // Visor: abrir, acercar, mover y cerrar.
  await img.click();
  const visor = page.locator("#lightbox");
  await expect(visor).toBeVisible();
  await expect(visor.locator("p")).not.toContainText(foto!.agente);
  await page.getByRole("button", { name: "Acercar" }).click();
  await expect(visor.locator("img")).toHaveAttribute("style", /scale\(1\.6\)/);
  await page.getByRole("button", { name: "Ajustar" }).click();
  await expect(visor.locator("img")).toHaveAttribute("style", /scale\(1\)/);
  await page.keyboard.press("Escape");
  await expect(visor).toHaveCount(0);

  await escribirRespuesta(page, foto!.agente.toUpperCase());
  await expect(page.locator(".feedback")).toHaveText("¡Lo adivinaste! +10 puntos");
  expect(erroresDePagina(page)).toEqual([]);
});

test("las fotos de Identificar fotos también se amplían", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Microscopio");
  await page.getByRole("button", { name: /Identificar fotos/ }).click();
  await elegirNivel(page, "Medio");
  await expect(page.locator(".photo .lupa")).toBeVisible();
  await page.locator(".photo img").click();
  await expect(page.locator("#lightbox")).toBeVisible();
  await page.getByRole("button", { name: "Cerrar ✕" }).click();
  await expect(page.locator("#lightbox")).toHaveCount(0);
});

test("modo mixto de Virus: preguntas y flujogramas mezclados", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Virus");
  await page.locator(".modo-mixto").click();
  await expect(page.getByRole("heading", { name: "Modo mixto · Virus" })).toBeVisible();
  await elegirNivel(page, "Fácil");
  let flujos = 0, preguntas = 0;
  for (let i = 0; i < 12; i++) {
    if (await page.getByRole("button", { name: "Otra ronda" }).count()) break;
    if (await page.locator(".flujo-armar").count()) {
      flujos += 1;
      const consigna = await page.locator("#panel p.case").innerText();
      const f = FLUJOGRAMAS.find((x) => x.consigna === consigna)!;
      expect(f, "flujograma no encontrado").toBeTruthy();
      await expect(page.locator(".flujo-ficha")).toHaveCount(f.pasos.length); // Fácil: sin pasos falsos
      for (const paso of f.pasos) await page.locator(".flujo-ficha", { hasText: paso.texto }).first().click();
      await page.getByRole("button", { name: "Revisar" }).click();
      await expect(page.locator(".feedback")).toContainText("¡Perfecto!");
      await page.getByRole("button", { name: /Siguiente|Ver resultado/ }).click();
      continue;
    }
    preguntas += 1;
    await responder(page, true);
    await page.getByRole("button", { name: "Siguiente" }).click();
  }
  expect(flujos).toBe(2);
  expect(preguntas).toBe(6);
  await expect(page.getByRole("heading", { name: /8 de 8/ })).toBeVisible();
  expect(erroresDePagina(page)).toEqual([]);
});

test("modo flujogramas en Muy difícil: sin título y con pasos falsos de otros flujogramas", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Hongos");
  await page.locator(".modo-flujo").click();
  await elegirNivel(page, "Muy difícil");
  await expect(page.locator(".flujo-armar")).toBeVisible();
  await expect(page.locator(".flujo-tit")).toHaveCount(0);
  const consigna = await page.locator("#panel p.case").innerText();
  const f = FLUJOGRAMAS.find((x) => x.consigna === consigna)!;
  await expect(page.locator(".flujo-ficha")).toHaveCount(f.pasos.length + f.intrusos.length + 2);
});

test("reportar error: pide el motivo, se envía y queda registrado", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await abrirEstacion(page, "Bacterias");
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await page.locator(".reporte-btn").click();
  await page.getByRole("button", { name: "Enviar reporte" }).click();
  await expect(page.locator(".reporte-msg")).toHaveText("Elige qué está mal.");
  await page.locator(".reporte-form .chip", { hasText: "Hay dos respuestas correctas" }).click();
  await page.locator(".reporte-form textarea").fill("La B también vale.");
  await page.getByRole("button", { name: "Enviar reporte" }).click();
  await expect(page.locator(".reporte-msg.ok")).toContainText("Gracias");
  const guardados = await page.evaluate(() => JSON.parse(localStorage.getItem("reto-reportes") || "[]"));
  expect(guardados).toHaveLength(1);
  expect(guardados[0]).toMatchObject({ tipo: "pregunta", estacion: "bacterias", motivo: "Hay dos respuestas correctas", comentario: "La B también vale." });
  expect(guardados[0].id).toBeTruthy();
  await sinScrollHorizontal(page);
});

test("repaso de hoy: lo fallado vuelve hoy; lo acertado, otro día", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await expect(page.locator(".atajo-repaso small")).toHaveText("Empieza jugando cualquier sección");
  await abrirEstacion(page, "Bacterias");
  await elegirNivel(page, "Fácil");
  await responder(page, false); // 1 fallada
  for (let i = 0; i < 4; i++) {
    await page.getByRole("button", { name: "Siguiente" }).click();
    await responder(page, true);
  }
  await page.getByRole("button", { name: "Siguiente" }).click();
  await irAJugar(page);
  await expect(page.locator(".atajo-repaso small")).toHaveText("1 pregunta para hoy");
  await page.locator(".atajo-repaso").click();
  await expect(page.locator(".repaso-caja.c1 strong")).toHaveText("5"); // nuevas y la fallada
  await expect(page.locator(".repaso-caja.c2 strong")).toHaveText("0");
  await page.getByRole("button", { name: "Empezar repaso (1)" }).click();
  await saltarDato(page);
  await responder(page, true);
  await page.getByRole("button", { name: "Siguiente" }).click();
  await page.getByRole("button", { name: "Volver" }).click();
  await expect(page.locator(".repaso-hoy.ok")).toContainText("Tu próximo repaso es mañana");
  await expect(page.locator(".repaso-caja.c2 strong")).toHaveText("1"); // la que falló y luego acertó subió de caja

  // Dos días después tocan las 4 acertadas en la ronda (caja 1 = al día siguiente); la de caja 2 todavía no.
  await page.clock.install({ time: new Date(Date.now() + 2 * 86400000) });
  await page.reload();
  await comoInvitado(page);
  await expect(page.locator(".atajo-repaso small")).toHaveText("4 preguntas para hoy");
  expect(erroresDePagina(page)).toEqual([]);
});

test("examen de todo el curso: 30 preguntas de todas las secciones y nota por sección", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator(".atajo-examen").click();
  await expect(page.getByRole("heading", { name: "Modo examen · Todo el curso" })).toBeVisible();
  await expect(page.locator(".exam-reglas")).toContainText("30 preguntas de los 4 niveles, mezcladas, de todas las secciones del curso");
  await page.getByRole("button", { name: "Empezar examen" }).click();
  await expect(page.locator(".exam-dot")).toHaveCount(30);
  // Las preguntas vienen de varias secciones.
  const secciones = new Set<string>();
  for (let i = 0; i < 30; i++) {
    const nota = await page.locator(".exam-cuerpo .note").first().innerText();
    secciones.add(nota.split(" · ")[1]);
    await page.locator(".exam-cuerpo .opts button").first().click();
    if (i < 29) await page.getByRole("button", { name: "Siguiente →" }).click();
  }
  expect(secciones.size).toBeGreaterThanOrEqual(6);
  await page.getByRole("button", { name: "Terminar examen" }).click();
  await expect(page.locator(".exam-nota strong")).toContainText("/ 20");
  await expect(page.locator(".exam-secciones .exam-sec")).toHaveCount(secciones.size);
  await expect(page.locator(".exam-rev .reporte-btn").first()).toBeVisible();
  await sinScrollHorizontal(page);
  expect(erroresDePagina(page)).toEqual([]);
});
