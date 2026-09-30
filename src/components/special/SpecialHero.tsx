import type { Ref } from "react";
import type { SpecialCelebrationData } from "../../types/event";
import SpecialArchPhotoFrame from "./ArchPhotoFrame";

export default function SpecialHero({ data, headingRef, active = true }: { data: SpecialCelebrationData; headingRef: Ref<HTMLHeadingElement>; active?: boolean }) {
  return (
    <header className="vitela-hero">
      {data.eyebrow && <p className="vitela-label">{data.eyebrow}</p>}
      <h1 ref={headingRef} tabIndex={-1} className="vitela-title"><span>{data.heading}</span>{" "}<em>{data.honoreeName}</em></h1>
      <SpecialArchPhotoFrame key={data.photo?.src ?? "sin-foto"} photo={data.photo} active={active} />
    </header>
  );
}
