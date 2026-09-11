import { useId, useState } from "react";
import Reveal from "./Reveal";

interface RevealMomentProps { message?: string; mediaUrl?: string; mediaType?: "image" | "video" }

export default function RevealMoment({ message, mediaUrl, mediaType }: RevealMomentProps) {
  const [open, setOpen] = useState(false);
  const [failedMedia, setFailedMedia] = useState<string>();
  const id = useId();
  return (
    <section className="kids-scene kids-night text-circus-cream"><Reveal className="mx-auto max-w-2xl">
      <p className="kids-eyebrow text-circus-yellow">Un secreto detrás del telón</p><h2 className="kids-heading">¡Levanta las cortinas de la carpa!</h2>
      <div className="kids-surprise relative mt-10 overflow-hidden rounded-t-[3rem] border-8 border-circus-yellow bg-circus-cream text-circus-navy" data-open={open}>
        <div id={id} aria-hidden={!open} inert={!open} className="kids-surprise-content flex min-h-80 flex-col items-center justify-center gap-6 p-7">
          <p className="font-display-kids text-3xl leading-relaxed">{message || "¡La sorpresa eres tú! Con tu sonrisa, esta será la función más bonita del mundo."}</p>
          {mediaUrl && failedMedia !== mediaUrl && (mediaType === "video" ? <video key={mediaUrl} src={mediaUrl} controls preload="none" aria-label="Sorpresa de la fiesta" onError={() => setFailedMedia(mediaUrl)} className="w-full rounded-xl" /> : <img src={mediaUrl} alt="Una sorpresa para los invitados" loading="lazy" onError={() => setFailedMedia(mediaUrl)} className="max-h-96 w-full rounded-xl object-contain" />)}
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0"><div className="kids-curtain kids-curtain-left" /><div className="kids-curtain kids-curtain-right" /></div>
        {!open && <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center"><svg viewBox="0 0 100 100" className="h-24 w-24" fill="none" stroke="#FFC94D" strokeWidth="5"><path d="M10 10Q50 80 90 10M50 45v25m0-5-12 25h24Z" /></svg></span>}
      </div>
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className="kids-button mt-7 bg-circus-yellow text-circus-navy">{open ? "Cerrar sorpresa" : "Toca para descubrir la sorpresa"}</button>
    </Reveal></section>
  );
}
