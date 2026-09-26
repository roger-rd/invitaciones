import type { EventData } from "../types/event";

const colors = ["#FFB199", "#FFD166", "#A8C9A0", "#F2A6C0"];

export default function KidsDigitalPastelHero({ event }: { event: EventData }) {
  return (
    <header className="confetti-hero">
      <div className="confetti-garland-space" aria-hidden="true">
        <svg className="confetti-garland" viewBox="0 0 600 140" fill="none" focusable="false">
          <path d="M16 26Q300 128 584 26" stroke="#8A6A52" strokeWidth="2" />
          {Array.from({ length: 10 }, (_, i) => {
            const x = 25 + i * 55;
            const y = 29 + 48 * Math.sin((i / 9) * Math.PI);
            return <path key={i} d={`M${x} ${y}l42 0-21 46Z`} fill={colors[i % 4]} transform={`rotate(${18 - i * 4} ${x + 21} ${y})`} />;
          })}
        </svg>
      </div>
      <svg className="confetti-sprinkles" viewBox="0 0 500 520" aria-hidden="true" focusable="false">
        <g fill="#FFB199"><circle cx="48" cy="120" r="5" /><circle cx="435" cy="260" r="6" /><rect x="54" y="348" width="7" height="17" rx="2" transform="rotate(-25 54 348)" /></g>
        <g fill="#A8C9A0"><rect x="429" y="125" width="7" height="18" rx="2" transform="rotate(30 429 125)" /><circle cx="68" cy="242" r="4" /><circle cx="420" cy="405" r="4" /></g>
        <g fill="#F2A6C0"><circle cx="395" cy="70" r="4" /><rect x="90" y="435" width="8" height="16" rx="2" transform="rotate(35 90 435)" /></g>
        <g fill="#FFD166"><circle cx="118" cy="85" r="5" /><rect x="460" y="330" width="7" height="15" rx="2" /></g>
      </svg>
      <img className="confetti-balloons" src="/images/kids-digital/globos.svg" width={600} height={400} alt="" />
      <div className="confetti-hero-copy">
        <p className="confetti-eyebrow">¡Ven a celebrar conmigo!</p>
        <h1 className="confetti-name">{event.title}</h1>
        {event.age !== undefined && <p className="confetti-age">cumple {event.age} {event.age === 1 ? "añito" : "añitos"}</p>}
        <p className="confetti-message">{event.message}</p>
      </div>
    </header>
  );
}
