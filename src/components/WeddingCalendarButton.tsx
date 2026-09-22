interface WeddingCalendarButtonProps {
  title: string;
  description?: string;
  location?: string;
  startIso: string;
  endIso?: string;
}

function utcStamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function escapeCalendarText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}

// ICS limita las líneas a 75 octetos; no se dividen caracteres UTF-8.
function foldCalendarLine(line: string) {
  const encoder = new TextEncoder();
  let result = "";
  let length = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (length + size > 75) {
      result += "\r\n ";
      length = 1;
    }
    result += character;
    length += size;
  }
  return result;
}

export default function WeddingCalendarButton({ title, description, location, startIso, endIso }: WeddingCalendarButtonProps) {
  const start = new Date(startIso);
  if (!Number.isFinite(start.getTime())) return null;
  // Sin hora final explícita, se reservan tres horas desde el inicio.
  const end = endIso ? new Date(endIso) : new Date(start.getTime() + 3 * 60 * 60 * 1000);
  if (!Number.isFinite(end.getTime()) || end <= start) return null;
  const startUtc = utcStamp(start);
  const endUtc = utcStamp(end);
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${startUtc}/${endUtc}`, details: description ?? "", location: location ?? "" });
  const googleUrl = `https://calendar.google.com/calendar/render?${params}`;

  function downloadCalendar() {
    const content = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//RDRP//Invitacion de boda//ES", "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT", `UID:${crypto.randomUUID()}`, `DTSTAMP:${utcStamp(new Date())}`,
      `DTSTART:${startUtc}`, `DTEND:${endUtc}`, `SUMMARY:${escapeCalendarText(title)}`,
      ...(description ? [`DESCRIPTION:${escapeCalendarText(description)}`] : []),
      ...(location ? [`LOCATION:${escapeCalendarText(location)}`] : []),
      "END:VEVENT", "END:VCALENDAR",
    ].map(foldCalendarLine).join("\r\n") + "\r\n";
    const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "boda.ics";
    document.body.appendChild(anchor);
    try {
      anchor.click();
    } finally {
      anchor.remove();
      // Dar tiempo al navegador para iniciar la descarga antes de liberar el Blob.
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
  }

  const buttonClass = "inline-flex min-h-12 max-w-full cursor-pointer items-center justify-center rounded-full border border-romantic-gold/50 bg-romantic-cream px-6 py-3 text-sm text-romantic-ink hover:bg-romantic-champagne/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink";
  return (
    <div role="group" aria-label="Guardar la fecha en tu calendario" className="flex flex-wrap justify-center gap-3">
      <a href={googleUrl} target="_blank" rel="noreferrer" className={buttonClass}>Agregar a Google Calendar</a>
      <button type="button" onClick={downloadCalendar} className={buttonClass}>Descargar .ics</button>
    </div>
  );
}
