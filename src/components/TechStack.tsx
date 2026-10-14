import * as icons from "simple-icons";
import { stack } from "@/lib/content";

type Icon = { path: string; title: string };
const lib = icons as unknown as Record<string, Icon>;

export default function TechStack() {
  return (
    <div className="stack">
      {stack.map((g) => (
        <div key={g.label} className="stack__group">
          <p className="stack__label">{g.label}</p>
          <ul className="tools">
            {g.items.map((it) => {
              const ic = it.icon ? lib[it.icon] : undefined;
              return (
                <li key={it.name} className="tool">
                  {ic ? <svg className="tool__icon" viewBox="0 0 24 24" aria-hidden="true"><path d={ic.path} /></svg> : <span className="tool__dot" aria-hidden="true" />}
                  {it.name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
