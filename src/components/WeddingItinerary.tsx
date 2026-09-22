import type { WeddingItineraryItem } from "../types/event";

interface WeddingItineraryProps {
  items?: WeddingItineraryItem[];
}

export default function WeddingItinerary({ items }: WeddingItineraryProps) {
  if (!items?.length) return null;

  return (
    <section aria-label="Itinerario" className="bg-romantic-cream px-6 py-20 text-romantic-ink sm:py-28">
      <h2 className="text-center font-display-romantic text-3xl sm:text-4xl">Así será nuestro día</h2>
      <ol className="mx-auto mt-12 max-w-xl pl-2">
        {items.map((item, index) => (
          <li key={`${index}-${item.label}`} className="relative border-l border-romantic-gold/40 pb-10 pl-8 last:border-transparent last:pb-0 sm:pl-10">
            <span aria-hidden="true" className="absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full bg-romantic-gold" />
            <div className="grid min-w-0 gap-2 [overflow-wrap:anywhere] sm:grid-cols-[8rem_1fr] sm:gap-6">
              <p className="font-display-romantic text-2xl leading-tight">{item.time}</p>
              <p className="text-base leading-relaxed">{item.label}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
