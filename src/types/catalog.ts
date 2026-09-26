import type { EventType } from "./event";

export type ModelStatus = "available" | "coming-soon";
export type ModelTag = "nuevo" | "destacado" | "popular";
export type CatalogExperienceType = "digital" | "interactive" | "video";

export interface CategoryDefinition {
  id: EventType;
  slug: string;
  path: string;
  label: string;
  shortLabel?: string;
  tagline: string;
  description: string;
  order: number;
}

export interface CatalogModel {
  id: string;
  slug: string;
  title: string;
  category: EventType;
  experienceType?: CatalogExperienceType;
  shortDescription: string;
  style?: string;
  coverImage?: string;
  /** En el catálogo, gradient usa un degradado ink/gold sin fotografía. */
  visualTreatment?: "gradient" | "photo";
  demoPath?: string;
  features: string[];
  status: ModelStatus;
  tag?: ModelTag;
  planRef?: string;
  order: number;
  ctaDemoLabel?: string;
  ctaRequestLabel?: string;
}

export interface PlanDefinition {
  id: string;
  name: string;
  description?: string;
  features: string[];
  priceLabel: string;
  ctaLabel: string;
  highlighted?: boolean;
  order: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  order: number;
}

export interface FeatureHighlight {
  id: string;
  label: string;
  description?: string;
  order: number;
}
