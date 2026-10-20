// Flujograma con foto: casos con su clave por criterio y su flujograma modelo (gráfico).
// El alumno hace el flujograma en papel, envía la foto y Claude lo corrige con esta clave.
// Fuentes: teorías 10 y 11 de Virus y material de Hongos del curso.

export type CriterioFlujo = "sintomas" | "zona" | "enfermedad" | "patogenia" | "diagnostico" | "tratamiento" | "prevencion" | "logica";
export type ClaveFlujo = Record<Exclude<CriterioFlujo, "logica">, string>;
/** [tipo, criterio, texto, salida «No» si es decisión] */
export type NodoFlujo = [tipo: "ini" | "pro" | "dec" | "fin", criterio: Exclude<CriterioFlujo, "logica">, texto: string, rama?: string];

export interface CasoFlujo {
  id: string;
  /** Estación a la que pertenece. */
  area: "virus" | "hongos";
  tema: string;
  caso: string;
  clave: ClaveFlujo;
  grafico: NodoFlujo[];
}

export interface NivelFlujo { nombre: string; criterios: CriterioFlujo[]; revela?: boolean; desc: string; rigor: string }

export const CRITERIOS_FLUJO: [CriterioFlujo, string][] = [
  [
    "sintomas",
    "Síntomas"
  ],
  [
    "zona",
    "Zona afectada del cuerpo"
  ],
  [
    "enfermedad",
    "Enfermedad"
  ],
  [
    "patogenia",
    "Patogenia"
  ],
  [
    "diagnostico",
    "Diagnóstico"
  ],
  [
    "tratamiento",
    "Tratamiento"
  ],
  [
    "prevencion",
    "Prevención y complicaciones"
  ],
  [
    "logica",
    "Lógica del flujograma"
  ]
];

export const LOGICA_FLUJO = "Debe ir en orden causal y con flechas que unan causa y efecto: agente y transmisión → patogenia → zona afectada → síntomas → enfermedad → diagnóstico → tratamiento → prevención y complicaciones. Las decisiones (sí/no) deben tener sus dos salidas. Una lista sin flechas o con pasos fuera de orden no es un flujograma completo.";

/** Orden del flujograma modelo: de la causa a la consecuencia. */
export const ORDEN_FLUJO: Exclude<CriterioFlujo, "logica">[] = ["patogenia", "zona", "sintomas", "enfermedad", "diagnostico", "tratamiento", "prevencion"];

export const AREAS_FLUJO: Record<"virus" | "hongos", { nombre: string; fuente: string }> = {
  "virus": {
    "nombre": "Virus",
    "fuente": "las teorías 10 y 11 de Virus"
  },
  "hongos": {
    "nombre": "Hongos",
    "fuente": "el material de Hongos del curso (prácticas y banco de laboratorio)"
  }
};

export const NIVELES_FLUJO: Record<"f" | "m" | "d" | "x", NivelFlujo> = {
  "f": {
    "nombre": "Flujograma corto",
    "criterios": [
      "sintomas",
      "enfermedad",
      "tratamiento",
      "logica"
    ],
    "revela": true,
    "desc": "Te digo la enfermedad. 4 criterios: síntomas, enfermedad, tratamiento y lógica.",
    "rigor": "NIVEL FÁCIL. El alumno ya conoce la enfermedad (se la dimos). Evalúa SOLO los 4 criterios indicados. Acepta ideas generales si son correctas (no exijas mecanismos moleculares ni esquemas exactos), pero cualquier dato falso baja el criterio. En «Lógica» basta un orden coherente de inicio a fin unido con flechas."
  },
  "m": {
    "nombre": "Flujograma intermedio",
    "criterios": [
      "sintomas",
      "zona",
      "enfermedad",
      "diagnostico",
      "tratamiento",
      "logica"
    ],
    "desc": "Tú identificas la enfermedad. 6 criterios: se suman zona afectada y diagnóstico.",
    "rigor": "NIVEL MEDIO. El alumno debe identificar la enfermedad. Evalúa SOLO los 6 criterios indicados. Exige los datos principales de cada uno: la célula u órgano diana, el examen que confirma y el fármaco o medida de elección. Un 4 requiere esos datos sin errores. En «Lógica» exige orden causal y flechas."
  },
  "d": {
    "nombre": "Flujograma completo",
    "criterios": [
      "sintomas",
      "zona",
      "enfermedad",
      "patogenia",
      "diagnostico",
      "tratamiento",
      "prevencion",
      "logica"
    ],
    "desc": "Los 8 criterios: se suman patogenia y prevención/complicaciones.",
    "rigor": "NIVEL DIFÍCIL. Evalúa los 8 criterios. La patogenia debe explicar el mecanismo (cómo entra, qué célula infecta, qué hace dentro), el diagnóstico la secuencia de pruebas, el tratamiento el esquema o fármaco específico, y deben aparecer prevención y complicaciones. En «Lógica» el flujograma debe seguir el orden del modelo con flechas."
  },
  "x": {
    "nombre": "Flujograma de examen final",
    "criterios": [
      "sintomas",
      "zona",
      "enfermedad",
      "patogenia",
      "diagnostico",
      "tratamiento",
      "prevencion",
      "logica"
    ],
    "desc": "Los 8 criterios con detalle de examen final y al menos una decisión Sí/No. Corrección muy estricta.",
    "rigor": "NIVEL MUY DIFÍCIL: corrige como un examen final exigente. Exige TODOS los detalles de la clave (receptores, enzimas, genes, tiempos, esquemas y dosis de la clave cuando existan). Cualquier imprecisión baja el criterio; un 4 solo si es impecable. En «Lógica» exige formas de flujograma (inicio, pasos, al menos una decisión en rombo con salidas Sí y No coherentes con el modelo) y flechas; sin decisión, máximo 2 en ese criterio."
  }
};

export const CASOS_FLUJO: CasoFlujo[] = [
  {
    "id": "vih-agudo",
    "area": "virus",
    "tema": "VIH",
    "caso": "Varón de 25 años. Tres semanas después de una relación sexual sin preservativo presenta fiebre, adenopatías generalizadas, dolor de garganta, mialgias, rash maculopapular y úlceras orales.",
    "clave": {
      "sintomas": "Fiebre, linfadenopatías generalizadas, dolor de garganta, mialgias y artralgias, rash maculopapular, úlceras orales o genitales (cuadro tipo mononucleosis).",
      "zona": "Sistema inmune: linfocitos T CD4+ y tejido linfoide (ganglios, GALT). Puerta de entrada: mucosa genital o rectal.",
      "enfermedad": "Infección por VIH-1 en fase aguda: síndrome retroviral agudo (2–4 semanas tras la exposición). Sin tratamiento sigue latencia clínica (8–10 años) y luego SIDA.",
      "patogenia": "Retrovirus (Lentivirus, ARN +, Baltimore VI). gp120 se une a CD4 con correceptor CCR5 (fase inicial) o CXCR4; gp41 fusiona. Transcriptasa inversa ARN → ADN, integrasa → provirus (latencia en reservorios). Destrucción de CD4 por lisis, apoptosis y citotoxicidad CD8. Carga viral muy alta en esta fase.",
      "diagnostico": "Tamizaje con ELISA de 4.ª generación o prueba rápida: el antígeno p24 aparece antes que los anticuerpos (periodo de ventana). Segunda prueba de otra metodología; discordantes con LIA o RT-qPCR. Al confirmar: CD4 y carga viral.",
      "tratamiento": "TARV de por vida, primera línea MINSA: TDF + 3TC + DTG (TLD).",
      "prevencion": "Preservativo, no compartir agujas, tamizaje y TARV en gestantes. Complicación: SIDA (CD4 < 200) con infecciones oportunistas (Pneumocystis jirovecii, toxoplasmosis cerebral, TB extrapulmonar, candidiasis esofágica, CMV, Cryptococcus) y neoplasias (sarcoma de Kaposi por HHV-8, linfoma por EBV). Es muy contagioso en esta fase."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "VIH-1 entra por mucosa genital (relación sin preservativo)"
      ],
      [
        "pro",
        "patogenia",
        "gp120 se une a CD4 + correceptor CCR5 · gp41 fusiona"
      ],
      [
        "pro",
        "patogenia",
        "Transcriptasa inversa: ARN → ADN · integrasa → provirus"
      ],
      [
        "pro",
        "zona",
        "Linfocitos T CD4+ y tejido linfoide (ganglios, GALT)"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre, adenopatías, faringitis, mialgias, rash, úlceras orales"
      ],
      [
        "pro",
        "enfermedad",
        "Síndrome retroviral agudo (2–4 semanas)"
      ],
      [
        "dec",
        "diagnostico",
        "ELISA 4.ª gen o prueba rápida: ¿reactiva?",
        "Ventana: el p24 aparece antes que los anticuerpos → repetir"
      ],
      [
        "pro",
        "diagnostico",
        "Segunda prueba de otra metodología (discordantes: LIA o RT-qPCR)"
      ],
      [
        "pro",
        "diagnostico",
        "Confirmado → CD4 y carga viral"
      ],
      [
        "pro",
        "tratamiento",
        "TARV de por vida: TDF + 3TC + DTG (TLD)"
      ],
      [
        "fin",
        "prevencion",
        "Preservativo, no compartir agujas · Sin TARV: latencia 8–10 años → SIDA (oportunistas, Kaposi, linfoma)"
      ]
    ]
  },
  {
    "id": "kaposi",
    "area": "virus",
    "tema": "VIH",
    "caso": "Varón de 40 años con VIH que abandonó el tratamiento. Pérdida de peso, sudoración nocturna y nódulos rojo-violáceos en ambas piernas. CD4: 150 células/mm³.",
    "clave": {
      "sintomas": "Nódulos y placas rojo-violáceas en la piel, pérdida de peso, sudoración nocturna, fatiga (inmunodeficiencia avanzada).",
      "zona": "Piel (células endoteliales de los vasos) y sistema inmune (CD4).",
      "enfermedad": "SIDA (CD4 < 200) con sarcoma de Kaposi, neoplasia definitoria de SIDA.",
      "patogenia": "El VIH destruye CD4 y baja la inmunidad celular; el herpesvirus humano 8 (HHV-8) prolifera sin control, infecta células endoteliales e induce angiogénesis y proliferación (IL-6, VEGF). La proteína Tat del VIH potencia la angiogénesis. El VIH no es oncogénico directo.",
      "diagnostico": "CD4 < 200 y carga viral alta. Biopsia de la lesión: células fusiformes con hematíes en pequeños vasos.",
      "tratamiento": "Reiniciar TARV (TLD; si hay fallo virológico con buena adherencia, segunda línea AZT + 3TC + LPV/r) y manejo oncológico de la lesión.",
      "prevencion": "Adherencia al TARV, diagnóstico temprano. Complicaciones: otras infecciones oportunistas (Pneumocystis, toxoplasmosis, TB extrapulmonar), linfoma no Hodgkin por EBV, caquexia y muerte sin tratamiento."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "VIH sin tratamiento"
      ],
      [
        "pro",
        "patogenia",
        "Destrucción de CD4 → baja la inmunidad celular"
      ],
      [
        "pro",
        "patogenia",
        "HHV-8 prolifera sin control → infecta endotelio → angiogénesis (IL-6, VEGF; Tat del VIH)"
      ],
      [
        "pro",
        "zona",
        "Piel (endotelio de los vasos) y sistema inmune"
      ],
      [
        "pro",
        "sintomas",
        "Nódulos rojo-violáceos, pérdida de peso, sudoración nocturna"
      ],
      [
        "dec",
        "diagnostico",
        "¿CD4 < 200 o enfermedad definitoria?",
        "Fase sintomática (CD4 200–500): aún no es SIDA"
      ],
      [
        "pro",
        "enfermedad",
        "SIDA con sarcoma de Kaposi"
      ],
      [
        "pro",
        "diagnostico",
        "Carga viral + biopsia: células fusiformes con hematíes"
      ],
      [
        "pro",
        "tratamiento",
        "Reiniciar TARV (TLD) + manejo oncológico"
      ],
      [
        "fin",
        "prevencion",
        "Adherencia al TARV · Complicaciones: otras oportunistas, linfoma (EBV), caquexia"
      ]
    ]
  },
  {
    "id": "cancer-cervix",
    "area": "virus",
    "tema": "VPH",
    "caso": "Mujer de 42 años que nunca se hizo un Papanicolaou. Consulta por sangrado después de las relaciones sexuales, flujo fétido y dolor pélvico.",
    "clave": {
      "sintomas": "Sangrado postcoital, flujo fétido, dolor pélvico (en etapas iniciales suele ser asintomático: más del 90 % de las infecciones por VPH no dan síntomas).",
      "zona": "Cuello uterino, en la zona de transformación (epitelio escamoso).",
      "enfermedad": "Cáncer de cuello uterino asociado a VPH de alto riesgo (16 y 18), tras NIC 1 → NIC 2 → NIC 3.",
      "patogenia": "VPH (Papillomaviridae, ADN doble cadena, no envuelto) entra a la capa basal por microlesiones. Solo ~10 % persiste más de 12–24 meses: el ADN se integra, se pierde E2 y E6 y E7 quedan sin control. E6 degrada p53 (sin apoptosis) y E7 inactiva Rb (libera E2F, entra a fase S): proliferación descontrolada y daño genético.",
      "diagnostico": "Co-test: Papanicolaou (coilocitos, LSIL/HSIL) + PCR de VPH con genotipificación. Colposcopia y biopsia.",
      "tratamiento": "No hay antiviral curativo. NIC 2–3: escisión (LEEP o conización). Cáncer: cirugía, radioterapia y/o quimioterapia según estadio.",
      "prevencion": "Vacuna tetravalente del MINSA (6, 11, 16, 18) a los 9–13 años en 2 dosis; tamizaje con co-test de 30 a 65 años; preservativo. Complicación: cáncer invasor y muerte; Perú tiene alta incidencia y mortalidad."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "VPH 16/18 por contacto sexual (microlesiones)"
      ],
      [
        "pro",
        "zona",
        "Capa basal del cuello uterino (zona de transformación)"
      ],
      [
        "dec",
        "patogenia",
        "¿La infección persiste más de 12–24 meses?",
        "≈ 90 % se elimina sola"
      ],
      [
        "pro",
        "patogenia",
        "ADN viral se integra · se pierde E2"
      ],
      [
        "pro",
        "patogenia",
        "E6 degrada p53 · E7 inactiva Rb → proliferación sin control"
      ],
      [
        "pro",
        "enfermedad",
        "NIC 1 → NIC 2 → NIC 3 → cáncer de cuello uterino"
      ],
      [
        "pro",
        "sintomas",
        "Sangrado postcoital, flujo fétido, dolor pélvico"
      ],
      [
        "pro",
        "diagnostico",
        "Co-test (Papanicolaou + PCR de VPH) → colposcopia y biopsia"
      ],
      [
        "pro",
        "tratamiento",
        "NIC 2–3: LEEP o conización · Cáncer: cirugía, radio y/o quimioterapia"
      ],
      [
        "fin",
        "prevencion",
        "Vacuna tetravalente (9–13 años) · co-test de 30 a 65 años · Complicación: cáncer invasor"
      ]
    ]
  },
  {
    "id": "condiloma",
    "area": "virus",
    "tema": "VPH",
    "caso": "Varón de 24 años con lesiones múltiples, blandas, húmedas y exofíticas en la región genital y perianal desde hace 2 meses. Tiene varias parejas sexuales.",
    "clave": {
      "sintomas": "Lesiones exofíticas, húmedas, blandas y múltiples (verrugas), generalmente indoloras.",
      "zona": "Piel y mucosa genital y perianal (epitelio escamoso, capa basal).",
      "enfermedad": "Condiloma acuminado (verrugas genitales) por VPH de bajo riesgo 6 y 11.",
      "patogenia": "VPH de bajo riesgo entra por microlesiones a la capa basal; su ADN queda como episoma (no se integra). E6 y E7 tienen poca afinidad por p53 y Rb: solo hay proliferación epitelial leve (hiperplasia, acantosis, coilocitosis), sin transformación maligna. Se libera sin lisis en las capas superficiales.",
      "diagnostico": "Clínico; PCR de VPH con genotipificación si hace falta; en citología, coilocitos.",
      "tratamiento": "Se trata la lesión, no el virus: imiquimod, podofilina o podofilotoxina, ácido tricloroacético, crioterapia, electrocauterio o láser.",
      "prevencion": "Vacuna tetravalente (cubre 6 y 11), preservativo (protección parcial: el contagio es piel a piel). Complicaciones: recurrencia, contagio a parejas aun sin lesiones visibles, y en el parto, papilomatosis laríngea del recién nacido."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "VPH 6/11 por contacto sexual piel a piel"
      ],
      [
        "pro",
        "zona",
        "Capa basal de piel y mucosa genital y perianal"
      ],
      [
        "pro",
        "patogenia",
        "ADN queda como episoma (no se integra)"
      ],
      [
        "pro",
        "patogenia",
        "E6/E7 débiles con p53 y Rb → solo hiperplasia (coilocitos)"
      ],
      [
        "pro",
        "sintomas",
        "Verrugas exofíticas, húmedas, blandas, múltiples"
      ],
      [
        "pro",
        "enfermedad",
        "Condiloma acuminado"
      ],
      [
        "pro",
        "diagnostico",
        "Clínico ± PCR con genotipificación · citología: coilocitos"
      ],
      [
        "pro",
        "tratamiento",
        "Tratar la lesión: imiquimod, podofilotoxina, ácido tricloroacético, crioterapia"
      ],
      [
        "fin",
        "prevencion",
        "Vacuna tetravalente, preservativo · Recurrencia, contagio sin lesiones, papilomatosis laríngea en el recién nacido"
      ]
    ]
  },
  {
    "id": "ham-tsp",
    "area": "virus",
    "tema": "HTLV",
    "caso": "Mujer de 45 años de la Amazonía peruana, amamantada por su madre hasta los 2 años. Desde hace 3 años tiene debilidad progresiva de ambas piernas, hiperreflexia, Babinski positivo, dolor lumbar y urgencia urinaria.",
    "clave": {
      "sintomas": "Paraparesia espástica progresiva de miembros inferiores, hiperreflexia, clonus, Babinski positivo, hormigueo o ardor en piernas, dolor lumbar, disfunción urinaria (polaquiuria, urgencia, incontinencia).",
      "zona": "Médula espinal: cordones laterales y anteriores (atrofia de médula dorsal).",
      "enfermedad": "Paraparesia espástica tropical o mielopatía asociada a HTLV-1 (HAM/TSP).",
      "patogenia": "HTLV-1 (Deltaretrovirus, ARN +, Baltimore VI) transmitido por linfocitos infectados en la leche. Infecta CD4+ y se integra. Los CD4 infectados entran al SNC y la respuesta inmune citotóxica crónica desmieliniza la médula. El virus no infecta las neuronas. Afecta a menos del 1 % de los infectados.",
      "diagnostico": "ELISA de anticuerpos anti-HTLV (tamizaje), Western blot (diferencia HTLV-1 de HTLV-2), PCR del ADN proviral (pol, tax, gag) y carga proviral.",
      "tratamiento": "No curativo: corticoides (prednisona), interferón α o β, azatioprina o plasmaféresis en algunos casos; rehabilitación física y control de esfínteres.",
      "prevencion": "Tamizaje prenatal y evitar o acortar la lactancia en madres positivas; tamizaje en bancos de sangre; preservativo; no compartir agujas. Curso crónico e irreversible. Perú es endémico."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "HTLV-1 por lactancia (linfocitos infectados en la leche)"
      ],
      [
        "pro",
        "patogenia",
        "Infecta linfocitos T CD4+ e integra su ADN (provirus)"
      ],
      [
        "dec",
        "patogenia",
        "¿Enferma después de años?",
        "La mayoría queda como portador asintomático"
      ],
      [
        "pro",
        "patogenia",
        "CD4 infectados entran al SNC → respuesta citotóxica → desmielinización"
      ],
      [
        "pro",
        "zona",
        "Médula espinal: cordones laterales y anteriores"
      ],
      [
        "pro",
        "sintomas",
        "Paraparesia espástica, hiperreflexia, Babinski, dolor lumbar, urgencia urinaria"
      ],
      [
        "pro",
        "enfermedad",
        "HAM/TSP (paraparesia espástica tropical)"
      ],
      [
        "pro",
        "diagnostico",
        "ELISA anti-HTLV → Western blot (HTLV-1 vs 2) → PCR proviral"
      ],
      [
        "pro",
        "tratamiento",
        "No curativo: corticoides, interferón, rehabilitación"
      ],
      [
        "fin",
        "prevencion",
        "Tamizaje prenatal, limitar lactancia, tamizaje en bancos de sangre · Curso crónico e irreversible"
      ]
    ]
  },
  {
    "id": "atll",
    "area": "virus",
    "tema": "HTLV",
    "caso": "Varón de 55 años, de padres de la costa norte del Perú. Fiebre, adenopatías generalizadas, hepatoesplenomegalia y lesiones en la piel. Laboratorio: leucocitosis con linfocitos de núcleo multilobulado e hipercalcemia.",
    "clave": {
      "sintomas": "Fiebre, adenomegalias generalizadas, hepatomegalia, esplenomegalia, lesiones cutáneas (pápulas, placas, nódulos), síntomas de hipercalcemia.",
      "zona": "Linfocitos T CD4+ en sangre, ganglios, hígado, bazo, piel y hueso (osteólisis).",
      "enfermedad": "Leucemia/linfoma de células T del adulto (ATLL), forma aguda, por HTLV-1.",
      "patogenia": "HTLV-1 adquirido (sobre todo por lactancia) infecta CD4+ y se integra. No destruye la célula: Tax y HBZ estimulan la proliferación y evitan la apoptosis; con mutaciones acumuladas hay expansión clonal y transformación maligna tras 20–40 años (menos del 5 % de infectados). La hipercalcemia se debe a osteólisis por IL-1 y sustancia parecida a PTH.",
      "diagnostico": "Sangre periférica: células en flor (núcleo multilobulado). Anticuerpos anti-HTLV-1 (ELISA, Western blot), alta carga proviral por PCR. Calcio elevado.",
      "tratamiento": "Quimioterapia combinada (CHOP; en Japón VCAP-AMP-VECP), zidovudina + interferón α, trasplante de médula ósea en casos seleccionados.",
      "prevencion": "Tamizaje prenatal y limitar la lactancia en madres positivas, tamizaje en bancos de sangre. Pronóstico muy malo en la forma aguda (supervivencia menor de 1 año); infecciones oportunistas por inmunosupresión."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "HTLV-1 (sobre todo por lactancia) infecta CD4+ y se integra"
      ],
      [
        "pro",
        "patogenia",
        "Tax y HBZ: estimulan proliferación y evitan apoptosis"
      ],
      [
        "dec",
        "patogenia",
        "¿Mutaciones acumuladas tras 20–40 años?",
        "Más del 95 % queda como portador"
      ],
      [
        "pro",
        "patogenia",
        "Expansión clonal → transformación maligna del CD4"
      ],
      [
        "pro",
        "zona",
        "Sangre, ganglios, hígado, bazo, piel y hueso"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre, adenopatías, hepatoesplenomegalia, lesiones en la piel"
      ],
      [
        "pro",
        "enfermedad",
        "Leucemia/linfoma T del adulto (ATLL), forma aguda"
      ],
      [
        "pro",
        "diagnostico",
        "Células en flor + hipercalcemia + anti-HTLV-1 + carga proviral"
      ],
      [
        "pro",
        "tratamiento",
        "CHOP · zidovudina + interferón α · trasplante de médula"
      ],
      [
        "fin",
        "prevencion",
        "Tamizaje prenatal y en bancos de sangre · Pronóstico: menos de 1 año"
      ]
    ]
  },
  {
    "id": "sarampion",
    "area": "virus",
    "tema": "Dermatotrópicos",
    "caso": "Niño de 3 años sin vacunas. Fiebre alta, tos, coriza y conjuntivitis desde hace 3 días; puntos blancos en la mucosa oral. Hoy aparece un exantema que empezó en la cara y está bajando.",
    "clave": {
      "sintomas": "Pródromo con fiebre alta, tos, coriza y conjuntivitis; manchas de Koplik; exantema máculo-papular que inicia en la cara y desciende, poco pruriginoso, con todas las lesiones en el mismo estadio.",
      "zona": "Vía respiratoria (entrada y replicación), mucosa oral y piel; puede comprometer pulmón y sistema nervioso.",
      "enfermedad": "Sarampión.",
      "patogenia": "Paramyxovirus de ARN de sentido negativo (Baltimore V), trae su propia ARN polimerasa. Muy contagioso por vía respiratoria: replicación local, diseminación sistémica y tropismo por piel y mucosas. Forma células gigantes multinucleadas.",
      "diagnostico": "Clínico (Koplik + exantema céfalo-caudal). En casos dudosos o graves: PCR, serología IgM; en tejido, células gigantes multinucleadas.",
      "tratamiento": "Sintomático.",
      "prevencion": "Vacuna (triple viral). Inmunidad permanente tras la infección. Complicaciones: neumonía, encefalitis y panencefalitis esclerosante subaguda (SSPE)."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Niño no vacunado inhala gotas respiratorias"
      ],
      [
        "pro",
        "patogenia",
        "Paramyxovirus ARN (−): replica en vía respiratoria → diseminación"
      ],
      [
        "pro",
        "zona",
        "Vía respiratoria, mucosa oral y piel"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre alta, tos, coriza, conjuntivitis → Koplik → exantema de la cara hacia abajo"
      ],
      [
        "pro",
        "enfermedad",
        "Sarampión"
      ],
      [
        "pro",
        "diagnostico",
        "Clínico · PCR o IgM si hay duda · células gigantes multinucleadas"
      ],
      [
        "pro",
        "tratamiento",
        "Sintomático"
      ],
      [
        "fin",
        "prevencion",
        "Vacuna (triple viral) · Complicaciones: neumonía, encefalitis, SSPE"
      ]
    ]
  },
  {
    "id": "varicela",
    "area": "virus",
    "tema": "Dermatotrópicos",
    "caso": "Niña de 5 años con fiebre leve y malestar. Al día siguiente aparecen vesículas muy pruriginosas que empezaron en el tronco; hoy hay pápulas, vesículas y costras al mismo tiempo. Un compañero del colegio tuvo algo parecido.",
    "clave": {
      "sintomas": "Pródromo con fiebre leve y malestar; vesículas «gota de rocío» muy pruriginosas, que empiezan en el tronco y se diseminan, en distintos estadios a la vez.",
      "zona": "Piel y mucosas; entra por vía respiratoria.",
      "enfermedad": "Varicela por virus varicela-zóster.",
      "patogenia": "Herpesviridae, ADN doble cadena (Baltimore I), replica en el núcleo. Se transmite por vía respiratoria y por contacto con las lesiones; replicación local, viremia y llegada a la piel. Queda latente y puede reactivarse años después como herpes zóster.",
      "diagnostico": "Clínico (lesiones en distintos estadios); en casos graves PCR o inmunofluorescencia.",
      "tratamiento": "Aciclovir o valaciclovir (análogos de nucleósido activados por la timidina quinasa viral) y manejo del prurito.",
      "prevencion": "Vacuna; aislamiento. Complicaciones: sobreinfección bacteriana de las lesiones, neumonía; reactivación como herpes zóster."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Contagio respiratorio o por contacto con las vesículas"
      ],
      [
        "pro",
        "patogenia",
        "Virus varicela-zóster (herpesvirus, ADN ds): viremia → piel; queda latente"
      ],
      [
        "pro",
        "zona",
        "Piel y mucosas"
      ],
      [
        "pro",
        "sintomas",
        "Vesículas pruriginosas desde el tronco, en distintos estadios"
      ],
      [
        "pro",
        "enfermedad",
        "Varicela"
      ],
      [
        "pro",
        "diagnostico",
        "Clínico · PCR o inmunofluorescencia si es grave"
      ],
      [
        "pro",
        "tratamiento",
        "Aciclovir o valaciclovir + manejo del prurito"
      ],
      [
        "fin",
        "prevencion",
        "Vacuna · Sobreinfección, neumonía · Reactivación como herpes zóster"
      ]
    ]
  },
  {
    "id": "rotavirus",
    "area": "virus",
    "tema": "Entéricos",
    "caso": "Lactante de 9 meses que va a guardería. Diarrea acuosa abundante, vómitos y fiebre desde hace 2 días. Está irritable, con mucosas secas y llanto sin lágrimas.",
    "clave": {
      "sintomas": "Diarrea acuosa, vómitos, fiebre, dolor abdominal y signos de deshidratación (mucosas secas, llanto sin lágrimas).",
      "zona": "Tracto gastrointestinal (intestino delgado).",
      "enfermedad": "Gastroenteritis aguda por rotavirus, con deshidratación.",
      "patogenia": "Reoviridae, ARN doble cadena (Baltimore III), sin envoltura: muy resistente en el ambiente. Transmisión fecal-oral (agua, alimentos, superficies, contacto). Replicación local en el intestino (infección local, sin diseminación sistémica).",
      "diagnostico": "Clínico; prueba rápida de antígeno o PCR en heces.",
      "tratamiento": "Rehidratación oral o intravenosa; no se usan antibióticos.",
      "prevencion": "Vacuna contra el rotavirus, lavado de manos, agua y alimentos seguros. Complicación principal: deshidratación grave en lactantes."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Fecal-oral en la guardería (manos, agua, superficies)"
      ],
      [
        "pro",
        "patogenia",
        "Reovirus ARN ds sin envoltura (muy resistente): replica en el intestino"
      ],
      [
        "pro",
        "zona",
        "Intestino delgado"
      ],
      [
        "pro",
        "sintomas",
        "Diarrea acuosa, vómitos, fiebre"
      ],
      [
        "pro",
        "enfermedad",
        "Gastroenteritis aguda por rotavirus"
      ],
      [
        "dec",
        "diagnostico",
        "¿Signos de deshidratación?",
        "Hidratación oral y vigilancia"
      ],
      [
        "pro",
        "diagnostico",
        "Prueba rápida de antígeno o PCR en heces"
      ],
      [
        "pro",
        "tratamiento",
        "Rehidratación oral o IV · sin antibióticos"
      ],
      [
        "fin",
        "prevencion",
        "Vacuna contra rotavirus, lavado de manos · Complicación: deshidratación grave"
      ]
    ]
  },
  {
    "id": "encefalitis-herpetica",
    "area": "virus",
    "tema": "Neurotrópicos",
    "caso": "Mujer de 35 años con 3 días de fiebre y cefalea; hoy está confusa, con alteraciones de conducta y una convulsión. El LCR muestra linfocitos y la resonancia, compromiso del lóbulo temporal.",
    "clave": {
      "sintomas": "Fiebre, cefalea, confusión, alteración de conducta, convulsiones.",
      "zona": "Sistema nervioso central: lóbulo temporal (encéfalo).",
      "enfermedad": "Encefalitis por virus herpes simple.",
      "patogenia": "Herpesviridae, ADN doble cadena (Baltimore I). Neuroinvasión (llega al SNC) y neurovirulencia (causa daño). Latencia y reactivación. Efecto citopático con cuerpos de inclusión de Cowdry.",
      "diagnostico": "LCR con linfocitos (pensar viral); PCR en LCR es el gold standard; neuroimagen con compromiso temporal.",
      "tratamiento": "Aciclovir intravenoso (análogo de nucleósido activado por la timidina quinasa viral), con hidratación y vigilancia de la función renal (puede precipitar en los túbulos), y soporte intensivo.",
      "prevencion": "Inicio temprano del aciclovir. Complicaciones: secuelas neurológicas, epilepsia, muerte; insuficiencia renal por aciclovir."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Virus herpes simple (latente) llega al SNC"
      ],
      [
        "pro",
        "patogenia",
        "Neuroinvasión + neurovirulencia · inclusiones de Cowdry"
      ],
      [
        "pro",
        "zona",
        "Encéfalo: lóbulo temporal"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre, cefalea, confusión, alteración de conducta, convulsiones"
      ],
      [
        "pro",
        "enfermedad",
        "Encefalitis herpética"
      ],
      [
        "dec",
        "diagnostico",
        "LCR: ¿predominan linfocitos?",
        "Considerar otra causa"
      ],
      [
        "pro",
        "diagnostico",
        "Pensar viral → PCR en LCR (gold standard) + resonancia"
      ],
      [
        "pro",
        "tratamiento",
        "Aciclovir IV + hidratación (vigilar riñón) + soporte"
      ],
      [
        "fin",
        "prevencion",
        "Aciclovir temprano · Secuelas neurológicas, epilepsia, muerte"
      ]
    ]
  },
  {
    "id": "dengue",
    "area": "virus",
    "tema": "Hemorrágicos",
    "caso": "Adolescente de 16 años de Piura, en temporada de lluvias. Fiebre alta, cefalea, mialgias y malestar desde hace 4 días; ahora tiene petequias, sangrado de encías, dolor abdominal y presión baja. Tuvo dengue hace 2 años.",
    "clave": {
      "sintomas": "Fiebre alta de inicio agudo, cefalea, mialgias, malestar; luego petequias, equimosis, sangrados y signos de aumento de permeabilidad vascular; shock.",
      "zona": "Endotelio vascular (sistémico), sangre (plaquetas), con compromiso de órganos por shock.",
      "enfermedad": "Dengue grave (fiebre hemorrágica con shock) por una segunda infección con otro serotipo.",
      "patogenia": "Flavivirus de ARN de sentido positivo (Baltimore IV), transmitido por mosquito. Daño endotelial y aumento de la permeabilidad vascular. El daño es sobre todo inmunopatológico: en una segunda infección los anticuerpos no neutralizantes facilitan la entrada del virus a los monocitos (potenciación dependiente de anticuerpos).",
      "diagnostico": "PCR (de elección en fase aguda), antígeno NS1, serología IgM/IgG.",
      "tratamiento": "Reposición de líquidos, manejo del shock y soporte en UCI. No hay antiviral específico.",
      "prevencion": "Control vectorial (mosquito), evitar picaduras. Complicación principal: shock; hemorragias graves, falla multiorgánica."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Picadura de mosquito: segunda infección, otro serotipo"
      ],
      [
        "pro",
        "patogenia",
        "Anticuerpos no neutralizantes facilitan la entrada a monocitos"
      ],
      [
        "pro",
        "patogenia",
        "Daño endotelial → aumenta la permeabilidad vascular"
      ],
      [
        "pro",
        "zona",
        "Endotelio vascular (todo el cuerpo) y plaquetas"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre alta, cefalea, mialgias → petequias, sangrados, dolor abdominal, hipotensión"
      ],
      [
        "pro",
        "enfermedad",
        "Dengue grave con shock"
      ],
      [
        "pro",
        "diagnostico",
        "PCR (fase aguda), antígeno NS1, IgM/IgG"
      ],
      [
        "pro",
        "tratamiento",
        "Reposición de líquidos, manejo del shock, UCI"
      ],
      [
        "fin",
        "prevencion",
        "Control vectorial · Complicaciones: shock, hemorragias, falla multiorgánica"
      ]
    ]
  },
  {
    "id": "muguet",
    "area": "hongos",
    "tema": "Levaduras",
    "caso": "Varón de 32 años con VIH sin tratamiento. Desde hace una semana tiene ardor en la boca y placas blancas en la lengua y el paladar que se desprenden al rasparlas y dejan la base roja.",
    "clave": {
      "sintomas": "Placas blancas en lengua, paladar y mucosa oral que se desprenden y dejan base roja; ardor o dolor al comer.",
      "zona": "Mucosa oral (orofaringe).",
      "enfermedad": "Candidiasis oral (muguet) por Candida albicans, favorecida por la inmunosupresión del VIH.",
      "patogenia": "Candida albicans es una levadura de la flora normal. Con inmunosupresión (VIH, CD4 bajos), antibióticos o corticoides prolifera, forma pseudohifas y coloniza la mucosa formando las placas.",
      "diagnostico": "Clínico; examen directo (KOH o Gram): levaduras con pseudohifas. Cultivo en Sabouraud. Tubo germinal positivo a las 2–3 horas a 37 °C; en agar harina de maíz, clamidoconidias (solo C. albicans).",
      "tratamiento": "Nistatina oral en suspensión; tratar la causa (iniciar TARV en el VIH).",
      "prevencion": "Controlar la inmunosupresión (TARV), evitar antibióticos o corticoides innecesarios. Complicaciones: candidiasis esofágica (definitoria de SIDA) y diseminación."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Candida albicans: levadura de la flora normal"
      ],
      [
        "dec",
        "patogenia",
        "¿Hay inmunosupresión (VIH, CD4 bajos), antibióticos o corticoides?",
        "No → sigue como flora, sin enfermedad"
      ],
      [
        "pro",
        "patogenia",
        "Prolifera y forma pseudohifas en la mucosa"
      ],
      [
        "pro",
        "zona",
        "Mucosa oral (orofaringe)"
      ],
      [
        "pro",
        "sintomas",
        "Placas blancas que se desprenden y dejan base roja; ardor"
      ],
      [
        "pro",
        "enfermedad",
        "Candidiasis oral (muguet)"
      ],
      [
        "pro",
        "diagnostico",
        "Examen directo: levaduras + pseudohifas · Sabouraud · tubo germinal +"
      ],
      [
        "pro",
        "tratamiento",
        "Nistatina oral en suspensión + tratar la causa (TARV)"
      ],
      [
        "fin",
        "prevencion",
        "Controlar la inmunosupresión · Complicación: candidiasis esofágica (SIDA), diseminación"
      ]
    ]
  },
  {
    "id": "candidemia",
    "area": "hongos",
    "tema": "Levaduras",
    "caso": "Mujer de 60 años en UCI con catéter venoso central desde hace 2 semanas, recibiendo antibióticos de amplio espectro. Tiene fiebre que no baja con los antibióticos. En el hemocultivo crecen levaduras.",
    "clave": {
      "sintomas": "Fiebre persistente que no responde a antibióticos; puede haber hipotensión o shock.",
      "zona": "Sangre (fungemia), a partir del catéter venoso central; puede sembrar otros órganos.",
      "enfermedad": "Candidemia asociada a catéter (candidiasis invasiva).",
      "patogenia": "Los antibióticos de amplio espectro eliminan la flora bacteriana y Candida prolifera; el catéter es la puerta de entrada y se cubre de levaduras, que pasan a la sangre.",
      "diagnostico": "Hemocultivo con levaduras. Identificación: tubo germinal (positivo en C. albicans), agar harina de maíz (clamidoconidias). Importa la especie: C. glabrata tolera mal los azoles y C. krusei resiste el fluconazol.",
      "tratamiento": "Equinocandina y retirar el catéter.",
      "prevencion": "Retirar catéteres que no se usan, usar antibióticos solo cuando hacen falta. Complicaciones: siembra en otros órganos, shock, muerte. Si la levadura es Rhodotorula, las equinocandinas no sirven (anfotericina B)."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Antibióticos de amplio espectro + catéter venoso central"
      ],
      [
        "pro",
        "patogenia",
        "Candida prolifera y coloniza el catéter → pasa a la sangre"
      ],
      [
        "pro",
        "zona",
        "Sangre (fungemia) desde el catéter"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre que no baja con antibióticos"
      ],
      [
        "pro",
        "enfermedad",
        "Candidemia asociada a catéter"
      ],
      [
        "pro",
        "diagnostico",
        "Hemocultivo: levaduras → identificar la especie (tubo germinal, harina de maíz)"
      ],
      [
        "dec",
        "diagnostico",
        "¿Es Candida?",
        "Rhodotorula (rosada, tubo germinal −) → retirar catéter + anfotericina B"
      ],
      [
        "pro",
        "tratamiento",
        "Equinocandina + retirar el catéter"
      ],
      [
        "fin",
        "prevencion",
        "Retirar catéteres innecesarios, uso racional de antibióticos · Complicaciones: siembra en órganos, shock"
      ]
    ]
  },
  {
    "id": "aspergilosis",
    "area": "hongos",
    "tema": "Mohos hialinos",
    "caso": "Paciente de 45 años con leucemia, neutropénico tras quimioterapia. Fiebre persistente, tos y dolor torácico. La TAC muestra un nódulo pulmonar con signo del halo y el galactomanano es positivo.",
    "clave": {
      "sintomas": "Fiebre persistente pese a antibióticos, tos, dolor torácico (puede haber hemoptisis).",
      "zona": "Pulmón.",
      "enfermedad": "Aspergilosis pulmonar invasiva por Aspergillus fumigatus.",
      "patogenia": "Se inhalan los conidios del ambiente. En el neutropénico no se eliminan: germinan en hifas hialinas septadas que invaden el tejido pulmonar.",
      "diagnostico": "TAC con signo del halo; galactomanano positivo. Cultivo en Sabouraud: colonia blanca que se vuelve verde azulada; microscopio: hifas hialinas septadas con conidióforo, vesícula y fiálides uniseriadas (cabeza aspergilar). Crece hasta 50 °C.",
      "tratamiento": "Voriconazol.",
      "prevencion": "Proteger al neutropénico de la exposición a conidios. Complicaciones: diseminación, hemoptisis, muerte. La resistencia a azoles se asocia a mutaciones en cyp51A; A. terreus resiste la anfotericina B."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Inhalación de conidios de Aspergillus fumigatus"
      ],
      [
        "dec",
        "patogenia",
        "¿El paciente es neutropénico?",
        "No → los conidios se eliminan (en asmáticos: ABPA; en cavernas: aspergiloma)"
      ],
      [
        "pro",
        "patogenia",
        "Conidios germinan → hifas hialinas septadas que invaden el tejido"
      ],
      [
        "pro",
        "zona",
        "Pulmón"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre persistente, tos, dolor torácico"
      ],
      [
        "pro",
        "enfermedad",
        "Aspergilosis pulmonar invasiva"
      ],
      [
        "pro",
        "diagnostico",
        "TAC: signo del halo · galactomanano + · cultivo: cabeza aspergilar"
      ],
      [
        "pro",
        "tratamiento",
        "Voriconazol"
      ],
      [
        "fin",
        "prevencion",
        "Proteger al neutropénico de los conidios · Complicaciones: diseminación, hemoptisis"
      ]
    ]
  },
  {
    "id": "mucormicosis",
    "area": "hongos",
    "tema": "Mucorales",
    "caso": "Varón de 58 años con diabetes mal controlada, ingresa en cetoacidosis. Tiene dolor facial, congestión nasal, fiebre y una escara negra en el paladar. En los días siguientes aparece edema periorbitario.",
    "clave": {
      "sintomas": "Dolor facial, congestión nasal, fiebre, escara negra en paladar o cornetes; luego compromiso de la órbita y alteración neurológica.",
      "zona": "Senos paranasales, paladar, órbita y cerebro (forma rinocerebral).",
      "enfermedad": "Mucormicosis rinocerebral por Rhizopus (mucorales).",
      "patogenia": "Se inhalan las esporas. La cetoacidosis libera hierro, que el hongo aprovecha (la deferoxamina también le entrega hierro). Las hifas invaden y necrosan el tejido, por eso la escara negra.",
      "diagnostico": "Biopsia o cultivo: hifas anchas no septadas en cinta, ramificadas en ángulo recto; en cultivo, colonia algodonosa blanca con puntos negros (esporangios) y rizoides. En la forma pulmonar, TAC con halo invertido.",
      "tratamiento": "Anfotericina B liposomal + desbridamiento quirúrgico urgente + corregir la cetoacidosis.",
      "prevencion": "Control de la diabetes. El voriconazol no cubre mucorales. Complicaciones: invasión de órbita y cerebro, muerte."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Inhalación de esporas de Rhizopus"
      ],
      [
        "pro",
        "patogenia",
        "Cetoacidosis libera hierro → el hongo crece"
      ],
      [
        "pro",
        "patogenia",
        "Hifas anchas no septadas invaden y necrosan el tejido"
      ],
      [
        "pro",
        "zona",
        "Senos paranasales y paladar → órbita → cerebro"
      ],
      [
        "pro",
        "sintomas",
        "Dolor facial, congestión, fiebre, escara negra en el paladar"
      ],
      [
        "pro",
        "enfermedad",
        "Mucormicosis rinocerebral"
      ],
      [
        "pro",
        "diagnostico",
        "Biopsia/cultivo: hifas anchas no septadas, esporangios y rizoides"
      ],
      [
        "dec",
        "diagnostico",
        "¿Son hifas anchas no septadas (mucoral)?",
        "No → otro moho (p. ej. Aspergillus: voriconazol)"
      ],
      [
        "pro",
        "tratamiento",
        "Anfotericina B liposomal + desbridamiento urgente + corregir cetoacidosis (el voriconazol no cubre mucorales)"
      ],
      [
        "fin",
        "prevencion",
        "Control de la diabetes · Complicaciones: invasión de órbita y cerebro, muerte"
      ]
    ]
  },
  {
    "id": "queratitis-fusarium",
    "area": "hongos",
    "tema": "Mohos hialinos",
    "caso": "Agricultor de 40 años que sufrió un golpe en el ojo con una rama hace 10 días. Tiene dolor, ojo rojo y visión borrosa. En la córnea hay una úlcera de bordes plumosos con hipopión.",
    "clave": {
      "sintomas": "Dolor ocular, ojo rojo, visión borrosa; úlcera corneal de bordes plumosos con hipopión.",
      "zona": "Córnea (ojo).",
      "enfermedad": "Queratitis fúngica por Fusarium.",
      "patogenia": "Trauma vegetal (o lentes de contacto) que inocula el hongo del ambiente en la córnea; las hifas hialinas septadas invaden el estroma.",
      "diagnostico": "Raspado corneal: hifas hialinas septadas. Cultivo en Sabouraud: crecimiento rápido, colonia algodonosa blanca, rosada o púrpura; microscopio: macroconidias en canoa o media luna, multiseptadas, de pared delgada y lisa.",
      "tratamiento": "Natamicina tópica (alternativa: voriconazol).",
      "prevencion": "Protección ocular en el campo, higiene de lentes de contacto. Complicaciones: perforación corneal, pérdida de visión; en neutropénicos, fusariosis diseminada (voriconazol con o sin anfotericina B)."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Trauma vegetal en el ojo (o lentes de contacto)"
      ],
      [
        "pro",
        "patogenia",
        "Inoculación de Fusarium → hifas invaden el estroma corneal"
      ],
      [
        "pro",
        "zona",
        "Córnea"
      ],
      [
        "pro",
        "sintomas",
        "Dolor, ojo rojo, visión borrosa; úlcera de bordes plumosos con hipopión"
      ],
      [
        "pro",
        "enfermedad",
        "Queratitis por Fusarium"
      ],
      [
        "pro",
        "diagnostico",
        "Raspado corneal + Sabouraud: macroconidias en canoa, multiseptadas"
      ],
      [
        "pro",
        "tratamiento",
        "Natamicina tópica (alternativa: voriconazol)"
      ],
      [
        "fin",
        "prevencion",
        "Protección ocular · Complicaciones: perforación, pérdida de visión; diseminada en neutropénicos"
      ]
    ]
  },
  {
    "id": "tinea-capitis",
    "area": "hongos",
    "tema": "Dermatofitos",
    "caso": "Niño de 7 años que tiene un gato. Desde hace un mes tiene placas redondas sin pelo en el cuero cabelludo, con descamación y picazón. Con la lámpara de Wood las placas brillan.",
    "clave": {
      "sintomas": "Placas de alopecia redondas con descamación y prurito; si se inflama mucho, querion.",
      "zona": "Cuero cabelludo y pelo (piel queratinizada).",
      "enfermedad": "Tinea capitis por Microsporum canis (dermatofito zoofílico).",
      "patogenia": "Contagio desde el gato o perro (zoofílico). El dermatofito se alimenta de queratina e invade el pelo y la capa córnea.",
      "diagnostico": "Lámpara de Wood positiva; examen directo con KOH del pelo; cultivo en Sabouraud: macroconidios en huso de pared gruesa y rugosa, con muchos tabiques.",
      "tratamiento": "Griseofulvina oral (no basta el tópico en el cuero cabelludo); revisar y tratar a la mascota.",
      "prevencion": "Tratar a la mascota, no compartir peines ni gorras. Complicación: querion, que no se trata solo con tópico ni se drena como absceso; alopecia cicatricial."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Contacto con gato o perro infectado"
      ],
      [
        "pro",
        "patogenia",
        "Microsporum canis (zoofílico) invade el pelo: se alimenta de queratina"
      ],
      [
        "pro",
        "zona",
        "Cuero cabelludo y pelo"
      ],
      [
        "pro",
        "sintomas",
        "Placas sin pelo, con descamación y picazón"
      ],
      [
        "pro",
        "enfermedad",
        "Tinea capitis por Microsporum canis"
      ],
      [
        "pro",
        "diagnostico",
        "Lámpara de Wood + · KOH · Sabouraud: macroconidios en huso, pared gruesa y rugosa"
      ],
      [
        "dec",
        "tratamiento",
        "¿Compromete el pelo?",
        "No (solo piel) → puede bastar un antifúngico tópico"
      ],
      [
        "pro",
        "tratamiento",
        "Griseofulvina oral (el tópico no basta) + revisar a la mascota"
      ],
      [
        "fin",
        "prevencion",
        "Tratar a la mascota, no compartir peines · Complicación: querion (no drenarlo)"
      ]
    ]
  },
  {
    "id": "onicomicosis",
    "area": "hongos",
    "tema": "Dermatofitos",
    "caso": "Mujer de 50 años con pie de atleta crónico. Las uñas del dedo gordo de ambos pies están engrosadas, amarillentas y se desmoronan. Usa calzado cerrado todo el día.",
    "clave": {
      "sintomas": "Uñas engrosadas, amarillentas, quebradizas; descamación y picazón entre los dedos (tinea pedis crónica).",
      "zona": "Uñas y piel de los pies.",
      "enfermedad": "Onicomicosis y tinea pedis por Trichophyton rubrum.",
      "patogenia": "Dermatofito antropofílico que se contagia en pisos húmedos (duchas, piscinas); invade la queratina de la piel y la uña, favorecido por humedad y calzado cerrado.",
      "diagnostico": "KOH de la uña: hifas septadas; cultivo en Sabouraud: colonia blanca con reverso rojo vinoso; microscopio: hifas delgadas con pocos conidios, microconidios en lágrima pegados a la hifa.",
      "tratamiento": "Terbinafina oral por 12 semanas, más tratamiento tópico en la piel.",
      "prevencion": "Pies secos, calzado ventilado, sandalias en duchas públicas. Complicaciones: recurrencia, dolor, sobreinfección bacteriana."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Contagio en pisos húmedos (duchas, piscinas)"
      ],
      [
        "pro",
        "patogenia",
        "Trichophyton rubrum invade la queratina (humedad + calzado cerrado)"
      ],
      [
        "pro",
        "zona",
        "Piel de los pies → uñas"
      ],
      [
        "pro",
        "sintomas",
        "Uñas engrosadas y amarillas; descamación entre los dedos"
      ],
      [
        "pro",
        "enfermedad",
        "Onicomicosis + tinea pedis por T. rubrum"
      ],
      [
        "pro",
        "diagnostico",
        "KOH: hifas septadas · Sabouraud: reverso rojo vinoso"
      ],
      [
        "pro",
        "tratamiento",
        "Terbinafina oral 12 semanas + tópico en la piel"
      ],
      [
        "fin",
        "prevencion",
        "Pies secos, calzado ventilado · Complicación: recurrencia"
      ]
    ]
  },
  {
    "id": "esporotricosis",
    "area": "hongos",
    "tema": "Dimórficos",
    "caso": "Jardinero de 45 años que se pinchó con un rosal hace un mes. En el dorso de la mano tiene un nódulo que se ulceró, y ahora aparecen otros nódulos en cadena que suben por el antebrazo.",
    "clave": {
      "sintomas": "Nódulo en el sitio del pinchazo que se ulcera; nódulos en cadena que siguen el trayecto linfático.",
      "zona": "Piel y tejido subcutáneo, y vasos linfáticos del miembro.",
      "enfermedad": "Esporotricosis linfocutánea por Sporothrix schenckii.",
      "patogenia": "Hongo dimórfico de inoculación: entra por pinchazo con rosal o madera. En el ambiente (25 °C) es moho; en el cuerpo (37 °C) se vuelve levadura y avanza por los linfáticos.",
      "diagnostico": "Cultivo a 25 °C: hifas delgadas septadas con conidios en margarita o roseta. En tejido (37 °C): levaduras en forma de puro.",
      "tratamiento": "Itraconazol por 3 a 6 meses (alternativa: yoduro de potasio).",
      "prevencion": "Guantes al manipular plantas y madera. Complicaciones: diseminación en inmunodeprimidos, cronicidad."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Pinchazo con rosal o madera"
      ],
      [
        "pro",
        "patogenia",
        "Inoculación de Sporothrix (moho a 25 °C → levadura a 37 °C)"
      ],
      [
        "pro",
        "zona",
        "Piel, subcutáneo y linfáticos del miembro"
      ],
      [
        "pro",
        "sintomas",
        "Nódulo que se ulcera + nódulos en cadena por los linfáticos"
      ],
      [
        "pro",
        "enfermedad",
        "Esporotricosis linfocutánea"
      ],
      [
        "pro",
        "diagnostico",
        "Cultivo 25 °C: conidios en margarita · tejido: levaduras en puro"
      ],
      [
        "pro",
        "tratamiento",
        "Itraconazol 3–6 meses (alternativa: yoduro de potasio)"
      ],
      [
        "fin",
        "prevencion",
        "Guantes con plantas y madera · Complicación: diseminación en inmunodeprimidos"
      ]
    ]
  },
  {
    "id": "histoplasmosis",
    "area": "hongos",
    "tema": "Dimórficos",
    "caso": "Varón de 35 años con VIH y CD4 bajos. Hace un mes visitó cuevas con murciélagos en Tingo María. Tiene fiebre, baja de peso, hepatoesplenomegalia y pancitopenia.",
    "clave": {
      "sintomas": "Fiebre, baja de peso, hepatoesplenomegalia, pancitopenia (forma diseminada).",
      "zona": "Pulmón (entrada) y sistema reticuloendotelial: hígado, bazo, médula ósea (macrófagos).",
      "enfermedad": "Histoplasmosis diseminada por Histoplasma capsulatum, en paciente con VIH.",
      "patogenia": "Se inhalan los conidios de suelos con guano de murciélagos (cuevas). Es dimórfico: a 37 °C se vuelve levadura que vive dentro de los macrófagos; con la inmunosupresión del VIH se disemina.",
      "diagnostico": "En tejido: levaduras pequeñas dentro de los macrófagos. Cultivo a 25 °C (fase moho): macroconidias tuberculadas, redondas con espinas.",
      "tratamiento": "Anfotericina B liposomal y luego itraconazol.",
      "prevencion": "Evitar cuevas con murciélagos si hay inmunosupresión; TARV. Complicaciones: falla multiorgánica, muerte."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Inhalación de conidios en cuevas con murciélagos (Tingo María)"
      ],
      [
        "pro",
        "patogenia",
        "Dimórfico: a 37 °C se vuelve levadura dentro de los macrófagos"
      ],
      [
        "dec",
        "patogenia",
        "¿Hay inmunosupresión (VIH)?",
        "No → infección leve o asintomática"
      ],
      [
        "pro",
        "zona",
        "Pulmón → hígado, bazo, médula ósea"
      ],
      [
        "pro",
        "sintomas",
        "Fiebre, baja de peso, hepatoesplenomegalia, pancitopenia"
      ],
      [
        "pro",
        "enfermedad",
        "Histoplasmosis diseminada"
      ],
      [
        "pro",
        "diagnostico",
        "Tejido: levaduras en macrófagos · cultivo 25 °C: macroconidias tuberculadas"
      ],
      [
        "pro",
        "tratamiento",
        "Anfotericina B liposomal → luego itraconazol"
      ],
      [
        "fin",
        "prevencion",
        "Evitar cuevas si hay VIH, TARV · Complicación: falla multiorgánica"
      ]
    ]
  },
  {
    "id": "paracoccidioidomicosis",
    "area": "hongos",
    "tema": "Dimórficos",
    "caso": "Agricultor de 50 años de la selva, fumador. Tiene tos crónica desde hace meses con baciloscopías negativas, úlceras en la boca de aspecto moriforme y adenopatías cervicales.",
    "clave": {
      "sintomas": "Tos crónica, úlceras orales moriformes, adenopatías; baja de peso.",
      "zona": "Pulmón (entrada), mucosa oral y ganglios linfáticos.",
      "enfermedad": "Paracoccidioidomicosis por Paracoccidioides brasiliensis.",
      "patogenia": "Hongo dimórfico del suelo de zonas rurales de la selva; se inhala y en el cuerpo (37 °C) se vuelve levadura; desde el pulmón se disemina a mucosas y ganglios.",
      "diagnostico": "Examen directo o biopsia: levadura madre grande con múltiples gemaciones alrededor («rueda de timón»). BK negativa la diferencia de tuberculosis.",
      "tratamiento": "Itraconazol por 6 a 12 meses; en casos graves, anfotericina B.",
      "prevencion": "Diagnóstico temprano en agricultores con tos crónica y BK negativa. Complicaciones: fibrosis pulmonar, lesiones crónicas de mucosa."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Inhalación del hongo del suelo rural (selva)"
      ],
      [
        "pro",
        "patogenia",
        "Dimórfico: a 37 °C se vuelve levadura → se disemina desde el pulmón"
      ],
      [
        "pro",
        "zona",
        "Pulmón → mucosa oral y ganglios"
      ],
      [
        "pro",
        "sintomas",
        "Tos crónica, úlceras orales moriformes, adenopatías"
      ],
      [
        "dec",
        "diagnostico",
        "¿Baciloscopía negativa?",
        "No (BK positiva) → pensar en tuberculosis"
      ],
      [
        "pro",
        "enfermedad",
        "Paracoccidioidomicosis"
      ],
      [
        "pro",
        "diagnostico",
        "Directo o biopsia: levadura en «rueda de timón»"
      ],
      [
        "pro",
        "tratamiento",
        "Itraconazol 6–12 meses; grave: anfotericina B"
      ],
      [
        "fin",
        "prevencion",
        "Diagnóstico temprano en agricultores · Complicación: fibrosis pulmonar"
      ]
    ]
  },
  {
    "id": "otomicosis",
    "area": "hongos",
    "tema": "Mohos hialinos",
    "caso": "Nadadora de 22 años con picazón y sensación de oído tapado desde hace dos semanas. En el conducto auditivo externo se ve una secreción con puntos negros, como algodón con pimienta.",
    "clave": {
      "sintomas": "Prurito ótico, sensación de oído tapado, secreción con puntos negros; puede haber dolor leve.",
      "zona": "Conducto auditivo externo.",
      "enfermedad": "Otomicosis (otitis externa fúngica) por Aspergillus niger.",
      "patogenia": "La humedad del conducto (natación) favorece que el moho ambiental colonice el cerumen y la piel del conducto; los conidios negros dan el aspecto típico.",
      "diagnostico": "Otoscopia; examen directo y cultivo en Sabouraud: colonia cubierta de conidios negros, reverso incoloro o marfil; microscopio: hifas hialinas septadas con cabeza aspergilar biseriada.",
      "tratamiento": "Limpieza del conducto y clotrimazol tópico.",
      "prevencion": "Secar bien los oídos después de nadar, no usar hisopos. Complicaciones: recurrencia, perforación timpánica."
    },
    "grafico": [
      [
        "ini",
        "patogenia",
        "Humedad en el oído (natación)"
      ],
      [
        "pro",
        "patogenia",
        "Aspergillus niger del ambiente coloniza el conducto"
      ],
      [
        "pro",
        "zona",
        "Conducto auditivo externo"
      ],
      [
        "pro",
        "sintomas",
        "Picazón, oído tapado, secreción con puntos negros"
      ],
      [
        "pro",
        "enfermedad",
        "Otomicosis por Aspergillus niger"
      ],
      [
        "pro",
        "diagnostico",
        "Otoscopia + Sabouraud: colonia negra, cabeza aspergilar biseriada"
      ],
      [
        "pro",
        "tratamiento",
        "Limpieza del conducto + clotrimazol tópico"
      ],
      [
        "fin",
        "prevencion",
        "Secar los oídos tras nadar, no usar hisopos · Complicación: recurrencia"
      ]
    ]
  }
];
