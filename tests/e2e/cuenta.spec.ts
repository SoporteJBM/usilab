import { expect, test } from "@playwright/test";
import { abrir, elegirNivel, responder } from "./ayuda";

test("cuenta: crear, sincronizar, comentar, salir y volver a entrar", async ({ page }) => {
  await abrir(page);
  await page.getByRole("button", { name: "Crear cuenta" }).click();
  await page.locator("#apodo").fill("Ana");
  await page.locator("#email").fill("ana@ejemplo.com");
  await page.locator("#pw").fill("contrasena123");
  await page.locator("form.auth").getByRole("button", { name: "Crear cuenta" }).click();
  await expect(page.getByRole("heading", { name: "Hola, Ana" })).toBeVisible();

  await page.locator(".reino.hon").getByRole("button", { name: "Practicar" }).click();
  await elegirNivel(page, "Fácil");
  await responder(page, true);
  await expect(page.locator("#sync")).toHaveText("Guardado en tu cuenta", { timeout: 8000 });

  // Comentarios
  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  await page.locator("#c-text").fill("¿Alguien tiene las láminas de dermatofitos?");
  await page.getByRole("button", { name: "Publicar" }).click();
  await expect(page.locator("ol.comments li.mine")).toContainText("Ana (tú)");
  await expect(page.locator("#nav-badge")).toHaveText("1");
  await page.getByRole("button", { name: "Borrar" }).click();
  await page.getByRole("button", { name: /Toca otra vez/ }).click();
  await expect(page.getByText("Todavía no hay comentarios. Escribe el primero.")).toBeVisible();

  // Salir: el marcador se limpia. Volver a entrar: se recupera de la cuenta.
  await page.getByRole("button", { name: "Cerrar sesión" }).click();
  await expect(page.locator("#score")).toHaveText("0");
  await page.locator("#email").fill("ana@ejemplo.com");
  await page.locator("#pw").fill("contrasena123");
  await page.locator("form.auth").getByRole("button", { name: "Entrar" }).click();
  await expect(page.getByRole("heading", { name: "Hola, Ana" })).toBeVisible();
  await expect(page.locator("#score")).toHaveText("5");
});

test("cuenta: mensajes claros cuando algo está mal", async ({ page }) => {
  await abrir(page);
  await page.locator("#email").fill("no-es-correo");
  await page.locator("#pw").fill("x");
  await page.locator("form.auth").getByRole("button", { name: "Entrar" }).click();
  await expect(page.locator(".msg")).toHaveText("Escribe un correo válido.");
  await page.locator("#email").fill("nadie@ejemplo.com");
  await page.locator("form.auth").getByRole("button", { name: "Entrar" }).click();
  await expect(page.locator(".msg")).toHaveText("Correo o contraseña incorrectos.");
  await page.getByRole("button", { name: "Crear cuenta" }).click();
  await page.locator("#apodo").fill("A");
  await page.locator("#email").fill("a@b.co");
  await page.locator("#pw").fill("12345678");
  await page.locator("form.auth").getByRole("button", { name: "Crear cuenta" }).click();
  await expect(page.locator(".msg")).toHaveText("El apodo debe tener entre 2 y 30 caracteres.");
});
