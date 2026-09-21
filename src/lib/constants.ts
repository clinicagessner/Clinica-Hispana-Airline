import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Airline",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.clinicahispanaairline.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "934 E Tidwell Rd",
  city: "Houston",
  state: "TX",
  zip: "77022",
  // El número REAL de la clínica. El (346) 626-4110 es de CallRail: es el que
  // va en la ficha de Google y el que swap.js pinta encima de este cuando la
  // visita viene del GBP. Si el sitio imprime el de tracking, el swap no tiene
  // nada que sustituir y todas las llamadas se atribuyen al GBP.
  phone: "+13462044668",
  phoneFormatted: "+1 (346) 204-4668",
  // Mismo número, en E.164 sin "+" para wa.me.
  whatsapp: "13462044668",
  email: "clinicahispanaairline@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/Clinica+Hispana+Airline+934+E+Tidwell+Rd+Houston+TX+77022",
  googleMapsEmbed: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=place_id:ChIJsxclc5m5QIYRyAurHml5cWA&zoom=17`,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJsxclc5m5QIYRyAurHml5cWA",
  placeId: "ChIJsxclc5m5QIYRyAurHml5cWA",
  coordinates: {
    lat: 29.8449012,
    lng: -95.384934,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  x: "https://x.com/ClinHispAirline",
  facebook: "https://www.facebook.com/clinicahispanaairline/",
  linkedin: "https://www.linkedin.com/in/clinica-hispana-airline/",
  google: "https://g.co/kgs/1RwVVhT",
};

// Respaldo por si la API de Places falla: el sitio sirve estos números.
// Se quedaron cortos meses (534 / 4,9 cuando Places ya daba 720 / 5,0), o sea
// que el sitio se anunciaba peor de lo que es. Comprobado contra Places el
// 2026-09-20; volver a comprobarlo en cada lote.
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 720,
  averageRating: 5.0,
  placeId: "ChIJsxclc5m5QIYRyAurHml5cWA",
};

// Dedicated CallRail tracking number for the Conquesting San Rafael landing only.
// Used in /landing/comparacion-clinicas-houston via a route-specific layout.
export const CONQUESTING_PHONE = {
  phone: "+13462482313",
  phoneFormatted: "+1 (346) 248-2313",
} as const;

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Presión y Colesterol en Houston",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Controlar la diabetes, la presión alta y el colesterol es perseguir **tres números, no uno**. En Clínica Hispana Airline hacemos ese seguimiento con laboratorio propio, sin cita y con las explicaciones en español.\n\n**Los tres números y sus metas**\n- **A1C.** Refleja su promedio de azúcar de los últimos dos o tres meses. Se mide cada 3 meses si no está en meta y cada 6 si lo está.\n- **Presión arterial.** La diabetes y la presión alta juntas dañan el riñón mucho más rápido que cada una por separado. Se revisa en **cada visita**, no una vez al año.\n- **Colesterol.** Perfil de lípidos al menos una vez al año; el LDL es la palanca que más se puede mover.\n\n**Lo que se revisa cada año y casi nadie hace**\n- **Pies:** sensibilidad y heridas. Una úlcera que empieza sin dolor, porque el nervio ya no avisa, es como empiezan muchas amputaciones.\n- **Riñón:** creatinina y proteína en orina. El riñón se daña en silencio durante años.\n- **Ojos:** examen de retina con oftalmólogo. Tampoco da síntomas al principio.\n- **Corazón:** electrocardiograma según su edad y sus factores de riesgo.\n\nLo de los ojos es con especialista: le decimos cuándo toca y orientamos la referencia.\n\n**La prediabetes todavía se revierte**\nEntre 5,7 % y 6,4 % de A1C hay margen real: bajar algo de peso, moverse más y ajustar la alimentación puede devolver la A1C al rango normal. Después ya no se revierte, se administra. La diferencia entre las dos situaciones es un análisis que cuesta poco y que casi nadie se hace a tiempo.\n\n**Cómo es el seguimiento**\nEvaluación inicial con laboratorio, plan escrito, ajuste de medicamentos según su evolución y revisión cada 3 a 6 meses, comparando siempre con sus resultados anteriores.",
    "longDescriptionEn": "Managing diabetes, high blood pressure and cholesterol means chasing **three numbers, not one**. At Clínica Hispana Airline we run that follow-up with our own lab, walk-in, with everything explained in your language.\n\n**The three numbers and their targets**\n- **A1C.** Reflects your average blood sugar over the past two to three months. Measured every 3 months if you are off target, every 6 if you are on it.\n- **Blood pressure.** Diabetes and hypertension together damage the kidney far faster than either alone. Checked at **every visit**, not once a year.\n- **Cholesterol.** A lipid panel at least once a year; LDL is the lever you can move the most.\n\n**What to screen yearly, and almost nobody does**\n- **Feet:** sensation and wounds. An ulcer that starts painlessly, because the nerve no longer warns you, is how many amputations begin.\n- **Kidneys:** creatinine and urine protein. Kidneys fail quietly over years.\n- **Eyes:** retinal exam with an ophthalmologist. No early symptoms either.\n- **Heart:** an EKG depending on your age and risk factors.\n\nThe eye exam is with a specialist: we tell you when it is due and help direct the referral.\n\n**Prediabetes can still be reversed**\nBetween 5.7% and 6.4% A1C there is real room: losing some weight, moving more and adjusting your diet can bring A1C back to normal. After that it is no longer reversed, it is managed. The difference between those two situations is one inexpensive test that almost nobody gets in time.\n\n**What follow-up looks like**\nInitial evaluation with lab work, a written plan, medication adjusted to your progress, and a review every 3 to 6 months, always compared against your previous results.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Laboratorio y seguimiento cada 3-6 meses",
      "Revisión de pies, riñón y corazón",
      "Ajuste de medicamentos según evolución",
      "Comparación con sus resultados previos"
    ],
    "featuresEn": [
      "Lab work and follow-up every 3-6 months",
      "Foot, kidney and heart screening",
      "Medication adjusted to your progress",
      "Compared against your previous results"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Airline evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.\n\n**¿Qué incluye?**\n- Evaluación de síntomas\n- Pruebas de función tiroidea (TSH, T3, T4)\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico\n\n**Síntomas frecuentes**\nCansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Airline we evaluate your thyroid with lab work and provide the right treatment.\n\n**What's included?**\n- Symptom evaluation\n- Thyroid function tests (TSH, T3, T4)\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and adjustment\n- Periodic follow-up\n\n**Common symptoms**\nFatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Una tos que vuelve siempre en la misma época, estornudos por la mañana o una piel que reacciona sin motivo claro casi nunca es una gripe repetida: es alergia. En Clínica Hispana Airline la estudiamos y la tratamos, sin cita y en español.\n\n**Houston es un sitio difícil para los alérgicos**\nAquí la temporada de polen se alarga casi todo el año, y a eso se suma la humedad, que favorece el moho. Muchas personas que llegan de otro estado o de otro país empiezan con síntomas al poco de mudarse y no entienden por qué.\n\n**Cómo se distingue de una infección**\n- La alergia **pica**: nariz, ojos, garganta, paladar. Una infección no suele picar.\n- La alergia **no da fiebre**. Si hay fiebre, es otra cosa.\n- El moco de la alergia es **claro y líquido**; el de una infección suele espesar y cambiar de color.\n- La alergia **vuelve siempre igual**: la misma época, el mismo sitio, el mismo animal.\n\n**Qué hacemos**\n- Evaluación de sus síntomas y de cuándo aparecen\n- Pruebas para identificar el desencadenante cuando el patrón no está claro\n- Tratamiento con antihistamínicos, corticoides nasales u otras opciones según el caso\n- Plan para la temporada fuerte, que es lo que más alivia\n\n**Cuándo no es solo alergia**\nSi además hay silbido en el pecho, falta de aire o tos que despierta de noche, puede haber un componente asmático y eso se maneja distinto. Si es su caso, díganoslo en la consulta.",
    "longDescriptionEn": "A cough that returns at the same time every year, morning sneezing, or skin that reacts for no clear reason is almost never repeated flu: it is allergy. At Clínica Hispana Airline we work it up and treat it, walk-in and in your language.\n\n**Houston is a hard place to be allergic**\nPollen season here stretches across most of the year, and humidity adds mold on top of it. Many people who move from another state or country start having symptoms shortly after arriving and cannot work out why.\n\n**How to tell it from an infection**\n- Allergy **itches**: nose, eyes, throat, palate. Infections usually do not itch.\n- Allergy **does not cause fever**. If there is fever, it is something else.\n- Allergic mucus is **clear and runny**; with an infection it usually thickens and changes color.\n- Allergy **comes back the same way**: same season, same place, same animal.\n\n**What we do**\n- Evaluation of your symptoms and when they appear\n- Testing to identify the trigger when the pattern is not obvious\n- Treatment with antihistamines, nasal steroids or other options depending on the case\n- A plan for the heavy season, which is what helps most\n\n**When it is not just allergy**\nIf there is also wheezing, shortness of breath or a cough that wakes you at night, there may be an asthmatic component, and that is managed differently. If that sounds like you, tell us during the visit.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Identificación del desencadenante",
      "Tratamiento para la temporada fuerte",
      "Diferenciación entre alergia e infección",
      "Atención sin cita previa"
    ],
    "featuresEn": [
      "Trigger identification",
      "Treatment for the heavy season",
      "Telling allergy from infection",
      "Walk-in care"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Gripe, COVID, bronquitis o una alergia que parece gripe: se parecen mucho y se tratan distinto. En Clínica Hispana Airline hacemos las pruebas rápidas sin cita y te damos el resultado y el tratamiento **el mismo día**.\n\n**Por qué conviene la prueba y no adivinar**\nLa influenza tiene tratamiento antiviral que solo funciona si se empieza pronto. El COVID tiene su propio manejo. Una bronquitis viral no mejora con antibiótico, y tomarlo \"por si acaso\" solo genera resistencia. Saber qué es cambia el tratamiento desde el primer día.\n\n**Qué hacemos**\n- Prueba rápida de **influenza A y B**\n- Prueba rápida de **COVID-19**\n- Prueba de **estreptococo** cuando el cuadro apunta a la garganta\n- Exploración de garganta, oídos y pulmones\n- Tratamiento y receta según el resultado\n\n**Cuándo venir el mismo día**\nFiebre alta que no cede, dolor de garganta intenso, tos con flema de color, dolor en el pecho al respirar, o síntomas que llevan más de una semana sin mejorar.\n\n**Cuándo ir a emergencias en vez de aquí**\nDificultad real para respirar, labios o uñas azulados, confusión, o fiebre alta en un bebé de menos de tres meses. Eso no es para una clínica.\n\n**Si se repite cada temporada**\nUna tos que vuelve cada primavera o cada vez que cambia el clima muchas veces no es infección, es alergia. Si es su caso, se estudia como alergia y no como gripe.",
    "longDescriptionEn": "Flu, COVID, bronchitis, or an allergy that looks like the flu: they resemble each other closely and are treated differently. At Clínica Hispana Airline we run the rapid tests walk-in and give you the result and the treatment **the same day**.\n\n**Why test instead of guessing**\nInfluenza has antiviral treatment that only works if started early. COVID has its own management. Viral bronchitis does not improve with an antibiotic, and taking one \"just in case\" only breeds resistance. Knowing which it is changes the treatment from day one.\n\n**What we do**\n- Rapid **influenza A and B** test\n- Rapid **COVID-19** test\n- **Strep** test when the picture points to the throat\n- Examination of throat, ears and lungs\n- Treatment and prescription based on the result\n\n**When to come the same day**\nHigh fever that will not break, severe sore throat, cough with colored phlegm, chest pain when breathing, or symptoms that have gone more than a week without improving.\n\n**When to go to an ER instead**\nReal difficulty breathing, bluish lips or nails, confusion, or high fever in a baby under three months. That is not for a clinic.\n\n**If it comes back every season**\nA cough that returns every spring or whenever the weather shifts is often not an infection — it is allergy. If that is your case, it gets worked up as allergy, not as flu.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de influenza A y B",
      "Prueba rápida de COVID-19",
      "Resultado y tratamiento el mismo día",
      "Exploración de garganta, oídos y pulmones"
    ],
    "featuresEn": [
      "Rapid influenza A and B test",
      "Rapid COVID-19 test",
      "Result and treatment the same day",
      "Throat, ear and lung examination"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Chequeos físicos para la escuela y para deportes en Clínica Hispana Airline, **sin cita** y con el formulario completado antes de que se vaya. Traiga el papel del distrito o del equipo: lo llenamos y lo firmamos en la visita.\n\n**Qué revisa el examen deportivo**\nNo es un trámite. Lo que se busca, sobre todo, es detectar lo que podría dar un problema durante el esfuerzo:\n\n- **Historial familiar de problemas cardiacos**, que es la pregunta más importante de todo el formulario\n- Presión arterial, pulso y auscultación del corazón\n- Vista y oído\n- Columna, articulaciones y lesiones previas mal curadas\n- Peso, talla y desarrollo\n\nSi el historial familiar o la exploración levantan una duda cardiaca, se lo decimos y orientamos la referencia antes de autorizar el deporte.\n\n**Para la escuela**\nRevisión general, vacunas al día y el formulario del distrito completo. Si faltan vacunas, se aplican en la misma visita: ver [vacunas](/services/vacunas).\n\n**Venga preparado**\n- El **formulario** de la escuela o del equipo, si ya se lo dieron\n- La **cartilla de vacunas**\n- Lentes o audífono si los usa\n- Lista de medicamentos y de alergias\n\n**La mejor época para hacerlo**\nAntes de que empiece la temporada, no la semana en que arranca. En agosto se llenan todas las clínicas de Houston con el mismo trámite y la espera se dispara.",
    "longDescriptionEn": "School and sports physicals at Clínica Hispana Airline, **walk-in**, with the form completed before you leave. Bring the district or team paperwork: we fill it in and sign it during the visit.\n\n**What a sports physical checks**\nIt is not a formality. What it is mostly looking for is anything that could cause a problem during exertion:\n\n- **Family history of cardiac problems**, which is the single most important question on the form\n- Blood pressure, pulse and heart auscultation\n- Vision and hearing\n- Spine, joints and previous injuries that never healed properly\n- Weight, height and development\n\nIf family history or the exam raises a cardiac question, we tell you and help direct the referral before clearing the sport.\n\n**For school**\nGeneral check, vaccines up to date, and the district form completed. If vaccines are missing, they are given in the same visit: see [vaccines](/services/vacunas).\n\n**Come prepared**\n- The **form** from the school or team, if you already have it\n- The **vaccination record**\n- Glasses or hearing aid if used\n- A list of medications and allergies\n\n**The best time to come**\nBefore the season starts, not the week it begins. In August every clinic in Houston fills up with the same paperwork and the wait goes through the roof.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Formulario completado en la visita",
      "Revisión cardiaca y de historial familiar",
      "Vacunas al día en la misma cita",
      "Sin cita previa"
    ],
    "featuresEn": [
      "Form completed during the visit",
      "Cardiac and family history screening",
      "Vaccines brought up to date same visit",
      "Walk-in"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Ginecología en Houston: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "shortTitle": "Ginecología",
    "description": "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    "descriptionEn": "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Airline hacemos la atención ginecológica básica sin cita y en español: papanicolaou, cultivos vaginales y tratamiento de infecciones.\n\nConviene decirlo claro desde el principio: **la atención la da nuestro equipo médico general**, no hay ginecólogo titulado en plantilla. Hacemos los exámenes y tratamientos básicos y, cuando un resultado requiere especialista, se lo decimos y orientamos la referencia.\n\n**Papanicolaou: la frecuencia importa más que la urgencia**\nEl cáncer cervical tarda años en desarrollarse y empieza por cambios que la citología detecta **antes de que den síntomas**. Las pautas generales son cada 3 años entre los 21 y los 29, y entre los 30 y los 65 cada 3 años con citología o cada 5 con prueba de VPH. Si hubo un resultado anormal previo o hay factores de riesgo, la frecuencia cambia: eso se decide con su historial delante.\n\n**Cultivo vaginal: tratar en vez de adivinar**\nCuando hay flujo con olor o color distinto, picazón o ardor, el cultivo dice **qué** lo está causando. Es lo que decide el tratamiento: una infección por hongos y una vaginosis bacteriana se sienten parecido y se tratan distinto, y el tratamiento equivocado a veces empeora las cosas.\n\n**Qué no debe esperar al próximo chequeo**\n- Sangrado abundante fuera de la regla\n- Dolor pélvico que va en aumento\n- Fiebre con flujo de mal olor\n- Un bulto nuevo en la mama\n\nEso se revisa pronto.\n\n**Cómo es la consulta**\nExplicamos qué se va a hacer antes de hacerlo, con el tiempo que haga falta. Si necesita ultrasonido pélvico, se hace aquí mismo.",
    "longDescriptionEn": "At Clínica Hispana Airline we provide basic gynecological care walk-in, in Spanish or English: Pap smears, vaginal cultures and treatment of infections.\n\nWorth stating plainly up front: **care is provided by our general medical team** — there is no board-certified gynecologist on staff. We perform the basic exams and treatments, and when a result calls for a specialist, we tell you and help direct the referral.\n\n**Pap smears: frequency matters more than urgency**\nCervical cancer takes years to develop and begins with changes cytology detects **before there are any symptoms**. The general guidelines are every 3 years between ages 21 and 29, and between 30 and 65 every 3 years with cytology or every 5 with HPV testing. If you have had an abnormal result or carry risk factors, that schedule changes: it gets decided with your record in front of us.\n\n**Vaginal culture: treating instead of guessing**\nWhen there is discharge with a different smell or color, itching or burning, the culture tells you **what** is causing it. That determines the treatment: a yeast infection and bacterial vaginosis feel similar and are treated differently, and the wrong treatment sometimes makes things worse.\n\n**What should not wait for your next checkup**\n- Heavy bleeding outside your period\n- Pelvic pain that keeps increasing\n- Fever with foul-smelling discharge\n- A new lump in the breast\n\nThose get looked at soon.\n\n**What the visit is like**\nWe explain what we are going to do before doing it, taking whatever time is needed. If you need a pelvic ultrasound, it is done right here.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y prueba de VPH",
      "Cultivo vaginal para tratar con diagnóstico",
      "Tratamiento de infecciones",
      "Ultrasonido pélvico en la misma clínica"
    ],
    "featuresEn": [
      "Pap smear and HPV testing",
      "Vaginal culture to treat with a diagnosis",
      "Treatment of infections",
      "Pelvic ultrasound in the same clinic"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Airline realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Airline we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Airline te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Airline we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Airline lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Airline we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Examen de Próstata en Houston: PSA y Salud del Hombre",
    "titleEn": "Prostate Exam in Houston: PSA and Men's Health",
    "shortTitle": "Salud del Hombre",
    "description": "Examen de próstata en Houston, TX: antígeno prostático (PSA), laboratorio y chequeo general del hombre. En español, con precios accesibles.",
    "descriptionEn": "Men's health exams in Houston, TX: prostate-specific antigen (PSA), lab work and a general checkup. Care in Spanish, with affordable pricing.",
    "longDescription": "La salud del hombre muchas veces se posterga. En Clínica Hispana Airline facilitamos los exámenes que ayudan a detectar a tiempo cambios importantes, con resultados explicados en español.\n\n**¿Qué incluye?**\n- Examen de antígeno prostático (PSA)\n- Medición del nivel de testosterona\n- Chequeo general y de signos vitales\n- Evaluación de síntomas urinarios o de energía\n- Referencia a especialista si se requiere\n\n**Por qué es importante**\nEl PSA ayuda a vigilar la salud de la próstata y la testosterona influye en la energía, el ánimo y la salud general. Un control sencillo te da tranquilidad.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Men's health is often postponed. At Clínica Hispana Airline we make it easy to get the exams that help catch important changes early, with results explained in Spanish.\n\n**What's included?**\n- Prostate antigen (PSA) test\n- Testosterone level measurement\n- General checkup and vital signs\n- Evaluation of urinary or energy symptoms\n- Referral to a specialist if needed\n\n**Why it matters**\nPSA helps monitor prostate health, and testosterone influences energy, mood and overall health. A simple check gives you peace of mind.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examenes de prostata houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "prostate exam houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Exámenes y Análisis de Sangre en Houston: Laboratorio Clínico",
    "titleEn": "Blood Tests & Blood Work in Houston: Clinical Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX sin cita previa: biometría, química, glucosa, colesterol y más. Laboratorio clínico en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX, walk-ins welcome: CBC, chemistry, glucose, cholesterol and more. Clinical lab with results in Spanish, at affordable prices.",
    "longDescription": "En Clínica Hispana Airline puede hacerse análisis de sangre **sin cita y sin orden médica previa**. Si quiere revisar su glucosa o su colesterol, se lo hacemos; no hace falta que otro médico lo mande.\n\n**Qué panel mide qué**\n- **Glucosa y A1C.** La glucosa es una foto del momento; la A1C refleja su promedio de los últimos dos o tres meses y no se puede maquillar comiendo bien la víspera.\n- **Perfil de lípidos.** Colesterol total, LDL, HDL y triglicéridos. Lo que decide no es el total, sino la relación entre LDL y HDL.\n- **Panel metabólico.** Sodio, potasio, creatinina y enzimas hepáticas: cómo están trabajando riñón e hígado.\n- **Hemograma completo.** Glóbulos rojos, blancos y plaquetas. Detecta anemia e infecciones en curso.\n- **Tiroides (TSH).** Cansancio, cambios de peso, frío constante o caída de cabello que se achacan al estrés.\n\n**Ayuno: cuándo sí y cuándo no**\nPara **perfil de lípidos y glucosa en ayunas** sí, de 8 a 12 horas sin comer; agua sí puede tomar. Para **A1C, tiroides y hemograma** no hace falta. Ante la duda, venga en ayunas por la mañana: desayunar después siempre se puede, al revés no.\n\n**No suspenda su medicación** por su cuenta antes de un análisis. Pregúntenos primero.\n\n**Cuando estén los resultados**\nSe los explicamos en su idioma y, si ya se hizo análisis con nosotros, **los comparamos con los anteriores**. Esa comparación es lo que de verdad orienta: un colesterol de 210 significa una cosa si el año pasado tenía 240 y otra muy distinta si tenía 180.",
    "longDescriptionEn": "At Clínica Hispana Airline you can get blood work done **walk-in and with no prior doctor's order**. If you want your glucose or cholesterol checked, we will run it; nobody else has to send you.\n\n**What each panel measures**\n- **Glucose and A1C.** Glucose is a snapshot of the moment; A1C reflects your average over the past two to three months and cannot be dressed up by eating well the night before.\n- **Lipid panel.** Total cholesterol, LDL, HDL and triglycerides. What matters is not the total but the relationship between LDL and HDL.\n- **Metabolic panel.** Sodium, potassium, creatinine and liver enzymes: how your kidneys and liver are coping.\n- **Complete blood count.** Red cells, white cells and platelets. Picks up anemia and ongoing infection.\n- **Thyroid (TSH).** Fatigue, weight changes, constant cold or hair loss that get blamed on stress.\n\n**Fasting: when and when not**\nFor a **lipid panel and fasting glucose**, yes — 8 to 12 hours without food; water is fine. For **A1C, thyroid and complete blood count**, no. When in doubt, come fasting in the morning: you can always eat afterward, never the other way around.\n\n**Do not stop your medication** on your own before a test. Ask us first.\n\n**When results are ready**\nWe explain them in your language and, if you have tested with us before, **we compare them against your previous results**. That comparison is what actually guides decisions: a cholesterol of 210 means one thing if last year you were at 240, and something very different if you were at 180.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "examenes de sangre cerca de mi houston",
      "laboratorio clinico houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Sin orden médica previa",
      "Glucosa, A1C, lípidos y tiroides",
      "Comparación con sus análisis anteriores",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "No prior doctor's order needed",
      "Glucose, A1C, lipids and thyroid",
      "Compared against your previous results",
      "Results explained in your language"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, sin cita previa. Atención rápida en español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, walk-in. Prompt care in Spanish, with affordable pricing.",
    "longDescription": "El examen de orina ayuda a detectar infecciones urinarias y otras condiciones. En Clínica Hispana Airline te hacemos la prueba y, si hay infección, iniciamos el tratamiento sin demora.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis)\n- Evaluación de síntomas\n- Diagnóstico de infección urinaria\n- Tratamiento adecuado sin demora\n- Indicaciones para evitar que regrese\n\n**Síntomas frecuentes**\nArdor al orinar, ganas constantes de ir al baño, orina turbia o con mal olor y dolor en la parte baja del abdomen. No esperes: una infección sin tratar puede llegar a los riñones.\n\n**Tratamiento de infecciones urinarias en una clínica hispana cerca de ti**\nSomos una clínica hispana cerca de ti en Houston: te hacemos el examen de orina y, si hay infección, sales con tu tratamiento indicado, sin esperas, sin cita previa y en español.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "A urine test helps detect urinary infections and other conditions. At Clínica Hispana Airline we run the test and, if there's an infection, we start treatment without delay.\n\n**What's included?**\n- General urinalysis\n- Symptom evaluation\n- Diagnosis of urinary infection\n- Prompt, appropriate treatment\n- Tips to prevent it from coming back\n\n**Common symptoms**\nBurning when urinating, a constant urge to go, cloudy or foul-smelling urine and lower-abdomen pain. Don't wait: an untreated infection can reach the kidneys.\n\n**UTI treatment at a Hispanic clinic near you**\nWe are a Hispanic clinic near you in Houston: we run your urine test and, if there is an infection, you leave with treatment, no waiting, no appointment needed and in Spanish.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento sin demora",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Airline realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Airline we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Airline hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Airline we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Airline la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Airline we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de ETS (STD) en Houston: Confidenciales y Sin Cita",
    "titleEn": "STD Testing in Houston: Walk-In, Confidential & Affordable",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX, sin cita previa. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential walk-in STD testing in Houston, TX. Private results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Pruebas de ETS **confidenciales y sin cita** en Clínica Hispana Airline. No hace falta explicar por qué viene ni traer a nadie: se registra, se hace la prueba y se va.\n\n**Por qué hacérselas aunque se sienta bien**\nBuena parte de las infecciones de transmisión sexual **no dan síntomas durante meses o años**, y mientras tanto se transmiten y pueden dejar secuelas. La clamidia y la gonorrea sin tratar son causa frecuente de infertilidad, y muchas mujeres se enteran cuando ya intentan embarazarse.\n\n**Qué se puede revisar**\n- VIH\n- Sífilis\n- Clamidia y gonorrea\n- Hepatitis B y C\n- Herpes, según el caso\n\n**Cuándo hacerse la prueba**\n- Al empezar una relación nueva, los dos\n- Si hubo una relación sin protección\n- Si su pareja recibió un resultado positivo\n- Si aparecen ardor al orinar, flujo distinto, llagas o verrugas\n- Como revisión periódica si tiene varias parejas\n\nHay un detalle importante: **hacerse la prueba demasiado pronto puede dar un negativo falso**. Cada infección tiene su periodo de ventana. Si el contacto fue hace pocos días, se lo decimos y le indicamos cuándo repetirla.\n\n**Si sale positivo**\nSe trata aquí lo que se puede tratar aquí, y se le explica qué significa el resultado sin rodeos. Si requiere seguimiento especializado, se lo decimos y orientamos la referencia. **Avise a su pareja**: tratar a uno solo casi siempre termina en reinfección.",
    "longDescriptionEn": "**Confidential, walk-in STD testing** at Clínica Hispana Airline. You do not have to explain why you came or bring anyone with you: you register, get tested, and leave.\n\n**Why test even if you feel fine**\nMany sexually transmitted infections **cause no symptoms for months or years**, and in the meantime they spread and can leave lasting damage. Untreated chlamydia and gonorrhea are a common cause of infertility, and many women find out only when they start trying to conceive.\n\n**What can be tested**\n- HIV\n- Syphilis\n- Chlamydia and gonorrhea\n- Hepatitis B and C\n- Herpes, depending on the case\n\n**When to get tested**\n- At the start of a new relationship, both of you\n- After unprotected sex\n- If your partner tested positive\n- If burning on urination, unusual discharge, sores or warts appear\n- As routine screening if you have multiple partners\n\nOne detail matters: **testing too early can produce a false negative**. Each infection has its own window period. If the exposure was only days ago, we tell you and let you know when to repeat it.\n\n**If a result is positive**\nWe treat what can be treated here, and we explain what the result means without talking around it. If it needs specialized follow-up, we say so and help direct the referral. **Tell your partner**: treating only one person almost always ends in reinfection.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Confidencial y sin cita",
      "VIH, sífilis, clamidia y gonorrea",
      "Orientación sobre el periodo de ventana",
      "Tratamiento de lo tratable aquí"
    ],
    "featuresEn": [
      "Confidential and walk-in",
      "HIV, syphilis, chlamydia and gonorrhea",
      "Guidance on window periods",
      "Treatment of what can be treated here"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Airline la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Airline we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG) en Houston: Rápido y a Precio Accesible",
    "titleEn": "Electrocardiogram (EKG) in Houston: Fast & Affordable",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX sin cita previa, rápido y sin dolor. Resultados y atención en español, con precio accesible.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, walk-ins welcome, fast and painless. Results and care in Spanish, at an affordable price.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica del corazón. Es rápido, no duele y en Clínica Hispana Airline se hace sin cita, con la lectura explicada en español.\n\n**Para qué sirve**\nUn EKG muestra el ritmo y la frecuencia del corazón, y deja ver arritmias, signos de un infarto pasado, crecimiento de las cavidades o alteraciones que acompañan a la presión alta de años. No detecta todo —hay problemas de corazón que un EKG en reposo no muestra— pero es el primer paso y el más accesible.\n\n**Cuándo conviene hacerlo**\n- Palpitaciones, sensación de que el corazón se salta latidos o va muy rápido\n- Mareos o desmayos\n- Falta de aire con esfuerzos que antes no la daban\n- Presión alta o diabetes de varios años, como revisión anual\n- Antes de ciertos exámenes de trabajo o preoperatorios\n- Antecedentes familiares de problemas cardiacos\n\n**Cómo es el estudio**\nSe colocan diez electrodos adhesivos en pecho, brazos y piernas, se registra menos de un minuto y se retiran. **No se siente nada**: el aparato solo escucha, no envía corriente. Toda la visita se resuelve en pocos minutos.\n\nPara que el trazo salga limpio conviene venir sin crema ni aceite en el pecho y estar en reposo un momento antes.\n\n**Qué pasa después**\nNuestro equipo médico le explica el resultado en el momento y lo relaciona con su presión, su glucosa y sus síntomas. Si el trazo muestra algo que requiere cardiólogo, se lo decimos con claridad y orientamos la referencia.",
    "longDescriptionEn": "An electrocardiogram (EKG) records the electrical activity of the heart. It is quick, painless, and at Clínica Hispana Airline it is done walk-in, with the reading explained in Spanish or English.\n\n**What it is for**\nAn EKG shows the heart's rhythm and rate, and reveals arrhythmias, signs of a past heart attack, enlargement of the chambers, or changes that come with years of high blood pressure. It does not catch everything — some heart problems do not show on a resting EKG — but it is the first and most accessible step.\n\n**When it makes sense**\n- Palpitations, the feeling that your heart skips beats or races\n- Dizziness or fainting\n- Shortness of breath on exertion that never used to cause it\n- High blood pressure or diabetes of several years, as an annual check\n- Before certain employment or pre-operative exams\n- Family history of heart problems\n\n**What the study is like**\nTen adhesive electrodes are placed on the chest, arms and legs, under a minute is recorded, and they come off. **You feel nothing**: the machine only listens, it sends no current. The whole visit takes a few minutes.\n\nFor a clean tracing, come without cream or oil on the chest and rest for a moment beforehand.\n\n**What happens next**\nOur medical team explains the result on the spot and relates it to your blood pressure, your glucose and your symptoms. If the tracing shows something that calls for a cardiologist, we say so plainly and help direct the referral.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "electrocardiograma precio houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Trazo de 12 derivaciones",
      "Sin dolor y sin corriente",
      "Resultado explicado en el momento",
      "Útil para exámenes de trabajo"
    ],
    "featuresEn": [
      "12-lead tracing",
      "Painless, no current sent",
      "Result explained on the spot",
      "Valid for employment exams"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecosonograma en Houston: Embarazo y Abdominal",
    "titleEn": "Ultrasound & Sonogram in Houston: Pregnancy & Abdominal",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecosonograma en Houston, TX sin cita previa: de embarazo, abdominal y pélvico. Atención en español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonogram in Houston, TX, walk-ins welcome: pregnancy, abdominal and pelvic. Care in Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido usa ondas de sonido, no radiación, para ver por dentro del cuerpo en tiempo real. En Clínica Hispana Airline lo hacemos sin cita y te explicamos lo que se ve mientras se hace, en español.\n\n**Qué estudios hacemos**\n- **De embarazo (ecosonograma):** confirmar el embarazo, ver latido, calcular semanas y seguir el desarrollo.\n- **Pélvico:** útero y ovarios, ante dolor pélvico, sangrados irregulares o sospecha de quistes o miomas.\n- **Abdominal:** hígado, vesícula, riñones, páncreas y bazo. Es el estudio que se pide ante dolor abdominal persistente o cálculos.\n- **Tiroides y tejidos blandos:** nódulos y bultos que se palpan.\n\n**Cómo prepararse**\nDepende del estudio y te lo decimos al llegar. Para el **abdominal** se recomienda no comer de 6 a 8 horas antes, porque la comida en el estómago y el gas intestinal tapan la imagen. Para el **pélvico y el de embarazo temprano**, al contrario: conviene llegar con la vejiga llena, porque la vejiga funciona como ventana acústica. Para tiroides y tejidos blandos no hace falta preparación.\n\nVenga con ropa cómoda y de dos piezas si puede, para no tener que cambiarse entero.\n\n**Cómo es el estudio**\nSe aplica un gel en la piel y se desliza el transductor. **No duele ni da calambres**, y el gel se limpia al terminar. Dura entre diez y veinte minutos según lo que se esté revisando.\n\nSi el estudio detecta algo que requiera un especialista, se lo decimos y orientamos la referencia. La interpretación y las indicaciones las da nuestro equipo médico, en español.",
    "longDescriptionEn": "Ultrasound uses sound waves, not radiation, to look inside the body in real time. At Clínica Hispana Airline we perform it walk-in, and we explain what we are seeing as we go, in Spanish or English.\n\n**Studies we perform**\n- **Pregnancy (sonogram):** confirm the pregnancy, see the heartbeat, date the weeks and follow development.\n- **Pelvic:** uterus and ovaries, for pelvic pain, irregular bleeding or suspected cysts or fibroids.\n- **Abdominal:** liver, gallbladder, kidneys, pancreas and spleen. This is the study ordered for persistent abdominal pain or stones.\n- **Thyroid and soft tissue:** nodules and lumps you can feel.\n\n**How to prepare**\nIt depends on the study, and we tell you when you arrive. For the **abdominal**, no food for 6 to 8 hours beforehand is recommended, because food in the stomach and intestinal gas block the image. For the **pelvic and early pregnancy** studies it is the opposite: come with a full bladder, which acts as an acoustic window. Thyroid and soft tissue need no preparation.\n\nWear comfortable two-piece clothing if you can, so you do not have to change completely.\n\n**What the study is like**\nGel is applied to the skin and the transducer glides over it. **It does not hurt and causes no cramping**, and the gel wipes off afterward. It takes ten to twenty minutes depending on what is being examined.\n\nIf the study finds something that calls for a specialist, we tell you and help direct the referral. Interpretation and instructions come from our medical team, in your language.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecosonograma houston",
      "ultrasonidos cerca de mi houston",
      "ultrasonido de embarazo houston",
      "ultrasonido sin cita houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido de embarazo y ecosonograma",
      "Pélvico, abdominal y de tiroides",
      "Sin radiación y sin dolor",
      "Resultados explicados en el momento"
    ],
    "featuresEn": [
      "Pregnancy ultrasound and sonogram",
      "Pelvic, abdominal and thyroid",
      "No radiation, no pain",
      "Findings explained on the spot"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT en Houston para Licencia CDL",
    "titleEn": "DOT Physical Exam in Houston for CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    "descriptionEn": "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    "longDescription": "Si manejas vehículos comerciales necesitas tu examen físico DOT vigente. En Clínica Hispana Airline lo realizamos de forma rápida y te entregamos tu certificado el mismo día.\n\n**¿Qué incluye?**\n- Revisión de visión y audición\n- Toma de presión arterial\n- Examen físico requerido por el DOT\n- Revisión de historial médico\n- Certificado médico DOT el mismo día\n\n**Para conductores comerciales**\nEl examen es obligatorio para obtener o renovar tu licencia CDL. Te explicamos cada paso en español y agilizamos el proceso para que vuelvas pronto a la carretera.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "If you drive commercial vehicles you need a current DOT physical exam. At Clínica Hispana Airline we perform it quickly and give you your certificate the same day.\n\n**What's included?**\n- Vision and hearing screening\n- Blood-pressure check\n- DOT-required physical exam\n- Medical-history review\n- Same-day DOT medical certificate\n\n**For commercial drivers**\nThe exam is required to obtain or renew your CDL license. We explain every step in Spanish and speed up the process so you get back on the road soon.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen medico dot cerca de mi houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693 en Houston (Green Card)",
    "titleEn": "Immigration Medical Exam I-693 in Houston (Green Card)",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS (civil surgeon). Proceso rápido y en español, vacunas en sitio y formulario sellado. Precios accesibles.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized civil surgeon. Fast, affordable, vaccines on site and sealed form for your green card.",
    "longDescription": "El examen médico de inmigración es el Formulario I-693 que USCIS pide en la mayoría de solicitudes de residencia. Solo lo puede completar un médico designado como **Civil Surgeon** por USCIS, y en Clínica Hispana Airline lo hacemos sin cita y todo el proceso en español.\n\n**Qué se revisa**\nEl I-693 no evalúa su salud en general. Comprueba lo que la ley de inmigración considera motivos de inadmisibilidad: enfermedades transmisibles de importancia para la salud pública, el registro de vacunación exigido, y ciertos trastornos o consumo de sustancias.\n\n**Qué incluye la visita**\n- Revisión de su historial médico y de las vacunas que traiga documentadas\n- Examen físico general\n- Prueba de tuberculosis, cutánea o en sangre según su edad e historial\n- Análisis de laboratorio requeridos\n- Aplicación en el sitio de las vacunas que falten\n- Entrega del formulario firmado en **sobre sellado**\n\n**Traiga su registro de vacunas**\nEs lo que más visitas repetidas evita. Sirve la cartilla de su país aunque esté en otro idioma y esté vieja: **cada vacuna que no pueda comprobar hay que repetirla**. Traiga también identificación con foto, el número de su caso si ya lo tiene, y los papeles de cualquier tratamiento previo de tuberculosis.\n\n**No abra el sobre**\nEl formulario se entrega cerrado y firmado. Si el sobre se abre, el documento pierde validez y hay que repetir el examen completo. Le damos además una copia para usted, que esa sí puede consultar.\n\nNosotros hacemos el examen médico. De su caso migratorio se encarga su abogado.",
    "longDescriptionEn": "The immigration medical exam is Form I-693, which USCIS requires for most permanent residence applications. Only a physician designated as a **Civil Surgeon** by USCIS can complete it, and at Clínica Hispana Airline we perform it walk-in, with the whole process available in Spanish.\n\n**What gets checked**\nThe I-693 does not assess your general health. It checks what immigration law treats as grounds of inadmissibility: communicable diseases of public health significance, the required vaccination record, and certain disorders or substance use.\n\n**What the visit includes**\n- Review of your medical history and of any documented vaccines you bring\n- General physical exam\n- Tuberculosis testing, skin or blood, depending on your age and history\n- Required lab work\n- On-site administration of any missing vaccines\n- The signed form handed to you in a **sealed envelope**\n\n**Bring your vaccination record**\nIt is what prevents repeat visits. Your card from your home country counts even if it is old and in another language: **every vaccine you cannot document has to be repeated**. Also bring photo identification, your case number if you have one, and paperwork from any previous tuberculosis treatment.\n\n**Do not open the envelope**\nThe form is handed over sealed and signed. If the envelope is opened, the document loses its validity and the entire exam has to be repeated. We also give you a copy for your own records, and that one you can read.\n\nWe perform the medical exam. Your immigration case belongs with your attorney.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico para inmigracion cerca de mi houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "green card medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado por USCIS (Civil Surgeon)",
      "Vacunas requeridas aplicadas en el sitio",
      "Prueba de tuberculosis incluida",
      "Formulario entregado en sobre sellado"
    ],
    "featuresEn": [
      "USCIS-designated Civil Surgeon",
      "Required vaccines administered on site",
      "Tuberculosis testing included",
      "Form handed over in a sealed envelope"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Aplicamos **vacuna contra la influenza y toxoide tetánico (Td/Tdap)** en Clínica Hispana Airline, sin cita y con la aplicación a cargo de personal médico.\n\n**Influenza**\nLa vacuna de la gripe se reformula cada temporada porque el virus cambia. Por eso **no sirve la del año pasado** y hay que repetirla cada otoño. Tarda unas dos semanas en hacer efecto, así que ponérsela antes de que empiece la temporada es lo que tiene sentido.\n\nNo causa gripe. Lo que algunos sienten un día o dos —brazo dolorido, algo de cansancio— es la respuesta normal del sistema inmune, no una infección.\n\n**Toxoide tetánico (Td / Tdap)**\nEl tétanos no se contagia de persona a persona: entra por heridas contaminadas con tierra, óxido o material sucio. El refuerzo se pone **cada 10 años**, y antes si tiene una herida profunda y hace más de cinco años de la última dosis.\n\nEs también la vacuna que piden muchos trabajos y trámites, y la que hace falta cuando alguien llega con una herida que requiere [curación o suturas](/services/suturas-heridas).\n\n**Para inmigración**\nEl examen I-693 exige un registro de vacunación completo. Las que falten se aplican durante ese proceso; vea [examen médico de inmigración](/services/examenes-inmigracion).\n\n**Traiga su cartilla**\nSi tiene registro de vacunas, tráigalo aunque sea de su país y esté en otro idioma. Evita repetir dosis que ya tiene puestas.",
    "longDescriptionEn": "We administer the **influenza vaccine and tetanus toxoid (Td/Tdap)** at Clínica Hispana Airline, walk-in, given by medical staff.\n\n**Influenza**\nThe flu shot is reformulated every season because the virus changes. That is why **last year's shot does not work** and it has to be repeated each fall. It takes about two weeks to take effect, so getting it before the season starts is what makes sense.\n\nIt does not cause the flu. What some people feel for a day or two — a sore arm, some tiredness — is the normal immune response, not an infection.\n\n**Tetanus toxoid (Td / Tdap)**\nTetanus does not spread from person to person: it enters through wounds contaminated with soil, rust or dirty material. The booster is given **every 10 years**, and sooner if you have a deep wound and it has been more than five years since your last dose.\n\nIt is also the vaccine many jobs and filings require, and the one needed when someone arrives with a wound that needs [wound care or sutures](/services/suturas-heridas).\n\n**For immigration**\nThe I-693 exam requires a complete vaccination record. Whatever is missing gets administered during that process; see [immigration medical exam](/services/examenes-inmigracion).\n\n**Bring your card**\nIf you have a vaccination record, bring it even if it is from your home country and in another language. It keeps you from repeating doses you already have.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Influenza, cada temporada",
      "Toxoide tetánico Td/Tdap",
      "Aplicación por personal médico",
      "Válidas para trabajo y trámites"
    ],
    "featuresEn": [
      "Influenza, every season",
      "Tetanus toxoid Td/Tdap",
      "Administered by medical staff",
      "Valid for work and filings"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Airline los aplicamos con personal médico y en un ambiente cómodo y seguro.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales\n- Aplicación y monitoreo por personal médico\n- Atención en español\n\n**Cuándo pueden ayudar**\nDespués de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Airline we administer them with medical staff in a comfortable, safe setting.\n\n**What's included?**\n- A brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals\n- Administration and monitoring by medical staff\n- Care in Spanish\n\n**When they can help**\nAfter a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Airline cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Airline we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Airline limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Airline we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Airline realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Airline we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una bolsa de pus bajo la piel. **No se cura con antibiótico solo**: hay que drenarlo. En Clínica Hispana Airline lo hacemos sin cita, con anestesia local y en la misma visita.\n\n**Cómo se reconoce**\nUna zona hinchada, roja, caliente y dolorosa, que va creciendo en días y se siente blanda o con líquido por dentro. A veces aparece un punto amarillento en el centro. Es distinto de una simple picadura o de un grano: el absceso duele cada vez más y no cede solo.\n\n**Por qué no basta con el antibiótico**\nEl antibiótico llega por la sangre, y dentro de la bolsa de pus prácticamente no hay circulación. Por eso un absceso tratado solo con pastillas suele seguir creciendo. El tratamiento es abrir, drenar y limpiar; el antibiótico, cuando hace falta, va después.\n\n**Cómo es el procedimiento**\nSe limpia la zona, se aplica **anestesia local**, se abre lo mínimo necesario, se drena y se lava por dentro. Según el tamaño puede dejarse una mecha para que siga drenando unos días. Todo se hace en la misma visita.\n\nEl alivio es casi inmediato: la mayor parte del dolor viene de la presión, y esa desaparece al drenar.\n\n**Cuidados después**\nLe explicamos cómo mantener la zona limpia, cuándo cambiar el apósito y qué señales vigilar. Si le dejamos mecha, se revisa a los pocos días.\n\n**Cuándo no esperar**\nFiebre, líneas rojas que se extienden desde la zona, o un absceso en la cara o cerca de los ojos. Eso se ve el mismo día.",
    "longDescriptionEn": "An abscess is a pocket of pus under the skin. **Antibiotics alone will not clear it**: it has to be drained. At Clínica Hispana Airline we do that walk-in, with local anesthesia, in the same visit.\n\n**How to recognize one**\nA swollen, red, hot and painful area that grows over days and feels soft or fluid-filled inside. Sometimes a yellowish point appears at the center. It is different from a bite or a pimple: an abscess hurts more and more and does not resolve on its own.\n\n**Why antibiotics are not enough**\nAntibiotics arrive through the bloodstream, and inside a pocket of pus there is almost no circulation. That is why an abscess treated with pills alone usually keeps growing. The treatment is to open, drain and clean it; antibiotics, when needed, come afterward.\n\n**What the procedure is like**\nThe area is cleaned, **local anesthesia** is applied, the smallest necessary opening is made, and the cavity is drained and washed out. Depending on size, packing may be left in so it keeps draining for a few days. It is all done in the same visit.\n\nRelief is almost immediate: most of the pain comes from pressure, and that goes away as soon as it drains.\n\n**Aftercare**\nWe explain how to keep the area clean, when to change the dressing and what warning signs to watch for. If packing is left in, it gets checked a few days later.\n\n**When not to wait**\nFever, red streaks spreading from the area, or an abscess on the face or near the eyes. That gets seen the same day.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje con anestesia local",
      "Resuelto en la misma visita",
      "Limpieza y cuidados explicados",
      "Revisión posterior si se deja mecha"
    ],
    "featuresEn": [
      "Drainage under local anesthesia",
      "Resolved in the same visit",
      "Cleaning and aftercare explained",
      "Follow-up if packing is left in"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Airline la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Airline we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    "descriptionEn": "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Airline puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana Airline?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 934 E Tidwell Rd, Houston, TX 77022, con horario de lunes a domingo de 9 AM a 9 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el norte de la ciudad: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana Airline you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- Your prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n- Prescription refills\n\n**Why use our pharmacy?**\nYou skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana Airline?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 934 E Tidwell Rd, Houston, TX 77022, open Monday through Sunday from 9 AM to 9 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire north side of the city: Northside, Independence Heights, Lindale Park, Near Northside, Acres Homes, Northline and nearby communities.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-general-completo",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Chequeo general completo con valor regular de $250, que incluye examen general de sangre, A1C, examen general de orina y consulta médica gratis.",
    blurbEn:
      "A complete general checkup with a regular value of $250, including a general blood test, A1C, a general urine test, and a free medical consultation.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood test",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-general-completo.webp",
    alt: "Promoción de chequeo general completo por $99 con examen de sangre, A1C, examen de orina y consulta médica gratis en Clínica Hispana Airline Houston",
    altEn: "Complete general checkup promotion for $99 with blood test, A1C, urine test and free medical consultation at Clínica Hispana Airline Houston",
    highlighted: true,
    order: 0,
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo Completo de la Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo de la mujer con ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "How long since your last women's health check? Complete women's checkup with pelvic ultrasound, Pap smear, urine test and a free medical consultation. Regular price $300, now only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis en Clínica Hispana Airline Houston",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear, urine test and free medical consultation at Clínica Hispana Airline Houston",
    order: 1,
  },
  {
    slug: "examen-completo-hombres",
    title: "Examen Completo para Hombres",
    titleEn: "Complete Checkup for Men",
    price: "$89",
    blurb:
      "Examen completo para hombres que evalúa la salud urinaria, de próstata y los niveles de testosterona, con consulta médica incluida sin costo.",
    blurbEn:
      "A complete checkup for men that evaluates urinary health, prostate health, and testosterone levels, with a medical consultation included at no cost.",
    includes: [
      "Examen de orina",
      "Examen de próstata",
      "Examen de testosterona",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Urine test",
      "Prostate test",
      "Testosterone test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-completo-hombres.webp",
    alt: "Promoción de examen completo para hombres por $89 con orina, próstata y testosterona en Clínica Hispana Airline Houston",
    altEn: "Complete checkup for men promotion for $89 with urine, prostate and testosterone tests at Clínica Hispana Airline Houston",
    highlighted: true,
    order: 2,
  },
  {
    slug: "chequeo-completo-mujer",
    title: "Chequeo Completo de Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$79",
    blurb:
      "Chequeo integral para la mujer que incluye examen de Papanicolaou, consulta ginecológica y orden de mamografía.",
    blurbEn:
      "A comprehensive women's checkup that includes a Pap smear, a gynecological consultation, and a mammogram order.",
    includes: [
      "Examen de Papanicolaou",
      "Consulta ginecológica",
      "Orden de mamografía",
    ],
    includesEn: [
      "Pap smear",
      "Gynecological consultation",
      "Mammogram order",
    ],
    image: "/images/promotions/chequeo-completo-mujer.webp",
    alt: "Promoción de chequeo completo de mujer por $79 con Papanicolaou, consulta ginecológica y orden de mamografía en Clínica Hispana Airline Houston",
    altEn: "Complete women's checkup promotion for $79 with Pap smear, gynecological consultation and mammogram order at Clínica Hispana Airline Houston",
    highlighted: true,
    order: 3,
  },
  {
    slug: "general-sangre-b12",
    title: "Examen General de Sangre + Vitamina B12",
    titleEn: "General Blood Test + Vitamin B12",
    price: "$99",
    blurb:
      "Examen general de sangre junto con una inyección de Vitamina B12 para apoyar tu energía y bienestar.",
    blurbEn:
      "A general blood test together with a Vitamin B12 injection to support your energy and well-being.",
    includes: [
      "Examen general de sangre",
      "Inyección de Vitamina B12",
      "Orientación sobre tus resultados",
    ],
    includesEn: [
      "General blood test",
      "Vitamin B12 injection",
      "Guidance on your results",
    ],
    image: "/images/promotions/general-sangre-b12.webp",
    alt: "Promoción de examen general de sangre más inyección de Vitamina B12 por $99 en Clínica Hispana Airline Houston",
    altEn: "General blood test plus Vitamin B12 injection promotion for $99 at Clínica Hispana Airline Houston",
    order: 4,
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "Evaluación para molestias íntimas como picazón, flujo o mal olor, con atención confidencial y personal femenino.",
    blurbEn:
      "An evaluation for intimate discomfort such as itching, discharge, or odor, with confidential care and female staff.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
    ],
    includesEn: [
      "Intimate culture test",
      "Medical consultation",
      "Free urine test",
    ],
    image: "/images/promotions/salud-intima-femenina.webp",
    alt: "Promoción de salud íntima femenina por $69 con cultivo íntimo, consulta médica y examen de orina en Clínica Hispana Airline Houston",
    altEn: "Women's intimate health promotion for $69 with intimate culture test, medical consultation and urine test at Clínica Hispana Airline Houston",
    order: 5,
  },
  {
    slug: "perfil-hormonal-masculino",
    title: "Perfil Hormonal Masculino",
    titleEn: "Male Hormone Profile",
    price: "$200",
    blurb:
      "Perfil hormonal para hombres que ayuda a evaluar señales como fatiga, cambios de ánimo, calidad del sueño, libido y composición corporal.",
    blurbEn:
      "A hormone profile for men that helps evaluate signs such as fatigue, mood changes, sleep quality, libido, and body composition.",
    includes: [
      "Evaluación de desequilibrios hormonales",
      "Revisión de fatiga y cansancio",
      "Evaluación de masa muscular y libido",
      "Resultados precisos con atención profesional",
    ],
    includesEn: [
      "Hormonal imbalance evaluation",
      "Fatigue and tiredness review",
      "Muscle mass and libido assessment",
      "Precise results with professional care",
    ],
    image: "/images/promotions/perfil-hormonal-masculino.webp",
    alt: "Promoción de perfil hormonal masculino por $200 en Clínica Hispana Airline Houston",
    altEn: "Male hormone profile promotion for $200 at Clínica Hispana Airline Houston",
    order: 6,
  },
  {
    slug: "diagnostico-ets",
    title: "Diagnóstico de Enfermedades de Transmisión Sexual",
    titleEn: "Sexually Transmitted Disease Diagnosis",
    price: "$249",
    blurb:
      "Diagnóstico completo para enfermedades de transmisión sexual, con evaluación médica y atención confidencial y profesional.",
    blurbEn:
      "A complete diagnosis for sexually transmitted diseases, with a medical evaluation and confidential, professional care.",
    includes: [
      "Evaluación médica",
      "Pruebas de laboratorio",
      "Atención confidencial",
    ],
    includesEn: [
      "Medical evaluation",
      "Laboratory testing",
      "Confidential care",
    ],
    image: "/images/promotions/diagnostico-ets.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $249 en Clínica Hispana Airline Houston",
    altEn: "Complete sexually transmitted disease diagnosis promotion for $249 at Clínica Hispana Airline Houston",
    order: 7,
  },
  {
    slug: "examen-dot",
    title: "Examen DOT",
    titleEn: "DOT Exam",
    price: null,
    blurb:
      "Examen médico DOT para conductores comerciales: rápido, con certificación oficial y atención en español.",
    blurbEn:
      "DOT medical exam for commercial drivers: fast, with official certification and service in Spanish.",
    includes: [
      "Examen rápido",
      "Certificación oficial",
      "Atención en español",
    ],
    includesEn: [
      "Fast exam",
      "Official certification",
      "Service in Spanish",
    ],
    image: "/images/promotions/examen-dot.webp",
    alt: "Promoción de examen médico DOT para conductores comerciales con certificación oficial en Clínica Hispana Airline Houston",
    altEn: "DOT medical exam promotion for commercial drivers with official certification at Clínica Hispana Airline Houston",
    order: 8,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.chronicCare", href: "/#chronic-care" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contact" },
];

