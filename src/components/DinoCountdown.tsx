import { useEffect, useState } from "react";

interface DinoCountdownProps {
  targetDate: string;
  timeConfirmed?: boolean;
}

export default function DinoCountdown({ targetDate, timeConfirmed = true }: DinoCountdownProps) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const difference = new Date(targetDate).getTime() - now;
  const seconds = Number.isFinite(difference) ? Math.max(0, Math.floor(difference / 1000)) : 0;
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  return (
    <section className="dino-scene bg-dino-sun text-dino-earth">
      <p className="dino-eyebrow">La expedición se acerca</p>
      <h2 className="dino-heading">¡Cada vez falta menos para el gran día!</h2>
      <div className="dino-signboard mx-auto mt-10 max-w-4xl bg-dino-earth p-7 text-dino-cream sm:p-10">
        <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-4">
          {values.map((value, i) => (
            <div key={i} className="min-w-0">
              <span className="block break-all text-6xl tabular-nums lg:text-8xl" style={{ fontFamily: "var(--font-display-dino)" }}>
                {String(value).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-lg text-dino-sun">{["Días", "Horas", "Min", "Seg"][i]}</span>
            </div>
          ))}
        </div>
        {seconds === 0 && <p className="mt-6 text-2xl" style={{ fontFamily: "var(--font-display-dino)" }}>¡Llegó el día de la expedición!</p>}
        {!timeConfirmed && <p className="mt-6 text-base text-dino-sun">Hora exacta por confirmar — ¡síguenos de cerca!</p>}
      </div>
    </section>
  );
}
