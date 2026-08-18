import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BeforeAfterGraphic } from "./components/BeforeAfterGraphic";
import { HabitFlowGraphic } from "./components/HabitFlowGraphic";
import { LiveValueMeters } from "./components/LiveValueMeters";
import { ValueCompareGraphic } from "./components/ValueCompareGraphic";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL || "/";
const logoSrc = `${baseUrl}sport_iq_logo.png`;
const pdfUrl = `${baseUrl}SPORT_IQ_STRATEGY_DOSSIER.pdf`;
const dossierUrl = `${baseUrl}strategy_dossier.html`;
const investorDeckUrl = `${baseUrl}investor_deck.html`;

const HeroPlayer = lazy(() =>
  import("./components/HeroPlayer").then((m) => ({ default: m.HeroPlayer }))
);

const ValueLoopPlayer = lazy(() =>
  import("./components/ValueLoopPlayer").then((m) => ({ default: m.ValueLoopPlayer }))
);

function useFadeUp() {
  const reduced = useReducedMotion();
  if (reduced) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  };
}

const matches = [
  {
    sport: "Cricket",
    live: true,
    title: "India vs Australia (Final T20)",
    score: "IND 184/4 (17.2)",
    meta: "Target 201 · Required Rate 6.1 · Virat 74*(42)",
  },
  {
    sport: "Football",
    live: true,
    title: "Mohun Bagan vs Mumbai City FC",
    score: "2 — 1 · 78'",
    meta: "ISL Matchday · Petratos scores equalizer at 72'",
  },
  {
    sport: "AI Micro-Bulletin",
    live: false,
    title: "Why India's death-over strike rate flipped",
    score: "35-Word Tactical Breakdown",
    meta: "Context delivered in 15 seconds without endless scrolling",
  },
  {
    sport: "Cricket",
    live: false,
    title: "IPL Auction Strategy Recap",
    score: "CSK vs MI Bidding Matrix",
    meta: "Fast insight on pace-bowler purse distribution",
  },
];

const briefs = [
  {
    tag: "Cricket · IPL Pulse",
    title: "Bumrah's 19th over mastery: How 4 dot balls sealed the match",
    summary:
      "Pinpoint yorkers outside off stump denied boundary leverage. Zero fluff, pure tactical pulse delivered in 30 words.",
    stat: "15s read",
  },
  {
    tag: "Football · Premier League",
    title: "Arsenal's defensive block: Dissecting the 1-0 clean sheet",
    summary:
      "Midfield compactness limited central line breaks to zero in second half. Real-time tactical clarity without video bloat.",
    stat: "12s read",
  },
  {
    tag: "Motorsport · F1",
    title: "McLaren's undercut strategy: Pit window execution at Monza",
    summary:
      "Lap 28 tire delta provided 1.8s in-lap advantage. Complete telemetry insight in two sentences.",
    stat: "18s read",
  },
];

const steps = [
  {
    n: "01",
    title: "15-Second Match Pulse",
    body: "Catch live wickets, goals, and momentum shifts instantly without digging through ad-cluttered feeds.",
  },
  {
    n: "02",
    title: "AI-Curated Bulletins",
    body: "Dialmate AI's synthetic engine synthesizes match commentary into 40-word sharp cards in real-time.",
  },
  {
    n: "03",
    title: "Viral Meme & Social Cards",
    body: "Shareable high-contrast match infographics distributed straight to WhatsApp, Instagram, and Telegram.",
  },
];

const reasons = [
  {
    title: "35-Word Micro-Bulletins",
    body: "Why a match shifted, delivered in 15 seconds. No 500-page bloated navigation, just instant clarity.",
  },
  {
    title: "Zero Ad Clutter",
    body: "No intrusive banner takeovers or 30-second unskippable video ads. Pure, high-speed readability.",
  },
  {
    title: "Cricket & Football Parity",
    body: "Equal home-screen real estate for IPL/Test cricket and European/ISL football for multi-sport fans.",
  },
  {
    title: "1-Click Viral Story Cards",
    body: "Automated match graphics generated in real time for effortless sharing to WhatsApp and Instagram.",
  },
];

const quotes = [
  {
    text: "SPORT IQ gives me everything happening in the IPL match in 15 seconds between my Zoom calls.",
    handle: "@rahul_sportsdev",
  },
  {
    text: "Finally an Indian app that treats Premier League and ISL with the same prime priority as cricket.",
    handle: "@ananya_football",
  },
  {
    text: "The shareable match cards are brilliant. Our WhatsApp sports group uses them after every match.",
    handle: "@kabir_fantasyleague",
  },
];

export default function App() {
  const fadeUp = useFadeUp();

  return (
    <div className="page">
      {/* NAVIGATION BAR */}
      <header className="nav">
        <div className="nav-brand-group">
          <img
            src={logoSrc}
            alt="SPORT IQ Logo"
            className="nav-logo-img"
          />
          <div className="nav-brand-text-block">
            <a className="nav-brand" href="#top" aria-label="SPORT IQ home">
              SPORT <span>IQ</span>
            </a>
            <div className="nav-tagline">News • Insights • Scores • Stories</div>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#live">Live Pulse</a>
          <a href="#briefs">AI Bulletins</a>
          <a
            href={investorDeckUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
            style={{ background: "rgba(220, 38, 38, 0.2)", color: "#fca5a5" }}
          >
            Investor Deck (20 Slides)
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
          >
            Strategy PDF
          </a>
          <a className="nav-cta" href="mailto:hello@dialmate.ai?subject=SPORT%20IQ%20Consultant%20Brief">
            Get in Touch
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero" aria-label="SPORT IQ Sports Bulletin">
          <div className="hero-content-grid">
            <div className="hero-copy">
              {/* EYEBROW PARTNER BADGE */}
              <div className="eyebrow-badge">
                <span>Sports Bulletin</span>
                <span>•</span>
                <span>Incubated by Dialmate AI</span>
              </div>

              <h1 className="hero-title">
                The 15-Second <span>Match Pulse</span> for Next-Gen Fans.
              </h1>

              <p className="hero-support">
                India's high-velocity digital sports media platform. AI-curated 35-word bulletins,
                real-time scorecards, and viral tactical cards delivered where fans live.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={investorDeckUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Investor Deck (20 Slides)
                </a>
                <a
                  className="btn btn-secondary"
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Strategy PDF
                </a>
                <a className="btn btn-secondary" href="#live">
                  See Live Pulse
                </a>
              </div>
            </div>

            {/* HIGHLIGHTED & FULLY ASPECTED 16:9 VIDEO CONTAINER */}
            <div className="hero-visual-card">
              <Suspense fallback={<div style={{ aspectRatio: "16/9", background: "#0e1422", width: "100%" }} />}>
                <HeroPlayer />
              </Suspense>
            </div>
          </div>
        </section>

        {/* LIVE TICKER */}
        <section className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <div className="ticker-item">
              <span className="ticker-tag">Live Cricket</span>
              <span>IND 184/4 (17.2) · Virat 74*(42) · Chase on</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">ISL Live</span>
              <span>Mohun Bagan 2 — 1 Mumbai City · 78'</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">SPORT IQ Brief</span>
              <span>Tactical pivot: 26 runs in over 16</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">Dialmate AI Stack</span>
              <span>Sub-2.5s automated card generation</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">Live Cricket</span>
              <span>IND 184/4 (17.2) · Virat 74*(42) · Chase on</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">ISL Live</span>
              <span>Mohun Bagan 2 — 1 Mumbai City · 78'</span>
            </div>
          </div>
        </section>

        {/* LIVE PULSE SECTION */}
        <motion.section className="section live" id="live" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Instant Sports Intelligence</p>
            <h2>What fans open SPORT IQ for.</h2>
          </div>
          <LiveValueMeters />
          <div className="match-rail" role="list">
            {matches.map((m) => (
              <article className="match-item" role="listitem" key={m.title}>
                <div className="match-meta">
                  <span className="sport-label">{m.sport}</span>
                  {m.live ? <span className="live-dot">Live Feed</span> : <span className="fresh">AI Card Ready</span>}
                </div>
                <h3>{m.title}</h3>
                <p className="match-score">{m.score}</p>
                <p className="match-note">{m.meta}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* HOW IT WORKS / HABIT FLOW */}
        <motion.section className="section briefs" id="briefs" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">AI Micro-Bulletins in Action</p>
            <h2>35-word tactical context. Sub-2.5s speed.</h2>
          </div>
          <div className="match-rail" role="list" style={{ marginBottom: 24 }}>
            {briefs.map((b) => (
              <article className="match-item" role="listitem" key={b.title}>
                <div className="match-meta">
                  <span className="sport-label">{b.tag}</span>
                  <span className="fresh">{b.stat}</span>
                </div>
                <h3>{b.title}</h3>
                <p className="match-note" style={{ color: "#cbd5e1", marginTop: 6, fontSize: "0.85rem" }}>
                  {b.summary}
                </p>
              </article>
            ))}
          </div>

          <div className="section-head" style={{ marginTop: 32 }}>
            <p className="eyebrow">How SPORT IQ Works</p>
            <h2>Three beats. One daily habit loop.</h2>
          </div>
          <HabitFlowGraphic />
          <div className="reason-grid">
            {steps.map((s) => (
              <article className="reason-card" key={s.n}>
                <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "#dc2626", fontFamily: "JetBrains Mono" }}>
                  {s.n}
                </span>
                <h3 style={{ marginTop: 8 }}>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* WHY SPORT IQ */}
        <motion.section className="section why" id="why" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">The Competitive Edge</p>
            <h2>Built for the speed gap in modern sports media.</h2>
          </div>
          <BeforeAfterGraphic />
          <ValueCompareGraphic />
          <Suspense fallback={null}>
            <ValueLoopPlayer />
          </Suspense>
          <div className="reason-grid">
            {reasons.map((r) => (
              <article className="reason-card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </motion.section>

        {/* CONSULTANT & INVESTOR STRATEGY BANNER */}
        <motion.section className="section" {...fadeUp}>
          <div className="strategy-banner">
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: 8 }}>
                <span>Investor & Consultant Ready</span>
              </div>
              <h3>SPORT IQ — 20-Slide Pitch & INR 5,00,000 Seed Dossier</h3>
              <p>
                Complete financial architecture, founder execution division (Sayan - CTO / Rajrup - CGO),
                6-month GTM roadmap, and fail-proof Month 5 revenue model.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href={investorDeckUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View 20-Slide Pitch Deck
              </a>
              <a
                className="btn btn-secondary"
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Strategy PDF
              </a>
              <a className="btn btn-secondary" href={dossierUrl} target="_blank">
                Executive Dossier Web
              </a>
            </div>
          </div>
        </motion.section>

        {/* SOCIAL PROOF */}
        <motion.section className="section social" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Community Pulse</p>
            <h2>What sports creators & fans are saying.</h2>
          </div>
          <div className="reason-grid">
            {quotes.map((q) => (
              <blockquote className="reason-card" key={q.handle} style={{ fontStyle: "normal" }}>
                <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: 12 }}>"{q.text}"</p>
                <cite style={{ color: "#dc2626", fontWeight: 700, fontStyle: "normal" }}>{q.handle}</cite>
              </blockquote>
            ))}
          </div>
        </motion.section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-brand">
          <img src={logoSrc} alt="SPORT IQ" className="footer-logo" />
          <div>
            <div style={{ fontWeight: 800, fontSize: "1.1rem" }}>SPORT IQ</div>
            <div style={{ fontSize: "0.75rem", color: "#94a3b8" }}>Incubated by Dialmate AI Technologies</div>
          </div>
        </div>
        <span className="footer-note">
          News • Insights • Scores • Stories | High-Velocity Sports Intelligence
        </span>
      </footer>
    </div>
  );
}
