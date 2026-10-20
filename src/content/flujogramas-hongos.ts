// Flujogramas de Hongos (los mismos 11 casos del artefacto beta).
// Fuente: material de la estación Hongos (prácticas 4, 5 y 6, banco de laboratorio y fichas revisadas).
import type { Flujograma } from "./flujogramas";

export const FLUJOGRAMAS_HONGOS: Flujograma[] = [
  {
    "id": "hongos-muguet",
    "tema": "Hongos",
    "grupo": "Levaduras",
    "titulo": "Candidiasis oral (muguet)",
    "consigna": "Varón de 32 años con VIH sin tratamiento. Desde hace una semana tiene ardor en la boca y placas blancas en la lengua y el paladar que se desprenden al rasparlas y dejan la base roja. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Candida albicans: levadura de la flora normal"
      },
      {
        "texto": "¿Hay inmunosupresión (VIH, CD4 bajos), antibióticos o corticoides?",
        "decision": true,
        "rama": "No → sigue como flora, sin enfermedad"
      },
      {
        "texto": "Prolifera y forma pseudohifas en la mucosa"
      },
      {
        "texto": "Mucosa oral (orofaringe)"
      },
      {
        "texto": "Placas blancas que se desprenden y dejan base roja; ardor"
      },
      {
        "texto": "Candidiasis oral (muguet)"
      },
      {
        "texto": "Examen directo: levaduras + pseudohifas · Sabouraud · tubo germinal +"
      },
      {
        "texto": "Nistatina oral en suspensión + tratar la causa (TARV)"
      },
      {
        "texto": "Controlar la inmunosupresión · Complicación: candidiasis esofágica (SIDA), diseminación"
      }
    ],
    "claves": [
      "Síntomas: Placas blancas en lengua, paladar y mucosa oral que se desprenden y dejan base roja; ardor o dolor al comer.",
      "Zona afectada: Mucosa oral (orofaringe).",
      "Enfermedad: Candidiasis oral (muguet) por Candida albicans, favorecida por la inmunosupresión del VIH.",
      "Patogenia: Candida albicans es una levadura de la flora normal. Con inmunosupresión (VIH, CD4 bajos), antibióticos o corticoides prolifera, forma pseudohifas y coloniza la mucosa formando las placas.",
      "Diagnóstico: Clínico; examen directo (KOH o Gram): levaduras con pseudohifas. Cultivo en Sabouraud. Tubo germinal positivo a las 2–3 horas a 37 °C; en agar harina de maíz, clamidoconidias (solo C. albicans).",
      "Tratamiento: Nistatina oral en suspensión; tratar la causa (iniciar TARV en el VIH).",
      "Prevención y complicaciones: Controlar la inmunosupresión (TARV), evitar antibióticos o corticoides innecesarios. Complicaciones: candidiasis esofágica (definitoria de SIDA) y diseminación."
    ],
    "intrusos": [
      "Tratar con equinocandina IV como primera opción",
      "Tubo germinal negativo: confirma C. albicans"
    ]
  },
  {
    "id": "hongos-candidemia",
    "tema": "Hongos",
    "grupo": "Levaduras",
    "titulo": "Candidemia asociada a catéter",
    "consigna": "Mujer de 60 años en UCI con catéter venoso central desde hace 2 semanas, recibiendo antibióticos de amplio espectro. Tiene fiebre que no baja con los antibióticos. En el hemocultivo crecen levaduras. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Antibióticos de amplio espectro + catéter venoso central"
      },
      {
        "texto": "Candida prolifera y coloniza el catéter → pasa a la sangre"
      },
      {
        "texto": "Sangre (fungemia) desde el catéter"
      },
      {
        "texto": "Fiebre que no baja con antibióticos"
      },
      {
        "texto": "Candidemia asociada a catéter"
      },
      {
        "texto": "Hemocultivo: levaduras → identificar la especie (tubo germinal, harina de maíz)"
      },
      {
        "texto": "¿Es Candida?",
        "decision": true,
        "rama": "Rhodotorula (rosada, tubo germinal −) → retirar catéter + anfotericina B"
      },
      {
        "texto": "Equinocandina + retirar el catéter"
      },
      {
        "texto": "Retirar catéteres innecesarios, uso racional de antibióticos · Complicaciones: siembra en órganos, shock"
      }
    ],
    "claves": [
      "Síntomas: Fiebre persistente que no responde a antibióticos; puede haber hipotensión o shock.",
      "Zona afectada: Sangre (fungemia), a partir del catéter venoso central; puede sembrar otros órganos.",
      "Enfermedad: Candidemia asociada a catéter (candidiasis invasiva).",
      "Patogenia: Los antibióticos de amplio espectro eliminan la flora bacteriana y Candida prolifera; el catéter es la puerta de entrada y se cubre de levaduras, que pasan a la sangre.",
      "Diagnóstico: Hemocultivo con levaduras. Identificación: tubo germinal (positivo en C. albicans), agar harina de maíz (clamidoconidias). Importa la especie: C. glabrata tolera mal los azoles y C. krusei resiste el fluconazol.",
      "Tratamiento: Equinocandina y retirar el catéter.",
      "Prevención y complicaciones: Retirar catéteres que no se usan, usar antibióticos solo cuando hacen falta. Complicaciones: siembra en otros órganos, shock, muerte. Si la levadura es Rhodotorula, las equinocandinas no sirven (anfotericina B)."
    ],
    "intrusos": [
      "Mantener el catéter y tratar solo con nistatina oral",
      "Contagio por inhalación de conidias del ambiente"
    ]
  },
  {
    "id": "hongos-aspergilosis",
    "tema": "Hongos",
    "grupo": "Mohos hialinos",
    "titulo": "Aspergilosis pulmonar invasiva",
    "consigna": "Paciente de 45 años con leucemia, neutropénico tras quimioterapia. Fiebre persistente, tos y dolor torácico. La TAC muestra un nódulo pulmonar con signo del halo y el galactomanano es positivo. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Inhalación de conidios de Aspergillus fumigatus"
      },
      {
        "texto": "¿El paciente es neutropénico?",
        "decision": true,
        "rama": "No → los conidios se eliminan (en asmáticos: ABPA; en cavernas: aspergiloma)"
      },
      {
        "texto": "Conidios germinan → hifas hialinas septadas que invaden el tejido"
      },
      {
        "texto": "Pulmón"
      },
      {
        "texto": "Fiebre persistente, tos, dolor torácico"
      },
      {
        "texto": "Aspergilosis pulmonar invasiva"
      },
      {
        "texto": "TAC: signo del halo · galactomanano + · cultivo: cabeza aspergilar"
      },
      {
        "texto": "Voriconazol"
      },
      {
        "texto": "Proteger al neutropénico de los conidios · Complicaciones: diseminación, hemoptisis"
      }
    ],
    "claves": [
      "Síntomas: Fiebre persistente pese a antibióticos, tos, dolor torácico (puede haber hemoptisis).",
      "Zona afectada: Pulmón.",
      "Enfermedad: Aspergilosis pulmonar invasiva por Aspergillus fumigatus.",
      "Patogenia: Se inhalan los conidios del ambiente. En el neutropénico no se eliminan: germinan en hifas hialinas septadas que invaden el tejido pulmonar.",
      "Diagnóstico: TAC con signo del halo; galactomanano positivo. Cultivo en Sabouraud: colonia blanca que se vuelve verde azulada; microscopio: hifas hialinas septadas con conidióforo, vesícula y fiálides uniseriadas (cabeza aspergilar). Crece hasta 50 °C.",
      "Tratamiento: Voriconazol.",
      "Prevención y complicaciones: Proteger al neutropénico de la exposición a conidios. Complicaciones: diseminación, hemoptisis, muerte. La resistencia a azoles se asocia a mutaciones en cyp51A; A. terreus resiste la anfotericina B."
    ],
    "intrusos": [
      "Tratar con fluconazol",
      "Levaduras con cápsula en tinta china"
    ]
  },
  {
    "id": "hongos-mucormicosis",
    "tema": "Hongos",
    "grupo": "Mucorales",
    "titulo": "Mucormicosis rinocerebral",
    "consigna": "Varón de 58 años con diabetes mal controlada, ingresa en cetoacidosis. Tiene dolor facial, congestión nasal, fiebre y una escara negra en el paladar. En los días siguientes aparece edema periorbitario. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Inhalación de esporas de Rhizopus"
      },
      {
        "texto": "Cetoacidosis libera hierro → el hongo crece"
      },
      {
        "texto": "Hifas anchas no septadas invaden y necrosan el tejido"
      },
      {
        "texto": "Senos paranasales y paladar → órbita → cerebro"
      },
      {
        "texto": "Dolor facial, congestión, fiebre, escara negra en el paladar"
      },
      {
        "texto": "Mucormicosis rinocerebral"
      },
      {
        "texto": "Biopsia/cultivo: hifas anchas no septadas, esporangios y rizoides"
      },
      {
        "texto": "¿Son hifas anchas no septadas (mucoral)?",
        "decision": true,
        "rama": "No → otro moho (p. ej. Aspergillus: voriconazol)"
      },
      {
        "texto": "Anfotericina B liposomal + desbridamiento urgente + corregir cetoacidosis (el voriconazol no cubre mucorales)"
      },
      {
        "texto": "Control de la diabetes · Complicaciones: invasión de órbita y cerebro, muerte"
      }
    ],
    "claves": [
      "Síntomas: Dolor facial, congestión nasal, fiebre, escara negra en paladar o cornetes; luego compromiso de la órbita y alteración neurológica.",
      "Zona afectada: Senos paranasales, paladar, órbita y cerebro (forma rinocerebral).",
      "Enfermedad: Mucormicosis rinocerebral por Rhizopus (mucorales).",
      "Patogenia: Se inhalan las esporas. La cetoacidosis libera hierro, que el hongo aprovecha (la deferoxamina también le entrega hierro). Las hifas invaden y necrosan el tejido, por eso la escara negra.",
      "Diagnóstico: Biopsia o cultivo: hifas anchas no septadas en cinta, ramificadas en ángulo recto; en cultivo, colonia algodonosa blanca con puntos negros (esporangios) y rizoides. En la forma pulmonar, TAC con halo invertido.",
      "Tratamiento: Anfotericina B liposomal + desbridamiento quirúrgico urgente + corregir la cetoacidosis.",
      "Prevención y complicaciones: Control de la diabetes. El voriconazol no cubre mucorales. Complicaciones: invasión de órbita y cerebro, muerte."
    ],
    "intrusos": [
      "Hifas septadas que se ramifican en ángulo agudo",
      "Tratar con voriconazol"
    ]
  },
  {
    "id": "hongos-queratitis-fusarium",
    "tema": "Hongos",
    "grupo": "Mohos hialinos",
    "titulo": "Queratitis por Fusarium",
    "consigna": "Agricultor de 40 años que sufrió un golpe en el ojo con una rama hace 10 días. Tiene dolor, ojo rojo y visión borrosa. En la córnea hay una úlcera de bordes plumosos con hipopión. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Trauma vegetal en el ojo (o lentes de contacto)"
      },
      {
        "texto": "Inoculación de Fusarium → hifas invaden el estroma corneal"
      },
      {
        "texto": "Córnea"
      },
      {
        "texto": "Dolor, ojo rojo, visión borrosa; úlcera de bordes plumosos con hipopión"
      },
      {
        "texto": "Queratitis por Fusarium"
      },
      {
        "texto": "Raspado corneal + Sabouraud: macroconidias en canoa, multiseptadas"
      },
      {
        "texto": "Natamicina tópica (alternativa: voriconazol)"
      },
      {
        "texto": "Protección ocular · Complicaciones: perforación, pérdida de visión; diseminada en neutropénicos"
      }
    ],
    "claves": [
      "Síntomas: Dolor ocular, ojo rojo, visión borrosa; úlcera corneal de bordes plumosos con hipopión.",
      "Zona afectada: Córnea (ojo).",
      "Enfermedad: Queratitis fúngica por Fusarium.",
      "Patogenia: Trauma vegetal (o lentes de contacto) que inocula el hongo del ambiente en la córnea; las hifas hialinas septadas invaden el estroma.",
      "Diagnóstico: Raspado corneal: hifas hialinas septadas. Cultivo en Sabouraud: crecimiento rápido, colonia algodonosa blanca, rosada o púrpura; microscopio: macroconidias en canoa o media luna, multiseptadas, de pared delgada y lisa.",
      "Tratamiento: Natamicina tópica (alternativa: voriconazol).",
      "Prevención y complicaciones: Protección ocular en el campo, higiene de lentes de contacto. Complicaciones: perforación corneal, pérdida de visión; en neutropénicos, fusariosis diseminada (voriconazol con o sin anfotericina B)."
    ],
    "intrusos": [
      "Tratar solo con corticoides tópicos",
      "Levaduras con pseudohifas en el raspado corneal"
    ]
  },
  {
    "id": "hongos-tinea-capitis",
    "tema": "Hongos",
    "grupo": "Dermatofitos",
    "titulo": "Tinea capitis por Microsporum canis",
    "consigna": "Niño de 7 años que tiene un gato. Desde hace un mes tiene placas redondas sin pelo en el cuero cabelludo, con descamación y picazón. Con la lámpara de Wood las placas brillan. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Contacto con gato o perro infectado"
      },
      {
        "texto": "Microsporum canis (zoofílico) invade el pelo: se alimenta de queratina"
      },
      {
        "texto": "Cuero cabelludo y pelo"
      },
      {
        "texto": "Placas sin pelo, con descamación y picazón"
      },
      {
        "texto": "Tinea capitis por Microsporum canis"
      },
      {
        "texto": "Lámpara de Wood + · KOH · Sabouraud: macroconidios en huso, pared gruesa y rugosa"
      },
      {
        "texto": "¿Compromete el pelo?",
        "decision": true,
        "rama": "No (solo piel) → puede bastar un antifúngico tópico"
      },
      {
        "texto": "Griseofulvina oral (el tópico no basta) + revisar a la mascota"
      },
      {
        "texto": "Tratar a la mascota, no compartir peines · Complicación: querion (no drenarlo)"
      }
    ],
    "claves": [
      "Síntomas: Placas de alopecia redondas con descamación y prurito; si se inflama mucho, querion.",
      "Zona afectada: Cuero cabelludo y pelo (piel queratinizada).",
      "Enfermedad: Tinea capitis por Microsporum canis (dermatofito zoofílico).",
      "Patogenia: Contagio desde el gato o perro (zoofílico). El dermatofito se alimenta de queratina e invade el pelo y la capa córnea.",
      "Diagnóstico: Lámpara de Wood positiva; examen directo con KOH del pelo; cultivo en Sabouraud: macroconidios en huso de pared gruesa y rugosa, con muchos tabiques.",
      "Tratamiento: Griseofulvina oral (no basta el tópico en el cuero cabelludo); revisar y tratar a la mascota.",
      "Prevención y complicaciones: Tratar a la mascota, no compartir peines ni gorras. Complicación: querion, que no se trata solo con tópico ni se drena como absceso; alopecia cicatricial."
    ],
    "intrusos": [
      "Tratar solo con crema tópica",
      "Contagio por inhalación de esporas de murciélagos"
    ]
  },
  {
    "id": "hongos-onicomicosis",
    "tema": "Hongos",
    "grupo": "Dermatofitos",
    "titulo": "Onicomicosis + tinea pedis por T. rubrum",
    "consigna": "Mujer de 50 años con pie de atleta crónico. Las uñas del dedo gordo de ambos pies están engrosadas, amarillentas y se desmoronan. Usa calzado cerrado todo el día. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Contagio en pisos húmedos (duchas, piscinas)"
      },
      {
        "texto": "Trichophyton rubrum invade la queratina (humedad + calzado cerrado)"
      },
      {
        "texto": "Piel de los pies → uñas"
      },
      {
        "texto": "Uñas engrosadas y amarillas; descamación entre los dedos"
      },
      {
        "texto": "Onicomicosis + tinea pedis por T. rubrum"
      },
      {
        "texto": "KOH: hifas septadas · Sabouraud: reverso rojo vinoso"
      },
      {
        "texto": "Terbinafina oral 12 semanas + tópico en la piel"
      },
      {
        "texto": "Pies secos, calzado ventilado · Complicación: recurrencia"
      }
    ],
    "claves": [
      "Síntomas: Uñas engrosadas, amarillentas, quebradizas; descamación y picazón entre los dedos (tinea pedis crónica).",
      "Zona afectada: Uñas y piel de los pies.",
      "Enfermedad: Onicomicosis y tinea pedis por Trichophyton rubrum.",
      "Patogenia: Dermatofito antropofílico que se contagia en pisos húmedos (duchas, piscinas); invade la queratina de la piel y la uña, favorecido por humedad y calzado cerrado.",
      "Diagnóstico: KOH de la uña: hifas septadas; cultivo en Sabouraud: colonia blanca con reverso rojo vinoso; microscopio: hifas delgadas con pocos conidios, microconidios en lágrima pegados a la hifa.",
      "Tratamiento: Terbinafina oral por 12 semanas, más tratamiento tópico en la piel.",
      "Prevención y complicaciones: Pies secos, calzado ventilado, sandalias en duchas públicas. Complicaciones: recurrencia, dolor, sobreinfección bacteriana."
    ],
    "intrusos": [
      "Tratar con nistatina oral",
      "Contagio por inhalación de conidias"
    ]
  },
  {
    "id": "hongos-esporotricosis",
    "tema": "Hongos",
    "grupo": "Dimórficos",
    "titulo": "Esporotricosis linfocutánea",
    "consigna": "Jardinero de 45 años que se pinchó con un rosal hace un mes. En el dorso de la mano tiene un nódulo que se ulceró, y ahora aparecen otros nódulos en cadena que suben por el antebrazo. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Pinchazo con rosal o madera"
      },
      {
        "texto": "Inoculación de Sporothrix (moho a 25 °C → levadura a 37 °C)"
      },
      {
        "texto": "Piel, subcutáneo y linfáticos del miembro"
      },
      {
        "texto": "Nódulo que se ulcera + nódulos en cadena por los linfáticos"
      },
      {
        "texto": "Esporotricosis linfocutánea"
      },
      {
        "texto": "Cultivo 25 °C: conidios en margarita · tejido: levaduras en puro"
      },
      {
        "texto": "Itraconazol 3–6 meses (alternativa: yoduro de potasio)"
      },
      {
        "texto": "Guantes con plantas y madera · Complicación: diseminación en inmunodeprimidos"
      }
    ],
    "claves": [
      "Síntomas: Nódulo en el sitio del pinchazo que se ulcera; nódulos en cadena que siguen el trayecto linfático.",
      "Zona afectada: Piel y tejido subcutáneo, y vasos linfáticos del miembro.",
      "Enfermedad: Esporotricosis linfocutánea por Sporothrix schenckii.",
      "Patogenia: Hongo dimórfico de inoculación: entra por pinchazo con rosal o madera. En el ambiente (25 °C) es moho; en el cuerpo (37 °C) se vuelve levadura y avanza por los linfáticos.",
      "Diagnóstico: Cultivo a 25 °C: hifas delgadas septadas con conidios en margarita o roseta. En tejido (37 °C): levaduras en forma de puro.",
      "Tratamiento: Itraconazol por 3 a 6 meses (alternativa: yoduro de potasio).",
      "Prevención y complicaciones: Guantes al manipular plantas y madera. Complicaciones: diseminación en inmunodeprimidos, cronicidad."
    ],
    "intrusos": [
      "Inhalación de excremento de aves y murciélagos",
      "Tratar con nistatina tópica"
    ]
  },
  {
    "id": "hongos-histoplasmosis",
    "tema": "Hongos",
    "grupo": "Dimórficos",
    "titulo": "Histoplasmosis diseminada",
    "consigna": "Varón de 35 años con VIH y CD4 bajos. Hace un mes visitó cuevas con murciélagos en Tingo María. Tiene fiebre, baja de peso, hepatoesplenomegalia y pancitopenia. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Inhalación de conidios en cuevas con murciélagos (Tingo María)"
      },
      {
        "texto": "Dimórfico: a 37 °C se vuelve levadura dentro de los macrófagos"
      },
      {
        "texto": "¿Hay inmunosupresión (VIH)?",
        "decision": true,
        "rama": "No → infección leve o asintomática"
      },
      {
        "texto": "Pulmón → hígado, bazo, médula ósea"
      },
      {
        "texto": "Fiebre, baja de peso, hepatoesplenomegalia, pancitopenia"
      },
      {
        "texto": "Histoplasmosis diseminada"
      },
      {
        "texto": "Tejido: levaduras en macrófagos · cultivo 25 °C: macroconidias tuberculadas"
      },
      {
        "texto": "Anfotericina B liposomal → luego itraconazol"
      },
      {
        "texto": "Evitar cuevas si hay VIH, TARV · Complicación: falla multiorgánica"
      }
    ],
    "claves": [
      "Síntomas: Fiebre, baja de peso, hepatoesplenomegalia, pancitopenia (forma diseminada).",
      "Zona afectada: Pulmón (entrada) y sistema reticuloendotelial: hígado, bazo, médula ósea (macrófagos).",
      "Enfermedad: Histoplasmosis diseminada por Histoplasma capsulatum, en paciente con VIH.",
      "Patogenia: Se inhalan los conidios de suelos con guano de murciélagos (cuevas). Es dimórfico: a 37 °C se vuelve levadura que vive dentro de los macrófagos; con la inmunosupresión del VIH se disemina.",
      "Diagnóstico: En tejido: levaduras pequeñas dentro de los macrófagos. Cultivo a 25 °C (fase moho): macroconidias tuberculadas, redondas con espinas.",
      "Tratamiento: Anfotericina B liposomal y luego itraconazol.",
      "Prevención y complicaciones: Evitar cuevas con murciélagos si hay inmunosupresión; TARV. Complicaciones: falla multiorgánica, muerte."
    ],
    "intrusos": [
      "Inoculación traumática con espinas de rosa",
      "Levaduras con gemación múltiple en «rueda de timón»"
    ]
  },
  {
    "id": "hongos-paracoccidioidomicosis",
    "tema": "Hongos",
    "grupo": "Dimórficos",
    "titulo": "Paracoccidioidomicosis",
    "consigna": "Agricultor de 50 años de la selva, fumador. Tiene tos crónica desde hace meses con baciloscopías negativas, úlceras en la boca de aspecto moriforme y adenopatías cervicales. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Inhalación del hongo del suelo rural (selva)"
      },
      {
        "texto": "Dimórfico: a 37 °C se vuelve levadura → se disemina desde el pulmón"
      },
      {
        "texto": "Pulmón → mucosa oral y ganglios"
      },
      {
        "texto": "Tos crónica, úlceras orales moriformes, adenopatías"
      },
      {
        "texto": "¿Baciloscopía negativa?",
        "decision": true,
        "rama": "No (BK positiva) → pensar en tuberculosis"
      },
      {
        "texto": "Paracoccidioidomicosis"
      },
      {
        "texto": "Directo o biopsia: levadura en «rueda de timón»"
      },
      {
        "texto": "Itraconazol 6–12 meses; grave: anfotericina B"
      },
      {
        "texto": "Diagnóstico temprano en agricultores · Complicación: fibrosis pulmonar"
      }
    ],
    "claves": [
      "Síntomas: Tos crónica, úlceras orales moriformes, adenopatías; baja de peso.",
      "Zona afectada: Pulmón (entrada), mucosa oral y ganglios linfáticos.",
      "Enfermedad: Paracoccidioidomicosis por Paracoccidioides brasiliensis.",
      "Patogenia: Hongo dimórfico del suelo de zonas rurales de la selva; se inhala y en el cuerpo (37 °C) se vuelve levadura; desde el pulmón se disemina a mucosas y ganglios.",
      "Diagnóstico: Examen directo o biopsia: levadura madre grande con múltiples gemaciones alrededor («rueda de timón»). BK negativa la diferencia de tuberculosis.",
      "Tratamiento: Itraconazol por 6 a 12 meses; en casos graves, anfotericina B.",
      "Prevención y complicaciones: Diagnóstico temprano en agricultores con tos crónica y BK negativa. Complicaciones: fibrosis pulmonar, lesiones crónicas de mucosa."
    ],
    "intrusos": [
      "Levadura con una sola gemación de base ancha",
      "Afecta sobre todo a niños de zonas urbanas"
    ]
  },
  {
    "id": "hongos-otomicosis",
    "tema": "Hongos",
    "grupo": "Mohos hialinos",
    "titulo": "Otomicosis por Aspergillus niger",
    "consigna": "Nadadora de 22 años con picazón y sensación de oído tapado desde hace dos semanas. En el conducto auditivo externo se ve una secreción con puntos negros, como algodón con pimienta. Elabora el flujograma: síntomas, zona afectada, enfermedad, patogenia, diagnóstico, tratamiento, prevención y complicaciones.",
    "pasos": [
      {
        "texto": "Humedad en el oído (natación)"
      },
      {
        "texto": "Aspergillus niger del ambiente coloniza el conducto"
      },
      {
        "texto": "Conducto auditivo externo"
      },
      {
        "texto": "Picazón, oído tapado, secreción con puntos negros"
      },
      {
        "texto": "Otomicosis por Aspergillus niger"
      },
      {
        "texto": "Otoscopia + Sabouraud: colonia negra, cabeza aspergilar biseriada"
      },
      {
        "texto": "Limpieza del conducto + clotrimazol tópico"
      },
      {
        "texto": "Secar los oídos tras nadar, no usar hisopos · Complicación: recurrencia"
      }
    ],
    "claves": [
      "Síntomas: Prurito ótico, sensación de oído tapado, secreción con puntos negros; puede haber dolor leve.",
      "Zona afectada: Conducto auditivo externo.",
      "Enfermedad: Otomicosis (otitis externa fúngica) por Aspergillus niger.",
      "Patogenia: La humedad del conducto (natación) favorece que el moho ambiental colonice el cerumen y la piel del conducto; los conidios negros dan el aspecto típico.",
      "Diagnóstico: Otoscopia; examen directo y cultivo en Sabouraud: colonia cubierta de conidios negros, reverso incoloro o marfil; microscopio: hifas hialinas septadas con cabeza aspergilar biseriada.",
      "Tratamiento: Limpieza del conducto y clotrimazol tópico.",
      "Prevención y complicaciones: Secar bien los oídos después de nadar, no usar hisopos. Complicaciones: recurrencia, perforación timpánica."
    ],
    "intrusos": [
      "Tratar solo con antibiótico oral",
      "Hifas anchas sin septos, en cinta"
    ]
  }
];
