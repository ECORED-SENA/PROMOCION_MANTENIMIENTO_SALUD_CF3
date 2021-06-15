export default {
  global: {
    componenteFormativo:
      'Valoración integral en salud por momento del curso de vida',
    descripcionCurso:
      'Este componente está orientado a la apropiación de contenido técnico del procedimiento de atención en salud por profesional de medicina/enfermería/medicina familiar/pediatría, en el marco de la valoración integral por momento de curso de vida, incluyendo una alusión a los instrumentos incorporados, aspectos de información en salud a brindar y las consideraciones para definir el plan de cuidado.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principall.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      /*{
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Atención en salud en el marco de la valoración integral en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Talento humano',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Descripción general del procedimiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atención en salud por cada momento de curso de vida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Primera infancia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Infancia',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Adolescencia',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Juventud ',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Adultez',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Vejez',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Mónica Genith Castro ',
        cargo: 'Experta temática',
        centro: 'Red Nacional Bancos de Sangre y Servicio de Transfusión',
      },
      {
        nombre: 'Lía Marcela Gúiza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - grupo curso de vida',
      },
      {
        nombre: 'Natalia Munarth',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - grupo curso de vida',
      },
      {
        nombre: 'Magaly Jaimes',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - grupo curso de vida',
      },
      {
        nombre: 'Mily Ramírez',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - grupo curso de vida',
      },
      {
        nombre: 'Aura Lucia Toloza',
        cargo: 'Experta temática',
        centro:
          'Ministerio de Salud - Dirección de promoción y prevención - grupo curso de vida',
      },
      {
        nombre: 'Leidy Carolina Arias Aguirre',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricica Hoyos Sepúlveda ',
        cargo: 'Evaluador instruccional',
        centro: 'Centro para la Industria y la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Revisora de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: [
          'Carlos Julian Ramirez Benitez',
          'Camilo Andrés Villamizar Lizcano',
          'José Jaime Luis Tang Pinzón',
          'María Natalia Maldonado Delgado',
          'Wilson Andres Arenales Cáceres',
          'Zuleidy Maria Ruiz Torres',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Luis Arévalo',
        cargo: 'Diseño Grafico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'John Andres Ayala Angarita',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Rafael Augusto Mantilla López',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación de recursos',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'CENETEC (2011). Guía de práctica clínica de valoración geronto-geriátrica integral en el adulto mayor ambulatorio. Disponible en:',
      link:
        'http://www.cenetec.salud.gob.mx/descargas/gpc/CatalogoMaestro/491_GPC_valoracixn_geronto-geriatrica/IMSS-491-11-GRR_Valoracixn_geronto_geriatrica.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y protección Social (2015). ABECE Curso de Vida. Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ABCenfoqueCV.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2016). Resolucion 2465 de 2016. Por la cual se adoptan los indicadores antropométricos, patrones de referencia y puntos de corte para la clasificación antropométrica del estado nutricional de niñas, niños y adolescentes menores de 18 años de edad, adultos de 18 a 64 años de edad y gestantes adultas y se dictan otras disposiciones. Disponible en:',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=4909',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Resolución 3280 del 2 de agosto del 2018. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2018). Calculadora conoce tu riesgo peso saludable. Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/valoraturiesgo/_layouts/15/estilovidasaludable/datosusuario.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). Resolución 276 del 4 de febrero del 2019. Por la cual se modifica la Resolución 3280. Disponible en:',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-276-de-2019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social (2019). Resolución 3513 del 26 de diciembre de 2019. Por la cual se fijan los recursos de la Unidad de Pago por Capitación - UPC para financiar los servicios y tecnologías de salud, de los Regímenes Contributivo y Subsidiado para la vigencia 2020 y se dictan otras disposiciones. Disponible en:',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.%203513%20de%202019.pdf',
    },
    {
      referencia:
        'Organización Mundial de la Salud (2015). Informe Mundial sobre Envejecimiento y Salud.Disponible en:',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/186466/9789240694873_spa.pdf?sequence=1 ',
    },
    {
      referencia:
        'Organización Mundial de la Salud (2018). Recomendaciones sobre prácticas seleccionadas para el uso de anticonceptivos. Tercera edición. Disponible en:',
      link:
        'https://apps.who.int/iris/bitstream/handle/10665/259814/9789243565408-spa.pdf;jsessionid=26B089ACFB27E3E4C8D9B70C09528F4C?sequence=1',
    },
    {
      referencia:
        'UNFPA (2019). Lineamientos de atención en los servicios de salud que consideran el enfoque diferencial, de género y no discriminación para personas LGBTI. Disponible en:',
      link:
        'https://colombia.unfpa.org/sites/default/files/pub-pdf/LINEAMIENTOS%20EN%20ATENCION%20LGBTI-VERSION%20DIGITAL.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ANAMNESIS',
      significado:
        'Información aportada por el paciente y otros testimonios para confeccionar su historial médico.',
    },
    {
      termino: 'CONTEXTO',
      significado:
        'Entorno físico o de situación, político, histórico, cultural o de cualquier otra índole, en el que se considera un hecho.',
    },
    {
      termino: 'ENFOQUE CURSO DE VIDA',
      significado:
        'Es el enfoque que aborda los momentos del continuo de la vida y reconoce que el desarrollo humano y los resultados en salud dependen de la interacción de diferentes factores a lo largo del curso de la vida, de experiencias acumulativas y situaciones presentes de cada individuo influenciadas por el contexto familiar, social, económico, ambiental y cultural; entendiendo que invertir en atenciones oportunas en cada generación repercutirá en las siguientes y que el mayor beneficio de un momento vital puede derivarse de intervenciones hechas en un periodo anterior (MSPS, 2015)',
    },
    {
      termino: 'FACTORES DE RIESGO',
      significado:
        'son cualquier rasgo, característica o exposición de un individuo que aumente su probabilidad de sufrir una enfermedad o lesión. (OPS)',
    },
    {
      termino: 'GÉNERO',
      significado:
        'Se refiere a las identidades, las funciones y los atributos construidos socialmente sobre la mujer y el hombre y al significado social y cultural que se atribuye a esas diferencias biológicas. El género se constituye en un conjunto de valores, creencias y actitudes que se atribuyen a hombres y mujeres en relación con lo masculino o lo femenino (UNFPA, 2019).',
    },
    {
      termino: 'HITOS DEL DESARROLLO',
      significado:
        'Son destrezas físicas o comportamientos observados en niños y niñas durante su crecimiento y son diferentes  para cada rango de edad. (Pediatrics in Review Jul 2010).',
    },
    {
      termino: 'SUCESOS VITALES',
      significado:
        'Son acontecimientos favorables o desfavorables que cambian notablemente el curso de vida de un individuo y, en consecuencia, de varias de sus trayectorias vitales, por ejemplo, la concepción de un hijo, la muerte de un familiar, el desplazamiento forzado (MSPS, 2015).',
    },
    {
      termino: 'ORIENTACIÓN SEXUAL',
      significado:
        'Es la perspectiva que reconoce la diversidad, parte de la modificación del punto de vista heteronormado y propone el reconocimiento de distintas formas y expresiones de la sexualidad, es decir reconoce las divergencias. Lo heteronormado es la visión cultural a favor de las relaciones heterosexuales, las cuales son consideradas normales, naturales e ideales y son preferidas por sobre relaciones del mismo sexo o del mismo género (UNFPA, 2019).',
    },
    {
      termino: 'IDENTIDAD DE GÉNERO ',
      significado:
        'Es la vivencia interna e individual del género tal como cada persona la siente, la cual podría corresponder o no con el sexo asignado al momento del nacimiento. “La identidad de género es un concepto amplio que crea espacio para la autoidentificación, y que hace referencia a la vivencia que una persona tiene de su propio género. Así, la identidad de género y su expresión también toman muchas formas, algunas personas no se identifican ni como hombres ni como mujeres, y algunas se identifican como ambos” (UNFPA, 2019).',
    },
    {
      termino: 'SÍNDROMES GERIÁTRICOS',
      significado:
        'Estados de salud complejos que suelen presentarse sólo en las últimas etapas de la vida (en la vejez) y que no se enmarcan en categorías de morbilidad específicas. A menudo se deben a múltiples factores subyacentes y afectan a varios sistemas orgánicos, aunque muchas veces el motivo principal de consulta no refleja el proceso patológico de fondo (OMS, 2015).',
    },
    {
      termino: 'TAMIZAJE',
      significado:
        'Es definido por la OMS como “el uso de una prueba sencilla en una población saludable, para identificar a aquellos individuos que tienen alguna patología, pero que todavía no presentan síntomas”.',
    },
    {
      termino: 'TRASTORNOS DEL NEURODESARROLLO',
      significado:
        'Se define por déficits o alteraciones en el desarrollo produciendo limitaciones en áreas específicas o limitaciones globales, estos déficits ocasionan dificultades/limitaciones en lo personal, social, académico o en el funcionamiento ocupacional. (American Psychiatric Association 2013).',
    },
    {
      termino: 'VIDAS INTERCONECTADAS',
      significado:
        'Se afirma que las vidas humanas siempre están interconectadas y son interdependientes, generando redes de relaciones compartidas en diferentes contextos. Dicho de otra manera, es cómo las diferentes trayectorias y transiciones de un individuo en el curso de la vida se interrelacionan y afectan las trayectorias de otros individuos, familia y comunidad. De este concepto se deriva el análisis del efecto transgeneracional en la dinámica familiar (MSPS, 2015).',
    },
  ],
  complementario: [
    {
      texto:
        'Flynn JT, Kaelber DC, Baker-Smith CM, et al; SUBCOMMITTEE ON SCREENING AND MANAGEMENT OF HIGH BLOOD PRESSURE IN CHILDREN. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. Pediatrics. 2017; 140(3): e20171904',
      tipo: 'Pagina Web',
      link: 'https://www.aappublications.org/news',
    },
    {
      texto:
        'Organización Mundial de la salud (2007). Manual WHO Anthro para computadoras personales, Software para evaluar el crecimiento y desarrollo de los niños del mundo.',
      tipo: 'PDF',
      descarga: '/downloads/psicologia_de_la_moda.pdf',
    },
    {
      texto: 'Gobierno de Colombia (2016). Escala Abreviada de Desarrollo- 3.',
      tipo: 'PDF',
      descarga: '/downloads/Escala-abreviada-de-desarrollo-3.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social (2017). Anexos Test de valoración integral instrumentos.',
      tipo: 'PDF',
      descarga: '/downloads/anexo-instrumentos-valoracion-ruta-promocion.pdf',
    },
    {
      texto:
        'Ministerio de Salud y Protección Social (2020). Instrumentos sugeridos en la valoración integral para detección temprana de riesgos o alteraciones',
      tipo: 'PDF',
      descarga: '/downloads/instrumentos-aplicacion-sugerida-rpms.pdf',
    },
  ],
}
