import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import Reveal from "../Reveal";
export default function CategoryShowcase() {
  return (
    <section id="categorias" className="landing-section landing-container">
      <p className="landing-eyebrow">Cada historia tiene su estilo</p>
      <h2 className="landing-heading">¿Qué vamos a celebrar?</h2>
      <div className="landing-category-layout">
        {categories.map((c, i) => (
          <Reveal key={c.id} className={`landing-category-block landing-category-block-${i}`}>
            <Link to={c.path} className={`landing-category catalog-theme-${c.id}`}>
              <span className="landing-eyebrow">
                0{i + 1} / {c.label}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl">{c.tagline}</h3>
              <p className="max-w-lg leading-relaxed">{c.description}</p>
              <span className="mt-auto pt-5 font-semibold">
                Explorar {c.shortLabel ?? c.label} <span aria-hidden="true">↗</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
