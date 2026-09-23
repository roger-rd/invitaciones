import type { WeddingStoryChapter } from "../types/event";
import Reveal from "./Reveal";

interface WeddingStoryChaptersProps {
  chapters?: WeddingStoryChapter[];
}

export default function WeddingStoryChapters({ chapters }: WeddingStoryChaptersProps) {
  if (!chapters?.length) return null;

  return (
    <section aria-label="Nuestra historia" className="bg-romantic-ivory px-6 py-20 text-romantic-ink sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center sm:mb-24">
          <h2 className="font-display-romantic text-3xl leading-tight sm:text-4xl">Nuestra historia</h2>
        </Reveal>

        <div className="space-y-16 sm:space-y-24">
          {chapters.map((chapter, index) => (
            <article
              key={`${chapter.year ?? ""}-${chapter.title}-${index}`}
              className={`grid items-center gap-10 [overflow-wrap:anywhere] md:gap-16 ${chapter.photo ? "md:grid-cols-2" : ""} ${index > 0 ? "border-t border-romantic-gold/30 pt-16 sm:pt-24" : ""}`}
            >
              {chapter.photo && (
                <Reveal className={`min-w-0 ${index % 2 === 1 ? "md:col-start-2 md:row-start-1" : ""}`}>
                  <figure>
                    <img
                      src={chapter.photo.src}
                      alt={chapter.photo.alt}
                      width={chapter.photo.width}
                      height={chapter.photo.height}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: chapter.photo.position ?? "center" }}
                      className="block h-auto w-full object-cover"
                    />
                  </figure>
                </Reveal>
              )}

              <Reveal className={`min-w-0 ${chapter.photo && index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}`}>
                {chapter.year && (
                  <p className="mb-4 font-display-romantic text-sm tracking-[.2em] text-romantic-gold">
                    {chapter.year}
                  </p>
                )}
                <h3 className="font-display-romantic text-3xl leading-tight sm:text-4xl">{chapter.title}</h3>
                <p className="mt-6 whitespace-pre-line font-display-romantic text-xl leading-relaxed">{chapter.text}</p>
                {chapter.highlightQuote && (
                  <blockquote className="mt-8 border-l border-romantic-gold/30 pl-6 font-display-romantic text-2xl leading-relaxed text-romantic-gold italic sm:text-3xl">
                    <p className="whitespace-pre-line">{chapter.highlightQuote}</p>
                  </blockquote>
                )}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
