import { useEffect, useState } from "react";

interface WeddingCountdownProps {
  targetDate: string;
}

export default function WeddingCountdown({ targetDate }: WeddingCountdownProps) {
  const [now, setNow] = useState(() => Date.now());
  const target = new Date(targetDate).getTime();

  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (!Number.isFinite(target)) return null;

  const seconds = Math.max(0, Math.floor((target - now) / 1000));
  const units = [
    { label: "Días", value: Math.floor(seconds / 86400) },
    { label: "Horas", value: Math.floor(seconds / 3600) % 24 },
    { label: "Min", value: Math.floor(seconds / 60) % 60 },
    { label: "Seg", value: seconds % 60 },
  ];

  return (
    <section aria-label="Cuenta regresiva" className="bg-romantic-champagne/40 px-4 py-20 text-center text-romantic-ink sm:px-6 sm:py-24">
      <h2 className="font-display-romantic text-2xl sm:text-3xl">Cada vez más cerca</h2>
      {/* No anunciar cada segundo: el temporizador se puede consultar sin interrumpir la lectura. */}
      <div role="timer" aria-live="off" aria-label="Tiempo restante para nuestra boda" className="mx-auto mt-10 max-w-2xl">
        <dl className="grid grid-cols-4 divide-x divide-romantic-gold/30">
          {units.map(({ label, value }) => (
            <div key={label} className="flex min-w-0 flex-col-reverse gap-3 px-1 sm:px-3">
              <dt className="text-[.65rem] uppercase tracking-[.12em] sm:text-xs">{label}</dt>
              <dd className="font-display-romantic text-[clamp(1.5rem,6vw,3.5rem)] leading-tight tabular-nums [overflow-wrap:anywhere]">{String(value).padStart(2, "0")}</dd>
            </div>
          ))}
        </dl>
      </div>
      {target <= now && <p className="mt-8 font-display-romantic text-xl">¡Llegó el día de celebrar nuestro amor!</p>}
    </section>
  );
}
