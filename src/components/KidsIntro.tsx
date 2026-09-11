import { useState } from "react";
import CircusDecor from "./CircusDecor";

interface KidsIntroProps { title: string; age?: number; phrase?: string; onOpen: () => void }

export default function KidsIntro({ title, age, phrase, onOpen }: KidsIntroProps) {
  const [opening, setOpening] = useState(false);
  return (
    <main className="kids-intro relative isolate flex min-h-svh items-center justify-center overflow-hidden px-6 py-24 text-center text-circus-cream" data-open={opening}>
      <svg aria-hidden="true" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
        <path fill="#FFC94D" d="M70 900V430L600 40l530 390v470Z" />
        <path fill="#E9483D" d="m600 40-400 390h160Zm0 0-80 390h160Zm0 0 240 390h160Z" />
        <path fill="#1B2A4A" d="M250 430h700v470H250Z" />
        <path fill="#7FD6E0" d="M600 40V0h100l-30 20h-70" />
      </svg>
      <div aria-hidden="true" className="kids-intro-curtains absolute inset-x-0 bottom-0 top-[30%] overflow-hidden"><div className="kids-curtain kids-curtain-left" /><div className="kids-curtain kids-curtain-right" /></div>
      <div aria-hidden="true" className="absolute inset-0 bg-circus-navy/60" />
      <CircusDecor variant="intro" />
      <div className="relative mx-auto w-full max-w-xl px-4 py-8">
        <p className="font-display-kids text-xl text-circus-yellow">¡Que comience la función!</p>
        <h1 className="mt-5 font-display-kids text-6xl font-bold sm:text-8xl">{title}</h1>
        {age !== undefined && <p className="mt-4 font-display-kids text-3xl">¡Cumple {age} añitos!</p>}
        <p className="mt-5 text-xl">{phrase ?? "Tienes una entrada para una aventura extraordinaria"}</p>
        <button type="button" disabled={opening} onClick={() => { onOpen(); setOpening(true); }} className="kids-button mt-9 bg-circus-yellow text-circus-navy">{opening ? "¡Entramos a la fiesta!" : "ABRIR INVITACIÓN"}</button>
        <p className="mt-4 text-base">Al abrir, comienza la música</p>
      </div>
    </main>
  );
}
