import type { WeddingFeaturedQuoteData } from "../types/event";

interface WeddingFeaturedQuoteProps {
  quote?: WeddingFeaturedQuoteData;
}

export default function WeddingFeaturedQuote({ quote }: WeddingFeaturedQuoteProps) {
  if (!quote) return null;

  const { image, text, attribution } = quote;

  return (
    <section aria-label="Una historia a dos voces" className="relative isolate grid min-h-[28rem] w-full items-center overflow-hidden bg-romantic-ink text-white" style={{ aspectRatio: `${image.width} / ${image.height}` }}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        style={{ objectPosition: image.position ?? "center" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/45 via-black/65 to-black/50" />
      <figure className="relative mx-auto w-full max-w-5xl px-6 py-24 text-center sm:px-12 md:py-32">
        <blockquote className="font-display-romantic text-[clamp(1.875rem,4vw,3.75rem)] italic leading-snug [overflow-wrap:anywhere]">
          <p>“{text}”</p>
        </blockquote>
        {attribution && <figcaption className="mt-8 text-sm tracking-wide sm:text-base">— {attribution}</figcaption>}
      </figure>
    </section>
  );
}
