import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Controla la música de fondo de una invitación. El objeto Audio se prepara
 * apenas cambia `src` (precarga), pero nunca se reproduce solo: `play()`
 * debe invocarse de forma síncrona dentro de un gesto real del usuario
 * (por ejemplo el click de "Abrir invitación") para cumplir con las
 * políticas de autoplay de los navegadores, especialmente Safari/iOS.
 */
export function useBackgroundMusic(src?: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!src) return;

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.45;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [src]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    void audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  }, []);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    void audio.play().then(
      () => setPlaying(true),
      () => setPlaying(false)
    );
  }, [playing]);

  return { playing, play, toggle, hasMusic: Boolean(src) };
}
