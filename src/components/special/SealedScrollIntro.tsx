import { useEffect, useRef, useState } from "react";
import SpecialWaxSeal from "./WaxSeal";
import SpecialWaterLightDecor from "./WaterLightDecor";
import { useSpecialReducedMotion } from "./useSpecialReducedMotion";

export default function SpecialSealedScrollIntro({ onReveal, onComplete }: { onReveal: () => void; onComplete: () => void }) {
  const [opening, setOpening] = useState(false);
  const activated = useRef(false);
  const intro = useRef<HTMLDivElement>(null);
  const reduced = useSpecialReducedMotion();

  useEffect(() => {
    const body = document.body;
    const previousOverflow = body.style.overflow;
    const previousPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar) body.style.paddingRight = `${scrollbar + parseFloat(getComputedStyle(body).paddingRight)}px`;
    return () => { body.style.overflow = previousOverflow; body.style.paddingRight = previousPadding; };
  }, []);

  useEffect(() => {
    if (!opening) return;
    const styles = getComputedStyle(intro.current!);
    const ms = (name: string) => parseFloat(styles.getPropertyValue(name));
    const revealTimer = window.setTimeout(onReveal, reduced ? 0 : ms("--vitela-content-at"));
    const timer = window.setTimeout(onComplete, reduced
      ? ms("--vitela-reduced-duration")
      : ms("--vitela-exit-at") + ms("--vitela-exit-duration"));
    return () => { window.clearTimeout(revealTimer); window.clearTimeout(timer); };
  }, [opening, reduced, onReveal, onComplete]);

  function open() {
    if (activated.current) return;
    activated.current = true;
    setOpening(true);
  }

  return (
    <div ref={intro} className={`vitela-intro ${opening ? "vitela-opening" : ""}`}>
      <SpecialWaterLightDecor />
      <div className="vitela-intro-object">
        <p className="vitela-label vitela-intro-note">Un momento para atesorar</p>
        <div className="vitela-scroll">
          <div className="vitela-scroll-sheet" aria-hidden="true" />
          <div className="vitela-scroll-roll" aria-hidden="true" />
          <div className="vitela-scroll-bottom" aria-hidden="true" />
          <div className="vitela-ribbon" aria-hidden="true" />
          <SpecialWaxSeal opening={opening} onOpen={open} />
        </div>
        <p className="vitela-label vitela-intro-hint">Toca el sello</p>
        <span role="status" className="sr-only">{opening ? "Abriendo invitación" : ""}</span>
      </div>
    </div>
  );
}
