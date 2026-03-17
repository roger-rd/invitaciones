interface LocationProps {
  location: string;
  mapsUrl: string;
}

export default function Location({ location, mapsUrl }: LocationProps) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-4xl rounded-4xl border border-rose-100 bg-rose-50/70 p-10 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
          Ubicación
        </p>

        <h2 className="mt-4 text-3xl font-light md:text-4xl">{location}</h2>

        <p className="mt-4 text-lg text-gray-600">
          Te espero para compartir una tarde inolvidable llena de alegría y celebración.
        </p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-block rounded-full bg-rose-500 px-8 py-4 font-medium text-white transition hover:bg-rose-600"
        >
          Ver ubicación
        </a>
      </div>
    </section>
  );
}