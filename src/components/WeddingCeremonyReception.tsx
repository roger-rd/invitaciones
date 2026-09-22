import type { WeddingVenue } from "../types/event";
import { Clock, MapPin, Navigation } from "./icons";

interface WeddingCeremonyReceptionProps {
  ceremony?: WeddingVenue;
  reception?: WeddingVenue;
}

function formatInEventZone(iso: string, options: Intl.DateTimeFormatOptions) {
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) return null;
  const offsetMatch = iso.match(/([+-]\d{2}):?(\d{2})$/);
  const offsetMinutes = offsetMatch
    ? (offsetMatch[1].startsWith("-") ? -1 : 1) * (Math.abs(Number(offsetMatch[1])) * 60 + Number(offsetMatch[2]))
    : 0;
  const shifted = new Date(date.getTime() + offsetMinutes * 60000);
  return new Intl.DateTimeFormat("es", { ...options, timeZone: "UTC" }).format(shifted);
}

function VenueCard({ label, venue }: { label: string; venue: WeddingVenue }) {
  const date = new Date(venue.dateTimeIso);
  const validDate = Number.isFinite(date.getTime());
  const time = venue.timeLabel?.trim() || (validDate
    ? formatInEventZone(venue.dateTimeIso, { hour: "numeric", minute: "2-digit" })
    : "Hora por confirmar");
  const mapsUrl = venue.mapsUrl?.trim();
  const wazeUrl = venue.wazeUrl?.trim();
  const linkClass = "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-full border border-romantic-gold/50 px-5 py-3 text-sm hover:bg-romantic-champagne/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink";

  return (
    <article className="min-w-0 border border-romantic-gold/25 bg-romantic-cream p-6 text-center [overflow-wrap:anywhere] sm:p-10">
      <h3 className="text-xs uppercase tracking-[.2em]">{label}</h3>
      <p className="mt-6 font-display-romantic text-3xl leading-tight">{venue.name}</p>
      <p className="mt-4 whitespace-pre-line text-base leading-relaxed">{venue.address}</p>
      <p className="mt-6 flex items-center justify-center gap-2 font-display-romantic text-xl">
        <Clock aria-hidden="true" focusable="false" className="h-5 w-5 shrink-0 text-romantic-gold" />
        {validDate ? <time dateTime={venue.dateTimeIso}>{time}</time> : time}
      </p>
      {(mapsUrl || wazeUrl) && (
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {mapsUrl && <a href={mapsUrl} target="_blank" rel="noreferrer" aria-label={`Cómo llegar a ${venue.name} para la ${label.toLowerCase()} en Google Maps (abre una pestaña nueva)`} className={linkClass}><MapPin aria-hidden="true" focusable="false" className="h-5 w-5 shrink-0" />Cómo llegar</a>}
          {wazeUrl && <a href={wazeUrl} target="_blank" rel="noreferrer" aria-label={`Cómo llegar a ${venue.name} para la ${label.toLowerCase()} en Waze (abre una pestaña nueva)`} className={linkClass}><Navigation aria-hidden="true" focusable="false" className="h-5 w-5 shrink-0" />Waze</a>}
        </div>
      )}
      {venue.notes?.trim() && <p className="mt-6 whitespace-pre-line text-sm leading-relaxed">{venue.notes}</p>}
    </article>
  );
}

export default function WeddingCeremonyReception({ ceremony, reception }: WeddingCeremonyReceptionProps) {
  if (!ceremony && !reception) return null;

  return (
    <section aria-label="Ceremonia y recepción" className="bg-romantic-ivory px-6 py-20 text-romantic-ink sm:py-28">
      <h2 className="mb-12 text-center font-display-romantic text-3xl sm:text-4xl">Dónde celebraremos</h2>
      <div className={`mx-auto grid gap-8 ${ceremony && reception ? "max-w-6xl md:grid-cols-2" : "max-w-xl"}`}>
        {ceremony && <VenueCard label="Ceremonia" venue={ceremony} />}
        {reception && <VenueCard label="Recepción" venue={reception} />}
      </div>
    </section>
  );
}
