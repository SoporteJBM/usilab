// Índice del curso y grupos de Inicio
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Reino, SeccionIndice } from "./types";

export const INDICE: SeccionIndice[] = [
  {
    "titulo": "Hongos",
    "grupos": [
      {
        "grupo": "Levaduras",
        "items": [
          {
            "nombre": "Candida albicans",
            "busqueda": "Candida|candidemia|candidiasis|muguet"
          },
          {
            "nombre": "Rhodotorula",
            "busqueda": "Rhodotorula"
          },
          {
            "nombre": "Cryptococcus",
            "busqueda": "cripto"
          }
        ]
      },
      {
        "grupo": "Mohos hialinos (ambientales)",
        "items": [
          {
            "nombre": "Aspergillus fumigatus",
            "busqueda": "fumigatus|aspergilosis|aspergiloma"
          },
          {
            "nombre": "Aspergillus niger",
            "busqueda": "niger"
          },
          {
            "nombre": "Aspergillus flavus",
            "busqueda": "flavus"
          },
          {
            "nombre": "Aspergillus terreus",
            "busqueda": "terreus"
          },
          {
            "nombre": "Penicillium",
            "busqueda": "Penicillium"
          },
          {
            "nombre": "Fusarium",
            "busqueda": "Fusarium"
          },
          {
            "nombre": "Geotrichum",
            "busqueda": "Geotrichum"
          }
        ]
      },
      {
        "grupo": "Mucorales",
        "items": [
          {
            "nombre": "Rhizopus (mucormicosis)",
            "busqueda": "Rhizopus|mucormicosis|mucoral"
          }
        ]
      },
      {
        "grupo": "Dematiáceos",
        "items": [
          {
            "nombre": "Cladosporium",
            "busqueda": "Cladosporium"
          },
          {
            "nombre": "Alternaria",
            "busqueda": "Alternaria"
          }
        ]
      },
      {
        "grupo": "Dermatofitos",
        "items": [
          {
            "nombre": "Trichophyton rubrum",
            "busqueda": "rubrum"
          },
          {
            "nombre": "Trichophyton mentagrophytes",
            "busqueda": "mentagrophytes"
          },
          {
            "nombre": "Microsporum canis",
            "busqueda": "Microsporum"
          },
          {
            "nombre": "Epidermophyton floccosum",
            "busqueda": "Epidermophyton"
          }
        ]
      },
      {
        "grupo": "Dimórficos y subcutáneos",
        "items": [
          {
            "nombre": "Histoplasma capsulatum",
            "busqueda": "Histoplasm"
          },
          {
            "nombre": "Paracoccidioides brasiliensis",
            "busqueda": "Paracoccidioid"
          },
          {
            "nombre": "Blastomyces dermatitidis",
            "busqueda": "Blastomyces|blastomicosis"
          },
          {
            "nombre": "Sporothrix schenckii",
            "busqueda": "Sporothrix|esporotricosis"
          },
          {
            "nombre": "Cromoblastomicosis (Fonsecaea pedrosoi)",
            "busqueda": "Fonsecaea|cromoblastomicosis|cuerpos muriformes"
          }
        ]
      },
      {
        "grupo": "Pneumocystis",
        "items": [
          {
            "nombre": "Pneumocystis jirovecii",
            "busqueda": "Pneumocystis"
          }
        ]
      }
    ]
  },
  {
    "titulo": "Bacterias",
    "grupos": [
      {
        "grupo": "Urinarias y enterobacterias",
        "items": [
          {
            "nombre": "Escherichia coli",
            "busqueda": "E. coli"
          },
          {
            "nombre": "Klebsiella pneumoniae",
            "busqueda": "Klebsiella"
          },
          {
            "nombre": "Proteus mirabilis",
            "busqueda": "Proteus"
          },
          {
            "nombre": "Morganella morganii",
            "busqueda": "Morganella"
          },
          {
            "nombre": "Pseudomonas aeruginosa",
            "busqueda": "Pseudomonas"
          }
        ]
      },
      {
        "grupo": "Intestinales",
        "items": [
          {
            "nombre": "Salmonella",
            "busqueda": "Salmonella"
          },
          {
            "nombre": "Shigella",
            "busqueda": "Shigella"
          },
          {
            "nombre": "Campylobacter jejuni",
            "busqueda": "Campylobacter"
          },
          {
            "nombre": "Vibrio cholerae (cólera)",
            "busqueda": "colera"
          }
        ]
      },
      {
        "grupo": "Gram positivas",
        "items": [
          {
            "nombre": "Staphylococcus aureus y MRSA",
            "busqueda": "aureus"
          },
          {
            "nombre": "Streptococcus pneumoniae",
            "busqueda": "Streptococcus pneumoniae|optoquina"
          },
          {
            "nombre": "Enterococcus",
            "busqueda": "Enterococ"
          }
        ]
      },
      {
        "grupo": "Micobacterias",
        "items": [
          {
            "nombre": "Mycobacterium tuberculosis",
            "busqueda": "tuberculosis|BAAR"
          }
        ]
      },
      {
        "grupo": "Otras",
        "items": [
          {
            "nombre": "Mycoplasma pneumoniae",
            "busqueda": "Mycoplasma"
          },
          {
            "nombre": "Bartonella (fiebre de la Oroya)",
            "busqueda": "Oroya"
          }
        ]
      },
      {
        "grupo": "Resistencia",
        "items": [
          {
            "nombre": "MRSA",
            "busqueda": "MRSA"
          },
          {
            "nombre": "BLEE",
            "busqueda": "BLEE"
          },
          {
            "nombre": "AmpC",
            "busqueda": "AmpC"
          },
          {
            "nombre": "Carbapenemasa (KPC)",
            "busqueda": "KPC"
          }
        ]
      }
    ]
  },
  {
    "titulo": "Virus",
    "grupos": [
      {
        "grupo": "ETS: retrovirus y papilomavirus",
        "items": [
          {
            "nombre": "VIH",
            "busqueda": "VIH"
          },
          {
            "nombre": "HTLV-1",
            "busqueda": "HTLV"
          },
          {
            "nombre": "Virus del papiloma humano",
            "busqueda": "VPH|papiloma"
          }
        ]
      },
      {
        "grupo": "Respiratorios",
        "items": [
          {
            "nombre": "Influenza",
            "busqueda": "influenza"
          },
          {
            "nombre": "Virus sincitial respiratorio",
            "busqueda": "sincitial"
          },
          {
            "nombre": "Adenovirus",
            "busqueda": "Adenovirus"
          }
        ]
      },
      {
        "grupo": "Hepatotropos",
        "items": [
          {
            "nombre": "Hepatitis B",
            "busqueda": "hepatitis B"
          }
        ]
      },
      {
        "grupo": "Dermatotrópicos",
        "items": [
          {
            "nombre": "Sarampión",
            "busqueda": "sarampion"
          },
          {
            "nombre": "Varicela-zóster",
            "busqueda": "varicela"
          },
          {
            "nombre": "Herpes",
            "busqueda": "herp"
          },
          {
            "nombre": "Coxsackie",
            "busqueda": "Coxsackie"
          },
          {
            "nombre": "Rubéola y TORCH",
            "busqueda": "rubeola"
          }
        ]
      },
      {
        "grupo": "Entéricos",
        "items": [
          {
            "nombre": "Rotavirus",
            "busqueda": "rotavirus"
          }
        ]
      },
      {
        "grupo": "Hemorrágicos",
        "items": [
          {
            "nombre": "Dengue",
            "busqueda": "dengue"
          }
        ]
      },
      {
        "grupo": "Oncogénicos",
        "items": [
          {
            "nombre": "Virus de Epstein-Barr",
            "busqueda": "Epstein"
          },
          {
            "nombre": "Herpesvirus humano 8",
            "busqueda": "HHV-8"
          }
        ]
      },
      {
        "grupo": "Otros",
        "items": [
          {
            "nombre": "Citomegalovirus",
            "busqueda": "citomegalovirus"
          }
        ]
      }
    ]
  },
  {
    "titulo": "Parásitos",
    "grupos": [
      {
        "grupo": "Protozoos intestinales",
        "items": [
          {
            "nombre": "Giardia lamblia",
            "busqueda": "Giardia"
          },
          {
            "nombre": "Entamoeba histolytica",
            "busqueda": "Entamoeba"
          },
          {
            "nombre": "Cyclospora",
            "busqueda": "Cyclospora"
          }
        ]
      },
      {
        "grupo": "Protozoo urogenital",
        "items": [
          {
            "nombre": "Trichomonas vaginalis",
            "busqueda": "Trichomonas"
          }
        ]
      },
      {
        "grupo": "Protozoos de sangre y tejidos",
        "items": [
          {
            "nombre": "Plasmodium (malaria)",
            "busqueda": "Plasmodium|malaria|paludismo"
          },
          {
            "nombre": "Toxoplasma gondii",
            "busqueda": "Toxoplasm"
          },
          {
            "nombre": "Leishmania",
            "busqueda": "Leishmania"
          },
          {
            "nombre": "Trypanosoma cruzi (Chagas)",
            "busqueda": "Chagas"
          }
        ]
      },
      {
        "grupo": "Helmintos",
        "items": [
          {
            "nombre": "Enterobius vermicularis",
            "busqueda": "Enterobius"
          },
          {
            "nombre": "Strongyloides stercoralis",
            "busqueda": "Strongyloides"
          },
          {
            "nombre": "Ascaris lumbricoides",
            "busqueda": "Ascari"
          },
          {
            "nombre": "Fasciola hepatica",
            "busqueda": "fasciol"
          },
          {
            "nombre": "Taenia solium (cisticercosis)",
            "busqueda": "cisticercosis"
          },
          {
            "nombre": "Echinococcus (hidatidosis)",
            "busqueda": "hidatid"
          }
        ]
      },
      {
        "grupo": "Arácnidos",
        "items": [
          {
            "nombre": "Loxosceles laeta",
            "busqueda": "Loxosc"
          },
          {
            "nombre": "Latrodectus mactans",
            "busqueda": "Latrodect"
          }
        ]
      }
    ]
  },
  {
    "titulo": "Laboratorio",
    "grupos": [
      {
        "grupo": "Técnicas y exámenes",
        "items": [
          {
            "nombre": "Tinción de Gram",
            "busqueda": "Gram"
          },
          {
            "nombre": "Ziehl-Neelsen y baciloscopía",
            "busqueda": "Ziehl"
          },
          {
            "nombre": "Coprológico directo",
            "busqueda": "coprologico"
          },
          {
            "nombre": "Coprocultivo",
            "busqueda": "coprocultivo"
          },
          {
            "nombre": "Examen completo de orina",
            "busqueda": "sedimento"
          },
          {
            "nombre": "Urocultivo",
            "busqueda": "urocultivo"
          },
          {
            "nombre": "Antibiograma",
            "busqueda": "antibiograma"
          },
          {
            "nombre": "GeneXpert",
            "busqueda": "GeneXpert"
          },
          {
            "nombre": "Tubo germinal",
            "busqueda": "tubo germinal"
          }
        ]
      },
      {
        "grupo": "Medios de cultivo",
        "items": [
          {
            "nombre": "Sabouraud",
            "busqueda": "Sabouraud"
          },
          {
            "nombre": "MacConkey",
            "busqueda": "MacConkey"
          },
          {
            "nombre": "Mueller-Hinton",
            "busqueda": "Mueller"
          },
          {
            "nombre": "Löwenstein-Jensen",
            "busqueda": "Lowenstein"
          },
          {
            "nombre": "Agar sangre",
            "busqueda": "agar sangre"
          },
          {
            "nombre": "XLD y SS",
            "busqueda": "XLD"
          },
          {
            "nombre": "Cary-Blair",
            "busqueda": "Cary-Blair"
          }
        ]
      }
    ]
  },
  {
    "titulo": "Tratamientos",
    "grupos": [
      {
        "grupo": "Antifúngicos",
        "items": [
          {
            "nombre": "Anfotericina B",
            "busqueda": "anfotericina"
          },
          {
            "nombre": "Voriconazol",
            "busqueda": "voriconazol"
          },
          {
            "nombre": "Fluconazol",
            "busqueda": "fluconazol"
          },
          {
            "nombre": "Itraconazol",
            "busqueda": "itraconazol"
          },
          {
            "nombre": "Equinocandinas",
            "busqueda": "equinocandina"
          },
          {
            "nombre": "Terbinafina",
            "busqueda": "terbinafina"
          },
          {
            "nombre": "Griseofulvina",
            "busqueda": "griseofulvina"
          },
          {
            "nombre": "Natamicina",
            "busqueda": "natamicina"
          },
          {
            "nombre": "Nistatina",
            "busqueda": "nistatina"
          }
        ]
      },
      {
        "grupo": "Antibacterianos",
        "items": [
          {
            "nombre": "Vancomicina",
            "busqueda": "vancomicina"
          },
          {
            "nombre": "Carbapenémicos",
            "busqueda": "meropenem"
          },
          {
            "nombre": "Fosfomicina",
            "busqueda": "fosfomicina"
          },
          {
            "nombre": "Nitrofurantoína",
            "busqueda": "nitrofurantoina"
          }
        ]
      },
      {
        "grupo": "Antituberculosos",
        "items": [
          {
            "nombre": "Esquema HRZE",
            "busqueda": "HRZE"
          },
          {
            "nombre": "Isoniazida",
            "busqueda": "isoniazida"
          },
          {
            "nombre": "Rifampicina",
            "busqueda": "rifampicina"
          },
          {
            "nombre": "Pirazinamida",
            "busqueda": "pirazinamida"
          },
          {
            "nombre": "Etambutol",
            "busqueda": "etambutol"
          },
          {
            "nombre": "Esquema BPaLM",
            "busqueda": "BPaLM"
          }
        ]
      },
      {
        "grupo": "Antivirales",
        "items": [
          {
            "nombre": "Aciclovir",
            "busqueda": "aciclovir"
          },
          {
            "nombre": "Ganciclovir",
            "busqueda": "ganciclovir"
          },
          {
            "nombre": "Oseltamivir",
            "busqueda": "oseltamivir"
          }
        ]
      },
      {
        "grupo": "Antiparasitarios",
        "items": [
          {
            "nombre": "Metronidazol",
            "busqueda": "metronidazol"
          },
          {
            "nombre": "Triclabendazol",
            "busqueda": "triclabendazol"
          },
          {
            "nombre": "Albendazol",
            "busqueda": "albendazol"
          },
          {
            "nombre": "Primaquina",
            "busqueda": "primaquina"
          },
          {
            "nombre": "Espiramicina",
            "busqueda": "espiramicina"
          }
        ]
      }
    ]
  }
];

export const REINOS: Reino[] = [
  {
    "nombre": "Bacterias",
    "clave": "bac",
    "descripcion": "Identificación en el laboratorio, resistencia a antibióticos y tratamiento."
  },
  {
    "nombre": "Hongos",
    "clave": "hon",
    "descripcion": "Levaduras, mohos ambientales, dermatofitos, dematiáceos y dimórficos."
  },
  {
    "nombre": "Virus",
    "clave": "vir",
    "descripcion": "Cuadros típicos, marcadores, mecanismos y antivirales."
  },
  {
    "nombre": "Parásitos",
    "clave": "par",
    "descripcion": "Protozoos intestinales y de sangre, helmintos, vectores y arácnidos."
  }
];
