import { useState } from "react";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import WeddingClassicIntro from "../components/WeddingClassicIntro";
import WeddingClassicHero from "../components/WeddingClassicHero";
import WeddingClassicWelcome from "../components/WeddingClassicWelcome";
import WeddingClassicCountdown from "../components/WeddingClassicCountdown";
import WeddingClassicSchedule from "../components/WeddingClassicSchedule";
import WeddingClassicCeremonyReception from "../components/WeddingClassicCeremonyReception";
import WeddingClassicGallery from "../components/WeddingClassicGallery";
import WeddingClassicDressCode from "../components/WeddingClassicDressCode";
import WeddingClassicGifts from "../components/WeddingClassicGifts";
import WeddingCalendarButton from "../components/WeddingCalendarButton";
import WeddingClassicRSVP from "../components/WeddingClassicRSVP";
import WeddingClassicClosing from "../components/WeddingClassicClosing";
import type { EventData, WeddingCoupleData } from "../types/event";

const CALENDAR_BUTTON_CLASS =
  "inline-flex min-h-12 max-w-full cursor-pointer items-center justify-center rounded-full border border-classic-gold/50 bg-classic-cream px-6 py-3 text-sm text-classic-ink hover:bg-classic-sage-soft/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-classic-ink";

export default function WeddingClassicDigitalTemplate({ event }: { event: EventData }) {
  const [isOpen, setIsOpen] = useState(false);
  const wedding: Partial<WeddingCoupleData> = event.wedding ?? {};
  const brideAndGroom: [string, string] = wedding.brideAndGroom ?? [event.title, ""];

  if (!isOpen) {
    return (
      <WeddingClassicIntro
        monogram={wedding.monogram}
        brideAndGroom={brideAndGroom}
        onOpen={() => setIsOpen(true)}
      />
    );
  }

  return (
    <main className="bg-classic-ivory text-classic-ink">
      <FloatingWhatsApp
        phone={event.whatsapp}
        message={`Hola, quiero saber más sobre la boda de ${brideAndGroom[0]} y ${brideAndGroom[1]}`}
      />
      <WeddingClassicHero
        brideAndGroom={brideAndGroom}
        date={event.date}
        heroImage={wedding.heroImage}
        phrase={event.message}
        monogram={wedding.monogram}
      />
      <WeddingClassicWelcome welcomeMessage={wedding.welcomeMessage} />
      <WeddingClassicCountdown targetDate={event.date} />
      <WeddingClassicSchedule date={event.date} />
      <WeddingClassicCeremonyReception ceremony={wedding.ceremony} reception={wedding.reception} />
      <WeddingClassicGallery images={wedding.galleryEditorial} />
      <WeddingClassicDressCode dressCode={wedding.dressCode} />
      <WeddingClassicGifts gifts={wedding.gifts} />
      <section aria-label="Agenda la fecha" className="bg-classic-sage-soft/20 px-6 py-16 text-center">
        <h2 className="font-display-classic text-2xl sm:text-3xl">No te lo pierdas</h2>
        <div className="mt-8">
          <WeddingCalendarButton
            title={`Boda de ${brideAndGroom[0]} & ${brideAndGroom[1]}`}
            description={event.message}
            location={wedding.ceremony?.name}
            startIso={wedding.ceremony?.dateTimeIso ?? event.date}
            endIso={wedding.reception?.dateTimeIso}
            buttonClassName={CALENDAR_BUTTON_CLASS}
          />
        </div>
      </section>
      <WeddingClassicRSVP
        whatsappNumber={wedding.rsvp?.whatsappNumber ?? event.whatsapp}
        brideAndGroom={brideAndGroom}
        deadline={wedding.rsvp?.deadline}
        notes={wedding.rsvp?.notes}
      />
      <WeddingClassicClosing
        farewellMessage={wedding.farewellMessage}
        brideAndGroom={brideAndGroom}
        closingImage={wedding.closingImage}
      />
      <footer className="bg-classic-ink px-6 py-8 text-center text-classic-cream">
        <p className="text-sm tracking-widest">RDRP Te Invito</p>
      </footer>
    </main>
  );
}
