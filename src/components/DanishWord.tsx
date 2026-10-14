import type { Daily } from "@/lib/daily";

export default function DanishWord({ d }: { d: Daily["danish"] }) {
  return (
    <div className="tile tile--danish">
      <div>
        <p className="danish__word" lang="da">{d.word}</p>
        <p className="danish__meaning">{d.meaning}</p>
        <p className="danish__example"><span lang="da">{d.example}</span> <span className="danish__translation">{d.translation}</span></p>
      </div>
      <p className="tile__caption"><span>Danish, a word a day</span><span className="mono">{d.pronunciation}</span></p>
    </div>
  );
}
