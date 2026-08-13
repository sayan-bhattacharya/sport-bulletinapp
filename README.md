# Sport Bulletin App Concept

This repo contains a clone-inspired editorial sports homepage, plus product and market documents for a red-and-white sports bulletin app focused on cricket and football.

## Included

- `index.html`: homepage concept inspired by RevSportz structure with ESPN-like hierarchy
- `styles.css`: red-and-white editorial styling, motion, and responsive layout
- `app.js`: reveal interactions + X widgets loader
- `.github/workflows/ci.yml`: lightweight CI validation for the static site
- `.github/workflows/deploy-pages.yml`: GitHub Pages deployment workflow
- `.github/workflows/deploy-hostinger.yml`: Hostinger FTP deploy (gated until secrets + variable are set)
- `.nojekyll`: disables Jekyll processing on GitHub Pages
- `assets/`: local image assets for hero, cricket, and football sections
- `docs/PRD.md`: product requirements document
- `docs/competition-analysis.md`: market and competitive gap analysis
- `docs/api-research.md`: free and freemium API options for cricket and football
- `docs/FREE-STACK.md`: free hosting, Firecrawl/crawlers, RSS, and tweet embed strategy
- `docs/HOSTINGER-CICD.md`: Hostinger + GitHub Actions deploy guide
- `docs/SECRETS.md`: GitHub secrets checklist
- `docs/INDIAN-BRAND-NAMES.md`: India-first brand names for investor pitching
- `docs/SETUP.md`: safe setup guide for API keys, GitHub, and Hostinger
- `docs/GITHUB-PAGES.md`: GitHub Pages deployment steps and notes

## Live targets

- **Free now:** GitHub Pages via Actions after push to `main`
- **Production brand host:** Hostinger FTP workflow once FTP secrets are added and `ENABLE_HOSTINGER_DEPLOY=true`

## Notes

- This is an inspired front-end concept, not a pixel-perfect or verbatim content copy.
- API research reflects public provider notes; free-stack guidance was refreshed August 14, 2026.
- `.env` files are ignored so secrets stay out of source control.
- Private sports/Firecrawl keys must not be embedded in browser JS on Pages or Hostinger.
