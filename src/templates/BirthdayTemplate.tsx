import { useState } from "react";
import Closing from "../components/Closing";
import Countdown from "../components/Countdown";
import EventDetails from "../components/EventDetails";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import InvitationIntro from "../components/InvitationIntro";
import MusicPlayer from "../components/MusicPlayer";
import RSVP from "../components/RSVP";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import type { EventData } from "../types/event";

interface BirthdayTemplateProps {
  event: EventData;
}

export default function BirthdayTemplate({ event }: BirthdayTemplateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { playing, play, toggle, hasMusic } = useBackgroundMusic(event.music);

  const handleOpen = () => {
    // play() se llama de forma síncrona dentro del gesto de click,
    // antes del setTimeout, para cumplir con las políticas de autoplay.
    play();
    window.setTimeout(() => setIsOpen(true), 480);
  };

  if (!isOpen) {
    return (
      <InvitationIntro
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        date={event.date}
        onOpen={handleOpen}
      />
    );
  }

  return (
    <main className="animate-fade-in bg-cream text-ink">
      {hasMusic ? <MusicPlayer playing={playing} onToggle={toggle} /> : null}
      <FloatingWhatsApp
        phone={event.whatsapp}
        message={`Hola, quiero saber más sobre la celebración de ${event.title}`}
      />

      <Hero
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        message={event.message}
      />

      <Countdown targetDate={event.date} />

      <EventDetails date={event.date} location={event.location} mapsUrl={event.mapsUrl} />

      <Gallery images={event.gallery} title="Momentos para recordar" />

      <RSVP phone={event.whatsapp} title={event.title} />

      <Closing title={event.title} coverImage={event.coverImage} phrase={event.eventPhrase} />

      <footer className="bg-ink px-6 py-10 text-center">
        <p className="text-[11px] uppercase tracking-[0.35em] text-cream/50">RDRP Te Invito</p>
      </footer>
    </main>
  );
}
