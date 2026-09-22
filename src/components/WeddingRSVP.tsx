import { useId, useState, type FormEvent } from "react";
import type { WeddingRsvpData } from "../types/event";
import { buildWhatsAppUrl } from "../config/whatsapp";

interface WeddingRSVPProps extends WeddingRsvpData {
  brideAndGroom: [string, string];
}

function buildRsvpMessage(brideAndGroom: [string, string], name: string, count: number, comment: string) {
  return [
    `Hola, confirmo mi asistencia a la boda de ${brideAndGroom[0]} & ${brideAndGroom[1]}.`,
    `Mi nombre: ${name.trim()}.`,
    `Asistiremos ${count} persona(s).`,
    comment.trim() ? `Comentario o restricción alimentaria: ${comment.trim()}` : "",
  ].filter(Boolean).join("\n");
}

export default function WeddingRSVP({ whatsappNumber, brideAndGroom, deadline, notes }: WeddingRSVPProps) {
  const helpId = useId();
  const [preparedUrl, setPreparedUrl] = useState("");
  const deadlineDate = deadline ? new Date(deadline) : undefined;
  const deadlineLabel = deadlineDate && Number.isFinite(deadlineDate.getTime())
    ? new Intl.DateTimeFormat("es", { day: "numeric", month: "long", year: "numeric", ...(/^\d{4}-\d{2}-\d{2}$/.test(deadline!) ? { timeZone: "UTC" } : {}) }).format(deadlineDate)
    : undefined;
  const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-romantic-gold/50 bg-romantic-cream px-4 py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-romantic-ink";

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const count = Number(data.get("count"));
    const nameInput = form.elements.namedItem("name") as HTMLInputElement;
    nameInput.setCustomValidity(name ? "" : "Escribe tu nombre.");
    if (!form.reportValidity() || !Number.isSafeInteger(count) || count < 1) return;
    const url = buildWhatsAppUrl(buildRsvpMessage(brideAndGroom, name, count, String(data.get("comment") ?? "")), whatsappNumber);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section aria-label="Confirmación de asistencia" className="bg-romantic-ivory px-6 py-20 text-romantic-ink sm:py-28">
      <div className="mx-auto max-w-xl">
        <h2 className="text-center font-display-romantic text-3xl sm:text-4xl">¿Nos acompañas?</h2>
        {deadlineLabel && <p className="mt-6 text-center leading-relaxed">Por favor confirma antes del <time dateTime={deadline}>{deadlineLabel}</time>.</p>}
        {notes?.trim() && <p className="mt-4 whitespace-pre-line text-center text-sm leading-relaxed">{notes}</p>}
        <form onSubmit={submit} onChange={() => setPreparedUrl("")} aria-describedby={helpId} className="mt-10 grid gap-6">
          <label className="text-sm">Nombre del invitado (obligatorio)<input name="name" type="text" required autoComplete="name" maxLength={120} onInput={(event) => event.currentTarget.setCustomValidity("")} className={fieldClass} /></label>
          <label className="text-sm">Cantidad de asistentes<input name="count" type="number" required min={1} step={1} defaultValue={1} className={fieldClass} /></label>
          <label className="text-sm">Comentario o restricción alimentaria (opcional)<textarea name="comment" rows={3} maxLength={500} className={fieldClass} /></label>
          <button type="submit" className="min-h-12 cursor-pointer rounded-full bg-romantic-ink px-6 py-3 text-romantic-cream hover:bg-romantic-ink/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink">Confirmar por WhatsApp</button>
          <p id={helpId} className="text-sm leading-relaxed">Se abrirá WhatsApp con tu mensaje preparado. Envíalo allí para confirmar tu asistencia.</p>
          <div role="status" className="text-sm leading-relaxed">
            {preparedUrl && <><p>Tu mensaje está preparado. Si no se abrió WhatsApp, usa este enlace:</p><a href={preparedUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-12 items-center underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-romantic-ink">Abrir mi mensaje en WhatsApp</a></>}
          </div>
        </form>
      </div>
    </section>
  );
}
