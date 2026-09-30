import { useEffect, useRef } from "react";

interface SpecialCalendarProps {
  title: string;
  description?: string;
  location?: string;
  startIso: string;
  durationHours?: number;
}
function utcStamp(date: Date) {
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}
function escapeText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\r\n|\r|\n/g, "\\n").replace(/;/g, "\\;").replace(/,/g, "\\,");
}
// RFC 5545: cada continuación cuenta su espacio inicial dentro de los 75 octetos.
function foldLine(line: string) {
  const encoder = new TextEncoder();
  let result = "";
  let length = 0;
  for (const character of line) {
    const size = encoder.encode(character).length;
    if (length + size > 75) { result += "\r\n "; length = 1; }
    result += character;
    length += size;
  }
  return result;
}

export default function SpecialCalendarButton({ title, description, location, startIso, durationHours = 2 }: SpecialCalendarProps) {
  const downloads = useRef(new Map<number, string>());
  useEffect(() => {
    const pending = downloads.current;
    return () => { pending.forEach((url, timer) => { window.clearTimeout(timer); URL.revokeObjectURL(url); }); pending.clear(); };
  }, []);
  const start = new Date(startIso);
  const end = new Date(start.getTime() + durationHours * 3600000);
  if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || end <= start) return null;
  const params = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${utcStamp(start)}/${utcStamp(end)}`, details: description ?? "", location: location ?? "" });

  function downloadCalendar() {
    const content = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//RDRP//Invitacion//ES", "CALSCALE:GREGORIAN", "BEGIN:VEVENT", `UID:${crypto.randomUUID()}@rdrp`, `DTSTAMP:${utcStamp(new Date())}`, `DTSTART:${utcStamp(start)}`, `DTEND:${utcStamp(end)}`, `SUMMARY:${escapeText(title)}`, `DESCRIPTION:${escapeText(description ?? "")}`, `LOCATION:${escapeText(location ?? "")}`, "END:VEVENT", "END:VCALENDAR"].map(foldLine).join("\r\n") + "\r\n";
    const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "invitacion.ics";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    const timer = window.setTimeout(() => { URL.revokeObjectURL(url); downloads.current.delete(timer); }, 1000);
    downloads.current.set(timer, url);
  }
  return <details className="vitela-calendar"><summary className="vitela-button">Agendar en calendario <span aria-hidden="true">＋</span></summary><div className="vitela-actions"><a className="vitela-button" href={`https://calendar.google.com/calendar/render?${params}`} target="_blank" rel="noopener noreferrer">Agregar a Google Calendar</a><button className="vitela-button" type="button" onClick={downloadCalendar}>Descargar .ics</button></div></details>;
}
