import { useState } from "react";
import KidsClosing from "../components/KidsClosing";
import KidsCountdown from "../components/KidsCountdown";
import KidsEventDetails from "../components/KidsEventDetails";
import KidsActions from "../components/KidsActions";
import GiftSuggestions from "../components/GiftSuggestions";
import RevealMoment from "../components/RevealMoment";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Gallery from "../components/Gallery";
import KidsHero from "../components/KidsHero";
import KidsIntro from "../components/KidsIntro";
import MusicPlayer from "../components/MusicPlayer";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import type { EventData } from "../types/event";

function CircusDivider({ from, to }: { from: string; to: string }) {
  return <svg aria-hidden="true" focusable="false" viewBox="0 0 1200 100" preserveAspectRatio="none" className="pointer-events-none block h-20 w-full sm:h-28" style={{ backgroundColor: from }}><path fill={to} d="M0 60Q75 0 150 60Q225 110 300 50Q375-10 450 50Q525 110 600 50Q675-10 750 50Q825 110 900 50Q975-10 1050 50Q1125 110 1200 45V100H0Z" /><path d="M0 65Q300 0 600 65T1200 65" fill="none" stroke="#FFC94D" strokeWidth="4" strokeDasharray="3 18" strokeLinecap="round" /></svg>;
}

export default function KidsBirthdayTemplate({ event }: { event: EventData }) {
  const [isOpen, setIsOpen] = useState(false);
  const { playing, play, toggle, hasMusic } = useBackgroundMusic(event.music);
  const handleOpen = () => {
    // Preserve the user gesture for audio playback before the curtain timeout.
    play();
    window.setTimeout(() => setIsOpen(true), 800);
  };
  if (!isOpen) return <KidsIntro title={event.title} age={event.age} phrase={event.subtitle} onOpen={handleOpen} />;

  return (
    <main className="kids-invitation bg-circus-cream text-circus-navy">
      {hasMusic && <MusicPlayer playing={playing} onToggle={toggle} />}
      <FloatingWhatsApp phone={event.whatsapp} message={`Hola, quiero saber más sobre la celebración de ${event.title}`} />
      <KidsHero title={event.title} age={event.age} characterWelcomeImage={event.characterWelcomeImage} phrase={event.message} />
      <CircusDivider from="#FFFDF7" to="#FFC94D" />
      <KidsCountdown targetDate={event.date} />
      <CircusDivider from="#FFC94D" to="#1B2A4A" />
      <RevealMoment message={event.revealMessage} mediaUrl={event.revealMediaUrl} mediaType={event.revealMediaType} />
      <CircusDivider from="#2E6FF2" to="#7FD6E0" />
      <KidsEventDetails date={event.date} location={event.location} mapsUrl={event.mapsUrl} wazeUrl={event.wazeUrl} />
      {event.gallery.length > 0 && <div className="overflow-hidden"><CircusDivider from="#7FD6E0" to="#faf6ef" /><Gallery images={event.gallery} title="Sonrisas de nuestra aventura" /><CircusDivider from="#faf6ef" to="#7FD6E0" /></div>}
      <CircusDivider from="#7FD6E0" to="#FFFDF7" />
      <KidsActions mapsUrl={event.mapsUrl} phone={event.whatsapp} eventTitle={event.title} />
      <CircusDivider from="#FFFDF7" to="#FFC94D" />
      <GiftSuggestions giftMessage={event.giftMessage} giftItems={event.giftItems} giftLinkUrl={event.giftLinkUrl} giftLinkLabel={event.giftLinkLabel} />
      <CircusDivider from="#FFC94D" to="#1B2A4A" />
      <KidsClosing title={event.title} phrase={event.eventPhrase} characterCelebrationImage={event.characterCelebrationImage} />
      <footer className="bg-circus-blue px-6 pb-28 pt-8 text-center text-circus-cream"><p className="text-sm tracking-widest">RDRP Te Invito</p></footer>
    </main>
  );
}
