import { useId } from "react";

export default function GoldFrame() {
  const gradientId = useId();
  const linesId = useId();
  const maskId = useId();
  const shineId = useId();
  const cornerPath = "M18 52 H28 V28 H52";
  return (
    <svg className="champagne-frame" viewBox="0 0 500 700" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="var(--color-champagne-oro)" />
          <stop offset=".45" stopColor="var(--color-champagne-oro-claro)" />
          <stop offset="1" stopColor="var(--color-champagne-oro-profundo)" />
        </linearGradient>
        <linearGradient id={shineId}>
          <stop stopColor="var(--color-champagne-tarjeta)" stopOpacity="0" />
          <stop offset=".5" stopColor="var(--color-champagne-tarjeta)" stopOpacity=".65" />
          <stop offset="1" stopColor="var(--color-champagne-tarjeta)" stopOpacity="0" />
        </linearGradient>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="500" height="700" style={{ maskType: "alpha" }}>
          <use href={`#${linesId}`} />
        </mask>
      </defs>
      <g id={linesId} fill="none" stroke={`url(#${gradientId})`}>
        <path className="champagne-frame-line champagne-frame-outer" pathLength="1" vectorEffect="non-scaling-stroke" d="M30 18 H470 Q470 30 482 30 V670 Q470 670 470 682 H30 Q30 670 18 670 V30 Q30 30 30 18 Z" />
        <path className="champagne-frame-line champagne-frame-inner" pathLength="1" vectorEffect="non-scaling-stroke" d="M36 28 H464 V672 H36 Z" />
        {["", "translate(500 0) scale(-1 1)", "translate(500 700) scale(-1 -1)", "translate(0 700) scale(1 -1)"].map((transform) => (
          <path key={transform} className="champagne-frame-line champagne-frame-corners" pathLength="1" vectorEffect="non-scaling-stroke" d={cornerPath} transform={transform || undefined} />
        ))}
        <path className="champagne-frame-line champagne-frame-marks" pathLength="1" vectorEffect="non-scaling-stroke" d="M219 53 H242 M248 53 H252 M258 53 H281 M219 647 H242 M248 647 H252 M258 647 H281" />
      </g>
      <g mask={`url(#${maskId})`}>
        <rect className="champagne-frame-highlight" x="-150" y="0" width="150" height="700" fill={`url(#${shineId})`} />
      </g>
    </svg>
  );
}
