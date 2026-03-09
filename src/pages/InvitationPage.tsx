import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/events";
import WeddingTemplate from "../templates/WeddingTemplate";
import QuinceTemplate from "../templates/QuinceTemplate";
import BirthdayTemplate from "../templates/BirthdayTemplate";

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

  if (event.type === "wedding") {
    return <WeddingTemplate event={event} />;
  }

  if (event.type === "quince") {
    return <QuinceTemplate event={event} />;
  }

  return <BirthdayTemplate event={event} />;
}