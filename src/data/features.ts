import type { FeatureHighlight } from "../types/catalog";

// Las características disponibles varían según la plantilla y el plan elegido.
export const featureHighlights: FeatureHighlight[] = [
  { id: "apertura", label: "Pantalla de apertura", description: "Una bienvenida presenta la celebración antes de abrir la invitación.", order: 1 },
  { id: "musica", label: "Música", description: "Una melodía acompaña el recorrido por la invitación.", order: 2 },
  { id: "cuenta-regresiva", label: "Cuenta regresiva", description: "Un contador muestra cuánto falta para el evento.", order: 3 },
  { id: "fotografias", label: "Fotografías", description: "Una galería reúne los recuerdos que quieras compartir.", order: 4 },
  { id: "fecha-horario", label: "Fecha y horario", description: "Los invitados pueden consultar cuándo se realizará la celebración.", order: 5 },
  { id: "ubicacion", label: "Ubicación", description: "Los enlaces a Google Maps o Waze ayudan a encontrar el lugar del evento.", order: 6 },
  { id: "confirmacion", label: "Confirmación por WhatsApp", description: "Un botón permite enviar la confirmación al WhatsApp indicado para el evento.", order: 7 },
  { id: "regalos", label: "Sugerencias de regalos", description: "Una sección permite compartir tus preferencias de regalos con los invitados.", order: 8 },
  { id: "animaciones", label: "Animaciones", description: "Los movimientos y las transiciones acompañan el estilo de la invitación.", order: 9 },
  { id: "telefonos", label: "Diseño adaptado a teléfonos", description: "El contenido se adapta a la pantalla para facilitar la lectura desde el teléfono.", order: 10 },
  { id: "enlace", label: "Enlace personalizado para compartir", description: "Tu invitación cuenta con un enlace propio para enviarlo a los invitados.", order: 11 },
];
