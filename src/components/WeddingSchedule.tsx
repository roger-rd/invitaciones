interface WeddingScheduleProps {
  date: string;
}

function formatInEventZone(iso: string, options: Intl.DateTimeFormatOptions) {
  const date = new Date(iso);
  if (!Number.isFinite(date.getTime())) return null;
  const offsetMatch = iso.match(/([+-]\d{2}):?(\d{2})$/);
  const offsetMinutes = offsetMatch
    ? (offsetMatch[1].startsWith("-") ? -1 : 1) * (Math.abs(Number(offsetMatch[1])) * 60 + Number(offsetMatch[2]))
    : 0;
  const shifted = new Date(date.getTime() + offsetMinutes * 60000);
  return new Intl.DateTimeFormat("es", { ...options, timeZone: "UTC" }).format(shifted);
}

export default function WeddingSchedule({ date }: WeddingScheduleProps) {
  const day = new Date(date);
  const valid = Number.isFinite(day.getTime());

  return (
    <section aria-label="Fecha de nuestra boda" className="bg-romantic-ivory px-6 py-20 text-center text-romantic-ink sm:py-28">
      <h2 className="text-xs uppercase tracking-[.25em]">Nuestro gran día</h2>
      {valid ? (
        <time dateTime={date} className="mx-auto mt-8 flex max-w-3xl flex-col gap-4 font-display-romantic">
          <span className="text-2xl capitalize sm:text-3xl">{formatInEventZone(date, { weekday: "long" })}</span>
          <span className="text-[clamp(5rem,18vw,8rem)] leading-none tabular-nums">{formatInEventZone(date, { day: "numeric" })}</span>
          <span className="text-2xl sm:text-3xl">{formatInEventZone(date, { month: "long", year: "numeric" })}</span>
        </time>
      ) : (
        <p className="mt-8 font-display-romantic text-3xl">Fecha por confirmar</p>
      )}
      <div aria-hidden="true" className="mx-auto mt-10 h-px w-20 bg-romantic-gold/50" />
    </section>
  );
}
