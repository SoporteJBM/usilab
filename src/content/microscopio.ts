// Microscopio: estructuras, pares que se confunden y fotos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { AgenteMicroscopio, Foto, Par, TemaLectura } from "./types";

export const MICROSCOPIO: TemaLectura = {
  "id": "microscopio",
  "nombre": "Microscopio",
  "descripcion": "Fotos del laboratorio y de atlas, criterios y pares que se confunden",
  "resumen": "Para reconocer una lámina, mira tres cosas: si las hifas tienen tabiques, qué forma tienen los conidios y dónde están. El mapa de cobertura muestra qué tenemos de cada estructura."
};

export const AGENTES_MICROSCOPIO: AgenteMicroscopio[] = [
  {
    "grupo": "Hongos",
    "nombre": "Candida albicans",
    "criterio": "Pseudohifas con blastoconidias en racimos y clamidoconidias redondas de pared gruesa en la punta.",
    "produce": "Candidiasis: muguet, vulvovaginitis, intertrigo, candidemia por catéter.",
    "tratamiento": "Muguet: nistatina. Vulvovaginitis: fluconazol. Candidemia: equinocandina y retirar el catéter.",
    "clave": "Clamidoconidias redondas en la punta de las pseudohifas."
  },
  {
    "grupo": "Hongos",
    "nombre": "Aspergillus",
    "criterio": "Hifas septadas hialinas; conidióforo largo que termina en una vesícula con fiálides y cadenas de conidios radiadas (cabeza aspergilar).",
    "produce": "Aspergilosis invasiva (signo del halo), aspergiloma, ABPA, otomicosis (A. niger).",
    "tratamiento": "Voriconazol. Aspergiloma: cirugía. ABPA: corticoides e itraconazol.",
    "clave": "Cabeza redonda (vesícula) en la punta de un tallo largo."
  },
  {
    "grupo": "Hongos",
    "nombre": "Fusarium",
    "criterio": "Hifas septadas con macroconidias en canoa o media luna, multiseptadas.",
    "produce": "Queratitis por trauma vegetal o lentes de contacto; fusariosis diseminada en neutropénicos.",
    "tratamiento": "Queratitis: natamicina tópica. Diseminada: voriconazol con o sin anfotericina B.",
    "clave": "Macroconidias en canoa o media luna."
  },
  {
    "grupo": "Hongos",
    "nombre": "Trichophyton mentagrophytes",
    "criterio": "Microconidios redondos en racimos, como uvas, e hifas en espiral.",
    "produce": "Tinea pedis inflamatoria, tinea corporis, tinea barbae, querion.",
    "tratamiento": "Terbinafina tópica u oral.",
    "clave": "Hifas en espiral y microconidios en racimo de uvas."
  },
  {
    "grupo": "Hongos",
    "nombre": "Trichophyton rubrum",
    "criterio": "Hifas septadas delgadas con pocos conidios; cuando aparecen, son microconidios en lágrima pegados a la hifa. Colonia con reverso rojo vinoso.",
    "produce": "Tinea pedis crónica, onicomicosis, tinea cruris y corporis.",
    "tratamiento": "Terbinafina oral (onicomicosis: 12 semanas).",
    "clave": "Hifas finas casi sin conidios; lágrimas pegadas a la hifa."
  },
  {
    "grupo": "Hongos",
    "nombre": "Epidermophyton floccosum",
    "criterio": "Macroconidios en mazo, de pared lisa y 2 a 4 células, en grupos. Sin microconidios.",
    "produce": "Tinea pedis, cruris, corporis y onicomicosis. Nunca afecta el pelo.",
    "tratamiento": "Terbinafina o azoles tópicos.",
    "clave": "Macroconidios en mazo, lisos, en grupos."
  },
  {
    "grupo": "Hongos",
    "nombre": "Cladosporium",
    "criterio": "Hongo dematiáceo (marrón): conidios pequeños y ovalados en cadenas ramificadas, con células escudo.",
    "produce": "Contaminante y alérgeno (asma, rinitis); rara vez feohifomicosis.",
    "tratamiento": "Itraconazol (referencia).",
    "clave": "Conidios pequeños en cadenas ramificadas."
  },
  {
    "grupo": "Hongos",
    "nombre": "Alternaria",
    "criterio": "Hongo dematiáceo: conidios grandes, marrones y muriformes (tabiques transversales y longitudinales), en forma de maza con pico, en cadena.",
    "produce": "Alérgeno (sinusitis fúngica alérgica, asma); feohifomicosis y queratitis en inmunodeprimidos.",
    "tratamiento": "Itraconazol o voriconazol, con o sin cirugía (referencia).",
    "clave": "Conidios grandes con tabiques en dos direcciones."
  },
  {
    "grupo": "Hongos",
    "nombre": "Paracoccidioides brasiliensis",
    "criterio": "Levadura madre grande con múltiples gemaciones alrededor: rueda de timón.",
    "produce": "Paracoccidioidomicosis: agricultor con tos crónica, BK negativa, úlceras orales moriformes y adenopatías.",
    "tratamiento": "Itraconazol; en casos graves, anfotericina B.",
    "clave": "Rueda de timón."
  },
  {
    "grupo": "Hongos",
    "nombre": "Sporothrix schenckii",
    "criterio": "Hifas delgadas septadas con conidios en margarita o roseta en la punta (fase moho, 25 °C). En tejido: levaduras en forma de puro.",
    "produce": "Esporotricosis linfocutánea: pinchazo con rosal o madera y nódulos en cadena que suben por los linfáticos.",
    "tratamiento": "Itraconazol (alternativa: yoduro de potasio).",
    "clave": "Conidios en margarita en la punta."
  },
  {
    "grupo": "Hongos",
    "nombre": "Rhizopus",
    "criterio": "Hifas anchas, no septadas, con esporangios redondos y rizoides.",
    "produce": "Mucormicosis rinocerebral (diabético en cetoacidosis, escara negra en el paladar) o pulmonar (halo invertido).",
    "tratamiento": "Anfotericina B liposomal, desbridamiento quirúrgico y control de la glucosa.",
    "clave": "Hifas anchas sin tabiques y esporangios."
  },
  {
    "grupo": "Hongos",
    "nombre": "Histoplasma capsulatum",
    "criterio": "Fase moho: macroconidias tuberculadas, redondas con espinas. En tejido: levaduras pequeñas dentro de macrófagos.",
    "produce": "Histoplasmosis: cuevas y murciélagos (Tingo María); diseminada en VIH.",
    "tratamiento": "Itraconazol; en casos graves, anfotericina B.",
    "clave": "Macroconidias redondas con espinas."
  },
  {
    "grupo": "Hongos",
    "nombre": "Microsporum canis",
    "criterio": "Macroconidios en huso, de pared gruesa y rugosa, con muchos tabiques.",
    "produce": "Tinea capitis en niños con gatos o perros; tinea corporis.",
    "tratamiento": "Griseofulvina oral.",
    "clave": "Huso de pared gruesa y rugosa."
  },
  {
    "grupo": "Hongos",
    "nombre": "Penicillium",
    "criterio": "Hifas septadas con conidióforos ramificados en pincel, sin vesícula, y cadenas de conidios.",
    "produce": "Sobre todo contaminante ambiental.",
    "tratamiento": "Generalmente no requiere tratamiento.",
    "clave": "Pincel sin vesícula."
  },
  {
    "grupo": "Bacterias",
    "nombre": "Mycobacterium tuberculosis",
    "criterio": "Ziehl-Neelsen: bacilos rojos o fucsia, delgados, rectos o curvos, a veces en cordones, sobre fondo azul.",
    "produce": "Tuberculosis pulmonar.",
    "tratamiento": "HRZE 2 meses y HR 4 meses. Si hay resistencia: BPaLM.",
    "clave": "Bacilos rojos sobre fondo azul."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Leucocitos",
    "criterio": "Células granulosas con núcleo lobulado, más grandes que los hematíes. Normal: 0 a 5 por campo.",
    "produce": "Más de 5 por campo es piuria: infección urinaria (si es intensa, pielonefritis).",
    "tratamiento": "Según urocultivo y antibiograma.",
    "clave": "Núcleo lobulado y granulaciones."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Células epiteliales escamosas",
    "criterio": "Células grandes, planas y poligonales, con un núcleo pequeño central, como huevo frito.",
    "produce": "Más de 15 por campo indica muestra contaminada.",
    "tratamiento": "Repetir la muestra (chorro medio con higiene previa).",
    "clave": "Huevo frito."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Trichomonas vaginalis",
    "criterio": "Protozoo en forma de pera, con flagelos y movimiento.",
    "produce": "Tricomoniasis (ITS): flujo amarillo-verdoso espumoso.",
    "tratamiento": "Metronidazol a la paciente y a su pareja.",
    "clave": "Pera con flagelos que se mueve."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Cilindros urinarios",
    "criterio": "Molde alargado de bordes paralelos, formado en los túbulos renales.",
    "produce": "Hialino: normal o deshidratación. Leucocitario: pielonefritis. Hemático: glomerulonefritis. Granuloso: daño tubular.",
    "tratamiento": "Según la causa.",
    "clave": "Molde alargado de bordes paralelos."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Levaduras en orina",
    "criterio": "Células ovaladas con gemación, a veces con pseudohifas.",
    "produce": "Candiduria: diabético, paciente con sonda, uso de antibióticos.",
    "tratamiento": "Retirar o cambiar la sonda; fluconazol si hay síntomas.",
    "clave": "Ovaladas con brotes."
  },
  {
    "grupo": "Sedimento urinario",
    "nombre": "Hematíes",
    "criterio": "Discos pequeños y lisos, sin núcleo, con el centro más claro. Normal: 0 a 2 por campo.",
    "produce": "Hematuria: ITU, litiasis, tumor; con cilindros hemáticos, glomerulonefritis.",
    "tratamiento": "Según la causa.",
    "clave": "Discos sin núcleo."
  }
];

export const PARES: Par[] = [
  {
    "a": "Aspergillus",
    "b": "Penicillium",
    "diferencia": "Aspergillus termina en una vesícula redonda; Penicillium se ramifica en pincel y no tiene vesícula."
  },
  {
    "a": "Trichophyton rubrum",
    "b": "Trichophyton mentagrophytes",
    "diferencia": "T. rubrum tiene microconidios en lágrima pegados a la hifa; T. mentagrophytes, microconidios redondos en racimo e hifas en espiral."
  },
  {
    "a": "Fusarium",
    "b": "Microsporum canis",
    "diferencia": "Fusarium: macroconidias en canoa, de pared delgada. Microsporum: huso de pared gruesa y rugosa."
  },
  {
    "a": "Microsporum canis",
    "b": "Epidermophyton floccosum",
    "diferencia": "Microsporum: huso rugoso con muchos tabiques. Epidermophyton: mazo liso de 2 a 4 células, en grupos."
  },
  {
    "a": "Cladosporium",
    "b": "Alternaria",
    "diferencia": "Cladosporium: conidios pequeños en cadenas ramificadas. Alternaria: conidios grandes con tabiques en dos direcciones."
  },
  {
    "a": "Rhizopus",
    "b": "Aspergillus",
    "diferencia": "Rhizopus: hifas anchas sin tabiques y esporangios. Aspergillus: hifas septadas y vesícula con fiálides."
  },
  {
    "a": "Candida albicans",
    "b": "Paracoccidioides brasiliensis",
    "diferencia": "Candida: pseudohifas y clamidoconidias. Paracoccidioides: levadura grande con muchas gemaciones, en rueda de timón."
  },
  {
    "a": "Leucocitos",
    "b": "Hematíes",
    "diferencia": "Los leucocitos tienen núcleo lobulado y granulaciones; los hematíes son discos sin núcleo."
  }
];

/** Fotos del laboratorio del curso y de atlas de referencia (carpeta public/img). */
export const FOTOS: Foto[] = [
  {
    "agente": "Cladosporium",
    "numero": 2,
    "archivo": "img/foto-02.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton rubrum",
    "numero": 9,
    "archivo": "img/foto-09.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton rubrum",
    "numero": 11,
    "archivo": "img/foto-11.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton mentagrophytes",
    "numero": 15,
    "archivo": "img/foto-15.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton mentagrophytes",
    "numero": 24,
    "archivo": "img/foto-24.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton mentagrophytes",
    "numero": 27,
    "archivo": "img/foto-27.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Fusarium",
    "numero": 32,
    "archivo": "img/foto-32.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Fusarium",
    "numero": 35,
    "archivo": "img/foto-35.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Fusarium",
    "numero": 37,
    "archivo": "img/foto-37.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Aspergillus",
    "numero": 46,
    "archivo": "img/foto-46.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Candida albicans",
    "numero": 58,
    "archivo": "img/foto-58.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Candida albicans",
    "numero": 59,
    "archivo": "img/foto-59.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Candida albicans",
    "numero": 101,
    "archivo": "img/foto-101.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Candida albicans",
    "numero": 102,
    "archivo": "img/foto-102.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Aspergillus",
    "numero": 103,
    "archivo": "img/foto-103.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Aspergillus",
    "numero": 104,
    "archivo": "img/foto-104.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Aspergillus",
    "numero": 105,
    "archivo": "img/foto-105.jpg",
    "fuente": "laboratorio",
    "especie": "Aspergillus niger"
  },
  {
    "agente": "Aspergillus",
    "numero": 106,
    "archivo": "img/foto-106.jpg",
    "fuente": "atlas",
    "especie": "Aspergillus fumigatus"
  },
  {
    "agente": "Aspergillus",
    "numero": 107,
    "archivo": "img/foto-107.jpg",
    "fuente": "atlas",
    "especie": "Aspergillus niger"
  },
  {
    "agente": "Fusarium",
    "numero": 108,
    "archivo": "img/foto-108.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Fusarium",
    "numero": 109,
    "archivo": "img/foto-109.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton rubrum",
    "numero": 110,
    "archivo": "img/foto-110.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Trichophyton rubrum",
    "numero": 111,
    "archivo": "img/foto-111.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Epidermophyton floccosum",
    "numero": 112,
    "archivo": "img/foto-112.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Epidermophyton floccosum",
    "numero": 113,
    "archivo": "img/foto-113.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Alternaria",
    "numero": 114,
    "archivo": "img/foto-114.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Alternaria",
    "numero": 115,
    "archivo": "img/foto-115.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Paracoccidioides brasiliensis",
    "numero": 116,
    "archivo": "img/foto-116.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Paracoccidioides brasiliensis",
    "numero": 117,
    "archivo": "img/foto-117.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Sporothrix schenckii",
    "numero": 118,
    "archivo": "img/foto-118.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Sporothrix schenckii",
    "numero": 119,
    "archivo": "img/foto-119.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Sporothrix schenckii",
    "numero": 120,
    "archivo": "img/foto-120.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Rhizopus",
    "numero": 121,
    "archivo": "img/foto-121.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Histoplasma capsulatum",
    "numero": 122,
    "archivo": "img/foto-122.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Histoplasma capsulatum",
    "numero": 123,
    "archivo": "img/foto-123.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Microsporum canis",
    "numero": 124,
    "archivo": "img/foto-124.jpg",
    "fuente": "laboratorio"
  },
  {
    "agente": "Penicillium",
    "numero": 125,
    "archivo": "img/foto-125.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Mycobacterium tuberculosis",
    "numero": 126,
    "archivo": "img/foto-126.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Células epiteliales escamosas",
    "numero": 127,
    "archivo": "img/foto-127.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Trichomonas vaginalis",
    "numero": 128,
    "archivo": "img/foto-128.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Levaduras en orina",
    "numero": 129,
    "archivo": "img/foto-129.jpg",
    "fuente": "atlas"
  },
  {
    "agente": "Hematíes",
    "numero": 130,
    "archivo": "img/foto-130.jpg",
    "fuente": "atlas"
  }
];
