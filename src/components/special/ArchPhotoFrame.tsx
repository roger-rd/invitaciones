import { useEffect, useRef, useState } from "react";
import { useSpecialReducedMotion } from "./useSpecialReducedMotion";
import type { SpecialCelebrationData } from "../../types/event";

export default function SpecialArchPhotoFrame({ photo, active = true }: { photo?: SpecialCelebrationData["photo"]; active?: boolean }) {
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useSpecialReducedMotion();
  const image = useRef<HTMLImageElement>(null);
  const [ready, setReady] = useState(false);
  const [delayElapsed, setDelayElapsed] = useState(false);

  useEffect(() => {
    // Contar desde el final de la apertura, con el nombre completamente visible.
    if (!active) return;
    const delay = parseFloat(getComputedStyle(frame.current!).getPropertyValue("--vitela-photo-delay"));
    const timer = window.setTimeout(() => setDelayElapsed(true), reduced ? 0 : delay);
    return () => window.clearTimeout(timer);
  }, [active, reduced]);

  useEffect(() => {
    const element = image.current;
    if (!element) return;
    let active = true;
    let decodeTimer: number | undefined;
    const updateReady = () => {
      if (active) setReady(element.complete && element.naturalWidth > 0);
    };
    updateReady();
    const decode = async () => {
      try {
        await Promise.race([
          element.decode(),
          new Promise<void>((resolve) => { decodeTimer = window.setTimeout(resolve, 1200); }),
        ]);
      } catch { /* decode es opcional: la carga determina si se revela la foto. */ }
      finally {
        window.clearTimeout(decodeTimer);
        updateReady();
      }
    };
    void decode();
    element.addEventListener("load", updateReady);
    return () => {
      active = false;
      window.clearTimeout(decodeTimer);
      element.removeEventListener("load", updateReady);
    };
  }, [photo?.src]);

  const revealed = !!photo && ready && delayElapsed;
  return (
    <div ref={frame} className={`vitela-arch ${revealed ? "vitela-photo-revealed" : ""}`}>
      <div className="vitela-arch-surface">
        {!photo && <div className="vitela-photo-placeholder" aria-hidden="true"><i /><i /><i /></div>}
        {photo && <img ref={image} className="vitela-photo" src={photo.src} alt={photo.alt} width={photo.width ?? 800} height={photo.height ?? 1000} loading="eager" decoding="async" onError={() => setReady(false)} style={{ objectPosition: photo.position ?? "center" }} />}
      </div>
      <svg className="vitela-arch-lines" viewBox="0 0 240 300" preserveAspectRatio="none" aria-hidden="true">
        <path className="vitela-arch-outline" pathLength="1" d="M5 295 V120 A115 115 0 0 1 235 120 V295 Z" />
        <path className="vitela-arch-drawing" pathLength="1" d="M11 289 V120 A109 109 0 0 1 229 120 V289 Z" />
      </svg>
    </div>
  );
}
