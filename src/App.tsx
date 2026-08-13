import { lazy, Suspense } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BeforeAfterGraphic } from "./components/BeforeAfterGraphic";
import { HabitFlowGraphic } from "./components/HabitFlowGraphic";
import { LiveValueMeters } from "./components/LiveValueMeters";
import { ValueCompareGraphic } from "./components/ValueCompareGraphic";
import "./styles.css";

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
    title: "India vs Australia",
    score: "IND 184/4 (17.2)",
    meta: "Chase 201 · Required 9.8",
  },
  {
    sport: "Football",
    live: true,
    title: "Mumbai City vs Mohun Bagan",
    score: "1 — 1 · 64'",
    meta: "ISL · Pressure rising",
  },
  {
    sport: "Brief",
    live: false,
    title: "Why the chase flipped in two overs",
    score: "Need-to-know in 40 seconds",
    meta: "Context without the scroll spiral",
  },
];

const steps = [
  {
    n: "01",
    title: "Catch the score",
    body: "Live state stays visible — wickets, minutes, momentum — without opening five tabs.",
  },
  {
    n: "02",
    title: "Get the brief",
    body: "One sharp takeaway after every big moment so casual fans and superfans land in the same place.",
  },
  {
    n: "03",
    title: "Follow your clubs",
    body: "Cricket and football as equal first-class products. Your teams, your tournaments, your habit.",
  },
];

const reasons = [
  {
    title: "Headline first",
    body: "Most sports feeds bury the story under chrome. Score Adda leads with what matters now.",
  },
  {
    title: "Dual-sport equal",
    body: "Built for Indian fans who live both cricket nights and football windows — not a bolt-on section.",
  },
  {
    title: "Context without clutter",
    body: "Live pulse plus editorial brief on one front page. Fast, calm, and ready for peak traffic.",
  },
];

const quotes = [
  {
    handle: "@pitchdesk",
    text: "Finally a front page that treats the score and the story as the same product.",
  },
  {
    handle: "@islwatch",
    text: "When the minute ticks and the brief drops together — that’s the habit loop.",
  },
  {
    handle: "@chaseandcover",
    text: "Required rate, then the why. That’s the adda energy.",
  },
];

export default function App() {
  const fadeUp = useFadeUp();

  return (
    <div className="page">
      <header className="nav">
        <a className="nav-brand" href="#top" aria-label="Score Adda home">
          Score <span>Adda</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          <a href="#live">Live</a>
          <a href="#briefs">Briefs</a>
          <a href="#why">Why us</a>
          <a className="nav-cta" href="mailto:hello@scoreadda.in?subject=Score%20Adda%20walkthrough">
            Book
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="Score Adda">
          <div className="hero-media" aria-hidden="true">
            <Suspense fallback={<div className="hero-fallback" />}>
              <HeroPlayer />
            </Suspense>
            <div className="hero-scrim" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Cricket · Football · India</p>
            <h1 className="brand-lockup">
              Score <span>Adda</span>
            </h1>
            <p className="hero-line">The daily sports adda for cricket and football.</p>
            <p className="hero-support">
              Live state you can trust, briefs you can finish, and a front page that knows what matters
              right now.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:hello@scoreadda.in?subject=Score%20Adda%20walkthrough">
                Book a walkthrough
              </a>
              <a className="btn btn-ghost" href="#live">
                See the pulse
              </a>
            </div>
          </div>
        </section>

        <section className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>IND 184/4 · Chase on</span>
            <span>ISL 1–1 · 64'</span>
            <span>Brief ready · Over 17</span>
            <span>Score Adda · Live + Editorial</span>
            <span>IND 184/4 · Chase on</span>
            <span>ISL 1–1 · 64'</span>
            <span>Brief ready · Over 17</span>
            <span>Score Adda · Live + Editorial</span>
          </div>
        </section>

        <motion.section className="section live" id="live" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Live pulse</p>
            <h2>What fans open Score Adda for.</h2>
          </div>
          <LiveValueMeters />
          <div className="match-rail" role="list">
            {matches.map((m) => (
              <article className="match-item" role="listitem" key={m.title}>
                <div className="match-meta">
                  <span className="sport-label">{m.sport}</span>
                  {m.live ? <span className="live-dot">Live</span> : <span className="fresh">Updated</span>}
                </div>
                <h3>{m.title}</h3>
                <p className="match-score">{m.score}</p>
                <p className="match-note">{m.meta}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section briefs" id="briefs" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">How it works</p>
            <h2>Three beats. One habit.</h2>
          </div>
          <HabitFlowGraphic />
          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section className="section why" id="why" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">Why Score Adda</p>
            <h2>Built for the gap between the alert and the article.</h2>
          </div>
          <BeforeAfterGraphic />
          <ValueCompareGraphic />
          <Suspense fallback={null}>
            <ValueLoopPlayer />
          </Suspense>
          <div className="reason-grid">
            {reasons.map((r) => (
              <article key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section className="section social" {...fadeUp}>
          <div className="section-head">
            <p className="eyebrow">From the timeline</p>
            <h2>The energy fans already speak.</h2>
          </div>
          <div className="quote-rail">
            {quotes.map((q) => (
              <blockquote key={q.handle}>
                <p>{q.text}</p>
                <cite>{q.handle}</cite>
              </blockquote>
            ))}
          </div>
        </motion.section>

        <motion.section className="section cta" id="book" {...fadeUp}>
          <p className="eyebrow">Next step</p>
          <h2>Ready to walk the product?</h2>
          <p className="cta-copy">
            A short walkthrough for partners and consultants — product vision, live pulse, and the India-first
            dual-sport story.
          </p>
          <a className="btn btn-primary" href="mailto:hello@scoreadda.in?subject=Score%20Adda%20walkthrough">
            Book a walkthrough
          </a>
        </motion.section>
      </main>

      <footer className="footer">
        <span className="nav-brand">
          Score <span>Adda</span>
        </span>
        <span className="footer-note">Cricket + football bulletin for Indian fans.</span>
      </footer>
    </div>
  );
}
