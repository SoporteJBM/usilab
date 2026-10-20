/**
 * Texto con formato mínimo: ***negrita y cursiva***, **negrita**, *cursiva*.
 * Se arma con nodos del DOM (nunca innerHTML), así que el texto no puede inyectar HTML.
 */
const PATRON = /\*\*\*([^*]+)\*\*\*|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*/g;

export function textoRico(texto: string): DocumentFragment {
  const frag = document.createDocumentFragment();
  let ultimo = 0;
  for (const m of texto.matchAll(PATRON)) {
    const i = m.index ?? 0;
    if (i > ultimo) frag.append(texto.slice(ultimo, i));
    if (m[1] !== undefined) {
      const b = document.createElement("strong");
      const e = document.createElement("em");
      e.textContent = m[1];
      b.append(e);
      frag.append(b);
    } else if (m[2] !== undefined) {
      const b = document.createElement("strong");
      b.textContent = m[2];
      frag.append(b);
    } else {
      const e = document.createElement("em");
      e.textContent = m[3];
      frag.append(e);
    }
    ultimo = i + m[0].length;
  }
  if (ultimo < texto.length) frag.append(texto.slice(ultimo));
  return frag;
}

/** El mismo texto sin las marcas (para buscar y para leer en voz alta). */
export function textoPlano(texto: string): string {
  return texto.replace(PATRON, (_m, a, b, c) => a ?? b ?? c ?? "");
}
