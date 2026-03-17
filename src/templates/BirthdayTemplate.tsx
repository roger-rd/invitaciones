import { useState } from "react";
import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import InvitationIntro from "../components/InvitationIntro";
import EventDetails from "../components/EventDetails";
import type { EventData } from "../types/event";
import MusicPlayer from "../components/MusicPlayer";

interface BirthdayTemplateProps {
  event: EventData;
}

export default function BirthdayTemplate({
  event,
}: BirthdayTemplateProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <InvitationIntro
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        date={event.date}
        onOpen={() => setIsOpen(true)}
      />
    );
  }

  return (
    <main className="bg-white text-gray-800">
      <MusicPlayer src={event.music} />
      <Hero
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        message={event.message}
      />

      <section className="bg-rose-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            Una fecha muy especial
          </p>
          <h2 className="mt-4 text-3xl font-light leading-relaxed md:text-5xl">
            {event.eventPhrase ??
              "Quiero compartir contigo este momento tan especial"}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-500">
            Prepárate para una celebración llena de alegría, cariño y momentos
            que quedarán para siempre en el corazón.
          </p>
        </div>
      </section>



      <Countdown targetDate={event.date} />


      <EventDetails date={event.date} location={event.location} />


      <Gallery images={event.gallery} title="Galería de recuerdos" />


      <Location location={event.location} mapsUrl={event.mapsUrl} />



      <RSVP phone={event.whatsapp} title={event.title} />

      <footer className="bg-white px-6 py-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
          Hecho con amor para una celebración inolvidable
        </p>
      </footer>
    </main>
  );
}