export type EventType = "wedding" | "quince" | "birthday" | "kids-birthday" | "special-celebration";

export type KidsTemplateId = "circus" | "dino-ranch" | "kids-digital-pastel" | "kids-digital-poster";
export type WeddingTemplateId = "romantic-editorial" | "classic-digital";
export type SpecialTemplateId = "vitela-seal" | "champagne-envelope";
export type EventTemplateId = KidsTemplateId | WeddingTemplateId | SpecialTemplateId;

export interface WeddingVenue {
  name: string;
  address: string;
  dateTimeIso: string; // Fecha y hora ISO 8601 con offset.
  timeLabel?: string;
  mapsUrl?: string;
  wazeUrl?: string;
  notes?: string;
}

export interface WeddingStoryData {
  title?: string;
  text?: string;
  metDate?: string;
  engagementDate?: string;
  photos?: string[];
  hide?: boolean;
}

export interface WeddingItineraryItem {
  label: string;
  time: string;
}

export interface WeddingDressCodeData {
  formality: string;
  palette?: string[];
  avoidColors?: string[];
  note?: string;
}

export interface WeddingGiftData {
  message?: string;
  bankTransfer?: string;
  giftListUrl?: string;
  externalUrl?: string;
  hide?: boolean;
}

export interface WeddingRsvpData {
  whatsappNumber: string;
  deadline?: string;
  notes?: string;
}

export interface WeddingImage {
  src: string;
  alt: string;
  orientation: "portrait" | "landscape" | "panoramic";
  /** Valor CSS object-position, ej. "center 30%". Por defecto "center" si se omite. */
  position?: string;
  /** Marca la fotografía protagonista dentro de una colección (ej. la destacada de la galería). */
  featured?: boolean;
  width: number;
  height: number;
}

export interface WeddingStoryChapter {
  year?: string;
  title: string;
  text: string;
  photo?: WeddingImage;
  highlightQuote?: string;
}

export interface WeddingFeaturedQuoteData {
  text: string;
  attribution?: string;
  image: WeddingImage;
}

export interface WeddingCoupleData {
  brideAndGroom: [string, string];
  monogram?: string;
  welcomeMessage?: string;
  story?: WeddingStoryData;
  heroImage?: WeddingImage;
  closingImage?: WeddingImage;
  featuredQuote?: WeddingFeaturedQuoteData;
  storyChapters?: WeddingStoryChapter[];
  galleryEditorial?: WeddingImage[];
  ceremony?: WeddingVenue;
  reception?: WeddingVenue;
  itinerary?: WeddingItineraryItem[];
  dressCode?: WeddingDressCodeData;
  gifts?: WeddingGiftData;
  rsvp?: WeddingRsvpData;
  farewellMessage?: string;
}

export interface DinoRanchThemeData {
  ranchName?: string;
  mainCharacterImage?: string;
  friendCharacterImage?: string;
  hatchlingImage?: string;
  guideCharacterImage?: string;
  closingCharacterImage?: string;
}

export interface SpecialAdditionalEvent {
  eyebrow?: string;
  dateLabel: string;
  dateTimeIso?: string;
  timeLabel?: string;
  venue: { name: string; city?: string; address?: string; mapsUrl?: string; wazeUrl?: string; searchQuery?: string };
  calendar?: { title: string; description?: string };
}

export interface SpecialCelebrationData {
  eyebrow?: string;
  heading: string;
  honoreeName: string;
  photo?: { src: string; alt: string; width?: number; height?: number; position?: string };
  quote?: { text: string; reference?: string };
  people?: { title: string; names: string[] }[];
  dateTimeIso: string;
  dateLabel?: string;
  timeLabel?: string;
  venue: { name: string; city?: string; address?: string; mapsUrl?: string; wazeUrl?: string; searchQuery?: string };
  calendar?: { title: string; description?: string };
  closingMessage?: string;
  additionalEvents?: SpecialAdditionalEvent[];
}

export interface EventData {
  share?: {
    title: string;
    description: string;
    image: string;
    /** URL canónica; el generador añade '/' al final si falta. Por defecto: /<slug>/. */
    url?: string;
  };
  special?: SpecialCelebrationData;
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
  /** Selecciona la plantilla visual cuando type === "kids-birthday". Sin este campo, se usa la plantilla de circo (comportamiento actual, sin cambios). */
  template?: EventTemplateId;
  /** Configuración agrupada y reemplazable del tema "rancho de dinosaurios". */
  dinoRanch?: DinoRanchThemeData;
  /** Configuración agrupada de la pareja y su boda. */
  wedding?: WeddingCoupleData;
  /** Si es false, la hora exacta del evento aún no está confirmada y no debe mostrarse como definitiva. Si se omite, se asume true (comportamiento actual sin cambios para eventos existentes). */
  timeConfirmed?: boolean;
}
