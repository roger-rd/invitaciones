import { useRef, type KeyboardEvent } from "react";
import type { CatalogExperienceType } from "../../types/catalog";

interface ExperienceTypeTabsProps {
  active: CatalogExperienceType;
  onChange: (value: CatalogExperienceType) => void;
  panelId: string;
}

const tabs: { value: CatalogExperienceType; label: string }[] = [
  { value: "digital", label: "Digitales" },
  { value: "interactive", label: "Interactivas" },
  { value: "video", label: "Video invitaciones" },
];

export default function ExperienceTypeTabs({ active, onChange, panelId }: ExperienceTypeTabsProps) {
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowRight": next = (index + 1) % tabs.length; break;
      case "ArrowLeft": next = (index - 1 + tabs.length) % tabs.length; break;
      case "Home": next = 0; break;
      case "End": next = tabs.length - 1; break;
      default: return;
    }
    event.preventDefault();
    onChange(tabs[next].value);
    buttons.current[next]?.focus();
  }

  return (
    <div role="tablist" aria-label="Tipo de experiencia" className="mb-8 grid grid-cols-3 gap-2">
      {tabs.map(({ value, label }, index) => (
        <button
          key={value}
          ref={(button) => { buttons.current[index] = button; }}
          type="button"
          role="tab"
          id={`${panelId}-${value}-tab`}
          aria-selected={active === value}
          aria-controls={panelId}
          tabIndex={active === value ? 0 : -1}
          onClick={() => onChange(value)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className={`min-h-12 min-w-0 cursor-pointer rounded-xl border px-2 py-3 text-center text-xs font-semibold leading-relaxed [overflow-wrap:anywhere] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:text-sm ${active === value ? "border-ink bg-ink text-cream" : "border-ink/30 bg-cream text-ink hover:bg-sand"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
