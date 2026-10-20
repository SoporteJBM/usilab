// "¿Sabías que...?" que aparece al cargar, por tema
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
export const DATOS_CURIOSOS: Record<string, string[]> = {
  "hongos": [
    "Entre las Candida comunes, solo C. albicans forma clamidoconidias.",
    "Rhodotorula es resistente a fluconazol y equinocandinas: se trata con anfotericina B y retirando el catéter.",
    "Halo invertido (signo del atolón) sugiere mucormicosis; el halo normal, Aspergillus.",
    "Los dimórficos crecen como moho a 25–30 °C y como levadura a 37 °C.",
    "Epidermophyton floccosum afecta piel y uñas, pero nunca el pelo.",
    "Trichophyton rubrum da una colonia con reverso rojo vinoso.",
    "Aspergillus terreus es resistente a la anfotericina B.",
    "Aspergillus flavus produce aflatoxinas, asociadas a cáncer hepático.",
    "Rhizopus crece incluso a 50 °C; sus puntos negros en la colonia son los esporangios.",
    "Penicillium crece desde 4 °C hasta 45 °C y suele ser un contaminante ambiental."
  ],
  "bacterias": [
    "Proteus mirabilis alcaliniza la orina con su ureasa y forma cálculos de estruvita.",
    "Proteus es H₂S positivo e indol negativo; Morganella, al revés.",
    "Klebsiella se ve muy mucoide en MacConkey por su cápsula.",
    "Los BAAR se ven rojos porque sus ácidos micólicos retienen la fucsina.",
    "En el Perú, la Shigella más frecuente es S. flexneri.",
    "Campylobacter necesita microaerofilia y puede tardar hasta 72 horas en crecer.",
    "Una orina verde puede deberse a Pseudomonas aeruginosa."
  ],
  "virus": [
    "El VIH usa el receptor CD4 y un correceptor (CCR5 o CXCR4) para entrar a la célula.",
    "Fiebre con vesículas en boca, palmas y plantas en un lactante sugiere Coxsackie: enfermedad mano-pie-boca.",
    "El aciclovir puede precipitar en los túbulos renales: por eso se hidrata bien al paciente.",
    "El oseltamivir funciona mejor si se inicia en las primeras 48 horas de la influenza.",
    "Solo anti-HBs positivo indica vacunación contra hepatitis B; con anti-HBc, infección pasada.",
    "El virus influenza A puede cambiar mucho (shift) porque su genoma está segmentado.",
    "Cerca del 8 % de tu genoma son restos de virus antiguos: los retrovirus endógenos humanos (HERVs).",
    "La placenta existe gracias a la sincitina, una proteína de origen viral que hace fusionar las células.",
    "La proteína Arc, clave para formar recuerdos de largo plazo, viene de genes de retrovirus.",
    "El VIH-1 vino del SIV de los chimpancés y el VIH-2 del de los monos mangabey: el VIH es zoonótico.",
    "El HTLV-1 fue el primer retrovirus humano descubierto, en 1980; el Perú es zona endémica.",
    "El SIDA se reconoció en 1981 por 5 casos de neumonía por Pneumocystis en hombres jóvenes de Los Ángeles.",
    "La vacuna del VPH está hecha con L1 de la cápside: son partículas vacías, sin ADN, que no infectan.",
    "El antígeno p24 del VIH aparece antes que los anticuerpos: por eso las pruebas de 4.ª generación acortan la ventana."
  ],
  "parasitos": [
    "El coprológico se procesa en menos de 30 minutos para no perder la movilidad de los trofozoítos.",
    "El lugol resalta núcleos y membranas de los quistes; la solución salina deja ver lo que se mueve.",
    "Un coprológico negativo no descarta parasitosis: a veces hacen falta exámenes seriados.",
    "Si la muestra de heces se retrasa, se conserva en formol al 10 % o en PVA.",
    "Leucocitos y hematíes en heces sugieren invasión intestinal, como amebiasis o shigelosis.",
    "Trichomonas vaginalis puede verse en el sedimento urinario: es una pera con flagelos que se mueve.",
    "El test de Graham se hace con cinta adhesiva en la región perianal al despertar: busca huevos de Enterobius.",
    "En un paciente con corticoides, Strongyloides puede causar hiperinfección por autoinfección.",
    "Comer berros crudos es el antecedente típico de la fasciolosis. Se trata con triclabendazol.",
    "Loxosceles laeta, la araña del rincón, puede causar hemólisis además de la placa necrótica.",
    "P. vivax deja hipnozoítos en el hígado: por eso se agrega primaquina."
  ],
  "laboratorio": [
    "El inóculo del antibiograma se ajusta a McFarland 0.5, unos 1.5 × 10⁸ UFC/mL.",
    "Si el inóculo es más denso que McFarland 0.5, los halos salen pequeños: falsos resistentes.",
    "Con asa de 0.001 mL, cada colonia del urocultivo vale 1000 UFC/mL.",
    "Más de 15 células epiteliales escamosas por campo indican muestra de orina contaminada.",
    "AmpC no se inhibe con clavulánico y es resistente a cefoxitina; la BLEE sí se inhibe.",
    "En pacientes con sonda, la orina se toma del tubo de drenaje, nunca de la bolsa.",
    "El urocultivo se procesa en menos de 2 horas o se refrigera a 4 °C.",
    "En XLD, Salmonella sale roja con centro negro; Shigella, roja sin centro negro."
  ],
  "tratamientos": [
    "En una candidemia por catéter, además del antifúngico hay que retirar el catéter.",
    "La tricomoniasis se trata con metronidazol a la paciente y a su pareja.",
    "La TB sensible se trata con HRZE 2 meses y HR 4 meses; si es resistente a rifampicina, con BPaLM.",
    "Proteus mirabilis tiene resistencia natural a la nitrofurantoína.",
    "En cistitis no complicada por BLEE puede usarse fosfomicina en vez de un carbapenémico.",
    "En bacterias, el tratamiento siempre se ajusta según el antibiograma."
  ],
  "micro": [
    "Aspergillus termina en una vesícula; Penicillium se ramifica en pincel y no tiene vesícula.",
    "Fusarium tiene macroconidias en canoa; Microsporum, en huso de pared gruesa y rugosa.",
    "T. mentagrophytes muestra hifas en espiral y microconidios en racimo de uvas.",
    "Paracoccidioides se reconoce por la levadura en 'rueda de timón'.",
    "Las hifas de Rhizopus son anchas y sin tabiques; las de Aspergillus son delgadas y septadas.",
    "Sporothrix tiene conidios en margarita en la punta de la hifa."
  ]
};
