interface RomanticDecorProps {
  variant?: "intro" | "hero" | "section" | "closing";
}

/* Trazos botánicos propios. Las transformaciones de composición quedan fuera
   del grupo animado para conservar la orientación con movimiento reducido. */
function BotanicalBranch({ flowering }: { flowering: boolean }) {
  return (
    <g fill="none" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <g className="text-romantic-gold" stroke="currentColor">
        <path d="M28 370C43 327 83 288 89 235S80 133 151 45" />
        <path d="M62 304Q44 270 24 253 M87 252Q121 220 161 216 M88 209Q64 177 42 165 M98 145Q132 135 164 106 M120 90Q111 64 116 41" />
      </g>
      <g className="text-romantic-sage" stroke="currentColor">
        <path d="M49 326Q12 315 17 288Q45 294 49 326Z M76 282Q111 283 124 249Q93 251 76 282Z M86 239Q54 230 49 203Q77 209 86 239Z M89 193Q120 192 137 163Q104 162 89 193Z M102 136Q73 124 79 97Q102 109 102 136Z M134 67Q155 74 175 48Q149 43 134 67Z" />
        <path d="M24 253Q9 237 15 222Q32 233 24 253Z M161 216Q172 190 193 192Q185 213 161 216Z M42 165Q20 162 18 142Q39 144 42 165Z M164 106Q160 83 181 74Q182 94 164 106Z" />
      </g>
      {flowering && (
        <g className="romantic-shimmer text-romantic-gold" stroke="currentColor">
          <path d="M151 45C133 44 127 28 137 25C144 23 151 34 153 40C146 21 154 9 161 15C168 21 160 36 156 41C169 25 184 29 180 38C177 46 163 47 156 45C169 48 174 60 165 61C156 62 151 51 151 45Z" />
          <path d="M116 41Q101 33 105 23Q118 25 116 41 M116 41Q129 28 124 21Q113 26 116 41" />
        </g>
      )}
    </g>
  );
}

const layouts = {
  intro: { width: "48%", height: "76%", opacity: .3, flowering: true },
  hero: { width: "42%", height: "68%", opacity: .25, flowering: true },
  section: { width: "28%", height: "54%", opacity: .18, flowering: false },
  closing: { width: "46%", height: "72%", opacity: .32, flowering: true },
} as const;

/** Capa decorativa para un contenedor con posición relativa; deja libre el centro. */
export default function RomanticDecor({ variant = "section" }: RomanticDecorProps) {
  const layout = layouts[variant];

  return (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden" fill="none">
      {/* Viewports independientes: conservan el trazo y las proporciones en móvil. */}
      <svg x="0" y="0" width={layout.width} height={layout.height} viewBox="0 0 220 400" preserveAspectRatio="xMinYMin meet" opacity={layout.opacity}>
        <g transform="translate(0 400) scale(1 -1)">
          <g className="romantic-drift"><BotanicalBranch flowering={layout.flowering} /></g>
        </g>
      </svg>
      <svg x={`${100 - parseInt(layout.width)}%`} y={`${100 - parseInt(layout.height)}%`} width={layout.width} height={layout.height} viewBox="0 0 220 400" preserveAspectRatio="xMaxYMax meet" opacity={layout.opacity}>
        <g transform="translate(220 0) scale(-1 1)">
          <g className="romantic-drift" style={{ animationDelay: "-12s" }}><BotanicalBranch flowering={layout.flowering} /></g>
        </g>
      </svg>
      {(variant === "intro" || variant === "closing") && (
        <g className="text-romantic-gold" stroke="currentColor" strokeWidth=".75" opacity=".18">
          <rect x="5%" y="4%" width="90%" height="92%" rx="2" className="romantic-shimmer" />
        </g>
      )}
    </svg>
  );
}
