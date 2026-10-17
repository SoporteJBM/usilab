import { expect, test } from "@playwright/test";
import { abrir, comoInvitado, erroresDePagina, sinScrollHorizontal } from "./ayuda";

test("sugerencias: cualquiera puede llenar el formulario", async ({ page }) => {
  await abrir(page);
  await comoInvitado(page);
  await page.locator("#topnav").getByRole("button", { name: "Comentarios" }).click();
  const form = page.locator(".sug-form");
  await expect(form.locator(".sug-q")).toHaveCount(8);
  await sinScrollHorizontal(page);

  // Vacío: pide al menos una respuesta.
  await page.getByRole("button", { name: "Enviar sugerencia" }).click();
  await expect(page.locator(".sug .msg")).toHaveText("Responde al menos una pregunta antes de enviar.");

  // Llenar algunas preguntas.
  await page.getByRole("radio", { name: "4: Útil" }).click();
  await expect(page.locator(".sug-rate + .note")).toHaveText("Útil");
  await expect(page.locator(".sug .msg")).toHaveText("");
  await form.getByRole("radio", { name: "Microscopio" }).click();
  await form.getByRole("button", { name: "Diseño" }).click();
  await form.getByRole("button", { name: "Preguntas" }).click();
  await expect(form.getByRole("button", { name: "Diseño" })).toHaveAttribute("aria-pressed", "true");
  await page.locator("#sug-mejora").fill("Un modo examen con tiempo.");
  await expect(page.locator("#sug-mejora + small")).toHaveText("26 / 600");
  await form.getByRole("radio", { name: "Sí" }).click();

  const consola: string[] = [];
  page.on("console", (m) => consola.push(m.text()));
  await page.getByRole("button", { name: "Enviar sugerencia" }).click();
  await expect(page.getByRole("heading", { name: "¡Gracias!" })).toBeVisible();
  expect(consola.some((t) => t.includes("sugerencia"))).toBe(true);

  await page.getByRole("button", { name: "Enviar otra" }).click();
  await expect(page.locator(".sug-form .sug-q")).toHaveCount(8);
  await expect(page.locator(".sug-n.on")).toHaveCount(0);
  expect(erroresDePagina(page)).toEqual([]);
});
