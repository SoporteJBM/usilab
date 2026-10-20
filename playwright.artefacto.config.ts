import { defineConfig, devices } from "@playwright/test";

// Pruebas del artefacto: el mismo código de la página compilado con --artefacto y window.claude simulado.
export default defineConfig({
  testDir: "tests/artefacto",
  timeout: 60_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:4174", trace: "retain-on-failure" },
  projects: [
    { name: "celular", use: { ...devices["Pixel 7"] }, testIgnore: /computadora\.spec/ },
    // Hasta 899 px se usa el diseño de siempre (menú arriba).
    { name: "escritorio", use: { ...devices["Desktop Chrome"], viewport: { width: 860, height: 768 } }, testIgnore: /computadora\.spec/ },
    // Desde 900 px: diseño para computadora (menú lateral, tablero, modo enfoque y apuntes en tres columnas).
    { name: "computadora", use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } }, testMatch: /computadora\.spec/ },
  ],
  webServer: {
    command: "node build.mjs --artefacto && node tests/artefacto/servidor.mjs",
    url: "http://localhost:4174",
    reuseExistingServer: !process.env.CI,
  },
});
