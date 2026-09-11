import { useState } from "react";
import CircusDecor from "./CircusDecor";
import Reveal from "./Reveal";

interface KidsHeroProps { title: string; age?: number; phrase?: string; characterWelcomeImage?: string }

export default function KidsHero({ title, age, phrase, characterWelcomeImage }: KidsHeroProps) {
  const [failedImage, setFailedImage] = useState<string>();
  return (
    <section className="kids-hero relative isolate flex min-h-svh items-center overflow-hidden px-6 pb-24 pt-36 text-circus-navy">
      <svg aria-hidden="true" viewBox="0 0 1200 700" className="pointer-events-none absolute inset-x-0 top-0 w-full" fill="none" strokeWidth="45">
        <path stroke="#E9483D" d="M170 600a430 430 0 0 1 860 0" /><path stroke="#FFC94D" d="M220 600a380 380 0 0 1 760 0" /><path stroke="#7FD6E0" d="M270 600a330 330 0 0 1 660 0" />
      </svg>
      <div aria-hidden="true" className="kids-tent-base" />
      <CircusDecor variant="hero" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 text-center md:grid-cols-2 md:text-left">
        <Reveal className="mx-auto w-full max-w-xl rounded-3xl bg-circus-cream/95 p-5 sm:p-8">
          <p className="font-display-kids text-2xl">La gran fiesta de</p>
          <h1 className="kids-name mt-2 font-display-kids font-bold">{title}</h1>
          {age !== undefined && <p className="mt-5 inline-block rounded-full bg-circus-yellow px-6 py-3 font-display-kids text-3xl">¡{age} añitos de magia!</p>}
          <p className="mt-6 text-xl leading-relaxed">{phrase}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="kids-stage">
            {characterWelcomeImage && failedImage !== characterWelcomeImage ? <img src={characterWelcomeImage} alt="Nuestro amigo del circo te da la bienvenida" onError={() => setFailedImage(characterWelcomeImage)} className="relative z-10 h-96 w-full object-contain lg:h-[36rem]" /> : <div className="kids-stage-sign"><p className="text-sm uppercase tracking-widest">Bajo los reflectores</p><p className="mt-3 font-display-kids text-4xl">Personaje sorpresa</p><p className="mt-4 text-lg">La magia ya está en escena. ¡Solo faltas tú!</p></div>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
