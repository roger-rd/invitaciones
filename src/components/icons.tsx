import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function Calendar(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v3.5M16 3v3.5" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function MapPin(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M12 21s7-7.6 7-12a7 7 0 1 0-14 0c0 4.4 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function MessageCircle(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 12a8 8 0 1 1 3.2 6.4L4 20l1.1-3.4A7.9 7.9 0 0 1 4 12Z" />
    </svg>
  );
}

export function Camera(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1-2h7l1 2h2A1.5 1.5 0 0 1 20 8.5v9A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-9Z" />
      <circle cx="12" cy="13" r="3.4" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M15 5 8 12l7 7" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M5 9l7 7 7-7" />
    </svg>
  );
}

export function X(props: IconProps) {
  return (
    <svg {...strokeProps} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Play(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M7.5 4.8v14.4a1 1 0 0 0 1.53.85l11.2-7.2a1 1 0 0 0 0-1.7L9.03 3.95A1 1 0 0 0 7.5 4.8Z" />
    </svg>
  );
}

export function Pause(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <rect x="6.5" y="4.5" width="4" height="15" rx="1" />
      <rect x="13.5" y="4.5" width="4" height="15" rx="1" />
    </svg>
  );
}
