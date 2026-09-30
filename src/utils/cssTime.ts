/** Convert a CSS time to whole milliseconds, preserving an explicit fallback. */
export function cssTimeToMs(value: string, fallback: number): number {
  const match = /^([+-]?(?:\d*\.)?\d+(?:e[+-]?\d+)?)(ms|s)?$/i.exec(value.trim());
  if (!match) return fallback;

  const amount = Number(match[1]);
  const unit = match[2]?.toLowerCase();
  if (!unit) return amount === 0 ? 0 : fallback;

  const milliseconds = amount * (unit === "s" ? 1000 : 1);
  return Number.isFinite(milliseconds) ? Math.round(milliseconds) : fallback;
}

export function readCssTimeMs(element: Element, varName: string, fallback: number): number {
  return cssTimeToMs(getComputedStyle(element).getPropertyValue(varName), fallback);
}
