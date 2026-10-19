// Estación: Virus
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas por Mafer.
import type { Estacion } from "../types";

export const virus: Estacion = {
  "id": "virus",
  "nombre": "Virus",
  "descripcion": "Estructura, cuadros típicos y tratamiento",
  "resumen": "Ideas clave:\n• Virus con envoltura: sensibles a alcohol y detergentes.\n• Retrovirus: transcriptasa reversa; VIH usa CD4.\n• Mano-pie-boca: Coxsackie. Bronquiolitis obliterante: adenovirus.\n• Rubéola: sin antiviral; se previene con vacuna.\n\nTeoría 10 · Introducción a los virus:\n• Ivanovsky (1892): el «agente filtrable» del tabaco atravesaba filtros que retienen bacterias.\n• Fuera de la célula el virión es metabólicamente inerte: solo se multiplica dentro de una célula.\n• Nucleocápside = cápside + genoma. Desnudos (solo cápside): resisten ácido, detergentes, desecación y calor; salen por lisis. Envueltos: sensibles a ácido, detergentes, desecación y calor; salen por gemación.\n• Baltimore: I ADN ds (herpes, adeno, VPH) · II ADN ss · III ARN ds (rotavirus) · IV ARN + (picorna, flavi, corona) · V ARN − (influenza, rabia, sarampión, VSR) · VI ARN con transcriptasa inversa (retrovirus) · VII ADN ds con transcriptasa inversa (VHB).\n• ARN − siempre trae su propia ARN polimerasa. ARN + funciona directo como ARNm. Virus ADN replican en el núcleo, mutan menos y pueden hacer latencia.\n• Curva de crecimiento: infección → eclipse (sin viriones completos detectables) → ensamblaje → liberación → meseta. Burst size = viriones liberados por célula.\n• Oncogénicos: VPH, EBV, VHB, VHC, HHV-8 (Kaposi), poliomavirus de Merkel, HTLV-1. Quitan los «frenos» p53 y Rb.\n• Diagnóstico: PCR / RT-PCR es el gold standard. Western blot confirma VIH. IgM = infección aguda; IgG = pasada o inmunidad. Carga viral para monitorear VIH, VHB y VHC.\n• Pensar en virus: fiebre + mialgias + síntomas respiratorios + leucopenia con linfocitosis, sin pus y sin respuesta a antibióticos.\n\nTeoría 11 · VIH, HTLV y VPH:\n• VIH: lentivirus, 2 copias de ARN +, envuelto. gp120 se une a CD4; correceptor CCR5 (inicio) o CXCR4 (avanzado); gp41 fusiona. p24 = cápside.\n• Transmisión: sexual (principal), sangre, vertical (más en el parto). Sí: sangre, semen, secreciones vaginales, leche. No: saliva, sudor, lágrimas, orina.\n• Fases: síndrome retroviral agudo (2–4 sem, p24+, anticuerpos aún no) → latencia clínica (8–10 años) → sintomática (CD4 200–500) → SIDA (CD4 < 200 o enfermedad definitoria).\n• Diagnóstico: tamizaje con ELISA 4.ª gen o prueba rápida → segunda prueba distinta → confirmación con LIA o RT-qPCR. WB positivo = 2 bandas de envoltura (gp120/160 + gp41); solo p24 no confirma. Neonato: PCR a las 2 sem, 1 mes y 4–6 meses.\n• TARV MINSA: TDF + 3TC + DTG (TLD) de primera línea, también en gestantes y en coinfección con VHB. Con TB: TDF + 3TC + EFV. Falla renal: ABC + 3TC + DTG.\n• HTLV-1: deltaretrovirus, infecta CD4 (HTLV-2: CD8). Se transmite por células infectadas, sobre todo lactancia. Perú es endémico. Causa ATLL (células en flor, hipercalcemia) y HAM/TSP (paraparesia espástica).\n• VPH: ADN ds, no envuelto. E6 degrada p53; E7 inactiva Rb. Alto riesgo 16 y 18; bajo riesgo 6 y 11 (verrugas). Coilocitos. Gold standard de tamizaje: co-test (Papanicolaou + PCR de VPH) de 30 a 65 años. Vacuna MINSA tetravalente (6, 11, 16, 18) a los 9–13 años, 2 dosis.",
  "preguntas": [
    {
      "id": "virus-001",
      "nivel": "m",
      "pregunta": "Lactante con fiebre y vesículas en lengua, paladar, palmas y plantas. Agente:",
      "correcta": "Coxsackie",
      "distractores": [
        "Adenovirus",
        "Herpes virus",
        "Virus sincitial respiratorio"
      ],
      "pista": "Enfermedad mano-pie-boca.",
      "explicacion": "Es un enterovirus."
    },
    {
      "id": "virus-002",
      "nivel": "d",
      "pregunta": "La bronquiolitis obliterante es típica de:",
      "correcta": "Adenovirus",
      "distractores": [
        "Virus sincitial respiratorio",
        "Rinovirus",
        "Influenza"
      ],
      "pista": "También causa conjuntivitis y faringitis.",
      "explicacion": "El adenovirus puede dejar daño bronquiolar permanente."
    },
    {
      "id": "virus-003",
      "nivel": "m",
      "pregunta": "Agente del condiloma acuminado:",
      "correcta": "Virus del papiloma humano (papovavirus)",
      "distractores": [
        "Chlamydia trachomatis",
        "Gardnerella vaginalis",
        "Herpes virus 2"
      ],
      "pista": "Es un virus de ADN.",
      "explicacion": "Los tipos 6 y 11 causan verrugas genitales."
    },
    {
      "id": "virus-004",
      "nivel": "d",
      "pregunta": "Sobre el VIH, es FALSO que:",
      "correcta": "Se une al receptor CD5",
      "distractores": [
        "Es linfotropo",
        "Su genoma es ARN",
        "Es un lentivirus"
      ],
      "pista": "Revisa el receptor.",
      "explicacion": "El receptor es CD4, con CCR5 o CXCR4 como correceptor."
    },
    {
      "id": "virus-005",
      "nivel": "m",
      "pregunta": "El síndrome TORCH incluye:",
      "correcta": "Toxoplasma, rubéola, citomegalovirus, herpes y otros como sífilis",
      "distractores": [
        "Sífilis, gonorrea y chancro blando",
        "Rubéola, citomegalovirus y gonorrea",
        "Toxoplasma, VIH e influenza"
      ],
      "pista": "La O es 'otros'.",
      "explicacion": "Son infecciones que pasan de la madre al feto."
    },
    {
      "id": "virus-006",
      "nivel": "m",
      "pregunta": "Encefalitis herpética tratada con aciclovir. ¿Qué efecto adverso hay que vigilar?",
      "correcta": "Insuficiencia renal",
      "distractores": [
        "Erupción cutánea",
        "Insuficiencia hepática",
        "Inmunosupresión"
      ],
      "pista": "Precipita en los túbulos.",
      "explicacion": "Por eso se hidrata bien al paciente."
    },
    {
      "id": "virus-007",
      "nivel": "f",
      "pregunta": "Antiviral de elección para la influenza:",
      "correcta": "Oseltamivir",
      "distractores": [
        "Aciclovir",
        "Zidovudina",
        "Ganciclovir"
      ],
      "pista": "Inhibe la neuraminidasa.",
      "explicacion": "Funciona mejor en las primeras 48 horas."
    },
    {
      "id": "virus-008",
      "nivel": "f",
      "pregunta": "¿Puede un virus reproducirse fuera de una célula?",
      "correcta": "No: es un parásito intracelular obligado",
      "distractores": [
        "Sí, en cualquier medio de cultivo",
        "Sí, si tiene envoltura",
        "Solo los virus de ADN"
      ],
      "pista": "No tiene ribosomas propios.",
      "explicacion": "Usa la maquinaria de la célula huésped."
    },
    {
      "id": "virus-009",
      "nivel": "f",
      "pregunta": "¿Qué vacuna previene la rubéola?",
      "correcta": "Triple viral (sarampión, paperas y rubéola)",
      "distractores": [
        "BCG",
        "Pentavalente",
        "DPT"
      ],
      "pista": "Protege contra tres virus.",
      "explicacion": "Es la prevención principal del síndrome de rubéola congénita."
    },
    {
      "id": "virus-010",
      "nivel": "m",
      "pregunta": "Agente más frecuente de bronquiolitis en lactantes:",
      "correcta": "Virus sincitial respiratorio",
      "distractores": [
        "Adenovirus",
        "Rinovirus",
        "Coxsackie"
      ],
      "pista": "Su nombre viene de las células gigantes que forma.",
      "explicacion": "Causa la mayoría de bronquiolitis en menores de 2 años."
    },
    {
      "id": "virus-011",
      "nivel": "d",
      "pregunta": "Antiviral análogo de nucleósido que necesita la timidina quinasa viral para activarse:",
      "correcta": "Aciclovir",
      "distractores": [
        "Oseltamivir",
        "Amantadina",
        "Zidovudina"
      ],
      "pista": "Se usa en herpes.",
      "explicacion": "Solo se activa en células infectadas, por eso es selectivo."
    },
    {
      "id": "virus-012",
      "nivel": "d",
      "pregunta": "¿A qué género pertenece el virus del dengue?",
      "correcta": "Flavivirus",
      "distractores": [
        "Alfavirus",
        "Bunyavirus",
        "Arenavirus"
      ],
      "pista": "Comparte género con la fiebre amarilla.",
      "explicacion": "El chikungunya, en cambio, es un alfavirus."
    },
    {
      "id": "virus-013",
      "nivel": "d",
      "pregunta": "¿Qué correceptor, cuando falta por la deleción Δ32, da resistencia a ciertas cepas de VIH?",
      "correcta": "CCR5",
      "distractores": [
        "CXCR4",
        "CD8",
        "CD19"
      ],
      "pista": "Las cepas R5 lo usan.",
      "explicacion": "Sin CCR5 funcional, las cepas R5 no pueden entrar."
    },
    {
      "id": "virus-014",
      "nivel": "d",
      "pregunta": "Hepatitis B: ¿qué patrón indica infección pasada resuelta, con inmunidad?",
      "correcta": "HBsAg negativo con anti-HBc IgG y anti-HBs positivos",
      "distractores": [
        "HBsAg y anti-HBc IgM positivos",
        "Solo anti-HBs positivo",
        "HBeAg positivo"
      ],
      "pista": "El anti-HBc solo aparece si hubo infección.",
      "explicacion": "Solo anti-HBs positivo corresponde a vacunación."
    },
    {
      "id": "virus-015",
      "nivel": "d",
      "pregunta": "¿Qué característica permite al virus influenza A el cambio antigénico mayor (shift)?",
      "correcta": "Su genoma segmentado, que se reorganiza entre virus",
      "distractores": [
        "Su transcriptasa reversa",
        "Su ADN de doble cadena",
        "Su cápside icosaédrica desnuda"
      ],
      "pista": "Dos virus distintos intercambian piezas.",
      "explicacion": "El shift puede originar pandemias; el drift son mutaciones pequeñas."
    },
    {
      "id": "virus-016",
      "nivel": "x",
      "pregunta": "Persona vacunada contra hepatitis B que nunca tuvo la infección. ¿Qué marcadores tiene?",
      "correcta": "Solo anti-HBs positivo",
      "distractores": [
        "Anti-HBc y anti-HBs positivos",
        "HBsAg y anti-HBc IgM positivos",
        "HBeAg positivo",
        "Anti-HBc IgG aislado"
      ],
      "explicacion": "La vacuna tiene solo HBsAg: no genera anti-HBc."
    },
    {
      "id": "virus-017",
      "nivel": "x",
      "pregunta": "¿Por qué el VIH genera variantes y resistencias tan rápido?",
      "correcta": "Su transcriptasa reversa no corrige errores y se replica en enorme cantidad",
      "distractores": [
        "Integra su ADN en varios cromosomas",
        "Tiene genoma segmentado",
        "Usa la ADN polimerasa humana",
        "Cambia de receptor en cada ciclo"
      ],
      "explicacion": "Por eso siempre se combinan al menos tres antirretrovirales."
    },
    {
      "id": "virus-018",
      "nivel": "x",
      "pregunta": "¿Por qué el ganciclovir, y no el aciclovir, es de elección contra el citomegalovirus?",
      "correcta": "El CMV no tiene timidina quinasa; el ganciclovir se activa con su quinasa UL97",
      "distractores": [
        "El CMV es un virus de ARN",
        "El aciclovir no atraviesa la membrana",
        "El ganciclovir inhibe la neuraminidasa",
        "El CMV no usa ADN polimerasa"
      ],
      "explicacion": "El aciclovir depende de una enzima que el CMV no tiene."
    },
    {
      "id": "virus-019",
      "nivel": "x",
      "pregunta": "Recién nacido con sordera neurosensorial, coriorretinitis y calcificaciones periventriculares:",
      "correcta": "Citomegalovirus congénito",
      "distractores": [
        "Toxoplasmosis congénita",
        "Rubéola congénita",
        "Herpes neonatal",
        "Sífilis congénita"
      ],
      "explicacion": "En toxoplasmosis las calcificaciones suelen ser difusas; en CMV, periventriculares."
    },
    {
      "id": "virus-020",
      "nivel": "x",
      "pregunta": "¿Cómo actúa el oseltamivir?",
      "correcta": "Inhibe la neuraminidasa y frena la liberación de nuevos viriones",
      "distractores": [
        "Bloquea la proteína M2",
        "Inhibe la hemaglutinina",
        "Inhibe la ARN polimerasa viral",
        "Impide la fusión con la célula"
      ],
      "explicacion": "La amantadina era la que bloqueaba M2."
    },
    {
      "id": "virus-021",
      "nivel": "x",
      "pregunta": "Dengue: ¿por qué una segunda infección con otro serotipo suele ser más grave?",
      "correcta": "Los anticuerpos no neutralizantes facilitan la entrada del virus a los monocitos",
      "distractores": [
        "El segundo serotipo siempre es más virulento",
        "La primera infección destruye las plaquetas",
        "No se forman anticuerpos en la primera infección",
        "El mosquito transmite más virus la segunda vez"
      ],
      "explicacion": "Se llama potenciación dependiente de anticuerpos."
    },
    {
      "id": "virus-022",
      "nivel": "f",
      "pregunta": "¿Qué receptor usa el VIH para entrar a los linfocitos?",
      "correcta": "CD4",
      "distractores": [
        "CD8",
        "CD19",
        "CD5"
      ],
      "pista": "Es el linfocito que el VIH destruye.",
      "explicacion": "Además necesita un correceptor: CCR5 o CXCR4."
    },
    {
      "id": "virus-023",
      "nivel": "f",
      "pregunta": "¿Qué marcador indica que una persona tiene hepatitis B actualmente?",
      "correcta": "HBsAg positivo",
      "distractores": [
        "Solo anti-HBs positivo",
        "Anti-HBc IgG con anti-HBs",
        "Ningún marcador"
      ],
      "pista": "Es el antígeno de superficie.",
      "explicacion": "Solo anti-HBs positivo corresponde a vacunación."
    },
    {
      "id": "virus-024",
      "nivel": "f",
      "pregunta": "¿Quién demostró en 1892 que un agente infeccioso del tabaco atravesaba los filtros que retienen bacterias?",
      "correcta": "Dmitri Ivanovsky",
      "distractores": [
        "Louis Pasteur",
        "Robert Koch",
        "Luc Montagnier"
      ],
      "pista": "Lo llamaron «agente filtrable».",
      "explicacion": "Ivanovsky filtró la savia de plantas de tabaco enfermas con filtros de porcelana: el agente pasaba igual. Fue el primer indicio de los virus."
    },
    {
      "id": "virus-025",
      "nivel": "f",
      "pregunta": "Fuera de la célula, un virión es:",
      "correcta": "Metabólicamente inerte: no puede reproducirse solo",
      "distractores": [
        "Metabólicamente activo, pero no se divide",
        "Capaz de multiplicarse en medios de cultivo ricos",
        "Una célula sin núcleo ni organelas"
      ],
      "pista": "No tiene citosol ni organelas propias.",
      "explicacion": "Los virus son acelulares: no tienen membrana plasmática, citosol ni organelas. Fuera de la célula son inertes."
    },
    {
      "id": "virus-026",
      "nivel": "f",
      "pregunta": "¿Cómo se llama el conjunto de la cápside y el genoma viral?",
      "correcta": "Nucleocápside",
      "distractores": [
        "Envoltura",
        "Cuerpo de inclusión",
        "Glucoproteína de superficie"
      ],
      "pista": "Núcleo (ácido nucleico) + cápside.",
      "explicacion": "Cápside + ácido nucleico = nucleocápside. Los virus envueltos tienen además una envoltura lipídica por fuera."
    },
    {
      "id": "virus-027",
      "nivel": "f",
      "pregunta": "Un virus con envoltura, expuesto a detergentes o a la desecación:",
      "correcta": "Se degrada fácilmente",
      "distractores": [
        "Resiste sin cambios",
        "Se vuelve más infeccioso",
        "Pierde la cápside pero conserva la envoltura"
      ],
      "pista": "La envoltura es una membrana de lípidos.",
      "explicacion": "La envoltura lipídica es sensible a ácido, detergentes, desecación y calor. Los virus desnudos, en cambio, resisten esos factores."
    },
    {
      "id": "virus-028",
      "nivel": "f",
      "pregunta": "¿Qué enzima usan los retrovirus para pasar su ARN a ADN?",
      "correcta": "Transcriptasa inversa",
      "distractores": [
        "ARN polimerasa de la célula",
        "Neuraminidasa",
        "Helicasa E1"
      ],
      "pista": "«Retro»: hacia atrás.",
      "explicacion": "La transcriptasa inversa copia el ARN viral a ADN, que luego la integrasa inserta en el genoma de la célula."
    },
    {
      "id": "virus-029",
      "nivel": "f",
      "pregunta": "¿Cuál de estos fluidos NO transmite el VIH?",
      "correcta": "Saliva",
      "distractores": [
        "Sangre",
        "Semen",
        "Leche materna"
      ],
      "pista": "Los besos y abrazos no contagian.",
      "explicacion": "Transmiten: sangre, semen, secreciones vaginales y leche materna. No transmiten: saliva, sudor, lágrimas ni orina."
    },
    {
      "id": "virus-030",
      "nivel": "f",
      "pregunta": "¿Con qué recuento de linfocitos CD4 se define SIDA?",
      "correcta": "Menos de 200 células/mm³",
      "distractores": [
        "Menos de 500 células/mm³",
        "Menos de 350 células/mm³",
        "Menos de 1200 células/mm³"
      ],
      "pista": "Por debajo de este número aparecen las infecciones definitorias.",
      "explicacion": "SIDA: CD4 < 200 células/mm³ o una infección o neoplasia definitoria. Lo normal es 500–1200."
    },
    {
      "id": "virus-031",
      "nivel": "f",
      "pregunta": "¿Qué vacuna contra el VPH usa el MINSA en el esquema nacional?",
      "correcta": "Tetravalente (6, 11, 16 y 18)",
      "distractores": [
        "Bivalente (16 y 18)",
        "Nonavalente (9 genotipos)",
        "No hay vacuna contra el VPH en el esquema"
      ],
      "pista": "Cubre verrugas y cáncer.",
      "explicacion": "La tetravalente protege contra 16 y 18 (cáncer de cérvix) y 6 y 11 (verrugas genitales). Se pone a niñas y niños de 9 a 13 años, 2 dosis (0 y 6 meses)."
    },
    {
      "id": "virus-032",
      "nivel": "f",
      "pregunta": "¿Qué genotipos del VPH causan la mayoría de las verrugas genitales?",
      "correcta": "6 y 11",
      "distractores": [
        "16 y 18",
        "31 y 33",
        "45 y 52"
      ],
      "pista": "Son de bajo riesgo.",
      "explicacion": "6 y 11 son de bajo riesgo: verrugas genitales y papilomas laríngeos. 16 y 18 son los de alto riesgo oncogénico."
    },
    {
      "id": "virus-033",
      "nivel": "f",
      "pregunta": "¿Cuál es la vía de transmisión más importante del HTLV-1 en zonas endémicas?",
      "correcta": "Lactancia materna",
      "distractores": [
        "Picadura de mosquito",
        "Gotas respiratorias",
        "Vía fecal-oral"
      ],
      "pista": "Madre a hijo, después del parto.",
      "explicacion": "El HTLV-1 pasa en los linfocitos infectados de la leche. El riesgo sube si la lactancia es prolongada."
    },
    {
      "id": "virus-034",
      "nivel": "f",
      "pregunta": "¿Cuál es el tratamiento de la diarrea por rotavirus?",
      "correcta": "Rehidratación oral o intravenosa",
      "distractores": [
        "Oseltamivir",
        "Aciclovir",
        "Antibióticos de amplio espectro"
      ],
      "pista": "El peligro es la deshidratación.",
      "explicacion": "Los virus entéricos se tratan con medidas de soporte: rehidratación. Se previene con la vacuna contra el rotavirus."
    },
    {
      "id": "virus-035",
      "nivel": "f",
      "pregunta": "Zika durante el embarazo se asocia a:",
      "correcta": "Microcefalia",
      "distractores": [
        "Artralgias intensas",
        "Parálisis flácida",
        "Hidrofobia"
      ],
      "pista": "Afecta al bebé.",
      "explicacion": "Zika (Flaviviridae, transmitido por mosquito) se asocia a microcefalia. Chikungunya da artralgias; polio, parálisis flácida; rabia, hidrofobia."
    },
    {
      "id": "virus-036",
      "nivel": "f",
      "pregunta": "Pápulas umbilicadas en la piel, por contacto. Agente:",
      "correcta": "Molusco contagioso (poxvirus)",
      "distractores": [
        "Varicela",
        "Sarampión",
        "Rubéola"
      ],
      "pista": "Es un poxvirus, como la viruela.",
      "explicacion": "El molusco contagioso (Poxviridae, ADN ds) produce pápulas umbilicadas y se contagia por contacto."
    },
    {
      "id": "virus-037",
      "nivel": "m",
      "pregunta": "¿En qué grupo de Baltimore está el virus de la hepatitis B?",
      "correcta": "VII: ADN doble cadena con transcriptasa inversa",
      "distractores": [
        "VI: ARN con transcriptasa inversa",
        "I: ADN doble cadena",
        "IV: ARN de sentido positivo"
      ],
      "pista": "Es ADN, pero usa transcriptasa inversa.",
      "explicacion": "El VHB (Hepadnaviridae) es el ejemplo del grupo VII. El VIH, con genoma de ARN, es del grupo VI."
    },
    {
      "id": "virus-038",
      "nivel": "m",
      "pregunta": "Un virus de ARN de sentido negativo, al entrar a la célula:",
      "correcta": "Necesita la ARN polimerasa que trae consigo para pasar a ARN +",
      "distractores": [
        "Se traduce directamente como ARNm",
        "Usa transcriptasa inversa para pasar a ADN",
        "Usa la ARN polimerasa del núcleo de la célula"
      ],
      "pista": "No puede traducirse directamente.",
      "explicacion": "El ARN (−) siempre lleva su polimerasa: la usa para formar ARN (+) y recién ahí se traduce. El ARN (+) funciona directo como ARNm."
    },
    {
      "id": "virus-039",
      "nivel": "m",
      "pregunta": "En la curva de crecimiento viral, la fase de eclipse es cuando:",
      "correcta": "No hay viriones completos detectables dentro de la célula",
      "distractores": [
        "El virus se une a los receptores de la membrana",
        "Los viriones salen y aumentan de forma exponencial",
        "La producción se estabiliza porque muchas células murieron"
      ],
      "pista": "El virus «desaparece» de la vista.",
      "explicacion": "En el eclipse ocurren desnudamiento, replicación del genoma y síntesis de proteínas, pero todavía no hay partículas completas."
    },
    {
      "id": "virus-040",
      "nivel": "m",
      "pregunta": "Los virus desnudos (sin envoltura) salen de la célula por:",
      "correcta": "Lisis celular",
      "distractores": [
        "Gemación",
        "Fusión con la célula vecina",
        "Integración al genoma"
      ],
      "pista": "Rompen la célula.",
      "explicacion": "Desnudos (adenovirus, poliovirus): lisis. Envueltos (VIH, influenza): gemación o brotación, llevándose parte de la membrana."
    },
    {
      "id": "virus-041",
      "nivel": "m",
      "pregunta": "¿Qué glucoproteína del VIH se une al receptor CD4?",
      "correcta": "gp120",
      "distractores": [
        "gp41",
        "p24",
        "p17"
      ],
      "pista": "Es la de superficie (SU).",
      "explicacion": "gp120 (SU) se une a CD4; gp41 (TM) hace la fusión. p24 es la cápside y p17 la matriz."
    },
    {
      "id": "virus-042",
      "nivel": "m",
      "pregunta": "¿En qué momento ocurre la mayoría de las transmisiones del VIH de madre a hijo?",
      "correcta": "Durante el parto",
      "distractores": [
        "Durante el embarazo, por la placenta",
        "Durante la lactancia",
        "En la concepción"
      ],
      "pista": "Contacto con sangre y secreciones vaginales.",
      "explicacion": "Intraparto es lo más frecuente (60–75 %). Sin tratamiento el riesgo total es 15–45 %; con TARV materno, menos de 1–2 %."
    },
    {
      "id": "virus-043",
      "nivel": "m",
      "pregunta": "Después de la exposición al VIH, ¿qué marcador aparece primero?",
      "correcta": "Antígeno p24",
      "distractores": [
        "Anticuerpos IgG anti-VIH",
        "Anticuerpos IgM anti-VIH",
        "Anticuerpos contra gp41"
      ],
      "pista": "Aparece entre los días 10 y 15.",
      "explicacion": "El p24 aparece desde el día 10–15; los anticuerpos, entre los días 15 y 45. Por eso las pruebas de 4.ª generación (que buscan p24) acortan la ventana."
    },
    {
      "id": "virus-044",
      "nivel": "m",
      "pregunta": "¿Qué prueba de tamizaje de VIH recomienda el MINSA?",
      "correcta": "ELISA de 4.ª generación (anticuerpos + p24) o prueba rápida",
      "distractores": [
        "ELISA de 3.ª generación",
        "Western blot",
        "Carga viral por RT-qPCR"
      ],
      "pista": "Detecta anticuerpos y antígeno a la vez.",
      "explicacion": "Tamizaje: ELISA 4.ª gen o prueba rápida. Si es reactiva, segunda prueba de otra metodología; los discordantes se confirman con LIA o RT-qPCR."
    },
    {
      "id": "virus-045",
      "nivel": "m",
      "pregunta": "Esquema de primera línea preferido por el MINSA para VIH en adultos:",
      "correcta": "TDF + 3TC + DTG (TLD)",
      "distractores": [
        "AZT + 3TC + LPV/r",
        "DRV/r + RAL + ETR",
        "TDF + 3TC + EFV (TLE)"
      ],
      "pista": "Lleva dolutegravir: una tableta al día.",
      "explicacion": "TLD = tenofovir + lamivudina + dolutegravir. AZT + 3TC + LPV/r es segunda línea; DRV/r + RAL + ETR es rescate; TLE es la alternativa."
    },
    {
      "id": "virus-046",
      "nivel": "m",
      "pregunta": "¿Qué hace la oncoproteína E6 del VPH de alto riesgo?",
      "correcta": "Degrada la p53 por ubiquitinación",
      "distractores": [
        "Inactiva la proteína del retinoblastoma (Rb)",
        "Forma la cápside principal",
        "Actúa como helicasa para replicar el ADN"
      ],
      "pista": "E6 → p53. E7 → Rb.",
      "explicacion": "E6 degrada p53 (inhibe la apoptosis); E7 inactiva Rb y libera E2F (entrada a fase S). L1 forma la cápside; E1 es la helicasa."
    },
    {
      "id": "virus-047",
      "nivel": "m",
      "pregunta": "¿Con qué proteína se fabrican las partículas (VLP) de la vacuna contra el VPH?",
      "correcta": "L1, la proteína principal de la cápside",
      "distractores": [
        "E6",
        "E7",
        "E2"
      ],
      "pista": "Es un gen tardío (L).",
      "explicacion": "La vacuna es recombinante: partículas parecidas al virus hechas con L1. No tienen ADN, por eso no infectan."
    },
    {
      "id": "virus-048",
      "nivel": "m",
      "pregunta": "¿Cuál es la célula diana principal del HTLV-1?",
      "correcta": "Linfocito T CD4+",
      "distractores": [
        "Linfocito T CD8+",
        "Neurona",
        "Hepatocito"
      ],
      "pista": "La misma que el VIH, pero no la destruye.",
      "explicacion": "HTLV-1 infecta CD4+; HTLV-2 prefiere CD8+. En la HAM/TSP el virus no infecta neuronas: el daño lo hace la respuesta inmune."
    },
    {
      "id": "virus-049",
      "nivel": "m",
      "pregunta": "Signo clave del sarampión en la mucosa oral:",
      "correcta": "Manchas de Koplik",
      "distractores": [
        "Vesículas en distintos estadios",
        "Pápulas umbilicadas",
        "Úlceras en paladar, palmas y plantas"
      ],
      "pista": "Aparecen antes del exantema.",
      "explicacion": "Sarampión (paramyxovirus, ARN −): fiebre alta, tos, coriza, conjuntivitis y manchas de Koplik; el exantema empieza en la cara y desciende."
    },
    {
      "id": "virus-050",
      "nivel": "m",
      "pregunta": "¿Cuál es el gold standard para diagnosticar una encefalitis viral?",
      "correcta": "PCR en líquido cefalorraquídeo",
      "distractores": [
        "Cultivo de LCR en agar sangre",
        "Tinción de Gram del LCR",
        "Hemocultivo"
      ],
      "pista": "Detecta el genoma viral.",
      "explicacion": "En virus neurotrópicos el gold standard es la PCR en LCR. Un LCR con linfocitos hace pensar en causa viral."
    },
    {
      "id": "virus-051",
      "nivel": "m",
      "pregunta": "¿Qué antígeno se detecta en la fase aguda del dengue?",
      "correcta": "NS1",
      "distractores": [
        "p24",
        "HBsAg",
        "Hemaglutinina"
      ],
      "pista": "Es una proteína no estructural.",
      "explicacion": "En los virus hemorrágicos la PCR es de elección en fase aguda; en dengue también se puede detectar el antígeno NS1."
    },
    {
      "id": "virus-052",
      "nivel": "m",
      "pregunta": "El virus de la hepatitis D solo causa enfermedad si:",
      "correcta": "Hay coinfección con el virus de la hepatitis B",
      "distractores": [
        "La persona es gestante",
        "Se transmite por vía fecal-oral",
        "Hay coinfección con el VIH"
      ],
      "pista": "Es un virus «dependiente».",
      "explicacion": "El virus delta necesita al VHB; la coinfección es grave. La hepatitis E es la que se vuelve grave en gestantes."
    },
    {
      "id": "virus-053",
      "nivel": "d",
      "pregunta": "¿Cuándo un Western blot para VIH se considera positivo?",
      "correcta": "Cuando hay anticuerpos contra al menos 2 proteínas de envoltura (gp120/160 y gp41)",
      "distractores": [
        "Cuando aparece cualquier banda, incluida p24",
        "Cuando aparecen p24 y p17",
        "Cuando hay una sola banda intensa"
      ],
      "pista": "Las bandas que importan son las «gp».",
      "explicacion": "Positivo: 2 bandas de envoltura. Bandas débiles o incompletas: indeterminado. Sin bandas: negativo. Solo p24 no confirma VIH."
    },
    {
      "id": "virus-054",
      "nivel": "d",
      "pregunta": "Western blot para VIH con una sola banda: p24. ¿Qué se hace?",
      "correcta": "Es indeterminado: repetir y pedir carga viral o antígeno p24",
      "distractores": [
        "Es positivo: iniciar TARV",
        "Es negativo: dar de alta",
        "Confirma VIH-2"
      ],
      "pista": "p24 sola no confirma.",
      "explicacion": "Un patrón incompleto puede ser seroconversión, reactividad cruzada o error. Se repite y se usa una prueba directa (carga viral o p24)."
    },
    {
      "id": "virus-055",
      "nivel": "d",
      "pregunta": "¿Qué agrega una prueba de VIH de 5.ª generación frente a una de 4.ª?",
      "correcta": "Informa por separado si lo reactivo es el antígeno p24 o los anticuerpos",
      "distractores": [
        "Es la primera que detecta el antígeno p24",
        "Detecta solo IgG",
        "No necesita confirmación"
      ],
      "pista": "Las dos detectan p24.",
      "explicacion": "La 4.ª ya combina anticuerpos y p24. La 5.ª también detecta anti-VIH-2 y separa el resultado: antígeno o anticuerpos."
    },
    {
      "id": "virus-056",
      "nivel": "d",
      "pregunta": "Paciente con VIH y tuberculosis que recibe rifampicina. Esquema según MINSA:",
      "correcta": "TDF + 3TC + EFV",
      "distractores": [
        "TDF + 3TC + DTG",
        "AZT + 3TC + LPV/r",
        "ABC + 3TC + DTG"
      ],
      "pista": "Busca menos interacción con la rifampicina.",
      "explicacion": "En coinfección VIH–TB se usa efavirenz por su menor interacción con la rifampicina."
    },
    {
      "id": "virus-057",
      "nivel": "d",
      "pregunta": "Paciente con VIH y filtrado glomerular menor de 50 ml/min. Esquema de primera línea:",
      "correcta": "ABC + 3TC + DTG",
      "distractores": [
        "TDF + 3TC + DTG",
        "TDF + 3TC + EFV",
        "DRV/r + RAL + ETR"
      ],
      "pista": "Hay que evitar el tenofovir.",
      "explicacion": "El tenofovir está contraindicado con falla renal o alergia: se cambia por abacavir."
    },
    {
      "id": "virus-058",
      "nivel": "d",
      "pregunta": "¿Por qué el HTLV es menos infeccioso que el VIH?",
      "correcta": "Se transmite sobre todo dentro de células infectadas, no como virus libre",
      "distractores": [
        "No tiene envoltura",
        "No integra su genoma",
        "Solo se transmite por mosquitos"
      ],
      "pista": "Necesita contacto «celular»: leche, sangre, semen.",
      "explicacion": "El HTLV pasa en linfocitos infectados. Por eso necesita leche, sangre o semen con células, y es menos infeccioso que el VIH."
    },
    {
      "id": "virus-059",
      "nivel": "d",
      "pregunta": "Hallazgo característico en sangre periférica en la leucemia/linfoma T del adulto (ATLL):",
      "correcta": "Células en flor (núcleo multilobulado)",
      "distractores": [
        "Coilocitos",
        "Células gigantes multinucleadas",
        "Clue cells"
      ],
      "pista": "El núcleo parece una flor.",
      "explicacion": "Las células en flor son linfocitos T CD4+ transformados por HTLV-1. Los coilocitos son del VPH; las células gigantes multinucleadas, del sarampión."
    },
    {
      "id": "virus-060",
      "nivel": "d",
      "pregunta": "¿Qué alteración de laboratorio es típica de la ATLL aguda?",
      "correcta": "Hipercalcemia",
      "distractores": [
        "Hipocalcemia",
        "Hiperkalemia",
        "Hiponatremia"
      ],
      "pista": "Por osteólisis.",
      "explicacion": "La hipercalcemia se debe a osteólisis, con liberación de IL-1 y una sustancia parecida a la PTH."
    },
    {
      "id": "virus-061",
      "nivel": "d",
      "pregunta": "En la paraparesia espástica tropical (HAM/TSP), el daño medular se debe a:",
      "correcta": "La respuesta inmune citotóxica contra linfocitos infectados que infiltran la médula",
      "distractores": [
        "Que el HTLV-1 infecta y destruye las neuronas",
        "Una toxina que libera el virus",
        "La compresión por un linfoma"
      ],
      "pista": "El virus no infecta neuronas.",
      "explicacion": "Los CD4+ infectados entran al SNC y la respuesta citotóxica desmieliniza los cordones laterales y anteriores: daño crónico e irreversible."
    },
    {
      "id": "virus-062",
      "nivel": "d",
      "pregunta": "¿Por qué el VPH de bajo riesgo no produce cáncer?",
      "correcta": "Su E6 y E7 casi no inactivan p53 ni Rb, y su ADN queda como episoma sin integrarse",
      "distractores": [
        "Porque no infecta la capa basal del epitelio",
        "Porque no tiene genes E6 ni E7",
        "Porque produce viremia y el sistema inmune lo elimina"
      ],
      "pista": "Episoma = no se integra.",
      "explicacion": "Sin inactivar los frenos y sin integrarse, no hay transformación ni inestabilidad genómica: solo proliferación leve (verrugas)."
    },
    {
      "id": "virus-063",
      "nivel": "d",
      "pregunta": "¿Qué es un coilocito?",
      "correcta": "Una célula escamosa con halo perinuclear claro y núcleo agrandado, típica del VPH",
      "distractores": [
        "Un linfocito con núcleo multilobulado",
        "Una célula epitelial cubierta de bacilos",
        "Una célula multinucleada con moldes nucleares"
      ],
      "pista": "Lo ves en el Papanicolaou.",
      "explicacion": "La coilocitosis es el efecto citopático del VPH. Las clue cells son de vaginosis; la multinucleación con moldes nucleares, del herpes."
    },
    {
      "id": "virus-064",
      "nivel": "d",
      "pregunta": "Co-test: citología normal y VPH 16/18 positivo. ¿Qué se hace?",
      "correcta": "Colposcopia inmediata",
      "distractores": [
        "Repetir el co-test en 5 años",
        "Repetir en 12 meses",
        "Dar tratamiento antiviral"
      ],
      "pista": "Alto riesgo de NIC 2/3.",
      "explicacion": "VPH 16/18 positivo implica alto riesgo aunque la citología sea normal: colposcopia inmediata. Si el VPH positivo no es 16/18: repetir en 12 meses o genotipificar."
    },
    {
      "id": "virus-065",
      "nivel": "d",
      "pregunta": "¿Por qué el co-test no se recomienda en mujeres menores de 30 años?",
      "correcta": "Porque las infecciones por VPH son muy frecuentes y transitorias a esa edad",
      "distractores": [
        "Porque la vacuna ya las protege a todas",
        "Porque la citología no funciona antes de los 30",
        "Porque el VPH no infecta antes de los 30"
      ],
      "pista": "Muchas se eliminan solas.",
      "explicacion": "Solo cerca del 10 % de las infecciones de alto riesgo persiste más de 12–24 meses. Por eso el co-test se usa de 30 a 65 años."
    },
    {
      "id": "virus-066",
      "nivel": "d",
      "pregunta": "Al integrarse el ADN del VPH de alto riesgo, ¿qué gen se pierde y deja sin control a E6 y E7?",
      "correcta": "E2",
      "distractores": [
        "L1",
        "E4",
        "L2"
      ],
      "pista": "Es el regulador de la transcripción.",
      "explicacion": "E2 normalmente frena a E6 y E7. Si la integración lo rompe, E6 y E7 se expresan sin control y la célula acumula daño genético."
    },
    {
      "id": "virus-067",
      "nivel": "d",
      "pregunta": "Células gigantes multinucleadas en una biopsia orientan a:",
      "correcta": "Sarampión",
      "distractores": [
        "VPH",
        "HTLV-1",
        "Rotavirus"
      ],
      "pista": "Es un paramyxovirus.",
      "explicacion": "Las células gigantes multinucleadas son del sarampión; los cuerpos de Cowdry, del herpes."
    },
    {
      "id": "virus-068",
      "nivel": "d",
      "pregunta": "¿Qué hepatitis viral se vuelve grave en gestantes?",
      "correcta": "Hepatitis E",
      "distractores": [
        "Hepatitis A",
        "Hepatitis C",
        "Hepatitis D"
      ],
      "pista": "Es fecal-oral, como la A.",
      "explicacion": "La hepatitis E (Hepeviridae) se transmite por vía fecal-oral y es grave en gestantes."
    },
    {
      "id": "virus-069",
      "nivel": "x",
      "caso": "Varón de 25 años, 3 semanas después de una relación sin preservativo: fiebre, adenopatías, dolor de garganta, rash maculopapular y úlceras orales. La prueba de 5.ª generación es reactiva por antígeno p24, con anticuerpos negativos.",
      "pregunta": "¿Qué está pasando?",
      "correcta": "Síndrome retroviral agudo en periodo de ventana: carga viral alta y muy contagioso",
      "distractores": [
        "Mononucleosis por Epstein-Barr sin relación con el VIH",
        "Fase de latencia clínica",
        "SIDA por caída de CD4"
      ],
      "explicacion": "A las 2–4 semanas hay síntomas de virosis inespecífica, p24 detectable y anticuerpos aún en formación (ventana serológica). La carga viral es muy alta."
    },
    {
      "id": "virus-070",
      "nivel": "x",
      "pregunta": "Una persona se hace un ELISA de 3.ª generación 15 días después de una exposición de riesgo y sale negativo. ¿Por qué no descarta VIH?",
      "correcta": "Solo detecta anticuerpos, que aparecen entre los días 15 y 45",
      "distractores": [
        "Porque no detecta VIH-1",
        "Porque necesita confirmación con Western blot aunque sea negativo",
        "Porque el ELISA solo sirve en neonatos"
      ],
      "explicacion": "La 3.ª generación tiene una ventana de 3 a 6 semanas. La 4.ª, que detecta p24, la acorta a 14–18 días."
    },
    {
      "id": "virus-071",
      "nivel": "x",
      "caso": "Paciente con VIH sin tratamiento, CD4 de 150 células/mm³. Presenta nódulos rojo-violáceos en las piernas; la biopsia muestra células fusiformes con hematíes en espacios vasculares.",
      "pregunta": "¿Qué virus causa la lesión?",
      "correcta": "Herpesvirus humano 8 (HHV-8)",
      "distractores": [
        "Virus de Epstein-Barr",
        "Virus del papiloma humano 16",
        "El VIH directamente"
      ],
      "explicacion": "Es sarcoma de Kaposi. Con menos inmunidad, el HHV-8 infecta células endoteliales y estimula la angiogénesis (IL-6, VEGF); la proteína Tat del VIH lo potencia."
    },
    {
      "id": "virus-072",
      "nivel": "x",
      "pregunta": "El linfoma no Hodgkin en personas con VIH se asocia sobre todo a:",
      "correcta": "Virus de Epstein-Barr no controlado, que hace proliferar linfocitos B",
      "distractores": [
        "Herpesvirus humano 8 en células endoteliales",
        "HTLV-1 en linfocitos T CD4+",
        "El VIH, que es directamente oncogénico"
      ],
      "explicacion": "El VIH no es oncogénico directo: baja la inmunovigilancia y el EBV prolifera en linfocitos B (linfoma difuso de células B grandes, Burkitt, primario del SNC)."
    },
    {
      "id": "virus-073",
      "nivel": "x",
      "pregunta": "¿Por qué el tratamiento antirretroviral no erradica el VIH?",
      "correcta": "Queda como provirus latente en reservorios (CD4 de memoria, macrófagos, SNC) donde llegan pocos fármacos",
      "distractores": [
        "Porque los antirretrovirales no actúan sobre la transcriptasa inversa",
        "Porque el VIH no integra su genoma",
        "Porque el VIH destruye todos los linfocitos antes del tratamiento"
      ],
      "explicacion": "En los reservorios el virus está integrado e inactivo. Además, transportadores ABC expulsan los fármacos y bajan su concentración dentro de la célula."
    },
    {
      "id": "virus-074",
      "nivel": "x",
      "pregunta": "Una célula infectada por dos variantes de VIH produce un virus con mutaciones de ambas. ¿Qué mecanismo lo explica?",
      "correcta": "Recombinación: la transcriptasa inversa salta entre las dos copias de ARN",
      "distractores": [
        "Reorganización de segmentos como en la influenza",
        "Corrección de errores de la integrasa",
        "Integración de dos provirus en el mismo cromosoma"
      ],
      "explicacion": "El VIH lleva dos copias de ARN. Si son de variantes distintas, la transcriptasa inversa puede saltar de una a otra y crear un genoma recombinante."
    },
    {
      "id": "virus-075",
      "nivel": "x",
      "pregunta": "¿Por qué el HTLV-1 causa leucemia y el VIH causa inmunodeficiencia, si ambos infectan CD4?",
      "correcta": "El HTLV-1 transforma al linfocito y lo hace proliferar (Tax y HBZ); el VIH es citopático y lo destruye",
      "distractores": [
        "El HTLV-1 infecta CD8 y el VIH CD4",
        "El VIH no integra su genoma y el HTLV-1 sí",
        "El HTLV-1 tiene genoma de ADN"
      ],
      "explicacion": "Tax y HBZ estimulan la proliferación y evitan la apoptosis; con mutaciones acumuladas aparece la ATLL tras 20–40 años en menos del 5 % de los infectados."
    },
    {
      "id": "virus-076",
      "nivel": "x",
      "pregunta": "¿Qué diferencia genética explica que el HTLV-1 sea oncogénico y el HTLV-2 casi no?",
      "correcta": "El HTLV-1 tiene Tax más activo y el gen HBZ",
      "distractores": [
        "El HTLV-2 no tiene transcriptasa inversa",
        "El HTLV-1 no tiene envoltura",
        "El HTLV-2 tiene E6 y E7"
      ],
      "explicacion": "HTLV-1: Tax muy activo y HBZ, que inducen proliferación (ATLL, HAM/TSP). HTLV-2: menor capacidad transcripcional, sin HBZ, manifestaciones raras."
    },
    {
      "id": "virus-077",
      "nivel": "x",
      "pregunta": "Citología ASC-US. ¿Cómo cambia el manejo según la prueba de VPH?",
      "correcta": "VPH negativo: repetir en 3 años; VPH positivo: colposcopia",
      "distractores": [
        "Siempre colposcopia, sin importar el VPH",
        "VPH negativo: colposcopia; VPH positivo: repetir en 3 años",
        "Siempre repetir la citología en 5 años"
      ],
      "explicacion": "ASC-US sin VPH activo es una lesión leve. Con VPH positivo el riesgo es intermedio y se hace colposcopia."
    },
    {
      "id": "virus-078",
      "nivel": "x",
      "pregunta": "Una mujer de 22 años con vida sexual activa pregunta si le sirve vacunarse contra el VPH. ¿Qué es correcto?",
      "correcta": "Sí: la protege contra los genotipos que aún no adquirió, aunque no trata infecciones ya presentes",
      "distractores": [
        "No: después del inicio sexual la vacuna no sirve",
        "Sí: elimina las infecciones que ya tiene",
        "No: solo se aplica a varones"
      ],
      "explicacion": "La vacuna es preventiva, no terapéutica. Pierde protección «total», pero mantiene la protección contra genotipos no adquiridos."
    },
    {
      "id": "virus-079",
      "nivel": "x",
      "pregunta": "¿Cómo se diagnostica el VIH en un recién nacido de madre con VIH, según el MINSA?",
      "correcta": "PCR a las 2 semanas, al mes y a los 4–6 meses",
      "distractores": [
        "ELISA de 4.ª generación al nacer",
        "Western blot a las 2 semanas",
        "Prueba rápida al mes"
      ],
      "explicacion": "En neonatos se busca el virus con PCR, no anticuerpos: los anticuerpos que tenga el bebé pueden ser de la madre."
    },
    {
      "id": "virus-080",
      "nivel": "x",
      "pregunta": "El VIH y el VHB usan transcriptasa inversa, pero están en grupos de Baltimore distintos. ¿Por qué?",
      "correcta": "El VIH tiene genoma de ARN (grupo VI) y el VHB de ADN doble cadena (grupo VII)",
      "distractores": [
        "El VHB no tiene transcriptasa inversa",
        "El VIH es de ADN y el VHB de ARN",
        "Porque el VIH tiene envoltura y el VHB no"
      ],
      "explicacion": "Baltimore clasifica por el genoma que entra a la célula y cómo llega al ARNm. VI: ARN → ADN. VII: ADN ds que se replica a través de un ARN intermedio."
    },
    {
      "id": "virus-081",
      "nivel": "x",
      "pregunta": "Gestante con VIH recién diagnosticado. ¿Qué esquema indica el MINSA?",
      "correcta": "TDF + 3TC + DTG (TLD), igual que la primera línea",
      "distractores": [
        "AZT + 3TC + LPV/r",
        "TDF + 3TC + EFV",
        "Esperar al parto para iniciar"
      ],
      "explicacion": "El TLD es seguro y preferido en embarazo y lactancia. Con TARV materno el riesgo de transmisión vertical baja a menos de 1–2 %."
    },
    {
      "id": "virus-082",
      "nivel": "x",
      "pregunta": "¿Qué antirretroviral bloquea el correceptor CCR5?",
      "correcta": "Maraviroc",
      "distractores": [
        "Dolutegravir",
        "Efavirenz",
        "Lopinavir/ritonavir"
      ],
      "explicacion": "Maraviroc es un inhibidor de la entrada. Dolutegravir inhibe la integrasa; efavirenz es un inhibidor no análogo de la transcriptasa inversa; lopinavir/ritonavir inhibe la proteasa."
    },
    {
      "id": "virus-083",
      "nivel": "f",
      "caso": "Niño de 4 años con fiebre leve y malestar. Luego aparecen vesículas muy pruriginosas que empezaron en el tronco; hay lesiones nuevas junto a costras.",
      "pregunta": "¿Qué virus es?",
      "correcta": "Virus varicela-zóster",
      "distractores": [
        "Sarampión",
        "Rubéola",
        "Molusco contagioso"
      ],
      "pista": "Lesiones en distintos estadios a la vez.",
      "explicacion": "Varicela: vesículas «gota de rocío», muy pruriginosas, desde el tronco y en distintos estadios. Es un herpesvirus (ADN ds) y puede reactivarse como herpes zóster."
    },
    {
      "id": "virus-084",
      "nivel": "f",
      "caso": "Lactante de 10 meses que va a guardería: diarrea acuosa abundante, vómitos y fiebre desde hace 2 días. Está decaído y con mucosas secas.",
      "pregunta": "¿Cuál es el agente más probable?",
      "correcta": "Rotavirus",
      "distractores": [
        "Virus sincitial respiratorio",
        "Virus de la hepatitis A",
        "Adenovirus respiratorio"
      ],
      "pista": "Principal causa de diarrea viral infantil.",
      "explicacion": "Rotavirus (Reoviridae, ARN doble cadena): diarrea infantil por vía fecal-oral. El peligro es la deshidratación; se trata con rehidratación."
    },
    {
      "id": "virus-085",
      "nivel": "f",
      "pregunta": "Anticuerpos IgM específicos contra un virus indican:",
      "correcta": "Infección aguda o reciente",
      "distractores": [
        "Infección pasada o inmunidad",
        "Vacunación antigua",
        "Que el virus está latente"
      ],
      "pista": "Es el primer anticuerpo en aparecer.",
      "explicacion": "IgM: infección aguda o reciente. IgG: infección pasada o inmunidad."
    },
    {
      "id": "virus-086",
      "nivel": "f",
      "pregunta": "¿Qué virus respiratorio causa el resfriado común?",
      "correcta": "Rinovirus",
      "distractores": [
        "Parainfluenza",
        "Virus sincitial respiratorio",
        "Influenza"
      ],
      "pista": "Es un picornavirus.",
      "explicacion": "Rinovirus (Picornaviridae, ARN +): resfrío común. Parainfluenza: crup. VSR: bronquiolitis. Influenza: fiebre alta y mialgias."
    },
    {
      "id": "virus-087",
      "nivel": "f",
      "pregunta": "La poliomielitis se transmite por vía:",
      "correcta": "Fecal-oral",
      "distractores": [
        "Picadura de mosquito",
        "Mordedura de animal",
        "Sexual"
      ],
      "pista": "Como los virus entéricos.",
      "explicacion": "Poliovirus (Picornaviridae, ARN +): fecal-oral; puede causar parálisis flácida. Se previene con vacuna."
    },
    {
      "id": "virus-088",
      "nivel": "f",
      "pregunta": "¿Qué porcentaje del genoma humano viene de retrovirus antiguos (HERVs)?",
      "correcta": "Cerca del 8 %",
      "distractores": [
        "Cerca del 50 %",
        "Menos del 0,1 %",
        "Cerca del 25 %"
      ],
      "pista": "Es menos de la décima parte.",
      "explicacion": "Los retrovirus endógenos humanos se integraron en células germinales de nuestros ancestros hace millones de años: hoy son cerca del 8 % del genoma."
    },
    {
      "id": "virus-089",
      "nivel": "f",
      "caso": "Brote de vómitos y diarrea en un crucero: muchos pasajeros enferman en pocos días después de comer en el mismo buffet.",
      "pregunta": "¿Qué virus entérico se asocia típicamente a brotes?",
      "correcta": "Norovirus",
      "distractores": [
        "Rotavirus",
        "Virus de la rabia",
        "Virus del papiloma humano"
      ],
      "pista": "Caliciviridae.",
      "explicacion": "Norovirus (Caliciviridae, ARN +): fecal-oral, causa típica de brotes. El rotavirus es la diarrea infantil."
    },
    {
      "id": "virus-090",
      "nivel": "f",
      "caso": "Turista que volvió de una zona con mosquitos: fiebre y dolor articular tan intenso que camina encorvado.",
      "pregunta": "¿Qué virus sospechas?",
      "correcta": "Chikungunya",
      "distractores": [
        "Zika",
        "Dengue",
        "Rabia"
      ],
      "pista": "Su sello son las artralgias.",
      "explicacion": "Chikungunya (Togaviridae): artralgias. Zika: microcefalia en el embarazo. Dengue: fiebre con sangrado y riesgo de shock."
    },
    {
      "id": "virus-091",
      "nivel": "m",
      "caso": "Niño de 3 años sin vacunas: fiebre alta, tos, coriza y conjuntivitis. En la mucosa oral hay puntos blancos. Dos días después aparece un exantema que empieza en la cara y baja.",
      "pregunta": "¿Qué virus es?",
      "correcta": "Sarampión",
      "distractores": [
        "Varicela",
        "Rubéola",
        "Coxsackie"
      ],
      "pista": "Los puntos blancos tienen nombre propio.",
      "explicacion": "Pródromo con fiebre alta, tos, coriza y conjuntivitis + manchas de Koplik + exantema céfalo-caudal = sarampión (paramyxovirus, ARN −)."
    },
    {
      "id": "virus-092",
      "nivel": "m",
      "caso": "Varón de 30 años mordido por un perro callejero hace 2 meses. Ahora tiene fiebre, agitación y espasmos al intentar tomar agua.",
      "pregunta": "¿Qué virus es?",
      "correcta": "Virus de la rabia",
      "distractores": [
        "Herpes simple",
        "Poliovirus",
        "Virus del Nilo Occidental"
      ],
      "pista": "Hidrofobia.",
      "explicacion": "Rabia (Rhabdoviridae, ARN −): se transmite por mordedura y llega al SNC por los nervios periféricos. Con síntomas es fatal; se previene con vacuna."
    },
    {
      "id": "virus-093",
      "nivel": "m",
      "caso": "Adulto con 2 días de fiebre, mialgias, tos seca y dolor de garganta sin pus. El hemograma muestra leucopenia con linfocitosis relativa. No mejoró con amoxicilina.",
      "pregunta": "¿Qué sugiere este cuadro?",
      "correcta": "Infección viral",
      "distractores": [
        "Faringitis bacteriana por estreptococo",
        "Infección por hongos",
        "Parasitosis intestinal"
      ],
      "pista": "Sin pus y con linfocitosis.",
      "explicacion": "Fiebre + mialgias + síntomas respiratorios + leucopenia con linfocitosis, sin exudado y sin respuesta a antibióticos: pensar primero en virus."
    },
    {
      "id": "virus-094",
      "nivel": "m",
      "caso": "Paciente con VIH que también tiene hepatitis B crónica. Va a iniciar tratamiento.",
      "pregunta": "¿Qué esquema indica el MINSA?",
      "correcta": "TDF + 3TC + DTG",
      "distractores": [
        "AZT + 3TC + LPV/r",
        "ABC + 3TC + DTG",
        "DRV/r + RAL + ETR"
      ],
      "pista": "El tenofovir también actúa contra el VHB.",
      "explicacion": "TLD es activo frente a VIH y VHB: es el ideal en coinfectados."
    },
    {
      "id": "virus-095",
      "nivel": "m",
      "pregunta": "¿Cuál es el riesgo aproximado de infectarse con VIH tras un pinchazo con una aguja contaminada?",
      "correcta": "0,3 %",
      "distractores": [
        "15–45 %",
        "10 %",
        "Prácticamente 100 %"
      ],
      "pista": "Es menos de 1 %.",
      "explicacion": "El riesgo ocupacional por pinchazo es ≈ 0,3 %. 15–45 % es el riesgo de transmisión vertical sin tratamiento."
    },
    {
      "id": "virus-096",
      "nivel": "m",
      "pregunta": "¿Qué subtipo de VIH-1 es el más frecuente en América y en el Perú?",
      "correcta": "Subtipo B",
      "distractores": [
        "Subtipo C",
        "Subtipo E",
        "Grupo O"
      ],
      "pista": "El C predomina en África.",
      "explicacion": "El grupo M causa más del 90 % de infecciones. Subtipo B: América y Europa (incluye Perú). Subtipo C: la mitad de los casos del mundo, sobre todo en África."
    },
    {
      "id": "virus-097",
      "nivel": "m",
      "pregunta": "Comparados con los virus ARN, los virus ADN:",
      "correcta": "Replican en el núcleo, mutan menos y pueden hacer latencia",
      "distractores": [
        "Replican en el citoplasma y mutan más",
        "Siempre traen su propia ARN polimerasa",
        "Nunca integran su genoma"
      ],
      "pista": "Dependen más de la célula.",
      "explicacion": "Los virus ADN replican en el núcleo usando la maquinaria de la célula: menor tasa de mutación y capacidad de latencia."
    },
    {
      "id": "virus-098",
      "nivel": "m",
      "pregunta": "En la curva de crecimiento viral, el «burst size» es:",
      "correcta": "El número promedio de viriones liberados por cada célula infectada",
      "distractores": [
        "El tiempo que dura la fase de eclipse",
        "La dosis mínima para iniciar la infección",
        "El tamaño del virión en nanómetros"
      ],
      "pista": "«Burst» = estallido.",
      "explicacion": "Burst size: cuántos viriones libera en promedio cada célula infectada."
    },
    {
      "id": "virus-099",
      "nivel": "m",
      "pregunta": "¿Qué cuadro causa el virus parainfluenza?",
      "correcta": "Crup",
      "distractores": [
        "Bronquiolitis",
        "Resfrío común",
        "Conjuntivitis"
      ],
      "pista": "Tos «de perro» en niños.",
      "explicacion": "Parainfluenza (Paramyxoviridae, ARN −): crup. VSR: bronquiolitis. Rinovirus: resfrío. Adenovirus: faringitis y conjuntivitis."
    },
    {
      "id": "virus-100",
      "nivel": "m",
      "caso": "Mujer de 34 años en control: Papanicolaou normal y PCR de VPH negativa.",
      "pregunta": "¿Cuándo repite el tamizaje?",
      "correcta": "Co-test en 5 años",
      "distractores": [
        "En 12 meses",
        "Colposcopia inmediata",
        "En 3 años con biopsia"
      ],
      "pista": "Es el resultado de menor riesgo.",
      "explicacion": "Citología normal + VPH negativo = muy bajo riesgo: repetir el co-test en 5 años."
    },
    {
      "id": "virus-101",
      "nivel": "m",
      "pregunta": "¿Por qué el VPH no pasa por la placenta ni por la leche materna?",
      "correcta": "Porque no produce viremia: se queda en el epitelio",
      "distractores": [
        "Porque tiene envoltura lipídica frágil",
        "Porque solo infecta varones",
        "Porque la vacuna lo impide en todas las madres"
      ],
      "pista": "No circula por la sangre.",
      "explicacion": "El VPH se transmite por contacto piel-piel o mucosa-mucosa. La vía vertical solo ocurre en el parto vaginal."
    },
    {
      "id": "virus-102",
      "nivel": "m",
      "pregunta": "En el Papanicolaou, las clue cells (células epiteliales cubiertas de bacilos) indican:",
      "correcta": "Vaginosis bacteriana por Gardnerella",
      "distractores": [
        "Infección por VPH",
        "Herpes simple",
        "Candidiasis"
      ],
      "pista": "No es un virus.",
      "explicacion": "Hallazgos no neoplásicos del PAP: clue cells → Gardnerella; hifas y esporas → Candida; multinucleación con moldes nucleares → herpes; coilocitos → VPH."
    },
    {
      "id": "virus-103",
      "nivel": "m",
      "pregunta": "¿Qué antiviral se usa contra la hepatitis C?",
      "correcta": "Sofosbuvir",
      "distractores": [
        "Oseltamivir",
        "Aciclovir",
        "Maraviroc"
      ],
      "pista": "Es un antiviral de acción directa (AAD).",
      "explicacion": "Hepatitis C: sofosbuvir, ledipasvir, daclatasvir, glecaprevir/pibrentasvir. Hepatitis B: tenofovir, entecavir, lamivudina, IFN-α."
    },
    {
      "id": "virus-104",
      "nivel": "m",
      "pregunta": "¿Qué ventaja tiene el LIA frente al Western blot para confirmar VIH?",
      "correcta": "Es más estandarizado y automatizable",
      "distractores": [
        "Detecta el virus antes que la PCR",
        "No necesita suero del paciente",
        "Se lee con microscopio de fluorescencia"
      ],
      "pista": "Usa proteínas recombinantes en líneas.",
      "explicacion": "El LIA usa proteínas recombinantes fijas en líneas, es rápido y reproducible: es la confirmatoria recomendada. El WB está obsoleto en varios países."
    },
    {
      "id": "virus-105",
      "nivel": "d",
      "caso": "Paciente de 40 años con fiebre, cefalea, confusión y convulsiones. El LCR tiene linfocitos y la resonancia muestra compromiso del lóbulo temporal.",
      "pregunta": "¿Qué virus sospechas y qué examen lo confirma?",
      "correcta": "Herpes simple; PCR en LCR",
      "distractores": [
        "Rabia; cultivo de LCR",
        "Poliovirus; hemocultivo",
        "VIH; Western blot"
      ],
      "explicacion": "Encefalitis temporal = herpes simple. LCR con linfocitos orienta a virus y la PCR en LCR es el gold standard. Se trata con aciclovir."
    },
    {
      "id": "virus-106",
      "nivel": "d",
      "caso": "Varón de 50 años de la costa norte del Perú con HTLV-1: linfocitosis con células de núcleo multilobulado, adenopatías generalizadas, hepatoesplenomegalia, lesiones en la piel e hipercalcemia.",
      "pregunta": "¿Qué forma de ATLL es?",
      "correcta": "Aguda",
      "distractores": [
        "Indolente",
        "Crónica",
        "Linfomatosa"
      ],
      "explicacion": "Forma aguda: leucocitosis con células en flor, compromiso sistémico e hipercalcemia; pronóstico muy malo. La crónica no tiene hipercalcemia; la indolente solo afecta piel o pulmón; la linfomatosa tiene adenopatías sin células tumorales en sangre."
    },
    {
      "id": "virus-107",
      "nivel": "d",
      "caso": "Paciente con VIH en TARV con buena adherencia. La carga viral, que estaba indetectable, sube y se mantiene alta en dos controles.",
      "pregunta": "Según el MINSA, ¿qué esquema sigue?",
      "correcta": "AZT + 3TC + LPV/r",
      "distractores": [
        "Seguir con TDF + 3TC + DTG",
        "DRV/r + RAL + ETR directo",
        "Suspender el tratamiento"
      ],
      "explicacion": "Fallo virológico documentado con buena adherencia: segunda línea con zidovudina + lamivudina + lopinavir/ritonavir. DRV/r + RAL + ETR es tercera línea, tras genotipificación."
    },
    {
      "id": "virus-108",
      "nivel": "d",
      "caso": "Paciente con VIH, CD4 de 80 células/mm³, con fiebre, cefalea y déficit focal. La tomografía muestra lesiones cerebrales y se diagnostica toxoplasmosis cerebral.",
      "pregunta": "¿En qué fase de la infección está?",
      "correcta": "SIDA",
      "distractores": [
        "Síndrome retroviral agudo",
        "Latencia clínica",
        "Fase sintomática inicial con inmunidad conservada"
      ],
      "explicacion": "CD4 < 200 o una infección definitoria (toxoplasmosis cerebral, Pneumocystis, TB extrapulmonar, candidiasis esofágica, CMV, Cryptococcus) = SIDA. Con CD4 < 50 el riesgo es muy alto."
    },
    {
      "id": "virus-109",
      "nivel": "d",
      "pregunta": "¿Qué diferencia hay entre neuroinvasión y neurovirulencia?",
      "correcta": "Neuroinvasión es llegar al SNC; neurovirulencia es causar enfermedad en él",
      "distractores": [
        "Son sinónimos",
        "Neuroinvasión es infectar neuronas periféricas; neurovirulencia, las centrales",
        "Neurovirulencia es la velocidad de replicación en el LCR"
      ],
      "explicacion": "Un virus puede llegar al SNC (neuroinvasión) por vía hematógena o por nervios, y causar o no daño ahí (neurovirulencia)."
    },
    {
      "id": "virus-110",
      "nivel": "d",
      "pregunta": "¿Por qué vía llega la rabia al sistema nervioso central?",
      "correcta": "Diseminación neuronal retrógrada por nervios periféricos",
      "distractores": [
        "Diseminación hematógena atravesando la barrera hematoencefálica",
        "Por el líquido cefalorraquídeo desde la nariz",
        "Por linfocitos infectados"
      ],
      "explicacion": "La rabia sube por los nervios periféricos desde la mordedura. Otros virus llegan por la sangre y atraviesan la barrera hematoencefálica."
    },
    {
      "id": "virus-111",
      "nivel": "d",
      "pregunta": "¿En qué enfermedades el daño lo produce sobre todo la respuesta inmune y no el virus directamente?",
      "correcta": "Hepatitis viral y dengue grave",
      "distractores": [
        "Poliomielitis y resfrío común",
        "Verrugas comunes y molusco contagioso",
        "Rotavirus y norovirus"
      ],
      "explicacion": "Daño indirecto o inmunopatología: hepatitis viral y dengue grave. El poliovirus, en cambio, destruye las células directamente."
    },
    {
      "id": "virus-112",
      "nivel": "d",
      "pregunta": "¿Por qué la coinfección VIH–VHB empeora el pronóstico?",
      "correcta": "Acelera la enfermedad hepática",
      "distractores": [
        "Hace que el VHB se vuelva oncogénico por primera vez",
        "Impide usar tenofovir",
        "Hace que el VIH se transmita por saliva"
      ],
      "explicacion": "Las coinfecciones son un determinante del huésped: la coinfección VIH–VHB acelera el daño hepático."
    },
    {
      "id": "virus-113",
      "nivel": "d",
      "pregunta": "¿Qué hallazgo histológico es típico del herpes?",
      "correcta": "Cuerpos de inclusión de Cowdry",
      "distractores": [
        "Células gigantes multinucleadas del sarampión",
        "Coilocitos",
        "Células en flor"
      ],
      "explicacion": "Cowdry: inclusiones intranucleares del herpes. Células gigantes multinucleadas: sarampión. Coilocitos: VPH. Células en flor: ATLL."
    },
    {
      "id": "virus-114",
      "nivel": "d",
      "pregunta": "¿Cómo actúa la amantadina?",
      "correcta": "Inhibe el desnudamiento: impide que se libere el genoma viral dentro de la célula",
      "distractores": [
        "Inhibe la neuraminidasa",
        "Bloquea la integrasa",
        "Es un análogo de nucleósido"
      ],
      "explicacion": "Amantadina y rimantadina inhiben el desnudamiento. Oseltamivir y zanamivir inhiben la neuraminidasa."
    },
    {
      "id": "virus-115",
      "nivel": "d",
      "pregunta": "¿Qué es el palivizumab?",
      "correcta": "Un anticuerpo monoclonal contra el virus sincitial respiratorio",
      "distractores": [
        "Un inhibidor de la proteasa del VIH",
        "Una vacuna contra el VPH",
        "Un análogo de nucleósido contra el CMV"
      ],
      "explicacion": "Palivizumab es un anticuerpo monoclonal que bloquea la entrada del VSR. Para VSR también se usa ribavirina."
    },
    {
      "id": "virus-116",
      "nivel": "d",
      "pregunta": "¿Con qué virus simio está más emparentado el VIH-2?",
      "correcta": "SIV de los monos mangabey (SIVsmm)",
      "distractores": [
        "SIV de los chimpancés (SIVcpz)",
        "HTLV-2",
        "Virus linfotrópico bovino"
      ],
      "explicacion": "VIH-1 viene del SIV de chimpancés; VIH-2, del SIV de los monos mangabey, que viven donde el VIH-2 es más prevalente (África occidental)."
    },
    {
      "id": "virus-117",
      "nivel": "d",
      "pregunta": "Según la norma del MINSA, ¿qué meta de carga viral se busca con el TARV?",
      "correcta": "Indetectable (menos de 200 copias/mL) con CD4 en aumento",
      "distractores": [
        "Menos de 10 000 copias/mL",
        "Que la carga viral baje a la mitad",
        "CD4 menor de 200"
      ],
      "explicacion": "Meta: carga viral indetectable (< 200 copias/mL) y CD4 en aumento progresivo (> 500 células/µL). La carga viral se controla a los 6 meses y luego cada 6 meses."
    },
    {
      "id": "virus-118",
      "nivel": "d",
      "caso": "Mujer de 45 años: citología HSIL y VPH de alto riesgo positivo.",
      "pregunta": "¿Qué se hace?",
      "correcta": "Colposcopia y/o biopsia",
      "distractores": [
        "Repetir co-test en 3 años",
        "Repetir en 12 meses",
        "Vacunar y controlar en 5 años"
      ],
      "explicacion": "HSIL con VPH positivo es una lesión de alto grado con virus oncogénico: colposcopia y biopsia. Si se confirma NIC 2–3, escisión (LEEP o conización)."
    },
    {
      "id": "virus-119",
      "nivel": "d",
      "pregunta": "¿Qué genotipos agrega la vacuna nonavalente frente a la tetravalente?",
      "correcta": "31, 33, 45, 52 y 58",
      "distractores": [
        "6 y 11",
        "1, 2 y 4",
        "16 y 18"
      ],
      "explicacion": "Gardasil 9 cubre 6, 11, 16, 18, 31, 33, 45, 52 y 58. La tetravalente del MINSA cubre 6, 11, 16 y 18; la bivalente, 16 y 18."
    },
    {
      "id": "virus-120",
      "nivel": "x",
      "caso": "Mujer de 38 años de la Amazonía peruana, con debilidad progresiva de ambas piernas desde hace 2 años, hiperreflexia, Babinski positivo, dolor lumbar y urgencia urinaria. Serología anti-HTLV-1 positiva.",
      "pregunta": "¿Cuál es el diagnóstico y cómo se produce el daño?",
      "correcta": "Paraparesia espástica tropical (HAM/TSP): la respuesta inmune contra linfocitos infectados desmieliniza la médula",
      "distractores": [
        "ATLL con infiltración medular por células en flor",
        "Esclerosis por infección directa de neuronas por HTLV-1",
        "Neurosífilis por coinfección"
      ],
      "explicacion": "HAM/TSP afecta a menos del 1 % de los infectados: el virus infecta CD4 que entran al SNC, y la respuesta citotóxica daña los cordones laterales y anteriores. No hay cura: corticoides, interferón y rehabilitación."
    },
    {
      "id": "virus-121",
      "nivel": "x",
      "caso": "Gestante de 28 semanas en una zona con agua no potable: ictericia, malestar y deterioro rápido de la función hepática.",
      "pregunta": "¿Qué virus hepatotropo sospechas primero?",
      "correcta": "Hepatitis E",
      "distractores": [
        "Hepatitis A",
        "Hepatitis C",
        "Hepatitis B"
      ],
      "explicacion": "La E (Hepeviridae, ARN +) y la A se transmiten por vía fecal-oral, pero la E es la que se vuelve grave en gestantes. B y C son por sangre y tienden a la cronicidad."
    },
    {
      "id": "virus-122",
      "nivel": "x",
      "caso": "Gestante con HTLV-1 detectado en el control prenatal pregunta cómo evitar contagiar a su bebé.",
      "pregunta": "¿Qué medida reduce más el riesgo?",
      "correcta": "Evitar o acortar la lactancia materna",
      "distractores": [
        "Cesárea programada",
        "Vacunar al recién nacido",
        "Dar zidovudina al bebé por 6 semanas"
      ],
      "explicacion": "El HTLV-1 pasa en los linfocitos de la leche y el riesgo aumenta con la lactancia prolongada (10–25 % en hijos de madres positivas). Por eso Japón hace control prenatal obligatorio."
    },
    {
      "id": "virus-123",
      "nivel": "x",
      "pregunta": "¿Qué antiviral contra la influenza inhibe la polimerasa, en lugar de la neuraminidasa?",
      "correcta": "Baloxavir marboxil",
      "distractores": [
        "Oseltamivir",
        "Zanamivir",
        "Peramivir"
      ],
      "explicacion": "Antiinfluenza: inhibidores de neuraminidasa (oseltamivir, zanamivir, peramivir) e inhibidor de polimerasa (baloxavir marboxil)."
    },
    {
      "id": "virus-124",
      "nivel": "x",
      "pregunta": "¿En qué células se cultiva el virus influenza?",
      "correcta": "Células MDCK",
      "distractores": [
        "Células HeLa",
        "Células H9",
        "Agar sangre"
      ],
      "explicacion": "El cultivo viral usa líneas celulares específicas: influenza en MDCK, enterovirus en HeLa. Es lento, costoso y requiere BSL-2 o más. Las células H9 se usan en la IFI del VIH."
    },
    {
      "id": "virus-125",
      "nivel": "x",
      "pregunta": "¿Qué antiviral sirve contra los poxvirus (viruela del mono)?",
      "correcta": "Tecovirimat",
      "distractores": [
        "Oseltamivir",
        "Sofosbuvir",
        "Raltegravir"
      ],
      "explicacion": "Poxvirus: tecovirimat, cidofovir y brincidofovir. El cidofovir también se usa en adenovirus graves de inmunodeprimidos."
    },
    {
      "id": "virus-126",
      "nivel": "x",
      "pregunta": "¿Dónde se encuentra sobre todo el HTLV-2 en el Perú?",
      "correcta": "En pueblos indígenas amazónicos (Shipibo-Conibo, Matsés) y usuarios de drogas inyectables",
      "distractores": [
        "En donantes de sangre de Lima",
        "En gestantes de la costa sur",
        "Solo en casos importados de Japón"
      ],
      "explicacion": "El HTLV-1 es endémico en todo el Perú (donantes 0,4–1 %, gestantes 0,6–1,2 %). El HTLV-2 se concentra en pueblos amazónicos y usuarios de drogas IV."
    },
    {
      "id": "virus-127",
      "nivel": "x",
      "pregunta": "En el cáncer anal, ¿qué genotipo de VPH predomina?",
      "correcta": "VPH 16, en más del 85 % de los casos",
      "distractores": [
        "VPH 6",
        "VPH 18, en más del 85 %",
        "VPH 1 y 2"
      ],
      "explicacion": "VPH 16 domina en ano (> 85 %), pene (> 70 %) y orofaringe (70–90 %). En vulva: 16 y 33. En vagina: 16 y 18."
    },
    {
      "id": "virus-128",
      "nivel": "x",
      "caso": "Mujer de 26 años sin síntomas pide un co-test (citología + PCR de VPH) porque una amiga se lo hizo.",
      "pregunta": "¿Qué le explicas?",
      "correcta": "A su edad no se recomienda: muchas infecciones por VPH son transitorias y llevarían a procedimientos innecesarios",
      "distractores": [
        "Debe hacérselo cada año desde ahora",
        "Solo sirve si ya tiene verrugas",
        "Es obligatorio antes de vacunarse"
      ],
      "explicacion": "El co-test se recomienda de 30 a 65 años. Antes de los 30, las infecciones transitorias son muy frecuentes; solo cerca del 10 % persiste más de 12–24 meses."
    }
  ]
};
