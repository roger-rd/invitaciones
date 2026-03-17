import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import RSVP from "../components/RSVP";
import type { EventData } from "../types/event";

interface BirthdayTemplateProps {
  event: EventData;
}

export default function BirthdayTemplate({
  event,
}: BirthdayTemplateProps) {
  return (
    <main className="bg-white text-gray-800">
      <Hero
        title={event.title}
        subtitle={event.subtitle}
        coverImage={event.coverImage}
        message={event.message}
      />

      <section className="bg-rose-50 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            Una fecha especial
          </p>
          <h2 className="mt-4 text-3xl font-light leading-relaxed md:text-5xl">
            Quiero compartir contigo un día lleno de alegría, emoción y lindos
            recuerdos
          </h2>
        </div>
      </section>

      <Countdown targetDate={event.date} />

      <Gallery images={event.gallery} title="Galería del festejo" />

      <Location location={event.location} mapsUrl={event.mapsUrl} />

      <RSVP phone={event.whatsapp} title={event.title} />

      <footer className="bg-white px-6 py-10 text-center text-sm tracking-wide text-gray-400">
        Hecho con amor para una celebración inolvidable
      </footer>
    </main>
  );
}