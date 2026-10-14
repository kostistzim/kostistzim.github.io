import Clock from "@/components/Clock";
import NowPlaying from "@/components/NowPlaying";
import Contributions from "@/components/Contributions";
import Dock from "@/components/Dock";
import CopyEmail from "@/components/CopyEmail";
import { person, projects, roles, education, skills, activities, thesis } from "@/lib/content";
import { range, duration } from "@/lib/dates";
import { getContributions, getRepos } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const when = (iso: string) => { const d = new Date(iso); return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`; };

export default async function Page() {
  const now = new Date();
  const [contrib, gh] = await Promise.all([getContributions(), getRepos()]);
  const built = `${MONTHS[now.getUTCMonth()]} ${now.getUTCFullYear()}`;

  return (
    <main className="page">
      <a className="skip" href="#projects">Skip to content</a>

      <header className="intro">
        <h1 className="name">{person.name}</h1>
        <p className="role">{person.role}</p>

        <section className="block" aria-labelledby="currently">
          <h2 id="currently" className="label">Currently</h2>
          <p>
            Building knowledge-grounded AI systems: LLM pipelines with typed interfaces, retrieval and knowledge graphs, on data systems I understand from first principles. {person.availability}
          </p>
          <CopyEmail email={person.email} />
        </section>
      </header>

      <section className="widgets" aria-label="Live widgets">
        <Clock />
        <NowPlaying />
      </section>

      <section className="block" id="projects" aria-labelledby="h-projects">
        <h2 id="h-projects" className="label">Projects</h2>
        <ol className="list">
          {projects.map((p) => (
            <li key={p.name} className="item">
              <div className="item__head">
                <a href={p.url} className="item__title">{p.name}</a>
                <span className="mono item__meta">{p.year}</span>
              </div>
              <p className="item__line">{p.line}</p>
              <p className="mono item__stack">{p.stack.join(" · ")}</p>
            </li>
          ))}
        </ol>
        <p className="more"><a href={person.github}>More on GitHub</a></p>
      </section>

      <section className="block" id="experience" aria-labelledby="h-experience">
        <h2 id="h-experience" className="label">Experience</h2>
        <ol className="list">
          {roles.map((r) => (
            <li key={r.title + r.org} className="item">
              <div className="item__head">
                <span className="item__title">{r.title} · {r.org}</span>
                <span className="mono item__meta">{r.place}</span>
              </div>
              <p className="mono item__sub">{r.current && <i className="live" aria-hidden="true" />}{r.kind} · {range(r.start, r.end)} · {duration(r.start, r.end, now)}</p>
              {r.line && <p className="item__line">{r.line}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section className="block" id="thesis" aria-labelledby="h-thesis">
        <h2 id="h-thesis" className="label">Thesis</h2>
        <p className="mono item__sub">{thesis.when}</p>
        <p>{thesis.text}</p>
      </section>

      <section className="block" id="education" aria-labelledby="h-education">
        <h2 id="h-education" className="label">Education</h2>
        <ol className="list">
          {education.map((e) => (
            <li key={e.title} className="item">
              <div className="item__head">
                <span className="item__title">{e.title} · {e.org}</span>
                <span className="mono item__meta">{range(e.start, e.end)}</span>
              </div>
              {e.note && <p className="item__line">{e.note}</p>}
            </li>
          ))}
        </ol>
      </section>

      <section className="block" id="skills" aria-labelledby="h-skills">
        <h2 id="h-skills" className="label">Skills</h2>
        <dl className="skills">
          {skills.map((s) => (
            <div key={s.label} className="skills__row">
              <dt>{s.label}</dt>
              <dd>{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" id="also" aria-labelledby="h-also">
        <h2 id="h-also" className="label">Also</h2>
        <dl className="skills">
          {activities.map((a) => (
            <div key={a.what} className="skills__row">
              <dt className="mono">{a.when}</dt>
              <dd>{a.what}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" id="activity" aria-labelledby="h-activity">
        <h2 id="h-activity" className="label">Activity</h2>
        <Contributions days={contrib.days} total={contrib.total} live={contrib.live} />
        <ol className="list list--tight">
          {gh.repos.map((r) => (
            <li key={r.name} className="item item--row">
              <a href={r.url} className="item__title">{r.name}</a>
              <span className="mono item__meta">{[r.language, when(r.pushedAt)].filter(Boolean).join(" · ")}</span>
            </li>
          ))}
        </ol>
        {!gh.live && <p className="mono note">Repository list from a saved snapshot.</p>}
      </section>

      <footer className="block footer" id="contact">
        <h2 className="label">Contact</h2>
        <p>Email is the quickest way. I'm in {person.city} and open to applied AI, ML engineering and data science roles here.</p>
        <p className="mono footer__links">
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={person.github}>GitHub</a>
          <a href={person.linkedin}>LinkedIn</a>
        </p>
        <p className="mono note">Built with Next.js on GitHub Pages · {built}</p>
      </footer>

      <Dock email={person.email} />
    </main>
  );
}
