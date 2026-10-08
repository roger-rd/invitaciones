import DoveEngraving from "../envelope/DoveEngraving";
import { Link } from "react-router-dom";
import type { CatalogModel, CatalogExperienceType } from "../../types/catalog";
import { events } from "../../data/events";
import { categories } from "../../data/categories";
const experienceLabels: Record<CatalogExperienceType, string> = {
  digital: "Digital",
  interactive: "Interactiva",
  video: "Video invitación",
};
export default function ModelCard({ model }: { model: CatalogModel }) {
  const category = categories.find((c) => c.id === model.category);
  const previewEvent = (model.visualTreatment === "vitela-preview" || model.visualTreatment === "champagne-preview")
    ? events.find((event) => `/${event.slug}` === model.demoPath)
    : undefined;
  const photo = previewEvent?.special?.photo;
  const available = model.status === "available";
  return (
    <article className="catalog-card">
      <div className={`catalog-model-visual catalog-theme-${model.category}`}>
        {model.visualTreatment === "vitela-preview" ? (
          <div className="catalog-vitela-preview">
            <span className="catalog-vitela-eyebrow">Mi bautizo</span>
            <span className="catalog-vitela-name">{previewEvent?.title}</span>
            <div className="catalog-vitela-arch">
              {photo && <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" style={{ objectPosition: photo.position }} />}
              <span className="catalog-vitela-seal" aria-hidden="true" />
            </div>
          </div>
        ) : model.visualTreatment === "champagne-preview" ? (
          <div className="catalog-champagne-preview" aria-hidden="true">
            <div className="catalog-champagne-flap" />
            <div className="catalog-champagne-card">
              <DoveEngraving variant="simple" />
              <span className="catalog-champagne-heading">{previewEvent?.special?.heading}</span>
              <span className="catalog-champagne-name">{previewEvent?.special?.honoreeName}</span>
            </div>
            <div className="catalog-champagne-envelope">
              <span className="catalog-champagne-seal">{Array.from(previewEvent?.special?.honoreeName.trim() ?? "M")[0]}</span>
            </div>
          </div>
        ) : model.coverImage && model.visualTreatment !== "gradient" ? (
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
