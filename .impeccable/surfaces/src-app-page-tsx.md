---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: []
---

# Surface brief: the whole site (src/app/page.tsx)

Scope: one page, Read mode, redesigned on 2026-10-14 at the user's request to feel like ashishgogula.in (pinned reference). The visitor (Copenhagen recruiter, hiring manager, DTU supervisor) came to understand who Kostis is, what he has built, what he does now, and how to reach him. Action: copy or send an email, open a repository. Proof: the CV facts, linked repositories, live GitHub activity, and small working widgets. Constraints: nothing about Amass beyond role title and a public one-liner; no phone number; print must still give a clean CV; the Now-playing widget only renders when a Last.fm account is configured.

Unresolved: the thesis title; which music service to connect; which widget replaces the retired thesis graph (removed 2026-10-14 at the user's request because the thesis is private); a future jiu-jitsu widget.

## Direction contract

THESIS: A quiet dark notebook page: one narrow column where every section is a plain label over a ruled list, and the only colour and motion live in a row of small working instruments (clock, music) and a year of real GitHub activity. It refuses the loud portfolio hero, the transit line of the previous build, and the card grid; proof is shown as working things, not claimed.

OWN-WORLD: Ground #0F0F0F, surface #161616, foreground #EDEDED, muted #8F8F8F, hairline #262626; light scheme on toggle (#FAFAF9 ground, #141414 foreground). One accent, ember #E8623C, used only for live state: the clock's second hand, the "now" dot, graph highlights, the hottest contribution cells. Type: Geist Sans 15px body with 1.6 leading, 13px muted labels; Geist Mono 12.5px for dates, durations, stacks and the dock. Column 680px. Widgets are 1px-bordered tiles with 14px radius on the surface colour; nothing else is a card. Section labels are 15px/500 foreground text (same size as body, weight carries the hierarchy; decided at finish review), not headings-in-caps and not eyebrows. Links underline on hover only. Dock: a floating pill at the bottom centre with copy-email, print, theme.

STORY: The reader sees the name, the role line, a "Currently" paragraph that says what he does now and from when he is available, and his email with a copy control. The widget row shows the city he is in, what he is listening to, and a living graph that teases the thesis. Projects prove the skills with links; Experience and Education are compact ruled rows; Activity shows a year of commits; Contact closes with the same email. They leave with the address copied.

FIRST VIEWPORT (1440x900): column centred, 112px top padding. Name (18px, 500), role (15px muted). "Currently" label then a two-sentence paragraph (what he builds now; MSc ends January 2027). Email as mono text with a copy icon button. Then the widget row: tiles 200px tall: Copenhagen clock (analogue, SVG, ticking, fixed 200px wide), Now playing (Last.fm; flexible width; hidden when not configured, then the row is the clock alone). Below the fold begins "Projects". Dock pinned bottom centre.

FORM: Pinned by the user (ashishgogula.in as reference); no roll. Mode Read. Signature interaction: the clock ticks and the now-playing tile breathes its live dot; nothing else moves. Carry-overs from the critique of the previous build: no duplicated intro; forks filtered from activity; address visible and copyable at the top; availability stated; print breakpoints scoped to screen.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
