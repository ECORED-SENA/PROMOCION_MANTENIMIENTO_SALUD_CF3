(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);p&&p(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"5cb61f8e","chunk-0206bfa0":"2b8f3705","chunk-04b93936":"ea805188","chunk-0cfca828":"287ddbed","chunk-13303073":"edb7935c","chunk-13a6037e":"80738a6a","chunk-1479a341":"5d7cab7f","chunk-1fb07a61":"e5a940ef","chunk-2c06842c":"535a7ded","chunk-2d208d90":"3458b945","chunk-2d21d0e2":"4650c2f9","chunk-2d22c123":"f49e187d","chunk-2e80bb9a":"4148ff4d","chunk-3c94cd2f":"6c39fe69","chunk-4cdd78c0":"920eb95c","chunk-515a8379":"b08dedde","chunk-522cec8c":"28921971","chunk-53ccb27e":"ff779605","chunk-59974754":"db8acba8","chunk-7432e4d4":"9d065437","chunk-766a929b":"03c3c721","chunk-839300a6":"1d5d7d49","chunk-c796899c":"5f0339ea",comple:"10b3eb1d",creditos:"0f5c3cbb",glosario:"56f043ee",intro:"a39e7c87",referencias:"66622e7b",tema1:"f261590b",tema2:"462c3253",tema3:"c1c9a4e8"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-3c94cd2f":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-7432e4d4":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3c94cd2f":"1dbe8d4a","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"727fc495","chunk-522cec8c":"99a35118","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"8a179e97","chunk-7432e4d4":"99a35118","chunk-766a929b":"92cde18b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"a143c12c",creditos:"f4093306",glosario:"9bdcb065",intro:"0e433876",referencias:"2b57b79a",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=s.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var l=t[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],p.parentNode.removeChild(p),n(t)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var p=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=t,s=(n("cf25"),n("2877")),l=Object(s["a"])(c,i,r,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("8c4f")),p=n("ae58"),m=n("7e58");o["a"].use(u["a"]);var f=new u["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=f,g=n("1c2c"),h=(n("becf"),n("7b17"),n("ab8b"),n("a3a0"),n("4bc7"),n("78df"),{global:{componenteFormativo:"Valoración integral en salud por momento del curso de vida",descripcionCurso:"Este componente está orientado a la apropiación de contenido técnico del procedimiento de atención en salud por profesional de medicina/enfermería/medicina familiar/pediatría, en el marco de la valoración integral por momento de curso de vida, incluyendo una alusión a los instrumentos incorporados, aspectos de información en salud a brindar y las consideraciones para definir el plan de cuidado.",imagenBannerPrincipal:n("bce2"),fondoBannerPrincipal:n("cb13")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Atención en salud en el marco de la valoración integral en salud",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Talento humano",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Descripción general del procedimiento",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Atención en salud por cada momento de curso de vida",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Primera infancia",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Infancia",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Adolescencia",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Juventud ",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Adultez",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Vejez",hash:"t_2_6"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"CENETEC (2011). Guía de práctica clínica de valoración geronto-geriátrica integral en el adulto mayor ambulatorio."},{referencia:"Ministerio de Salud y protección Social (2015). ABECE Curso de Vida. Disponible en:",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ABCenfoqueCV.pdf"},{referencia:"Ministerio de Salud y Protección Social (2016). Resolucion 2465 de 2016. Por la cual se adoptan los indicadores antropométricos, patrones de referencia y puntos de corte para la clasificación antropométrica del estado nutricional de niñas, niños y adolescentes menores de 18 años de edad, adultos de 18 a 64 años de edad y gestantes adultas y se dictan otras disposiciones. Disponible en:",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Forms/DispForm.aspx?ID=4909"},{referencia:"Ministerio de Salud y Protección Social (2018). Resolución 3280 del 2 de agosto del 2018. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Disponible en:",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf"},{referencia:"Ministerio de Salud y Protección Social (2018). Calculadora conoce tu riesgo peso saludable. Disponible en:",link:"https://www.minsalud.gov.co/sites/valoraturiesgo/_layouts/15/estilovidasaludable/datosusuario.aspx"},{referencia:"Ministerio de Salud y Protección Social (2019). Resolución 276 del 4 de febrero del 2019. Por la cual se modifica la Resolución 3280. Disponible en:",link:"https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-276-de-2019.pdf"},{referencia:"Ministerio de Salud y Protección Social (2019). Resolución 3513 del 26 de diciembre de 2019. Por la cual se fijan los recursos de la Unidad de Pago por Capitación - UPC para financiar los servicios y tecnologías de salud, de los Regímenes Contributivo y Subsidiado para la vigencia 2020 y se dictan otras disposiciones. Disponible en:",link:"https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.%203513%20de%202019.pdf"},{referencia:"Organización Mundial de la Salud (2015). Informe Mundial sobre Envejecimiento y Salud.Disponible en:",link:"https://apps.who.int/iris/bitstream/handle/10665/186466/9789240694873_spa.pdf?sequence=1 "},{referencia:"Organización Mundial de la Salud (2018). Recomendaciones sobre prácticas seleccionadas para el uso de anticonceptivos. Tercera edición. Disponible en:",link:"https://apps.who.int/iris/bitstream/handle/10665/259814/9789243565408-spa.pdf;jsessionid=26B089ACFB27E3E4C8D9B70C09528F4C?sequence=1"},{referencia:"UNFPA (2019). Lineamientos de atención en los servicios de salud que consideran el enfoque diferencial, de género y no discriminación para personas LGBTI. Disponible en:",link:"https://colombia.unfpa.org/sites/default/files/pub-pdf/LINEAMIENTOS%20EN%20ATENCION%20LGBTI-VERSION%20DIGITAL.pdf"}],glosario:[{termino:"ANAMNESIS",significado:"Información aportada por el paciente y otros testimonios para confeccionar su historial médico."},{termino:"CONTEXTO",significado:"Entorno físico o de situación, político, histórico, cultural o de cualquier otra índole, en el que se considera un hecho."},{termino:"ENFOQUE CURSO DE VIDA",significado:"Es el enfoque que aborda los momentos del continuo de la vida y reconoce que el desarrollo humano y los resultados en salud dependen de la interacción de diferentes factores a lo largo del curso de la vida, de experiencias acumulativas y situaciones presentes de cada individuo influenciadas por el contexto familiar, social, económico, ambiental y cultural; entendiendo que invertir en atenciones oportunas en cada generación repercutirá en las siguientes y que el mayor beneficio de un momento vital puede derivarse de intervenciones hechas en un periodo anterior (MSPS, 2015)"},{termino:"FACTORES DE RIESGO",significado:"son cualquier rasgo, característica o exposición de un individuo que aumente su probabilidad de sufrir una enfermedad o lesión. (OPS)"},{termino:"GÉNERO",significado:"Se refiere a las identidades, las funciones y los atributos construidos socialmente sobre la mujer y el hombre y al significado social y cultural que se atribuye a esas diferencias biológicas. El género se constituye en un conjunto de valores, creencias y actitudes que se atribuyen a hombres y mujeres en relación con lo masculino o lo femenino (UNFPA, 2019)."},{termino:"HITOS DEL DESARROLLO",significado:"Son destrezas físicas o comportamientos observados en niños y niñas durante su crecimiento y son diferentes  para cada rango de edad. (Pediatrics in Review Jul 2010)."},{termino:"SUCESOS VITALES",significado:"Son acontecimientos favorables o desfavorables que cambian notablemente el curso de vida de un individuo y, en consecuencia, de varias de sus trayectorias vitales, por ejemplo, la concepción de un hijo, la muerte de un familiar, el desplazamiento forzado (MSPS, 2015)."},{termino:"ORIENTACIÓN SEXUAL",significado:"Es la perspectiva que reconoce la diversidad, parte de la modificación del punto de vista heteronormado y propone el reconocimiento de distintas formas y expresiones de la sexualidad, es decir reconoce las divergencias. Lo heteronormado es la visión cultural a favor de las relaciones heterosexuales, las cuales son consideradas normales, naturales e ideales y son preferidas por sobre relaciones del mismo sexo o del mismo género (UNFPA, 2019)."},{termino:"IDENTIDAD DE GÉNERO ",significado:"Es la vivencia interna e individual del género tal como cada persona la siente, la cual podría corresponder o no con el sexo asignado al momento del nacimiento. “La identidad de género es un concepto amplio que crea espacio para la autoidentificación, y que hace referencia a la vivencia que una persona tiene de su propio género. Así, la identidad de género y su expresión también toman muchas formas, algunas personas no se identifican ni como hombres ni como mujeres, y algunas se identifican como ambos” (UNFPA, 2019)."},{termino:"SÍNDROMES GERIÁTRICOS",significado:"Estados de salud complejos que suelen presentarse sólo en las últimas etapas de la vida (en la vejez) y que no se enmarcan en categorías de morbilidad específicas. A menudo se deben a múltiples factores subyacentes y afectan a varios sistemas orgánicos, aunque muchas veces el motivo principal de consulta no refleja el proceso patológico de fondo (OMS, 2015)."},{termino:"TAMIZAJE",significado:"Es definido por la OMS como “el uso de una prueba sencilla en una población saludable, para identificar a aquellos individuos que tienen alguna patología, pero que todavía no presentan síntomas”."},{termino:"TRASTORNOS DEL NEURODESARROLLO",significado:"Se define por déficits o alteraciones en el desarrollo produciendo limitaciones en áreas específicas o limitaciones globales, estos déficits ocasionan dificultades/limitaciones en lo personal, social, académico o en el funcionamiento ocupacional. (American Psychiatric Association 2013)."},{termino:"VIDAS INTERCONECTADAS",significado:"Se afirma que las vidas humanas siempre están interconectadas y son interdependientes, generando redes de relaciones compartidas en diferentes contextos. Dicho de otra manera, es cómo las diferentes trayectorias y transiciones de un individuo en el curso de la vida se interrelacionan y afectan las trayectorias de otros individuos, familia y comunidad. De este concepto se deriva el análisis del efecto transgeneracional en la dinámica familiar (MSPS, 2015)."}],complementario:[{texto:"Flynn JT, Kaelber DC, Baker-Smith CM, et al; SUBCOMMITTEE ON SCREENING AND MANAGEMENT OF HIGH BLOOD PRESSURE IN CHILDREN. Clinical Practice Guideline for Screening and Management of High Blood Pressure in Children and Adolescents. Pediatrics. 2017; 140(3): e20171904",tipo:"Pagina Web",link:"https://www.aappublications.org/news"},{texto:"Organización Mundial de la salud (2007). Manual WHO Anthro para computadoras personales, Software para evaluar el crecimiento y desarrollo de los niños del mundo.",tipo:"PDF",descarga:"downloads/manual_anthro_para_pc.pdf"},{texto:"Gobierno de Colombia (2016). Escala Abreviada de Desarrollo- 3.",tipo:"PDF",descarga:"downloads/Escala-abreviada-de-desarrollo-3.pdf"},{texto:"Ministerio de Salud y Protección Social (2017). Anexos Test de valoración integral instrumentos.",tipo:"PDF",descarga:"downloads/anexo-instrumentos-valoracion-ruta-promocion.pdf"},{texto:"Ministerio de Salud y Protección Social (2020). Instrumentos sugeridos en la valoración integral para detección temprana de riesgos o alteraciones",tipo:"PDF",descarga:"downloads/instrumentos-aplicacion-sugerida-rpms.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Mónica Genith Castro",cargo:"Experta temática",centro:"Ministerio de Salud",regional:"Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Lía Marcela Gúiza",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Natalia Munarth",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Magaly Jaimes",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Mily Ramírez",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Aura Lucia Toloza",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Leidy Carolina Arias Aguirre",cargo:"Experta temática",centro:"Ministerio de Salud - Dirección de promoción y prevención - Grupo curso de vida"},{nombre:"Sandra Patricica Hoyos Sepúlveda",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:["Carlos Julian Ramirez"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andrés Villamizar Lizcano",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"José Jaime Luis Tang Pinzón",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Natalia Maldonado Delgado",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andres Arenales Cáceres",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción Audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"María Isabel Román Rueda",cargo:"Revisora de estilo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:["Validación de recursos"],centro:"Centro de comercio y servicios - Regional Tolima"}]}});o["a"].prototype.$config=h;var v=n("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,o["a"].directive("child",{bind:function(e,a){e.appendChild(a.value)}}),new o["a"]({router:b,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.2.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.1","core-js":"^3.6.5","ecored-base-pkg":"2.3.1","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},bce2:function(e,a,n){e.exports=n.p+"img/banner-principal.fc022cff.svg"},cb13:function(e,a,n){e.exports=n.p+"img/fondo-banner-principall.4b294715.png"},cf25:function(e,a,n){"use strict";n("fea6")},fea6:function(e,a,n){}});
//# sourceMappingURL=app.df1e9edf.js.map