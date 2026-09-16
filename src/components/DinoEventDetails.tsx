import { Calendar, Clock, MapPin, Navigation } from "./icons";

interface DinoEventDetailsProps {
  date: string;
  location: string;
  mapsUrl?: string;
  wazeUrl?: string;
  timeConfirmed?: boolean;
}

export default function DinoEventDetails({ date, location, mapsUrl, wazeUrl, timeConfirmed = true }: DinoEventDetailsProps) {
  const day = new Date(date);
  const hasMapsLink = Boolean(mapsUrl);
  const hasWazeLink = Boolean(wazeUrl);
  const cards = [
    { label: "El día", value: new Intl.DateTimeFormat("es", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(day), Icon: Calendar, color: "bg-dino-sun" },
    { label: "La hora", value: timeConfirmed ? new Intl.DateTimeFormat("es", { hour: "numeric", minute: "2-digit" }).format(day) : "Hora por confirmar", Icon: Clock, color: "bg-dino-sky" },
    { label: "El punto de encuentro", value: location, Icon: MapPin, color: "bg-dino-cream" },
  ];
  return (
    <section className="dino-scene bg-dino-sky text-dino-earth">
      <p className="dino-eyebrow">Tu entrada a la expedición</p>
      <h2 className="dino-heading">¡Nos encontramos en el rancho!</h2>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">
        {cards.map(({ label, value, Icon, color }) => (
          <div key={label} className={`dino-plank h-full p-7 ${color}`}>
            <Icon aria-hidden="true" className="mx-auto mb-5 h-12 w-12" />
            <h3 className="text-2xl" style={{ fontFamily: "var(--font-display-dino)" }}>{label}</h3>
            <p className="mt-4 text-xl leading-relaxed">{value}</p>
          </div>
        ))}
      </div>
      {hasMapsLink || hasWazeLink ? (
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <p className="text-2xl" style={{ fontFamily: "var(--font-display-dino)" }}>Cómo llegar</p>
          {hasMapsLink && (
            <a className="dino-button bg-dino-earth text-dino-cream" href={mapsUrl} target="_blank" rel="noreferrer">
              <MapPin aria-hidden="true" className="h-6 w-6" />Maps
            </a>
          )}
          {hasWazeLink && (
            <a className="dino-button bg-dino-cream" href={wazeUrl} target="_blank" rel="noreferrer">
              <Navigation aria-hidden="true" className="h-6 w-6" />Waze
            </a>
          )}
        </div>
      ) : (
        <p className="mt-8 text-lg">Muy pronto agregaremos el mapa para llegar al rancho.</p>
      )}
    </section>
  );
}
