import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sportIqLogoPath = path.join(__dirname, 'public', 'sport_iq_logo.png');
let sportIqLogoBase64 = '';
if (fs.existsSync(sportIqLogoPath)) {
  const logoBuf = fs.readFileSync(sportIqLogoPath);
  sportIqLogoBase64 = `data:image/png;base64,${logoBuf.toString('base64')}`;
}

const dialmateLogoPath = 'E:/Evango-website/images/dialmate_logo_final.png';
let dialmateLogoBase64 = '';
if (fs.existsSync(dialmateLogoPath)) {
  const logoBuf = fs.readFileSync(dialmateLogoPath);
  dialmateLogoBase64 = `data:image/png;base64,${logoBuf.toString('base64')}`;
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SPORT IQ - Digital Sports Bulletin Venture Strategy & Consultant Dossier</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap');

  @page {
    size: A4 portrait;
    margin: 8mm 10mm 8mm 10mm;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #0f172a;
    background-color: #ffffff;
    font-size: 7.8pt;
    line-height: 1.32;
  }

  .page {
    width: 100%;
    height: 279mm;
    max-height: 279mm;
    page-break-inside: avoid;
    break-inside: avoid;
    page-break-after: always;
    break-after: page;
    position: relative;
    padding: 2px 4px 6px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .page:last-child {
    page-break-after: avoid;
    break-after: avoid;
  }

  .page-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5px;
  }

  /* Header & Footer */
  .doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2.5px solid #dc2626;
    padding-bottom: 4px;
    margin-bottom: 6px;
    flex-shrink: 0;
  }

  .brand-group {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .logo-img-main {
    height: 34px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.2));
  }

  .incubator-badge {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    padding: 2px 7px;
    border-radius: 4px;
  }

  .logo-img-sub {
    height: 15px;
    width: auto;
    object-fit: contain;
  }

  .incubator-text {
    font-size: 6pt;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .doc-meta-badge {
    text-align: right;
  }

  .confidential-tag {
    display: inline-block;
    background: #fef2f2;
    color: #dc2626;
    border: 1px solid #fecaca;
    padding: 1.5px 6px;
    border-radius: 3px;
    font-size: 5.8pt;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  .doc-date {
    font-size: 6pt;
    color: #64748b;
    margin-top: 1.5px;
    font-weight: 600;
  }

  .page-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e8f0;
    padding-top: 3px;
    font-size: 5.8pt;
    color: #94a3b8;
    font-weight: 600;
    flex-shrink: 0;
  }

  /* Typography & Headers */
  h1.hero-title {
    font-size: 14.5pt;
    font-weight: 900;
    line-height: 1.15;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 3px;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-sub {
    font-size: 7.2pt;
    color: #475569;
    line-height: 1.3;
    margin-bottom: 5px;
  }

  .section-title {
    font-size: 8.8pt;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 4px;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 2.5px;
    flex-shrink: 0;
  }

  .section-title span.tag {
    font-size: 5.6pt;
    font-weight: 700;
    background: #dc2626;
    color: #ffffff;
    padding: 1px 4px;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  /* Grids */
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 6px;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  /* Metric Cards */
  .metric-card {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 5px 6px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .metric-card.accent {
    background: #fff1f2;
    border-color: #fecdd3;
  }

  .metric-card.success {
    background: #f0fdf4;
    border-color: #bbf7d0;
  }

  .metric-card.gold {
    background: #fffbeb;
    border-color: #fde68a;
  }

  .metric-val {
    font-family: 'JetBrains Mono', monospace;
    font-size: 10.5pt;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
  }

  .metric-card.accent .metric-val { color: #dc2626; }
  .metric-card.success .metric-val { color: #16a34a; }
  .metric-card.gold .metric-val { color: #d97706; }

  .metric-label {
    font-size: 5.4pt;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-top: 1.5px;
  }

  /* Cards */
  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 6px 8px;
    margin-bottom: 0;
  }

  .card.highlight {
    background: #fff1f2;
    border-left: 3px solid #dc2626;
  }

  .card-header-sm {
    font-size: 6.8pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* Role Cards */
  .role-card {
    border: 1px solid #cbd5e1;
    border-radius: 5px;
    padding: 6px 8px;
    background: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .role-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
  }

  .role-card.sayan::before {
    background: linear-gradient(90deg, #dc2626, #f43f5e);
  }

  .role-card.rajrup::before {
    background: linear-gradient(90deg, #0f172a, #334155);
  }

  .role-badge-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5px;
  }

  .role-name {
    font-size: 8.8pt;
    font-weight: 800;
    color: #0f172a;
  }

  .role-title {
    font-size: 6.2pt;
    font-weight: 700;
    color: #dc2626;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .role-card.rajrup .role-title {
    color: #0f172a;
  }

  .role-summary {
    font-size: 6.2pt;
    color: #475569;
    margin-bottom: 3.5px;
    line-height: 1.22;
    background: #f8fafc;
    padding: 3px 5px;
    border-radius: 3px;
  }

  .role-list {
    list-style: none;
    font-size: 6pt;
    color: #334155;
  }

  .role-list li {
    margin-bottom: 1.5px;
    position: relative;
    padding-left: 7px;
    line-height: 1.18;
  }

  .role-list li::before {
    content: '▪';
    position: absolute;
    left: 0;
    color: #dc2626;
    font-weight: bold;
  }

  .role-card.rajrup .role-list li::before {
    color: #0f172a;
  }

  .kpi-chip-row {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5px;
    margin-top: 3.5px;
    padding-top: 2.5px;
    border-top: 1px dashed #e2e8f0;
  }

  .kpi-chip {
    font-size: 5.2pt;
    font-weight: 600;
    background: #f1f5f9;
    color: #475569;
    padding: 1px 3.5px;
    border-radius: 3px;
    border: 1px solid #e2e8f0;
  }

  /* Table styling */
  table.custom-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 5.9pt;
    margin: 2px 0;
  }

  table.custom-table th {
    background: #0f172a;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 5.3pt;
    letter-spacing: 0.3px;
    padding: 3px 5px;
    text-align: left;
  }

  table.custom-table td {
    padding: 2.6px 5px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
  }

  table.custom-table tr:nth-child(even) {
    background: #f8fafc;
  }

  table.custom-table td.num {
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
  }

  table.custom-table tr.total-row td {
    font-weight: 800;
    background: #fff1f2;
    color: #be123c;
    border-top: 1.2px solid #fda4af;
  }

  /* Visual chart box */
  .chart-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 6px;
    text-align: center;
  }

  /* Roadmap Timeline */
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 3px;
  }

  .month-card {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: #ffffff;
    padding: 4.5px 5.5px;
    font-size: 5.8pt;
  }

  .month-badge {
    display: inline-block;
    font-size: 5pt;
    font-weight: 800;
    background: #0f172a;
    color: #ffffff;
    padding: 1px 3.5px;
    border-radius: 2px;
    margin-bottom: 1.5px;
  }

  .month-badge.red {
    background: #dc2626;
  }

  .month-title {
    font-size: 6.2pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1.5px;
  }

  .month-points {
    list-style: none;
    color: #475569;
    line-height: 1.15;
  }

  .month-points li {
    margin-bottom: 1px;
    padding-left: 5.5px;
    position: relative;
  }

  .month-points li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: #dc2626;
    font-weight: bold;
  }

  .tag-pill {
    display: inline-block;
    padding: 1px 4.5px;
    border-radius: 8px;
    font-size: 5.1pt;
    font-weight: 700;
    text-transform: uppercase;
  }

  .tag-red { background: #fff1f2; color: #be123c; border: 1px solid #fecdd3; }
  .tag-dark { background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; }
  .tag-green { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
  .tag-amber { background: #fffbeb; color: #b45309; border: 1px solid #fde68a; }

</style>
</head>
<body>

<!-- ================= PAGE 1: COVER & EXECUTIVE SUMMARY ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">DATE: AUGUST 2026 | SEED REF: SIQ-2026-001</div>
      </div>
    </div>

    <div style="margin: 1px 0 4px 0;">
      <span class="tag-pill tag-red">Official Venture Blueprint</span>
      <span class="tag-pill tag-dark" style="margin-left: 4px;">Seed Capital: ₹5,00,000 INR ($6,000 USD)</span>
      <span class="tag-pill tag-green" style="margin-left: 4px;">Sector: Next-Gen Sports Media & FanTech</span>
    </div>

    <h1 class="hero-title">SPORT IQ — The High-Velocity Sports Bulletin: <span class="hero-gradient">Strategic Architecture & Execution Model</span></h1>
    <p class="hero-sub">
      A high-velocity, capital-efficient blueprint prepared for strategic advisors and investors. <strong>SPORT IQ</strong> (<em>News • Insights • Scores • Stories</em>), incubated by <strong>Dialmate AI</strong>, captures the unmet demand of 600M+ digital sports fans in India through AI-curated 15-second micro-bulletins, automated meme cards, and hyper-lean community syndication.
    </p>

    <!-- Key Metrics Row -->
    <div class="grid-4">
      <div class="metric-card accent">
        <div class="metric-val">₹5.00 L</div>
        <div class="metric-label">Seed Capital Required</div>
      </div>
      <div class="metric-card success">
        <div class="metric-val">6 Months</div>
        <div class="metric-label">Runway to Breakeven</div>
      </div>
      <div class="metric-card gold">
        <div class="metric-val">Month 3</div>
        <div class="metric-label">First Revenue Inflow</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">75K+</div>
        <div class="metric-label">Target MAU (Month 5)</div>
      </div>
    </div>

    <!-- The Dialmate AI Incubator Advantage -->
    <div class="card highlight">
      <div class="card-header-sm">
        <span>🚀 THE SPORT IQ & DIALMATE AI TECHNOLOGY ADVANTAGE</span>
        <span class="tag-pill tag-red">Proprietary AI Pipeline</span>
      </div>
      <p style="font-size: 6.4pt; color: #334155; line-height: 1.25;">
        Unlike traditional media startups that hemorrhage capital on third-party agencies and massive editorial desks, <strong>SPORT IQ</strong> is engineered on <strong>Dialmate AI's proprietary real-time AI summarization, automated infographic pipelines, and low-latency infrastructure</strong>. This unlocks an asymmetric 85%+ gross margin and zero vendor software burn from Day 1.
      </p>
    </div>

    <!-- Core Proposition & Market Void -->
    <div class="grid-2">
      <div class="card">
        <div class="card-header-sm" style="color: #b91c1c;">⚠️ The Structural Market Void</div>
        <p style="font-size: 6.2pt; color: #475569; line-height: 1.22;">
          • <strong>Legacy Scorecard Apps (Cricbuzz, ESPNcricinfo):</strong> Cluttered with ad banners, slow mobile UX, zero snackable short-form video or Gen-Z engagement.<br>
          • <strong>Broadcast Giants (JioHotstar, SonyLIV):</strong> High-friction video streams unsuited for quick 30-second match pulse checks on the go.<br>
          • <strong>Fragmented Social Feeds:</strong> Unverified meme pages with irregular schedules and zero real-time live data fidelity.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #15803d;">⚡ The SPORT IQ Solution ("15-Second Match Pulse")</div>
        <p style="font-size: 6.2pt; color: #475569; line-height: 1.22;">
          • <strong>AI-Curated Micro-Bulletins:</strong> Instant match highlights, key tactical pivots, and live scorecards condensed into 40-word cards.<br>
          • <strong>Automated Visual Cards & Memes:</strong> Instant generation of high-contrast social cards for WhatsApp, Instagram, and Telegram.<br>
          • <strong>Featherlight PWA & Mobile App:</strong> Sub-second load times, push notifications faster than broadcast TV, and zero clutter.
        </p>
      </div>
    </div>

    <!-- TAM / SAM / SOM & Market Growth Drivers -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>🌐 MARKET SIZING & CONSUMPTION TAILWINDS (INDIA 2026-2030)</span>
        <span class="tag-pill tag-dark">CAGR 24.8%</span>
      </div>
      <div class="grid-3" style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
        <div>
          <strong style="color: #0f172a;">TAM: 650M Sports Fans</strong><br>
          India's total smartphone digital sports audience across Cricket, Football, Kabaddi, and F1.
        </div>
        <div>
          <strong style="color: #0f172a;">SAM: 180M Short-Form Fans</strong><br>
          Urban and semi-urban fans consuming snackable sports reels, WhatsApp status cards, and Telegram alerts.
        </div>
        <div>
          <strong style="color: #0f172a;">SOM: 5M Target Users</strong><br>
          High-intent sports followers reached via SPORT IQ's creator network over a 24-month roadmap.
        </div>
      </div>
    </div>

    <!-- Brand Positioning Summary -->
    <div class="card">
      <div class="card-header-sm">
        <span>🔥 BRAND ARCHITECTURE & POSITIONING MATRIX</span>
        <span style="font-size: 5.4pt; color: #64748b;">Primary Flagship: SPORT IQ</span>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th style="width: 20%;">Brand Property</th>
            <th style="width: 30%;">Tagline / Hook</th>
            <th style="width: 30%;">Brand Persona & Target Vibe</th>
            <th style="width: 20%;">Strategic Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong style="color: #dc2626; font-family: 'JetBrains Mono';">SPORT IQ</strong></td>
            <td><em>"News • Insights • Scores • Stories"</em></td>
            <td>High-octane, futuristic sports bulletin, 3D broadcast speed.</td>
            <td><span class="tag-pill tag-red">Primary Flagship</span></td>
          </tr>
          <tr>
            <td><strong style="color: #0f172a; font-family: 'JetBrains Mono';">DUKGO</strong></td>
            <td><em>"Sports without the fluff."</em></td>
            <td>Fast, eccentric, minimalist; viral cricket duck pun + rapid dispatch.</td>
            <td><span class="tag-pill tag-dark">Gen-Z Viral Spin</span></td>
          </tr>
          <tr>
            <td><strong style="color: #2563eb; font-family: 'JetBrains Mono';">BALLR</strong></td>
            <td><em>"The raw pulse of the game."</em></td>
            <td>Premium, bold, urban street-culture meets high-speed statistics.</td>
            <td><span class="tag-pill tag-dark">Lifestyle & Merch</span></td>
          </tr>
          <tr>
            <td><strong style="color: #059669; font-family: 'JetBrains Mono';">SHORTPITCH</strong></td>
            <td><em>"Every match in 40 words."</em></td>
            <td>Clean, executive, Inshorts-for-sports utility proposition.</td>
            <td><span class="tag-pill tag-green">Mass-Market Utility</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 1 of 6</span>
  </div>
</div>

<!-- ================= PAGE 2: LEADERSHIP GOVERNANCE & ROLES ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">EXECUTIVE GOVERNANCE</div>
      </div>
    </div>

    <div class="section-title">
      <span>⚡ CORE LEADERSHIP MANDATES & ZERO-AGENCY EXECUTION MOAT</span>
      <span class="tag">Asymmetric Founder Moat</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 5px; line-height: 1.28;">
      The foundation of our lean capital efficiency is a strict, complementary division of execution between co-founders. With zero tech-vendor dependencies and zero agency middlemen for creator distribution, every rupee of the ₹5 Lakh seed round translates directly into product capability and targeted user acquisition.
    </p>

    <!-- Side-by-Side Deep Dive Roles -->
    <div class="grid-2">
      <!-- Sayan Role Card -->
      <div class="role-card sayan">
        <div class="role-badge-row">
          <div>
            <div class="role-name">Sayan Bhattacharya</div>
            <div class="role-title">Co-Founder, Chief Technology Officer & Head of Product</div>
          </div>
          <span class="tag-pill tag-red">Tech & Architecture</span>
        </div>

        <div class="role-summary">
          <strong>Strategic Mandate:</strong> End-to-end ownership of the technological stack, AI ingestion engines, low-latency live score pipelines, automated card rendering microservices, and product UI/UX performance.
        </div>

        <div style="font-size: 6.4pt; font-weight: 700; color: #0f172a; margin-bottom: 2px;">Key Operational Responsibilities:</div>
        <ul class="role-list">
          <li><strong>AI Bulletin Pipeline:</strong> Engineering natural language summarization algorithms to process match feeds into 35-word crisp bulletins within 2.5 seconds of play events.</li>
          <li><strong>Full-Stack Platform Development:</strong> Building the lightning-fast PWA and React Native/Flutter mobile app with offline caching and instant push notifications.</li>
          <li><strong>Automated Card Generation:</strong> Developing serverless image/motion generators for instant scorecards, tactical memes, and visual statistics.</li>
          <li><strong>Cloud & Security Infrastructure:</strong> Managing Supabase, AWS Lambda/Vercel serverless clusters, Cloudflare edge caching, and live sports API data ingestion.</li>
          <li><strong>Telemetry & Data Analytics:</strong> Implementing user telemetry, retention funnels, latency trackers, and A/B feature test suites.</li>
        </ul>

        <div class="kpi-chip-row">
          <span class="kpi-chip">🎯 Uptime > 99.9%</span>
          <span class="kpi-chip">🎯 Bulletin Latency < 2.5s</span>
          <span class="kpi-chip">🎯 App Load < 800ms</span>
          <span class="kpi-chip">🎯 Zero Tech Vendor Cost</span>
        </div>
      </div>

      <!-- Rajrup Role Card -->
      <div class="role-card rajrup">
        <div class="role-badge-row">
          <div>
            <div class="role-name">Rajrup</div>
            <div class="role-title">Co-Founder, Chief Growth Officer & Head of Distribution</div>
          </div>
          <span class="tag-pill tag-dark">Growth & Partnerships</span>
        </div>

        <div class="role-summary">
          <strong>Strategic Mandate:</strong> End-to-end ownership of user acquisition, creator syndication networks, viral hook creation, social media growth hacking, brand sponsorship sales, and community monetization.
        </div>

        <div style="font-size: 6.4pt; font-weight: 700; color: #0f172a; margin-bottom: 2px;">Key Operational Responsibilities:</div>
        <ul class="role-list">
          <li><strong>Creator & Influencer Syndication:</strong> Direct sourcing, negotiating, and onboarding of 50+ micro-creators (10k-70k followers) across regional cricket/football fandoms at zero agency margin bleed.</li>
          <li><strong>Viral Social Hijacking:</strong> Managing real-time match threads on X/Twitter, viral Instagram Reels distribution, and high-retention meme channels.</li>
          <li><strong>Community Channel Scale:</strong> Building and moderating high-engagement WhatsApp VIP Broadcast channels and Telegram match-day bulletin groups.</li>
          <li><strong>Brand Monetization & BD:</strong> Pitching and securing direct sponsor slots on daily match bulletins, fantasy sports affiliate deals, and sports brand partnerships.</li>
          <li><strong>User Feedback & Growth Loops:</strong> Tracking CAC, viral K-factor, referral incentives, and funneling user feedback directly to product sprints.</li>
        </ul>

        <div class="kpi-chip-row">
          <span class="kpi-chip">🎯 Target CAC < ₹4.00</span>
          <span class="kpi-chip">🎯 Viral K-Factor > 1.3</span>
          <span class="kpi-chip">🎯 50+ Creator Network</span>
          <span class="kpi-chip">🎯 Month 3 Rev Live</span>
        </div>
      </div>
    </div>

    <!-- Operational Synergy & Dialmate AI Support Matrix -->
    <div class="card">
      <div class="card-header-sm">
        <span>🤝 FOUNDER SYNERGY & DIALMATE AI INCUBATION GOVERNANCE</span>
        <span class="tag-pill tag-red">Operational Rhythm</span>
      </div>
      <table class="custom-table" style="margin-top: 1px;">
        <thead>
          <tr>
            <th style="width: 25%;">Domain</th>
            <th style="width: 35%;">Sayan (Tech & Product)</th>
            <th style="width: 35%;">Rajrup (Growth & Commercial)</th>
            <th style="width: 5%; text-align: center;">Sync</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Match Day Execution</strong></td>
            <td>Automated live feeds, CDN bandwidth scaling, card generation pipeline stability.</td>
            <td>Live meme syndication, influencer broadcast push, engagement thread moderation.</td>
            <td style="text-align: center; color: #dc2626; font-weight: bold;">Daily</td>
          </tr>
          <tr>
            <td><strong>User Retention & Growth</strong></td>
            <td>Building gamified polls, prediction leaderboards, and sub-second push delivery.</td>
            <td>Community contests, referral rewards, influencer co-branded badge distribution.</td>
            <td style="text-align: center; color: #dc2626; font-weight: bold;">Weekly</td>
          </tr>
          <tr>
            <td><strong>Monetization & Ads</strong></td>
            <td>Deploying programmatic ad units, non-intrusive sponsor banner slots, Pro paywall.</td>
            <td>Negotiating sponsor contracts, affiliate link tracking, brand deal packaging.</td>
            <td style="text-align: center; color: #dc2626; font-weight: bold;">Bi-Weekly</td>
          </tr>
          <tr>
            <td><strong>Investor & Advisory Sync</strong></td>
            <td>Technical telemetry, latency benchmarks, infrastructure cost audits.</td>
            <td>MAU traction, CAC/LTV cohorts, creator ROI, financial inflow reports.</td>
            <td style="text-align: center; color: #dc2626; font-weight: bold;">Monthly</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Corporate Governance & Equity Alignment -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>⚖️ EQUITY ALIGNMENT & 4-YEAR VESTING GOVERNANCE</span>
        <span class="tag-pill tag-dark">1-Year Cliff Standard</span>
      </div>
      <div class="grid-3" style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
        <div>
          <strong style="color: #0f172a;">Founder Vesting:</strong> Standard 4-year vesting schedule with 1-year cliff to guarantee long-term alignment and institutional investor readiness.
        </div>
        <div>
          <strong style="color: #0f172a;">ESOP Pool:</strong> 10% unallocated ESOP pool reserved for early lead engineers, content heads, and growth hires post-Seed round.
        </div>
        <div>
          <strong style="color: #0f172a;">IP Assignment:</strong> All proprietary AI scraping algorithms, brand trademarks, and domain assets fully assigned to the incorporated entity.
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 2 of 6</span>
  </div>
</div>

<!-- ================= PAGE 3: CAPITAL ALLOCATION MATRIX ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">CAPITAL DEPLOYMENT</div>
      </div>
    </div>

    <div class="section-title">
      <span>💰 ₹5,00,000 SEED CAPITAL ALLOCATION & COST OPTIMIZATION</span>
      <span class="tag">6-Month Runway</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 5px; line-height: 1.28;">
      A zero-waste capital deployment framework engineered to maximize organic viral velocity while securing robust infrastructure for 100k+ concurrent users during peak tournament matches. Every line item is strictly tied to measurable milestone deliverables.
    </p>

    <!-- Allocation Visual Diagram & Breakdown Table -->
    <div class="grid-2">
      <!-- Visual Allocation Bar Chart -->
      <div class="chart-box" style="text-align: left; padding: 6px;">
        <div style="font-size: 6.8pt; font-weight: 700; color: #0f172a; margin-bottom: 3.5px;">Capital Allocation by Strategic Bucket</div>
        
        <!-- Growth -->
        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 6pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>1. Influencer & Creator Distribution Engine</span>
            <span style="color: #dc2626; font-family: 'JetBrains Mono';">₹2,10,000 (42%)</span>
          </div>
          <div style="width: 100%; height: 7px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 42%; height: 100%; background: #dc2626;"></div>
          </div>
        </div>

        <!-- Tech -->
        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 6pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>2. Product Architecture & Cloud Infrastructure</span>
            <span style="color: #0f172a; font-family: 'JetBrains Mono';">₹1,20,000 (24%)</span>
          </div>
          <div style="width: 100%; height: 7px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 24%; height: 100%; background: #0f172a;"></div>
          </div>
        </div>

        <!-- Creative -->
        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 6pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>3. Creative Asset Kits & Micro-Writers</span>
            <span style="color: #e11d48; font-family: 'JetBrains Mono';">₹70,000 (14%)</span>
          </div>
          <div style="width: 100%; height: 7px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 14%; height: 100%; background: #e11d48;"></div>
          </div>
        </div>

        <!-- Emergency Reserve -->
        <div style="margin-bottom: 4px;">
          <div style="display: flex; justify-content: space-between; font-size: 6pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>4. Working Capital & Scaling Reserve</span>
            <span style="color: #d97706; font-family: 'JetBrains Mono';">₹70,000 (14%)</span>
          </div>
          <div style="width: 100%; height: 7px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 14%; height: 100%; background: #d97706;"></div>
          </div>
        </div>

        <!-- Legal & Setup -->
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 6pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>5. Legal, Trademark, App Store Licenses</span>
            <span style="color: #64748b; font-family: 'JetBrains Mono';">₹30,000 (6%)</span>
          </div>
          <div style="width: 100%; height: 7px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 6%; height: 100%; background: #64748b;"></div>
          </div>
        </div>

        <div style="margin-top: 4px; padding: 3px 5px; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 3px; font-size: 5.4pt; color: #475569;">
          <strong>Strategic Takeaway:</strong> 56% of total capital is dedicated directly to market-facing customer acquisition and viral creative content, while 30% secures robust tech/legal foundation, backed by a 14% safety reserve.
        </div>
      </div>

      <!-- Line Item Breakdown Table -->
      <div>
        <table class="custom-table" style="margin: 0;">
          <thead>
            <tr>
              <th>Line Item / Allocation Domain</th>
              <th style="text-align: right;">Amount (INR)</th>
              <th style="text-align: right;">Share</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>35 Micro-Creators (10k-70k reach)</strong><br><span style="font-size: 5.2pt; color: #64748b;">Negotiated seed drops @ ₹3k-₹5k / post</span></td>
              <td class="num">₹1,40,000</td>
              <td class="num">28.0%</td>
            </tr>
            <tr>
              <td><strong>Paid Social Testing & Boosts</strong><br><span style="font-size: 5.2pt; color: #64748b;">Targeted Meta & X boosts on top viral bulletins</span></td>
              <td class="num">₹50,000</td>
              <td class="num">10.0%</td>
            </tr>
            <tr>
              <td><strong>Sports Data API Feeds & Webhooks</strong><br><span style="font-size: 5.2pt; color: #64748b;">Cricket/Football/F1 real-time latency tiers</span></td>
              <td class="num">₹55,000</td>
              <td class="num">11.0%</td>
            </tr>
            <tr>
              <td><strong>Cloud Serverless & CDN Infrastructure</strong><br><span style="font-size: 5.2pt; color: #64748b;">Supabase, AWS Lambda, Cloudflare, OneSignal</span></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
            </tr>
            <tr>
              <td><strong>Domain, Notification & WhatsApp API</strong><br><span style="font-size: 5.2pt; color: #64748b;">WhatsApp Business API & push credits</span></td>
              <td class="num">₹35,000</td>
              <td class="num">7.0%</td>
            </tr>
            <tr>
              <td><strong>Motion Design & Graphic Asset Kits</strong><br><span style="font-size: 5.2pt; color: #64748b;">Reusable 3D match cards & sound packs</span></td>
              <td class="num">₹40,000</td>
              <td class="num">8.0%</td>
            </tr>
            <tr>
              <td><strong>Regional Translation & Micro-Writers</strong><br><span style="font-size: 5.2pt; color: #64748b;">Vernacular translation stipends for peak IPL</span></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
            </tr>
            <tr>
              <td><strong>Creator Referral Incentive Pool</strong><br><span style="font-size: 5.2pt; color: #64748b;">Performance affiliate payouts for top referrers</span></td>
              <td class="num">₹20,000</td>
              <td class="num">4.0%</td>
            </tr>
            <tr>
              <td><strong>Entity Incorporation & Trademark</strong><br><span style="font-size: 5.2pt; color: #64748b;">Pvt Ltd setup, GST, brand name TM filing</span></td>
              <td class="num">₹20,000</td>
              <td class="num">4.0%</td>
            </tr>
            <tr>
              <td><strong>App Stores (Google Play & Apple Dev)</strong><br><span style="font-size: 5.2pt; color: #64748b;">Developer licenses ($25 + $99)</span></td>
              <td class="num">₹10,000</td>
              <td class="num">2.0%</td>
            </tr>
            <tr>
              <td><strong>Tournament Scaling Contingency Reserve</strong><br><span style="font-size: 5.2pt; color: #64748b;">Buffer for opportunistic tournament trends</span></td>
              <td class="num">₹70,000</td>
              <td class="num">14.0%</td>
            </tr>
            <tr class="total-row">
              <td><strong>TOTAL SEED CAPITAL DEPLOYED</strong></td>
              <td class="num">₹5,00,000</td>
              <td class="num">100.0%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Capital Deployment Tranches & Sensitivity Model -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>📊 TRANCHE DISBURSEMENT GATES & SENSITIVITY SCENARIOS</span>
        <span class="tag-pill tag-dark">Milestone Tranches</span>
      </div>
      <table class="custom-table" style="margin: 0;">
        <thead>
          <tr>
            <th>Disbursement Tranche</th>
            <th>Prerequisite Milestone Gate</th>
            <th>Primary Fund Allocation</th>
            <th style="text-align: right;">Tranche Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Tranche 1 (Month 1)</strong></td>
            <td>Company incorporation, PWA architecture deployment, and core AI scraper setup.</td>
            <td>Cloud infrastructure, sports data APIs, legal filings, and UI asset packages.</td>
            <td class="num">₹2,00,000</td>
          </tr>
          <tr>
            <td><strong>Tranche 2 (Month 2-3)</strong></td>
            <td>Beta retention D7 > 35%, 5k MAU achieved, and WhatsApp VIP alpha live.</td>
            <td>35 micro-creator campaign rollout, paid performance boosts, and store launches.</td>
            <td class="num">₹2,00,000</td>
          </tr>
          <tr>
            <td><strong>Tranche 3 (Month 4-5)</strong></td>
            <td>First direct brand sponsor contracted and MAU crossing 25,000 threshold.</td>
            <td>Regional vernacular expansion, gaming affiliate scaling, and tournament buffer.</td>
            <td class="num">₹1,00,000</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Operational Guardrails -->
    <div class="grid-3">
      <div class="card">
        <div class="card-header-sm" style="color: #dc2626;">🔒 Milestone-Locked Tranches</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
          Funds are unlocked strictly upon audited delivery of sprint milestones, ensuring zero unallocated capital bleed.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #16a34a;">⚡ CAC Cap Enforcement</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
          Strict internal rule: Paid campaign spend is halted if blended Customer Acquisition Cost exceeds ₹4.50/install.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #d97706;">🔄 Dialmate Tech Subsidy</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
          Utilizing Dialmate AI's existing server clusters saves over ₹2,50,000 in early R&D and dev-tool subscriptions.
        </p>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 3 of 6</span>
  </div>
</div>

<!-- ================= PAGE 4: 6-MONTH EXECUTION ROADMAP ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">GTM & SCALE ROADMAP</div>
      </div>
    </div>

    <div class="section-title">
      <span>🗓️ 6-MONTH MILESTONE-DRIVEN EXECUTION TIMELINE</span>
      <span class="tag">Zero to 75,000 MAU</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 5px; line-height: 1.28;">
      A synchronized sprint structure uniting engineering milestones with distribution campaigns to trigger early monetization by Month 3 and institutional investor readiness by Month 6.
    </p>

    <div class="timeline-grid">
      <!-- Month 1 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 1</div>
        <div class="month-title">Architecture & MVP Build</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Deploy core SPORT IQ PWA + React Native shell, integrate live sports API feeds, build automated 15-second summary card generator.</li>
          <li><strong>Growth:</strong> Direct outreach to 100+ cricket/football creators; secure 35 pre-launch commitments; establish Telegram alpha room.</li>
          <li><strong>Milestone:</strong> Functional MVP generating automated match cards in < 2.5s.</li>
        </ul>
      </div>

      <!-- Month 2 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 2</div>
        <div class="month-title">Closed Beta & Seeding (5k Users)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Android APK & Web Beta release; test push notification speed under 10k concurrent simulated loads; crash tracking.</li>
          <li><strong>Growth:</strong> Launch initial 15 micro-creator shoutouts; kick off WhatsApp VIP bulletin groups; run referral invite contest.</li>
          <li><strong>Milestone:</strong> 5,000 Beta MAU with D7 retention > 38%.</li>
        </ul>
      </div>

      <!-- Month 3 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 3: REVENUE START</div>
        <div class="month-title">Public Launch (25k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Google Play Store launch; automated tournament bracket trackers; real-time community polling modules.</li>
          <li><strong>Growth:</strong> Full creator syndication blast during major match cycle; launch X match threads; onboard first direct brand sponsors.</li>
          <li><strong>Revenue:</strong> ₹25,000 first month ad & sponsorship inflow.</li>
        </ul>
      </div>

      <!-- Month 4 -->
      <div class="month-card" style="border-top: 2.5px solid #16a34a;">
        <div class="month-badge" style="background: #16a34a;">MONTH 4</div>
        <div class="month-title">Affiliates & Engagement Depth</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Gamified fantasy prediction battleground; user badges; offline bulletin reading support.</li>
          <li><strong>Growth:</strong> Partner with sports gaming & fantasy platforms on CPA affiliate model; podcast shoutout syndication.</li>
          <li><strong>Revenue:</strong> ₹70,000/mo (Brand Ads + Gaming Affiliates).</li>
        </ul>
      </div>

      <!-- Month 5 -->
      <div class="month-card" style="border-top: 2.5px solid #d97706;">
        <div class="month-badge" style="background: #d97706;">MONTH 5: BREAKEVEN</div>
        <div class="month-title">Pro Sub & Vernacular (75k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Launch Hindi & regional vernacular feeds; launch ₹49/mo "SPORT IQ Pro" ad-free micro-subscription.</li>
          <li><strong>Growth:</strong> Tier-2/Tier-3 regional creator campaign; campus ambassador program across 20 college sports clubs.</li>
          <li><strong>Revenue:</strong> ₹1,45,000/mo (Operational cashflow positive).</li>
        </ul>
      </div>

      <!-- Month 6 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 6: SEED PITCH</div>
        <div class="month-title">Institutional Seed Round Pitch</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Present high-availability telemetry, sub-second latency records, and proprietary AI synthesis patent documentation.</li>
          <li><strong>Growth:</strong> Present audited CAC/LTV cohorts, 75k+ MAU, and ₹2.45L MRR to Tier-1 Angels & Seed VCs for ₹2.5 Cr - ₹5 Cr round.</li>
          <li><strong>Revenue:</strong> ₹2,45,000/mo recurring revenue run-rate.</li>
        </ul>
      </div>
    </div>

    <!-- Reinvestment Flywheel -->
    <div class="card" style="background: #fff1f2; border: 1.2px solid #fecdd3;">
      <div class="card-header-sm">
        <span>🔄 100% OPERATING CASHFLOW REINVESTMENT FLYWHEEL (MONTH 5 ONWARDS)</span>
        <span class="tag-pill tag-red">Self-Sustaining Growth</span>
      </div>
      <div class="grid-2">
        <p style="font-size: 6.1pt; color: #475569; line-height: 1.22;">
          Once operational cashflow turns positive in Month 5 (₹1.45L+ net revenue), 100% of profits are re-injected into growth channels:
          <br>• <strong>65% to Creator Retainers:</strong> Securing exclusive multi-tournament contracts with top-performing regional sports creators.
          <br>• <strong>35% to AI Video Automation:</strong> Expanding Dialmate AI's synthetic video card engine to auto-generate 10-second vertical video summaries for YouTube Shorts & Reels.
        </p>
        <div style="background: #ffffff; padding: 4px 6px; border-radius: 4px; border: 1px solid #e2e8f0; font-size: 5.9pt;">
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 1.5px;">Key Milestone Validation Gates:</div>
          <div style="color: #334155; line-height: 1.18;">
            ✔ Month 2 Gate: D7 Retention > 35% before unlocking public launch ad budget.<br>
            ✔ Month 3 Gate: Organic K-Factor > 1.2 across WhatsApp referral cards.<br>
            ✔ Month 5 Gate: Net monthly revenue > ₹1.25L before initiating VC Seed Pitch.
          </div>
        </div>
      </div>
    </div>

    <!-- User Acquisition Channel Matrix -->
    <div class="card">
      <div class="card-header-sm">
        <span>🎯 MULTI-CHANNEL ACQUISITION ENGINE & ORGANIC VIRALITY LOOPS</span>
        <span class="tag-pill tag-dark">CAC < ₹4.00</span>
      </div>
      <table class="custom-table" style="margin-top: 1px;">
        <thead>
          <tr>
            <th style="width: 25%;">Acquisition Channel</th>
            <th style="width: 35%;">Strategy & Execution Mode</th>
            <th style="width: 20%;">Target Conversion</th>
            <th style="width: 20%; text-align: right;">Est. Monthly New Users</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Micro-Creator Drops</strong></td>
            <td>35 contracted regional sports creators posting instant match takeaway stories with deep-links.</td>
            <td>4.2% Install Rate</td>
            <td class="num">18,500 users</td>
          </tr>
          <tr>
            <td><strong>WhatsApp & Telegram VIP</strong></td>
            <td>Real-time viral score cards formatted for 1-click sharing to cricket & football friend groups.</td>
            <td>Viral K-Factor 1.34</td>
            <td class="num">24,000 users</td>
          </tr>
          <tr>
            <td><strong>X (Twitter) Match Hijacking</strong></td>
            <td>Live auto-updating match threads & meme cards published within 5s of major match events.</td>
            <td>2.8% Profile CTR</td>
            <td class="num">12,500 users</td>
          </tr>
          <tr>
            <td><strong>Campus Sports Ambassador</strong></td>
            <td>Student sports captains across 20 college tournaments running fantasy match prediction pools.</td>
            <td>6.5% Signup Rate</td>
            <td class="num">8,000 users</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 4 of 6</span>
  </div>
</div>

<!-- ================= PAGE 5: FINANCIAL MODEL & UNIT ECONOMICS ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">FINANCIAL MODEL & UNIT ECONOMICS</div>
      </div>
    </div>

    <div class="section-title">
      <span>📈 12-MONTH REVENUE PROJECTIONS & FINANCIAL ARCHITECTURE</span>
      <span class="tag">Conservative Projections</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A diversified three-pillar monetization architecture: <strong>Direct Brand Sponsorships</strong> on high-engagement match-day bulletins, <strong>Affiliate Sales Commissions</strong> from fantasy/merchandise platforms, and <strong>"SPORT IQ Pro" Micro-Subscriptions</strong> (₹49/mo).
    </p>

    <!-- 12-Month Financial Table -->
    <table class="custom-table" style="margin-bottom: 4px;">
      <thead>
        <tr>
          <th>Timeline</th>
          <th style="text-align: right;">Target MAU</th>
          <th style="text-align: right;">Brand Ads & Sponsors</th>
          <th style="text-align: right;">Affiliate Sales</th>
          <th style="text-align: right;">Pro Subscriptions</th>
          <th style="text-align: right;">Total Revenue (INR)</th>
          <th style="text-align: right;">Cumulative Rev</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Month 1 (MVP)</strong></td>
          <td class="num">0</td>
          <td class="num">₹0</td>
          <td class="num">₹0</td>
          <td class="num">₹0</td>
          <td class="num"><strong>₹0</strong></td>
          <td class="num">₹0</td>
        </tr>
        <tr>
          <td><strong>Month 2 (Beta)</strong></td>
          <td class="num">5,000</td>
          <td class="num">₹0</td>
          <td class="num">₹0</td>
          <td class="num">₹0</td>
          <td class="num"><strong>₹0</strong></td>
          <td class="num">₹0</td>
        </tr>
        <tr>
          <td><strong>Month 3 (Launch)</strong></td>
          <td class="num">25,000</td>
          <td class="num">₹15,000</td>
          <td class="num">₹10,000</td>
          <td class="num">₹0</td>
          <td class="num" style="color: #dc2626;"><strong>₹25,000</strong></td>
          <td class="num">₹25,000</td>
        </tr>
        <tr>
          <td><strong>Month 4 (Scale)</strong></td>
          <td class="num">45,000</td>
          <td class="num">₹40,000</td>
          <td class="num">₹25,000</td>
          <td class="num">₹5,000</td>
          <td class="num" style="color: #dc2626;"><strong>₹70,000</strong></td>
          <td class="num">₹95,000</td>
        </tr>
        <tr>
          <td><strong>Month 5 (Breakeven)</strong></td>
          <td class="num">75,000</td>
          <td class="num">₹80,000</td>
          <td class="num">₹45,000</td>
          <td class="num">₹20,000</td>
          <td class="num" style="color: #dc2626;"><strong>₹1,45,000</strong></td>
          <td class="num">₹2,40,000</td>
        </tr>
        <tr>
          <td><strong>Month 6 (Seed Pitch)</strong></td>
          <td class="num">120,000</td>
          <td class="num">₹1,30,000</td>
          <td class="num">₹70,000</td>
          <td class="num">₹45,000</td>
          <td class="num" style="color: #dc2626;"><strong>₹2,45,000</strong></td>
          <td class="num">₹4,85,000</td>
        </tr>
        <tr>
          <td><strong>Month 9 (Post-Seed)</strong></td>
          <td class="num">250,000</td>
          <td class="num">₹3,20,000</td>
          <td class="num">₹1,80,000</td>
          <td class="num">₹1,20,000</td>
          <td class="num" style="color: #dc2626;"><strong>₹6,20,000</strong></td>
          <td class="num">₹17,45,000</td>
        </tr>
        <tr class="total-row">
          <td><strong>Month 12 (Year 1 Exit)</strong></td>
          <td class="num">500,000</td>
          <td class="num">₹6,50,000</td>
          <td class="num">₹3,50,000</td>
          <td class="num">₹2,50,000</td>
          <td class="num"><strong>₹12,50,000 / mo</strong></td>
          <td class="num"><strong>₹45,95,000</strong></td>
        </tr>
      </tbody>
    </table>

    <!-- Unit Economics Breakdown -->
    <div class="grid-4">
      <div class="metric-card">
        <div class="metric-val">₹3.80</div>
        <div class="metric-label">Blended CAC</div>
      </div>
      <div class="metric-card success">
        <div class="metric-val">₹18.50</div>
        <div class="metric-label">6-Month LTV</div>
      </div>
      <div class="metric-card accent">
        <div class="metric-val">4.86x</div>
        <div class="metric-label">LTV / CAC Multiple</div>
      </div>
      <div class="metric-card gold">
        <div class="metric-val">86.4%</div>
        <div class="metric-label">Gross Margin</div>
      </div>
    </div>

    <!-- Operating Cost Structure & Profitability Dynamics -->
    <div class="card">
      <div class="card-header-sm">
        <span>📊 OPERATING COST STRUCTURE & EBITDA MARGIN DYNAMICS</span>
        <span class="tag-pill tag-green">Profitable by Month 5</span>
      </div>
      <table class="custom-table" style="margin-top: 1px;">
        <thead>
          <tr>
            <th style="width: 25%;">Cost Component</th>
            <th style="width: 45%;">Operational Scope & Expense Driver</th>
            <th style="width: 15%; text-align: right;">% of Revenue</th>
            <th style="width: 15%; text-align: right;">Status at Scale</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Creator & Influencer Payouts</strong></td>
            <td>Performance rev-share and monthly retainers for top Tier-2/Tier-3 sports creators.</td>
            <td class="num">28.0%</td>
            <td class="num" style="color: #16a34a;">Variable</td>
          </tr>
          <tr>
            <td><strong>Cloud Serverless & CDN</strong></td>
            <td>Supabase, AWS Lambda, Cloudflare edge streaming, and live sports WebSocket traffic.</td>
            <td class="num">8.5%</td>
            <td class="num" style="color: #16a34a;">High Scale Subsidized</td>
          </tr>
          <tr>
            <td><strong>Sports Data API Feeds</strong></td>
            <td>Real-time live cricket, football, and motorsport data feeds & webhooks.</td>
            <td class="num">6.5%</td>
            <td class="num" style="color: #16a34a;">Fixed Tier</td>
          </tr>
          <tr class="total-row">
            <td><strong>NET OPERATING EBITDA MARGIN</strong></td>
            <td><strong>Cash-generative, scalable digital media platform powered by in-house tech</strong></td>
            <td class="num"><strong>57.0%</strong></td>
            <td class="num" style="color: #be123c;"><strong>High Cashflow</strong></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Quarterly Cashflow & Series-A Valuation Model -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>💰 QUARTERLY CASHFLOW & INSTITUTIONAL SEED VALUATION BENCHMARK</span>
        <span class="tag-pill tag-dark">Series Seed Multiple</span>
      </div>
      <div class="grid-4" style="font-size: 5.6pt; color: #475569; line-height: 1.2;">
        <div style="background: #ffffff; padding: 4px; border-radius: 3px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a;">Q1 (Month 1-3):</strong><br>
          Revenue: ₹25,000<br>
          Net Burn: (₹1,75,000)<br>
          <span style="color: #dc2626; font-weight: 700;">MVP & Launch Phase</span>
        </div>
        <div style="background: #ffffff; padding: 4px; border-radius: 3px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a;">Q2 (Month 4-6):</strong><br>
          Revenue: ₹4,60,000<br>
          Net Profit: ₹1,85,000<br>
          <span style="color: #16a34a; font-weight: 700;">Cashflow Positive</span>
        </div>
        <div style="background: #ffffff; padding: 4px; border-radius: 3px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a;">Q3 (Month 7-9):</strong><br>
          Revenue: ₹12,60,000<br>
          Net Profit: ₹7,18,000<br>
          <span style="color: #16a34a; font-weight: 700;">Scale & Reinvestment</span>
        </div>
        <div style="background: #ffffff; padding: 4px; border-radius: 3px; border: 1px solid #e2e8f0;">
          <strong style="color: #0f172a;">Q4 (Month 10-12):</strong><br>
          Revenue: ₹28,50,000<br>
          Net Profit: ₹16,24,000<br>
          <span style="color: #2563eb; font-weight: 700;">Target Seed ₹15-20 Cr Val</span>
        </div>
      </div>
    </div>

    <!-- Deep Dive Monetization Pillars -->
    <div class="grid-3">
      <div class="card">
        <div class="card-header-sm" style="color: #dc2626;">📢 Direct Brand Ads (52%)</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          Co-branded match cards ("Powered by Brand X") distributed across our app and 50+ creator social stories. High CTR due to zero visual ad fatigue.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">🔗 Affiliate Commerce (28%)</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          Seamless integration with fantasy sports platforms (Dream11/My11Circle) and official sports merchandise stores yielding 15-22% CPA commissions.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #d97706;">👑 Pro Micro-Subs (20%)</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          ₹49/month micro-membership unlocking ad-free UI, advanced fantasy match analytics sheets, and exclusive VIP community chat access.
        </p>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 5 of 6</span>
  </div>
</div>

<!-- ================= PAGE 6: CONSULTANT ENGAGEMENT & NEXT STEPS ================= -->
<div class="page">
  <div class="page-body">
    <div class="doc-header">
      <div class="brand-group">
        ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" alt="SPORT IQ Logo" class="logo-img-main">` : `<div style="font-weight:900; font-size:14pt; color:#dc2626;">SPORT IQ</div>`}
        <div class="incubator-badge">
          ${dialmateLogoBase64 ? `<img src="${dialmateLogoBase64}" alt="Dialmate AI" class="logo-img-sub">` : ''}
          <span class="incubator-text">Incubated by Dialmate AI</span>
        </div>
      </div>
      <div class="doc-meta-badge">
        <span class="confidential-tag">STRICTLY CONFIDENTIAL</span>
        <div class="doc-date">ADVISORY MANDATE & GOVERNANCE</div>
      </div>
    </div>

    <div class="section-title">
      <span>🤝 CONSULTANT & ADVISORY ENGAGEMENT FRAMEWORK</span>
      <span class="tag">Strategic Collaboration</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 5px; line-height: 1.28;">
      This document serves as the formal briefing for our lead strategic consultant/advisor. We seek active advisory support in facilitating angel/seed investor introductions, brokering regional sports federation relationships, and guiding brand sponsorship outreach.
    </p>

    <!-- Consultant Scope & Terms -->
    <div class="grid-2">
      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">🎯 Advisory Scope & Deliverables</div>
        <ul class="role-list">
          <li><strong>Investor Syndication:</strong> Facilitating strategic introductions to angel networks and early-stage VC funds for the ₹2.5 Cr - ₹5 Cr institutional seed round.</li>
          <li><strong>Sponsorship Dealmaking:</strong> Connecting growth lead to regional brand marketing heads, sports beverage brands, and gaming platforms.</li>
          <li><strong>Corporate Governance:</strong> Providing monthly strategic oversight on financial audits, CAC benchmarks, and cap table optimization.</li>
          <li><strong>Brand Positioning:</strong> Scaling the commercial brand identity of <strong>SPORT IQ</strong> tailored to institutional investor & fan taste.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">💼 Commercial Terms & Advisory Structure</div>
        <ul class="role-list">
          <li><strong>Advisory Equity / Retainer:</strong> Structured equity advisory options (1.5% - 3.0% advisory pool with 12-month milestone vesting) or performance-linked success fees on capital introduced.</li>
          <li><strong>Information Rights:</strong> Complete monthly access to real-time analytics dashboard, P&L statements, telemetry logs, and user retention metrics.</li>
          <li><strong>Meeting Cadence:</strong> Bi-weekly 45-minute operational sync with Sayan (CTO) and Rajrup (CGO) + monthly board governance review.</li>
          <li><strong>Dialmate AI Backing:</strong> Backed by Dialmate AI's corporate legal and AI infrastructure guarantees.</li>
        </ul>
      </div>
    </div>

    <!-- Immediate Next Action Items -->
    <div class="card highlight">
      <div class="card-header-sm">
        <span>⚡ IMMEDIATE ACTION ITEMS & 14-DAY EXECUTION ROADMAP</span>
        <span class="tag-pill tag-red">Action Plan</span>
      </div>
      <table class="custom-table" style="margin: 1px 0 0 0;">
        <thead>
          <tr>
            <th style="width: 15%;">Timeframe</th>
            <th style="width: 45%;">Key Deliverable / Milestone</th>
            <th style="width: 25%;">Responsible Owner</th>
            <th style="width: 15%; text-align: center;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Day 1 - 3</strong></td>
            <td>Finalize brand registration for <strong>SPORT IQ</strong> and file Pvt Ltd incorporation + trademark.</td>
            <td>Co-Founders & Legal Advisor</td>
            <td style="text-align: center;"><span class="tag-pill tag-red">In Progress</span></td>
          </tr>
          <tr>
            <td><strong>Day 4 - 7</strong></td>
            <td>Deploy live SPORT IQ PWA prototype with automated scraping & AI bulletin card generator.</td>
            <td>Sayan Bhattacharya (CTO)</td>
            <td style="text-align: center;"><span class="tag-pill tag-dark">Sprint Active</span></td>
          </tr>
          <tr>
            <td><strong>Day 8 - 10</strong></td>
            <td>Finalize initial contracts with 35 micro-creators and seed pre-launch VIP groups.</td>
            <td>Rajrup (CGO)</td>
            <td style="text-align: center;"><span class="tag-pill tag-green">Pipeline Ready</span></td>
          </tr>
          <tr>
            <td><strong>Day 11 - 14</strong></td>
            <td>Release Closed Beta (Android + Web) to first 1,000 sports fans; initiate telemetry tracking.</td>
            <td>Sayan & Rajrup</td>
            <td style="text-align: center;"><span class="tag-pill tag-amber">Scheduled</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Governance & Risk Management Safeguards -->
    <div class="card">
      <div class="card-header-sm">
        <span>🛡️ RISK MITIGATION & SCALING SAFEGUARDS</span>
        <span class="tag-pill tag-dark">Governance Controls</span>
      </div>
      <div class="grid-3" style="font-size: 5.8pt; color: #475569; line-height: 1.2;">
        <div>
          <strong style="color: #0f172a;">API Failover Redundancy:</strong> Dual sports data API providers with automated fallbacks to prevent outage during tournament peaks.
        </div>
        <div>
          <strong style="color: #0f172a;">Copyright & Fair Use Guard:</strong> Real-time text bulletins and AI data cards adhere to zero broadcast piracy and fair-use legal standards.
        </div>
        <div>
          <strong style="color: #0f172a;">Creator Payment Escrow:</strong> 50% milestone payment on delivery of creator assets to enforce campaign performance.
        </div>
      </div>
    </div>

    <!-- Formal Leadership & Advisory Sign-off Block -->
    <div class="card" style="background: #f8fafc; border: 1px solid #cbd5e1;">
      <div class="card-header-sm" style="margin-bottom: 2px;">
        <span>📝 VENTURE LEADERSHIP & ADVISORY SIGN-OFF</span>
        <span class="tag-pill tag-dark">Formal Endorsement</span>
      </div>
      <div class="grid-4" style="font-size: 5.6pt; color: #475569; line-height: 1.2; margin-top: 3px;">
        <div style="border-top: 1px dashed #94a3b8; padding-top: 3px;">
          <strong style="color: #0f172a;">Sayan Bhattacharya</strong><br>
          Co-Founder & CTO / Head of Product<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 3px;">
          <strong style="color: #0f172a;">Rajrup</strong><br>
          Co-Founder & CGO / Head of Growth<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 3px;">
          <strong style="color: #0f172a;">Dialmate AI Technologies</strong><br>
          Incubation & Corporate Partner<br>
          <span style="color: #64748b;">Signature: [Authorized]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 3px;">
          <strong style="color: #0f172a;">Strategic Consultant / Advisor</strong><br>
          Lead Advisory Mandate<br>
          <span style="color: #dc2626; font-weight: 700;">Signature: ________________</span>
        </div>
      </div>
    </div>
  </div>

  <div class="page-footer">
    <span>SPORT IQ Internal Strategy Dossier | Confidential</span>
    <span>Prepared for Strategic Consultant Review</span>
    <span>Page 6 of 6</span>
  </div>
</div>

</body>
</html>
`;

const htmlFilePath = path.join(__dirname, 'SPORT_IQ_STRATEGY_DOSSIER.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log('HTML dossier generated at:', htmlFilePath);

// Also copy to public directory for browser preview
const publicHtmlPath = path.join(__dirname, 'public', 'strategy_dossier.html');
fs.writeFileSync(publicHtmlPath, htmlContent, 'utf8');

const publicSportIqHtml = path.join(__dirname, 'public', 'sport_iq_strategy.html');
fs.writeFileSync(publicSportIqHtml, htmlContent, 'utf8');

const publicStrategyHtml = path.join(__dirname, 'public', 'strategy.html');
fs.writeFileSync(publicStrategyHtml, htmlContent, 'utf8');

const publicDeckHtml = path.join(__dirname, 'public', 'deck.html');
fs.writeFileSync(publicDeckHtml, htmlContent, 'utf8');

// PDF Generation using Chrome Headless
const pdfOutputPath = path.join(__dirname, 'SPORT_IQ_STRATEGY_DOSSIER.pdf');
const publicPdfPath = path.join(__dirname, 'public', 'SPORT_IQ_STRATEGY_DOSSIER.pdf');
const legacyPdfPath = path.join(__dirname, 'DIALMATE_AI_SPORTS_VENTURE_STRATEGY_DOSSIER.pdf');
const publicLegacyPdfPath = path.join(__dirname, 'public', 'DIALMATE_AI_SPORTS_VENTURE_STRATEGY_DOSSIER.pdf');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');
const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfOutputPath}" --no-pdf-header-footer "${fileUrl}"`;

console.log('Executing Chrome PDF generation command for SPORT IQ...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('PDF successfully generated at:', pdfOutputPath);
  fs.copyFileSync(pdfOutputPath, publicPdfPath);
  fs.copyFileSync(pdfOutputPath, legacyPdfPath);
  fs.copyFileSync(pdfOutputPath, publicLegacyPdfPath);
  console.log('PDF synced to all public and root endpoints!');
} catch (err) {
  console.error('Error generating PDF with Chrome:', err.message);
}
