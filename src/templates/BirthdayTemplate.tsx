import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import type { EventData } from "../types/event";

interface BirthdayTemplateProps {
  event: EventData;
}

export default function BirthdayTemplate({ event }: BirthdayTemplateProps) {
  return (
    <main className="bg-white">
      <Hero
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        message={event.message}
      />

      <Countdown targetDate={event.date} />

      <Gallery images={event.gallery} title="Momentos especiales" />

      <Location location={event.location} mapsUrl={event.mapsUrl} />

      <RSVP phone={event.whatsapp} title={event.title} />
    </main>
  );
}