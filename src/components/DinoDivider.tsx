interface DinoDividerProps {
  from: string;
  to: string;
}

export default function DinoDivider({ from, to }: DinoDividerProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 1200 100" preserveAspectRatio="none" className="pointer-events-none block h-16 w-full sm:h-24" style={{ backgroundColor: from }}>
      <path fill={to} d="M0 40C150 90 300 0 450 35C600 70 750 10 900 45C1000 68 1100 55 1200 30V100H0Z" />
      <path d="M0 55C200 15 400 85 600 45C800 5 1000 75 1200 50" fill="none" stroke="#FFC93C" strokeWidth="3" strokeDasharray="2 16" strokeLinecap="round" />
    </svg>
  );
}
