"use client";
import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 1600); }
    catch { window.location.href = `mailto:${email}`; }
  };
  return (
    <p className="email">
      <a className="mono" href={`mailto:${email}`}>{email}</a>
      <button type="button" className="email__copy" onClick={copy} aria-label="Copy email address">
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" /></svg>
        <span className="email__state" aria-live="polite">{copied ? "Copied" : ""}</span>
      </button>
    </p>
  );
}
