/** Bandejas del dueño (artefacto): sugerencias recibidas y reportes de errores. Nadie más las ve. */
import { esArtefacto } from "../config";
import { mk } from "../lib/dom";
import { hace } from "../lib/texto";
import { esDueno } from "../servicios/claude";
import { reportesRecibidos } from "../servicios/reportes";
import { sugerenciasRecibidas } from "../servicios/sugerencias";

export async function bandejasDelDueno(p: HTMLElement): Promise<void> {
  if (!esArtefacto || !(await esDueno())) return;
  const antesDe = p.querySelector(".sug");

  const sug = mk("details", "topic bandeja");
  const sumS = mk("summary", null, "Sugerencias recibidas (solo tú las ves)");
  const cuerpoS = mk("div", "results");
  cuerpoS.append(mk("p", "note", "Cargando…"));
  sug.append(sumS, cuerpoS);

  const rep = mk("details", "topic bandeja");
  const sumR = mk("summary", null, "Reportes de errores (solo tú los ves)");
  const cuerpoR = mk("div", "results");
  cuerpoR.append(mk("p", "note", "Cargando…"));
  rep.append(sumR, cuerpoR);
  p.insertBefore(rep, antesDe);
  p.insertBefore(sug, rep);

  const [s, r] = await Promise.all([sugerenciasRecibidas(), reportesRecibidos()]);

  cuerpoS.replaceChildren();
  if (!s.ok) cuerpoS.append(mk("p", "note", s.error));
  else {
    sumS.textContent = "Sugerencias recibidas: " + s.data.length + " (solo tú las ves)";
    const notas = s.data.filter((x) => x.utilidad);
    if (notas.length) cuerpoS.append(mk("p", "fa", "Utilidad promedio: " + (notas.reduce((n, x) => n + (x.utilidad ?? 0), 0) / notas.length).toFixed(1) + " de 5 (" + notas.length + " votos)"));
    if (!s.data.length) cuerpoS.append(mk("p", "note", "Todavía no hay sugerencias."));
    for (const x of s.data) {
      const c = mk("div", "result");
      c.append(mk("small", null, x.autor + " · " + (x.t ? hace(x.t) : "") + (x.utilidad ? " · utilidad " + x.utilidad + "/5" : "")));
      x.partes.forEach(([k, v]) => c.append(mk("p", "study", k + ": " + v)));
      cuerpoS.append(c);
    }
  }

  cuerpoR.replaceChildren();
  if (!r.ok) cuerpoR.append(mk("p", "note", r.error));
  else {
    sumR.textContent = "Reportes de errores: " + r.data.length + " (solo tú los ves)";
    if (!r.data.length) cuerpoR.append(mk("p", "note", "Todavía no hay reportes."));
    for (const x of r.data) {
      const c = mk("div", "result");
      c.append(mk("small", null, x.autor + " · " + (x.estacion ?? "") + " · " + x.tipo + (x.id ? " · " + x.id : "") + " · " + hace(Date.parse(x.enviado) || Date.now())));
      c.append(mk("strong", null, x.motivo), mk("p", "study", x.texto), mk("p", "fa", "La página da como correcta: " + x.correcta));
      if (x.comentario) c.append(mk("p", "why", "Comentario: " + x.comentario));
      cuerpoR.append(c);
    }
  }
}
