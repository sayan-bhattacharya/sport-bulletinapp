# Sport Bulletin App PRD

## Product summary

Sport Bulletin App is a mobile-first and web-friendly sports media product focused on cricket and football. It combines breaking headlines, live match state, short explainers, creator-led opinion, and event-driven bulletin packaging into one fast front page.

The immediate product opportunity is to improve on the current cluttered sports-news pattern: many sites either do live scores well and editorial poorly, or editorial well and live context poorly. The app should bridge that gap.

## Product vision

Build the fastest habit-forming sports bulletin experience for Indian and global fans who want:

- a headline they can understand in seconds
- a live score state they can trust
- context that explains why the story matters
- smoother switching between cricket and football
- an editorial brand that feels current, sharp, and premium

## Problem statement

Current sports media products frequently have one or more of these issues:

- homepage clutter hides the most important story
- live scores and editorial streams feel like separate products
- casual fans get lost because stories assume too much prior context
- women’s sports and domestic competitions are often under-promoted
- personalization is shallow and usually limited to notifications
- article pages are strong, but front pages are weak at helping users decide where to go next

## Target users

### Core users

- cricket superfans who want scores, squads, news, and explainers in one place
- football fans tracking clubs, tournaments, transfer windows, and live match events
- busy users who need quick bulletin summaries without reading full long-form pieces

### Secondary users

- fantasy and prediction players who need fresh context around matches
- casual event-driven users entering during ICC tournaments, IPL, ISL, Premier League, World Cup, Euros, or Champions League cycles
- creator-following users who return for specific writers, analysts, or presenters

## Core jobs to be done

- tell me what matters right now
- let me track my match without opening a different app
- explain the significance of a developing story quickly
- help me move between live action and opinion without losing context
- make cricket and football feel equally first-class

## Product principles

- headline first
- live state always visible
- one tap to deeper context
- editorial authority without visual clutter
- fast, calm, and reliable under peak traffic
- modular feed architecture so coverage can scale by sport and event

## v1 feature scope

### Homepage

- lead hero story with event-aware framing
- persistent breaking ticker
- live score strip for cricket and football
- modular sections for lead analysis, latest, explainers, video, and opinion
- one-topic event hubs for major tournaments

### Match centers

- cricket live score, innings state, batting and bowling summaries, scorecard, and commentary
- football live score, goals, cards, substitutions, lineups, standings context, and minute-by-minute feed

### Personalization

- follow teams, competitions, writers, and presenters
- reorder home modules based on preferences
- save stories and match centers

### Editorial tools

- bulletin cards: a short, structured card format for breaking developments
- explainers and context cards
- creator profile pages

### Growth loops

- push notifications for followed teams and competitions
- social summary cards for shareable match moments
- newsletters or daily bulletin roundups

## Non-goals for v1

- live streaming
- fantasy gameplay
- betting integrations
- full multi-sport expansion beyond cricket and football
- community chat

## Experience direction

- red-and-white visual identity with black support tones
- bold condensed headlines
- editorial-first layout inspired by sports broadcast graphics
- fewer cards, stronger hierarchy, sharper contrast
- motion limited to ticker, reveal, and live pulse cues

## Information architecture

- Home
- Cricket
- Football
- Live
- Tournaments
- Video
- Opinion
- Writers
- Saved

## Recommended architecture

- static-first front-end delivery for home and article shells
- feed adapter layer so editorial CMS content and sports-data providers can be normalized into one UI contract
- separate content models for article, bulletin, live-event, match-card, and video-card
- edge caching for scores and standings with short refresh intervals
- polling with backoff for free tiers, upgrade path to websockets where supported

## Suggested engineering standards

These are the practical best-practice themes to carry into implementation:

- clear separation of content data from rendering logic
- typed contracts for feed items and live match objects
- adapter pattern for third-party sports APIs
- progressive enhancement so the homepage stays readable without heavy client code
- small components with single responsibilities
- documented empty, loading, stale, and rate-limited states
- observability around provider failures and delayed feeds
- content and data resilience over flashy complexity

## Success metrics

- homepage click-through rate to live or article destinations
- repeat 7-day and 30-day retention
- time to first meaningful interaction
- notification opt-in rate
- saves and follows per active user
- live match center dwell time
- return rate after major event alerts

## Risks

- free sports APIs may not sustain real-time scale
- cricket live coverage quality is harder to source cheaply than football
- legal and reliability risks increase sharply if scraping replaces licensed data
- homepage can become cluttered again unless module ownership is enforced

## Rollout plan

### Phase 0 — ship the concept (current)

- static MatchBrief homepage on GitHub Pages (free)
- CI validation on every push/PR
- Hostinger FTP deploy workflow ready (needs account secrets)
- free-stack documentation for scores, RSS/Firecrawl headlines, and X embeds
- investor naming shortlist for India-first brand options

### Phase 1

- inspired homepage
- cricket and football landing pages
- basic live strip
- editorial modules populated from mock data, RSS, or CMS
- official X timeline/list embed for social pulse (no API key)

### Phase 2

- match centers
- follows and saved stories
- notifications
- tournament hubs
- cached football-data / API-Football live modules behind a tiny proxy

### Phase 3

- creator pages
- deeper personalization
- richer analytics and recommendations
- paid live-data upgrade where free quotas break

## Free-tier content doctrine (added Aug 2026)

- Prefer RSS and official sports APIs over scraping article bodies.
- Use Firecrawl only server-side, allowlisted, credit-capped, cached.
- Show tweets via official X embeds or free widget tiers — not custom scrapers.
- Label freshness honestly (`Updated Xm ago`) whenever free polling is slow.
- Never place private API keys in static GitHub Pages / Hostinger HTML.

## Brand / naming note

Engineering codename remains **MatchBrief**. Investor-facing India-first alternatives live in `docs/INDIAN-BRAND-NAMES.md` (MaidanBrief, ScoreAdda, KhelSutra, PitchKiBaat, LiveChowk, and more).
