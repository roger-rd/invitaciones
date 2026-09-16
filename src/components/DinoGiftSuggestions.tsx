import { Gift } from "./icons";

interface DinoGiftSuggestionsProps {
  giftMessage?: string;
  giftItems?: string[];
  giftLinkUrl?: string;
  giftLinkLabel?: string;
}

export default function DinoGiftSuggestions({ giftMessage, giftItems, giftLinkUrl, giftLinkLabel }: DinoGiftSuggestionsProps) {
  return (
    <section id="regalos" className="dino-scene bg-dino-sun text-dino-earth">
      <div className="mx-auto max-w-2xl">
        <Gift aria-hidden="true" className="mx-auto mb-6 h-20 w-20" />
        <p className="dino-eyebrow">Pequeños detalles, grandes sonrisas</p>
        <h2 className="dino-heading">Tu compañía es el mejor descubrimiento</h2>
        <p className="mt-6 text-xl leading-relaxed">{giftMessage || "Lo más importante es que vengas a celebrar conmigo. Si deseas traerme un regalito, aquí puedes ver algunas ideas."}</p>
        {!!giftItems?.length && (
          <ul className="mt-8 space-y-4 text-left">
            {giftItems.map((item, i) => (
              <li key={`${i}-${item}`} className="flex items-center gap-4 rounded-2xl bg-dino-cream p-5 text-xl">
                <Gift aria-hidden="true" className="h-7 w-7 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {giftLinkUrl && (
          <a className="dino-button mt-8 bg-dino-earth text-dino-cream" href={giftLinkUrl} target="_blank" rel="noreferrer">
            {giftLinkLabel || "Ver lista de regalos"}
          </a>
        )}
      </div>
    </section>
  );
}
