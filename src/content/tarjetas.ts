// Tarjetas de repaso de teoría: Tuberculosis, resistencia y micología (77).
// Fuente: fichas del curso para recortar (partes 1 y 2).
import type { Tarjeta } from "./types";

/** Orden de los temas en Estudio. */
export const TEMAS_TARJETAS = ["Tuberculosis", "Resistencia", "Micología general", "Mohos oportunistas", "Candida", "Cryptococcus", "Dimórficos", "Subcutáneas", "Dermatofitos", "Pneumocystis"];

export const TARJETAS: Tarjeta[] = [
 {
  "id": "tarjeta-001",
  "tema": "Tuberculosis",
  "pregunta": "¿Por qué M. tuberculosis es BAAR y crece tan lento?",
  "respuesta": "Pared rica en ácidos micólicos",
  "detalle": "Son el 40–60 % de los lípidos. Retienen la fucsina (BAAR), hacen que se divida cada 18–24 h y le permiten sobrevivir dentro del macrófago. Cultivo: hasta 8 semanas. Bioseguridad nivel 3."
 },
 {
  "id": "tarjeta-002",
  "tema": "Tuberculosis",
  "pregunta": "¿Qué proteínas de M. tuberculosis bloquean la fusión fagosoma-lisosoma?",
  "respuesta": "ESAT-6 y CFP-10",
  "detalle": "Cord factor: crecimiento en cuerdas, inhibe neutrófilos, necrosis, granulomas. Ag85: entrada a la célula y síntesis de pared. Catalasa y SOD: neutralizan radicales de oxígeno."
 },
 {
  "id": "tarjeta-003",
  "tema": "Tuberculosis",
  "pregunta": "Etapas de la patogenia de la TB. ¿Cuándo se vuelve bacilífero el paciente?",
  "respuesta": "Cuando se rompe el tubérculo (12–18 semanas)",
  "detalle": "Establecimiento (0–3 d) → multiplicación (3–5 d) → diseminación (5–15 d) → granuloma (4–6 sem) → tubérculo con caseum (9–12 sem) → ruptura (12–18 sem): bacilífero, hemoptisis. Th1 (IL-12, IFN-γ) protege."
 },
 {
  "id": "tarjeta-004",
  "tema": "Tuberculosis",
  "pregunta": "PPD e IGRA positivos, ¿qué significan?",
  "respuesta": "Infección, no necesariamente enfermedad activa",
  "detalle": "PPD: 2 UT, lectura a las 48–72 h. Falso negativo: infección reciente, sarampión, VIH, vacunas con virus atenuados, TB avanzada (anergia). IGRA = QuantiFERON, T-SPOT."
 },
 {
  "id": "tarjeta-005",
  "tema": "Tuberculosis",
  "pregunta": "¿Qué resistencia detecta GeneXpert MTB/RIF?",
  "respuesta": "Solo rifampicina",
  "detalle": "Sirve para cualquier muestra. GenoType: H, R y segunda línea, solo en esputo. MTB/XDR: H, fluoroquinolonas, inyectables, etionamida. MODS: cuerdas; si crece con H o R = resistente."
 },
 {
  "id": "tarjeta-006",
  "tema": "Tuberculosis",
  "pregunta": "Esquema MINSA para TB sensible",
  "respuesta": "2HRZE (lunes a sábado) / 4HR (3 veces por semana)",
  "detalle": "Siempre supervisado; tabletas según peso. Para resistencia: BPaLM (bedaquilina, pretomanid, linezolid, moxifloxacino) o BLCC (bedaquilina, linezolid, clofazimina, cicloserina)."
 },
 {
  "id": "tarjeta-007",
  "tema": "Tuberculosis",
  "pregunta": "MDR vs pre-XDR vs XDR",
  "respuesta": "MDR = H+R · pre-XDR = MDR + fluoroquinolona · XDR = pre-XDR + bedaquilina o linezolid",
  "detalle": "Es una escalera: cada nivel suma una resistencia al anterior."
 },
 {
  "id": "tarjeta-008",
  "tema": "Tuberculosis",
  "pregunta": "Exudado pleural linfocítico con ADA > 40–45 U/L",
  "respuesta": "TB pleural",
  "detalle": "Clave ENAM. Meningitis TB: LCR con linfocitos, proteínas altas, glucosa baja (LCR/sangre < 0,3), ADA > 9–10 U/L, realce meníngeo basal. Mal de Pott: RM de columna. Escrófula: PAAF."
 },
 {
  "id": "tarjeta-009",
  "tema": "Resistencia",
  "pregunta": "MRSA: ¿gen, proteína y prueba?",
  "respuesta": "mecA → PBP2a · halo de cefoxitina < 22 mm",
  "detalle": "Se usa cefoxitina 30 µg porque induce mejor la resistencia. Se confirma con PCR de mecA. BORSA: mecA negativo, sensible a cefoxitina."
 },
 {
  "id": "tarjeta-010",
  "tema": "Resistencia",
  "pregunta": "¿Qué betalactamasa SÍ inhibe el ácido clavulánico?",
  "respuesta": "BLEE",
  "detalle": "BLEE: el halo crece ≥ 5 mm junto al clavulanato. AmpC: no se inhibe; se confirma con cloxacilina o cefoxitina y se induce con ceftriaxona. Carbapenemasas (KPC, NDM, OXA-48, VIM, IMP): Hodge en trébol, Carba NP."
 },
 {
  "id": "tarjeta-011",
  "tema": "Mohos oportunistas",
  "pregunta": "Hifas septadas con ramificación a 45°",
  "respuesta": "Aspergillus (A. fumigatus, 85–90 %)",
  "detalle": "Gliotoxina = principal factor inmunoevasor. Neutropenia. Signo del halo en la TAC. Galactomanano positivo. Hemocultivo negativo."
 },
 {
  "id": "tarjeta-012",
  "tema": "Mohos oportunistas",
  "pregunta": "Tratamiento según la forma de aspergilosis",
  "respuesta": "Invasiva: voriconazol · aspergiloma: cirugía · ABPA: corticoides + itraconazol",
  "detalle": "Profilaxis en neutropenia: posaconazol. ABPA: hipersensibilidad tipo I y III, asma, IgE alta, moco marrón. Aspergiloma: en cavernas previas (TB)."
 },
 {
  "id": "tarjeta-013",
  "tema": "Mohos oportunistas",
  "pregunta": "Hifas anchas no septadas + diabético en cetoacidosis",
  "respuesta": "Zigomicetos (Mucor, Rhizopus)",
  "detalle": "Captan hierro libre. CotH se une a GRP78. Escara negra; costra negra en el paladar (rinocerebral, la más frecuente). Halo invertido. Tratamiento: anfotericina B liposomal + desbridamiento + controlar la glucemia."
 },
 {
  "id": "tarjeta-014",
  "tema": "Mohos oportunistas",
  "pregunta": "Neutropénico con nódulos cutáneos de centro negro + hemocultivo positivo para hongo filamentoso",
  "respuesta": "Fusarium",
  "detalle": "Hemocultivo positivo en ~40 % (Aspergillus casi nunca). Macroconidias en canoa; colonias rosadas-violetas. Tricotecenos. Tratamiento: voriconazol ± anfotericina B."
 },
 {
  "id": "tarjeta-015",
  "tema": "Mohos oportunistas",
  "pregunta": "Queratitis tras golpe con una rama: bordes plumosos, lesiones satélite, hipopión",
  "respuesta": "Queratitis micótica (Fusarium)",
  "detalle": "También Cephalosporium y Aspergillus. Empieza larvada, duele menos que la bacteriana. Raspado corneal + KOH + cultivo. Tratamiento: natamicina o voriconazol tópico."
 },
 {
  "id": "tarjeta-016",
  "tema": "Candida",
  "pregunta": "Prueba de 2–3 h en suero a 37 °C que identifica a C. albicans",
  "respuesta": "Tubo germinal (positivo)",
  "detalle": "También forma clamidoconidias en el microcultivo. C. dubliniensis: tubo germinal positivo, pero no crece a 42 °C y es verde oscuro en CHROMagar (típica en VIH)."
 },
 {
  "id": "tarjeta-017",
  "tema": "Candida",
  "pregunta": "¿Qué Candida es resistente intrínseca al fluconazol?",
  "respuesta": "C. krusei",
  "detalle": "C. glabrata: no forma hifas, poco sensible a azoles, vaginitis recurrente. C. parapsilosis: biofilm en catéteres y neonatos. C. tropicalis: neutropenia. C. auris: multirresistente, antifungigrama obligatorio."
 },
 {
  "id": "tarjeta-018",
  "tema": "Candida",
  "pregunta": "Candida: tratamiento superficial vs invasivo",
  "respuesta": "Superficial: azoles · invasiva: equinocandina",
  "detalle": "Vaginal: fluconazol 150 mg dosis única. Muguet: nistatina o clotrimazol. Biofilm en catéter: retirar el catéter. Endocarditis: anfotericina B ± flucitosina."
 },
 {
  "id": "tarjeta-019",
  "tema": "Cryptococcus",
  "pregunta": "Factor de virulencia de Cryptococcus que cruza la barrera hematoencefálica",
  "respuesta": "Ureasa",
  "detalle": "La cápsula de GXM es el principal factor (antifagocitosis). La melanina lo protege del estrés oxidativo. La fenol oxidasa ayuda al neurotropismo. \"Caballo de Troya\" dentro del macrófago. CD4 = defensa clave."
 },
 {
  "id": "tarjeta-020",
  "tema": "Cryptococcus",
  "pregunta": "Gold standard práctico para diagnosticar criptococosis",
  "respuesta": "Antígeno capsular (GXM) por látex",
  "detalle": "Más del 90 % de sensibilidad y especificidad en LCR, suero u orina; si el título sube, mal pronóstico. Tinta china positiva en 50–80 %. Agar Niger: colonias marrones. Ureasa positiva. El β-D-glucano no lo detecta."
 },
 {
  "id": "tarjeta-021",
  "tema": "Cryptococcus",
  "pregunta": "Tratamiento de la meningitis criptocócica",
  "respuesta": "Anfotericina B + flucitosina 2 sem → fluconazol alto 8 sem → fluconazol bajo ≥ 1 año",
  "detalle": "Controlar la presión intracraneal. En VIH no se empieza el TAR de inmediato (riesgo de IRIS). Pulmonar leve: fluconazol."
 },
 {
  "id": "tarjeta-022",
  "tema": "Cryptococcus",
  "pregunta": "C. neoformans vs C. gattii",
  "respuesta": "neoformans: palomas, VIH (CD4 < 100) · gattii: eucalipto, inmunocompetentes",
  "detalle": "C. gattii forma criptococomas (masas que simulan tumor) y es CGB positivo. C. neoformans var. grubii (serotipo A) causa ~95 % de los casos."
 },
 {
  "id": "tarjeta-023",
  "tema": "Dimórficos",
  "pregunta": "Levaduras de 2–5 µm dentro de macrófagos; antecedente de cueva en Tingo María",
  "respuesta": "Histoplasma capsulatum",
  "detalle": "También fiebre de Tingo María o enfermedad de Darling. Hsp60 → CR3; α-1,3-glucano oculta los β-glucanos. 95 % asintomático; cuadro tipo TB. VIH con CD4 < 150: pancitopenia. Antígeno en orina. Itraconazol; anfotericina B si es diseminada."
 },
 {
  "id": "tarjeta-024",
  "tema": "Dimórficos",
  "pregunta": "Levadura grande con gemación múltiple en \"timón de barco\"",
  "respuesta": "Paracoccidioides brasiliensis",
  "detalle": "Hombres agricultores (9:1; los estrógenos inhiben la levadura). Úlceras orales moriformes, pulmón tipo TB con BK negativa, suprarrenales (Addison). Th1 protege, Th2 empeora. Anti-gp43. Itraconazol o TMP-SMX."
 },
 {
  "id": "tarjeta-025",
  "tema": "Dimórficos",
  "pregunta": "Levadura grande, de pared gruesa, con gemación ÚNICA de base ANCHA",
  "respuesta": "Blastomyces dermatitidis",
  "detalle": "Norteamérica (Grandes Lagos, ríos Ohio y Misisipi); excavación, tala. Pulmón + piel verrugosa (la extrapulmonar más frecuente). Micelio con conidios en paleta (lollipop). Cultivo = referencia."
 },
 {
  "id": "tarjeta-026",
  "tema": "Subcutáneas",
  "pregunta": "Jardinero con nódulos en cadena ascendente por el brazo tras pincharse con un rosal",
  "respuesta": "Sporothrix schenckii",
  "detalle": "También por arañazo de gato. 25 °C: conidios en margarita; 37 °C: levadura en cigarro; tejido: cuerpo asteroide. Incuba 1–3 semanas. Perú: costa norte y selva. Cultivo = gold standard."
 },
 {
  "id": "tarjeta-027",
  "tema": "Subcutáneas",
  "pregunta": "Cuerpos muriformes (escleróticos) color café en el KOH",
  "respuesta": "Cromoblastomicosis (Fonsecaea pedrosoi)",
  "detalle": "Hongos dematiáceos (con melanina). Placa verrugosa en coliflor con puntos negros en las piernas. Agricultor de la Amazonía (Ucayali, San Martín), trauma con astilla."
 },
 {
  "id": "tarjeta-028",
  "tema": "Dermatofitos",
  "pregunta": "Microconidios en lágrima tipo \"pájaros sobre un alambre\" y reverso rojo vinoso",
  "respuesta": "Trichophyton rubrum",
  "detalle": "Antropófilo, el dermatofito más frecuente. Tinea pedis en mocasín, cruris, corporis, unguium; síndrome de una mano y dos pies. Casi nunca afecta el pelo. Terbinafina."
 },
 {
  "id": "tarjeta-029",
  "tema": "Dermatofitos",
  "pregunta": "Niño con gato y alopecia en el cuero cabelludo; macroconidios fusiformes rugosos; reverso amarillo",
  "respuesta": "Microsporum canis → griseofulvina oral",
  "detalle": "Zoófilo; invasión ectothrix; querion de Celso. E. floccosum: sin microconidios, macroconidios en maza, colonia caqui, nunca afecta el pelo."
 },
 {
  "id": "tarjeta-030",
  "tema": "Pneumocystis",
  "pregunta": "VIH con CD4 < 200, tos seca, hipoxemia, vidrio esmerilado; quistes en racimo con Grocott en el LBA",
  "respuesta": "Pneumocystis jirovecii → TMP-SMX por 21 días",
  "detalle": "Antes \"protozoo\", hoy hongo. Giemsa: formas tróficas (no tiñe el quiste). Grocott: quistes. PCR mtLSU rRNA. Alternativas: pentamidina (tóxica), atovacuona (menos eficaz)."
 },
 {
  "id": "tarjeta-031",
  "tema": "Tuberculosis",
  "pregunta": "Capas de la pared de M. tuberculosis, de adentro hacia afuera",
  "respuesta": "Membrana → peptidoglucano → arabinogalactano → ácidos micólicos → glucolípidos",
  "detalle": "El lipoarabinomanano (LAM) atraviesa toda la pared. El arabinogalactano une los ácidos micólicos al peptidoglucano. ESAT-6, CFP-10 y Ag85 son los antígenos que usa el QuantiFERON."
 },
 {
  "id": "tarjeta-032",
  "tema": "Tuberculosis",
  "pregunta": "Miembros del complejo M. tuberculosis",
  "respuesta": "M. tuberculosis, M. bovis, M. africanum, M. microti, M. canettii, M. caprae, M. pinnipedii",
  "detalle": "M. bovis: ganado, se transmite por leche no pasteurizada. M. africanum: África. M. microti: roedores. Koch descubrió el agente en 1882; la BCG es de 1908."
 },
 {
  "id": "tarjeta-033",
  "tema": "Tuberculosis",
  "pregunta": "Tres requisitos para que la TB se transmita",
  "respuesta": "Paciente bacilífero + contacto cercano y prolongado + espacio cerrado y hacinado",
  "detalle": "Se transmite por vía aérea en gotículas muy pequeñas. En zonas de alta prevalencia, cada paciente BAAR (+) contagia a unas 20 personas antes de ser diagnosticado."
 },
 {
  "id": "tarjeta-034",
  "tema": "Tuberculosis",
  "pregunta": "Auramina vs Ziehl-Neelsen",
  "respuesta": "La auramina (fluorescente) es más sensible",
  "detalle": "Detecta BAAR en concentraciones más bajas, cubre más campo en menos tiempo y es ideal para laboratorios con mucha carga. Las muestras son esputos seriados."
 },
 {
  "id": "tarjeta-035",
  "tema": "Tuberculosis",
  "pregunta": "Medios de cultivo para TB y desde cuándo salen positivos",
  "respuesta": "Löwenstein-Jensen u Ogawa: 4.ª semana · MGIT 960 (7H9): 2.º día · 7H10: 2.ª semana",
  "detalle": "En Löwenstein-Jensen, las colonias son rugosas, de bordes irregulares, elevadas y color crema. El cultivo es el gold standard. Los patógenos crecen mejor a 37 °C."
 },
 {
  "id": "tarjeta-036",
  "tema": "Tuberculosis",
  "pregunta": "¿Cómo detecta crecimiento el sistema MGIT 960?",
  "respuesta": "El bacilo consume el O₂ unido al fluorocromo y el tubo emite fluorescencia",
  "detalle": "El equipo lee los tubos cada 60 minutos. También evalúa sensibilidad y resistencia."
 },
 {
  "id": "tarjeta-037",
  "tema": "Tuberculosis",
  "pregunta": "Micobacterias no TB en el agar 7H10: fotocromógenas vs escotocromógenas",
  "respuesta": "Fotocromógenas: se pigmentan con la luz · escotocromógenas: se pigmentan en la oscuridad",
  "detalle": "Las cromógenas dan colonias amarillas. Por eso el 7H10 y el Löwenstein-Jensen sirven para diferenciar M. tuberculosis de otras micobacterias."
 },
 {
  "id": "tarjeta-038",
  "tema": "Tuberculosis",
  "pregunta": "Forma extrapulmonar más contagiosa y su síntoma principal",
  "respuesta": "TB laríngea: disfonía (ronquera persistente)",
  "detalle": "Suele acompañar a una TB pulmonar con muchos bacilos. Elimina bacilos directamente desde las cuerdas vocales. Se diagnostica por laringoscopía (úlceras y granulomas) y baciloscopía o PCR."
 },
 {
  "id": "tarjeta-039",
  "tema": "Tuberculosis",
  "pregunta": "Tríada de Phemister (TB de articulación periférica)",
  "respuesta": "Osteopenia yuxtaarticular + erosiones óseas periféricas + estrechamiento gradual del espacio articular",
  "detalle": "En la columna es el Mal de Pott: espondilodiscitis de dos vértebras más el disco, abscesos paravertebrales, giba. El método de elección es la RM."
 },
 {
  "id": "tarjeta-040",
  "tema": "Tuberculosis",
  "pregunta": "TB extrapulmonar: ¿qué porcentaje es y cuál es la forma más frecuente?",
  "respuesta": "15–20 % (más del 50 % en VIH) · la más frecuente es la linfática (25,2 %)",
  "detalle": "Le siguen pleural 22,8 %, genitourinaria 16,1 %, osteoarticular 9,6 %, miliar 9,2 %, meníngea 4,3 % y peritoneal 3,5 %. La pulmonar es el 85,1 % de todos los casos."
 },
 {
  "id": "tarjeta-041",
  "tema": "Tuberculosis",
  "pregunta": "Signos de alarma en la meningitis tuberculosa",
  "respuesta": "Papiledema, convulsiones, focalización severa o Glasgow < 12",
  "detalle": "LCR: 100–500 células (linfocitos), proteínas > 100–500 mg/dL, glucosa LCR/sangre < 0,3, ADA > 9–10 U/L. La prueba rápida de elección es GeneXpert Ultra. En la RM, realce meníngeo basal."
 },
 {
  "id": "tarjeta-042",
  "tema": "Resistencia",
  "pregunta": "Tres mecanismos de resistencia bacteriana y el más potente",
  "respuesta": "Bombas de eflujo · blanco alterado · desactivación enzimática (la más potente)",
  "detalle": "Blanco alterado: las PBP en el MRSA. Desactivación enzimática: BLEE y carbapenemasas, que pueden actuar dentro de la célula, en el periplasma o fuera."
 },
 {
  "id": "tarjeta-043",
  "tema": "Resistencia",
  "pregunta": "Resistencia adquirida: ¿qué mecanismos genéticos son los más importantes en clínica?",
  "respuesta": "Conjugación y transposición (suelen actuar juntas)",
  "detalle": "Los cuatro mecanismos de intercambio son transformación, transducción, conjugación y transposición. La resistencia innata o cromosómica es la de especies que están naturalmente fuera del espectro del antibiótico."
 },
 {
  "id": "tarjeta-044",
  "tema": "Resistencia",
  "pregunta": "Bacteriostático vs bactericida: ejemplos",
  "respuesta": "Bacteriostáticos: cloranfenicol, tetraciclinas · bactericidas: penicilinas, quinolonas",
  "detalle": "Espectro reducido: penicilina G, vancomicina. Intermedio: amoxicilina. Amplio: ceftriaxona, ciprofloxacino, carbapenémicos."
 },
 {
  "id": "tarjeta-045",
  "tema": "Resistencia",
  "pregunta": "Kirby-Bauer: principio y qué significan S / I / R",
  "respuesta": "El disco difunde el antibiótico en un gradiente; el halo mide indirectamente la CIM",
  "detalle": "Sensible: alta probabilidad de éxito. Intermedio: efecto incierto. Resistente: alta probabilidad de fracaso. Un resultado sensible in vitro puede fallar in vivo."
 },
 {
  "id": "tarjeta-046",
  "tema": "Resistencia",
  "pregunta": "¿Qué hace MALDI-TOF y qué no hace?",
  "respuesta": "Identifica la especie en horas por espectrometría de masas; NO reemplaza al antibiograma",
  "detalle": "Dispara un láser sobre el extracto y compara el perfil proteico con una base de datos. Puede detectar algunas betalactamasas o carbapenemasas."
 },
 {
  "id": "tarjeta-047",
  "tema": "Resistencia",
  "pregunta": "¿Por qué AmpC es peligrosa y qué bacterias la producen?",
  "respuesta": "Se induce durante el tratamiento: el paciente empieza sensible y se vuelve resistente con ceftriaxona",
  "detalle": "Bacterias típicas: Enterobacter cloacae, Citrobacter freundii, Serratia, Proteus/Morganella, P. aeruginosa. No se inhibe con clavulanato, sulbactam ni tazobactam."
 },
 {
  "id": "tarjeta-048",
  "tema": "Resistencia",
  "pregunta": "Carbapenemasas: inhibidor que indica KPC vs metalo-betalactamasa",
  "respuesta": "Sinergia con ácido borónico = KPC · sinergia con EDTA o dipicolinato = metalo-betalactamasa (NDM, VIM, IMP)",
  "detalle": "KPC: Klebsiella. NDM: E. coli y Klebsiella. OXA-48: enterobacterias. VIM e IMP: Pseudomonas y Acinetobacter. Están en plásmidos y son intrahospitalarias."
 },
 {
  "id": "tarjeta-049",
  "tema": "Micología general",
  "pregunta": "Pared y membrana de los hongos: ¿qué las compone?",
  "respuesta": "Pared: quitina, glucanos, mananos · membrana: ergosterol",
  "detalle": "El ergosterol es el blanco de los polienos (que lo atacan) y de los azoles (que impiden su síntesis). El β-glucano de la pared es el blanco de las equinocandinas."
 },
 {
  "id": "tarjeta-050",
  "tema": "Micología general",
  "pregunta": "Mecanismo de los cuatro grupos de antifúngicos",
  "respuesta": "Polienos: poros en el ergosterol · azoles: inhiben la síntesis de ergosterol (CYP450) · equinocandinas: inhiben el β-glucano · flucitosina: inhibe ADN y ARN",
  "detalle": "Efectos adversos: polienos, nefrotoxicidad e hipokalemia; azoles, hepatotoxicidad e interacciones; equinocandinas, transaminasas elevadas; flucitosina, mielosupresión."
 },
 {
  "id": "tarjeta-051",
  "tema": "Micología general",
  "pregunta": "Tinción para cada caso: Cryptococcus en LCR · hongos filamentosos · biopsias",
  "respuesta": "Tinta china · azul de lactofenol · PAS y Gomori-Grocott",
  "detalle": "KOH 10–20 %: digiere queratina (piel, uñas). Blanco de calcoflúor: fluorescencia con la quitina. Negro de clorazol: piel, uñas y córnea. Gram: levaduras."
 },
 {
  "id": "tarjeta-052",
  "tema": "Micología general",
  "pregunta": "El β-D-glucano detecta casi todos los hongos. ¿Cuáles NO?",
  "respuesta": "Cryptococcus y zigomicetos",
  "detalle": "El galactomanano es para Aspergillus. El antígeno capsular es para Cryptococcus. El medio de cultivo estándar es el agar Sabouraud dextrosa."
 },
 {
  "id": "tarjeta-053",
  "tema": "Micología general",
  "pregunta": "Esporangiosporas vs conidios vs zigosporas vs basidiosporas",
  "respuesta": "Esporangiosporas: dentro de un saco (Mucor) · conidios: externos (Aspergillus) · zigosporas: sexuales (Rhizopus) · basidiosporas: sexuales (Cryptococcus)",
  "detalle": "Hifas septadas: Ascomycota y Basidiomycota. Hifas no septadas (cenocíticas): zigomicetos. La reproducción asexual es por mitosis; la sexual, por meiosis."
 },
 {
  "id": "tarjeta-054",
  "tema": "Micología general",
  "pregunta": "Micosis oportunistas clásicas, emergentes y eventuales",
  "respuesta": "Clásicas: Candida, Aspergillus, Cryptococcus, zigomicetos · emergentes: Fusarium, Malassezia, C. auris · eventuales: esporotricosis, histoplasmosis, paracoccidioidomicosis",
  "detalle": "Factores predisponentes: neutropenia, trasplante, cáncer, SIDA, antibióticos de amplio espectro, corticoides."
 },
 {
  "id": "tarjeta-055",
  "tema": "Micología general",
  "pregunta": "Tipos de micosis según profundidad",
  "respuesta": "Superficiales · cutáneas · subcutáneas (por inoculación) · sistémicas (por inhalación, dimórficos) · oportunistas",
  "detalle": "Las sistémicas por patógenos primarios enferman a personas sanas. Las oportunistas necesitan que las defensas estén bajas."
 },
 {
  "id": "tarjeta-056",
  "tema": "Mohos oportunistas",
  "pregunta": "¿Qué representan el nódulo y el halo en el signo del halo?",
  "respuesta": "Nódulo = infarto por trombosis arteriolar · halo = hemorragia alveolar alrededor",
  "detalle": "Es temprano (primeros ~10 días) y típico de la aspergilosis invasiva en neutropénicos. Fusarium puede dar un halo idéntico. El halo invertido (atolón) es de los zigomicetos."
 },
 {
  "id": "tarjeta-057",
  "tema": "Mohos oportunistas",
  "pregunta": "Especies de Aspergillus: ¿cuál produce aflatoxinas y cuál otomicosis?",
  "respuesta": "A. flavus: aflatoxinas · A. niger: otomicosis (oído de nadador), colonias negras",
  "detalle": "A. fumigatus: 85–90 %, colonias verde-grisáceas, vesícula en forma de matraz. A. flavus: colonias verde-amarillentas, conidióforo rugoso."
 },
 {
  "id": "tarjeta-058",
  "tema": "Mohos oportunistas",
  "pregunta": "Diagnóstico de la ABPA",
  "respuesta": "IgE total alta + IgE e IgG anti-Aspergillus altas + prueba cutánea positiva",
  "detalle": "En el esputo: hifas tabicadas, moldes bronquiales marrones, eosinofilia. Es una hipersensibilidad tipo I y III (Th2) en asma o fibrosis quística."
 },
 {
  "id": "tarjeta-059",
  "tema": "Mohos oportunistas",
  "pregunta": "¿Qué Fusarium es el más virulento y cómo entra la mayoría de infecciones?",
  "respuesta": "F. solani (la mitad de las invasivas) · 90 % por vía respiratoria",
  "detalle": "Un 10 % entra por la piel; también por trauma en la córnea. Tiene resistencia intrínseca a varios antifúngicos y forma 'murallas'de hifas contra los neutrófilos."
 },
 {
  "id": "tarjeta-060",
  "tema": "Mohos oportunistas",
  "pregunta": "Zigomicosis vs aspergilosis: velocidad e imagen",
  "respuesta": "Zigomicosis: destrucción en días, halo invertido · aspergilosis: semanas, signo del halo",
  "detalle": "En la zigomicosis la hemoptisis masiva es un riesgo inminente. El cultivo crece en 3–4 días."
 },
 {
  "id": "tarjeta-061",
  "tema": "Candida",
  "pregunta": "Factores de virulencia de Candida",
  "respuesta": "Cambio de levadura a hifa, adhesinas ALS, biofilm, proteasas, fosfolipasas, lipasas",
  "detalle": "Candida no ataca primero: aprovecha antibióticos, catéteres o inmunosupresión. Causa el 75–88 % de las infecciones fúngicas nosocomiales."
 },
 {
  "id": "tarjeta-062",
  "tema": "Candida",
  "pregunta": "Factores de riesgo de candidemia",
  "respuesta": "UCI, catéter venoso, antibióticos prolongados, inmunosupresión",
  "detalle": "Es la forma invasiva más común: fiebre persistente sin foco que no responde a antibióticos. Si hay biofilm, hay que retirar el catéter. C. tropicalis se asocia a la forma diseminada en neutropenia."
 },
 {
  "id": "tarjeta-063",
  "tema": "Candida",
  "pregunta": "Candidiasis vulvovaginal: clínica y cuándo pensar en C. glabrata",
  "respuesta": "Prurito intenso + flujo blanco grumoso tipo requesón · si es recurrente, pensar en C. glabrata",
  "detalle": "Factores de riesgo: embarazo, antibióticos, diabetes. Tratamiento: clotrimazol o miconazol en crema, o fluconazol 150 mg en dosis única."
 },
 {
  "id": "tarjeta-064",
  "tema": "Cryptococcus",
  "pregunta": "Agar Niger, medio CGB y mucicarmina: ¿qué muestra cada uno en Cryptococcus?",
  "respuesta": "Niger: colonias marrones (melanina) · CGB: C. gattii crece · mucicarmina: tiñe la cápsula de rojo",
  "detalle": "En el Gomori-Grocott la pared sale negra pero la cápsula no se tiñe. En Sabouraud las colonias son mucoides. Todas las especies son ureasa positivas."
 },
 {
  "id": "tarjeta-065",
  "tema": "Cryptococcus",
  "pregunta": "Sinónimos de la criptococosis",
  "respuesta": "Enfermedad de Busse-Buschke, blastomicosis europea, torulosis",
  "detalle": "La forma pulmonar es asintomática hasta en el 50 %. Las lesiones de piel indican enfermedad diseminada. La meningitis es la forma más grave."
 },
 {
  "id": "tarjeta-066",
  "tema": "Dimórficos",
  "pregunta": "Zonas endémicas de histoplasmosis en Perú y sinónimos",
  "respuesta": "Tingo María, Oxapampa, Pucallpa, Iquitos · enfermedad de Darling, fiebre de las cavernas, fiebre de Tingo María",
  "detalle": "Vive en suelo ácido con guano, a 25–30 °C y 70–80 % de humedad. La histoplasmina es positiva en el 80 % de la población endémica."
 },
 {
  "id": "tarjeta-067",
  "tema": "Dimórficos",
  "pregunta": "Formas clínicas de la histoplasmosis",
  "respuesta": "Histoplasmoma (nódulo calcificado en diana) · aguda (gripal, adenopatías hiliares) · crónica (cavitaciones apicales, tipo TB) · diseminada (VIH)",
  "detalle": "La diseminada se da con CD4 < 150 y produce pancitopenia y hepatoesplenomegalia. El cultivo es el gold standard pero tarda 2–6 semanas. El antígeno en orina es la prueba más útil en VIH."
 },
 {
  "id": "tarjeta-068",
  "tema": "Dimórficos",
  "pregunta": "Paracoccidioidomicosis juvenil vs crónica del adulto",
  "respuesta": "Juvenil (5–10 %): ganglios dolorosos y hepatoesplenomegalia · crónica (85–90 %): pulmón + úlceras moriformes + suprarrenales",
  "detalle": "La juvenil afecta a niños y jóvenes y avanza rápido. La crónica afecta a hombres rurales, fumadores y alcohólicos, y avanza lento."
 },
 {
  "id": "tarjeta-069",
  "tema": "Dimórficos",
  "pregunta": "Sinónimos y tratamiento de la paracoccidioidomicosis",
  "respuesta": "Blastomicosis sudamericana, enfermedad de Lutz-Splendore · itraconazol 6–12 meses",
  "detalle": "Alternativa: TMP-SMX por 12–24 meses. Grave: anfotericina B IV por 2–4 semanas y luego itraconazol. Si los títulos anti-gp43 bajan, hay buena respuesta."
 },
 {
  "id": "tarjeta-070",
  "tema": "Dimórficos",
  "pregunta": "Blastomicosis: forma extrapulmonar más frecuente y riesgo",
  "respuesta": "Piel (lesiones verrugosas) · construcción, excavación, tala, caza, campamentos",
  "detalle": "EE. UU.: ≤ 2 casos por 100 000 habitantes al año; 66 % hombres (Minnesota 2024). Especies: B. dermatitidis y B. gilchristii. PCR para la forma diseminada."
 },
 {
  "id": "tarjeta-071",
  "tema": "Dimórficos",
  "pregunta": "Tres hongos que simulan TB con baciloscopía negativa",
  "respuesta": "Histoplasma (cueva) · Paracoccidioides (agricultor con úlceras orales) · aspergiloma (masa dentro de una caverna antigua)",
  "detalle": "Tip ENAM: paciente rural con cuadro de TB y BK negativa → paracoccidioidomicosis."
 },
 {
  "id": "tarjeta-072",
  "tema": "Subcutáneas",
  "pregunta": "Esporotricosis: incubación, localización y hallazgo en el tejido",
  "respuesta": "1–3 semanas · miembros superiores (70–80 %); cara en niños · cuerpo asteroide (Splendore-Hoeppli)",
  "detalle": "La forma linfocutánea da nódulos en cadena ascendente. En inmunosuprimidos se disemina a huesos, articulaciones o pulmón. PCR y MALDI-TOF identifican la especie."
 },
 {
  "id": "tarjeta-073",
  "tema": "Subcutáneas",
  "pregunta": "Agentes de cromoblastomicosis y epidemiología en Perú",
  "respuesta": "Fonsecaea pedrosoi, F. monophora, Cladophialophora carrionii, Phialophora verrucosa, Rhinocladiella",
  "detalle": "Perú (2011–2024, 13 casos): 84 % hombres, 77 % en la Amazonía (Ucayali, San Martín), edad mediana 65 años. Crecen lento (2–4 semanas) a 25–30 °C."
 },
 {
  "id": "tarjeta-074",
  "tema": "Dermatofitos",
  "pregunta": "¿Cómo digieren la queratina los dermatofitos?",
  "respuesta": "El sulfito rompe los puentes disulfuro y las proteasas y queratinasas la degradan",
  "detalle": "Los péptidos y aminoácidos se absorben para producir ATP y crecer. Su nutrición es heterótrofa por absorción. Solo viven en la capa córnea, el pelo y las uñas."
 },
 {
  "id": "tarjeta-075",
  "tema": "Dermatofitos",
  "pregunta": "Epidermophyton floccosum: tres rasgos clave",
  "respuesta": "Sin microconidios · macroconidios en maza (palo de golf) · nunca afecta el pelo",
  "detalle": "Es antropófilo. Colonia aterciopelada, amarillo-verdosa, verde oliva o caqui. Afecta pie, ingle, cuerpo, uñas y manos. Se mantiene por debajo del 10 % de los casos."
 },
 {
  "id": "tarjeta-076",
  "tema": "Dermatofitos",
  "pregunta": "Diagnóstico de dermatofitos y qué prueba NO se usa",
  "respuesta": "KOH + cultivo en Sabouraud o Mycosel (25–30 °C) + microcultivo · la serología no se usa",
  "detalle": "Se raspa el borde activo de la lesión. El KOH muestra hifas septadas y artroconidias. Si hay duda: PCR o secuenciación de la región ITS. El 93 % son antropófilos (estudio IMT-UNMSM)."
 },
 {
  "id": "tarjeta-077",
  "tema": "Pneumocystis",
  "pregunta": "Tres formas de Pneumocystis y qué tiñe cada tinción",
  "respuesta": "Trófica, quiste (asco) y esporozoíto · Giemsa: tróficas · Grocott: quistes · IFD: ambos",
  "detalle": "Se adhiere a los neumocitos tipo I. La inflamación llena los alvéolos de material proteináceo y produce hipoxemia. La muestra de elección es el lavado broncoalveolar."
 }
];
