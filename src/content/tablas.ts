// Tablas clave de la zona de estudio
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Tabla } from "./types";

export const TABLAS: Tabla[] = [
  {
    "id": "medios",
    "titulo": "Medios de cultivo",
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
  }
];
