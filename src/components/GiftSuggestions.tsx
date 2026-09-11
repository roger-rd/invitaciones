import { Gift } from "./icons";
import Reveal from "./Reveal";

interface GiftSuggestionsProps { giftMessage?: string; giftItems?: string[]; giftLinkUrl?: string; giftLinkLabel?: string }

export default function GiftSuggestions({ giftMessage, giftItems, giftLinkUrl, giftLinkLabel }: GiftSuggestionsProps) {
  return (
    <section id="regalos" className="kids-scene bg-circus-yellow"><Reveal className="mx-auto max-w-2xl">
      <Gift aria-hidden="true" className="mx-auto mb-6 h-20 w-20" /><p className="kids-eyebrow">Pequeños detalles, grandes sonrisas</p><h2 className="kids-heading">Tu compañía es el mejor regalo</h2>
      <p className="mt-6 text-xl leading-relaxed">{giftMessage || "Lo más importante es que vengas a celebrar conmigo. Si deseas traerme un regalito, aquí puedes ver algunas ideas."}</p>
      {!!giftItems?.length && <ul className="mt-8 space-y-4 text-left">{giftItems.map((item, i) => <li key={`${i}-${item}`} className="flex items-center gap-4 rounded-2xl bg-circus-cream p-5 text-xl"><Gift aria-hidden="true" className="h-7 w-7 shrink-0" />{item}</li>)}</ul>}
      {giftLinkUrl && <a className="kids-button mt-8 bg-circus-navy text-circus-cream" href={giftLinkUrl} target="_blank" rel="noreferrer">{giftLinkLabel || "Ver lista de regalos"}</a>}
    </Reveal></section>
  );
}
