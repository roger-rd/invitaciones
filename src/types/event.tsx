export type EventType = "wedding" | "quince" | "birthday";

export interface EventData {
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
}