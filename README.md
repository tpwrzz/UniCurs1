# your.axolotl

Single‑page static website for a specialized axolotl veterinary clinic.

## Description
A lightweight, responsive one‑page site (index.html) with all UI, content and behavior in the repository:
- HTML contains the full page structure and text (see provided file).
- Styling in `public/index.css`.
- Interactivity (language switching, parallax, collapsible articles) in `src/script.js`.
- Media assets (icons, waves, axolotl images, favicon) are in `src/img/`.

The site supports three locales (ro, ru, en) through a simple localization switcher. It is intended as a portfolio / assignment submission for USM IAFR2302.

## Features
- Hero/banner with layered wave images and title
- About, Services, Blog, Contact sections and embedded Google Map
- Language switcher (română, русский, english)
- Parallax / scroll animations and collapsible blog entries
- Simple contact form (client-side only)
- Mobile-friendly navigation

## Project structure (important files)
- `index.html` — single page (the HTML you provided)
- `public/index.css` — styles
- `src/script.js` — JavaScript (localization, parallax, toggles)
- `src/img/` — all images and `axolotl.ico`

Adjust paths if you move files.

## How to run (local)
1. Open `index.html` directly in a browser (works for most modern browsers).
2. For a proper local server (recommended for consistent behavior with some browser APIs):
    - Python 3: `python -m http.server 8000` (run from project root) then open `http://localhost:8000`.
    - Or use any static server (VS Code Live Server, http-server, etc.).

## Localization
- The select element with id `localisation-switcher` toggles content.
- Strings are linked via `localisation-key` attributes on elements; logic lives in `src/script.js`.
- To add a new language: extend the localization object inside the JS and add an option to the select.

## Notes & TODOs
- Contact form currently client-side only — add backend endpoint or integration (email service) to collect submissions.
- Consider lazy-loading large images for performance.
- Validate and sanitize user input if hooking form to a server.
- Improve accessibility: add alt attributes for decorative images, ARIA attributes for collapsibles, focus management for nav.

## Deployment
- Any static host will work: GitHub Pages, Netlify, Vercel, Surge, S3 + CloudFront, etc.
- If using GitHub Pages, push repository and enable Pages on the main branch (or `gh-pages` branch) and set root to `/`.

## Credits
Author: Poverjuc Tatiana (for USM IAFR2302) — copyright line present in footer.