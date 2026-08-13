# API Research For Cricket And Football

Date verified: July 29, 2026

## Important reality check

If the goal is "high-quality and real-time for free," football is easier than cricket.

- Football has multiple official or semi-official free/freemium API options.
- Cricket free access exists, but real-time depth, reliability, and generous limits are harder to get without a paid plan.
- Scraping can fill gaps, but it introduces reliability, legal, and maintenance risk.

## Best options for football

### 1. football-data.org

Why use it:

- Official public football API
- Free plan is available
- Good for fixtures, tables, squads, and general competition data

Verified notes:

- The pricing page says the free plan is free forever.
- The API docs say registered clients on the free plan are allowed 10 requests per minute.

Sources:

- https://www.football-data.org/pricing
- https://www.football-data.org/documentation/api

Best for:

- standings
- fixtures
- competition pages
- team and squad pages

Tradeoff:

- not the richest live-event product compared with premium football feeds

### 2. API-Sports / API-Football

Why use it:

- Broad football coverage
- Live scores, events, lineups, and standings
- Free plan publicly advertised

Verified notes:

- API-Sports says it offers a free plan with 100 requests per day for each API.
- API-Football advertises coverage across 1,200+ leagues and cups.

Sources:

- https://api-sports.io/
- https://www.api-football.com/

Best for:

- live score widgets
- football match centers
- event streams
- lineup and competition coverage

Tradeoff:

- free tier is useful for prototyping, but not enough for scale or heavy polling

### 3. TheSportsDB

Why use it:

- Free sports API
- Includes artwork, teams, players, events, and general sports metadata
- Useful for editorial enrichments and fallback visuals

Verified notes:

- TheSportsDB describes itself as an open, crowd-sourced database with a free sports API.

Sources:

- https://www.thesportsdb.com/free_sports_api
- https://www.thesportsdb.com/

Best for:

- team badges
- league artwork
- player and event metadata
- lightweight football cards

Tradeoff:

- not the first choice for the sharpest live minute-by-minute experience

### 4. Sportmonks Football

Why use it:

- Higher-quality product path once you outgrow hobby limits
- Good for a later migration path

Verified notes:

- Sportmonks advertises a football API free plan.

Sources:

- https://www.sportmonks.com/football-api/
- https://www.sportmonks.com/football-api/free-plan/

Best for:

- future upgrade path
- better structured football coverage

Tradeoff:

- this is better treated as a growth path than the pure free backbone

## Best options for cricket

### 1. CricketData.org

Why use it:

- One of the clearest public cricket API options with a free plan
- Covers current score and match information
- Paid tiers unlock more scale and near-live value

Verified notes:

- The homepage says the free API is available for signup and current score access.
- The pricing page shows a free tier with 100 hits per day.
- The pricing page also distinguishes free access from higher paid tiers and mentions near-live data in paid plans.

Sources:

- https://cricketdata.org/
- https://cricketdata.org/pricing/
- https://cricketdata.org/how-to-use-cricket-data-api.aspx

Best for:

- cricket score cards
- current matches
- match detail prototypes

Tradeoff:

- free quotas are tight
- truly rich live refresh behavior will need careful caching or a paid upgrade

### 2. Cricsheet

Why use it:

- Excellent structured historical cricket dataset
- Ball-by-ball archives are deep and free

Verified notes:

- Cricsheet provides freely available structured ball-by-ball cricket data.
- It is ideal for archives, records, and historical storytelling rather than real-time live match UX.

Sources:

- https://cricsheet.org/
- https://cricsheet.org/downloads/
- https://cricsheet.org/matches/

Best for:

- archives
- stats pages
- historical explainers
- training editorial insights

Tradeoff:

- not live-match infrastructure

### 3. Sportmonks Cricket

Why use it:

- Strong long-term upgrade path if live cricket becomes a core business feature

Verified notes:

- Sportmonks advertises a cricket API with a free trial, not a perpetual free plan.

Sources:

- https://www.sportmonks.com/cricket-api/
- https://docs.sportmonks.com/v2/cricket-api

Best for:

- later-stage product scale
- deeper professional coverage

Tradeoff:

- not a lasting free-tier solution

## Scraping options and cautions

If you choose to scrape instead of rely on an API:

- scrape only where terms, robots, and legal review allow it
- expect selectors, layouts, and anti-bot protections to break frequently
- use scraping as a last-resort adapter, not the foundation

Reasonable scraping use cases:

- public editorial headlines where licensing is clear
- public schedule pages used internally for QA or monitoring
- image enrichment when rights are known and stored assets are properly attributed

Bad scraping use cases:

- production-grade live score dependency without a backup provider
- copying article text or protected media assets
- frequent polling on sites that do not permit automated extraction

## Firecrawl and crawler update (Aug 14, 2026)

Firecrawl is useful for free/prototype headline extraction when RSS is missing:

- Free credits are limited and concurrency is low — treat as a capped batch job.
- Always set an explicit crawl/scrape `limit` so one job cannot burn the whole balance.
- Run from GitHub Actions or a backend; never expose `FIRECRAWL_API_KEY` in static Pages/Hostinger JS.
- Prefer title + URL + source + timestamp extraction over full article republishing.

Other free-leaning approaches to evaluate before crawlers:

- Google News RSS and official league/club RSS
- Self-hosted Playwright/Cheerio on allowlisted pages
- Cached static `data/headlines.json` published by CI

For tweets / X:

- Free path: official embeds from publish.twitter.com / widgets.js (no API key)
- Avoid unofficial tweet scraping for production
- X API access is not a reliable free firehose for this MVP

See also: `docs/FREE-STACK.md`

## Recommended stack for this app

### Best free-first stack

- Football live and fixture layer: API-Football or football-data.org
- Cricket live and current matches: CricketData.org
- Cricket archives and stats storytelling: Cricsheet
- Team, league, and badge enrichment: TheSportsDB

### Product architecture recommendation

- normalize all providers behind a single adapter interface
- mark every feed item with freshness timestamps
- cache aggressively
- degrade gracefully when a provider is stale or rate-limited
- avoid building the UI around one provider's raw response shape

## What "HQ and real-time" should mean in practice

For a free-first MVP, define it honestly:

- HQ visuals: crisp editorial art, team branding, and strong typography
- near-real-time football: minutes-level updates through a free/freemium provider
- limited-real-time cricket: controlled polling and visible freshness labels
- true premium real-time: reserved for the later paid-feed upgrade path

## Recommendation summary

- For football, start free-first with football-data.org plus API-Football if you need richer live coverage.
- For cricket, start with CricketData.org and do not overpromise update frequency on the free tier.
- Use Cricsheet for historical depth, not live coverage.
- Treat scraping as a tactical fallback only, not the core platform strategy.
