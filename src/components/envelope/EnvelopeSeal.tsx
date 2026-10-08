import type { Ref } from "react";

export interface EnvelopeSealProps {
  honoreeName: string;
  onOpen?: () => void;
  disabled?: boolean;
  ref?: Ref<HTMLButtonElement>;
}

export default function EnvelopeSeal({ honoreeName, onOpen, disabled, ref }: EnvelopeSealProps) {
  const initial = Array.from(honoreeName.trim())[0]?.toLocaleUpperCase("es") ?? "";
  return (
    <button ref={ref} disabled={disabled} aria-disabled={disabled} type="button" className="champagne-seal" aria-label="Abrir invitación" onClick={onOpen}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth=".7" />
        <text x="50" y="53" textAnchor="middle" dominantBaseline="middle">{initial}</text>
      </svg>
    </button>
  );
}
