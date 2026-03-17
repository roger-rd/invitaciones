interface GalleryProps {
  images: string[];
  title?: string;
}

export default function Gallery({
  images,
  title = "Galería especial",
}: GalleryProps) {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-rose-400">
            Recuerdos
          </p>
          <h2 className="mt-4 text-3xl font-light md:text-5xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            Un vistazo a momentos llenos de alegría, cariño y emoción.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <article
              key={`${image}-${index}`}
              className="group overflow-hidden rounded-4xl bg-rose-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={image}
                  alt={`Galería ${index + 1}`}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}