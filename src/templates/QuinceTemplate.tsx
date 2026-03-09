import type { EventData } from "../types/event";

interface QuinceTemplateProps {
  event: EventData;
}

export default function QuinceTemplate({ event }: QuinceTemplateProps) {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-4xl font-bold">Plantilla de 15 años</h1>
        <p className="mt-4 text-gray-600">{event.title}</p>
      </div>
    </main>
  );
}