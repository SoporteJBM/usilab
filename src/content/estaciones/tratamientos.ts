// Estación: Tratamientos
// Fuentes: Prácticas 4, 5 y 6, banco de laboratorio del curso y preguntas revisadas.
import type { Estacion } from "../types";

export const tratamientos: Estacion = {
  "id": "tratamientos",
  "nombre": "Tratamientos",
  "descripcion": "Qué antimicrobiano elegir en cada caso",
  "resumen": "Cuadro → tratamiento de elección.\n• Aspergilosis invasiva: voriconazol. Mucormicosis: anfotericina B liposomal y cirugía.\n• Candidemia: equinocandina y retirar el catéter.\n• MRSA: vancomicina. BLEE grave: carbapenémico.\n• TB: HRZE 2 meses + HR 4 meses; resistente a rifampicina: BPaLM.\nEn bacterias, en el examen agrega siempre 'según el antibiograma'.",
  "preguntas": [
    {
      "id": "tratamientos-001",
      "nivel": "f",
      "pregunta": "Paciente neutropénico con aspergilosis invasiva. Tratamiento de elección:",
      "correcta": "Voriconazol",
      "distractores": [
        "Fluconazol",
        "Nistatina",
        "Terbinafina"
      ],
      "pista": "Es un azol activo contra mohos.",
      "explicacion": "El fluconazol tiene poca actividad contra Aspergillus."
    },
    {
      "id": "tratamientos-002",
      "nivel": "m",
      "pregunta": "Candidemia por C. albicans en paciente con catéter venoso central:",
      "correcta": "Equinocandina y retirar el catéter",
      "distractores": [
        "Nistatina oral",
        "Fluconazol sin retirar el catéter",
        "Terbinafina"
      ],
      "pista": "Hay que eliminar el reservorio.",
      "explicacion": "El biofilm del catéter no se erradica solo con antifúngicos."
    },
    {
      "id": "tratamientos-003",
      "nivel": "m",
      "pregunta": "Mucormicosis rinocerebral en diabético con cetoacidosis:",
      "correcta": "Anfotericina B liposomal, desbridamiento quirúrgico y corregir la cetoacidosis",
      "distractores": [
        "Fluconazol oral",
        "Voriconazol solo",
        "Caspofungina"
      ],
      "pista": "Los mucorales son resistentes a varios azoles.",
      "explicacion": "La cirugía es urgente."
    },
    {
      "id": "tratamientos-004",
      "nivel": "m",
      "pregunta": "Fungemia por Rhodotorula asociada a catéter:",
      "correcta": "Retirar el catéter y anfotericina B",
      "distractores": [
        "Fluconazol",
        "Caspofungina",
        "No requiere tratamiento"
      ],
      "pista": "Resiste fluconazol y equinocandinas.",
      "explicacion": "El catéter es el reservorio."
    },
    {
      "id": "tratamientos-005",
      "nivel": "f",
      "pregunta": "Onicomicosis por Trichophyton rubrum:",
      "correcta": "Terbinafina oral por 12 semanas",
      "distractores": [
        "Nistatina tópica",
        "Griseofulvina tópica",
        "Fluconazol una dosis"
      ],
      "pista": "Lo tópico no alcanza la uña.",
      "explicacion": "Se suma tratamiento tópico en la piel."
    },
    {
      "id": "tratamientos-006",
      "nivel": "f",
      "pregunta": "Cistitis no complicada por E. coli:",
      "correcta": "Nitrofurantoína o fosfomicina, según antibiograma",
      "distractores": [
        "Meropenem",
        "Vancomicina",
        "Fluconazol"
      ],
      "pista": "Antibióticos que se concentran en orina.",
      "explicacion": "Se reservan los carbapenémicos para infecciones graves o BLEE."
    },
    {
      "id": "tratamientos-007",
      "nivel": "m",
      "pregunta": "Infección grave por enterobacteria productora de BLEE:",
      "correcta": "Meropenem",
      "distractores": [
        "Ceftriaxona",
        "Amoxicilina",
        "Ampicilina"
      ],
      "pista": "Las cefalosporinas quedan inactivas.",
      "explicacion": "Los carbapenémicos son de elección; en cistitis no complicada, fosfomicina."
    },
    {
      "id": "tratamientos-008",
      "nivel": "f",
      "pregunta": "Infección por S. aureus resistente a meticilina:",
      "correcta": "Vancomicina",
      "distractores": [
        "Oxacilina",
        "Cefalexina",
        "Amoxicilina"
      ],
      "pista": "MRSA resiste todos los β-lactámicos.",
      "explicacion": "Alternativas: daptomicina o linezolid."
    },
    {
      "id": "tratamientos-009",
      "nivel": "f",
      "pregunta": "Tuberculosis pulmonar con baciloscopía positiva, sensible:",
      "correcta": "HRZE 2 meses y HR 4 meses",
      "distractores": [
        "Rifampicina sola 6 meses",
        "Isoniazida sola 9 meses",
        "BPaLM"
      ],
      "pista": "Cuatro fármacos en la fase intensiva.",
      "explicacion": "Supervisado; la segunda fase es 3 veces por semana."
    },
    {
      "id": "tratamientos-010",
      "nivel": "d",
      "pregunta": "Tuberculosis resistente a rifampicina detectada por GeneXpert:",
      "correcta": "BPaLM: bedaquilina, pretomanid, linezolid y moxifloxacino",
      "distractores": [
        "HRZE estándar",
        "Rifampicina a doble dosis",
        "Isoniazida sola"
      ],
      "pista": "Es el esquema para resistentes.",
      "explicacion": "Sin rifampicina, el esquema estándar falla."
    },
    {
      "id": "tratamientos-011",
      "nivel": "f",
      "pregunta": "Tricomoniasis:",
      "correcta": "Metronidazol a la paciente y a su pareja",
      "distractores": [
        "Fluconazol",
        "Nistatina vaginal",
        "Amoxicilina"
      ],
      "pista": "Es una ITS.",
      "explicacion": "Si no se trata a la pareja, se reinfecta."
    },
    {
      "id": "tratamientos-012",
      "nivel": "f",
      "pregunta": "Muguet (candidiasis oral) en un lactante:",
      "correcta": "Nistatina oral en suspensión",
      "distractores": [
        "Anfotericina B intravenosa",
        "Griseofulvina",
        "Voriconazol"
      ],
      "pista": "Tratamiento local.",
      "explicacion": "Es una infección superficial."
    },
    {
      "id": "tratamientos-013",
      "nivel": "m",
      "pregunta": "Candiduria en paciente diabética con sonda vesical:",
      "correcta": "Retirar o cambiar la sonda; fluconazol si hay síntomas",
      "distractores": [
        "Anfotericina B siempre",
        "Caspofungina siempre",
        "No hacer nada nunca"
      ],
      "pista": "La sonda es el problema.",
      "explicacion": "La candiduria asintomática muchas veces no requiere antifúngico."
    },
    {
      "id": "tratamientos-014",
      "nivel": "m",
      "pregunta": "Paciente con gota que inicia tratamiento para tuberculosis. ¿Qué fármaco está contraindicado?",
      "correcta": "Pirazinamida",
      "distractores": [
        "Rifampicina",
        "Etambutol",
        "Isoniazida"
      ],
      "pista": "Eleva el ácido úrico.",
      "explicacion": "La pirazinamida produce hiperuricemia."
    },
    {
      "id": "tratamientos-015",
      "nivel": "d",
      "pregunta": "Lactante con sordera neurosensorial; la madre recibió un antituberculoso inyectable en el embarazo:",
      "correcta": "Estreptomicina",
      "distractores": [
        "Isoniazida",
        "Rifampicina",
        "Etambutol"
      ],
      "pista": "Es un aminoglucósido.",
      "explicacion": "Los aminoglucósidos son ototóxicos."
    },
    {
      "id": "tratamientos-016",
      "nivel": "d",
      "pregunta": "¿Cómo se reduce la nefrotoxicidad de la anfotericina B desoxicolato?",
      "correcta": "Solución salina isotónica antes de la infusión",
      "distractores": [
        "Furosemida después de la infusión",
        "Dopamina",
        "Coloides antes de la infusión"
      ],
      "pista": "Carga de sodio.",
      "explicacion": "La sal protege el riñón frente a la vasoconstricción."
    },
    {
      "id": "tratamientos-017",
      "nivel": "m",
      "pregunta": "Histoplasmosis diseminada en paciente con VIH:",
      "correcta": "Anfotericina B liposomal y luego itraconazol",
      "distractores": [
        "Fluconazol tópico",
        "Nistatina",
        "Solo antirretrovirales"
      ],
      "pista": "Primero lo más potente, luego mantenimiento oral.",
      "explicacion": "Itraconazol en formas leves o como continuación."
    },
    {
      "id": "tratamientos-018",
      "nivel": "f",
      "pregunta": "Malaria por Plasmodium falciparum:",
      "correcta": "Combinación con artemisinina",
      "distractores": [
        "Cloroquina",
        "Ivermectina",
        "Albendazol"
      ],
      "pista": "Hay mucha resistencia a cloroquina.",
      "explicacion": "Las terapias combinadas con artemisinina son de elección."
    },
    {
      "id": "tratamientos-019",
      "nivel": "m",
      "pregunta": "Antituberculoso que causa neuritis óptica, con alteración para distinguir colores:",
      "correcta": "Etambutol",
      "distractores": [
        "Isoniazida",
        "Rifampicina",
        "Pirazinamida"
      ],
      "pista": "Es la E de HRZE.",
      "explicacion": "Se controla la agudeza visual y la visión de colores."
    },
    {
      "id": "tratamientos-020",
      "nivel": "d",
      "pregunta": "Paciente con HRZE que presenta hormigueo en los pies. ¿Qué fármaco lo causa y qué vitamina lo previene?",
      "correcta": "Isoniazida; piridoxina (B6)",
      "distractores": [
        "Etambutol; vitamina A",
        "Rifampicina; vitamina K",
        "Pirazinamida; tiamina"
      ],
      "pista": "Es una neuropatía periférica.",
      "explicacion": "La isoniazida depleta la vitamina B6."
    },
    {
      "id": "tratamientos-021",
      "nivel": "d",
      "pregunta": "Paciente con TB y VIH en tratamiento antirretroviral. ¿Qué antituberculoso tiene más interacciones?",
      "correcta": "Rifampicina",
      "distractores": [
        "Etambutol",
        "Pirazinamida",
        "Isoniazida"
      ],
      "pista": "Es un inductor enzimático potente.",
      "explicacion": "Induce el CYP3A4 y baja los niveles de varios antirretrovirales."
    },
    {
      "id": "tratamientos-022",
      "nivel": "d",
      "pregunta": "Gestante con cistitis. ¿Qué antibiótico se evita?",
      "correcta": "Ciprofloxacino",
      "distractores": [
        "Fosfomicina",
        "Cefalexina",
        "Amoxicilina-clavulánico"
      ],
      "pista": "Es una fluoroquinolona.",
      "explicacion": "Las fluoroquinolonas se evitan en el embarazo por el riesgo sobre el cartílago."
    },
    {
      "id": "tratamientos-023",
      "nivel": "d",
      "pregunta": "Candidemia por Candida krusei. Tratamiento:",
      "correcta": "Equinocandina",
      "distractores": [
        "Fluconazol",
        "Nistatina",
        "Griseofulvina"
      ],
      "pista": "Tiene resistencia natural a un azol muy usado.",
      "explicacion": "C. krusei es intrínsecamente resistente a fluconazol."
    },
    {
      "id": "tratamientos-024",
      "nivel": "x",
      "pregunta": "Infección por enterococo resistente a vancomicina. Opción de tratamiento:",
      "correcta": "Linezolid o daptomicina",
      "distractores": [
        "Ceftriaxona",
        "Oxacilina",
        "Vancomicina a dosis alta",
        "Gentamicina sola"
      ],
      "explicacion": "Los enterococos son naturalmente resistentes a cefalosporinas."
    },
    {
      "id": "tratamientos-025",
      "nivel": "d",
      "pregunta": "ITU complicada por Proteus mirabilis en paciente con sonda:",
      "correcta": "Ceftriaxona o ciprofloxacino según antibiograma, cambiar la sonda y no usar nitrofurantoína",
      "distractores": [
        "Nitrofurantoína sola",
        "Fluconazol",
        "Retirar la sonda sin antibiótico"
      ],
      "pista": "Proteus tiene una resistencia natural.",
      "explicacion": "Banco de laboratorio, caso C17."
    },
    {
      "id": "tratamientos-026",
      "nivel": "d",
      "pregunta": "Neumonía por Klebsiella pneumoniae productora de BLEE:",
      "correcta": "Meropenem",
      "distractores": [
        "Ceftriaxona",
        "Amoxicilina",
        "Ampicilina"
      ],
      "pista": "Las cefalosporinas quedan inactivas.",
      "explicacion": "Banco de laboratorio, caso C18."
    },
    {
      "id": "tratamientos-027",
      "nivel": "d",
      "pregunta": "Otomicosis por Aspergillus niger:",
      "correcta": "Limpieza del conducto y clotrimazol tópico",
      "distractores": [
        "Anfotericina B intravenosa",
        "Voriconazol oral siempre",
        "Griseofulvina"
      ],
      "pista": "Es una infección superficial.",
      "explicacion": "Banco de laboratorio, caso C5."
    },
    {
      "id": "tratamientos-028",
      "nivel": "d",
      "pregunta": "Esporotricosis linfocutánea: alternativa al itraconazol:",
      "correcta": "Yoduro de potasio",
      "distractores": [
        "Nistatina",
        "Fluconazol tópico",
        "Caspofungina"
      ],
      "pista": "Es una opción clásica y barata.",
      "explicacion": "Banco de laboratorio, caso C9."
    },
    {
      "id": "tratamientos-029",
      "nivel": "x",
      "pregunta": "K. pneumoniae productora de carbapenemasa (KPC) en UCI. ¿Opción de tratamiento?",
      "correcta": "Ceftazidima-avibactam o colistina, con infectología",
      "distractores": [
        "Meropenem a dosis alta",
        "Ceftriaxona",
        "Amoxicilina-clavulánico",
        "Vancomicina"
      ],
      "explicacion": "Banco de laboratorio, caso C19."
    },
    {
      "id": "tratamientos-030",
      "nivel": "x",
      "pregunta": "Aspergilosis invasiva por A. terreus. ¿Qué fármaco NO conviene?",
      "correcta": "Anfotericina B",
      "distractores": [
        "Voriconazol",
        "Los dos sirven igual",
        "Ninguno: no se trata",
        "Natamicina tópica sola"
      ],
      "explicacion": "Práctica 6: A. terreus es resistente a la anfotericina B."
    },
    {
      "id": "tratamientos-031",
      "nivel": "x",
      "pregunta": "Cistitis no complicada por E. coli BLEE, sensible a fosfomicina. Tratamiento:",
      "correcta": "Fosfomicina",
      "distractores": [
        "Meropenem intravenoso",
        "Ceftriaxona",
        "Amoxicilina-clavulánico",
        "Vancomicina"
      ],
      "explicacion": "Banco de laboratorio, caso C16: en cistitis no complicada por BLEE, fosfomicina."
    },
    {
      "id": "tratamientos-032",
      "nivel": "x",
      "pregunta": "Fungemia por Rhodotorula. ¿Por qué no se usan fluconazol ni caspofungina?",
      "correcta": "Es resistente a ambos: se usa anfotericina B y se retira el catéter",
      "distractores": [
        "Porque no llegan a la sangre",
        "Porque son tóxicos en pacientes con catéter",
        "Sí se usan: son de elección",
        "Porque Rhodotorula es una bacteria"
      ],
      "explicacion": "Banco de laboratorio, pregunta 28 y caso C14; Práctica 6."
    },
    {
      "id": "tratamientos-033",
      "nivel": "x",
      "pregunta": "GeneXpert: M. tuberculosis resistente a rifampicina. ¿Por qué no sirve el esquema HRZE?",
      "correcta": "La rifampicina es la base del esquema; se usa el esquema para resistentes (BPaLM)",
      "distractores": [
        "Sí sirve si se alarga a 12 meses",
        "Basta con duplicar la isoniazida",
        "Se cambia solo el etambutol",
        "No se trata hasta tener cultivo"
      ],
      "explicacion": "Banco de laboratorio, caso C22."
    }
  ]
};
