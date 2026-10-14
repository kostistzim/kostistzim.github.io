# kostistzim.github.io

Personal CV site of Konstantinos (Kostis) Tzimoulias. Next.js (App Router, static export), built and deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`, which also runs daily so the GitHub activity stays fresh.

- `src/lib/content.ts`: all CV content. Edit this to update the page.
- `src/lib/github.ts`: build-time fetch of the public contribution calendar and recently pushed repositories, with committed snapshots in `src/data/` as fallbacks.
- `src/components/`: the widgets (Copenhagen clock with Open-Meteo weather, Last.fm now-playing, reading now, Danish word of the day, contribution graph), the daily problems and the dock.
- `scripts/daily.mjs`: one Claude call a day (default `claude-haiku-5-5`, override with the `DAILY_MODEL` repository variable) that writes `src/data/daily/YYYY-MM-DD.json`: a Danish word, a maths item, a coding problem and an olympiad-style problem with full solutions. The workflow commits the file, so the archive at `/daily` grows by one each day. Needs the `ANTHROPIC_API_KEY` repository secret; without it the last generated day stays up.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: design context for the [impeccable](https://impeccable.style) skill. Run `/impeccable` in Claude Code inside this repo to iterate.

Local: `npm install`, then `npm run dev`. Production build: `npm run build` writes `out/`.

Now-playing needs two repository variables in GitHub (Settings → Secrets and variables → Actions → Variables): `LASTFM_USER` and `LASTFM_API_KEY`. The widget stays hidden until both exist.
