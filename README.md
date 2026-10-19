# Reto de Microbiología

Juego para estudiar Microbiología y Parasitología: preguntas por nivel, microscopio con fotos reales, ahorcado, casos clínicos y zona de estudio.

TypeScript sin framework, compilado con esbuild. Usa Supabase para las cuentas, el avance y los comentarios. Sin Supabase configurado, la página funciona en modo invitado.

## Empezar

Necesitas Node 20 o más reciente.

```bash
npm install
cp .env.example .env      # y completa SUPABASE_URL y SUPABASE_ANON_KEY
npm run dev               # http://localhost:5173
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor local que recarga al guardar |
| `npm run validar` | Revisa el contenido (preguntas, fotos, fichas, ahorcado) |
| `npm run tipos` | Revisa los tipos de TypeScript |
| `npm run build` | Validar, revisar tipos y compilar a `dist/` |
| `npm test` | Pruebas en navegador (celular y escritorio) con una base de datos simulada |

La primera vez que corras las pruebas, instala el navegador: `npx playwright install chromium`.

## Estructura

```
src/
  content/            ← CONTENIDO (lo que se edita con Mafer)
    estaciones/       una estación por archivo: hongos.ts, bacterias.ts, casos.ts…
    microscopio.ts    estructuras, pares "No confundir" y fotos
    perfiles.ts       página de cada agente (Escherichia coli, Candida…)
    ahorcado.ts, indice.ts, tablas.ts, flujogramas.ts, entrenador-virus.ts, datos-curiosos.ts, niveles.ts
    types.ts          forma que debe tener cada dato
  vistas/             pantallas
    inicio.ts, login.ts, comentarios.ts
    jugar/            tablero, niveles, quiz (motor de preguntas), examen, entrenador-virus, microscopio, ahorcado
    estudio/          hub, buscador, tarjetas, errores, flujogramas, tablas, fichas, confundir, resúmenes, índice, agente
  servicios/          supabase.ts (llamadas seguras), sesion.ts (cuenta y sincronización), comentarios.ts
  estado/progreso.ts  puntos, dominadas y errores, con validación de datos
  lib/                errores.ts, almacen.ts (localStorage seguro), dom.ts, azar.ts, texto.ts
  ui/                 marco.ts (menú y panel), cargando.ts ("¿Sabías que…?")
  estilos/            CSS separado por sección
public/               fotos (img/) y cabeceras de seguridad (_headers)
supabase/schema.sql   tablas, reglas de acceso y funciones
scripts/validar-contenido.ts
tests/                pruebas e2e y simulador de Supabase
```

## Editar contenido

Todo está en `src/content/`. Ejemplo de pregunta:

```ts
{
  id: "hongos-039",          // único y fijo: el avance se guarda con él
  nivel: "d",                // f fácil · m medio · d difícil · x muy difícil
  caso: "Paciente con…",     // opcional
  pregunta: "¿Qué hongo…?",  // si hay caso y no hay pregunta, se pregunta el diagnóstico
  correcta: "Aspergillus fumigatus",
  distractores: ["Fusarium", "Penicillium", "Rhizopus"],  // mínimo 3 distintos
  pista: "Mira la vesícula.",
  explicacion: "…",
}
```

Reglas:
- **Nunca cambies ni reutilices un `id`.** Para quitar una pregunta, bórrala entera. Su id no se vuelve a usar.
- Solo material visto en clase.
- Después de editar, corre `npm run validar`. Si hay un ERROR, la página no se publica hasta corregirlo.

Las fotos van en `public/img/` y se registran en `FOTOS` dentro de `microscopio.ts`.

## Manejo de errores

Ningún fallo debe dejar la página en blanco ni perder el avance.

- **Botones y formularios**: usan `boton()` / `protegido()`. Si algo falla, el error se registra en la consola y aparece un aviso corto en español.
- **Pantallas completas**: cada vista está envuelta en `vista()`. Si falla al dibujarse, aparece una pantalla de rescate con "Ir al inicio" y "Recargar".
- **Errores sueltos**: `window.onerror` y `unhandledrejection` los atrapan y avisan (`lib/errores.ts`).
- **Base de datos**: toda llamada pasa por `intentar()` (`servicios/supabase.ts`). Nunca lanza errores. Corta a los 12 s, detecta la falta de internet y traduce los mensajes de Supabase.
- **Avance guardado**: `sanear()` (`estado/progreso.ts`) valida todo lo que viene de localStorage o de la cuenta.
  - Descarta números inválidos y preguntas que ya no existen.
  - Si el JSON está corrupto, lo aparta en `reto-micro-v4:corrupto` y empieza limpio.
  - Si localStorage está bloqueado (modo privado), se puede jugar igual.
- **Sin conexión con cuenta**: el avance se guarda en el dispositivo y se sube solo al volver internet.

## Versión de prueba en GitHub Pages

Cada push a `main` publica la página en GitHub Pages (`.github/workflows/pages.yml`) y corre las pruebas (`pruebas.yml`). Sin Supabase configurado funciona en modo invitado. Para activar las cuentas en la prueba, crea los secretos `SUPABASE_URL` y `SUPABASE_ANON_KEY` en **Settings › Secrets and variables › Actions**.

## Publicar

### 1. Supabase (base de datos y cuentas)

1. Crea un proyecto en supabase.com (región São Paulo, la más cercana a Lima).
2. Ve a **SQL Editor**, pega `supabase/schema.sql` completo y ejecútalo. Se puede volver a ejecutar sin romper nada.
3. Ve a **Authentication › URL Configuration**:
   - En *Site URL* pon la dirección final.
   - En *Redirect URLs* agrega esa dirección y `http://localhost:5173`.
4. Ve a **Authentication › SMTP**: configura un servicio de correo como Resend o Brevo. El correo incluido en Supabase manda muy pocos mensajes por hora; sin SMTP propio, los alumnos no recibirán la confirmación ni el cambio de contraseña.
5. Copia la URL y la clave `anon` de **Project Settings › API** en `.env`. La clave anon es pública por diseño; la seguridad la dan las reglas RLS del schema.

El plan gratis pausa el proyecto tras 7 días sin uso. En época de exámenes conviene el plan Pro.

### 2. Cloudflare Pages (hosting)

1. Sube el proyecto a un repositorio privado de GitHub.
2. En Cloudflare, ve a **Workers & Pages › Create › Pages › Connect to Git**. Configura:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Variables: `SUPABASE_URL`, `SUPABASE_ANON_KEY` y `NODE_VERSION=20`
3. Cada push a `main` publica solo, siempre que la validación y los tipos pasen.

`public/_headers` agrega cabeceras de seguridad y caché.

## Pendiente

- Ranking (la función `ranking()` ya existe en el schema; falta la pantalla).
- Página de política de privacidad (Ley 29733), antes de abrir el registro a otros alumnos.
