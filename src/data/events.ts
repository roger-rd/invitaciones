import type { EventData } from "../types/event";
import { RDRP_WHATSAPP_NUMBER } from "../config/whatsapp";

export const events: EventData[] = [
  {
    slug: "cumple-digital-pastel",
    type: "kids-birthday",
    template: "kids-digital-pastel",
    title: "Valentina", // Personaje ficticio de demostración.
    age: 5,
    message: "¡Una tarde para jugar, reír y soplar las velitas juntos!",
    date: "2027-04-17T16:00:00-04:00",
    timeConfirmed: false,
    location: "Parque Bicentenario, Av. Bicentenario 3236, Vitacura, Santiago",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Bicentenario+Vitacura+Santiago",
    whatsapp: RDRP_WHATSAPP_NUMBER,
    coverImage: "/images/kids-digital/globos.svg",
    gallery: [], // Esta plantilla compacta no utiliza galería.
    giftMessage: "Tu compañía es el mejor regalo. Si quieres traer un detalle, aquí tienes algunas ideas.",
    giftItems: ["Cuentos ilustrados", "Materiales para dibujar", "Juegos para compartir"],
  },
  {
    slug: "cumple-digital-poster",
    type: "kids-birthday",
    template: "kids-digital-poster",
    title: "Valentina", // Personaje ficticio de demostración.
    age: 5,
    message: "¡Una tarde para jugar, reír y soplar las velitas juntos!",
    date: "2027-04-17T16:00:00-04:00",
    timeConfirmed: false,
    location: "Parque Bicentenario, Av. Bicentenario 3236, Vitacura, Santiago",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Bicentenario+Vitacura+Santiago",
    whatsapp: RDRP_WHATSAPP_NUMBER,
    coverImage: "/images/kids-digital/globos.svg",
    gallery: [], // Esta plantilla compacta no utiliza galería.
    giftMessage: "Tu compañía es el mejor regalo. Si quieres traer un detalle, aquí tienes algunas ideas.",
    giftItems: ["Cuentos ilustrados", "Materiales para dibujar", "Juegos para compartir"],
  },
  {
    slug: "boda-romantica-editorial",
    type: "wedding",
    template: "romantic-editorial",
    title: "Valentina & Nicolás", // Pareja ficticia de demostración
    subtitle: "¡Nos casamos!",
    date: "2026-11-14T18:00:00-05:00",
    location: "Villa Toscana",
    mapsUrl: "",
    whatsapp: RDRP_WHATSAPP_NUMBER,
    coverImage: "/images/boda-romantica-editorial/hero-vertical.webp",
    gallery: [], // La galería editorial de esta plantilla usa wedding.galleryEditorial, no este campo compartido.
    message: "El comienzo de una nueva historia, escrita a dos voces.",
    wedding: {
      brideAndGroom: ["Valentina", "Nicolás"],
      monogram: "V & N",
      welcomeMessage: "Con el corazón lleno de alegría, los invitamos a celebrar el inicio de nuestra nueva vida juntos.",
      heroImage: {
        src: "/images/boda-romantica-editorial/hero-vertical.webp",
        alt: "Valentina y Nicolás abrazados al aire libre, luz cálida de atardecer",
        orientation: "portrait",
        width: 1122,
        height: 1402,
      },
      storyChapters: [
        {
          year: "2019",
          title: "Cómo nos conocimos",
          text: "Fue una tarde cualquiera que dejó de serlo en cuanto cruzamos las primeras palabras. Desde entonces, cada conversación se sintió como el inicio de algo que ya conocíamos.",
          highlightQuote: "Algunas historias empiezan con un simple “hola”.",
          photo: {
            src: "/images/boda-romantica-editorial/historia-01-como-nos-conocimos.webp",
            alt: "Valentina y Nicolás conversando y sonriendo en una terraza al atardecer",
            orientation: "landscape",
            width: 1536,
            height: 1024,
          },
        },
        {
          year: "2021",
          title: "Nuestra primera aventura",
          text: "Aprendimos a descubrir el mundo —y a descubrirnos— entre caminos nuevos y planes improvisados. Cada viaje nos enseñó a elegirnos, una y otra vez.",
          highlightQuote: "El mejor destino siempre fue el otro.",
          photo: {
            src: "/images/boda-romantica-editorial/historia-02-primera-aventura.webp",
            alt: "Valentina y Nicolás caminando tomados de la mano por un sendero campestre",
            orientation: "portrait",
            width: 1122,
            height: 1402,
          },
        },
        {
          year: "2023",
          title: "La propuesta",
          text: "Entre olivos y luz de atardecer, una pregunta cambió el rumbo de nuestra historia. La respuesta, por supuesto, ya la sabíamos los dos.",
          highlightQuote: "Dijimos que sí antes de terminar la pregunta.",
          photo: {
            src: "/images/boda-romantica-editorial/historia-03-la-propuesta.webp",
            alt: "Nicolás de rodillas proponiendo matrimonio a Valentina en un jardín",
            orientation: "landscape",
            width: 1536,
            height: 1024,
          },
        },
        {
          year: "2026",
          title: "Para siempre",
          text: "Hoy emprendemos el capítulo que hemos soñado escribir juntos. Con ustedes a nuestro lado, esta historia apenas comienza.",
          highlightQuote: "El resto de nuestra vida empieza hoy.",
          photo: {
            src: "/images/boda-romantica-editorial/historia-04-para-siempre.webp",
            alt: "Valentina y Nicolás caminando juntos hacia el atardecer",
            orientation: "portrait",
            width: 1122,
            height: 1402,
          },
        },
      ],
      featuredQuote: {
        text: "El amor no se trata de encontrar a la persona perfecta, sino de construir juntos una historia perfectamente nuestra.",
        attribution: "Valentina & Nicolás",
        image: {
          src: "/images/boda-romantica-editorial/frase-destacada.webp",
          alt: "Manos entrelazadas de Valentina y Nicolás con anillos de compromiso, fondo cálido panorámico",
          orientation: "panoramic",
          width: 1672,
          height: 941,
        },
      },
      galleryEditorial: [
        {
          src: "/images/boda-romantica-editorial/hero-vertical.webp",
          alt: "Valentina y Nicolás abrazados en un jardín, retrato editorial",
          orientation: "portrait",
          position: "center 20%",
          featured: true,
          width: 1122,
          height: 1402,
        },
        {
          src: "/images/boda-romantica-editorial/adicional-horizontal.webp",
          alt: "Valentina y Nicolás bailando al aire libre durante el atardecer",
          orientation: "landscape",
          width: 1536,
          height: 1024,
        },
        {
          src: "/images/boda-romantica-editorial/adicional-vertical.webp",
          alt: "Valentina y Nicolás abrazados bajo un arco de flores blancas",
          orientation: "portrait",
          width: 1122,
          height: 1402,
        },
        {
          src: "/images/boda-romantica-editorial/historia-01-como-nos-conocimos.webp",
          alt: "Valentina y Nicolás compartiendo una mesa junto a velas encendidas",
          orientation: "landscape",
          position: "center 30%",
          width: 1536,
          height: 1024,
        },
        {
          src: "/images/boda-romantica-editorial/historia-04-para-siempre.webp",
          alt: "Valentina y Nicolás caminando de la mano por un camino de piedra",
          orientation: "portrait",
          position: "center 15%",
          width: 1122,
          height: 1402,
        },
        {
          src: "/images/boda-romantica-editorial/frase-destacada.webp",
          alt: "Detalle de las manos entrelazadas de Valentina y Nicolás con sus anillos",
          orientation: "panoramic",
          position: "center 60%",
          width: 1672,
          height: 941,
        },
        {
          src: "/images/boda-romantica-editorial/catalogo-portada.webp",
          alt: "Retrato de Valentina y Nicolás sonriendo frente al paisaje toscano",
          orientation: "landscape",
          position: "center 40%",
          width: 1536,
          height: 1024,
        },
      ],
      ceremony: {
        name: "Villa Toscana",
        address: "Camino de los Olivos s/n",
        dateTimeIso: "2026-11-14T18:00:00-05:00",
        mapsUrl: "",
      },
      reception: {
        name: "Jardines de Villa Toscana",
        address: "Camino de los Olivos s/n",
        dateTimeIso: "2026-11-14T20:00:00-05:00",
        mapsUrl: "",
      },
      itinerary: [
        { label: "Llegada de invitados", time: "4:00 pm" },
        { label: "Ceremonia", time: "6:00 pm" },
        { label: "Cóctel de bienvenida", time: "6:30 pm" },
        { label: "Recepción", time: "8:00 pm" },
        { label: "Cena", time: "8:30 pm" },
        { label: "Primer baile", time: "9:30 pm" },
        { label: "Fiesta", time: "10:00 pm" },
      ],
      dressCode: {
        formality: "Formal",
        palette: ["Champagne", "Marfil", "Verde salvia"],
        avoidColors: ["Blanco (reservado para la novia)"],
        note: "Sugerimos tonos champagne, marfil y verde salvia para acompañar la paleta de la celebración.",
      },
      gifts: {
        message: "Su presencia es el regalo más importante para nosotros. Si desean tener un detalle adicional, con cariño hemos preparado algunas opciones.",
        hide: false,
      },
      rsvp: {
        whatsappNumber: RDRP_WHATSAPP_NUMBER,
        deadline: "2026-10-15",
        notes: "Confirma tu asistencia y celebra este día con nosotros.",
      },
      closingImage: {
        src: "/images/boda-romantica-editorial/cierre.webp",
        alt: "Valentina y Nicolás alejándose tomados de la mano al atardecer",
        orientation: "portrait",
        width: 1122,
        height: 1402,
      },
      farewellMessage: "Gracias por ser parte de esta historia. Hoy comienza un “para siempre” que soñamos compartir con ustedes.",
    },
  },
  {
    slug: "boda-clasica-digital",
    type: "wedding",
    template: "classic-digital",
    title: "Camila & Sebastián",
    subtitle: "Nos casamos",
    date: "2027-04-17T17:00:00-05:00",
    location: "Jardín Botánico Las Acacias",
    mapsUrl: "",
    whatsapp: RDRP_WHATSAPP_NUMBER,
    coverImage: "/images/boda-clasica-digital/portada-vertical.webp",
    gallery: [], // La galería de esta plantilla usa wedding.galleryEditorial, no este campo compartido.
    message: "Con mucha alegría, los invitamos a acompañarnos en el inicio de nuestra vida juntos.",
    wedding: {
      brideAndGroom: ["Camila", "Sebastián"],
      monogram: "C & S",
      welcomeMessage: "Con el corazón contento, queremos compartir contigo el día en que decidimos unir nuestras vidas para siempre.",
      heroImage: {
        src: "/images/boda-clasica-digital/portada-vertical.webp",
        alt: "Camila y Sebastián sonriendo juntos el día de su boda",
        orientation: "portrait",
        width: 1122,
        height: 1402,
      },
      galleryEditorial: [
        {
          src: "/images/boda-clasica-digital/portada-vertical.webp",
          alt: "Camila y Sebastián sonriendo juntos el día de su boda",
          orientation: "portrait",
          width: 1122,
          height: 1402,
        },
        {
          src: "/images/boda-clasica-digital/ceremonia-horizontal.webp",
          alt: "Camila y Sebastián durante la ceremonia",
          orientation: "landscape",
          width: 1536,
          height: 1024,
        },
        {
          src: "/images/boda-clasica-digital/adicional-vertical.webp",
          alt: "Camila y Sebastián en un momento espontáneo",
          orientation: "portrait",
          width: 1122,
          height: 1402,
        },
        {
          src: "/images/boda-clasica-digital/cierre-vertical.webp",
          alt: "Camila y Sebastián, cierre de la invitación",
          orientation: "portrait",
          width: 1122,
          height: 1402,
        },
      ],
      ceremony: {
        name: "Jardín Botánico Las Acacias",
        address: "Camino Las Acacias s/n",
        dateTimeIso: "2027-04-17T17:00:00-05:00",
      },
      reception: {
        name: "Salón Las Acacias",
        address: "Camino Las Acacias s/n",
        dateTimeIso: "2027-04-17T19:30:00-05:00",
      },
      dressCode: {
        formality: "Semi-formal elegante",
        palette: ["Marfil", "Verde eucalipto", "Dorado suave"],
        note: "Sugerimos tonos suaves que acompañen una celebración al aire libre.",
      },
      gifts: {
        message: "Tu presencia es el regalo más importante para nosotros. Si deseas tener un detalle adicional, lo recibiremos con mucho cariño.",
        hide: false,
      },
      rsvp: {
        whatsappNumber: RDRP_WHATSAPP_NUMBER,
        deadline: "2027-03-20",
        notes: "Por favor confirma tu asistencia para organizar cada detalle con cariño.",
      },
      closingImage: {
        src: "/images/boda-clasica-digital/cierre-vertical.webp",
        alt: "Camila y Sebastián, cierre de la invitación",
        orientation: "portrait",
        width: 1122,
        height: 1402,
      },
      farewellMessage: "Gracias por ser parte de este momento tan especial. Los esperamos con todo nuestro cariño.",
    },
  },

    {
      slug: "edinson",
      type: "birthday",
      title: "Edinson",
      subtitle: "Te invito a celebrar conmigo",
      date: "2026-06-16T17:00:00",
      location: "Salón de Fiestas Las Doñas",
      mapsUrl: "https://maps.app.goo.gl/Rpos3DSC76UBmTDF6",
      whatsapp: "584149561363",
      coverImage: "/images/cumple-edinson/edi4.jpeg",
      gallery: [
        "/images/cumple-edinson/edi1.jpeg",
        "/images/cumple-edinson/edi2.jpeg",
        "/images/cumple-edinson/edi3.jpeg",
      ],
      message:
        "Quiero compartir contigo una tarde inolvidable, llena de alegría, cariño y momentos especiales.",
      eventPhrase: "¡Quiero celebrar este día tan especial contigo!",
      music: "/music/cumple-edinson.mp3",
    },

  {
    slug: "antonella-jairo",
    type: "wedding",
    title: "Antonella & Jairo",
    subtitle: "¡Nos casamos!",
    date: "2026-04-18T19:00:00",
    location: "Salón Paraíso",
    mapsUrl: "https://maps.app.goo.gl/Rpos3DSC76UBmTDF6",
    whatsapp: "56912345678",
    coverImage: "/images/antonella-jairo/cover.jpg",
    gallery: [
      "/images/antonella-jairo/20633.pagina.8.jpg",
      "/images/antonella-jairo/20633.pagina.9.jpg",
      "/images/antonella-jairo/20633.pagina.11.jpg",
      
    ],
    message: "Acompáñanos en este día tan especial y celebremos juntos nuestro amor.",
  }
  

  // DEMOSTRACIÓN: datos provisionales pendientes de reemplazo.
  ,{
    slug: "mateo-circo",
    type: "kids-birthday",
    title: "Mateo",
    subtitle: "Fiesta de circo musical",
    age: 3,
    // Textos provisionales; regalos y multimedia se agregarán cuando estén disponibles.
    giftMessage: "Lo más importante es que vengas a celebrar conmigo. Tu compañía y tus ganas de jugar son el mejor regalo.",
    revealMessage: "¡Tenemos un lugar especial para ti en la gran fiesta de Mateo! Prepárate para cantar, jugar y llenar la carpa de sonrisas.",
    date: "2026-11-15T16:00:00", // PROVISIONAL: reemplazar por fecha real
    location: "Salón por definir (dirección provisional)", // PROVISIONAL
    mapsUrl: "https://maps.google.com/?q=PENDIENTE-reemplazar-direccion", // PROVISIONAL
    wazeUrl: "https://waze.com/ul?q=PENDIENTE-reemplazar-direccion", // PROVISIONAL
    whatsapp: "0000000000", // PROVISIONAL: reemplazar por número real
    coverImage: "/images/theme-circus/gallery/mateo-cover.jpg", // PENDIENTE: aún no existe; background-image CSS con color de respaldo
    gallery: [], // PENDIENTE: agregar fotos reales cuando estén disponibles
    message: "Una tarde de música, risas y diversión te espera.",
    eventPhrase: "Gracias por ser parte de esta aventura. ¡Nos vemos bajo la carpa!",
    music: "/music/mateo-circo.mp3", // PENDIENTE: archivo de audio aún no existe
    characterWelcomeImage: "/images/theme-circus/character/chispin-bienvenida.webp",
    characterCelebrationImage: "/images/theme-circus/character/chispin-celebracion.webp",
  }
  ,{
    slug: "jose-david-rancho-dino",
    type: "kids-birthday",
    template: "dino-ranch",
    title: "José David",
    subtitle: "Una gran expedición prehistórica te espera",
    age: 2,
    date: "2027-01-23T00:00:00", // Fecha confirmada. Hora aún NO confirmada: ver timeConfirmed.
    timeConfirmed: false, // PENDIENTE: reemplazar por la hora real y quitar este campo (o ponerlo en true) cuando se confirme.
    location: "Caletera Oriente General San Martín 20650",
    mapsUrl: "", // PENDIENTE: no inventar. Vacío intencionalmente hasta tener el enlace real de Google Maps. Los componentes deben ocultar el botón de Maps cuando este valor esté vacío.
    // wazeUrl: PENDIENTE — se omite intencionalmente hasta tener el enlace real. No agregar este campo todavía.
    whatsapp: "56977979094",
    coverImage: "/images/jose-david-rancho-dino/gallery/jose-david-bienvenida.webp",
    gallery: [
      "/images/jose-david-rancho-dino/gallery/jose-david-bienvenida.webp",
      "/images/jose-david-rancho-dino/gallery/jose-david-primeros-pasitos.webp",
      "/images/jose-david-rancho-dino/gallery/jose-david-recuerdos.webp",
    ],
    message: "José David cumple 2 años y quiere que lo acompañes en la aventura más grande del valle: un día entero explorando el rancho junto a sus amigos dinosaurios.",
    eventPhrase: "Gracias por ser parte de esta gran expedición. ¡Nos vemos en el Rancho Jurásico!",
    revealMessage: "¡El huevo ha eclosionado! Nuestro pequeño amigo dinosaurio ya está listo para conocerte y celebrar junto a José David.",
    giftMessage: "Lo más importante es que vengas a celebrar conmigo. Si deseas traerme un regalito, me encantan los juegos dinámicos apropiados para mi edad y la ropa talla 24 meses.",
    giftItems: ["Juegos dinámicos para 2 años", "Ropa talla 24 meses"],
    // music: PENDIENTE — no agregar archivo de audio ni inventar ruta. Se omite intencionalmente; el reproductor debe permanecer oculto cuando no hay música.
    dinoRanch: {
      ranchName: "El Rancho Jurásico de José David",
      // Personajes provisionales originales (SVG propios) y una imagen temporal de referencia
      // para la eclosión, pendientes de sustituir por ilustraciones definitivas cambiando solo estas rutas.
      mainCharacterImage: "/images/theme-dino-ranch/character/dino-explorer.svg",
      friendCharacterImage: "/images/theme-dino-ranch/character/dino-triceratops.svg",
      hatchlingImage: "/images/theme-dino-ranch/character/dino-hatchling-temp.webp", // PROVISIONAL: miniatura de referencia, pendiente de sustituir o autorizar
      closingCharacterImage: "/images/theme-dino-ranch/character/dino-closing.svg",
    },
  }
];