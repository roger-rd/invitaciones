import Reveal from "./Reveal";

interface ClosingProps {
  title: string;
  coverImage: string;
  phrase?: string;
}

export default function Closing({ title, coverImage, phrase }: ClosingProps) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-24 text-center text-cream">
      <img src={coverImage} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/72" />
      <div aria-hidden="true" className="grain-overlay pointer-events-none absolute inset-0" />

      <div className="relative z-10 max-w-xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">Gracias por ser parte</p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 font-display text-2xl italic leading-relaxed sm:text-3xl">
            {phrase ?? `Será un honor celebrar junto a ti este día tan especial, ${title}.`}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mx-auto mt-8 h-px w-16 bg-gold/50" />
        </Reveal>
      </div>
    </section>
  );
}
