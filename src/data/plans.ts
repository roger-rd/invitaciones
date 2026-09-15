import type { PlanDefinition } from "../types/catalog";

export const plans: PlanDefinition[] = [
  {
    id: "esencial",
    name: "Esencial",
    description: "Los detalles fundamentales de tu celebración, reunidos en una invitación fácil de consultar.",
    features: ["Información del evento", "Cuenta regresiva", "Fecha y horario", "Ubicación", "Confirmación de asistencia"],
    priceLabel: "Consultar",
    ctaLabel: "Consultar plan Esencial",
    order: 1,
  },
  {
    id: "interactiva",
    name: "Interactiva",
    description: "Una invitación con música, recuerdos y elementos interactivos para acompañar la celebración.",
    features: ["Todo lo incluido en Esencial", "Música", "Galería", "Sugerencias de regalos", "Mayor cantidad de animaciones y elementos interactivos"],
    priceLabel: "Consultar",
    ctaLabel: "Consultar plan Interactiva",
    highlighted: true,
    order: 2,
  },
  {
    id: "a-tu-medida",
    name: "A tu medida",
    description: "Conversemos sobre tu idea para evaluar una propuesta adaptada a tu evento.",
    features: ["Diseño más personalizado", "Contenido y experiencia adaptados al evento", "Evaluación de características especiales según la solicitud"],
    priceLabel: "Consultar",
    ctaLabel: "Consultar plan A tu medida",
    order: 3,
  },
];
