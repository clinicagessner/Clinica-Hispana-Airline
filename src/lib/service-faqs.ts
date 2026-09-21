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
        "question": "¿Hacen seguimiento del embarazo?",
        "answer": "Hacemos el seguimiento básico del embarazo y los controles que se resuelven en consulta, además de la prueba y el ultrasonido para datarlo. No atendemos partos: para eso le orientamos la referencia."
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
        "question": "Do you provide pregnancy follow-up?",
        "answer": "We provide basic pregnancy follow-up and the checks that can be handled in a clinic visit, along with the test and a dating ultrasound. We do not attend deliveries: for that we help direct the referral."
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
        "question": "¿Cuál es el mejor método?",
        "answer": "El que usted vaya a usar bien. Una pastilla que se olvida varias veces al mes protege menos que una inyección puesta a tiempo. Por eso hablamos de su rutina real antes de recomendar."
      },
      {
        "question": "¿Cualquier mujer puede tomar pastillas?",
        "answer": "No. Fumar a partir de cierta edad, las migrañas con aura, la presión alta o antecedentes de coágulos pueden descartar los métodos con estrógeno. Por eso se valora antes de recetar."
      },
      {
        "question": "¿Los anticonceptivos me protegen de infecciones?",
        "answer": "No. Ningún método hormonal protege contra infecciones de transmisión sexual. Para eso hace falta preservativo y hacerse pruebas."
      }
    ],
    "faqsEn": [
      {
        "question": "Which method is best?",
        "answer": "The one you will actually use properly. A pill forgotten several times a month protects less than an injection given on schedule. That is why we talk about your real routine before recommending."
      },
      {
        "question": "Can any woman take the pill?",
        "answer": "No. Smoking past a certain age, migraines with aura, high blood pressure or a history of clots can rule out estrogen-containing methods. That is why we assess before prescribing."
      },
      {
        "question": "Does birth control protect me from infections?",
        "answer": "No. No hormonal method protects against sexually transmitted infections. That takes condoms and getting tested."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Tengo que esperar a que caduque para quitármelo?",
        "answer": "No. Si el método no le está funcionando o desea embarazarse, se retira cuando usted decida, sin esperar a que se cumpla su periodo."
      },
      {
        "question": "¿Cuándo vuelve mi fertilidad?",
        "answer": "El efecto anticonceptivo termina al retirar el implante. Por eso, si no desea embarazo, conviene tener listo el siguiente método desde ese mismo día."
      },
      {
        "question": "¿Y si no me lo encuentran en el brazo?",
        "answer": "No se insiste. Si el implante no se localiza con facilidad, se lo decimos y orientamos la referencia para que lo localicen con imagen antes de retirarlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to wait until it expires to remove it?",
        "answer": "No. If the method is not working for you or you want to become pregnant, it comes out when you decide, without waiting for its period to end."
      },
      {
        "question": "When does my fertility return?",
        "answer": "The contraceptive effect ends when the implant is removed. So if you do not want to become pregnant, have the next method ready from that same day."
      },
      {
        "question": "What if you cannot find it in my arm?",
        "answer": "We do not press on. If the implant is not easily located, we tell you and help direct the referral so it can be located with imaging before removal."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "Tengo el PSA alto, ¿significa cáncer?",
        "answer": "No necesariamente. El PSA también sube con la inflamación, una infección reciente o el crecimiento benigno de la próstata que viene con la edad. Un valor aislado dice poco; importa cómo evoluciona."
      },
      {
        "question": "Me levanto varias veces por la noche a orinar, ¿es normal a mi edad?",
        "answer": "Es frecuente, que no es lo mismo que normal. Suele tener causa y tratamiento, así que conviene revisarlo en vez de asumir que es la edad."
      },
      {
        "question": "¿Desde qué edad debo hacerme el PSA?",
        "answer": "Conviene hablarlo a partir de los 50, y antes si hay antecedentes familiares de problemas de próstata."
      }
    ],
    "faqsEn": [
      {
        "question": "My PSA is high — does that mean cancer?",
        "answer": "Not necessarily. PSA also rises with inflammation, a recent infection, or the benign prostate enlargement that comes with age. A single value says little; what matters is how it evolves."
      },
      {
        "question": "I get up several times a night to urinate — is that normal at my age?",
        "answer": "It is common, which is not the same as normal. It usually has a cause and a treatment, so it is worth checking instead of assuming it is just age."
      },
      {
        "question": "At what age should I start PSA testing?",
        "answer": "It is worth discussing from age 50, and earlier if there is a family history of prostate problems."
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
        "question": "¿El análisis de orina del DOT es una prueba de drogas?",
        "answer": "No. Busca proteína, azúcar y sangre, que indican problemas de riñón o diabetes sin diagnosticar. La prueba de drogas la pide su empleador y se hace por separado."
      },
      {
        "question": "¿Por qué a unos les dan dos años de certificado y a otros tres meses?",
        "answer": "Lo decide sobre todo la presión arterial. Cuanto más alta, más corto el certificado, hasta el punto de no poder certificar si está muy elevada. Controlarla sale mucho más barato que repetir el examen."
      },
      {
        "question": "¿Qué debo traer si tengo apnea del sueño o diabetes?",
        "answer": "El reporte de cumplimiento del CPAP en el primer caso y sus análisis recientes, sobre todo la A1C, en el segundo. Traer los papeles de una condición controlada es lo que evita tener que volver."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the DOT urinalysis a drug test?",
        "answer": "No. It looks for protein, sugar and blood, which indicate kidney problems or undiagnosed diabetes. Drug testing is requested by your employer and done separately."
      },
      {
        "question": "Why do some drivers get two years and others three months?",
        "answer": "Blood pressure decides it more than anything. The higher it is, the shorter the certificate, to the point of not certifying at all if it is very high. Controlling it is far cheaper than repeating the exam."
      },
      {
        "question": "What should I bring if I have sleep apnea or diabetes?",
        "answer": "Your CPAP compliance report for the first, and recent lab work, especially your A1C, for the second. Bringing documentation for a controlled condition is what keeps you from coming back."
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
        "question": "Llevo meses cansado, ¿me pongo un suero?",
        "answer": "Lo razonable es medir primero. La anemia, la B12 baja, la tiroides y el azúcar descontrolado dan exactamente ese cansancio y se ven con un análisis de sangre. Con el resultado delante se decide qué tiene sentido."
      },
      {
        "question": "¿Cuánto dura la sesión?",
        "answer": "Entre treinta y sesenta minutos, sentado y con la vía en el brazo. Al terminar se retira la vía y puede irse sin acompañante."
      },
      {
        "question": "¿Puede ponérselo cualquiera?",
        "answer": "No. Se valora su historial, sus medicamentos y si hay condiciones que lo desaconsejen, como problemas de riñón o de corazón. Si no es adecuado en su caso, se lo decimos."
      }
    ],
    "faqsEn": [
      {
        "question": "I have been tired for months — should I get an infusion?",
        "answer": "The sensible thing is to measure first. Anemia, low B12, thyroid problems and uncontrolled blood sugar cause exactly that fatigue and show up on a blood test. With results in hand you can decide what makes sense."
      },
      {
        "question": "How long does the session take?",
        "answer": "Thirty to sixty minutes, seated with a line in your arm. When it ends the line comes out and you can leave without anyone driving you."
      },
      {
        "question": "Can anyone have one?",
        "answer": "No. We assess your history, your medications and whether any condition makes it inadvisable, such as kidney or heart problems. If it is not appropriate in your case, we tell you."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Cuánto tiempo tengo para que me cosan la herida?",
        "answer": "Cuanto antes, mejor: se sutura mejor dentro de las primeras horas. Pasado ese margen sube el riesgo de infección al cerrarla y a veces ya no conviene suturar."
      },
      {
        "question": "¿Cómo sé si necesita puntos o no?",
        "answer": "Si al acercar los bordes no se quedan juntos, si es profunda, si mide más de dos centímetros, si está en una articulación o si sangra de forma persistente."
      },
      {
        "question": "¿Ustedes me quitan los puntos?",
        "answer": "Sí, la retirada se hace aquí. Le decimos al terminar en cuántos días toca, que varía según la zona."
      }
    ],
    "faqsEn": [
      {
        "question": "How long do I have to get a wound stitched?",
        "answer": "The sooner the better: it sutures best within the first few hours. Past that, the risk of infection from closing it rises and sometimes suturing is no longer advisable."
      },
      {
        "question": "How do I know if it needs stitches?",
        "answer": "If the edges do not stay together when brought close, if it is deep, if it is over an inch long, if it is on a joint, or if it bleeds persistently."
      },
      {
        "question": "Do you remove the stitches?",
        "answer": "Yes, removal is done here. We tell you when we finish how many days it will be, which varies by area."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿No basta con lavarla en casa?",
        "answer": "Muchas veces no. Lo que causa problemas es lo que queda dentro: tierra o restos que no se ven y que hacen que la herida se infecte o forme un absceso una semana después."
      },
      {
        "question": "¿Cómo sé si se está infectando?",
        "answer": "Si el dolor aumenta a partir del segundo día, si el enrojecimiento se extiende, si hay pus, mal olor o fiebre. Si aparecen líneas rojas saliendo de la herida, venga el mismo día."
      },
      {
        "question": "Tengo diabetes y me salió una herida en el pie que no duele.",
        "answer": "Precisamente por eso conviene revisarla pronto. Que no duela puede significar que el nervio ya no avisa, y las heridas del pie en diabéticos se complican con facilidad."
      }
    ],
    "faqsEn": [
      {
        "question": "Is washing it at home not enough?",
        "answer": "Often it is not. What causes trouble is what stays inside: dirt or debris you cannot see, which makes the wound get infected or form an abscess a week later."
      },
      {
        "question": "How do I know it is getting infected?",
        "answer": "If pain increases from the second day on, if redness spreads, if there is pus, bad smell or fever. If red streaks appear running from the wound, come in the same day."
      },
      {
        "question": "I have diabetes and got a painless wound on my foot.",
        "answer": "That is exactly why it should be looked at soon. Painless can mean the nerve no longer warns you, and foot wounds in diabetics get complicated easily."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Me van a dormir?",
        "answer": "No. Se usa anestesia local: solo se adormece la zona. Está despierto todo el tiempo, no siente dolor y puede irse caminando sin acompañante."
      },
      {
        "question": "Tomo aspirina a diario, ¿puedo hacerme el procedimiento?",
        "answer": "Avísenos antes. Los anticoagulantes, incluida la aspirina diaria, cambian la preparación y los cuidados posteriores, y a veces conviene ajustar algo antes del procedimiento."
      },
      {
        "question": "¿Me quitan cualquier lunar o verruga?",
        "answer": "Si el aspecto es el habitual, sí. Si la lesión tiene características que conviene estudiar, se lo decimos y orientamos la referencia en vez de quitarla sin más."
      }
    ],
    "faqsEn": [
      {
        "question": "Will I be put to sleep?",
        "answer": "No. Local anesthesia is used: only the area is numbed. You stay awake the whole time, feel no pain, and can walk out without anyone driving you."
      },
      {
        "question": "I take daily aspirin — can I have the procedure?",
        "answer": "Tell us beforehand. Blood thinners, including daily aspirin, change the preparation and the aftercare, and sometimes something needs adjusting before the procedure."
      },
      {
        "question": "Will you remove any mole or wart?",
        "answer": "If it looks typical, yes. If a lesion has features that should be studied, we tell you and help direct the referral instead of simply removing it."
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
        "question": "¿Me van a quitar toda la uña?",
        "answer": "No. Se retira solo la porción que se está clavando. Si el problema se repite, se puede tratar además esa parte de la matriz para que no vuelva a crecer hacia dentro."
      },
      {
        "question": "¿Duele mucho?",
        "answer": "El pinchazo de la anestesia y poco más. El alivio es inmediato porque la mayor parte del dolor viene de la presión de la uña sobre la piel inflamada."
      },
      {
        "question": "¿Cómo evito que vuelva?",
        "answer": "Cortando la uña recta, sin redondear las esquinas, y usando calzado que no apriete de lado. Ese par de cambios evita la mayoría de las recaídas."
      }
    ],
    "faqsEn": [
      {
        "question": "Will you remove the whole nail?",
        "answer": "No. Only the portion digging in is removed. If the problem keeps returning, that part of the matrix can also be treated so it stops growing inward."
      },
      {
        "question": "Does it hurt a lot?",
        "answer": "The anesthetic injection and little else. Relief is immediate because most of the pain comes from the nail pressing on inflamed skin."
      },
      {
        "question": "How do I keep it from coming back?",
        "answer": "Cut the nail straight across without rounding the corners, and wear shoes that do not squeeze the sides. Those two changes prevent most relapses."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo llevar la receta de otro médico para que me la surtan?",
        "answer": "No. Entregamos los medicamentos indicados en su consulta con nosotros y productos de venta libre. Surtir recetas de otros médicos requiere una farmacia con licencia del Texas State Board of Pharmacy."
      },
      {
        "question": "¿Me explican cómo tomar el medicamento?",
        "answer": "Sí, y es la parte que más importa. Le decimos cuánto, cada cuánto y hasta cuándo, y qué hacer si olvida una toma. La mayoría de los tratamientos que fallan es por cómo se toman, no por el medicamento."
      },
      {
        "question": "¿Debo decirles lo que ya estoy tomando?",
        "answer": "Sí, incluidos los de venta libre y los suplementos. Hay combinaciones frecuentes que conviene revisar antes de añadir cualquier cosa nueva."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I bring a prescription from another doctor to be filled?",
        "answer": "No. We provide the medications indicated during your visit with us, plus over-the-counter products. Filling other physicians' prescriptions requires a pharmacy licensed by the Texas State Board of Pharmacy."
      },
      {
        "question": "Will you explain how to take the medication?",
        "answer": "Yes, and it is the part that matters most. We tell you how much, how often and for how long, and what to do if you miss a dose. Most treatments that fail do so because of how they are taken, not because of the drug."
      },
      {
        "question": "Should I tell you what I am already taking?",
        "answer": "Yes, including over-the-counter products and supplements. There are common combinations worth reviewing before adding anything new."
      }
    ]
  },};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
