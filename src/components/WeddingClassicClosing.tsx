import Reveal from "./Reveal";
import type { WeddingCoupleData, WeddingImage } from "../types/event";
import ClassicDecor from "./ClassicDecor";

interface WeddingClassicClosingProps extends Pick<WeddingCoupleData, "farewellMessage" | "brideAndGroom"> {
  closingImage?: WeddingImage;
}

export default function WeddingClassicClosing({ farewellMessage, brideAndGroom, closingImage }: WeddingClassicClosingProps) {
  const message = farewellMessage?.trim() || "Gracias por ser parte de esta historia. Los esperamos con todo el amor.";

  if (closingImage) {
    return (
      <section aria-label="Con todo nuestro cariño" className="relative isolate flex min-h-[85svh] items-end overflow-hidden bg-classic-ink text-center text-white">
        <img
          src={closingImage.src}
          alt={closingImage.alt}
          width={closingImage.width}
          height={closingImage.height}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: closingImage.position ?? "center" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/65 to-black/10" />
        <Reveal className="relative mx-auto w-full max-w-3xl px-6 pt-[40svh] pb-24 [overflow-wrap:anywhere] sm:px-12 sm:pb-32">
          <p className="whitespace-pre-line font-display-classic text-2xl leading-relaxed sm:text-3xl">{message}</p>
          <div aria-hidden="true" className="mx-auto my-10 h-px w-20 bg-white/60" />
          <h2 className="font-display-classic text-4xl leading-snug sm:text-6xl">{brideAndGroom[0]} <span className="font-display-classic italic">&amp;</span> {brideAndGroom[1]}</h2>
        </Reveal>
      </section>
    );
  }

  return (
    <section aria-label="Con todo nuestro cariño" className="relative isolate overflow-hidden bg-classic-ivory px-6 py-28 text-center text-classic-ink sm:py-36">
      <ClassicDecor variant="closing" />
      <Reveal className="relative mx-auto max-w-3xl [overflow-wrap:anywhere]">
        <p className="whitespace-pre-line font-display-classic text-2xl leading-relaxed sm:text-3xl">{message}</p>
        <div aria-hidden="true" className="mx-auto my-10 h-px w-20 bg-classic-gold/50" />
        <h2 className="font-display-classic text-4xl leading-snug sm:text-6xl">{brideAndGroom[0]} <span className="font-display-classic italic text-classic-gold">&amp;</span> {brideAndGroom[1]}</h2>
      </Reveal>
    </section>
  );
}
