import FaqAccordion from "./FaqAccordion";
import { buildWhatsAppUrl } from "../../config/whatsapp";
export default function TrustSection() {
  return (
    <section className="landing-section landing-container grid gap-12 md:grid-cols-2">
      <div>
        <p className="landing-eyebrow">Conversemos con tranquilidad</p>
        <h2 className="landing-heading">Tu idea, acompañada de principio a fin.</h2>
        <p className="mt-6 leading-relaxed">
          Acordamos contigo el contenido, el plan y los ajustes. Personalizamos manualmente y te
          compartimos una vista previa antes de publicar con tu aprobación.
        </p>
        <a className="landing-navlink mt-4 underline" href="#como-funciona">
          Conoce el proceso completo
        </a>
        <h3 className="mt-8 font-display text-2xl">Contacto directo con RDRP</h3>
        <p className="mt-3">Resolvemos tus dudas y coordinamos tu invitación por WhatsApp.</p>
        <a
          className="landing-button landing-button-dark mt-5"
          href={buildWhatsAppUrl("Hola, tengo una consulta sobre las invitaciones digitales.")}
          target="_blank"
          rel="noreferrer"
        >
          Escribir a RDRP
        </a>
      </div>
      <div>
        <h2 className="mb-5 font-display text-3xl">Preguntas frecuentes</h2>
        <FaqAccordion />
      </div>
    </section>
  );
}
