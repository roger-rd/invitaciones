import { useId } from "react";

type Point = [number, number];
type Feather = [Point, Point, number, number];
type Line = { d: string; width: number; detail?: "rib" | "covert" };
type Group = { name: string; lines: Line[] };

const f = (n: number) => Math.round(n * 10) / 10;
function lens(b: Point, t: Point, w: number, bend = 0): string {
  const dx = t[0] - b[0], dy = t[1] - b[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
  const P = (s: number, o: number) => [f(b[0] + dx * s + nx * o), f(b[1] + dy * s + ny * o)];
  const c1 = P(.28, w + bend), c2 = P(.8, w * .5 + bend), c3 = P(.82, -w * .45 + bend), c4 = P(.3, -w * .85 + bend);
  return `M${b}C${c1} ${c2} ${t}C${c3} ${c4} ${b}Z`;
}
function rib(b: Point, t: Point, bend = 0): string {
  const dx = t[0] - b[0], dy = t[1] - b[1], L = Math.hypot(dx, dy), nx = -dy / L, ny = dx / L;
  return `M${f(b[0] + dx * .12)} ${f(b[1] + dy * .12)}Q${f(b[0] + dx * .5 + nx * bend)} ${f(b[1] + dy * .5 + ny * bend)} ${f(b[0] + dx * .85)} ${f(b[1] + dy * .85)}`;
}

// Pure module initialization: each generated path is calculated once and shared
// by the animated card and both static impressions.
function createGeometry(): Record<"full" | "simple", Group[]> {
  const near: Feather[] = [[[116,50],[152,14],4.2,-1.2],[[118,52],[166,24],4.6,-1],[[118,55],[172,38],4.6,-.6],[[116,59],[168,52],4.4,-.2],[[112,63],[158,66],4.2,.3],[[106,67],[146,78],3.8,.6]];
  const cov: Feather[] = [[[100,62],[122,52],2.6,0],[[102,66],[126,60],2.6,.2],[[104,70],[126,68],2.4,.3],[[98,58],[112,48],2.2,-.2]];
  const far: Feather[] = [[[78,46],[38,26],4,1.4],[[80,44],[46,12],4.4,1.2],[[83,42],[62,5],4.4,.8],[[87,42],[80,4],4,.4],[[90,45],[96,10],3.6,-.3]];
  const farcov: Feather[] = [[[80,58],[64,46],2.4,.4],[[84,60],[66,56],2.4,.3],[[86,54],[72,40],2.2,.2]];
  const feathers = (items: Feather[], width: number, detail?: Line["detail"]): Line[] => items.map(args => ({ d: lens(...args), width, detail }));
  const ribs = (items: Feather[]): Line[] => items.map(([b,t,,bend]) => ({ d: rib(b,t,bend * .5), width: .45, detail: "rib" }));
  const nearLens = feathers(near, .9), farLens = feathers(far, .9);
  const nearEdge = { d: "M86 76C96 62 106 52 116 50", width: .95 };
  const body: Group = { name: "body", lines: [
    { d: "M52 72C55 66 60 62 67 62.5C74 63 79 67 85 73C100 82 120 85 138 87", width: 1.1 },
    { d: "M52 72C54 78 59 82 66 85C74 95 88 108 108 109C124 109 136 100 142 92", width: 1.1 },
  ] };
  const tail: Group = { name: "tail", lines: feathers([[[138,87],[192,98],3.4,0],[[138,90],[186,112],3.6,-.4],[[134,93],[170,124],3.4,-.8]], .9) };
  const leaves: [Point, Point][] = [[[44,76],[36,70]],[[40,79],[30,80]],[[34,84],[26,76]],[[30,88],[20,86]],[[26,93],[17,90]],[[24,96],[22,106]]];
  const olive: Group = { name: "olive", lines: [
    { d: "M51 73C40 77 30 85 21 97", width: .8 },
    ...leaves.map(([b,t]) => ({ d: lens(b,t,2.1,0), width: .7 })),
  ] };
  const eye: Group = { name: "eye", lines: [{ d: "M59.5 68a1.1 1.1 0 1 0 .01 0", width: .8 }] };
  return {
    full: [
      { name: "far-wing", lines: [...farLens, ...ribs(far), ...feathers(farcov, .7, "covert"), { d: "M84 73C79 64 77 54 79 44", width: .9 }] },
      { name: "near-wing", lines: [...nearLens, ...ribs(near), ...feathers(cov, .7, "covert"), nearEdge] },
      body, tail,
      { name: "breast-hatch", lines: [
        { d: "M62 90C74 100 90 104 108 100", width: .5 },
        { d: "M66 94C78 102 92 106 106 104", width: .45 },
        { d: "M72 98C82 104 94 106 104 107", width: .4 },
      ] },
      olive, eye,
    ],
    simple: [
      { name: "far-wing", lines: farLens.slice(1, 4) },
      { name: "near-wing", lines: [...nearLens.slice(0, 4), nearEdge] },
      body, tail, olive, eye,
    ],
  };
}
const geometry = createGeometry();

export default function DoveEngraving({ variant = "full", className = "" }: {
  variant?: "full" | "simple"; className?: string;
}) {
  const gradientId = useId();
  return (
    <svg className={`champagne-dove champagne-dove--${variant} ${className}`} viewBox="8 0 200 136" fill="none" stroke={`url(#${gradientId})`} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2=".25" y2="1">
          <stop stopColor="var(--color-champagne-oro-claro)" />
          <stop offset=".28" stopColor="var(--color-champagne-oro)" />
          <stop offset="1" stopColor="var(--color-champagne-oro-profundo)" />
        </linearGradient>
      </defs>
      {geometry[variant].map(({ name, lines }) => <g key={name}>
        {lines.map(({ d, width, detail }) => <path key={d} d={d} pathLength="1" vectorEffect="non-scaling-stroke" strokeWidth={width + (variant === "simple" ? .2 : 0)} className={`champagne-dove-line champagne-dove-line-${name}${detail ? ` champagne-dove-line-${detail}` : ""}`} />)}
      </g>)}
    </svg>
  );
}
