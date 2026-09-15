import { Link } from "react-router-dom";
import { categories } from "../../data/categories";
import { buildWhatsAppUrl } from "../../config/whatsapp";
export default function LandingNav() {
  return (
    <header className="border-b border-ink/15">
      <a className="landing-skip" href="#contenido">
        Saltar al contenido
      </a>
      <nav
        aria-label="Navegación principal"
        className="landing-container flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-4"
      >
        <Link to="/" className="landing-wordmark">
          RDRP <span className="font-display italic">Te Invito</span>
        </Link>
        <div className="flex flex-wrap gap-x-5">
          {categories.map((c) => (
            <Link className="landing-navlink" key={c.id} to={c.path}>
              {c.shortLabel ?? c.label}
            </Link>
          ))}
        </div>
        <a
          className="landing-button landing-button-outline"
          href={buildWhatsAppUrl("Hola, quisiera información sobre sus invitaciones digitales.")}
          target="_blank"
          rel="noreferrer"
        >
          Hablemos por WhatsApp
        </a>
      </nav>
    </header>
  );
}
