import { buildWhatsAppUrl } from "../../config/whatsapp";
export default function LandingClosing() {
  return (
    <footer className="landing-dark relative overflow-hidden">
      <div className="grain-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="landing-container landing-section relative text-center">
        <p className="landing-eyebrow text-gold-soft">RDRP Te Invito</p>
        <h2 className="landing-heading mx-auto max-w-3xl">
          Hay momentos que merecen una invitación especial.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-relaxed">
          Empecemos por la tuya. Estamos aquí para darle forma a lo que quieres compartir.
        </p>
        <div className="landing-actions justify-center">
          <a href="/#categorias" className="landing-button landing-button-light">
            Ver invitaciones
          </a>
          <a href="/#solicitar" className="landing-button landing-button-outline">
            Solicitar mi invitación
          </a>
        </div>
        <a
          href={buildWhatsAppUrl("Hola, quiero comenzar mi invitación digital.")}
          className="landing-navlink mt-6 underline"
          target="_blank"
          rel="noreferrer"
        >
          También puedes escribirnos por WhatsApp
        </a>
        <p className="mt-12 text-sm text-gold-soft">
          Invitaciones digitales · Personalizadas con atención humana
        </p>
      </div>
    </footer>
  );
}
