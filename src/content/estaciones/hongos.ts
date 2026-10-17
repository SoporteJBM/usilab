// Estación: Hongos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas por Mafer.
import type { Estacion } from "../types";

export const hongos: Estacion = {
  "id": "hongos",
  "nombre": "Hongos",
  "descripcion": "Hongos ambientales y clínicos de la práctica",
  "resumen": "Ideas clave:\n• Anfotericina B: se une al ergosterol y forma poros.\n• Azoles: bloquean la síntesis de ergosterol.\n• Equinocandinas: bloquean el glucano de la pared.\n• Resistencias naturales: Rhodotorula a fluconazol y equinocandinas; mucorales a fluconazol.\n• Dimórficos: moho a 25–30 °C, levadura a 37 °C.",
  "preguntas": [
    {
      "id": "hongos-001",
      "nivel": "m",
      "pregunta": "¿Cuál es el mecanismo de acción de la anfotericina B?",
      "correcta": "Se une al ergosterol y forma poros",
      "distractores": [
        "Inhibe la síntesis de glucano",
        "Bloquea la transcriptasa reversa",
        "Inhibe el ribosoma 60S"
      ],
      "pista": "Piensa en el lípido de la membrana fúngica.",
      "explicacion": "Los poros en la membrana matan la célula."
    },
    {
      "id": "hongos-002",
      "nivel": "f",
      "pregunta": "¿Qué hacen los azoles, como el fluconazol?",
      "correcta": "Inhiben la síntesis de ergosterol",
      "distractores": [
        "Dañan la pared de quitina",
        "Bloquean la mitosis",
        "Inhiben la síntesis de glucano"
      ],
      "pista": "Actúan sobre la lanosterol 14-α-desmetilasa.",
      "explicacion": "Sin esa enzima, el ergosterol no se forma bien."
    },
    {
      "id": "hongos-003",
      "nivel": "f",
      "pregunta": "¿Qué inhiben las equinocandinas, como la caspofungina?",
      "correcta": "La síntesis de β-1,3-glucano",
      "distractores": [
        "La síntesis de ADN",
        "La síntesis de ergosterol",
        "La síntesis de proteínas"
      ],
      "pista": "Afectan la pared celular.",
      "explicacion": "Bloquean la enzima que fabrica el glucano de la pared."
    },
    {
      "id": "hongos-004",
      "nivel": "d",
      "pregunta": "¿Cuál es el principal mecanismo de resistencia a azoles en Aspergillus fumigatus?",
      "correcta": "Mutaciones en el gen cyp51A",
      "distractores": [
        "Producción de β-lactamasa",
        "Bomba de expulsión de penicilina",
        "Cambio en la transcriptasa"
      ],
      "pista": "Es el gen de la enzima blanco.",
      "explicacion": "Las mutaciones reducen la afinidad del azol por su blanco."
    },
    {
      "id": "hongos-005",
      "nivel": "m",
      "pregunta": "¿Por qué la 5-fluorocitosina no se usa sola?",
      "correcta": "La resistencia aparece rápido",
      "distractores": [
        "Actúa solo en bacterias",
        "Es un antiviral",
        "No se absorbe por vía oral"
      ],
      "pista": "Por eso se combina.",
      "explicacion": "Se usa combinada, por ejemplo con anfotericina B."
    },
    {
      "id": "hongos-006",
      "nivel": "f",
      "pregunta": "¿Qué componente del agar Sabouraud inhibe a las bacterias?",
      "correcta": "Cloranfenicol y pH ácido",
      "distractores": [
        "Sangre de carnero",
        "Cristal violeta",
        "Lactosa"
      ],
      "pista": "Un antibiótico y la acidez.",
      "explicacion": "Lleva cloranfenicol y pH de alrededor de 5.6; a veces también cicloheximida."
    },
    {
      "id": "hongos-007",
      "nivel": "f",
      "pregunta": "¿A qué temperatura se ve la fase moho de un hongo dimórfico?",
      "correcta": "25–30 °C",
      "distractores": [
        "4 °C",
        "37 °C",
        "42 °C"
      ],
      "pista": "Temperatura ambiente, no corporal.",
      "explicacion": "A 37 °C los dimórficos pasan a levadura."
    },
    {
      "id": "hongos-008",
      "nivel": "f",
      "pregunta": "Hifas anchas, no septadas, con esporangios redondos y rizoides. ¿Qué hongo es?",
      "correcta": "Rhizopus",
      "distractores": [
        "Aspergillus",
        "Penicillium",
        "Fusarium"
      ],
      "pista": "Es un mucoral.",
      "explicacion": "Los mucorales tienen hifas cenocíticas, en cinta, ramificadas a 90°."
    },
    {
      "id": "hongos-009",
      "nivel": "m",
      "pregunta": "Las clamidoconidias en la punta de las pseudohifas identifican a:",
      "correcta": "Candida albicans",
      "distractores": [
        "Candida glabrata",
        "Cryptococcus",
        "Rhodotorula"
      ],
      "pista": "Solo una Candida común las forma.",
      "explicacion": "Entre las Candida comunes, solo C. albicans hace clamidoconidias."
    },
    {
      "id": "hongos-010",
      "nivel": "m",
      "pregunta": "TAC de un diabético con signo del halo invertido. Sospechas:",
      "correcta": "Mucormicosis",
      "distractores": [
        "Aspergilosis",
        "Tuberculosis",
        "Histoplasmosis"
      ],
      "pista": "Halo invertido, no halo normal.",
      "explicacion": "Halo invertido (atolón): mucormicosis. Halo normal: Aspergillus."
    },
    {
      "id": "hongos-011",
      "nivel": "m",
      "pregunta": "¿Por qué una fungemia por Rhodotorula no se trata con fluconazol?",
      "correcta": "Es naturalmente resistente a fluconazol y equinocandinas",
      "distractores": [
        "No crece en sangre",
        "Solo afecta la piel",
        "El fluconazol no llega al catéter"
      ],
      "pista": "Es una resistencia intrínseca.",
      "explicacion": "Se trata con anfotericina B y retirando el catéter."
    },
    {
      "id": "hongos-012",
      "nivel": "m",
      "pregunta": "¿Qué dermatofito nunca afecta el pelo?",
      "correcta": "Epidermophyton floccosum",
      "distractores": [
        "Microsporum canis",
        "Trichophyton rubrum",
        "Trichophyton mentagrophytes"
      ],
      "pista": "Tiene macroconidios en mazo.",
      "explicacion": "Afecta piel y uñas, pero no el pelo."
    },
    {
      "id": "hongos-013",
      "nivel": "m",
      "pregunta": "Tratamiento de la tinea capitis por Microsporum canis:",
      "correcta": "Griseofulvina oral",
      "distractores": [
        "Terbinafina tópica",
        "Nistatina",
        "Clotrimazol tópico"
      ],
      "pista": "Tiene que ser oral.",
      "explicacion": "Lo tópico no llega al folículo. Alternativa: terbinafina oral."
    },
    {
      "id": "hongos-014",
      "nivel": "m",
      "pregunta": "Queratitis por Fusarium tras un golpe con una rama. Tratamiento tópico de elección:",
      "correcta": "Natamicina",
      "distractores": [
        "Nistatina",
        "Clotrimazol",
        "Griseofulvina"
      ],
      "pista": "Es un polieno de uso oftálmico.",
      "explicacion": "Alternativa: voriconazol."
    },
    {
      "id": "hongos-015",
      "nivel": "m",
      "pregunta": "Esporotricosis linfocutánea. Tratamiento de elección:",
      "correcta": "Itraconazol",
      "distractores": [
        "Fluconazol tópico",
        "Nistatina",
        "Caspofungina"
      ],
      "pista": "Es un azol oral.",
      "explicacion": "Por 3 a 6 meses. Alternativa: yoduro de potasio."
    },
    {
      "id": "hongos-016",
      "nivel": "d",
      "pregunta": "Aspergilosis broncopulmonar alérgica (ABPA). Tratamiento:",
      "correcta": "Corticoides sistémicos e itraconazol",
      "distractores": [
        "Voriconazol solo",
        "Cirugía",
        "Anfotericina B liposomal"
      ],
      "pista": "Es una reacción alérgica, no una invasión.",
      "explicacion": "El corticoide controla la inflamación y el itraconazol baja la carga fúngica."
    },
    {
      "id": "hongos-017",
      "nivel": "f",
      "pregunta": "¿Qué hongo se adquiere en cuevas con murciélagos, como en Tingo María?",
      "correcta": "Histoplasma capsulatum",
      "distractores": [
        "Paracoccidioides brasiliensis",
        "Sporothrix schenckii",
        "Candida albicans"
      ],
      "pista": "Su fase moho tiene macroconidias con espinas.",
      "explicacion": "En VIH puede diseminarse: fiebre, hepatoesplenomegalia y pancitopenia."
    },
    {
      "id": "hongos-018",
      "nivel": "f",
      "pregunta": "Levadura grande con múltiples gemaciones en 'rueda de timón':",
      "correcta": "Paracoccidioides brasiliensis",
      "distractores": [
        "Candida albicans",
        "Histoplasma capsulatum",
        "Rhodotorula"
      ],
      "pista": "Típico de agricultores con úlceras orales.",
      "explicacion": "Paracoccidioidomicosis: tos crónica con BK negativa y úlceras moriformes."
    },
    {
      "id": "hongos-019",
      "nivel": "f",
      "pregunta": "Paciente neutropénico con sospecha de aspergilosis invasiva. ¿Qué marcador en sangre apoya el diagnóstico?",
      "correcta": "Galactomanano",
      "distractores": [
        "Antígeno capsular",
        "Prueba de tubo germinal",
        "Antiestreptolisina O"
      ],
      "pista": "Es un componente de la pared de Aspergillus.",
      "explicacion": "El galactomanano se libera durante la invasión; el antígeno capsular es de Cryptococcus."
    },
    {
      "id": "hongos-020",
      "nivel": "d",
      "pregunta": "Fungemia por Candida glabrata con sensibilidad reducida a azoles. ¿Qué grupo es el más seguro para iniciar?",
      "correcta": "Equinocandinas",
      "distractores": [
        "Fluconazol a dosis alta",
        "Itraconazol",
        "Griseofulvina"
      ],
      "pista": "C. glabrata tolera mal los azoles.",
      "explicacion": "Las equinocandinas actúan sobre el glucano, un blanco distinto al de los azoles."
    },
    {
      "id": "hongos-021",
      "nivel": "d",
      "pregunta": "¿Por qué la anfotericina B es tóxica para el paciente si su blanco es el ergosterol?",
      "correcta": "También se une, con menor afinidad, al colesterol de las membranas humanas",
      "distractores": [
        "Inhibe la síntesis de proteínas humanas",
        "Bloquea el citocromo P450 hepático",
        "Destruye el glucano humano"
      ],
      "pista": "Ergosterol y colesterol se parecen.",
      "explicacion": "Por eso es nefrotóxica; la forma liposomal lo reduce."
    },
    {
      "id": "hongos-022",
      "nivel": "d",
      "pregunta": "En la cetoacidosis diabética, ¿qué factor favorece el crecimiento de Rhizopus?",
      "correcta": "La acidosis libera hierro de la transferrina y el hongo lo aprovecha",
      "distractores": [
        "La hiperglucemia aumenta los linfocitos T",
        "Las cetonas son su único nutriente",
        "La insulina estimula la esporulación"
      ],
      "pista": "Piensa en un metal que el hongo necesita.",
      "explicacion": "Además, la acidosis altera la función de neutrófilos y macrófagos."
    },
    {
      "id": "hongos-023",
      "nivel": "d",
      "pregunta": "Criptococosis meníngea. ¿Cuál es la inducción de elección?",
      "correcta": "Anfotericina B más flucitosina",
      "distractores": [
        "Fluconazol solo",
        "Caspofungina más fluconazol",
        "Voriconazol más terbinafina"
      ],
      "pista": "Dos fármacos que actúan sobre blancos distintos.",
      "explicacion": "Las equinocandinas no tienen actividad útil contra Cryptococcus."
    },
    {
      "id": "hongos-024",
      "nivel": "d",
      "pregunta": "¿Qué antifúngico NO tiene actividad útil contra los mucorales?",
      "correcta": "Voriconazol",
      "distractores": [
        "Anfotericina B liposomal",
        "Posaconazol",
        "Isavuconazol"
      ],
      "pista": "Es el de elección para Aspergillus.",
      "explicacion": "Por eso hay mucormicosis 'de brecha' en pacientes con profilaxis de voriconazol."
    },
    {
      "id": "hongos-025",
      "nivel": "x",
      "pregunta": "Neutropénico con profilaxis de voriconazol presenta sinusitis necrotizante; la biopsia muestra hifas anchas, no septadas, en ángulo recto. ¿Qué explica la infección y qué cambias?",
      "correcta": "El voriconazol no cubre mucorales: pasar a anfotericina B liposomal y desbridar",
      "distractores": [
        "Aspergillus resistente por cyp51A: subir la dosis de voriconazol",
        "Candida glabrata: pasar a una equinocandina",
        "Fusarium: agregar natamicina",
        "Reactivación de Histoplasma: itraconazol"
      ],
      "explicacion": "La infección apareció justamente porque el antifúngico de profilaxis no la cubre."
    },
    {
      "id": "hongos-026",
      "nivel": "x",
      "pregunta": "Lámina con hifas septadas y macroconidias multiseptadas. Para decidir entre Fusarium y Microsporum, ¿qué rasgo es decisivo?",
      "correcta": "La pared: delgada y lisa en canoa (Fusarium) frente a gruesa y rugosa en huso (Microsporum)",
      "distractores": [
        "El número de tabiques",
        "La presencia de clamidoconidias",
        "El color del medio",
        "La temperatura de incubación"
      ],
      "explicacion": "Ambos tienen macroconidias con tabiques; la pared y la forma los separan."
    },
    {
      "id": "hongos-027",
      "nivel": "x",
      "pregunta": "Diabético con mucormicosis. Además del antifúngico y la cirugía, ¿qué medida actúa sobre lo que favorece al hongo?",
      "correcta": "Corregir la cetoacidosis y evitar quelantes de hierro como la deferoxamina",
      "distractores": [
        "Iniciar corticoides para reducir el edema",
        "Dar hierro intravenoso por la anemia",
        "Agregar fluconazol",
        "Aislamiento respiratorio estricto"
      ],
      "explicacion": "Rhizopus usa la deferoxamina como sideróforo: le entrega hierro."
    },
    {
      "id": "hongos-028",
      "nivel": "x",
      "pregunta": "Aspergiloma con hemoptisis masiva en un paciente cuya función pulmonar impide operar. ¿Qué es lo más adecuado?",
      "correcta": "Embolización de las arterias bronquiales",
      "distractores": [
        "Voriconazol intravenoso solo",
        "Corticoides a dosis altas",
        "Nistatina inhalada",
        "Esperar la resolución espontánea"
      ],
      "explicacion": "Los antifúngicos casi no penetran la bola fúngica; la embolización controla el sangrado."
    },
    {
      "id": "hongos-029",
      "nivel": "x",
      "pregunta": "Niño con querion (tiña inflamatoria del cuero cabelludo). ¿Qué error hay que evitar?",
      "correcta": "Tratarlo solo con tópico o drenarlo como si fuera un absceso bacteriano",
      "distractores": [
        "Dar griseofulvina oral",
        "Revisar a las mascotas",
        "Tomar muestra para cultivo",
        "Usar champú antifúngico como complemento"
      ],
      "explicacion": "Es una reacción inflamatoria al hongo: necesita tratamiento oral, no drenaje."
    },
    {
      "id": "hongos-030",
      "nivel": "d",
      "pregunta": "¿Qué especie de Aspergillus es resistente a la anfotericina B?",
      "correcta": "Aspergillus terreus",
      "distractores": [
        "Aspergillus fumigatus",
        "Aspergillus niger",
        "Aspergillus flavus"
      ],
      "pista": "Está en la tabla comparativa de Aspergillus.",
      "explicacion": "Práctica 6: A. terreus causa aspergilosis invasiva en inmunodeprimidos y resiste la anfotericina B."
    },
    {
      "id": "hongos-031",
      "nivel": "d",
      "pregunta": "Aspergillus flavus se asocia sobre todo a:",
      "correcta": "Producción de aflatoxinas, relacionadas con cáncer hepático",
      "distractores": [
        "Otitis externa con secreción negra",
        "Resistencia a la anfotericina B",
        "Tinea capitis en niños"
      ],
      "pista": "Es un dato de examen de la tabla de Aspergillus.",
      "explicacion": "La secreción negra en oído es A. niger; la resistencia a anfotericina, A. terreus."
    },
    {
      "id": "hongos-032",
      "nivel": "d",
      "pregunta": "¿Qué diferencia microscópica separa A. fumigatus de A. niger?",
      "correcta": "A. fumigatus tiene fiálides uniseriadas; A. niger, cabeza aspergilar biseriada con conidios negros",
      "distractores": [
        "A. fumigatus no tiene vesícula",
        "A. niger tiene hifas no septadas",
        "A. fumigatus forma esporangios"
      ],
      "pista": "Cuenta las filas de fiálides.",
      "explicacion": "Ambos tienen hifas hialinas septadas y vesícula."
    },
    {
      "id": "hongos-033",
      "nivel": "d",
      "pregunta": "Rhodotorula en la práctica: ¿cómo se ve al Gram y en el cultivo?",
      "correcta": "Levadura Gram positiva ovoide; colonias cremosas y rosadas por pigmento carotenoide",
      "distractores": [
        "Bacilo Gram negativo con colonias mucoides",
        "Moho con hifas cenocíticas y colonias negras",
        "Levadura con colonias verde azuladas"
      ],
      "pista": "Su color viene de un pigmento.",
      "explicacion": "Práctica 6: colonias de aspecto cremoso, color rosado, pigmento carotenoide."
    },
    {
      "id": "hongos-034",
      "nivel": "d",
      "pregunta": "Hongo dematiáceo con conidios grandes y marrones, con tabiques transversales y longitudinales (muriformes):",
      "correcta": "Alternaria",
      "distractores": [
        "Cladosporium",
        "Fusarium",
        "Penicillium"
      ],
      "pista": "Los conidios tienen forma de maza con pico.",
      "explicacion": "Cladosporium también es marrón, pero sus conidios son pequeños y en cadenas ramificadas."
    },
    {
      "id": "hongos-035",
      "nivel": "x",
      "pregunta": "En la placa de Sabouraud del muestreo ambiental crece en pocos días una colonia algodonosa blanca con puntos negros. Al microscopio: hifas anchas casi sin tabiques. ¿Qué es y qué importancia clínica tiene?",
      "correcta": "Rhizopus: en un diabético con cetoacidosis puede causar mucormicosis rinocerebral",
      "distractores": [
        "Aspergillus niger: otitis con secreción negra",
        "Penicillium: patógeno invasivo frecuente",
        "Fusarium: queratitis por trauma vegetal",
        "Rhodotorula: fungemia por catéter"
      ],
      "explicacion": "Los puntos negros son los esporangios; las hifas cenocíticas son de los mucorales."
    },
    {
      "id": "hongos-036",
      "nivel": "x",
      "pregunta": "Neutropénico con aspergilosis invasiva por A. terreus. ¿Qué afirmación es correcta?",
      "correcta": "No conviene la anfotericina B, porque A. terreus le es resistente; se usa voriconazol",
      "distractores": [
        "Se usa anfotericina B, como en la mucormicosis",
        "Es un contaminante y no se trata",
        "El fluconazol es la mejor opción",
        "Basta con natamicina tópica"
      ],
      "explicacion": "Une dos datos de clase: el voriconazol es de elección en aspergilosis invasiva y A. terreus resiste la anfotericina B."
    },
    {
      "id": "hongos-037",
      "nivel": "x",
      "pregunta": "Diabético con nódulo pulmonar rodeado de vidrio deslustrado (signo del halo). Al microscopio: hifas septadas, conidióforo con vesícula y fiálides en 180°. ¿Diagnóstico y tratamiento?",
      "correcta": "Aspergilosis invasiva por A. fumigatus: voriconazol",
      "distractores": [
        "Mucormicosis: anfotericina B liposomal",
        "Penicillium contaminante: no tratar",
        "Fusariosis: natamicina",
        "Candidiasis: fluconazol"
      ],
      "explicacion": "El halo normal orienta a Aspergillus; el halo invertido, a mucormicosis."
    },
    {
      "id": "hongos-038",
      "nivel": "x",
      "pregunta": "Del aire del laboratorio se aísla un hongo de colonia azul verdosa con borde blanco y conidios en pincel, sin vesícula. ¿Qué haces con el resultado?",
      "correcta": "Es Penicillium: suele ser contaminante ambiental; se correlaciona con la clínica antes de pensar en tratar",
      "distractores": [
        "Es Aspergillus fumigatus: iniciar voriconazol",
        "Es Rhizopus: desbridar",
        "Es Fusarium: natamicina",
        "Es Rhodotorula: anfotericina B"
      ],
      "explicacion": "El pincel sin vesícula separa Penicillium de Aspergillus."
    }
  ]
};
