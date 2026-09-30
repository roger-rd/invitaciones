import { useEffect, useState } from "react";

export default function SpecialCountdown({ targetDate, dateLabel, timeLabel }: { targetDate: string; dateLabel?: string; timeLabel?: string }) {
  const [now, setNow] = useState(Date.now);
  const target = new Date(targetDate).getTime();
  useEffect(() => {
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  if (!Number.isFinite(target)) return null;
  const seconds = Math.max(0, Math.ceil((target - now) / 1000));
  const units = [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60];
  // Respetar la fecha y hora del offset original, también fuera de Chile.
  const localDate = new Date(`${targetDate.slice(0, 19)}Z`);
  const fullDate = dateLabel ?? new Intl.DateTimeFormat("es", { dateStyle: "full", timeZone: "UTC" }).format(localDate);
  const fullTime = timeLabel ?? `${targetDate.slice(11, 16)} hrs`;
  return (
    <section className="vitela-date">
      <h2 className="vitela-label">Un día para compartir</h2>
      <p className="vitela-date-text"><time dateTime={targetDate}>{fullDate}</time></p>
      <p className="vitela-time">{fullTime}</p>
      <p className="sr-only">La celebración será el {fullDate}, a las {fullTime}.</p>
      <div role="timer" aria-live="off" aria-label="Tiempo restante para la celebración">
        {seconds === 0 ? <p className="vitela-today">Hoy es el día</p> : <dl className="vitela-countdown">{units.map((value, i) => <div key={i}><dt className="vitela-label">{["Días", "Horas", "Min", "Seg"][i]}</dt><dd><span className="vitela-digit" key={value}>{String(value).padStart(2, "0")}</span></dd></div>)}</dl>}
      </div>
    </section>
  );
}
