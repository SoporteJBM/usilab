import { hongos } from "./hongos";
import { bacterias } from "./bacterias";
import { virus } from "./virus";
import { parasitos } from "./parasitos";
import { laboratorio } from "./laboratorio";
import { tratamientos } from "./tratamientos";
import { contagio } from "./contagio";
import { casos } from "./casos";
import type { Estacion } from "../types";

/** Estaciones del tablero, en el orden en que se muestran. */
export const ESTACIONES: Estacion[] = [hongos, bacterias, virus, parasitos, laboratorio, tratamientos, contagio];
export const CASOS: Estacion = casos;
