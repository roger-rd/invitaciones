import { useState } from "react";
import { Camera } from "./icons";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";

interface GalleryProps {
  images: string[];
  title?: string;
}

export default function Gallery({ images, title = "Galería" }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) return null;

  return (
    <section className="bg-cream px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <Reveal>
            <p className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.4em] text-ink/45">
              <Camera className="h-4 w-4 text-gold" />
              Galería
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl italic text-ink sm:text-4xl">{title}</h2>
          </Reveal>
        </div>

        <div className="mt-12 columns-2 gap-3 sm:gap-4 md:columns-3">
          {images.map((image, index) => (
            <Reveal
              key={`${image}-${index}`}
              delay={(index % 6) * 60}
              className="mb-3 break-inside-avoid sm:mb-4"
            >
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ampliar fotografía ${index + 1}`}
                className="group block w-full overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null ? (
        <Lightbox
          images={images}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
