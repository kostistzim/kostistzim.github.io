import { reading } from "@/lib/content";

export default function Reading() {
  const cover = `https://covers.openlibrary.org/b/isbn/${reading.isbn}-M.jpg`;
  return (
    <a className="tile tile--reading" href={reading.url}>
      <img className="reading__cover" src={cover} alt="" width={64} height={96} loading="lazy" />
      <span className="reading__text">
        <span className="reading__title">{reading.title}</span>
        <span className="reading__author">{reading.author}</span>
      </span>
      <span className="tile__caption"><span>Reading now</span><span className="mono">{reading.since}</span></span>
    </a>
  );
}
