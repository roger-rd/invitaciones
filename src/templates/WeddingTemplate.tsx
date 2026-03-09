import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import type { EventData } from "../types/event";

interface WeddingTemplateProps {
  event: EventData;
}

  <audio autoPlay loop>
      <source src="/music/wedding.mp3" type="audio/mpeg" />
  </audio>

export default function WeddingTemplate({
  event,
}: WeddingTemplateProps) {
  return (
   

    <main className="bg-white">
      <Hero
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        message={event.message}
      />

      <Countdown targetDate={event.date} />
      
      <Gallery images={event.gallery} title="Nuestros momentos" />

      <Location location={event.location} mapsUrl={event.mapsUrl} />

      <RSVP phone={event.whatsapp} title={event.title} />
    </main>
  );
}