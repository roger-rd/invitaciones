import { useState } from "react";
import type { WeddingImage } from "../types/event";
import ClassicDecor from "./ClassicDecor";
import Reveal from "./Reveal";

interface WeddingClassicHeroProps {
  brideAndGroom: [string, string];
  monogram?: string;
  date: string;
  heroImage?: WeddingImage;
  phrase?: string;
}

function formatInEventZone(iso: string, options: Intl.DateTimeFormatOptions) {
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) return null;
  const offsetMatch = iso.match(/([+-]\d{2}):?(\d{2})$/);
  const offsetMinutes = offsetMatch
    ? (offsetMatch[1].startsWith("-") ? -1 : 1) * (Math.abs(Number(offsetMatch[1])) * 60 + Number(offsetMatch[2]))
    : 0;
  const shifted = new Date(date.getTime() + offsetMinutes * 60000);
  return new Intl.DateTimeFormat("es", { ...options, timeZone: "UTC" }).format(shifted);
}

export default function WeddingClassicHero({ brideAndGroom, date, heroImage, phrase, monogram }: WeddingClassicHeroProps) {
  const [failedImage, setFailedImage] = useState<string>();
  const image = heroImage?.src.trim();
  const hasPhoto = Boolean(image && image !== failedImage);
  const initials = monogram?.trim() || brideAndGroom.map((name) => Array.from(name.trim())[0] ?? "").join(" & ");
  const day = new Date(date);
  const validDate = Number.isFinite(day.getTime());
  const dateLabel = validDate
    ? formatInEventZone(date, { day: "numeric", month: "long", year: "numeric" })
    : "Fecha por confirmar";

  return (
    <section aria-label="Nuestra boda" className="relative isolate flex min-h-svh items-end overflow-hidden bg-classic-ivory text-classic-ink">
      {hasPhoto && heroImage ? (
        <>
          <div className="animate-slow-zoom absolute inset-0">
            <img
              src={image}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onError={() => setFailedImage(image)}
              style={{ objectPosition: heroImage.position ?? "center" }}
              className="h-full w-full object-cover"
            />
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-classic-ink/90 via-classic-ink/55 to-classic-ink/10" />
        </>
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-classic-cream via-classic-ivory to-classic-ivory" />
      )}
      {!hasPhoto && <ClassicDecor variant="hero" />}
      <div className={`relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 sm:px-12 md:pb-40 ${hasPhoto ? "pt-[35svh] text-center text-classic-cream" : "pt-52 text-center"}`}>
        <Reveal className="mx-auto max-w-3xl [overflow-wrap:anywhere]">
          {!hasPhoto && <p aria-hidden="true" className="mb-8 font-display-classic text-2xl text-classic-sage">{initials}</p>}
          <p className="text-xs uppercase tracking-[.3em]">Una vida juntos</p>
          <h1 className="mt-8 font-display-classic text-[clamp(3rem,8vw,6.5rem)] leading-[1.2] [overflow-wrap:anywhere]">
            <span className="block">{brideAndGroom[0]}</span>
            <span className="my-2 block font-display-classic text-3xl">&amp;</span>
            <span className="block">{brideAndGroom[1]}</span>
          </h1>
          <div aria-hidden="true" className={`mx-auto my-8 h-px w-16 ${hasPhoto ? "bg-classic-cream/60" : "bg-classic-gold/60"}`} />
          <p className="font-display-classic text-xl sm:text-2xl">
            {validDate ? <time dateTime={date}>{dateLabel}</time> : dateLabel}
          </p>
          {phrase?.trim() && <p className="mt-6 whitespace-pre-line text-base leading-relaxed sm:text-lg">{phrase}</p>}
        </Reveal>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-classic-ivory to-transparent" />
    </section>
  );
}
