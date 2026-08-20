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

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SPORT IQ — Pre-Seed Investor Slide Deck (₹9 Lakhs Round)</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@500;600;700;800&display=swap');

  @page {
    size: 297mm 167.06mm; /* 16:9 Landscape Ratio */
    margin: 0;
  }

  @media print {
    html, body {
      width: 297mm;
      height: 167.06mm;
      margin: 0 !important;
      padding: 0 !important;
      background-color: #070a11 !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    .slide-page {
      page-break-before: always;
      page-break-after: always;
      break-after: page;
      height: 167.06mm !important;
      max-height: 167.06mm !important;
      overflow: hidden !important;
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
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    background-color: #070a11;
    color: #f8fafc;
    line-height: 1.4;
  }

  /* Slide Page Layout */
  .slide-page {
    width: 297mm;
    height: 167.06mm;
    padding: 14mm 18mm 12mm 18mm;
    background: #0d131f;
    border-bottom: 2px solid #24324a;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }

  /* Header */
  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding-bottom: 8px;
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  .slide-category {
    font-size: 10px;
    font-weight: 800;
    color: #ef4444;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 2px;
  }

  .slide-title {
    font-size: 22px;
    font-weight: 900;
    line-height: 1.15;
    color: #ffffff;
    letter-spacing: -0.3px;
  }

  .slide-title span.highlight {
    color: #ef4444;
  }

  .slide-subtitle {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 2px;
  }

  .brand-logo-img {
    height: 26px;
    width: auto;
    object-fit: contain;
  }

  /* Body Content */
  .slide-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
  }

  /* Footer */
  .slide-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 6px;
    font-size: 9px;
    color: #64748b;
    font-weight: 600;
    flex-shrink: 0;
  }

  /* Utility Components */
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 10px; }
  .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }

  .card-box {
    background: #131d2e;
    border: 1px solid #24324a;
    border-radius: 8px;
    padding: 10px 12px;
  }

  .card-box.accent-red {
    border-left: 3px solid #ef4444;
    background: rgba(239, 68, 68, 0.06);
  }
  .card-box.accent-green {
    border-left: 3px solid #10b981;
    background: rgba(16, 185, 129, 0.06);
  }
  .card-box.accent-blue {
    border-left: 3px solid #3b82f6;
    background: rgba(59, 130, 246, 0.06);
  }

  .card-box h3 {
    font-size: 12px;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 4px;
  }

  .card-box p {
    font-size: 10px;
    color: #94a3b8;
    line-height: 1.35;
  }

  .metric-stat {
    font-family: 'JetBrains Mono', monospace;
    font-size: 22px;
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: 2px;
  }
  .metric-stat.red { color: #ef4444; }
  .metric-stat.green { color: #10b981; }
  .metric-stat.blue { color: #3b82f6; }
  .metric-stat.amber { color: #f59e0b; }

  .metric-label {
    font-size: 9px;
    font-weight: 800;
    color: #cbd5e1;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .info-canvas {
    width: 100%;
    background: #090e18;
    border: 1px solid #24324a;
    border-radius: 8px;
    padding: 8px 12px;
  }

  .info-canvas svg {
    width: 100%;
    height: auto;
    display: block;
  }

  table.pdf-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px;
  }

  table.pdf-table th {
    background: #090e18;
    color: #ffffff;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 9px;
    padding: 6px 8px;
    text-align: left;
    border-bottom: 2px solid #ef4444;
  }

  table.pdf-table td {
    padding: 6px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    color: #e2e8f0;
  }

  table.pdf-table tr.highlight td {
    background: rgba(239, 68, 68, 0.12);
    color: #fca5a5;
    font-weight: 800;
  }

  .num { text-align: right; font-family: 'JetBrains Mono', monospace; }
</style>
</head>
<body>

  <!-- SLIDE 1: Title & Executive Memorandum -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[STRICTLY CONFIDENTIAL — PRE-SEED INVESTOR MEMORANDUM]</div>
        <h1 class="slide-title">SPORT IQ: The 15-Second <span class="highlight">Match Pulse</span> for Next-Gen Fans</h1>
        <div class="slide-subtitle">High-Velocity Digital Sports Bulletin Venture | Incubated by Dialmate AI Technologies</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-4">
        <div class="card-box accent-red">
          <div class="metric-stat red">INR 9.00 L</div>
          <div class="metric-label">Pre-Seed Angel Round</div>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat green">3 Angels @ ₹3L</div>
          <div class="metric-label">3.0% Equity Per Ticket</div>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">88.5%</div>
          <div class="metric-label">Gross Margin</div>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat amber">Month 4</div>
          <div class="metric-label">Cashflow Breakeven</div>
        </div>
      </div>

      <div class="info-canvas">
        <svg viewBox="0 0 760 75">
          <rect x="10" y="10" width="165" height="55" rx="6" fill="#131d2e" stroke="#ef4444" stroke-width="1.2"/>
          <circle cx="28" cy="25" r="9" fill="#ef4444"/>
          <text x="28" y="29" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">1</text>
          <text x="44" y="24" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">Scrapers & Data Lake</text>
          <text x="20" y="42" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">Scrapers + APIs ingest into</text>
          <text x="20" y="52" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">Serverless Cloud Data Lake</text>

          <path d="M 180 37 L 200 37" stroke="#ef4444" stroke-width="1.5"/>

          <rect x="205" y="10" width="165" height="55" rx="6" fill="#131d2e" stroke="#3b82f6" stroke-width="1.2"/>
          <circle cx="223" cy="25" r="9" fill="#3b82f6"/>
          <text x="223" y="29" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">2</text>
          <text x="239" y="24" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">AI Intelligence Layer</text>
          <text x="215" y="42" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">LLM contextual synthesis in</text>
          <text x="215" y="52" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">&lt; 2.5s generation latency</text>

          <path d="M 375 37 L 395 37" stroke="#3b82f6" stroke-width="1.5"/>

          <rect x="400" y="10" width="165" height="55" rx="6" fill="#131d2e" stroke="#10b981" stroke-width="1.2"/>
          <circle cx="418" cy="25" r="9" fill="#10b981"/>
          <text x="418" y="29" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">3</text>
          <text x="434" y="24" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">Shorts & Long-Form</text>
          <text x="410" y="42" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">15s Reels + 35-Word Cards</text>
          <text x="410" y="52" fill="#94a3b8" font-size="6.5" font-family="Plus Jakarta Sans">+ Deep Tactical Breakdowns</text>

          <path d="M 570 37 L 590 37" stroke="#10b981" stroke-width="1.5"/>

          <rect x="595" y="10" width="155" height="55" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <circle cx="613" cy="25" r="9" fill="#34d399"/>
          <text x="613" y="29" fill="#064e3b" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">4</text>
          <text x="629" y="24" fill="#a7f3d0" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">4 Revenue Pillars</text>
          <text x="605" y="42" fill="#ffffff" font-size="6.5" font-family="Plus Jakarta Sans">API B2B + Sponsors + Pro</text>
          <text x="605" y="52" fill="#34d399" font-size="6.5" font-weight="700" font-family="JetBrains Mono">INR 5.85L MRR by Month 6</text>
        </svg>
      </div>
    </div>
    <div class="slide-footer">
      <span>Confidential | SPORT IQ Investor Deck</span>
      <span>Slide 01 of 12</span>
    </div>
  </div>

  <!-- SLIDE 2: The Macro Attention Paradox -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[MACRO MARKET VOID]</div>
        <h2 class="slide-title">The Sports Attention Paradox in Digital India</h2>
        <div class="slide-subtitle">650M fans are trapped between ad-bloated scorecards and heavy video broadcasts.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="info-canvas">
        <svg viewBox="0 0 760 100">
          <g>
            <rect x="15" y="10" width="220" height="80" rx="6" fill="#1e131d" stroke="#f87171" stroke-width="1.2"/>
            <text x="125" y="28" fill="#fca5a5" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">1. AD-BLOATED SCORECARDS</text>
            <text x="125" y="40" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="Plus Jakarta Sans">Cricbuzz / ESPNcricinfo</text>
            <text x="25" y="56" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">[X] 68.5% screen area lost to ads</text>
            <text x="25" y="68" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">[X] 4.2 clicks to find match context</text>
            <text x="125" y="82" fill="#f87171" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Ad & Cognitive Overload</text>
          </g>

          <g>
            <rect x="255" y="20" width="240" height="60" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.8"/>
            <text x="375" y="38" fill="#a7f3d0" font-size="9" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">THE UNMET MIDDLE: SPORT IQ</text>
            <text x="375" y="52" fill="#ffffff" font-size="7.5" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">15-Second AI Tactical Bulletins</text>
            <text x="375" y="66" fill="#34d399" font-size="7.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Zero Ads • Dual Parity • &lt; 2.5s</text>
          </g>

          <g>
            <rect x="515" y="10" width="225" height="80" rx="6" fill="#131d2e" stroke="#64748b" stroke-width="1.2"/>
            <text x="627" y="28" fill="#cbd5e1" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">2. OTT VIDEO STREAMERS</text>
            <text x="627" y="40" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="Plus Jakarta Sans">JioHotstar / SonyLIV</text>
            <text x="525" y="56" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">[X] Requires 30+ mins sustained view</text>
            <text x="525" y="68" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">[X] Unusable in meetings or transit</text>
            <text x="627" y="82" fill="#cbd5e1" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Time-Intensive Commitment</text>
          </g>
        </svg>
      </div>

      <div class="grid-2">
        <div class="card-box accent-red">
          <h3>The Incumbent Blunder</h3>
          <p>Monetization greed has forced legacy apps to pack 4–6 programmatic betting ads per screen, turning scorecards into digital casino billboards.</p>
        </div>
        <div class="card-box accent-green">
          <h3>The Modern User Need</h3>
          <p>Busy fans want 15-second clarity on <em>why</em> a wicket fell or <em>how</em> momentum shifted, accessible in 1 click without wading through ad clutter.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Market Void | High-Velocity 15-Second Consumption</span>
      <span>Slide 02 of 12</span>
    </div>
  </div>

  <!-- SLIDE 3: The Solution & Dual-Sport Parity -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[PRODUCT EXPERIENCE]</div>
        <h2 class="slide-title">15-Second Match Pulse & Dual-Sport Parity</h2>
        <div class="slide-subtitle">Cricket & Football treated with equal home-screen real estate for modern fans.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-3">
        <div class="card-box accent-red">
          <h3>15-Second Match Pulse</h3>
          <p>Real-time tactical intelligence explaining <em>why</em> a wicket fell or <em>how</em> momentum shifted, rather than dry scoreboard numbers.</p>
        </div>
        <div class="card-box accent-blue">
          <h3>Dual-Sport Parity Grid</h3>
          <p>IPL/Test Cricket and European/ISL Football share equal front-page priority, capturing India's 180M+ multi-sport Gen-Z fans.</p>
        </div>
        <div class="card-box accent-green">
          <h3>1-Click Social Cards</h3>
          <p>Automated visual cards rendered in &lt;2.5 seconds for effortless peer-to-peer sharing on WhatsApp Status and Instagram Stories.</p>
        </div>
      </div>

      <div class="info-canvas">
        <svg viewBox="0 0 760 70">
          <rect x="20" y="10" width="345" height="50" rx="5" fill="#1a1215" stroke="#ef4444" stroke-width="1.2"/>
          <text x="192" y="26" fill="#fca5a5" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">CRICKET INTELLIGENCE (50%)</text>
          <text x="35" y="42" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">• IPL, ICC World Cups & Bilateral Test Series 35-word bulletins</text>

          <rect x="395" y="10" width="345" height="50" rx="5" fill="#0f1c2e" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="567" y="26" fill="#93c5fd" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">FOOTBALL INTELLIGENCE (50%)</text>
          <text x="410" y="42" fill="#e2e8f0" font-size="7" font-family="Plus Jakarta Sans">• Premier League, Champions League & ISL tactical press breakdowns</text>
        </svg>
      </div>
    </div>
    <div class="slide-footer">
      <span>Product Moat | Dual-Sport Parity & Zero Ad Fatigue</span>
      <span>Slide 03 of 12</span>
    </div>
  </div>

  <!-- SLIDE 4: End-to-End Data Engine Architecture -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[TECH MOAT & ARCHITECTURE]</div>
        <h2 class="slide-title">End-to-End Data Pipelines & Cloud Data Lake</h2>
        <div class="slide-subtitle">Scrapers + Official APIs → Cloud Data Lake → Dialmate AI → Shorts & Long-Form Content</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="info-canvas">
        <svg viewBox="0 0 760 105">
          <!-- Stage 1: Ingestion -->
          <rect x="15" y="10" width="165" height="85" rx="6" fill="#131d2e" stroke="#ef4444" stroke-width="1.2"/>
          <text x="97" y="25" fill="#ef4444" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">1. HYBRID INGESTION</text>
          <text x="25" y="41" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Twitter/X Live Commentary</text>
          <text x="25" y="52" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Cricket & Football API Feeds</text>
          <text x="25" y="63" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• RSS News & Web Stats Parsers</text>
          <text x="97" y="80" fill="#ef4444" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">&lt; 1.2s Ingest Latency</text>

          <path d="M 180 52 L 205 52" stroke="#ef4444" stroke-width="1.5"/>

          <!-- Stage 2: Data Lake -->
          <rect x="210" y="10" width="165" height="85" rx="6" fill="#131d2e" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="292" y="25" fill="#3b82f6" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">2. CLOUD DATA LAKE</text>
          <text x="220" y="41" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Supabase / Cloudflare R2 Store</text>
          <text x="220" y="52" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Ball-by-ball Telemetry Logs</text>
          <text x="220" y="63" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Social Sentiment & Transcripts</text>
          <text x="292" y="80" fill="#3b82f6" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Zero Vendor Overhead</text>

          <path d="M 375 52 L 400 52" stroke="#3b82f6" stroke-width="1.5"/>

          <!-- Stage 3: Dialmate AI -->
          <rect x="405" y="10" width="165" height="85" rx="6" fill="#131d2e" stroke="#8b5cf6" stroke-width="1.2"/>
          <text x="487" y="25" fill="#8b5cf6" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">3. DIALMATE AI LAYER</text>
          <text x="415" y="41" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• LLM Context Synthesizer</text>
          <text x="415" y="52" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Match Pivot Point Extractor</text>
          <text x="415" y="63" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Remotion Short-Video Render</text>
          <text x="487" y="80" fill="#8b5cf6" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">&lt; 2.5s Generation Engine</text>

          <path d="M 570 52 L 595 52" stroke="#8b5cf6" stroke-width="1.5"/>

          <!-- Stage 4: Dual Output -->
          <rect x="600" y="10" width="150" height="85" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="675" y="24" fill="#34d399" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">4. DUAL OUTPUTS</text>
          <text x="608" y="40" fill="#ffffff" font-size="6.8" font-weight="800" font-family="Plus Jakarta Sans">▶ SHORTS:</text>
          <text x="608" y="50" fill="#a7f3d0" font-size="6.2" font-family="Plus Jakarta Sans">15s Videos & 35-W Cards</text>
          <text x="608" y="64" fill="#ffffff" font-size="6.8" font-weight="800" font-family="Plus Jakarta Sans">📄 LONG-FORM:</text>
          <text x="608" y="74" fill="#a7f3d0" font-size="6.2" font-family="Plus Jakarta Sans">Tactical Analytics Dossiers</text>
        </svg>
      </div>
    </div>
    <div class="slide-footer">
      <span>Technology Architecture | Data Lake & Dialmate AI Integration</span>
      <span>Slide 04 of 12</span>
    </div>
  </div>

  <!-- SLIDE 5: Dual Content Outputs (Shorts vs Long-Form) -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[CONTENT GENERATION ENGINE]</div>
        <h2 class="slide-title">Dual Output Engine: Shorts vs. Long-Form</h2>
        <div class="slide-subtitle">Capturing both snackable 15-second virality and deep tactical analytical retention.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <!-- Left Box: Short-Form -->
        <div class="card-box accent-red" style="padding: 14px 16px; background: rgba(239, 68, 68, 0.08); border: 1.5px solid rgba(239, 68, 68, 0.4); border-left: 4px solid #ef4444;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h3 style="font-size: 13px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 6px;">
              <span style="display: inline-block; width: 18px; height: 18px; background: #ef4444; color: #ffffff; border-radius: 4px; text-align: center; line-height: 18px; font-size: 10px;">►</span>
              Short-Form Content (High-Velocity Virality)
            </h3>
            <span style="font-size: 8px; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">Snackable</span>
          </div>
          <div style="font-size: 10px; color: #e2e8f0; line-height: 1.45;">
            <div style="margin-bottom: 6px; padding-left: 10px; border-left: 2px solid #ef4444;">
              <strong style="color: #ffffff;">15-Second Short Videos:</strong> Automated video script rendering (via Remotion) for YouTube Shorts and Instagram Reels.
            </div>
            <div style="margin-bottom: 6px; padding-left: 10px; border-left: 2px solid #ef4444;">
              <strong style="color: #ffffff;">35-Word Micro-Bulletins:</strong> Real-time tactical match summaries generated by Dialmate AI in &lt;2.5 seconds.
            </div>
            <div style="padding-left: 10px; border-left: 2px solid #ef4444;">
              <strong style="color: #ffffff;">1-Click WhatsApp Cards:</strong> High-contrast 1080x1920 infographics engineered for viral peer-to-peer status sharing.
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(239, 68, 68, 0.2); display: flex; justify-content: space-between; font-size: 8.5px; font-family: 'JetBrains Mono', monospace;">
            <span style="color: #fca5a5;">Target Latency: &lt;2.5s</span>
            <span style="color: #4ade80; font-weight: 700;">Organic K-Factor: 1.34</span>
          </div>
        </div>

        <!-- Right Box: Long-Form -->
        <div class="card-box accent-blue" style="padding: 14px 16px; background: rgba(59, 130, 246, 0.08); border: 1.5px solid rgba(59, 130, 246, 0.4); border-left: 4px solid #3b82f6;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <h3 style="font-size: 13px; font-weight: 900; color: #ffffff; margin: 0; display: flex; align-items: center; gap: 6px;">
              <span style="display: inline-block; width: 18px; height: 18px; background: #3b82f6; color: #ffffff; border-radius: 4px; text-align: center; line-height: 18px; font-size: 10px;">≡</span>
              Long-Form Content (Deep Engagement & Retention)
            </h3>
            <span style="font-size: 8px; font-weight: 800; background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">Deep Analytical</span>
          </div>
          <div style="font-size: 10px; color: #e2e8f0; line-height: 1.45;">
            <div style="margin-bottom: 6px; padding-left: 10px; border-left: 2px solid #3b82f6;">
              <strong style="color: #ffffff;">Tactical Deep-Dive Breakdowns:</strong> 400-word post-match analytical dossiers dissecting team formations & bowling deltas.
            </div>
            <div style="margin-bottom: 6px; padding-left: 10px; border-left: 2px solid #3b82f6;">
              <strong style="color: #ffffff;">Weekly Newsletter Digests:</strong> Executive email bulletins compiling tournament trends, player form indices & team ratings.
            </div>
            <div style="padding-left: 10px; border-left: 2px solid #3b82f6;">
              <strong style="color: #ffffff;">Fantasy Intelligence Signals:</strong> Data-backed player matchup briefs & differential picks for fantasy sports users.
            </div>
          </div>
          <div style="margin-top: 10px; padding-top: 8px; border-top: 1px solid rgba(59, 130, 246, 0.2); display: flex; justify-content: space-between; font-size: 8.5px; font-family: 'JetBrains Mono', monospace;">
            <span style="color: #93c5fd;">Avg Dwell Time: 8.4 Mins</span>
            <span style="color: #4ade80; font-weight: 700;">Monetization: B2B API / Pro</span>
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Content Engine | Snackable Virality & Deep Retention</span>
      <span>Slide 05 of 12</span>
    </div>
  </div>

  <!-- SLIDE 6: Hyper-Lean Creator Distribution Engine -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[DISTRIBUTION & GO-TO-MARKET]</div>
        <h2 class="slide-title">50+ Regional Micro-Creators & WhatsApp VIP Engine</h2>
        <div class="slide-subtitle">Bypassing expensive Google/Meta ad spend to keep CAC under ₹4.00 per user.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-3">
        <div class="card-box accent-red">
          <div class="metric-stat red">50+</div>
          <div class="metric-label">Micro-Creators</div>
          <p style="margin-top: 4px;">Tier-2/3 cricket & football creators (10k-70k followers) contracted on monthly retainers.</p>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat green">1.34</div>
          <div class="metric-label">Organic K-Factor</div>
          <p style="margin-top: 4px;">WhatsApp status shares drive organic user acquisition without agency commissions.</p>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">&lt; INR 3.80</div>
          <div class="metric-label">Blended CAC</div>
          <p style="margin-top: 4px;">Achieved through direct creator dealmaking and moderated WhatsApp VIP fan groups.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Growth Strategy | Decentralized Creator Distribution</span>
      <span>Slide 06 of 12</span>
    </div>
  </div>

  <!-- SLIDE 7: ₹9,00,000 Capital Allocation -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[CAPITAL DEPLOYMENT]</div>
        <h2 class="slide-title">INR 9,00,000 Pre-Seed Capital Allocation</h2>
        <div class="slide-subtitle">Structured across 3 Angel Tickets (₹3,00,000 INR each) for an 8-month runway.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box">
          <h3>Pre-Seed Budget Breakdown (₹9.0L)</h3>
          <table class="pdf-table" style="margin-top: 4px;">
            <thead>
              <tr>
                <th>Category</th>
                <th style="text-align: right;">Amount (INR)</th>
                <th style="text-align: right;">Share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Micro-Creator & Growth Syndication</strong></td>
                <td class="num">INR 4,00,000</td>
                <td class="num">44.4%</td>
              </tr>
              <tr>
                <td><strong>Data Lake & AI Pipeline Engine</strong></td>
                <td class="num">INR 2,10,000</td>
                <td class="num">23.3%</td>
              </tr>
              <tr>
                <td><strong>Short Video & Asset Production</strong></td>
                <td class="num">INR 1,20,000</td>
                <td class="num">13.3%</td>
              </tr>
              <tr>
                <td><strong>Working Capital & Tournament Reserve</strong></td>
                <td class="num">INR 1,20,000</td>
                <td class="num">13.3%</td>
              </tr>
              <tr>
                <td><strong>Legal Incorporation & Developer Keys</strong></td>
                <td class="num">INR 50,000</td>
                <td class="num">5.6%</td>
              </tr>
              <tr class="highlight">
                <td><strong>TOTAL PRE-SEED CAPITAL</strong></td>
                <td class="num"><strong>INR 9,00,000</strong></td>
                <td class="num"><strong>100.0%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-box accent-red">
          <h3>3 Milestone Disbursement Tranches</h3>
          <p>• <strong>Tranche 1 (Closing): INR 3,00,000</strong> — Data Lake live, scrapers operational, 35 creator contracts signed.<br><br>
             • <strong>Tranche 2 (Month 2–3): INR 3,00,000</strong> — 25k MAU achieved, WhatsApp VIP network, B2B API beta.<br><br>
             • <strong>Tranche 3 (Month 4): INR 3,00,000</strong> — 50k MAU, Cashflow Breakeven reached, scaling to Month 6 pitch.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Capital Allocation | Milestone-Gated Deployment</span>
      <span>Slide 07 of 12</span>
    </div>
  </div>

  <!-- SLIDE 8: 4-Pillar Monetization Architecture -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[REVENUE GENERATION ENGINE]</div>
        <h2 class="slide-title">4 Robust Monetization Pillars</h2>
        <div class="slide-subtitle">Multi-stream monetization protecting cashflow stability without banner ad clutter.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-4">
        <div class="card-box accent-green">
          <div class="metric-stat green">35%</div>
          <div class="metric-label">B2B API Syndication</div>
          <p style="margin-top: 4px;">White-labeled bulletin feeds sold to sports blogs & betting apps (₹25k-50k/mo).</p>
        </div>
        <div class="card-box accent-red">
          <div class="metric-stat red">35%</div>
          <div class="metric-label">Creator Co-Sponsors</div>
          <p style="margin-top: 4px;">Native brand badges placed on viral match cards & short video reels.</p>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">18%</div>
          <div class="metric-label">Pro Subscriptions</div>
          <p style="margin-top: 4px;">Ad-free 15s pulse & fantasy prediction signals @ ₹99/month.</p>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat amber">12%</div>
          <div class="metric-label">Affiliate Sports Merch</div>
          <p style="margin-top: 4px;">Contextual merchandise & fantasy contest referral commissions.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Monetization Model | High-Margin Multi-Stream Cashflow</span>
      <span>Slide 08 of 12</span>
    </div>
  </div>

  <!-- SLIDE 9: 12-Month Financial Ramp & Breakeven -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[FINANCIAL PROJECTIONS]</div>
        <h2 class="slide-title">12-Month Financial Model & Cashflow Breakeven</h2>
        <div class="slide-subtitle">Operational breakeven by Month 4, scaling to ₹5.85L MRR by Month 6.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <table class="pdf-table">
        <thead>
          <tr>
            <th>Timeline / Milestone</th>
            <th style="text-align: right;">Target MAU</th>
            <th style="text-align: right;">Monthly Revenue</th>
            <th style="text-align: right;">Monthly OpEx</th>
            <th style="text-align: right;">Net Profit / (Loss)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Month 1 (Build & Infra)</strong></td>
            <td class="num">2,500</td>
            <td class="num">INR 0</td>
            <td class="num">INR 65,000</td>
            <td class="num" style="color:#ef4444;">(INR 65,000)</td>
          </tr>
          <tr>
            <td><strong>Month 2 (Closed Beta)</strong></td>
            <td class="num">8,500</td>
            <td class="num">INR 15,000</td>
            <td class="num">INR 75,000</td>
            <td class="num" style="color:#ef4444;">(INR 60,000)</td>
          </tr>
          <tr>
            <td><strong>Month 3 (Public Launch)</strong></td>
            <td class="num">25,000</td>
            <td class="num">INR 65,000</td>
            <td class="num">INR 95,000</td>
            <td class="num" style="color:#ef4444;">(INR 30,000)</td>
          </tr>
          <tr class="highlight">
            <td><strong>Month 4 (Cashflow Breakeven)</strong></td>
            <td class="num">50,000</td>
            <td class="num">INR 1,65,000</td>
            <td class="num">INR 1,15,000</td>
            <td class="num" style="color:#34d399; font-weight:800;">+ INR 50,000</td>
          </tr>
          <tr>
            <td><strong>Month 6 (Institutional Seed Pitch)</strong></td>
            <td class="num">130,000</td>
            <td class="num">INR 5,85,000</td>
            <td class="num">INR 1,85,000</td>
            <td class="num" style="color:#34d399; font-weight:800;">+ INR 4,00,000</td>
          </tr>
          <tr class="highlight">
            <td><strong>Month 12 (Year 1 Exit Run-Rate)</strong></td>
            <td class="num">450,000</td>
            <td class="num">INR 14,50,000 / mo</td>
            <td class="num">INR 4,20,000</td>
            <td class="num" style="color:#34d399; font-weight:800;">+ INR 10,30,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>Financial Projections | Cashflow Positive by Month 4</span>
      <span>Slide 09 of 12</span>
    </div>
  </div>

  <!-- SLIDE 10: Cap Table & Founder Governance -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[CAP TABLE & GOVERNANCE]</div>
        <h2 class="slide-title">Post-Pre-Seed Cap Table & Governance</h2>
        <div class="slide-subtitle">83.0% Founder Majority Equity retained to ensure long-term focus toward Series A.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box">
          <h3>Cap Table Structure</h3>
          <table class="pdf-table" style="margin-top: 4px;">
            <thead>
              <tr>
                <th>Shareholder</th>
                <th style="text-align: right;">Equity Stake</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Sayan Bhattacharya (Co-Founder & CTO)</strong></td>
                <td class="num"><strong>41.5%</strong></td>
              </tr>
              <tr>
                <td><strong>Rajrup (Co-Founder & CGO)</strong></td>
                <td class="num"><strong>41.5%</strong></td>
              </tr>
              <tr>
                <td><strong>ESOP Pool (Key Hires & Lead Devs)</strong></td>
                <td class="num"><strong>8.0%</strong></td>
              </tr>
              <tr class="highlight">
                <td><strong>3 Pre-Seed Angels (₹3L each for 3.0%)</strong></td>
                <td class="num"><strong>9.0% (3.0% each)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-box accent-blue">
          <h3>Governance & Protections</h3>
          <p>• <strong>Vesting Schedule:</strong> 4-year vesting with 1-year cliff for both co-founders.<br><br>
             • <strong>100% IP Assignment:</strong> All scrapers, data lake logic, and codeassigned directly to entity.<br><br>
             • <strong>Board Seats:</strong> 2 Founder Seats + 1 Investor Observer Seat.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Corporate Governance | Clean Cap Table & Founder Majority</span>
      <span>Slide 10 of 12</span>
    </div>
  </div>

  <!-- SLIDE 11: Founding Leadership -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[FOUNDING TEAM]</div>
        <h2 class="slide-title">Leadership & Division of Execution</h2>
        <div class="slide-subtitle">Technical and growth horsepower backed by Dialmate AI incubation.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box accent-red">
          <h3>Sayan Bhattacharya — Co-Founder & CTO</h3>
          <p>• <strong>Mandate:</strong> End-to-end technical architecture, scrapers, Cloud Data Lake, Dialmate AI prompt engineering, Remotion short-video generator.<br>
             • <strong>Cost Advantage:</strong> Zero tech vendor burn; built 100% in-house.</p>
        </div>
        <div class="card-box accent-blue">
          <h3>Rajrup — Co-Founder & CGO</h3>
          <p>• <strong>Mandate:</strong> Virality loops, 50+ micro-influencer syndication, WhatsApp VIP broadcast networks, B2B API dealmaking.<br>
             • <strong>Cost Advantage:</strong> Direct dealmaking with regional creators, bypassing ad agency commissions.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Team Execution | Technical & Growth Parity</span>
      <span>Slide 11 of 12</span>
    </div>
  </div>

  <!-- SLIDE 12: Pre-Seed Angel Opportunity -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[ANGEL INVESTMENT OPPORTUNITY]</div>
        <h2 class="slide-title">Pre-Seed Angel Ticket & Next 14 Days</h2>
        <div class="slide-subtitle">Participate with ₹3,00,000 INR for 3.0% Equity in India's Fastest AI Sports Bulletin.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box accent-green">
          <h3>What Your INR 3,00,000 Angel Ticket Delivers</h3>
          <p>• <strong>3.0% Equity Stake</strong> at ₹1.00 Crore Post-Money Valuation.<br>
             • <strong>130,000 Active MAU</strong> target by Month 6.<br>
             • <strong>Cashflow Breakeven</strong> by Month 4 (₹1.65L MRR).<br>
             • <strong>Target 15x–20x Return</strong> at Series A round (Targeting ₹15 Cr–₹20 Cr valuation).</p>
        </div>
        <div class="card-box">
          <h3>Immediate Execution Plan (Next 14 Days)</h3>
          <p>• <strong>Day 1–3:</strong> Pvt Ltd incorporation & IP assignment agreement.<br>
             • <strong>Day 4–7:</strong> Deploy live PWA with Data Lake & Dialmate AI engine.<br>
             • <strong>Day 8–10:</strong> Contract 50+ micro-creators & seed WhatsApp VIP groups.<br>
             • <strong>Day 11–14:</strong> Roll out Closed Beta to first 5,000 sports fans.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>SPORT IQ — High-Velocity Sports Bulletin | Incubated by Dialmate AI</span>
      <span>Slide 12 of 12</span>
    </div>
  </div>

</body>
</html>
`;

// Save HTML to workspace and public
const htmlFilePath = path.join(__dirname, 'INVESTOR_SLIDE_DECK_PRE_SEED_9L.html');
fs.writeFileSync(htmlFilePath, htmlContent, 'utf8');
console.log('HTML slide deck saved to:', htmlFilePath);

const publicHtmlPath = path.join(__dirname, 'public', 'investor_deck_standalone.html');
fs.writeFileSync(publicHtmlPath, htmlContent, 'utf8');

// PDF Generation using Chrome Headless with explicit Landscape page dimensions
const pdfOutputPath = path.join(__dirname, 'SPORT_IQ_INVESTOR_PITCH_DECK_9L.pdf');
const publicPdfPath = path.join(__dirname, 'public', 'SPORT_IQ_INVESTOR_PITCH_DECK_9L.pdf');
const investorPdfPath = path.join(__dirname, 'public', 'investor_deck.pdf');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + htmlFilePath.replace(/\\/g, '/');

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${pdfOutputPath}" --no-pdf-header-footer "${fileUrl}"`;

console.log('Executing Chrome PDF generation command for Investor-Only Slide Deck...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Investor PDF successfully generated at:', pdfOutputPath);
  fs.copyFileSync(pdfOutputPath, publicPdfPath);
  fs.copyFileSync(pdfOutputPath, investorPdfPath);
  console.log('Investor PDF synced to public directory!');
} catch (err) {
  console.error('Error generating PDF with Chrome:', err.message);
}
