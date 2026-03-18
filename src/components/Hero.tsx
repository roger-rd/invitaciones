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

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/35" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          {subtitle ? (
            <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-white/80 md:text-xs">
              {subtitle}
            </p>
          ) : null}

          <p className="text-sm uppercase tracking-[0.35em] text-white/70">
            Una un dia muy especial
          </p>

          <h1 className="font-title mt-5 text-6xl leading-none md:text-8xl lg:text-9xl">
            {title}
          </h1>

          <div className="mx-auto my-8 h-px w-24 bg-white/60" />

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 md:text-xl">
            {message}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#countdown"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-white hover:text-black"
            >
              Ver invitación
            </a>

            <a
              href="#confirmacion"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm uppercase tracking-[0.25em] text-black transition duration-300 hover:bg-white/85"
            >
              Confirmar asistencia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}