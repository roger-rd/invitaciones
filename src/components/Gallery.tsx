interface GalleryProps {
  images: string[];
  title?: string;
}

export default function Gallery({
  images,
  title = "Nuestra galería",
}: GalleryProps) {
  return (
    <section className="bg-rose-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="overflow-hidden rounded-2xl shadow-md"
            >
              <img
                src={image}
                alt={`Galería ${index + 1}`}
                className="h-80 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}