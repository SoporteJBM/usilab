// Estación: Bacterias
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Estacion } from "../types";

export const bacterias: Estacion = {
  "id": "bacterias",
  "nombre": "Bacterias",
  "descripcion": "Identificación en el laboratorio y resistencia",
  "resumen": "Ideas clave:\n• Gram positivas: pared gruesa; Gram negativas: pared delgada con membrana externa.\n• Resistencia: mecA (MRSA), D-Ala-D-Lac (enterococo resistente a vancomicina), BLEE, AmpC, KPC.\n• Proteus: ureasa +++, H₂S +, swarming. Klebsiella: mucoide, inmóvil.",
  "preguntas": [
    {
      "id": "bacterias-001",
      "nivel": "f",
      "pregunta": "¿Por qué una bacteria Gram negativa se decolora con alcohol-acetona?",
      "correcta": "Su pared delgada y su membrana externa no retienen el cristal violeta",
      "distractores": [
        "Tiene cápsula gruesa",
        "Tiene flagelos",
        "Carece de ribosomas"
      ],
      "pista": "Piensa en el peptidoglicano.",
      "explicacion": "Por eso toma el color de la safranina."
    },
    {
      "id": "bacterias-002",
      "nivel": "m",
      "pregunta": "¿Qué gen confiere resistencia a meticilina en Staphylococcus aureus?",
      "correcta": "mecA",
      "distractores": [
        "vanA",
        "tetM",
        "gyrA"
      ],
      "pista": "Codifica una PBP alterada.",
      "explicacion": "mecA codifica PBP2a, a la que los β-lactámicos casi no se unen."
    },
    {
      "id": "bacterias-003",
      "nivel": "f",
      "pregunta": "¿Cuál es el blanco de los β-lactámicos?",
      "correcta": "Las transpeptidasas (PBP)",
      "distractores": [
        "La membrana citoplasmática",
        "El ribosoma 30S",
        "La ADN girasa"
      ],
      "pista": "Cierran las cadenas de peptidoglicano.",
      "explicacion": "Sin transpeptidasas, la pared no se arma."
    },
    {
      "id": "bacterias-004",
      "nivel": "d",
      "pregunta": "¿Cómo se vuelve resistente Enterococcus a la vancomicina?",
      "correcta": "Cambia D-Ala-D-Ala por D-Ala-D-Lac",
      "distractores": [
        "Bomba de expulsión",
        "Enzima que degrada el antibiótico",
        "Membrana impermeable"
      ],
      "pista": "El cambio está en el sitio de unión.",
      "explicacion": "D-Ala-D-Lac tiene mucha menor afinidad por la vancomicina."
    },
    {
      "id": "bacterias-005",
      "nivel": "f",
      "pregunta": "S. aureus sin halo alrededor de oxacilina y con halo grande en vancomicina. ¿Qué es y cómo se trata?",
      "correcta": "MRSA; vancomicina",
      "distractores": [
        "MSSA; oxacilina",
        "MRSA; amoxicilina",
        "BLEE; meropenem"
      ],
      "pista": "Resistente a oxacilina = resistente a todos los β-lactámicos.",
      "explicacion": "Oxacilina resistente indica MRSA."
    },
    {
      "id": "bacterias-006",
      "nivel": "f",
      "pregunta": "Orina con pH 8.5, olor amoniacal y cristales de estruvita. Bacteria sospechosa:",
      "correcta": "Proteus mirabilis",
      "distractores": [
        "Escherichia coli",
        "Enterococcus",
        "Klebsiella"
      ],
      "pista": "Tiene ureasa muy activa.",
      "explicacion": "La ureasa alcaliniza la orina y precipita estruvita."
    },
    {
      "id": "bacterias-007",
      "nivel": "m",
      "pregunta": "Bacilo Gram negativo lactosa negativo, H₂S +, indol −, ureasa +++ y swarming en agar sangre:",
      "correcta": "Proteus mirabilis",
      "distractores": [
        "Escherichia coli",
        "Klebsiella pneumoniae",
        "Morganella morganii"
      ],
      "pista": "El swarming es la clave.",
      "explicacion": "Morganella es H₂S − e indol +."
    },
    {
      "id": "bacterias-008",
      "nivel": "m",
      "pregunta": "Colonia rosada muy mucoide en MacConkey, indol −, citrato + e inmóvil:",
      "correcta": "Klebsiella pneumoniae",
      "distractores": [
        "Escherichia coli",
        "Proteus mirabilis",
        "Salmonella"
      ],
      "pista": "Lo mucoide viene de la cápsula.",
      "explicacion": "Fermenta lactosa (rosada) y es inmóvil."
    },
    {
      "id": "bacterias-009",
      "nivel": "f",
      "pregunta": "Nitritos positivos en la tira reactiva de orina indican:",
      "correcta": "Bacterias Gram negativas que reducen nitratos",
      "distractores": [
        "Hematuria",
        "Diabetes",
        "Deshidratación"
      ],
      "pista": "Es una enzima bacteriana.",
      "explicacion": "E. coli y otras enterobacterias tienen nitrato reductasa."
    },
    {
      "id": "bacterias-010",
      "nivel": "f",
      "pregunta": "En la tinción de Ziehl-Neelsen, los BAAR se ven:",
      "correcta": "Rojos sobre fondo azul",
      "distractores": [
        "Azules sobre fondo rojo",
        "Morados",
        "Verdes"
      ],
      "pista": "Retienen el primer colorante.",
      "explicacion": "Los ácidos micólicos retienen la fucsina; el contraste es azul de metileno."
    },
    {
      "id": "bacterias-011",
      "nivel": "d",
      "pregunta": "Factor de virulencia de S. pyogenes que evita la fagocitosis uniéndose al factor H y al fibrinógeno:",
      "correcta": "Proteína M",
      "distractores": [
        "Estreptolisina O",
        "Estreptoquinasa",
        "Toxina eritrogénica"
      ],
      "pista": "Es una proteína de superficie.",
      "explicacion": "Impide el depósito de C3b sobre la bacteria."
    },
    {
      "id": "bacterias-012",
      "nivel": "f",
      "pregunta": "Causa más frecuente de pielonefritis aguda:",
      "correcta": "Bacilos entéricos Gram negativos",
      "distractores": [
        "Estafilococos",
        "Estreptococos",
        "Enterococos"
      ],
      "pista": "Piensa en E. coli.",
      "explicacion": "E. coli asciende desde la vejiga."
    },
    {
      "id": "bacterias-013",
      "nivel": "f",
      "pregunta": "¿Qué prueba separa Staphylococcus de Streptococcus?",
      "correcta": "Catalasa",
      "distractores": [
        "Coagulasa",
        "Oxidasa",
        "Ureasa"
      ],
      "pista": "Burbujas con agua oxigenada.",
      "explicacion": "Staphylococcus es catalasa positivo; Streptococcus, negativo."
    },
    {
      "id": "bacterias-014",
      "nivel": "m",
      "pregunta": "¿Qué prueba separa S. aureus de los demás estafilococos?",
      "correcta": "Coagulasa",
      "distractores": [
        "Catalasa",
        "Oxidasa",
        "Indol"
      ],
      "pista": "Coagula el plasma.",
      "explicacion": "S. aureus es coagulasa positivo; S. epidermidis, negativo."
    },
    {
      "id": "bacterias-015",
      "nivel": "d",
      "pregunta": "Enterococcus es naturalmente resistente a:",
      "correcta": "Cefalosporinas",
      "distractores": [
        "Ampicilina",
        "Vancomicina",
        "Linezolid"
      ],
      "pista": "Es una resistencia intrínseca, no adquirida.",
      "explicacion": "Por eso nunca se trata un enterococo con cefalosporinas."
    },
    {
      "id": "bacterias-016",
      "nivel": "d",
      "pregunta": "¿Por qué una ITU por Proteus mirabilis no se trata con nitrofurantoína?",
      "correcta": "Tiene resistencia natural a la nitrofurantoína",
      "distractores": [
        "La nitrofurantoína no llega a la orina",
        "Proteus es Gram positivo",
        "La orina alcalina activa el fármaco"
      ],
      "pista": "Es intrínseca.",
      "explicacion": "Además, la orina alcalina por la ureasa reduce su actividad."
    },
    {
      "id": "bacterias-017",
      "nivel": "d",
      "pregunta": "En el laboratorio, además de la oxacilina, ¿qué disco se usa para detectar MRSA?",
      "correcta": "Cefoxitina",
      "distractores": [
        "Vancomicina",
        "Bacitracina",
        "Optoquina"
      ],
      "pista": "Es una cefamicina.",
      "explicacion": "La cefoxitina es mejor inductor de mecA y da resultados más claros."
    },
    {
      "id": "bacterias-018",
      "nivel": "d",
      "pregunta": "Bacilo Gram negativo no fermentador, oxidasa positivo, con pigmento verde-azulado y olor a uvas:",
      "correcta": "Pseudomonas aeruginosa",
      "distractores": [
        "Klebsiella pneumoniae",
        "Proteus mirabilis",
        "Escherichia coli"
      ],
      "pista": "Es típico de quemados y pacientes en UCI.",
      "explicacion": "El pigmento es la piocianina."
    },
    {
      "id": "bacterias-019",
      "nivel": "x",
      "pregunta": "S. aureus resistente a eritromicina y con halo 'sensible' a clindamicina, pero el halo de clindamicina se aplana junto al disco de eritromicina (prueba D positiva). ¿Qué haces?",
      "correcta": "Reportar clindamicina como resistente: hay resistencia inducible",
      "distractores": [
        "Usar clindamicina: el halo es sensible",
        "Repetir con McFarland 3",
        "Reportarlo como MRSA",
        "Agregar vancomicina al disco"
      ],
      "explicacion": "La eritromicina induce el gen erm, que también inactiva a la clindamicina durante el tratamiento."
    },
    {
      "id": "bacterias-020",
      "nivel": "x",
      "pregunta": "¿Por qué la vancomicina no sirve contra bacterias Gram negativas?",
      "correcta": "Es una molécula muy grande que no atraviesa la membrana externa",
      "distractores": [
        "Las Gram negativas no tienen peptidoglicano",
        "La destruyen las β-lactamasas",
        "Las Gram negativas no tienen D-Ala-D-Ala",
        "Se une al ribosoma 50S, que ellas no tienen"
      ],
      "explicacion": "Su blanco existe en ambas, pero en las Gram negativas no lo alcanza."
    },
    {
      "id": "bacterias-021",
      "nivel": "x",
      "pregunta": "¿Qué toxina inactiva la subunidad 60S del ribosoma y se asocia al síndrome urémico hemolítico?",
      "correcta": "Toxina Shiga",
      "distractores": [
        "Toxina colérica",
        "Toxina termolábil",
        "Toxina diftérica",
        "Enterotoxina de S. aureus"
      ],
      "explicacion": "La diftérica también frena la síntesis de proteínas, pero actúa sobre el factor de elongación 2."
    },
    {
      "id": "bacterias-022",
      "nivel": "x",
      "pregunta": "¿Por qué Mycoplasma pneumoniae no responde a los β-lactámicos?",
      "correcta": "No tiene pared celular",
      "distractores": [
        "Produce β-lactamasas",
        "Tiene PBP2a",
        "Es intracelular estricto",
        "Tiene ácidos micólicos"
      ],
      "explicacion": "Se trata con macrólidos o tetraciclinas."
    },
    {
      "id": "bacterias-023",
      "nivel": "x",
      "pregunta": "Diplococos Gram positivos lanceolados, colonias con hemólisis alfa y sensibles a optoquina:",
      "correcta": "Streptococcus pneumoniae",
      "distractores": [
        "Streptococcus del grupo viridans",
        "Enterococcus faecalis",
        "Staphylococcus aureus",
        "Streptococcus pyogenes"
      ],
      "explicacion": "Viridans también da hemólisis alfa, pero es resistente a la optoquina."
    },
    {
      "id": "bacterias-024",
      "nivel": "f",
      "pregunta": "Colonia rosada, plana y seca en MacConkey, indol positivo:",
      "correcta": "Escherichia coli",
      "distractores": [
        "Klebsiella pneumoniae",
        "Proteus mirabilis",
        "Salmonella"
      ],
      "pista": "Fermenta lactosa y no es mucoide.",
      "explicacion": "Klebsiella también es rosada, pero muy mucoide e indol negativo."
    },
    {
      "id": "bacterias-025",
      "nivel": "m",
      "pregunta": "En el Perú, ¿qué especie de Shigella es la más frecuente?",
      "correcta": "Shigella flexneri",
      "distractores": [
        "Shigella sonnei",
        "Shigella dysenteriae",
        "Shigella boydii"
      ],
      "pista": "Está en la lista de patógenos del coprocultivo.",
      "explicacion": "Práctica 4: patógenos más frecuentes en Perú."
    },
    {
      "id": "bacterias-026",
      "nivel": "m",
      "pregunta": "¿Qué examen se usa para seguir a un portador crónico de Salmonella Typhi?",
      "correcta": "Coprocultivo",
      "distractores": [
        "Urocultivo",
        "Examen completo de orina",
        "Coprológico directo"
      ],
      "pista": "Hay que aislar la bacteria de las heces.",
      "explicacion": "Práctica 4: el seguimiento de portadores crónicos es una indicación del coprocultivo."
    },
    {
      "id": "bacterias-027",
      "nivel": "m",
      "pregunta": "¿Por qué Klebsiella pneumoniae se ve muy mucoide en MacConkey?",
      "correcta": "Por su cápsula",
      "distractores": [
        "Porque produce H₂S",
        "Porque hace swarming",
        "Porque no fermenta lactosa"
      ],
      "pista": "Es una estructura de superficie.",
      "explicacion": "La cápsula también la hace más resistente a la fagocitosis."
    },
    {
      "id": "bacterias-028",
      "nivel": "d",
      "pregunta": "Bacteria del coprocultivo que necesita microaerofilia y hasta 72 horas de incubación:",
      "correcta": "Campylobacter jejuni",
      "distractores": [
        "Salmonella",
        "Shigella",
        "Escherichia coli"
      ],
      "pista": "Tiene su propio agar.",
      "explicacion": "Práctica 4: agar Campylobacter en microaerofilia; el resto se lee a las 24–48 h."
    },
    {
      "id": "bacterias-029",
      "nivel": "d",
      "pregunta": "Bacilo Gram negativo H₂S negativo, indol positivo y ureasa positiva:",
      "correcta": "Morganella morganii",
      "distractores": [
        "Proteus mirabilis",
        "Klebsiella pneumoniae",
        "Salmonella"
      ],
      "pista": "Es lo contrario de Proteus en H₂S e indol.",
      "explicacion": "Proteus mirabilis es H₂S positivo e indol negativo."
    },
    {
      "id": "bacterias-030",
      "nivel": "d",
      "pregunta": "Colonias rugosas, secas, color crema 'en coliflor', que aparecen recién en la cuarta semana en Löwenstein-Jensen:",
      "correcta": "Mycobacterium tuberculosis",
      "distractores": [
        "Klebsiella pneumoniae",
        "Candida albicans",
        "Proteus mirabilis"
      ],
      "pista": "Se replica cada 18 a 24 horas.",
      "explicacion": "Por eso el cultivo tarda de 3 a 8 semanas."
    },
    {
      "id": "bacterias-031",
      "nivel": "d",
      "pregunta": "Orina de color verde en un paciente con sonda sugiere infección por:",
      "correcta": "Pseudomonas aeruginosa",
      "distractores": [
        "Escherichia coli",
        "Proteus mirabilis",
        "Klebsiella pneumoniae"
      ],
      "pista": "Está en la tabla de colores de orina.",
      "explicacion": "Práctica 4: orina verde por Pseudomonas o fístula intestinal; también por azul de metileno."
    },
    {
      "id": "bacterias-032",
      "nivel": "x",
      "pregunta": "Manipulador de alimentos con fiebre prolongada. Coprocultivo: colonias lactosa negativas en MacConkey y rojas con centro negro en XLD. ¿Qué es y qué implica?",
      "correcta": "Salmonella: hay que descartar portador crónico de S. Typhi con coprocultivos de seguimiento",
      "distractores": [
        "Shigella: no requiere seguimiento",
        "E. coli: es flora normal",
        "Campylobacter: repetir en microaerofilia",
        "Proteus: contaminación con orina"
      ],
      "explicacion": "El centro negro es H₂S; Shigella sale roja sin centro negro."
    },
    {
      "id": "bacterias-033",
      "nivel": "x",
      "pregunta": "S. aureus resistente a oxacilina. ¿Qué otro β-lactámico sirve?",
      "correcta": "Ninguno: MRSA es resistente a todos los β-lactámicos",
      "distractores": [
        "Ceftriaxona",
        "Amoxicilina-clavulánico",
        "Meropenem"
      ],
      "explicacion": "Banco de laboratorio: oxacilina resistente = MRSA = resistente a todos los β-lactámicos; se usa vancomicina."
    },
    {
      "id": "bacterias-034",
      "nivel": "x",
      "pregunta": "ITU en paciente con sonda: bacilo con swarming, TSI K/A con H₂S, indol negativo y ureasa +++. ¿Por qué importa identificarlo?",
      "correcta": "Es Proteus mirabilis: forma cálculos de estruvita, obliga a cambiar la sonda y no responde a nitrofurantoína",
      "distractores": [
        "Es E. coli: basta con nitrofurantoína",
        "Es Klebsiella: requiere carbapenémico siempre",
        "Es Morganella: no causa ITU",
        "Es contaminación: no se trata"
      ],
      "explicacion": "La ureasa alcaliniza la orina y precipita estruvita sobre la sonda."
    },
    {
      "id": "bacterias-035",
      "nivel": "x",
      "pregunta": "K. pneumoniae resistente a ceftriaxona, con sinergia hacia amoxicilina-clavulánico y sensible a meropenem, en una neumonía grave. ¿Tratamiento?",
      "correcta": "Meropenem: es productora de BLEE",
      "distractores": [
        "Ceftriaxona a dosis alta",
        "Amoxicilina-clavulánico",
        "Ciprofloxacino sin antibiograma",
        "Vancomicina"
      ],
      "explicacion": "La sinergia con clavulánico marca BLEE; en infección grave, carbapenémico."
    },
    {
      "id": "bacterias-036",
      "nivel": "x",
      "pregunta": "K. pneumoniae en UCI sin halo en ningún disco, ni siquiera imipenem ni meropenem. ¿Mecanismo y manejo?",
      "correcta": "Carbapenemasa (KPC): ceftazidima-avibactam o colistina, con infectología",
      "distractores": [
        "BLEE: meropenem",
        "AmpC: cefepime",
        "Contaminación: no tratar",
        "MRSA: vancomicina"
      ],
      "explicacion": "Banco de laboratorio, caso C19."
    }
  ]
};
