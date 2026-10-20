// Tablas clave de la zona de estudio
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso, preguntas revisadas y la guía del examen teórico
// (Tuberculosis, Resistencia, Hongos y la tabla comparativa). El texto admite **negrita** y *cursiva*.
import type { Tabla } from "./types";

/** Orden de los grupos en Estudio. */
export const GRUPOS_TABLAS = ["Laboratorio", "Tratamientos", "Virus", "Tuberculosis", "Resistencia", "Hongos", "Hongos por zona del cuerpo", "Hongos: tablas generales", "Repaso final"];

export const TABLAS: Tabla[] = [
  {
    "id": "medios",
    "grupo": "Laboratorio",
    "titulo": "Medios de cultivo",
    "fotos": [
      { "archivo": "img/medio-sabouraud.jpg", "pie": "Agar Sabouraud en tubo inclinado, con hongos", "fuente": "laboratorio" },
      { "archivo": "img/medio-macconkey.jpg", "pie": "Agar MacConkey: E. coli (rosada) y Klebsiella oxytoca (mucoide)", "fuente": "atlas" },
      { "archivo": "img/medio-mueller-hinton.jpg", "pie": "Agar Mueller-Hinton con discos de antibiograma", "fuente": "laboratorio" },
      { "archivo": "img/medio-lowenstein.jpg", "pie": "Löwenstein-Jensen: colonias de M. tuberculosis", "fuente": "atlas" },
      { "archivo": "img/medio-coprocultivo.jpg", "pie": "Coprocultivo: placas selectivas y caldo selenito", "fuente": "laboratorio" }
    ],
    "columnas": [
      "Medio",
      "Tipo",
      "Para qué",
      "Cómo se lee"
    ],
    "filas": [
      [
        "Sabouraud",
        "Selectivo para hongos: dextrosa 4 %, pH ≈ 5.6, cloranfenicol",
        "Hongos (mohos y levaduras)",
        "25–30 °C, de días a semanas; describir anverso, reverso, textura y velocidad"
      ],
      [
        "MacConkey",
        "Selectivo y diferencial: sales biliares y cristal violeta; lactosa y rojo neutro",
        "Gram negativos; urocultivo y coprocultivo",
        "Rosadas: lactosa + (E. coli plana y seca; Klebsiella mucoide). Incoloras: lactosa − (Proteus, Salmonella, Shigella)"
      ],
      [
        "Mueller-Hinton",
        "No selectivo y estandarizado: 4 mm de profundidad, pH 7.2–7.4",
        "Antibiograma (Kirby-Bauer)",
        "Halos en mm comparados con tablas CLSI/EUCAST"
      ],
      [
        "Löwenstein-Jensen u Ogawa",
        "Enriquecido con huevo; selectivo por verde de malaquita",
        "Mycobacterium tuberculosis",
        "Colonias rugosas, secas, crema, 'en coliflor'; 3 a 8 semanas"
      ],
      [
        "Agar sangre",
        "Enriquecido; diferencial por hemólisis",
        "Gram positivos; urocultivo",
        "Beta: halo transparente. Alfa: verdoso. Gamma: sin cambio. Proteus hace swarming"
      ],
      [
        "XLD",
        "Selectivo y diferencial",
        "Salmonella y Shigella",
        "Salmonella: roja con centro negro (H₂S). Shigella: roja. Fermentadores: amarillos"
      ],
      [
        "SS",
        "Selectivo y diferencial",
        "Salmonella y Shigella",
        "Ambas incoloras; Salmonella con centro negro"
      ],
      [
        "Caldo selenito",
        "Enriquecimiento",
        "Salmonella",
        "Se resiembra en medio sólido"
      ],
      [
        "Cary-Blair",
        "Transporte",
        "Heces si el procesamiento demora más de 2 h",
        "No se lee: conserva la muestra"
      ],
      [
        "Agar Campylobacter",
        "Selectivo, en microaerofilia",
        "Campylobacter jejuni",
        "Lectura hasta 72 h"
      ]
    ]
  },
  {
    "id": "antibiograma",
    "grupo": "Laboratorio",
    "titulo": "Antibiograma y resistencia",
    "columnas": [
      "Paso o patrón",
      "Qué hacer o qué significa"
    ],
    "filas": [
      [
        "1. Inóculo",
        "Colonias puras en solución salina estéril, ajustadas a McFarland 0.5 (≈ 1.5 × 10⁸ UFC/mL)"
      ],
      [
        "2. Siembra",
        "Hisopo en Mueller-Hinton, en tres direcciones, cubriendo toda la placa"
      ],
      [
        "3. Discos",
        "Con pinzas o dispensador, al menos a 2 cm entre sí"
      ],
      [
        "4. Incubación",
        "35–37 °C por 16–18 h"
      ],
      [
        "5. Lectura",
        "Medir halos en mm y clasificar S, I o R con tablas CLSI/EUCAST"
      ],
      [
        "Error: inóculo muy denso",
        "Halos pequeños: falsos resistentes"
      ],
      [
        "MRSA",
        "S. aureus sin halo en oxacilina: resistente a todos los β-lactámicos. Tratamiento: vancomicina"
      ],
      [
        "BLEE",
        "Resistente a cefotaxima, ceftriaxona y aztreonam, con sinergia con clavulánico. Tratamiento: carbapenémico; en cistitis no complicada, fosfomicina"
      ],
      [
        "AmpC",
        "El clavulánico no lo inhibe y es resistente a cefoxitina"
      ],
      [
        "Carbapenemasa (KPC)",
        "Sin halo ni con imipenem ni meropenem. Tratamiento: ceftazidima-avibactam o colistina, con infectología"
      ]
    ]
  },
  {
    "id": "orina",
    "grupo": "Laboratorio",
    "titulo": "Examen de orina y urocultivo",
    "columnas": [
      "Dato",
      "Valor o interpretación"
    ],
    "filas": [
      [
        "Densidad",
        "1.005–1.030"
      ],
      [
        "pH",
        "4.5–8"
      ],
      [
        "Hematíes",
        "0–2 por campo; con cilindros eritrocitarios: glomerulonefritis"
      ],
      [
        "Leucocitos",
        "0–5 por campo; más es piuria; piuria intensa: pielonefritis"
      ],
      [
        "Células epiteliales escamosas",
        "Más de 15 por campo: muestra contaminada"
      ],
      [
        "Nitritos y esterasa",
        "Sugieren infección urinaria"
      ],
      [
        "Cilindros hialinos",
        "Pocos: normal. Aumentados: deshidratación o ejercicio"
      ],
      [
        "Cilindros leucocitarios",
        "Pielonefritis"
      ],
      [
        "Cilindros eritrocitarios",
        "Glomerulonefritis"
      ],
      [
        "Cilindros granulosos",
        "Degeneración tubular, nefropatías"
      ],
      [
        "Cristales de estruvita",
        "pH alcalino; ITU por bacterias ureasa positivas como Proteus mirabilis"
      ],
      [
        "Cristales de ácido úrico",
        "pH ácido; hiperuricemia, gota, lisis tumoral"
      ],
      [
        "Cristales de oxalato de calcio",
        "pH ácido o neutro; litiasis, dieta rica en oxalato"
      ],
      [
        "Cristales de cistina",
        "pH ácido; cistinuria"
      ],
      [
        "Orina anaranjada",
        "Rifampicina, ictericia obstructiva, deshidratación grave"
      ],
      [
        "Orina verde",
        "Pseudomonas aeruginosa, fístula intestinal, azul de metileno"
      ],
      [
        "Toma del urocultivo",
        "Chorro medio de la primera micción, con higiene; procesar en menos de 2 h o refrigerar a 4 °C"
      ],
      [
        "Paciente con sonda",
        "Punción del tubo de drenaje, nunca de la bolsa"
      ],
      [
        "Asa de 0.001 mL",
        "Cada colonia = 1000 UFC/mL"
      ],
      [
        "≥ 10⁵ UFC/mL de un solo germen",
        "Infección significativa"
      ],
      [
        "10⁴–10⁵ UFC/mL",
        "Interpretar según la clínica"
      ],
      [
        "< 10⁴ UFC/mL o varios gérmenes",
        "Probable contaminación (salvo punción suprapúbica)"
      ]
    ]
  },
  {
    "id": "heces",
    "grupo": "Laboratorio",
    "titulo": "Coprológico y coprocultivo",
    "columnas": [
      "Dato",
      "Detalle"
    ],
    "filas": [
      [
        "Muestra del coprológico",
        "2–5 g de heces frescas en frasco limpio; sin orina, agua ni papel"
      ],
      [
        "Tiempo",
        "Procesar en menos de 30 minutos para ver trofozoítos móviles (Entamoeba, Giardia)"
      ],
      [
        "Si hay retraso",
        "Formol al 10 % o PVA"
      ],
      [
        "Montaje en solución salina",
        "Estructuras móviles: trofozoítos y larvas"
      ],
      [
        "Montaje con lugol",
        "Núcleos y membranas de quistes"
      ],
      [
        "Objetivos",
        "10x y 40x"
      ],
      [
        "Leucocitos y hematíes",
        "Invasión intestinal: amebiasis, shigelosis"
      ],
      [
        "Coprológico negativo",
        "No descarta: pedir exámenes seriados"
      ],
      [
        "Cuándo pedir coprocultivo",
        "Diarrea con fiebre o sangre/moco, diarrea > 7 días, sospecha de tifoidea, brotes, portadores, inmunocomprometidos"
      ],
      [
        "Transporte",
        "Cary-Blair si demora más de 2 h; en lactantes vale el hisopo rectal"
      ],
      [
        "Siembra",
        "MacConkey, XLD o SS, agar Campylobacter"
      ],
      [
        "Incubación",
        "35–37 °C por 24–48 h; Campylobacter hasta 72 h"
      ],
      [
        "Identificación",
        "TSI, LIA, urea, citrato, oxidasa"
      ],
      [
        "Patógenos más frecuentes en Perú",
        "Salmonella (Typhi, Paratyphi, Enteritidis), Shigella (sobre todo flexneri), Campylobacter jejuni, Yersinia, E. coli patógenas"
      ]
    ]
  },
  {
    "id": "tratamientos",
    "grupo": "Tratamientos",
    "titulo": "Tratamiento de elección",
    "columnas": [
      "Cuadro",
      "Tratamiento"
    ],
    "filas": [
      [
        "Aspergilosis invasiva",
        "Voriconazol"
      ],
      [
        "Aspergiloma",
        "Cirugía; embolización si la hemoptisis es masiva"
      ],
      [
        "ABPA",
        "Corticoides sistémicos e itraconazol"
      ],
      [
        "Otomicosis por A. niger",
        "Limpieza del conducto y clotrimazol tópico"
      ],
      [
        "Queratitis por Fusarium",
        "Natamicina tópica (alternativa: voriconazol)"
      ],
      [
        "Tinea capitis por Microsporum canis",
        "Griseofulvina oral; revisar a la mascota"
      ],
      [
        "Onicomicosis por T. rubrum",
        "Terbinafina oral por 12 semanas"
      ],
      [
        "Esporotricosis",
        "Itraconazol 3–6 meses (alternativa: yoduro de potasio)"
      ],
      [
        "Paracoccidioidomicosis",
        "Itraconazol; grave: anfotericina B"
      ],
      [
        "Histoplasmosis diseminada",
        "Anfotericina B liposomal y luego itraconazol"
      ],
      [
        "Muguet",
        "Nistatina oral en suspensión"
      ],
      [
        "Candidemia",
        "Equinocandina y retirar el catéter"
      ],
      [
        "Fungemia por Rhodotorula",
        "Retirar el catéter y anfotericina B (resiste fluconazol y equinocandinas)"
      ],
      [
        "Mucormicosis",
        "Anfotericina B liposomal, desbridamiento urgente y corregir la cetoacidosis"
      ],
      [
        "Candiduria",
        "Retirar o cambiar la sonda; fluconazol si hay síntomas"
      ],
      [
        "Cistitis por E. coli",
        "Nitrofurantoína o fosfomicina, según antibiograma"
      ],
      [
        "Infección por BLEE",
        "Carbapenémico; en cistitis no complicada, fosfomicina"
      ],
      [
        "ITU por Proteus mirabilis",
        "Ceftriaxona o ciprofloxacino según antibiograma; cambiar la sonda; no nitrofurantoína"
      ],
      [
        "Neumonía por Klebsiella",
        "Ceftriaxona; si es BLEE, meropenem"
      ],
      [
        "Klebsiella KPC",
        "Ceftazidima-avibactam o colistina"
      ],
      [
        "MRSA",
        "Vancomicina"
      ],
      [
        "Tuberculosis sensible",
        "HRZE 2 meses y HR 4 meses, supervisado"
      ],
      [
        "TB resistente a rifampicina",
        "BPaLM: bedaquilina, pretomanid, linezolid y moxifloxacino"
      ],
      [
        "Tricomoniasis",
        "Metronidazol a la paciente y a su pareja"
      ],
      [
        "VIH, primera línea (MINSA)",
        "TDF + 3TC + DTG (TLD), de por vida"
      ],
      [
        "VIH con tuberculosis",
        "TDF + 3TC + EFV (menos interacción con rifampicina)"
      ],
      [
        "VIH con falla renal",
        "ABC + 3TC + DTG"
      ],
      [
        "Verrugas genitales por VPH",
        "Imiquimod, podofilotoxina, ácido tricloroacético o crioterapia"
      ]
    ]
  },
  {
    "id": "baltimore",
    "grupo": "Virus",
    "titulo": "Clasificación de Baltimore",
    "columnas": [
      "Grupo",
      "Genoma",
      "Ejemplos"
    ],
    "filas": [
      [
        "I",
        "ADN doble cadena",
        "Herpesvirus, adenovirus, VPH, poxvirus"
      ],
      [
        "II",
        "ADN cadena simple (+)",
        "Parvovirus"
      ],
      [
        "III",
        "ARN doble cadena",
        "Rotavirus (reovirus)"
      ],
      [
        "IV",
        "ARN cadena simple (+): funciona como ARNm",
        "Picornavirus, flavivirus (dengue, zika, VHC), coronavirus, togavirus"
      ],
      [
        "V",
        "ARN cadena simple (−): trae su polimerasa",
        "Influenza, rabia, sarampión, VSR"
      ],
      [
        "VI",
        "ARN (+) con transcriptasa inversa",
        "Retrovirus: VIH, HTLV"
      ],
      [
        "VII",
        "ADN doble cadena con transcriptasa inversa",
        "Hepatitis B"
      ]
    ]
  },
  {
    "id": "vih-dx",
    "grupo": "Virus",
    "titulo": "VIH: pruebas de diagnóstico",
    "columnas": [
      "Prueba",
      "Qué detecta",
      "Para qué"
    ],
    "filas": [
      [
        "ELISA 3.ª generación",
        "Solo anticuerpos (ventana 3–6 semanas)",
        "Tamizaje, en desuso"
      ],
      [
        "ELISA 4.ª generación",
        "Anticuerpos + antígeno p24 (ventana 14–18 días)",
        "Tamizaje recomendado por OMS y MINSA"
      ],
      [
        "Prueba rápida",
        "Anticuerpos y casi siempre p24; resultado en 15–30 min",
        "Tamizaje en el punto de atención"
      ],
      [
        "5.ª generación",
        "Anticuerpos VIH-1/VIH-2 + p24, informados por separado",
        "Tamizaje con ventana de 11–15 días"
      ],
      [
        "Western blot",
        "Positivo: 2 bandas de envoltura (gp120/160 + gp41)",
        "Confirmatoria; obsoleta en varios países"
      ],
      [
        "LIA",
        "Proteínas recombinantes en líneas",
        "Confirmatoria recomendada"
      ],
      [
        "RT-qPCR (carga viral)",
        "ARN viral en plasma; indetectable < 20–50 copias/mL",
        "Discordantes, neonatos y monitoreo del TARV"
      ]
    ]
  },
  {
    "id": "co-test",
    "grupo": "Virus",
    "titulo": "VPH: manejo del co-test",
    "columnas": [
      "Citología",
      "VPH",
      "Manejo"
    ],
    "filas": [
      [
        "Normal",
        "Negativo",
        "Repetir co-test en 5 años"
      ],
      [
        "Normal",
        "Positivo (no 16/18)",
        "Repetir en 12 meses o genotipificar"
      ],
      [
        "Normal",
        "16/18 positivo",
        "Colposcopia inmediata"
      ],
      [
        "ASC-US",
        "Negativo",
        "Repetir en 3 años"
      ],
      [
        "ASC-US",
        "Positivo",
        "Colposcopia"
      ],
      [
        "HSIL",
        "Positivo",
        "Colposcopia y/o biopsia"
      ]
    ]
  },
  {
    "id": "tb-pared",
    "grupo": "Tuberculosis",
    "titulo": "Pared de M. tuberculosis",
    "columnas": [
      "Componente",
      "Función"
    ],
    "filas": [
      [
        "Ácidos micólicos (40–60 % de los lípidos)",
        "Resistencia a desecación, desinfectantes y antibióticos; responsables de la ácido-alcohol resistencia"
      ],
      [
        "Arabinogalactano",
        "Une los ácidos micólicos al peptidoglucano"
      ],
      [
        "Peptidoglucano",
        "Forma y rigidez"
      ],
      [
        "Lípidos libres y glucolípidos (cord factor)",
        "Formación de granulomas y daño tisular"
      ],
      [
        "Proteínas antigénicas (ESAT-6, CFP-10, Ag85)",
        "Estimulan la respuesta inmune; se usan en QuantiFERON"
      ]
    ],
    "nota": "Del apunte «Tuberculosis»."
  },
  {
    "id": "tb-virulencia",
    "grupo": "Tuberculosis",
    "titulo": "Factores de virulencia de M. tuberculosis",
    "columnas": [
      "Factor",
      "Qué hace"
    ],
    "filas": [
      [
        "Cord factor (dimicolato de trehalosa)",
        "Crecimiento en \"cuerdas\"; inhibe migración de neutrófilos; necrosis; granulomas"
      ],
      [
        "Ácidos micólicos",
        "Resistencia a desecación, antibióticos y destrucción por macrófagos"
      ],
      [
        "Lipopolisacáridos y glucolípidos",
        "Modulan y evaden la respuesta inmune"
      ],
      [
        "ESAT-6 y CFP-10 (secretadas)",
        "Inhiben la fusión fagosoma-lisosoma; dañan tejido pulmonar"
      ],
      [
        "Antígeno 85 (Ag85)",
        "Entrada a la célula y síntesis de pared"
      ],
      [
        "Catalasas y superóxido dismutasas",
        "Neutralizan especies reactivas de oxígeno dentro del fagocito"
      ],
      [
        "Persistencia/latencia",
        "Sobrevive años en granulomas sin replicarse"
      ]
    ],
    "nota": "Del apunte «Tuberculosis»."
  },
  {
    "id": "tb-cultivos",
    "grupo": "Tuberculosis",
    "titulo": "Cultivos para tuberculosis",
    "columnas": [
      "Cultivo",
      "Medio",
      "Cuándo es positivo",
      "Dato clave"
    ],
    "filas": [
      [
        "Sólido a base de huevo",
        "Löwenstein-Jensen u Ogawa",
        "Desde la 4.ª semana",
        "Colonias rugosas, bordes irregulares, elevadas, color crema"
      ],
      [
        "Líquido",
        "Middlebrook 7H9 en equipo MGIT 960",
        "Desde el 2.º día (2 días 18 h con muestra 3+)",
        "Fluorocromo con oxígeno: el bacilo consume O₂ y aparece fluorescencia; el equipo lee cada 60 min; también hace sensibilidad"
      ],
      [
        "Agar",
        "Middlebrook 7H10 (método de las proporciones)",
        "Desde la 2.ª semana",
        "Diferencia especies y micobacterias no TB: cromógenas (amarillas), fotocromógenas (con luz), escotocromógenas (en oscuridad)"
      ]
    ],
    "nota": "Del apunte «Tuberculosis»."
  },
  {
    "id": "tb-moleculares",
    "grupo": "Tuberculosis",
    "titulo": "Pruebas rápidas y moleculares de TB",
    "columnas": [
      "Prueba molecular / rápida",
      "Qué detecta",
      "Muestra"
    ],
    "filas": [
      [
        "GenoType",
        "MTB, otras micobacterias, resistencia a isoniazida, rifampicina y segunda línea",
        "Solo esputo"
      ],
      [
        "GeneXpert MTB/RIF",
        "MTB + **solo resistencia a rifampicina**",
        "Todo tipo de muestras"
      ],
      [
        "GeneXpert MTB/XDR",
        "10 colores: isoniazida, fluoroquinolonas, inyectables de segunda línea (amikacina, kanamicina, capreomicina) y etionamida",
        "—"
      ],
      [
        "MODS",
        "TB + resistencia a H y R",
        "Esputo procesado en placas de 24 pozos"
      ]
    ],
    "nota": "Del apunte «Tuberculosis»."
  },
  {
    "id": "tb-extrapulmonar",
    "grupo": "Tuberculosis",
    "titulo": "TB extrapulmonar",
    "columnas": [
      "Forma",
      "Clínica clave",
      "Diagnóstico clave"
    ],
    "filas": [
      [
        "Laríngea",
        "**Disfonía** (síntoma principal), odinofagia, tos crónica. Una de las formas **más contagiosas**, porque elimina bacilos directo desde las cuerdas vocales",
        "Laringoscopía (úlceras, granulomas); baciloscopía o PCR"
      ],
      [
        "Ganglionar (escrófula)",
        "Adenopatía **cervical** crónica, indolora, en conglomerados, que fistuliza (drena caseum). Sospecha: adenopatía mayor de 2–3 semanas",
        "**PAAF o biopsia** (elección); Xpert; cultivo; histología: granulomas con necrosis caseosa, células de Langhans"
      ],
      [
        "Pleural",
        "Fiebre, dolor pleurítico, disnea, tos seca. Rx: opacidad homogénea, signo del menisco",
        "Toracocentesis: exudado **linfocítico**, **ADA > 40–45 U/L**; Xpert, cultivo, biopsia pleural"
      ],
      [
        "Meníngea",
        "Subaguda (1–3 semanas): cefalea, fiebre, rigidez de nuca, vómitos, pares craneales, convulsiones. Alarma: papiledema, convulsiones, Glasgow < 12",
        "LCR: linfocitos ↑, proteínas ↑ (> 100–500 mg/dL), **glucosa ↓ (LCR/sangre < 0,3)**, ADA > 9–10 U/L; Xpert Ultra (elección); RM: realce meníngeo basal"
      ],
      [
        "Osteoarticular (Mal de Pott)",
        "Dolor vertebral crónico, absceso paravertebral, déficit neurológico, giba. Articulación periférica: **tríada de Phemister** (osteopenia yuxtaarticular, erosiones periféricas, estrechamiento gradual del espacio articular)",
        "**RM de columna** (elección): espondilodiscitis de dos vértebras + disco; biopsia + Xpert + cultivo"
      ]
    ],
    "nota": "Del apunte «Tuberculosis»."
  },
  {
    "id": "res-mecanismos",
    "grupo": "Resistencia",
    "titulo": "Mecanismos de resistencia",
    "columnas": [
      "Mecanismo",
      "En qué consiste",
      "Ejemplo"
    ],
    "filas": [
      [
        "Barreras de exclusión",
        "Bombas de flujo que expulsan el antimicrobiano con gasto de energía",
        "Bombas de eflujo"
      ],
      [
        "Blanco alterado",
        "Cambian las PBP (transpeptidasas) donde actúan los betalactámicos",
        "MRSA"
      ],
      [
        "Desactivación enzimática (**el más potente**)",
        "Cientos de enzimas inactivan el fármaco dentro, en el periplasma o fuera",
        "BLEE, carbapenemasas"
      ]
    ],
    "nota": "Del apunte «Resistencia a los antibióticos»."
  },
  {
    "id": "res-betalactamasas",
    "grupo": "Resistencia",
    "titulo": "Betalactamasas en enterobacterias",
    "columnas": [
      "Rasgo",
      "BLEE (ESBL)",
      "AmpC",
      "Carbapenemasas"
    ],
    "filas": [
      [
        "Hidrolizan",
        "Penicilinas, cefalosporinas de 3.ª generación (ceftriaxona, ceftazidima), aztreonam",
        "Penicilinas, cefalosporinas de 1.ª a 3.ª generación (y cefoxitina)",
        "Casi todos los betalactámicos, incluidos carbapenémicos; algunas también inhibidores"
      ],
      [
        "¿Inhibida por clavulanato?",
        "**Sí**",
        "**No** (tampoco sulbactam ni tazobactam)",
        "Variable"
      ],
      [
        "Genes",
        "Plasmídicos",
        "Cromosómicos inducibles o plasmídicos (más peligrosos)",
        "Plasmídicos / elementos móviles"
      ],
      [
        "Bacterias típicas",
        "*E. coli*, *K. pneumoniae*",
        "*Enterobacter cloacae*, *Citrobacter freundii*, *Serratia*, *Proteus/Morganella*, *P. aeruginosa*",
        "KPC: *K. pneumoniae*; NDM: *E. coli*, *Klebsiella*; OXA-48: enterobacterias; VIM, IMP: *Pseudomonas*, *Acinetobacter*"
      ],
      [
        "Sospecha",
        "Resistente o halo reducido a cefotaxima, ceftazidima o ceftriaxona",
        "Resistente a cefalotina, cefazolina, cefuroxima, ceftriaxona, **cefoxitina** y no inhibida por clavulanato",
        "Resistente o halo reducido a meropenem, imipenem o ertapenem"
      ],
      [
        "Confirmación",
        "**Doble disco**: CAZ vs CAZ + clavulanato; aumento del halo **≥ 5 mm** = BLEE (la más usada en MINSA y EsSalud). Disco combinado: cefotaxima vs cefotaxima + clavulanato, ≥ 5 mm",
        "Doble disco con **cefoxitina** (inductor) a 20 mm de cefotaxima: halo achatado = AmpC. Disco con **cloxacilina**: aumento ≥ 5 mm = AmpC",
        "**Hodge modificado** (imagen en \"trébol\"); **Carba NP** (cambio de color/pH, ~2 h); tiras inmunocromatográficas (NG-Test Carba 5: KPC, NDM, VIM, OXA-48); sinergia con ácido borónico (KPC) o EDTA/dipicolinato (metalo-betalactamasas); PCR multiplex"
      ]
    ],
    "nota": "Del apunte «Resistencia a los antibióticos»."
  },
  {
    "id": "hon-formas",
    "grupo": "Hongos",
    "titulo": "Formas de los hongos",
    "columnas": [
      "Forma",
      "Rasgos",
      "Ejemplo y clínica"
    ],
    "filas": [
      [
        "Levaduras",
        "Unicelulares, se reproducen por gemación",
        "*Candida albicans*: candidiasis oral y vaginal"
      ],
      [
        "Mohos (filamentosos)",
        "Multicelulares, forman hifas y micelio",
        "*Aspergillus fumigatus*: aspergilosis pulmonar"
      ],
      [
        "Dimórficos",
        "**Moho a 25 °C, levadura a 37 °C**: \"moho en el ambiente, levadura en el paciente\"",
        "*Histoplasma capsulatum*, \"el hongo de las cuevas\""
      ]
    ],
    "nota": "Del apunte «Introducción a la micología»."
  },
  {
    "id": "hon-antifungicos",
    "grupo": "Hongos",
    "titulo": "Antifúngicos",
    "columnas": [
      "Grupo",
      "Mecanismo",
      "Usos clave",
      "Efectos adversos"
    ],
    "filas": [
      [
        "Polienos (anfotericina B, nistatina)",
        "Se unen al ergosterol y forman poros",
        "Micosis sistémicas graves; criptococosis (con flucitosina); nistatina tópica en candidiasis",
        "Nefrotoxicidad, fiebre, escalofríos, hipokalemia, reacciones infusionales"
      ],
      [
        "Azoles",
        "Inhiben la síntesis de ergosterol (CYP450)",
        "Candidiasis, aspergilosis (voriconazol), micosis sistémicas",
        "Hepatotoxicidad, interacciones medicamentosas, alteraciones GI"
      ],
      [
        "Equinocandinas",
        "Inhiben la síntesis de **β-glucano** de la pared",
        "Candidemia, aspergilosis",
        "Elevación de transaminasas"
      ],
      [
        "Antimetabolitos (flucitosina)",
        "Inhiben síntesis de ADN/ARN",
        "Criptococosis junto con anfotericina B",
        "Mielosupresión, toxicidad hepática"
      ]
    ],
    "nota": "Del apunte «Introducción a la micología»."
  },
  {
    "id": "hon-tinciones",
    "grupo": "Hongos",
    "titulo": "Tinciones en micología",
    "columnas": [
      "Tinción",
      "Para qué"
    ],
    "filas": [
      [
        "KOH",
        "Estructuras fúngicas en piel; tiñas"
      ],
      [
        "Azul de lactofenol",
        "Hongos filamentosos: hifas y esporas en azul"
      ],
      [
        "**Tinta china**",
        "Levaduras encapsuladas: *Cryptococcus* en LCR (se ve la cápsula)"
      ],
      [
        "Blanco de calcoflúor",
        "Fluorescencia con quitina/celulosa"
      ],
      [
        "Gram",
        "Levaduras como *Candida*"
      ],
      [
        "Negro de clorazol (Chlorazol Black E)",
        "Tiñe pared fúngica; con KOH en piel, uñas, córnea"
      ],
      [
        "PAS y Gomori-Grocott",
        "Biopsias, histopatología"
      ]
    ],
    "nota": "Del apunte «Introducción a la micología»."
  },
  {
    "id": "hon-tipos",
    "grupo": "Hongos",
    "titulo": "Tipos de micosis",
    "columnas": [
      "Tipo",
      "Afecta",
      "Vía / rasgo",
      "Agentes"
    ],
    "filas": [
      [
        "Superficiales",
        "Estrato córneo, pelo, uñas; no invaden; benignas",
        "Prurito, descamación",
        "Dermatofitos, *Candida* superficial"
      ],
      [
        "Cutáneas",
        "Piel queratinizada (consumen queratina)",
        "Lesiones anulares, borde elevado serpiginoso",
        "*Trichophyton*, *Microsporum*, *Epidermophyton*"
      ],
      [
        "Subcutáneas",
        "Dermis y tejido subcutáneo",
        "**Inoculación traumática** (espinas, tierra); nódulos con diseminación linfática ascendente",
        "*Sporothrix schenckii* (clásico), cromoblastomicosis"
      ],
      [
        "Sistémicas (endémicas)",
        "Inician en pulmón y pueden diseminarse",
        "**Inhalación**; hongos **dimórficos**; patógenos primarios (enferman a inmunocompetentes)",
        "*Histoplasma*, *Blastomyces*, *Paracoccidioides*"
      ],
      [
        "Oportunistas",
        "Inmunosuprimidos (VIH, cáncer, trasplante); graves y diseminadas",
        "Patogenicidad condicionada",
        "*Candida*, *Aspergillus*, *Cryptococcus*"
      ]
    ],
    "nota": "Del apunte «Introducción a la micología»."
  },
  {
    "id": "hon-asp-virulencia",
    "grupo": "Hongos",
    "titulo": "Aspergillus: factores de virulencia",
    "columnas": [
      "Factor de virulencia",
      "Efecto"
    ],
    "filas": [
      [
        "Conidias pequeñas (2–3 µm)",
        "Llegan al alvéolo; tropismo pulmonar"
      ],
      [
        "Termotolerancia (37–50 °C)",
        "Sobrevive en el huésped"
      ],
      [
        "**Gliotoxina**",
        "Inhibe macrófagos y neutrófilos; **principal factor inmunoevasor**"
      ],
      [
        "Pared (β-glucano, galactomanano)",
        "Inflamación + evasión; galactomanano = diagnóstico"
      ],
      [
        "Angioinvasión",
        "Trombosis, necrosis, hemorragia: hemoptisis + signo del halo"
      ],
      [
        "Proteasas, elastasas",
        "Destruyen tejido"
      ],
      [
        "Biofilm",
        "Infecciones persistentes, resistencia antifúngica"
      ]
    ],
    "nota": "Del apunte «Oportunistas ambientales: Aspergillus, zigomicetos y Fusarium»."
  },
  {
    "id": "hon-asp-tto",
    "grupo": "Hongos",
    "titulo": "Aspergilosis: tratamiento según la forma",
    "columnas": [
      "Situación",
      "Elección",
      "Alternativa / nota"
    ],
    "filas": [
      [
        "Invasiva",
        "**Voriconazol** (gold estándar)",
        "Isavuconazol / anfotericina B liposomal"
      ],
      [
        "Profilaxis (neutropenia prolongada)",
        "Posaconazol",
        "Voriconazol"
      ],
      [
        "Refractaria / severa",
        "Voriconazol + equinocandina",
        "Uso en UCI, controversial"
      ],
      [
        "Aspergiloma",
        "**Cirugía**",
        "Antifúngicos poco útiles"
      ],
      [
        "ABPA",
        "**Corticoides + itraconazol**",
        "Es hipersensibilidad"
      ]
    ],
    "nota": "Del apunte «Oportunistas ambientales: Aspergillus, zigomicetos y Fusarium»."
  },
  {
    "id": "hon-candida-especies",
    "grupo": "Hongos",
    "titulo": "Especies de Candida",
    "columnas": [
      "Especie",
      "Contexto típico",
      "Lo más característico",
      "Resistencia"
    ],
    "filas": [
      [
        "*C. albicans*",
        "Comunidad y hospital; la más frecuente",
        "Forma hifas verdaderas; **tubo germinal (+)**; la más virulenta",
        "Generalmente sensible"
      ],
      [
        "*C. glabrata*",
        "Hospitalizados, ancianos; vaginitis **recurrente**",
        "**No forma hifas** (solo levaduras)",
        "Poca sensibilidad a azoles"
      ],
      [
        "*C. tropicalis*",
        "Neutropenia, cáncer",
        "Alta capacidad invasiva; candidiasis diseminada",
        "Variable"
      ],
      [
        "*C. parapsilosis*",
        "Catéteres, neonatos",
        "**Biofilm muy potente**",
        "Sensible, pero el biofilm protege"
      ],
      [
        "*C. krusei*",
        "Inmunosuprimidos",
        "—",
        "**Resistencia intrínseca a fluconazol**"
      ],
      [
        "*C. auris*",
        "Brotes hospitalarios; emergente",
        "Persistencia ambiental, biofilm",
        "**Multirresistente**; la más peligrosa"
      ],
      [
        "*C. dubliniensis*",
        "**VIH**; candidiasis oral",
        "Parecida a *C. albicans*, menos agresiva",
        "Sensible a fluconazol"
      ]
    ],
    "nota": "Del apunte «Candida»."
  },
  {
    "id": "hon-candida-dx",
    "grupo": "Hongos",
    "titulo": "C. albicans vs C. dubliniensis",
    "columnas": [
      "Prueba",
      "*C. albicans*",
      "*C. dubliniensis*"
    ],
    "filas": [
      [
        "Tubo germinal",
        "+",
        "+"
      ],
      [
        "Clamidoconidias",
        "+",
        "+ abundantes"
      ],
      [
        "Crecimiento a 42 °C",
        "+",
        "−"
      ],
      [
        "Asimilación de xilosa",
        "+",
        "−"
      ],
      [
        "CHROMagar",
        "Verde claro",
        "Verde oscuro"
      ],
      [
        "Sonda Ca3",
        "−",
        "+"
      ]
    ],
    "nota": "Del apunte «Candida»."
  },
  {
    "id": "hon-crypto-especies",
    "grupo": "Hongos",
    "titulo": "Cryptococcus: especies y serotipos",
    "columnas": [
      "Especie / variedad",
      "Serotipo",
      "Nota"
    ],
    "filas": [
      [
        "*C. neoformans* var. *grubii*",
        "A",
        "~95 % de casos mundiales; inmunocomprometidos, sobre todo VIH"
      ],
      [
        "*C. neoformans* var. *neoformans*",
        "D",
        "Europa, zonas templadas"
      ],
      [
        "*C. gattii*",
        "B y C",
        "**Inmunocompetentes**; tropical/subtropical; **eucaliptos** y otros árboles"
      ]
    ],
    "nota": "Del apunte «Cryptococcus»."
  },
  {
    "id": "hon-crypto-virulencia",
    "grupo": "Hongos",
    "titulo": "Cryptococcus: virulencia",
    "columnas": [
      "Factor",
      "Efecto"
    ],
    "filas": [
      [
        "**Cápsula (GXM)**",
        "Impide fagocitosis, quimiotaxis y opsonización"
      ],
      [
        "Melanina",
        "Protege del estrés oxidativo y de algunos antifúngicos"
      ],
      [
        "**Ureasa**",
        "Facilita diseminación y paso por la **barrera hematoencefálica** (meningitis)"
      ],
      [
        "Fenol oxidasa",
        "Contribuye al neurotropismo"
      ],
      [
        "Fosfolipasas y proteasas",
        "Destruyen tejido"
      ],
      [
        "Termotolerancia, biofilm",
        "Sobrevive a 37 °C; protección en catéteres"
      ]
    ],
    "nota": "Del apunte «Cryptococcus»."
  },
  {
    "id": "hon-crypto-tto",
    "grupo": "Hongos",
    "titulo": "Meningitis criptocócica: tratamiento",
    "columnas": [
      "Fase (meningitis)",
      "Fármacos",
      "Duración"
    ],
    "filas": [
      [
        "Inducción",
        "**Anfotericina B + flucitosina**",
        "2 semanas"
      ],
      [
        "Consolidación",
        "Fluconazol dosis alta",
        "8 semanas"
      ],
      [
        "Mantenimiento",
        "Fluconazol dosis baja",
        "≥ 1 año"
      ]
    ],
    "nota": "Del apunte «Cryptococcus»."
  },
  {
    "id": "hon-dimorficos",
    "grupo": "Hongos",
    "titulo": "Dimórficos endémicos lado a lado",
    "columnas": [
      "Rasgo",
      "*Histoplasma capsulatum*",
      "*Paracoccidioides brasiliensis*",
      "*Blastomyces dermatitidis*"
    ],
    "filas": [
      [
        "Levadura en tejido",
        "**Pequeña (2–5 µm), intracelular en macrófagos**, gemación de base estrecha",
        "**Grande (10–30 µm), gemación múltiple: \"timón de barco\"**",
        "**Grande (8–15 µm), pared gruesa refringente, gemación única de base ancha**"
      ],
      [
        "Fase micelial",
        "Hifas septadas; microconidias (infectantes) y macroconidias tuberculadas (espiculadas)",
        "Hifas septadas; microconidias (se inhalan)",
        "Hifas septadas; conidios en \"paleta\" (lollipop)"
      ],
      [
        "Hábitat",
        "Suelo ácido con **guano de aves y murciélagos**; cuevas, gallineros, silos",
        "Suelo húmedo, cafetales y tabacales, cerca de agua",
        "Suelo húmedo y arenoso cerca de agua"
      ],
      [
        "Zona",
        "Perú: **Tingo María, Oxapampa, Pucallpa, Iquitos**",
        "América Latina (Brasil, Perú, Colombia, Venezuela)",
        "Norteamérica: Grandes Lagos, ríos Ohio y Misisipi"
      ],
      [
        "Grupo de riesgo",
        "Exploradores de cuevas; VIH",
        "**Hombres rurales agricultores (9:1)**, tabaco, alcohol",
        "Construcción, tala, caza, pesca, campamentos"
      ],
      [
        "Sello clínico",
        "Simula TB; diseminada en VIH",
        "**Úlceras orales \"moriformes\"**, simula TB con baciloscopía negativa",
        "Lesiones cutáneas verrugosas"
      ],
      [
        "Tratamiento",
        "Itraconazol; anfotericina B si grave",
        "Itraconazol; TMP-SMX; anfotericina B si grave",
        "— (no figura en el seminario)"
      ]
    ],
    "nota": "Del apunte «Dimórficos endémicos: Histoplasma, Paracoccidioides y Blastomyces»."
  },
  {
    "id": "hon-histo-formas",
    "grupo": "Hongos",
    "titulo": "Histoplasmosis: formas clínicas",
    "columnas": [
      "Forma",
      "Quién",
      "Clínica y hallazgos"
    ],
    "filas": [
      [
        "Asintomática",
        "**95 %** de inmunocompetentes",
        "Autolimitada"
      ],
      [
        "Histoplasmoma",
        "—",
        "Nódulo pulmonar solitario calcificado (en diana), asintomático"
      ],
      [
        "Pulmonar aguda",
        "Infección primaria, la más frecuente sintomática",
        "Cuadro gripal: fiebre, tos seca, dolor torácico; infiltrados, **adenopatías hiliares**, eritema nodoso"
      ],
      [
        "Pulmonar crónica",
        "Reactivación con enfermedad pulmonar previa (EPOC)",
        "Tos crónica, hemoptisis, pérdida de peso, **cavitaciones apicales**: muy confundible con TB"
      ],
      [
        "Diseminada progresiva",
        "**VIH con CD4 < 150**, inmunosuprimidos",
        "Fiebre prolongada, hepatoesplenomegalia, adenopatías, **pancitopenia**, úlceras mucocutáneas; puede llegar a shock"
      ]
    ],
    "nota": "Del apunte «Dimórficos endémicos: Histoplasma, Paracoccidioides y Blastomyces»."
  },
  {
    "id": "hon-paraco-formas",
    "grupo": "Hongos",
    "titulo": "Paracoccidioidomicosis: juvenil vs adulto",
    "columnas": [
      "Forma",
      "Quién",
      "Clínica"
    ],
    "filas": [
      [
        "Aguda/subaguda (juvenil), 5–10 %",
        "Niños, adolescentes, adultos jóvenes; evolución rápida",
        "Adenopatías generalizadas grandes y dolorosas que fistulizan (cervicales, submandibulares), **hepatoesplenomegalia**, fiebre, pérdida de peso, compromiso medular (anemia, pancitopenia), lesiones cutáneas"
      ],
      [
        "Crónica (adulto), **85–90 %**",
        "Hombres rurales, tabaco y alcohol; lenta",
        "**Pulmonar** (la más común; simula TB: infiltrados bilaterales, fibrosis); **úlceras mucosas moriformes** en encías, paladar, labios, nariz (casi diagnósticas); piel verrugosa; **insuficiencia suprarrenal tipo Addison** (fatiga, hipotensión, hiperpigmentación); SNC raro"
      ]
    ],
    "nota": "Del apunte «Dimórficos endémicos: Histoplasma, Paracoccidioides y Blastomyces»."
  },
  {
    "id": "hon-dermatofitos",
    "grupo": "Hongos",
    "titulo": "Dermatofitos lado a lado",
    "columnas": [
      "Rasgo",
      "*Trichophyton rubrum*",
      "*Microsporum canis*",
      "*Epidermophyton floccosum*"
    ],
    "filas": [
      [
        "Tipo",
        "**Antropófilo**",
        "**Zoófilo (gatos y perros)**",
        "Antropófilo"
      ],
      [
        "Microconidios",
        "**Abundantes, en lágrima, laterales: \"pájaros sobre un alambre\"**",
        "Escasos",
        "**No tiene**"
      ],
      [
        "Macroconidios",
        "Escasos, pared lisa y delgada, en lápiz o cigarro",
        "**Abundantes, fusiformes, pared gruesa y rugosa, extremos puntiagudos**",
        "**Claviformes (maza o palo de golf)**, lisos, pared delgada, solos o en grupos"
      ],
      [
        "Colonia",
        "Blanca algodonosa; **reverso rojo vinoso**",
        "Blanca algodonosa; **reverso amarillento**",
        "Aterciopelada o pulverulenta; **amarillo-verdosa, verde oliva o caqui**"
      ],
      [
        "Invade",
        "Piel y uñas; cabello raro",
        "**Cabello** y piel",
        "Piel y uñas; **nunca cabello**"
      ],
      [
        "Clínica típica",
        "Pedis (mocasín), cruris, corporis, unguium, manuum: **síndrome de una mano y dos pies**",
        "**Tiña capitis** (placas de alopecia, cabellos quebradizos, **querion de Celso**), corporis, faciei",
        "Pedis, cruris, corporis, unguium, manuum"
      ],
      [
        "Tratamiento",
        "Terbinafina tópica; oral si extensa o uñas",
        "Terbinafina o clotrimazol tópicos; **capitis: griseofulvina oral**",
        "Terbinafina o clotrimazol tópicos; oral si extensa o uñas"
      ]
    ],
    "nota": "Del apunte «Seminarios: dermatofitos, Sporothrix, cromoblastomicosis y Pneumocystis»."
  },
  {
    "id": "repaso-reconoce",
    "grupo": "Repaso final",
    "titulo": "Lo veo y lo reconozco",
    "columnas": [
      "Hallazgo",
      "Agente"
    ],
    "filas": [
      [
        "Bacilos rojos sobre fondo azul (Ziehl-Neelsen); cuerdas en MODS",
        "*M. tuberculosis*"
      ],
      [
        "Hifas septadas, ramificación a 45°, cabeza aspergilar",
        "*Aspergillus*"
      ],
      [
        "Hifas anchas, no septadas (cenocíticas)",
        "Zigomicetos (*Mucor*, *Rhizopus*)"
      ],
      [
        "Macroconidias en canoa o plátano; colonia rosada-violeta",
        "*Fusarium*"
      ],
      [
        "Tubo germinal (+) en 2–3 h; clamidoconidias",
        "*Candida albicans*"
      ],
      [
        "Levadura con cápsula en tinta china; colonia marrón en agar Niger",
        "*Cryptococcus*"
      ],
      [
        "Levaduras de 2–5 µm dentro de macrófagos",
        "*Histoplasma*"
      ],
      [
        "Levadura grande con gemación múltiple (timón de barco)",
        "*Paracoccidioides*"
      ],
      [
        "Levadura grande, pared gruesa, gemación única de base ancha",
        "*Blastomyces*"
      ],
      [
        "Levadura en cigarro; conidios en margarita; cuerpo asteroide",
        "*Sporothrix*"
      ],
      [
        "Cuerpos muriformes (escleróticos) café",
        "Cromoblastomicosis (*Fonsecaea*)"
      ],
      [
        "Microconidios en \"pájaros sobre un alambre\"; reverso rojo vinoso",
        "*T. rubrum*"
      ],
      [
        "Macroconidios fusiformes rugosos; reverso amarillo",
        "*M. canis*"
      ],
      [
        "Solo macroconidios en maza; colonia caqui",
        "*E. floccosum*"
      ],
      [
        "Quistes en Grocott en racimos en LBA",
        "*Pneumocystis jirovecii*"
      ]
    ],
    "nota": "Del apunte «Repaso final: lo que más se pregunta»."
  },
  {
    "id": "repaso-signos",
    "grupo": "Repaso final",
    "titulo": "Signos de imagen y laboratorio que se confunden",
    "columnas": [
      "Signo / dato",
      "Significa"
    ],
    "filas": [
      [
        "Signo del halo (nódulo + vidrio deslustrado)",
        "Aspergilosis invasiva (también *Fusarium*)"
      ],
      [
        "Halo invertido (atolón)",
        "Mucormicosis"
      ],
      [
        "Costras negras en paladar o cornetes + diabético",
        "Mucormicosis rinocerebral"
      ],
      [
        "Hemocultivo (+) para filamentoso",
        "*Fusarium* (en *Aspergillus* suele ser negativo)"
      ],
      [
        "Galactomanano",
        "*Aspergillus*"
      ],
      [
        "β-D-glucano",
        "Panfúngico, **menos** *Cryptococcus* y zigomicetos"
      ],
      [
        "Antígeno en orina",
        "Histoplasmosis diseminada"
      ],
      [
        "Anticuerpos anti-gp43",
        "Paracoccidioidomicosis (seguimiento)"
      ],
      [
        "Antígeno capsular GXM (látex)",
        "Criptococosis; título que sube = mal pronóstico"
      ],
      [
        "ADA pleural > 40–45 U/L, linfocitos",
        "TB pleural"
      ],
      [
        "LCR: linfocitos, proteína ↑, glucosa ↓",
        "TB meníngea (también criptocócica: haz tinta china y antígeno)"
      ],
      [
        "Halo < 22 mm con cefoxitina",
        "MRSA"
      ],
      [
        "Halo aumenta ≥ 5 mm con clavulanato",
        "BLEE"
      ],
      [
        "Halo aumenta ≥ 5 mm con cloxacilina; resistente a cefoxitina",
        "AmpC"
      ],
      [
        "Trébol en Hodge; Carba NP (+)",
        "Carbapenemasa"
      ]
    ],
    "nota": "Del apunte «Repaso final: lo que más se pregunta»."
  },
  {
    "id": "repaso-eleccion",
    "grupo": "Repaso final",
    "titulo": "Fármaco de elección (TB y hongos)",
    "columnas": [
      "Infección",
      "Elección"
    ],
    "filas": [
      [
        "TB sensible",
        "2HRZE / 4HR (MINSA)"
      ],
      [
        "Aspergilosis invasiva",
        "Voriconazol"
      ],
      [
        "Aspergiloma",
        "Cirugía"
      ],
      [
        "ABPA",
        "Corticoides + itraconazol"
      ],
      [
        "Mucormicosis",
        "Anfotericina B liposomal + cirugía + controlar diabetes"
      ],
      [
        "Fusariosis",
        "Voriconazol ± anfotericina B"
      ],
      [
        "Queratitis micótica",
        "Natamicina / voriconazol tópico"
      ],
      [
        "Candidiasis superficial",
        "Azoles tópicos o sistémicos (vaginal: fluconazol 150 mg dosis única)"
      ],
      [
        "Candidiasis invasiva",
        "Equinocandina"
      ],
      [
        "Meningitis criptocócica",
        "Anfotericina B + flucitosina 2 sem → fluconazol"
      ],
      [
        "Histoplasmosis diseminada",
        "Anfotericina B → itraconazol"
      ],
      [
        "Paracoccidioidomicosis leve-moderada",
        "Itraconazol (alternativa TMP-SMX)"
      ],
      [
        "Tiña capitis por *M. canis*",
        "Griseofulvina oral"
      ],
      [
        "Otras tiñas",
        "Terbinafina"
      ],
      [
        "Neumonía por *Pneumocystis*",
        "TMP-SMX 21 días"
      ]
    ],
    "nota": "Del apunte «Repaso final: lo que más se pregunta»."
  },
  {
    "id": "zona-1",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Pulmón",
    "columnas": [
      "Microorganismo",
      "Paciente típico",
      "Clínica e imagen",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*M. tuberculosis*",
        "Contacto con bacilífero, hacinamiento, VIH",
        "Tos > 2 semanas, sudoración, pérdida de peso, hemoptisis; cavernas apicales",
        "**BK positiva**, cultivo, GeneXpert; granuloma **caseificante**"
      ],
      [
        "*Aspergillus*, forma invasiva",
        "**Neutropénico**, trasplante, corticoides",
        "Fiebre que no cede con antibióticos, dolor pleurítico, hemoptisis tardía",
        "**Signo del halo** + **galactomanano** positivo; hifas septadas a 45°; hemocultivo negativo"
      ],
      [
        "*Aspergillus*, aspergiloma",
        "Caverna previa (TB curada, sarcoidosis)",
        "Puede no dar síntomas o dar hemoptisis",
        "Bola fúngica dentro de una cavidad"
      ],
      [
        "*Aspergillus*, ABPA",
        "**Asmático** o con fibrosis quística",
        "Asma que empeora, tapones de moco marrón",
        "**IgE total alta**, eosinofilia; no invade"
      ],
      [
        "Zigomicetos",
        "**Diabético en cetoacidosis**, neutropénico",
        "Igual que *Aspergillus*, pero **destruye en días**; hemoptisis masiva",
        "**Halo invertido (atolón)**; hifas **anchas sin septos**; galactomanano y β-D-glucano negativos"
      ],
      [
        "*Fusarium*",
        "Neutropenia prolongada",
        "Tos, disnea, halo pulmonar **igual al de *Aspergillus***",
        "**Nódulos en piel con centro negro** + **hemocultivo positivo** (~40 %)"
      ],
      [
        "*Pneumocystis*",
        "**VIH con CD4 < 200**, corticoides",
        "**Tos seca**, disnea, **hipoxemia** marcada",
        "**Vidrio esmerilado bilateral**; Grocott en LBA (quistes en racimo)"
      ],
      [
        "*C. neoformans*",
        "VIH, trasplante",
        "50 % sin síntomas; nódulos o infiltrados",
        "Levadura **encapsulada**; antígeno capsular; suele terminar en meningitis"
      ],
      [
        "*C. gattii*",
        "**Sano**, zona de eucaliptos",
        "**Criptococoma**: masa que parece tumor",
        "Biopsia con cápsula; medio **CGB positivo**"
      ],
      [
        "*Histoplasma*",
        "Visitó una **cueva** o zona con guano (Tingo María)",
        "Aguda: cuadro gripal con **adenopatías hiliares**. Crónica: cavitaciones apicales en EPOC",
        "BK **negativa**; levaduras de 2–5 µm **dentro de macrófagos**; histoplasmoma calcificado en diana"
      ],
      [
        "*Paracoccidioides*",
        "**Hombre rural agricultor**, fumador",
        "Cuadro tipo TB con fibrosis bilateral",
        "BK **negativa** + **úlceras orales moriformes**; timón de barco"
      ],
      [
        "*Blastomyces*",
        "Excavación o tala en **Norteamérica**",
        "Neumonía + **lesión verrugosa en la piel**",
        "Levadura grande de **base ancha**"
      ]
    ]
  },
  {
    "id": "zona-2",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "SNC y meninges",
    "columnas": [
      "Microorganismo",
      "Paciente típico",
      "Clínica",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*M. tuberculosis*",
        "Contacto con TB; niños o VIH",
        "Meningitis **subaguda** (1–3 semanas), pares craneales, convulsiones, hidrocefalia",
        "LCR con **ADA > 9–10 U/L**; GeneXpert Ultra; RM con **realce meníngeo basal**; tinta china negativa"
      ],
      [
        "*C. neoformans*",
        "**VIH con CD4 < 100**, trasplante; palomas",
        "Cefalea progresiva, fiebre, confusión, cambios de personalidad, **hipertensión intracraneal**",
        "**Tinta china** positiva (levadura con halo); **antígeno capsular por látex**; hidrocefalia"
      ],
      [
        "*C. gattii*",
        "**Sano**; eucaliptos",
        "Convulsiones o déficit focal",
        "**Criptococomas** cerebrales (nódulos con realce)"
      ],
      [
        "Zigomicetos",
        "Diabético en cetoacidosis",
        "Llegan **desde la nariz o el paladar** (forma rinocerebral)",
        "**Costra negra** en el paladar; hifas anchas sin septos; evolución en días"
      ],
      [
        "*Candida*",
        "**Neonatos** o inmunosuprimidos",
        "Meningitis en un paciente con candidemia",
        "Hemocultivo o LCR con levaduras; tubo germinal"
      ],
      [
        "*Paracoccidioides* / *Blastomyces*",
        "Forma diseminada (raro)",
        "Lesiones pseudotumorales o abscesos",
        "Antecedentes rural o norteamericano + lesiones en mucosa o piel"
      ]
    ]
  },
  {
    "id": "zona-3",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Cara, senos paranasales, oído y ojo",
    "columnas": [
      "Microorganismo",
      "Zona",
      "Paciente típico",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "Zigomicetos",
        "Senos, paladar, órbita (rinocerebral)",
        "**Diabético en cetoacidosis**",
        "**Costras negras** en paladar o cornetes; necrosis en días"
      ],
      [
        "*Aspergillus*",
        "Senos (sinusitis crónica, aspergiloma del seno maxilar)",
        "Inmunocompetente o inmunosuprimido",
        "Evolución crónica; bola fúngica en el seno"
      ],
      [
        "*Aspergillus* (*A. niger*, *A. flavus*)",
        "Oído externo (otomicosis, \"oído de nadador\")",
        "Nadadores",
        "Prurito, descamación, dolor, hipoacusia; colonias negras (*A. niger*)"
      ],
      [
        "*Fusarium*",
        "Seno-nasal en el diseminado",
        "Neutropénico",
        "Necrosis facial + nódulos en piel + hemocultivo positivo"
      ],
      [
        "*Fusarium* (también *Aspergillus*, *Cephalosporium*)",
        "**Córnea** (queratitis)",
        "**Trauma con ramas** o lentes de contacto",
        "Infiltrado de **bordes plumosos**, lesiones satélite, hipopión; empieza larvado. Tratamiento: natamicina"
      ],
      [
        "*Sporothrix*",
        "Cara",
        "**Niños**",
        "Nódulo en el sitio del trauma"
      ],
      [
        "*M. canis*",
        "Cara (tinea faciei)",
        "Niño con gato",
        "Placa anular descamativa"
      ],
      [
        "*Blastomyces*",
        "Cara y cuello",
        "Excavación en Norteamérica",
        "Lesión **verrugosa** + neumonía"
      ]
    ]
  },
  {
    "id": "zona-4",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Boca, laringe y esófago",
    "columnas": [
      "Microorganismo",
      "Lesión",
      "Paciente típico",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*Candida albicans* (muguet)",
        "**Placas blancas que se desprenden** con base roja",
        "Lactantes, VIH, corticoides inhalados",
        "Superficial, **no ulcera**; KOH con levaduras y pseudohifas"
      ],
      [
        "*Candida* (esofagitis)",
        "Dolor y dificultad para tragar",
        "**VIH avanzado**",
        "Continúa desde el muguet"
      ],
      [
        "*C. dubliniensis*",
        "Muguet",
        "**VIH**",
        "Parece *C. albicans*, pero no crece a 42 °C y es **verde oscuro** en CHROMagar"
      ],
      [
        "*Paracoccidioides*",
        "**Úlceras dolorosas \"moriformes\"** (como mora) en encías, paladar, labios y nariz",
        "**Hombre rural** fumador",
        "Úlcera granulomatosa crónica + pulmón tipo TB; **timón de barco** en el raspado"
      ],
      [
        "*Histoplasma*",
        "Úlceras orales",
        "**VIH con CD4 < 150** (forma diseminada)",
        "Hepatoesplenomegalia + **pancitopenia**; levaduras dentro de macrófagos"
      ],
      [
        "*M. tuberculosis* (laringe)",
        "Lesiones en cuerdas vocales",
        "TB pulmonar con muchos bacilos",
        "**Disfonía** (ronquera); es muy contagiosa"
      ]
    ]
  },
  {
    "id": "zona-5",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Piel profunda: nódulos, úlceras y placas verrugosas",
    "columnas": [
      "Microorganismo",
      "Lesión",
      "Cómo llegó",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*Sporothrix*",
        "Nódulo inicial → **nódulos en cadena que suben** por el linfático y se ulceran",
        "**Espina de rosa** o arañazo de gato",
        "Distribución **linfangítica ascendente**; miembros superiores; levadura en cigarro"
      ],
      [
        "Cromoblastomicosis (*Fonsecaea*)",
        "**Placa verrugosa en coliflor** con puntos negros; años de evolución",
        "Astilla o espina en la **Amazonía**",
        "**Miembros inferiores**; no sigue el linfático; **cuerpos muriformes** café en el KOH"
      ],
      [
        "*Blastomyces*",
        "Lesiones **verrugosas** o ulceradas en cara, cuello y extremidades",
        "Sangre, desde el pulmón",
        "Neumonía previa; **Norteamérica**; levadura de base ancha"
      ],
      [
        "*Paracoccidioides*",
        "Úlceras y placas verrugosas",
        "Sangre o linfático, desde el pulmón",
        "Acompaña **úlceras orales** y pulmón tipo TB"
      ],
      [
        "*Fusarium*",
        "**Nódulos rojos dolorosos con centro necrótico negro**, muchos a la vez",
        "Sangre (diseminado)",
        "**Neutropénico** con fiebre refractaria; hemocultivo positivo"
      ],
      [
        "*Cryptococcus*",
        "Pápulas o nódulos que se ulceran; parecen acné o varicela",
        "Sangre",
        "VIH; indica **diseminación** (buscar meningitis); tinta china"
      ],
      [
        "*Histoplasma*",
        "Úlceras o nódulos",
        "Sangre (diseminado)",
        "VIH con pancitopenia y hepatoesplenomegalia"
      ],
      [
        "*M. tuberculosis* (escrófula)",
        "Ganglio cervical que **fistuliza** y drena caseum",
        "Linfático",
        "Adenopatía crónica indolora; granuloma caseificante"
      ]
    ]
  },
  {
    "id": "zona-6",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Piel superficial, pelo, uñas y pliegues",
    "columnas": [
      "Zona",
      "Candidatos",
      "Cómo los separas"
    ],
    "filas": [
      [
        "**Cuero cabelludo** (alopecia, pelos quebradizos, querion de Celso)",
        "*M. canis*; *T. rubrum* (raro)",
        "Niño + **gato o perro** = *M. canis*: reverso **amarillo**, macroconidios fusiformes rugosos, invasión ectothrix. *Epidermophyton* **nunca** afecta el pelo"
      ],
      [
        "**Pies** (pie de atleta, mocasín)",
        "*T. rubrum*, *E. floccosum*",
        "*T. rubrum*: reverso **rojo vinoso**, microconidios en \"pájaros en alambre\", síndrome de una mano y dos pies. *E. floccosum*: **sin microconidios**, macroconidios en maza, colonia **caqui o verde oliva**"
      ],
      [
        "**Ingle** (tinea cruris)",
        "*T. rubrum*, *E. floccosum*; *Candida* (intertrigo)",
        "Dermatofito: placa con **borde activo elevado** y centro más claro. *Candida*: eritema húmedo con **lesiones satélite** y sin borde activo"
      ],
      [
        "**Pliegues** (axila, submamario)",
        "*Candida*",
        "Eritema + **lesiones satélite**; obesidad, diabetes, humedad"
      ],
      [
        "**Cuerpo** (tinea corporis)",
        "Los tres dermatofitos",
        "Anillos con borde descamativo: el cultivo decide (reverso y conidios). *M. canis* si hay contacto con mascotas"
      ],
      [
        "**Cara** (tinea faciei)",
        "*M. canis*",
        "Niño con mascota"
      ],
      [
        "**Uñas**: uña gruesa y amarilla (onicomicosis)",
        "*T. rubrum* (el más frecuente), *E. floccosum*",
        "Hiperqueratosis subungueal; cultivo"
      ],
      [
        "**Uñas**: pliegue de la uña inflamado (paroniquia)",
        "*Candida*",
        "Inflamación del **pliegue** ungueal, manos húmedas"
      ]
    ]
  },
  {
    "id": "zona-7",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Ganglios linfáticos",
    "columnas": [
      "Microorganismo",
      "Ganglios",
      "Paciente típico",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*M. tuberculosis* (escrófula)",
        "**Cervicales, indoloros**, crónicos (más de 2–3 semanas), en conglomerados, fistulizan",
        "Cualquiera; contacto con TB",
        "**PAAF o biopsia**: granuloma **caseificante** con células de Langhans; GeneXpert"
      ],
      [
        "*Paracoccidioides* (forma juvenil)",
        "**Grandes, dolorosos**, generalizados, supuran (cervicales y submandibulares)",
        "**Niños y jóvenes**",
        "Hepatoesplenomegalia + pancitopenia; granuloma **no caseificante**; timón de barco"
      ],
      [
        "*Histoplasma*",
        "**Hiliares** (aguda) o generalizados (diseminada)",
        "Cueva o guano; VIH",
        "Adenopatías hiliares en un cuadro gripal; levaduras dentro de macrófagos"
      ],
      [
        "*Sporothrix*",
        "No agranda el ganglio: hace **nódulos a lo largo del vaso linfático**",
        "Jardinero",
        "Cadena ascendente desde la herida"
      ]
    ]
  },
  {
    "id": "zona-8",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Sangre: fiebre persistente en un paciente inmunosuprimido o de UCI",
    "columnas": [
      "Microorganismo",
      "Paciente típico",
      "Hemocultivo",
      "Marcador o pista"
    ],
    "filas": [
      [
        "*Candida* (candidemia)",
        "**UCI, catéter venoso central**, antibióticos prolongados",
        "**Positivo: levaduras**",
        "Tubo germinal (*C. albicans*); antifungigrama (*C. krusei* es resistente al fluconazol, *C. auris* multirresistente); retirar el catéter"
      ],
      [
        "*Fusarium*",
        "**Neutropénico**",
        "**Positivo: hongo filamentoso** (~40 %)",
        "Nódulos con centro negro en la piel; galactomanano negativo"
      ],
      [
        "*Aspergillus*",
        "**Neutropénico**",
        "**Negativo**",
        "**Galactomanano positivo**; signo del halo"
      ],
      [
        "Zigomicetos",
        "Diabético, neutropénico",
        "Negativo",
        "Biopsia con hifas anchas; β-D-glucano **negativo**"
      ],
      [
        "*Histoplasma* (diseminada)",
        "**VIH con CD4 < 150**",
        "Puede crecer, pero tarda",
        "**Antígeno en orina**; pancitopenia, hepatoesplenomegalia"
      ],
      [
        "*Cryptococcus*",
        "VIH con CD4 < 100",
        "Puede crecer",
        "**Antígeno capsular en suero**; buscar meningitis"
      ]
    ]
  },
  {
    "id": "zona-9",
    "grupo": "Hongos por zona del cuerpo",
    "titulo": "Hígado, bazo, médula ósea y suprarrenales",
    "columnas": [
      "Microorganismo",
      "Órgano",
      "Paciente típico",
      "Lo que lo separa de los demás"
    ],
    "filas": [
      [
        "*Histoplasma* (diseminada)",
        "Hígado, bazo, **médula ósea**",
        "**VIH con CD4 < 150**",
        "Hepatoesplenomegalia + **pancitopenia**; levaduras pequeñas dentro de macrófagos en la médula; antígeno en orina"
      ],
      [
        "*Paracoccidioides* (juvenil)",
        "Hígado, bazo, médula",
        "Niños y jóvenes",
        "Hepatoesplenomegalia + ganglios grandes dolorosos + anemia"
      ],
      [
        "*Paracoccidioides* (crónica)",
        "**Suprarrenales**",
        "Hombre rural adulto",
        "**Insuficiencia suprarrenal tipo Addison** (fatiga, hipotensión, hiperpigmentación) + úlceras orales"
      ],
      [
        "*Blastomyces*",
        "Suprarrenales, hígado, bazo",
        "Forma diseminada",
        "Antecedente norteamericano + piel verrugosa"
      ],
      [
        "*Candida* (diseminada)",
        "Hígado, bazo, riñón",
        "**Neutropénico** (*C. tropicalis*)",
        "Viene de una candidemia"
      ],
      [
        "*M. tuberculosis* (miliar)",
        "Diseminación por la sangre",
        "VIH, inmunosuprimidos",
        "Patrón miliar en la radiografía de tórax; granulomas caseificantes"
      ]
    ]
  },
  {
    "id": "gen-1",
    "grupo": "Hongos: tablas generales",
    "titulo": "Identidad: qué es, cómo se ve, de dónde viene y a quién ataca",
    "columnas": [
      "Microorganismo",
      "Tipo",
      "Cómo se ve (clave)",
      "Hábitat y entrada",
      "A quién ataca"
    ],
    "filas": [
      [
        "*Mycobacterium tuberculosis*",
        "Bacilo aerobio estricto, BAAR",
        "Bacilo rojo en Ziehl-Neelsen; cuerdas (cord factor); colonias rugosas crema en Löwenstein-Jensen",
        "Humano bacilífero; inhalación de gotículas",
        "Cualquiera; riesgo mayor con VIH, hacinamiento, desnutrición"
      ],
      [
        "*S. aureus* MRSA",
        "Coco Gram + resistente",
        "Halo de cefoxitina < 22 mm; gen mecA (PBP2a)",
        "Piel y mucosas; hospital y comunidad",
        "Pacientes hospitalizados y comunidad"
      ],
      [
        "Enterobacterias con BLEE, AmpC o carbapenemasas",
        "Bacilos Gram − resistentes",
        "BLEE: halo crece ≥ 5 mm con clavulanato. AmpC: no se inhibe con clavulanato, resistente a cefoxitina. Carbapenemasa: Hodge en trébol",
        "Intestino; plasmídos que pasan entre bacterias; hospital",
        "Hospitalizados, con dispositivos o antibióticos previos"
      ],
      [
        "*Aspergillus*",
        "Moho hialino",
        "Hifas septadas a 45°; cabeza aspergilar",
        "Ubicuo: polvo, aire acondicionado, plantas; inhalación",
        "Neutropénicos, trasplantados, EPOC; asmáticos (alérgica)"
      ],
      [
        "Zigomicetos (*Mucor*, *Rhizopus*)",
        "Moho",
        "Hifas anchas, no septadas; esporangios",
        "Materia en descomposición, frutas; inhalación",
        "**Diabéticos en cetoacidosis**, neutropénicos"
      ],
      [
        "*Fusarium*",
        "Moho hialino",
        "Hifas septadas; macroconidias en canoa; colonia rosada-violeta",
        "Suelo, plantas, agua hospitalaria; inhalación (90 %), piel, córnea",
        "Neutropenia prolongada; queratitis por trauma"
      ],
      [
        "*Candida*",
        "Levadura (polimórfica)",
        "Levadura Gram + con pseudohifas; tubo germinal + (*C. albicans*)",
        "Flora normal de mucosas; endógena o por catéter",
        "UCI, catéter, antibióticos, diabetes, VIH, neutropenia"
      ],
      [
        "*Cryptococcus*",
        "Levadura encapsulada (Basidiomycota)",
        "Cápsula en tinta china; colonias mucoides; marrón en agar Niger",
        "*C. neoformans*: heces de paloma. *C. gattii*: eucalipto. Inhalación",
        "*C. neoformans*: VIH con CD4 < 100. *C. gattii*: sanos"
      ],
      [
        "*Histoplasma capsulatum*",
        "Dimórfico",
        "Levaduras de 2–5 µm dentro de macrófagos; macroconidias tuberculadas",
        "Guano de aves y murciélagos, cuevas (Tingo María); inhalación",
        "Sanos (95 % asintomático); VIH con CD4 < 150 (diseminada)"
      ],
      [
        "*Paracoccidioides brasiliensis*",
        "Dimórfico",
        "Levadura de 10–30 µm con gemación múltiple: timón de barco",
        "Suelo húmedo, cafetales; inhalación",
        "Hombre rural agricultor (9:1), fumador, alcohólico"
      ],
      [
        "*Blastomyces dermatitidis*",
        "Dimórfico",
        "Levadura de 8–15 µm, pared gruesa, gemación única de base ancha",
        "Suelo húmedo y arenoso cerca del agua (Norteamérica); inhalación",
        "Excavación, tala, campamentos; hombres"
      ],
      [
        "*Sporothrix schenckii*",
        "Dimórfico",
        "Conidios en margarita (25 °C); levadura en cigarro (37 °C); cuerpo asteroide",
        "Espinas de rosa, madera, suelo; **inoculación traumática**; arañazo de gato",
        "Jardineros, agricultores; costa norte y selva"
      ],
      [
        "*Fonsecaea pedrosoi* (cromoblastomicosis)",
        "Moho dematiáceo (pigmentado)",
        "Cuerpos muriformes café de 6–12 µm",
        "Suelo, madera; trauma con espinas o astillas",
        "Agricultores de la Amazonía (Ucayali, San Martín)"
      ],
      [
        "*Trichophyton rubrum*",
        "Dermatofito antropófilo",
        "Microconidios en lágrima (\"pájaros en alambre\"); reverso rojo vinoso",
        "Humano; contacto directo y fómites",
        "Adultos; el dermatofito más frecuente"
      ],
      [
        "*Microsporum canis*",
        "Dermatofito zoófilo",
        "Macroconidios fusiformes rugosos de pared gruesa; reverso amarillo",
        "Gatos y perros; contacto",
        "**Niños** (tiña capitis)"
      ],
      [
        "*Epidermophyton floccosum*",
        "Dermatofito antropófilo",
        "Sin microconidios; macroconidios en maza; colonia caqui",
        "Humano; contacto",
        "Adultos; nunca afecta pelo"
      ],
      [
        "*Pneumocystis jirovecii*",
        "Hongo atípico (antes \"protozoo\")",
        "Quistes de ~7 µm en racimos con Grocott; formas tróficas con Giemsa",
        "Inhalación; se pega a neumocitos tipo I",
        "VIH con CD4 < 200, trasplantados, corticoides"
      ]
    ]
  },
  {
    "id": "gen-2",
    "grupo": "Hongos: tablas generales",
    "titulo": "Clínica, diagnóstico y tratamiento",
    "columnas": [
      "Microorganismo",
      "Virulencia clave",
      "Clínica clave",
      "Diagnóstico clave",
      "Tratamiento de elección"
    ],
    "filas": [
      [
        "*M. tuberculosis*",
        "Ácidos micólicos, cord factor, ESAT-6/CFP-10 (bloquean fagolisosoma), latencia",
        "Tos > 2 semanas, fiebre, pérdida de peso, hemoptisis; extrapulmonar ganglionar, pleural (ADA ↑), meníngea, Pott",
        "Baciloscopía, cultivo (Löwenstein-Jensen, MGIT), GeneXpert (resistencia a R), MODS; PPD e IGRA = infección",
        "2HRZE / 4HR (MINSA); BPaLM o BLCC si es resistente"
      ],
      [
        "*S. aureus* MRSA",
        "Gen mecA → PBP2a",
        "Infecciones de piel, hospitalarias",
        "Disco de cefoxitina (< 22 mm); PCR de mecA",
        "No responde a betalactámicos (según antibiograma)"
      ],
      [
        "Enterobacterias resistentes",
        "BLEE, AmpC, carbapenemasas (KPC, NDM, OXA-48, VIM, IMP); porinas",
        "ITU, sepsis, infección intraabdominal, hospitalarias",
        "Doble disco con clavulanato (BLEE); cloxacilina o cefoxitina (AmpC); Hodge, Carba NP, NG-Test, PCR (carbapenemasa)",
        "Según antibiograma; AmpC se induce con ceftriaxona"
      ],
      [
        "*Aspergillus*",
        "Gliotoxina, conidias de 2–3 µm, termotolerancia, angioinvasión",
        "Invasiva (signo del halo), aspergiloma en caverna de TB, ABPA (asma, IgE ↑), otomicosis",
        "Galactomanano, cultivo en ASG, PAS (invasión vascular)",
        "Voriconazol; aspergiloma: cirugía; ABPA: corticoides + itraconazol"
      ],
      [
        "Zigomicetos",
        "Captan hierro, CotH-GRP78, angioinvasión con escara negra",
        "Rinocerebral con costra negra en paladar; pulmonar fulminante (halo invertido)",
        "Biopsia: hifas anchas sin septos; cultivo en 3–4 días; β-D-glucano negativo",
        "Anfotericina B liposomal + desbridamiento + controlar diabetes"
      ],
      [
        "*Fusarium*",
        "Tricotecenos, angioinvasión, resistencia intrínseca",
        "Nódulos cutáneos con centro negro, fiebre refractaria, halo pulmonar; queratitis",
        "**Hemocultivo positivo (~40 %)**, biopsia",
        "Voriconazol ± anfotericina B"
      ],
      [
        "*Candida*",
        "Levadura → hifa, adhesinas ALS, biofilm, proteasas",
        "Muguet, esofagitis, vaginitis, intertrigo, candidemia",
        "KOH, CHROMagar, tubo germinal (*C. albicans*), clamidoconidias, antifungigrama",
        "Superficial: azoles; invasiva: equinocandina; *C. krusei* nunca fluconazol"
      ],
      [
        "*Cryptococcus*",
        "Cápsula GXM, melanina, ureasa (cruza la barrera hematoencefálica)",
        "Meningitis subaguda en VIH; criptococoma (*C. gattii*); lesiones de piel = diseminada",
        "Tinta china, antígeno capsular por látex (gold standard práctico), agar Niger, ureasa +, CGB",
        "Anfotericina B + flucitosina 2 sem → fluconazol 8 sem → fluconazol ≥ 1 año"
      ],
      [
        "*Histoplasma*",
        "Hsp60 (CR3), α-1,3-glucano (escapa a la Dectina-1), vive dentro del macrófago",
        "Pulmonar aguda gripal con adenopatías hiliares; crónica tipo TB; diseminada en VIH con pancitopenia",
        "Giemsa (intracelulares), cultivo 2–6 sem (gold standard), antígeno en orina",
        "Itraconazol; diseminada: anfotericina B → itraconazol"
      ],
      [
        "*Paracoccidioides*",
        "α-1,3-glucano, gp43; Th2 empeora",
        "Juvenil: ganglios y hepatoesplenomegalia. Adulto: pulmón tipo TB + úlceras orales moriformes + Addison",
        "KOH (timón de barco), biopsia, anticuerpos anti-gp43 (seguimiento)",
        "Itraconazol 6–12 meses; TMP-SMX; grave: anfotericina B"
      ],
      [
        "*Blastomyces*",
        "Dimorfismo térmico",
        "Pulmonar; cutánea verrugosa (la extrapulmonar más frecuente); hueso, genitourinario",
        "Cultivo (referencia), levadura de base ancha, PCR",
        "No viene en el seminario (referencia: itraconazol; anfotericina B si es grave)"
      ],
      [
        "*Sporothrix*",
        "Termotolerancia, melanina, enzimas",
        "Nódulo en sitio de inoculación → nódulos en cadena ascendente por linfáticos",
        "Cultivo (gold standard), prueba de dimorfismo, PCR, serología",
        "No viene en el seminario (referencia: itraconazol)"
      ],
      [
        "Cromoblastomicosis",
        "Melanina; cuerpos muriformes resistentes",
        "Placas verrugosas en coliflor con puntos negros en las piernas",
        "KOH: cuerpos muriformes; cultivo: moho oscuro",
        "No viene en la clase (referencia: itraconazol ± medidas físicas)"
      ],
      [
        "*T. rubrum*",
        "Queratinasas + sulfito",
        "Tinea pedis (mocasín), cruris, corporis, unguium; una mano y dos pies",
        "KOH, cultivo en Sabouraud (reverso rojo), microcultivo",
        "Terbinafina tópica; oral si es extensa o afecta uñas"
      ],
      [
        "*M. canis*",
        "Queratinasas + sulfito",
        "Tinea capitis, querion de Celso, corporis, faciei",
        "KOH (ectothrix), cultivo (reverso amarillo), macroconidios",
        "Piel: terbinafina o clotrimazol; capitis: **griseofulvina oral**"
      ],
      [
        "*E. floccosum*",
        "Queratinasas + sulfito",
        "Pie, ingle, cuerpo, uñas, manos; nunca pelo",
        "KOH, cultivo verde oliva, macroconidios en maza",
        "Terbinafina o clotrimazol tópicos; oral si es extensa"
      ],
      [
        "*Pneumocystis*",
        "Adhesión a neumocitos tipo I; inflamación alveolar",
        "Fiebre, tos seca, disnea, hipoxemia, vidrio esmerilado",
        "LBA: Grocott (quistes), Giemsa (tróficos), inmunofluorescencia, PCR mtLSU rRNA",
        "TMP-SMX 21 días; pentamidina o atovacuona"
      ]
    ]
  },
  {
    "id": "gen-3",
    "grupo": "Hongos: tablas generales",
    "titulo": "Agrupados por tipo de micosis y forma",
    "columnas": [
      "Grupo",
      "Vía de entrada",
      "Microorganismos",
      "Qué tienen en común"
    ],
    "filas": [
      [
        "Superficiales y cutáneas",
        "Contacto (persona, animal, fómites)",
        "*T. rubrum*, *M. canis*, *E. floccosum*; *Candida* superficial",
        "Comen queratina; no invaden tejido profundo; KOH + Sabouraud"
      ],
      [
        "Subcutáneas",
        "Inoculación traumática (espina, astilla)",
        "*Sporothrix schenckii*, *Fonsecaea* (cromoblastomicosis)",
        "Campesinos, jardineros; lesión en el sitio del trauma"
      ],
      [
        "Sistémicas endémicas (patógenos primarios)",
        "Inhalación de conidias del suelo",
        "*Histoplasma*, *Paracoccidioides*, *Blastomyces*",
        "Dimórficos; enferman a sanos; granulomas; simulan TB"
      ],
      [
        "Oportunistas clásicas",
        "Inhalación o flora propia",
        "*Candida*, *Aspergillus*, *Cryptococcus*, zigomicetos",
        "Necesitan defensas bajas (neutropenia, VIH, diabetes)"
      ],
      [
        "Oportunistas emergentes",
        "Inhalación, piel, córnea",
        "*Fusarium*, *Candida auris* (y *Malassezia*)",
        "Resistentes a antifúngicos; brotes hospitalarios"
      ],
      [
        "Oportunista atípico pulmonar",
        "Inhalación",
        "*Pneumocystis jirovecii*",
        "VIH con CD4 < 200; se trata con TMP-SMX, no con antifúngicos"
      ]
    ]
  },
  {
    "id": "gen-4",
    "grupo": "Hongos: tablas generales",
    "titulo": "Dimórficos: moho a 25 °C y levadura a 37 °C",
    "columnas": [
      "Hongo",
      "Moho a 25 °C",
      "Levadura a 37 °C (en tejido)"
    ],
    "filas": [
      [
        "*Histoplasma*",
        "Microconidias + macroconidias tuberculadas",
        "Pequeña (2–5 µm), **dentro del macrófago**"
      ],
      [
        "*Paracoccidioides*",
        "Hifas con microconidias; colonias cerebriformes",
        "Grande (10–30 µm), **gemación múltiple (timón de barco)**"
      ],
      [
        "*Blastomyces*",
        "Conidios en paleta (lollipop)",
        "Grande (8–15 µm), **gemación única de base ancha**"
      ],
      [
        "*Sporothrix*",
        "Conidios en margarita; colonias oscuras",
        "**Cigarro o puro**; cuerpo asteroide en tejido"
      ]
    ]
  }
];
