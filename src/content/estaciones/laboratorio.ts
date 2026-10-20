// Estación: Laboratorio
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso, preguntas revisadas y banco de teoría (TB, resistencia y micología).
import type { Estacion } from "../types";

export const laboratorio: Estacion = {
  "id": "laboratorio",
  "nombre": "Laboratorio",
  "descripcion": "Medios, antibiograma, urocultivo y coprocultivo",
  "resumen": "Ideas clave:\n• Mueller-Hinton: antibiograma; McFarland 0.5; discos a 20 mm.\n• Urocultivo: asa de 0.001 mL; más de 10⁵ UFC/mL es infección.\n• BLEE: sinergia con clavulánico. AmpC: no se inhibe con clavulánico. KPC: sin halo en carbapenémicos.\n• Coprocultivo: XLD y SS; selenito para enriquecer; Cary-Blair para transportar.",
  "preguntas": [
    {
      "id": "laboratorio-001",
      "nivel": "f",
      "pregunta": "¿Qué medio se usa para el antibiograma por difusión en disco?",
      "correcta": "Agar Mueller-Hinton",
      "distractores": [
        "Agar MacConkey",
        "Agar sangre",
        "Agar Sabouraud"
      ],
      "pista": "Es un medio estandarizado.",
      "explicacion": "Tiene pocos inhibidores, 4 mm de profundidad y pH 7.2–7.4."
    },
    {
      "id": "laboratorio-002",
      "nivel": "f",
      "pregunta": "¿A qué turbidez se ajusta el inóculo del antibiograma?",
      "correcta": "McFarland 0.5",
      "distractores": [
        "McFarland 3",
        "No se ajusta",
        "10⁵ UFC/mL"
      ],
      "pista": "Es el estándar más usado.",
      "explicacion": "Equivale a unos 1.5 × 10⁸ UFC/mL."
    },
    {
      "id": "laboratorio-003",
      "nivel": "m",
      "pregunta": "Si el inóculo es más denso que McFarland 0.5, ¿cómo salen los halos?",
      "correcta": "Más pequeños: falsos resistentes",
      "distractores": [
        "Más grandes: falsos sensibles",
        "Iguales",
        "No se forman"
      ],
      "pista": "Más bacterias en el mismo espacio.",
      "explicacion": "La cepa parece resistente sin serlo."
    },
    {
      "id": "laboratorio-004",
      "nivel": "f",
      "pregunta": "¿A qué distancia mínima se colocan los discos de antibiótico?",
      "correcta": "20 mm",
      "distractores": [
        "5 mm",
        "10 mm",
        "50 mm"
      ],
      "pista": "Para que los halos no se toquen.",
      "explicacion": "Así los halos no se superponen."
    },
    {
      "id": "laboratorio-005",
      "nivel": "m",
      "pregunta": "Urocultivo con asa de 0.001 mL: cuentas 85 colonias. Resultado:",
      "correcta": "8.5 × 10⁴ UFC/mL, dudoso",
      "distractores": [
        "8.5 × 10⁵ UFC/mL, infección",
        "85 UFC/mL, contaminación",
        "8.5 × 10³ UFC/mL, infección"
      ],
      "pista": "Multiplica por 1000.",
      "explicacion": "Entre 10³ y 10⁵ es dudoso: se interpreta según la clínica."
    },
    {
      "id": "laboratorio-006",
      "nivel": "f",
      "pregunta": "Medio sólido para cultivar Mycobacterium tuberculosis:",
      "correcta": "Löwenstein-Jensen u Ogawa",
      "distractores": [
        "Mueller-Hinton",
        "MacConkey",
        "Agar chocolate"
      ],
      "pista": "Lleva huevo.",
      "explicacion": "Las colonias aparecen en 3 a 8 semanas."
    },
    {
      "id": "laboratorio-007",
      "nivel": "f",
      "pregunta": "En la tinción de Ziehl-Neelsen, el decolorante es:",
      "correcta": "Alcohol-ácido",
      "distractores": [
        "Lugol",
        "Alcohol-acetona",
        "Agua"
      ],
      "pista": "Los BAAR resisten este decolorante.",
      "explicacion": "Por eso se llaman bacilos ácido-alcohol resistentes."
    },
    {
      "id": "laboratorio-008",
      "nivel": "m",
      "pregunta": "E. coli resistente a cefotaxima, ceftriaxona y aztreonam, con sinergia hacia amoxicilina-clavulánico y sensible a meropenem:",
      "correcta": "BLEE",
      "distractores": [
        "MRSA",
        "Carbapenemasa",
        "AmpC"
      ],
      "pista": "El clavulánico la inhibe.",
      "explicacion": "El halo se agranda hacia el disco con clavulánico."
    },
    {
      "id": "laboratorio-009",
      "nivel": "d",
      "pregunta": "¿Qué diferencia a AmpC de BLEE en el antibiograma?",
      "correcta": "AmpC no se inhibe con clavulánico y es resistente a cefoxitina",
      "distractores": [
        "AmpC es sensible a todo",
        "AmpC es resistente a carbapenémicos",
        "No hay diferencia"
      ],
      "pista": "Fíjate en el clavulánico.",
      "explicacion": "La BLEE sí se inhibe con clavulánico."
    },
    {
      "id": "laboratorio-010",
      "nivel": "m",
      "pregunta": "Klebsiella sin halo en ningún disco, ni siquiera imipenem ni meropenem:",
      "correcta": "Carbapenemasa (KPC)",
      "distractores": [
        "BLEE",
        "AmpC",
        "Contaminación"
      ],
      "pista": "Destruye incluso los carbapenémicos.",
      "explicacion": "Requiere manejo con infectología."
    },
    {
      "id": "laboratorio-011",
      "nivel": "f",
      "pregunta": "Más de 15 células epiteliales escamosas por campo en el sedimento urinario:",
      "correcta": "Muestra contaminada",
      "distractores": [
        "Pielonefritis",
        "Glomerulonefritis",
        "Cistitis"
      ],
      "pista": "Vienen de la uretra distal y los genitales.",
      "explicacion": "Hay que repetir la muestra de chorro medio."
    },
    {
      "id": "laboratorio-012",
      "nivel": "m",
      "pregunta": "Los cilindros leucocitarios y hemáticos se asocian, respectivamente, a:",
      "correcta": "Pielonefritis y glomerulonefritis",
      "distractores": [
        "Glomerulonefritis y pielonefritis",
        "Deshidratación e ITU baja",
        "Contaminación y litiasis"
      ],
      "pista": "Leucocitos = infección del riñón.",
      "explicacion": "Los cilindros se forman en los túbulos."
    },
    {
      "id": "laboratorio-013",
      "nivel": "f",
      "pregunta": "Valor normal de leucocitos en el sedimento urinario:",
      "correcta": "0–5 por campo",
      "distractores": [
        "0–2 por campo",
        "10–20 por campo",
        "Más de 50 por campo"
      ],
      "pista": "El de hematíes es 0–2.",
      "explicacion": "Más de 5 por campo es piuria."
    },
    {
      "id": "laboratorio-014",
      "nivel": "d",
      "pregunta": "Encuentras de 1 a 10 BAAR por campo, contando 50 campos. Se reporta como:",
      "correcta": "Positivo (++)",
      "distractores": [
        "Negativo",
        "Positivo (+)",
        "Positivo (+++)"
      ],
      "pista": "Escala del MINSA.",
      "explicacion": "1–10 BAAR por campo en 50 campos = ++."
    },
    {
      "id": "laboratorio-015",
      "nivel": "m",
      "pregunta": "El GeneXpert MTB/RIF detecta:",
      "correcta": "M. tuberculosis y resistencia a rifampicina",
      "distractores": [
        "Solo la presencia de BAAR",
        "Resistencia a todos los antituberculosos",
        "Infección latente"
      ],
      "pista": "Es una prueba molecular rápida.",
      "explicacion": "Solo informa la resistencia a rifampicina."
    },
    {
      "id": "laboratorio-016",
      "nivel": "m",
      "pregunta": "En agar XLD, ¿cómo se ve Salmonella?",
      "correcta": "Roja con centro negro",
      "distractores": [
        "Amarilla",
        "Roja sin centro negro",
        "Incolora con borde azul"
      ],
      "pista": "Produce H₂S.",
      "explicacion": "Shigella sale roja sin centro negro; los fermentadores, amarillos."
    },
    {
      "id": "laboratorio-017",
      "nivel": "d",
      "pregunta": "Medio de transporte si las heces tardarán más de 2 horas en procesarse:",
      "correcta": "Cary-Blair",
      "distractores": [
        "Caldo selenito",
        "XLD",
        "Agar sangre"
      ],
      "pista": "No es de enriquecimiento.",
      "explicacion": "El selenito sirve para enriquecer Salmonella."
    },
    {
      "id": "laboratorio-018",
      "nivel": "f",
      "pregunta": "En agar sangre, un halo transparente alrededor de la colonia indica:",
      "correcta": "Hemólisis beta",
      "distractores": [
        "Hemólisis alfa",
        "Hemólisis gamma",
        "Swarming"
      ],
      "pista": "Destrucción completa de hematíes.",
      "explicacion": "Alfa: halo verdoso. Gamma: sin cambio."
    },
    {
      "id": "laboratorio-019",
      "nivel": "m",
      "pregunta": "¿Por qué las colonias de E. coli se ven rosadas en MacConkey?",
      "correcta": "Fermentan lactosa y el ácido vira el rojo neutro",
      "distractores": [
        "Producen H₂S",
        "Tienen cápsula",
        "Hidrolizan la sangre"
      ],
      "pista": "El indicador es rojo neutro.",
      "explicacion": "Las colonias incoloras no fermentan lactosa (Proteus, Salmonella, Shigella)."
    },
    {
      "id": "laboratorio-020",
      "nivel": "d",
      "pregunta": "Urocultivo con asa de 0.01 mL: cuentas 20 colonias. ¿Cuántas UFC/mL hay?",
      "correcta": "2 × 10³ UFC/mL",
      "distractores": [
        "2 × 10⁴ UFC/mL",
        "2 × 10⁵ UFC/mL",
        "20 UFC/mL"
      ],
      "pista": "Ojo: el asa no es de 0.001 mL.",
      "explicacion": "20 / 0.01 = 2000 UFC/mL."
    },
    {
      "id": "laboratorio-021",
      "nivel": "d",
      "pregunta": "Si el Mueller-Hinton tiene menos de 4 mm de profundidad, ¿cómo salen los halos?",
      "correcta": "Más grandes: falsos sensibles",
      "distractores": [
        "Más pequeños: falsos resistentes",
        "Iguales",
        "No se forman"
      ],
      "pista": "El antibiótico difunde en menos volumen.",
      "explicacion": "Con agar delgado, el antibiótico llega más lejos."
    },
    {
      "id": "laboratorio-022",
      "nivel": "d",
      "pregunta": "¿Qué cepa control se usa para verificar el antibiograma de enterobacterias?",
      "correcta": "E. coli ATCC 25922",
      "distractores": [
        "S. aureus ATCC 25923",
        "Candida albicans ATCC 90028",
        "Streptococcus pneumoniae ATCC 49619"
      ],
      "pista": "Es un Gram negativo de referencia.",
      "explicacion": "Si sus halos salen fuera de rango, el antibiograma no es válido."
    },
    {
      "id": "laboratorio-023",
      "nivel": "d",
      "pregunta": "Tubo germinal positivo a las 2–3 horas a 37 °C. Identificación presuntiva:",
      "correcta": "Candida albicans",
      "distractores": [
        "Candida glabrata",
        "Cryptococcus neoformans",
        "Rhodotorula"
      ],
      "pista": "La misma que forma clamidoconidias.",
      "explicacion": "C. dubliniensis también puede darlo, por eso es presuntiva."
    },
    {
      "id": "laboratorio-024",
      "nivel": "x",
      "pregunta": "Klebsiella con halo de meropenem reducido pero aún en rango sensible. ¿Qué prueba confirma carbapenemasa?",
      "correcta": "Prueba fenotípica como Carba NP o inactivación del carbapenem (mCIM)",
      "distractores": [
        "Catalasa",
        "Sinergia con clavulánico",
        "Disco de cefoxitina",
        "Prueba D"
      ],
      "explicacion": "Algunas carbapenemasas dan halos 'sensibles' y aun así fallan en el tratamiento."
    },
    {
      "id": "laboratorio-025",
      "nivel": "x",
      "pregunta": "Escala de baciloscopía: ++ son 1 a 10 BAAR por campo en 50 campos. ¿Qué es +++?",
      "correcta": "Más de 10 BAAR por campo en 20 campos",
      "distractores": [
        "Más de 10 BAAR por campo en 50 campos",
        "1 a 9 BAAR en 100 campos",
        "Más de 100 BAAR en 100 campos",
        "Cualquier número en 10 campos"
      ],
      "explicacion": "Con tantos bacilos, basta revisar menos campos."
    },
    {
      "id": "laboratorio-026",
      "nivel": "x",
      "pregunta": "En agar XLD, un bacilo da colonias amarillas. ¿Por qué no es Salmonella ni Shigella?",
      "correcta": "El amarillo indica fermentación con acidez sostenida; Shigella no fermenta xilosa y Salmonella termina alcalinizando (rojo)",
      "distractores": [
        "El amarillo indica producción de H₂S",
        "Ambas siempre dan colonias amarillas",
        "XLD no permite crecer a ninguna de las dos",
        "El amarillo indica swarming"
      ],
      "explicacion": "Salmonella fermenta xilosa pero descarboxila lisina y vira a rojo, con centro negro por H₂S."
    },
    {
      "id": "laboratorio-027",
      "nivel": "d",
      "pregunta": "Orina alcalina con cristales en 'tapa de ataúd' y nitritos positivos. ¿Qué cristal y qué germen sospechas?",
      "correcta": "Fosfato amónico magnésico (estruvita) por Proteus mirabilis",
      "distractores": [
        "Oxalato de calcio por dieta rica en oxalato",
        "Ácido úrico por gota",
        "Cistina por cistinuria"
      ],
      "pista": "Depende del pH y de una enzima bacteriana.",
      "explicacion": "Práctica 4: tabla de cristales en orina."
    },
    {
      "id": "laboratorio-028",
      "nivel": "d",
      "pregunta": "Orina anaranjada en un paciente que recibe tratamiento para tuberculosis. Causa más probable:",
      "correcta": "Rifampicina",
      "distractores": [
        "Hematuria",
        "Proteinuria",
        "Infección por Pseudomonas"
      ],
      "pista": "Es un fármaco del esquema HRZE.",
      "explicacion": "Práctica 4: tabla de colores de orina."
    },
    {
      "id": "laboratorio-029",
      "nivel": "x",
      "pregunta": "Urocultivo de un paciente con sonda: la orina se tomó de la bolsa colectora. ¿Qué haces?",
      "correcta": "Rechazarla: en sondas se toma por punción del tubo de drenaje, nunca de la bolsa",
      "distractores": [
        "Procesarla normalmente",
        "Procesarla y bajar el punto de corte",
        "Usar la orina del ECO",
        "Sembrarla solo en agar sangre"
      ],
      "explicacion": "Práctica 4: toma de muestra del urocultivo."
    },
    {
      "id": "laboratorio-030",
      "nivel": "x",
      "pregunta": "Urocultivo con tres tipos de colonias distintas y recuento bajo. ¿Interpretación?",
      "correcta": "Contaminación: repetir con orina de chorro medio e higiene previa",
      "distractores": [
        "Infección mixta grave",
        "Pielonefritis",
        "Bacteriuria significativa",
        "Infección por hongos"
      ],
      "explicacion": "Práctica 4: el crecimiento polimicrobiano o escaso sugiere contaminación."
    },
    {
      "id": "laboratorio-031",
      "nivel": "x",
      "pregunta": "Urocultivo negativo en un paciente con síntomas urinarios. ¿Qué descarta?",
      "correcta": "Solo la infección bacteriana: no descarta infección viral o micótica",
      "distractores": [
        "Toda infección urinaria",
        "Solo la contaminación",
        "La necesidad de un ECO",
        "Nada: siempre es falso negativo"
      ],
      "explicacion": "Práctica 4: interpretación de resultados del urocultivo."
    },
    {
      "id": "laboratorio-032",
      "nivel": "x",
      "pregunta": "Urocultivo por punción suprapúbica con menos de 10⁴ UFC/mL de un solo germen. ¿Cómo se interpreta?",
      "correcta": "Puede ser significativo: la regla de contaminación bajo 10⁴ no se aplica a la punción suprapúbica",
      "distractores": [
        "Es contaminación",
        "Es negativo",
        "Hay que repetir con chorro medio",
        "Solo cuenta si supera 10⁵"
      ],
      "explicacion": "Práctica 4: menos de 10⁴ UFC/mL es probable contaminación, excepto en punción suprapúbica."
    },
    {
      "id": "laboratorio-033",
      "nivel": "f",
      "pregunta": "Temperatura de incubación para ver la fase MOHO de los hongos en Sabouraud:",
      "correcta": "25–30 °C",
      "distractores": [
        "4 °C",
        "37 °C",
        "42 °C"
      ],
      "pista": "La temperatura del ambiente, no la del cuerpo.",
      "explicacion": "Los mohos y dermatofitos se incuban a 25–30 °C; a 37 °C los dimórficos pasan a levadura."
    },
    {
      "id": "laboratorio-034",
      "nivel": "m",
      "pregunta": "En la tinción de Ziehl-Neelsen, el decolorante es ___ y los BAAR se ven ___:",
      "correcta": "Alcohol-ácido / rojos sobre fondo azul",
      "distractores": [
        "Lugol / morados",
        "Alcohol-acetona / azules",
        "Agua / verdes"
      ],
      "pista": "Los micólicos retienen la fucsina; el contraste es de metileno.",
      "explicacion": "Los ácidos micólicos retienen la fucsina y resisten el alcohol-ácido; el contraste es azul de metileno."
    },
    {
      "id": "laboratorio-035",
      "nivel": "f",
      "pregunta": "Niño con gato y placa de alopecia descamativa en el cuero cabelludo. Agente y tratamiento:",
      "correcta": "Microsporum canis, griseofulvina oral",
      "distractores": [
        "T. rubrum, terbinafina tópica",
        "Candida, nistatina",
        "Malassezia, ketoconazol"
      ],
      "pista": "Niño con gato: dermatofito zoófilo.",
      "explicacion": "Tinea capitis zoofílica → griseofulvina oral."
    },
    {
      "id": "laboratorio-036",
      "nivel": "m",
      "pregunta": "¿Qué tipo de medio es el agar sangre?",
      "correcta": "Enriquecido, no selectivo y diferencial por la hemólisis",
      "distractores": [
        "Selectivo y diferencial por la fermentación de lactosa",
        "Selectivo para hongos por su pH ácido y el cloranfenicol",
        "Estandarizado y no diferencial, para el antibiograma"
      ],
      "pista": "Lleva 5 % de sangre de carnero y no tiene inhibidores.",
      "explicacion": "Agar sangre: enriquecido (base + 5 % de sangre de carnero), no selectivo y diferencial por la hemólisis. Es rojo intenso y opaco. Hemólisis beta: halo transparente (S. aureus, S. pyogenes). Alfa: halo verdoso (S. pneumoniae, Streptococcus viridans). Gamma: sin cambio (Enterococcus). Proteus hace swarming. Se incuba a 35–37 °C por 18–24 h. Se usa en el urocultivo para Gram positivos."
    }
  ]
};
