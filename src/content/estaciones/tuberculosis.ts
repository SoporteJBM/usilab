// Estación: Tuberculosis
// Fuente: banco de teoría del curso (clase 7 y seminarios), revisado pregunta por pregunta.
import type { Estacion } from "../types";

export const tuberculosis: Estacion = {
  "id": "tuberculosis",
  "nombre": "Tuberculosis",
  "descripcion": "Pared, patogenia, PPD e IGRA, diagnóstico, esquemas MINSA y formas extrapulmonares",
  "resumen": "Ideas clave:\n• M. tuberculosis: aerobio estricto, intracelular facultativo y BAAR por los ácidos micólicos; se divide cada 18–24 h.\n• Patogenia: entrada al macrófago → granuloma (4–6 sem) → tubérculo caseoso (9–12 sem) → ruptura y paciente bacilífero (12–18 sem). Protege la respuesta Th1 (IL-12, IFN-γ).\n• PPD e IGRA dicen «infectado», no «enfermo».\n• Diagnóstico: baciloscopía (la auramina es más sensible que ZN), cultivo (Löwenstein-Jensen desde la 4.ª semana) y GeneXpert MTB/RIF (solo resistencia a rifampicina).\n• Tratamiento MINSA: 2HRZE (lunes a sábado) + 4HR, supervisado. MDR = H + R; pre-XDR = MDR + fluoroquinolona; XDR = pre-XDR + bedaquilina o linezolid. Resistente: BPaLM.\n• Extrapulmonar: la más frecuente es la ganglionar; pleural con exudado linfocítico y ADA alto; Mal de Pott en la columna.",
  "preguntas": [
    {
      "id": "tuberculosis-001",
      "nivel": "f",
      "pregunta": "Mycobacterium tuberculosis es un bacilo:",
      "correcta": "Aerobio estricto, intracelular facultativo y ácido-alcohol resistente",
      "distractores": [
        "Microaerófilo, Gram positivo típico",
        "Aerobio, móvil y capsulado",
        "Anaerobio facultativo, formador de esporas",
        "Anaerobio estricto, Gram negativo"
      ],
      "pista": "Piensa en cómo se tiñe con Ziehl-Neelsen y en cuánto oxígeno necesita.",
      "explicacion": "Aerobio estricto, intracelular facultativo, BAAR; no forma esporas ni cápsula, inmóvil."
    },
    {
      "id": "tuberculosis-002",
      "nivel": "f",
      "pregunta": "La ácido-alcohol resistencia de M. tuberculosis se debe principalmente a:",
      "correcta": "Los ácidos micólicos",
      "distractores": [
        "El peptidoglucano",
        "Los flagelos",
        "El LPS",
        "La cápsula"
      ],
      "pista": "Son lípidos de cadena muy larga de su pared.",
      "explicacion": "Los ácidos micólicos (40–60 % de los lípidos) retienen la fucsina y resisten el alcohol-ácido."
    },
    {
      "id": "tuberculosis-003",
      "nivel": "m",
      "pregunta": "Tiempo de replicación de M. tuberculosis:",
      "correcta": "18–24 horas",
      "distractores": [
        "2–4 horas",
        "20 minutos",
        "7 días",
        "1 mes"
      ],
      "pista": "Por esto el cultivo tarda semanas, no días.",
      "explicacion": "Se replica cada 18–24 h; por eso el cultivo tarda hasta 8 semanas."
    },
    {
      "id": "tuberculosis-004",
      "nivel": "m",
      "pregunta": "Nivel de bioseguridad para trabajar con cultivos de M. tuberculosis:",
      "correcta": "BSL-3",
      "distractores": [
        "BSL-2",
        "BSL-4",
        "BSL-1",
        "No requiere"
      ],
      "pista": "Es un patógeno que se transmite por aerosoles.",
      "explicacion": "Se trabaja en nivel de bioseguridad 3."
    },
    {
      "id": "tuberculosis-005",
      "nivel": "f",
      "pregunta": "¿Quién descubrió el agente de la tuberculosis y en qué año?",
      "correcta": "Koch, 1882",
      "distractores": [
        "Fleming, 1928",
        "Waksman, 1943",
        "Calmette, 1908",
        "Pasteur, 1880"
      ],
      "pista": "El mismo científico de los postulados.",
      "explicacion": "Robert Koch, 1882. Calmette y Guérin crearon la BCG en 1908; la estreptomicina llegó en 1943."
    },
    {
      "id": "tuberculosis-006",
      "nivel": "m",
      "pregunta": "Miembro del complejo M. tuberculosis que se transmite por leche no pasteurizada:",
      "correcta": "M. bovis",
      "distractores": [
        "M. africanum",
        "M. pinnipedii",
        "M. canettii",
        "M. microti"
      ],
      "pista": "Su reservorio es el ganado.",
      "explicacion": "M. bovis: ganado, leche no pasteurizada."
    },
    {
      "id": "tuberculosis-007",
      "nivel": "d",
      "pregunta": "Miembro del complejo MTB que afecta principalmente a roedores:",
      "correcta": "M. microti",
      "distractores": [
        "M. africanum",
        "M. bovis",
        "M. leprae",
        "M. caprae"
      ],
      "explicacion": "M. microti: roedores. M. caprae: cabras; M. pinnipedii: focas y lobos marinos."
    },
    {
      "id": "tuberculosis-008",
      "nivel": "d",
      "pregunta": "¿Qué componente une los ácidos micólicos al peptidoglucano?",
      "correcta": "Arabinogalactano",
      "distractores": [
        "ESAT-6",
        "Ag85",
        "Lipoarabinomanano",
        "Cord factor"
      ],
      "explicacion": "El arabinogalactano une los ácidos micólicos al peptidoglucano."
    },
    {
      "id": "tuberculosis-009",
      "nivel": "d",
      "pregunta": "El cord factor (dimicolato de trehalosa):",
      "correcta": "Hace crecer en cuerdas, inhibe la migración de neutrófilos y forma granulomas",
      "distractores": [
        "Es la cápsula",
        "Da la ácido-alcohol resistencia",
        "Es una catalasa",
        "Es la proteína del QuantiFERON"
      ],
      "explicacion": "Crecimiento en 'cuerdas' (se ve en MODS), inhibe neutrófilos, necrosis y granulomas."
    },
    {
      "id": "tuberculosis-010",
      "nivel": "m",
      "pregunta": "Proteínas de M. tuberculosis que se usan en el QuantiFERON:",
      "correcta": "ESAT-6 y CFP-10",
      "distractores": [
        "Arabinogalactano",
        "Catalasa y SOD",
        "Cord factor y LAM",
        "Ag85 y LAM"
      ],
      "pista": "Son antígenos secretados que no están en la BCG.",
      "explicacion": "ESAT-6 y CFP-10 estimulan IFN-γ; no están en la BCG."
    },
    {
      "id": "tuberculosis-011",
      "nivel": "d",
      "pregunta": "¿Qué hacen ESAT-6 y CFP-10?",
      "correcta": "Inhiben la fusión fagosoma-lisosoma y dañan el tejido pulmonar",
      "distractores": [
        "Producen aflatoxinas",
        "Unen micólicos al peptidoglucano",
        "Neutralizan radicales libres",
        "Forman la cápsula"
      ],
      "explicacion": "Inhiben la fusión fagosoma-lisosoma, lo que le permite sobrevivir en el macrófago."
    },
    {
      "id": "tuberculosis-012",
      "nivel": "d",
      "pregunta": "Factores de M. tuberculosis que neutralizan las especies reactivas de oxígeno del fagocito:",
      "correcta": "Catalasas y superóxido dismutasas",
      "distractores": [
        "Cord factor",
        "Ag85",
        "Arabinogalactano",
        "Ácidos micólicos"
      ],
      "explicacion": "Catalasas y SOD neutralizan los ROS dentro del fagocito."
    },
    {
      "id": "tuberculosis-013",
      "nivel": "f",
      "pregunta": "La transmisión de la tuberculosis es principalmente:",
      "correcta": "Aérea por gotículas muy pequeñas",
      "distractores": [
        "Fecal-oral",
        "Por contacto con la piel",
        "Sexual",
        "Por picadura de insectos"
      ],
      "pista": "El paciente bacilífero tose y habla.",
      "explicacion": "Aérea; requiere paciente bacilífero, contacto cercano y prolongado, espacios cerrados."
    },
    {
      "id": "tuberculosis-014",
      "nivel": "f",
      "pregunta": "Forma clínica de TB más frecuente:",
      "correcta": "Pulmonar",
      "distractores": [
        "Miliar",
        "Meníngea",
        "Pleural",
        "Ganglionar"
      ],
      "pista": "Es la forma que hace al paciente bacilífero.",
      "explicacion": "Pulmonar 85,1 %; extrapulmonar 14,9 % (la más frecuente de ellas: linfática)."
    },
    {
      "id": "tuberculosis-015",
      "nivel": "m",
      "pregunta": "De las formas extrapulmonares, la más frecuente es:",
      "correcta": "Linfática (ganglionar)",
      "distractores": [
        "Peritoneal",
        "Meníngea",
        "Osteoarticular",
        "Laríngea"
      ],
      "pista": "La escrófula es un ejemplo.",
      "explicacion": "Linfática 25,2 %, luego pleural 22,8 %, genitourinaria 16,1 %."
    },
    {
      "id": "tuberculosis-016",
      "nivel": "x",
      "pregunta": "Primera etapa de la patogenia de la TB (0–3 días):",
      "correcta": "Establecimiento: el bacilo se une a CR1, CR3, CR4, TLR2 y TLR4 y entra al macrófago alveolar",
      "distractores": [
        "Necrosis caseosa",
        "Diseminación hematógena",
        "Formación del tubérculo",
        "Ruptura del tubérculo"
      ],
      "explicacion": "Establecimiento: ligandos (LAM, lipoproteínas) se unen a receptores y entra al macrófago alveolar."
    },
    {
      "id": "tuberculosis-017",
      "nivel": "x",
      "pregunta": "En la etapa de multiplicación, LAM + TLR2 liberan quimiotactinas como:",
      "correcta": "IL-8, RANTES y MCP-1",
      "distractores": [
        "IL-4 e IL-10",
        "TGF-β solo",
        "IgE",
        "Histamina"
      ],
      "explicacion": "IL-8, RANTES, MCP-1 reclutan monocitos, linfocitos y NK."
    },
    {
      "id": "tuberculosis-018",
      "nivel": "x",
      "pregunta": "La necrosis caseosa y formación de nódulos caseosos ocurre en la etapa de:",
      "correcta": "Tubérculo (9–12 semanas)",
      "distractores": [
        "Establecimiento (0–3 días)",
        "Ninguna",
        "Multiplicación (3–5 días)",
        "Granuloma (4–6 semanas)"
      ],
      "explicacion": "Tubérculo: necrosis caseosa, caseum, nódulos caseosos (9–12 semanas)."
    },
    {
      "id": "tuberculosis-019",
      "nivel": "d",
      "pregunta": "¿En qué etapa el paciente se vuelve bacilífero y puede tener hemoptisis?",
      "correcta": "Daño (12–18 semanas), cuando el tubérculo se rompe",
      "distractores": [
        "Establecimiento",
        "Multiplicación",
        "Tubérculo",
        "Granuloma"
      ],
      "explicacion": "Etapa de daño: el tubérculo se rompe y el paciente elimina bacilos."
    },
    {
      "id": "tuberculosis-020",
      "nivel": "m",
      "pregunta": "Inmunidad defensiva frente a la TB:",
      "correcta": "Th1 (IL-12, IFN-γ)",
      "distractores": [
        "Th17 (IL-6, IL-23)",
        "Th2 (IL-4, IL-10)",
        "IgE",
        "Eosinófilos"
      ],
      "pista": "La que produce IFN-γ y activa macrófagos.",
      "explicacion": "Th1 con IL-12 e IFN-γ protege; Th2 y Th17 desequilibran."
    },
    {
      "id": "tuberculosis-021",
      "nivel": "f",
      "pregunta": "Histología típica de la TB:",
      "correcta": "Granuloma con necrosis caseosa central, células epitelioides, células gigantes de Langhans y corona de linfocitos",
      "distractores": [
        "Granuloma no caseificante",
        "Hifas en ángulo agudo",
        "Eosinófilos y cristales de Charcot-Leyden",
        "Abscesos con neutrófilos"
      ],
      "pista": "Es la lesión que se forma para contener al bacilo; piensa en el «caseum».",
      "explicacion": "Granuloma caseificante con células de Langhans."
    },
    {
      "id": "tuberculosis-022",
      "nivel": "d",
      "pregunta": "En el Perú, la prueba de PPD usa:",
      "correcta": "0,1 ml de PPD de baja potencia (2 UT) intradérmico",
      "distractores": [
        "Inhalado",
        "0,5 ml subcutáneo",
        "1 ml de PPD de 5 UT",
        "Vía oral"
      ],
      "explicacion": "0,1 ml de PPD de 2 UT, intradérmica (Mantoux)."
    },
    {
      "id": "tuberculosis-023",
      "nivel": "f",
      "pregunta": "El PPD se lee a las:",
      "correcta": "48–72 horas",
      "distractores": [
        "30 días",
        "24 horas",
        "6 horas",
        "7 días"
      ],
      "pista": "Es hipersensibilidad retardada (tipo IV).",
      "explicacion": "48–72 h; es hipersensibilidad retardada (tipo IV)."
    },
    {
      "id": "tuberculosis-024",
      "nivel": "m",
      "pregunta": "Un PPD positivo indica:",
      "correcta": "Que la persona fue infectada por M. tuberculosis, sin indicar cuándo",
      "distractores": [
        "TB activa",
        "Resistencia a rifampicina",
        "Infección por hongos",
        "Inmunidad completa"
      ],
      "pista": "Habla de contacto con el bacilo, no de enfermedad.",
      "explicacion": "Positivo = infección; no dice si es activa ni cuándo."
    },
    {
      "id": "tuberculosis-025",
      "nivel": "d",
      "pregunta": "Causa de un PPD falso negativo (anergia):",
      "correcta": "VIH, sarampión, vacuna reciente con virus atenuados o TB muy avanzada",
      "distractores": [
        "Diabetes controlada",
        "Contacto con TB",
        "Infección latente",
        "Vacuna BCG reciente"
      ],
      "explicacion": "Anergia: VIH, sarampión, vacunas de virus vivos (polio, sarampión), TB muy avanzada."
    },
    {
      "id": "tuberculosis-026",
      "nivel": "m",
      "pregunta": "Sobre el IGRA (QuantiFERON-TB Gold, T-SPOT.TB), es correcto:",
      "correcta": "Mide IFN-γ en sangre y diagnostica infección latente; no distingue TB activa",
      "distractores": [
        "Se lee a las 72 h en la piel",
        "Es un cultivo",
        "Mide anticuerpos IgM",
        "Diagnostica TB activa"
      ],
      "pista": "Es una prueba in vitro que reemplaza al PPD.",
      "explicacion": "Mide IFN-γ; sirve para TB latente; no distingue activa."
    },
    {
      "id": "tuberculosis-027",
      "nivel": "f",
      "pregunta": "Según el MINSA, un sintomático respiratorio es quien tiene tos por más de:",
      "correcta": "2 semanas",
      "distractores": [
        "3 meses",
        "3 días",
        "1 mes",
        "1 semana"
      ],
      "pista": "Es el criterio para pedir baciloscopía.",
      "explicacion": "Tos persistente > 2 semanas."
    },
    {
      "id": "tuberculosis-028",
      "nivel": "f",
      "pregunta": "Muestra de elección para el diagnóstico de TB pulmonar:",
      "correcta": "Esputo seriado",
      "distractores": [
        "Orina",
        "Heces",
        "LCR",
        "Sangre"
      ],
      "pista": "Se recoge al toser, en días seguidos.",
      "explicacion": "Esputos seriados para baciloscopía y cultivo."
    },
    {
      "id": "tuberculosis-029",
      "nivel": "m",
      "pregunta": "Ventaja de la auramina sobre Ziehl-Neelsen:",
      "correcta": "Es más sensible, detecta concentraciones más bajas y revisa más campo en menos tiempo",
      "distractores": [
        "Distingue especies",
        "Identifica resistencia",
        "Es más barata",
        "No necesita microscopio"
      ],
      "pista": "Usa fluorescencia.",
      "explicacion": "Fluorescente, más sensible, ideal para laboratorios con mucha carga."
    },
    {
      "id": "tuberculosis-030",
      "nivel": "f",
      "pregunta": "Colonias de M. tuberculosis en Löwenstein-Jensen:",
      "correcta": "Rugosas, bordes irregulares, elevadas, color crema",
      "distractores": [
        "Lisas, mucoides, rosadas",
        "Negras con borde blanco",
        "Verde azuladas",
        "Con hemólisis beta"
      ],
      "pista": "Se describen como «en coliflor» o «migas de pan».",
      "explicacion": "Rugosas, crema, 'en coliflor'."
    },
    {
      "id": "tuberculosis-031",
      "nivel": "d",
      "pregunta": "El sistema MGIT detecta el crecimiento porque:",
      "correcta": "El bacilo consume O₂ y aparece fluorescencia del fluorocromo",
      "distractores": [
        "Forma un halo",
        "Cambia el pH a rojo",
        "Produce gas",
        "Hemoliza"
      ],
      "pista": "El equipo ve una señal luminosa cuando el oxígeno del tubo baja.",
      "explicacion": "Fluorocromo con O₂ en silicona; al consumirse el O₂ fluoresce; el equipo lee cada 60 min."
    },
    {
      "id": "tuberculosis-032",
      "nivel": "x",
      "pregunta": "Medio que permite diferenciar micobacterias no tuberculosas por pigmento (fotocromógenas, escotocromógenas):",
      "correcta": "Middlebrook 7H10",
      "distractores": [
        "Löwenstein-Jensen solo",
        "Agar sangre",
        "MGIT",
        "Sabouraud"
      ],
      "explicacion": "7H10 (método de las proporciones), desde la 2.ª semana."
    },
    {
      "id": "tuberculosis-033",
      "nivel": "d",
      "pregunta": "Prueba molecular que detecta resistencia a isoniazida, rifampicina y segunda línea, pero solo en esputo:",
      "correcta": "GenoType",
      "distractores": [
        "MODS",
        "GeneXpert MTB/RIF",
        "PPD",
        "IGRA"
      ],
      "explicacion": "GenoType: MTB, otras micobacterias, H, R y segunda línea; solo esputo."
    },
    {
      "id": "tuberculosis-034",
      "nivel": "x",
      "pregunta": "GeneXpert MTB/XDR detecta resistencia a:",
      "correcta": "Isoniazida, fluoroquinolonas, inyectables de 2.ª línea y etionamida",
      "distractores": [
        "Bedaquilina",
        "Betalactámicos",
        "Antifúngicos",
        "Solo rifampicina"
      ],
      "explicacion": "10 colores: INH, FLQ, amikacina/kanamicina/capreomicina y etionamida."
    },
    {
      "id": "tuberculosis-035",
      "nivel": "d",
      "pregunta": "En el MODS, M. tuberculosis se reconoce por:",
      "correcta": "Colonias en cuerdas (cord factor)",
      "distractores": [
        "Colonias rojas",
        "Fluorescencia verde",
        "Hemólisis",
        "Halo de inhibición"
      ],
      "explicacion": "Cuerdas = cord factor; crece en pozo con H → resistente a H; con R → resistente a R."
    },
    {
      "id": "tuberculosis-036",
      "nivel": "m",
      "pregunta": "En el MODS, si crece en el pozo con rifampicina significa:",
      "correcta": "Resistente a rifampicina",
      "distractores": [
        "Sensible a rifampicina",
        "No es M. tuberculosis",
        "Contaminación",
        "TB latente"
      ],
      "pista": "Si crece donde está el fármaco, el fármaco no lo frena.",
      "explicacion": "Crecer con el fármaco = resistente."
    },
    {
      "id": "tuberculosis-037",
      "nivel": "m",
      "pregunta": "Baciloscopía negativa con cultivo positivo. Según la NTS 200-MINSA 2023:",
      "correcta": "El cultivo confirma TB (la baciloscopía es menos sensible)",
      "distractores": [
        "Se trata como hongo",
        "Se descarta TB",
        "Se repite el PPD",
        "Es contaminación"
      ],
      "pista": "¿Cuál de las dos pruebas detecta más casos?",
      "explicacion": "El cultivo es más sensible y confirma."
    },
    {
      "id": "tuberculosis-038",
      "nivel": "d",
      "pregunta": "Escala MINSA: 1 a 9 BAAR en 100 campos se reporta como:",
      "correcta": "Positivo con el número exacto de bacilos (paucibacilar)",
      "distractores": [
        "+++",
        "+",
        "Negativo",
        "++"
      ],
      "explicacion": "1–9 en 100 campos: positivo, anotando el número exacto."
    },
    {
      "id": "tuberculosis-039",
      "nivel": "d",
      "pregunta": "Escala MINSA: 10 a 99 BAAR en 100 campos se reporta como:",
      "correcta": "+",
      "distractores": [
        "Negativo",
        "Paucibacilar",
        "++",
        "+++"
      ],
      "explicacion": "10–99/100 campos = +."
    },
    {
      "id": "tuberculosis-040",
      "nivel": "f",
      "pregunta": "Esquema MINSA para TB sensible, fase inicial:",
      "correcta": "HRZE por 2 meses, lunes a sábado, supervisado",
      "distractores": [
        "Solo isoniazida 9 meses",
        "BPaLM por 6 meses",
        "HRZE por 6 meses",
        "HR por 4 meses"
      ],
      "pista": "La fase de ataque usa cuatro fármacos.",
      "explicacion": "2 meses HRZE diario (6 veces/semana)."
    },
    {
      "id": "tuberculosis-041",
      "nivel": "d",
      "pregunta": "Paciente de 60 kg en fase inicial. Tabletas de HRZE:",
      "correcta": "4",
      "distractores": [
        "5",
        "2",
        "6",
        "3"
      ],
      "explicacion": "55–70 kg = 4 tabletas (30–37 = 2; 38–54 = 3; ≥71 = 5)."
    },
    {
      "id": "tuberculosis-042",
      "nivel": "d",
      "pregunta": "Paciente de 45 kg. Tabletas de HRZE:",
      "correcta": "3",
      "distractores": [
        "2",
        "4",
        "5",
        "1"
      ],
      "explicacion": "38–54 kg = 3 tabletas."
    },
    {
      "id": "tuberculosis-043",
      "nivel": "f",
      "pregunta": "La sigla Z en el esquema antituberculoso corresponde a:",
      "correcta": "Pirazinamida",
      "distractores": [
        "Rifampicina",
        "Isoniazida",
        "Estreptomicina",
        "Etambutol"
      ],
      "pista": "H, R, Z y E: la Z es la que eleva el ácido úrico.",
      "explicacion": "H isoniazida, R rifampicina, Z pirazinamida, E etambutol."
    },
    {
      "id": "tuberculosis-044",
      "nivel": "m",
      "pregunta": "BPaLM significa:",
      "correcta": "Bedaquilina + pretomanid + linezolid + moxifloxacino",
      "distractores": [
        "Bedaquilina + penicilina + levofloxacino + meropenem",
        "Betalactámico + pretomanid + linezolid + metronidazol",
        "Bedaquilina + pirazinamida + levofloxacino + meropenem",
        "BCG + PPD + linezolid + moxifloxacino"
      ],
      "pista": "Es el esquema corto para TB resistente.",
      "explicacion": "Esquema corto para TB resistente."
    },
    {
      "id": "tuberculosis-045",
      "nivel": "x",
      "pregunta": "BLCC significa:",
      "correcta": "Bedaquilina + linezolid + clofazimina + cicloserina",
      "distractores": [
        "Ninguno",
        "BCG + levofloxacino + claritromicina + cefepima",
        "Betalactámico + linezolid + clindamicina + cotrimoxazol",
        "Bedaquilina + levofloxacino + ceftriaxona + colistina"
      ],
      "explicacion": "Bedaquilina, linezolid, clofazimina, cicloserina."
    },
    {
      "id": "tuberculosis-046",
      "nivel": "m",
      "pregunta": "TB MDR es la resistente a:",
      "correcta": "Isoniazida + rifampicina",
      "distractores": [
        "Bedaquilina",
        "Solo rifampicina",
        "Etambutol",
        "Fluoroquinolonas"
      ],
      "pista": "Resistente a los dos fármacos más importantes.",
      "explicacion": "MDR = H + R. Pre-XDR = MDR + FLQ. XDR = pre-XDR + bedaquilina o linezolid."
    },
    {
      "id": "tuberculosis-047",
      "nivel": "d",
      "pregunta": "TB pre-XDR es:",
      "correcta": "MDR + resistencia a fluoroquinolona",
      "distractores": [
        "Resistente a E",
        "Resistente solo a H",
        "Sensible",
        "MDR + resistencia a etambutol"
      ],
      "explicacion": "MDR + fluoroquinolona."
    },
    {
      "id": "tuberculosis-048",
      "nivel": "d",
      "pregunta": "TB XDR es:",
      "correcta": "Pre-XDR + resistencia a bedaquilina o linezolid",
      "distractores": [
        "Resistente a estreptomicina",
        "MDR",
        "Resistente a pirazinamida",
        "Latente"
      ],
      "explicacion": "Pre-XDR + bedaquilina o linezolid."
    },
    {
      "id": "tuberculosis-049",
      "nivel": "m",
      "pregunta": "La TB extrapulmonar es más del 50 % de los casos en:",
      "correcta": "Pacientes con VIH/SIDA",
      "distractores": [
        "Ancianos sanos",
        "Embarazadas",
        "Diabéticos controlados",
        "Niños sanos"
      ],
      "pista": "Inmunosupresión celular por un virus.",
      "explicacion": "15–20 % en inmunocompetentes; > 50 % en VIH."
    },
    {
      "id": "tuberculosis-050",
      "nivel": "f",
      "pregunta": "Síntoma principal de la TB laríngea:",
      "correcta": "Disfonía",
      "distractores": [
        "Hemoptisis",
        "Artralgia",
        "Cefalea",
        "Diarrea"
      ],
      "pista": "La lesión está en las cuerdas vocales.",
      "explicacion": "Disfonía; es una de las formas más contagiosas."
    },
    {
      "id": "tuberculosis-051",
      "nivel": "m",
      "pregunta": "¿Por qué la TB laríngea es tan contagiosa?",
      "correcta": "Porque elimina bacilos directamente desde las cuerdas vocales al hablar y toser",
      "distractores": [
        "Porque es anaerobia",
        "Por vía sexual",
        "Porque no se trata",
        "Por la fiebre"
      ],
      "pista": "Piensa en dónde está la lesión.",
      "explicacion": "Elimina bacilos directo desde las cuerdas vocales."
    },
    {
      "id": "tuberculosis-052",
      "nivel": "m",
      "pregunta": "Escrófula es:",
      "correcta": "TB ganglionar cervical",
      "distractores": [
        "TB pleural",
        "TB ósea",
        "TB meníngea",
        "TB renal"
      ],
      "pista": "Adenopatía del cuello que fistuliza.",
      "explicacion": "Adenopatía cervical crónica, indolora, en conglomerados que fistuliza."
    },
    {
      "id": "tuberculosis-053",
      "nivel": "m",
      "pregunta": "Prueba de elección para TB ganglionar:",
      "correcta": "PAAF o biopsia del ganglio",
      "distractores": [
        "Radiografía",
        "Hemocultivo",
        "PPD",
        "IGRA"
      ],
      "pista": "Se necesita tejido o aspirado para el Xpert y la histología.",
      "explicacion": "PAAF o biopsia + Xpert, cultivo, histología."
    },
    {
      "id": "tuberculosis-054",
      "nivel": "m",
      "pregunta": "Líquido pleural de TB pleural:",
      "correcta": "Exudado linfocítico con ADA > 40–45 U/L",
      "distractores": [
        "Trasudado con neutrófilos",
        "Empiema con pus",
        "Quilotórax",
        "Glucosa muy alta"
      ],
      "pista": "Piensa en la adenosina desaminasa.",
      "explicacion": "Exudado linfocítico + ADA elevada."
    },
    {
      "id": "tuberculosis-055",
      "nivel": "m",
      "pregunta": "LCR típico de meningitis tuberculosa:",
      "correcta": "Linfocitos ↑, proteínas ↑, glucosa ↓",
      "distractores": [
        "Eosinófilos",
        "Sangre",
        "Normal",
        "Neutrófilos, glucosa normal"
      ],
      "pista": "Patrón de meningitis subaguda, distinto al bacteriano.",
      "explicacion": "Linfocitos, proteínas altas (100–500 mg/dL), glucosa baja (LCR/sangre < 0,3), ADA > 9–10."
    },
    {
      "id": "tuberculosis-056",
      "nivel": "d",
      "pregunta": "Prueba de elección en meningitis TB:",
      "correcta": "Xpert Ultra en LCR",
      "distractores": [
        "Galactomanano",
        "Antígeno en orina",
        "PPD",
        "Tinta china"
      ],
      "explicacion": "Xpert Ultra; RM con realce meníngeo basal."
    },
    {
      "id": "tuberculosis-057",
      "nivel": "f",
      "pregunta": "El mal de Pott es:",
      "correcta": "TB vertebral (espondilodiscitis)",
      "distractores": [
        "TB cutánea",
        "TB intestinal",
        "TB pleural",
        "TB renal"
      ],
      "pista": "Afecta la columna; se estudia con RM.",
      "explicacion": "Dolor vertebral, absceso paravertebral, giba; RM de columna de elección."
    },
    {
      "id": "tuberculosis-058",
      "nivel": "x",
      "pregunta": "La tríada de Phemister (osteopenia yuxtaarticular, erosiones periféricas, estrechamiento gradual) sugiere:",
      "correcta": "TB articular periférica",
      "distractores": [
        "Osteomielitis por S. aureus",
        "Artritis gotosa",
        "Artritis reumatoide",
        "Mucormicosis"
      ],
      "explicacion": "TB osteoarticular periférica."
    }
  ]
};
