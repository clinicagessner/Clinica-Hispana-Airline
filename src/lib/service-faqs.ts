interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo medirme la A1C?",
        "answer": "Cada 3 meses mientras no esté en meta y cada 6 cuando lo esté. Si hace más de un año que no se la mide, ese es el punto de partida."
      },
      {
        "question": "Me dijeron que tengo prediabetes, ¿eso se quita?",
        "answer": "Sí, todavía. Entre 5,7 % y 6,4 % de A1C hay margen para volver al rango normal bajando peso, moviéndose más y ajustando la alimentación. Por eso conviene detectarla pronto."
      },
      {
        "question": "¿Qué revisiones anuales necesito además de los análisis?",
        "answer": "Pies, riñón, ojos y, según su caso, corazón. Las de pies y riñón se las hacemos aquí; la de retina es con oftalmólogo y le decimos cuándo toca."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I check my A1C?",
        "answer": "Every 3 months while you are off target, every 6 once you are on it. If it has been more than a year since your last one, that is where to start."
      },
      {
        "question": "I was told I have prediabetes — can it go away?",
        "answer": "Yes, still. Between 5.7% and 6.4% A1C there is room to get back to the normal range by losing weight, moving more and adjusting your diet. That is why catching it early matters."
      },
      {
        "question": "What yearly screening do I need besides lab work?",
        "answer": "Feet, kidneys, eyes and, depending on your case, heart. We do the foot and kidney checks here; the retinal exam is with an ophthalmologist and we tell you when it is due."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Tengo que estar en ayunas para el examen de tiroides?",
        "answer": "No, la TSH no requiere ayuno. Si en la misma extracción se van a revisar glucosa o colesterol, entonces sí conviene venir en ayunas."
      },
      {
        "question": "Si empiezo tratamiento, ¿es para siempre?",
        "answer": "Depende de la causa. En el hipotiroidismo suele ser un tratamiento continuado, pero lo importante es ajustar la dosis con análisis periódicos: la que servía hace dos años puede quedarse corta."
      },
      {
        "question": "Estoy cansado todo el tiempo, ¿es la tiroides?",
        "answer": "Puede serlo, pero también la anemia, la B12 baja o el azúcar descontrolado. Se parecen mucho entre sí y en una misma extracción se revisan todas."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for a thyroid test?",
        "answer": "No, TSH does not require fasting. If glucose or cholesterol are being checked in the same draw, then it is worth coming fasted."
      },
      {
        "question": "If I start treatment, is it for life?",
        "answer": "It depends on the cause. Hypothyroidism is usually an ongoing treatment, but what matters is adjusting the dose with periodic lab work: the dose that worked two years ago can end up too low."
      },
      {
        "question": "I am tired all the time — is it my thyroid?",
        "answer": "It could be, but so could anemia, low B12 or uncontrolled blood sugar. They look very much alike, and a single draw checks them all."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Cómo sé si es alergia o infección?",
        "answer": "La alergia pica y no da fiebre, el moco es claro y los síntomas vuelven siempre en la misma época o el mismo sitio. Si hay fiebre o el moco espesa y cambia de color, probablemente sea infección."
      },
      {
        "question": "¿Por qué empecé con alergia justo al mudarme a Houston?",
        "answer": "Porque aquí la temporada de polen se alarga casi todo el año y la humedad favorece el moho. Es muy común empezar con síntomas a los pocos meses de llegar."
      },
      {
        "question": "¿La alergia se quita con antibiótico?",
        "answer": "No. El antibiótico actúa sobre bacterias y la alergia no es una infección. Tomarlo no ayuda y contribuye a la resistencia; el tratamiento es otro."
      }
    ],
    "faqsEn": [
      {
        "question": "How do I know if it is allergy or infection?",
        "answer": "Allergy itches and causes no fever, the mucus is clear, and symptoms return at the same time of year or in the same place. If there is fever or the mucus thickens and changes color, it is probably an infection."
      },
      {
        "question": "Why did my allergies start right after moving to Houston?",
        "answer": "Because pollen season here runs most of the year and the humidity encourages mold. Starting to have symptoms a few months after arriving is very common."
      },
      {
        "question": "Will an antibiotic clear up my allergies?",
        "answer": "No. Antibiotics act on bacteria, and allergy is not an infection. Taking one does not help and contributes to resistance; the treatment is different."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Me van a dar antibiótico?",
        "answer": "Solo si lo que tiene lo necesita. La mayoría de las gripes y bronquitis son virales y el antibiótico no les hace nada; tomarlo sin necesidad genera resistencia. Por eso hacemos la prueba primero."
      },
      {
        "question": "¿Cuándo debo ir a emergencias en vez de a la clínica?",
        "answer": "Si hay dificultad real para respirar, labios o uñas azulados, confusión, o fiebre alta en un bebé de menos de tres meses. Eso no espera."
      },
      {
        "question": "Toso cada primavera, ¿es gripe?",
        "answer": "Probablemente no. Una tos que vuelve siempre en la misma época suele ser alergia, no infección, y se estudia y se trata de otra manera."
      }
    ],
    "faqsEn": [
      {
        "question": "Will I get an antibiotic?",
        "answer": "Only if what you have needs one. Most flu and bronchitis cases are viral and antibiotics do nothing for them; taking one unnecessarily breeds resistance. That is why we test first."
      },
      {
        "question": "When should I go to an ER instead of the clinic?",
        "answer": "If there is real difficulty breathing, bluish lips or nails, confusion, or high fever in a baby under three months. That does not wait."
      },
      {
        "question": "I cough every spring — is that the flu?",
        "answer": "Probably not. A cough that returns at the same time every year is usually allergy, not infection, and it gets worked up and treated differently."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Traigo el formulario de la escuela?",
        "answer": "Sí, tráigalo si ya se lo dieron y lo completamos y firmamos en la visita. Si no lo tiene, igual hacemos el examen y le entregamos el resultado por escrito."
      },
      {
        "question": "¿Qué es lo más importante del examen deportivo?",
        "answer": "El historial familiar de problemas cardiacos. Es la pregunta que más pesa, porque lo que se busca es detectar lo que podría dar un problema durante el esfuerzo."
      },
      {
        "question": "¿Cuándo conviene hacerlo?",
        "answer": "Antes de que empiece la temporada, no la semana en que arranca. En agosto se llenan todas las clínicas con el mismo trámite y la espera se alarga mucho."
      }
    ],
    "faqsEn": [
      {
        "question": "Should I bring the school form?",
        "answer": "Yes, bring it if you already have it and we will complete and sign it during the visit. If you do not have it, we still perform the exam and give you the results in writing."
      },
      {
        "question": "What matters most in a sports physical?",
        "answer": "Family history of cardiac problems. It is the heaviest question on the form, because what we are looking for is anything that could cause trouble during exertion."
      },
      {
        "question": "When is the best time to come?",
        "answer": "Before the season starts, not the week it begins. In August every clinic fills up with the same paperwork and the wait gets much longer."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme el papanicolaou?",
        "answer": "Como pauta general, cada 3 años entre los 21 y los 29, y entre los 30 y los 65 cada 3 años con citología o cada 5 con prueba de VPH. Si tuvo un resultado anormal antes, la frecuencia es otra y se la indicamos."
      },
      {
        "question": "¿Tienen ginecólogo titulado?",
        "answer": "No. La atención la da nuestro equipo médico general, que hace los exámenes y tratamientos básicos. Cuando un resultado requiere especialista, se lo decimos y orientamos la referencia."
      },
      {
        "question": "¿Por qué hacer un cultivo si ya sé que es infección?",
        "answer": "Porque no todas se tratan igual. Una infección por hongos y una vaginosis bacteriana se sienten parecido y necesitan tratamientos distintos; el cultivo evita adivinar y que el tratamiento equivocado empeore la molestia."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I have a Pap smear?",
        "answer": "As a general guideline, every 3 years between ages 21 and 29, and between 30 and 65 every 3 years with cytology or every 5 with HPV testing. If you have had an abnormal result, the schedule differs and we will tell you."
      },
      {
        "question": "Do you have a board-certified gynecologist?",
        "answer": "No. Care is provided by our general medical team, which performs the basic exams and treatments. When a result calls for a specialist, we tell you and help direct the referral."
      },
      {
        "question": "Why run a culture if I already know it is an infection?",
        "answer": "Because they are not all treated the same way. A yeast infection and bacterial vaginosis feel similar and need different treatments; the culture keeps us from guessing and from making things worse with the wrong one."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Cuándo es fiable hacerse la prueba?",
        "answer": "Desde el primer día de retraso. Antes de eso el nivel de hormona puede ser demasiado bajo y dar un negativo aunque sí haya embarazo. Si el retraso sigue, repítala en una semana."
      },
      {
        "question": "¿Hacen control prenatal?",
        "answer": "No. Hacemos la prueba, y si lo desea confirmamos y datamos el embarazo con ultrasonido. Para el seguimiento del embarazo y el parto le orientamos la referencia."
      },
      {
        "question": "Salió negativo pero no me baja, ¿qué puede ser?",
        "answer": "Un retraso no siempre es embarazo. La tiroides, el estrés, los cambios de peso y el ovario poliquístico alteran el ciclo. Si se repite, conviene revisarlo con análisis."
      }
    ],
    "faqsEn": [
      {
        "question": "When is the test reliable?",
        "answer": "From the first day your period is late. Before that the hormone level may be too low and give a negative even if you are pregnant. If your period still does not come, repeat it in a week."
      },
      {
        "question": "Do you provide prenatal care?",
        "answer": "No. We do the test, and if you wish we confirm and date the pregnancy with ultrasound. For pregnancy follow-up and delivery we help direct the referral."
      },
      {
        "question": "It was negative but my period has not come — what could it be?",
        "answer": "A late period is not always pregnancy. Thyroid, stress, weight changes and polycystic ovary syndrome all disrupt the cycle. If it keeps happening, it is worth checking with lab work."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's exam include?",
        "answer": "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Necesito que un médico me mande los análisis?",
        "answer": "No. Puede pedirlos usted directamente. Si no sabe cuáles le convienen, se lo orientamos según su edad, sus síntomas y sus antecedentes."
      },
      {
        "question": "¿Para qué análisis tengo que estar en ayunas?",
        "answer": "Para el perfil de lípidos y la glucosa en ayunas, de 8 a 12 horas. Para A1C, tiroides y hemograma no hace falta. Agua sí puede tomar en todos los casos."
      },
      {
        "question": "¿Puedo dejar de tomar mi medicina antes del análisis?",
        "answer": "No por su cuenta. Algunos medicamentos alteran resultados y otros no se deben suspender nunca. Pregúntenos antes y le decimos qué hacer en su caso."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need a doctor's order for lab work?",
        "answer": "No. You can request it directly. If you are not sure which tests you need, we will guide you based on your age, symptoms and history."
      },
      {
        "question": "Which tests require fasting?",
        "answer": "The lipid panel and fasting glucose, 8 to 12 hours. A1C, thyroid and complete blood count do not. Water is fine in every case."
      },
      {
        "question": "Can I stop my medication before the test?",
        "answer": "Not on your own. Some medications change results and others should never be stopped. Ask us first and we will tell you what applies to you."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Por qué no me dan el antibiótico directamente?",
        "answer": "Porque el examen de orina confirma la infección y orienta cuál antibiótico sirve. Tratar a ciegas lleva al medicamento equivocado, a que los síntomas vuelvan y a la resistencia bacteriana."
      },
      {
        "question": "¿Cuándo debo venir de inmediato?",
        "answer": "Si además del ardor aparece dolor en la espalda baja o el costado, fiebre o escalofríos. Eso puede indicar que la infección subió a los riñones y no espera."
      },
      {
        "question": "Me repiten las infecciones urinarias, ¿es normal?",
        "answer": "Tres o más al año no lo es, y no se arregla repitiendo antibiótico. Conviene buscar la causa: glucosa, hábitos o, en hombres, un estudio de próstata."
      }
    ],
    "faqsEn": [
      {
        "question": "Why not just give me the antibiotic?",
        "answer": "Because the urine test confirms the infection and points to which antibiotic works. Treating blind leads to the wrong medication, returning symptoms and bacterial resistance."
      },
      {
        "question": "When should I come in immediately?",
        "answer": "If along with the burning you get lower back or flank pain, fever or chills. That can mean the infection has moved up to the kidneys, and it does not wait."
      },
      {
        "question": "My urinary infections keep coming back — is that normal?",
        "answer": "Three or more a year is not, and repeating antibiotics does not fix it. It is worth finding the cause: glucose, habits or, in men, a prostate workup."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Por qué me piden más de una muestra?",
        "answer": "Porque los parásitos no se eliminan de forma continua: pueden no aparecer en una muestra y sí en la del día siguiente. Recoger varias en días distintos evita un negativo falso."
      },
      {
        "question": "¿No basta con tomar el remedio para parásitos?",
        "answer": "No siempre. No todos los parásitos responden al mismo medicamento, así que tratar sin saber cuál es suele acabar en síntomas que vuelven a los pocos meses."
      },
      {
        "question": "¿Sirve para niños?",
        "answer": "Sí, es de los estudios más útiles en la infancia. Si hay picazón anal por la noche o dolor de barriga que se repite, conviene hacerlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Why do they ask for more than one sample?",
        "answer": "Because parasites are not shed continuously: they may be absent from one sample and present in the next day's. Collecting several on different days prevents a false negative."
      },
      {
        "question": "Is it not enough to just take a deworming remedy?",
        "answer": "Not always. Different parasites respond to different medications, so treating without knowing which one you have usually ends in symptoms returning within months."
      },
      {
        "question": "Is it useful for children?",
        "answer": "Yes, it is one of the most useful studies in childhood. If there is nighttime anal itching or recurring stomach pain, it is worth doing."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "Me duele la garganta, ¿necesito antibiótico?",
        "answer": "Solo si es estreptococo. La mayoría de los dolores de garganta son virales y se curan solos; el antibiótico no les hace nada. La prueba lo aclara en minutos."
      },
      {
        "question": "¿Qué señales apuntan a estreptococo?",
        "answer": "Dolor intenso y repentino, fiebre, ganglios del cuello hinchados, manchas blancas en las amígdalas y, curiosamente, ausencia de tos. Cuanta más tos, más probable que sea viral."
      },
      {
        "question": "¿Hasta cuándo contagia?",
        "answer": "Aproximadamente hasta el día siguiente de empezar el antibiótico. Aun así, complete el tratamiento entero aunque ya se sienta bien."
      }
    ],
    "faqsEn": [
      {
        "question": "My throat hurts — do I need an antibiotic?",
        "answer": "Only if it is strep. Most sore throats are viral and clear on their own; antibiotics do nothing for them. The test settles it in minutes."
      },
      {
        "question": "What signs point to strep?",
        "answer": "Severe, sudden pain, fever, swollen neck glands, white patches on the tonsils and, oddly enough, no cough. The more cough there is, the more likely it is viral."
      },
      {
        "question": "How long am I contagious?",
        "answer": "Roughly until a day after starting the antibiotic. Even so, finish the entire course even once you feel better."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "Me vacunaron con BCG, ¿me sirve la prueba de la piel?",
        "answer": "Puede salir positiva por la vacuna aunque no haya infección. En ese caso lo indicado es la prueba de sangre (IGRA), que no se ve afectada por la BCG. Díganoslo antes de empezar."
      },
      {
        "question": "¿Tengo que volver para que me la lean?",
        "answer": "Con la prueba cutánea sí, a las 48-72 horas, y tiene que leerla el equipo médico: se mide el endurecimiento, no el enrojecimiento. Con la prueba de sangre no hace falta volver."
      },
      {
        "question": "Salí positivo, ¿tengo tuberculosis?",
        "answer": "No necesariamente. Un positivo indica contacto con la bacteria; la mayoría tiene infección latente, que no da síntomas ni contagia. Se distingue con radiografía de tórax y valoración de síntomas."
      }
    ],
    "faqsEn": [
      {
        "question": "I had the BCG vaccine — does the skin test work for me?",
        "answer": "It can come back positive because of the vaccine even with no infection. In that case the blood test (IGRA) is the right one, as BCG does not affect it. Tell us before we start."
      },
      {
        "question": "Do I have to come back to have it read?",
        "answer": "With the skin test yes, at 48 to 72 hours, and it has to be read by the medical team: what is measured is firmness, not redness. With the blood test there is no return visit."
      },
      {
        "question": "I tested positive — do I have tuberculosis?",
        "answer": "Not necessarily. A positive indicates contact with the bacteria; most people have latent infection, which causes no symptoms and is not contagious. A chest X-ray and symptom assessment tell them apart."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Es confidencial?",
        "answer": "Sí. No tiene que explicar por qué viene ni traer acompañante, y su resultado es suyo. Se lo entregamos y se lo explicamos a usted."
      },
      {
        "question": "Tuve una relación de riesgo hace tres días, ¿me hago la prueba ya?",
        "answer": "Puede venir, pero cada infección tiene un periodo de ventana y hacerse la prueba demasiado pronto puede dar un negativo falso. Le decimos cuándo conviene repetirla para que el resultado sea fiable."
      },
      {
        "question": "No tengo ningún síntoma, ¿para qué hacérmela?",
        "answer": "Porque muchas ETS no dan síntomas durante meses o años y aun así se transmiten y dejan secuelas. La clamidia y la gonorrea sin tratar son causa frecuente de infertilidad."
      }
    ],
    "faqsEn": [
      {
        "question": "Is it confidential?",
        "answer": "Yes. You do not have to explain why you came or bring anyone, and your result is yours. We hand it to you and explain it to you."
      },
      {
        "question": "I had a risky encounter three days ago — should I test now?",
        "answer": "You can come in, but each infection has a window period and testing too early can give a false negative. We will tell you when to repeat it so the result is reliable."
      },
      {
        "question": "I have no symptoms — why get tested?",
        "answer": "Because many STDs cause no symptoms for months or years and still spread and leave damage. Untreated chlamydia and gonorrhea are a common cause of infertility."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Qué necesito traer?",
        "answer": "Identificación con foto, que es obligatoria, y el formulario o la carta de su empleador si se lo dieron. Traiga también la lista de sus medicamentos, incluidos los de venta libre."
      },
      {
        "question": "¿Por qué tengo que declarar mis medicamentos?",
        "answer": "Porque varios medicamentos de uso común pueden alterar el resultado. Declararlos antes evita tener que explicar después un resultado inesperado."
      },
      {
        "question": "¿El examen de drogas incluye el de alcohol?",
        "answer": "No. Son pruebas distintas y hay que pedir cada una. Revise con su empleador qué le está pidiendo exactamente antes de venir."
      }
    ],
    "faqsEn": [
      {
        "question": "What do I need to bring?",
        "answer": "Photo identification, which is mandatory, and the form or letter from your employer if you were given one. Also bring a list of your medications, including over-the-counter ones."
      },
      {
        "question": "Why do I have to declare my medications?",
        "answer": "Because several common medications can affect the result. Declaring them beforehand saves you from having to explain an unexpected result afterward."
      },
      {
        "question": "Does the drug test include alcohol?",
        "answer": "No. They are separate tests and each has to be requested. Check with your employer exactly what is being asked for before you come."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿El electrocardiograma da corriente?",
        "answer": "No. El aparato solo registra la actividad eléctrica que su propio corazón produce; no envía nada al cuerpo. No se siente absolutamente nada."
      },
      {
        "question": "¿Un EKG normal descarta problemas del corazón?",
        "answer": "No del todo. Un EKG en reposo es el primer paso y detecta bastante, pero hay problemas que solo se ven con esfuerzo o con otros estudios. Por eso se interpreta junto con sus síntomas y su historial."
      },
      {
        "question": "¿Cómo debo venir para que salga bien el trazo?",
        "answer": "Sin crema ni aceite en el pecho y habiendo descansado unos minutos. Si llega agitado o con la piel grasa, el trazo sale con interferencia y hay que repetirlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Does an EKG send current through me?",
        "answer": "No. The machine only records the electrical activity your own heart produces; it sends nothing into your body. You feel absolutely nothing."
      },
      {
        "question": "Does a normal EKG rule out heart problems?",
        "answer": "Not entirely. A resting EKG is the first step and catches a good deal, but some problems only show under exertion or on other studies. That is why it is read alongside your symptoms and history."
      },
      {
        "question": "How should I come in for a clean tracing?",
        "answer": "With no cream or oil on your chest, and after resting a few minutes. If you arrive out of breath or with oily skin, the tracing picks up interference and has to be repeated."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Tengo que venir en ayunas?",
        "answer": "Para el ultrasonido abdominal sí, de 6 a 8 horas sin comer, porque la comida y el gas tapan la imagen. Para el pélvico y el de embarazo temprano no hace falta ayuno, pero conviene llegar con la vejiga llena."
      },
      {
        "question": "¿Cuántas semanas de embarazo se necesitan para ver el latido?",
        "answer": "Depende de cada embarazo y del tipo de estudio. Si viene muy al principio y todavía no se ve, se repite más adelante; es algo normal y no significa que haya un problema."
      },
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No. Usa ondas de sonido, no rayos X, por eso se puede hacer durante el embarazo sin riesgo para el bebé."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast?",
        "answer": "For an abdominal ultrasound, yes — 6 to 8 hours without food, because food and gas block the image. For pelvic and early pregnancy studies no fasting is needed, but come with a full bladder."
      },
      {
        "question": "How many weeks of pregnancy before the heartbeat is visible?",
        "answer": "It depends on the pregnancy and the type of study. If you come very early and it is not visible yet, we repeat it later; that is normal and does not mean something is wrong."
      },
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No. It uses sound waves, not X-rays, which is why it can be performed during pregnancy with no risk to the baby."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Me entregan el certificado DOT el mismo día?",
        "answer": "Sí, al terminar el examen físico DOT te entregamos tu certificado el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get the DOT certificate the same day?",
        "answer": "Yes, after the DOT physical we give you your certificate the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Qué pasa si no tengo mi cartilla de vacunas?",
        "answer": "Las vacunas que no pueda comprobar con un documento hay que repetirlas. Traiga la cartilla de su país aunque esté en otro idioma o muy vieja: sirve, y le puede ahorrar varias dosis."
      },
      {
        "question": "¿Puedo abrir el sobre para revisarlo?",
        "answer": "No. El sobre va sellado y firmado; si se abre, el formulario pierde validez y hay que repetir el examen completo. Le entregamos aparte una copia suya que sí puede consultar."
      },
      {
        "question": "¿Ustedes me asesoran con mi caso de inmigración?",
        "answer": "No. Hacemos el examen médico I-693 y le entregamos el formulario. Las preguntas sobre su caso, plazos y trámites son para su abogado."
      }
    ],
    "faqsEn": [
      {
        "question": "What if I do not have my vaccination card?",
        "answer": "Any vaccine you cannot document has to be repeated. Bring the card from your home country even if it is in another language or very old — it counts, and it can save you several doses."
      },
      {
        "question": "Can I open the envelope to check it?",
        "answer": "No. The envelope is sealed and signed; if it is opened, the form loses its validity and the entire exam has to be repeated. We give you a separate copy that you can read."
      },
      {
        "question": "Do you advise on my immigration case?",
        "answer": "No. We perform the I-693 medical exam and hand you the form. Questions about your case, timing and filings are for your attorney."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿La vacuna de la gripe me puede dar gripe?",
        "answer": "No. El brazo dolorido o el cansancio de un día o dos son la respuesta normal del sistema inmune, no una infección. La vacuna no contiene virus capaz de enfermarle."
      },
      {
        "question": "¿Cada cuánto necesito el refuerzo de tétanos?",
        "answer": "Cada 10 años. Y antes si sufre una herida profunda o sucia y hace más de cinco años de su última dosis."
      },
      {
        "question": "¿Sirve la vacuna de la gripe del año pasado?",
        "answer": "No. Se reformula cada temporada porque el virus cambia, así que hay que repetirla cada otoño para que proteja."
      }
    ],
    "faqsEn": [
      {
        "question": "Can the flu shot give me the flu?",
        "answer": "No. A sore arm or a day or two of tiredness is the normal immune response, not an infection. The vaccine contains no virus capable of making you sick."
      },
      {
        "question": "How often do I need a tetanus booster?",
        "answer": "Every 10 years. And sooner if you get a deep or dirty wound and it has been more than five years since your last dose."
      },
      {
        "question": "Does last year's flu shot still work?",
        "answer": "No. It is reformulated every season because the virus changes, so it has to be repeated each fall to protect you."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Quién aplica el suero vitaminado?",
        "answer": "Lo aplica y supervisa personal médico, tras una breve evaluación para elegir el suero adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Who administers the vitamin IV?",
        "answer": "It's administered and monitored by medical staff, after a brief evaluation to choose the right drip for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿No se me quita con antibiótico?",
        "answer": "Normalmente no. Dentro de la bolsa de pus casi no hay circulación, así que el antibiótico no llega bien. Hay que drenarlo; el antibiótico, si hace falta, va después."
      },
      {
        "question": "¿Duele el drenaje?",
        "answer": "Se aplica anestesia local antes de abrir. El alivio suele ser inmediato, porque la mayor parte del dolor viene de la presión y esa desaparece al drenar."
      },
      {
        "question": "¿Cuándo no debo esperar?",
        "answer": "Si hay fiebre, si salen líneas rojas que se extienden desde la zona, o si el absceso está en la cara o cerca de los ojos. Eso se ve el mismo día."
      }
    ],
    "faqsEn": [
      {
        "question": "Will antibiotics clear it up?",
        "answer": "Usually not. There is almost no circulation inside a pocket of pus, so antibiotics do not reach it well. It has to be drained; antibiotics, if needed, come afterward."
      },
      {
        "question": "Does the drainage hurt?",
        "answer": "Local anesthesia is applied before opening it. Relief is usually immediate, because most of the pain comes from pressure and that goes away as soon as it drains."
      },
      {
        "question": "When should I not wait?",
        "answer": "If there is fever, if red streaks spread from the area, or if the abscess is on your face or near your eyes. That gets seen the same day."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
