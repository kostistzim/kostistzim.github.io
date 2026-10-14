"use client";
import { useEffect, useState } from "react";

const TZ = "Europe/Copenhagen";
const WEATHER = "https://api.open-meteo.com/v1/forecast?latitude=55.676&longitude=12.568&current=temperature_2m,weather_code&timezone=Europe%2FCopenhagen";

// WMO weather codes, in the words a local would use.
function sky(code: number): string {
  if (code === 0) return "clear";
  if (code <= 2) return "some cloud";
  if (code === 3) return "overcast";
  if (code <= 48) return "fog";
  if (code <= 57) return "drizzle";
  if (code <= 67) return "rain";
  if (code <= 77) return "snow";
  if (code <= 82) return "showers";
  if (code <= 86) return "snow showers";
  return "thunder";
}

function parts(date: Date) {
  const f = new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "numeric", minute: "numeric", second: "numeric", hour12: false });
  const p = Object.fromEntries(f.formatToParts(date).map((x) => [x.type, x.value]));
  return { h: Number(p.hour) % 24, m: Number(p.minute), s: Number(p.second) };
}

export default function Clock() {
  const [t, setT] = useState<{ h: number; m: number; s: number } | null>(null);
  const [wx, setWx] = useState<{ temp: number; code: number } | null>(null);
  useEffect(() => {
    const tick = () => setT(parts(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const r = await fetch(WEATHER);
        if (!r.ok) throw new Error(String(r.status));
        const j = await r.json();
        if (alive && j?.current) setWx({ temp: Math.round(j.current.temperature_2m), code: Number(j.current.weather_code) });
      } catch { /* the clock still works without weather */ }
    };
    load();
    const id = setInterval(load, 10 * 60_000);
    return () => { alive = false; clearInterval(id); };
  }, []);
  const h = t?.h ?? 10, m = t?.m ?? 9, s = t?.s ?? 30;
  const hourDeg = (h % 12) * 30 + m * 0.5;
  const minDeg = m * 6 + s * 0.1;
  const secDeg = s * 6;
  const label = t ? `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}` : "--:--";
  const ticks = Array.from({ length: 60 }, (_, i) => i);
  return (
    <div className="tile tile--clock" aria-label={`Local time in Copenhagen, ${label}`}>
      <svg viewBox="0 0 120 120" className="clock" aria-hidden="true">
        {ticks.map((i) => (
          <line
            key={i}
            x1="60" y1={i % 5 === 0 ? 9 : 11} x2="60" y2={i % 5 === 0 ? 15 : 13}
            transform={`rotate(${i * 6} 60 60)`}
            stroke={i % 5 === 0 ? "var(--fg)" : "var(--muted)"} strokeWidth={i % 5 === 0 ? 2 : 1} strokeLinecap="round"
          />
        ))}
        <line x1="60" y1="60" x2="60" y2="30" transform={`rotate(${hourDeg} 60 60)`} stroke="var(--fg)" strokeWidth="4" strokeLinecap="round" />
        <line x1="60" y1="60" x2="60" y2="20" transform={`rotate(${minDeg} 60 60)`} stroke="var(--fg)" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="60" y1="66" x2="60" y2="16" transform={`rotate(${secDeg} 60 60)`} stroke="var(--accent)" strokeWidth="1.25" strokeLinecap="round" className="clock__second" />
        <circle cx="60" cy="60" r="2.5" fill="var(--accent)" />
      </svg>
      <div className="clock__captions">
        {wx && <p className="tile__caption clock__weather"><span>{wx.temp}°, {sky(wx.code)}</span></p>}
        <p className="tile__caption"><span>Copenhagen</span><span className="mono">{label}</span></p>
      </div>
    </div>
  );
}
