import { Pause, Play } from "./icons";

interface MusicPlayerProps {
  playing: boolean;
  onToggle: () => void;
}

export default function MusicPlayer({ playing, onToggle }: MusicPlayerProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      aria-pressed={playing}
      className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cream/25 bg-ink/60 text-cream backdrop-blur-md transition hover:border-gold/60 hover:text-gold sm:left-6 sm:top-6"
    >
      {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
    </button>
  );
}
