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
