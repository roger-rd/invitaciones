import { featureHighlights } from "../../data/features";
import {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Camera,
  Gift,
  Play,
  Pause,
  ChevronRight,
  Smartphone,
  Navigation,
} from "../icons";
const icons = [
  Play,
  Pause,
  Clock,
  Camera,
  Calendar,
  MapPin,
  MessageCircle,
  Gift,
  ChevronRight,
  Smartphone,
  Navigation,
];
export default function IncludesGrid() {
  return (
    <section className="landing-section landing-container">
      <p className="landing-eyebrow">Mucho más que anunciar una fecha</p>
      <h2 className="landing-heading">Los detalles, en un solo enlace</h2>
      <p className="mt-4">Las características varían según la plantilla y el plan elegido.</p>
      <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {featureHighlights.map((f, i) => {
          const Icon = icons[i] ?? Navigation;
          return (
            <li key={f.id} className="border-t border-ink/20 pt-6">
              <Icon className="mb-4 h-7 w-7" aria-hidden="true" />
              <h3 className="font-semibold">{f.label}</h3>
              <p className="mt-2 text-sm leading-relaxed">{f.description}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
