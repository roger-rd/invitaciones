
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
    <section className="bg-rose-100 px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Confirmación de asistencia
        </h2>

        <p className="mt-4 text-gray-700">
          Haz clic en el botón para confirmar por WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-white transition hover:bg-green-600"
        >
          Confirmar por WhatsApp
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
}