import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests/e2e",
  timeout: 60_000,
  fullyParallel: true,
  reporter: [["list"]],
  use: { baseURL: "http://localhost:4173", trace: "retain-on-failure" },
  projects: [
    { name: "celular", use: { ...devices["Pixel 7"] } },
    { name: "escritorio", use: { ...devices["Desktop Chrome"] } },
  ],
  webServer: {
    command: "node build.mjs --mock && node tests/servidor.mjs",
    env: { OUT_DIR: "dist-test" },
    url: "http://localhost:4173",
    reuseExistingServer: !process.env.CI,
  },
});
