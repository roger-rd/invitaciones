import Reveal from "./Reveal";
import type { WeddingCoupleData } from "../types/event";

type WeddingClassicWelcomeProps = Pick<WeddingCoupleData, "welcomeMessage">;

export default function WeddingClassicWelcome({ welcomeMessage }: WeddingClassicWelcomeProps) {
  if (!welcomeMessage?.trim()) return null;

  return (
    <section aria-label="Bienvenida" className="bg-classic-ivory px-6 py-20 text-center text-classic-ink sm:py-28">
      <Reveal className="mx-auto max-w-3xl [overflow-wrap:anywhere]">
        <div aria-hidden="true" className="mx-auto mb-8 h-px w-20 bg-classic-gold/50" />
        <p className="whitespace-pre-line font-display-classic text-2xl leading-relaxed [overflow-wrap:anywhere] sm:text-3xl">{welcomeMessage}</p>
      </Reveal>
    </section>
  );
}
