import { useId, useState } from "react";

interface DinoEggRevealProps {
  message?: string;
  hatchlingImage?: string;
}

export default function DinoEggReveal({ message, hatchlingImage }: DinoEggRevealProps) {
  const [hatched, setHatched] = useState(false);
  const [failedHatchling, setFailedHatchling] = useState<string>();
  const id = useId();
  const hasHatchlingImage = Boolean(hatchlingImage) && failedHatchling !== hatchlingImage;
  return (
    <section className="dino-scene flex min-h-svh flex-col items-center justify-center gap-8 bg-dino-leaf text-dino-cream">
      <div
        className={`dino-egg relative mx-auto w-full max-w-md sm:max-w-lg ${hatched ? "aspect-square" : "aspect-[200/260]"} ${!hatched ? "dino-egg-idle" : ""}`}
        data-hatched={hatched}
      >
        <svg viewBox="0 0 200 260" className="dino-egg-shell-bottom absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M100 20C40 20 10 130 10 180C10 230 50 250 100 250C150 250 190 230 190 180C190 130 160 20 100 20Z" fill="#FFF8E7" stroke="#5C3A21" strokeWidth="4" />
          <path d="M60 110 L80 140 L65 165 L95 190 L80 215" fill="none" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
        </svg>
        <svg viewBox="0 0 200 260" className="dino-egg-shell-top absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M100 20C60 20 30 80 18 130L100 140L182 130C170 80 140 20 100 20Z" fill="#FFF8E7" stroke="#5C3A21" strokeWidth="4" />
        </svg>
        {hasHatchlingImage && (
          <img
            id={id}
            aria-hidden={!hatched}
            src={hatchlingImage}
            alt="Dinosaurio bebé saliendo del huevo"
            onError={() => setFailedHatchling(hatchlingImage)}
            className={`dino-hatchling absolute inset-0 h-full w-full object-contain ${hatched ? "dino-hatchling-visible" : "pointer-events-none"}`}
          />
        )}
        {!hasHatchlingImage && (
          <div id={id} aria-hidden={!hatched} className="dino-egg-content absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-display-dino)" }}>
              {message || "¡Muy pronto conocerás a nuestro amigo del rancho!"}
            </p>
          </div>
        )}
      </div>
      <button
        type="button"
        aria-expanded={hatched}
        aria-controls={id}
        onClick={() => setHatched(!hatched)}
        className="dino-button bg-dino-sun text-dino-earth"
      >
        {hatched ? "Cerrar el huevo" : "Toca para que eclosione"}
      </button>
    </section>
  );
}
