import DoveEngraving from "./DoveEngraving";
import type { RefObject } from "react";
import EnvelopeSeal from "./EnvelopeSeal";
import type { EnvelopePhase } from "./useEnvelopeSequence";

export default function Envelope({ name, phase, onOpen, sealRef }: {
  name: string; phase: EnvelopePhase; onOpen: () => void; sealRef: RefObject<HTMLButtonElement | null>;
}) {
  return <>
    <div className="champagne-ground" aria-hidden="true" />
    <div className="champagne-envelope">
      <div className="champagne-envelope-front" aria-hidden="true">
        <DoveEngraving variant="simple" />
        <span>Bautizo</span><span>{name}</span><i />
      </div>
      <div className="champagne-envelope-back">
        <div className="champagne-envelope-lining" aria-hidden="true" />
        <div className="champagne-flap" aria-hidden="true">
          <div className="champagne-flap-outside" /><div className="champagne-flap-inside" />
        </div>
        <div className="champagne-pocket" aria-hidden="true" />
        <div className="champagne-seal-position">
          <EnvelopeSeal honoreeName={name} onOpen={onOpen} disabled={phase !== "waiting"} ref={sealRef} />
        </div>
      </div>
      <div className="champagne-envelope-edge" aria-hidden="true" />
    </div>
  </>;
}
