import { useState } from "react";
import type { WeddingImage } from "../types/event";
import Lightbox from "./Lightbox";

interface WeddingGalleryEditorialProps {
  images?: WeddingImage[];
}

const orientationLayout: Record<WeddingImage["orientation"], string> = {
  portrait: "col-span-1 md:col-span-3 md:row-span-4",
  landscape: "col-span-2 md:col-span-6 md:row-span-3",
  panoramic: "col-span-2 md:col-span-6 md:row-span-2",
};

export default function WeddingGalleryEditorial({ images }: WeddingGalleryEditorialProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!images?.length) return null;

  const featuredIndex = Math.max(0, images.findIndex((image) => image.featured));
  const lightboxImages = images.map((image) => image.src);
  // Keep original indices so moving the featured photo never changes its lightbox target.
  const orderedImages = [
    { image: images[featuredIndex], index: featuredIndex },
    ...images.flatMap((image, index) => index === featuredIndex ? [] : [{ image, index }]),
  ];

  return (
    <section aria-label="Galería de nuestra boda" className="bg-romantic-ivory px-4 py-20 text-romantic-ink sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-romantic-gold">Instantes nuestros</p>
          <h2 className="mt-4 font-display-romantic text-3xl sm:text-4xl">Recuerdos que nos acompañan</h2>
        </div>

        <div className="grid grid-flow-dense grid-cols-2 items-start gap-3 sm:gap-5 md:auto-rows-[clamp(3rem,6vw,5rem)] md:grid-cols-12 md:items-stretch">
          {orderedImages.map(({ image, index }) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              aria-label={`Ampliar fotografía: ${image.alt}`}
              onClick={() => setActiveIndex(index)}
              className={`group block min-w-0 w-full cursor-zoom-in overflow-hidden bg-romantic-gold/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-gold ${
                index === featuredIndex
                  ? `col-span-2 md:col-span-6 ${image.orientation === "portrait" ? "md:row-span-8" : image.orientation === "landscape" ? "md:row-span-4" : "md:row-span-3"}`
                  : orientationLayout[image.orientation]
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                style={{ objectPosition: image.position ?? "center" }}
                className="block h-auto w-full object-cover motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-[1.025] md:h-full"
              />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && activeIndex < images.length ? (
        <Lightbox
          images={lightboxImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      ) : null}
    </section>
  );
}
