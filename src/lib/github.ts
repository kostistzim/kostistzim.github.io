import fallbackContrib from "@/data/contributions.json";
import fallbackRepos from "@/data/repos.json";

export type Day = { d: string; l: number; c: number };
export type Repo = { name: string; url: string; description: string | null; language: string | null; pushedAt: string };

const USER = "kostistzim";

/** Public contribution calendar, scraped from GitHub's HTML at build time; falls back to the committed snapshot. */
export async function getContributions(): Promise<{ days: Day[]; total: number; live: boolean }> {
  try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`, {
      headers: { "User-Agent": "kostistzim.github.io build" },
      cache: "no-store",
    });
    if (!res.ok) throw new Error(String(res.status));
    const html = await res.text();
    const days = new Map<string, Day>();
    const td = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]+)"[^>]*data-level="(\d)"/g;
    for (const m of html.matchAll(td)) days.set(m[2], { d: m[1], l: Number(m[3]), c: 0 });
    const tip = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g;
    for (const m of html.matchAll(tip)) {
      const day = days.get(m[1]);
      if (!day) continue;
      const n = /^(\d[\d,]*) contribution/.exec(m[2]);
      day.c = n ? Number(n[1].replace(/,/g, "")) : 0;
    }
    const list = [...days.values()].sort((a, b) => a.d.localeCompare(b.d));
    if (list.length < 300) throw new Error("calendar too short");
    return { days: list, total: list.reduce((s, x) => s + x.c, 0), live: true };
  } catch {
    const days = fallbackContrib.days as Day[];
    return { days, total: days.reduce((s, x) => s + x.c, 0), live: false };
  }
}

export type RepoMeta = { name: string; description: string | null; language: string | null; stars: number; pushedAt: string; url: string };

/** Metadata for the named repositories, for the project preview cards; empty map when offline. */
export async function getRepoMeta(names: string[]): Promise<Record<string, RepoMeta>> {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "kostistzim.github.io build" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?per_page=100`, { headers, cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    const all = (await res.json()) as Array<{ name: string; html_url: string; description: string | null; language: string | null; pushed_at: string; stargazers_count: number }>;
    const out: Record<string, RepoMeta> = {};
    for (const r of all) if (names.includes(r.name)) out[r.name] = { name: r.name, description: r.description, language: r.language, stars: r.stargazers_count, pushedAt: r.pushed_at, url: r.html_url };
    return out;
  } catch {
    return {};
  }
}

/** Recently pushed, non-fork repositories; falls back to the committed snapshot. */
export async function getRepos(): Promise<{ repos: Repo[]; live: boolean }> {
  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json", "User-Agent": "kostistzim.github.io build" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(`https://api.github.com/users/${USER}/repos?sort=pushed&per_page=30`, { headers, cache: "no-store" });
    if (!res.ok) throw new Error(String(res.status));
    const all = (await res.json()) as Array<{ name: string; html_url: string; description: string | null; language: string | null; pushed_at: string; fork: boolean }>;
    const repos = all
      .filter((r) => !r.fork && r.name !== "kostistzim.github.io" && r.name !== "kostistzim")
      .slice(0, 6)
      .map((r) => ({ name: r.name, url: r.html_url, description: r.description, language: r.language, pushedAt: r.pushed_at }));
    if (!repos.length) throw new Error("empty");
    return { repos, live: true };
  } catch {
    return { repos: fallbackRepos as Repo[], live: false };
  }
}
