import { useState } from "react";
import CircusDecor from "./CircusDecor";
import Reveal from "./Reveal";

interface KidsClosingProps { title: string; phrase?: string; characterCelebrationImage?: string }

export default function KidsClosing({ title, phrase, characterCelebrationImage }: KidsClosingProps) {
  const [failedImage, setFailedImage] = useState<string>();
  return (
    <section className="kids-night relative isolate flex min-h-svh items-center overflow-hidden px-6 py-24 text-center text-circus-cream">
      <div aria-hidden="true" className="kids-tent-base" />
      <CircusDecor variant="closing" />
      <div className="relative mx-auto w-full max-w-2xl">
        <Reveal><div className="kids-stage mx-auto max-w-lg">
          {characterCelebrationImage && failedImage !== characterCelebrationImage ? <img src={characterCelebrationImage} alt="Nuestro amigo del circo celebra contigo" loading="lazy" onError={() => setFailedImage(characterCelebrationImage)} className="relative z-10 h-96 w-full object-contain lg:h-[36rem]" /> : <div className="kids-stage-sign"><p className="font-display-kids text-3xl">¡Muy pronto conocerás a nuestro amigo del circo!</p><p className="mt-4 text-lg">El escenario está listo para celebrar.</p></div>}
        </div></Reveal>
        <Reveal delay={100}><h2 className="mt-10 font-display-kids text-5xl text-circus-yellow">¡Te espera una gran función!</h2><p className="mt-6 font-display-kids text-3xl leading-relaxed">{phrase ?? `¡Ven a cantar, jugar y celebrar con ${title}!`}</p></Reveal>
      </div>
    </section>
  );
}
