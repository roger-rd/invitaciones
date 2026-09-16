import { useState } from "react";
import DinoDecor from "./DinoDecor";
import Reveal from "./Reveal";

interface DinoClosingProps {
  title: string;
  phrase?: string;
  closingCharacterImage?: string;
}

export default function DinoClosing({ title, phrase, closingCharacterImage }: DinoClosingProps) {
  const [failedImage, setFailedImage] = useState<string>();
  return (
    <section className="dino-dusk relative isolate flex min-h-svh items-center overflow-hidden px-6 py-24 text-center text-dino-cream">
      <DinoDecor variant="closing" />
      <div className="relative mx-auto w-full max-w-2xl">
        <Reveal>
          <div className="dino-stage mx-auto max-w-lg">
            {closingCharacterImage && failedImage !== closingCharacterImage ? (
              <img
                src={closingCharacterImage}
                alt="Nuestro amigo dinosaurio se despide contigo"
                loading="lazy"
                onError={() => setFailedImage(closingCharacterImage)}
                className="dino-character-farewell relative z-10 h-96 w-full object-contain lg:h-[36rem]"
              />
            ) : (
              <div className="dino-sign">
                <p className="text-3xl" style={{ fontFamily: "var(--font-display-dino)" }}>¡Muy pronto conocerás a nuestro amigo del rancho!</p>
                <p className="mt-4 text-lg">El valle ya está listo para celebrar.</p>
              </div>
            )}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-10 text-5xl text-dino-sun" style={{ fontFamily: "var(--font-display-dino)" }}>¡Te espera una gran expedición!</h2>
          <p className="mt-6 text-3xl leading-relaxed" style={{ fontFamily: "var(--font-display-dino)" }}>{phrase ?? `¡Ven a explorar y celebrar con ${title}!`}</p>
        </Reveal>
      </div>
    </section>
  );
}
