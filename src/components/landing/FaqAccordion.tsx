import { useState } from "react";
import { faqItems } from "../../data/faq";
import { ChevronDown } from "../icons";
export default function FaqAccordion() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div>
      {faqItems.map((f) => (
        <div key={f.id} className="border-b border-ink/20">
          <h3>
            <button
              type="button"
              id={`faq-button-${f.id}`}
              aria-expanded={open === f.id}
              aria-controls={`faq-panel-${f.id}`}
              onClick={() => setOpen(open === f.id ? null : f.id)}
              className="landing-faq-button"
            >
              <span>{f.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 ${open === f.id ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </h3>
          <div
            id={`faq-panel-${f.id}`}
            role="region"
            aria-labelledby={`faq-button-${f.id}`}
            aria-hidden={open !== f.id}
            hidden={open !== f.id}
            className="pb-6 leading-relaxed"
          >
            {f.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
