import Gallery from "./Gallery";

interface WeddingGallerySectionProps {
  images: string[];
  title?: string;
}

export default function WeddingGallerySection({ images, title }: WeddingGallerySectionProps) {
  if (images.length === 0) return null;

  return (
    <div className="bg-romantic-ivory py-8 sm:py-12">
      <div aria-hidden="true" className="mx-auto h-px w-20 bg-romantic-gold/40" />
      <Gallery images={images} title={title?.trim() || "Momentos que atesoramos"} />
      <div aria-hidden="true" className="mx-auto h-px w-20 bg-romantic-gold/40" />
    </div>
  );
}
