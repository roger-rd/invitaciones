import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface CountdownState {
  d: number;
  h: number;
  m: number;
  s: number;
}

interface CountdownItemProps {
  value: number;
  label: string;
}

function CountdownItem({ value, label }: CountdownItemProps) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl font-light md:text-6xl">{value}</span>
      <span className="mt-2 text-xs uppercase tracking-widest text-gray-400">
        {label}
      </span>
    </div>
  );
}

function calculateTimeLeft(targetDate: string): CountdownState {
  const diff = new Date(targetDate).getTime() - new Date().getTime();

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

export default function Countdown({ targetDate }: CountdownProps) {
  const [time, setTime] = useState<CountdownState>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTime(calculateTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="countdown" className="bg-white py-20 text-center">
      <h2 className="text-2xl uppercase tracking-widest text-gray-500">
        Falta
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <CountdownItem value={time.d} label="Días" />
        <CountdownItem value={time.h} label="Horas" />
        <CountdownItem value={time.m} label="Minutos" />
        <CountdownItem value={time.s} label="Segundos" />
      </div>
    </section>
  );
}