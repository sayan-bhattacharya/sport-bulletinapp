# Free Stack: News, Crawlers, Scores, And Tweets

Date verified: August 14, 2026

Honest goal for the free MVP: **near-real-time football + freshness-labelled cricket + curated social pulse**, not a paid terminal-grade wire.

## What is free enough right now

### Hosting and CI/CD

| Option | Cost | Fit |
| --- | --- | --- |
| GitHub Pages + Actions | Free | Best zero-cost path for this static concept |
| Hostinger shared hosting | Paid plan you already own | Custom domain / production brand home |
| Cloudflare Pages / Netlify | Free tiers | Alternate static hosts if Hostinger is delayed |

### Football scores and fixtures

| Provider | Free shape | Best use |
| --- | --- | --- |
| [football-data.org](https://www.football-data.org/) | Free forever, ~10 req/min | Fixtures, tables, squads |
| [API-Football](https://www.api-football.com/) | Free plan ~100 req/day | Live scores, events, lineups for demos |
| [TheSportsDB](https://www.thesportsdb.com/free_sports_api) | Free public API | Badges, artwork, metadata |
| [Sportmonks Football](https://www.sportmonks.com/football-api/free-plan/) | Free plan | Later upgrade path |

### Cricket scores

| Provider | Free shape | Best use |
| --- | --- | --- |
| [CricketData.org](https://cricketdata.org/pricing/) | Free ~100 hits/day | Current matches prototype |
| [Cricsheet](https://cricsheet.org/) | Free datasets | Historical storytelling, not live |

### Instant football news without a paid CMS

Prefer **licensed or RSS-friendly sources** over scraping paywalled article bodies.

| Approach | Free? | Freshness | Notes |
| --- | --- | --- | --- |
| Official league / club RSS or news endpoints | Often free | High | Cleanest legal path when available |
| Google News RSS queries for teams/leagues | Free | High | Good headline aggregator for MVP |
| ESPN / BBC / club public RSS where offered | Free | High | Attribute clearly; do not republish full text |
| Firecrawl free credits | Limited free | High when used | Best as a **server-side** enricher, not browser scrape |
| Custom HTML crawlers | “Free” compute | Breaks often | Last resort; ToS + maintenance risk |

#### Firecrawl (practical free use)

- Free plan is useful for prototypes: limited credits, low concurrency (~2 browsers), modest rate limits.
- Treat credits as scarce: scrape **headline pages only**, set explicit `limit`, cache results for hours.
- Do **not** call Firecrawl from the public browser with a private key.
- Best free pattern: GitHub Action / cron job → scrape allowlisted URLs → write `data/headlines.json` → static site reads the JSON.

Recommended Firecrawl MVP loop:

1. Allowlist 5–10 public football news/index pages (leagues, clubs you follow).
2. Nightly or hourly Action uses `FIRECRAWL_API_KEY`.
3. Extract title, URL, source, timestamp only.
4. Commit or upload artifact to Pages/Hostinger.
5. Show “Updated X min ago” in the UI.

#### Other crawler / extract options

| Tool | Free angle | When to use |
| --- | --- | --- |
| Firecrawl | Free credits for structured scrape/search | When HTML is messy and you need clean markdown/JSON |
| Playwright / Cheerio self-host | Free if you run it | Full control; you own breakage |
| RSSHub / native RSS | Free | Prefer before any crawler |
| Browserless / ScrapingBee | Mostly paid | Skip until revenue |

**Product rule:** crawlers fill gaps; they are not the long-term newsroom backbone. Licensed feeds + RSS + editorial CMS win for investor trust.

### Showing tweets / X posts for free

| Method | API key? | Cost | Reality |
| --- | --- | --- | --- |
| Official embed via [publish.twitter.com](https://publish.twitter.com/) / widgets.js | No | Free | Best free path; profile/list/timeline embeds |
| Embed a curated X List of football journalists | No | Free | Better signal than a single club account |
| SociableKIT / similar free widgets | No | Free tier with limits | More styling control; branding / sync limits |
| Official X API timeline fetch | Yes | Paid for serious use | Avoid for free MVP |

**Recommendation for this site:** keep the official timeline embed on the homepage (already scaffolded). Swap the handle or list URL to your preferred Indian football / Premier League / ISL sources. Do not build a custom tweet scraper — X ToS and reliability make that a poor free bet.

## Best “most updated” free architecture for football news

```text
RSS / official headlines  ──┐
Firecrawl allowlist scrape ─┼──► cached headlines.json ──► MatchBrief UI
football-data / API-Football┘         ▲
                                      │
                         GitHub Action cron (free minutes)
```

Why this wins on free:

- Scores come from sports APIs (stable contracts)
- Headlines come from RSS first, Firecrawl second
- Social proof comes from X embeds (zero API cost)
- Caching protects tiny free quotas
- Static hosting stays cheap on Pages or Hostinger

## What not to promise investors on free tier

- Second-by-second multi-league live events at scale
- Full-text republished articles from crawled sites
- Unrestricted Firecrawl crawl of the open web
- Custom tweet search/firehose without X API spend
- Cricket ball-by-ball parity with Cricbuzz/ESPNcricinfo on free keys

## Immediate free MVP checklist

- [x] Static site + GitHub Actions CI
- [x] GitHub Pages deploy path
- [x] Hostinger FTP deploy path (needs your secrets)
- [x] Homepage X timeline embed (no API key)
- [ ] Add football-data.org key server-side later
- [ ] Optional Firecrawl Action writing `data/headlines.json`
- [ ] Point Hostinger domain at production build
