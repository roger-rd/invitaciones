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
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <img
        src={coverImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative z-10 mx-6 w-full max-w-2xl rounded-[2.5rem] border border-white/15 bg-white/10 px-8 py-14 text-center shadow-2xl backdrop-blur-md md:px-14">
        {subtitle ? (
          <p className="mb-5 text-[11px] uppercase tracking-[0.45em] text-white/75 md:text-xs">
            {subtitle}
          </p>
        ) : null}

      

        <h1 className="font-title mt-5 text-6xl leading-none md:text-8xl">
          {title}
        </h1>

        <div className="mx-auto my-8 h-px w-28 bg-white/35" />

        <p className="text-sm uppercase tracking-[0.3em] text-white/70 md:text-base">
          {formatDate(date)}
        </p>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
          Una invitación especial para compartir juntos un momento inolvidable.
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-10 inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-3 text-sm uppercase tracking-[0.28em] text-white transition duration-300 hover:bg-white hover:text-black"
        >
          Abrir invitación
        </button>
      </div>
    </section>
  );
}