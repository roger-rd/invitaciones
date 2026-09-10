import { useState } from "react";
import Reveal from "./Reveal";

interface InvitationIntroProps {
  title: string;
  subtitle?: string;
  coverImage: string;
  date: string;
  onOpen: () => void;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export default function InvitationIntro({
  title,
  subtitle,
  coverImage,
  date,
  onOpen,
}: InvitationIntroProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    onOpen();
  };

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-end overflow-hidden bg-ink text-cream">
      <img
        src={coverImage}
        alt={title}
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-linear-to-t from-ink via-ink/60 to-ink/10 absolute inset-0" />
      <div aria-hidden="true" className="grain-overlay pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="ambient-glow pointer-events-none absolute -left-12 top-16 h-52 w-52 rounded-full bg-gold/20 blur-3xl"
      />

      <div
        className={`relative z-10 w-full px-6 pb-14 pt-24 text-center transition-opacity duration-500 sm:pb-20 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="mx-auto max-w-md">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.4em] text-cream/70">
              {subtitle ?? "Te invito a celebrar"}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-6xl italic leading-none sm:text-7xl">{title}</h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-5 text-xs uppercase tracking-[0.35em] text-gold-soft">
              {formatDate(date)}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <button
              type="button"
              onClick={handleOpen}
              className="group mt-10 inline-flex items-center gap-3 rounded-full border border-cream/50 px-9 py-3.5 text-xs uppercase tracking-[0.3em] text-cream transition hover:border-gold hover:text-gold"
            >
              Abrir invitación
              <span className="h-1.5 w-1.5 rounded-full bg-gold transition group-hover:scale-125" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
