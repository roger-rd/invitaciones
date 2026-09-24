interface ClassicDecorProps {
  variant?: "intro" | "hero" | "section" | "closing";
}

const layouts = {
  intro: { inset: 4, opacity: 0.4 },
  hero: { inset: 5, opacity: 0.3 },
  section: { inset: 6, opacity: 0.15 },
  closing: { inset: 4, opacity: 0.4 },
} as const;

function Flower() {
  return (
    <g fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
      <path d="M40 36C25 23 32 10 40 14C48 10 55 23 40 36Z M44 40C57 25 70 32 66 40C70 48 57 55 44 40Z M40 44C55 57 48 70 40 66C32 70 25 57 40 44Z M36 40C23 55 10 48 14 40C10 32 23 25 36 40Z" />
      <circle cx="40" cy="40" r="4" />
    </g>
  );
}

/** Marco y flores estáticos; el contenedor debe tener posición relativa. */
export default function ClassicDecor({ variant = "section" }: ClassicDecorProps) {
  const { inset, opacity } = layouts[variant];

  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" fill="none">
      <rect x={`${inset}%`} y={`${inset}%`} width={`${100 - inset * 2}%`} height={`${100 - inset * 2}%`} stroke="currentColor" strokeWidth="1" opacity={opacity} className="text-classic-gold" />
      <svg x={`${inset}%`} y={`${inset}%`} width="64" height="64" viewBox="0 0 80 80" opacity={opacity} className="text-classic-sage">
        <Flower />
      </svg>
      {variant !== "section" && (
        <svg x={`calc(${100 - inset}% - 64px)`} y={`calc(${100 - inset}% - 64px)`} width="64" height="64" viewBox="0 0 80 80" opacity={opacity} className="text-classic-sage">
          <Flower />
        </svg>
      )}
    </svg>
  );
}
