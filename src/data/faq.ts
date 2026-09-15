import type { FaqItem } from "../types/catalog";

export const faqItems: FaqItem[] = [
  {
    id: "como-comenzar",
    question: "¿Cómo inicio el proceso?",
    answer: "Escríbenos por WhatsApp y cuéntanos qué celebrarás. Si ya elegiste un modelo o plan, indícalo para que podamos orientar tu solicitud y acordar los detalles.",
    order: 1,
  },
  {
    id: "informacion-y-fotos",
    question: "¿Qué información y fotografías debo enviar?",
    answer: "Necesitaremos los nombres que aparecerán, la fecha, el horario, la ubicación y el número para confirmar asistencia. Según la plantilla y el plan, te pediremos los textos y las fotografías que quieras incluir, de preferencia en su calidad original.",
    order: 2,
  },
  {
    id: "atencion-manual",
    question: "¿Puedo editar la invitación por mi cuenta?",
    answer: "Por ahora no contamos con un editor automático. Nuestro equipo prepara la invitación y atiende manualmente las solicitudes de contenido y ajustes por WhatsApp.",
    order: 3,
  },
  {
    id: "revision",
    question: "¿Cómo reviso la invitación antes de publicarla?",
    answer: "Te compartimos una vista previa para revisar los textos, las imágenes y los datos del evento antes de publicar. Las revisiones y los ajustes incluidos se acuerdan según el plan elegido.",
    order: 4,
  },
  {
    id: "entrega",
    question: "¿Cómo recibo y comparto la invitación final?",
    answer: "Una vez aprobado el resultado, te enviamos el enlace final por WhatsApp para que lo compartas con tus invitados.",
    order: 5,
  },
  {
    id: "telefonos",
    question: "¿La invitación funciona en cualquier teléfono?",
    answer: "El diseño se adapta a teléfonos y se abre desde el enlace en el navegador, con conexión a internet. La experiencia puede variar en dispositivos o navegadores antiguos, y la música puede requerir un toque para comenzar a reproducirse.",
    order: 6,
  },
];
