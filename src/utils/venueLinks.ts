import type { SpecialCelebrationData } from "../types/event";

export function getVenueLinks(venue: SpecialCelebrationData["venue"]) {
  const searchQuery = venue.searchQuery || [venue.name, venue.address, venue.city].filter(Boolean).join(", ");
  return {
    mapsUrl: venue.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`,
    wazeUrl: venue.wazeUrl || `https://waze.com/ul?q=${encodeURIComponent(searchQuery)}&navigate=yes`,
  };
}
