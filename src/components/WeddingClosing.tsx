import type { WeddingCoupleData } from "../types/event";
import RomanticDecor from "./RomanticDecor";

type WeddingClosingProps = Pick<WeddingCoupleData, "farewellMessage" | "brideAndGroom">;

export default function WeddingClosing({ farewellMessage, brideAndGroom }: WeddingClosingProps) {
  const message = farewellMessage?.trim() || "Gracias por ser parte de esta historia. Los esperamos con todo el amor.";
  return (
    <section aria-label="Con todo nuestro cariño" className="relative isolate overflow-hidden bg-romantic-ivory px-6 py-28 text-center text-romantic-ink sm:py-36">
      <RomanticDecor variant="closing" />
      <div className="relative mx-auto max-w-3xl [overflow-wrap:anywhere]">
        <p className="whitespace-pre-line font-display-romantic text-2xl leading-relaxed sm:text-3xl">{message}</p>
        <div aria-hidden="true" className="mx-auto my-10 h-px w-20 bg-romantic-gold/50" />
        <h2 className="font-accent-romantic text-4xl leading-snug sm:text-6xl">{brideAndGroom[0]} <span className="font-display-romantic italic text-romantic-gold">&amp;</span> {brideAndGroom[1]}</h2>
      </div>
    </section>
  );
}
