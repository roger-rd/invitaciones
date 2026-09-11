import { Calendar, Clock, MapPin, Navigation } from "./icons";
import Reveal from "./Reveal";

interface KidsEventDetailsProps { date: string; location: string; mapsUrl: string; wazeUrl?: string }

export default function KidsEventDetails({ date, location, mapsUrl, wazeUrl }: KidsEventDetailsProps) {
  const day = new Date(date);
  const cards = [
    { label: "El día", value: new Intl.DateTimeFormat("es", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(day), Icon: Calendar, color: "bg-circus-yellow" },
    { label: "La hora", value: new Intl.DateTimeFormat("es", { hour: "numeric", minute: "2-digit" }).format(day), Icon: Clock, color: "bg-circus-sky" },
    { label: "La pista de la fiesta", value: location, Icon: MapPin, color: "bg-circus-cream" },
  ];
  return (
    <section className="kids-scene bg-circus-sky">
      <Reveal><p className="kids-eyebrow">Tu entrada a la diversión</p><h2 className="kids-heading">¡Nos encontramos bajo la carpa!</h2></Reveal>
      <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-3">{cards.map(({ label, value, Icon, color }, i) => <Reveal key={label} delay={i * 100} className="h-full"><div className={`kids-ticket h-full p-7 ${color}`}><Icon aria-hidden="true" className="mx-auto mb-5 h-12 w-12" /><h3 className="font-display-kids text-2xl">{label}</h3><p className="mt-4 text-xl leading-relaxed">{value}</p></div></Reveal>)}</div>
      <Reveal delay={300}><div className="mt-8 flex flex-wrap items-center justify-center gap-4"><p className="font-display-kids text-2xl">Cómo llegar</p><a className="kids-button bg-circus-navy text-circus-cream" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" className="h-6 w-6" />Maps</a>{wazeUrl && <a className="kids-button bg-circus-cream" href={wazeUrl} target="_blank" rel="noreferrer"><Navigation aria-hidden="true" className="h-6 w-6" />Waze</a>}</div></Reveal>
    </section>
  );
}
