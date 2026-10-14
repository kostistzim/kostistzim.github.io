---
name: kostistzim.github.io
description: A CV read as a Copenhagen transit line diagram, one red line, paper ground, Overpass.
colors:
  signal-red: "#C8102E"
  signal-red-soft: "rgba(200, 16, 46, 0.16)"
  ground: "#F7F8F7"
  surface: "#FFFFFF"
  ink: "#15181B"
  ink-soft: "#4A5250"
  hairline: "#C9CBC9"
  dark-signal-red: "#E8364F"
  dark-signal-red-soft: "rgba(255, 90, 104, 0.2)"
  dark-ground: "#141618"
  dark-surface: "#1B1E20"
  dark-ink: "#ECEEED"
  dark-ink-soft: "#A9B0AD"
  dark-hairline: "#2E3234"
typography:
  display:
    fontFamily: "Overpass, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Overpass, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Overpass, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Overpass, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Overpass, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
    fontVariation: "tabular-nums"
  label:
    fontFamily: "Overpass Mono, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.1em"
  meta:
    fontFamily: "Overpass Mono, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0.02em"
rounded:
  none: "0"
  focus: "2px"
  ring: "50%"
spacing:
  hair: "2px"
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "32px"
  3xl: "40px"
  4xl: "56px"
  station: "72px"
  tail: "96px"
  rail: "88px"
  measure: "68ch"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 14px"
    height: "40px"
  button-secondary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
  nav-strip-link:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "0 12px 0 0"
    height: "40px"
  nav-strip-link-current:
    textColor: "{colors.ink}"
  station-ring:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.ring}"
    size: "22px"
  stop-dot:
    backgroundColor: "{colors.signal-red}"
    rounded: "{rounded.ring}"
    size: "12px"
  line-marker:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.ring}"
    size: "12px"
  timetable-row:
    padding: "22px 0 26px"
  grid-row:
    padding: "12px 0"
  portrait:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.ring}"
    size: "120px"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.meta}"
    padding: "8px 12px"
---

# Design System: kostistzim.github.io

## Overview

**Creative North Star: "The Copenhagen Line Diagram"**

The site reads a career the way a Copenhagen S-tog or Metro diagram reads a route: one continuous red line down the left margin, a station ring at every section, branch-line stops for every role and degree, and a marker that shows the reader where they are. The CV is the document; the diagram is the frame that carries the eye down it. Everything else is paper: near-white cool ground, black-green ink, 1px hairlines, and a great deal of unprinted space between stations.

Density is editorial, not dashboard. One reading column of 68ch sits right of the rail; dates and codes are set in tabular mono in a narrow left-hand column so they line up like a timetable. The page uses one hue only. Red is the line and everything that belongs to it (station rings, stop dots, links, the primary button, focus and selection); state is carried by the form of a mark (filled, hollow, dashed, ink-filled) rather than by a second colour. The system refuses the centred hero portrait over a grid of same-size project cards and the LaTeX-paper CV look.

Motion is a single event: the marker travels the line to the current station on scroll (0.9s, a long ease-out), and the ring it reaches grows by 12%. Nothing else moves beyond a 150ms button fill. Light and dark schemes share every rule and swap only the seven surface and ink values; print strips the chrome and leaves the line, the rings and the ruled rows on white.

**Key Characteristics:**
- One continuous 6px signal-red line in an 88px left rail, with 22px station rings at every section heading.
- One hue: red for the line and its belongings, ink for everything else; state as a mark (filled / hollow / dashed / ink-filled), never a second colour.
- Overpass for display and body at 400/600/800, Overpass Mono for dates, codes and labels; no italics anywhere.
- Hairline rules (1px) and vast vertical space (72px between stations) instead of cards, boxes or shadows.
- 0-radius buttons and 50% rings: squares for actions, circles for places on the line.
- One motion moment: the marker sliding down the line; reduced-motion disables it.
- Three renderings from one stylesheet: light, dark, and print (the page is the CV).

## Colors

A paper-and-ink neutral set with a single committed signal red, the red of a Copenhagen line map, used only for the line and what sits on it.

### Primary
- **Signal Red** (`signal-red`): The line itself (6px), the 5px border of every station ring, the filled 12px stop dots on branch lines, the portrait's 5px border, every text link, the filled primary button, the focus outline, the text-selection background, caret and `accent-color`. It is the only hue on the page. In the dark scheme it lifts to **Signal Red, Night** (`dark-signal-red`) so it keeps about 6:1 against the dark ground.
- **Signal Red, Faint** (`signal-red-soft`): The 2px branch line that threads the stops inside a station (16% red). Dark scheme: `dark-signal-red-soft` at 20%.

### Neutral
- **Paper Ground** (`ground`): Page background, sticky strip background, the fill inside strip station dots, and the text colour of hovered buttons. Cool, barely green near-white. Dark: `dark-ground`.
- **Surface White** (`surface`): The fill of station rings and hollow (current) stop dots, and the portrait backing. Dark: `dark-surface`, a step lighter than the ground so rings still read as hollow.
- **Ink** (`ink`): Body text, headings, the secondary button outline and text, the travelling marker, the terminus ring fill, the hover fill of every button, the skip link. Black with a cold green cast. Dark: `dark-ink`.
- **Soft Ink** (`ink-soft`): Every mono date, label, stack line, meta note and the lede paragraph; the inactive strip links. Dark: `dark-ink-soft`.
- **Hairline** (`hairline`): All 1px rules: the strip's top and bottom, the timetable row borders, definition-grid rows, feed rows, the colophon's top rule, and the scrollbar thumb. Dark: `dark-hairline`. Print: `#999`.

### Named Rules
**The One Red Rule.** Signal red belongs to the line. It may appear on the line, on a ring or dot that sits on the line, on a link, on the primary button, and on focus and selection. It never fills a panel, tints a background, or colours a heading.

**The Mark, Not Hue Rule.** State is carried by the form of a mark, never by a second colour: a past stop is a filled red dot, a current stop is a hollow ring (surface fill, red border), a planned stop is a dashed outline, the terminus is ink-filled. Adding a green, amber or blue to say "current" or "planned" breaks the diagram.

## Typography

**Display Font:** Overpass, variable 400 to 800, self-hosted (with Helvetica Neue, Arial fallback)
**Body Font:** Overpass (same file, same fallback)
**Label/Mono Font:** Overpass Mono, variable 400 to 600, self-hosted (with SFMono-Regular, Menlo, Consolas fallback)

**Character:** A highway-signage grotesk doing both display and reading, so the name set at 64px and a paragraph at 17px are visibly the same voice. Overpass Mono carries every measurement (dates, years, codes, tech stacks) so they align column-wise like a printed timetable. Tabular numerals are on everywhere. There are no italics; emphasis is weight.

### Hierarchy
- **Display** (800, clamp(2.5rem, 6vw, 4.5rem), 0.98, -0.02em): The name in the masthead, once. Print: 26pt.
- **Headline** (800, 1.75rem, 1.1, -0.01em): Station headings (one per section), each carrying a ring on the line. Print: 15pt.
- **Title** (600, 1.125rem, 1.1): Role and degree titles inside stops; project titles in timetable rows run a step larger at 1.2rem. The organisation name inside a title is bumped to 800. Print: 11.5pt.
- **Lead** (400, 1.25rem, 1.4): The one-line position under the name, capped at 34em. Narrow screens: 1.1rem.
- **Body** (400, 17px, 1.55, tabular-nums): All reading text, capped at the 68ch measure. Narrow screens: 16px. Print: 11pt at 1.4.
- **Label** (Overpass Mono 600, 12px, 0.1em, uppercase): Buttons. The strip ("You are here", station list) uses the same face at 0.08em, weight 400 for links and 600 for the current station name.
- **Meta** (Overpass Mono 400, 13px, 0.02em): Dates (`stop__when`, `row__when`), definition terms, feed meta (12.5px), stack lines (12.5px, 0.01em), the colophon (12.5px), and the masthead greeting (0.04em).

### Named Rules
**The No Italics Rule.** `em` renders as weight 600, never slanted. Book titles, foreign words and emphasis are all weight. This holds in print too.

**The Mono Is for Measures Rule.** Overpass Mono carries dates, years, codes, tech stacks, labels, meta notes and the colophon. It never sets a sentence of running prose and never exceeds 13px.

## Layout

The page is one centred document column with a rail on its left. The container is 1120px wide with 24px gutters (16px under 760px). Inside the left gutter sits the rail (88px desktop, 40px narrow) whose only job is to hold the line: the 6px line (5px narrow) is centred 40px (12px narrow) into the rail, and every station ring and the marker are positioned from that same centre. Content starts at gutter + rail and never crosses into the rail.

The masthead is a two-column grid (text, then a 120px portrait on the right, 32px gap) with 56px top padding; under 760px it collapses to one column with the portrait first at 88px. Below it a sticky strip (top 0, z-index 5, ground background, 1px hairline above and below) shows "You are here" plus the current station name on a 48px row, and the horizontally scrollable station list on a 40px row. Scroll padding of 72px keeps anchored headings clear of the strip.

Stations are separated by 72px of top padding (56px for the first, 56px narrow) and the line continues 96px below the last station before stopping 40px short of the page bottom. The reading column is capped at 68ch. Branch stops hang 36px inside the column with their 2px branch line 8px in and 1.9em between stops. Timetable rows are a two-column grid (72px date column, 20px gap, 68ch body) with 22px/26px vertical padding; definition grids use a 180px term column at 12px row padding; the feed uses a 10px row. Under 760px every two-column row collapses to one column with a 2px gap and the date moves above the title.

The single breakpoint is 760px. Print drops the strip, feed, Now section, marker, colophon and print button, narrows the rail to 56px, sets 11pt body on 16mm/14mm page margins, keeps stops and rows unbroken, and writes contact and repository URLs out after their labels.

### Named Rules
**The Rail Rule.** The left rail belongs to the line. Nothing but the line, the station rings and the marker is drawn there; text, images and rules start at the content edge.

## Elevation & Depth

The system is flat. Depth is conveyed by hairlines and by space: a 1px rule separates rows, 72px of air separates stations, and the sticky strip is distinguished by two hairlines rather than a shadow. Two objects are allowed to lift because they sit physically on top of the diagram: the portrait and the travelling marker. No card, button, panel or sticky element casts a shadow.

### Shadow Vocabulary
- **Portrait lift** (`box-shadow: 0 8px 24px -12px rgba(21, 24, 27, 0.35)`): The masthead portrait only. Removed in print.
- **Marker lift** (`box-shadow: 0 2px 6px -1px rgba(21, 24, 27, 0.4)`): The 12px ink marker that rides the line. Hidden in print.

### Named Rules
**The Two Shadows Rule.** Only the portrait and the marker cast shadows. Every other edge is a 1px hairline or nothing.

## Shapes

Two geometries, assigned by meaning. Everything that is a place on the line is a circle: station rings (22px, surface fill, 5px red border; 18px with 4px border narrow; 3pt border in print), stop dots (12px, red, 2px red border), the marker (12px, ink), the strip's station dots (10px, 2px red border, ground fill) and the portrait (120px, 5px red border). Everything that is an action or a container is square: buttons, the skip link, the strip, rows and grids all sit at 0 radius with 1px borders or none.

The line itself ends with a 3px rounded foot. Focus outlines are 2px red at 3px offset with a 2px radius. Variation in state is drawn by border style, not shape: a planned station ring has a 3px dashed border; a planned stop is a transparent dashed dot; the terminus ring is filled ink; a current stop is hollow. Rectangles never gain corners and circles never become squares.

### Named Rules
**The Square Actions, Round Stations Rule.** Buttons and containers are 0-radius; anything that marks a point on the line is a full circle. There is no 4px, 8px or pill radius anywhere in the system.

## Components

### Buttons
Mono uppercase labels in hard-edged boxes; they read as timetable codes, not as pills.
- **Shape:** Square (0 radius), 40px minimum height, 0 14px horizontal padding, 1px border, inline-flex with a 6px gap for the external-link arrow.
- **Primary:** Signal red fill, red border, white text. Used once per contact row for the email action.
- **Secondary:** Transparent fill, 1px ink border, ink text. GitHub, LinkedIn, Print CV.
- **Hover / Focus:** Both variants fill ink with ground-coloured text over a 150ms ease on background, colour and border. Focus-visible gets the global 2px red outline at 3px offset.
- **External link glyph:** An inline 11px SVG arrow (stroke 1.5, currentColor) after the label; hidden in print, where the button degrades to plain 10pt mono text with the URL written out.

### Navigation
The sticky strip is a line-diagram legend: "You are here" and the current station name on the first row, then the stations as a horizontal list.
- **Style:** Ground background, 1px hairline top and bottom, sticky at top 0. Station list scrolls horizontally with no visible scrollbar, 4px top padding, 2px gaps.
- **Typography:** Overpass Mono 12px uppercase at 0.08em; the current station name is weight 600 ink.
- **Links:** Soft ink text, each preceded by a 10px station dot (2px red border, ground fill), 40px tall with 12px right padding and 14px right margin, a 2px transparent bottom border.
- **Hover:** Text turns ink. **Current (`aria-current="true"`):** Text ink, bottom border red, dot filled ink.
- **Mobile:** Same strip, 16px gutters, list scrolls.

### Station Headings
A section heading with a ring on the line.
- **Ring:** 22px circle, surface fill, 5px red border, absolutely positioned into the rail on the line's centre and vertically centred on the heading's cap height (top at 0.9em minus half the ring).
- **States:** `is-here` scales the ring by 1.12 over 0.4s; `station--planned` draws a 3px dashed ring; `station--terminus` fills the ring ink.
- **Spacing:** 72px above each station; headline at 1.75rem/800 with 0.9em below.

### Branch Stops
Roles, degrees and the planned thesis as stops on a branch inside the column.
- **Branch line:** 2px faint red, 8px from the list's left edge, inset 12px top and bottom.
- **Stop dot:** 12px red circle on the branch at 6px from the top of each stop. `stop--current` is hollow (surface fill); `stop--planned` is transparent with a dashed border.
- **Content:** Mono date line (13px soft ink, 4px below), title at 1.125rem/600 with the organisation in 800, then body or a bulleted list. Stops are 1.9em apart; 36px left padding (28px narrow).

### Timetable Rows
Projects as ruled rows: the date in a narrow left column, the body to its right.
- **Rule:** 1px hairline above the list and below each row; no backgrounds, no cards.
- **Grid:** 72px mono date column, 20px gap, body capped at 68ch; 22px top and 26px bottom padding.
- **Title:** 1.2rem/600 link in ink with a red underline; hover turns the text red.
- **Stack line:** Overpass Mono 12.5px soft ink, 0.7em below the title.
- **Mobile:** One column, date above the title with a 2px gap.

### Definition Grid
Skills and activities as a two-column ruled list.
- **Grid:** 180px mono term column (13px soft ink, 3px top padding), 20px gap, 12px vertical padding, 1px hairline above the list and below each row. Capped at 68ch.
- **Mobile:** One column with a 2px gap.

### Feed List
Recently pushed repositories, live from the GitHub API with a static fallback.
- **Row:** Two-column grid (name, then mono meta 12.5px soft ink aligned right, nowrap), 10px vertical padding, 1px hairline rules, baseline aligned.
- **Link:** Weight 600 ink with a red underline; hover turns red. A 12px mono note under the list states whether the list is live.

### Links
Red text with a 1px underline offset 0.18em; the underline thickens to 2px on hover. Links set inside headings (projects, feed) are ink with a red underline and turn red on hover. Print renders all links as ink with no underline and writes project URLs after the title in 8.5pt mono.

### Portrait
120px circle (88px narrow, 72pt print) with a 5px red border and surface backing, carrying the portrait lift shadow. It sits right of the masthead text on desktop and above it on narrow screens.

### Skip Link
Ink box with ground text, Overpass Mono 12px, 8px 12px padding, parked at -48px and revealed at 12px on focus.

### The Travelling Marker (signature)
A 12px ink circle on the line that marks the reader's position. The script picks the current station by a probe a third of the viewport (max 260px) below the scroll top, snaps to the last station at the page end, and sets `--marker-y` to that station's ring centre. The marker moves there with `transform 0.9s cubic-bezier(0.19, 1, 0.22, 1)`; at the same moment the strip updates "You are here", the station link gains `aria-current`, and the reached ring scales 1.12. Under `prefers-reduced-motion: reduce` the transition is removed and the marker jumps. It is the page's only motion event and is hidden in print.

## Do's and Don'ts

### Do:
- **Do** keep signal red (`#C8102E` light, `#E8364F` dark) for the line, rings, dots, links, the primary button, focus and selection only (The One Red Rule).
- **Do** draw state with the form of a mark: filled past, hollow current, dashed planned, ink-filled terminus (The Mark, Not Hue Rule).
- **Do** set every date, year, code, stack line and label in Overpass Mono at 12 to 13px, and keep `font-variant-numeric: tabular-nums` on.
- **Do** separate content with 1px hairlines (`#C9CBC9`) and vertical space (72px between stations, 22/26px row padding, 12px grid rows), never with boxes.
- **Do** keep all buttons at 0 radius with mono uppercase labels at 0.1em and 40px height, and all marks on the line at 50% radius.
- **Do** keep the reading column at 68ch to the right of the 88px rail, with the line centred 40px into the rail.
- **Do** ship every scheme from the same rules: dark swaps only the seven colour tokens; print hides the strip, feed, marker and colophon and prints the line on white.
- **Do** respect `prefers-reduced-motion`: the marker jumps and nothing transitions.

### Don't:
- **Don't** add a second accent hue, a tinted panel, a gradient, or a coloured heading; ink and one red are the whole palette.
- **Don't** use italics; `em` is weight 600.
- **Don't** round a rectangle (no 4px, 8px or pill corners on buttons, rows, strips or inputs) and don't square a station ring.
- **Don't** add cards, drop shadows or elevation to content; only the portrait and the marker may cast a shadow (The Two Shadows Rule).
- **Don't** place anything but the line, its rings and the marker inside the left rail.
- **Don't** add motion beyond the marker's travel, the ring's 1.12 scale and the 150ms button fill.
- **Don't** set running prose in Overpass Mono or let mono exceed 13px.
- **Don't** use icon fonts or glyph icons; the only icon is the inline 11px external-link SVG stroke in `currentColor`.
