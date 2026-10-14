# kostistzim.github.io

Personal CV site of Konstantinos (Kostis) Tzimoulias, served by GitHub Pages from the `main` branch.

- `index.html`, `assets/styles.css`, `assets/site.js`: the whole site. No build step, no dependencies.
- `assets/fonts/`: self-hosted Overpass and Overpass Mono (SIL Open Font License).
- `.nojekyll`: tells GitHub Pages to serve the files as they are.
- `PRODUCT.md`, `DESIGN.md`, `.impeccable/`: design context for the [impeccable](https://impeccable.style) skill used to design the page. Run `/impeccable` in Claude Code inside this repo to iterate on it.

Edit the HTML directly to update the CV. The "Recently pushed on GitHub" list fills itself from the GitHub API and falls back to the saved list in the HTML.
