import { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  src?: string;
}

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [blocked, setBlocked] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.45;

    audioRef.current = audio;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
        setBlocked(false);
      } catch {
        setPlaying(false);
        setBlocked(true);
      }
    };

    void tryAutoplay();

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setPlaying(true);
      setBlocked(false);
    } catch {
      setPlaying(false);
      setBlocked(true);
    }
  };

  if (!src) return null;

  return (
    <button
      type="button"
      onClick={() => void toggleMusic()}
      className="fixed bottom-6 left-6 z-50 rounded-full bg-black/70 px-4 py-3 text-sm text-white shadow-lg backdrop-blur-md transition hover:scale-105"
    >
      {playing ? "⏸ Pausar" : blocked ? "▶ Activar" : "▶ Reproducir"}
    </button>
  );
}