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
    font-size: 13.5pt;
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

  .role-card.dev::before {
    background: linear-gradient(90deg, #2563eb, #3b82f6);
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

  .role-card.dev .role-title {
    color: #2563eb;
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

  .role-card.dev .role-list li::before {
    color: #2563eb;
  }

  .role-card.rajrup .role-list li::before {
    color: #0f172a;
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

<!-- ================= PAGE 1: COVER & COMPETITIVE UNFAIR ADVANTAGES ================= -->
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
      <span class="tag-pill tag-red">Venture Strategy Dossier</span>
      <span class="tag-pill tag-dark" style="margin-left: 4px;">Seed Capital: ₹5,00,000 INR ($6,000 USD)</span>
      <span class="tag-pill tag-green" style="margin-left: 4px;">Scope: Digital Sports Bulletin Disruption</span>
    </div>

    <h1 class="hero-title">SPORT IQ — What Is New That Competitors Have Not Done: <span class="hero-gradient">Market Innovation & Business Model</span></h1>
    <p class="hero-sub">
      A high-velocity commercial strategy prepared for strategic advisors and investors. <strong>SPORT IQ</strong> (<em>News • Insights • Scores • Stories</em>), incubated by <strong>Dialmate AI</strong>, solves the critical market gaps left behind by legacy scorecards and news aggregators through real-time 15-second micro-tactical bulletins, dual-sport parity, and automated viral story cards.
    </p>

    <!-- Key Metrics Row -->
    <div class="grid-4">
      <div class="metric-card accent">
        <div class="metric-val">₹5.00 L</div>
        <div class="metric-label">Seed Runway Ask</div>
      </div>
      <div class="metric-card success">
        <div class="metric-val">Month 5</div>
        <div class="metric-label">Operational Breakeven</div>
      </div>
      <div class="metric-card gold">
        <div class="metric-val">86.4%</div>
        <div class="metric-label">Gross Operating Margin</div>
      </div>
      <div class="metric-card">
        <div class="metric-val">1 Dev + CTO</div>
        <div class="metric-label">Dedicated Tech Core</div>
      </div>
    </div>

    <!-- INFOGRAPHIC 1: WHAT COMPETITORS HAVE NOT DONE (UNFAIR INNOVATION MATRIX) -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>INFOGRAPHIC: COMPETITOR BLIND SPOTS VS. SPORT IQ UNFAIR INNOVATIONS</span>
        <span style="font-size: 5pt; color: #fecdd3;">Market Differentiation Matrix</span>
      </div>
      <svg viewBox="0 0 760 140" style="width: 100%; height: auto; display: block;">
        <!-- Column 1: Legacy Scorecards -->
        <g>
          <rect x="10" y="15" width="175" height="112" rx="5" fill="#450a0a" stroke="#f87171" stroke-width="1.2"/>
          <text x="97" y="32" fill="#fca5a5" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">1. LEGACY SCORECARDS</text>
          <text x="97" y="44" fill="#cbd5e1" font-size="7.5" text-anchor="middle" font-family="Plus Jakarta Sans">Cricbuzz / ESPNcricinfo</text>
          <text x="20" y="62" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 65% display banner ad bloat</text>
          <text x="20" y="74" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Dry stats without tactical context</text>
          <text x="20" y="86" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 0% football coverage for Gen-Z</text>
          <text x="97" y="112" fill="#f87171" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Ad & Friction Overload</text>
        </g>

        <!-- Column 2: General News Apps -->
        <g>
          <rect x="198" y="15" width="175" height="112" rx="5" fill="#1e293b" stroke="#64748b" stroke-width="1.2"/>
          <text x="285" y="32" fill="#cbd5e1" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">2. NEWS AGGREGATORS</text>
          <text x="285" y="44" fill="#94a3b8" font-size="7.5" text-anchor="middle" font-family="Plus Jakarta Sans">Inshorts / Dailyhunt</text>
          <text x="208" y="62" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Generic non-sports aggregation</text>
          <text x="208" y="74" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Static text cards without live data</text>
          <text x="208" y="86" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Zero real-time match telemetry</text>
          <text x="285" y="112" fill="#cbd5e1" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Lack Sports Depth</text>
        </g>

        <!-- Column 3: Social Feeds -->
        <g>
          <rect x="386" y="15" width="175" height="112" rx="5" fill="#1e293b" stroke="#94a3b8" stroke-width="1.2"/>
          <text x="473" y="32" fill="#cbd5e1" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">3. SOCIAL MEDIA FEEDS</text>
          <text x="473" y="44" fill="#94a3b8" font-size="7.5" text-anchor="middle" font-family="Plus Jakarta Sans">Instagram Reels / X Threads</text>
          <text x="396" y="62" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Unverified opinion noise</text>
          <text x="396" y="74" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Fragmented video clips</text>
          <text x="396" y="86" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• No structured scorecard sync</text>
          <text x="473" y="112" fill="#cbd5e1" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Fragmented & Noisy</text>
        </g>

        <!-- Column 4: SPORT IQ (NEW ON TABLE) -->
        <g>
          <rect x="574" y="15" width="176" height="112" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="662" y="32" fill="#a7f3d0" font-size="9.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">4. SPORT IQ (NEW ON TABLE)</text>
          <text x="662" y="44" fill="#34d399" font-size="7.5" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">Category Disruption</text>
          <text x="584" y="62" fill="#ffffff" font-size="7.5" font-weight="700" font-family="Plus Jakarta Sans">• 15s AI Micro-Tactical Pulse</text>
          <text x="584" y="74" fill="#ffffff" font-size="7.5" font-weight="700" font-family="Plus Jakarta Sans">• Cricket + Football Parity</text>
          <text x="584" y="86" fill="#ffffff" font-size="7.5" font-weight="700" font-family="Plus Jakarta Sans">• Automated 1-Click Story Cards</text>
          <text x="662" y="112" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Instant Match Intelligence</text>
        </g>
      </svg>
    </div>

    <!-- Competitive Differentiation Pillars -->
    <div class="grid-2">
      <div class="card highlight">
        <div class="card-header-sm" style="color: #b91c1c;">[THE NEW FACTOR 1] 15-Second AI Tactical Micro-Bulletins</div>
        <p style="font-size: 6pt; color: #475569; line-height: 1.22;">
          • <strong>Sub-2.5s Automated Synthesis:</strong> Instead of dry scoreboards, SPORT IQ extracts live match data and formats 35-word tactical context (e.g., why a bowling change worked or how a press collapsed).<br>
          • <strong>Zero Ad Distraction:</strong> Bypasses intrusive banner ads with clean, high-contrast readability.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #15803d;">[THE NEW FACTOR 2] Dual-Sport Parity & Peer Shareability</div>
        <p style="font-size: 6pt; color: #475569; line-height: 1.22;">
          • <strong>Cricket + Football Side-by-Side:</strong> Built for India's 180M+ Gen-Z fans who follow both IPL/International Cricket and Premier League/ISL Football with equal passion.<br>
          • <strong>Native Story Cards:</strong> Generates dynamic, 1-click visual match cards tailored for WhatsApp status and Instagram stories.
        </p>
      </div>
    </div>

    <!-- Sizing & Market Need -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>MARKET SIZE & CONSUMPTION TAILWINDS (INDIA 2026-2030)</span>
        <span class="tag-pill tag-dark">CAGR 24.8%</span>
      </div>
      <div class="grid-3" style="font-size: 5.6pt; color: #475569; line-height: 1.18;">
        <div>
          <strong style="color: #0f172a;">TAM: 650M Digital Sports Audience</strong><br>
          Total smartphone sports audience in India across Cricket, Football, Kabaddi, and F1.
        </div>
        <div>
          <strong style="color: #0f172a;">SAM: 180M Short-Form Fans</strong><br>
          Urban & semi-urban fans consuming snackable sports reels, WhatsApp cards, and Telegram alerts.
        </div>
        <div>
          <strong style="color: #0f172a;">SOM: 5M Target Users</strong><br>
          High-intent sports followers reached via SPORT IQ creator syndication over 24 months.
        </div>
      </div>
    </div>

    <!-- Brand Matrix -->
    <div class="card">
      <div class="card-header-sm">
        <span>FLAGSHIP & SPIN-OFF BRAND PORTFOLIO</span>
        <span style="font-size: 5.2pt; color: #64748b;">Primary Flagship: SPORT IQ</span>
      </div>
      <table class="custom-table">
        <thead>
          <tr>
            <th style="width: 20%;">Brand Property</th>
            <th style="width: 30%;">Tagline / Hook</th>
            <th style="width: 30%;">Target Audience Vibe</th>
            <th style="width: 20%;">Commercial Role</th>
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

<!-- ================= PAGE 2: CORE ENGINEERING TEAM & BUSINESS MODEL ================= -->
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
        <div class="doc-date">ENGINEERING CORE & BUSINESS MODEL</div>
      </div>
    </div>

    <div class="section-title">
      <span>TECHNICAL TEAM STRUCTURE & COMMERCIAL MONETIZATION ENGINE</span>
      <span class="tag">Execution Engine</span>
    </div>

    <!-- Team Structure: Sayan (CTO) + 1 Full-Time Developer + Rajrup (CGO) -->
    <div class="grid-3">
      <!-- Sayan Role Card -->
      <div class="role-card sayan">
        <div class="role-badge-row">
          <div>
            <div class="role-name">Sayan Bhattacharya</div>
            <div class="role-title">Co-Founder & CTO</div>
          </div>
          <span class="tag-pill tag-red">Product Architecture</span>
        </div>
        <div class="role-summary">
          <strong>Mandate:</strong> System architecture, sub-2.5s AI summary pipelines, sports data API integration, and cloud infrastructure scale.
        </div>
        <ul class="role-list">
          <li>Leads AI scraping engine & webhook pipelines.</li>
          <li>Manages 100k+ concurrent user infrastructure.</li>
        </ul>
      </div>

      <!-- Full-Time Developer Role Card -->
      <div class="role-card dev">
        <div class="role-badge-row">
          <div>
            <div class="role-name">Full-Time Developer</div>
            <div class="role-title">Full-Stack / AI Engineer</div>
          </div>
          <span class="tag-pill tag-dark" style="background:#eff6ff; color:#1d4ed8; border-color:#bfdbfe;">Dedicated Core</span>
        </div>
        <div class="role-summary">
          <strong>Mandate:</strong> Working 100% full-time alongside Sayan (CTO) on PWA frontend, automated card renderer, and real-time backend updates.
        </div>
        <ul class="role-list">
          <li>Builds dynamic story card generator.</li>
          <li>Optimizes offline PWA caching & push loops.</li>
        </ul>
      </div>

      <!-- Rajrup Role Card -->
      <div class="role-card rajrup">
        <div class="role-badge-row">
          <div>
            <div class="role-name">Rajrup</div>
            <div class="role-title">Co-Founder & CGO</div>
          </div>
          <span class="tag-pill tag-dark">Growth & Monetization</span>
        </div>
        <div class="role-summary">
          <strong>Mandate:</strong> Creator syndication, brand sponsorship deals, WhatsApp VIP community loops, and affiliate growth.
        </div>
        <ul class="role-list">
          <li>Onboards 50+ regional micro-creators.</li>
          <li>Drives CAC < ₹3.80 across channels.</li>
        </ul>
      </div>
    </div>

    <!-- INFOGRAPHIC 2: THE BUSINESS MODEL & MONETIZATION ENGINE -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>INFOGRAPHIC: THE SPORT IQ BUSINESS MODEL & REVENUE ENGINE</span>
        <span style="font-size: 5pt; color: #a7f3d0;">86.4% Gross Operating Margin</span>
      </div>
      <svg viewBox="0 0 760 120" style="width: 100%; height: auto; display: block;">
        <!-- Inflow 1 -->
        <g>
          <rect x="15" y="15" width="220" height="90" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1.2"/>
          <text x="125" y="32" fill="#a7f3d0" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">1. BRAND SPONSORSHIPS (52%)</text>
          <text x="25" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Native "Powered by [Brand]" cards</text>
          <text x="25" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• High CTR social match bulletins</text>
          <text x="25" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Sponsored WhatsApp VIP drops</text>
          <text x="125" y="94" fill="#34d399" font-size="8.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">High Engagement CTR</text>
        </g>

        <!-- Inflow 2 -->
        <g>
          <rect x="270" y="15" width="220" height="90" rx="5" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="380" y="32" fill="#93c5fd" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">2. GAMING AFFILIATES (28%)</text>
          <text x="280" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Dream11 & My11Circle referral CPA</text>
          <text x="280" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Fantasy team tactical tips</text>
          <text x="280" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Sports merchandise affiliate cuts</text>
          <text x="380" y="94" fill="#60a5fa" font-size="8.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">₹150-₹300 CPA / User</text>
        </g>

        <!-- Inflow 3 -->
        <g>
          <rect x="525" y="15" width="220" height="90" rx="5" fill="#431407" stroke="#fb923c" stroke-width="1.2"/>
          <text x="635" y="32" fill="#fed7aa" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">3. PRO MICRO-SUBS (20%)</text>
          <text x="535" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• ₹49 / month ad-free bulletin tier</text>
          <text x="535" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Advanced fantasy analytics sheets</text>
          <text x="535" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Exclusive Telegram VIP room</text>
          <text x="635" y="94" fill="#fb923c" font-size="8.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Recurring MRR Stream</text>
        </g>
      </svg>
    </div>

    <!-- Core Revenue Pillar Deep Dive -->
    <div class="grid-3">
      <div class="card">
        <div class="card-header-sm" style="color: #dc2626;">Direct Brand Sponsorships</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          Co-branded match cards ("Powered by Brand X") distributed across our app and 50+ creator social stories. High CTR due to zero visual ad fatigue.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">Gaming & Fantasy Affiliates</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          Seamless integration with fantasy sports platforms (Dream11 / My11Circle / FanCode) yielding ₹150–₹300 CPA commissions per high-intent user.
        </p>
      </div>
      <div class="card">
        <div class="card-header-sm" style="color: #d97706;">SPORT IQ Pro Subscriptions</div>
        <p style="font-size: 5.8pt; color: #475569; line-height: 1.18;">
          ₹49/month micro-membership unlocking ad-free UI, advanced fantasy match analytics sheets, and exclusive VIP community chat access.
        </p>
      </div>
    </div>

    <!-- Governance & Vesting -->
    <div class="card" style="background: #f8fafc;">
      <div class="card-header-sm">
        <span>EQUITY ALIGNMENT & 4-YEAR VESTING GOVERNANCE</span>
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

<!-- ================= PAGE 3: CAPITAL ALLOCATION MATRIX (WITH 1 FULL-TIME DEV) ================= -->
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
        <div class="doc-date">CAPITAL STRUCTURE</div>
      </div>
    </div>

    <div class="section-title">
      <span>₹5,00,000 SEED CAPITAL ALLOCATION (INCLUDING 1 FULL-TIME DEVELOPER)</span>
      <span class="tag">6-Month Budget</span>
    </div>

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A disciplined capital allocation framework supporting 1 Full-Time Lead Software Developer working directly alongside Sayan (CTO), while securing creator distribution and sports data infrastructure.
    </p>

    <!-- Allocation Visual Diagram & Breakdown Table -->
    <div class="grid-2">
      <!-- Visual Allocation Bar Chart -->
      <div class="chart-box" style="text-align: left; padding: 5px;">
        <div style="font-size: 6.5pt; font-weight: 700; color: #0f172a; margin-bottom: 3px;">Capital Allocation Breakdown</div>
        
        <!-- Engineering Core -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>1. Core Tech & 1 Full-Time Dev Stipend (6 Months)</span>
            <span style="color: #2563eb; font-family: 'JetBrains Mono';">₹1,80,000 (36%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 36%; height: 100%; background: #2563eb;"></div>
          </div>
        </div>

        <!-- Creator Engine -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>2. Creator Distribution & Viral Growth</span>
            <span style="color: #dc2626; font-family: 'JetBrains Mono';">₹1,60,000 (32%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 32%; height: 100%; background: #dc2626;"></div>
          </div>
        </div>

        <!-- Data APIs & Infrastructure -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>3. Sports Data APIs & Cloud Serverless</span>
            <span style="color: #0f172a; font-family: 'JetBrains Mono';">₹70,000 (14%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 14%; height: 100%; background: #0f172a;"></div>
          </div>
        </div>

        <!-- Creative & Vernacular -->
        <div style="margin-bottom: 3px;">
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>4. Creative Templates & Regional Translators</span>
            <span style="color: #e11d48; font-family: 'JetBrains Mono';">₹40,000 (8%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 8%; height: 100%; background: #e11d48;"></div>
          </div>
        </div>

        <!-- Reserve & Legal -->
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 5.8pt; font-weight: 600; color: #0f172a; margin-bottom: 1px;">
            <span>5. Entity Setup, Licenses & Working Reserve</span>
            <span style="color: #d97706; font-family: 'JetBrains Mono';">₹50,000 (10%)</span>
          </div>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; overflow: hidden;">
            <div style="width: 10%; height: 100%; background: #d97706;"></div>
          </div>
        </div>

        <div style="margin-top: 4px; padding: 3px 5px; background: #ffffff; border: 1px dashed #cbd5e1; border-radius: 3px; font-size: 5.4pt; color: #475569;">
          <strong>Strategic Allocation:</strong> 36% dedicated to full-time engineering capacity (Sayan CTO + 1 Full-Time Lead Developer), 32% to creator distribution, 14% to live sports data APIs, ensuring a robust product and rapid user acquisition.
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
              <td><strong>1 Full-Time Software Developer (6 Months)</strong></td>
              <td class="num">₹1,80,000</td>
              <td class="num">36.0%</td>
            </tr>
            <tr>
              <td><strong>35 Micro-Creators (10k-70k reach)</strong></td>
              <td class="num">₹1,20,000</td>
              <td class="num">24.0%</td>
            </tr>
            <tr>
              <td><strong>Paid Social Growth Boosts</strong></td>
              <td class="num">₹40,000</td>
              <td class="num">8.0%</td>
            </tr>
            <tr>
              <td><strong>Sports Data API Feeds (Cricket & Football)</strong></td>
              <td class="num">₹45,000</td>
              <td class="num">9.0%</td>
            </tr>
            <tr>
              <td><strong>Cloud Serverless & CDN Infrastructure</strong></td>
              <td class="num">₹25,000</td>
              <td class="num">5.0%</td>
            </tr>
            <tr>
              <td><strong>Motion Graphic Story Templates</strong></td>
              <td class="num">₹25,000</td>
              <td class="num">5.0%</td>
            </tr>
            <tr>
              <td><strong>Regional Vernacular Micro-Writers</strong></td>
              <td class="num">₹15,000</td>
              <td class="num">3.0%</td>
            </tr>
            <tr>
              <td><strong>Company Incorporation & App Store Fees</strong></td>
              <td class="num">₹20,000</td>
              <td class="num">4.0%</td>
            </tr>
            <tr>
              <td><strong>Working Capital Reserve</strong></td>
              <td class="num">₹30,000</td>
              <td class="num">6.0%</td>
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
        <span>TRANCHE DISBURSEMENT GATES & MILESTONES</span>
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
            <td>Full-Time Dev onboarding, cloud infra, sports data APIs.</td>
            <td class="num">₹2,00,000</td>
          </tr>
          <tr>
            <td><strong>Tranche 2 (Month 2-3)</strong></td>
            <td>Beta retention D7 > 35%, 5k MAU achieved, WhatsApp VIP live.</td>
            <td>35 micro-creator campaign rollout, paid social boosts.</td>
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

<!-- ================= PAGE 4: 6-MONTH ROADMAP & VALUE LIFECYCLE ================= -->
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
        <div class="doc-date">GTM & MILESTONE ROADMAP</div>
      </div>
    </div>

    <div class="section-title">
      <span>INFOGRAPHIC & 6-MONTH MILESTONE EXECUTION ROADMAP</span>
      <span class="tag">Zero to 75,000 MAU</span>
    </div>

    <!-- INFOGRAPHIC 3: CAPITAL DEPLOYMENT TO CASHFLOW BREAKEVEN -->
    <div class="diagram-card">
      <div class="diagram-title">
        <span>INFOGRAPHIC: CAPITAL DEPLOYMENT TO CASHFLOW BREAKEVEN</span>
        <span style="font-size: 5pt; color: #fde68a;">Month 5 Cashflow Positive</span>
      </div>
      <svg viewBox="0 0 760 120" style="width: 100%; height: auto; display: block;">
        <!-- Step 1 -->
        <g>
          <rect x="15" y="15" width="165" height="90" rx="5" fill="#1e293b" stroke="#ef4444" stroke-width="1.2"/>
          <text x="97" y="32" fill="#fca5a5" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">MONTH 1: SEED SETUP</text>
          <text x="25" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• ₹2.0L Tranche 1 Input</text>
          <text x="25" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Full-Time Dev Onboarded</text>
          <text x="25" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 35 Creator Deals Secured</text>
          <text x="97" y="92" fill="#ef4444" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">MVP Delivered</text>
        </g>

        <!-- Step 2 -->
        <g>
          <rect x="205" y="15" width="165" height="90" rx="5" fill="#1e293b" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="287" y="32" fill="#93c5fd" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">MONTH 2: BETA SEEDING</text>
          <text x="215" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 5,000 Beta MAU</text>
          <text x="215" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• D7 Retention > 38%</text>
          <text x="215" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• WhatsApp VIP Launch</text>
          <text x="287" y="92" fill="#60a5fa" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">High Engagement</text>
        </g>

        <!-- Step 3 -->
        <g>
          <rect x="395" y="15" width="165" height="90" rx="5" fill="#1e293b" stroke="#f59e0b" stroke-width="1.2"/>
          <text x="477" y="32" fill="#fde68a" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">MONTH 3: FIRST REVENUE</text>
          <text x="405" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 25,000 Public MAU</text>
          <text x="405" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Brand Sponsors Live</text>
          <text x="405" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• ₹25,000 Inflow</text>
          <text x="477" y="92" fill="#f59e0b" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Revenue Inception</text>
        </g>

        <!-- Step 4 -->
        <g>
          <rect x="585" y="15" width="160" height="90" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1.4"/>
          <text x="665" y="32" fill="#a7f3d0" font-size="9" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">MONTH 5: BREAKEVEN</text>
          <text x="593" y="48" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• 75,000 Active MAU</text>
          <text x="593" y="60" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• ₹1,45,000 MRR</text>
          <text x="593" y="72" fill="#ffffff" font-size="7.5" font-family="Plus Jakarta Sans">• Pro Tier Micro-Subs</text>
          <text x="665" y="92" fill="#34d399" font-size="8" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">CASHFLOW POSITIVE</text>
        </g>
      </svg>
    </div>

    <div class="timeline-grid">
      <!-- Month 1 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 1</div>
        <div class="month-title">Architecture & MVP Build</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Onboard Full-Time Developer; deploy core PWA; integrate live sports APIs & AI card renderer.</li>
          <li><strong>Growth:</strong> Secure 35 micro-creator commitments; establish Telegram alpha room.</li>
          <li><strong>Milestone:</strong> Functional MVP generating cards in < 2.5s.</li>
        </ul>
      </div>

      <!-- Month 2 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 2</div>
        <div class="month-title">Closed Beta & Seeding (5k Users)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Android APK & Web Beta release; test push notification speed under 10k concurrent loads.</li>
          <li><strong>Growth:</strong> Launch initial 15 micro-creator shoutouts; kick off WhatsApp VIP groups.</li>
          <li><strong>Milestone:</strong> 5,000 Beta MAU with D7 retention > 38%.</li>
        </ul>
      </div>

      <!-- Month 3 -->
      <div class="month-card" style="border-top: 2.5px solid #dc2626;">
        <div class="month-badge red">MONTH 3: REVENUE START</div>
        <div class="month-title">Public Launch (25k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Google Play Store launch; automated tournament bracket trackers; real-time polling modules.</li>
          <li><strong>Growth:</strong> Creator syndication blast; onboard first direct brand sponsors.</li>
          <li><strong>Revenue:</strong> ₹25,000 first month ad & sponsorship inflow.</li>
        </ul>
      </div>

      <!-- Month 4 -->
      <div class="month-card" style="border-top: 2.5px solid #16a34a;">
        <div class="month-badge" style="background: #16a34a;">MONTH 4</div>
        <div class="month-title">Affiliates & Engagement Depth</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Gamified fantasy prediction battleground; user badges; offline bulletin reading support.</li>
          <li><strong>Growth:</strong> Partner with sports gaming platforms on CPA affiliate model.</li>
          <li><strong>Revenue:</strong> ₹70,000/mo (Brand Ads + Gaming Affiliates).</li>
        </ul>
      </div>

      <!-- Month 5 -->
      <div class="month-card" style="border-top: 2.5px solid #d97706;">
        <div class="month-badge" style="background: #d97706;">MONTH 5: BREAKEVEN</div>
        <div class="month-title">Pro Sub & Vernacular (75k MAU)</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> Launch Hindi & regional feeds; launch ₹49/mo "SPORT IQ Pro" ad-free subscription.</li>
          <li><strong>Growth:</strong> Tier-2/3 regional creator campaign; campus ambassador program across 20 college sports clubs.</li>
          <li><strong>Revenue:</strong> ₹1,45,000/mo (Operational cashflow positive).</li>
        </ul>
      </div>

      <!-- Month 6 -->
      <div class="month-card" style="border-top: 2.5px solid #0f172a;">
        <div class="month-badge">MONTH 6: SEED PITCH</div>
        <div class="month-title">Institutional Seed Pitch</div>
        <ul class="month-points">
          <li><strong>Tech:</strong> High-availability telemetry, sub-second latency records, and AI synthesis documentation.</li>
          <li><strong>Growth:</strong> Present CAC/LTV cohorts, 75k+ MAU, and ₹2.45L MRR to Angels & VCs for ₹2.5 Cr - ₹5 Cr round.</li>
          <li><strong>Revenue:</strong> ₹2,45,000/mo recurring revenue run-rate.</li>
        </ul>
      </div>
    </div>

    <!-- User Acquisition Channel Matrix -->
    <div class="card">
      <div class="card-header-sm">
        <span>MULTI-CHANNEL ACQUISITION ENGINE & ORGANIC VIRALITY LOOPS</span>
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
      <span>12-MONTH REVENUE PROJECTIONS & FINANCIAL ARCHITECTURE</span>
      <span class="tag">Conservative Projections</span>
    </div>

    <p style="font-size: 7pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      A certified three-pillar revenue projection demonstrating fast cashflow scaling from ₹25,000 in Month 3 to ₹12,50,000/month by Month 12.
    </p>

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

    <!-- Cost Structure -->
    <div class="card">
      <div class="card-header-sm">
        <span>OPERATING COST STRUCTURE & EBITDA MARGIN DYNAMICS</span>
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
            <td><strong>Engineering Team (1 Dev + CTO)</strong></td>
            <td>Full-time software developer salary + Sayan CTO technical execution.</td>
            <td class="num">22.0%</td>
            <td class="num" style="color: #16a34a;">Fixed Baseline</td>
          </tr>
          <tr>
            <td><strong>Creator & Influencer Payouts</strong></td>
            <td>Performance rev-share and monthly retainers for top Tier-2/3 creators.</td>
            <td class="num">20.0%</td>
            <td class="num" style="color: #16a34a;">Variable</td>
          </tr>
          <tr>
            <td><strong>Cloud Serverless & CDN</strong></td>
            <td>Supabase, AWS Lambda, Cloudflare edge, live WebSocket traffic.</td>
            <td class="num">7.5%</td>
            <td class="num" style="color: #16a34a;">Subsidized</td>
          </tr>
          <tr>
            <td><strong>Sports Data API Feeds</strong></td>
            <td>Real-time live cricket, football, and motorsport data feeds.</td>
            <td class="num">5.5%</td>
            <td class="num" style="color: #16a34a;">Fixed Tier</td>
          </tr>
          <tr class="total-row">
            <td><strong>NET OPERATING EBITDA MARGIN</strong></td>
            <td><strong>Cash-generative digital sports bulletin platform</strong></td>
            <td class="num"><strong>45.0%</strong></td>
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
      <span>CONSULTANT & ADVISORY ENGAGEMENT FRAMEWORK</span>
      <span class="tag">Strategic Collaboration</span>
    </div>

    <p style="font-size: 6.8pt; color: #475569; margin-bottom: 4px; line-height: 1.25;">
      This document serves as the formal briefing for our lead strategic consultant/advisor. We seek active advisory support in facilitating angel/seed investor introductions, brokering regional sports relationships, and guiding brand sponsorship outreach.
    </p>

    <!-- Consultant Scope & Terms -->
    <div class="grid-2">
      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">Advisory Scope & Deliverables</div>
        <ul class="role-list">
          <li><strong>Investor Syndication:</strong> Facilitating strategic introductions to angel networks and early-stage VCs for ₹2.5 Cr - ₹5 Cr seed round.</li>
          <li><strong>Sponsorship Dealmaking:</strong> Connecting growth lead to regional brand marketing heads, sports brands, and gaming platforms.</li>
          <li><strong>Corporate Governance:</strong> Monthly strategic oversight on financial audits, CAC benchmarks, and cap table optimization.</li>
          <li><strong>Brand Positioning:</strong> Scaling commercial brand identity of <strong>SPORT IQ</strong> for institutional investors.</li>
        </ul>
      </div>

      <div class="card">
        <div class="card-header-sm" style="color: #0f172a;">Commercial Terms & Advisory Structure</div>
        <ul class="role-list">
          <li><strong>Advisory Equity / Retainer:</strong> Structured equity options (1.5% - 3.0% pool with 12-month milestone vesting) or success fees.</li>
          <li><strong>Information Rights:</strong> Complete monthly access to real-time analytics dashboard, P&L statements, and telemetry logs.</li>
          <li><strong>Meeting Cadence:</strong> Bi-weekly 45-minute operational sync with Sayan (CTO), Full-Time Developer, and Rajrup (CGO).</li>
          <li><strong>Dialmate AI Backing:</strong> Backed by Dialmate AI's corporate legal and AI infrastructure guarantees.</li>
        </ul>
      </div>
    </div>

    <!-- Immediate Next Action Items -->
    <div class="card highlight">
      <div class="card-header-sm">
        <span>IMMEDIATE ACTION ITEMS & 14-DAY EXECUTION ROADMAP</span>
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
            <td>Onboard Full-Time Software Developer & deploy live PWA prototype with automated card generator.</td>
            <td>Sayan Bhattacharya (CTO) & Full-Time Dev</td>
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
            <td>Sayan, Full-Time Dev & Rajrup</td>
            <td style="text-align: center;"><span class="tag-pill tag-amber">Scheduled</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Formal Leadership & Advisory Sign-off Block -->
    <div class="card" style="background: #f8fafc; border: 1px solid #cbd5e1;">
      <div class="card-header-sm" style="margin-bottom: 1px;">
        <span>VENTURE LEADERSHIP & ADVISORY SIGN-OFF</span>
        <span class="tag-pill tag-dark">Formal Endorsement</span>
      </div>
      <div class="grid-4" style="font-size: 5.5pt; color: #475569; line-height: 1.18; margin-top: 2px;">
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Sayan Bhattacharya</strong><br>
          Co-Founder & CTO / Head of Product<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Full-Time Lead Developer</strong><br>
          Full-Stack & AI Pipeline Engineer<br>
          <span style="color: #2563eb; font-weight: 700;">Signature: [Assigned]</span>
        </div>
        <div style="border-top: 1px dashed #94a3b8; padding-top: 2px;">
          <strong style="color: #0f172a;">Rajrup</strong><br>
          Co-Founder & CGO / Head of Growth<br>
          <span style="color: #64748b;">Signature: [Executed]</span>
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
