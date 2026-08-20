import { lazy, Suspense, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BeforeAfterGraphic } from "./components/BeforeAfterGraphic";
import { HabitFlowGraphic } from "./components/HabitFlowGraphic";
import { LiveValueMeters } from "./components/LiveValueMeters";
import { ValueCompareGraphic } from "./components/ValueCompareGraphic";
import "./styles.css";

const baseUrl = import.meta.env.BASE_URL || "/";
const logoSrc = `${baseUrl}sport_iq_logo.png`;
const pdfUrl = `${baseUrl}SPORT_IQ_STRATEGY_DOSSIER.pdf`;
const investorPdfUrl = `${baseUrl}SPORT_IQ_INVESTOR_PITCH_DECK_9L.pdf`;
const angelPitchPdfUrl = `${baseUrl}SPORT_IQ_ANGEL_PITCH_3L_4L.pdf`;
const angelPitchHtmlUrl = `${baseUrl}angel_pitch_3l_4l.html`;
const dossierUrl = `${baseUrl}strategy_dossier.html`;
const internalAlignmentUrl = `${baseUrl}internal_financial_alignment.html`;

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

const sampleShorts = [
  {
    tag: "15s Reel Script",
    title: "Bumrah's 19th over death-over masterclass",
    content: "0.0s - 3.0s: '4 dot balls that won the T20 Final!'\n3.0s - 10.0s: High-speed trajectory graphic showing 142km/h yorker angling outside off.\n10.0s - 15.0s: 35-word summary card with 1-click WhatsApp share prompt.",
    stat: "15s Short Video",
  },
  {
    tag: "35-Word Micro-Card",
    title: "Arsenal's 4-4-2 compact mid-block shift",
    content: "Midfield compactness limited central line breaks to zero in second half. Declan Rice won 6 ground duels while Saliba choked wing cutbacks.",
    stat: "12s Read",
  },
  {
    tag: "WhatsApp Story Card",
    title: "Monza F1 Pit Window Telemetry",
    content: "Lap 28 tire delta provided 1.8s in-lap advantage. Complete telemetry insight rendered into 1080x1920 graphic in <2.5s.",
    stat: "1-Click Share",
  },
];

const sampleLongForm = [
  {
    tag: "Tactical Deep-Dive Dossier",
    title: "IPL Death-Over Bowling Strategy & Strike-Rate Decomposition",
    content: "A 450-word analytical breakdown dissecting seam positioning across overs 16-20. Analyzes ball speed deltas, wide-yorker execution rates vs off-cutter variations, and fantasy point expected values.",
    stat: "3 Min Read",
  },
  {
    tag: "Post-Match Analytical Report",
    title: "Mohun Bagan's Inverted Winger Dynamics in ISL Derby",
    content: "Full 600-word tactical dossier dissecting Petratos' heatmaps, half-space passing combinations, and xG momentum shifts between 60' and 90'. Includes pass network graphs and pressing intensity radar.",
    stat: "5 Min Read",
  },
  {
    tag: "Weekly Newsletter Digest",
    title: "The SPORT IQ Weekly Pulse: Premier League xG vs Reality",
    content: "Curated weekly executive digest breaking down underperforming xG teams across European leagues, player fatigue indices before international breaks, and fantasy captain recommendations.",
    stat: "Weekly Digest",
  },
];

const steps = [
  {
    n: "01",
    title: "Hybrid Data Ingestion",
    body: "Scrapers (Twitter/X commentary + RSS + Web stats) + Official APIs feed raw match streams into a serverless Cloud Data Lake.",
  },
  {
    n: "02",
    title: "Dialmate AI Engine",
    body: "Proprietary LLM & NLP intelligence layer synthesizes match pivot points into dual outputs in <2.5s latency.",
  },
  {
    n: "03",
    title: "Shorts & Long-Form Outputs",
    body: "Auto-generates 15s short video scripts & 35-word cards alongside deep tactical match breakdowns & analytics dossiers.",
  },
];

const financialMetrics = [
  { val: "INR 3L – 4L", lbl: "Today's Angel Ticket", detail: "Single Investor Seat Open" },
  { val: "3.0% – 4.0%", lbl: "Equity Stake", detail: "@ ₹1.0 Cr Post Valuation" },
  { val: "Month 4", lbl: "Cashflow Breakeven", detail: "₹1.65L MRR Target" },
  { val: "15x – 20x", lbl: "Target Series A Return", detail: "Targeting ₹15Cr – ₹20Cr Valuation" },
];

export default function App() {
  const fadeUp = useFadeUp();
  const [contentType, setContentType] = useState<"shorts" | "longform">("shorts");

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
          <a href="#pipeline">Data Engine</a>
          <a href="#content-generator">Shorts & Long-Form</a>
          <a href="#financials">Internal Financials</a>
          <a
            href={dossierUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
          >
            Strategy Dossier
          </a>
          <a
            href={angelPitchPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
            style={{ background: "rgba(239, 68, 68, 0.3)", color: "#ffffff", border: "1.5px solid #ef4444", fontWeight: 800 }}
          >
            Today's Angel Pitch (₹3L-4L)
          </a>
          <a
            href={investorPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
            style={{ background: "rgba(59, 130, 246, 0.2)", color: "#93c5fd" }}
          >
            Full Investor Deck PDF
          </a>
          <a
            href={internalAlignmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-badge-doc"
            style={{ background: "rgba(16, 185, 129, 0.2)", color: "#6ee7b7", border: "1px solid rgba(16, 185, 129, 0.4)" }}
          >
            ₹9L Alignment Doc
          </a>
        </nav>
      </header>

      <main id="top">
        {/* HERO SECTION */}
        <section className="hero" aria-label="SPORT IQ Sports Bulletin">
          <div className="hero-content-grid">
            <div className="hero-copy">
              <div className="eyebrow-badge">
                <span>Today's Angel Ticket: ₹3.0L – ₹4.0L</span>
                <span>•</span>
                <span>Incubated by Dialmate AI</span>
              </div>

              <h1 className="hero-title">
                The 15-Second <span>Match Pulse</span> for Next-Gen Fans.
              </h1>

              <p className="hero-support">
                India's high-velocity digital sports media platform. Automated scrapers and APIs feed a Cloud Data Lake, where the Dialmate AI Intelligence Engine converts raw match data into 15-second Shorts and deep Long-Form tactical dossiers.
              </p>

              <div className="hero-actions">
                <a
                  className="btn btn-primary"
                  href={angelPitchPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ background: "#ef4444", borderColor: "#ef4444" }}
                >
                  Download Today's Angel Pitch (₹3L-4L PDF)
                </a>
                <a
                  className="btn btn-secondary"
                  href={angelPitchHtmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: "#3b82f6", color: "#93c5fd" }}
                >
                  View Angel Slide Deck
                </a>
                <a
                  className="btn btn-secondary"
                  href={internalAlignmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderColor: "#10b981", color: "#6ee7b7" }}
                >
                  Internal Founder Doc
                </a>
                <a
                  className="btn btn-secondary"
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strategy PDF
                </a>
              </div>
            </div>

            {/* FULLY ASPECTED 16:9 VIDEO CONTAINER */}
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
              <span className="ticker-tag" style={{ background: "#ef4444", color: "#fff" }}>Today's Angel Ask</span>
              <span>₹3,00,000 – ₹4,00,000 INR for 3.0% – 4.0% Equity (₹1.0Cr Valuation)</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">Data Engine</span>
              <span>Scrapers + APIs → Data Lake → Dialmate AI Synth</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">Dual Outputs</span>
              <span>15s Video Shorts + 35-W Cards & Deep Tactical Dossiers</span>
            </div>
            <div className="ticker-item">
              <span className="ticker-tag">Unit Economics</span>
              <span>88.5% Gross Margin · Month 4 Cashflow Breakeven</span>
            </div>
          </div>
        </section>

        {/* DATA PIPELINE & CLOUD DATA LAKE SECTION */}
        <motion.section className="section" id="pipeline" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Technology Engine & Moat</p>
            <h2>Data Pipelines & Cloud Data Lake Architecture</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: 6 }}>
              How SPORT IQ ingests raw commentary streams and outputs automated Shorts & Long-Form reports in &lt;2.5 seconds.
            </p>
          </div>

          <div style={{
            background: "#090e18",
            border: "1px solid #24324a",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.5)"
          }}>
            <svg viewBox="0 0 800 130" style={{ width: "100%", height: "auto" }}>
              {/* Box 1: Hybrid Ingestion */}
              <rect x="10" y="15" width="175" height="100" rx="8" fill="#131d2e" stroke="#ef4444" strokeWidth="1.5" />
              <text x="97" y="36" fill="#ef4444" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="Plus Jakarta Sans">1. HYBRID INGESTION</text>
              <text x="20" y="56" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Live Twitter/X Commentary</text>
              <text x="20" y="70" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Official Cricket/Football APIs</text>
              <text x="20" y="84" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• RSS News & Web Stats Parsers</text>
              <text x="97" y="104" fill="#ef4444" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="JetBrains Mono">&lt; 1.2s Real-Time Ingest</text>

              {/* Arrow 1 */}
              <path d="M 190 65 L 215 65" stroke="#ef4444" strokeWidth="2" />

              {/* Box 2: Cloud Data Lake */}
              <rect x="220" y="15" width="175" height="100" rx="8" fill="#131d2e" stroke="#3b82f6" strokeWidth="1.5" />
              <text x="307" y="36" fill="#3b82f6" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="Plus Jakarta Sans">2. CLOUD DATA LAKE</text>
              <text x="230" y="56" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Supabase / Cloudflare R2 Store</text>
              <text x="230" y="70" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Ball-by-Ball Telemetry Logs</text>
              <text x="230" y="84" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Fan Sentiment & Audio Transcripts</text>
              <text x="307" y="104" fill="#3b82f6" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="JetBrains Mono">Zero Vendor Overhead</text>

              {/* Arrow 2 */}
              <path d="M 400 65 L 425 65" stroke="#3b82f6" strokeWidth="2" />

              {/* Box 3: Dialmate AI Layer */}
              <rect x="430" y="15" width="175" height="100" rx="8" fill="#131d2e" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="517" y="36" fill="#8b5cf6" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="Plus Jakarta Sans">3. DIALMATE AI LAYER</text>
              <text x="440" y="56" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• LLM Context Synthesizer</text>
              <text x="440" y="70" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Match Pivot Point Extractor</text>
              <text x="440" y="84" fill="#cbd5e1" fontSize="7.5" fontFamily="Plus Jakarta Sans">• Remotion Short-Video Render</text>
              <text x="517" y="104" fill="#8b5cf6" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="JetBrains Mono">&lt; 2.5s Gen Engine</text>

              {/* Arrow 3 */}
              <path d="M 610 65 L 635 65" stroke="#8b5cf6" strokeWidth="2" />

              {/* Box 4: Dual Output Generator */}
              <rect x="640" y="15" width="150" height="100" rx="8" fill="#064e3b" stroke="#34d399" strokeWidth="1.8" />
              <text x="715" y="34" fill="#34d399" fontSize="9.5" fontWeight="900" textAnchor="middle" fontFamily="Plus Jakarta Sans">4. DUAL OUTPUTS</text>
              <text x="648" y="54" fill="#ffffff" fontSize="7.5" fontWeight="800" fontFamily="Plus Jakarta Sans">▶ SHORTS:</text>
              <text x="648" y="66" fill="#a7f3d0" fontSize="7" fontFamily="Plus Jakarta Sans">15s Videos & 35-W Cards</text>
              <text x="648" y="82" fill="#ffffff" fontSize="7.5" fontWeight="800" fontFamily="Plus Jakarta Sans">📄 LONG-FORM:</text>
              <text x="648" y="94" fill="#a7f3d0" fontSize="7" fontFamily="Plus Jakarta Sans">Tactical Analytics Dossiers</text>
            </svg>
          </div>
        </motion.section>

        {/* SHORTS VS LONG-FORM CONTENT GENERATOR SIMULATOR */}
        <motion.section className="section" id="content-generator" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Interactive Content Engine</p>
            <h2>AI Intelligence Layer in Action: Shorts vs. Long-Form</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: 6 }}>
              Toggle between high-velocity 15-second Shorts and in-depth Tactical Long-Form Dossiers generated automatically from raw match data.
            </p>
          </div>

          <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
            <button
              onClick={() => setContentType("shorts")}
              className={`btn ${contentType === "shorts" ? "btn-primary" : "btn-secondary"}`}
              style={{ cursor: "pointer" }}
            >
              ▶ View AI Shorts (15s Videos & 35-Word Cards)
            </button>
            <button
              onClick={() => setContentType("longform")}
              className={`btn ${contentType === "longform" ? "btn-primary" : "btn-secondary"}`}
              style={{ cursor: "pointer" }}
            >
              📄 View AI Long-Form (Tactical Dossiers & Analysis)
            </button>
          </div>

          <div className="match-rail" role="list">
            {(contentType === "shorts" ? sampleShorts : sampleLongForm).map((item) => (
              <article className="match-item" role="listitem" key={item.title} style={{ borderColor: contentType === "shorts" ? "#ef4444" : "#3b82f6" }}>
                <div className="match-meta">
                  <span className="sport-label" style={{ color: contentType === "shorts" ? "#fca5a5" : "#93c5fd" }}>{item.tag}</span>
                  <span className="fresh">{item.stat}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="match-note" style={{ color: "#cbd5e1", marginTop: 8, fontSize: "0.88rem", whiteSpace: "pre-line", lineHeight: 1.5 }}>
                  {item.content}
                </p>
              </article>
            ))}
          </div>
        </motion.section>

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
        </motion.section>

        {/* ANGEL INVESTMENT OPPORTUNITY & DASHBOARD */}
        <motion.section className="section" id="financials" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Today's Angel Investment Opportunity</p>
            <h2>₹3,00,000 – ₹4,00,000 Ticket for 3.0% – 4.0% Equity</h2>
            <p style={{ color: "#94a3b8", fontSize: "0.95rem", marginTop: 6 }}>
              Granular capital deployment, 4-pillar monetization cashflow, and 15x–20x Series A exit path.
            </p>
          </div>

          <div className="reason-grid" style={{ marginBottom: 24 }}>
            {financialMetrics.map((m) => (
              <div className="card-box accent-green" key={m.lbl} style={{ padding: 20, textAlign: "center" }}>
                <div style={{ fontFamily: "JetBrains Mono", fontSize: "1.6rem", fontWeight: 900, color: "#10b981" }}>{m.val}</div>
                <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#f8fafc", textTransform: "uppercase", marginTop: 4 }}>{m.lbl}</div>
                <div style={{ fontSize: "0.75rem", color: "#94a3b8", marginTop: 4 }}>{m.detail}</div>
              </div>
            ))}
          </div>

          <div className="strategy-banner">
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: 8, background: "rgba(239, 68, 68, 0.2)", color: "#ffffff", border: "1px solid #ef4444" }}>
                <span>Prepared Specifically For Today's Angel Investor Pitch</span>
              </div>
              <h3>Where Your ₹3.0L – ₹4.0L Ticket Is Deployed</h3>
              <p>
                Line-item capital deployment across 15–20 micro-creator retainers (44.4%), Cloud Data Lake &amp; Dialmate AI engine (23.3%), Remotion video automation (13.3%), working capital (13.3%), and legal Pvt Ltd incorporation (5.6%).
              </p>
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                className="btn btn-primary"
                href={angelPitchPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#ef4444", borderColor: "#ef4444" }}
              >
                Download Today's Angel Pitch (₹3L-4L PDF)
              </a>
              <a
                className="btn btn-secondary"
                href={angelPitchHtmlUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ borderColor: "#3b82f6", color: "#93c5fd" }}
              >
                View Angel Slide Deck
              </a>
              <a
                className="btn btn-secondary"
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Strategy Dossier PDF
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
            <blockquote className="reason-card" style={{ fontStyle: "normal" }}>
              <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: 12 }}>"SPORT IQ gives me everything happening in the IPL match in 15 seconds between my Zoom calls."</p>
              <cite style={{ color: "#dc2626", fontWeight: 700, fontStyle: "normal" }}>@rahul_sportsdev</cite>
            </blockquote>
            <blockquote className="reason-card" style={{ fontStyle: "normal" }}>
              <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: 12 }}>"Finally an Indian app that treats Premier League and ISL with the same prime priority as cricket."</p>
              <cite style={{ color: "#dc2626", fontWeight: 700, fontStyle: "normal" }}>@ananya_football</cite>
            </blockquote>
            <blockquote className="reason-card" style={{ fontStyle: "normal" }}>
              <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: 12 }}>"The shareable match cards are brilliant. Our WhatsApp sports group uses them after every match."</p>
              <cite style={{ color: "#dc2626", fontWeight: 700, fontStyle: "normal" }}>@kabir_fantasyleague</cite>
            </blockquote>
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
          News • Insights • Scores • Stories | High-Velocity Sports Intelligence • <a href={pdfUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8" }}>Strategy Dossier PDF</a>
        </span>
      </footer>
    </div>
  );
}
