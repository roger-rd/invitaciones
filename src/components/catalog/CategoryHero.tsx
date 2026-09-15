import type { CategoryDefinition } from "../../types/catalog";
export default function CategoryHero({ category }: { category: CategoryDefinition }) {
  return (
    <section className={`catalog-theme-${category.id}`}>
      <div className="landing-container landing-section">
        <p className="landing-eyebrow">Colección / {category.label}</p>
        <h1 className="landing-title max-w-4xl">{category.label}</h1>
        <p className="mt-6 max-w-3xl font-display text-2xl sm:text-3xl">{category.tagline}</p>
        <p className="mt-5 max-w-2xl leading-relaxed">{category.description}</p>
        <a href="#modelos" className="landing-button landing-button-outline mt-8">
          Explorar la colección
        </a>
      </div>
    </section>
  );
}
