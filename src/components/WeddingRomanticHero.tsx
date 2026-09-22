import { useState } from "react";
import type { WeddingCoupleData } from "../types/event";
import RomanticDecor from "./RomanticDecor";

interface WeddingRomanticHeroProps extends Pick<WeddingCoupleData, "brideAndGroom" | "monogram"> {
  date: string;
  coverImage?: string;
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

export default function WeddingRomanticHero({ brideAndGroom, date, coverImage, phrase, monogram }: WeddingRomanticHeroProps) {
  const [failedImage, setFailedImage] = useState<string>();
  const image = coverImage?.trim();
  const hasPhoto = Boolean(image && image !== failedImage);
  const initials = monogram?.trim() || brideAndGroom.map((name) => Array.from(name.trim())[0] ?? "").join(" & ");
  const day = new Date(date);
  const validDate = Number.isFinite(day.getTime());
  const dateLabel = validDate
    ? formatInEventZone(date, { day: "numeric", month: "long", year: "numeric" })
    : "Fecha por confirmar";

  return (
    <section aria-label="Nuestra boda" className="relative isolate min-h-svh overflow-hidden bg-romantic-ivory text-romantic-ink">
      {hasPhoto ? (
        <div className="absolute right-0 top-0 h-[30rem] w-full md:h-full md:w-2/3">
          <img src={image} alt={`${brideAndGroom[0]} y ${brideAndGroom[1]}`} width={1200} height={1600} loading="eager" decoding="async" onError={() => setFailedImage(image)} className="h-full w-full object-cover" />
          <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-romantic-ivory via-romantic-ivory/10 to-transparent md:bg-linear-to-r md:from-romantic-ivory md:via-romantic-ivory/30" />
        </div>
      ) : (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-br from-romantic-cream via-romantic-champagne to-romantic-ivory">
          <div className="romantic-drift absolute inset-x-[12%] top-[8%] h-[75%] rounded-t-full border border-romantic-gold/20 bg-radial from-romantic-cream/80 to-transparent" />
          <p className="romantic-shimmer absolute inset-x-4 top-14 text-center font-display-romantic text-[clamp(4rem,18vw,13rem)] italic leading-none text-romantic-gold/20 [overflow-wrap:anywhere]">{initials}</p>
        </div>
      )}
      <RomanticDecor variant="hero" />
      <div className={`relative z-10 mx-auto w-full max-w-7xl px-6 pb-28 sm:px-12 md:py-36 ${hasPhoto ? "pt-80" : "pt-52 text-center"}`}>
        <div className={hasPhoto ? "max-w-xl md:w-[52%]" : "mx-auto max-w-3xl"}>
          <p className="text-xs uppercase tracking-[.3em]">¡Nos casamos!</p>
          <h1 className="mt-8 font-accent-romantic text-[clamp(3rem,8vw,6.5rem)] leading-[1.2] [overflow-wrap:anywhere]">
            <span className="block">{brideAndGroom[0]}</span>
            <span className="my-2 block font-display-romantic text-3xl italic text-romantic-gold">&amp;</span>
            <span className="block">{brideAndGroom[1]}</span>
          </h1>
          <div aria-hidden="true" className={`my-8 h-px w-16 bg-romantic-gold/60 ${hasPhoto ? "" : "mx-auto"}`} />
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
