import { useState, type FormEvent } from "react";
import { buildKidsDigitalRequestMessage, buildWhatsAppUrl, RDRP_WHATSAPP_NUMBER } from "../../config/whatsapp";

export default function KidsDigitalRequestForm({ modelName }: { modelName: string }) {
  const [sameWhatsapp, setSameWhatsapp] = useState(false);
  const [preparedUrl, setPreparedUrl] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const message = buildKidsDigitalRequestMessage({
      modelName,
      clientName: value("clientName"),
      clientWhatsapp: value("clientWhatsapp"),
      sameWhatsapp: data.get("sameWhatsapp") === "on",
      rsvpWhatsapp: value("rsvpWhatsapp"),
      childName: value("childName"),
      date: value("date"),
      location: value("location"),
      age: value("age"),
      phrase: value("phrase"),
      time: value("time"),
      mapsUrl: value("mapsUrl"),
      giftMessage: value("giftMessage"),
      giftSuggestions: value("giftSuggestions"),
      comment: value("comment"),
    });
    const url = buildWhatsAppUrl(message, RDRP_WHATSAPP_NUMBER);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="solicitar" className="landing-section bg-sand/60">
      <div className="landing-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="landing-eyebrow">Infantiles · Digitales</p>
          <h2 className="landing-heading">{modelName}</h2>
          <p id="kids-digital-request-help" className="mt-6 leading-relaxed">
            Cuéntanos los detalles de la fiesta. Prepararemos un mensaje para RDRP Te Invito; revísalo y envíalo en WhatsApp para iniciar tu pedido.
          </p>
          <p className="mt-4 leading-relaxed">Tu WhatsApp nos permite gestionar el pedido contigo. El número de confirmaciones es el que usarán tus invitados.</p>
        </div>
        <form onSubmit={submit} aria-describedby="kids-digital-request-help" className="landing-form grid gap-5 sm:grid-cols-2">
          <label>Tu nombre (obligatorio)<input name="clientName" autoComplete="name" required maxLength={120} pattern=".*\S.*" /></label>
          <label>Tu WhatsApp (obligatorio)<input name="clientWhatsapp" type="tel" autoComplete="tel" required maxLength={30} pattern="[+]?[0-9][0-9\s\-]{6,28}" placeholder="Ej. +56 9 1234 5678" aria-describedby="kids-digital-phone-help" /><span id="kids-digital-phone-help" className="text-sm font-normal">Incluye el código de país.</span></label>
          <label className="confetti-number-choice sm:col-span-2">
            <input type="checkbox" name="sameWhatsapp" checked={sameWhatsapp} onChange={(event) => setSameWhatsapp(event.target.checked)} />
            <span>Es el mismo número que recibirá las confirmaciones de asistencia de los invitados</span>
          </label>
          <label className="sm:col-span-2" hidden={sameWhatsapp} style={sameWhatsapp ? { display: "none" } : undefined}>
            WhatsApp que recibirá las confirmaciones de asistencia de los invitados (obligatorio)
            <input name="rsvpWhatsapp" type="tel" autoComplete="off" required={!sameWhatsapp} disabled={sameWhatsapp} maxLength={30} pattern="[+]?[0-9][0-9\s\-]{6,28}" placeholder="Incluye el código de país" />
          </label>
          <label>Nombre del niño o niña (obligatorio)<input name="childName" required maxLength={120} pattern=".*\S.*" /></label>
          <label>Fecha del cumpleaños (obligatorio)<input name="date" type="date" required /></label>
          <label className="sm:col-span-2">Nombre y dirección del lugar (obligatorio)<input name="location" required maxLength={500} pattern=".*\S.*" /></label>
          <label>Edad que cumple (opcional)<input name="age" type="number" min={0} max={120} step={1} /></label>
          <label>Hora del cumpleaños (opcional)<input name="time" type="time" /><span className="text-sm font-normal">Si la dejas vacía, indicaremos “hora por confirmar”.</span></label>
          <label className="sm:col-span-2">Frase breve de invitación (opcional)<input name="phrase" maxLength={300} /></label>
          <label className="sm:col-span-2">Enlace de Google Maps del lugar (opcional)<input name="mapsUrl" type="url" maxLength={2000} placeholder="https://maps.google.com/..." /></label>
          <label className="sm:col-span-2">Mensaje sobre regalos (opcional)<textarea name="giftMessage" rows={2} maxLength={600} /></label>
          <label className="sm:col-span-2">Sugerencias de regalo (opcional)<textarea name="giftSuggestions" rows={2} maxLength={600} placeholder="Por ejemplo: cuentos, lápices de colores, juegos de mesa" /></label>
          <label className="sm:col-span-2">Comentario adicional (opcional)<textarea name="comment" rows={3} maxLength={2000} /></label>
          <div className="sm:col-span-2">
            <button className="landing-button landing-button-dark" type="submit">Preparar mensaje en WhatsApp</button>
            <p className="mt-3 text-sm">Confirma y envía el mensaje a RDRP Te Invito en WhatsApp.</p>
            {preparedUrl && <div role="status" className="mt-4"><p>Tu mensaje está preparado. Si no se abrió la pestaña, usa este enlace:</p><a className="landing-navlink underline" href={preparedUrl} target="_blank" rel="noreferrer">Abrir mi mensaje en WhatsApp</a></div>}
          </div>
        </form>
      </div>
    </section>
  );
}
