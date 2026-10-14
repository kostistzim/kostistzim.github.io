"use client";
import { useState } from "react";

const SUBJECT = encodeURIComponent("Hello from your website");

export default function CopyEmail({ email, size = "default" }: { email: string; size?: "default" | "large" }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed"); // clipboard blocked: the address stays selectable and the link still works
    }
    setTimeout(() => setState("idle"), 2000);
  };
  return (
    <p className={`email${size === "large" ? " email--large" : ""}`}>
      <a href={`mailto:${email}?subject=${SUBJECT}`}>{email}</a>
      <button type="button" className="email__copy" onClick={copy} aria-label={`Copy ${email}`}>
        <svg className="icon" viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="5.5" width="8" height="8" rx="1.5" /><path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" /></svg>
        <span className={`email__state${state === "failed" ? " email__state--failed" : ""}`} aria-live="polite">{state === "copied" ? "Copied" : state === "failed" ? "Select and copy" : ""}</span>
      </button>
    </p>
  );
}
