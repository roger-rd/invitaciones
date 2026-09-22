import type { WeddingCoupleData } from "../types/event";

type WeddingWelcomeProps = Pick<WeddingCoupleData, "welcomeMessage">;

export default function WeddingWelcome({ welcomeMessage }: WeddingWelcomeProps) {
  if (!welcomeMessage?.trim()) return null;

  return (
    <section aria-label="Bienvenida" className="bg-romantic-ivory px-6 py-20 text-center text-romantic-ink sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div aria-hidden="true" className="mx-auto mb-8 h-px w-20 bg-romantic-gold/50" />
        <p className="whitespace-pre-line font-display-romantic text-2xl leading-relaxed [overflow-wrap:anywhere] sm:text-3xl">{welcomeMessage}</p>
      </div>
    </section>
  );
}
