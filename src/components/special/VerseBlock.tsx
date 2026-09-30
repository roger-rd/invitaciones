import type { SpecialCelebrationData } from "../../types/event";

export default function SpecialVerseBlock({ quote }: { quote: NonNullable<SpecialCelebrationData["quote"]> }) {
  return <figure className="vitela-verse"><blockquote><p>«{quote.text}»</p></blockquote>{quote.reference && <figcaption className="vitela-label">{quote.reference}</figcaption>}</figure>;
}
