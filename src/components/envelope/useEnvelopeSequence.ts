import { useCallback, useEffect, useRef, useState, type RefObject } from "react";
import { readCssTimeMs } from "../../utils/cssTime";

export type EnvelopePhase = "intro" | "spinning" | "waiting" | "opening" | "sliding" | "settled";

export function useEnvelopeSequence(scene: RefObject<HTMLDivElement | null>, reduced: boolean) {
  const [phase, setPhase] = useState<EnvelopePhase>(() => reduced ? "waiting" : "intro");
  const activated = useRef(false);
  // Timers only publish semantic phases. All visual tracks share CSS timelines;
  // opening -> sliding does not restart any animation. StrictMode cleans all timers.
  useEffect(() => {
    if (!scene.current) return;
    const ms = (name: string, fallback: number) => readCssTimeMs(scene.current!, name, fallback);
    const timers: number[] = [];
    if (phase === "intro" || phase === "spinning") {
      timers.push(window.setTimeout(() => setPhase("waiting"), reduced ? 0 :
        phase === "intro" ? ms("--champagne-t-entry", 500) + ms("--champagne-t-front", 600) + ms("--champagne-t-spin", 1200) : ms("--champagne-t-spin", 1200)));
      if (phase === "intro" && !reduced) timers.push(window.setTimeout(() => setPhase("spinning"), ms("--champagne-t-entry", 500) + ms("--champagne-t-front", 600)));
    }
    return () => timers.forEach(window.clearTimeout);
  }, [phase, reduced, scene]);

  const opening = phase === "opening" || phase === "sliding";
  useEffect(() => {
    if (!opening || !scene.current) return;
    const ms = (name: string, fallback: number) => readCssTimeMs(scene.current!, name, fallback);
    const slide = window.setTimeout(() => setPhase("sliding"), ms("--champagne-delay-slide", 500));
    // Keep all motion/frame timings; settle after the last decorative stroke.
    const end = window.setTimeout(() => setPhase("settled"), reduced ? ms("--champagne-t-reduced", 300) : ms("--champagne-delay-draw", 2800) + Math.max(ms("--champagne-t-draw", 1200), ms("--champagne-t-dove", 1800)));
    return () => { window.clearTimeout(slide); window.clearTimeout(end); };
  }, [opening, reduced, scene]);

  const open = useCallback(() => {
    if (phase !== "waiting" || activated.current) return;
    activated.current = true;
    setPhase("opening");
  }, [phase]);
  return { phase, open };
}
