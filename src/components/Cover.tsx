"use client";
import { useState } from "react";

/** A book cover from Open Library; when there is none, a quiet typographic spine instead of a broken image. */
export default function Cover({ isbn, title, className, width, height }: { isbn: string; title: string; className: string; width: number; height: number }) {
  const [missing, setMissing] = useState(false);
  if (missing) {
    return <span className={`${className} cover--missing`} aria-hidden="true">{title.split(/\s+/).slice(0, 2).map((w) => w[0]).join("")}</span>;
  }
  return <img className={className} src={`https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg?default=false`} alt="" width={width} height={height} loading="lazy" onError={() => setMissing(true)} />;
}
