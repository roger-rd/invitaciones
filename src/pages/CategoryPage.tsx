import { useEffect, useId, useState } from "react";
import type { CategoryDefinition, WeddingExperienceType } from "../types/catalog";
import { categories } from "../data/categories";
import { catalogModels } from "../data/catalog";
import LandingNav from "../components/landing/LandingNav";
import LandingClosing from "../components/landing/LandingClosing";
import CatalogSubNav from "../components/catalog/CatalogSubNav";
import CategoryHero from "../components/catalog/CategoryHero";
import ModelCard from "../components/catalog/ModelCard";
import CategoryEmptyState from "../components/catalog/CategoryEmptyState";
import ExperienceTypeTabs from "../components/catalog/ExperienceTypeTabs";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { RDRP_WHATSAPP_NUMBER, buildModelRequestMessage } from "../config/whatsapp";
export default function CategoryPage({ category }: { category: CategoryDefinition["id"] }) {
 const definition = categories.find(c => c.id === category)!;
 const isWedding = category === "wedding";
 const [experienceType, setExperienceType] = useState<WeddingExperienceType>("interactive");
 const panelId = useId();
 const models = catalogModels.filter(m => m.category === category && (!isWedding || m.experienceType === experienceType));
 useEffect(() => { document.title = `${definition.label} | RDRP Te Invito`; window.scrollTo(0, 0); }, [definition.label]);
 const results = models.length ? <div className="grid gap-8 md:grid-cols-2">{models.map(m => <ModelCard key={m.id} model={m} />)}</div> : <CategoryEmptyState category={definition} />;
 return <div className="catalog-page"><LandingNav /><CatalogSubNav /><main id="contenido"><CategoryHero category={definition} /><section id="modelos" className="landing-container landing-section"><h2 className="landing-heading">Encuentra tu invitación</h2><p className="mb-10 mt-4">Explora las demos disponibles o consulta por los modelos próximos. Personalizamos tu elección de forma manual.</p>{isWedding ? <><ExperienceTypeTabs active={experienceType} onChange={setExperienceType} panelId={panelId} /><div role="tabpanel" id={panelId} aria-labelledby={`${panelId}-${experienceType}-tab`} tabIndex={0}>{results}</div></> : results}</section></main><LandingClosing /><FloatingWhatsApp phone={RDRP_WHATSAPP_NUMBER} message={buildModelRequestMessage({ category: definition.label })} /></div>;
}
