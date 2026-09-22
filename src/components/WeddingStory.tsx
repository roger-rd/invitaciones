import type { WeddingStoryData } from "../types/event";

function formatStoryDate(value?: string) {
  if (!value?.trim()) return null;
  const date = new Date(value);
  if (!Number.isFinite(date.getTime())) return null;

  return new Intl.DateTimeFormat("es", {
    day: "numeric",
    month: "long",
    year: "numeric",
    // Las fechas sin hora representan un día del calendario, no un instante local.
    ...(/^\d{4}-\d{2}-\d{2}$/.test(value) ? { timeZone: "UTC" } : {}),
  }).format(date);
}

export default function WeddingStory({ title, text, metDate, engagementDate, photos, hide }: WeddingStoryData) {
  const storyPhotos = (photos ?? []).filter((photo) => photo.trim()).slice(0, 2);
  if (hide || (!title?.trim() && !text?.trim() && storyPhotos.length === 0)) return null;

  const heading = title?.trim() || "Nuestra historia";
  const metLabel = formatStoryDate(metDate);
  const engagementLabel = formatStoryDate(engagementDate);
  const hasPhotos = storyPhotos.length > 0;

  return (
    <section aria-label={heading} className="bg-romantic-ivory px-6 py-20 text-romantic-ink sm:py-28">
      <div className={`mx-auto max-w-6xl ${hasPhotos ? "grid items-center gap-12 md:grid-cols-2 md:gap-16" : "text-center"}`}>
        <div className={hasPhotos ? "min-w-0" : "mx-auto max-w-3xl"}>
          <div aria-hidden="true" className={`mb-8 h-px w-16 bg-romantic-gold/50 ${hasPhotos ? "" : "mx-auto"}`} />
          <h2 className="font-display-romantic text-3xl leading-tight [overflow-wrap:anywhere] sm:text-4xl">{heading}</h2>
          {text?.trim() && <p className="mt-8 whitespace-pre-line font-display-romantic text-xl leading-relaxed [overflow-wrap:anywhere]">{text}</p>}
          {(metLabel || engagementLabel) && (
            <div className="mt-8 space-y-3 text-sm leading-relaxed">
              {metLabel && <p>Se conocieron el <time dateTime={metDate}>{metLabel}</time></p>}
              {engagementLabel && <p>Nos comprometimos el <time dateTime={engagementDate}>{engagementLabel}</time></p>}
            </div>
          )}
        </div>
        {hasPhotos && (
          <div className={storyPhotos.length === 2 ? "grid grid-cols-[1.2fr_1fr] items-start gap-4 sm:gap-6" : "mx-auto w-full max-w-md"}>
            {storyPhotos.map((photo, index) => (
              <figure key={`${photo}-${index}`} className={index === 1 ? "mt-16" : ""}>
                <img src={photo} alt={`Recuerdo de nuestra historia ${index + 1}`} width={900} height={1200} loading="lazy" decoding="async" className="aspect-[3/4] w-full object-cover" />
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
