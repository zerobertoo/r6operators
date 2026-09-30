# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight: developers who want Rainbow Six: Siege operator icons and metadata in their project (Node, ESM, browser via CDN, React), and R6S fans who browse operators, icons and bios on the site itself.

## Product Purpose

`@zerobertoo/r6operators` is a library of hand-crafted SVG operator icons plus structured metadata (name, role, org, squad, ratings, bio, price), with a React wrapper (`@zerobertoo/r6operators-react`). The site in `docs/` is its public face on GitHub Pages: it must let a developer install and use the package, and let a fan explore every operator.

## Positioning

Vectorized, hand-crafted icons and season-aware metadata in one typed package, maintained as a fork of the original r6operators by Marco Vockner. Planned expansion to weapons and maps packages (see ROADMAP.md).

## Capabilities and Constraints

- Distributed via npm, jsDelivr and unpkg; TypeScript types included.
- Operator data and SVGs live in `operators/<name>/`; the site is served from `docs/` (currently `index.html`, `test-browser.html`).
- Fan project, not affiliated with Ubisoft.
- Must work on mobile.
- Stack for the redesigned site: undecided (existing site is single static HTML, no build step).

## Brand Commitments

Name `r6operators`. Attacker/defender distinction is a factual part of the data. Credits to original author and contributors must remain.

## Evidence on Hand

All operator SVGs and metadata in `operators/`, `docs/banner.jpg`, README.md, ROADMAP.md. No testimonials, usage stats or download counts on hand; do not fabricate.

## Product Principles

- Serve developers and fans equally; neither is a demo for the other.
- The icons are the product; let them carry the page.
- Copy-paste usage must be reachable within seconds.
- Stay clearly a fan project, never implying Ubisoft endorsement.
