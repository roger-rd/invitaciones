interface EventDetailsProps {
  date: string;
  location: string;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

function formatTime(date: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(date));
}

interface DetailCardProps {
  icon: string;
  label: string;
  value: string;
}

function DetailCard({ icon, label, value }: DetailCardProps) {
  return (
    <div className="rounded-3xl bg-rose-50 p-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="text-3xl">{icon}</div>
      <p className="mt-4 text-xs uppercase tracking-[0.35em] text-rose-400">
        {label}
      </p>
      <p className="mt-3 text-lg font-medium capitalize text-gray-700">
        {value}
      </p>
    </div>
  );
}

export default function EventDetails({
  date,
  location,
}: EventDetailsProps) {
  return (
    <section className="bg-rose-50 px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-4xl border border-rose-100 bg-white p-10 shadow-sm">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            Datos del evento
          </p>
          <h2 className="mt-4 text-3xl font-light md:text-5xl">
            Reserva este momento
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Será una celebración pensada para disfrutar, compartir y crear
            recuerdos inolvidables.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <DetailCard
            icon="📅"
            label="Fecha"
            value={formatDate(date)}
          />

          <DetailCard
            icon="⏰"
            label="Hora"
            value={formatTime(date)}
          />

          <DetailCard
            icon="📍"
            label="Lugar"
            value={location}
          />
        </div>
      </div>
    </section>
  );
}