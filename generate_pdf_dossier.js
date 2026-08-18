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
    margin: 0;
  }

  @media print {
    html, body {
      width: 210mm;
      height: 297mm;
      margin: 0 !important;
      padding: 0 !important;
    }
    .page {
      page-break-before: always;
      page-break-after: always;
      break-after: page;
    }
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
    font-size: 7.6pt;
    line-height: 1.3;
  }

  .page {
    width: 210mm;
    height: 297mm;
    max-width: 210mm;
    max-height: 297mm;
    padding: 9mm 11mm 8mm 11mm;
    margin: 0 auto;
    page-break-inside: avoid;
    break-inside: avoid;
    page-break-after: always;
    break-after: page;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    background-color: #ffffff;
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
    gap: 5.5px;
  }

  /* Header & Footer */
  .doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2.5px solid #dc2626;
    padding-bottom: 4px;
    margin-bottom: 4px;
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
    filter: drop-shadow(0 2px 4px rgba(220, 38, 38, 0.25));
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
    font-size: 14pt;
    font-weight: 900;
    line-height: 1.15;
    color: #0f172a;
    letter-spacing: -0.3px;
    margin-bottom: 2px;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .hero-sub {
    font-size: 7pt;
    color: #475569;
    line-height: 1.28;
    margin-bottom: 4px;
  }

  .section-title {
    font-size: 8.5pt;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 3px;
    border-bottom: 1.5px solid #e2e8f0;
    padding-bottom: 2px;
    flex-shrink: 0;
  }

  .section-title span.tag {
    font-size: 5.5pt;
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
    padding: 4.5px 5.5px;
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
    font-size: 10pt;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.1;
  }

  .metric-card.accent .metric-val { color: #dc2626; }
  .metric-card.success .metric-val { color: #16a34a; }
  .metric-card.gold .metric-val { color: #d97706; }

  .metric-label {
    font-size: 5.3pt;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-top: 1px;
  }

  /* Cards */
  .card {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    padding: 5.5px 7.5px;
    margin-bottom: 0;
  }

  .card.highlight {
    background: #fff1f2;
    border-left: 3px solid #dc2626;
  }

  .card-header-sm {
    font-size: 6.6pt;
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
    padding: 5.5px 7.5px;
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
    margin-bottom: 2px;
  }

  .role-name {
    font-size: 8.5pt;
    font-weight: 800;
    color: #0f172a;
  }

  .role-title {
    font-size: 6pt;
    font-weight: 700;
    color: #dc2626;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }

  .role-card.rajrup .role-title {
    color: #0f172a;
  }

  .role-summary {
    font-size: 6pt;
    color: #475569;
    margin-bottom: 3px;
    line-height: 1.2;
    background: #f8fafc;
    padding: 2.5px 4.5px;
    border-radius: 3px;
  }

  .role-list {
    list-style: none;
    font-size: 5.8pt;
    color: #334155;
  }

  .role-list li {
    margin-bottom: 1.2px;
    position: relative;
    padding-left: 7px;
    line-height: 1.16;
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
    gap: 2px;
    margin-top: 3px;
    padding-top: 2px;
    border-top: 1px dashed #e2e8f0;
  }

  .kpi-chip {
    font-size: 5pt;
    font-weight: 600;
    background: #f1f5f9;
    color: #475569;
    padding: 1px 3px;
    border-radius: 3px;
    border: 1px solid #e2e8f0;
  }

  /* Table styling */
  table.custom-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 5.7pt;
    margin: 1.5px 0;
  }

  table.custom-table th {
    background: #0f172a;
    color: #ffffff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 5.2pt;
    letter-spacing: 0.3px;
    padding: 2.5px 4.5px;
    text-align: left;
  }

  table.custom-table td {
    padding: 2.2px 4.5px;
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

  /* Timeline Grid */
  .timeline-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    margin-top: 2px;
  }

  .month-card {
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    background: #ffffff;
    padding: 4px 5px;
    font-size: 5.6pt;
  }

  .month-badge {
    display: inline-block;
    font-size: 4.8pt;
    font-weight: 800;
    background: #0f172a;
    color: #ffffff;
    padding: 1px 3px;
    border-radius: 2px;
    margin-bottom: 1px;
  }

  .month-badge.red {
    background: #dc2626;
  }

  .month-title {
    font-size: 6pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1px;
  }

  .month-points {
    list-style: none;
    color: #475569;
    line-height: 1.14;
  }

  .month-points li {
    margin-bottom: 1px;
    padding-left: 5px;
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
    padding: 1px 4px;
    border-radius: 6px;
    font-size: 5pt;
    font-weight: 700;
    text-transform: uppercase;
  }

  .tag-red { background: #fff1f2; color: #be123c; border: 1px solid #fecdd3; }
  .tag-dark { background: #f1f5f9; color: #0f172a; border: 1px solid #cbd5e1; }
  .tag-green { background: #f0fdf4; color: #15803d; border: 1px solid #bbf7d0; }
  .tag-amber { background: #fffbeb; color: #b45309; border: 1px solid #fde68a; }

  /* INFOGRAPHIC CONTAINER STYLING */
  .diagram-card {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    border: 1px solid #334155;
    border-radius: 6px;
    padding: 6px 8px;
    color: #ffffff;
    margin: 2px 0;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .diagram-title {
    font-size: 6.6pt;
    font-weight: 800;
    color: #fca5a5;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
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

    <div style="margin: 1px 0 3px 0;">
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
      <p style="font-size: 6.2pt; color: #334155; line-height: 1.24;">
        Unlike traditional media startups that hemorrhage capital on third-party agencies and massive editorial desks, <strong>SPORT IQ</strong> is engineered on <strong>Dialmate AI's proprietary real-time AI summarization, automated infographic pipelines, and low-latency infrastructure</strong>. This unlocks an asymmetric 85%+ gross margin and zero vendor software burn from Day 1.
      </p>
    </div>

    <!-- Core Proposition & Market Void -->
    <div class="grid-2">
      <div class="card">
        <div class="card-header-sm" style="color: #b91c1c;">⚠️ The Structural Market Void</div>
        <p style="font-size: 6pt; color: #475569; line-height: 1.2;">
          • <strong>Legacy Scorecard Apps (Cricbuzz, ESPNcricinfo):</strong> Cluttered with ad banners, slow mobile UX, zero snackable short-form video or Gen-Z engagement.<br>
          • <strong>Broadcast Giants (JioHotstar, SonyLIV):</strong> High-friction video streams unsuited for quick 30-second match pulse checks on the go.<br>
          • <strong>Fragmented Social Feeds:</strong> Unverified meme pages with irregular schedules and zero real-time live data fidelity.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #15803d;">⚡ The SPORT IQ Solution ("15-Second Match Pulse")</div>
        <p style="font-size: 6pt; color: #475569; line-height: 1.2;">
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
      <div class="grid-3" style="font-size: 5.6pt; color: #475569; line-height: 1.18;">
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
        <span style="font-size: 5.2pt; color: #64748b;">Primary Flagship: SPORT IQ</span>
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

<!-- ================= PAGE 2: LEADERSHIP GOVERNANCE & ARCHITECTURE DIAGRAM ================= -->
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
      <span>⚡ CORE LEADERSHIP MANDATES & OPERATIONAL ARCHITECTURE</span>
      <span class="tag">Asymmetric Founder Moat</span>
    </div>

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A strict, complementary division of execution between co-founders. With zero tech-vendor dependencies and zero agency middlemen for creator distribution, every rupee of the ₹5 Lakh seed round translates directly into product capability and targeted user acquisition.
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
          <strong>Strategic Mandate:</strong> End-to-end ownership of technological stack, AI ingestion engines, low-latency live score pipelines, automated card rendering microservices, and product UI/UX performance.
        </div>

        <div style="font-size: 6.2pt; font-weight: 700; color: #0f172a; margin-bottom: 2px;">Key Operational Responsibilities:</div>
        <ul class="role-list">
          <li><strong>AI Bulletin Pipeline:</strong> Natural language summarization algorithms processing match feeds into 35-word bulletins within 2.5s.</li>
          <li><strong>Full-Stack Platform Development:</strong> Building lightning-fast PWA and React Native app with offline caching and sub-second push notifications.</li>
          <li><strong>Automated Card Generation:</strong> Developing serverless image/motion generators for instant scorecards and tactical memes.</li>
          <li><strong>Cloud & Data Infrastructure:</strong> Managing Supabase, AWS Lambda/Vercel serverless clusters, Cloudflare CDN, and live sports APIs.</li>
          <li><strong>Telemetry & Analytics:</strong> Tracking user retention funnels, latency metrics, and A/B feature test suites.</li>
        </ul>

        <div class="kpi-chip-row">
          <span class="kpi-chip">🎯 Uptime > 99.9%</span>
          <span class="kpi-chip">🎯 Latency < 2.5s</span>
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

        <div style="font-size: 6.2pt; font-weight: 700; color: #0f172a; margin-bottom: 2px;">Key Operational Responsibilities:</div>
        <ul class="role-list">
          <li><strong>Creator & Influencer Syndication:</strong> Sourcing and onboarding 50+ micro-creators (10k-70k reach) at zero agency margin bleed.</li>
          <li><strong>Viral Social Hijacking:</strong> Managing real-time match threads on X/Twitter, viral Instagram Reels distribution, and Telegram channels.</li>
          <li><strong>Community Channel Scale:</strong> Moderating high-engagement WhatsApp VIP Broadcast channels and Telegram match-day groups.</li>
          <li><strong>Brand Monetization & BD:</strong> Pitching and securing direct sponsor slots on daily match bulletins and fantasy sports affiliate deals.</li>
          <li><strong>User Growth Loops:</strong> Tracking CAC, K-factor, referral incentives, and feeding insights to product sprints.</li>
        </ul>

        <div class="kpi-chip-row">
          <span class="kpi-chip">🎯 CAC < ₹4.00</span>
          <span class="kpi-chip">🎯 K-Factor > 1.3</span>
          <span class="kpi-chip">🎯 50+ Creator Network</span>
          <span class="kpi-chip">🎯 Month 3 Rev Live</span>
        </div>
      </div>
    </div>

    <!-- VISUAL INFOGRAPHIC 1: FOUNDER EXECUTION & DIALMATE AI SYNERGY DIAGRAM -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>🔄 INFOGRAPHIC: FOUNDER PRODUCTION & DIALMATE AI ENGINE SYNERGY</span>
        <span style="font-size: 5pt; color: #94a3b8;">Zero Tech & Agency Leakage</span>
      </div>
      <svg viewBox="0 0 760 145" style="width: 100%; height: auto; display: block;">
        <defs>
          <linearGradient id="sayanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444"/>
            <stop offset="100%" stop-color="#b91c1c"/>
          </linearGradient>
          <linearGradient id="dialmateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#1d4ed8"/>
          </linearGradient>
          <linearGradient id="rajrupGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e293b"/>
            <stop offset="100%" stop-color="#0f172a"/>
          </linearGradient>
          <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.4"/>
          </filter>
        </defs>

        <!-- Sayan Box -->
        <g filter="url(#shadow)">
          <rect x="15" y="15" width="220" height="115" rx="8" fill="url(#sayanGrad)" stroke="#fca5a5" stroke-width="1.5"/>
          <text x="125" y="38" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">SAYAN (CTO & PRODUCT)</text>
          <line x1="30" y1="46" x2="220" y2="46" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <text x="32" y="64" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">⚡ Sub-2.5s AI Summary Engine</text>
          <text x="32" y="80" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">⚡ Serverless 3D Graphic Cards</text>
          <text x="32" y="96" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">⚡ Featherlight PWA & Mobile App</text>
          <text x="32" y="112" fill="#ffe4e6" font-size="8" font-weight="800" font-family="JetBrains Mono">Tech Vendor Burn = ₹0</text>
        </g>

        <!-- Dialmate Engine Hub in Center -->
        <g filter="url(#shadow)">
          <rect x="270" y="25" width="220" height="95" rx="8" fill="url(#dialmateGrad)" stroke="#93c5fd" stroke-width="1.5"/>
          <text x="380" y="48" fill="#ffffff" font-size="11" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">DIALMATE AI ENGINE</text>
          <line x1="285" y1="54" x2="475" y2="54" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <text x="380" y="72" fill="#ffffff" font-size="8.5" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">Automated NLP Scraping Pipeline</text>
          <text x="380" y="87" fill="#ffffff" font-size="8.5" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">Cloud Serverless Subsidies</text>
          <text x="380" y="103" fill="#dbeafe" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Gross Margin = 86.4%</text>
        </g>

        <!-- Rajrup Box -->
        <g filter="url(#shadow)">
          <rect x="525" y="15" width="220" height="115" rx="8" fill="url(#rajrupGrad)" stroke="#64748b" stroke-width="1.5"/>
          <text x="635" y="38" fill="#ffffff" font-size="12" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">RAJRUP (CGO & GROWTH)</text>
          <line x1="540" y1="46" x2="730" y2="46" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
          <text x="542" y="64" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">🎯 50+ Regional Micro-Creators</text>
          <text x="542" y="80" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">🎯 WhatsApp VIP & Telegram Loops</text>
          <text x="542" y="96" fill="#ffffff" font-size="9" font-weight="700" font-family="Plus Jakarta Sans">🎯 Direct Brand Sponsor Sales</text>
          <text x="542" y="112" fill="#cbd5e1" font-size="8" font-weight="800" font-family="JetBrains Mono">Blended CAC < ₹3.80</text>
        </g>

        <!-- Arrows -->
        <path d="M 235 72 L 270 72" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow)" fill="none"/>
        <path d="M 525 72 L 490 72" stroke="#3b82f6" stroke-width="3" fill="none"/>
      </svg>
    </div>

    <!-- Corporate Governance & Equity Alignment -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>⚖️ EQUITY ALIGNMENT & 4-YEAR VESTING GOVERNANCE</span>
        <span class="tag-pill tag-dark">1-Year Cliff Standard</span>
      </div>
      <div class="grid-3" style="font-size: 5.6pt; color: #475569; line-height: 1.18;">
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

<!-- ================= PAGE 3: CAPITAL ALLOCATION & INFOGRAPHIC DIAGRAM ================= -->
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
      <span>💰 ₹5,00,000 SEED CAPITAL ALLOCATION & TECH COST INFOGRAPHIC</span>
      <span class="tag">6-Month Runway</span>
    </div>

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A zero-waste capital deployment framework engineered to maximize organic viral velocity while securing robust infrastructure for 100k+ concurrent users during peak tournament matches.
    </p>

    <!-- VISUAL INFOGRAPHIC 2: API & TECH COST ARCHITECTURE DIAGRAM -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>🖥️ INFOGRAPHIC: SPORTS DATA API & TECH COST BREAKDOWN (6-MONTH RUNWAY)</span>
        <span style="font-size: 5pt; color: #fecdd3;">Dialmate Moat: Saves ₹2,50,000+</span>
      </div>
      <svg viewBox="0 0 760 130" style="width: 100%; height: auto; display: block;">
        <!-- Data APIs -->
        <g>
          <rect x="15" y="15" width="220" height="100" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
          <text x="125" y="34" fill="#fca5a5" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">1. LIVE SPORTS APIs (11%)</text>
          <text x="25" y="54" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Cricket Data Webhooks (IPL/T20)</text>
          <text x="25" y="68" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• ISL & Premier League Feeds</text>
          <text x="25" y="82" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Motorsports Telemetry API</text>
          <text x="125" y="104" fill="#ef4444" font-size="10" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">₹55,000 Total</text>
        </g>

        <!-- Cloud Infra -->
        <g>
          <rect x="270" y="15" width="220" height="100" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="380" y="34" fill="#93c5fd" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">2. CLOUD & PUSH INFRA (13%)</text>
          <text x="280" y="54" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Supabase DB & Serverless (₹30k)</text>
          <text x="280" y="68" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• WhatsApp API & Push Credits (₹35k)</text>
          <text x="280" y="82" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Cloudflare Edge CDN Caching</text>
          <text x="380" y="104" fill="#60a5fa" font-size="10" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">₹65,000 Total</text>
        </g>

        <!-- Zero Vendor Moat -->
        <g>
          <rect x="525" y="15" width="220" height="100" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.2"/>
          <text x="635" y="34" fill="#a7f3d0" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">3. DIALMATE AI MOAT (0%)</text>
          <text x="535" y="54" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• In-House Scraping Algorithms</text>
          <text x="535" y="68" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Sub-2.5s Card Rendering Engine</text>
          <text x="535" y="82" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">• Zero Software Dev Shop Fees</text>
          <text x="635" y="104" fill="#34d399" font-size="10" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">SAVED ₹2,50,000</text>
        </g>
      </svg>
    </div>

    <!-- Allocation Visual Diagram & Breakdown Table -->
    <div class="grid-2">
      <!-- Visual Allocation Bar Chart -->
      <div class="chart-box" style="text-align: left; padding: 5px;">
        <div style="font-size: 6.5pt; font-weight: 700; color: #0f172a; margin-bottom: 3px;">Capital Allocation by Strategic Bucket</div>
        
        <!-- Growth -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>1. Influencer & Creator Distribution Engine</span>
            <span style="color: #dc2626; font-family: 'JetBrains Mono';">₹2,10,000 (42%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 42%; height: 100%; background: #dc2626;"></div>
          </div>
        </div>

        <!-- Tech -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>2. Product Architecture & Cloud Infrastructure</span>
            <span style="color: #0f172a; font-family: 'JetBrains Mono';">₹1,20,000 (24%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 24%; height: 100%; background: #0f172a;"></div>
          </div>
        </div>

        <!-- Creative -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>3. Creative Asset Kits & Micro-Writers</span>
            <span style="color: #e11d48; font-family: 'JetBrains Mono';">₹70,000 (14%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 14%; height: 100%; background: #e11d48;"></div>
          </div>
        </div>

        <!-- Emergency Reserve -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>4. Working Capital & Scaling Reserve</span>
            <span style="color: #d97706; font-family: 'JetBrains Mono';">₹70,000 (14%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 14%; height: 100%; background: #d97706;"></div>
          </div>
        </div>

        <!-- Legal & Setup -->
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>5. Legal, Trademark, App Store Licenses</span>
            <span style="color: #64748b; font-family: 'JetBrains Mono';">₹30,000 (6%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 6%; height: 100%; background: #64748b;"></div>
          </div>
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
              <td><strong>35 Micro-Creators (10k-70k reach)</strong></td>
              <td class="num">₹1,40,000</td>
              <td class="num">28.0%</td>
            </tr>
            <tr>
              <td><strong>Paid Social Testing & Boosts</strong></td>
              <td class="num">₹50,000</td>
              <td class="num">10.0%</td>
            </tr>
            <tr>
              <td><strong>Sports Data API Feeds & Webhooks</strong></td>
              <td class="num">₹55,000</td>
              <td class="num">11.0%</td>
            </tr>
            <tr>
              <td><strong>Cloud Serverless & CDN Infrastructure</strong></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
            </tr>
            <tr>
              <td><strong>Domain, Push & WhatsApp API</strong></td>
              <td class="num">₹35,000</td>
              <td class="num">7.0%</td>
            </tr>
            <tr>
              <td><strong>Motion Design & Graphic Asset Kits</strong></td>
              <td class="num">₹40,000</td>
              <td class="num">8.0%</td>
            </tr>
            <tr>
              <td><strong>Regional Translation & Micro-Writers</strong></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
            </tr>
            <tr>
              <td><strong>Entity Setup & App Licenses</strong></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
            </tr>
            <tr>
              <td><strong>Contingency Reserve</strong></td>
              <td class="num">₹90,000</td>
              <td class="num">18.0%</td>
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

    <!-- Capital Deployment Tranches -->
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
            <td>Company incorporation, PWA deployment, core scraper setup.</td>
            <td>Cloud infrastructure, sports data APIs, legal filings.</td>
            <td class="num">₹2,00,000</td>
          </tr>
          <tr>
            <td><strong>Tranche 2 (Month 2-3)</strong></td>
            <td>Beta retention D7 > 35%, 5k MAU achieved, WhatsApp VIP live.</td>
            <td>35 micro-creator campaign rollout, paid performance boosts.</td>
            <td class="num">₹2,00,000</td>
          </tr>
          <tr>
            <td><strong>Tranche 3 (Month 4-5)</strong></td>
            <td>First direct brand sponsor contracted, MAU crossing 25,000.</td>
            <td>Regional vernacular expansion, gaming affiliate scaling.</td>
            <td class="num">₹1,00,000</td>
          </tr>
        </tbody>
      </table>
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

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A synchronized sprint structure uniting engineering milestones with distribution campaigns to trigger early monetization by Month 3 and institutional investor readiness by Month 6.
    </p>

    <div class="timeline-grid">
      <!-- Month 1 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 1</div>
        <div class="month-title">Architecture & MVP Build</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Deploy core SPORT IQ PWA, integrate live sports APIs, build 15-second summary card generator.</li>
          <li><strong>Growth:</strong> Direct outreach to 100+ creators; secure 35 pre-launch commitments; establish Telegram alpha room.</li>
          <li><strong>Milestone:</strong> Functional MVP generating automated cards in < 2.5s.</li>
        </ul>
      </div>

      <!-- Month 2 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 2</div>
        <div class="month-title">Closed Beta & Seeding (5k Users)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Android APK & Web Beta release; test push notification speed under 10k concurrent loads.</li>
          <li><strong>Growth:</strong> Launch initial 15 micro-creator shoutouts; kick off WhatsApp VIP groups; run referral contest.</li>
          <li><strong>Milestone:</strong> 5,000 Beta MAU with D7 retention > 38%.</li>
        </ul>
      </div>

      <!-- Month 3 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 3: REVENUE START</div>
        <div class="month-title">Public Launch (25k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Google Play Store launch; automated tournament bracket trackers; real-time polling modules.</li>
          <li><strong>Growth:</strong> Full creator syndication blast; launch X match threads; onboard first direct brand sponsors.</li>
          <li><strong>Revenue:</strong> ₹25,000 first month ad & sponsorship inflow.</li>
        </ul>
      </div>

      <!-- Month 4 -->
      <div class="month-card" style="border-top: 2.5px solid #16a34a;">
        <div class="month-badge" style="background: #16a34a;">MONTH 4</div>
        <div class="month-title">Affiliates & Engagement Depth</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Gamified fantasy prediction battleground; user badges; offline bulletin reading support.</li>
          <li><strong>Growth:</strong> Partner with sports gaming platforms on CPA affiliate model; podcast shoutout syndication.</li>
          <li><strong>Revenue:</strong> ₹70,000/mo (Brand Ads + Gaming Affiliates).</li>
        </ul>
      </div>

      <!-- Month 5 -->
      <div class="month-card" style="border-top: 2.5px solid #d97706;">
        <div class="month-badge" style="background: #d97706;">MONTH 5: BREAKEVEN</div>
        <div class="month-title">Pro Sub & Vernacular (75k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Launch Hindi & regional feeds; launch ₹49/mo "SPORT IQ Pro" ad-free micro-subscription.</li>
          <li><strong>Growth:</strong> Tier-2/3 regional creator campaign; campus ambassador program across 20 college sports clubs.</li>
          <li><strong>Revenue:</strong> ₹1,45,000/mo (Operational cashflow positive).</li>
        </ul>
      </div>

      <!-- Month 6 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 6: SEED PITCH</div>
        <div class="month-title">Institutional Seed Round Pitch</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Present high-availability telemetry, sub-second latency records, and AI synthesis documentation.</li>
          <li><strong>Growth:</strong> Present CAC/LTV cohorts, 75k+ MAU, and ₹2.45L MRR to Angels & Seed VCs for ₹2.5 Cr - ₹5 Cr round.</li>
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
        <p style="font-size: 5.9pt; color: #475569; line-height: 1.2;">
          Once operational cashflow turns positive in Month 5 (₹1.45L+ net revenue), 100% of profits are re-injected into growth channels:
          <br>• <strong>65% to Creator Retainers:</strong> Securing exclusive multi-tournament contracts with top regional creators.
          <br>• <strong>35% to AI Video Automation:</strong> Expanding Dialmate AI's synthetic video card engine to auto-generate 10s video cards.
        </p>
        <div style="background: #ffffff; padding: 4px 6px; border-radius: 4px; border: 1px solid #e2e8f0; font-size: 5.6pt;">
          <div style="font-weight: 700; color: #0f172a; margin-bottom: 1px;">Key Milestone Validation Gates:</div>
          <div style="color: #334155; line-height: 1.16;">
            ✔ Month 2 Gate: D7 Retention > 35% before public launch ad budget.<br>
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
            <td>35 contracted regional sports creators posting instant match takeaway stories.</td>
            <td>4.2% Install Rate</td>
            <td class="num">18,500 users</td>
          </tr>
          <tr>
            <td><strong>WhatsApp & Telegram VIP</strong></td>
            <td>Real-time viral score cards formatted for 1-click sharing to friend groups.</td>
            <td>Viral K-Factor 1.34</td>
            <td class="num">24,000 users</td>
          </tr>
          <tr>
            <td><strong>X (Twitter) Match Hijacking</strong></td>
            <td>Live auto-updating match threads & meme cards published within 5s of play.</td>
            <td>2.8% Profile CTR</td>
            <td class="num">12,500 users</td>
          </tr>
          <tr>
            <td><strong>Campus Sports Ambassador</strong></td>
            <td>Student sports captains across 20 college tournaments running match pools.</td>
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

<!-- ================= PAGE 5: FINANCIAL MODEL & CASH FLOW DIAGRAM ================= -->
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
        <div class="doc-date">FINANCIAL MODEL & CASH FLOW</div>
      </div>
    </div>

    <div class="section-title">
      <span>📈 12-MONTH REVENUE PROJECTIONS & FINANCIAL FLOW INFOGRAPHIC</span>
      <span class="tag">Conservative Projections</span>
    </div>

    <!-- VISUAL INFOGRAPHIC 3: MONEY FLOW IN VS MONEY FLOW OUT DIAGRAM -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>💸 INFOGRAPHIC: FINANCIAL CASH FLOW ARCHITECTURE (INFLOW VS OUTFLOW)</span>
        <span style="font-size: 5pt; color: #a7f3d0;">Month 5 Breakeven: ₹1.45L MRR</span>
      </div>
      <svg viewBox="0 0 760 135" style="width: 100%; height: auto; display: block;">
        <!-- Inflow Side (Left) -->
        <g>
          <rect x="15" y="15" width="220" height="105" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.2"/>
          <text x="125" y="34" fill="#a7f3d0" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">📥 REVENUE INFLOW PIPELINES</text>
          <text x="25" y="52" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">📢 Direct Brand Ads (52% Share)</text>
          <text x="25" y="66" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">🔗 Gaming & Fantasy Affiliates (28%)</text>
          <text x="25" y="80" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">👑 SPORT IQ Pro Subs (20% Share)</text>
          <text x="125" y="106" fill="#34d399" font-size="9.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Year 1: ₹12.5L / mo</text>
        </g>

        <!-- Center Engine -->
        <g>
          <rect x="270" y="25" width="220" height="85" rx="6" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>
          <text x="380" y="45" fill="#fca5a5" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">SPORT IQ TREASURY ENGINE</text>
          <text x="380" y="64" fill="#ffffff" font-size="8" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">Seed Allocation: ₹5,00,000</text>
          <text x="380" y="79" fill="#ffffff" font-size="8" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">Net Margin: 57.0% EBITDA</text>
          <text x="380" y="96" fill="#fb7185" font-size="8.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">LTV / CAC = 4.86x</text>
        </g>

        <!-- Outflow Side (Right) -->
        <g>
          <rect x="525" y="15" width="220" height="105" rx="6" fill="#450a0a" stroke="#f87171" stroke-width="1.2"/>
          <text x="635" y="34" fill="#fca5a5" font-size="10" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">📤 CAPITAL OUTFLOW ALLOCATION</text>
          <text x="535" y="52" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">🎤 Micro-Creators & Ads (42%)</text>
          <text x="535" y="66" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">⚡ Cloud Infra & Data APIs (24%)</text>
          <text x="535" y="80" fill="#ffffff" font-size="8" font-family="Plus Jakarta Sans">🎨 Motion Design & Reserves (28%)</text>
          <text x="635" y="106" fill="#f87171" font-size="9.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Blended CAC < ₹3.80</text>
        </g>

        <!-- Connecting Flow Arrows -->
        <path d="M 235 67 L 270 67" stroke="#34d399" stroke-width="2.5" fill="none"/>
        <path d="M 490 67 L 525 67" stroke="#f87171" stroke-width="2.5" fill="none"/>
      </svg>
    </div>

    <!-- 12-Month Financial Table -->
    <table class="custom-table" style="margin-bottom: 3px;">
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

    <!-- Operating Cost Structure -->
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
            <td>Performance rev-share and monthly retainers for top Tier-2/3 creators.</td>
            <td class="num">28.0%</td>
            <td class="num" style="color: #16a34a;">Variable</td>
          </tr>
          <tr>
            <td><strong>Cloud Serverless & CDN</strong></td>
            <td>Supabase, AWS Lambda, Cloudflare edge, live WebSocket traffic.</td>
            <td class="num">8.5%</td>
            <td class="num" style="color: #16a34a;">Subsidized</td>
          </tr>
          <tr>
            <td><strong>Sports Data API Feeds</strong></td>
            <td>Real-time live cricket, football, and motorsport data feeds.</td>
            <td class="num">6.5%</td>
            <td class="num" style="color: #16a34a;">Fixed Tier</td>
          </tr>
          <tr class="total-row">
            <td><strong>NET OPERATING EBITDA MARGIN</strong></td>
            <td><strong>Cash-generative digital sports bulletin platform</strong></td>
            <td class="num"><strong>57.0%</strong></td>
            <td class="num" style="color: #be123c;"><strong>High Cashflow</strong></td>
          </tr>
        </tbody>
      </table>
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

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      This document serves as the formal briefing for our lead strategic consultant/advisor. We seek active advisory support in facilitating angel/seed investor introductions, brokering regional sports relationships, and guiding brand sponsorship outreach.
    </p>

    <!-- Consultant Scope & Terms -->
    <div class="grid-2">
      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">🎯 Advisory Scope & Deliverables</div>
        <ul class="role-list">
          <li><strong>Investor Syndication:</strong> Facilitating strategic introductions to angel networks and early-stage VCs for ₹2.5 Cr - ₹5 Cr seed round.</li>
          <li><strong>Sponsorship Dealmaking:</strong> Connecting growth lead to regional brand marketing heads, sports brands, and gaming platforms.</li>
          <li><strong>Corporate Governance:</strong> Monthly strategic oversight on financial audits, CAC benchmarks, and cap table optimization.</li>
          <li><strong>Brand Positioning:</strong> Scaling commercial brand identity of <strong>SPORT IQ</strong> for institutional investors.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">💼 Commercial Terms & Advisory Structure</div>
        <ul class="role-list">
          <li><strong>Advisory Equity / Retainer:</strong> Structured equity options (1.5% - 3.0% pool with 12-month milestone vesting) or success fees.</li>
          <li><strong>Information Rights:</strong> Complete monthly access to real-time analytics dashboard, P&L statements, and telemetry logs.</li>
          <li><strong>Meeting Cadence:</strong> Bi-weekly 45-minute operational sync with Sayan (CTO) and Rajrup (CGO) + monthly governance review.</li>
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

    <!-- Governance & Risk Safeguards -->
    <div class="card">
      <div class="card-header-sm">
        <span>🛡️ RISK MITIGATION & SCALING SAFEGUARDS</span>
        <span class="tag-pill tag-dark">Governance Controls</span>
      </div>
      <div class="grid-3" style="font-size: 5.6pt; color: #475569; line-height: 1.18;">
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
      <div class="card-header-sm" style="margin-bottom: 1px;">
        <span>📝 VENTURE LEADERSHIP & ADVISORY SIGN-OFF</span>
        <span class="tag-pill tag-dark">Formal Endorsement</span>
      </div>
      <div class="grid-4" style="font-size: 5.5pt; color: #475569; line-height: 1.18; margin-top: 2px;">
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Sayan Bhattacharya</strong><br>
          Co-Founder & CTO / Head of Product<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Rajrup</strong><br>
          Co-Founder & CGO / Head of Growth<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Dialmate AI Technologies</strong><br>
          Incubation & Corporate Partner<br>
          <span style="color: #64748b;">Signature: [Authorized]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
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

// Copy to public directory for browser preview
const publicHtmlPath = path.join(__dirname, 'public', 'strategy_dossier.html');
fs.writeFileSync(publicHtmlPath, htmlContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'public', 'sport_iq_strategy.html'), htmlContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'public', 'strategy.html'), htmlContent, 'utf8');
fs.writeFileSync(path.join(__dirname, 'public', 'deck.html'), htmlContent, 'utf8');

// PDF Generation using Chrome Headless with explicit Portrait page dimensions
const pdfOutputPath = path.join(__dirname, 'SPORT_IQ_STRATEGY_DOSSIER.pdf');
const publicPdfPath = path.join(__dirname, 'public', 'SPORT_IQ_STRATEGY_DOSSIER.pdf');
const legacyPdfPath = path.join(__dirname, 'DIALMATE_AI_SPORTS_VENTURE_STRATEGY_DOSSIER.pdf');
const publicLegacyPdfPath = path.join(__dirname, 'public', 'DIALMATE_AI_SPORTS_VENTURE_STRATEGY_DOSSIER.pdf');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');

// Passing explicit --print-to-pdf and no margins to force exact portrait PDF rendering
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
