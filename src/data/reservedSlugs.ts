// Reservados para rutas estáticas de categoría: NUNCA deben usarse como slug
// de un evento en src/data/events.ts. La ruta estática siempre gana sobre
// /:slug y dejaría el evento inalcanzable.
export const RESERVED_SLUGS = ["cumpleanos", "infantiles", "quince-anos", "matrimonios"] as const;

export function isReservedSlug(slug: string): boolean {
  return RESERVED_SLUGS.some((reservedSlug) => reservedSlug === slug);
}

export function warnIfSlugReserved(slug: string): void {
  if (import.meta.env.DEV && isReservedSlug(slug)) {
    console.warn(`El slug "${slug}" está reservado para una categoría y dejaría el evento inalcanzable.`);
  }
}
