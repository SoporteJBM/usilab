// Casos clínicos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Estacion } from "../types";

export const casos: Estacion = {
  "id": "casos",
  "nombre": "Casos clínicos",
  "descripcion": "Casos para diagnosticar",
  "resumen": "Cómo resolver un caso:\n1. Ubica al paciente: edad, inmunidad, antecedentes (diabetes, catéter, viajes, mascotas, ocupación).\n2. Busca el dato clave del laboratorio: tinción, morfología, cultivo o prueba rápida.\n3. Une ambos: el antecedente te dice qué buscar y el laboratorio lo confirma.\n4. Piensa el tratamiento: en bacterias, siempre según el antibiograma.",
  "preguntas": [
    {
      "id": "casos-001",
      "nivel": "m",
      "caso": "Paciente inmunosuprimido con fiebre, tos y hemoptisis. Infiltrados pulmonares, galactomanano positivo y cultivo con hifas septadas ramificadas a 45°.",
      "correcta": "Aspergilosis invasiva",
      "distractores": [
        "Candidiasis oral",
        "Histoplasmosis",
        "Tiña capitis"
      ],
      "pista": "Inmunosupresión y galactomanano.",
      "explicacion": "Tratamiento: voriconazol."
    },
    {
      "id": "casos-002",
      "nivel": "f",
      "caso": "Adulto con diarrea acuosa profusa tipo 'agua de arroz' y deshidratación rápida. Bacilos Gram negativos curvos, oxidasa positiva.",
      "correcta": "Cólera",
      "distractores": [
        "Shigelosis",
        "Rotavirosis",
        "Giardiasis"
      ],
      "pista": "El tipo de diarrea es la clave.",
      "explicacion": "Lo principal es la rehidratación."
    },
    {
      "id": "casos-003",
      "nivel": "f",
      "caso": "Viajero con fiebre cíclica, esplenomegalia y anemia. La gota gruesa muestra trofozoítos en anillo dentro de los hematíes.",
      "correcta": "Malaria",
      "distractores": [
        "Leishmaniasis",
        "Dengue",
        "Enfermedad de Chagas"
      ],
      "pista": "Fiebre cíclica y formas en anillo.",
      "explicacion": "P. falciparum: combinación con artemisinina."
    },
    {
      "id": "casos-004",
      "nivel": "m",
      "caso": "Diabético en cetoacidosis con dolor facial, edema periorbitario y escara negra en el paladar. Biopsia con hifas anchas no septadas, ramificadas en ángulo recto.",
      "correcta": "Mucormicosis rinocerebral",
      "distractores": [
        "Aspergilosis pulmonar",
        "Histoplasmosis",
        "Candidiasis oral"
      ],
      "pista": "Hifas anchas sin tabiques.",
      "explicacion": "Anfotericina B liposomal y desbridamiento urgente."
    },
    {
      "id": "casos-005",
      "nivel": "m",
      "caso": "Nadador con dolor y prurito de oído. En la otoscopia hay detritus con puntos negros y el cultivo da colonias negras.",
      "correcta": "Otomicosis por Aspergillus niger",
      "distractores": [
        "Otitis media aguda",
        "Sinusitis",
        "Miringitis bacteriana"
      ],
      "pista": "Colonias negras en el conducto.",
      "explicacion": "Limpieza del conducto y clotrimazol tópico."
    },
    {
      "id": "casos-006",
      "nivel": "f",
      "caso": "Lactante de 2 meses con placas blancas en lengua y mucosa oral que se desprenden y dejan la base roja.",
      "correcta": "Candidiasis oral (muguet)",
      "distractores": [
        "Herpes labial",
        "Aftas",
        "Leucoplasia"
      ],
      "pista": "Se desprenden al raspar.",
      "explicacion": "Nistatina oral en suspensión."
    },
    {
      "id": "casos-007",
      "nivel": "d",
      "caso": "Varón de 60 años con TB antigua y caverna residual. Hemoptisis; la radiografía muestra una masa redonda dentro de la caverna con una media luna de aire.",
      "correcta": "Aspergiloma (bola fúngica)",
      "distractores": [
        "Reactivación de tuberculosis",
        "Cáncer de pulmón",
        "Absceso pulmonar"
      ],
      "pista": "El hongo coloniza una cavidad previa.",
      "explicacion": "Cirugía; embolización si la hemoptisis es masiva."
    },
    {
      "id": "casos-008",
      "nivel": "d",
      "caso": "Asmático de 30 años que empeora, con tapones de moco marrón, eosinofilia, IgE muy elevada y bronquiectasias centrales.",
      "correcta": "Aspergilosis broncopulmonar alérgica (ABPA)",
      "distractores": [
        "Aspergilosis invasiva",
        "Tuberculosis",
        "Neumonía por Klebsiella"
      ],
      "pista": "Es alérgica, no invasiva.",
      "explicacion": "Corticoides sistémicos e itraconazol."
    },
    {
      "id": "casos-009",
      "nivel": "m",
      "caso": "Agricultor golpeado en el ojo con una rama. Días después: ojo rojo, úlcera corneal de bordes plumosos e hipopión. Se ven macroconidias en canoa.",
      "correcta": "Queratitis por Fusarium",
      "distractores": [
        "Conjuntivitis bacteriana",
        "Queratitis herpética",
        "Uveítis"
      ],
      "pista": "Trauma vegetal y canoas.",
      "explicacion": "Natamicina tópica."
    },
    {
      "id": "casos-010",
      "nivel": "f",
      "caso": "Niño de 7 años con gato. Placas de alopecia con descamación grisácea en el cuero cabelludo; lámpara de Wood positiva; macroconidios en huso.",
      "correcta": "Tinea capitis por Microsporum canis",
      "distractores": [
        "Alopecia areata",
        "Dermatitis seborreica",
        "Tinea capitis por T. rubrum"
      ],
      "pista": "Huso de pared gruesa y mascota.",
      "explicacion": "Griseofulvina oral; revisar a la mascota."
    },
    {
      "id": "casos-011",
      "nivel": "m",
      "caso": "Deportista con prurito y descamación entre los dedos del pie y una uña gruesa y amarilla. Colonia blanca con reverso rojo vino.",
      "correcta": "Tinea pedis y onicomicosis por Trichophyton rubrum",
      "distractores": [
        "Candidiasis interdigital",
        "Psoriasis ungueal",
        "Tinea pedis por Epidermophyton"
      ],
      "pista": "El reverso rojo vino.",
      "explicacion": "Terbinafina oral por 12 semanas."
    },
    {
      "id": "casos-012",
      "nivel": "m",
      "caso": "Jardinera que se pinchó con un rosal. Nódulo que se ulcera en la mano y luego nódulos en cadena que suben por el brazo.",
      "correcta": "Esporotricosis linfocutánea",
      "distractores": [
        "Celulitis estreptocócica",
        "Leishmaniasis",
        "Tuberculosis cutánea"
      ],
      "pista": "Sigue el trayecto de los linfáticos.",
      "explicacion": "Itraconazol 3 a 6 meses."
    },
    {
      "id": "casos-013",
      "nivel": "d",
      "caso": "Agricultor de la selva con tos crónica y BK negativa, úlceras orales moriformes y adenopatías cervicales. En el esputo hay levaduras en 'rueda de timón'.",
      "correcta": "Paracoccidioidomicosis",
      "distractores": [
        "Tuberculosis",
        "Histoplasmosis",
        "Leishmaniasis mucosa"
      ],
      "pista": "Rueda de timón.",
      "explicacion": "Itraconazol; en casos graves, anfotericina B."
    },
    {
      "id": "casos-014",
      "nivel": "m",
      "caso": "Paciente con VIH y CD4 bajos que visitó cuevas con murciélagos en Tingo María. Fiebre, baja de peso, hepatoesplenomegalia y pancitopenia.",
      "correcta": "Histoplasmosis diseminada",
      "distractores": [
        "Tuberculosis miliar",
        "Linfoma",
        "Leishmaniasis visceral"
      ],
      "pista": "Cuevas y murciélagos.",
      "explicacion": "Anfotericina B liposomal y luego itraconazol."
    },
    {
      "id": "casos-015",
      "nivel": "m",
      "caso": "Paciente en UCI con catéter venoso central y fiebre. El hemocultivo muestra levaduras con tubo germinal positivo.",
      "correcta": "Candidemia por Candida albicans",
      "distractores": [
        "Fungemia por Rhodotorula",
        "Criptococosis",
        "Bacteriemia por S. aureus"
      ],
      "pista": "El tubo germinal identifica a una especie.",
      "explicacion": "Equinocandina y retirar el catéter."
    },
    {
      "id": "casos-016",
      "nivel": "m",
      "caso": "Paciente oncológico con catéter. El hemocultivo da una levadura rosada, sin hifas.",
      "correcta": "Fungemia por Rhodotorula",
      "distractores": [
        "Candidemia por C. albicans",
        "Aspergilosis",
        "Criptococosis"
      ],
      "pista": "El color es la clave.",
      "explicacion": "Retirar el catéter y anfotericina B."
    },
    {
      "id": "casos-017",
      "nivel": "f",
      "caso": "Mujer de 24 años con disuria. Nitritos y esterasa positivos, 30 leucocitos por campo. Urocultivo: 150 colonias (asa de 0.001 mL) rosadas en MacConkey; indol +, citrato −.",
      "correcta": "Cistitis por E. coli",
      "distractores": [
        "Pielonefritis por Proteus",
        "Muestra contaminada",
        "Uretritis por Trichomonas"
      ],
      "pista": "150 × 1000 = 1.5 × 10⁵ UFC/mL.",
      "explicacion": "Nitrofurantoína o fosfomicina según antibiograma."
    },
    {
      "id": "casos-018",
      "nivel": "m",
      "caso": "Anciano con sonda vesical. Orina de pH 8.5, olor amoniacal y cristales de estruvita. Colonias incoloras en MacConkey, swarming en agar sangre, ureasa +++ y H₂S +.",
      "correcta": "ITU complicada por Proteus mirabilis",
      "distractores": [
        "Cistitis por E. coli",
        "Candiduria",
        "ITU por Klebsiella"
      ],
      "pista": "Swarming y ureasa.",
      "explicacion": "Cambiar la sonda; no usar nitrofurantoína (resistencia natural)."
    },
    {
      "id": "casos-019",
      "nivel": "f",
      "caso": "Paciente alcohólico con neumonía del lóbulo superior derecho y esputo 'en jalea de grosella'. Colonias rosadas muy mucoides, indol −, citrato +, inmóvil.",
      "correcta": "Neumonía por Klebsiella pneumoniae",
      "distractores": [
        "Neumonía neumocócica",
        "Tuberculosis",
        "Aspergilosis"
      ],
      "pista": "Jalea de grosella y colonias mucoides.",
      "explicacion": "Ceftriaxona; si es BLEE, meropenem."
    },
    {
      "id": "casos-020",
      "nivel": "f",
      "caso": "Varón de 40 años con tos de más de 2 semanas, baja de peso y sudoración nocturna. Ziehl-Neelsen: 25 BAAR en 100 campos.",
      "correcta": "Tuberculosis pulmonar con baciloscopía positiva",
      "distractores": [
        "Neumonía bacteriana",
        "Paracoccidioidomicosis",
        "Cáncer de pulmón"
      ],
      "pista": "BAAR en el esputo.",
      "explicacion": "HRZE 2 meses y HR 4 meses, supervisado."
    },
    {
      "id": "casos-021",
      "nivel": "f",
      "caso": "Mujer con flujo vaginal amarillo-verdoso espumoso y prurito. En el sedimento urinario se ve un protozoo en forma de pera, con flagelos, que se mueve.",
      "correcta": "Tricomoniasis",
      "distractores": [
        "Candidiasis vaginal",
        "Vaginosis bacteriana",
        "Gonorrea"
      ],
      "pista": "Pera con flagelos.",
      "explicacion": "Metronidazol a la paciente y a su pareja."
    },
    {
      "id": "casos-022",
      "nivel": "d",
      "caso": "Paciente de Jaén con baja de peso, dolor abdominal y diarrea; asmático con corticoides crónicos. En heces se ven larvas rabditiformes.",
      "correcta": "Estrongiloidiasis",
      "distractores": [
        "Ascariasis",
        "Toxocariasis",
        "Anquilostomiasis"
      ],
      "pista": "Larvas, no huevos, en heces.",
      "explicacion": "Riesgo de hiperinfección por los corticoides."
    },
    {
      "id": "casos-023",
      "nivel": "m",
      "caso": "Ganadero con dolor en hipocondrio derecho, fiebre intermitente y eosinofilia marcada. Come berros crudos. En heces: huevos grandes, ovalados y operculados.",
      "correcta": "Fasciolosis",
      "distractores": [
        "Hidatidosis",
        "Amebiasis hepática",
        "Colecistitis"
      ],
      "pista": "Berros y huevos operculados.",
      "explicacion": "Triclabendazol."
    },
    {
      "id": "casos-024",
      "nivel": "m",
      "caso": "Mujer que volvió del oriente peruano con una lesión que pasó de mácula a nódulo indoloro con costra adherida. En el frotis, parásitos dentro de macrófagos.",
      "correcta": "Leishmaniasis cutánea",
      "distractores": [
        "Esporotricosis",
        "Histoplasmosis",
        "Escabiosis"
      ],
      "pista": "Lo transmite un flebótomo.",
      "explicacion": "Se confirma con frotis o cultivo de la lesión."
    },
    {
      "id": "casos-025",
      "nivel": "f",
      "caso": "Escolar de 6 años con 3 semanas de heces fétidas, voluminosas y grasosas que flotan, dolor cólico y distensión. En heces: trofozoítos binucleados.",
      "correcta": "Giardiasis",
      "distractores": [
        "Amebiasis",
        "Shigelosis",
        "Estrongiloidiasis"
      ],
      "pista": "Binucleados, 'como una cara'.",
      "explicacion": "Metronidazol."
    },
    {
      "id": "casos-026",
      "nivel": "d",
      "caso": "Varón de 70 años con bacteriemia por E. coli. Antibiograma: resistente a ceftriaxona y cefoxitina, sin sinergia con clavulánico, sensible a cefepime y meropenem.",
      "pregunta": "¿Qué mecanismo de resistencia sugiere?",
      "correcta": "AmpC",
      "distractores": [
        "BLEE",
        "Carbapenemasa",
        "E. coli sensible"
      ],
      "pista": "Cefoxitina resistente y sin sinergia.",
      "explicacion": "La BLEE se inhibe con clavulánico y es sensible a cefoxitina."
    },
    {
      "id": "casos-027",
      "nivel": "d",
      "caso": "Niño de un valle interandino con fiebre, palidez intensa e ictericia. En el frotis de sangre hay bacilos dentro de los hematíes.",
      "correcta": "Bartonelosis aguda (fiebre de la Oroya)",
      "distractores": [
        "Malaria",
        "Leptospirosis",
        "Hepatitis A"
      ],
      "pista": "Enfermedad de Carrión.",
      "explicacion": "Bartonella bacilliformis, transmitida por la titira (Lutzomyia)."
    },
    {
      "id": "casos-028",
      "nivel": "x",
      "caso": "Paciente en UCI con neumonía asociada a ventilador. Bacilo Gram negativo no fermentador, oxidasa positivo, pigmento verde. Resistente a ceftazidima, cefepime, imipenem y meropenem; sensible solo a colistina.",
      "pregunta": "¿Qué es y qué mecanismo sospechas?",
      "correcta": "Pseudomonas aeruginosa resistente a carbapenémicos: pérdida de porina o carbapenemasa",
      "distractores": [
        "Pseudomonas con BLEE sola",
        "Klebsiella productora de KPC",
        "Acinetobacter sensible",
        "Contaminación por Stenotrophomonas"
      ],
      "explicacion": "La BLEE sola no explica la resistencia a carbapenémicos."
    },
    {
      "id": "casos-029",
      "nivel": "x",
      "caso": "Diabética de 55 años en cetoacidosis recibió voriconazol por 'sinusitis fúngica'. Empeora con escara negra en el cornete y proptosis. Biopsia: hifas anchas en cinta.",
      "pregunta": "¿Qué pasó y cuál es la conducta?",
      "correcta": "Mucormicosis no cubierta por voriconazol: anfotericina B liposomal, desbridamiento urgente y corregir la cetoacidosis",
      "distractores": [
        "Aspergilosis resistente: subir voriconazol",
        "Fusariosis: natamicina",
        "Celulitis bacteriana: vancomicina",
        "Candidiasis: fluconazol"
      ],
      "explicacion": "Las hifas anchas sin tabiques no son de Aspergillus."
    },
    {
      "id": "casos-030",
      "nivel": "x",
      "caso": "Varón que inició HRZE hace 3 semanas. Ahora tiene ictericia y transaminasas 6 veces el valor normal.",
      "pregunta": "¿Qué haces?",
      "correcta": "Suspender isoniazida, rifampicina y pirazinamida y reintroducirlas de forma escalonada al normalizarse",
      "distractores": [
        "Seguir igual: es esperable",
        "Suspender solo el etambutol",
        "Cambiar a BPaLM definitivamente",
        "Agregar corticoides y seguir"
      ],
      "explicacion": "Los tres primeros son hepatotóxicos; el etambutol no."
    },
    {
      "id": "casos-031",
      "nivel": "x",
      "caso": "Niño con tos, sibilancias y eosinofilia marcada; semanas después, dolor abdominal. En heces hay huevos mamelonados.",
      "pregunta": "Diagnóstico y explicación de la tos:",
      "correcta": "Ascariasis: las larvas pasan por el pulmón (síndrome de Löffler) antes de llegar al intestino",
      "distractores": [
        "Strongyloides: hiperinfección",
        "Toxocariasis: larva migrans visceral",
        "Enterobius: migración perianal",
        "Asma alérgica sin relación con el parásito"
      ],
      "explicacion": "El ciclo pulmonar explica la fase respiratoria antes de la intestinal."
    },
    {
      "id": "casos-032",
      "nivel": "x",
      "caso": "Mujer con cistitis no complicada. Urocultivo: E. coli resistente a ceftriaxona con sinergia con clavulánico; sensible a fosfomicina, nitrofurantoína y meropenem.",
      "pregunta": "¿Mejor tratamiento?",
      "correcta": "Fosfomicina o nitrofurantoína oral",
      "distractores": [
        "Meropenem intravenoso",
        "Ceftriaxona intramuscular",
        "Amoxicilina-clavulánico",
        "Ciprofloxacino sin mirar el antibiograma"
      ],
      "explicacion": "Una cistitis por BLEE no necesita carbapenémico si hay opciones orales activas."
    },
    {
      "id": "casos-033",
      "nivel": "x",
      "caso": "Paciente en UCI con K. pneumoniae. En el antibiograma no hay halo alrededor de ningún disco, ni siquiera imipenem ni meropenem.",
      "pregunta": "Diagnóstico y manejo:",
      "correcta": "K. pneumoniae productora de carbapenemasa (KPC): ceftazidima-avibactam o colistina, con infectología",
      "distractores": [
        "BLEE: meropenem",
        "AmpC: cefepime",
        "Contaminación: repetir y no tratar",
        "MRSA: vancomicina"
      ],
      "explicacion": "Banco de laboratorio, caso C19."
    },
    {
      "id": "casos-034",
      "nivel": "x",
      "caso": "Paciente con tuberculosis pulmonar. GeneXpert: M. tuberculosis detectado, resistente a rifampicina.",
      "pregunta": "Diagnóstico y tratamiento:",
      "correcta": "TB resistente a rifampicina: esquema BPaLM (bedaquilina, pretomanid, linezolid y moxifloxacino)",
      "distractores": [
        "TB sensible: HRZE 2 meses y HR 4 meses",
        "Contaminación: repetir la baciloscopía",
        "TB latente: isoniazida sola",
        "Micobacteria no tuberculosa: sin tratamiento"
      ],
      "explicacion": "Banco de laboratorio, caso C22."
    },
    {
      "id": "casos-035",
      "nivel": "x",
      "caso": "Mujer con disuria. ECO: 20 células epiteliales escamosas por campo. Urocultivo: tres tipos de colonias con recuento bajo.",
      "pregunta": "¿Qué haces?",
      "correcta": "Repetir la muestra de chorro medio con higiene previa: está contaminada",
      "distractores": [
        "Tratar como infección mixta",
        "Iniciar meropenem",
        "Pedir un hemocultivo",
        "Diagnosticar pielonefritis"
      ],
      "explicacion": "Práctica 4: más de 15 células epiteliales por campo y crecimiento polimicrobiano indican contaminación."
    },
    {
      "id": "casos-036",
      "nivel": "x",
      "caso": "Paciente con catéter venoso central y fiebre. El hemocultivo muestra una levadura con tubo germinal negativo y colonias rosadas.",
      "pregunta": "Diagnóstico y tratamiento:",
      "correcta": "Fungemia por Rhodotorula: retirar el catéter y anfotericina B; no sirven fluconazol ni equinocandinas",
      "distractores": [
        "Candidemia por C. albicans: equinocandina",
        "Candidemia: fluconazol sin retirar el catéter",
        "Contaminación: no tratar",
        "Aspergilosis: voriconazol"
      ],
      "explicacion": "Si el tubo germinal fuera positivo, sería C. albicans y se trataría con equinocandina."
    },
    {
      "id": "casos-037",
      "nivel": "x",
      "caso": "Niño con diarrea con sangre y fiebre. Coprológico: leucocitos y hematíes, sin parásitos. Coprocultivo: colonias lactosa negativas en MacConkey y rojas sin centro negro en XLD.",
      "pregunta": "Diagnóstico más probable:",
      "correcta": "Shigelosis (Shigella; en Perú, sobre todo S. flexneri)",
      "distractores": [
        "Salmonelosis",
        "Amebiasis",
        "Giardiasis",
        "Infección por Campylobacter"
      ],
      "explicacion": "Salmonella tendría centro negro en XLD; Campylobacter necesita su propio medio en microaerofilia."
    }
  ]
};
