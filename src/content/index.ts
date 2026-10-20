// Punto de entrada único del contenido. Las vistas importan desde aquí.
export * from "./types";
export { ESTACIONES, CASOS } from "./estaciones";
export { MICROSCOPIO, AGENTES_MICROSCOPIO, PARES, FOTOS } from "./microscopio";
export { AHORCADO, AHORCADO_PUNTOS, AHORCADO_RESUMEN } from "./ahorcado";
export { AHORCADOS, type AhorcadoEstacion } from "./ahorcados";
export { DATOS_CURIOSOS } from "./datos-curiosos";
export { PERFILES } from "./perfiles";
export { INDICE, REINOS } from "./indice";
export { TABLAS } from "./tablas";
export { NIVELES, PUNTOS, PISTA, NOMBRE_NIVEL } from "./niveles";
export { FLUJOGRAMAS, type Flujograma, type PasoFlujo } from "./flujogramas";
export { AREAS_FLUJO, CASOS_FLUJO, CRITERIOS_FLUJO, LOGICA_FLUJO, NIVELES_FLUJO, ORDEN_FLUJO, type CasoFlujo, type CriterioFlujo, type NivelFlujo, type NodoFlujo } from "./flujo-foto";
