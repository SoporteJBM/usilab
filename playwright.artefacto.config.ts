import { defineConfig, devices } from "@playwright/test";

// Pruebas del artefacto: el mismo código de la página compilado con --artefacto y window.claude simulado.
export default defineConfig({
  testDir: "tests/artefacto",
  timeout: 60_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:4174", trace: "retain-on-failure" },
  projects: [
    { name: "celular", use: { ...devices["Pixel 7"] } },
    { name: "escritorio", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: "node build.mjs --artefacto && node tests/artefacto/servidor.mjs",
    url: "http://localhost:4174",
    reuseExistingServer: !process.env.CI,
  },
});
