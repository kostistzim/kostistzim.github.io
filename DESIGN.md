---
name: kostistzim.github.io
description: A quiet dark notebook page with working instruments; one narrow column, ruled lists, a clear type ramp, and a single ember accent reserved for live state.
colors:
  ground: "#0F0F0F"
  surface: "#161616"
  fg: "#EDEDED"
  muted: "#8F8F8F"
  hairline: "#262626"
  hairline-strong: "#333333"
  ember: "#E8623C"
  ember-soft: "rgba(232, 98, 60, 0.18)"
  light-ground: "#FAFAF9"
  light-surface: "#FFFFFF"
  light-fg: "#141414"
  light-muted: "#6B6B6B"
  light-hairline: "#E6E5E1"
  light-hairline-strong: "#D4D3CE"
  light-ember: "#B8431F"
  light-ember-soft: "rgba(184, 67, 31, 0.14)"
typography:
  display:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 5.4vw, 52px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  contact:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(24px, 4.2vw, 36px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  item-title:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  small:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  meta:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.005em"
  control:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  micro:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.01em"
rounded:
  cell: "2px"
  book: "3px"
  cover: "4px"
  focus: "4px"
  control: "6px"
  art: "8px"
  row: "10px"
  tile: "14px"
  pill: "999px"
spacing:
  xs: "2px"
  sm: "6px"
  md: "12px"
  tile: "14px"
  row: "16px"
  label-gap: "20px"
  intro: "56px"
  block-gap-narrow: "72px"
  block-gap: "96px"
  page-top: "120px"
  contact-gap: "128px"
  page-bottom: "160px"
components:
  tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.tile}"
    padding: "{spacing.tile}"
    height: "180px"
  section-label:
    textColor: "{colors.fg}"
    typography: "{typography.title}"
  list-item:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "16px 0"
  project-row-active:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.row}"
    padding: "16px 12px"
  badge:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "0 8px"
    height: "20px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.micro}"
    rounded: "{rounded.pill}"
    padding: "2px 8px"
  stack-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "12px 0"
  skills-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "10px 0"
  preview-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.tile}"
    padding: "16px"
    width: "280px"
  email-large:
    textColor: "{colors.fg}"
    typography: "{typography.contact}"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 8px"
    height: "32px"
  copy-button-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
  dock:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "4px"
  dock-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "36px"
  dock-button-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg}"
  live-dot:
    backgroundColor: "{colors.ember}"
    rounded: "{rounded.pill}"
    size: "6px"
---

# Design System: kostistzim.github.io

## Overview

**Creative North Star: "The Notebook with Instruments"**

The page is a single sheet of near-black paper read top to bottom like a CV, and it prints as one. It opens on a large name and closes on a large email address; between those two peaks every section is a plain sentence-case title over a ruled list. Nothing on the sheet asks for attention except the things that are actually alive: one row of small working instruments under the intro (a ticking Copenhagen clock with the weather, a Last.fm now-playing card, the book being read, a Danish word of the day) and a year of real GitHub contributions further down. Proof is shown as working things, not claimed.

Hierarchy is carried by type and rhythm alone. A seven-step ramp runs from an 11px mono micro size to a fluid display name, with clear jumps between steps, and sections stand 96px apart so each reads as its own page of the notebook. Prose is Geist Sans; every date, duration, place, stack and control is Geist Mono. The build rejects the loud portfolio hero with imagery, decorative gradients, the card grid, and the transit line of an earlier build. Depth comes from one tonal step (ground to surface) and 1px hairlines.

Colour is a discipline rather than a palette. One ember accent exists and is spent only on live state: the second hand, the breathing "now" dot, the contribution cells, the copy confirmation, text selection and the focus ring. A light scheme and a print scheme re-map every token so the same structure survives on white paper.

**Key Characteristics:**
- One 680px column, centred; the only thing outside it is a project preview card on screens of 1100px and wider.
- Two type voices: Geist Sans for prose, labels and peaks; Geist Mono for data and controls.
- Two typographic peaks, the name at the top and the contact email at the bottom; everything between is title, body and meta.
- Ruled lists (1px hairline top and bottom) carry every section; tiles and the preview card are the only bordered, rounded surfaces.
- One accent, ember, reserved for things that are live right now.
- Three schemes (dark, light, print) driven by the same custom properties; dark is the default.
- Motion is confined to instruments and live state: the clock ticks, the live dot breathes, the preview card rises; everything else is a 150–200ms colour fade.

## Colors

A near-black notebook with one warm ember spark; the light scheme is the same page under daylight.

### Primary
- **Ember** (`{colors.ember}`): the only chromatic colour, exposed in CSS as `--accent`. Spent exclusively on live state: the clock's second hand and pivot, the 6px live dot beside "Currently", a current role or a playing track, the four intensity steps of the contribution graph (fill-opacity 0.32 / 0.55 / 0.78 / 1), the "Copied" confirmation, the caret, text selection and the focus ring. In the light scheme it deepens to `{colors.light-ember}` for contrast on white.
- **Ember Soft** (`{colors.ember-soft}`): an 18% ember wash used only as the halo ring around the live dot.

### Neutral
- **Ground** (`{colors.ground}`): the page, and the hover fill of dock buttons (they sink into the page).
- **Surface** (`{colors.surface}`): one tonal step up. Widget tiles, the dock, the preview card, the active project row and the hover fill of the inline copy button.
- **Foreground** (`{colors.fg}`): prose, the name, section titles, item titles, the contact email and links, clock hands. Also the skip-link background (inverted).
- **Muted** (`{colors.muted}`): every secondary line: the role, item meta, sub-lines, stacks, notes, tile captions, the stack group labels and tool marks, badges and chips, the preview's language dot, month labels, and the resting colour of all controls.
- **Hairline** (`{colors.hairline}`): the 1px rules between rows, the resting border of tiles, the preview card and chips, empty image fills and the zero-contribution cell.
- **Hairline Strong** (`{colors.hairline-strong}`): tile and preview borders on hover, badge outlines, the dock border and separators, the scrollbar thumb.

Light scheme (`:root[data-theme="light"]`) swaps the six neutrals to `{colors.light-ground}`, `{colors.light-surface}`, `{colors.light-fg}`, `{colors.light-muted}`, `{colors.light-hairline}`, `{colors.light-hairline-strong}`; the ember pair swaps to `{colors.light-ember}` / `{colors.light-ember-soft}`. Print re-maps again to pure white, black, #444 muted, #bbb / #999 hairlines and the light ember.

### Named Rules
**The Live-Only Ember Rule.** Ember marks something that is true right now: a ticking second hand, a playing track, a current role, a commit this year, a just-copied address. It never colours a heading, a link, a badge, a language dot, a button at rest, or decoration. If it is not live, it is foreground or muted.

**The Two-Hairline Rule.** Structure is drawn with 1px hairlines at exactly two strengths: `hairline` for rules and resting borders, `hairline-strong` for hover, outlines that must hold their own (badges), and the dock chrome. No other border colours exist.

## Typography

**Display Font:** Geist Sans at weight 500 with tight negative tracking (no separate display family).
**Body Font:** Geist Sans (with Helvetica Neue, Arial, sans-serif), loaded through the `geist` package as `--font-geist-sans`.
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo, monospace), loaded as `--font-geist-mono`.

**Character:** One family pair in two voices. The sans reads and announces; the mono counts. Size now carries hierarchy alongside weight and colour: a fluid display name, 22px section titles, a 17px lead, 15px body, and mono metadata beneath, each step a visible jump from the next.

### Hierarchy
- **Display** (500, `--text-display`, 1.02, -0.035em, balanced wrap): the name, once, at the top of the sheet; also the heading of the 404 page. Print sets it at 22pt.
- **Contact** (500, fluid 24–36px, 1.1, -0.03em): the email address in the Contact close, the page's last peak. Sans, not mono, because here the address is the statement. Hover thickens the underline to 2px.
- **Title** (500, `--text-title`, 1.2, -0.02em): every section heading (`Projects`, `Experience`, `Contact`...), sentence case, foreground, `--label-gap` below. Also the Danish word inside its tile. Print sets titles at 13pt.
- **Lead** (400, `--text-lead`, 1.55, pretty wrap): the role line (muted), the "Currently" paragraph and the contact lede (capped at 34em). The voice of the intro and the close.
- **Item Title** (500, 16px, -0.01em): titles of ruled list items; underline on hover when a link.
- **Body** (400, `--text-body`, 1.6): prose, stack names, skill values, book titles (500), tile titles (500). The 680px column caps lines at roughly 80 characters. The intro's "Currently" label sits at body size with 10px below it, as part of the intro statement rather than a section.
- **Small** (400, `--text-small`): artist, author and note lines, the Danish meaning and example.
- **Meta** (400, mono, `--text-meta`, 0.005em): the `.mono` voice for years, places, date ranges, durations, stacks, contact links, the "built" line and tile caption values. Muted unless it is a footer link.
- **Control** (400, mono, 12px): text inside dock buttons, the copy control, the skip link and the contribution caption.
- **Micro** (400, mono, `--text-micro`, 0.01em): badges, preview chips, month labels, the Danish pronunciation and missing-cover initials.

Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on body), so columns of dates line up without a table.

### Named Rules
**The Mono-Is-Data Rule.** If a string is a date, a duration, a place, a stack, a pronunciation or a control label, it is Geist Mono and muted. Prose never goes mono. The one address that goes sans is the large contact email, because there it is the page's closing statement.

**The Two-Peaks Rule.** The sheet has exactly two large moments: the display name that opens it and the contact email that closes it. Everything between tops out at the 22px title; new surfaces do not add a third peak.

## Layout

One centred column, `max-width: 680px`, padded 120px top and 160px bottom (the bottom clearance keeps the fixed dock off the close) with 24px gutters. The intro is name (14px below), role (56px below), then the "Currently" block and the inline email. The widget row follows 56px later. Every following section is a `.block` separated by `--block-gap`; inside a section the title has `--label-gap` below it and the list follows directly. The Contact close sits 128px below the last section with a 1px hairline across its top and 40px of padding above its title, so it reads as the foot of the page.

Lists are ruled, not boxed: each item has 16px vertical padding and a 1px hairline on top, the last also closing with one. The head row is a flex row with 16px gap, title left, mono meta right, baseline-aligned; sub-line, line and stack follow at 3 / 6 / 8px. Project rows extend 12px into the gutter on both sides so the active row can fill with surface at the row radius without shifting its text; adjacent rules hide around the active row. Two-column ruled grids share one 170px label column with a 16px gap: the tech stack (12px row padding, each group a wrapping row of tools at 6px / 18px gaps), the spoken-languages and `Also` rows (10px padding, `Also` with a mono date in the label column). The shelf is a ruled list of 10px rows with a cover beside title, author and note.

The widget row is a grid of a fixed 180px clock column followed by `repeat(auto-fit, minmax(200px, 1fr))`, 12px gap; every tile is 180px tall so the row reads as one instrument strip. Activity is the contribution graph followed by an "All repositories on GitHub" link: one 53-week SVG at native size inside a horizontal scroller whose outer box is `dir="rtl"` around an inner `dir="ltr"` box of `width: max-content`, so on narrow columns it opens at the latest weeks and scrolls back in time. When the calendar is empty the section renders a single muted note instead.

On screens 1100px and wider the project list gains a 280px preview card 32px to the right of the column, sticky 96px from the top, showing the active row's repository.

Responsive behaviour is screen-only. At 640px and below: `--block-gap` becomes 72px, page padding 80px / 128px with 20px gutters, the role keeps 40px below, widgets become two columns with the clock spanning the full row, ruled grids stack to one column with 6px gap, item heads stack title over meta, the Contact close sits 96px below, and the dock sits 16px from the bottom. At 420px and below widgets are a single column.

Print is a fourth layout: `@page` margins 16mm / 14mm, body 10.5pt at 1.45, full-width column, blocks at 18pt, items at 7pt, the role at 11pt, the contact email at 14pt, project rows reset to the plain ruled list (no gutter bleed, no fill, no radius), and the widgets, dock, skip link, copy controls, activity, shelf, preview, "more" links, notes and live dots removed. Project and footer links print their `href` in 8–8.5pt mono.

## Elevation & Depth

Flat by default. Depth is one tonal step (ground to surface) plus 1px hairlines; no gradients, no blur. Tiles, the preview card and the active project row answer state by stepping border or fill, never by lifting. Two things cast shadows, both because they are objects rather than surfaces: the dock, which floats over scrolling content, and book covers, which sit on the page like the books they are. The live dot's ring is a halo, not a shadow.

### Shadow Vocabulary
- **Dock float** (`box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.6)`): only on the fixed pill dock.
- **Cover rest** (`box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.6)` on the reading cover; `0 4px 10px -6px rgba(0, 0, 0, 0.6)` on shelf covers): a short soft contact shadow under book cover images.

### Named Rules
**The Objects-Only Shadow Rule.** Only things that are objects cast shadows: the floating dock and book covers. Tiles, cards, rows, badges and buttons stay flat; their depth is a border or fill change.

## Shapes

Mostly square. Text, rules and lists have no radius; rules are straight 1px lines across the full column. Curvature belongs to things you touch or that hold instruments, at four named radii: tiles and the preview card at a soft 14px (`--radius-tile`), the active project row at 10px (`--radius-row`), inline controls and the skip link at 6px (`--radius-control`), and full pills (`--radius-pill`) for the dock, its buttons, badges and chips. Image corners sit outside the scale: album art 8px, the reading cover 4px, shelf covers 3px. The focus ring is 4px, contribution cells and legend swatches 2px, and the live and language dots are circles. Icons are 14px inline SVG outlines at 1.4 stroke with round caps and joins, inheriting `currentColor`; tech-stack marks are 13px filled Simple Icons paths in muted, with a 4px muted dot where no mark exists.

## Components

### Buttons
Quiet mono controls that rest muted and brighten on hover; nothing is filled at rest.
- **Shape:** pill in the dock; 6px in-line.
- **Dock button:** transparent, muted, 12px Geist Mono, 36px tall, 12px horizontal padding (11px icon-only), 7px gap between a 14px icon and its label.
- **Copy button (in-line):** 32px tall, 8px padding, same voice; an 18px icon beside the large contact email.
- **Hover / Focus:** text goes foreground and the background fills with ground in the dock or surface in-line, over 150ms. Active presses down 1px. Focus-visible is the global 2px ember outline at 3px offset with a 4px radius.
- **Feedback:** copying never navigates. Success shows "Copied" in a polite live region; when the clipboard is blocked, the in-line control says "Select and copy" and the dock button shows the address itself, leaving the mailto link (which carries a subject) intact.

### Badges and Chips
Muted mono outlines that label without colour.
- **Badge** (beside a project title): 20px tall pill, 1px hairline-strong border, muted 11px mono, 8px padding.
- **Chip** (preview card stack): pill with a 1px hairline border, muted 11px mono, 2px / 8px padding.

### Cards / Containers
Widget tiles hold instruments; the preview card is the only other container.
- **Tile:** surface fill, 1px hairline border, 14px radius, 14px padding, 180px tall; hover steps the border to hairline-strong. A muted 12.5px caption row (name left, mono value right, baseline-aligned) is pinned to the bottom of every tile.
- **Preview card:** 280px, surface, 1px hairline, 14px radius, 16px padding, 10px gap; mono repository line, 14px description, mono meta row with a muted language dot, stars and last push, then chips. Rises 6px into place over 0.5s on change.

### Lists
The workhorse: every section's content is a ruled list.
- **Item:** 16px padding, hairline above, closing hairline after the last; item title left, mono meta right.
- **Project row:** an item whose hovered or focused state fills with surface at 10px radius and drives the preview card; the first row is active at rest.
- **Stack group:** 170px muted label column, then a wrapping line of tools, each a 13px muted mark and the name in body text, no pill chrome.
- **Book:** cover beside a 500-weight title with small muted author and note; the title underlines on hover. Missing covers show mono initials in a hairline box.

### Navigation
The dock is the page's whole navigation: three actions, not links.
- **Style:** fixed, bottom centre, 24px up (16px under 640px), a surface pill with a 1px hairline-strong border, 4px padding, 2px between buttons, 1px × 16px hairline-strong separators, and the dock shadow.
- **Actions:** copy email, print, theme toggle (icon only, sun or moon).

### Links
- Inherit the surrounding colour; no underline at rest, 1px underline at 0.2em offset on hover. Contact and footer links are foreground; "More on GitHub" and "All repositories on GitHub" are muted and brighten on hover.

### Live Dot
- A 6px ember circle with a 3px ember-soft halo that breathes out to 5px and fades over 3.2s, 9px before its text. Marks "Currently", a current role and a playing track. Static under reduced motion; hidden in print.

### Instruments (signature)
- **Clock:** an SVG dial filling the 180px clock column; sixty ticks, foreground hour and minute hands, an ember second hand easing between ticks over 200ms and an ember pivot. Captions: a weather line, then "Copenhagen" with the mono time.
- **Now playing:** 56px album art at 8px radius beside a 500 title and small muted artist, single-line with ellipsis; the caption carries "Now playing" with the live dot, "Last played", or "Music".
- **Reading now:** the cover (48 × 72px, 4px radius) beside a title clamped to three lines and a small author; caption "Reading now" with the mono start date.
- **Danish word:** the word at title size with its mono micro pronunciation beside it, then a two-line muted meaning and a two-line example with muted translation.
- **Contributions:** 10px cells at 3px gaps with 2px radius, hairline for zero and ember at four opacities, 11px mono month labels, and a 12px mono caption with a Less–More legend.

### Not-found page
- Same column and type: the display heading "Nothing here", a muted lead explaining the miss, a link back to the front page, and the in-line copyable email.

## Do's and Don'ts

### Do:
- **Do** set every section heading as a 22px weight-500 sentence-case title over a ruled list; add a section, not a card, when content grows.
- **Do** separate sections with `--block-gap` (96px, 72px under 640px) and keep `--label-gap` (20px) under titles.
- **Do** take sizes from the type tokens (`--text-display` through `--text-micro`) and radii from the radius tokens rather than inventing new values.
- **Do** set dates, durations, places, stacks and control text in Geist Mono and muted.
- **Do** reach for `hairline` first and `hairline-strong` only for hover, badges and dock chrome.
- **Do** spend ember only on live state, and mark "now" with the breathing 6px live dot.
- **Do** add new widgets as 180px-tall, 14px-radius surface tiles in the widget row, with a muted caption pinned to the bottom.
- **Do** re-map new colours in all three schemes (dark root, `[data-theme="light"]`, `@media print`) and hide interactive or live-only elements in print.
- **Do** give every live or fetched element a quiet fallback line instead of an empty box.
- **Do** honour `prefers-reduced-motion` (all transitions and animations off).

### Don't:
- **Don't** add a third typographic peak; nothing between the name and the contact email exceeds the 22px title.
- **Don't** set section titles in uppercase, tracked caps, or as eyebrows above another heading.
- **Don't** use ember for links, headings, badges, language dots, buttons at rest, or decoration.
- **Don't** wrap tools or skills in pills; the stack is names with small marks on a ruled grid.
- **Don't** add shadows to tiles, cards, rows or buttons; only the dock and book covers cast them.
- **Don't** box list content in cards or add vertical rules; lists are separated by horizontal hairlines only.
- **Don't** underline links at rest; underline appears on hover only.
- **Don't** use icon fonts or glyph characters as icons; icons are inline SVG.
