# Vesta landing page — multilingual PoC (Eleventy)

A proof of concept for serving the landing page in multiple languages as
**pre-rendered static pages**, one per locale, from a **single template + per-locale
content files**. It demonstrates the mechanism end to end: routing, a language
switcher, and SEO `hreflang` — without disturbing the live site (production still
deploys from the repo root).

## Run it

```bash
cd i18n-poc
npm install
npm run build      # outputs to _site/
# or: npm run serve  (live preview at http://localhost:8080)
```

Open the result:

- `_site/index.html`     → English, served at `/`
- `_site/nl/index.html`  → Dutch,   served at `/nl/`

## How it works

```
src/
  index.njk                 ← the page, once. Strings come from `loc.t.*`.
  _data/
    locales.js              ← the list of languages + how each is routed
    site.json               ← base URL (for canonical/hreflang/OG)
    i18n/
      en.json               ← English copy (complete)
      nl.json               ← Dutch copy (DRAFT — see note below)
```

- **One template, N pages.** `index.njk` uses Eleventy *pagination* over `locales`
  to emit one HTML file per language. The default locale (`en`) is written to `/`;
  others to `/<code>/`. Layout changes happen once and every language regenerates.
- **Routing.** Subdirectory URLs (`/`, `/nl/`) — simplest on GitHub Pages and best
  for SEO. Adding a language = a new `xx.json` dictionary + one row in `locales.js`.
- **Language switcher.** Rendered in the header from the same `locales` list, with
  the current language marked `aria-current`.
- **SEO.** Each page gets the correct `<html lang>`, a self-referential `canonical`,
  a full set of `hreflang` alternates incl. `x-default`, and translated
  `<title>` / `meta description` / Open Graph tags.

## Scope of this PoC

To keep it reviewable, the **chrome, hero, every section eyebrow + heading, the CTA
block, and the footer** are fully externalised and translated. The longer **section
bodies** (stats, the How-it-works cards, the four principles, the FAQ) are still
English in the template, marked as the next extraction step. They were left inline
because they're the bulk of the copy and need **human transcreation**, not machine
translation — which is the real work of localisation, not the plumbing.

> `nl.json` is a **draft** translation for demonstration. Before anything ships,
> it needs review by a native Dutch copywriter (idioms like "more than one head can
> hold" and "Fun Time" must be transcreated, not translated literally).

## Productionising later

1. Finish extracting the section bodies into the dictionaries; get human translations.
2. Decide form strategy (the Tally waitlist embed needs a localised form or a language field).
3. Point GitHub Pages at the build: move the build to the repo root (or set Pages
   "Source" to GitHub Actions), then change `.github/workflows/i18n-poc.yml` to deploy
   on `push` to `main` instead of uploading an artifact. Keep the `CNAME`.
4. Roll out in the order on the FAQ: **NL → DE → FR → TR**. The Newsreader font
   subset already covers Turkish and German diacritics.
