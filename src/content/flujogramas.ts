// Flujogramas para practicar con preguntas abiertas.
// Fuentes: Teoría 10 (Introducción a los virus) y Teoría 11 (VIH, HTLV y VPH).

export interface PasoFlujo {
  texto: string;
  /** Si es una decisión, se dibuja como pregunta y muestra sus salidas. */
  decision?: boolean;
  /** Salida lateral o aclaración (p. ej. «No reactivo → …»). */
  rama?: string;
}

export interface Flujograma {
  id: string;
  tema: string;
  titulo: string;
  /** La pregunta abierta, como la pondría el profesor. */
  consigna: string;
  /** Camino principal, en orden. */
  pasos: PasoFlujo[];
  /** Lo que no puede faltar en la respuesta (para autoevaluarse). */
  claves: string[];
  /** Pasos falsos que se mezclan en «Armar en orden». */
  intrusos: string[];
}

export const FLUJOGRAMAS: Flujograma[] = [
  {
    id: "vih-dx-adulto",
    tema: "Virus",
    titulo: "Diagnóstico de VIH en un adulto (MINSA)",
    consigna: "Elabora el flujograma de diagnóstico de laboratorio de la infección por VIH en un adulto, según la norma técnica del MINSA. Indica qué se hace si las pruebas no coinciden.",
    pasos: [
      { texto: "Tamizaje: prueba rápida o ELISA de 4.ª generación" },
      { texto: "¿Reactivo?", decision: true, rama: "No → negativo. Si la exposición fue reciente (ventana), repetir." },
      { texto: "Segunda prueba con otra metodología (si fue ELISA: prueba rápida, LIA, IFI o PCR)" },
      { texto: "¿Ambas reactivas?", decision: true, rama: "Discordantes → confirmar con LIA o RT-qPCR. LIA con una sola línea (p. ej. p24): indeterminado → repetir y pedir carga viral." },
      { texto: "Diagnóstico confirmado" },
      { texto: "CD4 y carga viral iniciales (obligatorios antes del TARV)" },
      { texto: "Iniciar TARV: TDF + 3TC + DTG (TLD)" },
      { texto: "Monitoreo: carga viral a los 6 meses y luego cada 6 meses; meta indetectable (< 200 copias/mL)" },
    ],
    claves: [
      "Empieza con prueba rápida o ELISA de 4.ª generación",
      "Si es reactiva, segunda prueba de otra metodología",
      "Dos reactivas = diagnóstico confirmado",
      "Discordantes se resuelven con LIA o RT-qPCR",
      "Menciona el periodo de ventana si sale negativo tras exposición reciente",
      "Pide CD4 y carga viral antes del TARV",
      "Esquema de inicio TLD",
      "Seguimiento con carga viral (meta indetectable)",
    ],
    intrusos: ["Western blot obligatorio antes de todo", "Esperar síntomas para pedir la segunda prueba"],
  },
  {
    id: "vih-neonato",
    tema: "Virus",
    titulo: "Diagnóstico de VIH en el recién nacido",
    consigna: "Un recién nacido es hijo de una madre con VIH. Elabora el flujograma para saber si está infectado y explica por qué no se usan pruebas de anticuerpos.",
    pasos: [
      { texto: "Recién nacido de madre con VIH" },
      { texto: "No usar anticuerpos: pueden ser de la madre", rama: "Por eso se busca el virus (material genético), no anticuerpos." },
      { texto: "PCR a las 2 semanas" },
      { texto: "PCR al mes" },
      { texto: "PCR a los 4–6 meses" },
      { texto: "¿Alguna PCR positiva?", decision: true, rama: "Sí → infección confirmada: evaluar y tratar (ABC + 3TC + DTG desde los 3 kg y 4 semanas). No → no infectado." },
    ],
    claves: [
      "Usa PCR, no pruebas de anticuerpos",
      "Explica que los anticuerpos pueden ser de la madre",
      "PCR a las 2 semanas",
      "PCR al mes",
      "PCR a los 4–6 meses",
    ],
    intrusos: ["ELISA de 4.ª generación al nacer", "Western blot a las 2 semanas"],
  },
  {
    id: "vih-ciclo",
    tema: "Virus",
    titulo: "Ciclo de replicación del VIH",
    consigna: "Esquematiza el ciclo de replicación del VIH desde que llega a la célula hasta que salen nuevos virus. Indica qué proteína o enzima actúa en cada paso.",
    pasos: [
      { texto: "Unión: gp120 se une a CD4" },
      { texto: "Correceptor: CCR5 (fase inicial) o CXCR4 (fase avanzada)" },
      { texto: "Fusión de membranas: gp41" },
      { texto: "Liberación del ARN viral en el citoplasma" },
      { texto: "Retrotranscripción: la transcriptasa inversa copia el ARN a ADN" },
      { texto: "Integración: la integrasa inserta el ADN en el genoma → provirus" },
      { texto: "¿Se activa?", decision: true, rama: "No → latencia (reservorio: CD4 de memoria, macrófagos, SNC)." },
      { texto: "Transcripción y traducción: proteínas gag, pol y env" },
      { texto: "Ensamblaje de nuevos viriones" },
      { texto: "Maduración: la proteasa corta las poliproteínas" },
      { texto: "Liberación por gemación e infección de otras células" },
    ],
    claves: [
      "gp120 se une a CD4",
      "Correceptor CCR5 o CXCR4",
      "gp41 hace la fusión",
      "Transcriptasa inversa: ARN → ADN",
      "Integrasa: forma el provirus",
      "Posibilidad de latencia",
      "Proteasa en la maduración",
      "Salida por gemación",
    ],
    intrusos: ["La neuraminidasa libera los viriones", "El ARN se traduce directamente como ARNm sin pasar a ADN"],
  },
  {
    id: "vih-historia",
    tema: "Virus",
    titulo: "Historia natural de la infección por VIH",
    consigna: "Elabora el flujograma de la historia natural del VIH sin tratamiento. Para cada fase indica el tiempo, el nivel de CD4 y lo que encuentras en el paciente o en el laboratorio.",
    pasos: [
      { texto: "Exposición al virus" },
      { texto: "Síndrome retroviral agudo (2–4 semanas)", rama: "Fiebre, adenopatías, faringitis, rash, úlceras. Carga viral muy alta. p24 positivo con anticuerpos aún negativos (ventana)." },
      { texto: "Latencia clínica (8–10 años)", rama: "Asintomático; el virus se replica y los CD4 bajan poco a poco. Linfadenopatía generalizada persistente." },
      { texto: "Fase sintomática (CD4 200–500)", rama: "Herpes zóster, candidiasis oral, pérdida de peso, sudoración nocturna." },
      { texto: "SIDA (CD4 < 200 o enfermedad definitoria)", rama: "Pneumocystis, toxoplasmosis cerebral, TB extrapulmonar, candidiasis esofágica, CMV, Cryptococcus, Kaposi (HHV-8), linfoma (EBV)." },
      { texto: "Sin tratamiento: muerte en 2–3 años" },
    ],
    claves: [
      "Fase aguda a las 2–4 semanas con p24 y ventana serológica",
      "Latencia de 8–10 años con caída progresiva de CD4",
      "Fase sintomática con CD4 entre 200 y 500",
      "SIDA con CD4 < 200 o enfermedad definitoria",
      "Al menos 3 infecciones oportunistas",
      "Neoplasias: Kaposi (HHV-8) y linfoma (EBV)",
    ],
    intrusos: ["Anticuerpos positivos desde el día 3", "Hipercalcemia con células en flor"],
  },
  {
    id: "vph-cotest",
    tema: "Virus",
    titulo: "Tamizaje de cáncer de cuello uterino (co-test)",
    consigna: "Elabora el flujograma del tamizaje de cáncer de cuello uterino con co-test: a quién se le hace y qué se hace según el resultado de la citología y de la prueba de VPH.",
    pasos: [
      { texto: "Mujer de 30 a 65 años (no se recomienda antes de 30)" },
      { texto: "Co-test: Papanicolaou + PCR de VPH" },
      { texto: "¿Citología normal?", decision: true, rama: "ASC-US con VPH negativo → repetir en 3 años. ASC-US con VPH positivo → colposcopia. HSIL con VPH positivo → colposcopia y/o biopsia." },
      { texto: "¿VPH negativo?", decision: true, rama: "Sí → repetir el co-test en 5 años." },
      { texto: "¿Es VPH 16/18?", decision: true, rama: "No → repetir en 12 meses o genotipificar." },
      { texto: "VPH 16/18 positivo → colposcopia inmediata" },
      { texto: "Si se confirma NIC 2–3 → escisión (LEEP o conización)" },
    ],
    claves: [
      "Edad de 30 a 65 años",
      "Co-test = citología + PCR de VPH",
      "Normal + VPH negativo → 5 años",
      "Normal + VPH positivo no 16/18 → 12 meses o genotipificar",
      "Normal + VPH 16/18 → colposcopia inmediata",
      "ASC-US: según VPH (3 años o colposcopia)",
      "HSIL → colposcopia y/o biopsia",
    ],
    intrusos: ["Antiviral contra el VPH si sale positivo", "Iniciar el tamizaje a los 18 años"],
  },
  {
    id: "vph-cancer",
    tema: "Virus",
    titulo: "Del VPH de alto riesgo al cáncer",
    consigna: "Explica con un flujograma cómo una infección por VPH de alto riesgo puede llegar a cáncer de cuello uterino. Incluye qué hacen E2, E6 y E7.",
    pasos: [
      { texto: "Infección de la capa basal del epitelio por microlesiones" },
      { texto: "¿Persiste más de 12–24 meses?", decision: true, rama: "No (≈ 90 %) → la infección se elimina sola." },
      { texto: "Integración del ADN viral al genoma de la célula" },
      { texto: "Pérdida de E2, que normalmente frena a E6 y E7" },
      { texto: "E6 degrada p53 (no hay apoptosis); E7 inactiva Rb (libera E2F → fase S)" },
      { texto: "Proliferación sin control y acumulación de daño genético" },
      { texto: "NIC 1 → NIC 2 → NIC 3 (carcinoma in situ)" },
      { texto: "Cáncer invasor" },
    ],
    claves: [
      "Solo una minoría (~10 %) persiste",
      "Integración del ADN viral",
      "Pérdida de E2",
      "E6 → p53",
      "E7 → Rb / E2F",
      "Progresión NIC 1 → 2 → 3 → cáncer",
    ],
    intrusos: ["Viremia y paso a la sangre", "El ADN se queda como episoma y no se integra"],
  },
  {
    id: "htlv",
    tema: "Virus",
    titulo: "HTLV-1: de la infección a la enfermedad",
    consigna: "Elabora un flujograma de la infección por HTLV-1: cómo se adquiere, cómo se mantiene y qué dos enfermedades produce, con su mecanismo.",
    pasos: [
      { texto: "Transmisión por células infectadas: lactancia (la principal), sexual o parenteral" },
      { texto: "Infecta linfocitos T CD4+ e integra su ADN (provirus)" },
      { texto: "Latencia: p30 y Rex mantienen el estado latente; HBZ, p12 y p13 evaden la inmunidad" },
      { texto: "¿Qué ocurre después de años?", decision: true, rama: "La mayoría se queda como portador asintomático." },
      { texto: "Vía tumoral: Tax y HBZ estimulan la proliferación + mutaciones → ATLL (< 5 %, tras 20–40 años): células en flor, hipercalcemia" },
      { texto: "Vía inmune: respuesta citotóxica contra CD4 infectados en el SNC → HAM/TSP (< 1 %): paraparesia espástica" },
    ],
    claves: [
      "Lactancia como vía principal",
      "Infecta CD4 y se integra",
      "Tax y HBZ como oncoproteínas",
      "ATLL: < 5 %, tras 20–40 años",
      "ATLL: células en flor e hipercalcemia",
      "HAM/TSP: daño inmune, no infección de neuronas",
    ],
    intrusos: ["El virus destruye los CD4 como el VIH", "Se transmite por mosquitos"],
  },
  {
    id: "ciclo-viral",
    tema: "Virus",
    titulo: "Ciclo viral general",
    consigna: "Esquematiza las etapas del ciclo de un virus dentro de la célula, desde que se une hasta que sale. Señala la diferencia en la salida entre virus envueltos y desnudos.",
    pasos: [
      { texto: "Reconocimiento de la célula diana y unión a receptores" },
      { texto: "Penetración (endocitosis) o fusión" },
      { texto: "Pérdida de la envoltura y desnudamiento del genoma" },
      { texto: "Síntesis temprana: ARNm y proteínas no estructurales (enzimas)" },
      { texto: "Replicación del genoma" },
      { texto: "Síntesis tardía: proteínas estructurales" },
      { texto: "Modificación de proteínas y ensamblaje" },
      { texto: "¿Tiene envoltura?", decision: true, rama: "Sí → sale por gemación. No (desnudo) → sale por lisis celular." },
    ],
    claves: [
      "Unión a receptores",
      "Penetración o fusión",
      "Desnudamiento",
      "Proteínas tempranas antes que las tardías",
      "Replicación del genoma",
      "Ensamblaje",
      "Envueltos: gemación; desnudos: lisis",
    ],
    intrusos: ["División binaria", "Formación de esporas"],
  },
  {
    id: "genoma",
    tema: "Virus",
    titulo: "¿Qué hace el genoma al entrar a la célula?",
    consigna: "Elabora un flujograma que, según el tipo de genoma (ADN, ARN +, ARN − o retrovirus), explique cómo llega el virus a producir sus proteínas.",
    pasos: [
      { texto: "El virus entra a la célula" },
      { texto: "¿ADN?", decision: true, rama: "Sí → va al núcleo, la ARN polimerasa de la célula hace el ARNm. Mutan menos y pueden hacer latencia." },
      { texto: "¿ARN de sentido positivo?", decision: true, rama: "Sí → funciona directo como ARNm: se traduce y produce su polimerasa." },
      { texto: "¿ARN de sentido negativo?", decision: true, rama: "Sí → usa la ARN polimerasa que trae consigo para hacer ARN (+), y luego se traduce." },
      { texto: "Retrovirus: la transcriptasa inversa copia el ARN a ADN, que se integra al genoma y se transcribe" },
    ],
    claves: [
      "ADN: núcleo y polimerasa de la célula",
      "ARN +: se traduce directo",
      "ARN −: trae su propia polimerasa",
      "Retrovirus: transcriptasa inversa e integración",
    ],
    intrusos: ["El ARN − se traduce directamente", "Los virus ADN usan transcriptasa inversa siempre"],
  },
];
