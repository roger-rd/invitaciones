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
      // mainCharacterImage, friendCharacterImage, hatchlingImage, guideCharacterImage, closingCharacterImage:
      // PENDIENTES — no inventar rutas ni generar ilustraciones. Se omiten intencionalmente hasta tener los assets definitivos.
    },
  }
];