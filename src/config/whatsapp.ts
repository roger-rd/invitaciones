export const RDRP_WHATSAPP_NUMBER = "56977979094";

export function buildWhatsAppUrl(message: string, number: string = RDRP_WHATSAPP_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function buildModelRequestMessage(
  { modelName, category, plan }: { modelName?: string; category?: string; plan?: string } = {},
): string {
  const parts = ["Hola, RDRP Te Invito. Quisiera solicitar una invitación digital."];
  if (modelName?.trim()) parts.push(`Me interesa el modelo ${modelName.trim()}.`);
  if (category?.trim()) parts.push(`La categoría que busco es ${category.trim()}.`);
  if (plan?.trim()) parts.push(`Quisiera consultar por el plan ${plan.trim()}.`);
  parts.push("¿Me pueden orientar sobre cómo comenzar?");
  return parts.join(" ");
}

export interface KidsDigitalRequestData {
  modelName: string;
  clientName: string;
  clientWhatsapp: string;
  sameWhatsapp: boolean;
  rsvpWhatsapp: string;
  childName: string;
  date: string;
  location: string;
  age?: string;
  phrase?: string;
  time?: string;
  mapsUrl?: string;
  giftMessage?: string;
  giftSuggestions?: string;
  comment?: string;
}

export function buildKidsDigitalRequestMessage(data: KidsDigitalRequestData): string {
  const optionalDetails: [string, string | undefined][] = [
    ["Edad que cumple", data.age],
    ["Frase de invitación", data.phrase],
    ["Google Maps", data.mapsUrl],
    ["Mensaje sobre regalos", data.giftMessage],
    ["Sugerencias de regalo", data.giftSuggestions],
    ["Comentario adicional", data.comment],
  ];
  return [
    "Hola, RDRP Te Invito. Quisiera solicitar una invitación.",
    "Categoría: Infantiles",
    "Tipo: Digitales",
    `Modelo: ${data.modelName.trim()}`,
    "",
    `Tu nombre: ${data.clientName.trim()}`,
    `WhatsApp del cliente: ${data.clientWhatsapp.trim()}`,
    `Usar el mismo número para confirmaciones: ${data.sameWhatsapp ? "Sí" : "No"}`,
    `WhatsApp para confirmaciones de invitados: ${(data.sameWhatsapp ? data.clientWhatsapp : data.rsvpWhatsapp).trim()}`,
    "",
    `Nombre del niño o niña: ${data.childName.trim()}`,
    `Fecha del cumpleaños: ${data.date.trim()}`,
    `Hora del cumpleaños: ${data.time?.trim() || "hora por confirmar"}`,
    `Nombre y dirección del lugar: ${data.location.trim()}`,
    ...optionalDetails.filter(([, value]) => value?.trim()).map(([label, value]) => `${label}: ${value!.trim()}`),
  ].join("\n");
}
