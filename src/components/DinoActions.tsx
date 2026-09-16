import { Gift, MapPin, MessageCircle } from "./icons";

interface DinoActionsProps {
  mapsUrl?: string;
  phone: string;
  eventTitle: string;
}

export default function DinoActions({ mapsUrl, phone, eventTitle }: DinoActionsProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, confirmo mi asistencia a la expedición de ${eventTitle}`)}`;
  const hasMapsLink = Boolean(mapsUrl);
  return (
    <section className="dino-scene bg-dino-cream text-dino-earth" id="confirmacion">
      <p className="dino-eyebrow">Reserva tu lugar en la expedición</p>
      <h2 className="dino-heading">¿Vienes a la gran aventura?</h2>
      <p className="mx-auto mt-5 max-w-xl text-xl">Confirma tu asistencia. ¡Queremos compartir el rancho contigo!</p>
      <div className={`mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 ${hasMapsLink ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
        {hasMapsLink && (
          <a className="dino-button flex-col bg-dino-sky py-8" href={mapsUrl} target="_blank" rel="noreferrer">
            <MapPin aria-hidden="true" className="h-10 w-10" />Ver ubicación
          </a>
        )}
        <a className="dino-button flex-col bg-dino-sun py-8" href={whatsappUrl} target="_blank" rel="noreferrer">
          <MessageCircle aria-hidden="true" className="h-10 w-10" />Confirmar asistencia
        </a>
        <a className="dino-button flex-col bg-dino-earth py-8 text-dino-cream" href="#regalos">
          <Gift aria-hidden="true" className="h-10 w-10" />Ver sugerencias de regalos
        </a>
      </div>
    </section>
  );
}
