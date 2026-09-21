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
  // Está en la ficha de Google y faltaba aquí.
  instagram: "https://www.instagram.com/clinicahispanaairline",
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

/**
 * Última revisión del catálogo de servicios. Un servicio con `dateModified`
 * propio gana a este valor. Alimenta el `lastmod` del sitemap, el
 * `lastReviewed` del schema y la caja de revisión visible.
 */
export const SERVICES_LAST_REVIEWED = "2026-09-21";

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
    "longDescription": "La tiroides es una glándula pequeña en el cuello que regula el metabolismo. Cuando funciona de más o de menos, los síntomas se confunden con estrés, con la edad o con \"estar bajo de defensas\" durante años. En Clínica Hispana Airline la estudiamos con análisis de sangre, sin cita.\n\n**Cuando funciona de menos (hipotiroidismo)**\nCansancio que no se quita con descanso, subir de peso sin cambiar la alimentación, **sentir frío cuando nadie más lo siente**, piel seca, caída de cabello, estreñimiento, tristeza o lentitud mental. Es lo más frecuente, sobre todo en mujeres, y se instala tan despacio que cuesta notarlo.\n\n**Cuando funciona de más (hipertiroidismo)**\nNerviosismo, palpitaciones, perder peso comiendo igual o más, sudoración, temblor en las manos, dificultad para dormir.\n\n**Cómo se estudia**\nSe empieza por la **TSH**, que es la prueba más sensible, y según el resultado se amplía con T4 libre y T3. Si hay un bulto o la glándula se palpa crecida, se completa con [ultrasonido de tiroides](/services/ultrasonido). No hace falta ayuno para medir la TSH.\n\n**El tratamiento funciona bien, pero requiere control**\nEl hipotiroidismo se trata con hormona de reemplazo y la mayoría de las personas hace vida completamente normal. Lo que sí hace falta es **ajustar la dosis con análisis periódicos**: una dosis que servía hace dos años puede quedarse corta o pasarse.\n\n**Antes de asumir que es la tiroides**\nEl cansancio también viene de anemia, de B12 baja o de azúcar descontrolada. En una misma extracción se revisan todas. Ver [análisis de sangre](/services/examenes-sangre).",
    "longDescriptionEn": "The thyroid is a small gland in the neck that regulates metabolism. When it runs fast or slow, the symptoms get blamed on stress, on age or on \"being run down\" for years. At Clínica Hispana Airline we work it up with blood tests, walk-in.\n\n**When it runs slow (hypothyroidism)**\nFatigue that rest does not fix, gaining weight without changing your diet, **feeling cold when nobody else does**, dry skin, hair loss, constipation, low mood or mental sluggishness. It is the more common one, especially in women, and it settles in so gradually that it is hard to notice.\n\n**When it runs fast (hyperthyroidism)**\nRestlessness, palpitations, losing weight while eating the same or more, sweating, trembling hands, trouble sleeping.\n\n**How it is worked up**\nWe start with **TSH**, the most sensitive test, and expand to free T4 and T3 depending on the result. If there is a lump or the gland feels enlarged, we add a [thyroid ultrasound](/services/ultrasonido). No fasting is needed to measure TSH.\n\n**Treatment works well, but it needs monitoring**\nHypothyroidism is treated with replacement hormone and most people live completely normal lives. What it does require is **adjusting the dose with periodic lab work**: a dose that worked two years ago can end up too low or too high.\n\n**Before assuming it is the thyroid**\nFatigue also comes from anemia, low B12 or uncontrolled blood sugar. A single draw checks them all. See [blood tests](/services/examenes-sangre).",
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
      "TSH, T4 libre y T3",
      "Ultrasonido si se palpa un nódulo",
      "Ajuste de dosis con control periódico",
      "Sin ayuno para la TSH"
    ],
    "featuresEn": [
      "TSH, free T4 and T3",
      "Ultrasound if a nodule is felt",
      "Dose adjustment with periodic monitoring",
      "No fasting needed for TSH"
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
    "longDescription": "Prueba de embarazo en Clínica Hispana Airline, sin cita y con el resultado explicado en español.\n\n**Prueba de orina y prueba de sangre**\nLa de orina es la que se usa primero y detecta la hormona hCG a partir del retraso. La de **sangre** es más sensible: detecta el embarazo antes y, sobre todo, puede **medir la cantidad** de hormona, que es lo que sirve cuando hay dudas sobre cómo va evolucionando.\n\n**Cuándo hacérsela**\nLo más fiable es esperar al primer día de retraso. Antes de eso el nivel de hormona puede ser todavía demasiado bajo y salir un negativo aunque sí haya embarazo. Si la prueba sale negativa y el retraso continúa, **repítala en una semana**: es la recomendación más útil y la que más gente se salta.\n\n**Si sale positivo**\nLe orientamos sobre los siguientes pasos y, si lo desea, confirmamos y datamos el embarazo con [ultrasonido](/services/ultrasonido), que es lo que dice de cuántas semanas se trata y si el desarrollo va como debe.\n\n**Seguimiento del embarazo**\nHacemos el seguimiento básico y los controles que se pueden resolver en consulta. **No atendemos partos**: llegado el momento le orientamos la referencia.\n\n**Si sale negativo y el retraso sigue**\nUn retraso no siempre es embarazo. La tiroides, el estrés, cambios de peso y el síndrome de ovario poliquístico alteran el ciclo. Si se repite, conviene revisarlo con [análisis de sangre](/services/examenes-sangre) y [tiroides](/services/tiroides).\n\n**Confidencial**\nNo tiene que explicar por qué viene ni traer acompañante.",
    "longDescriptionEn": "Pregnancy testing at Clínica Hispana Airline, walk-in, with the result explained in your language.\n\n**Urine test and blood test**\nThe urine test is the first one used and detects hCG from the time your period is late. The **blood** test is more sensitive: it detects pregnancy earlier and, more importantly, can **measure the amount** of hormone, which is what helps when there are questions about how things are progressing.\n\n**When to test**\nThe most reliable point is the first day your period is late. Before that the hormone level may still be too low and give a negative even when you are pregnant. If the test is negative and your period still does not come, **repeat it in a week**: it is the most useful advice and the one most people skip.\n\n**If it is positive**\nWe explain the next steps and, if you wish, confirm and date the pregnancy with [ultrasound](/services/ultrasonido), which is what tells you how many weeks along you are and whether development is on track.\n\n**Pregnancy follow-up**\nWe provide basic follow-up and the checks that can be handled in a clinic visit. **We do not attend deliveries**: when the time comes we help direct the referral.\n\n**If it is negative and your period still has not come**\nA late period is not always pregnancy. Thyroid problems, stress, weight changes and polycystic ovary syndrome all disrupt the cycle. If it keeps happening, it is worth checking with [blood work](/services/examenes-sangre) and [thyroid testing](/services/tiroides).\n\n**Confidential**\nYou do not have to explain why you came or bring anyone with you.",
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
      "Prueba de orina y de sangre",
      "Confirmación por ultrasonido si la desea",
      "Confidencial y sin cita",
      "Orientación sobre los siguientes pasos"
    ],
    "featuresEn": [
      "Urine and blood testing",
      "Ultrasound confirmation if you want it",
      "Confidential and walk-in",
      "Guidance on next steps"
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
    "longDescription": "Orientación y tratamientos anticonceptivos en Clínica Hispana Airline, sin cita y en español. El objetivo de la consulta es que salga con el método que encaja **con su vida**, no con el que más se receta.\n\n**Qué manejamos**\n- **Pastillas anticonceptivas**, con valoración previa de si son adecuadas para usted\n- **Inyección anticonceptiva**\n- Orientación sobre otros métodos y sobre cuál conviene según su caso\n- [Extracción de implantes subdérmicos](/services/extraccion-implantes)\n\n**Lo que se valora antes de recetar**\nNo todos los métodos sirven para todas. Antes de recomendar se revisan su presión arterial, si fuma y su edad, si tiene migrañas con aura, antecedentes de coágulos y si está amamantando. Algunos de esos factores descartan los métodos con estrógeno, y es mejor saberlo antes que después.\n\n**La pregunta que más se repite**\n\"¿Cuál es el mejor?\" La respuesta honesta es que el mejor es **el que usted va a usar bien**. Una pastilla que se olvida tres veces al mes protege menos que una inyección puesta a tiempo. En la consulta hablamos de su rutina real, no de la ideal.\n\n**Efectos y ajustes**\nLos primeros meses puede haber sangrados irregulares o cambios leves; suele estabilizarse. Si no se estabiliza o le sienta mal, **se cambia**: no hay que aguantarse un método que no le funciona.\n\n**Lo que conviene decir claro**\nNingún anticonceptivo hormonal protege contra infecciones de transmisión sexual. Para eso, el preservativo y las [pruebas de ETS](/services/enfermedades-transmision-sexual).",
    "longDescriptionEn": "Contraceptive guidance and treatment at Clínica Hispana Airline, walk-in and in your language. The point of the visit is for you to leave with the method that fits **your life**, not the one most often prescribed.\n\n**What we handle**\n- **Birth control pills**, with prior assessment of whether they suit you\n- **Contraceptive injection**\n- Guidance on other methods and which one fits your case\n- [Subdermal implant removal](/services/extraccion-implantes)\n\n**What gets assessed before prescribing**\nNot every method suits everyone. Before recommending, we review your blood pressure, whether you smoke and your age, migraines with aura, a history of clots, and whether you are breastfeeding. Some of those rule out estrogen-containing methods, and it is better to know beforehand.\n\n**The most common question**\n\"Which one is best?\" The honest answer is that the best one is **the one you will actually use properly**. A pill forgotten three times a month protects less than an injection given on schedule. In the visit we talk about your real routine, not the ideal one.\n\n**Effects and adjustments**\nThe first few months can bring irregular bleeding or mild changes; it usually settles. If it does not settle or it does not agree with you, **it gets changed**: nobody should put up with a method that is not working.\n\n**Worth stating plainly**\nNo hormonal contraceptive protects against sexually transmitted infections. For that, condoms and [STD testing](/services/enfermedades-transmision-sexual).",
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
      "Pastillas e inyección",
      "Valoración previa de riesgos",
      "Cambio de método si no le funciona",
      "Extracción de implantes"
    ],
    "featuresEn": [
      "Pills and injection",
      "Prior risk assessment",
      "Method changed if it is not working",
      "Implant removal"
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
    "longDescription": "Extracción de implantes anticonceptivos subdérmicos en Clínica Hispana Airline, con **anestesia local** y resuelta en una sola visita. Es un servicio que muchas clínicas colocan y pocas retiran.\n\n**Cuándo toca retirarlo**\n- Cuando se cumple su periodo de duración\n- Si desea quedar embarazada\n- Si los efectos secundarios no le compensan\n- Si quiere cambiar de método\n\nNo hay que esperar a que caduque para quitarlo. Si el método no le está funcionando, se retira cuando usted decida.\n\n**Cómo es el procedimiento**\nSe localiza el implante bajo la piel del brazo, se adormece la zona con anestesia local, se hace una incisión pequeña y se retira. Se cierra y se cubre. **El procedimiento suele durar pocos minutos** y sale caminando.\n\nLo único que se siente es el pinchazo de la anestesia. Después, presión, no dolor.\n\n**Si quiere continuar con anticoncepción**\nSe puede hablar del siguiente método en la misma consulta, para que no quede un periodo sin cobertura. Ver [tratamientos anticonceptivos](/services/anticonceptivos).\n\n**Después de la extracción**\nMantener la zona limpia y seca, evitar esfuerzos con ese brazo unos días y vigilar signos de infección. Es normal que quede un moretón.\n\n**Sobre la fertilidad**\nEl efecto anticonceptivo del implante **termina al retirarlo**. Si no desea embarazo, conviene tener listo el siguiente método desde ese mismo día.\n\n**Si no se palpa bien**\nCuando el implante no se localiza con facilidad, no se insiste: se lo decimos y orientamos la referencia para que se localice con imagen antes de retirarlo.",
    "longDescriptionEn": "Removal of subdermal contraceptive implants at Clínica Hispana Airline, with **local anesthesia**, resolved in a single visit. Many clinics place them and few will take them out.\n\n**When it is time to remove it**\n- When its effective period is up\n- If you want to become pregnant\n- If the side effects are not worth it to you\n- If you want to switch methods\n\nYou do not have to wait for it to expire. If the method is not working for you, it comes out when you decide.\n\n**What the procedure is like**\nThe implant is located under the skin of the arm, the area is numbed with local anesthesia, a small incision is made and it is removed. The site is closed and covered. **The procedure usually takes a few minutes** and you walk out.\n\nThe only thing you feel is the anesthetic injection. After that, pressure, not pain.\n\n**If you want to continue with contraception**\nThe next method can be discussed in the same visit, so you are not left with a gap in coverage. See [contraceptive methods](/services/anticonceptivos).\n\n**After removal**\nKeep the area clean and dry, avoid straining that arm for a few days, and watch for signs of infection. Some bruising is normal.\n\n**About fertility**\nThe implant's contraceptive effect **ends when it is removed**. If you do not want to become pregnant, have the next method ready from that same day.\n\n**If it cannot be felt clearly**\nWhen an implant is not easily located, we do not press on: we tell you and help direct the referral so it can be located with imaging before removal.",
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
      "Anestesia local, pocos minutos",
      "En una sola visita",
      "Se puede iniciar otro método el mismo día",
      "Referencia si el implante no se localiza"
    ],
    "featuresEn": [
      "Local anesthesia, a few minutes",
      "Single visit",
      "Another method can start the same day",
      "Referral if the implant cannot be located"
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
    "longDescription": "Los hombres van al médico más tarde y por cosas más grandes. Los exámenes de esta página existen para romper eso: son rápidos, se hacen sin cita y detectan a tiempo lo que en unos años ya no tiene marcha atrás.\n\n**Antígeno prostático (PSA)**\nUn análisis de sangre que ayuda a vigilar la salud de la próstata. Un PSA alto **no significa cáncer**: también sube con la inflamación, con una infección reciente o con el crecimiento benigno que viene con la edad. Lo que dice un valor aislado es poco; lo que importa es cómo evoluciona.\n\nConviene hablarlo a partir de los 50, y antes si hay antecedentes familiares.\n\n**Síntomas urinarios que no son \"normales de la edad\"**\n- Levantarse varias veces por la noche a orinar\n- Chorro débil o que se corta\n- Sensación de no vaciar del todo\n- Urgencia repentina\n\nSe atribuyen a la edad y muchas veces tienen tratamiento. Ver también [infecciones urinarias](/services/infecciones-urinarias).\n\n**Chequeo general del hombre**\nPresión arterial, glucosa, colesterol, peso y valoración de síntomas. Es donde aparecen la diabetes y la hipertensión silenciosas, que son lo que de verdad acorta la vida de la mayoría.\n\n**Niveles hormonales**\nCuando el cuadro lo justifica, se valoran los niveles de testosterona junto con el resto del perfil. Se interpreta con sus síntomas y su analítica completa, no de forma aislada.\n\n**Referencia**\nSi un resultado requiere urólogo, se lo decimos y orientamos la referencia. La atención aquí la da nuestro equipo médico general.",
    "longDescriptionEn": "Men go to the doctor later and for bigger things. The exams on this page exist to break that pattern: they are quick, walk-in, and they catch in time what in a few years no longer reverses.\n\n**Prostate-specific antigen (PSA)**\nA blood test that helps monitor prostate health. An elevated PSA **does not mean cancer**: it also rises with inflammation, a recent infection, or the benign enlargement that comes with age. A single value says little; what matters is how it evolves.\n\nIt is worth discussing from age 50, and earlier if there is family history.\n\n**Urinary symptoms that are not \"just age\"**\n- Getting up several times a night to urinate\n- A weak stream, or one that stops and starts\n- The feeling of not emptying completely\n- Sudden urgency\n\nThey get blamed on age and often have treatment. See also [urinary infections](/services/infecciones-urinarias).\n\n**General men's checkup**\nBlood pressure, glucose, cholesterol, weight and symptom assessment. This is where silent diabetes and hypertension show up, and those are what actually shorten most men's lives.\n\n**Hormone levels**\nWhen the clinical picture justifies it, testosterone levels are assessed alongside the rest of the profile. It is interpreted with your symptoms and your full lab work, not in isolation.\n\n**Referral**\nIf a result calls for a urologist, we tell you and help direct the referral. Care here is provided by our general medical team.",
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
      "Valoración de síntomas urinarios",
      "Chequeo general con laboratorio",
      "Referencia al especialista si se requiere"
    ],
    "featuresEn": [
      "Prostate-specific antigen (PSA)",
      "Urinary symptom assessment",
      "General checkup with lab work",
      "Specialist referral when required"
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
    "longDescription": "Examen de orina y tratamiento de infecciones urinarias en Clínica Hispana Airline, **sin cita previa** y con atención rápida en español.\n\n**Los síntomas típicos**\nArdor al orinar, ganas constantes de ir aunque salga poco, orina turbia o con olor fuerte, molestia en la parte baja del abdomen. En mujeres es una de las consultas más frecuentes; en hombres es menos común y **siempre conviene estudiarla mejor**, porque suele haber una causa detrás.\n\n**Por qué se hace el examen y no se trata a ciegas**\nEl examen de orina confirma que hay infección y orienta el antibiótico adecuado. Tratar sin analizar es lo que lleva a tomar el medicamento equivocado, a que los síntomas vuelvan a las dos semanas y a que la bacteria se haga resistente.\n\n**Cuándo no esperar**\nSi aparece **dolor en la espalda baja o en el costado, fiebre o escalofríos**, la infección puede haber subido a los riñones. Eso ya no es una cistitis simple y se atiende de inmediato.\n\n**Si se repiten**\nTres o más infecciones al año no es normal y no se resuelve repitiendo antibiótico. Conviene buscar la causa: control de la glucosa, hábitos, o en hombres un estudio de próstata. Ver [control de condiciones crónicas](/services/condiciones-cronicas) y [exámenes de salud del hombre](/services/salud-hombre).\n\n**Lo que sí ayuda**\nBeber agua de verdad —no solo cuando ya duele—, no aguantarse las ganas, y terminar el antibiótico completo aunque el ardor desaparezca al segundo día. Los remedios de arándano no sustituyen al tratamiento.",
    "longDescriptionEn": "Urinalysis and treatment of urinary infections at Clínica Hispana Airline, **walk-in**, with prompt care in Spanish or English.\n\n**The typical symptoms**\nBurning when you urinate, a constant urge to go even when little comes out, cloudy or strong-smelling urine, discomfort in the lower abdomen. In women it is one of the most common visits; in men it is less common and **always worth looking into further**, because there is usually a cause behind it.\n\n**Why we test instead of treating blind**\nThe urine test confirms there is an infection and points to the right antibiotic. Treating without testing is what leads to the wrong medication, symptoms returning two weeks later, and bacteria becoming resistant.\n\n**When not to wait**\nIf **lower back or flank pain, fever or chills** appear, the infection may have moved up to the kidneys. That is no longer simple cystitis and is attended to immediately.\n\n**If they keep coming back**\nThree or more infections a year is not normal and does not get solved by repeating antibiotics. It is worth finding the cause: glucose control, habits, or in men a prostate workup. See [chronic condition care](/services/condiciones-cronicas) and [men's health exams](/services/salud-hombre).\n\n**What actually helps**\nDrinking water properly — not only once it already hurts — not holding it in, and finishing the full antibiotic course even if the burning stops on day two. Cranberry remedies do not replace treatment.",
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
      "Examen de orina para tratar con diagnóstico",
      "Atención sin cita previa",
      "Estudio de las infecciones que se repiten",
      "Señales de alarma explicadas"
    ],
    "featuresEn": [
      "Urinalysis to treat with a diagnosis",
      "Walk-in care",
      "Workup for recurring infections",
      "Warning signs explained"
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
    "longDescription": "El examen de heces busca lo que un análisis de sangre no ve: **parásitos, sus huevos, bacterias y sangre oculta** en el tubo digestivo. En Clínica Hispana Airline se hace sin cita.\n\n**Cuándo tiene sentido**\n- Diarrea que dura más de unos días o que va y viene\n- Dolor abdominal o cólicos sin causa clara\n- Pérdida de peso sin explicación\n- Picazón anal, sobre todo en niños\n- Después de un viaje o de tomar agua de procedencia dudosa\n- Cansancio con anemia, que puede venir de un sangrado digestivo lento\n\n**Qué se puede detectar**\n- **Parásitos y huevos:** giardia, amebas, oxiuros y otros\n- **Sangre oculta:** sangrado que no se ve a simple vista\n- **Bacterias** causantes de infección intestinal\n- Grasa en heces, que orienta a problemas de absorción\n\n**Por qué importa tratarlo bien**\nLos parásitos intestinales son frecuentes y muchas veces se tratan \"a ojo\", con el remedio que alguien recomendó. El problema es que no todos responden al mismo medicamento: identificar cuál es evita meses de tratamiento equivocado y de síntomas que vuelven.\n\n**Cómo se recoge la muestra**\nLe damos el recipiente y las instrucciones. Algunos estudios piden más de una muestra en días distintos, porque los parásitos no se eliminan de forma continua y una sola muestra puede salir negativa aunque sí los haya. Si es su caso, se lo explicamos al entregarle el recipiente.\n\n**En niños**\nEs de los estudios más útiles en la infancia. Si hay picazón anal nocturna o dolor de barriga que se repite, conviene hacerlo.",
    "longDescriptionEn": "A stool test looks for what blood work cannot see: **parasites, their eggs, bacteria and occult blood** in the digestive tract. At Clínica Hispana Airline it is done walk-in.\n\n**When it makes sense**\n- Diarrhea lasting more than a few days, or that comes and goes\n- Abdominal pain or cramping with no clear cause\n- Unexplained weight loss\n- Anal itching, especially in children\n- After travel or drinking water of uncertain origin\n- Fatigue with anemia, which can come from slow digestive bleeding\n\n**What it can detect**\n- **Parasites and eggs:** giardia, amoebas, pinworms and others\n- **Occult blood:** bleeding not visible to the naked eye\n- **Bacteria** causing intestinal infection\n- Fat in stool, which points to absorption problems\n\n**Why treating it correctly matters**\nIntestinal parasites are common and often get treated by guesswork, with whatever remedy someone recommended. The problem is that they do not all respond to the same medication: identifying which one you have prevents months of wrong treatment and returning symptoms.\n\n**How the sample is collected**\nWe give you the container and the instructions. Some studies call for more than one sample on different days, because parasites are not shed continuously and a single sample can come back negative even when they are present. If that applies, we explain it when we hand you the container.\n\n**In children**\nIt is one of the most useful studies in childhood. If there is nighttime anal itching or recurring stomach pain, it is worth doing.",
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
      "Parásitos, huevos y bacterias",
      "Detección de sangre oculta",
      "Instrucciones claras de recogida",
      "Muy útil en niños"
    ],
    "featuresEn": [
      "Parasites, eggs and bacteria",
      "Occult blood detection",
      "Clear collection instructions",
      "Especially useful in children"
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
    "longDescription": "No todo dolor de garganta es estreptococo, y esa es exactamente la razón de hacer la prueba. En Clínica Hispana Airline la hacemos sin cita y damos **resultado y tratamiento el mismo día**.\n\n**Por qué importa distinguirlo**\nLa mayoría de los dolores de garganta son **virales** y se curan solos: el antibiótico no les hace nada y solo genera resistencia. El estreptococo, en cambio, es bacteriano y **sí** necesita antibiótico, porque sin tratar puede complicarse. La prueba separa los dos casos en minutos.\n\n**Señales que apuntan a estreptococo**\n- Dolor de garganta intenso y de aparición brusca\n- Fiebre\n- Ganglios del cuello hinchados y dolorosos\n- Manchas blancas en las amígdalas\n- **Ausencia de tos**, que es un dato sorprendentemente útil\n\nCuanta más tos y más mocos, más probable que sea viral.\n\n**Cómo es la prueba**\nUn hisopo en la garganta, unos segundos. Es molesto pero muy breve y no requiere ninguna preparación.\n\n**Si sale positivo**\nSe inicia el antibiótico ese mismo día. **Complete el tratamiento entero** aunque a los dos días se sienta bien: dejarlo a medias es lo que permite las complicaciones que se quieren evitar. Deja de ser contagioso aproximadamente al día siguiente de empezar el antibiótico.\n\n**En niños**\nEs frecuente en edad escolar y se transmite con facilidad en el aula. Si un hermano lo tiene y otro empieza con dolor de garganta y fiebre, conviene revisarlo.",
    "longDescriptionEn": "Not every sore throat is strep, and that is exactly why the test exists. At Clínica Hispana Airline we run it walk-in and give **result and treatment the same day**.\n\n**Why telling them apart matters**\nMost sore throats are **viral** and clear on their own: antibiotics do nothing for them and only breed resistance. Strep, by contrast, is bacterial and **does** need an antibiotic, because untreated it can lead to complications. The test separates the two in minutes.\n\n**Signs that point to strep**\n- Severe sore throat that came on suddenly\n- Fever\n- Swollen, tender neck glands\n- White patches on the tonsils\n- **No cough**, which is a surprisingly useful clue\n\nThe more cough and congestion, the more likely it is viral.\n\n**What the test is like**\nA swab in the throat, a few seconds. Uncomfortable but very brief, and it needs no preparation.\n\n**If it is positive**\nThe antibiotic is started that same day. **Finish the whole course** even if you feel fine after two days: stopping halfway is what allows the complications you are trying to avoid. You stop being contagious roughly a day after starting the antibiotic.\n\n**In children**\nIt is common at school age and spreads easily in the classroom. If one sibling has it and another starts with a sore throat and fever, it is worth checking.",
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
      "Resultado y tratamiento el mismo día",
      "Distingue viral de bacteriano",
      "Hisopo rápido, sin preparación",
      "Frecuente en edad escolar"
    ],
    "featuresEn": [
      "Result and treatment the same day",
      "Tells viral from bacterial",
      "Quick swab, no preparation",
      "Common at school age"
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
    "longDescription": "Examen de tuberculosis en Clínica Hispana Airline, sin cita. Es el que piden para trabajo, escuela y trámites de inmigración.\n\n**Las dos formas de hacerlo**\n- **Prueba cutánea (PPD).** Se inyecta una pequeña cantidad bajo la piel del antebrazo y hay que **volver a las 48-72 horas** para que la lea alguien del equipo médico. No vale mirarla usted: se mide el endurecimiento, no el enrojecimiento, y esa diferencia es la que se interpreta mal en casa.\n- **Prueba de sangre (IGRA).** Una sola extracción, sin necesidad de volver. Es la indicada si le pusieron la vacuna **BCG**, porque esa vacuna puede hacer que la prueba cutánea salga positiva sin que haya infección.\n\nMucha gente vacunada con BCG en su país de origen se lleva un susto innecesario con el PPD. Si es su caso, dígalo antes y se elige la prueba adecuada.\n\n**Si sale positivo**\nUn resultado positivo significa contacto con la bacteria, **no necesariamente enfermedad activa**. La mayoría de las personas con una prueba positiva tienen infección latente: la bacteria está dormida, no da síntomas y no contagia. Para distinguir una cosa de otra se hace **radiografía de tórax** y se valoran los síntomas.\n\n**Importante:** si ya tuvo un PPD positivo alguna vez, **no hay que repetir la prueba cutánea**. Dígalo y se resuelve con otro estudio.\n\n**Para el examen de inmigración**\nVa incluida en el I-693. Ver [examen médico de inmigración](/services/examenes-inmigracion).",
    "longDescriptionEn": "Tuberculosis testing at Clínica Hispana Airline, walk-in. It is the test required for work, school and immigration filings.\n\n**The two ways to do it**\n- **Skin test (PPD).** A small amount is injected under the skin of the forearm, and you have to **come back in 48 to 72 hours** for someone on the medical team to read it. Reading it yourself does not count: what is measured is the firmness, not the redness, and that distinction is what gets misread at home.\n- **Blood test (IGRA).** A single draw, no return visit needed. It is the right choice if you were given the **BCG** vaccine, because that vaccine can make the skin test positive without there being any infection.\n\nMany people vaccinated with BCG in their home country get an unnecessary scare from a PPD. If that applies to you, say so beforehand and the right test gets chosen.\n\n**If it is positive**\nA positive result means contact with the bacteria, **not necessarily active disease**. Most people with a positive test have latent infection: the bacteria are dormant, cause no symptoms and are not contagious. To tell the two apart, a **chest X-ray** is done and symptoms are assessed.\n\n**Important:** if you have ever had a positive PPD, **the skin test should not be repeated**. Say so and it gets resolved with a different study.\n\n**For the immigration exam**\nIt is included in the I-693. See [immigration medical exam](/services/examenes-inmigracion).",
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
      "Prueba cutánea (PPD) y de sangre (IGRA)",
      "Lectura por personal médico",
      "Alternativa para vacunados con BCG",
      "Válida para trabajo, escuela e inmigración"
    ],
    "featuresEn": [
      "Skin test (PPD) and blood test (IGRA)",
      "Read by medical staff",
      "Alternative for those vaccinated with BCG",
      "Valid for work, school and immigration"
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
    "longDescription": "Exámenes de alcohol y drogas para empleo y trámites en Clínica Hispana Airline, sin cita y con la documentación que le pidan.\n\n**Para qué se piden**\n- Contratación y exámenes periódicos de empresa\n- Trámites laborales y administrativos\n- Solicitud de la propia persona\n\n**Qué debe traer**\n- **Identificación con foto.** Sin identificación válida no se puede procesar la muestra.\n- **El formulario o la carta de su empleador**, si se lo dieron. Ahí suele indicarse qué panel piden.\n- **La lista de sus medicamentos**, incluidos los de receta y los de venta libre.\n\nLo de los medicamentos importa más de lo que parece: varios de uso común pueden alterar el resultado. Declararlos antes evita tener que explicar después un resultado inesperado.\n\n**Cómo es el proceso**\nSe verifica su identidad, se recoge la muestra siguiendo el procedimiento de custodia y se procesa. Le entregamos el resultado con la documentación que su trámite requiera.\n\n**Alcohol**\nSe mide aparte del panel de drogas. Es una prueba distinta y hay que pedirla específicamente, así que **revise qué le está pidiendo su empleador** antes de venir: no es lo mismo un panel de drogas que una prueba de alcohol, aunque mucha gente las confunde.\n\n**Antes de venir**\nConsulte con su empleador qué panel exacto necesita y si hay alguna condición previa. Si viene con la carta, se lo resolvemos en la misma visita.",
    "longDescriptionEn": "Alcohol and drug testing for employment and filings at Clínica Hispana Airline, walk-in, with the documentation you are asked for.\n\n**Why they are requested**\n- Hiring and periodic company testing\n- Employment and administrative filings\n- Individual request\n\n**What to bring**\n- **Photo identification.** Without valid ID the sample cannot be processed.\n- **The form or letter from your employer**, if you were given one. It usually states which panel is required.\n- **A list of your medications**, prescription and over-the-counter alike.\n\nThe medication list matters more than it seems: several common ones can affect a result. Declaring them beforehand saves you from having to explain an unexpected result afterward.\n\n**How the process works**\nYour identity is verified, the sample is collected following chain-of-custody procedure, and it is processed. We give you the result with whatever documentation your filing requires.\n\n**Alcohol**\nIt is measured separately from the drug panel. It is a different test and has to be requested specifically, so **check what your employer is actually asking for** before you come: a drug panel and an alcohol test are not the same thing, though many people mix them up.\n\n**Before you come**\nCheck with your employer which exact panel you need and whether there are any prior conditions. If you bring the letter, we resolve it in the same visit.",
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
      "Para empleo y trámites",
      "Identificación con foto obligatoria",
      "Alcohol y panel de drogas por separado",
      "Documentación para su trámite"
    ],
    "featuresEn": [
      "For employment and filings",
      "Photo ID required",
      "Alcohol and drug panel are separate",
      "Documentation for your filing"
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
    "longDescription": "Examen físico DOT para licencia CDL en Clínica Hispana Airline, **sin cita** y con el **certificado el mismo día**.\n\n**Un DOT no se aprueba o se reprueba: se certifica por un plazo**, y ese plazo lo decide sobre todo su presión arterial. Por eso un conductor con la presión sin controlar acaba pagando el examen tres veces al año en lugar de una vez cada dos.\n\n**Qué se revisa**\nHistorial médico, visión, audición, presión arterial, examen físico y análisis de orina. Ese análisis **no es una prueba antidrogas**: busca proteína, azúcar y sangre, señales de problemas de riñón o de una diabetes sin diagnosticar. La prueba de drogas la pide su empleador y se hace aparte, en [exámenes de alcohol y drogas](/services/examen-alcohol-drogas).\n\n**Visión y audición**\nSe pide al menos 20/40 en cada ojo y en ambos juntos, con lentes si los usa, y un campo visual amplio. En audición, percibir un susurro forzado a corta distancia en al menos un oído o cumplir el umbral en audiometría. **Traiga sus lentes y su audífono puestos.**\n\n**Qué traer**\n- Licencia y su tarjeta médica anterior\n- Lentes o lentes de contacto, y audífono si usa\n- Lista completa de sus medicamentos, con dosis\n- Con apnea del sueño: el reporte de cumplimiento del CPAP\n- Con diabetes: sus últimos análisis, sobre todo la A1C\n- Tras un evento cardiaco o cirugía: el alta de su especialista\n\nTraer los papeles de una condición ya controlada es lo que marca la diferencia entre certificarse ese día y tener que volver.\n\n**Cómo llegar en mejores condiciones**\nSin café ni bebidas energéticas antes, habiendo dormido, y tomando su medicación como siempre. Dos cafés de camino pueden dejarle en un tramo de presión peor del que le corresponde.",
    "longDescriptionEn": "DOT physical exam for your CDL at Clínica Hispana Airline, **walk-in**, with the **certificate issued the same day**.\n\n**A DOT physical is not pass or fail — it is certified for a length of time**, and that length is decided mostly by your blood pressure. Which is why a driver with uncontrolled hypertension ends up paying for the exam three times a year instead of once every two.\n\n**What gets checked**\nMedical history, vision, hearing, blood pressure, physical exam and a urinalysis. That urinalysis **is not a drug test**: it looks for protein, sugar and blood, signs of kidney problems or undiagnosed diabetes. Drug testing is requested by your employer and done separately, under [alcohol and drug testing](/services/examen-alcohol-drogas).\n\n**Vision and hearing**\nAt least 20/40 in each eye and both together, with corrective lenses if you use them, plus a wide field of vision. For hearing, perceiving a forced whisper at close range in at least one ear, or meeting the audiometry threshold. **Wear your glasses and hearing aid in.**\n\n**What to bring**\n- Your license and previous medical card\n- Glasses or contacts, and hearing aid if you use one\n- A complete list of your medications, with doses\n- With sleep apnea: your CPAP compliance report\n- With diabetes: your recent lab work, especially your A1C\n- After a cardiac event or surgery: clearance from your specialist\n\nBringing documentation for a condition already under control is what separates getting certified that day from having to come back.\n\n**How to show up in better shape**\nNo coffee or energy drinks beforehand, having slept, and taking your medication as usual. Two coffees on the way can put you in a worse blood pressure tier than you actually belong in.",
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
      "Certificado el mismo día",
      "Sin cita previa",
      "Visión, audición y presión arterial",
      "Orientación si una condición requiere papeles"
    ],
    "featuresEn": [
      "Certificate issued the same day",
      "Walk-in",
      "Vision, hearing and blood pressure",
      "Guidance when a condition needs paperwork"
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
    "longDescription": "Aplicación de sueros vitaminados por vía intravenosa en Clínica Hispana Airline, con la aplicación a cargo de personal médico y en un entorno clínico.\n\n**Cómo es la sesión**\nSe coloca una vía en el brazo y el suero pasa lentamente mientras usted está sentado. Dura entre treinta y sesenta minutos. Puede leer, mirar el teléfono o simplemente esperar. Al terminar se retira la vía y se va.\n\n**Antes de aplicarlo revisamos si es adecuado para usted**\nNo es un servicio que se dé sin más. Se valoran su historial, sus medicamentos actuales y si hay condiciones que lo desaconsejen —problemas de riñón o de corazón, por ejemplo—. Si no es adecuado en su caso, se lo decimos.\n\n**Lo que conviene saber**\nSi lo que busca es resolver un cansancio que lleva meses, **el orden razonable es al revés**: primero medir. La anemia, la vitamina B12 baja, la tiroides y el azúcar descontrolado producen exactamente ese cansancio y se detectan con una extracción de sangre. Tratar sin medir deja la causa real sin atender.\n\nPor eso lo habitual aquí es empezar por [análisis de sangre y laboratorio](/services/examenes-sangre), y con el resultado delante decidir qué tiene sentido.\n\n**Seguridad**\nLa aplicación la hace personal médico, en clínica, y se vigila durante la sesión. Avise si ha tenido reacciones a algún medicamento intravenoso o si está embarazada.",
    "longDescriptionEn": "Intravenous vitamin infusions at Clínica Hispana Airline, administered by medical staff in a clinical setting.\n\n**What the session is like**\nA line is placed in your arm and the infusion runs slowly while you sit. It takes thirty to sixty minutes. You can read, use your phone or simply wait. When it finishes the line comes out and you leave.\n\n**Before administering it we check whether it suits you**\nThis is not a service given on request without review. We assess your history, your current medications and whether any condition makes it inadvisable — kidney or heart problems, for instance. If it is not appropriate in your case, we tell you.\n\n**Worth knowing**\nIf what you are after is resolving months of fatigue, **the sensible order is the other way around**: measure first. Anemia, low vitamin B12, thyroid problems and uncontrolled blood sugar produce exactly that fatigue, and a blood draw detects them. Treating without measuring leaves the real cause unattended.\n\nThat is why the usual path here is to start with [blood tests and lab work](/services/examenes-sangre), and decide what makes sense with the results in hand.\n\n**Safety**\nAdministration is by medical staff, in a clinic, with monitoring during the session. Tell us if you have reacted to any intravenous medication before or if you are pregnant.",
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
      "Aplicación por personal médico",
      "Valoración previa de si es adecuado",
      "Sesión de 30 a 60 minutos",
      "Recomendamos medir antes con análisis"
    ],
    "featuresEn": [
      "Administered by medical staff",
      "Prior assessment of suitability",
      "30 to 60 minute session",
      "We recommend testing first"
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
    "longDescription": "Suturas en Clínica Hispana Airline, sin cita y con anestesia local. Si la herida necesita puntos, conviene no dejar pasar el tiempo.\n\n**Cuándo una herida necesita puntos**\n- Los bordes **no se juntan solos** al acercarlos\n- Mide más de dos centímetros o es profunda\n- Está en una zona que se mueve mucho: una articulación, una mano\n- Sangra de forma persistente\n- Está en la cara y el resultado estético importa\n\n**La ventana de tiempo importa**\nUna herida se sutura mejor **dentro de las primeras horas**. Pasado ese margen sube el riesgo de infección al cerrarla y a veces ya no conviene suturar, sino dejarla cerrar sola con curaciones. Por eso, si duda, venga pronto: se decide mejor con la herida reciente.\n\n**Cómo es el procedimiento**\nSe limpia a fondo, se aplica **anestesia local** y se cierra con el material adecuado a la zona. En la cara se usa hilo más fino y se retira antes, para que la marca sea menor.\n\n**Cuándo se quitan los puntos**\nDepende de dónde estén: en la cara a los pocos días, en zonas de más tensión bastante más tarde. Se lo decimos al terminar y la retirada la hacemos aquí.\n\n**Cuidados**\nMantener seco las primeras horas, cambiar el apósito como se le indique y no forzar la zona. Si aparece dolor creciente, enrojecimiento que se extiende, pus o fiebre, vuelva antes de la fecha prevista.\n\n**Tétanos**\nSi la herida es profunda o sucia y hace más de cinco años de su última dosis, se pone el refuerzo en la misma visita.",
    "longDescriptionEn": "Sutures at Clínica Hispana Airline, walk-in, with local anesthesia. If a wound needs stitches, it is best not to let time pass.\n\n**When a wound needs stitches**\n- The edges **do not stay together** when you bring them close\n- It is more than about an inch long, or deep\n- It is in an area that moves a lot: a joint, a hand\n- It bleeds persistently\n- It is on the face and the cosmetic result matters\n\n**The time window matters**\nA wound is best sutured **within the first few hours**. Past that margin the risk of infection from closing it rises, and sometimes it is better not to suture at all but to let it close with dressings. So if in doubt, come early: the decision is better made with a fresh wound.\n\n**What the procedure is like**\nIt is thoroughly cleaned, **local anesthesia** is applied, and it is closed with material suited to the area. On the face a finer suture is used and removed sooner, so the mark is smaller.\n\n**When stitches come out**\nIt depends where they are: on the face after a few days, in higher-tension areas considerably later. We tell you when we finish, and removal is done here.\n\n**Aftercare**\nKeep it dry for the first hours, change the dressing as instructed, and do not strain the area. If increasing pain, spreading redness, pus or fever appear, come back before your scheduled date.\n\n**Tetanus**\nIf the wound is deep or dirty and it has been more than five years since your last dose, the booster is given in the same visit.",
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
      "Anestesia local",
      "Material adecuado a cada zona",
      "Retirada de puntos en la clínica",
      "Refuerzo de tétanos si corresponde"
    ],
    "featuresEn": [
      "Local anesthesia",
      "Suture material suited to each area",
      "Stitch removal at the clinic",
      "Tetanus booster when applicable"
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
    "longDescription": "Curación de heridas en Clínica Hispana Airline, sin cita. Una herida bien limpiada y bien cubierta cicatriza mejor, más rápido y deja menos marca.\n\n**Qué hacemos**\n- Limpieza y desinfección a fondo, que es el paso que más se descuida en casa\n- Retirada de tierra, grava o restos que quedan dentro sin que se vean\n- Valoración de si necesita [suturas](/services/suturas-heridas)\n- Apósito adecuado al tipo de herida\n- Refuerzo de **tétanos** si hace más de cinco años de la última dosis y la herida es profunda o sucia\n- Revisión de la evolución cuando hace falta\n\n**Por qué no basta con agua y una curita**\nEl problema no suele ser la herida en sí, sino lo que queda dentro. Una herida que se cierra por encima con suciedad atrapada acaba en infección o en absceso una semana después. Limpiar bien al principio es lo que evita volver.\n\n**Señales de que se está infectando**\n- Dolor que aumenta en vez de disminuir a partir del segundo día\n- Enrojecimiento que se extiende\n- Calor y endurecimiento alrededor\n- Pus o mal olor\n- Fiebre\n- **Líneas rojas** que salen de la herida: eso se ve el mismo día\n\n**Heridas que necesitan más atención**\nLas de personas con **diabetes** cicatrizan peor y se complican con más facilidad, sobre todo en los pies. Si tiene diabetes y le sale una herida en el pie, aunque sea pequeña y no duela, revísela pronto: que no duela puede significar que el nervio ya no avisa.",
    "longDescriptionEn": "Wound care at Clínica Hispana Airline, walk-in. A wound that is properly cleaned and properly covered heals better, faster and leaves less of a mark.\n\n**What we do**\n- Thorough cleaning and disinfection, the step most often skipped at home\n- Removal of dirt, gravel or debris left inside where you cannot see it\n- Assessment of whether [sutures](/services/suturas-heridas) are needed\n- A dressing suited to the type of wound\n- A **tetanus** booster if it has been more than five years since your last dose and the wound is deep or dirty\n- Follow-up review when needed\n\n**Why water and a bandage are not enough**\nThe problem is usually not the wound itself but what stays inside it. A wound that closes over trapped dirt ends in infection or an abscess a week later. Cleaning it properly at the start is what keeps you from coming back.\n\n**Signs it is getting infected**\n- Pain that increases instead of easing from the second day on\n- Spreading redness\n- Heat and firmness around it\n- Pus or bad smell\n- Fever\n- **Red streaks** running from the wound: that gets seen the same day\n\n**Wounds that need closer attention**\nWounds in people with **diabetes** heal worse and get complicated more easily, especially on the feet. If you have diabetes and get a wound on your foot, even a small painless one, have it looked at soon: painless can mean the nerve no longer warns you.",
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
      "Limpieza y desinfección a fondo",
      "Valoración de suturas",
      "Refuerzo de tétanos si corresponde",
      "Atención especial en pacientes diabéticos"
    ],
    "featuresEn": [
      "Thorough cleaning and disinfection",
      "Assessment for sutures",
      "Tetanus booster when applicable",
      "Extra attention for diabetic patients"
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
    "longDescription": "Procedimientos menores ambulatorios en Clínica Hispana Airline, con **anestesia local** y resueltos en una sola visita. No hace falta hospital ni quirófano para lo que se puede hacer bien en consulta.\n\n**Qué hacemos**\n- Extirpación de **lipomas** y quistes sebáceos\n- Retirada de **verrugas**, lunares y lesiones pequeñas de piel\n- **Drenaje de abscesos** y forúnculos\n- Extracción de cuerpos extraños: astillas, vidrio, anzuelos\n- [Uñas encarnadas](/services/unas-encarnadas)\n- [Suturas](/services/suturas-heridas) de heridas\n\n**Cómo es una visita**\nSe valora la lesión, se le explica qué se va a hacer y cuánto cuesta **antes** de empezar, se aplica anestesia local y se realiza el procedimiento. Sale caminando y con las indicaciones por escrito.\n\n**Anestesia local: lo que se siente**\nEl único momento molesto es el pinchazo de la anestesia, unos segundos. Después no se siente dolor, solo presión o movimiento. No se duerme ni necesita acompañante para volver a casa.\n\n**Antes de venir**\nAvísenos si toma **anticoagulantes** —incluida la aspirina diaria—, si es alérgico a algún anestésico o si tiene diabetes, porque cambia la preparación y los cuidados posteriores.\n\n**Una cosa que conviene decir**\nSi la lesión tiene un aspecto que no encaja con lo habitual, no la quitamos sin más: se lo decimos y orientamos la referencia al especialista. Quitar algo que debía estudiarse es peor que no quitarlo.",
    "longDescriptionEn": "Minor outpatient procedures at Clínica Hispana Airline, with **local anesthesia**, resolved in a single visit. You do not need a hospital or an operating room for what can be done properly in a clinic.\n\n**What we do**\n- Removal of **lipomas** and sebaceous cysts\n- Removal of **warts**, moles and small skin lesions\n- **Abscess** and boil drainage\n- Foreign body extraction: splinters, glass, fish hooks\n- [Ingrown toenails](/services/unas-encarnadas)\n- Wound [sutures](/services/suturas-heridas)\n\n**What a visit is like**\nThe lesion is assessed, we explain what will be done and what it costs **before** starting, local anesthesia is applied, and the procedure is performed. You walk out with written instructions.\n\n**Local anesthesia: what you feel**\nThe only uncomfortable moment is the anesthetic injection, a few seconds. After that there is no pain, only pressure or movement. You are not put to sleep and you do not need someone to drive you home.\n\n**Before you come**\nTell us if you take **blood thinners** — including daily aspirin — if you are allergic to any anesthetic, or if you have diabetes, because it changes both the preparation and the aftercare.\n\n**One thing worth saying**\nIf a lesion looks unusual, we do not simply remove it: we tell you and help direct the referral to a specialist. Removing something that should have been studied is worse than not removing it.",
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
      "Anestesia local, en una visita",
      "Lipomas, quistes y verrugas",
      "Precio explicado antes de empezar",
      "Referencia si la lesión debe estudiarse"
    ],
    "featuresEn": [
      "Local anesthesia, single visit",
      "Lipomas, cysts and warts",
      "Price explained before starting",
      "Referral if a lesion should be studied"
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
    "longDescription": "La uña encarnada duele mucho para lo pequeña que es. En Clínica Hispana Airline se resuelve en una visita, con **anestesia local**, y el alivio es inmediato.\n\n**Qué la provoca**\n- Cortar la uña **redondeada en las esquinas** en lugar de recta. Es la causa más frecuente y la más fácil de corregir.\n- Zapatos estrechos o puntiagudos\n- Golpes o uñas gruesas\n- Cortar demasiado corto\n\n**Por qué empeora si se espera**\nEl borde de la uña se clava en la piel, la piel se inflama, y al inflamarse aprieta más contra la uña. Es un círculo que no se rompe solo: por eso una uña encarnada que lleva semanas suele acabar con pus y tejido de más alrededor.\n\n**Cómo se resuelve**\nSe adormece el dedo con anestesia local y se retira la porción de uña que se está clavando, no la uña entera. Si el problema se repite, se puede tratar además la matriz de esa porción para que no vuelva a crecer hacia dentro.\n\nDuele el pinchazo de la anestesia y poco más. **El alivio es inmediato**, porque la mayor parte del dolor viene de la presión.\n\n**Después**\nLe explicamos cómo mantener el dedo limpio y seco, cuándo cambiar el apósito y cómo cortar la uña de ahora en adelante: **recta, sin redondear las esquinas**. Ese consejo es el que evita la recaída.\n\n**Si tiene diabetes**\nNo se la trate en casa ni la deje pasar. Cualquier lesión en el pie de una persona diabética merece revisión, aunque parezca pequeña.",
    "longDescriptionEn": "An ingrown toenail hurts a great deal for something so small. At Clínica Hispana Airline it is resolved in one visit, with **local anesthesia**, and the relief is immediate.\n\n**What causes it**\n- Cutting the nail **rounded at the corners** instead of straight across. It is the most common cause and the easiest to correct.\n- Narrow or pointed shoes\n- Trauma or thick nails\n- Cutting too short\n\n**Why waiting makes it worse**\nThe edge of the nail digs into the skin, the skin swells, and swelling presses it harder against the nail. It is a loop that does not break on its own: that is why an ingrown nail left for weeks usually ends with pus and overgrown tissue around it.\n\n**How it is resolved**\nThe toe is numbed with local anesthesia and the portion of nail that is digging in is removed — not the whole nail. If the problem keeps returning, the matrix of that portion can also be treated so it stops growing inward.\n\nThe anesthetic injection stings and little else. **Relief is immediate**, because most of the pain comes from pressure.\n\n**Afterward**\nWe explain how to keep the toe clean and dry, when to change the dressing, and how to cut the nail from now on: **straight across, without rounding the corners**. That advice is what prevents a relapse.\n\n**If you have diabetes**\nDo not treat it at home and do not let it go. Any foot lesion in a person with diabetes deserves review, however small it looks.",
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
      "Resuelto en una visita",
      "Anestesia local, alivio inmediato",
      "Tratamiento de la matriz si se repite",
      "Indicaciones para evitar recaídas"
    ],
    "featuresEn": [
      "Resolved in a single visit",
      "Local anesthesia, immediate relief",
      "Matrix treatment if it recurs",
      "Instructions to prevent relapse"
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
    "description": "Entrega de medicamentos en la consulta y productos de venta libre en Houston, TX. Sin segunda parada y con las indicaciones explicadas en español.",
    "descriptionEn": "Medication provided during your visit, plus over-the-counter products, in Houston, TX. No second stop, with instructions explained in your language.",
    "longDescription": "Al terminar su consulta en Clínica Hispana Airline le **entregamos los medicamentos indicados en esa consulta** y los productos de venta libre que necesite, sin tener que hacer una segunda parada.\n\n**Qué incluye**\n- Entrega de los medicamentos **indicados durante su consulta con nosotros**\n- Productos de **venta libre**: analgésicos, antigripales, antialérgicos, sueros de rehidratación y cuidado de heridas\n- Explicación de la dosis, los horarios y qué esperar, en español\n- Aviso de interacciones con lo que ya esté tomando\n\n**Lo que no hacemos**\nNo surtimos recetas emitidas por otros médicos ni resurtimos recetas externas. Para eso necesita una farmacia con licencia del Texas State Board of Pharmacy. Lo decimos claro para que no haga el viaje en balde.\n\n**Por qué importa la explicación**\nLa mayor parte de los tratamientos que fallan no fallan por el medicamento, sino por cómo se toma: a destiempo, a medias, o suspendido en cuanto desaparece el síntoma. Antes de que se vaya le explicamos **cuánto, cada cuánto y hasta cuándo**, y qué hacer si olvida una toma.\n\n**Dígannos qué toma ya**\nTraer la lista de sus medicamentos actuales, incluidos los de venta libre y los suplementos, evita interacciones. Hay combinaciones frecuentes que conviene conocer antes de añadir nada nuevo.\n\n**Si su tratamiento es crónico**\nLas recetas de control se revisan en sus visitas de seguimiento. Ver [control de condiciones crónicas](/services/condiciones-cronicas).",
    "longDescriptionEn": "When your visit at Clínica Hispana Airline ends, we **provide the medications indicated during that visit** along with any over-the-counter products you need, so you do not have to make a second stop.\n\n**What it includes**\n- The medications **indicated during your visit with us**\n- **Over-the-counter** products: pain relievers, cold and allergy medicine, rehydration solutions and wound care\n- An explanation of dose, timing and what to expect, in your language\n- A heads-up on interactions with what you are already taking\n\n**What we do not do**\nWe do not fill prescriptions written by other physicians, and we do not refill outside prescriptions. That requires a pharmacy licensed by the Texas State Board of Pharmacy. We say so plainly so you do not make the trip for nothing.\n\n**Why the explanation matters**\nMost treatments that fail do not fail because of the medication but because of how it is taken: off schedule, half-finished, or stopped the moment the symptom disappears. Before you leave we explain **how much, how often and for how long**, and what to do if you miss a dose.\n\n**Tell us what you already take**\nBringing a list of your current medications, including over-the-counter products and supplements, prevents interactions. There are common combinations worth knowing about before adding anything new.\n\n**If your treatment is ongoing**\nMaintenance prescriptions are reviewed at your follow-up visits. See [chronic condition care](/services/condiciones-cronicas).",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "medicamentos en la clinica houston",
      "medicina de venta libre houston",
      "clinica con medicamentos houston",
      "consulta y medicamento houston"
    ],
    "keywordsEn": [
      "clinic provided medication houston",
      "over the counter medicine houston",
      "walk in clinic medication houston",
      "same visit medication houston"
    ],
    "features": [
      "Medicamentos indicados en su consulta",
      "Productos de venta libre",
      "Dosis y horarios explicados en español",
      "Revisión de interacciones"
    ],
    "featuresEn": [
      "Medications indicated during your visit",
      "Over-the-counter products",
      "Dose and timing explained in your language",
      "Interaction review"
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

