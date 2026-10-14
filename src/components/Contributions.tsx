import type { Day } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Grid({ days, total, cell, gap }: { days: Day[]; total: number; cell: number; gap: number }) {
  // Columns are weeks starting on Sunday, like GitHub's own calendar.
  const first = new Date(days[0].d + "T00:00:00Z");
  const offset = first.getUTCDay();
  const pitch = cell + gap;
  const weeks = Math.ceil((days.length + offset) / 7);
  const width = weeks * pitch - gap, height = 7 * pitch - gap;
  const labels: { x: number; text: string }[] = [];
  let lastMonth = -1;
  days.forEach((day, i) => {
    const col = Math.floor((i + offset) / 7);
    const m = Number(day.d.slice(5, 7)) - 1;
    if (m !== lastMonth) { if (col > 0 && (labels.length === 0 || col - labels[labels.length - 1].x / pitch > 2)) labels.push({ x: col * pitch, text: MONTHS[m] }); lastMonth = m; }
  });
  return (
      <svg viewBox={`0 -16 ${width} ${height + 16}`} width={width} height={height + 16} role="img" aria-label={`${total} public contributions on GitHub in the last year`}>
        {labels.map((l) => <text key={l.x + l.text} x={l.x} y={-5} className="contrib__month">{l.text}</text>)}
        {days.map((day, i) => {
          const col = Math.floor((i + offset) / 7), row = (i + offset) % 7;
          return <rect key={day.d} x={col * pitch} y={row * pitch} width={cell} height={cell} rx={2} className={`contrib__cell contrib__cell--${day.l}`}><title>{`${day.c} contribution${day.c === 1 ? "" : "s"} on ${day.d}`}</title></rect>;
        })}
      </svg>
  );
}

export default function Contributions({ days, total, live }: { days: Day[]; total: number; live: boolean }) {
  return (
    <figure className="contrib">
      <div className="contrib__scroll" dir="rtl"><div dir="ltr"><Grid days={days} total={total} cell={10} gap={3} /></div></div>
      <figcaption className="contrib__caption">
        <span>{total.toLocaleString("en-GB")} public contributions in the last year{live ? "" : " (saved snapshot)"}</span>
        <span className="contrib__legend" aria-hidden="true">Less {[0, 1, 2, 3, 4].map((l) => <i key={l} className={`contrib__swatch contrib__cell--${l}`} />)} More</span>
      </figcaption>
    </figure>
  );
}
