export default function SpecialWaxSeal({ opening, onOpen }: { opening: boolean; onOpen: () => void }) {
  return (
    <button type="button" className="vitela-seal" aria-label="Abrir invitación" aria-disabled={opening} onClick={onOpen}>
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <g className="vitela-wax-left">
          <path d="M60 9 C48 3 40 13 31 14 C19 15 20 29 12 35 C3 44 10 53 7 63 C4 77 16 79 18 89 C23 103 36 98 43 108 L60 111 L55 92 L65 76 L55 62 L65 44 L55 28 Z" />
          <path className="vitela-wax-ring" d="M53 24 C12 30 13 89 53 97" />
        </g>
        <g className="vitela-wax-right">
          <path d="M60 9 C73 5 77 15 88 14 C103 15 99 29 108 36 C117 44 110 56 114 65 C116 77 104 82 102 93 C96 103 81 100 76 108 L60 111 L55 92 L65 76 L55 62 L65 44 L55 28 Z" />
          <path className="vitela-wax-ring" d="M69 24 C108 34 108 88 69 97" />
        </g>
        <path className="vitela-wax-mark" d="M60 38 C55 49 44 59 46 68 C48 84 73 85 75 68 C76 59 66 49 60 38 Z M51 69 Q54 77 63 75" />
      </svg>
      <span className="vitela-wax-particles" aria-hidden="true"><i /><i /><i /><i /></span>
    </button>
  );
}
