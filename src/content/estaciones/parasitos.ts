// Estación: Parásitos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Estacion } from "../types";

export const parasitos: Estacion = {
  "id": "parasitos",
  "nombre": "Parásitos",
  "descripcion": "Coprológico, protozoos, helmintos, vectores y arácnidos",
  "resumen": "Lo que se vio en la Práctica 4:\n• Coprológico directo: 2 a 5 g de heces frescas; procesar en menos de 30 minutos para ver trofozoítos móviles (Entamoeba histolytica, Giardia).\n• Si hay retraso: formol al 10 % o PVA.\n• Solución salina: estructuras móviles. Lugol: núcleos y membranas de quistes.\n• Objetivos 10x y 40x.\n• Leucocitos y hematíes: invasión (amebiasis, shigelosis). Un negativo no descarta: exámenes seriados.\n• Trichomonas vaginalis en orina: pera con flagelos; metronidazol a la paciente y a su pareja.",
  "preguntas": [
    {
      "id": "parasitos-001",
      "nivel": "f",
      "pregunta": "¿Qué mosquito transmite Plasmodium?",
      "correcta": "Anopheles",
      "distractores": [
        "Aedes",
        "Culex",
        "Triatoma"
      ],
      "pista": "Es el mosquito de la malaria.",
      "explicacion": "Lo transmite la hembra al picar."
    },
    {
      "id": "parasitos-002",
      "nivel": "f",
      "pregunta": "¿Qué forma de Giardia se transmite por agua o alimentos contaminados?",
      "correcta": "Quiste",
      "distractores": [
        "Trofozoíto",
        "Esporozoíto",
        "Merozoíto"
      ],
      "pista": "Es la forma resistente.",
      "explicacion": "Sobrevive fuera del huésped; transmisión fecal-oral."
    },
    {
      "id": "parasitos-003",
      "nivel": "f",
      "pregunta": "El test de Graham sirve para diagnosticar:",
      "correcta": "Enterobius vermicularis",
      "distractores": [
        "Ascaris",
        "Trichuris",
        "Strongyloides"
      ],
      "pista": "Se hace con cinta adhesiva perianal.",
      "explicacion": "La hembra pone los huevos en la región perianal de noche."
    },
    {
      "id": "parasitos-004",
      "nivel": "m",
      "pregunta": "Paciente con corticoides crónicos, diarrea y larvas rabditiformes en heces:",
      "correcta": "Strongyloides stercoralis",
      "distractores": [
        "Ancylostoma duodenale",
        "Ascaris lumbricoides",
        "Toxocara canis"
      ],
      "pista": "Las larvas, no los huevos, salen en heces.",
      "explicacion": "Los corticoides pueden desencadenar hiperinfección."
    },
    {
      "id": "parasitos-005",
      "nivel": "m",
      "pregunta": "Consumo de berros crudos, dolor en hipocondrio derecho y eosinofilia marcada:",
      "correcta": "Fasciolosis",
      "distractores": [
        "Hidatidosis",
        "Amebiasis",
        "Leptospirosis"
      ],
      "pista": "El parásito vive en las vías biliares.",
      "explicacion": "Huevos grandes y operculados en heces."
    },
    {
      "id": "parasitos-006",
      "nivel": "m",
      "pregunta": "Tratamiento de elección de la fasciolosis:",
      "correcta": "Triclabendazol",
      "distractores": [
        "Praziquantel",
        "Metronidazol",
        "Albendazol"
      ],
      "pista": "Es un benzimidazol específico.",
      "explicacion": "El praziquantel no es eficaz contra Fasciola."
    },
    {
      "id": "parasitos-007",
      "nivel": "f",
      "pregunta": "Niño con diarrea grasosa y trofozoítos binucleados en heces. Tratamiento:",
      "correcta": "Metronidazol",
      "distractores": [
        "Praziquantel",
        "Cotrimoxazol",
        "Azitromicina"
      ],
      "pista": "El agente es Giardia.",
      "explicacion": "Alternativa: tinidazol."
    },
    {
      "id": "parasitos-008",
      "nivel": "m",
      "pregunta": "Lesión cutánea crónica tras viajar a la selva; parásito dentro de los macrófagos:",
      "correcta": "Leishmania",
      "distractores": [
        "Sarcoptes scabiei",
        "Demodex",
        "Trichomonas"
      ],
      "pista": "Lo transmite un flebótomo (titira).",
      "explicacion": "Leishmaniasis cutánea."
    },
    {
      "id": "parasitos-009",
      "nivel": "m",
      "pregunta": "Niño con placa violácea de centro necrótico tras una 'picadura' en casa, orina oscura y anemia:",
      "correcta": "Loxoscelismo",
      "distractores": [
        "Latrodectismo",
        "Escorpionismo",
        "Tarantulismo"
      ],
      "pista": "La araña del rincón.",
      "explicacion": "La forma cutáneo-visceral produce hemólisis."
    },
    {
      "id": "parasitos-010",
      "nivel": "d",
      "pregunta": "Picadura en zona rural seguida de agitación, espasmos y rigidez abdominal:",
      "correcta": "Latrodectus mactans",
      "distractores": [
        "Loxosceles laeta",
        "Tarántula",
        "Garrapata"
      ],
      "pista": "La viuda negra.",
      "explicacion": "Su toxina es neurotóxica: contracturas y rigidez."
    },
    {
      "id": "parasitos-011",
      "nivel": "d",
      "pregunta": "¿Qué forma de Plasmodium entra al humano con la picadura?",
      "correcta": "Esporozoíto",
      "distractores": [
        "Merozoíto",
        "Gametocito",
        "Trofozoíto"
      ],
      "pista": "Va primero al hígado.",
      "explicacion": "Del hígado salen los merozoítos que invaden hematíes."
    },
    {
      "id": "parasitos-012",
      "nivel": "f",
      "pregunta": "Paciente de la selva con fiebre paroxística, ictericia y trofozoítos en el frotis de sangre:",
      "correcta": "Paludismo",
      "distractores": [
        "Leishmaniasis",
        "Dengue",
        "Chikungunya"
      ],
      "pista": "El frotis muestra parásitos en hematíes.",
      "explicacion": "La malaria grave puede dar ictericia e insuficiencia renal."
    },
    {
      "id": "parasitos-013",
      "nivel": "f",
      "pregunta": "¿Qué parásito se busca con la gota gruesa?",
      "correcta": "Plasmodium",
      "distractores": [
        "Giardia",
        "Enterobius",
        "Ascaris"
      ],
      "pista": "Vive dentro de los hematíes.",
      "explicacion": "La gota gruesa concentra los parásitos de la sangre."
    },
    {
      "id": "parasitos-014",
      "nivel": "m",
      "pregunta": "¿Qué insecto transmite Leishmania?",
      "correcta": "Flebótomo (titira)",
      "distractores": [
        "Anopheles",
        "Aedes",
        "Triatoma"
      ],
      "pista": "Es un mosquito muy pequeño.",
      "explicacion": "En Perú se le llama titira o manta blanca."
    },
    {
      "id": "parasitos-015",
      "nivel": "d",
      "pregunta": "¿Qué explica la hiperinfección por Strongyloides en pacientes con corticoides?",
      "correcta": "La autoinfección: las larvas pasan a filariformes dentro del intestino y reinvaden",
      "distractores": [
        "Los corticoides matan a los eosinófilos que el parásito necesita",
        "El parásito se multiplica en la sangre",
        "Los huevos eclosionan en el pulmón"
      ],
      "pista": "Puede completar el ciclo sin salir del cuerpo.",
      "explicacion": "Con inmunosupresión, la carga de larvas crece sin control."
    },
    {
      "id": "parasitos-016",
      "nivel": "d",
      "pregunta": "Especie de Plasmodium con hipnozoítos hepáticos que causan recaídas meses después:",
      "correcta": "P. vivax",
      "distractores": [
        "P. falciparum",
        "P. malariae",
        "P. knowlesi"
      ],
      "pista": "Es la más común en Perú.",
      "explicacion": "Por eso se agrega primaquina para eliminar los hipnozoítos."
    },
    {
      "id": "parasitos-017",
      "nivel": "d",
      "pregunta": "Neurocisticercosis con quistes viables. Tratamiento:",
      "correcta": "Albendazol con corticoides",
      "distractores": [
        "Metronidazol",
        "Triclabendazol",
        "Ivermectina sola"
      ],
      "pista": "El corticoide evita la inflamación al morir el quiste.",
      "explicacion": "Puede combinarse con praziquantel según el caso."
    },
    {
      "id": "parasitos-018",
      "nivel": "d",
      "pregunta": "Paciente con VIH y CD4 bajos con convulsiones; la tomografía muestra lesiones cerebrales con realce en anillo. Parásito más probable:",
      "correcta": "Toxoplasma gondii",
      "distractores": [
        "Taenia solium adulta",
        "Giardia lamblia",
        "Plasmodium vivax"
      ],
      "pista": "Es una reactivación.",
      "explicacion": "La toxoplasmosis cerebral es la lesión focal más frecuente en el VIH avanzado."
    },
    {
      "id": "parasitos-019",
      "nivel": "d",
      "pregunta": "Quiste hidatídico hepático. ¿Qué NO se debe hacer?",
      "correcta": "Punzarlo para diagnóstico sin protección",
      "distractores": [
        "Pedir serología",
        "Hacer ecografía",
        "Dar albendazol antes de la cirugía"
      ],
      "pista": "El contenido es peligroso.",
      "explicacion": "La fuga del líquido puede causar anafilaxia y sembrar quistes nuevos."
    },
    {
      "id": "parasitos-020",
      "nivel": "x",
      "pregunta": "¿Por qué P. falciparum causa malaria cerebral y las otras especies casi nunca?",
      "correcta": "Los hematíes infectados se adhieren al endotelio y obstruyen la microcirculación",
      "distractores": [
        "Solo él atraviesa la barrera hematoencefálica",
        "Forma hipnozoítos en el cerebro",
        "Produce más fiebre",
        "Infecta solo hematíes jóvenes"
      ],
      "explicacion": "Es la citoadherencia, mediada por proteínas del parásito en la superficie del hematíe."
    },
    {
      "id": "parasitos-021",
      "nivel": "x",
      "pregunta": "Enfermedad de Chagas crónica. ¿Qué órganos se afectan típicamente?",
      "correcta": "Corazón y tubo digestivo (megaesófago y megacolon)",
      "distractores": [
        "Hígado y bazo",
        "Riñón y vejiga",
        "Piel y mucosa nasal",
        "Pulmón y pleura"
      ],
      "explicacion": "Trypanosoma cruzi destruye neuronas de los plexos y fibras del miocardio."
    },
    {
      "id": "parasitos-022",
      "nivel": "x",
      "pregunta": "¿Cómo se adquiere la cisticercosis humana?",
      "correcta": "Ingiriendo huevos de Taenia solium por vía fecal-oral",
      "distractores": [
        "Comiendo carne de cerdo con cisticercos",
        "Comiendo carne de res mal cocida",
        "Por la picadura de un vector",
        "Por la piel al caminar descalzo"
      ],
      "explicacion": "La carne de cerdo con cisticercos da teniasis (el gusano adulto), no cisticercosis."
    },
    {
      "id": "parasitos-023",
      "nivel": "x",
      "pregunta": "Hiperinfección por Strongyloides. ¿Qué complicación bacteriana es frecuente?",
      "correcta": "Sepsis o meningitis por bacilos Gram negativos entéricos",
      "distractores": [
        "Neumonía por S. aureus",
        "Faringitis estreptocócica",
        "Endocarditis por enterococo sin bacteriemia",
        "Tuberculosis miliar"
      ],
      "explicacion": "Las larvas arrastran bacterias del intestino al torrente sanguíneo."
    },
    {
      "id": "parasitos-024",
      "nivel": "x",
      "pregunta": "Toxoplasmosis aguda en una gestante. ¿Por qué se empieza con espiramicina?",
      "correcta": "Reduce el paso del parásito a través de la placenta, aunque no trata al feto ya infectado",
      "distractores": [
        "Es el único fármaco que mata quistes tisulares",
        "Trata al feto mejor que la pirimetamina",
        "No atraviesa la placenta y por eso trata a la madre y al feto",
        "Previene la reactivación en el sistema nervioso"
      ],
      "explicacion": "Si se confirma infección fetal, se pasa a pirimetamina, sulfadiazina y ácido folínico."
    },
    {
      "id": "parasitos-025",
      "nivel": "x",
      "pregunta": "Leishmaniasis cutánea por L. braziliensis. ¿Por qué es importante tratarla aunque la úlcera cierre?",
      "correcta": "Puede diseminarse años después a la mucosa nasal y destruir el tabique",
      "distractores": [
        "Se transforma en malaria",
        "Siempre se vuelve visceral",
        "Contagia por contacto directo",
        "Produce resistencia a todos los fármacos"
      ],
      "explicacion": "Es la forma mucosa o espundia."
    },
    {
      "id": "parasitos-026",
      "nivel": "f",
      "pregunta": "¿Con qué objetivos se observa el coprológico directo?",
      "correcta": "10x y 40x",
      "distractores": [
        "Solo 100x con aceite",
        "4x",
        "No se usa microscopio"
      ],
      "pista": "Los mismos que en el sedimento urinario.",
      "explicacion": "Práctica 4: observación al microscopio con 10x y 40x."
    },
    {
      "id": "parasitos-027",
      "nivel": "f",
      "pregunta": "¿Cuánta muestra de heces se recoge para el coprológico?",
      "correcta": "2 a 5 g en frasco limpio con tapa",
      "distractores": [
        "Toda la deposición del día",
        "Un hisopo seco siempre",
        "50 g en bolsa"
      ],
      "pista": "Es poca cantidad.",
      "explicacion": "Evitando contaminación con orina, agua o papel."
    },
    {
      "id": "parasitos-028",
      "nivel": "f",
      "pregunta": "Protozoo en forma de pera, con flagelos y movimiento, en el sedimento urinario:",
      "correcta": "Trichomonas vaginalis",
      "distractores": [
        "Giardia lamblia",
        "Entamoeba histolytica",
        "Cyclospora"
      ],
      "pista": "Causa flujo amarillo verdoso espumoso.",
      "explicacion": "Práctica 4 y banco de laboratorio."
    },
    {
      "id": "parasitos-029",
      "nivel": "m",
      "pregunta": "En el coprológico, ¿para qué sirve el montaje con lugol?",
      "correcta": "Resalta estructuras internas de los quistes, como núcleos y membranas",
      "distractores": [
        "Permite ver la movilidad de los trofozoítos",
        "Tiñe bacterias Gram negativas",
        "Sirve para cultivar parásitos"
      ],
      "pista": "Es un colorante.",
      "explicacion": "La movilidad se ve con solución salina."
    },
    {
      "id": "parasitos-030",
      "nivel": "m",
      "pregunta": "¿Para qué sirve el montaje en solución salina al 0,85 %?",
      "correcta": "Para ver estructuras móviles: trofozoítos y larvas",
      "distractores": [
        "Para teñir núcleos de quistes",
        "Para conservar la muestra varios días",
        "Para sembrar en agar"
      ],
      "pista": "No tiñe ni mata al parásito.",
      "explicacion": "Práctica 4: montaje en solución salina."
    },
    {
      "id": "parasitos-031",
      "nivel": "m",
      "pregunta": "¿Por qué el coprológico se procesa idealmente en menos de 30 minutos?",
      "correcta": "Para conservar la movilidad de los trofozoítos de Entamoeba histolytica y Giardia",
      "distractores": [
        "Porque las bacterias tapan los huevos",
        "Porque los quistes se disuelven",
        "Porque el lugol se evapora"
      ],
      "pista": "Piensa en las formas que se mueven.",
      "explicacion": "Si hay retraso, se conserva en formol al 10 % o PVA."
    },
    {
      "id": "parasitos-032",
      "nivel": "m",
      "pregunta": "Si la muestra de heces no se procesa pronto, ¿cómo se conserva para tinciones?",
      "correcta": "Formol al 10 % o PVA",
      "distractores": [
        "Medio Cary-Blair",
        "Refrigerada mezclada con orina",
        "Alcohol al 70 %"
      ],
      "pista": "Cary-Blair es para otro examen.",
      "explicacion": "Cary-Blair es el transporte del coprocultivo, no del coprológico."
    },
    {
      "id": "parasitos-033",
      "nivel": "m",
      "pregunta": "Tricomoniasis. Tratamiento:",
      "correcta": "Metronidazol a la paciente y a su pareja",
      "distractores": [
        "Fluconazol",
        "Nistatina vaginal",
        "Amoxicilina"
      ],
      "pista": "Es una infección de transmisión sexual.",
      "explicacion": "Banco de laboratorio, caso C23."
    },
    {
      "id": "parasitos-034",
      "nivel": "d",
      "pregunta": "Coprológico con leucocitos y hematíes. ¿Qué sugiere?",
      "correcta": "Invasión intestinal, como en amebiasis o shigelosis",
      "distractores": [
        "Infección viral",
        "Giardiasis sin invasión",
        "Muestra normal"
      ],
      "pista": "Patrón inflamatorio.",
      "explicacion": "Práctica 4: interpretación inflamatoria del coprológico."
    },
    {
      "id": "parasitos-035",
      "nivel": "d",
      "pregunta": "Coprológico negativo en un paciente con sospecha de parasitosis. ¿Qué haces?",
      "correcta": "No descarta la infección: pedir exámenes seriados",
      "distractores": [
        "Descartar parasitosis",
        "Pedir urocultivo",
        "Iniciar antibiótico"
      ],
      "pista": "Los parásitos no se eliminan todos los días.",
      "explicacion": "Práctica 4: un negativo puede requerir exámenes seriados."
    },
    {
      "id": "parasitos-036",
      "nivel": "d",
      "pregunta": "¿Por qué se pide coprológico en un paciente con anemia por deficiencia de hierro en zona endémica?",
      "correcta": "Para buscar helmintiasis intestinal que cause pérdida crónica de sangre",
      "distractores": [
        "Para buscar bacterias que consumen hierro",
        "Para medir el hierro en heces",
        "Para descartar Trichomonas"
      ],
      "pista": "Es una de sus indicaciones clínicas.",
      "explicacion": "Práctica 4: indicaciones del coprológico directo."
    },
    {
      "id": "parasitos-037",
      "nivel": "d",
      "pregunta": "Diarrea aguda con fiebre y sangre en heces. Además del coprológico, ¿qué examen pides?",
      "correcta": "Coprocultivo",
      "distractores": [
        "Urocultivo",
        "Hemocultivo de rutina",
        "Examen completo de orina"
      ],
      "pista": "Busca bacterias patógenas.",
      "explicacion": "Práctica 4: diarrea con fiebre y sangre o moco es indicación de coprocultivo."
    },
    {
      "id": "parasitos-038",
      "nivel": "x",
      "pregunta": "Muestra de heces que llegó 3 horas después, sin conservante; el coprológico no muestra trofozoítos móviles. ¿Cómo lo interpretas?",
      "correcta": "No es confiable para trofozoítos: pudieron perder movilidad; repetir con muestra fresca o conservada",
      "distractores": [
        "Descarta amebiasis y giardiasis",
        "Indica infección bacteriana",
        "Confirma Cyclospora",
        "Es un resultado normal que no se repite"
      ],
      "explicacion": "Une dos datos de clase: procesar en menos de 30 minutos y que un negativo no descarta."
    },
    {
      "id": "parasitos-039",
      "nivel": "x",
      "pregunta": "En el coprológico, ¿qué montaje NO sirve para ver la movilidad de un trofozoíto?",
      "correcta": "El de lugol",
      "distractores": [
        "El de solución salina",
        "Ambos sirven igual",
        "Ninguno: la movilidad solo se ve en cultivo",
        "La muestra sin montaje"
      ],
      "explicacion": "El lugol tiñe estructuras internas, pero inmoviliza al parásito."
    },
    {
      "id": "parasitos-040",
      "nivel": "x",
      "pregunta": "Aparece Giardia lamblia en una muestra de orina. ¿Qué significa?",
      "correcta": "Contaminación fecal de la muestra de orina",
      "distractores": [
        "Infección urinaria por Giardia",
        "Pielonefritis parasitaria",
        "Tricomoniasis",
        "Cistitis por hongos"
      ],
      "explicacion": "Giardia vive en el intestino; en orina indica mala toma de muestra."
    },
    {
      "id": "parasitos-041",
      "nivel": "x",
      "pregunta": "Mujer con Trichomonas en el sedimento urinario y flujo espumoso. ¿Por qué se trata también a la pareja?",
      "correcta": "Es una infección de transmisión sexual: sin tratar a la pareja, se reinfecta",
      "distractores": [
        "Para evitar que la pareja tenga ITU bacteriana",
        "Porque el metronidazol actúa solo en hombres",
        "No es necesario tratar a la pareja",
        "Para prevenir candidiasis"
      ],
      "explicacion": "Banco de laboratorio: metronidazol a la paciente y a su pareja."
    }
  ]
};
