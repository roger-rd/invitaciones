interface HeroProps {
  title: string;
  subtitle?: string;
  coverImage: string;
  message: string;
}

export default function Hero({
  title,
  subtitle,
  coverImage,
  message,
}: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img
        src={coverImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
        <div className="max-w-3xl">
          {subtitle ? (
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/80 md:text-sm">
              {subtitle}
            </p>
          ) : null}

          <h1 className="font-title text-6xl leading-tight md:text-8xl">
            {title}
          </h1>

          <div className="mx-auto my-6 h-px w-24 bg-white/60" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
            {message}
          </p>

          <div className="mt-10">
            <a
              href="#countdown"
              className="inline-block rounded-full border border-white/70 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
            >
              Ver invitación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}