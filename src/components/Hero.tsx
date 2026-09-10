import { ChevronDown } from "./icons";
import Reveal from "./Reveal";

interface HeroProps {
  title: string;
  subtitle?: string;
  coverImage: string;
  message: string;
}

export default function Hero({ title, subtitle, coverImage, message }: HeroProps) {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink text-cream">
      <img
        src={coverImage}
        alt=""
        aria-hidden="true"
        className="animate-slow-zoom absolute inset-0 h-full w-full object-cover"
      />
      <div className="bg-linear-to-t from-ink via-ink/50 to-ink/10 absolute inset-0" />
      <div aria-hidden="true" className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 text-center sm:pb-20">
        <div className="mx-auto max-w-2xl">
          {subtitle ? (
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.45em] text-cream/70 sm:text-xs">
                {subtitle}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-6xl italic leading-none sm:text-8xl">{title}</h1>
          </Reveal>

          <Reveal delay={160}>
            <div className="mx-auto my-8 h-px w-20 bg-gold/60" />
          </Reveal>

          <Reveal delay={220}>
            <p className="mx-auto max-w-md text-base leading-relaxed text-cream/85 sm:text-lg">
              {message}
            </p>
          </Reveal>
        </div>

        <a
          href="#countdown"
          aria-label="Descubre más"
          className="animate-bounce motion-reduce:animate-none mt-14 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/30 text-cream/70 transition hover:border-gold/60 hover:text-gold"
        >
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
