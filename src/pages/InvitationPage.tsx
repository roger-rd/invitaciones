import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import WeddingTemplate from "../templates/WeddingTemplate";
import WeddingRomanticTemplate from "../templates/WeddingRomanticTemplate";
import WeddingClassicDigitalTemplate from "../templates/WeddingClassicDigitalTemplate";
import QuinceTemplate from "../templates/QuinceTemplate";
import ChampagneEnvelopeTemplate from "../templates/ChampagneEnvelopeTemplate";
import SpecialVitelaTemplate from "../templates/SpecialVitelaTemplate";
import BirthdayTemplate from "../templates/BirthdayTemplate";

import KidsBirthdayTemplate from "../templates/KidsBirthdayTemplate";
import KidsDigitalPastelTemplate from "../templates/KidsDigitalPastelTemplate";
import KidsDigitalPosterTemplate from "../templates/KidsDigitalPosterTemplate";
import DinoRanchTemplate from "../templates/DinoRanchTemplate";

export default function InvitationPage() {
  const { slug } = useParams<{ slug: string }>();

  const event = useMemo(
    () => events.find((item) => item.slug === slug),
    [slug]
  );

  if (!event) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold">Evento no encontrado</h1>
          <p className="mt-3 text-gray-600">
            Revisa el slug o agrégalo en <code>src/data/events.ts</code>.
          </p>
        </div>
      </main>
    );
  }

  if (event.type === "special-celebration") {
    if (event.template === "champagne-envelope" && event.special) return <ChampagneEnvelopeTemplate key={event.slug} event={event} data={event.special} />;
    if (event.template === "vitela-seal" && event.special) return <SpecialVitelaTemplate key={event.slug} event={event} data={event.special} />;
    return (
      <main className="catalog-theme-special-celebration min-h-svh px-6 py-24 text-center">
        <h1 className="font-display text-4xl">{event.title}</h1>
        <p className="mx-auto mt-6 max-w-lg">Estamos preparando los detalles de esta celebración.</p>
        <a className="landing-navlink mt-6 underline" href="/celebraciones-especiales">Ver Celebraciones Especiales</a>
      </main>
    );
  }

  if (event.type === "wedding") {
    if (event.template === "romantic-editorial") return <WeddingRomanticTemplate event={event} />;
    if (event.template === "classic-digital") return <WeddingClassicDigitalTemplate event={event} />;
    return <WeddingTemplate event={event} />;
  }

  if (event.type === "quince") {
    return <QuinceTemplate event={event} />;
  }

  if (event.type === "kids-birthday") {
    if (event.template === "dino-ranch") return <DinoRanchTemplate event={event} />;
    if (event.template === "kids-digital-pastel") return <KidsDigitalPastelTemplate event={event} />;
    if (event.template === "kids-digital-poster") return <KidsDigitalPosterTemplate event={event} />;
    return <KidsBirthdayTemplate event={event} />;
  }

  return <BirthdayTemplate event={event} />;
}