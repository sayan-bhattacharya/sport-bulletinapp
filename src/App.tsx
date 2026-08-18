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
    title: "Zero Clutter, 100% Signal",
    body: "Unlike Cricbuzz and ESPN that bury scores under programmatic banner ads, SPORT IQ gives you pure match intelligence in seconds.",
  },
  {
    title: "Engineered for Indian Dual-Fandom",
    body: "Built natively for fans who follow both high-stakes cricket nights and Premier League / ISL football fixtures.",
  },
  {
    title: "Dialmate AI Incubation Moat",
    body: "Powered by Dialmate AI's automated scraping and NLP summarization algorithms, operating with 85%+ gross margins.",
  },
];

const quotes = [
  {
    handle: "@cricpulse_india",
    text: "SPORT IQ is the first sports feed that respects my time. 15 seconds is all I need between meetings.",
  },
  {
    handle: "@isl_superfan",
    text: "When the goal happens and the tactical card drops within 3 seconds — that’s the new standard.",
  },
  {
    handle: "@tech_scout_vc",
    text: "Zero agency overhead and sub-second latency. The founder division of execution is as solid as it gets.",
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
          <div>
            <a className="nav-brand" href="#top" aria-label="SPORT IQ home">
              SPORT <span>IQ</span>
            </a>
            <div className="nav-tagline">News • Insights • Scores • Stories</div>
          </div>
        </div>

        <nav className="nav-links" aria-label="Primary">
          <a href="#live">Live Pulse</a>
          <a href="#briefs">AI Bulletins</a>
          <a href="#why">Why SPORT IQ</a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
          >
            📄 ₹5L Strategy PDF
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
              <div className="eyebrow-badge">
                <span>⚡ Sports Bulletin</span>
                <span>•</span>
                <span>Incubated by Dialmate AI</span>
              </div>

              <img
                src={logoSrc}
                alt="SPORT IQ Sports Bulletin"
                className="hero-logo-banner"
              />

              <h1 className="hero-title">
                The 15-Second <span>Match Pulse</span> for Next-Gen Fans.
              </h1>
              <p className="hero-tagline">News • Insights • Scores • Stories</p>
              <p className="hero-support">
                India's high-velocity digital sports media platform. AI-curated 35-word bulletins,
                real-time scorecards, and viral tactical cards delivered where fans live.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📥 Download ₹5L Strategy PDF
                </a>
                <a className="btn btn-secondary" href={dossierUrl} target="_blank">
                  📊 View Executive Dossier
                </a>
                <a className="btn btn-secondary" href="#live">
                  ⚡ See Live Pulse
                </a>
              </div>
            </div>

            <div className="hero-visual-card">
              <Suspense fallback={<div style={{ height: 280, background: "#0e1422" }} />}>
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
                <span>💼 Investor & Consultant Ready</span>
              </div>
              <h3>SPORT IQ — ₹5,00,000 Seed Allocation Dossier</h3>
              <p>
                Complete financial architecture, founder execution division (Sayan - CTO / Rajrup - CGO),
                6-month GTM roadmap, and unit economics model.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                📥 Download Shareable PDF
              </a>
              <a className="btn btn-secondary" href={dossierUrl} target="_blank">
                🌐 Interactive Web View
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
            <div style={{ fontSize: "0.7rem", color: "#94a3b8" }}>Incubated by Dialmate AI Technologies</div>
          </div>
        </div>
        <span className="footer-note">
          News • Insights • Scores • Stories | High-Velocity Sports Intelligence
        </span>
      </footer>
    </div>
  );
}
