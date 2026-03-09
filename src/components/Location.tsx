interface LocationProps {
  location: string;
  mapsUrl: string;
}

export default function Location({ location, mapsUrl }: LocationProps) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Ubicación</h2>
        <p className="mt-4 text-lg text-gray-700">{location}</p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-rose-500 px-8 py-4 font-semibold text-white transition hover:bg-rose-600"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
}