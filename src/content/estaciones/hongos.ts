// Estación: Hongos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso, preguntas revisadas y banco de teoría (TB, resistencia y micología).
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
    },
    {
      "id": "hongos-039",
      "nivel": "f",
      "pregunta": "El esterol principal de la membrana de los hongos es:",
      "correcta": "Ergosterol",
      "distractores": [
        "Colesterol",
        "Peptidoglucano",
        "Ácido micólico",
        "Lanosterol humano"
      ],
      "pista": "Es el blanco de anfotericina y azoles.",
      "explicacion": "Ergosterol (también zimosterol); blanco de polienos y azoles."
    },
    {
      "id": "hongos-040",
      "nivel": "f",
      "pregunta": "Componentes de la pared celular fúngica:",
      "correcta": "Quitina, glucanos, mananos y glucoproteínas",
      "distractores": [
        "Ácidos teicoicos",
        "Peptidoglucano y LPS",
        "Celulosa pura",
        "Ácidos micólicos"
      ],
      "pista": "Ninguno de los componentes de la pared bacteriana.",
      "explicacion": "Quitina, glucanos, mananos; a veces melanina."
    },
    {
      "id": "hongos-041",
      "nivel": "f",
      "pregunta": "Un hongo dimórfico es:",
      "correcta": "Moho a 25 °C (ambiente) y levadura a 37 °C (paciente)",
      "distractores": [
        "Siempre moho",
        "Un hongo con dos núcleos",
        "Siempre levadura",
        "Levadura a 25 °C y moho a 37 °C"
      ],
      "pista": "Cambia de forma con la temperatura.",
      "explicacion": "'Moho en el ambiente, levadura en el paciente'."
    },
    {
      "id": "hongos-042",
      "nivel": "f",
      "pregunta": "Las levaduras se reproducen asexualmente por:",
      "correcta": "Gemación (blastoconidios)",
      "distractores": [
        "Basidiosporas",
        "Esporangiosporas",
        "Fisión binaria",
        "Zigosporas"
      ],
      "pista": "Las hijas brotan de la célula madre.",
      "explicacion": "Gemación: blastoconidios, como Candida."
    },
    {
      "id": "hongos-043",
      "nivel": "f",
      "pregunta": "Hifas NO septadas (cenocíticas) son características de:",
      "correcta": "Zigomicetos (Mucor, Rhizopus)",
      "distractores": [
        "Penicillium",
        "Dermatofitos",
        "Aspergillus",
        "Fusarium"
      ],
      "pista": "Causan la enfermedad del diabético en cetoacidosis.",
      "explicacion": "Septadas = Ascomycota y Basidiomycota."
    },
    {
      "id": "hongos-044",
      "nivel": "m",
      "pregunta": "Las esporangiosporas se forman dentro de un esporangio en:",
      "correcta": "Mucor y Rhizopus",
      "distractores": [
        "Aspergillus",
        "Candida",
        "Penicillium",
        "Trichophyton"
      ],
      "pista": "Las esporas quedan dentro de un saco.",
      "explicacion": "Los conidios son externos (Aspergillus, Penicillium)."
    },
    {
      "id": "hongos-045",
      "nivel": "d",
      "pregunta": "Esporas sexuales en basidios en forma de clava, como en Cryptococcus neoformans:",
      "correcta": "Basidiosporas",
      "distractores": [
        "Zigosporas",
        "Blastoconidios",
        "Artroconidias",
        "Conidios"
      ],
      "explicacion": "Basidiosporas; las zigosporas son de Rhizopus."
    },
    {
      "id": "hongos-046",
      "nivel": "f",
      "pregunta": "Efecto adverso principal de la anfotericina B:",
      "correcta": "Nefrotoxicidad (además hipokalemia, fiebre y escalofríos)",
      "distractores": [
        "Hepatotoxicidad leve",
        "Ototoxicidad",
        "Ninguno",
        "Fotosensibilidad"
      ],
      "pista": "El riñón sufre.",
      "explicacion": "Nefrotoxicidad, reacciones infusionales, hipokalemia."
    },
    {
      "id": "hongos-047",
      "nivel": "f",
      "pregunta": "Los azoles actúan:",
      "correcta": "Inhibiendo la síntesis de ergosterol (enzima CYP450)",
      "distractores": [
        "Inhibiendo el ADN",
        "Formando poros",
        "Inhibiendo el β-glucano",
        "Rompiendo la quitina"
      ],
      "pista": "Actúan sobre la lanosterol 14-α-desmetilasa.",
      "explicacion": "Inhiben la síntesis de ergosterol; hepatotoxicidad e interacciones."
    },
    {
      "id": "hongos-048",
      "nivel": "m",
      "pregunta": "Flucitosina:",
      "correcta": "Antimetabolito que inhibe la síntesis de ADN/ARN; se usa con anfotericina B en criptococosis",
      "distractores": [
        "Alilamina",
        "Polieno",
        "Equinocandina",
        "Azol"
      ],
      "pista": "Es un análogo de base nitrogenada; da mielosupresión.",
      "explicacion": "Antimetabolito; mielosupresión."
    },
    {
      "id": "hongos-049",
      "nivel": "f",
      "pregunta": "El KOH al 10–20 % en el examen directo sirve para:",
      "correcta": "Digerir la queratina y dejar ver hifas, levaduras y esporas",
      "distractores": [
        "Medir anticuerpos",
        "Ver bacilos ácido-alcohol resistentes",
        "Cultivar hongos",
        "Teñir la cápsula"
      ],
      "pista": "Es un aclarante.",
      "explicacion": "Aclarante: digiere queratina."
    },
    {
      "id": "hongos-050",
      "nivel": "f",
      "pregunta": "Medio de cultivo estándar para hongos:",
      "correcta": "Agar Sabouraud dextrosa",
      "distractores": [
        "Agar sangre",
        "Löwenstein-Jensen",
        "Mueller-Hinton",
        "MacConkey"
      ],
      "pista": "Inhibe bacterias con pH ácido y cloranfenicol.",
      "explicacion": "Sabouraud (con o sin antibióticos); 25–30 °C."
    },
    {
      "id": "hongos-051",
      "nivel": "f",
      "pregunta": "Tinción para ver la cápsula de Cryptococcus en LCR:",
      "correcta": "Tinta china",
      "distractores": [
        "Gram",
        "Azul de lactofenol",
        "Ziehl-Neelsen",
        "Giemsa"
      ],
      "pista": "Deja ver un halo claro alrededor de la levadura.",
      "explicacion": "Tinta china: halo claro de la cápsula."
    },
    {
      "id": "hongos-052",
      "nivel": "f",
      "pregunta": "Tinción de hongos filamentosos en microcultivo:",
      "correcta": "Azul de lactofenol",
      "distractores": [
        "Tinta china",
        "Ziehl-Neelsen",
        "Mucicarmina",
        "Wright"
      ],
      "pista": "Colorante del microcultivo.",
      "explicacion": "Azul de lactofenol: hifas y esporas en azul."
    },
    {
      "id": "hongos-053",
      "nivel": "d",
      "pregunta": "Blanco de calcoflúor:",
      "correcta": "Da fluorescencia al unirse a quitina/celulosa",
      "distractores": [
        "Tiñe cápsula de rojo",
        "Es un medio de cultivo",
        "Tiñe ácidos micólicos",
        "Detecta galactomanano"
      ],
      "explicacion": "Fluorescencia con quitina y celulosa."
    },
    {
      "id": "hongos-054",
      "nivel": "x",
      "pregunta": "El β-D-glucano es un marcador panfúngico EXCEPTO para:",
      "correcta": "Cryptococcus y zigomicetos",
      "distractores": [
        "Candida y Aspergillus",
        "Histoplasma",
        "Fusarium",
        "Pneumocystis"
      ],
      "explicacion": "No detecta Cryptococcus ni zigomicetos."
    },
    {
      "id": "hongos-055",
      "nivel": "f",
      "pregunta": "Marcador sérico para Aspergillus:",
      "correcta": "Galactomanano",
      "distractores": [
        "Antígeno en orina",
        "ADA",
        "Antígeno capsular",
        "gp43"
      ],
      "pista": "Es un polisacárido de la pared que se busca en suero en el neutropénico.",
      "explicacion": "Galactomanano: diagnóstico precoz de aspergilosis invasiva."
    },
    {
      "id": "hongos-056",
      "nivel": "d",
      "pregunta": "Tinciones de histopatología para hongos en biopsias:",
      "correcta": "PAS y Gomori-Grocott",
      "distractores": [
        "Gram y ZN",
        "Lugol",
        "Azul de metileno",
        "Tinta china"
      ],
      "explicacion": "PAS y Grocott demuestran invasión tisular."
    },
    {
      "id": "hongos-057",
      "nivel": "f",
      "pregunta": "Micosis subcutáneas se adquieren por:",
      "correcta": "Inoculación traumática (espinas, tierra)",
      "distractores": [
        "Transfusión",
        "Inhalación",
        "Ingestión",
        "Vía sexual"
      ],
      "pista": "Piensa en jardineros y agricultores que se pinchan.",
      "explicacion": "Ej.: Sporothrix, cromoblastomicosis."
    },
    {
      "id": "hongos-058",
      "nivel": "m",
      "pregunta": "Las micosis sistémicas endémicas:",
      "correcta": "Se adquieren por inhalación, son por dimórficos y pueden enfermar a inmunocompetentes (patógenos primarios)",
      "distractores": [
        "Son por levaduras sin dimorfismo",
        "Se adquieren por la piel",
        "No existen en el Perú",
        "Son oportunistas solo en VIH"
      ],
      "pista": "Histoplasma, Paracoccidioides y Blastomyces.",
      "explicacion": "Histoplasma, Blastomyces, Paracoccidioides."
    },
    {
      "id": "hongos-059",
      "nivel": "d",
      "pregunta": "Micosis oportunistas emergentes:",
      "correcta": "Fusariosis, malasseziosis y Candida auris",
      "distractores": [
        "Tiñas",
        "Candidiasis y aspergilosis",
        "Histoplasmosis",
        "Esporotricosis"
      ],
      "explicacion": "Clásicas: candidiasis, aspergilosis, criptococosis, zigomicosis."
    },
    {
      "id": "hongos-060",
      "nivel": "f",
      "pregunta": "Hongo usado en la industria para producir penicilina:",
      "correcta": "Penicillium notatum",
      "distractores": [
        "Fusarium",
        "Aspergillus niger",
        "Rhizopus",
        "Saccharomyces cerevisiae"
      ],
      "pista": "Fleming, 1928.",
      "explicacion": "P. notatum (P. chrysogenum)."
    },
    {
      "id": "hongos-061",
      "nivel": "f",
      "pregunta": "Hifas de Aspergillus:",
      "correcta": "Septadas, hialinas, ramificadas en ángulo agudo (~45°)",
      "distractores": [
        "No forma hifas",
        "Pseudohifas",
        "Pigmentadas marrones",
        "Anchas, no septadas, en ángulo recto"
      ],
      "pista": "Regla de oro de la clase: tabiques y 45°.",
      "explicacion": "'Septadas + 45° = Aspergillus'."
    },
    {
      "id": "hongos-062",
      "nivel": "f",
      "pregunta": "Especie de Aspergillus más frecuente en enfermedad humana:",
      "correcta": "A. fumigatus (85–90 %)",
      "distractores": [
        "A. terreus",
        "A. nidulans",
        "A. flavus",
        "A. niger"
      ],
      "pista": "Responsable del 85–90 % de los casos.",
      "explicacion": "A. fumigatus 85–90 %; A. flavus 5–10 %."
    },
    {
      "id": "hongos-063",
      "nivel": "m",
      "pregunta": "Especie de Aspergillus productora de aflatoxinas:",
      "correcta": "A. flavus",
      "distractores": [
        "A. terreus",
        "A. fumigatus",
        "A. niger",
        "A. nidulans"
      ],
      "pista": "Colonias verde-amarillentas.",
      "explicacion": "A. flavus: micotoxinas, colonias verde-amarillentas, conidióforo rugoso."
    },
    {
      "id": "hongos-064",
      "nivel": "x",
      "pregunta": "Principal factor inmunoevasor de Aspergillus:",
      "correcta": "Gliotoxina",
      "distractores": [
        "Melanina",
        "Ureasa",
        "Coagulasa",
        "Cápsula"
      ],
      "explicacion": "Gliotoxina inhibe macrófagos y neutrófilos."
    },
    {
      "id": "hongos-065",
      "nivel": "f",
      "pregunta": "Principal factor de riesgo de aspergilosis invasiva:",
      "correcta": "Neutropenia",
      "distractores": [
        "Asma leve",
        "Embarazo",
        "Hipertensión",
        "Diabetes con cetoacidosis"
      ],
      "pista": "Piensa en pacientes con quimioterapia.",
      "explicacion": "Neutropenia, trasplante, corticoides."
    },
    {
      "id": "hongos-066",
      "nivel": "m",
      "pregunta": "Signo del halo en la TAC (nódulo con vidrio deslustrado alrededor) en un neutropénico sugiere:",
      "correcta": "Aspergilosis pulmonar invasiva",
      "distractores": [
        "Mucormicosis",
        "Neumocistosis",
        "TB",
        "Histoplasmosis"
      ],
      "pista": "Nódulo con hemorragia alrededor en un neutropénico.",
      "explicacion": "Nódulo = infarto, halo = hemorragia perilesional (angioinvasión)."
    },
    {
      "id": "hongos-067",
      "nivel": "m",
      "pregunta": "El aspergiloma (bola fúngica) se forma típicamente en:",
      "correcta": "Cavidades previas, como cavernas de TB",
      "distractores": [
        "Piel",
        "Pulmón sano",
        "Cerebro",
        "Senos maxilares solo"
      ],
      "pista": "Necesita un hueco ya formado en el pulmón.",
      "explicacion": "Cavidades de TB, sarcoidosis, enfisema bulloso."
    },
    {
      "id": "hongos-068",
      "nivel": "m",
      "pregunta": "Tratamiento del aspergiloma:",
      "correcta": "Cirugía",
      "distractores": [
        "Voriconazol",
        "Fluconazol",
        "Nistatina",
        "Observación siempre"
      ],
      "pista": "Los antifúngicos llegan mal a la bola fúngica.",
      "explicacion": "Los antifúngicos son poco útiles; cirugía."
    },
    {
      "id": "hongos-069",
      "nivel": "m",
      "pregunta": "ABPA (aspergilosis broncopulmonar alérgica) se presenta en:",
      "correcta": "Asmáticos o pacientes con fibrosis quística",
      "distractores": [
        "Jardineros",
        "Diabéticos",
        "Niños con gatos",
        "Neutropénicos"
      ],
      "pista": "Es una hipersensibilidad en la vía aérea.",
      "explicacion": "Hipersensibilidad tipo I y III."
    },
    {
      "id": "hongos-070",
      "nivel": "d",
      "pregunta": "Hallazgos de laboratorio en ABPA:",
      "correcta": "IgE total elevada, eosinofilia, IgE e IgG anti-Aspergillus",
      "distractores": [
        "Galactomanano muy alto",
        "Pancitopenia",
        "Antígeno en orina",
        "Tinta china positiva"
      ],
      "explicacion": "IgE total ↑, eosinofilia, moldes bronquiales marrones."
    },
    {
      "id": "hongos-071",
      "nivel": "d",
      "pregunta": "Profilaxis antifúngica en neutropenia prolongada:",
      "correcta": "Posaconazol",
      "distractores": [
        "Terbinafina",
        "Fluconazol",
        "Nistatina",
        "Griseofulvina"
      ],
      "explicacion": "Posaconazol."
    },
    {
      "id": "hongos-072",
      "nivel": "f",
      "pregunta": "Otomicosis con secreción negra ('oído de nadador'):",
      "correcta": "A. niger",
      "distractores": [
        "A. fumigatus",
        "Fusarium",
        "Candida glabrata",
        "Rhizopus"
      ],
      "pista": "Colonias negras.",
      "explicacion": "A. niger (también A. flavus)."
    },
    {
      "id": "hongos-073",
      "nivel": "d",
      "pregunta": "Colonia de A. fumigatus en Sabouraud:",
      "correcta": "Verde-grisácea, conidióforo liso, vesícula en matraz",
      "distractores": [
        "Negra",
        "Amarillo-verdosa con conidióforo rugoso",
        "Blanca con reverso rojo",
        "Rosada"
      ],
      "explicacion": "A. flavus: verde-amarilla y conidióforo rugoso; A. niger: negra."
    },
    {
      "id": "hongos-074",
      "nivel": "f",
      "pregunta": "Hifas de los zigomicetos (Mucorales):",
      "correcta": "Anchas, no tabicadas (cenocíticas), ramificadas en ángulo recto",
      "distractores": [
        "Pseudohifas",
        "Delgadas, septadas, 45°",
        "Con macroconidias en canoa",
        "No forman hifas"
      ],
      "pista": "Hifas en cinta, sin tabiques.",
      "explicacion": "Hifas anchas en cinta, sin septos."
    },
    {
      "id": "hongos-075",
      "nivel": "f",
      "pregunta": "Principal factor de riesgo de mucormicosis:",
      "correcta": "Diabetes no controlada con cetoacidosis",
      "distractores": [
        "Exploración de cuevas",
        "Asma",
        "Embarazo",
        "Contacto con palomas"
      ],
      "pista": "El hongo aprovecha el hierro libre.",
      "explicacion": "También neutropenia."
    },
    {
      "id": "hongos-076",
      "nivel": "d",
      "pregunta": "¿Por qué la cetoacidosis favorece la mucormicosis?",
      "correcta": "Aumenta el hierro libre, que el hongo capta para crecer",
      "distractores": [
        "Baja la glucosa",
        "Destruye el hongo",
        "Activa Th1",
        "Aumenta los neutrófilos"
      ],
      "explicacion": "Más hierro libre + GRP78 endotelial aumentado."
    },
    {
      "id": "hongos-077",
      "nivel": "x",
      "pregunta": "Proteína de Rhizopus que se une a GRP78 endotelial:",
      "correcta": "CotH",
      "distractores": [
        "Hsp60",
        "ALS",
        "Gliotoxina",
        "gp43"
      ],
      "explicacion": "CotH–GRP78: angioinvasión."
    },
    {
      "id": "hongos-078",
      "nivel": "m",
      "pregunta": "Forma clínica más frecuente de mucormicosis:",
      "correcta": "Rinocerebral",
      "distractores": [
        "Intestinal",
        "Cutánea",
        "Diseminada",
        "Pulmonar"
      ],
      "pista": "Costras negras en el paladar.",
      "explicacion": "Dolor facial, congestión, costras negras en paladar o cornetes."
    },
    {
      "id": "hongos-079",
      "nivel": "d",
      "pregunta": "Diferencia en la velocidad de progresión pulmonar:",
      "correcta": "Mucormicosis es fulminante en días; aspergilosis tarda semanas",
      "distractores": [
        "Solo la TB es rápida",
        "Mucormicosis progresa en semanas y aspergilosis en días",
        "Ambas iguales",
        "Ninguna progresa"
      ],
      "explicacion": "Mucormicosis fulminante."
    },
    {
      "id": "hongos-080",
      "nivel": "f",
      "pregunta": "Rasgo microscópico de Fusarium:",
      "correcta": "Macroconidias en forma de canoa o plátano",
      "distractores": [
        "Cabeza aspergilar",
        "Esporangios con rizoides",
        "Levaduras en timón",
        "Cuerpos muriformes"
      ],
      "pista": "Recuerda una embarcación o una fruta curva.",
      "explicacion": "Hifas hialinas septadas + macroconidias en canoa y microconidias."
    },
    {
      "id": "hongos-081",
      "nivel": "m",
      "pregunta": "Color de las colonias de Fusarium:",
      "correcta": "Algodonosas rosadas, violetas o rojas",
      "distractores": [
        "Naranjas brillantes",
        "Blancas cremosas",
        "Negras",
        "Verde-grisáceas"
      ],
      "pista": "Colores cálidos, nunca negras.",
      "explicacion": "Rosadas, violetas o rojas."
    },
    {
      "id": "hongos-082",
      "nivel": "x",
      "pregunta": "Especie de Fusarium más virulenta y responsable de la mitad de las invasivas:",
      "correcta": "F. solani",
      "distractores": [
        "F. proliferatum",
        "F. moniliforme",
        "F. verticillioides",
        "F. oxysporum"
      ],
      "explicacion": "F. solani."
    },
    {
      "id": "hongos-083",
      "nivel": "d",
      "pregunta": "Lesiones cutáneas en fusariosis diseminada (70–80 %):",
      "correcta": "Nódulos eritematosos dolorosos con centro necrótico negro",
      "distractores": [
        "Placas blancas removibles",
        "Vesículas en racimo",
        "Lesiones verrugosas",
        "Placas anulares"
      ],
      "explicacion": "Tipo ectima gangrenoso, múltiples."
    },
    {
      "id": "hongos-084",
      "nivel": "x",
      "pregunta": "Dato que diferencia Fusarium de Aspergillus:",
      "correcta": "Hemocultivos positivos en ~40 % (en Aspergillus suelen ser negativos)",
      "distractores": [
        "Neutropenia",
        "Signo del halo",
        "Galactomanano positivo",
        "Fiebre"
      ],
      "explicacion": "Fusarium crece en hemocultivos."
    },
    {
      "id": "hongos-085",
      "nivel": "d",
      "pregunta": "Tratamiento de la fusariosis invasiva:",
      "correcta": "Voriconazol ± anfotericina B liposomal",
      "distractores": [
        "Nistatina",
        "Griseofulvina",
        "Caspofungina",
        "Fluconazol"
      ],
      "explicacion": "Tiene resistencia intrínseca a varios antifúngicos."
    },
    {
      "id": "hongos-086",
      "nivel": "x",
      "pregunta": "Micotoxinas de Fusarium:",
      "correcta": "Tricotecenos",
      "distractores": [
        "Ocratoxina humana",
        "Aflatoxinas",
        "Toxina tetánica",
        "Gliotoxina"
      ],
      "explicacion": "Tricotecenos."
    },
    {
      "id": "hongos-087",
      "nivel": "f",
      "pregunta": "Queratitis micótica: mecanismo típico",
      "correcta": "Trauma vegetal (ramas) o lentes de contacto",
      "distractores": [
        "Inhalación",
        "Picadura",
        "Vía sexual",
        "Transfusión"
      ],
      "pista": "Un agricultor golpeado en el ojo.",
      "explicacion": "Agentes: Fusarium, Aspergillus, Cephalosporium, Candida."
    },
    {
      "id": "hongos-088",
      "nivel": "d",
      "pregunta": "Signos de queratitis micótica:",
      "correcta": "Infiltrado de bordes plumosos, lesiones satélite e hipopión",
      "distractores": [
        "Úlcera en anillo por Acanthamoeba",
        "Ojo seco",
        "Conjuntivitis purulenta aguda",
        "Úlcera dendrítica"
      ],
      "explicacion": "Comienzo larvado, menos doloroso que la bacteriana."
    },
    {
      "id": "hongos-089",
      "nivel": "m",
      "pregunta": "Tratamiento de la queratitis micótica:",
      "correcta": "Natamicina o voriconazol tópico",
      "distractores": [
        "Aciclovir",
        "Griseofulvina",
        "Corticoides solos",
        "Ciprofloxacino tópico"
      ],
      "pista": "Antifúngico de los polienos que se aplica en el ojo.",
      "explicacion": "Natamicina tópica."
    },
    {
      "id": "hongos-090",
      "nivel": "f",
      "pregunta": "Candida spp. en el organismo es:",
      "correcta": "Habitante normal de mucosas (oportunista)",
      "distractores": [
        "Un dermatofito",
        "Siempre patógena externa",
        "Un protozoo",
        "Una bacteria"
      ],
      "pista": "Es comensal: está en la boca y el intestino de personas sanas.",
      "explicacion": "Comensal de mucosas digestiva, respiratoria y mucocutáneas."
    },
    {
      "id": "hongos-091",
      "nivel": "x",
      "pregunta": "Porcentaje de infecciones fúngicas nosocomiales causadas por Candida:",
      "correcta": "75–88 %",
      "distractores": [
        "100 %",
        "25 %",
        "1 %",
        "5 %"
      ],
      "explicacion": "75–88 % de las nosocomiales; 25 % de las superficiales."
    },
    {
      "id": "hongos-092",
      "nivel": "d",
      "pregunta": "Especie de Candida que NO forma hifas ni pseudohifas:",
      "correcta": "C. glabrata",
      "distractores": [
        "C. tropicalis",
        "C. dubliniensis",
        "C. albicans",
        "C. parapsilosis"
      ],
      "explicacion": "C. glabrata: solo levaduras; vaginitis recurrente; poca sensibilidad a azoles."
    },
    {
      "id": "hongos-093",
      "nivel": "m",
      "pregunta": "Candida con resistencia intrínseca a fluconazol:",
      "correcta": "C. krusei",
      "distractores": [
        "C. albicans",
        "C. parapsilosis",
        "C. dubliniensis",
        "C. tropicalis"
      ],
      "pista": "Nunca se usa fluconazol contra ella.",
      "explicacion": "C. krusei: nunca fluconazol."
    },
    {
      "id": "hongos-094",
      "nivel": "m",
      "pregunta": "Candida multirresistente emergente que causa brotes hospitalarios:",
      "correcta": "C. auris",
      "distractores": [
        "C. albicans",
        "C. parapsilosis",
        "C. kefyr",
        "C. dubliniensis"
      ],
      "pista": "Emergente y con brotes en hospitales.",
      "explicacion": "C. auris: antifungigrama obligatorio."
    },
    {
      "id": "hongos-095",
      "nivel": "d",
      "pregunta": "Candida asociada a catéteres y neonatos por su biofilm muy potente:",
      "correcta": "C. parapsilosis",
      "distractores": [
        "C. krusei",
        "C. dubliniensis",
        "C. auris",
        "C. glabrata"
      ],
      "pista": "Biofilm en catéteres de neonatos.",
      "explicacion": "C. parapsilosis."
    },
    {
      "id": "hongos-096",
      "nivel": "x",
      "pregunta": "Candida típica de candidiasis oral en VIH, parecida a C. albicans pero no crece a 42 °C:",
      "correcta": "C. dubliniensis",
      "distractores": [
        "C. glabrata",
        "C. tropicalis",
        "C. auris",
        "C. krusei"
      ],
      "explicacion": "C. dubliniensis: no crece a 42 °C, no asimila xilosa, verde oscuro en CHROMagar."
    },
    {
      "id": "hongos-097",
      "nivel": "m",
      "pregunta": "Microcultivo en agar harina de maíz o de arroz: las clamidoconidias identifican a:",
      "correcta": "C. albicans",
      "distractores": [
        "C. glabrata",
        "Rhodotorula",
        "C. krusei",
        "Cryptococcus"
      ],
      "pista": "Esferas de pared gruesa en la punta de la pseudohifa.",
      "explicacion": "Clamidoconidias terminales en 2–3 días."
    },
    {
      "id": "hongos-098",
      "nivel": "m",
      "pregunta": "Medio que diferencia especies de Candida por color:",
      "correcta": "CHROMagar Candida",
      "distractores": [
        "Agar Niger",
        "Löwenstein-Jensen",
        "CGB",
        "MacConkey"
      ],
      "pista": "Diferencia especies por color.",
      "explicacion": "Selectivo y diferencial."
    },
    {
      "id": "hongos-099",
      "nivel": "d",
      "pregunta": "Factores de virulencia de Candida:",
      "correcta": "Polimorfismo levadura-hifa, adhesinas ALS, biofilm, proteasas y fosfolipasas",
      "distractores": [
        "Gliotoxina",
        "Cápsula y ureasa",
        "Toxina tetánica",
        "Cord factor"
      ],
      "explicacion": "ALS = adhesinas."
    },
    {
      "id": "hongos-100",
      "nivel": "f",
      "pregunta": "Muguet: lesión característica",
      "correcta": "Placas blancas removibles sobre base eritematosa",
      "distractores": [
        "Vesículas",
        "Costras negras en paladar",
        "Úlceras moriformes",
        "Lesiones verrugosas"
      ],
      "pista": "Lactante con lesiones blanquecinas en la lengua.",
      "explicacion": "Lactantes, VIH, corticoides inhalados."
    },
    {
      "id": "hongos-101",
      "nivel": "f",
      "pregunta": "Candidiasis vulvovaginal: flujo característico",
      "correcta": "Blanco grumoso tipo 'cottage', con prurito intenso",
      "distractores": [
        "Transparente",
        "Amarillo-verdoso espumoso",
        "Gris con olor a pescado",
        "Sanguinolento"
      ],
      "pista": "Se compara con el requesón.",
      "explicacion": "Prurito, ardor, flujo grumoso."
    },
    {
      "id": "hongos-102",
      "nivel": "m",
      "pregunta": "Intertrigo candidiásico:",
      "correcta": "Eritema en pliegues con lesiones satélite",
      "distractores": [
        "Placa anular con borde activo y centro claro",
        "Lesión verrugosa",
        "Nódulos en cadena",
        "Úlcera indolora"
      ],
      "pista": "Axilas e ingles; lo que la separa de la tiña.",
      "explicacion": "Las lesiones satélite lo diferencian de la tiña."
    },
    {
      "id": "hongos-103",
      "nivel": "m",
      "pregunta": "Forma invasiva más común de Candida:",
      "correcta": "Candidemia",
      "distractores": [
        "Osteomielitis",
        "Endoftalmitis",
        "Endocarditis",
        "Meningitis"
      ],
      "pista": "Fiebre persistente en UCI con catéter.",
      "explicacion": "Fiebre persistente sin foco que no responde a antibióticos; UCI, catéter."
    },
    {
      "id": "hongos-104",
      "nivel": "m",
      "pregunta": "Tratamiento de primera línea de la candidiasis invasiva:",
      "correcta": "Equinocandinas (caspofungina, micafungina)",
      "distractores": [
        "Nistatina",
        "Clotrimazol",
        "Terbinafina",
        "Griseofulvina"
      ],
      "pista": "Inhiben el β-glucano de la pared.",
      "explicacion": "Fluconazol si está estable y la cepa es sensible."
    },
    {
      "id": "hongos-105",
      "nivel": "f",
      "pregunta": "Tratamiento de la candidiasis vaginal no complicada:",
      "correcta": "Fluconazol 150 mg VO dosis única (o clotrimazol/miconazol tópico)",
      "distractores": [
        "Caspofungina",
        "Metronidazol",
        "Anfotericina B",
        "Voriconazol"
      ],
      "pista": "Un azol oral de 150 mg.",
      "explicacion": "Azoles."
    },
    {
      "id": "hongos-106",
      "nivel": "m",
      "pregunta": "Candidemia asociada a catéter. Además del antifúngico:",
      "correcta": "Retirar el catéter",
      "distractores": [
        "Agregar vancomicina",
        "Cambiar el apósito",
        "Nada más",
        "Dar corticoides"
      ],
      "pista": "El biofilm protege al hongo.",
      "explicacion": "El biofilm protege al hongo."
    },
    {
      "id": "hongos-107",
      "nivel": "f",
      "pregunta": "Tratamiento de la candidiasis oral (muguet):",
      "correcta": "Nistatina en enjuague o clotrimazol (fluconazol si VIH)",
      "distractores": [
        "Caspofungina",
        "Griseofulvina",
        "Anfotericina B IV",
        "Voriconazol"
      ],
      "pista": "Tratamiento tópico de una forma superficial.",
      "explicacion": "Superficial: tópicos."
    },
    {
      "id": "hongos-108",
      "nivel": "x",
      "pregunta": "Endocarditis por Candida:",
      "correcta": "Anfotericina B ± flucitosina",
      "distractores": [
        "Fluconazol tópico",
        "Terbinafina",
        "No se trata",
        "Nistatina"
      ],
      "explicacion": "Más cirugía valvular en la práctica."
    },
    {
      "id": "hongos-109",
      "nivel": "f",
      "pregunta": "Cryptococcus es:",
      "correcta": "Una levadura encapsulada que se reproduce por gemación (sin hifas)",
      "distractores": [
        "Un dermatofito",
        "Un dimórfico",
        "Un moho septado",
        "Una bacteria"
      ],
      "pista": "En tinta china se ve un halo claro.",
      "explicacion": "Levadura de 4–6 µm con cápsula."
    },
    {
      "id": "hongos-110",
      "nivel": "d",
      "pregunta": "La cápsula de Cryptococcus está formada por:",
      "correcta": "Glucuronoxilomanano (GXM)",
      "distractores": [
        "Quitina",
        "Ácido hialurónico",
        "Peptidoglucano",
        "Ácidos micólicos"
      ],
      "explicacion": "GXM: principal factor de virulencia; impide fagocitosis."
    },
    {
      "id": "hongos-111",
      "nivel": "f",
      "pregunta": "Hábitat de C. neoformans:",
      "correcta": "Excremento de palomas",
      "distractores": [
        "Espinas de rosas",
        "Suelo de cafetales",
        "Cuevas con murciélagos",
        "Eucaliptos"
      ],
      "pista": "Aves de las plazas.",
      "explicacion": "C. gattii: eucaliptos."
    },
    {
      "id": "hongos-112",
      "nivel": "d",
      "pregunta": "C. gattii afecta típicamente a:",
      "correcta": "Inmunocompetentes; se asocia a eucaliptos",
      "distractores": [
        "Pacientes con VIH con CD4 < 100",
        "Agricultores de café",
        "Diabéticos",
        "Neonatos"
      ],
      "explicacion": "Serotipos B y C; criptococomas."
    },
    {
      "id": "hongos-113",
      "nivel": "d",
      "pregunta": "Enzima de Cryptococcus que facilita el paso por la barrera hematoencefálica:",
      "correcta": "Ureasa",
      "distractores": [
        "Gliotoxina",
        "Coagulasa",
        "Catalasa",
        "Lipasa"
      ],
      "explicacion": "Ureasa positiva en todas las especies."
    },
    {
      "id": "hongos-114",
      "nivel": "m",
      "pregunta": "Cryptococcus sobrevive dentro del macrófago y se disemina como un:",
      "correcta": "Caballo de Troya",
      "distractores": [
        "Comensal",
        "Biofilm",
        "Parásito obligado",
        "Lobo con piel de oveja"
      ],
      "pista": "Viaja escondido dentro del macrófago.",
      "explicacion": "'Caballo de Troya' hacia el SNC."
    },
    {
      "id": "hongos-115",
      "nivel": "m",
      "pregunta": "Célula inmune clave contra Cryptococcus:",
      "correcta": "Linfocitos T CD4+",
      "distractores": [
        "Eosinófilos",
        "Mastocitos",
        "Basófilos",
        "Linfocitos B solos"
      ],
      "pista": "Por eso el VIH es el gran factor de riesgo.",
      "explicacion": "Por eso el VIH es el gran factor de riesgo."
    },
    {
      "id": "hongos-116",
      "nivel": "m",
      "pregunta": "Forma más grave de criptococosis:",
      "correcta": "Meningoencefalitis (VIH con CD4 < 100)",
      "distractores": [
        "Pulmonar asintomática",
        "Ósea",
        "Prostática",
        "Cutánea"
      ],
      "pista": "Afecta el SNC con CD4 < 100.",
      "explicacion": "Cefalea progresiva, fiebre, confusión, hipertensión intracraneal."
    },
    {
      "id": "hongos-117",
      "nivel": "x",
      "pregunta": "La criptococosis también se conoce como:",
      "correcta": "Enfermedad de Busse-Buschke, torulosis o blastomicosis europea",
      "distractores": [
        "Fiebre de Tingo María",
        "Enfermedad de Lutz-Splendore",
        "Enfermedad de Darling",
        "Mal de Pott"
      ],
      "explicacion": "Darling = histoplasmosis; Lutz-Splendore = paracoccidioidomicosis."
    },
    {
      "id": "hongos-118",
      "nivel": "d",
      "pregunta": "Tinción histológica que tiñe la cápsula de Cryptococcus de rojo:",
      "correcta": "Mucicarmina",
      "distractores": [
        "Gram",
        "Ziehl-Neelsen",
        "Grocott",
        "Giemsa"
      ],
      "explicacion": "Mucicarmina: cápsula roja brillante."
    },
    {
      "id": "hongos-119",
      "nivel": "d",
      "pregunta": "Medio donde Cryptococcus forma colonias pigmentadas (melanina):",
      "correcta": "Agar Niger (semilla de ave / ácido cafeico)",
      "distractores": [
        "MacConkey",
        "Mueller-Hinton",
        "CHROMagar",
        "CGB"
      ],
      "explicacion": "Por la fenol oxidasa (melanina)."
    },
    {
      "id": "hongos-120",
      "nivel": "x",
      "pregunta": "Medio CGB: C. gattii crece y vira a ___; C. neoformans ___:",
      "correcta": "Azul / no crece",
      "distractores": [
        "Verde / vira a azul",
        "Rojo / crece",
        "Negro / negro",
        "Amarillo / crece"
      ],
      "explicacion": "L-canavanina, glicina, azul de bromotimol."
    },
    {
      "id": "hongos-121",
      "nivel": "d",
      "pregunta": "Prueba diagnóstica más útil (gold standard práctico) de la criptococosis:",
      "correcta": "Aglutinación con látex del antígeno capsular (GXM)",
      "distractores": [
        "PPD",
        "Galactomanano",
        "Hemocultivo",
        "Tubo germinal"
      ],
      "explicacion": "> 90 % sensibilidad y especificidad; títulos que suben = mal pronóstico."
    },
    {
      "id": "hongos-122",
      "nivel": "m",
      "pregunta": "Tratamiento de inducción de la meningitis criptocócica:",
      "correcta": "Anfotericina B + flucitosina por 2 semanas",
      "distractores": [
        "Itraconazol",
        "Caspofungina",
        "Fluconazol solo",
        "Voriconazol"
      ],
      "pista": "Un polieno más un antimetabolito.",
      "explicacion": "Luego fluconazol a dosis alta 8 semanas y mantenimiento ≥ 1 año."
    },
    {
      "id": "hongos-123",
      "nivel": "d",
      "pregunta": "En un paciente con VIH y meningitis criptocócica, el TAR:",
      "correcta": "No se inicia inmediatamente por riesgo de IRIS",
      "distractores": [
        "Está contraindicado de por vida",
        "No influye",
        "Se inicia de inmediato",
        "Se da antes del antifúngico"
      ],
      "explicacion": "Riesgo de síndrome inflamatorio de reconstitución inmune."
    },
    {
      "id": "hongos-124",
      "nivel": "f",
      "pregunta": "Hábitat de Histoplasma capsulatum:",
      "correcta": "Suelo ácido con guano de aves y murciélagos (cuevas, gallineros)",
      "distractores": [
        "Excremento de palomas",
        "Agua de piscinas",
        "Eucaliptos",
        "Espinas de rosas"
      ],
      "pista": "La «fiebre de las cavernas».",
      "explicacion": "Cuevas: 'fiebre de las cavernas'."
    },
    {
      "id": "hongos-125",
      "nivel": "m",
      "pregunta": "Zonas endémicas de histoplasmosis en el Perú:",
      "correcta": "Tingo María, Oxapampa, Pucallpa, Iquitos",
      "distractores": [
        "Puno y Cusco",
        "Tacna",
        "Lima y Callao",
        "Arequipa"
      ],
      "pista": "Ciudades de la selva.",
      "explicacion": "Selva."
    },
    {
      "id": "hongos-126",
      "nivel": "m",
      "pregunta": "Sinónimos de la histoplasmosis:",
      "correcta": "Enfermedad de Darling, fiebre de las cavernas, fiebre de Tingo María",
      "distractores": [
        "Torulosis",
        "Mal de Pott",
        "Busse-Buschke",
        "Lutz-Splendore"
      ],
      "pista": "Uno de sus nombres lleva el de una ciudad de Huánuco.",
      "explicacion": "Darling."
    },
    {
      "id": "hongos-127",
      "nivel": "m",
      "pregunta": "Levadura de Histoplasma en tejido:",
      "correcta": "Pequeña (2–5 µm), intracelular dentro de macrófagos",
      "distractores": [
        "Con cápsula gruesa",
        "Con gemación de base ancha",
        "En forma de cigarro",
        "Grande con gemación múltiple"
      ],
      "pista": "Se esconde en una célula fagocítica.",
      "explicacion": "Intracelular en macrófagos."
    },
    {
      "id": "hongos-128",
      "nivel": "m",
      "pregunta": "Fase micelial de Histoplasma: estructura característica",
      "correcta": "Macroconidias tuberculadas (espiculadas)",
      "distractores": [
        "Esporangios",
        "Macroconidias en canoa",
        "Conidios en margarita",
        "Conidios en paleta"
      ],
      "pista": "Grandes y con proyecciones como púas.",
      "explicacion": "Las microconidias son las infectantes."
    },
    {
      "id": "hongos-129",
      "nivel": "x",
      "pregunta": "Molécula de Histoplasma que esconde los β-glucanos de la Dectina-1:",
      "correcta": "α-(1,3)-glucano",
      "distractores": [
        "gp43",
        "GXM",
        "CotH",
        "Hsp60"
      ],
      "explicacion": "Igual que Paracoccidioides."
    },
    {
      "id": "hongos-130",
      "nivel": "x",
      "pregunta": "Histoplasma entra 'silenciosamente' al macrófago uniéndose al receptor CR3 mediante:",
      "correcta": "Hsp60",
      "distractores": [
        "Cord factor",
        "Ureasa",
        "ALS",
        "Gliotoxina"
      ],
      "explicacion": "Hsp60–CR3."
    },
    {
      "id": "hongos-131",
      "nivel": "d",
      "pregunta": "En inmunocompetentes, la histoplasmosis es asintomática en:",
      "correcta": "95 %",
      "distractores": [
        "5 %",
        "50 %",
        "0 %",
        "20 %"
      ],
      "explicacion": "95 % asintomática."
    },
    {
      "id": "hongos-132",
      "nivel": "m",
      "pregunta": "Histoplasmosis pulmonar crónica se confunde con TB porque da:",
      "correcta": "Cavitaciones apicales, tos crónica y hemoptisis",
      "distractores": [
        "Derrame con ADA alto",
        "Úlceras orales",
        "Signo del halo",
        "Lesiones verrugosas"
      ],
      "pista": "Lesiones en los vértices del pulmón.",
      "explicacion": "En pacientes con EPOC."
    },
    {
      "id": "hongos-133",
      "nivel": "m",
      "pregunta": "Histoplasmosis diseminada progresiva: paciente típico y hallazgos",
      "correcta": "VIH con CD4 < 150: fiebre, hepatoesplenomegalia, adenopatías y pancitopenia",
      "distractores": [
        "Asmático con IgE alta",
        "Diabético con escara negra",
        "Jardinero con nódulos",
        "Niño con gato"
      ],
      "pista": "VIH con CD4 bajos y compromiso de médula ósea.",
      "explicacion": "También úlceras mucocutáneas."
    },
    {
      "id": "hongos-134",
      "nivel": "d",
      "pregunta": "Prueba más útil en histoplasmosis diseminada en VIH:",
      "correcta": "Antígeno en orina (y suero)",
      "distractores": [
        "Tinta china",
        "PPD",
        "Galactomanano",
        "Histoplasmina"
      ],
      "explicacion": "Muy sensible."
    },
    {
      "id": "hongos-135",
      "nivel": "d",
      "pregunta": "Gold standard diagnóstico de la histoplasmosis:",
      "correcta": "Cultivo (lento, 2–6 semanas)",
      "distractores": [
        "Histoplasmina",
        "PCR",
        "Radiografía",
        "Serología"
      ],
      "explicacion": "Moho a 25 °C, levadura a 37 °C."
    },
    {
      "id": "hongos-136",
      "nivel": "d",
      "pregunta": "Sinónimos de la paracoccidioidomicosis:",
      "correcta": "Blastomicosis sudamericana, enfermedad de Lutz-Splendore",
      "distractores": [
        "Enfermedad de Darling",
        "Torulosis",
        "Blastomicosis europea",
        "Fiebre de Tingo María"
      ],
      "explicacion": "Granuloma paracoccidioidal."
    },
    {
      "id": "hongos-137",
      "nivel": "f",
      "pregunta": "Levadura de Paracoccidioides en tejido:",
      "correcta": "Grande (10–30 µm) con gemación múltiple en 'timón de barco'",
      "distractores": [
        "Con cápsula en tinta china",
        "Pequeña intracelular",
        "Gemación única de base ancha",
        "En cigarro"
      ],
      "pista": "Se compara con el volante de una nave.",
      "explicacion": "Timón de barco / orejas de Mickey."
    },
    {
      "id": "hongos-138",
      "nivel": "d",
      "pregunta": "¿Por qué la paracoccidioidomicosis es más frecuente en hombres (9:1)?",
      "correcta": "Porque los estrógenos inhiben la transformación a levadura",
      "distractores": [
        "Por la testosterona",
        "Por herencia ligada al X",
        "Porque fuman más",
        "Por casualidad"
      ],
      "explicacion": "Estrógenos protegen."
    },
    {
      "id": "hongos-139",
      "nivel": "m",
      "pregunta": "Paciente típico de paracoccidioidomicosis:",
      "correcta": "Hombre rural agricultor (café, tabaco), fumador y bebedor",
      "distractores": [
        "Explorador de cuevas",
        "Mujer embarazada",
        "Niño de ciudad",
        "Paciente con catéter"
      ],
      "pista": "Varón del campo con hábitos de riesgo.",
      "explicacion": "Suelo húmedo, cafetales, tabacales."
    },
    {
      "id": "hongos-140",
      "nivel": "m",
      "pregunta": "Lesión casi diagnóstica de paracoccidioidomicosis crónica:",
      "correcta": "Úlceras mucosas moriformes (encías, paladar, labios)",
      "distractores": [
        "Escara negra en paladar",
        "Placas blancas removibles",
        "Nódulos en cadena",
        "Placa anular"
      ],
      "pista": "Lesiones en la boca que parecen moras.",
      "explicacion": "Estomatitis moriforme."
    },
    {
      "id": "hongos-141",
      "nivel": "x",
      "pregunta": "Glándula afectada que causa insuficiencia tipo Addison en paracoccidioidomicosis:",
      "correcta": "Suprarrenales",
      "distractores": [
        "Paratiroides",
        "Hipófisis",
        "Tiroides",
        "Páncreas"
      ],
      "explicacion": "Fatiga, hipotensión, hiperpigmentación."
    },
    {
      "id": "hongos-142",
      "nivel": "m",
      "pregunta": "Tip ENAM: paciente rural con cuadro tipo TB y baciloscopía negativa →",
      "correcta": "Paracoccidioidomicosis",
      "distractores": [
        "Aspergiloma",
        "Neumocistosis",
        "Mucormicosis",
        "Histoplasmosis aguda"
      ],
      "pista": "Cuadro tipo TB con BK negativa en zona rural.",
      "explicacion": "Pensar en paracoccidioidomicosis."
    },
    {
      "id": "hongos-143",
      "nivel": "d",
      "pregunta": "Forma clínica más frecuente (85–90 %) de paracoccidioidomicosis:",
      "correcta": "Crónica del adulto",
      "distractores": [
        "Meníngea",
        "Aguda juvenil",
        "Cutánea primaria",
        "Ocular"
      ],
      "explicacion": "Pulmonar + mucosas."
    },
    {
      "id": "hongos-144",
      "nivel": "d",
      "pregunta": "Principal antígeno diagnóstico de Paracoccidioides:",
      "correcta": "gp43",
      "distractores": [
        "Hsp60",
        "Galactomanano",
        "ESAT-6",
        "GXM"
      ],
      "explicacion": "Anti-gp43: títulos que bajan = buena respuesta."
    },
    {
      "id": "hongos-145",
      "nivel": "x",
      "pregunta": "Granuloma de la paracoccidioidomicosis:",
      "correcta": "No caseificante y supurativo",
      "distractores": [
        "Con cuerpos muriformes",
        "Caseificante",
        "Con células de Reed-Sternberg",
        "Sin granuloma"
      ],
      "explicacion": "Diferente a la TB (caseificante)."
    },
    {
      "id": "hongos-146",
      "nivel": "m",
      "pregunta": "Tratamiento de elección de la paracoccidioidomicosis leve-moderada:",
      "correcta": "Itraconazol VO 6–12 meses (alternativa TMP-SMX)",
      "distractores": [
        "Fluconazol",
        "Nistatina",
        "Caspofungina",
        "Griseofulvina"
      ],
      "pista": "Un azol oral, por tiempo prolongado.",
      "explicacion": "Grave: anfotericina B IV y luego itraconazol."
    },
    {
      "id": "hongos-147",
      "nivel": "d",
      "pregunta": "Levadura de Blastomyces en tejido:",
      "correcta": "Grande (8–15 µm), pared gruesa refringente, gemación única de base ancha",
      "distractores": [
        "Pequeña intracelular",
        "Encapsulada",
        "Timón de barco",
        "En cigarro"
      ],
      "explicacion": "Base ancha."
    },
    {
      "id": "hongos-148",
      "nivel": "d",
      "pregunta": "Zona endémica de Blastomyces dermatitidis:",
      "correcta": "Norteamérica: Grandes Lagos, ríos Ohio y Misisipi",
      "distractores": [
        "Brasil",
        "Europa",
        "Selva peruana",
        "África"
      ],
      "explicacion": "Suelo húmedo cerca de agua."
    },
    {
      "id": "hongos-149",
      "nivel": "d",
      "pregunta": "Localización extrapulmonar más frecuente de la blastomicosis:",
      "correcta": "Piel (lesiones verrugosas)",
      "distractores": [
        "Riñón",
        "Cerebro",
        "Hígado",
        "Ojo"
      ],
      "explicacion": "Luego hueso y genitourinario."
    },
    {
      "id": "hongos-150",
      "nivel": "d",
      "pregunta": "Prueba de referencia para blastomicosis:",
      "correcta": "Cultivo",
      "distractores": [
        "Galactomanano",
        "PPD",
        "Tinta china",
        "Serología"
      ],
      "explicacion": "Moho a 25–30 °C, levadura a 37 °C."
    },
    {
      "id": "hongos-151",
      "nivel": "x",
      "pregunta": "Fase micelial de Blastomyces: conidios en forma de",
      "correcta": "Paleta (lollipop)",
      "distractores": [
        "Canoa",
        "Huso rugoso",
        "Margarita",
        "Lágrima en alambre"
      ],
      "explicacion": "Paleta."
    },
    {
      "id": "hongos-152",
      "nivel": "f",
      "pregunta": "Los dermatofitos infectan:",
      "correcta": "Tejido queratinizado: piel, pelo y uñas",
      "distractores": [
        "SNC",
        "Sangre",
        "Órganos internos",
        "Pulmón"
      ],
      "pista": "Nunca invaden órganos internos.",
      "explicacion": "No invaden órganos internos."
    },
    {
      "id": "hongos-153",
      "nivel": "x",
      "pregunta": "Enzima/compuesto que rompe los puentes disulfuro de la queratina en los dermatofitos:",
      "correcta": "Sulfito",
      "distractores": [
        "Gliotoxina",
        "Coagulasa",
        "Ureasa",
        "Catalasa"
      ],
      "explicacion": "Sulfito + queratinasas."
    },
    {
      "id": "hongos-154",
      "nivel": "m",
      "pregunta": "Dermatofito más frecuente en el Perú (estudio IMT Daniel A. Carrión):",
      "correcta": "T. rubrum",
      "distractores": [
        "M. canis",
        "M. gypseum",
        "T. mentagrophytes",
        "E. floccosum"
      ],
      "pista": "El dermatofito más frecuente del mundo.",
      "explicacion": "Predominante; subió de 67 % a 80 %."
    },
    {
      "id": "hongos-155",
      "nivel": "x",
      "pregunta": "Porcentaje de dermatofitos antropófilos en ese estudio:",
      "correcta": "93 %",
      "distractores": [
        "20 %",
        "50 %",
        "100 %",
        "6 %"
      ],
      "explicacion": "93,11 % antropófilos, 6,89 % zoófilos."
    },
    {
      "id": "hongos-156",
      "nivel": "f",
      "pregunta": "Dermatofito zoófilo asociado a gatos y perros:",
      "correcta": "M. canis",
      "distractores": [
        "T. tonsurans",
        "T. rubrum",
        "E. floccosum",
        "Ninguno"
      ],
      "pista": "Tiña del cuero cabelludo en niños con mascotas.",
      "explicacion": "Tiña capitis en niños."
    },
    {
      "id": "hongos-157",
      "nivel": "d",
      "pregunta": "Microconidios en lágrima a lo largo de la hifa ('pájaros sobre un alambre') y colonia con reverso rojo vinoso:",
      "correcta": "T. rubrum",
      "distractores": [
        "M. canis",
        "E. floccosum",
        "Sporothrix",
        "Fusarium"
      ],
      "explicacion": "T. rubrum."
    },
    {
      "id": "hongos-158",
      "nivel": "m",
      "pregunta": "Macroconidios fusiformes, de pared gruesa y rugosa, con reverso amarillento:",
      "correcta": "M. canis",
      "distractores": [
        "Alternaria",
        "E. floccosum",
        "Fusarium",
        "T. rubrum"
      ],
      "pista": "Macroconidios en huso, de pared rugosa.",
      "explicacion": "M. canis."
    },
    {
      "id": "hongos-159",
      "nivel": "d",
      "pregunta": "Dermatofito sin microconidios, con macroconidios claviformes (maza) y colonia caqui:",
      "correcta": "E. floccosum",
      "distractores": [
        "T. mentagrophytes",
        "M. canis",
        "Cladosporium",
        "T. rubrum"
      ],
      "explicacion": "E. floccosum."
    },
    {
      "id": "hongos-160",
      "nivel": "m",
      "pregunta": "'Síndrome de una mano y dos pies' es típico de:",
      "correcta": "T. rubrum",
      "distractores": [
        "Sporothrix",
        "Candida",
        "M. canis",
        "E. floccosum"
      ],
      "pista": "Una mano y los dos pies.",
      "explicacion": "T. rubrum."
    },
    {
      "id": "hongos-161",
      "nivel": "m",
      "pregunta": "Querion de Celso es una complicación de:",
      "correcta": "Tiña capitis inflamatoria (M. canis)",
      "distractores": [
        "Intertrigo",
        "Esporotricosis",
        "Pie de atleta",
        "Onicomicosis"
      ],
      "pista": "Complicación supurativa en niños con mascotas.",
      "explicacion": "Placa inflamatoria supurativa en cuero cabelludo."
    },
    {
      "id": "hongos-162",
      "nivel": "f",
      "pregunta": "Muestra para diagnóstico de dermatofitosis:",
      "correcta": "Raspado del borde activo de la lesión, uñas o pelos",
      "distractores": [
        "Orina",
        "LCR",
        "Sangre",
        "Esputo"
      ],
      "pista": "De donde la tiña avanza.",
      "explicacion": "KOH + cultivo en Sabouraud/Mycosel a 25–30 °C. La serología no se usa."
    },
    {
      "id": "hongos-163",
      "nivel": "m",
      "pregunta": "En el KOH de una dermatofitosis se observan:",
      "correcta": "Hifas hialinas septadas y artroconidias",
      "distractores": [
        "Cuerpos muriformes",
        "Bacilos",
        "Hifas anchas no septadas",
        "Levaduras en gemación"
      ],
      "pista": "Lo mismo que se ve en cualquier tiña.",
      "explicacion": "En M. canis: invasión ectothrix del pelo."
    },
    {
      "id": "hongos-164",
      "nivel": "f",
      "pregunta": "Sporothrix schenckii es un hongo:",
      "correcta": "Dimórfico térmico",
      "distractores": [
        "Zigomiceto",
        "Dematiáceo sin dimorfismo",
        "Dermatofito",
        "Levaduriforme puro"
      ],
      "pista": "Cambia de moho a levadura.",
      "explicacion": "Moho a 25 °C, levadura a 37 °C."
    },
    {
      "id": "hongos-165",
      "nivel": "m",
      "pregunta": "Fase micelial (25 °C) de Sporothrix:",
      "correcta": "Conidios en margarita o roseta",
      "distractores": [
        "Cabeza aspergilar",
        "Conidios muriformes",
        "Macroconidias en canoa",
        "Esporangios"
      ],
      "pista": "Se ordenan como los pétalos de una flor.",
      "explicacion": "Hifas finas septadas."
    },
    {
      "id": "hongos-166",
      "nivel": "m",
      "pregunta": "Fase levadura (37 °C) de Sporothrix:",
      "correcta": "Levaduras en forma de cigarro o puro",
      "distractores": [
        "Pequeña intracelular",
        "Base ancha",
        "Levadura encapsulada",
        "Timón de barco"
      ],
      "pista": "A 37 °C se alarga como un habano.",
      "explicacion": "En tejido: cuerpo asteroide (Splendore-Hoeppli)."
    },
    {
      "id": "hongos-167",
      "nivel": "f",
      "pregunta": "Mecanismo de transmisión de la esporotricosis:",
      "correcta": "Inoculación traumática (espinas de rosa, madera) o arañazo/mordedura de gato",
      "distractores": [
        "Sexual",
        "Persona a persona",
        "Inhalación",
        "Fecal-oral"
      ],
      "pista": "Jardineros y dueños de felinos.",
      "explicacion": "Jardineros, agricultores, forestales."
    },
    {
      "id": "hongos-168",
      "nivel": "f",
      "pregunta": "Forma clínica clásica de la esporotricosis:",
      "correcta": "Linfocutánea: nódulos en cadena ascendente por los linfáticos",
      "distractores": [
        "Meníngea",
        "Pulmonar",
        "Ocular",
        "Ósea"
      ],
      "pista": "Lesiones que suben por el brazo, una tras otra.",
      "explicacion": "Miembros superiores 70–80 %; cara en niños."
    },
    {
      "id": "hongos-169",
      "nivel": "d",
      "pregunta": "Zonas del Perú con frecuencia alta de esporotricosis:",
      "correcta": "Costa norte y selva",
      "distractores": [
        "Puno",
        "Ninguna",
        "Lima",
        "Andes y costa central"
      ],
      "explicacion": "Baja en zonas andinas y costa central."
    },
    {
      "id": "hongos-170",
      "nivel": "m",
      "pregunta": "Gold standard diagnóstico de la esporotricosis:",
      "correcta": "Cultivo micológico",
      "distractores": [
        "Serología",
        "Radiografía",
        "KOH",
        "PPD"
      ],
      "pista": "Se demuestra el dimorfismo creciendo el hongo.",
      "explicacion": "Prueba de dimorfismo (25 → 37 °C)."
    },
    {
      "id": "hongos-171",
      "nivel": "x",
      "pregunta": "Agente principal de cromoblastomicosis en América:",
      "correcta": "Fonsecaea pedrosoi",
      "distractores": [
        "Sporothrix schenckii",
        "Cladosporium herbarum",
        "Alternaria",
        "Exophiala"
      ],
      "explicacion": "También Cladophialophora carrionii (zonas áridas), Phialophora verrucosa."
    },
    {
      "id": "hongos-172",
      "nivel": "d",
      "pregunta": "Los agentes de la cromoblastomicosis son hongos:",
      "correcta": "Dematiáceos (pigmentados con melanina)",
      "distractores": [
        "Dermatofitos",
        "Levaduras",
        "Hialinos",
        "Zigomicetos"
      ],
      "explicacion": "Orden Chaetothyriales."
    },
    {
      "id": "hongos-173",
      "nivel": "d",
      "pregunta": "Hallazgo característico en el KOH de cromoblastomicosis:",
      "correcta": "Cuerpos muriformes o escleróticos (células fumagoides) color café",
      "distractores": [
        "Levaduras en cigarro",
        "Tinta china positiva",
        "Hifas a 45°",
        "Timón de barco"
      ],
      "explicacion": "'Monedas de cobre'."
    },
    {
      "id": "hongos-174",
      "nivel": "m",
      "pregunta": "Clínica de la cromoblastomicosis:",
      "correcta": "Placas verrugosas en coliflor con puntos negros, sobre todo en miembros inferiores",
      "distractores": [
        "Nódulos en cadena ascendente",
        "Úlcera oral moriforme",
        "Placa anular",
        "Escara negra en paladar"
      ],
      "pista": "Agricultor de la Amazonía con lesión crónica en la pierna.",
      "explicacion": "Crónica de piel y subcutáneo; trauma con espinas o astillas."
    },
    {
      "id": "hongos-175",
      "nivel": "x",
      "pregunta": "En el Perú, la mayoría de casos de cromoblastomicosis se adquirieron en:",
      "correcta": "La Amazonía (Ucayali, San Martín)",
      "distractores": [
        "El desierto",
        "La costa",
        "Lima",
        "Los Andes"
      ],
      "explicacion": "84 % hombres, edad mediana 65 años."
    },
    {
      "id": "hongos-176",
      "nivel": "m",
      "pregunta": "Pneumocystis jirovecii es:",
      "correcta": "Un hongo (antes considerado protozoo)",
      "distractores": [
        "Una bacteria",
        "Un virus",
        "Un helminto",
        "Un protozoo"
      ],
      "pista": "Por estudios moleculares cambió de reino.",
      "explicacion": "Reino Fungi por estudios moleculares."
    },
    {
      "id": "hongos-177",
      "nivel": "x",
      "pregunta": "Pneumocystis se adhiere a:",
      "correcta": "Neumocitos tipo I",
      "distractores": [
        "Neumocitos tipo II",
        "Macrófagos solamente",
        "Hepatocitos",
        "Eritrocitos"
      ],
      "explicacion": "Neumocitos tipo I."
    },
    {
      "id": "hongos-178",
      "nivel": "f",
      "pregunta": "Riesgo principal de neumonía por Pneumocystis:",
      "correcta": "VIH con CD4 < 200 células/µL",
      "distractores": [
        "Diabetes",
        "Embarazo",
        "Asma",
        "Contacto con palomas"
      ],
      "pista": "VIH con CD4 bajos.",
      "explicacion": "También trasplante, neoplasias hematológicas, corticoides."
    },
    {
      "id": "hongos-179",
      "nivel": "m",
      "pregunta": "Clínica de la neumocistosis:",
      "correcta": "Fiebre, tos seca, disnea, hipoxemia; infiltrados bilaterales en vidrio esmerilado",
      "distractores": [
        "Úlceras orales",
        "Derrame con ADA alto",
        "Hemoptisis masiva",
        "Lesiones verrugosas"
      ],
      "pista": "Neumonía del VIH con CD4 < 200.",
      "explicacion": "Hipoxemia marcada."
    },
    {
      "id": "hongos-180",
      "nivel": "m",
      "pregunta": "Muestra de elección para Pneumocystis:",
      "correcta": "Lavado broncoalveolar",
      "distractores": [
        "LCR",
        "Sangre",
        "Heces",
        "Orina"
      ],
      "pista": "Se obtiene con un endoscopio en la vía aérea.",
      "explicacion": "También esputo inducido."
    },
    {
      "id": "hongos-181",
      "nivel": "d",
      "pregunta": "Tinción que tiñe los quistes de Pneumocystis:",
      "correcta": "Gomori-Grocott",
      "distractores": [
        "Gram",
        "Tinta china",
        "Giemsa",
        "Ziehl-Neelsen"
      ],
      "explicacion": "Giemsa tiñe formas tróficas, NO la pared del quiste."
    },
    {
      "id": "hongos-182",
      "nivel": "m",
      "pregunta": "Tratamiento de elección de la neumonía por Pneumocystis:",
      "correcta": "TMP-SMX (cotrimoxazol) por 21 días",
      "distractores": [
        "Voriconazol",
        "Fluconazol",
        "Anfotericina B",
        "Caspofungina sola"
      ],
      "pista": "Un antibiótico que bloquea el folato.",
      "explicacion": "Alternativas: pentamidina, atovacuona."
    },
    {
      "id": "hongos-183",
      "nivel": "m",
      "pregunta": "Mecanismo del cotrimoxazol:",
      "correcta": "Bloqueo secuencial de la síntesis de ácido fólico",
      "distractores": [
        "Inhibe β-glucano",
        "Forma poros",
        "Inhibe el ergosterol",
        "Inhibe ribosomas 30S"
      ],
      "pista": "Actúa sobre la vía del folato.",
      "explicacion": "Sin ácido fólico no hay ácidos nucleicos."
    },
    {
      "id": "hongos-184",
      "nivel": "m",
      "pregunta": "Levadura madre grande con muchas gemaciones alrededor. ¿Qué es y cómo se trata?",
      "correcta": "Paracoccidioides brasiliensis ('rueda de timón'); itraconazol",
      "distractores": [
        "Candida albicans; fluconazol",
        "Histoplasma capsulatum; anfotericina B",
        "Cryptococcus; anfotericina B + flucitosina"
      ],
      "pista": "Se compara con el volante de un barco.",
      "explicacion": "Rueda de timón = Paracoccidioides. Paracoccidioidomicosis: agricultor, úlceras orales moriformes, tos con BK negativa → itraconazol (grave: anfotericina B)."
    },
    {
      "id": "hongos-185",
      "nivel": "m",
      "pregunta": "Hifas septadas con muchas macroconidias en forma de canoa o media luna. Un agricultor se golpeó el ojo con una rama y tiene una úlcera corneal. Diagnóstico y tratamiento:",
      "correcta": "Queratitis por Fusarium; natamicina tópica",
      "distractores": [
        "Queratitis por Aspergillus; voriconazol",
        "Conjuntivitis bacteriana; ciprofloxacino",
        "Esporotricosis; itraconazol"
      ],
      "pista": "Macroconidias en canoa tras un trauma vegetal.",
      "explicacion": "Macroconidias en canoa = Fusarium. Queratitis por trauma vegetal → natamicina tópica. Si está diseminada en un neutropénico, voriconazol."
    },
    {
      "id": "hongos-186",
      "nivel": "m",
      "pregunta": "Microconidios redondos en racimos como uvas e hifas en espiral. Es:",
      "correcta": "Trichophyton mentagrophytes",
      "distractores": [
        "Trichophyton rubrum",
        "Microsporum canis",
        "Epidermophyton floccosum"
      ],
      "pista": "Espirales y racimos de uva.",
      "explicacion": "T. mentagrophytes: microconidios redondos en racimo + espirales; ureasa +. Produce tinea pedis inflamatoria y vesicular → terbinafina."
    },
    {
      "id": "hongos-187",
      "nivel": "m",
      "pregunta": "Hifas delgadas con conidios en forma de 'margarita' en la punta. El paciente es un jardinero con nódulos en cadena en el brazo. Tratamiento:",
      "correcta": "Itraconazol",
      "distractores": [
        "Griseofulvina",
        "Nistatina",
        "Vancomicina"
      ],
      "pista": "Conidios en margarita; nódulos que suben por el brazo.",
      "explicacion": "Sporothrix schenckii, esporotricosis linfocutánea → itraconazol (alternativa: yoduro de potasio). En tejido se ve como levadura en 'puro'."
    },
    {
      "id": "hongos-188",
      "nivel": "m",
      "pregunta": "Macroconidios en forma de mazo, de pared lisa y 2–4 células, SIN microconidios. ¿Qué es y qué NO infecta nunca?",
      "correcta": "Epidermophyton floccosum; el pelo",
      "distractores": [
        "Microsporum canis; las uñas",
        "Trichophyton rubrum; la piel",
        "Fusarium; la córnea"
      ],
      "pista": "Macroconidios en maza, sin microconidios.",
      "explicacion": "Epidermophyton: macroconidios en mazo lisos, sin microconidios. Infecta piel y uñas, nunca el pelo."
    },
    {
      "id": "hongos-189",
      "nivel": "d",
      "pregunta": "Niño de 6 años con un gato en casa. Placas redondas de alopecia en el cuero cabelludo, con descamación grisácea y pelos quebradizos. KOH: invasión ectothrix. Cultivo: reverso amarillo; macroconidios en huso, rugosos. ¿Agente y tratamiento?",
      "correcta": "M. canis; griseofulvina oral",
      "distractores": [
        "T. rubrum; terbinafina tópica",
        "E. floccosum; clotrimazol",
        "Candida; nistatina"
      ],
      "explicacion": "Niño con gato, alopecia, reverso amarillo, macroconidios en huso rugosos."
    },
    {
      "id": "hongos-190",
      "nivel": "m",
      "pregunta": "Niña de 8 años con una placa inflamada, húmeda y con pus en el cuero cabelludo, con caída del pelo, tras jugar con un perro callejero. ¿Cómo se llama la lesión y qué agente sospechas?",
      "correcta": "Querion de Celso; M. canis",
      "distractores": [
        "Intertrigo; Candida",
        "Onicomicosis; T. rubrum",
        "Tinea cruris; E. floccosum"
      ],
      "pista": "Placa supurativa del cuero cabelludo tras contacto con un animal.",
      "explicacion": "Tiña capitis inflamatoria con pus tras contacto con animal."
    },
    {
      "id": "hongos-191",
      "nivel": "m",
      "pregunta": "Paciente con tinea pedis crónica y onicomicosis por T. rubrum en varias uñas. ¿Tratamiento adecuado?",
      "correcta": "Terbinafina oral",
      "distractores": [
        "Nistatina oral",
        "Griseofulvina tópica",
        "Caspofungina"
      ],
      "pista": "Las uñas necesitan tratamiento sistémico.",
      "explicacion": "En uñas la crema no penetra; la griseofulvina es oral y se reserva para el pelo."
    },
    {
      "id": "hongos-192",
      "nivel": "f",
      "pregunta": "Niño con tinea capitis. Una mamá pregunta por qué no basta una crema. ¿Por qué se da griseofulvina ORAL?",
      "correcta": "Porque la crema no penetra el pelo",
      "distractores": [
        "Porque M. canis es una bacteria",
        "Porque las cremas son tóxicas",
        "No se necesita tratamiento"
      ],
      "pista": "El hongo está en el interior del cabello.",
      "explicacion": "El hongo está dentro del pelo."
    },
    {
      "id": "hongos-193",
      "nivel": "m",
      "pregunta": "KOH de una lesión de piel: hifas hialinas septadas con artroconidias. ¿Qué confirma y qué falta para saber la especie?",
      "correcta": "Es dermatofito; falta cultivo en Sabouraud",
      "distractores": [
        "Es Candida; falta tubo germinal",
        "Es Rhizopus; falta biopsia",
        "Es bacteria; falta Gram"
      ],
      "pista": "El KOH dice el grupo; la especie necesita otro paso.",
      "explicacion": "El KOH confirma dermatofito; la especie requiere cultivo y azul de lactofenol."
    }
  ]
};
