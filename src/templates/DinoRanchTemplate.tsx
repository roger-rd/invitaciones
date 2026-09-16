import { useState } from "react";
import DinoClosing from "../components/DinoClosing";
import DinoCountdown from "../components/DinoCountdown";
import DinoEventDetails from "../components/DinoEventDetails";
import DinoActions from "../components/DinoActions";
import DinoGiftSuggestions from "../components/DinoGiftSuggestions";
import DinoEggReveal from "../components/DinoEggReveal";
import DinoDivider from "../components/DinoDivider";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Gallery from "../components/Gallery";
import DinoHero from "../components/DinoHero";
import DinoIntro from "../components/DinoIntro";
import MusicPlayer from "../components/MusicPlayer";
import { useBackgroundMusic } from "../hooks/useBackgroundMusic";
import type { EventData } from "../types/event";

export default function DinoRanchTemplate({ event }: { event: EventData }) {
  const [isOpen, setIsOpen] = useState(false);
  const { playing, play, toggle, hasMusic } = useBackgroundMusic(event.music);
  const handleOpen = () => {
    play();
    window.setTimeout(() => setIsOpen(true), 800);
  };
  if (!isOpen) {
    return <DinoIntro title={event.title} ranchName={event.dinoRanch?.ranchName} age={event.age} phrase={event.subtitle} mainCharacterImage={event.dinoRanch?.mainCharacterImage} onOpen={handleOpen} />;
  }

  return (
    <main className="dino-invitation bg-dino-cream text-dino-earth">
      {hasMusic && <MusicPlayer playing={playing} onToggle={toggle} />}
      <FloatingWhatsApp phone={event.whatsapp} message={`Hola, quiero saber más sobre la celebración de ${event.title}`} />
      <DinoHero title={event.title} age={event.age} phrase={event.message} mainCharacterImage={event.dinoRanch?.mainCharacterImage} friendCharacterImage={event.dinoRanch?.friendCharacterImage} />
      <DinoDivider from="#FFF8E7" to="#FFC93C" />
      <DinoCountdown targetDate={event.date} timeConfirmed={event.timeConfirmed} />
      <DinoDivider from="#FFC93C" to="#4C9A5B" />
      <DinoEggReveal message={event.revealMessage} hatchlingImage={event.dinoRanch?.hatchlingImage} />
      <DinoDivider from="#4C9A5B" to="#6FD6E8" />
      <DinoEventDetails date={event.date} location={event.location} mapsUrl={event.mapsUrl} wazeUrl={event.wazeUrl} timeConfirmed={event.timeConfirmed} />
      {event.gallery.length > 0 && (
        <div className="overflow-hidden">
          <DinoDivider from="#6FD6E8" to="#FFF8E7" />
          <Gallery images={event.gallery} title="Recuerdos de nuestra aventura" />
          <DinoDivider from="#FFF8E7" to="#6FD6E8" />
        </div>
      )}
      <DinoDivider from="#6FD6E8" to="#FFF8E7" />
      <DinoActions mapsUrl={event.mapsUrl} phone={event.whatsapp} eventTitle={event.title} />
      <DinoDivider from="#FFF8E7" to="#FFC93C" />
      <DinoGiftSuggestions giftMessage={event.giftMessage} giftItems={event.giftItems} giftLinkUrl={event.giftLinkUrl} giftLinkLabel={event.giftLinkLabel} />
      <DinoDivider from="#FFC93C" to="#5C3A21" />
      <DinoClosing title={event.title} phrase={event.eventPhrase} closingCharacterImage={event.dinoRanch?.closingCharacterImage} />
      <footer className="bg-dino-earth px-6 pb-28 pt-8 text-center text-dino-cream">
        <p className="text-sm tracking-widest">RDRP Te Invito</p>
      </footer>
    </main>
  );
}
