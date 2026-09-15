import { useState } from "react";
import DinoDecor from "./DinoDecor";

interface DinoHeroProps {
  title: string;
  age?: number;
  phrase?: string;
  mainCharacterImage?: string;
}

export default function DinoHero({ title, age, phrase, mainCharacterImage }: DinoHeroProps) {
  const [failedImage, setFailedImage] = useState<string>();
  return (
    <section className="dino-hero-sky relative isolate flex min-h-svh items-center overflow-hidden px-6 pb-24 pt-36 text-dino-earth">
      <div aria-hidden="true" className="dino-fence absolute opacity-70" />
      <div aria-hidden="true" className="dino-cloud dino-cloud-a" style={{ top: "8%", left: "8%", width: "100px", height: "36px" }} />
      <div aria-hidden="true" className="dino-cloud dino-cloud-b" style={{ top: "14%", right: "10%", width: "80px", height: "30px" }} />
      <DinoDecor variant="hero" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 text-center md:grid-cols-2 md:text-left">
        <div className="mx-auto w-full max-w-xl rounded-3xl bg-dino-cream/95 p-5 sm:p-8">
          <p className="dino-eyebrow">La gran aventura de</p>
          <h1 className="dino-name mt-2 font-bold">{title}</h1>
          {age !== undefined && (
            <p className="mt-5 inline-block rounded-full bg-dino-sun px-6 py-3 font-bold" style={{ fontFamily: "var(--font-display-dino)", fontSize: "1.8rem" }}>
              ¡{age} añitos de aventura!
            </p>
          )}
          <p className="mt-6 text-xl leading-relaxed">{phrase}</p>
        </div>
        <div className="dino-stage">
          {mainCharacterImage && failedImage !== mainCharacterImage ? (
            <img
              src={mainCharacterImage}
              alt="Nuestro amigo dinosaurio te da la bienvenida al rancho"
              onError={() => setFailedImage(mainCharacterImage)}
              className="relative z-10 h-96 w-full object-contain lg:h-[36rem]"
            />
          ) : (
            <div className="dino-sign">
              <p className="text-sm uppercase tracking-widest">En el corral principal</p>
              <p className="mt-3 text-4xl" style={{ fontFamily: "var(--font-display-dino)" }}>Amigo sorpresa</p>
              <p className="mt-4 text-lg">Nuestro dinosaurio ya prepara su bienvenida. ¡Solo faltas tú!</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
