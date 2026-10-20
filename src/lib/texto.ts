/** Minúsculas y sin tildes, para comparar búsquedas. */
export const sinTildes = (s: string): string => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function hace(t: number): string {
  const s = Math.max(0, (Date.now() - t) / 1000);
  if (s < 60) return "hace un momento";
  if (s < 3600) return "hace " + Math.floor(s / 60) + " min";
  if (s < 86400) return "hace " + Math.floor(s / 3600) + " h";
  const d = Math.floor(s / 86400);
  return d === 1 ? "ayer" : "hace " + d + " días";
}

export const plural = (n: number, uno: string, varios: string): string => n + " " + (n === 1 ? uno : varios);

/** Raíces de una respuesta del ahorcado: las primeras 5 letras de cada palabra de 4 letras o más. */
export function raicesRespuesta(respuesta: string): string[] {
  return sinTildes(respuesta).toUpperCase().split(/[^A-Z]+/).filter((w) => w.length >= 4).map((w) => w.slice(0, 5));
}

/** La pista nunca debe decir la respuesta: tapa toda palabra que contenga una de sus raíces (p. ej. «aspergilar»). */
export function ocultarRespuesta(texto: string, respuesta: string): string {
  const raices = raicesRespuesta(respuesta);
  return texto.replace(/\p{L}+/gu, (w) => { const W = sinTildes(w).toUpperCase(); return raices.some((r) => W.includes(r)) ? "___" : w; });
}
