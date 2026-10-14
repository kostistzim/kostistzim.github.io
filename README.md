# kostistzim.github.io

Personal CV site of Konstantinos (Kostis) Tzimoulias. Next.js (App Router, static export), built and deployed to GitHub Pages by the workflow in `.github/workflows/deploy.yml`, which also runs daily so the GitHub activity stays fresh.

- `src/lib/content.ts`: all CV content. Edit this to update the page.
- `src/lib/github.ts`: build-time fetch of the public contribution calendar and recently pushed repositories, with committed snapshots in `src/data/` as fallbacks.
- `src/components/`: the widgets (Copenhagen clock with Open-Meteo weather, Last.fm now-playing, reading now, Danish word of the day from a hand-written list, contribution graph), the project hover previews, the tech-stack pills and the dock.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: design context for the [impeccable](https://impeccable.style) skill. Run `/impeccable` in Claude Code inside this repo to iterate.

Local: `npm install`, then `npm run dev`. Production build: `npm run build` writes `out/`.

Now-playing needs two repository variables in GitHub (Settings → Secrets and variables → Actions → Variables): `LASTFM_USER` and `LASTFM_API_KEY`. The widget stays hidden until both exist.
