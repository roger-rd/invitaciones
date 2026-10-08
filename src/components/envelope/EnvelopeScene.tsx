import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { SpecialCelebrationData } from "../../types/event";
import Envelope from "./Envelope";
import InvitationCard from "./InvitationCard";
import { useEnvelopeReducedMotion } from "./useEnvelopeReducedMotion";
import { useEnvelopeSequence, type EnvelopePhase } from "./useEnvelopeSequence";

export default function EnvelopeScene({ data, onPhaseChange }: {
  data: SpecialCelebrationData; onPhaseChange: (phase: EnvelopePhase) => void;
}) {
  const scene = useRef<HTMLDivElement>(null);
  const seal = useRef<HTMLButtonElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const [lifted, setLifted] = useState(false);
  const reduced = useEnvelopeReducedMotion();
  const { phase, open } = useEnvelopeSequence(scene, reduced);
  const opening = phase === "opening" || phase === "sliding";
  useLayoutEffect(() => {
    const root = scene.current!;
    const paper = card.current!.querySelector<HTMLElement>(".champagne-card")!;
    const envelope = root.querySelector<HTMLElement>(".champagne-envelope")!;
    const measure = () => {
      // Rotated paper width = paper height * scale. Reserve 12% of envelope
      // width inside; at clearance reserve 58%, leaving room for its diagonal.
      if (!envelope.offsetWidth || !paper.offsetHeight) return;
      const style = getComputedStyle(root);
      const stored = Number(style.getPropertyValue("--champagne-fit-stored")) || .88;
      const clear = Number(style.getPropertyValue("--champagne-fit-clear")) || .42;
      root.style.setProperty("--champagne-scale-stored", String(envelope.offsetWidth * stored / paper.offsetHeight));
      root.style.setProperty("--champagne-scale-clear", String(envelope.offsetWidth * clear / paper.offsetHeight));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root); observer.observe(paper);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    onPhaseChange(phase);
    if (phase === "waiting") seal.current?.focus({ preventScroll: true });
    if (phase === "settled") card.current?.querySelector<HTMLHeadingElement>("h1")?.focus({ preventScroll: true });
  }, [phase, onPhaseChange]);
  return <div ref={scene} className="champagne-scene" data-lifted={lifted || undefined} data-phase={phase} data-opening={opening || undefined} data-reduced={reduced || undefined}>
    <Envelope name={data.honoreeName} phase={phase} onOpen={open} sealRef={seal} />
    <div ref={card} className="champagne-card-flight" onAnimationEnd={(event) => {
      if (event.target === event.currentTarget && event.animationName === "champagne-extract") setLifted(true);
    }} inert={phase !== "settled"} aria-hidden={phase !== "settled"}>
      <InvitationCard data={data} />
    </div>
    <p className="champagne-touch-hint" aria-hidden="true">Toca el sello</p>
    <span role="status" className="sr-only">{opening ? "Abriendo invitación" : ""}</span>
  </div>;
}
