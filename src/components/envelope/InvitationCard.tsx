import DoveEngraving from "./DoveEngraving";
import type { SpecialCelebrationData } from "../../types/event";
import { getVenueLinks } from "../../utils/venueLinks";
import GoldFrame from "./GoldFrame";

export default function InvitationCard({ data }: { data: SpecialCelebrationData }) {
  const mapsUrl = data.venue.mapsUrl || data.venue.searchQuery
    ? getVenueLinks(data.venue).mapsUrl
    : undefined;
  return (
    <article className="champagne-card" aria-labelledby="champagne-heading">
      <GoldFrame />
      <div className="champagne-card-content">
        <header className="champagne-card-header">
          <DoveEngraving variant="full" />
          <h1 tabIndex={-1} id="champagne-heading" className="champagne-heading">{data.heading}</h1>
          <p className="champagne-name">{data.honoreeName}</p>
        </header>
        <span className="champagne-rule" aria-hidden="true" />
        <p className="champagne-date">
          <time dateTime={data.dateTimeIso}>
            {data.dateLabel}{data.dateLabel && data.timeLabel && " · "}
            {data.timeLabel && <span className="champagne-time">{data.timeLabel}</span>}
          </time>
        </p>
        <div className="champagne-venue">
          <p className="champagne-venue-name">{data.venue.name}</p>
          <p>{data.venue.address}{data.venue.address && data.venue.city && <br />}{data.venue.city}</p>
        </div>
        {mapsUrl ? (
          <a className="champagne-location" href={mapsUrl} target="_blank" rel="noopener noreferrer">Ver ubicación</a>
        ) : (
          <button className="champagne-location" type="button" aria-disabled="true" title="Disponible en la invitación real">Ver ubicación</button>
        )}
      </div>
    </article>
  );
}
