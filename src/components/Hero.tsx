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

      <div className="absolute inset-0 bg-black/40" />

     <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white animate-fadeIn">
        <div className="max-w-3xl">
          {subtitle ? (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] md:text-base">
              {subtitle}
            </p>
          ) : null}

          <h1 className="text-5xl font-bold md:text-7xl">{title}</h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-2xl">
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}