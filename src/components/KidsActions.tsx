import { Gift, MapPin, MessageCircle } from "./icons";
import Reveal from "./Reveal";

interface KidsActionsProps { mapsUrl: string; phone: string; eventTitle: string }

export default function KidsActions({ mapsUrl, phone, eventTitle }: KidsActionsProps) {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(`Hola, confirmo mi asistencia al evento de ${eventTitle}`)}`;
  return (
    <section className="kids-scene bg-circus-cream" id="confirmacion"><Reveal><p className="kids-eyebrow">Reserva tu lugar en primera fila</p><h2 className="kids-heading">¿Vienes a la gran fiesta?</h2><p className="mx-auto mt-5 max-w-xl text-xl">Confirma tu asistencia. ¡Queremos compartir la función contigo!</p>
      <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-3">
        <a className="kids-button flex-col bg-circus-sky py-8" href={mapsUrl} target="_blank" rel="noreferrer"><MapPin aria-hidden="true" className="h-10 w-10" />Ver ubicación</a>
        <a className="kids-button flex-col bg-circus-yellow py-8" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" className="h-10 w-10" />Confirmar asistencia</a>
        <a className="kids-button flex-col bg-circus-navy py-8 text-circus-cream" href="#regalos"><Gift aria-hidden="true" className="h-10 w-10" />Ver sugerencias de regalos</a>
      </div>
    </Reveal></section>
  );
}
