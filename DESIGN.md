---
name: kostistzim.github.io
description: A quiet dark notebook page with working instruments; one narrow column, ruled lists, and a single ember accent reserved for live state.
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
  name:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  body-small:
    fontFamily: "Geist Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.6
  mono:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0.005em"
  mono-control:
    fontFamily: "Geist Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  cell: "2px"
  focus: "4px"
  control: "6px"
  art: "8px"
  tile: "14px"
  pill: "999px"
spacing:
  xs: "2px"
  sm: "6px"
  md: "12px"
  tile: "14px"
  row: "16px"
  list: "20px"
  role: "40px"
  block: "56px"
  page-top: "112px"
  page-bottom: "140px"
components:
  tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
    rounded: "{rounded.tile}"
    padding: "{spacing.tile}"
    height: "200px"
  tile-hover:
    backgroundColor: "{colors.surface}"
  dock:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.pill}"
    padding: "4px"
  dock-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.mono-control}"
    rounded: "{rounded.pill}"
    padding: "0 12px"
    height: "32px"
  dock-button-hover:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.fg}"
  copy-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.mono-control}"
    rounded: "{rounded.control}"
    padding: "0 6px"
    height: "28px"
  copy-button-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.fg}"
  list-item:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "14px 0"
  list-item-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "10px 0"
  skills-row:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    padding: "9px 0"
  live-dot:
    backgroundColor: "{colors.ember}"
    rounded: "{rounded.pill}"
    size: "6px"
---

# Design System: kostistzim.github.io

## Overview

**Creative North Star: "The Notebook with Instruments"**

The page is a single sheet of near-black paper read top to bottom like a CV, and it prints as one. Every section is a plain label above a ruled list; the type is small, the column is narrow, and nothing on the sheet asks for attention except the things that are actually alive. Those live things sit in one row of small working instruments under the intro (a ticking Copenhagen clock and a Last.fm now-playing card) and a year of real GitHub contributions further down. Proof is shown as working things, not claimed.

Density is editorial and quiet: 15px Geist Sans body with generous 1.6 leading, 12.5px Geist Mono for every fact that is a date, a duration, a stack or a control. The build rejects the loud portfolio hero, decorative gradients, the card grid, and the transit line of the previous build. Depth comes from one tonal step (ground to surface) and 1px hairlines; the only shadow in the system is under the floating dock.

Colour is a discipline rather than a palette. One ember accent exists and is spent only on live state: the second hand, the "now" dot beside a current role or a playing track, the disease nodes in the graph, the hottest contribution cells, text selection and the focus ring. A light scheme and a print scheme re-map every token so the same structure survives on white paper.

**Key Characteristics:**
- One 680px column, centred, no sidebar and no grid of cards.
- Two type voices only: Geist Sans for prose and labels, Geist Mono for metadata and controls.
- Ruled lists (1px hairline top and bottom) carry every section; widget tiles are the only bordered, rounded surfaces.
- One accent, ember, reserved for things that are live right now.
- Three schemes (dark, light, print) driven by the same custom properties; dark is the default.
- Motion is confined to the instruments: the clock ticks, the graph settles and follows the pointer; everything else is a 150–200ms colour fade.

## Colors

A near-black notebook with one warm ember spark; the light scheme is the same page under daylight.

### Primary
- **Ember** (`{colors.ember}`): the only chromatic colour. Spent exclusively on live state: the clock's second hand and pivot, the 6px live dot next to a current role or a playing track, the four intensity steps of the contribution graph (fill-opacity 0.32 / 0.55 / 0.78 / 1), the "Copied" confirmation text, the caret, text selection and the focus ring. In the light scheme it deepens to `{colors.light-ember}` for contrast on white.
- **Ember Soft** (`{colors.ember-soft}`): an 18% ember wash used only as the 3px halo ring around the live dot.

### Neutral
- **Ground** (`{colors.ground}`): the page itself, the body background, and the hover fill of dock buttons (they "sink" into the page).
- **Surface** (`{colors.surface}`): one tonal step up. The fill of widget tiles and the dock, and the hover fill of the inline copy button.
- **Foreground** (`{colors.fg}`): all prose, the name, section labels, list titles, footer links, clock hour marks and hands. Also the skip-link background (inverted chip).
- **Muted** (`{colors.muted}`): every secondary line: the role line, item meta, sub-lines, stacks, notes, tile captions, skill labels, month labels in the contribution graph, graph nodes that are not near the pointer, and the resting colour of all dock and copy controls.
- **Hairline** (`{colors.hairline}`): the 1px rules between list rows, the tile border at rest, the empty album-art fill and the zero-contribution cell.
- **Hairline Strong** (`{colors.hairline-strong}`): the tile border on hover, the dock border and separators, graph link lines, and the scrollbar thumb.

Light scheme (`:root[data-theme="light"]`) swaps the six neutrals to `{colors.light-ground}`, `{colors.light-surface}`, `{colors.light-fg}`, `{colors.light-muted}`, `{colors.light-hairline}`, `{colors.light-hairline-strong}`; the ember pair swaps to `{colors.light-ember}` / `{colors.light-ember-soft}`. Print re-maps again to pure white, black, #444 muted, #bbb/#999 hairlines and the light ember.

### Named Rules
**The Live-Only Ember Rule.** Ember marks something that is true right now: a second hand, a playing track, a current role, a commit this year, a hot graph node. It never colours a heading, a link, a button at rest, or decoration. If it is not live, it is foreground or muted.

**The Two-Hairline Rule.** Structure is drawn with 1px hairlines at exactly two strengths: `hairline` for rules and resting borders, `hairline-strong` for hover, the dock chrome and graph links. No other border colours exist.

## Typography

**Display Font:** none; the name is body-scale Geist Sans at 18px.
**Body Font:** Geist Sans (with Helvetica Neue, Arial, sans-serif), loaded through the `geist` package as `--font-geist-sans`.
**Label/Mono Font:** Geist Mono (with ui-monospace, SF Mono, Menlo, monospace), loaded as `--font-geist-mono`.

**Character:** Small, even, and tabular. The sans does all the reading; the mono does all the counting. Nothing is set above 18px on screen, so hierarchy comes from weight (500 versus 400), colour (foreground versus muted) and the sans/mono split rather than size.

### Hierarchy
- **Name** (500, 18px, 1.3, -0.01em): the h1 only, once, at the top of the sheet. Print raises it to 20pt.
- **Label** (500, 15px, 1.6, -0.005em): every section heading (`Currently`, `Projects`, `Experience`...), set in foreground sans with 12px below. Same size as body; weight alone separates it. Not uppercase, not tracked, not an eyebrow.
- **Body** (400, 15px, 1.6): prose paragraphs, list titles (titles carry weight 500), skill values, footer. Paragraphs space at 0.9em. The 680px column caps lines at roughly 80 characters. The role line and intro paragraphs use `text-wrap: pretty` so short last lines do not orphan.
- **Body Small** (400, 13px, 1.6): the artist line inside the music tile.
- **Mono** (400, 12.5px, 0.005em): the `.mono` class. Years, places, date ranges, durations, stacks, the email address, the contact links, the "built" line, tile captions' right-hand value. Always muted unless it is a link in the footer.
- **Mono Control** (400, 12px): text inside the dock buttons, the copy button, the skip link, the contribution caption.

Numerals are tabular everywhere (`font-variant-numeric: tabular-nums` on body), so columns of dates line up without a table.

### Named Rules
**The Mono-Is-Data Rule.** If a string is a date, a duration, a place, a stack, an address or a control label, it is Geist Mono at 12.5px and muted. Prose never goes mono; data never goes sans.

**The No-Display Rule.** There is no display size. The name is 18px; everything else is 15px or smaller. New surfaces do not introduce a larger heading.

## Layout

One centred column, `max-width: 680px`, padded 112px top and 140px bottom (the bottom clearance keeps the fixed dock off the last section) with 24px side gutters. The intro (name, role, `Currently`, email) sits at the top with the role line carrying 40px below it; every following section is a `.block` with 56px above. Inside a section the label has 12px below it and the list follows directly.

Lists are ruled, not boxed: each `.item` has 14px vertical padding and a 1px hairline on top, with the last item also closing with a hairline. The head row is a flex row with 16px gap, title left, mono meta right, baseline-aligned; sub-lines follow at 2–6px. Compact rows (`.item--row`, used for the repository list) drop to 10px padding. The skills list is a two-column definition grid, 170px label column and 16px gap, 9px row padding, same hairline rules; the `Also` section reuses the same grid for activities with a mono date in the label column. Compact rows and list titles are allowed to wrap (`flex-wrap: wrap`, 2px row gap; `overflow-wrap: anywhere` on titles) so long repository names never overflow the column.

The widget row is a `repeat(auto-fit, minmax(180px, 1fr))` grid with 12px gap, 40px below the intro; every tile is a fixed 200px tall so the row reads as one instrument strip. The contribution graph is one 53-week SVG at native size, 10px cells with 3px gaps and 2px radius, with 11px mono month labels above and a 12px mono caption and legend 8px below. It sits in a horizontal scroller (`.contrib__scroll`: `overflow-x: auto`, thin scrollbar, 4px bottom padding) whose outer box is `dir="rtl"` around an inner `dir="ltr"` box of `width: max-content`, so when the column is narrower than the grid it opens at the latest weeks and scrolls back in time.

Responsive behaviour is scoped to screen only. At 640px and below: page padding becomes 72px / 120px with 20px gutters, the clock tile stretches to fill the row, skill rows stack to one column, item heads and compact rows stack title over meta (`flex-direction: column; align-items: flex-start`), the contribution grid keeps its full width and scrolls from the latest weeks, and the dock sits 16px from the bottom. At 420px and below the tiles are 180px tall.

Print is a fourth layout: `@page` margins 16mm / 14mm, body 10.5pt with 1.45 leading, the column goes full width, blocks space at 18pt, items at 7pt, and the widgets, dock, skip link, copy button, activity section, "more" and note lines are removed. Project and footer links print their `href` in 8–8.5pt mono after the text.

## Elevation & Depth

Flat by default. Depth is one tonal step (ground `#0F0F0F` to surface `#161616`) plus 1px hairlines; there are no gradients, no blur, and no shadows on content. Tiles rest on surface with a hairline border and answer hover only by stepping the border to `hairline-strong`. The single shadow in the system belongs to the fixed dock, because it floats over scrolling content and needs separation from whatever passes underneath. The live dot carries a 3px ember-soft ring, which is a halo, not a shadow.

### Shadow Vocabulary
- **Dock float** (`box-shadow: 0 10px 30px -12px rgba(0, 0, 0, 0.6)`): only on the fixed pill dock.

### Named Rules
**The One-Shadow Rule.** The dock is the only element that casts a shadow, because it is the only element that floats. Tiles, lists and buttons stay flat; their depth is a border change.

## Shapes

Mostly square. Lists and text have no radius at all; rules are straight 1px lines that run the full column width. Curvature is reserved for things you can touch or that are instruments: widget tiles at a soft 14px radius with a 1px hairline border, album art at 8px, inline controls (copy button, skip link) at 6px, the focus ring at 4px, contribution cells and legend swatches at 2px. The dock and its buttons are full pills (999px) and the live dot is a circle. The empty album-art placeholder is a 135° hairline stripe pattern (2px on, 6px off) rather than a solid box. Icons are 14px inline SVG outlines at 1.4 stroke with round caps and joins, inheriting `currentColor`.

## Components

### Buttons
Quiet mono controls that rest muted and brighten on hover; nothing is filled at rest.
- **Shape:** pill in the dock (999px); small rounded in-line (6px) for the copy button.
- **Dock button:** transparent, muted text, 12px Geist Mono, 32px tall, 12px horizontal padding (9px for icon-only), 7px gap between a 14px icon and its label.
- **Hover / Focus:** text goes foreground and the background fills with ground in the dock or surface in-line, over 150ms. Active presses down 1px. Focus-visible is the global 2px ember outline with 3px offset.
- **Copy button (in-line):** 28px tall, 6px padding, same mono voice; a "Copied" state in ember text appears beside the icon via a polite live region.

### Cards / Containers
Widget tiles are the only cards, and they exist to hold instruments, not text.
- **Corner Style:** 14px.
- **Background:** surface.
- **Shadow Strategy:** none; hover steps the border to hairline-strong (see Elevation & Depth).
- **Border:** 1px hairline.
- **Internal Padding:** 14px.
- **Caption:** a 12.5px muted flex row, name left, mono value right, baseline-aligned, pinned to the bottom. Every tile carries one, including the music tile; there is no other label style inside tiles.

### Lists
The workhorse of the page: every section's content is a ruled list.
- **Item:** 14px vertical padding, 1px hairline above, closing hairline after the last. Head row: title (500 weight, foreground, underline on hover when a link) left, mono meta right, 16px gap, baseline aligned; muted sub-line, line and stack below at 2px / 4px / 6px.
- **Compact row:** 10px padding, single wrapping flex row, used for the repository list; stacks to a column under 640px.
- **Skills row:** definition grid, 170px muted label column, 16px gap, 9px padding, same rules.

### Navigation
The dock is the page's whole navigation: three actions, not links.
- **Style:** fixed, bottom centre, 24px from the bottom (16px under 640px), a surface pill with a 1px hairline-strong border, 4px padding, 2px between buttons, 1px × 16px hairline-strong separators, and the single dock shadow.
- **Typography:** 12px Geist Mono, muted at rest, foreground on hover; button labels never wrap.
- **Actions:** copy email (icon + label, live-region confirmation), print (icon + label), theme toggle (icon only, sun or moon).
- **Mobile:** unchanged except for the 16px bottom offset.

### Links
- Inherit the surrounding colour; no underline at rest, 1px underline at 0.2em offset on hover. Footer and email links are foreground; "More on GitHub" is muted and brightens to foreground on hover.

### Live Dot
- A 6px ember circle with a 3px ember-soft ring, 7px to the right margin, placed inline before "Now playing" or before a current role's meta line. Hidden in print.

### Instruments (signature)
- **Clock:** an SVG dial filling the tile; sixty tick marks (foreground at 2 stroke every fifth, muted at 1 otherwise), foreground hour and minute hands at 4 and 2.5 stroke, an ember second hand at 1.25 stroke that eases between ticks over 200ms, and an ember pivot. Caption: "Copenhagen" left, mono time right.
- **Now playing:** 64px album art at 8px radius (hairline stripe placeholder when absent), a 500-weight title and a 13px muted artist line, both single-line with ellipsis. The same bottom caption as the other tiles carries the state ("Now playing" with the live dot, "Last played", or "Music" when idle) left and mono "Last.fm" right. The whole tile is a link that does not underline.
- **Contributions:** a single 53-week SVG grid of 10px cells at 3px gaps with 2px radius inside a right-anchored horizontal scroller (opens at the latest weeks on narrow screens), hairline for zero and ember at 0.32 / 0.55 / 0.78 / 1 opacity for the four levels, 11px mono month labels, and a 12px mono caption with a Less–More legend.

## Do's and Don'ts

### Do:
- **Do** keep every section as a plain 15px weight-500 label over a ruled list; add a section, not a card, when content grows.
- **Do** set dates, durations, places, stacks and control text in Geist Mono at 12.5px muted (12px inside controls).
- **Do** reach for `hairline` first and `hairline-strong` only for hover, chrome and graph links.
- **Do** spend ember only on live state, and keep the 6px live dot as the marker for "now".
- **Do** add new widgets as 200px-tall, 14px-radius surface tiles in the widget row, with a muted caption pinned to the bottom.
- **Do** re-map new colours in all three schemes (dark root, `[data-theme="light"]`, `@media print`) and read them through custom properties.
- **Do** confine motion to instruments and 150–200ms colour fades, and honour `prefers-reduced-motion` (all transitions and animations off).

### Don't:
- **Don't** introduce a hero, a display size, or any heading larger than the 18px name.
- **Don't** set section labels in uppercase, tracked caps, or as eyebrows; they are sentence-case foreground sans.
- **Don't** use ember for links, headings, buttons at rest, or decoration.
- **Don't** add shadows to tiles, lists or buttons; the dock is the only floating element.
- **Don't** box list content in cards or add vertical rules; lists are separated by horizontal hairlines only.
- **Don't** underline links at rest; underline appears on hover only.
- **Don't** use icon fonts or glyph characters; icons are 14px inline SVG outlines at 1.4 stroke.
