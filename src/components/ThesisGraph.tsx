"use client";
import { useEffect, useRef } from "react";

// Synthetic demo of a biomedical knowledge graph: the kinds of nodes and links a thesis on
// knowledge-grounded AI for life science would connect. Labels are illustrative, not data.
type N = { id: string; kind: "gene" | "drug" | "disease" | "trial" | "paper"; x: number; y: number; vx: number; vy: number; r: number };
const KINDS: N["kind"][] = ["gene", "drug", "disease", "trial", "paper"];
const SEED_LINKS: [number, number][] = [
  [0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [1, 5], [5, 6], [6, 2], [4, 7], [7, 8], [8, 0], [9, 1], [9, 10], [10, 11], [11, 4], [12, 2],
  [12, 13], [13, 9], [14, 5], [14, 15], [15, 3], [16, 7], [16, 17], [17, 12], [18, 6], [18, 19], [19, 10], [20, 8], [20, 21], [21, 14],
];

function mulberry(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function ThesisGraph() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rand = mulberry(7);
    const W = canvas.clientWidth, H = canvas.clientHeight, dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * dpr; canvas.height = H * dpr; ctx.scale(dpr, dpr);
    const nodes: N[] = Array.from({ length: 22 }, (_, i) => ({
      id: String(i), kind: KINDS[i % KINDS.length], x: W / 2 + (rand() - 0.5) * W * 0.6, y: H / 2 + (rand() - 0.5) * H * 0.6, vx: 0, vy: 0, r: i % 5 === 2 ? 4 : 2.6,
    }));
    const links = SEED_LINKS.filter(([a, b]) => a < nodes.length && b < nodes.length);
    const pointer = { x: -1e3, y: -1e3, on: false };
    const css = getComputedStyle(canvas);
    const col = { fg: css.getPropertyValue("--fg").trim(), muted: css.getPropertyValue("--muted").trim(), line: css.getPropertyValue("--hairline-strong").trim(), accent: css.getPropertyValue("--accent").trim() };

    const step = () => {
      for (const a of nodes) {
        for (const b of nodes) {
          if (a === b) continue;
          let dx = a.x - b.x, dy = a.y - b.y; const d2 = dx * dx + dy * dy + 0.01; const f = 170 / d2;
          a.vx += dx * f * 0.02; a.vy += dy * f * 0.02;
        }
        a.vx += (W / 2 - a.x) * 0.004; a.vy += (H / 2 - 16 - a.y) * 0.007;
        if (pointer.on) {
          const dx = a.x - pointer.x, dy = a.y - pointer.y; const d2 = dx * dx + dy * dy;
          if (d2 < 3600) { const f = (3600 - d2) / 3600; a.vx += dx * f * 0.02; a.vy += dy * f * 0.02; }
        }
      }
      for (const [i, j] of links) {
        const a = nodes[i], b = nodes[j]; const dx = b.x - a.x, dy = b.y - a.y; const d = Math.hypot(dx, dy) || 1; const f = (d - 34) * 0.004;
        a.vx += (dx / d) * f; a.vy += (dy / d) * f; b.vx -= (dx / d) * f; b.vy -= (dy / d) * f;
      }
      for (const n of nodes) { n.vx *= 0.86; n.vy *= 0.86; n.x = Math.max(8, Math.min(W - 8, n.x + n.vx)); n.y = Math.max(8, Math.min(H - 44, n.y + n.vy)); }
    };
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = 1; ctx.strokeStyle = col.line;
      for (const [i, j] of links) { ctx.beginPath(); ctx.moveTo(nodes[i].x, nodes[i].y); ctx.lineTo(nodes[j].x, nodes[j].y); ctx.stroke(); }
      for (const n of nodes) {
        const near = pointer.on && Math.hypot(n.x - pointer.x, n.y - pointer.y) < 60;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + (near ? 1 : 0), 0, Math.PI * 2);
        ctx.fillStyle = n.kind === "disease" ? col.accent : near ? col.fg : col.muted; ctx.fill();
      }
    };
    for (let i = 0; i < 160; i++) step();
    draw();
    let raf = 0;
    if (!reduce) {
      const loop = () => { step(); draw(); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    }
    const move = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = true; if (reduce) { step(); draw(); } };
    const leave = () => { pointer.on = false; };
    canvas.addEventListener("pointermove", move); canvas.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); canvas.removeEventListener("pointermove", move); canvas.removeEventListener("pointerleave", leave); };
  }, []);
  return (
    <div className="tile tile--graph">
      <canvas ref={ref} className="graph" role="img" aria-label="Animated demo of a small biomedical knowledge graph: genes, drugs, diseases, trials and papers linked together." />
      <p className="tile__caption"><span>Thesis: knowledge graphs</span><span className="mono">demo data</span></p>
    </div>
  );
}
