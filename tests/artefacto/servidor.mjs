// Sirve el artefacto (dist-artefacto/reto-microbiologia.html) envuelto en el esqueleto que pone claude.ai,
// con window.claude simulado (tests/artefacto/simulador.js) cargado antes que la página.
// GET /sin-claude sirve la misma página sin window.claude (como abrirla fuera de claude.ai).
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const aqui = path.dirname(fileURLToPath(import.meta.url));
const puerto = Number(process.env.PORT) || 4174;

http.createServer((req, res) => {
  const pagina = fs.readFileSync(path.join(aqui, "..", "..", "dist-artefacto", "reto-microbiologia.html"), "utf8");
  const simulador = req.url?.startsWith("/sin-claude") ? "" : "<script>" + fs.readFileSync(path.join(aqui, "simulador.js"), "utf8") + "</script>";
  const html = '<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">'
    + simulador + "</head><body>" + pagina + "</body></html>";
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
}).listen(puerto, () => console.log("Artefacto en http://localhost:" + puerto));
