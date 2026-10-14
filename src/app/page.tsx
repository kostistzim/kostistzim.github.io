import Clock from "@/components/Clock";
import NowPlaying from "@/components/NowPlaying";
import Contributions from "@/components/Contributions";
import Dock from "@/components/Dock";
import Reading from "@/components/Reading";
import DanishWord from "@/components/DanishWord";
import ProjectList from "@/components/ProjectList";
import TechStack from "@/components/TechStack";
import Shelf from "@/components/Shelf";
import CopyEmail from "@/components/CopyEmail";
import { person, projects, roles, education, activities, thesis } from "@/lib/content";
import { range, duration } from "@/lib/dates";
import { getContributions, getRepoMeta } from "@/lib/github";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default async function Page() {
  const now = new Date();
  const [contrib, meta] = await Promise.all([getContributions(), getRepoMeta(projects.map((p) => p.repo))]);
  const built = `${MONTHS[now.getUTCMonth()]} ${now.getUTCFullYear()}`;

  return (
    <main className="page">
      <a className="skip" href="#projects">Skip to content</a>

      <header className="intro">
        <h1 className="name">{person.name}</h1>
        <p className="role">{person.role}</p>

        <section className="block" aria-labelledby="currently">
          <h2 id="currently" className="label label--live"><i className="live" aria-hidden="true" />Currently</h2>
          <p>
            Building knowledge-grounded AI systems: LLM pipelines with typed interfaces, retrieval and knowledge graphs, on data systems I understand from first principles. {person.availability}
          </p>
          <CopyEmail email={person.email} />
        </section>
      </header>

      <section className="widgets" aria-label="Live widgets">
        <Clock />
        <NowPlaying />
        <Reading />
        <DanishWord />
      </section>


      <section className="block" id="projects" aria-labelledby="h-projects">
        <h2 id="h-projects" className="label">Projects</h2>
        <ProjectList projects={projects} meta={meta} />
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

      <section className="block" id="stack" aria-labelledby="h-stack">
        <h2 id="h-stack" className="label">Tech stack</h2>
        <TechStack />
        <dl className="skills">
          <div className="skills__row"><dt>Spoken</dt><dd>Greek (native), English (full professional), Danish (learning)</dd></div>
        </dl>
      </section>

      <section className="block" id="shelf" aria-labelledby="h-shelf">
        <h2 id="h-shelf" className="label">On the desk</h2>
        <p className="lede">Books I keep coming back to.</p>
        <Shelf />
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
        <p className="more"><a href={person.github}>All repositories on GitHub</a></p>
      </section>

      <footer className="block footer" id="contact">
        <h2 className="label">Contact</h2>
        <p className="footer__lede">Email is the quickest way. I'm in {person.city} and open to applied AI, ML engineering and data science roles here. {person.availability}</p>
        <CopyEmail email={person.email} size="large" />
        <p className="mono footer__links">
          <a href={person.github}>GitHub</a>
          <a href={person.linkedin}>LinkedIn</a>
        </p>
        <p className="mono note">Built with Next.js on GitHub Pages · {built}</p>
      </footer>

      <Dock email={person.email} />
    </main>
  );
}
