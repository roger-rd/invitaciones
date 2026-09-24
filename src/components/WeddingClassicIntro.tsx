import { useEffect, useRef, useState } from "react";

interface WeddingClassicIntroProps {
  monogram?: string;
  brideAndGroom: [string, string];
  onOpen: () => void;
}

export default function WeddingClassicIntro({ monogram, brideAndGroom, onOpen }: WeddingClassicIntroProps) {
  const [opening, setOpening] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);
  const initials = monogram?.trim() || brideAndGroom.map((name) => Array.from(name.trim())[0] ?? "").join(" & ");

  useEffect(() => () => {
    if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
  }, []);

  function openInvitation() {
    if (opening) return;
    setOpening(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timeoutRef.current = window.setTimeout(onOpen, reducedMotion ? 0 : 700);
  }

  return (
    <main className={`flex min-h-svh items-center justify-center bg-classic-ivory px-6 py-20 text-center text-classic-ink transition-opacity duration-700 motion-reduce:transition-none ${opening ? "opacity-0" : "opacity-100"}`}>
      <div className="mx-auto w-full max-w-xl">
        <p className="text-xs uppercase tracking-[.25em] text-classic-stone">Una fecha para recordar juntos</p>
        <div className="mx-auto my-10 grid min-h-48 w-48 place-items-center rounded-full border border-classic-gold/50 p-6 sm:min-h-56 sm:w-56">
          <p className="max-w-full break-words font-display-classic text-4xl sm:text-5xl">{initials}</p>
        </div>
        <h1 className="break-words font-display-classic text-3xl leading-snug sm:text-4xl">{brideAndGroom[0]} &amp; {brideAndGroom[1]}</h1>
        <p className="mt-6 text-sm leading-relaxed text-classic-stone">Toca para abrir nuestra invitación</p>
        <button type="button" disabled={opening} onClick={openInvitation} className="mt-8 min-h-12 max-w-full cursor-pointer rounded-full border border-classic-ink bg-classic-ink px-8 py-3 text-sm tracking-wide text-classic-cream hover:bg-classic-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-classic-ink disabled:cursor-wait">
          {opening ? "Abriendo..." : "Abrir invitación"}
        </button>
      </div>
    </main>
  );
}
