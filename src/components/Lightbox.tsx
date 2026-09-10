import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "./icons";

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (event.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, images.length, onClose, onNavigate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream transition hover:border-gold/60 hover:text-gold sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index - 1 + images.length) % images.length);
            }}
            aria-label="Foto anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition hover:text-gold sm:left-4"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              onNavigate((index + 1) % images.length);
            }}
            aria-label="Foto siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-cream/80 transition hover:text-gold sm:right-4"
          >
            <ChevronRight className="h-7 w-7" />
          </button>
        </>
      ) : null}

      <img
        src={images[index]}
        alt={`Fotografía ${index + 1} de ${images.length}`}
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
        onClick={(event) => event.stopPropagation()}
      />

      <p className="absolute bottom-5 text-xs uppercase tracking-[0.3em] text-cream/60">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}
