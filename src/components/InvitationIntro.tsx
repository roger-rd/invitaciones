import { useState } from "react";

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

    window.setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <img
        src={coverImage}
        alt={title}
        className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
          opening ? "scale-110 opacity-20" : "scale-100 opacity-40"
        }`}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div
        className={`relative z-10 mx-6 w-full max-w-xl rounded-4xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-md transition duration-500 ${
          opening ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {subtitle ? (
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/75">
            {subtitle}
          </p>
        ) : null}

        <h1 className="text-4xl font-light md:text-6xl">{title}</h1>

        <div className="mx-auto my-6 h-px w-24 bg-white/50" />

        <p className="text-sm uppercase tracking-[0.35em] text-white/75">
          {formatDate(date)}
        </p>

        <button
          type="button"
          onClick={handleOpen}
          className="mt-10 rounded-full border border-white/70 px-8 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-white hover:text-black"
        >
          Abrir invitación
        </button>
      </div>
    </section>
  );
}