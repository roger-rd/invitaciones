import { useId, useState } from "react";

interface DinoEggRevealProps {
  message?: string;
}

export default function DinoEggReveal({ message }: DinoEggRevealProps) {
  const [hatched, setHatched] = useState(false);
  const id = useId();
  return (
    <section className="dino-scene bg-dino-leaf text-dino-cream">
      <p className="dino-eyebrow text-dino-sun">Un secreto del valle</p>
      <h2 className="dino-heading">¡Descubre quién está por nacer!</h2>
      <div
        className={`dino-egg relative mx-auto mt-10 aspect-[200/260] w-full max-w-sm ${!hatched ? "dino-egg-idle" : ""}`}
        data-hatched={hatched}
      >
        <svg viewBox="0 0 200 260" className="dino-egg-shell-bottom absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M100 20C40 20 10 130 10 180C10 230 50 250 100 250C150 250 190 230 190 180C190 130 160 20 100 20Z" fill="#FFF8E7" stroke="#5C3A21" strokeWidth="4" />
          <path d="M60 110 L80 140 L65 165 L95 190 L80 215" fill="none" stroke="#5C3A21" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 5" />
        </svg>
        <svg viewBox="0 0 200 260" className="dino-egg-shell-top absolute inset-0 h-full w-full" aria-hidden="true">
          <path d="M100 20C60 20 30 80 18 130L100 140L182 130C170 80 140 20 100 20Z" fill="#FFF8E7" stroke="#5C3A21" strokeWidth="4" />
        </svg>
        <div id={id} aria-hidden={!hatched} inert={!hatched} className="dino-egg-content absolute inset-0 flex flex-col items-center justify-center gap-4 rounded-[45%] bg-dino-cream p-6 text-center text-dino-earth">
          <p className="text-lg leading-relaxed" style={{ fontFamily: "var(--font-display-dino)" }}>
            {message || "¡La sorpresa eres tú! Con tu sonrisa, esta será la expedición más bonita del rancho."}
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-expanded={hatched}
        aria-controls={id}
        onClick={() => setHatched(!hatched)}
        className="dino-button mt-7 bg-dino-sun text-dino-earth"
      >
        {hatched ? "Cerrar el huevo" : "Toca para que eclosione"}
      </button>
    </section>
  );
}
