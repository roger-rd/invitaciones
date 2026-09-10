import { useEffect, useState } from "react";
import Reveal from "./Reveal";

interface CountdownProps {
  targetDate: string;
}

interface CountdownState {
  d: number;
  h: number;
  m: number;
  s: number;
}

function calculateTimeLeft(targetDate: string): CountdownState {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return { d: 0, h: 0, m: 0, s: 0 };
  }

  return {
    d: Math.floor(diff / (1000 * 60 * 60 * 24)),
    h: Math.floor((diff / (1000 * 60 * 60)) % 24),
    m: Math.floor((diff / 1000 / 60) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof CountdownState; label: string }[] = [
  { key: "d", label: "Días" },
  { key: "h", label: "Horas" },
  { key: "m", label: "Min" },
  { key: "s", label: "Seg" },
];

export default function Countdown({ targetDate }: CountdownProps) {
  const [time, setTime] = useState<CountdownState>(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(calculateTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="bg-cream px-6 py-20 text-center sm:py-24">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.4em] text-ink/45">Cuenta regresiva</p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mx-auto mt-8 flex max-w-sm items-start justify-center gap-4 sm:max-w-md sm:gap-8">
          {units.map((unit, index) => (
            <div key={unit.key} className="flex items-start gap-4 sm:gap-8">
              <div className="flex flex-col items-center">
                <span className="font-display tabular-nums text-4xl italic text-ink sm:text-6xl">
                  {String(time[unit.key]).padStart(2, "0")}
                </span>
                <span className="mt-2 text-[10px] uppercase tracking-[0.3em] text-ink/40 sm:text-xs">
                  {unit.label}
                </span>
              </div>
              {index < units.length - 1 ? (
                <span className="mt-1 font-display text-3xl italic text-gold/70 sm:text-5xl">·</span>
              ) : null}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
