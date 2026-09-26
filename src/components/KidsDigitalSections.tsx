import type { ComponentType, ReactNode, SVGProps } from "react";
import type { EventData } from "../types/event";
import { Calendar, Clock, Gift, MapPin, MessageCircle, Navigation } from "./icons";
import { buildWhatsAppUrl } from "../config/whatsapp";

type DigitalTheme = "confetti" | "papel";

function Stop({ theme, kind, title, icon: Icon, children }: {
  theme: DigitalTheme;
  kind: "date" | "location" | "rsvp" | "gifts";
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
}) {
  return (
    <section className={`${theme}-stop ${theme}-stop-${kind}`} aria-labelledby={`${theme}-${kind}-title`}>
      <span className={`${theme}-stop-icon`}><Icon aria-hidden="true" focusable="false" /></span>
      <div className={`${theme}-stop-content`}>
        <h2 id={`${theme}-${kind}-title`}>{title}</h2>
        {children}
      </div>
    </section>
  );
}

/** Mismo contenido; cada estilo compone sus filas o tickets en su propio namespace. */
export default function KidsDigitalSections({ event, theme }: { event: EventData; theme: DigitalTheme }) {
  // Conserva la fecha y hora del lugar, sin convertir a la zona del visitante.
  const localDate = new Date(event.date.replace(/(?:Z|[+-]\d{2}:?\d{2})$/, ""));
  const dateLabel = localDate.toLocaleDateString("es-CL", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  const timeLabel = localDate.toLocaleTimeString("es-CL", { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <div className={`${theme}-sections`}>
      <Stop theme={theme} kind="date" title="Cuándo celebramos" icon={Calendar}>
        <p><time dateTime={event.timeConfirmed === false ? event.date.slice(0, 10) : event.date}>{dateLabel}</time></p>
        <p className={`${theme}-time`}><Clock aria-hidden="true" focusable="false" />{event.timeConfirmed === false ? "Hora por confirmar" : `${timeLabel} h`}</p>
      </Stop>
      <Stop theme={theme} kind="location" title="Dónde nos vemos" icon={MapPin}>
        <p>{event.location}</p>
        {event.mapsUrl.trim() && <a className={`${theme}-button ${theme}-button-outline`} href={event.mapsUrl} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" focusable="false" />Ver ubicación</a>}
      </Stop>
      <Stop theme={theme} kind="rsvp" title="¿Vienes a la fiesta?" icon={MessageCircle}>
        <p>Nos encantará contar contigo. Confirma tu asistencia por WhatsApp.</p>
        <a className={`${theme}-button`} href={buildWhatsAppUrl(`Hola, confirmo mi asistencia a la fiesta de ${event.title}`, event.whatsapp)} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" focusable="false" />Confirmar asistencia</a>
      </Stop>
      <Stop theme={theme} kind="gifts" title="Qué regalar" icon={Gift}>
        <p>{event.giftMessage?.trim() || "El mejor regalo es compartir este día contigo. ¡Ven con muchas ganas de celebrar!"}</p>
        {!!event.giftItems?.length && <ul className={`${theme}-gift-list`}>{event.giftItems.map((gift, index) => <li key={`${index}-${gift}`}>{gift}</li>)}</ul>}
      </Stop>
    </div>
  );
}
