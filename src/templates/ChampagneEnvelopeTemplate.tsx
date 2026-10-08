import { useEffect, useState } from "react";
import type { EventData, SpecialCelebrationData } from "../types/event";
import EnvelopeScene from "../components/envelope/EnvelopeScene";
import type { EnvelopePhase } from "../components/envelope/useEnvelopeSequence";
import LinenBackdrop from "../components/envelope/LinenBackdrop";

export default function ChampagneEnvelopeTemplate({ event, data }: { event: EventData; data: SpecialCelebrationData }) {
  const [phase, setPhase] = useState<EnvelopePhase>("intro");
  const settled = phase === "settled";
  useEffect(() => {
    if (settled) return;
    const body = document.body;
    const overflow = body.style.overflow;
    const padding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (scrollbar) body.style.paddingRight = `${scrollbar + parseFloat(getComputedStyle(body).paddingRight)}px`;
    return () => { body.style.overflow = overflow; body.style.paddingRight = padding; };
  }, [settled]);
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${data.heading} · ${event.title}`;
    return () => { document.title = previousTitle; };
  }, [data.heading, event.title]);

  return <main className="champagne-page"><LinenBackdrop /><EnvelopeScene data={data} onPhaseChange={setPhase} /></main>;
}
