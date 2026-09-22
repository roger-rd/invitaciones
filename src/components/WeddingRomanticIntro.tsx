import { useState } from "react";
import type { WeddingCoupleData } from "../types/event";
import RomanticDecor from "./RomanticDecor";

interface WeddingRomanticIntroProps extends Pick<WeddingCoupleData, "monogram" | "brideAndGroom"> {
  onOpen: () => void;
}

export default function WeddingRomanticIntro({ monogram, brideAndGroom, onOpen }: WeddingRomanticIntroProps) {
  const [opening, setOpening] = useState(false);
  const initials = monogram?.trim() || brideAndGroom.map((name) => Array.from(name.trim())[0] ?? "").join(" & ");

  function openInvitation() {
    if (opening) return;
    setOpening(true);
    onOpen();
  }

  return (
    <main data-open={opening} className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-romantic-champagne px-6 py-20 text-center text-romantic-ink">
      <div aria-hidden="true" className="romantic-panel romantic-panel-left" />
      <div aria-hidden="true" className="romantic-panel romantic-panel-right" />
      <RomanticDecor variant="intro" />
      <div className="relative z-10 mx-auto w-full max-w-xl">
        <p className="text-xs uppercase tracking-[.25em]">Una nueva historia juntos</p>
        <div className="relative mx-auto my-10 grid min-h-48 w-48 place-items-center p-6 sm:min-h-56 sm:w-56">
          <span aria-hidden="true" className="romantic-shimmer pointer-events-none absolute inset-0 rounded-full border border-romantic-gold/60 outline outline-offset-8 outline-romantic-gold/20" />
          <p className="max-w-full break-words font-display-romantic text-4xl italic sm:text-5xl">{initials}</p>
        </div>
        <h1 className="break-words font-display-romantic text-3xl leading-snug sm:text-4xl">{brideAndGroom[0]} &amp; {brideAndGroom[1]}</h1>
        <p className="mt-6 text-sm leading-relaxed">Toca para abrir nuestra invitación</p>
        <button type="button" disabled={opening} onClick={openInvitation} className="mt-8 min-h-12 max-w-full cursor-pointer rounded-full border border-romantic-ink bg-romantic-ink px-8 py-3 text-sm tracking-wide text-romantic-cream hover:bg-romantic-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink disabled:cursor-wait">
          {opening ? "Abriendo..." : "Abrir invitación"}
        </button>
      </div>
    </main>
  );
}
