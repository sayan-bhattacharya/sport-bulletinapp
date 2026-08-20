import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to convert local image to base64
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
<title>SPORT IQ — Bilateral Founder Capital Advance & Merchandise Yield Agreement</title>
<style>
  @page {
    size: A4 portrait;
    margin: 12mm 14mm 12mm 14mm;
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
    background-color: #ffffff;
    color: #0f172a;
    font-size: 9.5pt;
    line-height: 1.45;
  }

  .doc-container {
    padding: 0;
    max-width: 100%;
  }

  .doc-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2.5px solid #dc2626;
    padding-bottom: 10px;
    margin-bottom: 14px;
  }

  .doc-title-block h1 {
    font-size: 15pt;
    font-weight: 900;
    color: #0f172a;
    letter-spacing: -0.3px;
    text-transform: uppercase;
  }

  .doc-title-block p {
    font-size: 8pt;
    font-weight: 700;
    color: #dc2626;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 2px;
  }

  .logo-img {
    height: 30px;
    width: auto;
  }

  .meta-box {
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-left: 4px solid #0284c7;
    border-radius: 6px;
    padding: 8px 12px;
    margin-bottom: 12px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    font-size: 8.5pt;
  }

  .meta-item strong {
    color: #334155;
  }

  .section-title {
    font-size: 10.5pt;
    font-weight: 800;
    color: #0f172a;
    border-bottom: 1px solid #cbd5e1;
    padding-bottom: 3px;
    margin-top: 12px;
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .section-title::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 13px;
    background: #dc2626;
    border-radius: 2px;
  }

  p, li {
    font-size: 9pt;
    color: #334155;
    margin-bottom: 6px;
    text-align: justify;
  }

  ul {
    padding-left: 16px;
    margin-bottom: 8px;
  }

  li {
    margin-bottom: 3px;
  }

  .highlight-card {
    background: #fef2f2;
    border: 1px solid #fecaca;
    border-left: 4px solid #dc2626;
    border-radius: 6px;
    padding: 8px 12px;
    margin: 8px 0;
  }

  .highlight-card h3 {
    font-size: 9.5pt;
    font-weight: 800;
    color: #991b1b;
    margin-bottom: 3px;
  }

  .highlight-card p {
    font-size: 8.5pt;
    color: #7f1d1d;
    margin-bottom: 0;
  }

  table.legal-table {
    width: 100%;
    border-collapse: collapse;
    margin: 8px 0;
    font-size: 8.5pt;
  }

  table.legal-table th {
    background: #0f172a;
    color: #ffffff;
    font-weight: 700;
    padding: 6px 8px;
    text-align: left;
    font-size: 8pt;
    text-transform: uppercase;
  }

  table.legal-table td {
    padding: 6px 8px;
    border-bottom: 1px solid #e2e8f0;
    color: #334155;
  }

  table.legal-table tr:nth-child(even) {
    background: #f8fafc;
  }

  table.legal-table tr.total-row td {
    background: #f0fdf4;
    font-weight: 800;
    color: #166534;
    border-top: 2px solid #16a34a;
  }

  .num {
    text-align: right;
    font-family: monospace;
    font-weight: 700;
  }

  .sig-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 20px;
    page-break-inside: avoid;
  }

  .sig-box {
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    padding: 10px 12px;
    background: #fafafa;
  }

  .sig-line {
    border-bottom: 1px dashed #64748b;
    height: 32px;
    margin-bottom: 6px;
  }

  .sig-name {
    font-weight: 800;
    font-size: 9pt;
    color: #0f172a;
  }

  .sig-title {
    font-size: 8pt;
    color: #64748b;
  }

  .page-break {
    page-break-before: always;
  }

  .footer-note {
    margin-top: 14px;
    padding-top: 6px;
    border-top: 1px solid #e2e8f0;
    font-size: 7.5pt;
    color: #94a3b8;
    text-align: center;
  }
</style>
</head>
<body>

<div class="doc-container">
  
  <!-- HEADER -->
  <div class="doc-header">
    <div class="doc-title-block">
      <h1>Bilateral Founder Capital Advance &amp; Merchandise Yield Agreement</h1>
      <p>Strictly Confidential • Legal &amp; Financial Governance Document</p>
    </div>
    ${sportIqLogoBase64 ? `<img src="${sportIqLogoBase64}" class="logo-img" alt="SPORT IQ">` : ''}
  </div>

  <!-- META BOX -->
  <div class="meta-box">
    <div class="meta-item"><strong>Capital Lender / Co-Founder &amp; CTO:</strong> Sayan Bhattacharya</div>
    <div class="meta-item"><strong>Procurement Partner / Co-Founder &amp; CGO:</strong> Rajrup</div>
    <div class="meta-item"><strong>Initial Personal Advance:</strong> ₹50,000 INR (Disbursed)</div>
    <div class="meta-item"><strong>Guaranteed Senior Repayment:</strong> ₹1,50,000 INR (3.0x Fixed Yield)</div>
    <div class="meta-item"><strong>Target Asset Class:</strong> Authenticated Memorabilia (Virat Kohli 49th Century COA Items)</div>
    <div class="meta-item"><strong>Repayment Priority:</strong> First-Draw Senior Debt (Pre-Dividend &amp; Pre-Profit)</div>
  </div>

  <!-- RECITALS -->
  <div class="section-title">1. Recitals &amp; Purpose of Agreement</div>
  <p>
    This Bilateral Agreement ("Agreement") is entered into as of <strong>August 20, 2026</strong>, by and between <strong>Sayan Bhattacharya</strong> ("Lender / CTO") and <strong>Rajrup</strong> ("Procurement Partner / CGO") regarding the venture <strong>SPORT IQ Technologies</strong>.
  </p>
  <p>
    <strong>WHEREAS</strong>, Sayan Bhattacharya has personally disbursed an initial capital advance of <strong>₹50,000 INR</strong> out of personal funds to Rajrup for the exclusive purpose of securing, framing, and certifying high-value sports memorabilia and merchandise assets—specifically including authenticated Virat Kohli 49th ODI Century commemorative items and official sports collectibles; and
  </p>
  <p>
    <strong>WHEREAS</strong>, both Co-Founders agree to establish strict, binding financial boundaries from Day 1 to ring-fence personal capital, guarantee Sayan's 3.0x return (<strong>₹1,50,000 INR</strong>), and ensure Rajrup's commercial and public/political activities remain 100% compliant, transparent, and separate from company equity dividends.
  </p>

  <!-- TERMS OF ADVANCE & YIELD -->
  <div class="section-title">2. Capital Advance &amp; Fixed Return Terms</div>
  <table class="legal-table">
    <thead>
      <tr>
        <th>FINANCIAL PARAMETER</th>
        <th>TERMS &amp; STIPULATIONS</th>
        <th class="num">AMOUNT (INR)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sayan's Initial Out-of-Pocket Advance</strong></td>
        <td>Direct personal cash/bank transfer for merchandise procurement &amp; COA framing.</td>
        <td class="num">₹50,000</td>
      </tr>
      <tr>
        <td><strong>Guaranteed Return Multiplier</strong></td>
        <td>Fixed 3.0x yield reflecting early inventory risk &amp; capital cost.</td>
        <td class="num">3.0x Multiplier</td>
      </tr>
      <tr class="total-row">
        <td><strong>TOTAL GUARANTEED SENIOR PAYOUT TO SAYAN</strong></td>
        <td><strong>First-Draw Senior Debt Repayment (Pre-Equity Dividend)</strong></td>
        <td class="num"><strong>₹1,50,000</strong></td>
      </tr>
    </tbody>
  </table>

  <!-- REVENUE WATERFALL & PRIORITY -->
  <div class="section-title">3. Revenue Repayment Waterfall &amp; Priority</div>
  <p>
    To ensure Sayan recovers his ₹1,50,000 payout promptly without interfering with core pre-seed angel capital (₹3.0L–4.0L / ₹9.0L), the payout shall be serviced through a dedicated <strong>First-Draw Revenue Waterfall</strong>:
  </p>
  <ul>
    <li><strong>Primary Repayment Stream (100% Allocation):</strong> 100% of gross profits generated from <em>Stream 4: Affiliate Sports Merch &amp; Authenticated Memorabilia Sales</em> shall be directly remitted to Sayan Bhattacharya until the cumulative payout of ₹1,50,000 INR is reached.</li>
    <li><strong>Secondary Repayment Stream (15% Setup Allocation):</strong> 15% of all initial B2B API syndication setup fees (Stream 1) shall serve as a secondary repayment backstop if merchandise sales lag.</li>
    <li><strong>Senior Debt Status:</strong> Sayan's ₹1,50,000 repayment is classified as a <strong>Pre-Tax Senior Inventory Loan</strong>. It takes strict legal priority over co-founder profit draws, equity distributions, or angel investor dividend payouts.</li>
  </ul>

  <div class="highlight-card">
    <h3>PROTECTION FOR PRE-SEED ANGEL INVESTORS</h3>
    <p>
      Angel investors contributing to the ₹3.0L–4.0L / ₹9.0L pre-seed round are informed that Sayan's ₹50,000 advance is a pre-existing inventory loan serviced exclusively by dedicated merchandise margins and B2B setup fees. Zero investor equity capital is diverted to service this personal advance.
    </p>
  </div>

  <div class="page-break"></div>

  <!-- GOVERNANCE, IP & INVENTORY LIEN -->
  <div class="section-title">4. Inventory Security, IP &amp; Custody Lien</div>
  <ul>
    <li><strong>Lien on Inventory:</strong> Sayan Bhattacharya retains a primary security lien on all physical merchandise assets, certificates of authenticity (COA), and digital twin NFTs/cards until the full ₹1,50,000 payout is completed.</li>
    <li><strong>Rajrup's Custody &amp; Accountability:</strong> Rajrup agrees to hold all merchandise in secure custody, maintain itemized sales ledgers, and provide weekly written updates on buyer inquiries, authentication status, and revenue receipts.</li>
    <li><strong>No Commingling of Funds:</strong> Rajrup explicitly agrees that no personal, political, or third-party funds shall be commingled with SPORT IQ merchandise revenue accounts.</li>
  </ul>

  <!-- SEPARATION FROM CORE CAP TABLE -->
  <div class="section-title">5. Independence from Core Cap Table &amp; Vesting</div>
  <p>
    This Agreement operates independently of the core SPORT IQ cap table. Both Co-Founders reaffirm their commitment to the primary venture equity split:
  </p>
  <ul>
    <li><strong>Sayan Bhattacharya (CTO):</strong> 41.5% Equity Stake (4-year vesting, 1-year cliff, 100% IP assignment).</li>
    <li><strong>Rajrup (CGO):</strong> 41.5% Equity Stake (4-year vesting, 1-year cliff).</li>
    <li><strong>ESOP Pool:</strong> 8.0% | <strong>Pre-Seed Angel Investors:</strong> 9.0% (3.0% per ₹3L ticket).</li>
  </ul>
  <p>
    Settlement or default under this Merchandise Advance Agreement shall not alter Sayan's 41.5% co-founder equity stake or CTO leadership mandate.
  </p>

  <!-- DISPUTE RESOLUTION & BINDING NATURE -->
  <div class="section-title">6. Binding Legal Execution</div>
  <p>
    This Agreement constitutes a legally binding obligation under the Indian Contract Act, 1872. Any disputes shall be resolved through amicable bilateral discussion or binding arbitration in Kolkata, West Bengal.
  </p>

  <!-- SIGNATURE BLOCK -->
  <div class="sig-grid">
    <div class="sig-box">
      <div class="sig-line"></div>
      <div class="sig-name">Sayan Bhattacharya</div>
      <div class="sig-title">Capital Lender / Co-Founder &amp; CTO</div>
      <div class="sig-title" style="margin-top: 4px;">Date: August 20, 2026</div>
    </div>
    <div class="sig-box">
      <div class="sig-line"></div>
      <div class="sig-name">Rajrup</div>
      <div class="sig-title">Procurement Partner / Co-Founder &amp; CGO</div>
      <div class="sig-title" style="margin-top: 4px;">Date: August 20, 2026</div>
    </div>
  </div>

  <div class="footer-note">
    SPORT IQ Technologies Pvt. Ltd. (In Formation) • Bilateral Founder Financial Agreement • Confidential
  </div>

</div>

</body>
</html>`;

const tempHtmlPath = path.join(__dirname, 'FOUNDER_MERCHANDISE_DEBT_AGREEMENT.html');
fs.writeFileSync(tempHtmlPath, htmlContent, 'utf8');
console.log('HTML agreement saved to:', tempHtmlPath);

// Sync copy to public folder
const publicHtmlPath = path.join(__dirname, 'public', 'sayan_rajrup_merchandise_agreement.html');
fs.writeFileSync(publicHtmlPath, htmlContent, 'utf8');

const outputPdfPath = path.join(__dirname, 'SAYAN_RAJRUP_MERCHANDISE_FINANCIAL_AGREEMENT.pdf');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --print-to-pdf="${outputPdfPath}" --no-pdf-header-footer "file:///${tempHtmlPath.replace(/\\/g, '/')}"`;

console.log('Executing Chrome PDF generation command for Founder Merchandise Debt Agreement...');
try {
  execSync(cmd, { stdio: 'inherit' });
  console.log('Founder Merchandise Financial Agreement PDF successfully generated at:', outputPdfPath);
  
  // Copy PDF to public folder for direct browser downloads
  const publicPdfPath = path.join(__dirname, 'public', 'SAYAN_RAJRUP_MERCHANDISE_FINANCIAL_AGREEMENT.pdf');
  fs.copyFileSync(outputPdfPath, publicPdfPath);
  console.log('Agreement PDF synced to public directory!');
} catch (err) {
  console.error('Error generating PDF with Chrome Headless:', err);
}
