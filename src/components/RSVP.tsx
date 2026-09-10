import { MessageCircle } from "./icons";
import Reveal from "./Reveal";

interface RSVPProps {
  phone: string;
  title: string;
}

export default function RSVP({ phone, title }: RSVPProps) {
  const message = encodeURIComponent(`Hola, confirmo mi asistencia al evento de ${title}`);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section id="confirmacion" className="bg-sand px-6 py-24 text-center sm:py-28">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ink/45">Confirmación</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-4xl italic text-ink sm:text-5xl">¿Nos acompañas?</h2>
      </Reveal>
      <Reveal delay={160}>
        <p className="mx-auto mt-5 max-w-md text-base text-ink/70">
          Confírmanos tu asistencia para reservarte un lugar en esta celebración.
        </p>
      </Reveal>
      <Reveal delay={240}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm uppercase tracking-[0.2em] text-cream transition hover:bg-ink/85"
        >
          <MessageCircle className="h-4 w-4" />
          Confirmar por WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
