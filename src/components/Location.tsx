import { MapPin } from "./icons";
import Reveal from "./Reveal";

interface LocationProps {
  location: string;
  mapsUrl: string;
}

export default function Location({ location, mapsUrl }: LocationProps) {
  return (
    <section className="bg-sand px-6 py-24 text-center sm:py-28">
      <Reveal>
        <MapPin className="mx-auto h-7 w-7 text-gold" />
      </Reveal>
      <Reveal delay={80}>
        <p className="mt-5 text-xs uppercase tracking-[0.4em] text-ink/45">Ubicación</p>
      </Reveal>
      <Reveal delay={140}>
        <h2 className="mt-4 font-display text-3xl italic text-ink sm:text-4xl">{location}</h2>
      </Reveal>
      <Reveal delay={220}>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-xs uppercase tracking-[0.3em] text-cream transition hover:bg-ink/85"
        >
          <MapPin className="h-4 w-4" />
          Ver ubicación
        </a>
      </Reveal>
    </section>
  );
}
