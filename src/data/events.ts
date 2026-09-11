import type { EventData } from "../types/event";

export const events: EventData[] = [

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
    // characterWelcomeImage y characterCelebrationImage se dejan SIN DEFINIR a propósito:
    // colocar aquí en el futuro, respectivamente:
    //   "/images/theme-circus/character/bienvenida.webp"
    //   "/images/theme-circus/character/celebracion.webp"
  }
];