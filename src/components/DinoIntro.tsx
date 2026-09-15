import { useState } from "react";
import DinoDecor from "./DinoDecor";

interface DinoIntroProps {
  title: string;
  ranchName?: string;
  age?: number;
  phrase?: string;
  onOpen: () => void;
}

export default function DinoIntro({ title, ranchName, age, phrase, onOpen }: DinoIntroProps) {
  const [opening, setOpening] = useState(false);
  return (
    <main className="dino-intro dino-dusk relative isolate flex min-h-svh items-center justify-center overflow-hidden px-6 py-24 text-center text-dino-cream" data-open={opening}>
      <div aria-hidden="true" className="dino-cloud dino-cloud-a" style={{ top: "10%", left: "10%", width: "90px", height: "32px" }} />
      <div aria-hidden="true" className="dino-cloud dino-cloud-b" style={{ top: "18%", right: "12%", width: "70px", height: "26px" }} />
      <DinoDecor variant="intro" />
      <div aria-hidden="true" className="dino-fence absolute" />
      <div aria-hidden="true" className="absolute inset-0 bg-dino-earth/35" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[32%] overflow-hidden">
        <div className="dino-gate dino-gate-left" />
        <div className="dino-gate dino-gate-right" />
      </div>

      <div className="relative mx-auto w-full max-w-xl px-4 py-8">
        <p className="dino-eyebrow text-dino-sun">Bienvenido al valle</p>
        <h1 className="dino-heading mt-4 font-bold text-dino-cream">{ranchName ?? title}</h1>
        {age !== undefined && (
          <p className="mt-4 text-2xl font-bold" style={{ fontFamily: "var(--font-display-dino)" }}>
            ¡{title} cumple {age} añitos!
          </p>
        )}
        <p className="mt-5 text-xl">{phrase ?? "Una gran expedición prehistórica te espera"}</p>
        <button
          type="button"
          disabled={opening}
          onClick={() => {
            onOpen();
            setOpening(true);
          }}
          className="dino-button mt-9 bg-dino-sun text-dino-earth"
        >
          {opening ? "¡Entrando al rancho!" : "ABRIR EL PORTÓN"}
        </button>
        <p className="mt-4 text-base">Al abrir, comienza la música (si está disponible)</p>
      </div>
    </main>
  );
}
