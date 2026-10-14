const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function fmt(ym: string): string {
  const [y, m] = ym.split("-").map(Number);
  return `${MONTHS[m - 1]} ${y}`;
}

export function range(start: string, end?: string): string {
  if (end && end === start) return fmt(start);
  return `${fmt(start)} – ${end ? fmt(end) : "now"}`;
}

/** Whole months between two YYYY-MM values, inclusive of the start month. */
export function duration(start: string, end: string | undefined, now: Date): string {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end ? end.split("-").map(Number) : [now.getUTCFullYear(), now.getUTCMonth() + 1];
  let months = (ey - sy) * 12 + (em - sm) + 1;
  if (months < 1) months = 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} mo`;
  return m === 0 ? `${y} yr` : `${y} yr ${m} mo`;
}
