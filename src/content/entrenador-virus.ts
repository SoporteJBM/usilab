// Entrenador de Virus: datos de los ejercicios.
// Fuentes: Teoría 10 (Introducción a los virus) y Teoría 11 (VIH, HTLV y VPH).

export type GrupoBaltimore = "I" | "II" | "III" | "IV" | "V" | "VI" | "VII";

export const GRUPOS_BALTIMORE: Record<GrupoBaltimore, string> = {
  I: "I · ADN doble cadena",
  II: "II · ADN cadena simple",
  III: "III · ARN doble cadena",
  IV: "IV · ARN cadena simple (+)",
  V: "V · ARN cadena simple (−)",
  VI: "VI · ARN con transcriptasa inversa",
  VII: "VII · ADN con transcriptasa inversa",
};

/** [virus, grupo, familia] */
export const VIRUS_BALTIMORE: [string, GrupoBaltimore, string][] = [
  ["Herpes simple", "I", "Herpesviridae"],
  ["Virus varicela-zóster", "I", "Herpesviridae"],
  ["Virus de Epstein-Barr", "I", "Herpesviridae"],
  ["Herpesvirus humano 8", "I", "Herpesviridae"],
  ["Adenovirus", "I", "Adenoviridae"],
  ["Virus del papiloma humano", "I", "Papillomaviridae"],
  ["Molusco contagioso", "I", "Poxviridae"],
  ["Poliomavirus de células de Merkel", "I", "Polyomaviridae"],
  ["Parvovirus", "II", "Parvoviridae"],
  ["Rotavirus", "III", "Reoviridae"],
  ["Rinovirus", "IV", "Picornaviridae"],
  ["Poliovirus", "IV", "Picornaviridae"],
  ["Hepatitis A", "IV", "Picornaviridae"],
  ["Dengue", "IV", "Flaviviridae"],
  ["Zika", "IV", "Flaviviridae"],
  ["Hepatitis C", "IV", "Flaviviridae"],
  ["SARS-CoV-2", "IV", "Coronaviridae"],
  ["Rubéola", "IV", "Togaviridae"],
  ["Chikungunya", "IV", "Togaviridae"],
  ["Norovirus", "IV", "Caliciviridae"],
  ["Hepatitis E", "IV", "Hepeviridae"],
  ["Influenza", "V", "Orthomyxoviridae (genoma segmentado)"],
  ["Rabia", "V", "Rhabdoviridae"],
  ["Sarampión", "V", "Paramyxoviridae"],
  ["Virus sincitial respiratorio", "V", "Paramyxoviridae"],
  ["Parainfluenza", "V", "Paramyxoviridae"],
  ["Ébola", "V", "Filoviridae"],
  ["VIH", "VI", "Retroviridae (Lentivirus)"],
  ["HTLV-1", "VI", "Retroviridae (Deltaretrovirus)"],
  ["Hepatitis B", "VII", "Hepadnaviridae"],
];

/** Interpretación del recuento de CD4 en VIH. [desde, hasta, interpretación] — se generan valores lejos de los bordes. */
export const RANGOS_CD4: [number, number, string][] = [
  [520, 1150, "Rango normal: buen estado inmunológico"],
  [360, 490, "Afectación moderada del sistema inmune"],
  [210, 340, "Riesgo de complicaciones: suele iniciarse profilaxis"],
  [60, 190, "SIDA: inmunosupresión severa"],
  [5, 45, "SIDA con riesgo muy alto de infecciones oportunistas graves"],
];

/** Carga viral del VIH. [desde, hasta, interpretación] */
export const RANGOS_CARGA: [number, number, string][] = [
  [0, 19, "Indetectable"],
  [80, 950, "Baja (menos de 1 000 copias/mL)"],
  [1200, 9500, "Moderada (1 000 a 10 000 copias/mL)"],
  [12000, 900000, "Alta (más de 10 000 copias/mL)"],
];

export const ESQUEMAS = {
  TLD: "TDF + 3TC + DTG (TLD)",
  TLE: "TDF + 3TC + EFV (TLE)",
  ABC: "ABC + 3TC + DTG",
  SEGUNDA: "AZT + 3TC + LPV/r",
  RESCATE: "DRV/r + RAL + ETR",
} as const;

/** Situación → esquema según la guía del MINSA (2025). */
export const SITUACIONES_TARV: { caso: string; esquema: keyof typeof ESQUEMAS; porque: string }[] = [
  { caso: "Adulto recién diagnosticado, sin otras enfermedades.", esquema: "TLD", porque: "Primera línea preferida: alta potencia, baja toxicidad, una tableta al día." },
  { caso: "Gestante recién diagnosticada.", esquema: "TLD", porque: "El TLD es seguro y preferido en embarazo y lactancia." },
  { caso: "Paciente con VIH y hepatitis B crónica.", esquema: "TLD", porque: "Tenofovir y lamivudina también actúan contra el VHB." },
  { caso: "Paciente con VIH y tuberculosis, en tratamiento con rifampicina.", esquema: "TLE", porque: "El efavirenz interactúa menos con la rifampicina." },
  { caso: "No hay dolutegravir disponible o el paciente tuvo un efecto adverso con él.", esquema: "TLE", porque: "Es la alternativa de primera línea." },
  { caso: "Paciente con filtrado glomerular menor de 50 ml/min.", esquema: "ABC", porque: "El tenofovir está contraindicado: se cambia por abacavir." },
  { caso: "Paciente alérgico al tenofovir.", esquema: "ABC", porque: "Sin tenofovir, la primera línea es abacavir + lamivudina + dolutegravir." },
  { caso: "Niño de 2 años con VIH.", esquema: "ABC", porque: "En niños se prefiere ABC + 3TC + DTG desde los 3 kg y 4 semanas de vida (antes se usaba LPV/r)." },
  { caso: "Fallo virológico documentado con buena adherencia.", esquema: "SEGUNDA", porque: "Segunda línea: zidovudina + lamivudina + lopinavir/ritonavir." },
  { caso: "Fallo a la segunda línea; infectología pide genotipificación y rescate.", esquema: "RESCATE", porque: "Tercera línea (rescate): darunavir/ritonavir + raltegravir + etravirina." },
];

/** Co-test (citología + VPH) → manejo. */
export const CO_TEST: { citologia: string; vph: string; manejo: string; porque: string }[] = [
  { citologia: "Normal", vph: "Negativo", manejo: "Repetir el co-test en 5 años", porque: "Riesgo muy bajo." },
  { citologia: "Normal", vph: "Positivo, pero no 16/18", manejo: "Repetir en 12 meses o genotipificar", porque: "Infección de menor riesgo." },
  { citologia: "Normal", vph: "16/18 positivo", manejo: "Colposcopia inmediata", porque: "Alto riesgo de NIC 2/3 aunque la citología sea normal." },
  { citologia: "ASC-US", vph: "Negativo", manejo: "Repetir en 3 años", porque: "Lesión leve sin VPH activo." },
  { citologia: "ASC-US", vph: "Positivo", manejo: "Colposcopia", porque: "Riesgo intermedio." },
  { citologia: "HSIL", vph: "Positivo", manejo: "Colposcopia y/o biopsia", porque: "Lesión de alto grado con virus oncogénico." },
];

/** Proteínas y su función. */
export const PROTEINAS: { virus: "VIH" | "VPH" | "HTLV-1"; nombre: string; funcion: string }[] = [
  { virus: "VIH", nombre: "gp120", funcion: "Se une al receptor CD4" },
  { virus: "VIH", nombre: "gp41", funcion: "Fusiona la envoltura viral con la célula" },
  { virus: "VIH", nombre: "p24", funcion: "Forma la cápside; es el primer antígeno detectable" },
  { virus: "VIH", nombre: "p17", funcion: "Forma la matriz" },
  { virus: "VIH", nombre: "Transcriptasa inversa", funcion: "Copia el ARN viral a ADN" },
  { virus: "VIH", nombre: "Integrasa", funcion: "Inserta el ADN viral en el genoma de la célula" },
  { virus: "VIH", nombre: "Proteasa", funcion: "Corta las poliproteínas para que el virión madure" },
  { virus: "VIH", nombre: "Tat y Rev", funcion: "Regulan la transcripción y el transporte del ARN viral" },
  { virus: "VPH", nombre: "E1", funcion: "Helicasa: participa en la replicación del ADN viral" },
  { virus: "VPH", nombre: "E2", funcion: "Regula la transcripción y frena a E6 y E7" },
  { virus: "VPH", nombre: "E4", funcion: "Rompe el citoesqueleto y ayuda a liberar los viriones" },
  { virus: "VPH", nombre: "E5", funcion: "Estimula receptores de crecimiento (EGFR)" },
  { virus: "VPH", nombre: "E6", funcion: "Degrada la p53 por ubiquitinación" },
  { virus: "VPH", nombre: "E7", funcion: "Inactiva la proteína del retinoblastoma (Rb)" },
  { virus: "VPH", nombre: "L1", funcion: "Proteína principal de la cápside; con ella se hace la vacuna" },
  { virus: "VPH", nombre: "L2", funcion: "Proteína menor de la cápside; empaqueta el ADN" },
  { virus: "HTLV-1", nombre: "Tax", funcion: "Oncoproteína: activa NF-κB y estimula la proliferación del linfocito" },
  { virus: "HTLV-1", nombre: "HBZ", funcion: "Oncoproteína que mantiene la proliferación y la persistencia" },
  { virus: "HTLV-1", nombre: "gp46", funcion: "Une el virus a sus receptores (GLUT-1, NRP-1, HSPG)" },
];

/** Diagnóstico del VIH paso a paso: cada escenario es una secuencia de decisiones. */
export const PASOS_DX_VIH: {
  titulo: string;
  pasos: { situacion: string; correcta: string; distractores: string[]; porque: string }[];
}[] = [
  {
    titulo: "Tamizaje en un adulto",
    pasos: [
      { situacion: "Varón de 28 años quiere saber si tiene VIH. ¿Con qué empiezas?", correcta: "Prueba rápida o ELISA de 4.ª generación", distractores: ["Western blot", "Carga viral por RT-qPCR", "ELISA de 3.ª generación"], porque: "El tamizaje recomendado por el MINSA detecta anticuerpos y antígeno p24." },
      { situacion: "La prueba sale reactiva. ¿Qué sigue?", correcta: "Una segunda prueba con otra metodología", distractores: ["Iniciar TARV sin más pruebas", "Repetir la misma prueba rápida", "Darle el alta: puede ser un falso positivo"], porque: "Si fue ELISA, se usa prueba rápida o LIA/IFI/PCR, y viceversa." },
      { situacion: "La segunda prueba también es reactiva. ¿Qué haces?", correcta: "Diagnóstico confirmado: pedir CD4 y carga viral e iniciar TARV", distractores: ["Hacer Western blot obligatorio", "Esperar 6 meses y repetir", "Pedir CD4 solo si tiene síntomas"], porque: "Dos pruebas reactivas confirman. CD4 y carga viral inicial son obligatorios antes del TARV." },
    ],
  },
  {
    titulo: "Resultados que no coinciden",
    pasos: [
      { situacion: "Prueba rápida reactiva y ELISA de 4.ª generación no reactivo. ¿Qué haces?", correcta: "Confirmar con LIA o RT-qPCR", distractores: ["Descartar VIH", "Confirmar VIH", "Repetir la prueba rápida hasta que coincidan"], porque: "Los resultados discordantes se confirman con LIA o RT-qPCR." },
      { situacion: "El LIA muestra una sola línea: p24. ¿Cómo se interpreta?", correcta: "Indeterminado: repetir y pedir carga viral", distractores: ["Positivo", "Negativo", "Confirma VIH-2"], porque: "Positivo exige una línea env (gp160/gp120 o gp41) y otra más. Una sola línea es indeterminado." },
      { situacion: "La RT-qPCR informa 85 000 copias/mL. ¿Qué significa?", correcta: "Infección confirmada con carga viral alta", distractores: ["Carga baja: probable falso positivo", "Indetectable: no hay infección", "Hay que repetir el LIA antes de concluir"], porque: "Más de 10 000 copias/mL es carga alta." },
    ],
  },
  {
    titulo: "Periodo de ventana",
    pasos: [
      { situacion: "Exposición de riesgo hace 10 días. ELISA de 3.ª generación no reactivo. ¿Está descartado?", correcta: "No: puede estar en periodo de ventana", distractores: ["Sí: el ELISA es muy sensible", "Sí, si además no tiene síntomas", "No: el ELISA de 3.ª generación nunca detecta VIH-1"], porque: "La 3.ª generación solo detecta anticuerpos, que aparecen entre los días 15 y 45." },
      { situacion: "¿Qué prueba acorta más la ventana?", correcta: "Una de 4.ª o 5.ª generación, o PCR", distractores: ["Western blot", "IFI", "Repetir el ELISA de 3.ª generación al día siguiente"], porque: "Detectan el antígeno p24, que aparece desde el día 10–15." },
    ],
  },
  {
    titulo: "Recién nacido de madre con VIH",
    pasos: [
      { situacion: "Recién nacido de madre con VIH. ¿Cómo se diagnostica?", correcta: "PCR a las 2 semanas, al mes y a los 4–6 meses", distractores: ["ELISA de 4.ª generación al nacer", "Western blot a las 2 semanas", "Prueba rápida al mes"], porque: "En neonatos se busca el virus, no anticuerpos." },
      { situacion: "¿Por qué no sirve una prueba de anticuerpos en el bebé?", correcta: "Porque los anticuerpos pueden ser de la madre", distractores: ["Porque el bebé no produce IgG nunca", "Porque el VIH no se transmite al bebé", "Porque las pruebas rápidas no se pueden usar en niños"], porque: "La PCR detecta el material genético del virus en el propio bebé." },
    ],
  },
];
