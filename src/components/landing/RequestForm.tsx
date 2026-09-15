import { useState, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { categories } from "../../data/categories";
import { catalogModels } from "../../data/catalog";
import { plans } from "../../data/plans";
import { buildModelRequestMessage, buildWhatsAppUrl } from "../../config/whatsapp";
export default function RequestForm() {
  const [params] = useSearchParams();
  const initialModel = catalogModels.find((m) => m.slug === params.get("modelo"));
  const initialCategory = categories.find((c) => c.id === params.get("categoria"));
  const [category, setCategory] = useState(initialCategory?.id ?? initialModel?.category ?? "");
  const [model, setModel] = useState(initialModel?.slug ?? "");
  const [preparedUrl, setPreparedUrl] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const selectedModel = catalogModels.find((m) => m.slug === model);
    const selectedPlan = plans.find((p) => p.id === value("plan"));
    const intro = buildModelRequestMessage({
      modelName: selectedModel?.title,
      category: categories.find((c) => c.id === category)?.label,
      plan: selectedPlan?.name,
    });
    const message = [
      intro,
      "",
      `Mi nombre: ${value("nombre")}`,
      `Festejado/a o pareja: ${value("celebrante")}`,
      `Fecha del evento: ${value("fecha")}`,
      `Medio de contacto preferido: ${value("contacto")}`,
      value("comentario") ? `Comentario: ${value("comentario")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = buildWhatsAppUrl(message);
    setPreparedUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <section id="solicitar" className="landing-section bg-sand/60">
      <div className="landing-container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="landing-eyebrow">Demos el primer paso</p>
          <h2 className="landing-heading">Cuéntanos qué vas a celebrar.</h2>
          <p id="request-help" className="mt-6 leading-relaxed">
            Al enviar, se abrirá WhatsApp con tu mensaje listo para confirmar y enviar.
          </p>
          <p className="mt-4 leading-relaxed">
            Este formulario prepara tu consulta; no la envía a un servidor. Te atenderemos
            manualmente para acordar el diseño, el contenido y el plan.
          </p>
          <a
            className="landing-button landing-button-outline mt-7"
            href={buildWhatsAppUrl(
              "Hola, prefiero conversar directamente sobre mi invitación digital.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            Escribir directo por WhatsApp
          </a>
        </div>
        <form
          onSubmit={submit}
          aria-describedby="request-help"
          className="landing-form grid gap-5 sm:grid-cols-2"
        >
          <label>
            Tu nombre <span className="text-sm">(obligatorio)</span>
            <input name="nombre" autoComplete="name" required maxLength={120} />
          </label>
          <label>
            Tipo de celebración{" "}
            <select
              name="categoria"
              required
              value={category}
              onChange={(e) => {
                const next = e.target.value as typeof category;
                setCategory(next);
                if (catalogModels.find((m) => m.slug === model)?.category !== next) setModel("");
              }}
            >
              <option value="">Selecciona una categoría</option>
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Nombre del festejado o pareja
            <input name="celebrante" required maxLength={180} />
          </label>
          <label>
            Fecha del evento
            <input type="date" name="fecha" required />
          </label>
          <label>
            Modelo de interés (opcional)
            <select
              name="modelo"
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                const selected = catalogModels.find((m) => m.slug === e.target.value);
                if (selected) setCategory(selected.category);
              }}
            >
              <option value="">Quiero que me orienten</option>
              {catalogModels.map((m) => (
                <option key={m.id} value={m.slug}>
                  {m.title}
                  {m.status === "coming-soon" ? " (próximamente)" : ""}
                </option>
              ))}
            </select>
          </label>
          <label>
            Plan de interés (opcional)
            <select
              name="plan"
              defaultValue={plans.find((p) => p.id === params.get("plan"))?.id ?? ""}
            >
              <option value="">Necesito orientación</option>
              {plans.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label className="sm:col-span-2">
            Medio de contacto preferido
            <input
              name="contacto"
              required
              defaultValue="WhatsApp"
              maxLength={200}
              aria-describedby="contact-help"
            />
            <span id="contact-help" className="text-sm font-normal">
              Puedes indicar WhatsApp, llamada o correo y el dato de contacto correspondiente.
            </span>
          </label>
          <label className="sm:col-span-2">
            Comentario (opcional)
            <textarea
              name="comentario"
              rows={4}
              maxLength={2000}
              placeholder="Tu idea, estilo o cualquier detalle que quieras compartir"
            />
          </label>
          <div className="sm:col-span-2">
            <button className="landing-button landing-button-dark" type="submit">
              Preparar mensaje en WhatsApp
            </button>
            <p className="mt-3 text-sm">
              Confirma y envía el mensaje en WhatsApp para iniciar la conversación.
            </p>
            {preparedUrl && (
              <div role="status" className="mt-4">
                <p>Tu mensaje está preparado. Si no se abrió la pestaña, usa este enlace:</p>
                <a
                  className="landing-navlink underline"
                  href={preparedUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir mi mensaje en WhatsApp
                </a>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
