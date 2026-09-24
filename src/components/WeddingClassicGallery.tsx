import { useState } from "react";
import type { WeddingImage } from "../types/event";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

interface WeddingClassicGalleryProps {
  images?: WeddingImage[];
}

export default function WeddingClassicGallery({ images }: WeddingClassicGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  return (
    <section aria-label="Galería" className="bg-classic-cream px-6 py-20 text-classic-ink sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-center font-display-classic text-3xl sm:text-4xl">Galería</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {images.map((image, index) => (
            <Reveal key={`${image.src}-${index}`} delay={(index % 6) * 60} className="min-w-0">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar fotografía ${index + 1}: ${image.alt}`}
                className="block aspect-square w-full cursor-pointer overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-classic-ink"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: image.position }}
                  className="h-full w-full object-cover"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <Lightbox
          images={images.map((image) => image.src)}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  );
}
