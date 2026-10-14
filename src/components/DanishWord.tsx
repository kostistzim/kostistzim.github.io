import { danishWords } from "@/lib/content";

/** One word from the hand-written list, rotating with the calendar day; the daily rebuild moves it on. */
export default function DanishWord() {
  const day = Math.floor(Date.now() / 86_400_000);
  const d = danishWords[day % danishWords.length];
  return (
    <div className="tile tile--danish">
      <div>
        <p className="danish__word" lang="da">{d.word}</p>
        <p className="danish__meaning">{d.meaning}</p>
        <p className="danish__example"><span lang="da">{d.example}</span> <span className="danish__translation">{d.translation}</span></p>
      </div>
      <p className="tile__caption"><span>Danish I'm learning</span><span className="mono">{d.pronunciation}</span></p>
    </div>
  );
}
