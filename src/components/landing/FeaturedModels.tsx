import { catalogModels } from "../../data/catalog";
import ModelCard from "../catalog/ModelCard";
import Reveal from "../Reveal";
export default function FeaturedModels() {
  return (
    <section className="landing-section bg-sand/40">
      <div className="landing-container">
        <p className="landing-eyebrow">Ábrelas. Recórrelas. Imagínate ahí.</p>
        <h2 className="landing-heading">Historias que ya puedes explorar</h2>
        <p className="mt-4 max-w-2xl leading-relaxed">
          Conoce las demostraciones y encuentra el punto de partida para tu celebración.
        </p>
        <div className="mt-10 grid gap-7 lg:grid-cols-3">
          {catalogModels
            .filter((m) => m.status === "available")
            .slice(0, 3)
            .map((m) => (
              <Reveal key={m.id} className="flex">
                <ModelCard model={m} />
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
}
