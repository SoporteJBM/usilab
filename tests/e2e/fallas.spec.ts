import { expect, test } from "@playwright/test";
import { abrir, comoInvitado, elegirNivel, responder } from "./ayuda";

test("datos locales corruptos o manipulados no rompen la página", async ({ page }) => {
  await abrir(page, { "reto-micro-v4": "{esto no es json" });
  await comoInvitado(page);
  await expect(page.locator("#score")).toHaveText("0");
  // El dato roto se apartó, no se perdió.
  expect(await page.evaluate(() => localStorage.getItem("reto-micro-v4:corrupto"))).toBe("{esto no es json");
});

test("se descartan valores inválidos y preguntas que ya no existen", async ({ page }) => {
  const sucio = { puntos: -50, racha: "mucho", dominadas: { hongos: { "hongos-001": true, "hongos-999": true }, inventada: { x: true } }, errores: { hongos: { "hongos-002": 3, "hongos-003": -1 } }, ultimoNivel: { hongos: "z" } };
  await abrir(page, { "reto-micro-v4": JSON.stringify(sucio) });
  await comoInvitado(page);
  await expect(page.locator("#score")).toHaveText("0");
  await expect(page.locator(".reino.hon .rstat")).toContainText("1 dominadas");
  await page.locator("#topnav").getByRole("button", { name: "Estudio" }).click();
  await expect(page.locator(".tool.errores small")).toHaveText("1 por repasar");
});

test("sin localStorage (modo privado) se puede jugar igual", async ({ page }) => {
  await page.addInitScript(() => {
    const roto = () => { throw new DOMException("bloqueado", "SecurityError"); };
    Object.defineProperty(window, "localStorage", { get: roto });
  });
  await page.goto("/");
  await comoInvitado(page);
  await page.locator(".reino.par").getByRole("button", { name: "Practicar" }).click();
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await expect(page.locator("#score")).toHaveText("5");
});

test("sin internet: el ingreso avisa en español y el modo invitado sigue disponible", async ({ page }) => {
  await abrir(page, { __mock_falla: "red" });
  await page.locator("#email").fill("mafer@ejemplo.com");
  await page.locator("#pw").fill("contrasena123");
  await page.locator("form.auth").getByRole("button", { name: "Entrar" }).click();
  await expect(page.locator(".msg")).toHaveText("Sin conexión. Revisa tu internet e inténtalo otra vez.");
  await comoInvitado(page);
});

test("si se cae la conexión con cuenta, el avance queda en el dispositivo", async ({ page }) => {
  await abrir(page);
  await page.getByRole("button", { name: "Crear cuenta" }).click();
  await page.locator("#apodo").fill("Juan");
  await page.locator("#email").fill("juan@ejemplo.com");
  await page.locator("#pw").fill("contrasena123");
  await page.locator("form.auth").getByRole("button", { name: "Crear cuenta" }).click();
  await expect(page.getByRole("heading", { name: "Hola, Juan" })).toBeVisible();
  await page.evaluate(() => localStorage.setItem("__mock_falla", "red"));
  await page.locator(".reino.vir").getByRole("button", { name: "Practicar" }).click();
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await expect(page.locator("#sync")).toHaveText("Sin conexión: se guarda en este dispositivo", { timeout: 8000 });
  // Vuelve la conexión: se sube sola.
  await page.evaluate(() => { localStorage.removeItem("__mock_falla"); window.dispatchEvent(new Event("online")); });
  await expect(page.locator("#sync")).toHaveText("Guardado en tu cuenta", { timeout: 8000 });
  // Comentarios con el servidor fallando: mensaje, no pantalla rota.
  await page.evaluate(() => localStorage.setItem("__mock_falla", "error"));
  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  await expect(page.locator("ol.comments li.empty")).toContainText("No se pudieron cargar los comentarios.");
  await page.locator("#c-text").fill("hola");
  await page.getByRole("button", { name: "Publicar" }).click();
  await expect(page.locator(".comment-form .msg")).toHaveText("No se pudo completar. Inténtalo otra vez.");
});

test("un error inesperado muestra un aviso y la página sigue funcionando", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.evaluate(() => { setTimeout(() => { throw new Error("prueba"); }, 0); });
  await expect(page.locator("#aviso")).toHaveText("Algo salió mal. Si se repite, recarga la página.");
  await page.evaluate(() => { void Promise.reject(new TypeError("Failed to fetch")); });
  await expect(page.locator("#aviso")).toHaveText("Sin conexión. Revisa tu internet e inténtalo otra vez.");
  await page.locator("#topnav").getByRole("button", { name: "Jugar" }).click();
  await expect(page.locator("#home .station").first()).toBeVisible();
});
