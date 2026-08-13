# MVP Setup Guide

## Safe place for API keys

Create a local `.env` file in the project root by copying `.env.example`.

Do not paste real keys into tracked files like `README.md`, `app.js`, or `index.html`.

## Recommended first MVP keys

- `CRICKETDATA_API_KEY`
- `API_FOOTBALL_KEY` or `FOOTBALL_DATA_API_KEY`
- `THESPORTSDB_API_KEY` if you want badges, artwork, and metadata
- `FIRECRAWL_API_KEY` only if you add a server-side / Actions headline job

## Where to get them

- Football-Data registration: https://www.football-data.org/client/register
- Football-Data docs: https://www.football-data.org/documentation/api
- API-Football homepage: https://www.api-football.com/
- API-Football docs: https://www.api-football.com/documentation-v3
- CricketData signup: https://cricketdata.org/signup.aspx
- CricketData docs: https://cricketdata.org/how-to-use-cricket-data-api.aspx
- CricketData pricing: https://cricketdata.org/pricing/
- TheSportsDB API docs: https://www.thesportsdb.com/free_sports_api
- TheSportsDB auth guide: https://www.thesportsdb.com/docs_api_guide
- Firecrawl: https://www.firecrawl.dev/
- X publish embeds (no key): https://publish.twitter.com/

## GitHub (done path)

1. Push this repo to GitHub (`main`).
2. CI runs on push/PR.
3. Pages workflow publishes the static site.
4. Add Hostinger secrets when ready — see `docs/SECRETS.md` and `docs/HOSTINGER-CICD.md`.

## Hostinger

This repo stays static for now, so Hostinger shared hosting works via FTP CI/CD.

1. Create an FTP account in hPanel.
2. Add `HOSTINGER_FTP_*` secrets in GitHub.
3. Set repository variable `ENABLE_HOSTINGER_DEPLOY=true`.
4. Push to `main` or run **Deploy To Hostinger** manually.

If your plan supports Git deploy / Deploy Web App, you can connect the same repo there instead of FTP.

## Free social pulse

The homepage includes an official X timeline embed. No X API key is required. Change the profile or list URL in `index.html` to your preferred football/cricket sources.

## Important current limitation

Live sports API keys are prepared in `.env.example`, but the current front-end still uses conceptual/mock modules. Private keys must stay server-side before real live data ships.
