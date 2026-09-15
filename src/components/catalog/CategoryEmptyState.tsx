import { Link } from "react-router-dom";
import type { CategoryDefinition } from "../../types/catalog";
export default function CategoryEmptyState({ category }: { category: CategoryDefinition }) {
  return (
    <div className={`rounded-3xl p-8 sm:p-14 catalog-theme-${category.id}`}>
      <p className="landing-eyebrow">Próximamente</p>
      <h3 className="mt-4 font-display text-3xl">
        Una nueva forma de celebrar {category.label.toLowerCase()}
      </h3>
      <p className="mt-5 max-w-xl leading-relaxed">
        Estamos preparando esta colección. Mientras tanto, cuéntanos tu idea y conversemos sobre las
        posibilidades para tu evento.
      </p>
      <Link
        to={`/?categoria=${category.id}#solicitar`}
        className="landing-button landing-button-outline mt-7"
      >
        Solicitar información
      </Link>
    </div>
  );
}
