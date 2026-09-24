import Reveal from "./Reveal";
import type { WeddingDressCodeData } from "../types/event";

interface WeddingClassicDressCodeProps {
  dressCode?: WeddingDressCodeData;
}

export default function WeddingClassicDressCode({ dressCode }: WeddingClassicDressCodeProps) {
  if (!dressCode) return null;

  const groups = [
    { title: "Colores sugeridos", colors: dressCode.palette?.filter((color) => color.trim()) },
    { title: "Colores a evitar", colors: dressCode.avoidColors?.filter((color) => color.trim()) },
  ];

  return (
    <section aria-label="Código de vestimenta" className="bg-classic-ivory px-6 py-20 text-center text-classic-ink sm:py-28">
      <Reveal className="mx-auto max-w-2xl [overflow-wrap:anywhere]">
        <p className="text-xs uppercase tracking-[.2em]">Código de vestimenta</p>
        <h2 className="mt-6 font-display-classic text-4xl sm:text-5xl">{dressCode.formality}</h2>
        {groups.map(({ title, colors }) => colors?.length ? (
          <div key={title} className="mt-8">
            <h3 className="font-display-classic text-xl">{title}</h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {colors.map((color, index) => <li key={`${color}-${index}`} className="max-w-full rounded-full border border-classic-gold/30 bg-classic-cream px-4 py-2 text-sm">{color}</li>)}
            </ul>
          </div>
        ) : null)}
        {dressCode.note?.trim() && <p className="mt-8 whitespace-pre-line text-sm leading-relaxed">{dressCode.note}</p>}
      </Reveal>
    </section>
  );
}
