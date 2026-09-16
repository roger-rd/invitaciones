export type EventType = "wedding" | "quince" | "birthday" | "kids-birthday";

export type KidsTemplateId = "circus" | "dino-ranch";

export interface DinoRanchThemeData {
  ranchName?: string;
  mainCharacterImage?: string;
  friendCharacterImage?: string;
  hatchlingImage?: string;
  guideCharacterImage?: string;
  closingCharacterImage?: string;
}

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
  /** Selecciona la plantilla visual cuando type === "kids-birthday". Sin este campo, se usa la plantilla de circo (comportamiento actual, sin cambios). */
  template?: KidsTemplateId;
  /** Configuración agrupada y reemplazable del tema "rancho de dinosaurios". */
  dinoRanch?: DinoRanchThemeData;
  /** Si es false, la hora exacta del evento aún no está confirmada y no debe mostrarse como definitiva. Si se omite, se asume true (comportamiento actual sin cambios para eventos existentes). */
  timeConfirmed?: boolean;
}
