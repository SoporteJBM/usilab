// Estación: Resistencia a los antibióticos
// Fuente: banco de teoría del curso (clase 7 y seminarios), revisado pregunta por pregunta.
import type { Estacion } from "../types";

export const resistencia: Estacion = {
  "id": "resistencia",
  "nombre": "Resistencia a los antibióticos",
  "descripcion": "MRSA, BLEE, AmpC, carbapenemasas y cómo leer el antibiograma",
  "resumen": "Ideas clave:\n• Mecanismos: bombas de eflujo, blanco alterado (MRSA: mecA → PBP2a) y desactivación enzimática (la más potente: BLEE y carbapenemasas).\n• MRSA: disco de cefoxitina 30 µg con halo < 22 mm; se confirma con PCR de mecA. Tratamiento: vancomicina.\n• BLEE: resiste cefalosporinas de 3.ª generación y aztreonam; el clavulánico la inhibe (sinergia con AMC, halo ≥ 5 mm). Tratamiento: carbapenémico.\n• AmpC: no la inhibe el clavulánico, resiste cefoxitina y se induce durante el tratamiento (Enterobacter, Citrobacter, Serratia).\n• Carbapenemasas: sin halo ni en imipenem ni en meropenem. Borónico = KPC; EDTA = metalo-betalactamasa.\n• Kirby-Bauer: se mide el diámetro del halo en mm, con el disco incluido, y se compara con la tabla CLSI (S / I / R).",
  "preguntas": [
    {
      "id": "resistencia-001",
      "nivel": "f",
      "pregunta": "CIM (concentración inhibitoria mínima) es:",
      "correcta": "La menor concentración que inhibe visiblemente el crecimiento",
      "distractores": [
        "La concentración en orina",
        "El diámetro del halo",
        "La concentración que mata al 100 %",
        "La dosis máxima tolerada"
      ],
      "pista": "Se expresa en µg/mL.",
      "explicacion": "Menor concentración que inhibe; en µg/mL."
    },
    {
      "id": "resistencia-002",
      "nivel": "f",
      "pregunta": "Antibiótico bacteriostático:",
      "correcta": "Tetraciclina",
      "distractores": [
        "Ciprofloxacino",
        "Meropenem",
        "Penicilina",
        "Ceftriaxona"
      ],
      "pista": "Frena el crecimiento sin matar; actúa en el ribosoma 30S.",
      "explicacion": "Bacteriostáticos: cloranfenicol, tetraciclinas. Bactericidas: penicilinas, quinolonas."
    },
    {
      "id": "resistencia-003",
      "nivel": "m",
      "pregunta": "Antibióticos de espectro reducido (Gram +):",
      "correcta": "Penicilina G y vancomicina",
      "distractores": [
        "Carbapenémicos",
        "Amoxicilina",
        "Cotrimoxazol",
        "Ceftriaxona y ciprofloxacino"
      ],
      "pista": "Cubren sobre todo Gram positivos.",
      "explicacion": "Reducido: penicilina G, vancomicina. Amplio: ceftriaxona, cipro, carbapenémicos."
    },
    {
      "id": "resistencia-004",
      "nivel": "m",
      "pregunta": "El mecanismo de resistencia bacteriana más potente es:",
      "correcta": "Desactivación enzimática",
      "distractores": [
        "Disminución de porinas",
        "Blanco alterado",
        "Biofilm",
        "Bombas de eflujo"
      ],
      "pista": "Las BLEE y las carbapenemasas destruyen el fármaco.",
      "explicacion": "Desactivación enzimática (BLEE, carbapenemasas)."
    },
    {
      "id": "resistencia-005",
      "nivel": "m",
      "pregunta": "MRSA es ejemplo de resistencia por:",
      "correcta": "Blanco alterado (PBP2a)",
      "distractores": [
        "Desactivación enzimática",
        "Transducción",
        "Impermeabilidad",
        "Bombas de eflujo"
      ],
      "pista": "El gen mecA cambia una proteína.",
      "explicacion": "Gen mecA → PBP2a, que no une betalactámicos."
    },
    {
      "id": "resistencia-006",
      "nivel": "d",
      "pregunta": "Mecanismos de transferencia genética clínicamente más importantes para la resistencia:",
      "correcta": "Conjugación y transposición",
      "distractores": [
        "Transformación y transducción",
        "Gemación",
        "Mutación puntual",
        "Esporulación"
      ],
      "explicacion": "Conjugación y transposición, que suelen actuar juntas."
    },
    {
      "id": "resistencia-007",
      "nivel": "f",
      "pregunta": "Método de antibiograma por difusión con discos:",
      "correcta": "Kirby-Bauer",
      "distractores": [
        "MALDI-TOF",
        "Vitek",
        "MicroScan",
        "PCR"
      ],
      "pista": "Discos de papel sobre Mueller-Hinton.",
      "explicacion": "Kirby-Bauer; el halo mide indirectamente la CIM."
    },
    {
      "id": "resistencia-008",
      "nivel": "m",
      "pregunta": "Sobre MALDI-TOF es correcto:",
      "correcta": "Identifica la especie en horas por su perfil proteico, pero no reemplaza al antibiograma",
      "distractores": [
        "Reemplaza al antibiograma",
        "Es un cultivo",
        "Solo sirve para hongos",
        "Mide halos"
      ],
      "pista": "Funciona con un láser sobre el extracto de la bacteria.",
      "explicacion": "Espectrometría de masas; identifica rápido; no reemplaza antibiograma."
    },
    {
      "id": "resistencia-009",
      "nivel": "f",
      "pregunta": "Resultado 'sensible' en el antibiograma significa:",
      "correcta": "Alta probabilidad de éxito terapéutico",
      "distractores": [
        "Necesita dosis tóxica",
        "Infección viral",
        "Fracaso seguro",
        "Efecto incierto"
      ],
      "pista": "S / I / R.",
      "explicacion": "S = éxito probable; I = incierto; R = fracaso probable."
    },
    {
      "id": "resistencia-010",
      "nivel": "d",
      "pregunta": "Detección preferida de MRSA en disco:",
      "correcta": "Cefoxitina 30 µg (halo < 22 mm = MRSA)",
      "distractores": [
        "Imipenem",
        "Amikacina",
        "Ceftriaxona",
        "Vancomicina"
      ],
      "explicacion": "Cefoxitina induce mejor la resistencia; halo < 22 mm = MRSA."
    },
    {
      "id": "resistencia-011",
      "nivel": "m",
      "pregunta": "Confirmación más exacta de MRSA:",
      "correcta": "PCR del gen mecA",
      "distractores": [
        "Catalasa",
        "Hemólisis",
        "Halo de oxacilina",
        "Coagulasa"
      ],
      "pista": "Es una prueba molecular sobre el gen.",
      "explicacion": "PCR de mecA."
    },
    {
      "id": "resistencia-012",
      "nivel": "x",
      "pregunta": "BORSA es:",
      "correcta": "mecA negativo, CMI de oxacilina 4 µg/mL pero sensible a cefoxitina",
      "distractores": [
        "Productor de BLEE",
        "S. epidermidis",
        "mecA positivo",
        "Resistente a vancomicina"
      ],
      "explicacion": "BORSA: hiperproducción de betalactamasa, sin mecA."
    },
    {
      "id": "resistencia-013",
      "nivel": "m",
      "pregunta": "La BLEE hidroliza:",
      "correcta": "Penicilinas, cefalosporinas de 3.ª generación y aztreonam",
      "distractores": [
        "Aminoglucósidos",
        "Vancomicina",
        "Solo penicilina",
        "Carbapenémicos"
      ],
      "pista": "El clavulanato la inhibe; los carbapenémicos la resisten.",
      "explicacion": "No hidroliza carbapenémicos; la inhibe el clavulanato."
    },
    {
      "id": "resistencia-014",
      "nivel": "d",
      "pregunta": "Confirmación de BLEE por doble disco: el halo de ceftazidima + clavulanato aumenta:",
      "correcta": "≥ 5 mm",
      "distractores": [
        "≥ 1 mm",
        "Disminuye",
        "No cambia",
        "≥ 20 mm"
      ],
      "explicacion": "Aumento ≥ 5 mm = BLEE (método más usado en MINSA/EsSalud)."
    },
    {
      "id": "resistencia-015",
      "nivel": "x",
      "pregunta": "Prueba para AmpC:",
      "correcta": "Disco con cloxacilina (aumento ≥ 5 mm) o doble disco con cefoxitina",
      "distractores": [
        "Tinta china",
        "Ácido borónico solo para BLEE",
        "Hodge modificado",
        "Coagulasa"
      ],
      "explicacion": "Cloxacilina ≥ 5 mm o cefoxitina como inductor con halo achatado."
    },
    {
      "id": "resistencia-016",
      "nivel": "x",
      "pregunta": "Bacterias típicas productoras de AmpC cromosómica:",
      "correcta": "Enterobacter cloacae, Citrobacter freundii, Serratia, Morganella, P. aeruginosa",
      "distractores": [
        "E. coli y Klebsiella",
        "Candida",
        "Streptococcus",
        "S. aureus"
      ],
      "explicacion": "Grupo 'SPICE/ESCPM'."
    },
    {
      "id": "resistencia-017",
      "nivel": "d",
      "pregunta": "¿Por qué AmpC es peligrosa?",
      "correcta": "Porque se induce in vivo: el paciente empieza sensible y al tratar con ceftriaxona se vuelve resistente",
      "distractores": [
        "Porque da fiebre",
        "Porque es plasmídica siempre",
        "Porque rompe vancomicina",
        "Porque no se detecta"
      ],
      "explicacion": "Inducción durante el tratamiento."
    },
    {
      "id": "resistencia-018",
      "nivel": "d",
      "pregunta": "Prueba de Hodge modificada con imagen en 'trébol' indica:",
      "correcta": "Carbapenemasa",
      "distractores": [
        "MRSA",
        "BLEE",
        "Sensibilidad",
        "AmpC"
      ],
      "explicacion": "Carbapenemasa; también Carba NP (cambio de color en ~2 h)."
    },
    {
      "id": "resistencia-019",
      "nivel": "m",
      "pregunta": "Carbapenemasa típica de Klebsiella pneumoniae:",
      "correcta": "KPC",
      "distractores": [
        "VIM",
        "NDM",
        "IMP",
        "OXA-48"
      ],
      "pista": "Su nombre lleva la inicial de la bacteria.",
      "explicacion": "KPC: K. pneumoniae; VIM/IMP: Pseudomonas, Acinetobacter."
    },
    {
      "id": "resistencia-020",
      "nivel": "x",
      "pregunta": "Sinergia con ácido borónico sugiere ___ y con EDTA/dipicolinato sugiere ___:",
      "correcta": "KPC / metalo-betalactamasa",
      "distractores": [
        "MRSA / BLEE",
        "VIM / KPC",
        "AmpC / KPC",
        "BLEE / AmpC"
      ],
      "explicacion": "Borónico → KPC; EDTA → metalo-betalactamasas (NDM, VIM, IMP)."
    },
    {
      "id": "resistencia-021",
      "nivel": "d",
      "pregunta": "En la placa de E. coli BLEE, ¿por qué se coloca el disco de AMC a 20–30 mm de CTX, CRO y ATM?",
      "correcta": "Para que el ácido clavulánico difunda y agrande el halo de las cefalosporinas (sinergia)",
      "distractores": [
        "Para que los halos no se toquen",
        "Porque AMC es el antibiótico de tratamiento",
        "Para detectar MRSA"
      ],
      "explicacion": "El clavulánico inhibe la BLEE. Si el halo de CTX/CRO/ATM se estira hacia AMC (efecto huevo o cerradura), se confirma la BLEE."
    },
    {
      "id": "resistencia-022",
      "nivel": "d",
      "pregunta": "Un S. aureus tiene un halo de 9 mm alrededor de oxacilina (S ≥ 13 / R ≤ 10). ¿Cuál es la interpretación y el tratamiento?",
      "correcta": "Resistente = MRSA; vancomicina",
      "distractores": [
        "Sensible; oxacilina",
        "Intermedio; dosis altas de oxacilina",
        "Resistente = BLEE; meropenem"
      ],
      "explicacion": "9 ≤ 10 → R. Oxacilina resistente = MRSA (gen mecA, PBP2a); no sirve ningún betalactámico → vancomicina."
    },
    {
      "id": "resistencia-023",
      "nivel": "d",
      "pregunta": "E. coli: halo de ceftriaxona 21 mm (S ≥ 23 / I 20–22 / R ≤ 19). El resultado es:",
      "correcta": "Intermedio",
      "distractores": [
        "Sensible",
        "Resistente",
        "No se puede interpretar"
      ],
      "explicacion": "21 está entre 20 y 22 → Intermedio."
    },
    {
      "id": "resistencia-024",
      "nivel": "d",
      "pregunta": "Klebsiella: halo de imipenem de 14 mm (S ≥ 23 / R ≤ 19), sin halo en ceftriaxona ni en aztreonam. ¿Qué sospechas?",
      "correcta": "Carbapenemasa (KPC); ceftazidima-avibactam o colistina",
      "distractores": [
        "BLEE; meropenem",
        "MRSA; vancomicina",
        "Sensible a todo"
      ],
      "explicacion": "Si también el carbapenémico es resistente → carbapenemasa. Una BLEE seguiría sensible a imipenem."
    },
    {
      "id": "resistencia-025",
      "nivel": "m",
      "pregunta": "En la placa de E. coli BLEE, ¿qué disco va cerca de CTX, CRO y ATM para demostrar la sinergia?",
      "correcta": "AMC (amoxicilina + ácido clavulánico)",
      "distractores": [
        "MEM (meropenem)",
        "OX (oxacilina)",
        "VA (vancomicina)"
      ],
      "pista": "El disco que lleva un inhibidor de betalactamasas.",
      "explicacion": "El clavulánico de AMC frena la BLEE; por eso el halo de las cefalosporinas se agranda hacia AMC."
    },
    {
      "id": "resistencia-026",
      "nivel": "m",
      "pregunta": "En la placa de E. coli, el halo de cefotaxima se “estira” hacia el disco de AMC con forma de huevo o cerradura. Esto significa:",
      "correcta": "Es BLEE (prueba de sinergia positiva)",
      "distractores": [
        "Es MRSA",
        "Es sensible a todo",
        "El disco está mal puesto"
      ],
      "pista": "Efecto huevo o cerradura.",
      "explicacion": "Es la sinergia del doble disco: el clavulánico inhibe la BLEE en esa zona y confirma el diagnóstico."
    },
    {
      "id": "resistencia-027",
      "nivel": "m",
      "pregunta": "¿Qué antibióticos DESTRUYE la BLEE?",
      "correcta": "Penicilinas, cefalosporinas de 3.ª y 4.ª generación y aztreonam",
      "distractores": [
        "Solo los carbapenémicos",
        "Vancomicina",
        "Ninguno"
      ],
      "pista": "No destruye los carbapenémicos.",
      "explicacion": "La BLEE rompe penicilinas, CRO, CTX, CAZ, FEP y ATM. No rompe los carbapenémicos y la frena el clavulánico."
    },
    {
      "id": "resistencia-028",
      "nivel": "d",
      "pregunta": "En la placa de K. pneumoniae BLEE (MEM, IPM, PTZ, ATM, CIP, GM), ¿qué esperas ver?",
      "correcta": "ATM sin halo o con halo pequeño; MEM e IPM con halo grande",
      "distractores": [
        "Sin halo en MEM ni IPM; halo grande en ATM",
        "Todos con halo grande",
        "Ningún halo"
      ],
      "explicacion": "Es resistente a aztreonam y sensible a carbapenémicos. Si MEM e IPM tampoco tuvieran halo, sería carbapenemasa (KPC)."
    },
    {
      "id": "resistencia-029",
      "nivel": "m",
      "pregunta": "¿Cuál es el mecanismo de resistencia del MRSA?",
      "correcta": "Gen mecA → proteína PBP2a: ningún betalactámico se puede unir",
      "distractores": [
        "Produce BLEE",
        "Produce carbapenemasa",
        "Tiene cápsula"
      ],
      "pista": "No rompe el antibiótico: cambia el blanco.",
      "explicacion": "El MRSA no rompe el antibiótico: cambia el blanco (PBP2a). Por eso no sirve ningún betalactámico, ni con clavulánico."
    },
    {
      "id": "resistencia-030",
      "nivel": "d",
      "pregunta": "En el panel de S. aureus (CIP, DO, AMX, OX, GM, B4, VA), ¿cuál es el disco que delata al MRSA?",
      "correcta": "OX (oxacilina), sin halo",
      "distractores": [
        "VA (vancomicina)",
        "CIP (ciprofloxacino)",
        "B4 (bacitracina)"
      ],
      "explicacion": "Oxacilina resistente = MRSA. En el panel típico salen resistentes DO, AMX, OX, GM y B4, y sensibles CIP y VA."
    },
    {
      "id": "resistencia-031",
      "nivel": "f",
      "pregunta": "Tratamiento del MRSA:",
      "correcta": "Vancomicina",
      "distractores": [
        "Amoxicilina-clavulánico",
        "Meropenem",
        "Ceftriaxona"
      ],
      "pista": "Un glucopéptido.",
      "explicacion": "Vancomicina; también linezolid. En el MRSA no sirve ningún betalactámico, tampoco los carbapenémicos."
    },
    {
      "id": "resistencia-032",
      "nivel": "m",
      "pregunta": "S. aureus con halo de oxacilina de 8 mm (S ≥ 13 / R ≤ 10). Resultado:",
      "correcta": "Resistente → MRSA",
      "distractores": [
        "Sensible",
        "Intermedio",
        "Hay que repetirlo"
      ],
      "pista": "8 es menor o igual que 10.",
      "explicacion": "8 ≤ 10 → R. Además, la oxacilina no tiene intermedio."
    },
    {
      "id": "resistencia-033",
      "nivel": "m",
      "pregunta": "E. coli con halo de cefotaxima de 24 mm (S ≥ 26 / I 23–25 / R ≤ 22). Resultado:",
      "correcta": "Intermedio",
      "distractores": [
        "Sensible",
        "Resistente",
        "No aplica"
      ],
      "pista": "Compara 24 con 23–25.",
      "explicacion": "24 está entre 23 y 25 → Intermedio. La cefotaxima pide un halo muy grande (≥ 26) para ser sensible."
    },
    {
      "id": "resistencia-034",
      "nivel": "f",
      "pregunta": "E. coli con halo de amoxicilina/clavulánico de 20 mm (S ≥ 18 / I 14–17 / R ≤ 13). Resultado:",
      "correcta": "Sensible",
      "distractores": [
        "Intermedio",
        "Resistente",
        "MRSA"
      ],
      "pista": "Compara 20 con 18.",
      "explicacion": "20 ≥ 18 → Sensible."
    },
    {
      "id": "resistencia-035",
      "nivel": "x",
      "pregunta": "E. coli: ceftriaxona 15 mm (R ≤ 19), cefotaxima 18 mm (R ≤ 22), imipenem 27 mm (S ≥ 23). ¿Qué es y cómo se trata?",
      "correcta": "BLEE; carbapenémico (imipenem o meropenem)",
      "distractores": [
        "Sensible a todo; ceftriaxona",
        "Carbapenemasa; colistina",
        "MRSA; vancomicina"
      ],
      "explicacion": "Resistente a cefalosporinas de 3.ª generación y sensible al carbapenémico = BLEE."
    },
    {
      "id": "resistencia-036",
      "nivel": "d",
      "pregunta": "Klebsiella con halo de imipenem de 14 mm (S ≥ 23 / R ≤ 19) y sin halo en cefalosporinas. Sospechas:",
      "correcta": "Carbapenemasa (KPC)",
      "distractores": [
        "BLEE",
        "AmpC",
        "Sensible"
      ],
      "explicacion": "14 ≤ 19 → resistente incluso al carbapenémico = KPC. Tratamiento de referencia: ceftazidima-avibactam o colistina."
    },
    {
      "id": "resistencia-037",
      "nivel": "m",
      "pregunta": "¿Cómo se mide el halo de inhibición?",
      "correcta": "Diámetro en mm, incluyendo el disco",
      "distractores": [
        "Radio, sin contar el disco",
        "En cm, solo el disco",
        "A ojo, sin regla"
      ],
      "pista": "Se usa regla o calibrador.",
      "explicacion": "Se mide el diámetro en mm, con el disco incluido, usando regla o calibrador. Luego se compara con la tabla CLSI."
    },
    {
      "id": "resistencia-038",
      "nivel": "m",
      "pregunta": "Antibiograma con NINGÚN halo en ningún disco (resistente a 3 o más familias). Se reporta como:",
      "correcta": "MDR (multidrogorresistente)",
      "distractores": [
        "BLEE",
        "MRSA",
        "Sensible"
      ],
      "pista": "Resistente a 3 o más familias.",
      "explicacion": "MDR = resistente a 3 o más familias de antibióticos."
    }
  ]
};
