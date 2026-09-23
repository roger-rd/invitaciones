import { useState } from "react";
import type { WeddingCoupleData, WeddingImage } from "../types/event";
import RomanticDecor from "./RomanticDecor";

interface WeddingRomanticHeroProps extends Pick<WeddingCoupleData, "brideAndGroom" | "monogram"> {
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

export default function WeddingRomanticHero({ brideAndGroom, date, heroImage, phrase, monogram }: WeddingRomanticHeroProps) {
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
    <section aria-label="Nuestra boda" className="relative isolate flex min-h-svh items-end overflow-hidden bg-romantic-ivory text-romantic-ink">
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
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/55 to-black/10" />
        </>
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-romantic-cream via-romantic-champagne to-romantic-ivory">
          <div className="romantic-drift absolute inset-x-[12%] top-[8%] h-[75%] rounded-t-full border border-romantic-gold/20 bg-radial from-romantic-cream/80 to-transparent" />
          <p className="romantic-shimmer absolute inset-x-4 top-14 text-center font-display-romantic text-[clamp(4rem,18vw,13rem)] italic leading-none text-romantic-gold/20 [overflow-wrap:anywhere]">{initials}</p>
        </div>
      )}
      {!hasPhoto && <RomanticDecor variant="hero" />}
      <div className={`relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 sm:px-12 md:pb-40 ${hasPhoto ? "pt-[35svh] text-center text-white" : "pt-52 text-center"}`}>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[.3em]">¡Nos casamos!</p>
          <h1 className="mt-8 font-accent-romantic text-[clamp(3rem,8vw,6.5rem)] leading-[1.2] [overflow-wrap:anywhere]">
            <span className="block">{brideAndGroom[0]}</span>
            <span className="my-2 block font-display-romantic text-3xl italic">&amp;</span>
            <span className="block">{brideAndGroom[1]}</span>
          </h1>
          <div aria-hidden="true" className={`mx-auto my-8 h-px w-16 ${hasPhoto ? "bg-white/60" : "bg-romantic-gold/60"}`} />
          <p className="font-display-romantic text-xl sm:text-2xl">
            {validDate ? <time dateTime={date}>{dateLabel}</time> : dateLabel}
          </p>
          <p className="mt-6 text-base leading-relaxed sm:text-lg">{phrase?.trim() || "El comienzo de nuestra vida juntos."}</p>
        </div>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-romantic-ivory to-transparent" />
    </section>
  );
}
