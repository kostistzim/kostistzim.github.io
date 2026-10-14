import type { Metadata } from "next";
import Problems from "@/components/Problems";
import { getDays, prettyDate } from "@/lib/daily";

export const metadata: Metadata = { title: "Daily · Konstantinos Tzimoulias", description: "A Danish word, a piece of mathematics and two problems with solutions, every day." };

export default function DailyPage() {
  const days = getDays();
  return (
    <main className="page">
      <p className="mono"><a href="/">← Back</a></p>
      <h1 className="name" style={{ marginTop: 24 }}>Daily</h1>
      <p className="role">A Danish word, a piece of mathematics, a coding problem and an olympiad-style problem, with full solutions. One set a day, kept here.</p>
      {days.map((d) => (
        <section key={d.date} className="block" id={d.date} aria-labelledby={`h-${d.date}`}>
          <h2 id={`h-${d.date}`} className="label">{prettyDate(d.date)}</h2>
          <dl className="skills">
            <div className="skills__row"><dt>Danish</dt><dd><span lang="da">{d.danish.word}</span> · {d.danish.meaning} <span className="danish__translation"><span lang="da">{d.danish.example}</span> {d.danish.translation}</span></dd></div>
          </dl>
          <Problems day={d} />
        </section>
      ))}
    </main>
  );
}
