import { useEffect, useState } from "react";
import Reveal from "./Reveal";

export default function KidsCountdown({ targetDate }: { targetDate: string }) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer); }, []);
  const difference = new Date(targetDate).getTime() - now;
  const seconds = Number.isFinite(difference) ? Math.max(0, Math.floor(difference / 1000)) : 0;
  const values = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  return (
    <section className="kids-scene bg-circus-yellow">
      <Reveal><p className="kids-eyebrow">Comienza la cuenta atrás</p><h2 className="kids-heading">¡Cada vez falta menos para la gran fiesta!</h2>
        <div className="kids-marquee mx-auto mt-10 max-w-4xl rounded-[2rem] bg-circus-navy p-7 text-circus-cream sm:p-10">
          <div className="grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-4">{values.map((value, i) => <div key={i} className="min-w-0"><span className="block break-all font-display-kids text-6xl tabular-nums lg:text-8xl">{String(value).padStart(2, "0")}</span><span className="mt-2 block text-lg text-circus-yellow">{["Días", "Horas", "Min", "Seg"][i]}</span></div>)}</div>
          {seconds === 0 && <p className="mt-6 font-display-kids text-2xl">¡Llegó el día de celebrar!</p>}
        </div>
      </Reveal>
    </section>
  );
}
