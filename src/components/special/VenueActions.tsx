import type { SpecialCelebrationData } from "../../types/event";
import { getVenueLinks } from "../../utils/venueLinks";

export default function SpecialVenueActions({ venue, timeLabel }: { venue: SpecialCelebrationData["venue"]; timeLabel?: string }) {
  const links = getVenueLinks(venue);
  return <section className="vitela-venue"><h2 className="vitela-label">Nos encontraremos en</h2><p className="vitela-venue-name">{venue.name}</p>{venue.city && <p>{venue.city}</p>}{venue.address && <p>{venue.address}</p>}{timeLabel && <p className="vitela-time">{timeLabel}</p>}<div className="vitela-actions"><a className="vitela-button vitela-button-primary" href={links.mapsUrl} target="_blank" rel="noopener noreferrer">Cómo llegar en Google Maps</a><a className="vitela-button" href={links.wazeUrl} target="_blank" rel="noopener noreferrer">Abrir en Waze</a></div></section>;
}
