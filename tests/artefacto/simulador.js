// Simula window.claude (user, db, sample) como lo da claude.ai, para probar el artefacto.
// Se inyecta antes de la página. window.__store guarda la base de datos; window.__prompts, los pedidos a Claude.
window.__store = window.__store || {};
window.__prompts = [];
(() => {
  const store = window.__store;
  const doc = (ruta) => ({
    id: ruta.split("/").pop(),
    get: async () => ({ id: ruta.split("/").pop(), exists: ruta in store, data: () => (ruta in store ? JSON.parse(JSON.stringify(store[ruta])) : undefined) }),
    set: async (d) => { store[ruta] = JSON.parse(JSON.stringify(d)); },
  });
  const coleccion = (ruta) => {
    let orden = null, lim = 1000;
    const q = {
      orderBy(c, dir) { orden = [c, dir]; return q; },
      limit(n) { lim = n; return q; },
      async get() {
        let docs = Object.keys(store).filter((k) => k.startsWith(ruta + "/") && k.split("/").length === ruta.split("/").length + 1)
          .map((k) => ({ id: k.split("/").pop(), exists: true, data: () => JSON.parse(JSON.stringify(store[k])) }));
        if (orden) docs.sort((a, b) => (orden[1] === "desc" ? -1 : 1) * ((a.data()[orden[0]] || 0) - (b.data()[orden[0]] || 0)));
        return { docs: docs.slice(0, lim) };
      },
    };
    return q;
  };
  const sample = {
    limits: async () => ({ maxPromptBytes: 262144, images: { maxCount: 5 } }),
    json: async (prompt, opciones) => {
      window.__prompts.push({ prompt, imagenes: (opciones.images || []).length });
      await new Promise((r) => setTimeout(r, 80));
      const crits = [...prompt.matchAll(/^\d+\. ([^—\n]+) — clave:/gm)].map((m) => m[1].trim());
      return { legible: true, ilegibles: window.__ileg ? ['"CD?" en el segundo recuadro'] : [], criterios: crits.map((c, i) => ({ criterio: c, puntaje: i === 0 ? 2 : 4, estado: i === 0 ? "parcial" : "completo", escribiste: "algo", fallo: i === 0 ? "falta detalle" : "", correccion: "la clave" })), errores_graves: [], fortalezas: ["orden"], resumen: "Buen trabajo", siguiente_paso: "repasa" };
    },
  };
  const usuario = {
    me: async () => ({ id: "u_test", name: "Ana Prueba", avatarUrl: "data:image/gif;base64,R0lGODlhAQABAAAAACw=" }),
    profiles: async (ids) => Object.fromEntries(ids.map((i) => [i, { name: i === "u_test" ? "Ana Prueba" : "Otro Alumno", avatarUrl: "" }])),
    isOwner: async () => window.__dueno !== false,
  };
  window.claude = { use: async (n) => (n === "user" ? usuario : n === "db" ? { doc, collection: coleccion } : n === "sample" ? sample : null) };
})();
