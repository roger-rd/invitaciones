import { useState } from "react";
import DinoDecor from "./DinoDecor";
import Reveal from "./Reveal";

interface DinoHeroProps {
  title: string;
  age?: number;
  phrase?: string;
  mainCharacterImage?: string;
  friendCharacterImage?: string;
}

export default function DinoHero({ title, age, phrase, mainCharacterImage, friendCharacterImage }: DinoHeroProps) {
  const [failedImage, setFailedImage] = useState<string>();
  const [failedFriend, setFailedFriend] = useState<string>();
  return (
    <section className="dino-hero-sky relative isolate flex min-h-svh items-center overflow-hidden px-6 pb-24 pt-36 text-dino-earth">
      <div aria-hidden="true" className="dino-fence absolute opacity-70" />
      <div aria-hidden="true" className="dino-cloud dino-cloud-a" style={{ top: "8%", left: "8%", width: "100px", height: "36px" }} />
      <div aria-hidden="true" className="dino-cloud dino-cloud-b" style={{ top: "14%", right: "10%", width: "80px", height: "30px" }} />
      <DinoDecor variant="hero" />
      {friendCharacterImage && failedFriend !== friendCharacterImage && (
        <img
          aria-hidden="true"
          src={friendCharacterImage}
          alt=""
          onError={() => setFailedFriend(friendCharacterImage)}
          className="dino-character-sway pointer-events-none absolute bottom-4 left-3 h-20 w-20 object-contain sm:h-28 sm:w-28"
        />
      )}
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
        <Reveal delay={120}>
          <div className="dino-stage">
            {mainCharacterImage && failedImage !== mainCharacterImage ? (
              <img
                src={mainCharacterImage}
                alt="Nuestro amigo dinosaurio te da la bienvenida al rancho"
                onError={() => setFailedImage(mainCharacterImage)}
                className="dino-character-float relative z-10 h-96 w-full object-contain lg:h-[36rem]"
              />
            ) : (
              <div className="dino-sign">
                <p className="text-sm uppercase tracking-widest">En el corral principal</p>
                <p className="mt-3 text-4xl" style={{ fontFamily: "var(--font-display-dino)" }}>Amigo sorpresa</p>
                <p className="mt-4 text-lg">Nuestro dinosaurio ya prepara su bienvenida. ¡Solo faltas tú!</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
