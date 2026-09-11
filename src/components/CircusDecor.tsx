interface CircusDecorProps {
  variant?: "intro" | "hero" | "section" | "closing";
}

export default function CircusDecor({ variant = "section" }: CircusDecorProps) {
  const colors = ["#E9483D", "#FFC94D", "#7FD6E0", "#FFFDF7"];
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 1000 800" preserveAspectRatio="xMidYMid slice" className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
      <path className="circus-flag" d="M0 12Q500 110 1000 12 M40 20l45 80 35-65 M210 48l45 80 35-69 M390 62l45 80 35-77 M570 62l45 80 35-83 M750 48l45 80 35-94 M920 20l40 80 35-99" fill="#FFC94D" stroke="#1B2A4A" strokeWidth="3" />
      {Array.from({ length: variant === "section" ? 5 : 12 }, (_, i) => <rect key={i} className="circus-confetti" x={30 + i * 83} y={120 + (i % 4) * 145} width="8" height="17" rx="2" fill={colors[i % 4]} style={{ animationDelay: `${-i * 1.7}s` }} />)}
      <g className="circus-balloon" opacity=".85">
        <path d="M70 440Q60 520 110 570 M115 415L110 570 M155 450Q150 530 110 570" fill="none" stroke="#7FD6E0" strokeWidth="2" />
        <ellipse cx="65" cy="405" rx="27" ry="36" fill="#E9483D" />
        <ellipse cx="112" cy="378" rx="28" ry="38" fill="#FFC94D" />
        <ellipse cx="156" cy="415" rx="25" ry="35" fill="#7FD6E0" />
      </g>
      {[{ x: 840, y: 170 }, { x: 200, y: 650 }, { x: 880, y: 600 }].map(({ x, y }, i) => <svg key={i} x={x} y={y} width="42" height="42" viewBox="-22 -22 44 44"><path className="circus-twinkle" style={{ animationDelay: `${-i}s` }} d="M0-20 6-6 21-6 10 4 14 20 0 11-14 20-10 4-21-6-6-6Z" fill="#FFC94D" /></svg>)}
    </svg>
  );
}
