import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to convert local image to base64 for reliable PDF rendering in Chrome Headless
function getBase64Image(filePath) {
  try {
    const fullPath = path.resolve(filePath);
    if (fs.existsSync(fullPath)) {
      const fileData = fs.readFileSync(fullPath);
      return `data:image/png;base64,${fileData.toString('base64')}`;
    }
  } catch (err) {
    console.error('Error reading logo image:', err.message);
  }
  return '';
}

const logoPath = path.join(__dirname, 'public', 'sport_iq_logo.png');
const sportIqLogoBase64 = getBase64Image(logoPath);

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SPORT IQ — Dedicated Angel Pitch Deck (₹3L - ₹4L Ticket)</title>
<style>
  @page {
    size: 297mm 167.06mm;
    margin: 0;
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
    background-color: #070a11;
    color: #f8fafc;
    width: 297mm;
    margin: 0 auto;
  }

  .slide-page {
    width: 297mm;
    height: 167.06mm;
    max-height: 167.06mm;
    padding: 16mm 20mm 12mm 20mm;
    page-break-after: always;
    break-after: page;
    position: relative;
    background: #0d131f;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden !important;
    border: 1px solid #24324a;
  }

  .slide-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 8px;
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  .slide-category {
    font-size: 9px;
    font-weight: 800;
    color: #ef4444;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-bottom: 2px;
  }

  .slide-title {
    font-size: 21px;
    font-weight: 900;
    color: #ffffff;
    line-height: 1.15;
    letter-spacing: -0.3px;
  }

  .slide-title span.highlight {
    color: #ef4444;
  }

  .slide-subtitle {
    font-size: 11px;
    color: #94a3b8;
    margin-top: 3px;
  }

  .brand-logo-img {
    height: 24px;
    width: auto;
    object-fit: contain;
  }

  .slide-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
  }

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

  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .grid-3 {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }

  .grid-4 {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }

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

  <!-- SLIDE 1: Executive Opportunity Summary -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[TODAY'S ANGEL INVESTMENT OPPORTUNITY]</div>
        <h1 class="slide-title">SPORT IQ: ₹3.0L – ₹4.0L <span class="highlight">Angel Ticket</span> Pitch</h1>
        <div class="slide-subtitle">Participate with ₹3,00,000 – ₹4,00,000 INR for 3.0% – 4.0% Equity in India's Fastest AI Sports Bulletin</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-4">
        <div class="card-box accent-red">
          <div class="metric-stat red">INR 3L–4L</div>
          <div class="metric-label">Your Angel Ticket</div>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat green">3.0% – 4.0%</div>
          <div class="metric-label">Equity Stake (₹1.0Cr Post)</div>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">Month 4</div>
          <div class="metric-label">Cashflow Breakeven</div>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat amber">15x – 20x</div>
          <div class="metric-label">Target Return @ Series A</div>
        </div>
      </div>

      <div class="info-canvas" style="padding: 10px 14px;">
        <svg viewBox="0 0 760 80">
          <rect x="10" y="10" width="170" height="60" rx="6" fill="#131d2e" stroke="#ef4444" stroke-width="1.2"/>
          <circle cx="28" cy="26" r="9" fill="#ef4444"/>
          <text x="28" y="30" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">1</text>
          <text x="44" y="25" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">Data Engine & Scrapers</text>
          <text x="20" y="44" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">Scrapers + APIs ingest into</text>
          <text x="20" y="55" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">Serverless Cloud Data Lake</text>

          <path d="M 185 40 L 205 40" stroke="#ef4444" stroke-width="1.5"/>

          <rect x="210" y="10" width="170" height="60" rx="6" fill="#131d2e" stroke="#3b82f6" stroke-width="1.2"/>
          <circle cx="228" cy="26" r="9" fill="#3b82f6"/>
          <text x="228" y="30" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">2</text>
          <text x="244" y="25" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">Dialmate AI Layer</text>
          <text x="220" y="44" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">LLM context synthesis in</text>
          <text x="220" y="55" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">&lt; 2.5s generation latency</text>

          <path d="M 385 40 L 405 40" stroke="#3b82f6" stroke-width="1.5"/>

          <rect x="410" y="10" width="165" height="60" rx="6" fill="#131d2e" stroke="#10b981" stroke-width="1.2"/>
          <circle cx="428" cy="26" r="9" fill="#10b981"/>
          <text x="428" y="30" fill="#ffffff" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">3</text>
          <text x="444" y="25" fill="#ffffff" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">Shorts & Long-Form</text>
          <text x="420" y="44" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">15s Reels + 35-Word Cards</text>
          <text x="420" y="55" fill="#94a3b8" font-size="6.8" font-family="Plus Jakarta Sans">+ Deep Tactical Dossiers</text>

          <path d="M 580 40 L 600 40" stroke="#10b981" stroke-width="1.5"/>

          <rect x="605" y="10" width="145" height="60" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <circle cx="623" cy="26" r="9" fill="#34d399"/>
          <text x="623" y="30" fill="#064e3b" font-size="8" font-weight="900" text-anchor="middle" font-family="JetBrains Mono">4</text>
          <text x="639" y="25" fill="#a7f3d0" font-size="8" font-weight="800" font-family="Plus Jakarta Sans">4 Revenue Streams</text>
          <text x="615" y="44" fill="#ffffff" font-size="6.8" font-family="Plus Jakarta Sans">B2B API + Co-Sponsors</text>
          <text x="615" y="55" fill="#34d399" font-size="6.8" font-weight="700" font-family="JetBrains Mono">₹5.85L MRR by Month 6</text>
        </svg>
      </div>
    </div>
    <div class="slide-footer">
      <span>Confidential | Prepared Specifically for Today's Angel Investor Pitch</span>
      <span>Slide 01 of 12</span>
    </div>
  </div>

  <!-- SLIDE 2: Why We Are the Right Folks (Founder Horsepower & Execution) -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[FOUNDING TEAM HORSEPOWER]</div>
        <h2 class="slide-title">Why We Are the Right Folks to Build This</h2>
        <div class="slide-subtitle">In-house technical mastery, zero vendor burn, and proven creator growth syndication.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box accent-red" style="padding: 12px 16px;">
          <h3 style="font-size: 13px; font-weight: 900; color: #ffffff; margin-bottom: 6px;">Sayan Bhattacharya — Co-Founder & CTO</h3>
          <p style="font-size: 10.5px; color: #e2e8f0; line-height: 1.45;">
            • <strong>Full-Stack & Data Lake Architect:</strong> Built the entire live scraper suite, Cloud Data Lake (Supabase/Cloudflare R2), Dialmate AI prompt engine, Remotion automated short video generator, and PWA in-house.<br>
            • <strong>Zero Vendor Tech Burn:</strong> Proprietary pipeline architecture eliminates expensive third-party SaaS licenses, protecting founder equity and investor capital.<br>
            • <strong>Incubation Power:</strong> Backed by Dialmate AI infrastructure and cloud credits.
          </p>
        </div>
        <div class="card-box accent-blue" style="padding: 12px 16px;">
          <h3 style="font-size: 13px; font-weight: 900; color: #ffffff; margin-bottom: 6px;">Rajrup — Co-Founder & CGO</h3>
          <p style="font-size: 10.5px; color: #e2e8f0; line-height: 1.45;">
            • <strong>Creator Syndication Network:</strong> Direct relationships with 50+ regional Tier-2/3 cricket & football micro-influencers (10k–70k followers).<br>
            • <strong>WhatsApp VIP Engine:</strong> Moderated fan broadcast groups driving organic peer-to-peer distribution with CAC under ₹3.80 per user.<br>
            • <strong>B2B Dealmaker:</strong> Pre-selling white-labeled bulletin feeds to sports blogs & betting analytics portals.
          </p>
        </div>
      </div>
      <div class="card-box" style="padding: 8px 12px; background: rgba(16, 185, 129, 0.08); border-left: 3px solid #10b981;">
        <p style="font-size: 9.5px; color: #a7f3d0; line-height: 1.35;">
          <strong>Founder Alignment:</strong> Co-founders hold a combined <strong>83.0% equity stake</strong> (41.5% each) with a 4-year vesting schedule and 100% IP assignment assigned to the entity.
        </p>
      </div>
    </div>
    <div class="slide-footer">
      <span>Team Execution | Technical Autonomy & Organic Virality</span>
      <span>Slide 02 of 12</span>
    </div>
  </div>

  <!-- SLIDE 3: The Macro Problem & The Unmet Middle -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[THE MACRO MARKET VOID]</div>
        <h2 class="slide-title">The Sports Attention Paradox in Digital India</h2>
        <div class="slide-subtitle">650M sports fans are trapped between ad-bloated scorecards and heavy OTT broadcasts.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="info-canvas">
        <svg viewBox="0 0 760 95">
          <rect x="15" y="10" width="220" height="75" rx="6" fill="#1e131d" stroke="#f87171" stroke-width="1.2"/>
          <text x="125" y="26" fill="#fca5a5" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">1. AD-BLOATED SCORECARDS</text>
          <text x="125" y="38" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="Plus Jakarta Sans">Cricbuzz / ESPNcricinfo</text>
          <text x="25" y="54" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">[X] 68.5% screen area lost to ads</text>
          <text x="25" y="65" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">[X] 4.2 clicks to find match context</text>
          <text x="125" y="80" fill="#f87171" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Ad & Cognitive Overload</text>

          <rect x="255" y="20" width="240" height="55" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.8"/>
          <text x="375" y="36" fill="#a7f3d0" font-size="9" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">THE UNMET MIDDLE: SPORT IQ</text>
          <text x="375" y="49" fill="#ffffff" font-size="7.5" font-weight="700" text-anchor="middle" font-family="Plus Jakarta Sans">15-Second AI Tactical Bulletins</text>
          <text x="375" y="62" fill="#34d399" font-size="7.5" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Zero Ads • Dual Parity • &lt; 2.5s</text>

          <rect x="515" y="10" width="225" height="75" rx="6" fill="#131d2e" stroke="#64748b" stroke-width="1.2"/>
          <text x="627" y="26" fill="#cbd5e1" font-size="8.5" font-weight="800" text-anchor="middle" font-family="Plus Jakarta Sans">2. OTT VIDEO STREAMERS</text>
          <text x="627" y="38" fill="#94a3b8" font-size="7" text-anchor="middle" font-family="Plus Jakarta Sans">JioHotstar / SonyLIV</text>
          <text x="525" y="54" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">[X] Requires 30+ mins sustained view</text>
          <text x="525" y="65" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">[X] Unusable in meetings or transit</text>
          <text x="627" y="80" fill="#cbd5e1" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Time-Intensive Commitment</text>
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
      <span>Market Opportunity | 15-Second High-Velocity Match Consumption</span>
      <span>Slide 03 of 12</span>
    </div>
  </div>

  <!-- SLIDE 4: Technical Infrastructure & Data Pipelines (USP) -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[TECHNICAL USP & INFRASTRUCTURE]</div>
        <h2 class="slide-title">End-to-End Data Pipelines & Data Lake Engine</h2>
        <div class="slide-subtitle">Automated Web Scrapers + APIs → Serverless Cloud Data Lake → Dialmate AI Layer</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="info-canvas">
        <svg viewBox="0 0 760 100">
          <rect x="15" y="10" width="165" height="80" rx="6" fill="#131d2e" stroke="#ef4444" stroke-width="1.2"/>
          <text x="97" y="25" fill="#ef4444" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">1. HYBRID INGESTION</text>
          <text x="25" y="40" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Twitter/X Live Commentary</text>
          <text x="25" y="51" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Cricket & Football API Feeds</text>
          <text x="25" y="62" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• RSS News & Web Parsers</text>
          <text x="97" y="76" fill="#ef4444" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">&lt; 1.2s Ingest Latency</text>

          <path d="M 180 50 L 205 50" stroke="#ef4444" stroke-width="1.5"/>

          <rect x="210" y="10" width="165" height="80" rx="6" fill="#131d2e" stroke="#3b82f6" stroke-width="1.2"/>
          <text x="292" y="25" fill="#3b82f6" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">2. CLOUD DATA LAKE</text>
          <text x="220" y="40" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Supabase / Cloudflare R2 Store</text>
          <text x="220" y="51" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Ball-by-ball Telemetry Logs</text>
          <text x="220" y="62" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Social Sentiment & Transcripts</text>
          <text x="292" y="76" fill="#3b82f6" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">Zero Vendor Overhead</text>

          <path d="M 375 50 L 400 50" stroke="#3b82f6" stroke-width="1.5"/>

          <rect x="405" y="10" width="165" height="80" rx="6" fill="#131d2e" stroke="#8b5cf6" stroke-width="1.2"/>
          <text x="487" y="25" fill="#8b5cf6" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">3. DIALMATE AI LAYER</text>
          <text x="415" y="40" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• LLM Context Synthesizer</text>
          <text x="415" y="51" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Match Pivot Point Extractor</text>
          <text x="415" y="62" fill="#e2e8f0" font-size="6.8" font-family="Plus Jakarta Sans">• Remotion Short Video Render</text>
          <text x="487" y="76" fill="#8b5cf6" font-size="7" font-weight="800" text-anchor="middle" font-family="JetBrains Mono">&lt; 2.5s Generation Engine</text>

          <path d="M 570 50 L 595 50" stroke="#8b5cf6" stroke-width="1.5"/>

          <rect x="600" y="10" width="150" height="80" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
          <text x="675" y="24" fill="#34d399" font-size="8.5" font-weight="900" text-anchor="middle" font-family="Plus Jakarta Sans">4. DUAL OUTPUTS</text>
          <text x="608" y="38" fill="#ffffff" font-size="6.8" font-weight="800" font-family="Plus Jakarta Sans">► SHORTS: 15s Videos</text>
          <text x="608" y="48" fill="#a7f3d0" font-size="6.2" font-family="Plus Jakarta Sans">&amp; 35-Word Micro-Cards</text>
          <text x="608" y="60" fill="#ffffff" font-size="6.8" font-weight="800" font-family="Plus Jakarta Sans">≡ LONG-FORM: Tactical</text>
          <text x="608" y="70" fill="#a7f3d0" font-size="6.2" font-family="Plus Jakarta Sans">Analytics Match Dossiers</text>
        </svg>
      </div>

      <div class="grid-2">
        <div class="card-box accent-red">
          <h3>Scrapers + Official APIs Hybrid Engine</h3>
          <p>Bypasses high commercial API costs by combining automated web parsers for live commentary with official APIs for telemetry validation.</p>
        </div>
        <div class="card-box accent-blue">
          <h3>Sub-2.5s AI Synthesis Moat</h3>
          <p>Dialmate AI prompt engineering compresses 4-hour matches into 35-word tactical nuggets and 15s video scripts instantly.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Technical Moat | Automated Scrapers & Serverless Data Lake</span>
      <span>Slide 04 of 12</span>
    </div>
  </div>

  <!-- SLIDE 5: Dual Output Engine (Shorts vs Long-Form) -->
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
        <div class="card-box accent-red" style="padding: 12px 14px; background: rgba(239, 68, 68, 0.08); border-left: 4px solid #ef4444;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <h3 style="font-size: 12px; font-weight: 900; color: #ffffff; margin: 0;">► Short-Form Content (High-Velocity Virality)</h3>
            <span style="font-size: 8px; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #fca5a5; padding: 2px 6px; border-radius: 4px;">SNACKABLE</span>
          </div>
          <div style="font-size: 9.5px; color: #e2e8f0; line-height: 1.4;">
            <p>• <strong>15-Second Short Videos:</strong> Automated video script rendering (via Remotion) for YouTube Shorts and Instagram Reels.</p>
            <p style="margin-top: 4px;">• <strong>35-Word Micro-Bulletins:</strong> Real-time tactical match summaries generated in &lt;2.5 seconds.</p>
            <p style="margin-top: 4px;">• <strong>1-Click WhatsApp Cards:</strong> High-contrast 1080x1920 infographics shared into fan broadcast groups.</p>
          </div>
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(239, 68, 68, 0.2); font-size: 8.5px; font-family: 'JetBrains Mono', monospace; color: #fca5a5;">
            Target Latency: &lt;2.5s | Organic K-Factor: 1.34
          </div>
        </div>

        <div class="card-box accent-blue" style="padding: 12px 14px; background: rgba(59, 130, 246, 0.08); border-left: 4px solid #3b82f6;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <h3 style="font-size: 12px; font-weight: 900; color: #ffffff; margin: 0;">≡ Long-Form Content (Deep Retention)</h3>
            <span style="font-size: 8px; font-weight: 800; background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 2px 6px; border-radius: 4px;">DEEP ANALYTICAL</span>
          </div>
          <div style="font-size: 9.5px; color: #e2e8f0; line-height: 1.4;">
            <p>• <strong>Tactical Deep-Dive Breakdowns:</strong> 400-word post-match analytical dossiers dissecting formations &amp; bowling deltas.</p>
            <p style="margin-top: 4px;">• <strong>Weekly Newsletter Digests:</strong> Executive email bulletins compiling tournament trends &amp; form indices.</p>
            <p style="margin-top: 4px;">• <strong>Fantasy Signals:</strong> Data-backed player matchup briefs for fantasy league players.</p>
          </div>
          <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid rgba(59, 130, 246, 0.2); font-size: 8.5px; font-family: 'JetBrains Mono', monospace; color: #93c5fd;">
            Avg Dwell Time: 8.4 Mins | Monetization: B2B API / Pro
          </div>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Content Engine | Snackable Virality & Deep Retention</span>
      <span>Slide 05 of 12</span>
    </div>
  </div>

  <!-- SLIDE 6: 50+ Micro-Creators & WhatsApp VIP Growth Engine -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[DISTRIBUTION & GO-TO-MARKET]</div>
        <h2 class="slide-title">50+ Regional Micro-Creators & WhatsApp VIP Engine</h2>
        <div class="slide-subtitle">Bypassing expensive Google/Meta ad spend to keep CAC under ₹3.80 per user.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-3">
        <div class="card-box accent-red">
          <div class="metric-stat red">50+</div>
          <div class="metric-label">MICRO-CREATORS</div>
          <p style="margin-top: 4px;">Tier-2/3 regional cricket &amp; football creators (10k-70k followers) contracted on monthly retainers.</p>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat green">1.34</div>
          <div class="metric-label">ORGANIC K-FACTOR</div>
          <p style="margin-top: 4px;">WhatsApp status shares drive organic user acquisition without paying ad agency commissions.</p>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">&lt; INR 3.80</div>
          <div class="metric-label">BLENDED CAC</div>
          <p style="margin-top: 4px;">Achieved through direct creator dealmaking and moderated WhatsApp VIP fan groups.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Growth Strategy | Decentralized Creator Distribution</span>
      <span>Slide 06 of 12</span>
    </div>
  </div>

  <!-- SLIDE 7: Exact Capital Deployment of ₹3.0L – ₹4.0L Ticket -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[EXACT COST & CAPITAL ALLOCATION]</div>
        <h2 class="slide-title">Where Your ₹3.0L – ₹4.0L Ticket Is Deployed</h2>
        <div class="slide-subtitle">Granular budget breakdown demonstrating zero-waste, high-ROI capital allocation.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box">
          <h3>Line-Item Deployment Breakdown</h3>
          <table class="pdf-table" style="margin-top: 4px;">
            <thead>
              <tr><th>CATEGORY</th><th class="num">₹3.0L TICKET</th><th class="num">₹4.0L TICKET</th><th class="num">SHARE</th></tr>
            </thead>
            <tbody>
              <tr><td>Micro-Creators &amp; Growth Retainers</td><td class="num">₹1,33,200</td><td class="num">₹1,77,600</td><td class="num">44.4%</td></tr>
              <tr><td>Data Lake &amp; Dialmate AI Engine</td><td class="num">₹69,900</td><td class="num">₹93,200</td><td class="num">23.3%</td></tr>
              <tr><td>Remotion Video &amp; WhatsApp Automation</td><td class="num">₹39,900</td><td class="num">₹53,200</td><td class="num">13.3%</td></tr>
              <tr><td>Working Capital &amp; Match Reserve</td><td class="num">₹39,900</td><td class="num">₹53,200</td><td class="num">13.3%</td></tr>
              <tr><td>Legal Pvt Ltd &amp; API Keys</td><td class="num">₹17,100</td><td class="num">₹22,800</td><td class="num">5.6%</td></tr>
              <tr class="highlight"><td>TOTAL ALLOCATION</td><td class="num">₹3,00,000</td><td class="num">₹4,00,000</td><td class="num">100.0%</td></tr>
            </tbody>
          </table>
        </div>
        <div class="card-box accent-red">
          <h3>3 Milestone Disbursement Tranches</h3>
          <p>• <strong>Tranche 1 (Closing): ₹1,00,000 - ₹1,33,000</strong> — Data Lake live, scrapers operational, 15 creator contracts signed.<br><br>
             • <strong>Tranche 2 (Month 2–3): ₹1,00,000 - ₹1,33,000</strong> — 25k MAU achieved, WhatsApp VIP network, B2B API beta.<br><br>
             • <strong>Tranche 3 (Month 4): ₹1,00,000 - ₹1,34,000</strong> — 50k MAU, Cashflow Breakeven reached.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Capital Allocation | Milestone-Gated Deployment</span>
      <span>Slide 07 of 12</span>
    </div>
  </div>

  <!-- SLIDE 8: Revenue Generation Engine & Cashflow Mechanics -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[REVENUE MECHANICS]</div>
        <h2 class="slide-title">How Revenue Floats: 4 Monetization Pillars</h2>
        <div class="slide-subtitle">Multi-stream cashflow protecting business stability without banner ad clutter.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-4">
        <div class="card-box accent-green">
          <div class="metric-stat green">35%</div>
          <div class="metric-label">B2B API FEEDS</div>
          <p style="margin-top: 4px;">White-labeled AI pulse feeds sold to sports blogs &amp; betting apps (₹25k-50k/mo).</p>
        </div>
        <div class="card-box accent-red">
          <div class="metric-stat red">35%</div>
          <div class="metric-label">CREATOR CO-SPONSORS</div>
          <p style="margin-top: 4px;">Native brand badges placed on viral match cards &amp; short video reels.</p>
        </div>
        <div class="card-box accent-blue">
          <div class="metric-stat blue">18%</div>
          <div class="metric-label">PRO SUBSCRIPTIONS</div>
          <p style="margin-top: 4px;">Ad-free 15s pulse &amp; fantasy prediction signals @ ₹99/month.</p>
        </div>
        <div class="card-box accent-green">
          <div class="metric-stat amber">12%</div>
          <div class="metric-label">SPORTS MERCH / AFFILIATE</div>
          <p style="margin-top: 4px;">Contextual merchandise &amp; fantasy contest referral commissions.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Monetization Model | High-Margin Multi-Stream Cashflow</span>
      <span>Slide 08 of 12</span>
    </div>
  </div>

  <!-- SLIDE 9: 12-Month Financial Model & Cashflow Breakeven -->
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
            <th>TIMELINE / MILESTONE</th>
            <th class="num">TARGET MAU</th>
            <th class="num">MONTHLY REVENUE</th>
            <th class="num">MONTHLY OPEX</th>
            <th class="num">NET PROFIT / (LOSS)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Month 1 (Build &amp; Infra)</td>
            <td class="num">2,500</td>
            <td class="num">INR 0</td>
            <td class="num">INR 65,000</td>
            <td class="num" style="color: #f87171;">(INR 65,000)</td>
          </tr>
          <tr>
            <td>Month 2 (Closed Beta)</td>
            <td class="num">8,500</td>
            <td class="num">INR 15,000</td>
            <td class="num">INR 75,000</td>
            <td class="num" style="color: #f87171;">(INR 60,000)</td>
          </tr>
          <tr>
            <td>Month 3 (Public Launch)</td>
            <td class="num">25,000</td>
            <td class="num">INR 65,000</td>
            <td class="num">INR 95,000</td>
            <td class="num" style="color: #f87171;">(INR 30,000)</td>
          </tr>
          <tr class="highlight">
            <td>Month 4 (Cashflow Breakeven)</td>
            <td class="num"><strong>50,000</strong></td>
            <td class="num"><strong>INR 1,65,000</strong></td>
            <td class="num"><strong>INR 1,15,000</strong></td>
            <td class="num" style="color: #4ade80;"><strong>+ INR 50,000</strong></td>
          </tr>
          <tr>
            <td>Month 6 (Institutional Seed Pitch)</td>
            <td class="num">130,000</td>
            <td class="num">INR 5,85,000</td>
            <td class="num">INR 1,85,000</td>
            <td class="num" style="color: #4ade80;">+ INR 4,00,000</td>
          </tr>
          <tr class="highlight">
            <td>Month 12 (Year 1 Exit Run-Rate)</td>
            <td class="num">450,000</td>
            <td class="num">INR 14,50,000 / mo</td>
            <td class="num">INR 4,20,000</td>
            <td class="num" style="color: #4ade80;">+ INR 10,30,000</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="slide-footer">
      <span>Financial Projections | Cashflow Positive by Month 4</span>
      <span>Slide 09 of 12</span>
    </div>
  </div>

  <!-- SLIDE 10: Cap Table & Investor Return Terms -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[CAP TABLE & RETURN TERMBALL]</div>
        <h2 class="slide-title">Cap Table Alignment & Investor Return Model</h2>
        <div class="slide-subtitle">83.0% Founder Majority Equity retained to ensure long-term focus toward Series A.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box">
          <h3>Post-Pre-Seed Cap Table Structure</h3>
          <table class="pdf-table" style="margin-top: 4px;">
            <thead>
              <tr><th>SHAREHOLDER</th><th class="num">EQUITY STAKE</th></tr>
            </thead>
            <tbody>
              <tr><td>Sayan Bhattacharya (Co-Founder &amp; CTO)</td><td class="num">41.5%</td></tr>
              <tr><td>Rajrup (Co-Founder &amp; CGO)</td><td class="num">41.5%</td></tr>
              <tr><td>ESOP Pool (Key Hires &amp; Lead Devs)</td><td class="num">8.0%</td></tr>
              <tr class="highlight"><td>3 Pre-Seed Angels (₹3L each for 3.0%)</td><td class="num">9.0% (3.0% each)</td></tr>
            </tbody>
          </table>
        </div>
        <div class="card-box accent-blue">
          <h3>Governance &amp; Investor Protections</h3>
          <p>• <strong>Vesting Schedule:</strong> 4-year vesting with 1-year cliff for both co-founders.<br><br>
             • <strong>100% IP Assignment:</strong> All scrapers, data lake logic, and code assigned directly to entity.<br><br>
             • <strong>Board Seats:</strong> 2 Founder Seats + 1 Investor Observer Seat.</p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Corporate Governance | Clean Cap Table & Founder Majority</span>
      <span>Slide 10 of 12</span>
    </div>
  </div>

  <!-- SLIDE 11: What Your ₹3.0L – ₹4.0L Ticket Unlocks -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[YOUR ANGEL TICKET RETURN]</div>
        <h2 class="slide-title">What Your ₹3.0L – ₹4.0L Ticket Delivers</h2>
        <div class="slide-subtitle">Participate with ₹3.00L – ₹4.00L for 3.0% – 4.0% Equity in India's Fastest AI Sports Bulletin.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box accent-green" style="padding: 12px 14px;">
          <h3 style="font-size: 12.5px; font-weight: 900; color: #ffffff; margin-bottom: 6px;">Angel Ticket Economics</h3>
          <p style="font-size: 10px; color: #e2e8f0; line-height: 1.45;">
            • <strong>3.0% – 4.0% Equity Stake</strong> at ₹1.00 Crore Post-Money Valuation.<br>
            • <strong>130,000 Active MAU</strong> target by Month 6.<br>
            • <strong>Cashflow Breakeven</strong> by Month 4 (₹1.65L MRR).<br>
            • <strong>Target 15x–20x Return</strong> at Series A round (Targeting ₹15 Cr–₹20 Cr valuation).
          </p>
        </div>
        <div class="card-box" style="padding: 12px 14px;">
          <h3 style="font-size: 12.5px; font-weight: 900; color: #ffffff; margin-bottom: 6px;">Immediate Execution Plan (Next 14 Days)</h3>
          <p style="font-size: 10px; color: #e2e8f0; line-height: 1.45;">
            • <strong>Day 1–3:</strong> Pvt Ltd incorporation &amp; IP assignment agreement.<br>
            • <strong>Day 4–7:</strong> Deploy live PWA with Data Lake &amp; Dialmate AI engine.<br>
            • <strong>Day 8–10:</strong> Contract 15–20 micro-creators &amp; seed WhatsApp VIP groups.<br>
            • <strong>Day 11–14:</strong> Roll out Closed Beta to first 5,000 sports fans.
          </p>
        </div>
      </div>
    </div>
    <div class="slide-footer">
      <span>Angel Opportunity | Clear Path to 15x–20x Exit</span>
      <span>Slide 11 of 12</span>
    </div>
  </div>

  <!-- SLIDE 12: Call to Action & Term Sheet Closing -->
  <div class="slide-page">
    <div class="slide-header">
      <div>
        <div class="slide-category">[TERM SHEET CLOSING]</div>
        <h2 class="slide-title">Let's Build India's Fastest Sports Bulletin Together</h2>
        <div class="slide-subtitle">Join Sayan Bhattacharya & Rajrup in capturing 650M digital sports fans.</div>
      </div>
      ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="brand-logo-img" alt="SPORT IQ">` : ''}
    </div>
    <div class="slide-body">
      <div class="grid-2">
        <div class="card-box accent-red" style="padding: 16px; text-align: center;">
          <h3 style="font-size: 15px; font-weight: 900; color: #ffffff; margin-bottom: 8px;">Sayan Bhattacharya</h3>
          <p style="font-size: 11px; color: #fca5a5; font-weight: 800; text-transform: uppercase;">Co-Founder &amp; CTO</p>
          <p style="font-size: 10px; color: #cbd5e1; margin-top: 6px;">Lead Architecture, Data Lake &amp; Dialmate AI</p>
        </div>
        <div class="card-box accent-blue" style="padding: 16px; text-align: center;">
          <h3 style="font-size: 15px; font-weight: 900; color: #ffffff; margin-bottom: 8px;">Rajrup</h3>
          <p style="font-size: 11px; color: #93c5fd; font-weight: 800; text-transform: uppercase;">Co-Founder &amp; CGO</p>
          <p style="font-size: 10px; color: #cbd5e1; margin-top: 6px;">Growth, 50+ Creator Syndication &amp; B2B Deals</p>
        </div>
      </div>
      <div class="card-box" style="padding: 10px 14px; text-align: center; background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981;">
        <h3 style="font-size: 13px; font-weight: 900; color: #34d399; margin: 0;">Ready to execute. Term Sheet &amp; IP Agreement ready for signing today.</h3>
      </div>
    </div>
    <div class="slide-footer">
      <span>SPORT IQ — High-Velocity Sports Bulletin | Incubated by Dialmate AI</span>
      <span>Slide 12 of 12</span>
    </div>
  </div>

</body>
</html>`;

const tempHtmlPath = path.join(__dirname, 'ANGEL_PITCH_DECK_3L_4L.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');
console.log('HTML slide deck saved to:', tempHtmlPath);

// Sync copy to public directory
const publicHtmlPath = path.join(__dirname, 'public', 'angel_pitch_3l_4l.html');
fs.writeFileSync(publicHtmlPath, htmlContent, 'utf8');

const outputPdfPath = path.join(__dirname, 'SPORT_IQ_ANGEL_PITCH_3L_4L.pdf');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outputPdfPath}" --no-pdf-header-footer "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;

console.log('Executing Chrome PDF generation command for Dedicated Angel Pitch Deck...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Dedicated Angel Pitch Deck PDF successfully generated at:', outputPdfPath);
  
  // Copy PDF to public folder for direct browser downloads
  const publicPdfPath = path.join(__dirname, 'public', 'SPORT_IQ_ANGEL_PITCH_3L_4L.pdf');
  fs.copyFileSync(outputPdfPath, publicPdfPath);
  console.log('Dedicated Angel PDF synced to public directory!');
} catch (err) {
  console.error('Error generating PDF with Chrome Headless:', err);
}
