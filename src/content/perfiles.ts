// Fichas de estudio por agente
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas por Mafer.
import type { Perfil } from "./types";

export const PERFILES: Record<string, Perfil> = {
  "Escherichia coli": {
    "queEs": "Bacilo Gram negativo, enterobacteria que fermenta lactosa. Es parte de la flora intestinal.",
    "reconoce": "En MacConkey da colonias rosadas, planas y secas. Indol positivo y citrato negativo. Reduce nitratos a nitritos, por eso da nitritos positivos en la tira de orina.",
    "produce": "Es la causa más frecuente de cistitis y de pielonefritis. Algunas cepas causan diarrea: O157:H7, enteroinvasiva (EIEC), enterotoxigénica (ETEC) y enteropatógena (EPEC).",
    "contagio": "Infección urinaria ascendente desde la flora intestinal; las cepas diarreicas, por vía fecal-oral.",
    "diagnostico": "Urocultivo: 10⁵ UFC/mL o más de un solo germen es infección significativa. Coprocultivo para las cepas diarreicas.",
    "tratamiento": "Cistitis: nitrofurantoína o fosfomicina según antibiograma. Si es BLEE: carbapenémico en infección grave; fosfomicina en cistitis no complicada.",
    "datoExamen": "Se fija al urotelio con fimbrias tipo 1. Patrón BLEE: resistente a cefotaxima, ceftriaxona y aztreonam con sinergia con clavulánico. Patrón AmpC: sin sinergia y resistente a cefoxitina."
  },
  "Klebsiella pneumoniae": {
    "queEs": "Bacilo Gram negativo encapsulado e inmóvil, enterobacteria que fermenta lactosa.",
    "reconoce": "Colonias rosadas muy mucoides en MacConkey, por su cápsula. Indol negativo, citrato positivo, ureasa positiva.",
    "produce": "Neumonía del lóbulo superior derecho en alcohólicos, con esputo 'en jalea de grosella'. También infección urinaria e infecciones hospitalarias.",
    "tratamiento": "Neumonía: ceftriaxona; si es BLEE, meropenem. Si es productora de carbapenemasa (KPC): ceftazidima-avibactam o colistina, con infectología.",
    "datoExamen": "Sin halo alrededor de ningún disco, ni siquiera imipenem ni meropenem: carbapenemasa (KPC)."
  },
  "Proteus mirabilis": {
    "queEs": "Bacilo Gram negativo muy móvil que no fermenta lactosa.",
    "reconoce": "Colonias incoloras en MacConkey y swarming (crecimiento en ondas) en agar sangre. TSI K/A con H₂S positivo, indol negativo y ureasa muy intensa (+++).",
    "produce": "Infección urinaria complicada, sobre todo en pacientes con sonda. Su ureasa alcaliniza la orina y forma cálculos de estruvita.",
    "diagnostico": "Orina con pH alcalino (8.5), olor amoniacal y cristales de estruvita 'en tapa de ataúd'.",
    "tratamiento": "Ceftriaxona o ciprofloxacino según antibiograma y cambiar la sonda. No usar nitrofurantoína: tiene resistencia natural.",
    "datoExamen": "Proteus es H₂S positivo e indol negativo; Morganella es al revés."
  },
  "Morganella morganii": {
    "queEs": "Bacilo Gram negativo, pariente cercano de Proteus.",
    "reconoce": "H₂S negativo, indol positivo y ureasa positiva.",
    "datoExamen": "Es el diagnóstico diferencial de Proteus en las pruebas bioquímicas: lo contrario en H₂S e indol."
  },
  "Pseudomonas aeruginosa": {
    "queEs": "Bacilo Gram negativo no fermentador, oxidasa positivo.",
    "reconoce": "Pigmento verde-azulado y olor a uvas.",
    "produce": "Infecciones hospitalarias: neumonía asociada a ventilador, infección urinaria en pacientes con sonda. Puede teñir la orina de verde.",
    "tratamiento": "Siempre según antibiograma.",
    "datoExamen": "Si es resistente a carbapenémicos, el mecanismo puede ser la pérdida de una porina o una carbapenemasa; una BLEE sola no lo explica."
  },
  "Salmonella": {
    "queEs": "Bacilo Gram negativo que no fermenta lactosa y produce H₂S.",
    "reconoce": "Incolora en MacConkey. En XLD, roja con centro negro; en SS, incolora con centro negro. Se enriquece en caldo selenito.",
    "produce": "Fiebre tifoidea y paratifoidea (S. Typhi, S. Paratyphi) y gastroenteritis (S. Enteritidis).",
    "contagio": "Fecal-oral, por agua o alimentos contaminados.",
    "diagnostico": "Coprocultivo; si la muestra demora más de 2 horas, transportarla en Cary-Blair.",
    "datoExamen": "S. Typhi deja portadores crónicos, que se siguen con coprocultivos. Es una de las bacterias más frecuentes del coprocultivo en Perú."
  },
  "Shigella": {
    "queEs": "Bacilo Gram negativo inmóvil que no fermenta lactosa ni produce H₂S.",
    "reconoce": "En XLD, roja sin centro negro; en SS, incolora.",
    "produce": "Disentería: diarrea con sangre, moco y fiebre. El coprológico muestra leucocitos y hematíes (patrón inflamatorio).",
    "contagio": "Fecal-oral. Su único reservorio es el ser humano; moscas y alimentos solo la transportan.",
    "diagnostico": "Coprocultivo.",
    "datoExamen": "En Perú la especie más frecuente es S. flexneri. La toxina Shiga inactiva la subunidad 60S del ribosoma y se asocia al síndrome urémico hemolítico."
  },
  "Campylobacter jejuni": {
    "queEs": "Bacilo Gram negativo curvo, patógeno intestinal.",
    "reconoce": "Se siembra en agar Campylobacter, en microaerofilia, con lectura hasta 72 horas (el resto del coprocultivo se lee a las 24–48 h).",
    "produce": "Gastroenteritis aguda.",
    "diagnostico": "Coprocultivo con su medio especial.",
    "datoExamen": "Si no se usa su medio en microaerofilia, no crece y el coprocultivo sale falsamente negativo."
  },
  "Vibrio cholerae (cólera)": {
    "queEs": "Bacilo Gram negativo curvo, oxidasa positivo.",
    "produce": "Cólera: diarrea acuosa profusa, sin sangre, 'en agua de arroz', con deshidratación rápida.",
    "datoExamen": "La toxina colérica activa la adenilato ciclasa (ADP-ribosila Gs): sube el AMPc y se secretan cloro y agua. Por eso la diarrea no tiene sangre ni leucocitos.",
    "tratamiento": "Lo principal es la rehidratación."
  },
  "Staphylococcus aureus y MRSA": {
    "queEs": "Coco Gram positivo en racimos, catalasa positivo y coagulasa positivo.",
    "reconoce": "Hemólisis beta en agar sangre. La catalasa lo separa de Streptococcus y la coagulasa, de los demás estafilococos.",
    "produce": "Infecciones de piel y heridas, bacteriemia, neumonía.",
    "tratamiento": "Sensible: oxacilina. MRSA: vancomicina (alternativas: linezolid o daptomicina; la daptomicina no sirve en neumonía porque la inactiva el surfactante).",
    "datoExamen": "MRSA: sin halo alrededor de oxacilina (o cefoxitina). El gen mecA codifica PBP2a y lo hace resistente a todos los β-lactámicos. Prueba D positiva: resistencia inducible a clindamicina."
  },
  "Streptococcus pneumoniae": {
    "queEs": "Diplococo Gram positivo lanceolado.",
    "reconoce": "Hemólisis alfa (halo verdoso) en agar sangre y sensible a optoquina.",
    "produce": "Neumonía.",
    "datoExamen": "Los estreptococos del grupo viridans también dan hemólisis alfa, pero son resistentes a la optoquina."
  },
  "Enterococcus": {
    "queEs": "Coco Gram positivo.",
    "reconoce": "No produce hemólisis en agar sangre (hemólisis gamma).",
    "tratamiento": "Si es resistente a vancomicina: linezolid o daptomicina.",
    "datoExamen": "Tiene resistencia natural a las cefalosporinas. Se vuelve resistente a vancomicina cambiando D-Ala-D-Ala por D-Ala-D-Lac."
  },
  "Mycobacterium tuberculosis": {
    "queEs": "Bacilo ácido-alcohol resistente (BAAR). Su pared rica en ácidos micólicos no se tiñe bien con Gram.",
    "reconoce": "Ziehl-Neelsen: bacilos rojos o fucsia, a veces en cordones, sobre fondo azul (retienen la fucsina y resisten el alcohol-ácido). En Löwenstein-Jensen u Ogawa: colonias rugosas, secas, crema, 'en coliflor', a las 3–8 semanas, porque se replica cada 18–24 horas.",
    "produce": "Tuberculosis pulmonar: tos de más de 2 semanas, baja de peso, sudoración nocturna, hemoptisis.",
    "contagio": "Vía aérea.",
    "diagnostico": "Baciloscopía (1–10 BAAR por campo en 50 campos = ++), cultivo y GeneXpert, que detecta el bacilo y la resistencia a rifampicina.",
    "tratamiento": "Sensible: HRZE 2 meses y HR 4 meses, supervisado. Resistente a rifampicina: BPaLM (bedaquilina, pretomanid, linezolid y moxifloxacino).",
    "datoExamen": "Efectos adversos: pirazinamida sube el ácido úrico (evitar en gota); isoniazida da neuropatía (prevenir con piridoxina); etambutol, neuritis óptica; rifampicina tiñe la orina de anaranjado y tiene muchas interacciones; estreptomicina es ototóxica; H, R y Z son hepatotóxicos."
  },
  "Mycoplasma pneumoniae": {
    "queEs": "Bacteria sin pared celular.",
    "datoExamen": "Por no tener pared, no responde a los β-lactámicos; se trata con macrólidos o tetraciclinas."
  },
  "Bartonella (fiebre de la Oroya)": {
    "queEs": "Bartonella bacilliformis, bacilo que invade los hematíes.",
    "produce": "Enfermedad de Carrión: fase aguda (fiebre de la Oroya) con fiebre, palidez intensa, ictericia y hemólisis; fase eruptiva (verruga peruana).",
    "contagio": "Picadura de la titira (Lutzomyia), en valles interandinos.",
    "diagnostico": "Frotis de sangre con bacilos dentro de los hematíes."
  },
  "MRSA": {
    "queEs": "Staphylococcus aureus resistente a meticilina.",
    "reconoce": "Sin halo alrededor de oxacilina o de cefoxitina en el antibiograma.",
    "tratamiento": "Vancomicina; alternativas: linezolid o daptomicina (no en neumonía).",
    "datoExamen": "El gen mecA codifica PBP2a: es resistente a todos los β-lactámicos."
  },
  "BLEE": {
    "queEs": "Betalactamasa de espectro extendido, típica de E. coli y Klebsiella.",
    "reconoce": "Resistencia a cefotaxima, ceftriaxona y aztreonam, con sinergia (el halo se agranda) hacia el disco de amoxicilina-clavulánico; sensible a carbapenémicos.",
    "tratamiento": "Infección grave: carbapenémico (meropenem). Cistitis no complicada: fosfomicina.",
    "datoExamen": "El clavulánico la inhibe y es sensible a cefoxitina: así se distingue de AmpC."
  },
  "AmpC": {
    "queEs": "Betalactamasa que no se inhibe con clavulánico.",
    "reconoce": "Resistente a cefoxitina y sin sinergia con clavulánico; suele seguir sensible a cefepime y carbapenémicos.",
    "datoExamen": "Diferencia con BLEE: la BLEE se inhibe con clavulánico y es sensible a cefoxitina."
  },
  "Carbapenemasa (KPC)": {
    "queEs": "Enzima que destruye incluso los carbapenémicos, típica de Klebsiella pneumoniae.",
    "reconoce": "Sin halo alrededor de ningún disco, ni siquiera imipenem ni meropenem. Si el halo es reducido pero 'sensible', se confirma con pruebas como Carba NP o mCIM.",
    "tratamiento": "Ceftazidima-avibactam o colistina, con infectología."
  },
  "Candida albicans": {
    "queEs": "Levadura. La más importante de las Candida.",
    "reconoce": "Pseudohifas con blastoconidias en racimos y clamidoconidias redondas de pared gruesa en la punta (agar harina de maíz). Tubo germinal positivo a las 2–3 horas a 37 °C.",
    "produce": "Muguet (placas blancas que se desprenden y dejan la base roja), vulvovaginitis, intertrigo, candidemia por catéter y candiduria en diabéticos con sonda.",
    "tratamiento": "Muguet: nistatina oral en suspensión. Vulvovaginitis: fluconazol. Candidemia: equinocandina y retirar el catéter. Candiduria: retirar o cambiar la sonda; fluconazol si hay síntomas.",
    "datoExamen": "Entre las Candida comunes, solo C. albicans forma clamidoconidias. C. glabrata tolera mal los azoles y C. krusei es naturalmente resistente a fluconazol: en ellas, equinocandina.",
    "fichaMicroscopio": "Candida albicans"
  },
  "Rhodotorula": {
    "queEs": "Levadura oportunista. Las especies de importancia médica son R. mucilaginosa (rubra), R. glutinis y R. minuta.",
    "reconoce": "Al Gram, levadura Gram positiva ovoide, con o sin yema. Colonias cremosas y rosadas por su pigmento carotenoide. Tubo germinal negativo.",
    "produce": "Fungemia en inmunocomprometidos o con catéter; rara en personas sanas.",
    "tratamiento": "Retirar el catéter y anfotericina B.",
    "datoExamen": "Es naturalmente resistente a fluconazol y a las equinocandinas: a diferencia de Candida, esos fármacos no sirven."
  },
  "Cryptococcus": {
    "queEs": "Levadura capsulada.",
    "produce": "Meningitis (criptococosis meníngea), sobre todo en pacientes inmunosuprimidos.",
    "tratamiento": "Inducción: anfotericina B más flucitosina.",
    "datoExamen": "Las equinocandinas no tienen actividad útil contra Cryptococcus."
  },
  "Aspergillus fumigatus": {
    "queEs": "Moho hialino, el Aspergillus más frecuente e importante.",
    "reconoce": "Hifas hialinas septadas; conidióforo largo con vesícula y fiálides uniseriadas en 180°. Colonia blanca que se vuelve verde azulada a gris, aterciopelada; crece de 25 °C hasta 50 °C.",
    "produce": "Aspergilosis invasiva en neutropénicos (TAC con signo del halo; galactomanano positivo), aspergiloma (bola fúngica en una caverna, con media luna de aire) y aspergilosis broncopulmonar alérgica (asma, eosinofilia, IgE alta, bronquiectasias centrales).",
    "tratamiento": "Invasiva: voriconazol. Aspergiloma: cirugía; embolización si la hemoptisis es masiva. ABPA: corticoides sistémicos e itraconazol.",
    "datoExamen": "Su resistencia a azoles se debe a mutaciones en cyp51A. El halo normal orienta a Aspergillus; el halo invertido, a mucormicosis.",
    "fichaMicroscopio": "Aspergillus"
  },
  "Aspergillus niger": {
    "queEs": "Moho hialino con conidios negros.",
    "reconoce": "Hifas hialinas estrechamente septadas y cabeza aspergilar biseriada. Colonias cubiertas por conidios negros, reverso incoloro o marfil.",
    "produce": "Otitis externa (otomicosis), con secreción negra, típica en nadadores, y aspergiloma.",
    "tratamiento": "Otomicosis: limpieza del conducto y clotrimazol tópico.",
    "fichaMicroscopio": "Aspergillus"
  },
  "Aspergillus flavus": {
    "queEs": "Aspergillus de ambientes cálidos.",
    "produce": "Aspergilosis invasiva y sinusitis.",
    "datoExamen": "Produce aflatoxinas, asociadas a cáncer hepático."
  },
  "Aspergillus terreus": {
    "queEs": "Aspergillus que causa aspergilosis invasiva en inmunodeprimidos.",
    "tratamiento": "Voriconazol.",
    "datoExamen": "Es resistente a la anfotericina B."
  },
  "Penicillium": {
    "queEs": "Moho hialino ambiental.",
    "reconoce": "Hifas delgadas hialinas tabicadas; conidióforos ramificados 'en pincel', sin vesícula, con conidios en cadena. Colonia azul verdosa con borde blanco, aterciopelada o pulverulenta; reverso blanco. Crece de 4 °C a 45 °C.",
    "produce": "Sobre todo es un contaminante ambiental.",
    "tratamiento": "Generalmente no requiere tratamiento: se correlaciona con la clínica.",
    "datoExamen": "El pincel sin vesícula lo separa de Aspergillus.",
    "fichaMicroscopio": "Penicillium"
  },
  "Fusarium": {
    "queEs": "Moho hialino septado.",
    "reconoce": "Macroconidias en canoa o media luna, hialinas y multiseptadas; microconidias pequeñas. Colonias de crecimiento rápido, algodonosas, blancas, crema, rosadas o púrpura.",
    "produce": "Queratitis por trauma vegetal o lentes de contacto (úlcera de bordes plumosos, hipopión) y fusariosis diseminada en neutropénicos.",
    "tratamiento": "Queratitis: natamicina tópica (alternativa: voriconazol). Diseminada: voriconazol con o sin anfotericina B.",
    "datoExamen": "Su canoa es de pared delgada y lisa; el huso de Microsporum es de pared gruesa y rugosa.",
    "fichaMicroscopio": "Fusarium"
  },
  "Rhizopus (mucormicosis)": {
    "queEs": "Hongo mucoral (cenocítico).",
    "reconoce": "Hifas anchas, no septadas o escasamente septadas, en cinta, ramificadas en ángulo recto; esporangios redondos y rizoides. Colonia algodonosa blanca con puntos negros (los esporangios); crece hasta 50 °C.",
    "produce": "Mucormicosis rinocerebral, la más frecuente: diabético con cetoacidosis, dolor facial, congestión, escara negra en el paladar o los cornetes; invade órbita y cerebro. Forma pulmonar: TAC con halo invertido.",
    "tratamiento": "Anfotericina B liposomal, desbridamiento quirúrgico urgente y corregir la cetoacidosis.",
    "datoExamen": "El voriconazol no cubre mucorales. La acidosis libera hierro, que el hongo aprovecha; la deferoxamina también le entrega hierro.",
    "fichaMicroscopio": "Rhizopus"
  },
  "Cladosporium": {
    "queEs": "Hongo dematiáceo (marrón).",
    "reconoce": "Conidios pequeños y ovalados en cadenas ramificadas, con células escudo.",
    "produce": "Contaminante y alérgeno (asma, rinitis); rara vez feohifomicosis.",
    "tratamiento": "Itraconazol (referencia).",
    "fichaMicroscopio": "Cladosporium"
  },
  "Alternaria": {
    "queEs": "Hongo dematiáceo (marrón).",
    "reconoce": "Conidios grandes, marrones y muriformes (tabiques transversales y longitudinales), en forma de maza con pico, en cadena.",
    "produce": "Alérgeno (sinusitis fúngica alérgica, asma); feohifomicosis y queratitis en inmunodeprimidos.",
    "tratamiento": "Itraconazol o voriconazol, con o sin cirugía.",
    "fichaMicroscopio": "Alternaria"
  },
  "Trichophyton rubrum": {
    "queEs": "Dermatofito.",
    "reconoce": "Hifas septadas delgadas con pocos conidios; si aparecen, microconidios en lágrima pegados a la hifa. Colonia blanca con reverso rojo vinoso.",
    "produce": "Tinea pedis crónica, onicomicosis, tinea cruris y corporis.",
    "tratamiento": "Onicomicosis: terbinafina oral por 12 semanas, más tópico en la piel.",
    "fichaMicroscopio": "Trichophyton rubrum"
  },
  "Trichophyton mentagrophytes": {
    "queEs": "Dermatofito.",
    "reconoce": "Microconidios redondos en racimos, como uvas, e hifas en espiral.",
    "produce": "Tinea pedis inflamatoria, tinea corporis, tinea barbae y querion.",
    "tratamiento": "Terbinafina tópica u oral.",
    "fichaMicroscopio": "Trichophyton mentagrophytes"
  },
  "Microsporum canis": {
    "queEs": "Dermatofito zoofílico.",
    "reconoce": "Macroconidios en huso, de pared gruesa y rugosa, con muchos tabiques.",
    "produce": "Tinea capitis en niños con gatos o perros (placas de alopecia con descamación; lámpara de Wood positiva) y tinea corporis.",
    "tratamiento": "Griseofulvina oral; revisar a la mascota. Ante un querion, no tratar solo con tópico ni drenarlo como absceso.",
    "fichaMicroscopio": "Microsporum canis"
  },
  "Epidermophyton floccosum": {
    "queEs": "Dermatofito.",
    "reconoce": "Macroconidios en mazo, de pared lisa y 2 a 4 células, en grupos. Sin microconidios.",
    "produce": "Tinea pedis, cruris, corporis y onicomicosis.",
    "tratamiento": "Terbinafina o azoles tópicos.",
    "datoExamen": "Nunca afecta el pelo.",
    "fichaMicroscopio": "Epidermophyton floccosum"
  },
  "Histoplasma capsulatum": {
    "queEs": "Hongo dimórfico.",
    "reconoce": "Fase moho: macroconidias tuberculadas (redondas, con espinas). En tejido: levaduras pequeñas dentro de los macrófagos.",
    "produce": "Histoplasmosis: se adquiere en cuevas con murciélagos (Tingo María). En VIH se disemina: fiebre, baja de peso, hepatoesplenomegalia y pancitopenia.",
    "tratamiento": "Itraconazol; en casos graves o diseminados, anfotericina B liposomal y luego itraconazol.",
    "fichaMicroscopio": "Histoplasma capsulatum"
  },
  "Paracoccidioides brasiliensis": {
    "queEs": "Hongo dimórfico.",
    "reconoce": "Levadura madre grande con múltiples gemaciones alrededor: 'rueda de timón'.",
    "produce": "Paracoccidioidomicosis: agricultor de la selva con tos crónica y BK negativa, úlceras orales moriformes y adenopatías.",
    "tratamiento": "Itraconazol (6 a 12 meses); en casos graves, anfotericina B.",
    "fichaMicroscopio": "Paracoccidioides brasiliensis"
  },
  "Sporothrix schenckii": {
    "queEs": "Hongo dimórfico de inoculación.",
    "reconoce": "Fase moho (25 °C): hifas delgadas septadas con conidios en margarita o roseta en la punta. En tejido: levaduras en forma de puro.",
    "produce": "Esporotricosis linfocutánea: pinchazo con rosal o madera, nódulo que se ulcera y nódulos en cadena que suben por los linfáticos.",
    "tratamiento": "Itraconazol por 3 a 6 meses (alternativa: yoduro de potasio).",
    "fichaMicroscopio": "Sporothrix schenckii"
  },
  "VIH": {
    "queEs": "Retrovirus del género Lentivirus. Esférico, envuelto, con 2 copias de ARN de sentido positivo (Baltimore VI). Tipos VIH-1 (pandemia; grupo M > 90 %, subtipo B en Perú) y VIH-2 (África occidental, menos transmisible). Origen zoonótico: SIV de chimpancés (VIH-1) y de monos mangabey (VIH-2).",
    "reconoce": "gp120 se une a CD4; correceptor CCR5 al inicio y CXCR4 en fase avanzada; gp41 hace la fusión. p24 es la cápside y p17 la matriz. Enzimas: transcriptasa inversa, integrasa y proteasa.",
    "produce": "Síndrome retroviral agudo (2–4 semanas) → latencia clínica (8–10 años) → fase sintomática (CD4 200–500) → SIDA (CD4 < 200): neumonía por Pneumocystis jirovecii, toxoplasmosis cerebral, TB extrapulmonar, candidiasis esofágica, CMV, Cryptococcus, sarcoma de Kaposi (HHV-8) y linfoma no Hodgkin (EBV).",
    "tratamiento": "TARV de por vida. Primera línea MINSA: TDF + 3TC + DTG (TLD), también en gestantes y en coinfección con VHB. Con TB: TDF + 3TC + EFV. Falla renal: ABC + 3TC + DTG. Segunda línea: AZT + 3TC + LPV/r. Rescate: DRV/r + RAL + ETR.",
    "datoExamen": "Su transcriptasa inversa no corrige errores, se replica millones de veces al día y recombina sus dos copias de ARN: por eso varía tanto y genera resistencias. No se erradica porque queda como provirus en reservorios.",
    "contagio": "Sexual (la principal; más riesgo en sexo anal receptivo), sangre (agujas, accidentes: ≈ 0,3 % por pinchazo) y vertical (más en el parto). Transmiten sangre, semen, secreciones vaginales y leche; no saliva, sudor, lágrimas ni orina.",
    "diagnostico": "Tamizaje: ELISA 4.ª generación o prueba rápida. Si es reactiva, segunda prueba de otra metodología; discordantes: LIA o RT-qPCR. Western blot positivo = 2 bandas de envoltura (gp120/160 + gp41). Neonato: PCR a las 2 semanas, 1 mes y 4–6 meses. Seguimiento con CD4 y carga viral."
  },
  "Hepatitis B": {
    "queEs": "Virus de la hepatitis B.",
    "diagnostico": "HBsAg positivo: infección actual. HBsAg negativo con anti-HBc IgG y anti-HBs positivos: infección pasada resuelta, con inmunidad. Solo anti-HBs positivo: vacunado.",
    "datoExamen": "La vacuna solo contiene HBsAg, por eso no genera anti-HBc."
  },
  "Influenza": {
    "queEs": "Virus de ARN con genoma segmentado.",
    "produce": "Gripe; puede causar pandemias.",
    "tratamiento": "Oseltamivir: inhibe la neuraminidasa y frena la liberación de nuevos viriones; funciona mejor en las primeras 48 horas.",
    "datoExamen": "El genoma segmentado permite el cambio antigénico mayor (shift) cuando dos virus intercambian segmentos; el drift son mutaciones pequeñas."
  },
  "Virus sincitial respiratorio": {
    "queEs": "Virus respiratorio.",
    "produce": "Es el agente más frecuente de bronquiolitis en lactantes."
  },
  "Adenovirus": {
    "queEs": "Virus respiratorio.",
    "produce": "La bronquiolitis obliterante es típica del adenovirus."
  },
  "Coxsackie": {
    "queEs": "Enterovirus.",
    "produce": "Enfermedad mano-pie-boca: lactante con fiebre y vesículas en lengua, paladar, palmas y plantas."
  },
  "Virus del papiloma humano": {
    "queEs": "Familia Papillomaviridae (antes agrupado como papovavirus). ADN doble cadena (Baltimore I), no envuelto, de unos 55 nm.",
    "produce": "Bajo riesgo (6 y 11): verrugas genitales (condiloma acuminado) y papilomatosis laríngea. Alto riesgo (16 y 18, entre otros): NIC 1–3 y cáncer de cérvix, ano, vagina, vulva, pene y orofaringe. Tipos cutáneos (1, 2, 4, 7): verrugas comunes y plantares.",
    "contagio": "Contacto directo piel a piel o mucosa a mucosa, sobre todo sexual, incluso sin lesiones visibles. Vertical en el parto vaginal. No por sangre ni por placenta: no hay viremia.",
    "reconoce": "Genes tempranos: E1 (helicasa), E2 (regula la transcripción), E4, E5, E6 (degrada p53) y E7 (inactiva Rb). Genes tardíos: L1 (cápside principal) y L2. En la citología: coilocitos (halo perinuclear claro).",
    "diagnostico": "Gold standard de tamizaje: co-test (Papanicolaou + PCR de VPH) de 30 a 65 años. PCR de las regiones L1 o E6/E7; genotipificación por hibridación (RLB/INNO-LiPA).",
    "tratamiento": "No hay antiviral curativo: se tratan las lesiones. Verrugas: imiquimod, podofilotoxina, ácido tricloroacético, crioterapia. NIC 2–3: LEEP o conización. Prevención: vacuna tetravalente del MINSA (6, 11, 16, 18) a los 9–13 años, 2 dosis.",
    "datoExamen": "E6 → p53 y E7 → Rb. La persistencia permite la integración del ADN y la pérdida de E2, que deja a E6 y E7 sin control."
  },
  "Citomegalovirus": {
    "queEs": "Herpesvirus.",
    "produce": "Infección congénita: sordera neurosensorial, coriorretinitis y calcificaciones periventriculares.",
    "tratamiento": "Ganciclovir.",
    "datoExamen": "El CMV no tiene timidina quinasa: el aciclovir no se activa, en cambio el ganciclovir se activa con la quinasa viral UL97."
  },
  "Herpes": {
    "queEs": "Virus herpes simple.",
    "produce": "Encefalitis herpética.",
    "tratamiento": "Aciclovir: análogo de nucleósido que se activa con la timidina quinasa viral, por eso actúa solo en células infectadas.",
    "datoExamen": "El aciclovir puede precipitar en los túbulos renales: hay que vigilar la función renal e hidratar bien."
  },
  "Dengue": {
    "queEs": "Flavivirus.",
    "contagio": "Picadura de mosquito.",
    "datoExamen": "Una segunda infección con otro serotipo suele ser más grave: los anticuerpos no neutralizantes facilitan la entrada del virus a los monocitos (potenciación dependiente de anticuerpos)."
  },
  "Rubéola y TORCH": {
    "queEs": "La rubéola forma parte del grupo TORCH de infecciones congénitas.",
    "datoExamen": "TORCH: Toxoplasma, Otros (como sífilis), Rubéola, Citomegalovirus y Herpes.",
    "tratamiento": "La rubéola se previene con la vacuna triple viral (sarampión, paperas y rubéola)."
  },
  "Giardia lamblia": {
    "queEs": "Protozoo flagelado intestinal.",
    "reconoce": "Quiste (forma resistente e infectante) y trofozoíto binucleado. Los trofozoítos pierden movilidad si la muestra tarda.",
    "produce": "Diarrea prolongada, fétida, voluminosa y grasosa que flota; dolor cólico y distensión.",
    "contagio": "Fecal-oral: quistes en agua o alimentos contaminados.",
    "diagnostico": "Coprológico directo: procesar en menos de 30 minutos; si es negativo, exámenes seriados. Si aparece en orina, es contaminación fecal de la muestra.",
    "tratamiento": "Metronidazol (alternativa: tinidazol)."
  },
  "Entamoeba histolytica": {
    "queEs": "Protozoo intestinal.",
    "reconoce": "Trofozoítos móviles y quistes en el coprológico.",
    "produce": "Amebiasis, con invasión intestinal.",
    "diagnostico": "Coprológico: procesar en menos de 30 minutos para conservar la movilidad de los trofozoítos; leucocitos y hematíes sugieren invasión. Si hay retraso, conservar en formol al 10 % o PVA.",
    "datoExamen": "Solución salina para ver trofozoítos móviles; lugol para ver núcleos de quistes."
  },
  "Cyclospora": {
    "queEs": "Protozoo intestinal.",
    "reconoce": "Su ooquiste se ve en el coprológico directo (Práctica 4)."
  },
  "Trichomonas vaginalis": {
    "queEs": "Protozoo flagelado urogenital.",
    "reconoce": "En el sedimento urinario: forma de pera, con flagelos, que se mueve.",
    "produce": "Tricomoniasis: flujo vaginal amarillo-verdoso espumoso y prurito.",
    "contagio": "Transmisión sexual.",
    "tratamiento": "Metronidazol a la paciente y a su pareja; si no se trata a la pareja, se reinfecta."
  },
  "Plasmodium (malaria)": {
    "queEs": "Protozoo de la sangre que causa la malaria (paludismo).",
    "reconoce": "Trofozoítos en forma de anillo dentro de los hematíes, en la gota gruesa.",
    "produce": "Fiebre cíclica o paroxística, escalofríos, esplenomegalia, anemia e ictericia. P. falciparum puede causar malaria cerebral.",
    "contagio": "Picadura de la hembra de Anopheles: entra el esporozoíto, que va al hígado; de ahí salen merozoítos que invaden hematíes.",
    "tratamiento": "P. falciparum: combinación con artemisinina (hay mucha resistencia a cloroquina). P. vivax: se agrega primaquina, descartando antes el déficit de G6PD.",
    "datoExamen": "P. vivax deja hipnozoítos en el hígado que causan recaídas. P. falciparum hace malaria cerebral por citoadherencia de los hematíes al endotelio."
  },
  "Toxoplasma gondii": {
    "queEs": "Protozoo de tejidos; forma parte del TORCH.",
    "produce": "En VIH avanzado: lesiones cerebrales con realce en anillo y convulsiones. Infección congénita si la madre se infecta en el embarazo.",
    "tratamiento": "Gestante con infección aguda: espiramicina, que reduce el paso por la placenta; si se confirma infección fetal, pirimetamina, sulfadiazina y ácido folínico."
  },
  "Leishmania": {
    "queEs": "Protozoo que vive dentro de los macrófagos.",
    "produce": "Leishmaniasis cutánea: lesión crónica tras viajar a la selva (mácula, pápula, nódulo y úlcera con costra).",
    "contagio": "Picadura del flebótomo (titira o manta blanca).",
    "diagnostico": "Frotis o cultivo de la lesión: parásitos dentro de macrófagos.",
    "datoExamen": "L. braziliensis puede diseminarse años después a la mucosa nasal y destruir el tabique (espundia): por eso se trata aunque la úlcera cierre."
  },
  "Trypanosoma cruzi (Chagas)": {
    "queEs": "Protozoo que causa la enfermedad de Chagas.",
    "produce": "Chagas crónico: corazón (miocardiopatía) y tubo digestivo (megaesófago y megacolon).",
    "contagio": "Chinche besucona (triatomino)."
  },
  "Enterobius vermicularis": {
    "queEs": "Helminto intestinal (oxiuro).",
    "produce": "Prurito anal nocturno.",
    "diagnostico": "Test de Graham: cinta adhesiva en la región perianal al despertar, para buscar huevos."
  },
  "Strongyloides stercoralis": {
    "queEs": "Helminto intestinal.",
    "reconoce": "Larvas rabditiformes en heces (no huevos).",
    "produce": "Dolor abdominal, diarrea y baja de peso. En pacientes con corticoides: hiperinfección.",
    "datoExamen": "La hiperinfección se debe a la autoinfección: las larvas pasan a filariformes dentro del intestino y reinvaden. Arrastran bacterias: sepsis o meningitis por bacilos Gram negativos entéricos."
  },
  "Ascaris lumbricoides": {
    "queEs": "Helminto intestinal.",
    "reconoce": "Huevos mamelonados en heces.",
    "produce": "Primero tos, sibilancias y eosinofilia (las larvas pasan por el pulmón: síndrome de Löffler); después, dolor abdominal."
  },
  "Fasciola hepatica": {
    "queEs": "Helminto de las vías biliares.",
    "reconoce": "Huevos grandes, ovalados, operculados, amarillentos.",
    "produce": "Dolor en hipocondrio derecho, fiebre intermitente, hepatomegalia y eosinofilia marcada.",
    "contagio": "Comer berros crudos de riachuelos.",
    "tratamiento": "Triclabendazol (el praziquantel no es eficaz contra Fasciola)."
  },
  "Taenia solium (cisticercosis)": {
    "queEs": "Cestodo.",
    "contagio": "Cisticercosis: ingiriendo huevos de T. solium por vía fecal-oral. Comer carne de cerdo con cisticercos da teniasis (el gusano adulto), no cisticercosis.",
    "tratamiento": "Neurocisticercosis con quistes viables: albendazol con corticoides."
  },
  "Echinococcus (hidatidosis)": {
    "queEs": "Cestodo que forma quistes hidatídicos, sobre todo en hígado y pulmón.",
    "tratamiento": "Albendazol antes de la cirugía.",
    "datoExamen": "Nunca punzar un quiste hidatídico sin protección: la fuga del líquido puede causar anafilaxia y sembrar nuevos quistes."
  },
  "Loxosceles laeta": {
    "queEs": "Araña del rincón.",
    "produce": "Loxoscelismo: placa violácea con centro necrótico. La forma cutáneo-visceral produce hemólisis: orina oscura y anemia."
  },
  "Latrodectus mactans": {
    "queEs": "Viuda negra.",
    "produce": "Latrodectismo: neurotoxina que causa agitación, espasmos musculares y rigidez abdominal."
  },
  "HTLV-1": {
    "queEs": "Virus linfotrópico T humano tipo 1. Retrovirus del género Deltaretrovirus (ARN +, Baltimore VI). Fue el primer retrovirus humano descubierto (Gallo, 1980).",
    "reconoce": "Infecta linfocitos T CD4+ (el HTLV-2 prefiere CD8+). No destruye la célula: la transforma y la hace proliferar con Tax y HBZ. Receptores GLUT-1, NRP-1 y HSPG.",
    "produce": "Leucemia/linfoma T del adulto (ATLL): menos del 5 % de los infectados, tras 20–40 años; células en flor e hipercalcemia. Paraparesia espástica tropical (HAM/TSP): menos del 1 %, desmielinización medular por la respuesta inmune.",
    "contagio": "Por células infectadas, no tanto por virus libre: lactancia materna (la vía más importante en zonas endémicas), sexual (más de hombre a mujer) y parenteral (transfusiones, agujas, trasplantes). Perú es endémico.",
    "diagnostico": "ELISA de anticuerpos anti-HTLV (tamizaje) y Western blot, que distingue HTLV-1 de HTLV-2. PCR del ADN proviral (genes pol, tax o gag) y carga proviral.",
    "tratamiento": "ATLL: quimioterapia (CHOP), zidovudina + interferón α, trasplante de médula en casos seleccionados. HAM/TSP: no hay cura; corticoides, interferón y rehabilitación.",
    "datoExamen": "HTLV-1 transforma (leucemia); el VIH destruye (inmunodeficiencia). Las células en flor tienen núcleo multilobulado."
  },
  "Sarampión": {
    "queEs": "Paramyxovirus, ARN de sentido negativo (Baltimore V). Virus dermatotrópico.",
    "reconoce": "Pródromo con fiebre alta, tos, coriza y conjuntivitis. Manchas de Koplik en la mucosa oral. En biopsia: células gigantes multinucleadas.",
    "produce": "Exantema máculo-papular que empieza en la cara y desciende. Complicaciones: neumonía, encefalitis y panencefalitis esclerosante subaguda (SSPE).",
    "contagio": "Respiratorio, muy contagioso (gotas).",
    "tratamiento": "Sintomático. Se previene con vacuna.",
    "datoExamen": "Koplik = sarampión. A diferencia de la varicela, el exantema avanza de la cara hacia abajo y no pica tanto."
  },
  "Varicela-zóster": {
    "queEs": "Herpesviridae, ADN doble cadena (Baltimore I).",
    "reconoce": "Vesículas muy pruriginosas («gota de rocío») en distintos estadios a la vez; el exantema empieza en el tronco.",
    "produce": "Varicela. Complicaciones: sobreinfección y neumonía. Puede reactivarse años después como herpes zóster.",
    "contagio": "Respiratorio y por contacto con las lesiones.",
    "tratamiento": "Aciclovir o valaciclovir. Se previene con vacuna.",
    "datoExamen": "Lesiones en distintos estadios = varicela. En el sarampión todo está en el mismo estadio."
  },
  "Rotavirus": {
    "queEs": "Reoviridae, ARN doble cadena (Baltimore III), sin envoltura: muy resistente en el ambiente.",
    "produce": "Diarrea acuosa infantil con vómitos y fiebre. El riesgo es la deshidratación, sobre todo en lactantes.",
    "contagio": "Fecal-oral: agua, alimentos, superficies y contacto persona a persona.",
    "diagnostico": "Clínico; prueba rápida de antígeno o PCR en heces.",
    "tratamiento": "Rehidratación oral o intravenosa. Se previene con la vacuna contra el rotavirus.",
    "datoExamen": "Es el ejemplo del grupo III de Baltimore (ARN de doble cadena)."
  },
  "Virus de Epstein-Barr": {
    "queEs": "Herpesviridae, ADN doble cadena (Baltimore I). Virus oncogénico.",
    "produce": "Mononucleosis infecciosa (adenopatías, linfocitos atípicos). Oncogénico: linfoma de Burkitt y Hodgkin. En VIH: linfoma no Hodgkin de células B.",
    "contagio": "Saliva.",
    "datoExamen": "En VIH, la menor inmunovigilancia deja proliferar linfocitos B infectados por EBV: linfoma difuso de células B grandes, Burkitt o primario del SNC."
  },
  "Herpesvirus humano 8": {
    "queEs": "Herpesviridae, ADN doble cadena (Baltimore I). También llamado virus del herpes del sarcoma de Kaposi (KSHV).",
    "produce": "Sarcoma de Kaposi: nódulos y placas rojo-violáceas; células fusiformes con hematíes en pequeños vasos.",
    "contagio": "Sexual y saliva.",
    "datoExamen": "Infecta células endoteliales e induce angiogénesis (IL-6, VEGF). En VIH prolifera sin control y la proteína Tat del VIH lo potencia."
  }
};
