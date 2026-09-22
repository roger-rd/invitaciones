import type { WeddingGiftData } from "../types/event";

interface WeddingGiftsProps {
  gifts?: WeddingGiftData;
}

export default function WeddingGifts({ gifts }: WeddingGiftsProps) {
  if (!gifts || gifts.hide) return null;
  const message = gifts.message?.trim();
  const bankTransfer = gifts.bankTransfer?.trim();
  const giftListUrl = gifts.giftListUrl?.trim();
  const externalUrl = gifts.externalUrl?.trim();
  if (!message && !bankTransfer && !giftListUrl && !externalUrl) return null;
  const linkClass = "inline-flex min-h-12 items-center justify-center rounded-full border border-romantic-gold/40 px-6 py-3 text-sm hover:bg-romantic-champagne/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink";

  return (
    <section aria-label="Regalos" className="bg-romantic-cream px-6 py-20 text-center text-romantic-ink sm:py-28">
      <div className="mx-auto max-w-2xl [overflow-wrap:anywhere]">
        <h2 className="font-display-romantic text-3xl sm:text-4xl">Un detalle con cariño</h2>
        {message && <p className="mt-8 whitespace-pre-line font-display-romantic text-xl leading-relaxed">{message}</p>}
        {bankTransfer && <div className="mt-8 border border-romantic-gold/25 bg-romantic-ivory p-6"><h3 className="font-display-romantic text-xl">Datos para transferencia</h3><p className="mt-4 whitespace-pre-line text-sm leading-relaxed">{bankTransfer}</p></div>}
        {(giftListUrl || externalUrl) && <div className="mt-8 flex flex-wrap justify-center gap-3">
          {giftListUrl && <a href={giftListUrl} target="_blank" rel="noreferrer" className={linkClass}>Ver lista de regalos</a>}
          {externalUrl && <a href={externalUrl} target="_blank" rel="noreferrer" className={linkClass}>Más información</a>}
        </div>}
      </div>
    </section>
  );
}
