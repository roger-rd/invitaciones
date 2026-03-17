interface RSVPProps {
  phone: string;
  title: string;
}

export default function RSVP({ phone, title }: RSVPProps) {
  const message = encodeURIComponent(
    `Hola, confirmo mi asistencia al evento: ${title}`
  );

  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <section className="bg-rose-50 px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-4xl border border-rose-100 bg-white p-10 text-center shadow-sm">
        <div className="text-4xl">💌</div>

        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-rose-400">
          Confirmación
        </p>

        <h2 className="mt-4 text-3xl font-light md:text-4xl">
          Confirma tu asistencia
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Será un placer contar contigo en esta celebración tan especial.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-medium text-white transition hover:bg-green-600"
        >
          Confirmar por WhatsApp
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:bg-green-600"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}