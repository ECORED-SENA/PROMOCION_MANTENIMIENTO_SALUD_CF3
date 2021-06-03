<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      .h1 Atención en salud por cada momento de curso de vida

    p.mb-4 De acuerdo con cada momento de vida se brinda una atención en salud determinada como se puede observar en cada uno de los ciclos de vida o etapas de desarrollo.

    #t_2_1.titulo-segundo
      .h2 2.1 Primera infancia

    p.mb-5 #[strong Población sujeta:] niños y niñas desde los 8 días hasta los 5 años, 11 meses y 29 días. <br> La valoración integral en salud y el seguimiento del desarrollo integral es un proceso fundamental durante este momento del curso de vida, teniendo en cuenta que la primera infancia es la etapa en la que se establecen las bases para el desarrollo cognitivo, emocional y social del ser humano. Así mismo, el desarrollo se expresa de manera particular en cada uno y la interacción con una amplia variedad de actores, contextos y condiciones permite la potenciación de las diversas capacidades de las niñas y los niños.

    figure.mb-5
      img(src='@/assets/curso/tema2/img1.svg', alt='población sujeta')

    p.mb-4 La valoración integral de la salud en la primera infancia debe ser realizada de forma complementaria entre los profesionales de medicina general, especialista en medicina familiar o especialista en pediatría y profesional de enfermería, cumpliendo con el esquema de intervenciones/atenciones en salud individuales, definido en el lineamiento técnico y operativo de la RPMS. En el caso de los niños de mayor riesgo, la valoración integral debe ser realizada por profesional de pediatría, o por profesionales de medicina general o de medicina familiar, bajo el acompañamiento o la supervisión de pediatría, exclusivamente en los casos en los que no sea posible contar con pediatría.
    p.mb-5 Se consideran niños con mayor riesgo aquellos con presencia de uno o más de los siguientes factores o antecedentes:

    //- TabsB debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(
        titulo='Condiciones perinatales y neonatales',
        :icono='require("@/assets/curso/tema2/img2.svg")'
      )
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0
            ul.fa-ul
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Bajo peso al nacer (menor de 2500 gramos) (La atención se realizará según los Lineamientos del Programa Madre Canguro que estén vigentes).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Prematurez (edad gestacional menor de 37 semanas, cuya atención se realizará según los Lineamientos del Programa Madre Canguro que estén vigentes).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hospitalización neonatal mayor a 7 días.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Patología perinatal o neonatal significativa (por ejemplo, asfixia perinatal, trastornos metabólicos persistentes, convulsiones, trastornos respiratorios, sepsis neonatal temprana que no respondió a primera línea de antibiótico; necesidad de reanimación neonatal, ventilación mecánica, cirugía neonatal, terapia de reemplazo renal, punción lumbar, o cualquier otro estudio o procedimiento invasivo).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hijo de madre con infección gestacional o perinatal con alto riesgo de malformaciones, problemas del desarrollo o necesidad de atención especial en salud en el niño (Por ejemplo, exposición a Sífilis, Toxoplasmosis, Rubéola, Citomegalovirus, Herpes virus, VIH, Zika virus).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hijo de madre con complicaciones durante la gestación que hayan tenido repercusión en el hijo (en edad fetal, perinatal, neonatal o durante el primer año de vida).

      .py-4.py-md-5(
        titulo='Alteraciones de la salud o el desarrollo',
        :icono='require("@/assets/curso/tema2/img3.svg")'
      )
        .row.justify-content-center
          .col-md-11
            ul.fa-ul
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Condición crónica (neurológica, cardiovascular, respiratoria, metabólica, endocrinológica, gastrointestinal, renal o de otro tipo).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Discapacidad (de cualquier tipo o con alto riesgo de presentarla por una condición identificada, por ejemplo, anotia, anoftalmia, agenesia de extremidades, resultados de estudio metabólico para enfermedades neurodegenerativas, etc.).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niño con necesidad de tratamiento con medicamentos de forma crónica.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niño con antecedente de hospitalizaciones recurrentes (más de 3 en el último año), hospitalizaciones prolongadas (mayores a 2 semanas) o que haya necesitado atención en Unidad de Cuidados Intensivos Pediátricos.

      .py-4.py-md-5(
        titulo='Condiciones crónicas - discapacidad',
        :icono='require("@/assets/curso/tema2/img4.svg")'
      )
        .row.justify-content-center
          .col-md-11.mb-4.mb-md-0
            ul.fa-ul
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Anomalía congénita mayor o múltiple.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niñas o niños con sospecha de problemas del desarrollo infantil (Por ej: retraso, disociación, desviación o regresión del desarrollo).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niño con tamizaje o estudio positivo para alteraciones congénitas (hipotiroidismo congénito, errores innatos del metabolismo, hipoacusia, problemas visuales, etc.) o con sospecha de síndrome genético (Síndrome de Down, Intersexualidad, etc.).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niños que presenten un evento de interés en salud pública.

      .py-4.py-md-5(
        titulo='Condiciones sociales o familiares de riesgo',
        :icono='require("@/assets/curso/tema2/img5.svg")'
      )
        .row.justify-content-center
          .col-md-11
            ul.fa-ul
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hijo de madre con sospecha o diagnóstico de depresión postparto
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hijo de padres (especialmente la madre) con consumo de sustancias psicoactivas, incluyendo aquellos con riesgo o sospecha de repercusión por consumo de sustancias psicoactivas (por ejemplo, síndrome de alcoholismo fetal, anomalías congénitas, retraso en el desarrollo, síndrome de abstinencia, etc.).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Hijo de padres con enfermedad mental con impacto en la estabilidad (estructural o funcional) de la familia o en el cuidado de los niños.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niño acompañante de mujer en privación de la libertad en centro carcelario.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niños con padres o hermanos con enfermedad catastrófica (incluyendo las neoplasias y las condiciones degenerativas), con discapacidad o con otra condición o situación que afecte negativamente el cuidado del niño en primera infancia.
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niños víctimas de vulneración o violación de derechos humanos con o sin proceso de restablecimiento de derechos en curso (por ejemplo, víctimas de violencia física, psicológica, sexual, negligencia y abandono en el ámbito familiar, escolar, institucional, comunitario, etc., intrafamiliar o testigos de violencia intrafamiliar, abandonados, explotados, secuestrados, traficados o expuestos al consumo de alcohol u otras sustancias psicoactivas).
              li.mb-3 #[span.li--clr.fa-li #[i.fas.fa-check]] Niño perteneciente a un hogar en pobreza extrema o en situación de calle.

    .hr.mb-5

    //- .cajon debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.mb-4.justify-content-center 
      .col-lg-7.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p #[strong Importante:] durante todo el procedimiento es fundamental contar con la presencia del cuidador y/o acompañante del niño(a) durante la consulta.

    .h4.mb-4 Anamnesis primera infancia
    p.mb-5 Durante el procedimiento se debe realizar una anamnesis completa que incluya indagación de antecedentes y revisión por sistemas. Se recomienda hacer énfasis en:

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            .col-md-11.mb-4.mb-md-0
              p Ancedentes personales, médicos, hospitalarios, transfusionales, farmacológicos, exposición al humo de tabaco, alérgicos, quirúrgicos, vacunación, comportamiento general y relaciones interpersonales.

          .row
            .col-md-11.mb-4.mb-md-0
              p Ancedentes familiares (enfermedades, violencias, trastornos de la salud mental y/o consumo de alcohol o SPA en padres, hermanos u otros familiares).

          .row
            .col-md-11.mb-4.mb-md-0
              p Desarrollo: indagar sobre el progreso en los hitos del desarrollo del niño, sobre la adaptación e integración en los entornos de educación inicial; así como preocupaciones de los padres o cuidadores respecto al desarrollo de los niños. Prácticas de crianza y cuidado (comunicación con el niño o niña y expresión de afecto, actividades para favorecer el desarrollo y juego, exposición a pantallas, establecimiento de límites, vivencia de violencia en el hogar, prevención de accidentes incluyendo seguridad vial).

          .row
            .col-md-11.mb-4.mb-md-0
              p Tamizaje: verificar la realización y los resultados de las pruebas de tamizaje neonatal (auditivo por tecnología dura – potenciales evocados auditivos / otoemisiones acústicas; tamizaje de errores innatos del metabolismo por muestra de sangre; tamizaje de cardiopatía congénita compleja y tamizaje visual por examen físico).

          .row
            .col-md-11.mb-4.mb-md-0
              p Alimentación en el niño menor de 6 meses haciendo énfasis en la lactancia materna (indagar lactancia materna no exclusiva - averiguar si el niño ha recibido cualquier líquido, alimento o leche diferente a la materna el día o noche anterior). Alimentación del niño mayor de 6 meses, indagar sobre consumo y hábitos alimentarios en el niño mayor de seis meses indicando tipo de alimentos, frecuencia de consumo, cantidad, forma de preparación y texturas, adición de sal y azúcar y tipo de alimentos, para lo cual puede ser útil la indagación de la alimentación en las últimas 24 horas. A las niñas y los niños con factores de riesgo, se les debe ordenar una prueba de hemoglobina y según el resultado derivar a la Ruta Integral de Atención en Salud para la población con riesgo o presencia de alteraciones nutricionales.

          .row
            .col-md-11.mb-4.mb-md-0
              p Establecimiento de rutinas y hábitos saludables (sueño y descanso, juego o movimiento activo, baño y cambio de pañal, cuidado bucal, foto protección, control de esfínteres).

          .row
            .col-md-11.mb-4.mb-md-0
              p Valoración o actualización de la conformación y dinámica de la familia a través del Familiograma, indagar sobre las capacidades y recursos personales y familiares que inciden en el cuidado de la salud familiar, evaluar el grado de satisfacción de la funcionalidad familiar, a través del #[strong APGAR familiar.]

          .row
            .col-md-11.mb-4.mb-md-0
              p Valoración o actualización de las condiciones de vida, del contexto social y las redes de apoyo social y comunitarias de la familia, pertenencia social y cultural que considere pertenencia étnica a través de #[strong Ecomapa.]

          .row
            .col-md-11.mb-4.mb-md-0
              p Avance en los compromisos acordados en sesiones de educación individual previas. Inquietudes de los padres.

    .h4.mb-4 Examen físico completo en la primera infancia 
    p.mb-4 Ante cualquier alteración encontrada en la anamnesis, en el examen físico complementado con los instrumentos usados durante la valoración, debe canalizarse a la ruta integral de atención en salud para población con riesgo o a la atención resolutiva por profesional especializado según sea el caso, para el manejo respectivo. tabla de percentiles de tensión arterial en niños y niñas

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales
              p.mb-2 La tensión arterial debe tomarse a todos los niños mayores de 3 años de edad o a los menores de esta edad, si tienen síntomas recurrentes de cualquier tipo o antecedente de cateterización umbilical en el período neonatal. Revisar referencia de tensión arterial por edad. Esta debe hacerse con el manguito adecuado y debe establecerse su normalidad a través del uso de la tabla de percentiles de tensión arterial en niños y niñas. Para ampliar información:
              .row
                .col-md-8
                  a.anexo.mb-4.mb-lg-0(href="https://www.aappublications.org/news" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-link.svg")
                    .anexo__texto
                      p.mb-0 #[strong Enlace web.] Para ampliar información: Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents PEDIATRICS Volume 140, number 3, September 2017:e20171904 
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del desarrollo
              p.mb-2 Se evaluará el desarrollo de los niños en primera infancia a través de la percepción de los padres, cuidadores o maestros sobre el desarrollo del niño, así como a través de la aplicación directa de la Escala Abreviada de Desarrollo-3, ante la sospecha de algún trastorno del desarrollo, se aplicará también el test M-Chat R/F el cual es un instrumento útil para tamizaje   del trastorno del  espectro autista  de manera específica a todos los niños entre los 18 y los 30 meses de edad.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 Se realizará tomando las medidas de peso, talla y perímetro cefálico, para el cálculo de los índices relacionados con los mismos (IMC/edad, talla/edad, peso/edad y perímetro cefálico). La clasificación antropométrica se realizará con base en lo establecido en la normatividad vigente y la información debe ser registrada en las gráficas de los patrones de crecimiento OMS para niñas, niños y adolescentes menores de 18 años.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual
              p.mb-2 Se debe prestar especial atención a la detección de signos de violencia física y sexual, así como anomalías congénitas.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 A partir del examen oftalmoscópico se debe explorar y evaluar las estructuras, se debe valorar la agudeza visual a partir de los tres (3) años de edad usando optotipos morfoscópicos o angulares.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Incluye la evaluación del estado del oído y su integridad a través de la inspección visual, la otoscopia, y de las funciones de la articulación, voz, habla y desempeño comunicativo. Se recomienda aplicar la lista de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación. Durante la consulta se debe aplicar el cuestionario VALE.  Verificar resultado de tamizaje auditivo, especialmente niños y niñas con riesgo de hipoacusia.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Dirigida a realizar el reconocimiento del estado de las estructuras dentomaxilofaciales y de su funcionalidad.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 En este marco es importante indagar acerca de la calidad de la relación de los padres hacia los hijos, dado que este factor es importante como protector o riesgo de posibles problemas y /o trastornos mentales.  Identificar los hallazgos a partir de la anamnesis, se debe valorar la presencia de riesgos psicosociales para violencias y de exposición a violencias, exposición a lesiones en los niños o niñas por consumo de sustancias psicoactivas del padre o madre, o algún factor de riesgo como trastorno mental, convulsiones o ausencias, situaciones o momentos significativos (duelo o pérdidas), alteraciones o anormalidades relacionadas con la salud mental o neurológica. Las alteraciones de la salud mental en la primera infancia tienen su expresión principal en los procesos del desarrollo; aunque pueden presentarse alteraciones en el apego, manifestaciones iniciales de trastornos del espectro autista, ansiedad, depresión, entre otras. Debe considerarse la valoración del riesgo psicosocial del cuidador como factor clave.

    .row.mb-5.justify-content-center 
      .col-lg-9.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p Ante cualquier alteración encontrada en la anamnesis, en el examen físico complementado con los instrumentos usados durante la valoración, debe canalizarse a la ruta integral de atención en salud para población con riesgo o a la atención resolutiva por profesional especializado según sea el caso, para el manejo respectivo. tabla de percentiles de tensión arterial en niños y niñas

    .h4.mb-5 Plan de cuidado primera infancia 

    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | atenciones complementarias de educación, cultura, sector social – prosperidad social, entre otras. Verificar escolaridad o escenarios de cuidado para los niños y las niñas. Definir atenciones a la familia.
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | diagnóstico, tratamiento y derivación. Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | verificar o canalizar a atenciones en el marco de la RPMS. . En caso de tener algún hallazgo o en caso de tener alguna condición asociada a mayor riesgo, verificar la atención por el profesional de pediatría. Importante verificar que al niño o niña se le haya realizado el tamizaje auditivo neonatal, en caso contrario ordenarlo para su realización en los primeros tres meses de vida, verificar resultados de los demás tamizajes. Importante verificar atención para la promoción y apoyo a la lactancia materna en el primer mes. Recordar desparasitación intestinal, fortificación casera con micronutrientes (ciclo cada 6 meses – niños y niñas entre 6 y 23 meses de edad), suplementación con hierro y vitamina A (24 a 59 meses de edad). Suplementación con hierro en lactantes con riesgo y prueba de hemoglobina, si se identifica riesgo. Vacunación de acuerdo a esquema. Tener presente la valoración y atenciones de salud bucal. Aclarar cuando se proyecta la siguiente consulta.
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta.
            li 
              .lista-ol--cuadro__vineta
                span I
              p 
                strong Información en Salud:
              |
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Remitir a intervenciones colectivas  
                | del Plan de Intervenciones Colectivas de acuerdo con oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Educación para la Salud: 
                | incluye la canalización a escenario de educación grupal para la salud (capacidades para el cuidado de la salud, la crianza promotora del desarrollo, alimentación y nutrición; así como identificación de signos de alarma). En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales.

    .h4.mb-4 Instrumentos, insumos y dispositivos primera infancia

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de pediatría, medicina general, medicina familiar o enfermería.

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional
                th.text-center(style="font-weight: normal; font-size: 16px;") Escala abreviada de desarrollo-3 con su kit de materiales 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario VALE 
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          |	Test M-Chat R/F - Tamizaje para alteración de trastornos del espectro autista (Sugerido)
                        li
                          i.fas.fa-check
                          | Lista de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación
                        li
                          i.fas.fa-check
                          | Familiograma
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio, equipo de órganos, tensiómetro pediátrico, cinta métrica, pulso-oxímetro, optotipos morfoscópicos o angulares para agudeza visual etc.; balanza pesa bebé y balanza de pie, infantómetro y tallímetro. Tablas de percentiles de tensión arterial para niños y para niñas. Carné de salud infantil.

    #t_2_2.titulo-segundo
      .h2 2.2 Infancia

    p.mb-4 La población sujeta que abarca las infancias son niños y niñas desde los 6 años hasta los 11 años, 11 meses y 29 días. Entre muchos procesos, durante este periodo se presenta lo que se conoce como la latencia del crecimiento; que así mismo se acompaña de procesos cognitivos donde se ganan y perfeccionan capacidades, habilidades y destrezas que requieren de la esfera corporal; por lo cual se considera esencial el acompañamiento que estas transiciones implican.
    p.mb-5 La valoración integral de la salud en la infancia debe ser realizada de forma complementaria entre los profesionales de medicina general o familiar y de enfermería, cumpliendo con el esquema de intervenciones/atenciones en salud individuales, definido en el lineamiento técnico y operativo de la RPMS.

    .row.mb-4.justify-content-center 
      .col-lg-7.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p #[strong Importante:] contar con la presencia del cuidador y/o acompañante del niño(a) durante la consulta.

    figure.mb-5
      img(src='@/assets/curso/tema2/img1b.svg', alt='población sujeta')

    .h4.mb-4 Anamnesis infancia
    p.mb-5 Se recomienda hacer énfasis en:

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            //1
            .col-md-11.mb-4.mb-md-0
              p Antecedentes personales, médicos, hospitalarios, transfusionales, farmacológicos, exposición al humo de tabaco, alérgicos, quirúrgicos, consumo de sustancias psicoactivas, esquema de vacunación, comportamiento y relaciones interpersonales, conducta suicida y consumo de sustancias psicoactivas. Antecedentes ginecológicos en niñas con menarca.

          .row
            //2
            .col-md-11.mb-4.mb-md-0
              p Antecedentes familiares: debe hacerse un especial énfasis en enfermedades hereditarias, antecedentes de salud mental de los padres, hermanas/os y otros familiares, conducta suicida, consumo de alcohol y otras sustancias psicoactivas; duelo o muerte de personas significativas, divorcio de los padres, problemas en las relaciones de los progenitores, alteraciones de las emociones o del comportamiento.

          .row
            //3
            .col-md-11.mb-4.mb-md-0
              p Desarrollo y aprendizaje: en cada consulta, los padres o acudientes del niño o niña, deben informar sobre el rendimiento escolar, la aptitud de aprendizaje, la actitud en el aula y la vida social. Prácticas de crianza y cuidado: formas de comunicación con el niño(a), actividades para estimular el desarrollo y el juego, cómo se relaciona con su familia y con otros adultos y niños, establecimiento de límites y disciplina para corregir, refuerzos positivos, exposición a violencias, prevención de accidentes, exposición a vulneraciones de derechos como el trabajo infantil.

          .row
            //4
            .col-md-11.mb-4.mb-md-0
              p Consumo y hábitos alimentarios indagando la frecuencia, cantidad, forma de preparación y tipo de alimentos (incluyendo consumo de azúcar y sal), para lo cual puede ser útil la indagación de la alimentación en las últimas 24 horas, se debe indagar sobre problemas en el hábito de comer

          .row
            //5
            .col-md-11.mb-4.mb-md-0
              p Rutinas y Hábitos: indagar sobre sueño, juego, actividad física, uso de tiempo libre, hábito urinario e intestinal, exposición a pantallas.

          .row
            //6
            .col-md-11.mb-4.mb-md-0
              p Valoración o actualización de la conformación y dinámica de la familia a través del Familiograma, indagar sobre las capacidades y recursos personales y familiares que inciden en el cuidado de la salud familiar, evaluar el grado de satisfacción de la funcionalidad familiar, a través del APGAR familiar.

          .row
            //7
            .col-md-11.mb-4.mb-md-0
              p Valoración o actualización de las condiciones de vida, del contexto social y las redes de apoyo social y comunitarias de la familia, pertenencia social y cultural a través de Ecomapa.

          .row
            //8
            .col-md-11.mb-4.mb-md-0
              p Avance en los compromisos acordados en sesiones de educación individual previas e inquietudes del niño o niña o de los cuidadores. En caso de que existan inquietudes en relación con el proceso de identidad de género, se debe ampliar la anamnesis para orientar adecuadamente o derivar.

    .h4.mb-4 Examen físico completo en infancia 
    p.mb-4 Durante el procedimiento se debe realizar una anamnesis completa que incluya indagación de antecedentes y revisión por sistemas. Se recomienda hacer énfasis en:



    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales
              p.mb-2 Examen físico completo, partiendo de tomar todos los signos vitales. La tensión arterial debe tomarse con el manguito adecuado y debe establecerse su normalidad a través del uso de la tabla de percentiles de tensión arterial en niños y niñas.
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del desarrollo
              p.mb-2 Evaluar el desarrollo de los niños en infancia a través de la indagación del desempeño del rendimiento escolar, del aprendizaje y del comportamiento de acuerdo a la revisión por sistemas. En caso de sospecha de déficit cognitivo se debe aplicar el test de la figura humana de Goodenough Harris en la misma consulta.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 Se realizará tomando las medidas de peso y talla, para el cálculo de los índices relacionados con los mismos (IMC/edad y talla/edad). La clasificación antropométrica se realizará con base en lo establecido en la normatividad vigente  y la información debe ser registrada en las gráficas de los patrones de crecimiento OMS para niñas, niños y adolescentes menores de 18 años

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual – maduración sexual
              p.mb-2 Evaluar la evolución de los estadios de Tanner y realizar la exploración de la región ano-genital para descartar signos de violencia sexual así como anormalidades anatómicas.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 Realizar examen oftalmoscopio donde se debe explorar y evaluar las estructuras del segmento anterior y posterior, se debe valorar la agudeza visual usando optotipos morfoscópicos o angulares.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Evaluación del estado del oído y su integridad a través de la inspección visual, la otoscopia, y de las funciones de la articulación, voz, habla y desempeño comunicativo. Se recomienda aplicar la lista de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación así mismo se debe aplicar el cuestionario VALE durante todas las consultas.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Dirigida a realizar el reconocimiento del estado de las estructuras dentomaxilofaciales y de su funcionalidad.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 En este marco es importante indagar acerca de la calidad de la relación de los padres hacia los hijos, dado que este factor es importante como protector o riesgo de posibles problemas y /o trastornos mentales.  Tener en cuenta los hallazgos a partir de la anamnesis, identificar la presencia de riesgos psicosociales para violencias y de exposición a violencias, que puede incluir una o diversas formas de violencias de género, interpersonales o con ocurrencia en el conflicto armado, identificar lesiones por consumo de SPA, bajo rendimiento escolar, problemas de aprendizaje o de comportamiento, problemas en el hábito de comer, duelo o pérdida significativa, así como convulsiones o ausencias. Si identifica algún riesgo de problema o trastorno mental aplicar el instrumento de tamizaje Reporting Questionnaire for Children (RQC). Se propone presentar como listado ordenado simple
    h4.mb-5 Plan de cuidado infancia 
    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | Atenciones complementarias de educación, cultura, sector social – prosperidad social, entre otras. Verificar escolaridad. Definir atenciones a la familia. 
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | diagnóstico, tratamiento y derivación. Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | Verificar o canalizar a atenciones en el marco de la RPMS. Importante realizar tamizaje de anemia en niñas una vez entre los 10 y los 13 años; iniciar vacunación con VPH (Virus del Papiloma Humano) a los 9 años y Td (Toxoide Tetánico y Diftérico del adulto) a los 10 años (según antecedente vacunal). Tener presente la valoración y atenciones de salud bucal. Aclarar cuando se proyecta la siguiente consulta. 
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta.
            li 
              .lista-ol--cuadro__vineta
                span I
              p 
                strong Información en Salud:
              |
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                |Remitir a intervenciones colectivas del Plan de Intervenciones Colectivas de acuerdo a oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                |Educación para la salud incluye la canalización a un escenario de educación grupal para la salud (capacidades de cuidado para promover la salud y el desarrollo, alimentación y nutrición, capacidades socioemocionales y afrontamiento de sucesos vitales). En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales.

    .h4.mb-4 Instrumentos, insumos y dispositivos infancia

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de medicina general, medicina familiar o enfermería. <br>Instrumentos:

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario VALE 
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          |	Cuestionario RQC (tamizaje de alteraciones de salud mental)
                        li
                          i.fas.fa-check
                          | Test de Estadios Tanner
                        li
                          i.fas.fa-check
                          | Lista de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación.
                        li
                          i.fas.fa-check
                          | Test de la figura humana de Goodenough Harris para déficit cognitivo.
                        li
                          i.fas.fa-check
                          | Familiograma
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio equipo de órganos, tensiómetro pediátrico, cinta métrica, pulso-oxímetro, optotipos morfoscópicos o angulares para agudeza visual, báscula y tallímetro etc. Carné de salud infantil y Tablas de percentiles de tensión arterial para niños y para niñas.





    #t_2_3.titulo-segundo
      .h2 2.3 Adolescencia

    p.mb-4 La población sujeto son adolescentes entre los 12 años hasta los 17 años, 11 meses y 29 días. La adolescencia es un momento de la vida al que es necesario aproximarse comprendiendo que involucra distintas fases. En este momento de vida, los individuos experimentan un proceso de maduración y desarrollo a nivel biológico, social y psicoemocional importante, por lo cual, la valoración integral en salud es fundamental.  Aspectos como su salud mental, su sexualidad y la preparación para una adecuada vivencia de su salud reproductiva son cruciales, enfatizando en la orientación para el adecuado desarrollo de su identidad, autonomía y autoestima, promoviendo el desarrollo de capacidades para la toma de decisiones, que les permita tener una vida con propósito y desempeñar un rol importante en la sociedad.

    figure.mb-5
      img(src='@/assets/curso/tema2/img1c.svg', alt='población sujeta')

    p.mb-5 Esta consulta debe ser realizada de forma complementaria entre los profesionales de medicina general o familiar y de enfermería. Importante contar con capacidades técnicas e individuales para acompañar el proceso de desarrollo de los adolescentes; así como habilidades de comunicación efectiva para abordar situaciones frecuentes en este momento vital (ejercicio de sus derechos sexuales y reproductivos, sospecha de embarazo, anticoncepción, violencias, consumo de alcohol o tabaco, presión de pares, capacidad de liderazgo, participación juvenil, entre otras). En el caso de adolescentes que consultan con sus padres o cuidadores, se debe informar que la parte inicial de la consulta se desarrolla preferiblemente a solas con el adolescente en reconocimiento de su autonomía. Es conveniente que el padre o la madre estén presentes durante el examen físico, si así lo desea el adolescente. Las opiniones del padre o la madre y las interacciones entre ellos y el adolescente permitirán complementar la información sobre su desarrollo evolutivo, la comunicación y conflictos familiares, así como apoyar recomendaciones sobre el cuidado de la salud.

    .row.mb-4.justify-content-center 
      .col-lg-10.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p #[strong Importante:] : este procedimiento debe realizarse en un ambiente que garantice privacidad, libre de prejuicios y no discriminatorio, los datos suministrados pueden provenir del adolescente, su madre o padre, o de la interacción entre ambos, por lo cual se requiere prestar suficiente atención a todas las fuentes.

    .h4.mb-4 Anamnesis adolescencia
    p.mb-5 Se recomienda hacer énfasis en: 

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            //1
            .col-md-11.mb-4.mb-md-0
              p Antecedentes personales, incluyendo el desarrollo puberal. 
              p 1.a. Verificar pruebas de tamizaje para anemia y resultados. Importante gestionar previamente para contar con resultado en la consulta


          .row
            //2
            .col-md-11.mb-4.mb-md-0
              p Antecedentes familiares, especialmente alteraciones hereditarias, así como trastornos o problemas de salud mental y/o consumo de SPA (sustancias psicoactivas) o alcohol propio o en la familia.

          .row
            //3
            .col-md-11.mb-4.mb-md-0
              p Aprendizaje: asistencia escolar y desempeño académico; indagando deserción o riesgo, repitencia o desempeño bajo que puede deberse a problemas de aprendizaje no detectados previamente. Comportamiento y relaciones interpersonales. Prácticas de crianza de los cuidadores (incluyendo prácticas correctivas y riesgo de violencias).

          .row
            //4
            .col-md-11.mb-4.mb-md-0
              p Consumo y hábitos alimentarios, especialmente patrón de comidas, tipo de alimentos y “dietas”. Indagar factores de riesgo o conductas asociadas a trastornos de la conducta alimentaria.

          .row
            //5
            .col-md-11.mb-4.mb-md-0
              p Rutinas y hábitos: sueño, actividad física, uso de tiempo libre, actividad física (recomendación para adolescentes, 60 minutos diarios de actividad moderada o vigorosa, 5 días a la semana).

          .row
            //6
            .col-md-11.mb-4.mb-md-0
              p Valoración de la dinámica familiar. APGAR familiar - Familiograma.

          .row
            //7
            .col-md-11.mb-4.mb-md-0
              p Condiciones de vida, del contexto social y las redes de apoyo. Ecomapa

          .row
            //8
            .col-md-11.mb-4.mb-md-0
              p Avance en los compromisos acordados en sesiones de educación individual previas. Preocupaciones de salud y cuidado extra-escolar. 
          
          .row
            //9
            .col-md-11.mb-4.mb-md-0
              p Reconocimiento y ejercicio de Derechos Sexuales y Reproductivos y vivencia de la sexualidad. Indagación respecto a inicio de relaciones sexuales; así como proceso de orientación sexual e identidad de género y vivencia del mismo. Conocimiento del proceso de sexualidad y reproducción. Instrumento de valoración de los derechos sexuales y derechos reproductivos.

    .h4.mb-4 Examen físico completo en la adolescencia 

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales y examen físico completo.
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del desarrollo
              p.mb-2 Valorar funciones cognitivas manteniéndose atento durante la consulta en relación a la identificación de propósito en sus actividades, autocontrol, coherencia en el comportamiento, capacidad de resolver problemas, control interno, proyección a futuro, entre otras funciones ejecutivas. Así mismo valorar la identidad y la autonomía (Instrumento de valoración de la identidad e instrumento de valoración de la autonomía).

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 A través de medidas de peso y talla, para el cálculo de los índices relacionados con los mismos (IMC/edad y talla/edad) y a partir de allí realizar la clasificación antropométrica de acuerdo a normatividad vigente.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual y reproductiva
              p.mb-2 Realizar la valoración clínica de la maduración sexual a través del seguimiento a la evolución de los estadios de Tanner (puede entregarse un espejo al adolescente para que el examen físico se convierta en una experiencia que permita brindar explicación y a su vez observar el examen de sus genitales). Correlacionar la maduración sexual con el crecimiento físico para correlacionar el proceso puberal con el sexo y la edad. Acompañar y remitir para asesoría en procesos de identidad de género y orientación sexual diversa.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 A partir del examen oftalmoscópico se debe explorar y evaluar las estructuras del segmento anterior y posterior, tales como anexos oculares, conjuntiva, córnea, esclera anterior, iris, cristalino, cámara anterior, vítreo, retina, cabeza del nervio óptico, estructuras vasculares retinales y coroides entre otras. Indagar acerca de preocupaciones sobre problemas visuales.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Incluye la evaluación del estado del oído y su integridad a través de la inspección visual, la otoscopia, y de las funciones de la articulación, voz, habla y desempeño comunicativo.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Realizar el reconocimiento del estado de las estructuras dentomaxilofaciales (cara, maxilar y mandíbula, labios y comisura labial, mejillas-carrillos, encía, zona retro molar, piso de boca, superficie ventral y dorsal de lengua, paladar duro y blando, oro-faringe, articulación temporomandibular (ATM) y estructuras dentales) y de su funcionalidad en los procesos de masticación, deglución, habla, fonación, socialización, afecto y autoestima, entre otras.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 Adicional a los hallazgos a partir de la anamnesis, se debe valorar la presencia de lesiones físicas por exposición a situaciones de violencia intrafamiliar, violencia sexual y de género o por violencia de pares (matoneo), lesiones por consumo de SPA, lesiones autoinflingidas. Si identifica algún riesgo en salud mental se debe aplicar el instrumento de tamizaje Reporting Questionnaire for Children (RQC) para los adolescentes entre 12 y 15 años y Self Report Questionnaire (SRQ) a partir de los 16 años. Ante el consumo de SPA se debe aplicar el instrumento Substance Involvement Screening Test (ASSIST) y en el de alcohol el instrumento Alcohol Use Disorders Identification Test (AUDIT).
    h4.mb-5 Plan de cuidado infancia 
    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | Atenciones complementarias de educación en adolescentes desescolarizados, apoyo alimentario, transferencias monetarias condicionadas, prevención y atención del trabajo infantil, oferta de ocio y recreación, entre otros. Definir atenciones a la familia.
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | diagnóstico, tratamiento y derivación. Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | Verificar o canalizar atenciones en el marco de la RPMS (en caso dado atenciones de la RIAMP). Importante realizar tamizaje de anemia en niñas una vez entre los 10 y los 13 años y luego una vez entre los 14 y los 17 años. Vacunación con VPH (Vacuna Papiloma Humano) niñas entre 12 a 17 años y Td (Toxoide Tetánico y Diftérico del adulto) según antecedente vacunal. Consulta de anticoncepción cuando el adolescente presenta prácticas sexuales coitales sin uso de anticoncepción o tienen intención o riesgo de inicio de relaciones sexuales. De preferencia esta consulta debe realizarse de forma inmediata a este procedimiento (Nota: menores de 14 años). Verificar tamizajes en caso de relaciones sexuales sin protección para VIH/sida y Sífilis. Test de embarazo en caso de sospecha. Tener presente la valoración y atenciones de salud bucal. Aclarar para cuando se proyecta la siguiente consulta. 
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | Realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta
            li 
              .lista-ol--cuadro__vineta
                span I
              p 
                strong Información en Salud:
              |
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                | Remitir a intervenciones colectivas del Plan de Intervenciones Colectivas de acuerdo con oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                | Educación para la salud incluye la canalización a escenario de educación grupal para la salud (capacidades de cuidado de la salud, alimentación y nutrición, ejercicio de los derechos sexuales y derechos reproductivos, cesación de tabaco en adolescentes con tabaquismo o exposición al humo del tabaco, habilidades para la vida, habilidades socioemocionales para la promoción de la salud mental, establecimiento de relaciones sanas y constructivas y el afrontamiento de sucesos vitales). En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales (dificultades de afrontamiento, con dificultades para toma de decisiones, sin o con poco apoyo familiar, preocupaciones por su imagen corporal o peso, entre otras).  Considerar en estos ciclos, incorporar sesiones de trabajo con las familias o ubicar atenciones dirigidas a la familia específicamente, de acuerdo a los hallazgos.

    .h4.mb-4 Instrumentos, insumos y dispositivos en la adolescencia

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de medicina general, medicina familiar o enfermería. <br>Instrumentos:

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario VALE 
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          |	Listas de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación (Sugerido).
                        li
                          i.fas.fa-check
                          | Familiograma y Ecomapa.
                        li
                          i.fas.fa-check
                          | Test de Tanner y Valoración de los derechos sexuales y reproductivos.
                        li(style="text-align:left;")
                          i.fas.fa-check
                          |RQC (tamizaje de alteraciones de salud mental – adolescentes hasta los 15 años); 
                          |SRQ Cuestionario de auto reporte(personas desde los 16 años para detectar alteraciones de salud mental). 
                          
                        li(style="text-align:left;")
                          i.fas.fa-check
                          |Test ASSIST (Smoking and Substance Involvement Screening), en caso de sospecha de consumo de sustancias psicoactivas y tabaco; Test AUDIT (Alcohol Use Disorders Identification Test), en caso de sospecha de consumo problemático de alcohol.
                        li
                          i.fas.fa-check
                          | Valoración de la identidad y Valoración de la autonomía.
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio equipo de órganos, tensiómetro, cinta métrica, pulsioxímetro, optotipos morfoscópicos o angulares para agudeza visual balanza y tallímetro.









    #t_2_4.titulo-segundo
      .h2 2.4 Juventud

    p.mb-4 #[strong La población sujeto son] jóvenes de 18 a 28 años, 11 meses y 29 días.

    p.mb-4 En la juventud el individuo consolida tanto su desarrollo biológico como su proyecto de vida, se realiza una transición relacionada con la mayoría de edad que implica la vinculación al mercado laboral o la continuación de estudios de formación técnica o profesional. Cobran mayor relevancia la formación de estilos de vida que definirán el riesgo de desarrollar enfermedades no transmisibles en momentos posteriores de su vida. El riesgo de consumo abusivo de alcohol y sustancias psicoactivas se incrementa. También es una etapa en la que se inicia la conformación de la nueva familia.

    figure.mb-5
      img(src='@/assets/curso/tema2/img1d.svg', alt='población sujeta')

    p.mb-5 Esta atención se realizará a través de una consulta por profesionales en medicina general o medicina familiar de acuerdo con lo contemplado en el esquema de intervenciones/atenciones en salud individuales, definido en el lineamiento técnico y operativo de la RPMS. Es muy importante para la valoración en este momento de curso de vida, contar con capacidades para valorar integralmente y apoyar el ejercicio de los derechos sexuales y reproductivos, sospecha de embarazo, anticoncepción, ITS-VIH-SIDA, diversas formas de violencia, salud mental, prevención del suicidio, prevención del consumo de alcohol, prevención del consumo de tabaco y cesación del consumo de tabaco y drogas, aspectos bioéticos y legales en la atención de joven, manejo para la intervención de grupos específicos en situación de vulnerabilidad (diversidad sexual, discapacidad, indígenas, migrantes, infractores de ley), donde el abordaje articulado a otros sectores y otras ofertas es esencial y donde el trabajo comunitario – colectivo propicia el fortalecimiento del liderazgo y participación juvenil, entre otros.

    .h4.mb-4 Anamnesis juventud
    p.mb-5 Se recomienda hacer énfasis en: 

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            //1
            .col-md-11.mb-4.mb-md-0
              p Verificar la realización y los resultados de las pruebas de tamizaje para detección temprana de riesgo cardiovascular y de cáncer de cuello uterino. Gestionar previamente para contar con el resultado.


          .row
            //2
            .col-md-11.mb-4.mb-md-0
              p Antecedentes familiares, especialmente alteraciones hereditarias, así como trastornos o problemas de salud mental y consumo de SPA y alcohol propio y en la familia y exposición a violencias.

          .row
            //3
            .col-md-11.mb-4.mb-md-0
              p Desarrollo, aprendizaje y vida laboral: desempeño académico, rastrear antecedente de trabajo infantil y/o adolescente. Tipo de labor, carga laboral actual, exposición a riesgos.

          .row
            //4
            .col-md-11.mb-4.mb-md-0
              p Consumo y hábitos alimentarios, especialmente patrón de comidas, tipo de alimentos y “dietas”.

          .row
            //5
            .col-md-11.mb-4.mb-md-0
              p Rutinas y hábitos: sueño, actividad física, uso de tiempo libre, actividad física, manejo del estrés y situaciones de alta tensión, práctica frecuente del autoexamen de seno y autoexamen de testículo.

          .row
            //6
            .col-md-11.mb-4.mb-md-0
              p Valoración de la dinámica familiar. APGAR familiar - Familiograma.

          .row
            //7
            .col-md-11.mb-4.mb-md-0
              p Condiciones de vida, del contexto social y las redes de apoyo. Ecomapa

          .row
            //8
            .col-md-11.mb-4.mb-md-0
              p Avance en los compromisos acordados en sesiones de educación individual previas. Preocupaciones de salud. 
          
          .row
            //9
            .col-md-11.mb-4.mb-md-0
              p Reconocimiento y ejercicio de Derechos Sexuales y Reproductivos y vivencia de la sexualidad. Acompañamiento y derivación en proceso de orientación sexual e identidad de género y vivencia del mismo.

    .h4.mb-4 Examen físico completo en la juventud  

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales y examen físico completo.
              p.mb-2 Incluyendo la valoración de las mamas (inspeccionar simetría, contorno o forma de la misma, el color, los pezones y la areola); areola);identificar curvaturas anormales en tórax; así como identificar lesiones o alteraciones de la piel, heridas o hematomas que permitan identificar posibles traumas o lesiones por exposición al sol tipo queratosis actínicas, la cual es relevante buscarlas por ser premalignas y alteraciones en la sensibilidad (hipostesia o anestesia), las cuales son características de enfermedad de Hansen. En el caso de que la persona se encuentre con limitaciones de movilidad deben ser evaluadas las áreas de presión. Realizar pruebas para revisar insuficiencia venosa en miembros inferiores y la funcionalidad de las articulaciones.
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 Además, identificar y detectar casos de ingesta excesiva o deficiente de calorías o nutrientes a partir de la alimentación.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del riesgo cardiovascular y metabólico
              p.mb-2 Los instrumentos que permiten esto se encuentran condensados en la aplicación “Conoce tu riesgo” En caso de identificar riesgo cardiovascular medio, alto, muy alto o riesgo moderado y alto de diabetes, deberá ordenar los siguientes exámenes como insumo para realizar la gestión de riesgo respectiva: glicemia basal, perfil lipídico (colesterol de alta densidad HDL, colesterol de baja densidad LDL, colesterol total triglicéridos), creatinina y uroanálisis; según los resultados de los exámenes se debe derivar a la ruta integral de atención en salud para la población con riesgo o presencia de alteraciones cardio cerebro vascular metabólica.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual y reproductiva
              p.mb-2 Identificar cambios físicos y psicológicos propios del momento que afectan la participación o la satisfacción en las actividades sexuales (signos y síntomas relacionados con la funcionalidad sexual, orientación sexual, deseo, excitación, lubricación, orgasmo, satisfacción, erección, eyaculación, dolor). Evaluar las condiciones médicas que afectan la salud sexual incluyendo la depresión, la enfermedad cardíaca, enfermedad cerebrovascular, EPOC y diabetes. Mujeres con intención reproductiva o en gestación, deben derivarse a la Ruta Materno Perinatal.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 Se puede desarrollar mediante cuatro técnicas: oftalmoscopia a distancia, directa, e indirecta y la biomicroscopia con lentes accesorias. Si la agudeza visual se encuentra reducida por debajo de 20/50, debe derivarse a una consulta resolutiva por optometría para confirmar o descartar un componente refractivo

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Incluye la evaluación del estado del oído y su integridad. Pueden incorporarse dos preguntas de percepción: ¿Tiene usted o ha tenido algún problema en el oído? y ¿Cree usted que escucha bien?.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Realizar el reconocimiento del estado de las estructuras dentomaxilofaciales y de su funcionalidad en los procesos de masticación, deglución, habla, fonación, socialización, afecto y autoestima, entre otras.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 Incluye el examen mental (pensamiento – lógica, contenido y velocidad, lenguaje – coherencia, fluidez-, afecto y estado de ánimo, percepciones, sensorio – orientación, concentración, memoria, cálculos, razonamiento abstracto-, introspección y juicio); y la valoración de las estrategias de afrontamiento frente a sucesos vitales (normativos y no normativos) con el fin de prevenir alteraciones en la salud e identificar factores de riesgo para trastornos de comportamiento, problemas y trastornos mentales. Apoyarse para la detección de alteraciones en los instrumentos disponibles: SRQ - Cuestionario de auto reporte (personas desde los 16 años para detectar alteraciones de salud mental); Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En caso que la persona asuma un rol de cuidador y exista la sospecha de sobrecarga del cuidador (Escala de Zarit) – así mismo considerar en caso de cuidadores de personas con dependencia funcional.
    
    h4.mb-5 Plan de cuidado juventud 
    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | Atenciones complementarias de cultura, deporte, recreación, educación, búsqueda de empleo, programas de apoyo alimentario, entre otras. Promover y facilitar la participación de los jóvenes. Definir atenciones a la familia. 
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | diagnóstico, tratamiento y derivación. Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | Verificar o canalizar atenciones en el marco de la RPMS (en caso dado atenciones de la RIAMP). Ofrecer consulta preconcepcional y de orientación para la anticoncepción, de preferencia esta consulta debe realizarse de forma inmediata a este procedimiento. Tener presenta la valoración de salud bucal. Verificar vacunación en mujeres, Td (Toxoide Tetánico y Diftérico del adulto), según antecedente vacunal. Tamizaje de cuello uterino (citología) . Paraclínicos para tamizaje de riesgo cardiovascular si se identifica riesgo : glicemia basal, perfil lipídico, creatinina, uroanálisis según clasificación de riesgo. Tamizajes en caso de relaciones sexuales sin protección (VIH/sida, Sífilis, hepatitis B). Tamizaje para Hepatitis C, a las personas que recibieron transfusiones de sangre antes de 1996 en Colombia. Aclarar para cuando se proyecta la siguiente consulta.
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | Realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta.
            li 
              .lista-ol--cuadro__vineta
                span I
              p 
                strong Información en Salud:
              |
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                | Remitir a intervenciones colectivas del Plan de Intervenciones Colectivas de acuerdo a oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                | Educación para la salud incluye la canalización a escenario de educación grupal para la salud (capacidades de cuidado de la salud, alimentación y nutrición, ejercicio de los derechos sexuales y derechos reproductivos, cesación de tabaco en jóvenes con tabaquismo o exposición al humo del tabaco, habilidades para la vida, habilidades socioemocionales para la promoción de la salud mental, establecimiento de relaciones sanas y constructivas y el afrontamiento de sucesos vitales). En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales, (dificultades de afrontamiento, con dificultades para toma de decisiones, sin o con poco apoyo familiar, preocupaciones por su imagen corporal o peso, entre otras).

    .h4.mb-4 Instrumentos, insumos y dispositivos en la juventud

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de medicina general, medicina familiar. <br>Instrumentos:

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario de Finnish Risk Score y Tablas de Estratificación de la OMS  
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          | Familiograma y Ecomapa.
                        li
                          i.fas.fa-check
                          | Listas de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación (sugerido).
                        li(style='text-align:left;')
                          i.fas.fa-check
                          | Salud mental y consumo de SPA: SRQ Cuestionario de auto reporte (personas desde los 16 años para detectar alteraciones de salud mental). Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En caso de que la persona asuma un rol de cuidador y exista la sospecha de sobrecarga del cuidador (Escala de Zarit) – así mismo considerar en caso de cuidadores de personas con dependencia funcional.
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio equipo de órganos, tensiómetro, cinta métrica, pulsioxímetro, optotipos morfoscópicos o angulares para agudeza visual balanza y tallímetro.







    #t_2_5.titulo-segundo
      .h2 2.5 Adultez

    p.mb-4 #[strong La población sujeto son ] adultos de 29 a 59 años, 11 meses y 29 días
    p.mb-4 Se configura en un proceso dinámico, en donde continúa el desarrollo y las personas son capaces de establecer metas y poner en marcha los recursos necesarios para alcanzarlas, configurando sus trayectorias evolutivas personales y aprovechando las oportunidades disponibles en sus contextos. En este sentido, es importante subrayar que los patrones de desarrollo adulto no se configuran en algo novedoso, sino en la consolidación de los aprendizajes previos y un perfilamiento cada vez más claro de la individualidad. Por lo tanto, las intervenciones en este momento de vida permiten consolidar los aprendizajes y fortalecer las capacidades aprendidas para posibilitar el crecimiento y el logro de los objetivos planeados por cada individuo.

    figure.mb-5
      img(src='@/assets/curso/tema2/img1e.svg', alt='población sujeta')

    p.mb-5 La valoración integral se realizará a través de una consulta por profesionales en medicina general o medicina familiar de acuerdo con lo contemplado en el esquema de intervenciones/atenciones en salud individuales definido en el lineamiento técnico y operativo de la Ruta de Promoción y Mantenimiento de la Salud (RPMS). Se requiere contar con capacidades técnicas e individuales, con un enfoque de curso de vida, que permita reconocer las características y potencialidades de la adultez, los efectos acumulativos para la salud a lo largo de la vida, la influencia de los sucesos vitales y la importancia de las vidas interconectadas en el desarrollo.

    .h4.mb-4 Anamnesis adultez
    p.mb-5 Se recomienda hacer énfasis en: 

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            //1
            .col-md-11.mb-4.mb-md-0
              p Verificar la realización y los resultados de las pruebas de tamizaje para detección temprana de riesgo cardiovascular, cáncer de cuello uterino, cáncer de mama, cáncer de próstata y de colon y recto. Gestionar previamente para contar con el resultado.


          .row
            //2
            .col-md-11.mb-4.mb-md-0
              p Antecedentes familiares, enfermedades especialmente en familiares cercanos que sean heredables como hipertensión arterial, diabetes mellitus, dislipidemias, enfermedad coronaria, cáncer, cerebrovasculares, alergias, asma, tuberculosis, gota, hemofilia, glaucoma; así como enfermedades degenerativas o genéticas, trastornos mentales y/o consumo de SPA y/o alcohol propio o en la familia y exposición a violencias.

          .row
            //3
            .col-md-11.mb-4.mb-md-0
              p Desarrollo y vida laboral: tipo de labor, carga laboral actual, exposición a riesgos.

          .row
            //4
            .col-md-11.mb-4.mb-md-0
              p Consumo y hábitos alimentarios, especialmente patrón de comidas, tipo de alimentos y “dietas”.

          .row
            //5
            .col-md-11.mb-4.mb-md-0
              p Rutinas y hábitos: sueño, actividad física, uso de tiempo libre, actividad física. manejo del estrés y situaciones de alta tensión, práctica frecuente del autoexamen de seno y autoexamen de testículo. Valorar exposición al humo de leña o carbón, consumo de tabaco (Fumador o exfumador: N° de paquetes/año = Número de cigarrillos diarios x número de años / 20). En caso de identificar factores de riesgo para EPOC se debe aplicar cuestionario.

          .row
            //6
            .col-md-11.mb-4.mb-md-0
              p Valoración de la dinámica familiar. APGAR familiar - Familiograma.

          .row
            //7
            .col-md-11.mb-4.mb-md-0
              p Condiciones de vida, del contexto social y las redes de apoyo. Ecomapa

          .row
            //8
            .col-md-11.mb-4.mb-md-0
              p Avance en los compromisos acordados en sesiones de educación individual previas. Preocupaciones de salud. 
          
          .row
            //9
            .col-md-11.mb-4.mb-md-0
              p Reconocimiento y ejercicio de Derechos Sexuales y Reproductivos y vivencia de la sexualidad en sus diferentes componentes (reproductivo, afectivo, erótico y comunicativo-relacional).

    .h4.mb-4 Examen físico completo en la adultez  

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales y examen físico completo.
              p.mb-2 Incluyendo la valoración de las mamas (inspeccionar simetría, contorno o forma de la misma, el color, los pezones y la areola); areola);identificar curvaturas anormales en tórax; así como identificar lesiones o alteraciones de la piel, heridas o hematomas que permitan identificar posibles traumas o lesiones por exposición al sol tipo queratosis actínicas, la cual es relevante buscarlas por ser premalignas y alteraciones en la sensibilidad (hipostesia o anestesia), las cuales son características de enfermedad de Hansen. En el caso de que la persona se encuentre con limitaciones de movilidad deben ser evaluadas las áreas de presión. Realizar pruebas para revisar insuficiencia venosa en miembros inferiores y la funcionalidad de las articulaciones.
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 Además, identificar y detectar casos de ingesta excesiva o deficiente de calorías o nutrientes a partir de la alimentación.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del riesgo cardiovascular y metabólico
              p.mb-2 Los instrumentos que permiten esto se encuentran condensados en la aplicación “Conoce tu riesgo” En caso de identificar riesgo cardiovascular medio, alto, muy alto o riesgo moderado y alto de diabetes, deberá ordenar los siguientes exámenes como insumo para realizar la gestión de riesgo respectiva: glicemia basal, perfil lipídico (colesterol de alta densidad HDL, colesterol de baja densidad LDL, colesterol total triglicéridos), creatinina y uroanálisis; según los resultados de los exámenes se debe derivar a la ruta integral de atención en salud para la población con riesgo o presencia de alteraciones cardio cerebro vascular metabólica.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual y reproductiva
              p.mb-2 Identificar cambios físicos y psicológicos propios del momento que afectan la participación o la satisfacción en las actividades sexuales (signos y síntomas relacionados con la funcionalidad sexual, orientación sexual, deseo, excitación, lubricación, orgasmo, satisfacción, erección, eyaculación, dolor). Evaluar las condiciones médicas que afectan la salud sexual incluyendo la depresión, la enfermedad cardíaca, enfermedad cerebrovascular, EPOC y diabetes. Mujeres con intención reproductiva o en gestación, deben derivarse a la Ruta Materno Perinatal.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 Se puede desarrollar mediante cuatro técnicas: oftalmoscopia a distancia, directa, e indirecta y la biomicroscopia con lentes accesorias. Si la agudeza visual se encuentra reducida por debajo de 20/50, debe derivarse a una consulta resolutiva por optometría para confirmar o descartar un componente refractivo

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Incluye la evaluación del estado del oído y su integridad. Pueden incorporarse dos preguntas de percepción: ¿Tiene usted o ha tenido algún problema en el oído? y ¿Cree usted que escucha bien?.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Realizar el reconocimiento del estado de las estructuras dentomaxilofaciales y de su funcionalidad en los procesos de masticación, deglución, habla, fonación, socialización, afecto y autoestima, entre otras.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 Incluye el examen mental (pensamiento – lógica, contenido y velocidad, lenguaje – coherencia, fluidez-, afecto y estado de ánimo, percepciones, sensorio – orientación, concentración, memoria, cálculos, razonamiento abstracto-, introspección y juicio); y la valoración de las estrategias de afrontamiento frente a sucesos vitales (normativos y no normativos) con el fin de prevenir alteraciones en la salud e identificar factores de riesgo para trastornos de comportamiento, problemas y trastornos mentales. Apoyarse para la detección de alteraciones en los instrumentos disponibles: SRQ - Cuestionario de auto reporte (personas desde los 16 años para detectar alteraciones de salud mental); Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En caso que la persona asuma un rol de cuidador y exista la sospecha de sobrecarga del cuidador (Escala de Zarit) – así mismo considerar en caso de cuidadores de personas con dependencia funcional.


    h4.mb-5 Plan de cuidado adultez 
    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container  
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | Atenciones complementarias de cultura, deporte, recreación, educación, búsqueda de empleo, programas de apoyo alimentario, atención a víctimas, entre otras. Definir atenciones a la familia. 
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | Verificar o canalizar atenciones en el marco de la RPMS (en caso dado atenciones de la RIAMP). Ofrecer consulta preconcepcional y de orientación para la anticoncepción, de preferencia esta consulta debe realizarse de forma inmediata a este procedimiento. Tener presente la valoración y atenciones de salud bucal. Verificar vacunación en mujeres, Td (Toxoide Tetánico y Diftérico del adulto), según antecedente vacunal, tamizaje para detección temprana de riesgo cardiovascular, cáncer de cuello uterino, cáncer de mama, cáncer de próstata y de colon y recto. Tamizaje de riesgo cardiovascular cada 5 años: glicemia basal, perfil lipídico (colesterol de alta densidad HDL, colesterol de baja densidad LDL, colesterol total triglicéridos), creatinina y uroanálisis. Tamizajes en caso de relaciones sexuales sin protección (VIH/sida, Sífilis, hepatitis B). Tamizaje para Hepatitis C, a las personas que recibieron transfusiones de sangre antes de 1996 en Colombia. Aclarar para cuando se proyecta siguiente la consulta.
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | Realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta
            li 
              .lista-ol--cuadro__vineta
                span I
              p 
                strong Información en Salud:
              |
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                | Remitir a intervenciones colectivas del Plan de Intervenciones Colectivas de acuerdo con oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                | Educación para la salud incluye la canalización a escenario de educación grupal para la salud (capacidades para el cuidado de la salud, alimentación y nutrición, ejercicio de los derechos sexuales y derechos reproductivos, habilidades socioemocionales para la promoción de la salud mental, establecimiento de relaciones sanas y constructivas y afrontamiento de sucesos vitales). En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales, (dificultades de afrontamiento, con dificultades para toma de decisiones, sin o con poco apoyo familiar, tabaquismo, entre otras).

    .h4.mb-4 Instrumentos, insumos y dispositivos en la adultez

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de medicina general, medicina familiar o enfermería. <br>Instrumentos:

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario de Finnish Risk Score y Tablas de Estratificación de la OMS 
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          | Familiograma y Ecomapa.
                        li(style='text-align:left;')
                          i.fas.fa-check
                          | Listas de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación (sugerido).
                        li(style='text-align:left;')
                          i.fas.fa-check
                          | Salud mental y consumo de SPA: SRQ Cuestionario de auto reporte (personas desde los 16 años para detectar alteraciones de salud mental). Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En caso de que la persona asuma un rol de cuidador y exista la sospecha de sobrecarga del cuidador (Escala de Zarit) – así mismo considerar en caso de cuidadores de personas con dependencia funcional.
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio equipo de órganos, tensiómetro, cinta métrica, pulsioxímetro, optotipos morfoscópicos o angulares para agudeza visual balanza y tallímetro.





    #t_2_6.titulo-segundo
      .h2 2.6 Vejez



    p.mb-4 La población sujeto son personas de 60 años o más. Existen diversos enfoques para comprender el proceso de envejecimiento y las características de la vejez; sin embargo, estos pueden vivirse desde las pérdidas o desde la plenitud, de acuerdo con los efectos acumulados a lo largo de la vida, la confluencia de las oportunidades y los recursos, tanto individuales como generacionales, que afectan el continuo de la vida de cada persona, así como su condición y posición social y su conjugación con la edad, el género, la clase social y el origen étnico, que representan ciertas diferencias en el acceso y disfrute de dichos recursos y oportunidades. La valoración integral en la vejez agrupa un conjunto de atenciones coordinadas, complementarias y efectivas para determinar el estado de salud de la persona adulta mayor, detectar tempranamente la exposición a riesgos y alteraciones para su prevención y/o derivación para manejo oportuno de salud requerido, y a partir de los hallazgos potenciar las capacidades, habilidades y prácticas de cuidado de la salud, la promoción del envejecimiento activo y la construcción concertada del plan de cuidado de la persona adulta mayor.


    figure.mb-5
      img(src='@/assets/curso/tema2/img1f.svg', alt=' La población sujeto son personas de 60 años o más')

    p.mb-5 La consulta de valoración integral de la persona adulta mayor debe ser realizada por profesionales en medicina general o medicina familiar con conocimientos y experiencia en gerontología y geriatría. Importante favorecer el envejecimiento activo como proceso de optimización de las oportunidades en salud, participación y seguridad de las personas adultas mayores; el mantenimiento de la funcionalidad y la calidad de vida de las personas adultas mayores como principales indicadores de salud y bienestar. prevención de diversas formas de violencia, uso de tecnologías que inciden en la prevención de la dependencia y la fragilidad; estrategias que impulsen la solidaridad, la inserción social y el intercambio intergeneracional en el marco de las acciones dirigidas a la población adulta mayor.

    .h4.mb-4 Anamnesis vejez
    p.mb-5 Se recomienda hacer énfasis en: 

    .row.justify-content-center.mb-4
      .col-lg-10.alig-self-center
        PasosA.color-acento-contenido.mb-5(tipo='n')
          .row
            //1
            .col-md-11.mb-4.mb-md-0
              p Antecedentes personales. 
              p indagar factores de riesgo o presencia de enfermedades metabólicas, cardiovasculares, pulmonares (EPOC), tuberculosis, cáncer, alteraciones sensoriales, neurológicas, músculo esqueléticas, mentales o del comportamiento, manejo del estrés, enfermedades transmisibles, infecciones de trasmisión sexual, urológicas, exposición a riesgos psicosociales para violencias, abandono, enfermedades o accidentes laborales, exposición a factores de riesgo derivados del trabajo.


          .row
            //2
            .col-md-11.mb-4.mb-md-0
              p Antecedentes familiares, enfermedades que presenten o hayan presentado familiares cercanos por la posibilidad que sean heredables, trastornos o problemas mentales y/o consumo de SPA o alcohol propio o en la familia, conducta suicida, consumo de alcohol y otras sustancias psicoactivas, exposición a violencias.

          .row
            //3
            .col-md-11.mb-4.mb-md-0
              p.mb-2 #[strong  Presencia de síndromes geriátricos, ] un diagnóstico adecuado permite identificar riesgos relacionados y definir planes de tratamiento tempranos y prácticos que inciden en la disminución de la morbilidad, discapacidad y mortalidad evitables de las personas adultas mayores:
              .row.justify-content-center.mb-4
                .col-lg-11.align-self-center
                  ol.lista-ol--cuadro
                    li 
                      .lista-ol--cuadro__vineta
                        span a
                      p
                        strong Deterioro cognoscitivo: 
                        | se caracteriza por la pérdida o reducción temporal o permanente de las funciones mentales superiores (lenguaje, razonamiento, cálculo, memoria, praxias, gnosias, etc.), siendo el más común la pérdida de la memoria; por lo cual debe indagarse al respecto.
                      
                    li 
                      .lista-ol--cuadro__vineta
                        span b
                      p
                        strong Inmovilidad: 
                        | restricción involuntaria en la capacidad de transferencia y desplazamiento, generalmente debido a dificultades físicas, funcionales y psicosociales. Es necesario indagar en antecedentes o presencia de enfermedades osteoarticulares como la artrosis, osteoporosis, fracturas, debilidad muscular, lesiones en los pies, patologías cardiovasculares y trastornos neuropsiquiátricos, entre otros, factores de riesgo que limiten la movilidad o el desplazamiento de la persona.

                    li 
                      .lista-ol--cuadro__vineta
                        span c
                      p
                        strong Inestabilidad y caídas: 
                        | es el riesgo de precipitaciones repentinas al suelo de manera involuntaria, que en algunas ocasiones pueden estar acompañadas con pérdida de la conciencia. Evaluar presencia de sarcopenia o debilidad, alteraciones de la marcha, limitaciones de la movilidad, déficit visual, deterioro cognoscitivo, diabetes mellitus tipo II, hipotensión ortostática, consumo de medicamentos con efecto sedante, dependencia funcional, y factores del entorno (tapetes, escaleras sin pasamanos, espacios con baja visibilidad entre otros). Asimismo, preguntar antecedentes de caídas anteriores y analizar los hallazgos de valoración integral.
                    li 
                      .lista-ol--cuadro__vineta
                        span d
                      p
                        strong Fragilidad: 
                        | es un incremento de la vulnerabilidad a estresores de baja intensidad. Debe evaluarse: fuerza de presión y velocidad de la marcha, pérdida de peso, ausencia de energía y poca actividad física; y un fenotipo multidominio basado en un déficit en salud (enfermedades, discapacidades, anormalidades radiográficas, electrocardiografías o de laboratorio).
                    li 
                      .lista-ol--cuadro__vineta
                        span e
                      p #[strong Incontinencia de esfínteres:] además de su significado médico, tiene un profundo impacto en el bienestar de los adultos mayores, comprometiendo la autoestima y la dignidad de los mismos. Indagar infecciones, alteraciones psicológicas, delirios o estados confusionales, tratamientos farmacológicos, lesiones medulares, debilidad de suelo pélvico, entre otras causas. 
                      
                      
                    li 
                      .lista-ol--cuadro__vineta
                        span f
                      p
                        strong Depresión: 
                        | en el adulto mayor se presenta con algunos síntomas que son infrecuentes en personas jóvenes: deterioro cognitivo que simula una demencia, ansiedad, insomnio y somatización. Importante indagar acerca de la pérdida de peso, irritabilidad, insomnio, cambios del estado de ánimo, somatización, pérdida del apetito, hipoacusia y aislamiento social. Así mismo, indagar respecto al consumo de SPA o alcohol que puede estar asociado a afectaciones del estado de ánimo en este momento de curso de vida.
                    li 
                      .lista-ol--cuadro__vineta
                        span g
                      p
                        strong Iatrogenia: 
                        | la Iatrogenia medicamentosa se ha convertido en uno de los principales problemas de las personas mayores. Esto por dos razones básicas: porque el envejecimiento reduce los índices terapéuticos y también porque los pacientes geriátricos tienden a usar un número mayor de medicamentos, favoreciendo la interacción medicamentosa. Por consiguiente, en cada consulta es necesario analizar los medicamentos y dosis prescritas, así como los automedicados, los naturistas y homeopáticos; identificar posibles interacciones medicamentosas y fármaco-enfermedad.

          .row
            //4
            .col-md-11.mb-4.mb-md-0
              p Consumo y hábitos alimentarios, evaluar la regularidad en el patrón de comidas, el tipo de alimentos consumidos, así como “dietas” que puedan contribuir al desequilibrio nutricional que permitan identificar la ingesta excesiva o deficiente de calorías o nutrientes a partir de la alimentación.

          .row
            //5
            .col-md-11.mb-4.mb-md-0
              p Derechos Sexuales y Reproductivos y la vivencia de la sexualidad en sus componentes (reproductivo, afectivo, erótico y comunicativo- relacional) en condiciones de libertad, equidad y dignidad. Indagar: orientación sexual, identidad de género.

          .row
            //6
            .col-md-11.mb-4.mb-md-0
              p Hábitos y rutinas: actividad física, higiene oral y corporal (incluyendo lavado de manos), descanso y sueño, hábito intestinal y urinario, foto protección, prevención de accidentes, uso del tiempo libre y ocio.

          .row
            //7
            .col-md-11.mb-4.mb-md-0
              p Valoración o actualización de la conformación y dinámica de la familia a través del Familiograma y el APGAR familiar, a fin de comprender las condiciones de la familia.

          .row
            //8
            .col-md-11.mb-4.mb-md-0
              p 8.	Valoración o actualización de las condiciones de vida, del contexto social y las redes de apoyo social y comunitarias de la familia (Ecomapa).
          
          .row
            //9
            .col-md-11.mb-4.mb-md-0
              p 9.	Actividad laboral o económica actual y previa. Indagar sobre el tipo de labor, tipo de vinculación laboral y la antigüedad de la misma, la carga laboral.

          .row
            //10
            .col-md-11.mb-4.mb-md-0
              p Compromisos acordados en sesiones de educación individual previas y avances e inquietudes o preocupaciones.

    .h4.mb-4 Examen físico completo en la vejez 

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img6.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Signos vitales y examen físico completo.
              p.mb-2 Inspeccionar aspecto general para reconoces cambio en estado de ánimo y cuidado general que puede asociarse a depresión, abandono u otra situación. En el caso de que la persona se encuentre con limitaciones de movilidad deben ser evaluadas las áreas de presión.
    
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de capacidad funcional
              p.mb-2 alorar fuerza, sensibilidad, reflejos normales y patológicos, equilibrio, coordinación y temblor. Evaluar la marcha en el cambio de posición de sentado a de pie, desplazándose al menos 3 metros y luego al darse la vuelta y caminar de nuevo y finalmente al volver a sentarse (lo cual permite además detectar riesgo de caídas recurrentes). Para valorar independencia y funcionalidad utilizar los instrumentos definidos: índice de Barthel (independencia en actividades básicas de la vida diaria), escala de Lawton-Brody (nivel de dependencia en actividades instrumentales de la vida diaria) y test de Linda Fried.(detección temprana de personas adultas mayores con pre-fragilidad y fragilidad).

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del estado nutricional y seguimiento a los parámetros antropométricos
              p.mb-2 Además, identificar y detectar casos de ingesta excesiva o deficiente de calorías o nutrientes a partir de la alimentación. 
      
    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img14.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración del riesgo cardiovascular y metabólico
              p.mb-2 Los instrumentos que permiten esto se encuentran condensados en la aplicación “Conoce tu riesgo”. 

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud sexual y reproductiva
              p.mb-2 dentificar cambios físicos y psicológicos propios del momento que afectan la participación o la satisfacción en las actividades sexuales. Evaluar las condiciones médicas que afectan la salud sexual incluyendo la depresión, la enfermedad cardíaca, enfermedad cerebrovascular, EPOC y diabetes.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud visual
              p.mb-2 Se puede desarrollar mediante cuatro técnicas: oftalmoscopia a distancia, directa, e indirecta y la biomicroscopia con lentes accesorias. Si la agudeza visual se encuentra reducida por debajo de 20/50, debe derivarse a una consulta resolutiva por optometría para confirmar o descartar un componente refractivo.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img11.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud auditiva y comunicativa
              p.mb-2 Incluye la evaluación del estado del oído y su integridad. Pueden incorporarse dos preguntas de percepción: ¿Tiene usted o ha tenido algún problema en el oído? y ¿Cree usted que escucha bien?. Tener en cuenta si la persona es usuaria de ayudas audiológicas o no; antes de evaluar la comprensión del lenguaje y el desempeño comunicativo y las funciones de articulación, voz y habla.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-4
          img(src='@/assets/curso/tema2/img12.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud bucal
              p.mb-2 Realizar el reconocimiento del estado de las estructuras dentomaxilofaciales y de su funcionalidad en los procesos de masticación, deglución, habla, fonación, socialización, afecto y autoestima, entre otras.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              .h3 Valoración de la salud mental
              p.mb-2 Incluye la valoración de: apariencia y comportamiento (conducta espontánea, atuendo, apariencia, postura, expresiones, ademanes, acciones extrañas, movimientos repetitivos, lentos o excesivos, postura anormal, contacto visual deficiente, expresiones faciales anormales, manierismos); lenguaje y comunicación (disposición e interés para comunicarse, flujo general del lenguaje; alteraciones del lenguaje; tono y contenido del discurso; relación entre comunicación verbal y no verbal); procesos de pensamiento (velocidad del habla, continuidad del habla, contenido del discurso, temas recurrentes, alteraciones del pensamiento (del curso y del contenido); estado de ánimo y afecto (estado emocional predominante, estado emocional que acompaña el discurso, fluctuaciones en estado de ánimo, correspondencia entre afecto y discurso); funcionamiento cognoscitivo (nivel de concentración, atención y estado de alerta; funcionamiento amnésico (memoria a corto y largo plazo, amnesia, hipermnesia), vocabulario, nivel de conocimientos de acuerdo con contexto personal y social); funcionamiento sensorial y motor (conciencia del entorno, orientación en tiempo, espacio y persona; alteraciones sensoriales; coordinación motora; dificultades motoras); además de valorar estrategias de afrontamiento frente a sucesos vitales. Valorar riesgo de exposición a violencias. Apoyarse para la detección de alteraciones en los instrumentos disponibles: Minimental State (en caso de sospecha de sugerentes de deterioro cognitivo), Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En el caso de presentar dependencia, realizar valoración de sobrecarga en el cuidador (Escala de Zarit).
    
    
    h4.mb-5 Plan de cuidado vejez 
    .row.justify-content-center.mb-4
      .col-lg-11.align-self-center
        .v-line_container
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span S
              p
                strong Servicios sociales y atenciones a la familia: 
                | Atenciones complementarias de instituciones de cuidado como centros día, cultura, programas de apoyo alimentario o de subsidio al adulto mayor, entre otras. Definir atenciones a la familia.
              
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                strong Enfermedad: 
                | diagnóstico, tratamiento y derivación. Si de acuerdo con los hallazgos el médico identifica una patología, signo o síntoma que no ha sido diagnosticado anteriormente, en esta consulta se podrá generar el diagnóstico y establecer el manejo o tratamiento del evento en salud identificado. El registro de esta atención corresponde a una consulta de valoración integral y detección temprana con un diagnóstico relacionado.

            li 
              .lista-ol--cuadro__vineta
                span R
              p
                strong Ruta de Promoción y Mantenimiento de la Salud: 
                | Verificar o canalizar atenciones en el marco de la RPMS. Tener presente la valoración y atenciones de salud bucal. Verificación anual contra influenza. Tamizaje para cáncer de cuello uterino, cáncer de mama, cáncer de próstata y de colon y recto. Tamizaje de riesgo cardiovascular y metabólico cada 5 años: glicemia basal, perfil lipídico (colesterol de alta densidad HDL, colesterol de baja densidad LDL, colesterol total triglicéridos), creatinina y uroanálisis. Tamizajes en caso de relaciones sexuales sin protección (VIH/sida, Sífilis, hepatitis B). Tamizaje para Hepatitis C, a personas mayor de 50 años una vez en la vida. Aclarar para cuando se proyecta la siguiente consulta.
            li 
              .lista-ol--cuadro__vineta
                span V
              p
                strong Vigilancia en Salud: 
                | Realizar la notificación obligatoria de los eventos de interés en salud pública identificados durante la consulta
            li 
              .lista-ol--cuadro__vineta
                span I
              strong Información en Salud:
              .row
                .col-auto
                    a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-pdf.svg" style="width:10%; ")
                      .anexo__texto
                        p Anexo. Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias
                
            li 
              .lista-ol--cuadro__vineta
                span R
              p
                | Remitir a intervenciones colectivas del Plan de Intervenciones Colectivas de acuerdo a oferta territorial y entornos en los que se desarrolla.
            li 
              .lista-ol--cuadro__vineta
                span E
              p
                | Educación para la salud incluye la canalización a ciclo de entrenamiento cognitivo. En caso de situación o condición específica pueden programarse sesiones de educación para la salud individuales, (dificultades de afrontamiento, poco apoyo familiar o social, baja autoestima, experiencias negativas en relación con la vivencia de la sexualidad asociado a cultura negativa del envejecimiento, compromiso de la movilidad o la autonomía, riesgo de desprotección social, polifarmacia, alteraciones del sueño, tabaquismo, entre otras).

    .h4.mb-4 Instrumentos, insumos y dispositivos en la vejez

    p.mb-4 Cumplimiento de estándares de habilitación para la consulta de medicina general o medicina familiar. <br>Instrumentos:

    .row.mb-4.justify-content-center
      .col-lg-12.align-self-center
        .tabla-b.acento-contenido-contenido.mb-5 
          .tabla-b__header
            .h4.text-white.mb-0 Obligatorios
          table
            //caption Modelos gateway y agregadorg
            tbody.text-center
              tr(style="background-color:#f6f6f6;")
                th.text-center(style="font-weight: normal; font-size: 16px;") Tablas y gráficas de los patrones de referencia para clasificación nutricional 
                th.text-center(style="font-weight: normal; font-size: 16px;") Cuestionario de Finnish Risk Score y Tablas de Estratificación de la OMS 
                th.text-center(style="font-weight: normal; font-size: 16px;") APGAR familiar
                th.text-center(style="font-weight: normal; font-size: 16px;") Escala de Lawton-Brody*; Test de linda Fried*, Escala de Barthel*.  
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8") Opcionales:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6")
                  .row
                    .col-auto
                      ul.lista-ul
                        li
                          i.fas.fa-check
                          | Familiograma y Ecomapa.
                        li
                          i.fas.fa-check
                          | Minimental.
                        li(style='text-align:left;')
                          i.fas.fa-check
                          | Listas de chequeo de factores de riesgo de las enfermedades del oído, alteraciones auditivas, vestibulares y de la comunicación (Sugerido)
                        li(style='text-align:left;')
                          i.fas.fa-check
                          | Salud mental y consumo de SPA: SRQ, cuestionario de auto reporte (personas desde los 16 años para detectar alteraciones de salud mental). Preguntas Whooley (en mayores de 18 años para detectar depresión); GAD-2 – Escala para trastorno de ansiedad generalizado (mayores de 18 años). En caso de sospecha de consumo de sustancias psicoactivas y tabaco (ASSIST); o en caso de sospecha de consumo problemático de alcohol (AUDIT). En caso de que la persona asuma un rol de cuidador y exista la sospecha de sobrecarga del cuidador (Escala de Zarit) – así mismo considerar en caso de cuidadores de personas con dependencia funcional.
            
              tr
                th.text-center(colspan='4',style="font-weight: 900; font-size: 19px; color:#fff; background-color:#f579a8;") Insumos y materiales para examen físico pediátrico:
              tr
                td(colspan='4',style="font-weight: normal; font-size: 16px;background-color:#f6f6f6") Fonendoscopio equipo de órganos, tensiómetro, cinta métrica, pulsioxímetro, optotipos morfoscópicos o angulares para agudeza visual balanza y tallímetro.




















</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
