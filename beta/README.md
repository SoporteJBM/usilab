# Artefacto de Claude (ambiente de pruebas)

`reto-microbiologia.html` es el artefacto publicado en claude.ai. **Sale del mismo código que la página** (GitHub Pages): no se edita a mano.

Para generarlo:

```
node build.mjs --artefacto      # crea dist-artefacto/reto-microbiologia.html
cp dist-artefacto/reto-microbiologia.html beta/
```

Qué cambia dentro del artefacto (por `CONFIG.plataforma = "artefacto"`):
- Se entra con la cuenta de Claude (sin contraseña); también se puede jugar como invitado.
- El avance se guarda en la cuenta y hay ranking.
- Comentarios, sugerencias y reportes de errores van a la base del artefacto; solo el dueño ve las sugerencias y los reportes.
- Flujograma con foto: el alumno sube la foto de su flujograma y Claude lo corrige según el nivel. En la web esto llegará cuando haya servidor.
- Las fotos van dentro del mismo archivo.

Pruebas del artefacto: `npx playwright test -c playwright.artefacto.config.ts` (usa un simulador de claude.ai).
