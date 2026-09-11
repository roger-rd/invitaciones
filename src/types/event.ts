export type EventType = "wedding" | "quince" | "birthday" | "kids-birthday";

export interface EventData {
  giftMessage?: string;
  giftItems?: string[];
  giftLinkUrl?: string;
  giftLinkLabel?: string;
  revealMessage?: string;
  revealMediaUrl?: string;
  revealMediaType?: "image" | "video";
  slug: string;
  type: EventType;
  title: string;
  subtitle?: string;
  date: string;
  location: string;
  mapsUrl: string;
  whatsapp: string;
  coverImage: string;
  gallery: string[];
  message: string;
  celebrantName?: string;
  eventPhrase?: string;
  music?: string;
  age?: number;
  wazeUrl?: string;
  /** Ruta PNG/WebP transparente del personaje infantil de circo en pose de bienvenida. */
  characterWelcomeImage?: string;
  /** Ruta PNG/WebP transparente del personaje infantil de circo en pose de celebración. */
  characterCelebrationImage?: string;
}
