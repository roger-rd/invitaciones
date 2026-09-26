import { useEffect } from "react";
import type { EventData } from "../types/event";
import KidsDigitalPosterHero from "../components/KidsDigitalPosterHero";
import KidsDigitalSections from "../components/KidsDigitalSections";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import MusicPlayer from "../components/MusicPlayer";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";

export default function KidsDigitalPosterTemplate({ event }: { event: EventData }) {
  const { playing, toggle, hasMusic } = useBackgroundMusic(event.music);
  useEffect(() => {
    document.title = `Cumpleaños de ${event.title} | RDRP Te Invito`;
    window.scrollTo(0, 0);
  }, [event.title]);

  return (
    <div className="papel-page">
      {/* Sin apertura: la música opcional comienza solo al pulsar el reproductor. */}
      {hasMusic && <MusicPlayer playing={playing} onToggle={toggle} />}
      <main className="papel-layout">
        <KidsDigitalPosterHero event={event} />
        <KidsDigitalSections event={event} theme="papel" />
      </main>
      <footer className="papel-footer">RDRP Te Invito</footer>
      <FloatingWhatsApp phone={event.whatsapp} message={`Hola, tengo una consulta sobre la fiesta de ${event.title}`} />
    </div>
  );
}
