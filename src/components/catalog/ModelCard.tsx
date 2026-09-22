import { Link } from "react-router-dom";
import type { CatalogModel, WeddingExperienceType } from "../../types/catalog";
import { categories } from "../../data/categories";
const experienceLabels: Record<WeddingExperienceType, string> = {
  digital: "Digital",
  interactive: "Interactiva",
  video: "Video invitación",
};
export default function ModelCard({ model }: { model: CatalogModel }) {
  const category = categories.find((c) => c.id === model.category);
  const available = model.status === "available";
  return (
    <article className="catalog-card">
      <div className={`catalog-model-visual catalog-theme-${model.category}`}>
        {model.coverImage && model.visualTreatment !== "gradient" ? (
          <img
            src={model.coverImage}
            alt={`Vista del modelo ${model.title}`}
            loading="lazy"
            className={model.category === "kids-birthday" ? "catalog-character" : ""}
          />
        ) : (
          <div
            className={
              model.visualTreatment === "gradient" ? "catalog-gradient" : "catalog-type-preview"
            }
          >
            <span className="landing-eyebrow">{category?.label}</span>
            <span className="font-display text-4xl italic">
              {model.category === "wedding"
                ? "El comienzo de un para siempre"
                : "Una celebración con tu sello"}
            </span>
            <span>{model.style ?? "Una nueva historia está por llegar"}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap gap-2 text-xs font-semibold">
          <span className="catalog-badge">{available ? "Disponible" : "Próximamente"}</span>
          {model.tag && <span className="catalog-badge capitalize">{model.tag}</span>}
          {model.experienceType && <span className="catalog-badge">{experienceLabels[model.experienceType]}</span>}
        </div>
        <p className="landing-eyebrow mt-6">{category?.label}</p>
        <h3 className="mt-2 font-display text-3xl">{model.title}</h3>
        <p className="mt-4 leading-relaxed">{model.shortDescription}</p>
        <p className="mt-6 text-sm font-semibold">
          {available ? "Detalles de esta experiencia" : "Características previstas"}
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm">
          {model.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="landing-actions mt-auto pt-7">
          {available && model.demoPath && (
            <Link className="landing-button landing-button-dark" to={model.demoPath}>
              {model.ctaDemoLabel ?? "Ver demostración"}
            </Link>
          )}
          <Link
            className="landing-button landing-button-outline"
            to={`/?modelo=${encodeURIComponent(model.slug)}&categoria=${model.category}#solicitar`}
          >
            {available
              ? (model.ctaRequestLabel ?? "Solicitar este modelo")
              : "Solicitar información"}
          </Link>
        </div>
      </div>
    </article>
  );
}
