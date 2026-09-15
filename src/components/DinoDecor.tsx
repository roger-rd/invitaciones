interface DinoDecorProps {
  variant?: "intro" | "hero" | "section" | "closing";
}

export default function DinoDecor({ variant = "section" }: DinoDecorProps) {
  const footprintCount = variant === "intro" ? 6 : variant === "section" ? 3 : 0;
  const showHills = variant === "intro" || variant === "hero" || variant === "closing";
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      {variant !== "closing" && <circle cx="860" cy="120" r="70" fill="#FFC93C" opacity=".9" />}
      {showHills && (
        <>
          <path d="M0 560C150 460 260 520 400 460C540 400 650 500 800 460C900 434 950 470 1000 460L1000 800L0 800Z" fill="#4C9A5B" opacity=".18" />
          <path d="M0 620C120 520 220 560 340 500C460 440 560 560 680 520C800 480 900 560 1000 540L1000 800L0 800Z" fill="#4C9A5B" opacity=".32" />
        </>
      )}
      {Array.from({ length: footprintCount }, (_, i) => (
        <g key={i} className="dino-footprint" style={{ animationDelay: `${i * 0.15}s` }} transform={`translate(${90 + i * 150} ${620 - (i % 2) * 40}) rotate(${i % 2 === 0 ? -8 : 8})`}>
          <ellipse cx="0" cy="0" rx="17" ry="24" fill="#5C3A21" opacity=".28" />
          <ellipse cx="-14" cy="-26" rx="6" ry="8" fill="#5C3A21" opacity=".28" />
          <ellipse cx="0" cy="-32" rx="6" ry="8" fill="#5C3A21" opacity=".28" />
          <ellipse cx="14" cy="-26" rx="6" ry="8" fill="#5C3A21" opacity=".28" />
        </g>
      ))}
      {variant === "closing" && [{ x: 150, y: 140 }, { x: 780, y: 90 }, { x: 500, y: 180 }].map(({ x, y }, i) => (
        <path key={i} d={`M${x} ${y} q20-18 40 0 q20-18 40 0`} fill="none" stroke="#5C3A21" strokeWidth="4" strokeLinecap="round" opacity=".5" />
      ))}
    </svg>
  );
}
