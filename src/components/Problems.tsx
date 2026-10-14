import type { Daily } from "@/lib/daily";

function Paragraphs({ text }: { text: string }) {
  return <>{text.split(/\n\s*\n/).map((p, i) => <p key={i}>{p}</p>)}</>;
}

export default function Problems({ day, archiveLink }: { day: Daily; archiveLink?: boolean }) {
  const { maths, coding, olympiad } = day;
  return (
    <div className="daily">
      <p className="daily__maths"><span className="daily__kind mono">{maths.kind}</span> <strong>{maths.title}.</strong> {maths.text}</p>

      <article className="problem">
        <h3 className="problem__title">{coding.title} <span className="mono problem__tag">{coding.difficulty} · {coding.topic}</span></h3>
        <Paragraphs text={coding.statement} />
        <dl className="examples">
          {coding.examples.map((e, i) => (
            <div key={i} className="examples__row">
              <dt className="mono">{e.input}</dt>
              <dd className="mono">{e.output}{e.note ? <span className="examples__note"> {e.note}</span> : null}</dd>
            </div>
          ))}
        </dl>
        <details className="solution">
          <summary>Show solution</summary>
          <Paragraphs text={coding.approach} />
          <pre className="code"><code>{coding.code}</code></pre>
          <p className="mono problem__tag">{coding.complexity}</p>
        </details>
      </article>

      <article className="problem">
        <h3 className="problem__title">{olympiad.title} <span className="mono problem__tag">{olympiad.difficulty} · {olympiad.topic}</span></h3>
        <Paragraphs text={olympiad.statement} />
        <details className="solution">
          <summary>Show solution</summary>
          <Paragraphs text={olympiad.solution} />
        </details>
      </article>

      <p className="mono note">
        {day.source === "hand" ? "Written by hand." : `Generated each morning by Claude (${day.source}); solutions are checked by the model, not by a human.`}
        {archiveLink ? <> <a href="/daily/">Earlier days</a>.</> : null}
      </p>
    </div>
  );
}
