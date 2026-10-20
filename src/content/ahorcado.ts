// Ahorcado
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { NivelAhorcado, PalabraAhorcado } from "./types";

export const AHORCADO_RESUMEN = "Adivina el nombre del agente con su pista. Tienes 6 errores.";
export const AHORCADO_PUNTOS: Record<NivelAhorcado, number> = {
  "facil": 10,
  "medio": 15,
  "dificil": 20,
  "muydificil": 30
};
export const AHORCADO: Record<NivelAhorcado, PalabraAhorcado[]> = {
  "facil": [
    {
      "palabra": "CANDIDA",
      "pista": "Pseudohifas con clamidoconidias; muguet y candidemia por catéter."
    },
    {
      "palabra": "PROTEUS",
      "pista": "Swarming en agar sangre y cristales de estruvita en orina alcalina."
    },
    {
      "palabra": "GIARDIA",
      "pista": "Protozoo intestinal; sus trofozoítos pierden movilidad si la muestra tarda."
    },
    {
      "palabra": "KLEBSIELLA",
      "pista": "Colonias rosadas muy mucoides en MacConkey por su cápsula."
    },
    {
      "palabra": "SHIGELLA",
      "pista": "Roja sin centro negro en XLD; en Perú, sobre todo la especie flexneri."
    },
    {
      "palabra": "SALMONELLA",
      "pista": "Roja con centro negro en XLD; la especie Typhi deja portadores crónicos."
    },
    {
      "palabra": "FUSARIUM",
      "pista": "Macroconidias en canoa; queratitis por trauma vegetal."
    },
    {
      "palabra": "PLASMODIUM",
      "pista": "Fiebre cíclica y anemia; lo transmite la hembra de Anopheles."
    },
    {
      "palabra": "LEISHMANIA",
      "pista": "Úlcera cutánea tras viajar a la selva; parásito dentro de macrófagos."
    },
    {
      "palabra": "VIBRIO",
      "pista": "Bacilo curvo que causa diarrea en agua de arroz."
    },
    {
      "palabra": "CAPSIDE",
      "pista": "Cubierta de proteínas que protege el genoma del virus."
    },
    {
      "palabra": "ROTAVIRUS",
      "pista": "Virus de ARN doble cadena: diarrea infantil."
    },
    {
      "palabra": "SARAMPION",
      "pista": "Virus con manchas de Koplik."
    }
  ],
  "medio": [
    {
      "palabra": "ASPERGILLUS",
      "pista": "Vesícula con fiálides en la punta del conidióforo; signo del halo."
    },
    {
      "palabra": "RHIZOPUS",
      "pista": "Hifas cenocíticas y esporangios; escara negra en el paladar."
    },
    {
      "palabra": "PENICILLIUM",
      "pista": "Conidióforo en pincel, sin vesícula; contaminante ambiental."
    },
    {
      "palabra": "RHODOTORULA",
      "pista": "Levadura rosada por pigmento carotenoide; resistente a azoles."
    },
    {
      "palabra": "TRICHOMONAS",
      "pista": "Pera con flagelos en el sedimento urinario; flujo espumoso."
    },
    {
      "palabra": "ENTAMOEBA",
      "pista": "Trofozoítos que pierden movilidad si el coprológico se retrasa; invasión intestinal."
    },
    {
      "palabra": "MICROSPORUM",
      "pista": "Macroconidios en huso; tinea capitis en niños con gatos."
    },
    {
      "palabra": "MYCOBACTERIUM",
      "pista": "Bacilos rojos en Ziehl-Neelsen; colonias en coliflor en Löwenstein-Jensen."
    },
    {
      "palabra": "FASCIOLA",
      "pista": "Berros crudos, dolor en hipocondrio derecho y eosinofilia."
    },
    {
      "palabra": "ENTEROBIUS",
      "pista": "Prurito anal nocturno; se diagnostica con el test de Graham."
    },
    {
      "palabra": "LOXOSCELES",
      "pista": "Araña del rincón: placa necrótica y hemólisis."
    },
    {
      "palabra": "TOXOPLASMA",
      "pista": "Lesiones cerebrales en anillo en VIH avanzado; espiramicina en la gestante."
    },
    {
      "palabra": "RETROVIRUS",
      "pista": "Familia del VIH y del HTLV: pasan de ARN a ADN."
    },
    {
      "palabra": "INTEGRASA",
      "pista": "Enzima que inserta el ADN del VIH en el genoma de la célula."
    },
    {
      "palabra": "KOPLIK",
      "pista": "Apellido de las manchas orales del sarampión."
    }
  ],
  "dificil": [
    {
      "palabra": "TRICHOPHYTON",
      "pista": "Dermatofito de la onicomicosis; una especie da reverso rojo vinoso."
    },
    {
      "palabra": "HISTOPLASMA",
      "pista": "Cuevas con murciélagos en Tingo María; macroconidias con espinas."
    },
    {
      "palabra": "SPOROTHRIX",
      "pista": "Pinchazo con rosal y nódulos en cadena; conidios en margarita."
    },
    {
      "palabra": "CLADOSPORIUM",
      "pista": "Dematiáceo con conidios pequeños en cadenas ramificadas."
    },
    {
      "palabra": "ALTERNARIA",
      "pista": "Dematiáceo con conidios grandes muriformes en forma de maza."
    },
    {
      "palabra": "CAMPYLOBACTER",
      "pista": "Coprocultivo en microaerofilia, con lectura hasta 72 horas."
    },
    {
      "palabra": "CYCLOSPORA",
      "pista": "Su ooquiste aparece en el coprológico directo de la práctica."
    },
    {
      "palabra": "GEOTRICHUM",
      "pista": "Hongo hialino septado que aparece en la lista de géneros ambientales."
    },
    {
      "palabra": "STRONGYLOIDES",
      "pista": "Larvas rabditiformes en heces; hiperinfección con corticoides."
    },
    {
      "palabra": "LATRODECTUS",
      "pista": "Viuda negra: agitación, espasmos y rigidez abdominal."
    },
    {
      "palabra": "LENTIVIRUS",
      "pista": "Género al que pertenece el VIH."
    },
    {
      "palabra": "PAPILOMAVIRUS",
      "pista": "Virus de ADN que causa verrugas y cáncer de cuello uterino."
    },
    {
      "palabra": "TRANSCRIPTASA",
      "pista": "La ___ inversa copia ARN a ADN."
    }
  ],
  "muydificil": [
    {
      "palabra": "PARACOCCIDIOIDES",
      "pista": "Levadura en rueda de timón; agricultor con úlceras orales moriformes."
    },
    {
      "palabra": "EPIDERMOPHYTON",
      "pista": "Macroconidios en mazo, lisos, sin microconidios; nunca afecta el pelo."
    },
    {
      "palabra": "STAPHYLOCOCCUS",
      "pista": "Resistente a oxacilina: se trata con vancomicina."
    },
    {
      "palabra": "PSEUDOMONAS",
      "pista": "Puede teñir la orina de verde en pacientes con sonda."
    },
    {
      "palabra": "ESCHERICHIA",
      "pista": "Colonia rosada, plana y seca en MacConkey; causa más común de cistitis."
    },
    {
      "palabra": "STREPTOCOCCUS",
      "pista": "Algunas especies dan hemólisis beta en agar sangre; otras, alfa."
    },
    {
      "palabra": "ENTEROCOCCUS",
      "pista": "En agar sangre no produce hemólisis (gamma)."
    },
    {
      "palabra": "MORGANELLA",
      "pista": "H₂S negativo e indol positivo: lo contrario de Proteus."
    },
    {
      "palabra": "TRYPANOSOMA",
      "pista": "Chagas: años después, miocardiopatía y megacolon."
    },
    {
      "palabra": "ECHINOCOCCUS",
      "pista": "Quiste hidatídico: nunca se punza sin protección."
    },
    {
      "palabra": "BARTONELLA",
      "pista": "Fiebre de la Oroya: bacilos dentro de los hematíes; la transmite la titira."
    },
    {
      "palabra": "COILOCITO",
      "pista": "Célula con halo perinuclear claro: efecto del VPH."
    },
    {
      "palabra": "DOLUTEGRAVIR",
      "pista": "Inhibidor de integrasa preferido por el MINSA."
    },
    {
      "palabra": "DELTARETROVIRUS",
      "pista": "Género del HTLV."
    }
  ]
};
