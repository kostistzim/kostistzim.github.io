"use client";
import { useEffect, useState } from "react";

export default function Dock({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  useEffect(() => { setTheme((document.documentElement.dataset.theme as "dark" | "light") || "dark"); }, []);

  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1600); }
    catch { window.location.href = `mailto:${email}`; }
  };
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next; setTheme(next);
    try { localStorage.setItem("theme", next); } catch { /* private mode */ }
  };
  return (
    <nav className="dock" aria-label="Page actions">
      <button type="button" className="dock__btn" onClick={copy} aria-live="polite">
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" /></svg>
        {copied ? "Copied" : "Copy email"}
      </button>
      <span className="dock__sep" aria-hidden="true" />
      <button type="button" className="dock__btn" onClick={() => window.print()}>
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 6V2.5h7V6M4.5 11.5h7v2h-7zM3 6h10a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1h-1.5M4.5 11.5H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1" /></svg>
        Print CV
      </button>
      <span className="dock__sep" aria-hidden="true" />
      <button type="button" className="dock__btn dock__btn--icon" onClick={toggle} aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}>
        {theme === "dark" ? (
          <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="3" /><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1 1M11.6 11.6l1 1M3.4 12.6l1-1M11.6 4.4l1-1" /></svg>
        ) : (
          <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5z" /></svg>
        )}
      </button>
    </nav>
  );
}
