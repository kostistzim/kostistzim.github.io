import { shelf } from "@/lib/content";
import Cover from "@/components/Cover";

export default function Shelf() {
  return (
    <ol className="shelf">
      {shelf.map((b) => (
        <li key={b.isbn} className="book">
          <a href={`https://openlibrary.org/isbn/${b.isbn}`} className="book__link">
            <Cover className="book__cover" isbn={b.isbn} title={b.title} width={40} height={60} />
            <span className="book__text">
              <span className="book__title">{b.title}</span>
              <span className="book__author">{b.author}</span>
              <span className="book__note">{b.note}</span>
            </span>
          </a>
        </li>
      ))}
    </ol>
  );
}
