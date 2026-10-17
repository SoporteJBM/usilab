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
