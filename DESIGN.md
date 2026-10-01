---
name: r6operators
description: Dark-chrome docs site for R6S operator icons, carrying a dry-transfer specimen sheet on a green cutting mat.
colors:
  mat-green: "#0d5c3f"
  acetate-grey: "#e7ecea"
  acetate-field: "#f4f7f5"
  print-black: "#121513"
  print-black-soft: "#3d4742"
  attacker-red-orange: "#b92a06"
  defender-cobalt: "#1849c9"
  led-orange: "#ff5a2a"
  chrome-bg: "#070809"
  chrome-surface: "#0c0f12"
  chrome-surface-raised: "#111519"
  chrome-border: "#1a2030"
  chrome-border-strong: "#253040"
  chrome-text: "#b8c8d8"
  chrome-text-dim: "#7a90a8"
  chrome-attacker-amber: "#f59e0b"
  chrome-defender-sky: "#38bdf8"
typography:
  sheet-title:
    fontFamily: "Barlow Condensed, Rajdhani, sans-serif"
    fontSize: "clamp(36px, 5vw, 56px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  band-name:
    fontFamily: "Barlow Condensed, Rajdhani, sans-serif"
    fontSize: "26px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.06em"
  cell-name:
    fontFamily: "Barlow Condensed, Rajdhani, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "0.05em"
  control:
    fontFamily: "Barlow Condensed, Rajdhani, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    letterSpacing: "0.08em"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "12px"
    fontWeight: 400
    letterSpacing: "0.04em"
  sheet-note:
    fontFamily: "Inter, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  chrome-display:
    fontFamily: "Rajdhani, sans-serif"
    fontSize: "clamp(52px, 9vw, 108px)"
    fontWeight: 700
    lineHeight: 0.88
    letterSpacing: "-0.01em"
  chrome-body:
    fontFamily: "Inter, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0"
  chrome-sm: "3px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "18px"
  lg: "28px"
  xl: "48px"
components:
  control:
    backgroundColor: "transparent"
    textColor: "{colors.print-black}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "5px 11px"
  control-active:
    backgroundColor: "{colors.print-black}"
    textColor: "{colors.acetate-grey}"
  pill-active-attacker:
    backgroundColor: "{colors.attacker-red-orange}"
    textColor: "{colors.acetate-grey}"
  pill-active-defender:
    backgroundColor: "{colors.defender-cobalt}"
    textColor: "{colors.acetate-grey}"
  field:
    backgroundColor: "{colors.acetate-field}"
    textColor: "{colors.print-black}"
    rounded: "{rounded.none}"
    padding: "5px 10px"
  sheet:
    backgroundColor: "{colors.acetate-grey}"
    textColor: "{colors.print-black}"
    rounded: "{rounded.none}"
    padding: "28px 40px 52px"
  cell:
    backgroundColor: "transparent"
    textColor: "{colors.print-black}"
    rounded: "{rounded.none}"
    padding: "26px 6px 18px"
  install-cmd:
    backgroundColor: "{colors.chrome-surface-raised}"
    textColor: "{colors.chrome-attacker-amber}"
    rounded: "{rounded.chrome-sm}"
    padding: "10px 16px"
---

# Design System: r6operators

## Overview

**Creative North Star: "The Rub-Down Sheet"**

The site runs two registers. The primary, new world is the specimen sheet: a cool grey acetate carrier printed in black, with crop marks and registration crosses, lying on a saturated green self-healing cutting mat with faint grid lines. The catalogue reads as one printed object, never a card grid. Type is Barlow Condensed caps for names and headers and JetBrains Mono for codes and measures. Spot inks carry the operator roles: red-orange for Attackers, cobalt for Defenders, black for Recruits.

The incumbent register, the hero, detail panel and footer, is dark chrome: near-black surfaces, cool blue-grey text, amber and sky accents, Rajdhani display and Inter body, hairline borders and tiny radii. It stays as built. The two registers meet at the sticky ruler toolbar, which belongs to the sheet world (acetate with a tick ruler along its lower edge).

The build treats print as flat: one ink per label, square corners, no gradients on the sheet. The icons keep their own multi-tone tiles; ink colors apply to print around them.

**Key Characteristics:**

- Sheet register: green mat, grey acetate, black print, hard-edged controls.
- Role is always carried by ink: red-orange, cobalt, black.
- Mono for every code, count and measure; condensed caps for every name.
- Chrome register: dark, hairline-bordered, amber and sky accents.

## Colors

Two palettes that do not mix: saturated green and grey print stock for the sheet, cold near-black for the chrome.

### Primary

- **Cutting-Mat Green** (#0d5c3f): the page field behind the sheet, overlaid with white grid lines at 96px major and 24px minor (11% and 5% white).
- **Print Black** (#121513): all sheet print, borders, active control fill, Recruit ink.

### Secondary

- **Attacker Red-Orange** (#b92a06): Attacker band, cell hover name, active Attacker filter.
- **Defender Cobalt** (#1849c9): Defender band, cell hover name, active Defender filter.
- **LED Orange** (#ff5a2a): the lit dot on the active click-action control only.

### Neutral

- **Acetate Grey** (#e7ecea): carrier sheet (92% opaque) and toolbar.
- **Acetate Field** (#f4f7f5): inputs and selects.
- **Soft Print Black** (#3d4742): secondary labels, codes, placeholders.
- **Chrome Night** (#070809), **Chrome Surface** (#0c0f12), **Chrome Raised** (#111519): hero, panel, footer layers.
- **Chrome Border** (#1a2030) and **Chrome Border Strong** (#253040): hairlines.
- **Chrome Text** (#b8c8d8) and **Chrome Text Dim** (#7a90a8): text on dark.
- **Chrome Amber** (#f59e0b) and **Chrome Sky** (#38bdf8): attacker and defender accents on dark only.

### Named Rules

**The Ink-Per-Role Rule.** Inside the sheet, role is expressed only through the three spot inks; the dark-chrome amber and sky never appear on the sheet, and sheet inks never appear on the chrome.

**The Lit-State Rule.** The only color-lit state on the sheet is the orange LED on the active click action; other active states invert to ink fill.

## Typography

**Sheet Display/Label Font:** Barlow Condensed (with Rajdhani, sans-serif)
**Sheet Mono Font:** JetBrains Mono
**Sheet Note and Chrome Body Font:** Inter
**Chrome Display Font:** Rajdhani

**Character:** Condensed uppercase grotesk reads like stencil and catalogue print; mono supplies the measured, coded voice.

### Hierarchy

- **Display** (700, clamp(36px, 5vw, 56px), 0.88): sheet title; chrome hero uses Rajdhani 700 at clamp(52px, 9vw, 108px).
- **Headline** (700, 26px, 1, 0.06em, caps): band names (ATTACKERS, DEFENDERS, RECRUITS).
- **Title** (600, 14px, 1.05, 0.05em, caps): operator name under each icon.
- **Body** (400, 13px, 1.5, max 46ch): sheet note; chrome body is Inter 14px to 16px.
- **Label** (600, 12px to 13px, 0.08em to 0.12em, caps): toolbar labels, pills, selects. Codes, counts and readouts use mono 12px at 0.04em.

### Named Rules

**The Names-Caps Rule.** Names and headers are condensed caps; codes and numbers are mono. Do not swap them.

## Layout

The sheet is centered at max 1240px inside the mat (padding 40px 48px 88px), with inner padding 28px 40px 52px. Content is split into role bands (34px apart) that each hold an auto-fill grid with columns of icon size + 52px, so the column count follows the viewport. Icon size is driven by one custom property (`--icon`, default 64px) set by the toolbar ladder, 32 to 128. The sticky toolbar spans the same 1240px and wraps on narrow widths. At 768px and below the toolbar becomes static, crop marks hide, mat and sheet padding shrink (10px and 14px) and cell columns tighten to icon + 28px. Chrome uses 1200px inner width and 48px side gutters (20px on mobile). Spacing is pragmatic px steps, not a strict scale.

## Elevation & Depth

Depth on the sheet is physical and minimal: the acetate lifts off the mat with one soft drop shadow (`0 18px 40px -12px rgba(0,0,0,0.55), 0 2px 6px rgba(0,0,0,0.35)`) and a 1px inner white hairline outline. Everything inside the sheet is flat. The detail panel uses a 55% black backdrop and a hairline left border, no shadow.

### Named Rules

**The One-Lift Rule.** Only the carrier sheet casts a shadow. Cells, controls and bands are flat.

## Shapes

Sheet world: square corners everywhere (0 radius), 1px black borders on controls, 2px black rules under the toolbar and sheet header, 3px band rules in role ink. Icons sit in a 1px dashed ink outline offset 6px (a registration boundary). Crop marks are 20px corner L-shapes outside the sheet; a registration cross marks the header. Chrome world: 1px to 3px radii, hairline borders. Active circles are used only for the LED (8px) and rating pips.

## Components

### Buttons and Pills (sheet)

- **Shape:** square, 1px black border.
- **Default:** transparent, black condensed caps, 5px 11px padding.
- **Hover:** 10% black wash. **Active:** black fill with acetate text; role pills take red-orange or cobalt fill.
- **Focus:** 2px black outline, 2px offset.
- **Click-action row:** controls carry an 8px LED that lights orange when `aria-pressed="true"`.

### Inputs / Fields

- **Style:** acetate-field fill, 1px black border, square, condensed caps; select has a black triangle chevron.
- **Focus:** same 2px black outline.

### Navigation (ruler toolbar)

Sticky acetate bar with 2px black bottom border and a tick ruler (1px ticks every 8px, taller every 40px) along the bottom. Holds role pills, squad select, search, size ladder, click-action row, a mono readout and result count.

### Icon Cell (signature)

Icon in dashed registration outline above the name (Title style) and mono code. Hover and active tint the cell 9% and 15% in role ink and color the name; active and copied underline the name (2px). Clicking plays a 0.7s "burnish" hatch sweep across the icon, suppressed under reduced motion.

### Chrome Install Command and Detail Panel

Install command: raised surface, 1px strong border, 3px radius, amber mono text. Detail panel: 380px right drawer, dark surface, sticky header, small-caps section titles, pip ratings, tabbed code blocks with copy buttons (copied state green).

## Do's and Don'ts

### Do:

- **Do** keep sheet corners square and sheet strokes 1px black (2px to 3px for structural rules).
- **Do** color by role using only the three spot inks on the sheet.
- **Do** set codes, counts and measures in JetBrains Mono.
- **Do** drive icon size from the single `--icon` property.
- **Do** keep the orange LED for the active click action only.
- **Do** keep hero, panel and footer in the dark chrome tokens.

### Don't:

- **Don't** add gradients, glow or glass to the sheet; its only shadow is the carrier lift.
- **Don't** render operators as individual bordered cards; the catalogue stays one printed sheet.
- **Don't** use chrome amber or sky inside the sheet, or sheet inks inside the chrome.

### Not canonized (defects the build carries)

The hero eyebrow (small uppercase tracked kicker), the fractal-noise overlay on the body, amber and sky glow on scrollbar thumbs, and the hero diagonal gradient are incumbent or decorative residue. They are not rules for future surfaces.
