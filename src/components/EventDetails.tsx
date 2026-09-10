import { Calendar, Clock, MapPin } from "./icons";
import Reveal from "./Reveal";

interface EventDetailsProps {
  date: string;
  location: string;
  mapsUrl: string;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatTime(date: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

export default function EventDetails({ date, location, mapsUrl }: EventDetailsProps) {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-24 text-cream sm:py-28">
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -left-16 top-0 h-64 w-64 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="ambient-glow-delayed pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-gold-soft/10 blur-3xl"
      />
      <div aria-hidden="true" className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">El gran día</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-5 font-display text-4xl italic sm:text-5xl">Fecha, hora y lugar</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <Reveal delay={140}>
            <div className="flex flex-col items-center gap-3">
              <Calendar className="h-6 w-6 text-gold" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Fecha</p>
              <p className="font-display text-lg italic capitalize text-cream/95">{formatDate(date)}</p>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="flex flex-col items-center gap-3">
              <Clock className="h-6 w-6 text-gold" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Hora</p>
              <p className="font-display text-lg italic text-cream/95">{formatTime(date)} hrs</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-3">
              <MapPin className="h-6 w-6 text-gold" />
              <p className="text-[11px] uppercase tracking-[0.3em] text-cream/50">Lugar</p>
              <p className="font-display text-lg italic text-cream/95">{location}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3 text-xs uppercase tracking-[0.3em] text-gold-soft transition hover:border-gold hover:text-gold"
          >
            <MapPin className="h-4 w-4" />
            Cómo llegar
          </a>
        </Reveal>
      </div>
    </section>
  );
}
