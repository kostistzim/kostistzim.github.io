"use client";
import { useState } from "react";
import type { Project } from "@/lib/content";
import type { RepoMeta } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const when = (iso: string) => { const d = new Date(iso); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`; };

/** Ruled project rows; the hovered or focused row shows a preview card beside the list on wide screens. */
export default function ProjectList({ projects, meta }: { projects: Project[]; meta: Record<string, RepoMeta> }) {
  const [active, setActive] = useState(0);
  const p = projects[active];
  const m = meta[p.repo];
  return (
    <div className="projects">
      <ol className="list projects__list" onMouseLeave={() => setActive(0)}>
        {projects.map((pr, i) => (
          <li key={pr.name} className={`item project${i === active ? " is-active" : ""}`} onMouseEnter={() => setActive(i)}>
            <div className="item__head">
              <span className="project__name">
                <a href={pr.url} className="item__title" onFocus={() => setActive(i)}>{pr.name}</a>
                {pr.badge && <span className="badge">{pr.badge}</span>}
              </span>
              <span className="mono item__meta">{pr.year}</span>
            </div>
            <p className="item__line">{pr.line}</p>
            <p className="mono item__stack">{pr.stack.join(" · ")}</p>
          </li>
        ))}
      </ol>
      <aside className="preview" aria-hidden="true">
        <a className="preview__card" href={p.url} tabIndex={-1}>
          <span className="preview__repo mono">kostistzim/{p.repo}</span>
          <span className="preview__desc">{m?.description || p.line}</span>
          <span className="preview__meta mono">
            {m?.language && <span><i className="dot" />{m.language}</span>}
            {m && <span>{m.stars} {m.stars === 1 ? "star" : "stars"}</span>}
            {m && <span>pushed {when(m.pushedAt)}</span>}
          </span>
          <span className="preview__stack">{p.stack.map((s) => <span key={s} className="chip">{s}</span>)}</span>
        </a>
      </aside>
    </div>
  );
}
