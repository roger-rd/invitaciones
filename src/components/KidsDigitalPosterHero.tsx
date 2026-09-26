import type { EventData } from "../types/event";

export default function KidsDigitalPosterHero({ event }: { event: EventData }) {
  return (
    <header className="papel-hero">
      <div className="papel-hero-copy">
        <p className="papel-eyebrow">Se viene una gran fiesta</p>
        <h1 className="papel-name">{event.title}</h1>
        {event.age !== undefined && <div className="papel-medal"><span>Cumplo</span><strong>{event.age}</strong><span>{event.age === 1 ? "añito" : "añitos"}</span></div>}
        <p className="papel-message">{event.message}</p>
      </div>
      <div className="papel-garland" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <span key={i} />)}</div>
    </header>
  );
}
