import type { SpecialAdditionalEvent as SpecialAdditionalEventData } from "../../types/event";
import { getVenueLinks } from "../../utils/venueLinks";
import SpecialCalendarButton from "./SpecialCalendarButton";

export default function SpecialAdditionalEvent({ event }: { event: SpecialAdditionalEventData }) {
  const { eyebrow, dateLabel, dateTimeIso, timeLabel, venue, calendar } = event;
  const links = getVenueLinks(venue);

  return (
    <section className="vitela-venue vitela-additional-event">
      <h2 className="vitela-label">{eyebrow ?? "También nos encontraremos"}</h2>
      <p className="vitela-date-text">{dateTimeIso ? <time dateTime={dateTimeIso}>{dateLabel}</time> : dateLabel}</p>
      <p className="vitela-venue-name">{venue.name}</p>
      {venue.address && <p>{venue.address}</p>}
      {venue.city && <p>{venue.city}</p>}
      {timeLabel && <p className="vitela-time">{timeLabel}</p>}
      <div className="vitela-actions">
        <a className="vitela-button vitela-button-primary" href={links.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar en Google Maps</a>
        <a className="vitela-button" href={links.wazeUrl} target="_blank" rel="noopener noreferrer">Abrir en Waze</a>
      </div>
      {dateTimeIso && timeLabel && calendar && (
        <SpecialCalendarButton title={calendar.title} description={calendar.description} startIso={dateTimeIso} location={[venue.name, venue.address, venue.city].filter(Boolean).join(", ")} />
      )}
    </section>
  );
}
