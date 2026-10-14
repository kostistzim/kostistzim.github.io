import { reading } from "@/lib/content";
import Cover from "@/components/Cover";

export default function Reading() {
  return (
    <a className="tile tile--reading" href={reading.url}>
      <span className="reading">
        <Cover className="reading__cover" isbn={reading.isbn} title={reading.title} width={56} height={84} />
        <span className="reading__text">
          <span className="reading__title">{reading.title}</span>
          <span className="reading__author">{reading.author}</span>
        </span>
      </span>
      <span className="tile__caption"><span>Reading now</span><span className="mono">{reading.since}</span></span>
    </a>
  );
}
