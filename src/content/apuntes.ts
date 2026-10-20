// Apuntes de teoría: Tuberculosis, resistencia a los antibióticos y micología.
// Fuente: guía de estudio del examen teórico (clases 7, 8 y 9 y seminarios), resumen por microorganismo y tabla comparativa.
// Formato del texto: **negrita**, *cursiva*. En las listas, dos espacios al inicio = subpunto.
// ⭐ = lo que el profesor resalta como clave.
import type { Apunte } from "./types";

export const APUNTES: Apunte[] = [
 {
  "id": "clase-tb",
  "grupo": "Clases de teoría",
  "titulo": "Tuberculosis",
  "subtitulo": "Clase 7.1",
  "bloques": [
   {
    "t": "p",
    "texto": "*Mycobacterium tuberculosis* es un bacilo aerobio estricto, intracelular facultativo y ácido-alcohol resistente (BAAR); se replica cada 18–24 h y su cultivo tarda hasta 8 semanas."
   },
   {
    "t": "h",
    "texto": "Generalidades ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Bacilo delgado, recto o ligeramente curvo. No forma esporas ni cápsula. Inmóvil.",
     "BAAR por su alto contenido de **ácidos micólicos**.",
     "Crece lento porque su pared es compleja y sus requerimientos son estrictos.",
     "Se trabaja en **nivel de bioseguridad 3 (BSL-3)**.",
     "Historia: Koch descubre el agente (1882); Calmette y Guérin crean la BCG (1908); estreptomicina, primer antibiótico eficaz (1943). En el siglo XIX se la llamó \"peste blanca\".",
     "**Complejo MTB**: *M. tuberculosis* (humanos), *M. bovis* (ganado, leche no pasteurizada), *M. africanum* (África), *M. microti* (roedores), *M. canettii*, *M. caprae*, *M. pinnipedii*."
    ]
   },
   {
    "t": "h",
    "texto": "Pared celular"
   },
   {
    "t": "p",
    "texto": "Capas de adentro hacia afuera: membrana plasmática → peptidoglucano → arabinogalactano → ácidos micólicos → glucolípidos de superficie; el lipoarabinomanano (LAM) atraviesa la pared."
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "Esta pared gruesa explica tres cosas: crecimiento lento, supervivencia dentro del macrófago y dificultad para eliminarlo con antibióticos comunes."
   },
   {
    "t": "h",
    "texto": "Factores de virulencia ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Epidemiología y transmisión"
   },
   {
    "t": "lista",
    "items": [
     "Mundo (2023): 10,6 millones de casos nuevos; 1,3 millones de muertes en VIH negativos; más de 450 000 casos MDR/RR. Mayor carga en Asia (India, China), África subsahariana y Europa del Este (TB resistente). 55 % hombres, 33 % mujeres, 12 % niños menores de 15 años.",
     "Transmisión **aérea** por gotículas muy pequeñas. Requisitos: paciente **bacilífero** (bacilos en esputo), contacto cercano y prolongado, espacios cerrados y hacinados.",
     "Según la OMS, en zonas de alta prevalencia cada paciente BAAR (+) contagia a unas **20 personas** antes de ser diagnosticado.",
     "Pasar de infección a enfermedad depende del paciente: inmunidad innata y celular, y comorbilidades.",
     "Formas clínicas: pulmonar 85,1 %, extrapulmonar 14,9 %. Dentro de la extrapulmonar: linfática 25,2 %, pleural 22,8 %, genitourinaria 16,1 %, osteoarticular 9,6 %, miliar 9,2 %, meníngea 4,3 %, peritoneal 3,5 %."
    ]
   },
   {
    "t": "h",
    "texto": "Patogenia por etapas ⭐"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Establecimiento (0–3 días)**: ligandos del bacilo (LAM, lipoproteínas) se unen a receptores CR1, CR3, CR4, TLR2 y TLR4 y el bacilo entra al macrófago alveolar.",
     "**Multiplicación (3–5 días)**: LAM + TLR2 liberan quimiotactinas (IL-8, RANTES, MCP-1) que reclutan monocitos, linfocitos y células NK. El bacilo se replica dentro del macrófago.",
     "**Multiplicación-diseminación (5–15 días)**: macrófagos infectados mueren por apoptosis o por NK; los bacilos liberados son recaptados. Aún no hay activación del macrófago. Empieza el granuloma.",
     "**Granuloma (4–6 semanas)**: débil inmunidad celular; activación de macrófagos, presentación antigénica, fusión de macrófagos mediada por ICAM-1. Comienza el escape de bacilos.",
     "**Tubérculo (9–12 semanas)**: necrosis caseosa, producción de caseum, nódulos caseosos.",
     "**Daño (12–18 semanas)**: el tubérculo se rompe, el paciente se vuelve **bacilífero** y puede aparecer hemoptisis."
    ]
   },
   {
    "t": "p",
    "texto": "Balance inmune: **Th1 (IL-12, IFN-γ) = inmunidad defensiva**; Th2 (IL-4, IL-10) y Th17 (IL-6, IL-23, TGF-β) desequilibran. La estimulación continua produce hipersensibilidad."
   },
   {
    "t": "h",
    "texto": "Pruebas de infección: PPD e IGRA ⭐"
   },
   {
    "t": "lista",
    "items": [
     "**PPD / Mantoux**: hipersensibilidad retardada. En Perú: 0,1 ml de PPD de baja potencia (2 UT). Se lee a las **48–72 h**. Positivo = la persona fue infectada; no indica cuándo.",
     "**PPD negativo** puede significar: infectado que aún no desarrolla hipersensibilidad; nunca infectado; anergia (sarampión, VIH, vacuna reciente con virus atenuados como polio o sarampión); TB muy avanzada.",
     "**IGRA** (QuantiFERON-TB Gold, T-SPOT.TB): mide IFN-γ en sangre para diagnosticar TB latente. **No distingue TB activa.**"
    ]
   },
   {
    "t": "h",
    "texto": "Diagnóstico de TB pulmonar ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Sospecha (MINSA): tos persistente **más de 2 semanas**, hemoptisis, pérdida de peso, fiebre prolongada y/o anemia; más grupo de riesgo y radiografía de tórax.",
     "**Baciloscopía** (esputos seriados): bacilos de 0,2–0,6 × 1–10 µm, a veces en cordones.",
     "**Auramina (fluorescencia)**: más sensible que Ziehl-Neelsen, detecta concentraciones más bajas, cubre más campo en menos tiempo; ideal para laboratorios con mucha carga.",
     "Patógenas crecen mejor a 37 °C."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**MODS** ⭐: pozos sin antibiótico, con isoniazida y con rifampicina, a 37 °C, mirados cada día al microscopio invertido. Colonias en \"cuerdas\" (cord factor) = *M. tuberculosis*; crece con isoniazida = resistente a H; crece con rifampicina = resistente a R."
   },
   {
    "t": "p",
    "texto": "Pregunta de clase: ¿baciloscopía negativa con cultivo positivo? Según la NTS N.° 200-MINSA/DGIESP-2023 el cultivo confirma TB (la baciloscopía es menos sensible)."
   },
   {
    "t": "h",
    "texto": "Tratamiento MINSA ⭐"
   },
   {
    "t": "lista",
    "items": [
     "**Fase inicial (de ataque), 2 meses: HRZE**, lunes a sábado (6 veces por semana), vía oral, con supervisión directa.",
     "**Fase de sostén (continuación), 4 meses: HR**, 3 veces por semana (lunes, miércoles, viernes), supervisada.",
     "Tabletas HRZE según peso: 30–37 kg = 2; 38–54 kg = 3; 55–70 kg = 4; ≥71 kg = 5.",
     "Siglas: H isoniazida, R rifampicina, Z pirazinamida, E etambutol, Lfx levofloxacino, Mfx moxifloxacino, Bdq bedaquilina, Lzd linezolid, Cfz clofazimina, Pa pretomanid, Cs cicloserina, Dlm delamanid, Imp/Cln imipenem-cilastatina, Mpm meropenem.",
     "**BPaLM** = bedaquilina + pretomanid + linezolid + moxifloxacino. **BLCC** = bedaquilina + linezolid + clofazimina + cicloserina.",
     "Tipos de resistencia (objetivo de la clase): **MDR** = resistente a H + R; **pre-XDR** = MDR + fluoroquinolona; **XDR** = pre-XDR + bedaquilina o linezolid."
    ]
   },
   {
    "t": "h",
    "texto": "TB extrapulmonar ⭐"
   },
   {
    "t": "p",
    "texto": "Se disemina por vía hematógena o linfática desde el pulmón. Es el 15–20 % de los casos en inmunocompetentes y más del 50 % en VIH/SIDA. En todas: buscar siempre TB pulmonar asociada."
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**Claves ENAM** ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Derrame pleural + predominio linfocítico + ADA elevada = TB pleural.",
     "Meningitis subaguda + linfocitosis + proteínas altas + glucosa baja = meningitis tuberculosa.",
     "Histología típica de TB: granuloma con necrosis caseosa central, células epitelioides, células gigantes de Langhans y corona de linfocitos y fibroblastos."
    ]
   }
  ]
 },
 {
  "id": "clase-resistencia",
  "grupo": "Clases de teoría",
  "titulo": "Resistencia a los antibióticos",
  "subtitulo": "Clase 7.2",
  "bloques": [
   {
    "t": "p",
    "texto": "La resistencia es evolución: la bacteria sobrevive y se multiplica frente a un antibiótico que antes la inhibía; se detecta con el antibiograma y se confirma con pruebas fenotípicas o moleculares."
   },
   {
    "t": "h",
    "texto": "Definiciones ⭐"
   },
   {
    "t": "lista",
    "items": [
     "**Antibiótico**: sustancia producida por microorganismos (o sintética) que inhibe o mata bacterias sin dañar significativamente al huésped.",
     "**CIM / MIC**: menor concentración que inhibe visiblemente el crecimiento; en µg/mL.",
     "**Bacteriostático** (inhibe, no mata): cloranfenicol, tetraciclinas. **Bactericida** (mata): penicilinas, quinolonas.",
     "**Espectro**: reducido (penicilina G y vancomicina: Gram +); intermedio (amoxicilina); amplio (ceftriaxona, ciprofloxacino, carbapenémicos)."
    ]
   },
   {
    "t": "h",
    "texto": "Mecanismos de resistencia ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "**Innata (intrínseca o cromosómica)**: especies que naturalmente están fuera del espectro; algunas Gram − producen betalactamasas constitutivas.",
     "**Adquirida**: por mutación o por genes nuevos. De los cuatro mecanismos de intercambio (transformación, transducción, conjugación, transposición), los clínicamente más importantes son **conjugación y transposición**, que suelen actuar juntas."
    ]
   },
   {
    "t": "h",
    "texto": "Antibiograma"
   },
   {
    "t": "lista",
    "items": [
     "Expone el aislado a concentraciones del antimicrobiano para hallar la CIM y clasificar **S / I / R**. Reduce mortalidad y complicaciones, evita amplio espectro innecesario y permite desescalar.",
     "Métodos: difusión (discos, **Kirby-Bauer**), dilución (caldos), automatizados (Vitek, MicroScan), moleculares (MALDI-TOF).",
     "**Kirby-Bauer**: discos de papel con antibiótico sobre agar sembrado; el fármaco difunde en gradiente circular; el halo de inhibición mide indirectamente la CIM.",
     "**Sensible** = alta probabilidad de éxito terapéutico; **intermedio** = efecto incierto; **resistente** = alta probabilidad de fracaso.",
     "**Automatizado**: suspensión estandarizada en tarjeta de microdilución; el equipo incuba, calcula la CIM y reporta S/I/R.",
     "**MALDI-TOF**: espectrometría de masas; láser sobre el extracto, perfil proteico comparado con base de datos. Identifica especie en horas (no 24–48 h). Puede detectar carbapenemasas o betalactamasas, pero **no reemplaza al antibiograma**.",
     "Correlación clínica: el antibiograma se interpreta con el sitio de infección, PK/PD, estado del paciente y dosis. Un \"sensible\" in vitro puede fallar in vivo (mala penetración)."
    ]
   },
   {
    "t": "h",
    "texto": "MRSA ⭐"
   },
   {
    "t": "lista",
    "items": [
     "*S. aureus* con gen **mecA** → proteína **PBP2a**, que no une penicilinas ni cefalosporinas → resistente a oxacilina, meticilina y casi todos los betalactámicos.",
     "Detección: disco de oxacilina (1 µg) o **cefoxitina (30 µg)**; se prefiere cefoxitina porque induce mejor la resistencia. **Halo < 22 mm con cefoxitina = MRSA.** Se aplica a *S. aureus*, *S. lugdunensis* y estafilococos coagulasa negativa.",
     "mecA+ con resistencia heterogénea: CMI oxacilina 4 µg/mL y resistente a cefoxitina. **BORSA** (mecA−): CMI oxacilina 4 µg/mL pero sensible a cefoxitina.",
     "Confirmación: **PCR del gen mecA** (más exacta)."
    ]
   },
   {
    "t": "h",
    "texto": "Betalactamasas en enterobacterias ⭐"
   },
   {
    "t": "p",
    "texto": "Rompen el anillo betalactámico; importantes en Gram − como *Klebsiella pneumoniae* y *E. coli*."
   },
   {
    "t": "tabla",
    "columnas": [
     "",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "**AmpC es peligrosa** porque se induce in vivo: el paciente empieza sensible y, al tratarlo con ceftriaxona, la bacteria activa AmpC y se vuelve resistente.",
     "Carbapenemasas: infecciones intrahospitalarias (hospitalización prolongada, antibióticos previos, dispositivos invasivos). VITEK y Phoenix pueden alertar \"carbapenemasa posible\" pero no dicen cuál.",
     "Caso de clase: sin sinergia con EDTA, borónico ni cloxacilina; sinergia cefepima–amoxicilina/clavulanato (BLEE) + resistencia a cefoxitina (AmpC de *Enterobacter*) → resistencia a carbapenémicos por **BLEE + AmpC + cierre de porinas**, no por carbapenemasa."
    ]
   }
  ]
 },
 {
  "id": "clase-micologia",
  "grupo": "Clases de teoría",
  "titulo": "Introducción a la micología",
  "subtitulo": "Clase 8",
  "bloques": [
   {
    "t": "p",
    "texto": "Los hongos son eucariotas del reino Fungi, con pared de quitina, glucano y mananos y membrana con **ergosterol**; ese ergosterol y esa pared son los blancos de los antifúngicos."
   },
   {
    "t": "h",
    "texto": "Generalidades ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Uni o pluricelulares, dominio Eukarya, reino Fungi. Ejemplo de taxonomía: Eukarya → Fungi → Ascomycetes → Hemiascomycetes → Saccharomycetales → Saccharomycetaceae → *Candida* → *albicans*.",
     "**Pared**: rígida y continua; glucanos, quitina, glucoproteínas, melanina y oligosacáridos. Protege del estrés osmótico y permite interactuar con el medio.",
     "**Membrana**: fosfolípidos, esteroles y proteínas; esterol principal **ergosterol** (también zimosterol). Regula el tráfico de sustancias, mantiene la homeostasis y genera energía."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Reproducción"
   },
   {
    "t": "lista",
    "items": [
     "**Asexual (solo mitosis)**: blastoconidios (gemación de levaduras, *Candida*); hifas que forman micelio (vegetativo absorbe nutrientes, aéreo sostiene estructuras reproductivas).",
     "Hifas **septadas** = Ascomycota y Basidiomycota; **no septadas (cenocíticas)** = zigomicetos.",
     "Esporas asexuales: **esporangiosporas** dentro de un esporangio (*Mucor*, *Rhizopus*); **conidios** externos en conidióforos (*Aspergillus*, *Penicillium*).",
     "**Sexual (meiosis)**: **zigosporas** por fusión de hifas (*Rhizopus*); **basidiosporas** en basidios en forma de clava (*Cryptococcus neoformans*)."
    ]
   },
   {
    "t": "h",
    "texto": "Antifúngicos ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Diagnóstico micológico ⭐"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Muestra** según sitio: superficiales (piel, uñas, cabello); mucosas (hisopados oral, vaginal); profundas (esputo, LCR, sangre, orina, biopsias, aspirados). Evitar contaminación ambiental.",
     "**Examen directo**: **KOH 10–20 %** digiere queratina y deja ver hifas, levaduras y esporas.",
     "**Cultivo**: **agar Sabouraud dextrosa** (con o sin antibióticos). CHROMagar Candida diferencia especies por color; agar BHI enriquecido para dimórficos. Se incuba a 25–30 °C (micelio) y 35–37 °C (levadura en dimórficos). Se observa velocidad, morfología macro y micro (azul de lactofenol).",
     "**Inmunológicos y bioquímicos**: galactomanano (*Aspergillus*); **β-D-glucano** (panfúngico, **excepto criptococos y zigomicetos**); antígeno capsular de *Cryptococcus* (látex, ELISA, inmunocromatografía); asimilación y fermentación de azúcares para levaduras; MALDI-TOF.",
     "**Histopatología**: PAS y Gomori-Grocott; demuestra invasión tisular y distingue colonización de infección."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Tipos de micosis ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**Oportunistas** según frecuencia: **clásicas** (candidiasis, aspergilosis, criptococosis, zigomicosis); **emergentes** (fusariosis, malasseziosis, *Candida auris*); **eventuales/endémicas** (esporotricosis, histoplasmosis, paracoccidioidomicosis)."
   },
   {
    "t": "p",
    "texto": "**Hongos ambientales**: oportunistas, anemófilos, contaminantes. Importan por enfermedad, **micotoxinas**, alergias, fitopatógenos e industria (*S. cerevisiae*, *A. niger*, *Penicillium notatum*, *P. griseofulvum*, *P. camemberti*, *P. roqueforti*). Factores predisponentes: neutropenia, trasplante (médula ósea), cáncer, SIDA, leucemia, antibióticos de amplio espectro, citotóxicos, corticoides, infecciones crónicas (TB)."
   }
  ]
 },
 {
  "id": "clase-oportunistas",
  "grupo": "Clases de teoría",
  "titulo": "Oportunistas ambientales: Aspergillus, zigomicetos y Fusarium",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "Los tres invaden vasos (angioinvasión → trombosis → necrosis) en pacientes neutropénicos; se distinguen por la hifa, la imagen y el fármaco de elección."
   },
   {
    "t": "h",
    "texto": "Aspergillus spp. (aspergilosis) ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Filamentoso, **hifas septadas, hialinas, ramificadas en ángulo agudo (~45°)**. Conidióforo que termina en cabeza aspergilar (vesícula) con esterigmas y conidias en cadena, hidrofóbicas y anemófilas. **Clave de oro: \"septadas + 45° = Aspergillus\"**.",
     "Ubicuo: restos vegetales, agua, aire, polvo, alimentos, filtros de aire acondicionado, ambientes hospitalarios. Comensal común de vías respiratorias.",
     "Taxonomía: Fungi, Ascomycota, Eurotiomycetes, Trichocomaceae. ~900 especies, 20 patógenas: ***A. fumigatus* 85–90 %**, *A. flavus* 5–10 % (micotoxinas/aflatoxinas), *A. niger* 3–7 %, *A. terreus* 2–3 %, *A. nidulans* 1 %.",
     "Riesgo: **neutropenia**, trasplantes, corticoides, EPOC; hiperactividad inmune (alergia, asma).",
     "Vías: inhalación (senos, pulmón), inoculación en córnea (queratitis), vía IV (drogas, prótesis valvulares, catéteres), ingestión."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**Formas clínicas**"
   },
   {
    "t": "lista",
    "items": [
     "**Pulmonar invasiva (aguda)**: la más grave, en inmunocomprometidos. Fiebre persistente que no responde a antibióticos, dolor pleurítico, tos, disnea; hemoptisis tardía (cuando se recuperan los neutrófilos). TAC: **signo del halo** (nódulo sólido rodeado de vidrio deslustrado), temprano en los primeros ~10 días. Histología: el hongo penetra arteriolas → trombosis e infarto (nódulo) + hemorragia perilesional (halo).",
     "**Crónica cavitaria / aspergiloma (bola fúngica)**: coloniza cavidades previas (**TB**, sarcoidosis, enfisema bulloso). Puede ser asintomático; hemoptisis leve o masiva; tos crónica.",
     "**Otras crónicas**: otomicosis (*A. niger*, *A. flavus*; \"oído de nadador\"), miringomicosis, sinusitis, aspergiloma del seno maxilar.",
     "**ABPA (broncopulmonar alérgica)**: asma o fibrosis quística; hipersensibilidad **tipo I y III** (Th2). Empeora el asma, sibilancias, tapones de moco marrón, fiebre leve. Dx: esputo con hifas tabicadas dicotómicas, moldes bronquiales marrones, eosinofilia; **IgE total ↑**, IgE e IgG anti-Aspergillus ↑; prueba cutánea (+)."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico**: directo (KOH, poca sensibilidad; coloraciones no dan diagnóstico etiológico), histopatología (PAS: hifas con invasión vascular), cultivo en **ASG con antibiótico a 26 °C** y medio enriquecido (BHI) a 37 °C. Indirecto: **galactomanano en suero** (diagnóstico precoz); inmunodifusión (sensibilidad: aspergiloma 90–98 %, invasiva 80–85 %, alérgica 50–55 %), fijación de complemento, inmunoelectroforesis."
   },
   {
    "t": "p",
    "texto": "Colonias: *A. fumigatus* verde-grisáceas, conidióforo liso, vesícula en matraz; *A. flavus* verde-amarillentas, conidióforo rugoso, aflatoxinas; *A. niger* negras."
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Zigomicetos (mucormicosis) ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Orden Mucorales: *Mucor*, *Rhizopus*, *Rhizomucor*, *Absidia*. **Hifas anchas, no tabicadas (cenocíticas)**, crecen rápido. Viven en materia en descomposición, suelo, estiércol, frutas.",
     "Mínima patogenicidad en sanos; en susceptibles, enfermedad grave y a menudo mortal.",
     "Vías: inhalación (senos, pulmón), ingestión, inoculación cutánea.",
     "Riesgo: **diabetes no controlada (cetoacidosis)** y **neutropenia**; leucemia, desnutrición, drogas IV, antibióticos, quemaduras, heridas, catéteres.",
     "Virulencia: hifas anchas; angioinvasión con **escara negra**; **captación de hierro** (más hierro libre en cetoacidosis → crecen más en diabéticos); proteínas **CotH** que se unen a **GRP78** endotelial; enzimas; termotolerancia; crecimiento rápido.",
     "Clínica: **rinocerebral (la más frecuente)**: dolor facial, congestión, cefalea, **costras negras en paladar o cornetes**. Pulmonar: fiebre, dolor pleurítico, hemoptisis masiva; **progresión fulminante en días** (la aspergilosis tarda semanas). Diseminada: cerebro, bazo, corazón. También intestinal y subcutánea.",
     "Imagen: **signo del halo invertido (atolón)**: vidrio deslustrado central rodeado de anillo de consolidación.",
     "Dx: visualizar hifas anchas no tabicadas en tejido (biopsia, KOH, histopatología); cultivo en ASG en **3–4 días**.",
     "Tratamiento: **anfotericina B liposomal + desbridamiento quirúrgico urgente + corregir el factor** (glucemia, inmunosupresión). Alternativa: posaconazol / isavuconazol."
    ]
   },
   {
    "t": "h",
    "texto": "Fusarium spp. (fusariosis) ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Ascomycota, Sordariomycetes, Hypocreales. Hifas **hialinas, septadas**, ramificadas en ángulo agudo o recto. **Macroconidias en forma de canoa o plátano** y microconidias. Colonias algodonosas **rosadas, violetas o rojas**.",
     "Saprofito del suelo y fitopatógeno. ~50 especies; ***F. solani*** causa la mitad de las invasivas (el más virulento). En algunos centros es la 2.ª causa de infección por filamentosos después de *Aspergillus*.",
     "Oportunista **emergente**. 90 % se adquiere por vía respiratoria (aerosoles del ambiente o agua nosocomial); 10 % por piel; queratitis por trauma.",
     "Virulencia: angioinvasión, micotoxinas (**tricotecenos**), adhesinas (lentes de contacto, catéteres), biofilm, **resistencia intrínseca** a varios antifúngicos, \"murallas de hifas\" contra neutrófilos.",
     "Riesgo: neutropenia prolongada, corticoides, cáncer, trasplante.",
     "Clínica: **lesiones cutáneas en 70–80 % de diseminados**: nódulos eritematosos dolorosos con **centro necrótico negro** (tipo ectima gangrenoso), múltiples a la vez; fiebre refractaria; pulmón con signo del halo igual que *Aspergillus*; seno-nasal.",
     "Dx: **hemocultivos positivos en ~40 %** (en aspergilosis suelen ser negativos), biopsia.",
     "Tratamiento: **voriconazol** (1.ª línea) ± anfotericina B liposomal; posaconazol en grave; evaluar cirugía si es cutánea localizada.",
     "Caso de la clase: mujer de 19 años con leucemia mieloide aguda, neutropenia febril, galactomanano negativo, lesiones cutáneas nodulares necróticas y hemocultivo con *Fusarium*."
    ]
   },
   {
    "t": "h",
    "texto": "Queratitis micótica"
   },
   {
    "t": "lista",
    "items": [
     "Agentes: *Fusarium*, *Cephalosporium*, *Aspergillus* (también *Candida*). Mecanismo: **trauma vegetal** (ramas) o lentes de contacto.",
     "Comienzo larvado y menos doloroso que la bacteriana: dolor que aumenta, ojo rojo, visión borrosa, fotofobia, cuerpo extraño, secreción mucopurulenta.",
     "Signos: infiltrado estromal grisáceo de **bordes plumosos**, **lesiones satélite**, placas endoteliales, **hipopión**.",
     "Dx: raspado corneal, KOH, cultivo en ASG. Tratamiento: **natamicina** / voriconazol tópico."
    ]
   }
  ]
 },
 {
  "id": "clase-candida",
  "grupo": "Clases de teoría",
  "titulo": "Candida",
  "subtitulo": "Clase 9",
  "bloques": [
   {
    "t": "p",
    "texto": "*Candida* no \"ataca\" primero: aprovecha una oportunidad (antibióticos que alteran la microbiota, barreras rotas por catéter o mucosa, inmunosupresión); *C. albicans* es la más frecuente y la más virulenta."
   },
   {
    "t": "h",
    "texto": "Morfología y epidemiología"
   },
   {
    "t": "lista",
    "items": [
     "Levaduras ovaladas de 3–14 µm con blastoconidias; según especie, **pseudohifas, hifas y clamidoconidias** terminales de 8–16 µm (**polimorfismo**). Dimorfismo: levadura como saprofito, hifa cuando parasita tejido. Pared con manano, proteínas y quitina.",
     "~200 especies, más de 15 patógenas. Cosmopolita; causa 25 % de las micosis superficiales y **75–88 % de las infecciones fúngicas nosocomiales**.",
     "Habitante normal de mucosas digestiva, respiratoria y mucocutáneas.",
     "Infección **endógena** (disbiosis: diabetes, embarazo, anticonceptivos, antibióticos; dispositivos médicos) o **exógena** (catéteres, válvulas, equipos mal descontaminados; madre con candidiasis vaginal → RN con candidiasis oral; manos del personal de UCI).",
     "Predisponentes: locales (maceración), fisiológicos (edades extremas, embarazo), endocrinos (diabetes, hipotiroidismo), antibióticos, neutropenia, leucemia, corticoides, VIH, quemaduras. En la invasiva suelen confluir dos o más, siendo la **neutropenia** una de las principales."
    ]
   },
   {
    "t": "h",
    "texto": "Especies ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**Factores de virulencia**: polimorfismo levadura→hifa (invasión, sobre todo *C. albicans*), **adhesinas ALS**, biofilm, proteasas, fosfolipasas, lipasas, evasión inmune, blastoconidias (diseminación hematógena), termotolerancia."
   },
   {
    "t": "h",
    "texto": "Clínica ⭐"
   },
   {
    "t": "lista",
    "items": [
     "**Mucosas (las más frecuentes)**: oral o muguet (placas blancas removibles sobre base eritematosa; lactantes, VIH, corticoides inhalados); **esofagitis** (odinofagia, disfagia; VIH avanzado; extensión de la oral); vulvovaginal (prurito intenso, flujo blanco grumoso \"cottage\", ardor; embarazo, antibióticos, diabetes; recurrente → pensar en *C. glabrata*); balanitis.",
     "**Cutánea**: intertrigo en pliegues (axilas, ingle, submamario) con **eritema + lesiones satélite**; onicomicosis y paroniquia.",
     "**Invasiva**: secuencia infección mucocutánea → ruptura de barreras → tejidos → órganos.",
     "  **Candidemia**: la forma invasiva más común; fiebre persistente sin foco que no responde a antibióticos. Riesgo: UCI, catéter venoso, antibióticos prolongados, inmunosupresión.",
     "  Endocarditis (prótesis valvulares, drogas IV), meningitis (neonatos, inmunosuprimidos), diseminada a hígado, bazo y riñón (neutropenia, *C. tropicalis*)."
    ]
   },
   {
    "t": "h",
    "texto": "Diagnóstico ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Muestra según cuadro: sangre (candidemia; **sangre = infección invasiva grave**), exudado oral, flujo vaginal, orina (candiduria), catéter.",
     "Directo: KOH 10–20 %; frotis Gram, ZN, Leishman, Giemsa (levaduras Gram +, pseudohifas).",
     "Cultivo: **ASG + cloranfenicol**, agar Mycobiotic (antibiótico + actidiona), **CHROMagar Candida** (selectivo y diferencial); 35–37 °C por 48–72 h; colonias cremosas, lisas, blancas brillantes.",
     "**Tubo germinativo**: filamentación en suero a 37 °C en **2–3 horas** = *C. albicans*.",
     "**Microcultivo** (agar arroz, papa-zanahoria o harina de maíz): pseudohifas, blastoconidias y **clamidoconidias** en 2–3 días = *C. albicans*.",
     "MALDI-TOF y antifungigrama."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Tratamiento ⭐"
   },
   {
    "t": "lista",
    "items": [
     "**Superficial: azoles tópicos o sistémicos.** Oral: nistatina en enjuague o clotrimazol (fluconazol si VIH). Vaginal: clotrimazol o miconazol crema, o **fluconazol 150 mg VO dosis única**. Intertrigo: clotrimazol o miconazol, piel seca. Uñas: fluconazol o itraconazol prolongado.",
     "**Invasiva: equinocandinas de primera línea** (caspofungina, micafungina). Fluconazol si el paciente está estable y la cepa es sensible.",
     "*C. krusei*: **nunca fluconazol**. *C. glabrata* invasiva: equinocandina. *C. auris*: equinocandina y **antifungigrama obligatorio**. *C. parapsilosis*: fluconazol o equinocandina y retirar catéter.",
     "Biofilm en catéter: **retirar el dispositivo** + antifúngico sistémico.",
     "Endocarditis: anfotericina B ± flucitosina. SNC: fluconazol o anfotericina B liposomal. Candiduria solo se trata si hay síntomas o riesgo (fluconazol)."
    ]
   }
  ]
 },
 {
  "id": "clase-cryptococcus",
  "grupo": "Clases de teoría",
  "titulo": "Cryptococcus",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "*Cryptococcus* es una levadura encapsulada que se inhala y tiene tropismo por el SNC; su cápsula (GXM) es el principal factor de virulencia y el blanco del mejor test diagnóstico (antígeno capsular)."
   },
   {
    "t": "h",
    "texto": "Características ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Basidiomycota, familia Filobasidiaceae. Fase sexual (teleomorfa): *Filobasidiella neoformans*; fase asexual (anamorfa): *Cryptococcus*.",
     "Levadura ovalada de 4–6 µm, **reproducción por gemación (no hifas)**. Cápsula de **glucuronoxilomanano (GXM)**: xilosa, manosa y ácido glucurónico. Produce **melanina**.",
     "**Anamorfa** (levadura) = forma patogénica en humanos; se ve en LCR con tinta china. **Teleomorfa** = en ambiente; produce **basidiosporas** que se inhalan.",
     "Crece a 25 °C en ambiente y a 37 °C en huésped; la cápsula aumenta en el huésped."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "*C. neoformans* vive en **excremento de palomas** (vectores mecánicos; ricos en nitrógeno y creatinina)."
   },
   {
    "t": "h",
    "texto": "Virulencia y patogenia ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "Inhalación de blastoconidias secas → se rehidratan en el alvéolo → sobreviven dentro del macrófago (**\"caballo de Troya\"**) → diseminación por sangre con **tropismo por SNC**.",
     "Defensa: **linfocitos T CD4+** son clave (por eso el VIH da alto riesgo de meningitis); IFN-γ y TNF-α activan la fagocitosis."
    ]
   },
   {
    "t": "h",
    "texto": "Clínica ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Sinónimos: enfermedad de **Busse-Buschke**, blastomicosis europea, torulosis.",
     "**Pulmonar**: hasta 50 % asintomática; tos, disnea, fiebre intermitente. Rx: infiltrados nodulares o difusos; TAC: nódulos o masas, cavitación rara. *C. gattii* forma **criptococoma** grande que simula tumor. En inmunocompetentes puede resolverse sola.",
     "**Meníngea / sistémica (la más grave)**: VIH con **CD4 < 100**, trasplantes. Subaguda o crónica: cefalea progresiva, fiebre, luego confusión, cambios de personalidad, somnolencia; papiledema e hipertensión intracraneal. LCR: pleocitosis leve, proteínas ↑, glucosa ↓; tinta china (+); antígeno criptocócico. TAC: *C. neoformans* con hidrocefalia (puede ser normal); *C. gattii* con criptococomas cerebrales y convulsiones.",
     "**Cutánea**: pápulas o nódulos que se ulceran (simulan acné, abscesos, varicela); indica enfermedad **sistémica**, rara vez primaria.",
     "**Diseminada rara**: hueso, articulación, próstata, endocarditis."
    ]
   },
   {
    "t": "h",
    "texto": "Diagnóstico ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Muestras: LCR, esputo, exudados cutáneos, biopsias.",
     "**Tinta china** en LCR o esputo (50–80 %): levaduras con halo de cápsula. Histología: Gomori-Grocott (pared negra, cápsula no se tiñe), **mucicarmina (cápsula roja brillante)**, PAS, H-E.",
     "Cultivo: ASG a temperatura ambiente (colonias blanco-cremosas, **mucoides**); BHI o agar sangre a 37 °C; **agar Niger (semilla de ave / ácido cafeico)**: colonias pigmentadas por melanina.",
     "**Ureasa positiva** en todas las especies de *Cryptococcus*.",
     "**Medio CGB** (L-canavanina, glicina, azul de bromotimol): *C. gattii* crece y vira a azul; *C. neoformans* no. *C. gattii* también asimila D-prolina.",
     "**Aglutinación con látex del antígeno capsular (GXM)**: > 90 % de sensibilidad y especificidad; en suero, orina y LCR; **gold standard práctico** (rápido, sensible, barato). Tiene valor pronóstico: **títulos que suben = mal pronóstico**. Se lee de negativo a ++++."
    ]
   },
   {
    "t": "h",
    "texto": "Tratamiento ⭐"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "Controlar la presión intracraneal. En VIH **no iniciar TAR inmediatamente** (riesgo de IRIS). Profilaxis secundaria con fluconazol hasta CD4 > 100–200 por ≥ 3 meses con TAR.",
     "Pulmonar leve-moderada: fluconazol; grave o diseminada: igual que meningitis. Criptococoma: más prolongado, a veces cirugía."
    ]
   }
  ]
 },
 {
  "id": "clase-dimorficos",
  "grupo": "Clases de teoría",
  "titulo": "Dimórficos endémicos: Histoplasma, Paracoccidioides y Blastomyces",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "Los tres son **patógenos primarios**: moho a 25 °C (forma infectante que se inhala), levadura a 37 °C (forma parasitaria); la levadura en tejido los identifica."
   },
   {
    "t": "tabla",
    "columnas": [
     "",
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
    ]
   },
   {
    "t": "h",
    "texto": "Histoplasma capsulatum ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Pared: quitina, β-glucanos, **α-(1,3)-glucano** que cubre los β-glucanos y evita su reconocimiento por **Dectina-1**; **Hsp60** se une al receptor **CR3** del macrófago (entrada \"silenciosa\").",
     "Otras armas: modula el fagolisosoma (pH, enzimas), catalasa y SOD contra ROS, captación de hierro y calcio, melanina parcial, dimorfismo térmico.",
     "Ambiente endémico: 25–30 °C, humedad 70–80 %, suelos ácidos; zonas abiertas (tropicales) y cerradas (cuevas). Ej.: Tunqui Cueva, Chontabamba.",
     "Variedades: var. *capsulatum* (América, la importante; levaduras 2–5 µm; pulmonar y diseminada en VIH) y var. *duboisii* (África; levaduras 8–15 µm; piel, hueso, ganglios).",
     "**Fisiopatología**: 1) inhalación de microconidias → 2) conversión a levadura a 37 °C → 3) fagocitosis (Hsp60) → 4) supervivencia intracelular (α-glucano) → 5) diseminación hematógena dentro de macrófagos a hígado, bazo, médula y ganglios → 6) inmunidad celular (CD4, IFN-γ) → 7) granulomas que se calcifican y **simulan TB** → 8) inmunocompetente leve; inmunodeprimido disemina.",
     "Sinónimos: **enfermedad de Darling, fiebre de las cavernas, fiebre de Tingo María**."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "Dx: frotis con **Giemsa** o Wright (médula ósea, sangre): levaduras pequeñas intracelulares; biopsia con PAS. **Cultivo = gold standard** en Sabouraud: moho algodonoso a 25 °C, levadura cremosa a 37 °C; lento (**2–6 semanas**). **Antígeno en orina** (muy sensible) y suero: el más útil en VIH y diseminada. Anticuerpos (fijación de complemento, inmunodifusión): títulos > 1/16 sugieren enfermedad activa, pero fallan en inmunosuprimidos. Histoplasmina (+) en 80 % de la población endémica.",
     "Tratamiento: aguda leve = observación (itraconazol si persiste, 6–12 semanas); moderada = itraconazol 6–12 semanas; crónica = itraconazol ≥ 12 meses; **diseminada = anfotericina B IV de inducción, luego itraconazol**; VIH = profilaxis secundaria con itraconazol hasta CD4 > 150."
    ]
   },
   {
    "t": "h",
    "texto": "Paracoccidioides brasiliensis ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Sinónimos: **blastomicosis sudamericana o latinoamericana, enfermedad de Lutz-Splendore**, granuloma paracoccidioidal. Micosis crónica, granulomatosa **no caseificante** y supurativa.",
     "**Estrógenos inhiben la forma levadura** → hombres 9:1. Sin transmisión persona a persona. Asociado a lluvias y humedad.",
     "Pared con **α-1,3-glucano** que enmascara β-glucanos (igual que *Histoplasma*). **gp43**: adhesión e inmunomodulación; **principal antígeno diagnóstico**. Adhesinas a fibronectina, laminina y colágeno; melanina; enzimas.",
     "Inmunidad: **Th1 protege** (granulomas, infección latente) / **Th2 empeora** (diseminación). Puede quedar latente y reactivarse con inmunosupresión o desnutrición.",
     "Disemina desde el pulmón a mucosas (oral, nasal), ganglios, piel, **suprarrenales** y sistema reticuloendotelial."
    ]
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "p",
    "texto": "**Tip ENAM**: paciente rural con cuadro tipo TB y **baciloscopía negativa** → pensar en paracoccidioidomicosis."
   },
   {
    "t": "lista",
    "items": [
     "Dx: KOH o Giemsa/PAS de esputo, LBA o raspado oral: levaduras de 10–30 µm, doble pared, gemación múltiple (**timón de barco**). Biopsia: granulomas + levaduras multigemantes (PAS, Grocott). Cultivo en Sabouraud **lento (2–4 semanas)**, no sirve para diagnóstico rápido; colonias cerebriformes. **Anticuerpos anti-gp43** (inmunodifusión, ELISA): muy usados; **títulos que bajan = buena respuesta**.",
     "Tratamiento: leve-moderado **itraconazol VO 6–12 meses** (elección); alternativa **TMP-SMX** VO 12–24 meses (zonas rurales); grave o diseminado **anfotericina B IV 2–4 semanas** y luego itraconazol; SNC: anfotericina B + itraconazol o TMP-SMX."
    ]
   },
   {
    "t": "h",
    "texto": "Blastomyces dermatitidis (seminario 4)"
   },
   {
    "t": "lista",
    "items": [
     "Ascomycota; especies *B. dermatitidis* y *B. gilchristii*. Aerobio, heterótrofo, dimórfico térmico.",
     "Epidemiología (EE. UU.): ≤ 2 casos por 100 000 habitantes al año; Minnesota 2024: 1,5 por 100 000 y 66 % hombres; 11 776 hospitalizaciones estimadas 2010–2020.",
     "Clínica: **pulmonar** (de asintomática a neumonía grave: tos, fiebre, dolor torácico, disnea, pérdida de peso); **cutánea** (lesiones verrugosas, nodulares o ulceradas en cara, cuello, extremidades; pueden fistulizar); **extrapulmonar** por diseminación hematógena: **piel (la más frecuente)**, hueso (osteomielitis), genitourinario, SNC raro.",
     "Dx: esputo, tejido o lesión; Sabouraud a 25–30 °C (moho) y 37 °C (levadura de base ancha); **cultivo = prueba de referencia**; PCR para confirmar enfermedad diseminada."
    ]
   }
  ]
 },
 {
  "id": "clase-seminarios",
  "grupo": "Clases de teoría",
  "titulo": "Seminarios: dermatofitos, Sporothrix, cromoblastomicosis y Pneumocystis",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "Los seminarios agregan tres micosis por contacto o trauma (piel y subcutáneo) y una neumonía oportunista del VIH; aquí lo que es más probable que pregunten."
   },
   {
    "t": "h",
    "texto": "Dermatofitos (tiñas) ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Afectan al 20–25 % de la población mundial; más en trópico (calor y humedad). Infectan **piel, cabello y uñas** (tejido queratinizado); no invaden órganos internos.",
     "Nutrición heterótrofa por absorción; **actividad queratinolítica**: el **sulfito** rompe puentes disulfuro de la queratina y las proteasas/queratinasas la degradan a péptidos y aminoácidos.",
     "Estudio del Instituto de Medicina Tropical Daniel A. Carrión (UNMSM, 4961 casos, 1976–2015): **93,11 % antropófilos**, 6,89 % zoófilos; ***T. rubrum* predominante** todo el periodo (subió de 67,27 % a 80,47 %); *M. canis* superó a *T. mentagrophytes* entre los zoófilos; *E. floccosum* siempre < 10 %.",
     "Tiña capitis: sobre todo en niños (*M. canis*); onicomicosis aumenta con la edad."
    ]
   },
   {
    "t": "tabla",
    "columnas": [
     "",
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
    ]
   },
   {
    "t": "lista",
    "items": [
     "Dx común: raspado del **borde activo**, uñas, pelos; **KOH 10–20 %** (hifas hialinas septadas + artroconidias; en *M. canis* invasión **ectothrix** del pelo); cultivo en **Sabouraud/Mycosel a 25–30 °C** (1–3 semanas); microcultivo con azul de lactofenol; PCR/secuenciación ITS si hay duda. **Serología no se usa.**"
    ]
   },
   {
    "t": "h",
    "texto": "Sporothrix schenckii (esporotricosis) ⭐"
   },
   {
    "t": "lista",
    "items": [
     "Dimórfico térmico. **Fase micelial (25 °C)**: hifas finas septadas, conidios en **\"roseta\" o \"margarita\"**; colonias oscuras, arrugadas, membranosas. **Fase levadura (37 °C, BHI o agar sangre)**: levaduras **en forma de cigarro o puro**; colonias cremosas blanco-amarillentas. En tejido: **cuerpo asteroide** (fenómeno de Splendore-Hoeppli).",
     "Metabolismo: heterótrofo y saprofito; termotolerante; produce **melanina**; secreta proteasas y peptidasas.",
     "Hábitat: suelo, plantas, madera, musgo de esfagno, **espinas de rosas**. Transmisión por **inoculación traumática**; no persona a persona; también arañazos o mordeduras de **gatos** infectados. Riesgo: jardineros, agricultores, forestales.",
     "Perú: frecuencia **alta en costa norte y selva**, media en otras zonas tropicales, baja en zonas andinas y costa central.",
     "Incubación **1–3 semanas** (rango 7 días a 3 meses).",
     "Clínica: pápula o nódulo indoloro en el sitio de inoculación → **forma linfocutánea**: nódulos secundarios en **cadena ascendente** por los linfáticos, que se ulceran y drenan. Localización: **miembros superiores (70–80 %)**, cara en niños. Complicaciones: cronicidad, sobreinfección bacteriana; diseminación osteoarticular o pulmonar en inmunosuprimidos.",
     "Dx: aspirado de nódulos o pus, biopsia del borde de la úlcera, esputo/LBA, líquido sinovial; KOH 10–20 % (poca visibilidad) y frotis teñido (PAS, Grocott, Gram). **Cultivo micológico = gold standard** (desventaja: lento); prueba de dimorfismo (25 °C → 37 °C); PCR y MALDI-TOF identifican especie; serología (ELISA, inmunodifusión). Bioseguridad nivel 2."
    ]
   },
   {
    "t": "h",
    "texto": "Cromoblastomicosis"
   },
   {
    "t": "lista",
    "items": [
     "Hongos **dematiaceos** (pigmentados, orden Chaetothyriales): ***Fonsecaea pedrosoi*** (América, el principal), *F. monophora*, *Cladophialophora carrionii* (zonas áridas), *Phialophora verrucosa*, *Rhinocladiella aquaspersa*.",
     "Saprofitos del suelo y la madera; aerobios; **melanina** en la pared (virulencia); crecen lento (2–4 semanas) a 25–30 °C en Sabouraud.",
     "Riesgo: contacto con suelo y vegetación, **traumatismos con espinas o astillas**, trabajo rural; trópico y subtrópico. Perú (2011–2024, 13 casos): 84 % hombres, 77 % adquiridos en la **Amazonía** (Ucayali, San Martín), edad mediana 65,3 años.",
     "Clínica: infección **crónica de piel y subcutáneo**: placas verrugosas, nódulos, lesiones tumorales, costrosas, **en coliflor**, con puntos negros; sobre todo en **miembros inferiores**; cicatrices que limitan la función.",
     "Dx: **KOH 10–20 %**: **cuerpos muriformes o escleróticos** (células fumagoides, 6–12 µm, color café) = hallazgo característico. Cultivo en Sabouraud: moho septado pigmentado oscuro. En tejido todas las especies se ven iguales; en cultivo se diferencian por su conidiación."
    ]
   },
   {
    "t": "h",
    "texto": "Pneumocystis jirovecii"
   },
   {
    "t": "lista",
    "items": [
     "Hongo oportunista pulmonar; **antes considerado protozoo**, hoy reino Fungi por estudios moleculares.",
     "Formas: **trófica** (crecimiento y reproducción), **quiste** (forma resistente), esporozoítos (ciclo). Se inhala, se adhiere a los **neumocitos tipo I**.",
     "Inmunocompetente: CD4 y macrófagos activados lo controlan. Inmunosupresión: prolifera → inflamación, material proteináceo en alvéolos, engrosamiento alvéolo-capilar → **hipoxemia**.",
     "Riesgo: **VIH con CD4 < 200 células/µL**, trasplantes, neoplasias hematológicas, corticoides, inmunosupresores.",
     "Clínica: fiebre, **tos seca**, disnea, hipoxemia; infiltrados bilaterales / vidrio esmerilado.",
     "Dx: muestra de elección **lavado broncoalveolar** (también esputo inducido, biopsia). **Giemsa**: formas tróficas y núcleos, **no tiñe la pared del quiste**. **Gomori-Grocott: tiñe los quistes** (redondos, ovales o en media luna, ~7 µm, en racimos). Inmunofluorescencia directa con monoclonales. **PCR de mtLSU rRNA**.",
     "Tratamiento: **TMP-SMX (cotrimoxazol) por 21 días** (bloqueo secuencial del ácido fólico → no hay síntesis de ácidos nucleicos). Alternativas: pentamidina (eficaz, más tóxica), atovacuona (menos eficaz)."
    ]
   }
  ]
 },
 {
  "id": "clase-repaso",
  "grupo": "Clases de teoría",
  "titulo": "Repaso final: lo que más se pregunta",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "Tres tablas para la última hora antes del examen: qué se ve al microscopio, qué prueba confirma y qué se da."
   },
   {
    "t": "h",
    "texto": "\"Lo veo y lo reconozco\""
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Signos de imagen y laboratorio que se confunden"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Fármaco de elección"
   },
   {
    "t": "tabla",
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
    ]
   },
   {
    "t": "h",
    "texto": "Trampas típicas"
   },
   {
    "t": "lista",
    "items": [
     "PPD e IGRA detectan **infección**, no enfermedad activa.",
     "GeneXpert MTB/RIF solo informa resistencia a **rifampicina**.",
     "*C. krusei* es resistente intrínseca a fluconazol; *C. glabrata* no forma hifas; *C. auris* exige antifungigrama.",
     "Tres enfermedades \"simulan TB\": histoplasmosis crónica (cavitaciones apicales), paracoccidioidomicosis (rural con baciloscopía negativa) y aspergiloma sobre caverna de TB.",
     "*Histoplasma* y *Paracoccidioides* comparten el **α-1,3-glucano** que esconde los β-glucanos de la Dectina-1.",
     "Paracoccidioidomicosis es más frecuente en hombres porque los **estrógenos inhiben la forma levadura**.",
     "*C. neoformans* = palomas e inmunocomprometidos; *C. gattii* = eucaliptos e inmunocompetentes.",
     "*Pneumocystis* es un **hongo**, no un protozoo, y la Giemsa no tiñe la pared del quiste."
    ]
   }
  ]
 },
 {
  "id": "micro-tuberculosis",
  "grupo": "Resumen por microorganismo",
  "titulo": "Mycobacterium tuberculosis",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un bacilo delgado, recto o algo curvo. Es aerobio estricto, intracelular facultativo, inmóvil y no forma esporas ni cápsula. Pertenece al complejo MTB, junto con *M. bovis*, *M. africanum*, *M. microti*, *M. canettii*, *M. caprae* y *M. pinnipedii*. Se manipula en nivel de bioseguridad 3."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce y por qué.** Su pared tiene 40–60 % de **ácidos micólicos**. Esos lípidos retienen la fucsina aunque se lave con alcohol-ácido, así que es un **BAAR**: en el Ziehl-Neelsen se ve rojo sobre fondo azul. La misma pared gruesa explica tres cosas:"
   },
   {
    "t": "lista",
    "items": [
     "**Crece lento**: se divide cada 18–24 h, así que el cultivo sólido tarda hasta 8 semanas.",
     "**Sobrevive dentro del macrófago.**",
     "**Resiste** a desinfectantes y antibióticos comunes."
    ]
   },
   {
    "t": "p",
    "texto": "Las capas de la pared, de adentro hacia afuera, son: membrana, peptidoglucano, arabinogalactano (que une los ácidos micólicos al peptidoglucano), ácidos micólicos y glucolípidos. El LAM atraviesa toda la pared."
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Se transmite por vía aérea, en gotículas muy pequeñas. Para contagiar se necesitan tres cosas: un paciente **bacilífero** (con bacilos en el esputo), contacto cercano y prolongado, y un espacio cerrado y hacinado. Un BAAR (+) contagia a unas 20 personas antes de ser diagnosticado. *M. bovis* llega por leche no pasteurizada."
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.** El LAM y las lipoproteínas se unen a receptores del macrófago alveolar (CR1, CR3, CR4, TLR2, TLR4) y el bacilo entra. Una vez dentro sobrevive gracias a cuatro armas:"
   },
   {
    "t": "lista",
    "items": [
     "**ESAT-6 y CFP-10** impiden que el fagosoma se fusione con el lisosoma.",
     "**Catalasa y SOD** neutralizan los radicales de oxígeno.",
     "El **cord factor** inhibe a los neutrófilos, causa necrosis y forma granulomas.",
     "El **Ag85** ayuda a entrar a la célula y a sintetizar la pared."
    ]
   },
   {
    "t": "p",
    "texto": "La enfermedad avanza por etapas:"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "Entrada (0–3 días).",
     "Multiplicación con reclutamiento de células por IL-8, RANTES y MCP-1 (3–5 días).",
     "Diseminación sin activación del macrófago (5–15 días).",
     "**Granuloma** (4–6 semanas).",
     "**Tubérculo con necrosis caseosa** (9–12 semanas).",
     "**Ruptura**, cuando el paciente se vuelve bacilífero y puede tener hemoptisis (12–18 semanas)."
    ]
   },
   {
    "t": "p",
    "texto": "La respuesta que protege es la **Th1 (IL-12, IFN-γ)**. Si el bacilo queda contenido en el granuloma, la infección queda **latente** por años."
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**Pulmonar (85 %)**: tos de más de 2 semanas, hemoptisis, pérdida de peso, fiebre prolongada y anemia.",
     "**Extrapulmonar (15–20 %, más del 50 % en VIH)**: ganglionar (escrófula cervical que fistuliza), pleural (exudado linfocítico con ADA alta), meníngea (subaguda, glucosa baja en LCR), osteoarticular (Mal de Pott; tríada de Phemister en articulaciones periféricas), laríngea (disfonía, muy contagiosa) y miliar."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "Para la **infección**: PPD (2 UT, lectura a las 48–72 h) e IGRA (QuantiFERON, T-SPOT). Ninguno distingue la TB activa.",
     "Para la **enfermedad**:",
     "  Baciloscopía (Ziehl-Neelsen o auramina, que es más sensible).",
     "  Cultivo en Löwenstein-Jensen u Ogawa (positivo desde la 4.ª semana), en MGIT 960 (desde el 2.º día) o en 7H10 (desde la 2.ª semana).",
     "  GeneXpert MTB/RIF (detecta resistencia solo a rifampicina).",
     "  GenoType (resistencia a H, R y drogas de segunda línea; solo en esputo).",
     "  MODS (cuerdas en el pozo sin antibiótico, y crecimiento en los pozos con H o R si es resistente)."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento (MINSA).**"
   },
   {
    "t": "lista",
    "items": [
     "**2HRZE** de lunes a sábado y luego **4HR** tres veces por semana, siempre supervisado. Las tabletas se dan según el peso.",
     "**MDR** = resistente a H + R. **Pre-XDR** = MDR + fluoroquinolona. **XDR** = pre-XDR + bedaquilina o linezolid.",
     "Esquemas para resistencia: **BPaLM** (bedaquilina, pretomanid, linezolid, moxifloxacino) y **BLCC** (bedaquilina, linezolid, clofazimina, cicloserina)."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** Granuloma caseificante con células de Langhans = TB. El PPD positivo dice \"infectado\", no \"enfermo\"."
   }
  ]
 },
 {
  "id": "micro-resistentes",
  "grupo": "Resumen por microorganismo",
  "titulo": "Bacterias resistentes: S. aureus MRSA y enterobacterias productoras de betalactamasas",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué son.** Son bacterias que sobreviven y se multiplican frente a un antibiótico que antes las eliminaba. La resistencia puede ser:"
   },
   {
    "t": "lista",
    "items": [
     "**Innata o cromosómica**: la especie está naturalmente fuera del espectro del antibiótico.",
     "**Adquirida**: por mutación o por genes nuevos. Lo clínicamente más importante es la **conjugación** y la **transposición**, que suelen trabajar juntas."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo resisten.** Hay tres mecanismos:"
   },
   {
    "t": "lista",
    "items": [
     "Sacar el fármaco con **bombas de eflujo** (barreras de exclusión).",
     "**Cambiar el blanco** (así funciona el MRSA).",
     "**Destruir el fármaco con enzimas**. Es el mecanismo más potente; ejemplos: BLEE y carbapenemasas."
    ]
   },
   {
    "t": "p",
    "texto": "**S. aureus MRSA.** Tiene el gen **mecA**, que fabrica una PBP distinta, la **PBP2a**, a la que no se unen las penicilinas ni las cefalosporinas. Por eso es resistente a oxacilina, meticilina y casi todos los betalactámicos."
   },
   {
    "t": "lista",
    "items": [
     "**Detección**: disco de **cefoxitina 30 µg** (se prefiere porque induce mejor la resistencia). **Halo < 22 mm = MRSA.**",
     "**Confirmación**: PCR de mecA.",
     "**BORSA**: tiene la CMI de oxacilina alta pero es mecA negativo y sensible a cefoxitina. No es MRSA."
    ]
   },
   {
    "t": "p",
    "texto": "**Enterobacterias (E. coli, K. pneumoniae y otras).** Producen betalactamasas, enzimas que rompen el anillo betalactámico. Hay tres familias:"
   },
   {
    "t": "lista",
    "items": [
     "**BLEE**: plasmídica. Destruye penicilinas, cefalosporinas de 3.ª generación y aztreonam, pero **el ácido clavulánico la inhibe**.",
     "  Se confirma con el **doble disco**: el halo crece ≥ 5 mm junto al clavulanato.",
     "  Causa infecciones urinarias, sepsis e intraabdominales.",
     "**AmpC**: destruye cefalosporinas de 1.ª a 3.ª generación y la cefoxitina, y **no la inhibe el clavulanato**.",
     "  Es típica de *Enterobacter*, *Citrobacter*, *Serratia*, *Proteus/Morganella* y *Pseudomonas*.",
     "  Es peligrosa porque **se induce durante el tratamiento**: el paciente empieza sensible y se vuelve resistente al recibir ceftriaxona.",
     "  Se confirma con cloxacilina (el halo crece ≥ 5 mm) o con el doble disco con cefoxitina.",
     "**Carbapenemasas**: destruyen casi todos los betalactámicos, incluidos los carbapenémicos.",
     "  Tipos: **KPC** (*Klebsiella*), **NDM** y **OXA-48** (enterobacterias), **VIM e IMP** (*Pseudomonas*, *Acinetobacter*).",
     "  Se confirman con Hodge modificado (\"trébol\"), Carba NP (unas 2 h), tiras inmunocromatográficas como NG-Test Carba 5, o PCR multiplex.",
     "  La sinergia con **ácido borónico** indica KPC; con **EDTA** indica metalo-betalactamasa."
    ]
   },
   {
    "t": "p",
    "texto": "**Antibiograma.**"
   },
   {
    "t": "lista",
    "items": [
     "**Métodos**: Kirby-Bauer (difusión en disco: el halo mide indirectamente la CIM), dilución, sistemas automatizados (Vitek, MicroScan) y MALDI-TOF.",
     "**MALDI-TOF** identifica la especie en horas, pero **no reemplaza** al antibiograma.",
     "**S / I / R** = alta probabilidad de éxito, efecto incierto o alta probabilidad de fracaso.",
     "Siempre se correlaciona con la clínica: un resultado \"sensible\" in vitro puede fallar in vivo."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** El clavulanato **sí** inhibe BLEE y **no** inhibe AmpC. MRSA = mecA, PBP2a y halo de cefoxitina < 22 mm."
   }
  ]
 },
 {
  "id": "micro-aspergillus",
  "grupo": "Resumen por microorganismo",
  "titulo": "Aspergillus spp.",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un moho (hongo filamentoso) hialino. Pertenece a Ascomycota, Eurotiomycetes, Trichocomaceae. Hay unas 900 especies, de las cuales 20 son patógenas. La principal es ***A. fumigatus* (85–90 %)**; le siguen *A. flavus* (5–10 %, produce aflatoxinas), *A. niger* (3–7 %), *A. terreus* y *A. nidulans*. Es el ejemplo clásico de **micosis oportunista**."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.** Tiene **hifas septadas que se ramifican en ángulo agudo (~45°)**. El conidióforo termina en una vesícula (cabeza aspergilar) cubierta de esterigmas, y de ellos salen conidias en cadena."
   },
   {
    "t": "lista",
    "items": [
     "**Colonias**: *A. fumigatus* verde-grisácea (conidióforo liso, vesícula en forma de matraz); *A. flavus* verde-amarillenta (conidióforo rugoso); *A. niger* negra.",
     "**Regla de oro**: \"septadas + 45° = *Aspergillus*\"."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Está en todas partes: restos vegetales, polvo de casa, aire acondicionado, conductos de agua, alimentos y hospitales. Sus conidias son hidrofóbicas y vuelan con facilidad (es anemófilo); incluso es comensal de la vía respiratoria. Entra por cuatro vías:"
   },
   {
    "t": "lista",
    "items": [
     "Inhalación (la principal; llega a senos paranasales y pulmón).",
     "Trauma en la córnea.",
     "Vía intravenosa (drogas, prótesis valvulares, catéteres).",
     "Ingestión."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.** Sus conidias miden 2–3 µm, así que llegan hasta el alvéolo. Sus factores de virulencia:"
   },
   {
    "t": "lista",
    "items": [
     "**Termotolerancia**: crece a 37–50 °C.",
     "**Gliotoxina**: paraliza macrófagos y neutrófilos. Es el principal factor inmunoevasor.",
     "**Angioinvasión**: entra a las arteriolas y causa trombosis, infarto y hemorragia.",
     "**Proteasas y elastasas**, que destruyen tejido.",
     "**Biofilm.**"
    ]
   },
   {
    "t": "p",
    "texto": "Su pared libera **galactomanano**, que es la base del diagnóstico. El gran factor de riesgo es la **neutropenia**; otros son trasplante, corticoides y EPOC. En asmáticos no invade: causa alergia."
   },
   {
    "t": "p",
    "texto": "**Clínica (cuatro caras).**"
   },
   {
    "t": "lista",
    "items": [
     "**Invasiva pulmonar (la más grave)**: neutropénico con fiebre que no cede con antibióticos, dolor pleurítico y tos. La hemoptisis llega tarde, cuando se recuperan los neutrófilos. En la TAC se ve el **signo del halo** en los primeros ~10 días: el nódulo es el infarto y el halo en vidrio deslustrado es la hemorragia alrededor.",
     "**Aspergiloma (bola fúngica)**: el hongo coloniza una cavidad que ya existía, como una **caverna de TB**, una sarcoidosis o un enfisema. Puede no dar síntomas o dar hemoptisis, incluso masiva.",
     "**ABPA (alérgica)**: en asma o fibrosis quística. Es una hipersensibilidad **tipo I y III (Th2)**: sibilancias, tapones de moco marrón, eosinofilia e **IgE alta**.",
     "**Otras crónicas**: otomicosis (*A. niger*, el \"oído de nadador\"), sinusitis y aspergiloma del seno maxilar."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**KOH**: poco sensible.",
     "**Histopatología con PAS**: muestra las hifas invadiendo vasos.",
     "**Cultivo**: ASG con antibiótico a 26 °C y BHI a 37 °C; crece en 1–3 días.",
     "**Galactomanano en suero**: sirve para el diagnóstico precoz.",
     "**Inmunodifusión**: sensibilidad de 90–98 % en aspergiloma, 80–85 % en invasiva y 50–55 % en alérgica.",
     "**ABPA**: IgE total alta, IgE e IgG anti-*Aspergillus* altas y prueba cutánea positiva."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.**"
   },
   {
    "t": "lista",
    "items": [
     "Invasiva: **voriconazol** (gold estándar); alternativas isavuconazol o anfotericina B liposomal.",
     "Profilaxis en neutropenia: **posaconazol**.",
     "Aspergiloma: **cirugía**.",
     "ABPA: **corticoides + itraconazol**."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** Neutropénico + fiebre que no baja con antibióticos + signo del halo + galactomanano positivo = aspergilosis invasiva → voriconazol."
   }
  ]
 },
 {
  "id": "micro-zigomicetos",
  "grupo": "Resumen por microorganismo",
  "titulo": "Zigomicetos: Mucor, Rhizopus (mucormicosis)",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué son.** Son mohos del orden Mucorales (clase Zygomycetes): *Mucor*, *Rhizopus*, *Rhizomucor* y *Absidia*. La enfermedad tiene varios nombres: zigomicosis, cigomicosis, mucormicosis o ficomicosis. Es una micosis oportunista clásica y la de **evolución más rápida**."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconocen.**"
   },
   {
    "t": "lista",
    "items": [
     "**Hifas anchas, no tabicadas (cenocíticas)**, con ramificación irregular.",
     "Se reproducen por **esporangiosporas**, que se forman dentro de un esporangio. Su forma sexual son las zigosporas.",
     "En el cultivo crecen muy rápido: colonias algodonosas en 3–4 días."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde viven y cómo llegan.** Están en materia orgánica en descomposición, suelo, estiércol, frutas y alimentos con muchos azúcares. Entran por inhalación (senos paranasales y pulmón), por ingestión o por inoculación en piel herida. En personas sanas casi no causan enfermedad."
   },
   {
    "t": "p",
    "texto": "**Cómo enferman.** La clave es el **hierro**. En la **cetoacidosis diabética** hay más hierro libre, y estos hongos lo captan con alta afinidad, así que crecen explosivamente en diabéticos descompensados. Además:"
   },
   {
    "t": "lista",
    "items": [
     "Sus proteínas **CotH** se unen al receptor **GRP78** del endotelio e invaden los vasos.",
     "Esa invasión trae trombosis, isquemia y necrosis, que se ve como una **escara negra**.",
     "Tienen enzimas hidrolíticas, termotolerancia y resistencia a la fagocitosis."
    ]
   },
   {
    "t": "p",
    "texto": "Los factores de riesgo son **diabetes no controlada** y **neutropenia**; también leucemia, desnutrición, drogas IV, quemaduras, heridas y catéteres."
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**Rinocerebral (la más frecuente)**: empieza con dolor facial, congestión nasal y cefalea. La alarma son las **costras negras en el paladar o en los cornetes**. Puede subir a órbita y cerebro.",
     "**Pulmonar**: fiebre alta, dolor pleurítico y hemoptisis que puede ser masiva. A diferencia de la aspergilosis, que tarda semanas, aquí la destrucción ocurre en **días**. En la TAC se ve el **signo del halo invertido o del atolón**: vidrio deslustrado al centro rodeado de un anillo de consolidación.",
     "**Diseminada**: cerebro (delirio, coma), bazo, corazón. También hay formas intestinal y cutánea."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.** Se basa en **ver las hifas anchas sin septos en el tejido**: biopsia, KOH e histopatología, donde las hifas ocluyen los vasos. Muestras: secreciones, esputo, biopsias, sangre o LCR. Se cultiva en ASG con antibiótico a 26 °C y en medio enriquecido a 37 °C. El β-D-glucano **no** los detecta."
   },
   {
    "t": "p",
    "texto": "**Tratamiento.** Tiene tres pilares:"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Anfotericina B liposomal.**",
     "**Desbridamiento quirúrgico urgente.**",
     "**Corregir la causa**: controlar la glucemia y la inmunosupresión."
    ]
   },
   {
    "t": "p",
    "texto": "Las alternativas son posaconazol o isavuconazol."
   },
   {
    "t": "p",
    "texto": "**No olvides.** Diabético en cetoacidosis + costra negra en el paladar = mucormicosis → anfotericina B + cirugía. Hifas anchas sin septos = zigomicetos; septadas a 45° = *Aspergillus*."
   }
  ]
 },
 {
  "id": "micro-fusarium",
  "grupo": "Resumen por microorganismo",
  "titulo": "Fusarium spp.",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un moho hialino (Ascomycota, Sordariomycetes, Hypocreales, Nectriaceae). Hay unas 50 especies: ***F. solani*** (la más virulenta, causa la mitad de los casos invasivos), *F. oxysporum* y *F. moniliforme*. Es una micosis oportunista **emergente**; en algunos centros ya es la 2.ª causa de infección por hongos filamentosos, después de *Aspergillus*."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "**Hifas septadas** que se ramifican en ángulo agudo o recto.",
     "Microconidias y **macroconidias en forma de canoa o plátano**.",
     "Colonias algodonosas o aterciopeladas de colores **rosado, violeta, púrpura o rojo**."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Vive en el suelo y ataca plantas. El **90 %** de las infecciones entra por vía respiratoria, con aerosoles del ambiente o del agua del hospital; el **10 %** entra por la piel. También entra por trauma en la córnea (queratitis)."
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.**"
   },
   {
    "t": "lista",
    "items": [
     "**Invade vasos**, como *Aspergillus*: causa trombosis y necrosis, y además **pasa a la sangre**.",
     "Produce micotoxinas (**tricotecenos**), que inhiben la síntesis de proteínas.",
     "Sus adhesinas se pegan a lentes de contacto y catéteres, y forma biofilm.",
     "Arma \"murallas\" de hifas para frenar a los neutrófilos.",
     "Tiene **resistencia intrínseca** a varios antifúngicos."
    ]
   },
   {
    "t": "p",
    "texto": "Los factores de riesgo son **neutropenia prolongada**, corticoides, cáncer y trasplante."
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**Lesiones cutáneas (70–80 % de los diseminados)**: nódulos rojos, dolorosos, con **centro necrótico negro** (parecidos al ectima gangrenoso), varios a la vez en todo el cuerpo.",
     "**Fiebre refractaria** a antibióticos y a los antifúngicos iniciales.",
     "**Pulmón**: tos, dolor y disnea, con un **signo del halo idéntico al de la aspergilosis**.",
     "**Seno-nasal**: puede necrosar la cara.",
     "Caso de la clase: mujer de 19 años con leucemia mieloide aguda y neutropenia febril. El galactomanano salió negativo, aparecieron nódulos necróticos en la piel y el hemocultivo dio *Fusarium*."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.** Lo que lo distingue: **el hemocultivo sale positivo en ~40 %**, mientras que en la aspergilosis suele salir negativo. Además se hace biopsia de las lesiones, KOH, histopatología y cultivo."
   },
   {
    "t": "p",
    "texto": "**Tratamiento.** **Voriconazol** IV/VO es la primera línea, con o sin **anfotericina B liposomal**. Posaconazol en casos graves (terapia combinada). Si es cutánea localizada, evaluar cirugía."
   },
   {
    "t": "p",
    "texto": "**No olvides.** Neutropénico + nódulos cutáneos negros dolorosos + **hemocultivo positivo** = *Fusarium*. Macroconidias en canoa y colonia rosada-violeta."
   }
  ]
 },
 {
  "id": "micro-candida",
  "grupo": "Resumen por microorganismo",
  "titulo": "Candida spp.",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es una levadura del reino Fungi, división Eumycota. Hay unas 200 especies y más de 15 son patógenas. Es la causa más frecuente de micosis oportunista: produce el 25 % de las micosis superficiales y el **75–88 % de las infecciones fúngicas intrahospitalarias**."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "Levaduras ovaladas de 3–14 µm que se reproducen por **gemación** (blastoconidias).",
     "Es **polimórfica**: según la especie forma pseudohifas, hifas verdaderas y **clamidoconidias**.",
     "Es levadura cuando vive como saprofito e hifa cuando invade tejido.",
     "Su pared tiene manano, proteínas y quitina.",
     "En el Gram se ve como **levadura Gram positiva**.",
     "Colonias cremosas, lisas y blancas brillantes en 48–72 h."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Vive normalmente en nuestras mucosas (boca, intestino, vagina, piel). Por eso casi siempre la infección es **endógena**: algo rompe el equilibrio y crece de más. También puede ser **exógena**:"
   },
   {
    "t": "lista",
    "items": [
     "Por catéteres, válvulas o equipos contaminados.",
     "De madre con candidiasis vaginal a recién nacido.",
     "Por las manos del personal de UCI."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.** *Candida* no ataca primero: **aprovecha una oportunidad**. Puede ser que los antibióticos maten la flora que la controla, que un catéter o una mucosa dañada rompan la barrera, o que el paciente esté inmunosuprimido. Una vez dentro usa:"
   },
   {
    "t": "lista",
    "items": [
     "El **cambio de levadura a hifa**, que le permite invadir; sobre todo *C. albicans*.",
     "**Adhesinas ALS**, para pegarse a epitelio y dispositivos.",
     "**Biofilm**, que la protege de fármacos e inmunidad (sobre todo *C. parapsilosis*).",
     "Proteasas, fosfolipasas y lipasas."
    ]
   },
   {
    "t": "p",
    "texto": "Otros predisponentes: diabetes, embarazo, edades extremas, corticoides, VIH y neutropenia."
   },
   {
    "t": "p",
    "texto": "**Especies que debes diferenciar.**"
   },
   {
    "t": "lista",
    "items": [
     "***C. albicans***: la más frecuente y la más virulenta. Forma hifas verdaderas y tiene **tubo germinal positivo**. Suele ser sensible.",
     "***C. glabrata***: **no forma hifas**. Se ve en ancianos y hospitalizados, y en vaginitis **recurrente**. Es poco sensible a los azoles.",
     "***C. tropicalis***: muy invasiva; se asocia a **neutropenia** y candidiasis diseminada.",
     "***C. parapsilosis***: biofilm muy potente; típica de **catéteres y neonatos**.",
     "***C. krusei***: **resistente intrínseca al fluconazol**.",
     "***C. auris***: emergente, **multirresistente**, causa brotes hospitalarios y persiste en el ambiente.",
     "***C. dubliniensis***: se parece a *C. albicans*. Causa candidiasis oral en **VIH**, rara vez es invasiva y es sensible al fluconazol."
    ]
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**Mucosas (lo más frecuente)**:",
     "  **Muguet**: placas blancas que se desprenden, sobre una base roja. Se ve en lactantes, VIH y usuarios de corticoides inhalados.",
     "  **Esofagitis**: dolor y dificultad para tragar. Es una extensión de la candidiasis oral en VIH avanzado.",
     "  **Vulvovaginitis**: prurito intenso y flujo blanco grumoso, como requesón.",
     "  Balanitis.",
     "**Piel**: **intertrigo** en pliegues, con eritema y **lesiones satélite**; también paroniquia y onicomicosis.",
     "**Invasiva**:",
     "  La **candidemia** es la forma más común: fiebre persistente sin foco que no responde a antibióticos, en pacientes de UCI con catéter venoso.",
     "  También endocarditis (prótesis, drogas IV), meningitis (neonatos) y forma diseminada a hígado, bazo y riñón."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**Directo**: KOH y Gram.",
     "**Cultivo**: ASG + cloranfenicol, agar Mycobiotic y **CHROMagar** (diferencia especies por color).",
     "**Tubo germinal**: filamenta en suero a 37 °C en **2–3 h** = *C. albicans*.",
     "**Microcultivo** en agar harina de maíz o arroz: clamidoconidias.",
     "**Diferenciar *C. albicans* de *C. dubliniensis***: *C. albicans* crece a 42 °C, asimila xilosa y es verde claro en CHROMagar. *C. dubliniensis* no crece a 42 °C y es verde oscuro.",
     "MALDI-TOF y antifungigrama.",
     "Recuerda: si sale en **sangre**, es infección invasiva grave."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.**"
   },
   {
    "t": "lista",
    "items": [
     "**Superficial: azoles tópicos o sistémicos**.",
     "  Oral: nistatina o clotrimazol (fluconazol si hay VIH).",
     "  Vaginal: clotrimazol o miconazol en crema, o **fluconazol 150 mg en una sola dosis**.",
     "**Invasiva: equinocandina** (caspofungina, micafungina); fluconazol solo si el paciente está estable y la cepa es sensible.",
     "*C. krusei*: **nunca fluconazol**.",
     "*C. auris*: **antifungigrama obligatorio**.",
     "Si hay biofilm en el catéter: **retirar el catéter**.",
     "Endocarditis: anfotericina B ± flucitosina."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** Tubo germinal positivo = *C. albicans*. *C. glabrata* no hace hifas. *C. krusei* es resistente al fluconazol. Superficial se trata con azol; invasiva con equinocandina."
   }
  ]
 },
 {
  "id": "micro-cryptococcus",
  "grupo": "Resumen por microorganismo",
  "titulo": "Cryptococcus neoformans y C. gattii",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es una **levadura encapsulada** del grupo Basidiomycota (familia Filobasidiaceae). Su forma sexual se llama *Filobasidiella*. Hay tres tipos que debes conocer:"
   },
   {
    "t": "lista",
    "items": [
     "***C. neoformans* var. *grubii*** (serotipo A): ~95 % de los casos en el mundo; ataca a inmunocomprometidos, sobre todo con VIH.",
     "***C. neoformans* var. *neoformans*** (serotipo D): Europa y zonas templadas.",
     "***C. gattii*** (serotipos B y C): ataca a **inmunocompetentes**, en zonas tropicales y subtropicales."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "Levadura ovalada de 4–6 µm que se reproduce por **gemación y no forma hifas**.",
     "Está rodeada de una **cápsula de glucuronoxilomanano (GXM)**, hecha de xilosa, manosa y ácido glucurónico.",
     "Produce **melanina**.",
     "En el ambiente (25 °C) produce **basidiosporas**; en el huésped (37 °C) vive como levadura y su cápsula **crece**."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** *C. neoformans* vive en el **excremento de palomas** y otras aves, que es rico en nitrógeno y creatinina. *C. gattii* vive en el suelo y en **eucaliptos**. Se contagia por **inhalación** de basidiosporas o de levaduras secas, que se rehidratan en el alvéolo."
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.**"
   },
   {
    "t": "lista",
    "items": [
     "**Cápsula**: impide la fagocitosis, la opsonización y la quimiotaxis. Es el **principal factor de virulencia**.",
     "**Melanina**: lo protege del estrés oxidativo y de algunos antifúngicos.",
     "**Ureasa**: le permite atravesar la **barrera hematoencefálica**; por eso causa meningitis. La fenol oxidasa también ayuda a ese neurotropismo.",
     "**\"Caballo de Troya\"**: sobrevive dentro del macrófago y viaja en él por la sangre hasta el SNC."
    ]
   },
   {
    "t": "p",
    "texto": "Quien lo controla son los **linfocitos T CD4+**. Por eso el paciente con VIH avanzado está en máximo riesgo."
   },
   {
    "t": "p",
    "texto": "**Clínica.** También se llama enfermedad de Busse-Buschke, blastomicosis europea o torulosis."
   },
   {
    "t": "lista",
    "items": [
     "**Pulmonar**: hasta el 50 % no da síntomas; puede dar tos, disnea y fiebre. En la imagen hay nódulos o infiltrados. *C. gattii* forma un **criptococoma**, una masa que parece tumor.",
     "**Meningitis (la más grave)**:",
     "  Se da en VIH con **CD4 < 100** y en trasplantados.",
     "  Es subaguda: cefalea progresiva y fiebre, luego confusión, cambios de personalidad y somnolencia, con papiledema e hipertensión intracraneal.",
     "  Con *C. neoformans* puede haber hidrocefalia; con *C. gattii*, criptococomas cerebrales y convulsiones.",
     "**Cutánea**: pápulas o nódulos que se ulceran y parecen acné o varicela. Significa que hay **enfermedad diseminada**.",
     "**Rara**: hueso, próstata, endocarditis."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**Tinta china** en LCR: levadura con un halo claro, que es la cápsula. Es positiva en 50–80 %.",
     "**Histología**: la **mucicarmina** tiñe la cápsula de rojo; el Grocott tiñe la pared de negro pero no la cápsula.",
     "**Cultivo**:",
     "  En Sabouraud da colonias **mucoides** de color crema.",
     "  En **agar Niger** (semilla de ave) da colonias marrones por la melanina.",
     "  **Ureasa positiva**.",
     "  En **medio CGB**, *C. gattii* crece y *C. neoformans* no.",
     "**Antígeno capsular GXM por látex** en LCR, suero u orina:",
     "  Tiene más del 90 % de sensibilidad y especificidad. Es el **gold standard práctico**.",
     "  Si el título sube, el pronóstico es malo.",
     "El β-D-glucano **no** detecta *Cryptococcus*."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento de la meningitis.**"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Inducción**: anfotericina B + flucitosina por 2 semanas.",
     "**Consolidación**: fluconazol a dosis alta por 8 semanas.",
     "**Mantenimiento**: fluconazol a dosis baja por al menos 1 año."
    ]
   },
   {
    "t": "p",
    "texto": "Además hay que controlar la presión intracraneal. En VIH **no se empieza el TAR de inmediato** porque hay riesgo de IRIS. La forma pulmonar leve se trata con fluconazol."
   },
   {
    "t": "p",
    "texto": "**No olvides.** VIH con CD4 < 100 + meningitis subaguda + tinta china positiva = *Cryptococcus*. Palomas = *C. neoformans*; eucalipto = *C. gattii*."
   }
  ]
 },
 {
  "id": "micro-histoplasma",
  "grupo": "Resumen por microorganismo",
  "titulo": "Histoplasma capsulatum",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un **hongo dimórfico térmico** y patógeno primario: puede enfermar también a personas sanas. La enfermedad tiene otros nombres: **enfermedad de Darling, fiebre de las cavernas o fiebre de Tingo María**. Hay dos variedades:"
   },
   {
    "t": "lista",
    "items": [
     "**var. *capsulatum***: América, incluido Perú. Es la importante.",
     "**var. *duboisii***: África. Sus levaduras son grandes (8–15 µm) y afecta sobre todo piel, hueso y ganglios."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.** Cambia de forma según la temperatura:"
   },
   {
    "t": "lista",
    "items": [
     "**A 25 °C (ambiente) es moho, la forma infectante.** Tiene hifas septadas delgadas, **microconidias** pequeñas (las que se inhalan) y **macroconidias grandes, de pared gruesa y espiculada (\"tuberculadas\")**.",
     "**A 37 °C (en el paciente) es levadura, la forma parasitaria.** Son levaduras **muy pequeñas, de 2–5 µm**, con gemación de base estrecha, y viven **dentro de los macrófagos**."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Vive en suelos ácidos con **guano de aves y murciélagos**, con 25–30 °C y 70–80 % de humedad."
   },
   {
    "t": "lista",
    "items": [
     "Zonas endémicas **abiertas**: trópico. Zonas **cerradas**: cuevas, gallineros, silos, nidos.",
     "En Perú: **Tingo María, Oxapampa, Pucallpa e Iquitos** (por ejemplo, Tunqui Cueva en Chontabamba).",
     "Se contagia por **inhalación de microconidias**; no pasa de persona a persona."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.** Es un \"espía\" dentro del macrófago:"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "Las microconidias llegan al alvéolo y, a 37 °C, se convierten en levadura.",
     "Su proteína **Hsp60** se une al receptor **CR3** del macrófago, así que entra sin hacer ruido.",
     "Su capa de **α-(1,3)-glucano** tapa los β-glucanos de la pared, y la **Dectina-1** no lo reconoce.",
     "Dentro del macrófago modula el fagolisosoma, neutraliza los radicales con catalasa y SOD, y capta hierro y calcio para multiplicarse.",
     "Viaja dentro del macrófago por la sangre a **hígado, bazo, médula ósea y ganglios**.",
     "La inmunidad celular (CD4, IFN-γ) arma **granulomas que se calcifican**, igual que en la TB."
    ]
   },
   {
    "t": "p",
    "texto": "En el inmunocompetente queda controlado; en el inmunodeprimido se disemina."
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**95 % asintomática** en sanos. Puede quedar un **histoplasmoma**: nódulo solitario calcificado en forma de diana.",
     "**Pulmonar aguda** (la forma sintomática más frecuente): cuadro gripal con fiebre, tos seca y dolor torácico. Hay infiltrados y **adenopatías hiliares**, y puede haber eritema nodoso.",
     "**Pulmonar crónica**: reactivación en pacientes con EPOC. Tos crónica, hemoptisis, pérdida de peso y **cavitaciones apicales**: es **idéntica a la TB**.",
     "**Diseminada progresiva** (la más grave): VIH con **CD4 < 150**. Fiebre prolongada, **hepatoesplenomegalia**, adenopatías, **pancitopenia** (porque invade la médula) y úlceras orales y cutáneas. Puede llegar a shock."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**Giemsa o Wright** en médula ósea o sangre: levaduras pequeñas dentro de los macrófagos. En biopsia se usa PAS.",
     "**Cultivo (gold standard)** en Sabouraud: algodonoso a 25 °C y cremoso a 37 °C, lo que demuestra el dimorfismo. Su problema es que es **lento: 2–6 semanas**.",
     "**Antígeno en orina** (muy sensible) y en suero: es la prueba más útil en VIH y en enfermedad diseminada.",
     "**Anticuerpos** (fijación de complemento, inmunodifusión): un título > 1/16 sugiere enfermedad activa, pero pueden salir negativos en inmunosuprimidos.",
     "**Histoplasmina**: positiva en el 80 % de la población de zonas endémicas."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.**"
   },
   {
    "t": "lista",
    "items": [
     "Aguda leve: observación.",
     "Moderada: **itraconazol** VO por 6–12 semanas.",
     "Crónica: itraconazol por al menos 12 meses.",
     "Diseminada: **anfotericina B IV** como inducción, luego itraconazol.",
     "VIH: profilaxis secundaria con itraconazol hasta que los CD4 pasen de 150."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** Explorador de cuevas en la selva + cuadro parecido a TB = histoplasmosis. Levaduras diminutas dentro de macrófagos. VIH con pancitopenia y hepatoesplenomegalia → antígeno en orina."
   }
  ]
 },
 {
  "id": "micro-paracoccidioides",
  "grupo": "Resumen por microorganismo",
  "titulo": "Paracoccidioides brasiliensis",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un **hongo dimórfico térmico**, endémico de América Latina (Brasil, Perú, Colombia, Venezuela). La enfermedad tiene otros nombres: **blastomicosis sudamericana o latinoamericana, enfermedad de Lutz-Splendore**. Es una micosis crónica, granulomatosa **no caseificante** y supurativa, que afecta muchos órganos."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "**A 25 °C es moho**: hifas septadas con **microconidias** (la forma que se inhala). Las colonias son cerebriformes y blanquecinas.",
     "**A 37 °C es levadura grande (10–30 µm)**, de doble pared, con **gemación múltiple** de base estrecha: varias hijas alrededor de la madre, en forma de **\"timón de barco\"**. Ver esto es prácticamente el diagnóstico."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Vive en el suelo húmedo con materia orgánica: **cafetales, tabacales** y orillas de ríos. Se contagia por **inhalación de conidias** y no pasa de persona a persona. Afecta sobre todo a **hombres agricultores (9:1)**, porque los **estrógenos impiden que la conidia se convierta en levadura**. Tabaco, alcohol y desnutrición favorecen que progrese. Es más frecuente con lluvias."
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.**"
   },
   {
    "t": "lista",
    "items": [
     "Al igual que *Histoplasma*, esconde sus β-glucanos con **α-1,3-glucano** y así evade al macrófago.",
     "La **gp43** le sirve para adherirse e inmunomodular, y es el **principal antígeno diagnóstico**.",
     "Tiene adhesinas a fibronectina, laminina y colágeno, además de melanina y enzimas.",
     "Todo depende de la respuesta del paciente: si predomina **Th1**, se forman granulomas, se controla y queda latente. Si predomina **Th2**, el hongo se disemina. Resumen: **\"Th1 protege, Th2 empeora\"**.",
     "Desde el pulmón viaja a **mucosas, ganglios, piel y suprarrenales**.",
     "Puede quedar latente y reactivarse con inmunosupresión o desnutrición."
    ]
   },
   {
    "t": "p",
    "texto": "**Clínica.** Hay dos formas:"
   },
   {
    "t": "lista",
    "items": [
     "**Aguda o juvenil (5–10 %)**: niños y jóvenes; avanza rápido.",
     "  **Ganglios grandes y dolorosos** que supuran y fistulizan (cervicales y submandibulares).",
     "  **Hepatoesplenomegalia.**",
     "  Fiebre y pérdida de peso.",
     "  Afecta la médula: anemia y pancitopenia.",
     "  Lesiones en la piel.",
     "**Crónica del adulto (85–90 %, la más frecuente)**: hombre rural fumador; avanza lento.",
     "  **Pulmón** (lo más común): tos, expectoración y disnea; infiltrados bilaterales y fibrosis. **Parece TB**.",
     "  **Úlceras en la boca \"moriformes\"** (como mora): en encías, paladar, labios y nariz. Son dolorosas y casi diagnósticas.",
     "  Piel verrugosa.",
     "  **Suprarrenales**: insuficiencia que imita la **enfermedad de Addison** (fatiga, hipotensión, hiperpigmentación).",
     "  SNC rara vez."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**KOH o Giemsa/PAS** de esputo, lavado broncoalveolar o raspado de úlceras orales: se ve el \"timón de barco\".",
     "**Biopsia**: granulomas con levaduras multigemantes (PAS, Grocott).",
     "**Cultivo** en Sabouraud: muestra el dimorfismo pero es **lento (2–4 semanas)**, así que no sirve para un diagnóstico rápido.",
     "**Anticuerpos anti-gp43** (inmunodifusión, ELISA): muy usados. Si los **títulos bajan, el tratamiento está funcionando**."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.**"
   },
   {
    "t": "lista",
    "items": [
     "Leve o moderada: **itraconazol VO por 6–12 meses** (elección).",
     "Alternativa: **TMP-SMX** por 12–24 meses, útil en zonas rurales.",
     "Grave o diseminada: **anfotericina B IV por 2–4 semanas**, luego itraconazol."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** **Tip ENAM**: paciente rural con cuadro de TB y **baciloscopía negativa** + úlceras orales moriformes = paracoccidioidomicosis. Timón de barco. Los estrógenos protegen a las mujeres."
   }
  ]
 },
 {
  "id": "micro-blastomyces",
  "grupo": "Resumen por microorganismo",
  "titulo": "Blastomyces dermatitidis",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un **hongo dimórfico térmico** del grupo Ascomycota, aerobio y heterótrofo (se alimenta de materia orgánica). Hay dos especies: *B. dermatitidis* y *B. gilchristii*. Causa la **blastomicosis**, una micosis sistémica endémica de **Norteamérica**. No hay que confundirla con la \"blastomicosis sudamericana\", que es *Paracoccidioides*."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "**A 25–30 °C es moho**: hifas hialinas septadas con conidios redondos u ovalados en la punta, con aspecto de **\"paleta\" o \"lollipop\"**.",
     "**A 37 °C es levadura grande (8–15 µm)**, de **pared gruesa y refringente**, con **gemación única de base ancha**. Esa es su firma en el tejido."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.**"
   },
   {
    "t": "lista",
    "items": [
     "Vive en **suelos húmedos y arenosos**, ricos en materia orgánica y cerca del agua.",
     "Está en EE. UU. y Canadá: Grandes Lagos y cuencas de los ríos Ohio y Misisipi.",
     "Se contagia por inhalación al remover tierra.",
     "**Riesgo**: construcción y excavaciones, tala y trabajo forestal, caza, pesca y campamentos, manejo de compost.",
     "**Datos del seminario**: ≤ 2 casos por 100 000 habitantes al año en EE. UU.; en Minnesota (2024), 1,5 por 100 000 y 66 % hombres; unas 11 776 hospitalizaciones entre 2010 y 2020."
    ]
   },
   {
    "t": "p",
    "texto": "**Clínica.**"
   },
   {
    "t": "lista",
    "items": [
     "**Pulmonar**: va desde ningún síntoma hasta neumonía grave. Da tos persistente, fiebre, dolor torácico, disnea y pérdida de peso.",
     "**Cutánea**: lesiones **verrugosas**, nodulares o ulceradas, únicas o múltiples, en cara, cuello, extremidades y tronco. Pueden fistulizar.",
     "**Extrapulmonar** (se disemina por sangre desde el pulmón):",
     "  **Piel**: la más frecuente.",
     "  Hueso: osteomielitis.",
     "  Aparato genitourinario.",
     "  SNC (meningitis o abscesos, raro).",
     "  Suprarrenales, hígado y bazo."
    ]
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "Muestras: esputo, tejido o lesiones de piel.",
     "Al microscopio se busca la levadura grande con gemación de base ancha.",
     "**Cultivo = prueba de referencia**: en Sabouraud a 25–30 °C crece como moho (hifas con conidios) y a 37 °C como levadura.",
     "**PCR**: alta sensibilidad y especificidad; se usa para confirmar enfermedad diseminada."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.** El seminario no lo incluye. Como referencia general, se usa itraconazol en casos leves a moderados y anfotericina B en casos graves o con compromiso del SNC."
   },
   {
    "t": "p",
    "texto": "**No olvides.** Base **ancha** = *Blastomyces*. Base **estrecha** y múltiple (timón) = *Paracoccidioides*. Pequeña dentro del macrófago = *Histoplasma*."
   }
  ]
 },
 {
  "id": "micro-sporothrix",
  "grupo": "Resumen por microorganismo",
  "titulo": "Sporothrix schenckii",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un **hongo dimórfico térmico** que causa la **esporotricosis**, el ejemplo clásico de **micosis subcutánea**. Llega por un trauma en la piel y avanza por los linfáticos."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.**"
   },
   {
    "t": "lista",
    "items": [
     "**A 25–28 °C es moho.** Tiene hifas finas (1–2 µm) septadas, con conidios agrupados en **\"roseta\" o \"margarita\"** en la punta del conidióforo. En Sabouraud forma colonias **oscuras, arrugadas y membranosas**.",
     "**A 37 °C es levadura.** Son levaduras **alargadas, en forma de \"cigarro\" o \"puro\"**. En BHI o agar sangre forma colonias cremosas, suaves y blanco-amarillentas.",
     "**En el tejido** se ve el **cuerpo asteroide** (fenómeno de Splendore-Hoeppli): una levadura central rodeada de complejos antígeno-anticuerpo eosinófilos.",
     "Es heterótrofo y saprofito, crece a 37 °C, produce **melanina** y secreta proteasas."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.**"
   },
   {
    "t": "lista",
    "items": [
     "Vive en suelo, plantas, madera, musgo y especialmente en las **espinas de rosas**.",
     "Entra por **inoculación traumática**: una espina, una astilla o material contaminado. También por **arañazos o mordeduras de gatos** infectados.",
     "No suele pasar de persona a persona.",
     "**Riesgo**: jardineros, agricultores, trabajadores forestales y quienes manipulan tierra o madera.",
     "**En Perú**: frecuencia **alta en la costa norte y la selva**, media en otras zonas tropicales y baja en zonas andinas y la costa central."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.** La termotolerancia le permite pasar a levadura a 35–37 °C, que es la forma que vive en el cuerpo. La melanina lo protege del estrés oxidativo y de la fagocitosis. Las enzimas le permiten invadir y luego avanzar por los vasos linfáticos."
   },
   {
    "t": "p",
    "texto": "**Clínica.** La incubación es de **1–3 semanas** (rango de 7 días a 3 meses)."
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Fase inicial**: aparece una pápula o nódulo indoloro donde entró la espina. Parece una picadura.",
     "**Fase linfocutánea**: salen nódulos nuevos **en cadena ascendente** siguiendo el linfático. Se ulceran y drenan pus o líquido seroso."
    ]
   },
   {
    "t": "p",
    "texto": "La localización más común son los **miembros superiores (70–80 %)**; en niños, la cara. Puede complicarse con cronicidad o infección bacteriana agregada. En inmunosuprimidos puede llegar a huesos, articulaciones o pulmón."
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**Muestras**: aspirado de nódulos o pus, biopsia del borde activo de la úlcera, exudado, esputo o lavado broncoalveolar, líquido sinovial.",
     "**Examen directo**: KOH 10–20 % (se ve poco) o frotis teñido con PAS, Grocott o Gram (se ve mejor).",
     "**Cultivo micológico = gold standard**. Su desventaja es que es lento.",
     "**Prueba de dimorfismo**: se resiembra de 25 °C a 37 °C y debe convertirse en levadura.",
     "**PCR y MALDI-TOF**: rápidos, específicos y llegan hasta la especie.",
     "**Serología** (ELISA, inmunodifusión): busca anticuerpos.",
     "Se trabaja en bioseguridad nivel 2."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.** El seminario no lo incluye. Como referencia general, el de elección es itraconazol."
   },
   {
    "t": "p",
    "texto": "**No olvides.** Jardinero que se pinchó con una rosa (o lo arañó un gato) + nódulos en cadena que suben por el brazo = esporotricosis. Margarita a 25 °C, cigarro a 37 °C y cuerpo asteroide en el tejido."
   }
  ]
 },
 {
  "id": "micro-cromoblastomicosis",
  "grupo": "Resumen por microorganismo",
  "titulo": "Fonsecaea pedrosoi y agentes de cromoblastomicosis",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué son.** Son hongos **dematiáceos**: tienen melanina en la pared y por eso se ven de color café o negro. Pertenecen al orden Chaetothyriales y causan la **cromoblastomicosis**, una micosis subcutánea crónica. Las especies son:"
   },
   {
    "t": "lista",
    "items": [
     "***Fonsecaea pedrosoi***: América; la principal.",
     "*Fonsecaea monophora*.",
     "***Cladophialophora carrionii***: zonas áridas.",
     "*Phialophora verrucosa*.",
     "*Rhinocladiella aquaspersa*."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo se reconocen.**"
   },
   {
    "t": "lista",
    "items": [
     "**En el tejido (37 °C)**: los **cuerpos muriformes o escleróticos** (células fumagoides). Son células redondas color café de **6–12 µm**, con tabiques en varias direcciones, como una mora. Todas las especies se ven **iguales** en el tejido.",
     "**En el cultivo (25–30 °C)**: moho septado y **pigmentado oscuro**. Las especies se diferencian por la forma de sus conidios.",
     "Son saprofitos del suelo y la madera, aerobios, con proteasas y celulasas. Crecen lento: **2–4 semanas**."
    ]
   },
   {
    "t": "p",
    "texto": "**Dónde viven y cómo llegan.**"
   },
   {
    "t": "lista",
    "items": [
     "Viven en el suelo, la madera y la vegetación de zonas **tropicales y subtropicales**: Centroamérica, norte de Sudamérica, África, China y el Pacífico.",
     "Entran por un **traumatismo con espinas, astillas o material vegetal**.",
     "**Riesgo**: trabajo rural y contacto frecuente con tierra y plantas.",
     "**En Perú** (revisión 2011–2024, 13 casos): 84 % hombres, 77 % se infectaron en la **Amazonía** (Ucayali, San Martín), edad mediana 65,3 años."
    ]
   },
   {
    "t": "p",
    "texto": "**Cómo enferman.** La **melanina** de la pared es su principal factor de virulencia: los protege de la respuesta inmune. Dentro del tejido se transforman en cuerpos muriformes, que son muy resistentes y mantienen una infección crónica de piel y tejido subcutáneo durante años."
   },
   {
    "t": "p",
    "texto": "**Clínica.** Es una infección **crónica de la piel y el tejido subcutáneo**. Las lesiones pueden ser:"
   },
   {
    "t": "lista",
    "items": [
     "Placas verrugosas.",
     "Nódulos.",
     "Lesiones tumorales.",
     "Superficies costrosas.",
     "Lesiones **en coliflor**."
    ]
   },
   {
    "t": "p",
    "texto": "Suelen tener **puntos negros** en la superficie y un borde activo. Están sobre todo en los **miembros inferiores** y otras zonas expuestas. Las cicatrices retraen la piel y limitan el movimiento."
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**Examen directo con KOH 10–20 %** de raspado o costras: los **cuerpos muriformes** son el hallazgo característico.",
     "**Cultivo en agar Sabouraud dextrosa**: moho dematiáceo (oscuro). Permite identificar la especie."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.** La clase no lo incluye, y es difícil y prolongado. Como referencia general, se usa itraconazol, a veces combinado con medidas físicas o cirugía en lesiones pequeñas."
   },
   {
    "t": "p",
    "texto": "**No olvides.** Agricultor de la Amazonía con placa verrugosa en coliflor en la pierna + cuerpos muriformes café en el KOH = cromoblastomicosis (*Fonsecaea pedrosoi*)."
   }
  ]
 },
 {
  "id": "micro-dermatofitos",
  "grupo": "Resumen por microorganismo",
  "titulo": "Dermatofitos: Trichophyton rubrum, Microsporum canis, Epidermophyton floccosum",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué son.** Son mohos hialinos con hifas septadas y ramificadas que **se alimentan de queratina**. Causan las **dermatofitosis o tiñas**: infecciones de **piel, pelo y uñas** que no invaden órganos internos. Afectan al 20–25 % de la población mundial y son más frecuentes con calor y humedad."
   },
   {
    "t": "p",
    "texto": "**Cómo comen queratina.** Su nutrición es heterótrofa por absorción: digieren afuera y absorben adentro."
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "El **sulfito** rompe los puentes disulfuro de la queratina, así que la queratina queda expuesta.",
     "Las **proteasas y queratinasas** la cortan en péptidos y aminoácidos.",
     "El hongo los absorbe y los usa para producir energía (ATP) y crecer."
    ]
   },
   {
    "t": "p",
    "texto": "Por eso solo viven en la capa córnea, el pelo y las uñas."
   },
   {
    "t": "p",
    "texto": "**Antropófilos y zoófilos.** Un antropófilo vive en humanos; un zoófilo vive en animales. En el estudio del Instituto de Medicina Tropical Daniel A. Carrión (UNMSM, 4961 casos, 1976–2015):"
   },
   {
    "t": "lista",
    "items": [
     "El **93,11 %** fueron antropófilos.",
     "***T. rubrum*** dominó las cuatro décadas y subió de 67 % a 80 %.",
     "*M. canis* superó a *T. mentagrophytes* entre los zoófilos.",
     "*E. floccosum* se mantuvo siempre por debajo del 10 %."
    ]
   },
   {
    "t": "h",
    "texto": "Trichophyton rubrum"
   },
   {
    "t": "lista",
    "items": [
     "**Tipo**: **antropófilo**; es el dermatofito más frecuente del mundo (50–90 % de los casos). Se contagia persona a persona, por contacto con lesiones o por fómites (escamas y restos de uña).",
     "**Microscopio**: **microconidios abundantes, pequeños, en forma de lágrima, a los lados de la hifa: \"pájaros sobre un alambre\"**. Los macroconidios son escasos, lisos, en forma de lápiz o cigarro.",
     "**Colonia**: blanca y algodonosa por arriba, con **reverso rojo vinoso**.",
     "**Clínica**: tinea pedis (pie de atleta, a veces \"en mocasín\"), cruris (ingle), corporis (anillos con borde descamativo), unguium (uña gruesa y amarilla) y manuum. También el **síndrome de una mano y dos pies**. Casi nunca invade el pelo.",
     "**Tratamiento**: terbinafina tópica; terbinafina oral si es extensa o afecta las uñas."
    ]
   },
   {
    "t": "h",
    "texto": "Microsporum canis"
   },
   {
    "t": "lista",
    "items": [
     "**Tipo**: **zoófilo**; viene de **gatos y perros**. Es causa importante de tiña en **niños**.",
     "**Microscopio**: **macroconidios abundantes, grandes, fusiformes, de pared gruesa y rugosa, con puntas agudas** y muchos tabiques. Los microconidios son escasos.",
     "**Colonia**: blanca y algodonosa o lanosa, con **reverso amarillento**.",
     "**Clínica**: **tinea capitis** (placas de alopecia con descamación grisácea y pelos quebradizos). Puede formar un **querion de Celso**: una placa inflamada, dolorosa, con pus y alopecia. También tinea corporis y faciei. En el pelo hace invasión **ectothrix**.",
     "**Tratamiento**: terbinafina o clotrimazol tópicos en la piel. En el cuero cabelludo: **griseofulvina oral**, que funciona mejor que la terbinafina."
    ]
   },
   {
    "t": "h",
    "texto": "Epidermophyton floccosum"
   },
   {
    "t": "lista",
    "items": [
     "**Tipo**: **antropófilo**.",
     "**Microscopio**: **no tiene microconidios**. Solo tiene macroconidios lisos, de pared delgada, **en forma de maza o palo de golf (claviformes)**, solos o en grupos.",
     "**Colonia**: aterciopelada o pulverulenta, primero amarilla y luego **verde oliva o caqui**.",
     "**Clínica**: pie, ingle, cuerpo, uñas y manos. **Nunca invade el pelo.**",
     "**Tratamiento**: terbinafina o clotrimazol tópicos; terbinafina oral si es extensa o afecta las uñas."
    ]
   },
   {
    "t": "h",
    "texto": "Diagnóstico de los tres"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "Raspar el **borde activo** de la lesión, debajo de la uña, o tomar pelos afectados.",
     "**KOH 10–20 %**: hifas hialinas septadas y artroconidias. Es rápido pero no dice la especie.",
     "**Cultivo en Sabouraud o Mycosel a 25–30 °C**, durante 1–3 semanas: color y reverso de la colonia.",
     "**Microcultivo con azul de lactofenol**: forma de los conidios. Es lo que define la especie.",
     "**PCR o secuenciación de la región ITS** si hay duda. **La serología no se usa.**"
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** Reverso rojo vinoso = *T. rubrum*. Gato + niño con alopecia = *M. canis* → griseofulvina. Sin microconidios y nunca en el pelo = *Epidermophyton*."
   }
  ]
 },
 {
  "id": "micro-pneumocystis",
  "grupo": "Resumen por microorganismo",
  "titulo": "Pneumocystis jirovecii",
  "subtitulo": "",
  "bloques": [
   {
    "t": "p",
    "texto": "**Qué es.** Es un **hongo oportunista** que afecta casi solo al pulmón. Durante mucho tiempo se consideró un **protozoo**, pero los estudios moleculares y filogenéticos demostraron que es del **reino Fungi**. Aun así, tiene rasgos que lo separan de otros hongos."
   },
   {
    "t": "p",
    "texto": "**Cómo se reconoce.** Tiene tres formas en su ciclo de vida:"
   },
   {
    "t": "lista",
    "items": [
     "**Forma trófica**: crece y se reproduce.",
     "**Quiste (asco)**: es la forma resistente y tiene esporozoítos dentro. Es redondo, ovalado o en media luna, de unos 7 µm, y se agrupa en racimos dentro del alvéolo.",
     "**Esporozoítos**: se liberan del quiste y se vuelven nuevas formas tróficas."
    ]
   },
   {
    "t": "p",
    "texto": "El ciclo es: esporozoítos → formas tróficas → formación de quistes → liberación de nuevos esporozoítos."
   },
   {
    "t": "p",
    "texto": "**Dónde vive y cómo llega.** Se adquiere por **inhalación**. Las formas tróficas se adhieren a los **neumocitos tipo I** del alvéolo y colonizan."
   },
   {
    "t": "p",
    "texto": "**Cómo enferma.**"
   },
   {
    "t": "lista",
    "items": [
     "**En una persona sana**, los linfocitos **T CD4+** liberan citocinas (IL-2, IFN-γ), que activan a los macrófagos alveolares, y estos lo eliminan.",
     "**Con inmunosupresión** hay menos CD4 y macrófagos menos activos, así que el hongo prolifera libremente.",
     "Eso provoca inflamación (IL-1, IL-6, TNF-α, neutrófilos), **material proteináceo y detritos llenando los alvéolos**, edema intersticial y engrosamiento de la barrera alvéolo-capilar.",
     "El oxígeno ya no pasa a la sangre: **hipoxemia**."
    ]
   },
   {
    "t": "p",
    "texto": "**Quién enferma.**"
   },
   {
    "t": "lista",
    "items": [
     "**VIH/SIDA con CD4 < 200 células/µL** (el ejemplo clásico).",
     "Trasplantados.",
     "Neoplasias hematológicas.",
     "Uso de corticoides o inmunosupresores.",
     "Inmunodeficiencias."
    ]
   },
   {
    "t": "p",
    "texto": "**Clínica.** Fiebre, **tos seca (no productiva)**, disnea progresiva e **hipoxemia**. En la radiografía y la TAC se ven infiltrados bilaterales en vidrio esmerilado."
   },
   {
    "t": "p",
    "texto": "**Diagnóstico.**"
   },
   {
    "t": "lista",
    "items": [
     "**Muestras**: esputo, **lavado broncoalveolar** (la de elección), aspirado de secreciones o biopsia pulmonar.",
     "**Giemsa**: tiñe formas tróficas, núcleos y cuerpos intraquísticos, pero **no tiñe la pared del quiste**, así que es difícil ver los quistes con ella.",
     "**Gomori-Grocott**: **tiñe los quistes**. Se ven redondos o en media luna, de ~7 µm, en racimos.",
     "**Inmunofluorescencia directa** con anticuerpos monoclonales: ve quistes y trofozoítos.",
     "**PCR**: busca el gen **mtLSU rRNA** (ARN ribosomal de la subunidad mayor mitocondrial)."
    ]
   },
   {
    "t": "p",
    "texto": "**Tratamiento.**"
   },
   {
    "t": "lista",
    "items": [
     "**Primera línea: TMP-SMX (cotrimoxazol) por 21 días.** Bloquea dos pasos seguidos de la síntesis de ácido fólico; sin ácido fólico no hay síntesis de ácidos nucleicos, y el hongo no puede multiplicarse.",
     "**Alternativas**: pentamidina (eficaz pero más tóxica) y atovacuona (menos eficaz)."
    ]
   },
   {
    "t": "p",
    "texto": "**No olvides.** VIH con CD4 < 200 + tos seca + disnea + hipoxemia + vidrio esmerilado = neumonía por *Pneumocystis* → LBA con Grocott y TMP-SMX por 21 días. Es un hongo, no un protozoo."
   }
  ]
 },
 {
  "id": "comparar-zona",
  "grupo": "Comparar hongos",
  "titulo": "Diferenciar por zona del cuerpo",
  "subtitulo": "",
  "bloques": [
   {
    "t": "h",
    "texto": "El método: cuatro preguntas"
   },
   {
    "t": "p",
    "texto": "Cuando varios hongos atacan la misma zona, casi siempre los separas haciéndote estas cuatro preguntas en orden:"
   },
   {
    "t": "lista",
    "orden": true,
    "items": [
     "**¿Quién es el paciente?**",
     "  Neutropénico (*Aspergillus*, *Fusarium*, zigomicetos).",
     "  Diabético en cetoacidosis (zigomicetos).",
     "  VIH: con CD4 < 200 *Pneumocystis*; con < 150 *Histoplasma*; con < 100 *Cryptococcus*.",
     "  Paciente de UCI con catéter (*Candida*).",
     "  Sano con una exposición concreta (los dimórficos).",
     "**¿Dónde estuvo o cómo entró?**",
     "  Cueva o guano (*Histoplasma*).",
     "  Cafetal (*Paracoccidioides*).",
     "  Rosal o gato (*Sporothrix*).",
     "  Astilla en la Amazonía (cromoblastomicosis).",
     "  Palomas (*C. neoformans*) o eucalipto (*C. gattii*).",
     "  Gato con niño (*M. canis*).",
     "**¿Qué forma tiene en el tejido?**",
     "  Hifa septada a 45° (*Aspergillus*) o hifa ancha sin septos (zigomicetos).",
     "  Levadura encapsulada (*Cryptococcus*).",
     "  Levadura pequeña dentro de macrófagos (*Histoplasma*).",
     "  Timón de barco (*Paracoccidioides*).",
     "  Base ancha (*Blastomyces*).",
     "  Cigarro (*Sporothrix*).",
     "  Cuerpo muriforme (cromoblastomicosis).",
     "**¿Qué prueba lo confirma?**",
     "  Galactomanano (*Aspergillus*).",
     "  Hemocultivo positivo (*Fusarium*, *Candida*).",
     "  Tinta china o antígeno capsular (*Cryptococcus*).",
     "  Antígeno en orina (*Histoplasma*).",
     "  Anti-gp43 (*Paracoccidioides*).",
     "  Grocott en LBA (*Pneumocystis*).",
     "  BK, cultivo o GeneXpert (TB)."
    ]
   },
   {
    "t": "p",
    "texto": "En cada tabla, la última columna dice qué dato lo separa de los demás de esa zona."
   },
   {
    "t": "h",
    "texto": "Pulmón"
   },
   {
    "t": "p",
    "texto": "Es la zona con más candidatos. Primero sepáralos por paciente: inmunosuprimido (*Aspergillus*, zigomicetos, *Fusarium*, *Pneumocystis*, *Cryptococcus*) o sano con exposición (TB, *Histoplasma*, *Paracoccidioides*, *Blastomyces*, *C. gattii*)."
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** tres hongos simulan TB con baciloscopía negativa:"
   },
   {
    "t": "lista",
    "items": [
     "Cueva o guano → *Histoplasma*.",
     "Agricultor con úlceras en la boca → *Paracoccidioides*.",
     "Masa dentro de una caverna antigua → aspergiloma."
    ]
   },
   {
    "t": "p",
    "texto": "En neutropénicos con halo: galactomanano positivo → *Aspergillus*; hemocultivo positivo con nódulos en la piel → *Fusarium*; diabético con halo invertido → zigomicetos."
   },
   {
    "t": "h",
    "texto": "SNC y meninges"
   },
   {
    "t": "p",
    "texto": "La meningitis tuberculosa y la criptocócica dan un LCR muy parecido (linfocitos, proteína alta y glucosa baja). Se separan por la **tinta china**, el **antígeno capsular** y el **ADA**."
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** VIH + tinta china positiva = *Cryptococcus*. ADA alto + realce basal = TB. Diabético con costra negra = zigomicetos."
   },
   {
    "t": "h",
    "texto": "Cara, senos paranasales, oído y ojo"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** costra negra en paladar = zigomicetos. Córnea tras golpe con una rama = *Fusarium*. Oído de nadador = *Aspergillus niger*."
   },
   {
    "t": "h",
    "texto": "Boca, laringe y esófago"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** placa blanca que se desprende = *Candida*. Úlcera moriforme en un agricultor = *Paracoccidioides*. Úlcera en VIH con pancitopenia = *Histoplasma*."
   },
   {
    "t": "h",
    "texto": "Piel profunda: nódulos, úlceras y placas verrugosas"
   },
   {
    "t": "p",
    "texto": "Pregunta clave: **¿la lesión nació donde entró la espina (inoculación) o llegó por la sangre desde el pulmón (diseminación)?**"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** nódulos en fila por el brazo = *Sporothrix*. Coliflor en la pierna con puntos negros = cromoblastomicosis. Nódulos negros dolorosos en neutropénico = *Fusarium*."
   },
   {
    "t": "h",
    "texto": "Piel superficial, pelo, uñas y pliegues"
   },
   {
    "t": "p",
    "texto": "Aquí compiten los tres dermatofitos y *Candida*. Lo que más ayuda a separarlos es **si afecta o no el pelo**, el **color del reverso** de la colonia y si aparecen **lesiones satélite**."
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** ¿afecta el pelo? *M. canis*. ¿Reverso rojo? *T. rubrum*. ¿Sin microconidios y nunca en el pelo? *Epidermophyton*. ¿Lesiones satélite en un pliegue? *Candida*."
   },
   {
    "t": "h",
    "texto": "Ganglios linfáticos"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** ganglio indoloro que fistuliza con caseum = TB. Joven con ganglios dolorosos y hígado y bazo grandes = *Paracoccidioides* juvenil."
   },
   {
    "t": "h",
    "texto": "Sangre: fiebre persistente en un paciente inmunosuprimido o de UCI"
   },
   {
    "t": "p",
    "texto": "Cuadro típico: fiebre que no baja con antibióticos. La pregunta clave es: **¿qué sale en el hemocultivo y qué marcador es positivo?**"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** levadura en sangre de un paciente con catéter = *Candida*. Filamentoso en sangre = *Fusarium*. Hemocultivo negativo con galactomanano positivo = *Aspergillus*."
   },
   {
    "t": "h",
    "texto": "Hígado, bazo, médula ósea y suprarrenales"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Atajo:** VIH con pancitopenia = *Histoplasma*. Agricultor con hiperpigmentación e hipotensión = *Paracoccidioides* en suprarrenales."
   }
  ]
 },
 {
  "id": "comparar-generales",
  "grupo": "Comparar hongos",
  "titulo": "Tablas generales de hongos",
  "subtitulo": "Identidad, clínica y tipo de micosis",
  "bloques": [
   {
    "t": "h",
    "texto": "Tabla 1. Identidad: qué es, cómo se ve, de dónde viene y a quién ataca"
   },
   {
    "t": "tabla",
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
    "t": "h",
    "texto": "Tabla 2. Clínica, diagnóstico y tratamiento"
   },
   {
    "t": "tabla",
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
    "t": "h",
    "texto": "Tabla 3. Agrupados por tipo de micosis y forma"
   },
   {
    "t": "tabla",
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
    "t": "p",
    "texto": "**Los dimórficos, lado a lado** (moho a 25 °C, levadura a 37 °C):"
   },
   {
    "t": "tabla",
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
   },
   {
    "t": "p",
    "texto": "**Quién tiene cápsula, quién tiene melanina y quién se esconde:** la cápsula es de *Cryptococcus*. La melanina la tienen *Cryptococcus*, *Sporothrix*, los dematiáceos y *Paracoccidioides*. El α-1,3-glucano lo usan *Histoplasma* y *Paracoccidioides*."
   }
  ]
 }
];
