import { Link } from "react-router-dom";
import { plans } from "../../data/plans";
export default function PlansSection() {
  return (
    <section className="landing-section landing-container">
      <p className="landing-eyebrow">Una propuesta para tu celebración</p>
      <h2 className="landing-heading">Elige cómo quieres contar tu historia</h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <article
            key={p.id}
            className={`flex flex-col rounded-3xl border p-7 ${p.highlighted ? "landing-dark border-gold" : "border-ink/20"}`}
          >
            <p className="landing-eyebrow">
              {p.highlighted ? "Plan destacado" : "Tu celebración, a tu estilo"}
            </p>
            <h3 className="mt-5 font-display text-3xl">{p.name}</h3>
            <p className="mt-4 leading-relaxed">{p.description}</p>
            <p className="my-7 font-display text-4xl">{p.priceLabel}</p>
            <ul className="mb-8 list-disc space-y-3 pl-5 text-sm">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link
              className={`landing-button mt-auto ${p.highlighted ? "landing-button-light" : "landing-button-dark"}`}
              to={`/?plan=${p.id}#solicitar`}
            >
              {p.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
