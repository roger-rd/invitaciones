import { useEffect, useMemo, useState } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  const items = useMemo(
    () => [
      { label: "Días", value: timeLeft.days },
      { label: "Horas", value: timeLeft.hours },
      { label: "Minutos", value: timeLeft.minutes },
      { label: "Segundos", value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Faltan</h2>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-rose-50 p-6 shadow-sm"
            >
              <p className="text-4xl font-bold md:text-5xl">{item.value}</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}