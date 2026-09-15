import { useEffect } from "react";
import type { CategoryDefinition } from "../types/catalog";
import { categories } from "../data/categories";
import { catalogModels } from "../data/catalog";
import LandingNav from "../components/landing/LandingNav";
import LandingClosing from "../components/landing/LandingClosing";
import CatalogSubNav from "../components/catalog/CatalogSubNav";
import CategoryHero from "../components/catalog/CategoryHero";
import ModelCard from "../components/catalog/ModelCard";
import CategoryEmptyState from "../components/catalog/CategoryEmptyState";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { RDRP_WHATSAPP_NUMBER, buildModelRequestMessage } from "../config/whatsapp";
export default function CategoryPage({ category }: { category: CategoryDefinition["id"] }) {
 const definition = categories.find(c => c.id === category)!;
 const models = catalogModels.filter(m => m.category === category);
 useEffect(() => { document.title = `${definition.label} | RDRP Te Invito`; window.scrollTo(0, 0); }, [definition.label]);
 return <div className="catalog-page"><LandingNav /><CatalogSubNav /><main id="contenido"><CategoryHero category={definition} /><section id="modelos" className="landing-container landing-section"><h2 className="landing-heading">Encuentra tu invitación</h2><p className="mb-10 mt-4">Explora las demos disponibles o consulta por los modelos próximos. Personalizamos tu elección de forma manual.</p>{models.length ? <div className="grid gap-8 md:grid-cols-2">{models.map(m => <ModelCard key={m.id} model={m} />)}</div> : <CategoryEmptyState category={definition} />}</section></main><LandingClosing /><FloatingWhatsApp phone={RDRP_WHATSAPP_NUMBER} message={buildModelRequestMessage({ category: definition.label })} /></div>;
}
