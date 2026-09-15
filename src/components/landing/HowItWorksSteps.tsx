const steps = [
  ["Elige una categoría", "Encuentra el tipo de celebración que tienes en mente."],
  ["Explora los modelos", "Compara estilos y detalles del catálogo."],
  ["Abre una demo", "Recorre las demostraciones disponibles desde tu teléfono."],
  ["Solicita tu invitación", "Cuéntanos tu idea por el formulario o directamente por WhatsApp."],
  ["Envía tus datos y fotos", "Acordamos el contenido que necesita tu invitación."],
  ["RDRP personaliza", "Preparamos manualmente el diseño con los detalles de tu evento."],
  ["Revisa el resultado", "Recibes una vista previa y coordinamos los ajustes acordados."],
  ["Publicamos tu invitación", "Con tu aprobación, dejamos lista la versión final."],
  [
    "Recibe y comparte el enlace",
    "Te entregamos el enlace por WhatsApp para enviarlo a tus invitados.",
  ],
];
export default function HowItWorksSteps() {
  return (
    <section id="como-funciona" className="landing-section bg-sand/40">
      <div className="landing-container grid gap-12 md:grid-cols-2">
        <div>
          <p className="landing-eyebrow">Te acompañamos en cada paso</p>
          <h2 className="landing-heading">De una idea a un enlace lleno de emoción.</h2>
          <p className="mt-6 max-w-md leading-relaxed">
            La atención y la personalización son manuales. Conversas con RDRP durante el proceso; no
            hay un editor automático.
          </p>
        </div>
        <ol className="landing-timeline">
          {steps.map(([title, description], i) => (
            <li key={title}>
              <span className="landing-step-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
