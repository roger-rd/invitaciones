import { useState } from "react";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import MusicPlayer from "../components/MusicPlayer";
import WeddingRomanticIntro from "../components/WeddingRomanticIntro";
import WeddingRomanticHero from "../components/WeddingRomanticHero";
import WeddingWelcome from "../components/WeddingWelcome";
import WeddingCountdown from "../components/WeddingCountdown";
import WeddingStory from "../components/WeddingStory";
import WeddingGallerySection from "../components/WeddingGallerySection";
import WeddingSchedule from "../components/WeddingSchedule";
import WeddingCeremonyReception from "../components/WeddingCeremonyReception";
import WeddingItinerary from "../components/WeddingItinerary";
import WeddingDressCode from "../components/WeddingDressCode";
import WeddingGifts from "../components/WeddingGifts";
import WeddingCalendarButton from "../components/WeddingCalendarButton";
import WeddingRSVP from "../components/WeddingRSVP";
import WeddingClosing from "../components/WeddingClosing";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import type { EventData, WeddingCoupleData } from "../types/event";

export default function WeddingRomanticTemplate({ event }: { event: EventData }) {
  const { playing, play, toggle, hasMusic } = useBackgroundMusic(event.music);
  const [isOpen, setIsOpen] = useState(false);
  const wedding: Partial<WeddingCoupleData> = event.wedding ?? {};
  const brideAndGroom: [string, string] = wedding.brideAndGroom ?? [event.title, ""];

  const handleOpen = () => {
    // Mantener el gesto del usuario para el audio antes de abrir los paneles.
    play();
    window.setTimeout(() => setIsOpen(true), 800);
  };

  if (!isOpen) return <WeddingRomanticIntro monogram={wedding.monogram} brideAndGroom={brideAndGroom} onOpen={handleOpen} />;

  return (
    <main className="bg-romantic-ivory text-romantic-ink">
      {hasMusic && <MusicPlayer playing={playing} onToggle={toggle} />}
      <FloatingWhatsApp phone={event.whatsapp} message={`Hola, quiero saber más sobre la boda de ${brideAndGroom[0]} y ${brideAndGroom[1]}`} />
      <WeddingRomanticHero brideAndGroom={brideAndGroom} date={event.date} coverImage={event.coverImage} phrase={event.message} monogram={wedding.monogram} />
      <WeddingWelcome welcomeMessage={wedding.welcomeMessage} />
      <WeddingCountdown targetDate={event.date} />
      <WeddingStory {...(wedding.story ?? {})} />
      <WeddingGallerySection images={event.gallery} />
      <WeddingSchedule date={event.date} />
      <WeddingCeremonyReception ceremony={wedding.ceremony} reception={wedding.reception} />
      <WeddingItinerary items={wedding.itinerary} />
      <WeddingDressCode dressCode={wedding.dressCode} />
      <WeddingGifts gifts={wedding.gifts} />
      <section aria-label="Agenda la fecha" className="bg-romantic-champagne/30 px-6 py-16 text-center">
        <h2 className="font-display-romantic text-2xl sm:text-3xl">No te lo pierdas</h2>
        <div className="mt-8">
          <WeddingCalendarButton
            title={`Boda de ${brideAndGroom[0]} & ${brideAndGroom[1]}`}
            description={event.message}
            location={wedding.ceremony?.name}
            startIso={wedding.ceremony?.dateTimeIso ?? event.date}
            endIso={wedding.reception?.dateTimeIso}
          />
        </div>
      </section>
      <WeddingRSVP whatsappNumber={wedding.rsvp?.whatsappNumber ?? event.whatsapp} brideAndGroom={brideAndGroom} deadline={wedding.rsvp?.deadline} notes={wedding.rsvp?.notes} />
      <WeddingClosing farewellMessage={wedding.farewellMessage} brideAndGroom={brideAndGroom} />
      <footer className="bg-romantic-ink px-6 py-8 text-center text-romantic-cream"><p className="text-sm tracking-widest">RDRP Te Invito</p></footer>
    </main>
  );
}
