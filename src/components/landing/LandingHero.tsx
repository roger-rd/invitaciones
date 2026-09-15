import { catalogModels } from "../../data/catalog";
import Reveal from "../Reveal";
export default function LandingHero() {
  return (
    <section className="landing-dark relative overflow-hidden">
      <div className="grain-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="landing-container landing-hero">
        <Reveal>
          <p className="landing-eyebrow text-gold-soft">Invitaciones digitales · Hechas para ti</p>
          <h1 className="landing-title">
            La emoción empieza <em className="text-gold-soft">con la invitación.</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed">
            Tu historia, tus personas y todos los detalles de ese gran día. Una experiencia para
            abrir en el teléfono y compartir con quienes más quieres.
          </p>
          <div className="landing-actions">
            <a href="#categorias" className="landing-button landing-button-light">
              Ver invitaciones
            </a>
            <a href="#solicitar" className="landing-button landing-button-outline">
              Solicitar mi invitación
            </a>
          </div>
          <p className="mt-5 text-sm text-gold-soft">
            Tú imaginas la celebración. Nosotros personalizamos la invitación.
          </p>
        </Reveal>
        <div
          className="landing-devices"
          aria-label="Muestras visuales de invitaciones para teléfono"
        >
          {["edinson", "mateo-circo"].map((id, i) => {
            const model = catalogModels.find((m) => m.id === id);
            return (
              <div key={id} className={`landing-device landing-device-${i}`}>
                <div className="landing-device-speaker" />
                {model?.coverImage && (
                  <img
                    src={model.coverImage}
                    alt={
                      i === 0
                        ? "Edinson, modelo de cumpleaños"
                        : "Chispín, personaje del modelo de circo infantil"
                    }
                    className={i === 1 ? "landing-character" : ""}
                  />
                )}
                <div className="landing-device-caption">
                  <span>Estás invitado</span>
                  <strong>{i === 0 ? "Celebrar la vida" : "¡Que empiece la función!"}</strong>
                  <span>Una experiencia para compartir</span>
                </div>
              </div>
            );
          })}
          <div className="landing-device landing-device-2">
            <div className="landing-device-speaker" />
            <div className="landing-wedding-preview">
              <span className="text-xs uppercase tracking-widest">Nuestra historia</span>
              <span className="font-display text-3xl italic">Matrimonios</span>
              <span className="text-sm">El comienzo de un para siempre.</span>
              <span className="mt-6 border-t border-gold-soft/50 pt-5 text-xs">
                Abre un nuevo capítulo
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
