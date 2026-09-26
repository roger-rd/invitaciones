import type { CategoryDefinition } from "../types/catalog";

export const categories: CategoryDefinition[] = [
  {
    id: "birthday",
    slug: "cumpleanos",
    path: "/cumpleanos",
    label: "Cumpleaños",
    tagline: "Celebra tu historia con estilo.",
    description: "Invitaciones para reunir a quienes dan sentido a cada año. Una presentación cálida y elegante para una celebración con personalidad.",
    order: 1,
  },
  {
    id: "kids-birthday",
    slug: "infantiles",
    path: "/infantiles",
    label: "Cumpleaños Infantiles",
    shortLabel: "Infantiles",
    tagline: "Pequeños momentos, grandes celebraciones.",
    description: "Encuentra una invitación que acompañe la ilusión de su cumpleaños. Explora nuestros formatos y elige cómo compartir la alegría con quienes más quieres.",
    order: 2,
  },
  {
    id: "quince",
    slug: "quince-anos",
    path: "/quince-anos",
    label: "Quince Años",
    tagline: "Una nueva etapa, con tu propio brillo.",
    description: "Una mirada fresca y elegante para anunciar tus quince años. Un espacio para expresar tu estilo y compartir la emoción de este momento.",
    order: 3,
  },
  {
    id: "wedding",
    slug: "matrimonios",
    path: "/matrimonios",
    label: "Matrimonios",
    tagline: "Su historia merece una invitación especial.",
    description: "Anuncien el comienzo de esta etapa con una invitación romántica y cuidada. Reúnan a sus seres queridos alrededor de la historia que construyen juntos.",
    order: 4,
  },
];
