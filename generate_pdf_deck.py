import os
import sys
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter, landscape, A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.pdfgen import canvas
from reportlab.graphics.shapes import Drawing, Rect, String, Line, Circle
from reportlab.graphics.charts.piecharts import Pie
from reportlab.graphics.charts.lineplots import LinePlot

# Output path
OUTPUT_PDF = "e:\\sport-bulletinapp\\MCKINSEY_INVESTOR_PITCH_DECK.pdf"

# Custom Canvas for Header/Footer and Professional Slide Backgrounds
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            canvas.Canvas.showPage(self)
        canvas.Canvas.save(self)

    def draw_page_decorations(self, page_count):
        self.saveState()
        
        # Slide Background
        w, h = landscape(A4)
        
        if self._pageNumber == 1:
            # Dark Theme for Cover Page
            self.setFillColor(colors.HexColor("#0A0F1D"))
            self.rect(0, 0, w, h, fill=1, stroke=0)
            
            # Decorative Top/Left accent lines
            self.setFillColor(colors.HexColor("#06B6D4"))
            self.rect(0, h - 8, w, 8, fill=1, stroke=0)
            self.setFillColor(colors.HexColor("#2563EB"))
            self.rect(0, 0, 10, h, fill=1, stroke=0)
            
            # Bottom Gold Accent
            self.setFillColor(colors.HexColor("#F59E0B"))
            self.rect(w - 200, 0, 200, 6, fill=1, stroke=0)
        else:
            # Clean High-Readability Light Corporate Background with Crisp Structure
            self.setFillColor(colors.HexColor("#FAFAFC"))
            self.rect(0, 0, w, h, fill=1, stroke=0)
            
            # Header Bar
            self.setFillColor(colors.HexColor("#0A0F1D"))
            self.rect(0, h - 36, w, 36, fill=1, stroke=0)
            
            self.setFillColor(colors.HexColor("#06B6D4"))
            self.rect(0, h - 38, w, 2, fill=1, stroke=0)
            
            # Header Text
            self.setFont("Helvetica-Bold", 9)
            self.setFillColor(colors.HexColor("#FFFFFF"))
            self.drawString(30, h - 23, "PROJECT BALLR / DUKGO | CONFIDENTIAL INVESTOR STRATEGY")
            
            self.setFont("Helvetica", 8)
            self.setFillColor(colors.HexColor("#94A3B8"))
            self.drawRightString(w - 30, h - 23, "MCKINSEY-GRADE EXECUTIVE DOSSIER")
            
            # Footer Bar
            self.setStrokeColor(colors.HexColor("#E2E8F0"))
            self.setLineWidth(1)
            self.line(30, 28, w - 30, 28)
            
            self.setFont("Helvetica-Bold", 8)
            self.setFillColor(colors.HexColor("#64748B"))
            self.drawString(30, 16, "SAYAN BHATTACHARYA (TECH) & RAJRUP (GROWTH) | SEED ROUND ₹5,00,000 INR")
            
            page_text = f"Slide {self._pageNumber} of {page_count}"
            self.drawRightString(w - 30, 16, page_text)
            
        self.restoreState()


def create_deck():
    doc = SimpleDocTemplate(
        OUTPUT_PDF,
        pagesize=landscape(A4),
        leftMargin=30,
        rightMargin=30,
        topMargin=45,
        bottomMargin=35
    )
    
    styles = getSampleStyleSheet()
    
    # Custom Typography Styles
    cover_tag = ParagraphStyle(
        'CoverTag',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#06B6D4'),
        spaceAfter=10
    )
    
    cover_title = ParagraphStyle(
        'CoverTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=28,
        leading=34,
        textColor=colors.HexColor('#FFFFFF'),
        spaceAfter=12
    )
    
    cover_subtitle = ParagraphStyle(
        'CoverSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=13,
        leading=18,
        textColor=colors.HexColor('#94A3B8'),
        spaceAfter=25
    )
    
    slide_title = ParagraphStyle(
        'SlideTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=18,
        leading=22,
        textColor=colors.HexColor('#0A0F1D'),
        spaceAfter=4
    )
    
    slide_subhead = ParagraphStyle(
        'SlideSubhead',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=10,
        leading=14,
        textColor=colors.HexColor('#64748B'),
        spaceAfter=14
    )
    
    card_title = ParagraphStyle(
        'CardTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=colors.HexColor('#0F172A')
    )
    
    body_text = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#334155')
    )
    
    body_bold = ParagraphStyle(
        'BodyBoldCustom',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9,
        leading=13,
        textColor=colors.HexColor('#0F172A')
    )
    
    table_header = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#FFFFFF')
    )
    
    table_cell = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#1E293B')
    )
    
    table_cell_bold = ParagraphStyle(
        'TableCellBold',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=8.5,
        leading=11,
        textColor=colors.HexColor('#0F172A')
    )

    story = []
    
    # -------------------------------------------------------------
    # SLIDE 1: COVER SLIDE
    # -------------------------------------------------------------
    story.append(Spacer(1, 30))
    story.append(Paragraph("STRATEGIC VENTURE DOSSIER & SEED CAPITAL DEPLOYMENT", cover_tag))
    story.append(Paragraph("PROJECT BALLR / DUKGO<br/>Next-Gen Digital Sports Bulletin & Fandom Platform", cover_title))
    story.append(Paragraph("A hyper-lean, high-velocity operational blueprint to build, syndicate, and scale a cashflow-generative sports media ecosystem with ₹5,00,000 INR ($6,000 USD) Seed Capital.", cover_subtitle))
    
    # Key Highlights Box on Cover
    cover_meta = [
        [
            Paragraph("<font color='#06B6D4'><b>FUND REQUIREMENT</b></font><br/><font color='#FFFFFF' size=14><b>₹5,00,000 INR</b></font>", body_text),
            Paragraph("<font color='#10B981'><b>OPERATIONAL RUNWAY</b></font><br/><font color='#FFFFFF' size=14><b>6 Months to Self-Sustaining</b></font>", body_text),
            Paragraph("<font color='#F59E0B'><b>FIRST REVENUE TRIGGER</b></font><br/><font color='#FFFFFF' size=14><b>Month 3 (IPL/ISL Matchdays)</b></font>", body_text),
            Paragraph("<font color='#8B5CF6'><b>FOUNDING MOAT</b></font><br/><font color='#FFFFFF' size=14><b>Zero Tech/Agency Vendor Bleed</b></font>", body_text)
        ]
    ]
    t_cover = Table(cover_meta, colWidths=[185, 185, 185, 185])
    t_cover.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#11192E')),
        ('PADDING', (0,0), (-1,-1), 12),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#233354')),
        ('INNERGRID', (0,0), (-1,-1), 1, colors.HexColor('#233354')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_cover)
    story.append(Spacer(1, 30))
    story.append(Paragraph("<font color='#64748B'><b>Founders:</b> Sayan Bhattacharya (CTO & Head of Product) · Rajrup (CGO & Head of Syndication) | Confidential & Proprietary</font>", body_text))
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 2: EXECUTIVE SUMMARY & LEADERSHIP ASYMMETRY
    # -------------------------------------------------------------
    story.append(Paragraph("1. Executive Summary & Team Unfair Advantages", slide_title))
    story.append(Paragraph("Capital efficiency is achieved by eliminating third-party agency and development markups entirely.", slide_subhead))
    
    team_data = [
        [
            Paragraph("<b>Sayan Bhattacharya</b><br/><font color='#2563EB'><b>Co-Founder & Chief Technology Officer</b></font>", card_title),
            Paragraph("<b>Rajrup</b><br/><font color='#10B981'><b>Co-Founder & Chief Growth Officer</b></font>", card_title)
        ],
        [
            Paragraph("• <b>Architecture & Development:</b> Leads full-stack mobile PWA, cross-platform apps, and automated live match scraping engines.<br/>• <b>Real-Time Feeds:</b> Connects low-latency cricket/football WebSockets and AI summary card automation.<br/>• <b>Production & DevOps:</b> Manages cloud serverless deployments (Vercel/AWS/Supabase) with zero vendor management fees.", body_text),
            Paragraph("• <b>Influencer Dealmaking:</b> Direct relations with 50+ regional cricket and football micro-creators (10k-70k followers).<br/>• <b>Viral Social Syndication:</b> Memetic sports graphics, match-day reaction reels, and Telegram/WhatsApp community growth loops.<br/>• <b>Zero Agency Fee:</b> Direct creator contracts saving 30-40% standard agency commission overhead.", body_text)
        ],
        [
            Paragraph("<b>Cost Impact:</b> ₹10L+ value delivered internally for ₹1.2L cloud ops.", body_bold),
            Paragraph("<b>Cost Impact:</b> ₹6L+ marketing impact achieved with ₹2.1L creator fund.", body_bold)
        ]
    ]
    t_team = Table(team_data, colWidths=[370, 370])
    t_team.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#F1F5F9')),
        ('BACKGROUND', (0,1), (-1,1), colors.HexColor('#FFFFFF')),
        ('BACKGROUND', (0,2), (-1,2), colors.HexColor('#F8FAFC')),
        ('PADDING', (0,0), (-1,-1), 10),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(t_team)
    story.append(Spacer(1, 15))
    
    # Value Proposition Callout Box
    vp_data = [
        [
            Paragraph("<b>THE CORE PROPOSITION: 'THE 15-SECOND MATCH PULSE'</b><br/>"
                      "While legacy sports apps (Cricbuzz, ESPN) overwhelm users with 800-word text articles and heavy display banner ads, our platform delivers <b>instant 30-word visual bulletins, tactical takeaway cards, and match-momentum charts</b> optimized for modern attention spans across Web, App, Instagram, and WhatsApp.", body_text)
        ]
    ]
    t_vp = Table(vp_data, colWidths=[745])
    t_vp.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#EFF6FF')),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor('#3B82F6')),
        ('PADDING', (0,0), (-1,-1), 10),
    ]))
    story.append(t_vp)
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 3: QUIRKY & HIP BRAND NAMES (CURATED FOR CONSULTANT)
    # -------------------------------------------------------------
    story.append(Paragraph("2. Brand Identity & Quirky Naming Matrix", slide_title))
    story.append(Paragraph("Curated brand names crafted for high Gen-Z recall, domain availability, and viral word-of-mouth.", slide_subhead))
    
    names_data = [
        [
            Paragraph("Brand Name", table_header),
            Paragraph("Tagline / Hook", table_header),
            Paragraph("Brand Persona & Vibe", table_header),
            Paragraph("Consultant / Investor Pitch Fit", table_header)
        ],
        [
            Paragraph("<b>DUKGO</b><br/><font color='#0284C7' size=7.5><i>(Duck-Go)</i></font>", table_cell_bold),
            Paragraph("\"Sports without the fluff.\"", table_cell),
            Paragraph("Fast, quirky, cricket duck pun. Instantly memorable tech-first identity.", table_cell),
            Paragraph("<b>High Virality</b> (Great for Gen-Z & TikTok/Reels app)", table_cell)
        ],
        [
            Paragraph("<b>BALLR</b>", table_cell_bold),
            Paragraph("\"The raw pulse of the game.\"", table_cell),
            Paragraph("Premium, bold, street-style, urban athletic fandom and lifestyle appeal.", table_cell),
            Paragraph("<b>Top Pick for Mainstream Fandom</b> & Brand Collabs", table_cell)
        ],
        [
            Paragraph("<b>PITCHSLAP</b>", table_cell_bold),
            Paragraph("\"Hard stats, unfiltered banter.\"", table_cell),
            Paragraph("Edgy, opinionated, high-retention social commentary & instant bulletins.", table_cell),
            Paragraph("<b>High Social Engagement</b> (Twitter/X & Meme Page fit)", table_cell)
        ],
        [
            Paragraph("<b>SHORTPITCH</b>", table_cell_bold),
            Paragraph("\"Every match in 40 words.\"", table_cell),
            Paragraph("Clean, hyper-fast, Inshorts-for-sports utility positioning.", table_cell),
            Paragraph("<b>Utility & News First</b> (Corporate & mass appeal)", table_cell)
        ],
        [
            Paragraph("<b>GULLYTECH</b>", table_cell_bold),
            Paragraph("\"Street fandom to stadium data.\"", table_cell),
            Paragraph("Rooted Indian culture meets Silicon Valley data speed and fantasy analytics.", table_cell),
            Paragraph("<b>Desi / Tier-2 Indian Market</b> Penetration", table_cell)
        ]
    ]
    t_names = Table(names_data, colWidths=[100, 175, 270, 200])
    t_names.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0F172A')),
        ('PADDING', (0,0), (-1,-1), 8),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor('#FFFFFF'), colors.HexColor('#F8FAFC')]),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_names)
    story.append(Spacer(1, 15))
    
    rec_box = [
        [
            Paragraph("<b>RECOMMENDATION FOR CONSULTANT / MIDDLEMAN:</b><br/>"
                      "Pitch <b>BALLR</b> as the primary brand for high-end lifestyle & sponsorship appeal, or <b>DUKGO</b> as the flagship tech/utility identity. Both names resonate strongly with young digital sports fans.", body_text)
        ]
    ]
    t_rec = Table(rec_box, colWidths=[745])
    t_rec.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#FEF3C7')),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor('#F59E0B')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_rec)
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 4: CAPITAL ALLOCATION MATRIX (₹5,00,000 INR)
    # -------------------------------------------------------------
    story.append(Paragraph("3. Capital Allocation Matrix (₹5,00,000 INR)", slide_title))
    story.append(Paragraph("A zero-waste, high-leverage seed allocation guaranteeing 6 months of operational runway.", slide_subhead))
    
    budget_data = [
        [
            Paragraph("Strategic Category", table_header),
            Paragraph("Budget (INR)", table_header),
            Paragraph("Share (%)", table_header),
            Paragraph("Key Deliverables & Milestones", table_header)
        ],
        [
            Paragraph("<b>Influencer & Creator Seed Fund</b>", table_cell_bold),
            Paragraph("<b>₹2,10,000</b>", table_cell_bold),
            Paragraph("<b>42.0%</b>", table_cell),
            Paragraph("35 micro-creators (10k-70k followers) @ ₹3k-₹5k/drop + targeted Meta boost for viral bulletins.", table_cell)
        ],
        [
            Paragraph("<b>Product & Cloud Infrastructure</b>", table_cell_bold),
            Paragraph("<b>₹1,20,000</b>", table_cell_bold),
            Paragraph("<b>24.0%</b>", table_cell),
            Paragraph("Supabase/AWS serverless infrastructure, low-latency live score data feeds, CDN, OneSignal push notifications.", table_cell)
        ],
        [
            Paragraph("<b>Creative Assets & Motion Kits</b>", table_cell_bold),
            Paragraph("<b>₹70,000</b>", table_cell_bold),
            Paragraph("<b>14.0%</b>", table_cell),
            Paragraph("High-velocity motion templates, 3D match graphics, audio branding soundpacks, freelance sports writers.", table_cell)
        ],
        [
            Paragraph("<b>Contingency & Working Capital</b>", table_cell_bold),
            Paragraph("<b>₹70,000</b>", table_cell_bold),
            Paragraph("<b>14.0%</b>", table_cell),
            Paragraph("Emergency liquidity buffer for high-traffic tournament scale spikes (IPL/World Cup/ISL peaks).", table_cell)
        ],
        [
            Paragraph("<b>Legal, Trademark & Dev Accounts</b>", table_cell_bold),
            Paragraph("<b>₹30,000</b>", table_cell_bold),
            Paragraph("<b>6.0%</b>", table_cell),
            Paragraph("Pvt Ltd incorporation, GST setup, Trademark filing, Google Play ($25) and Apple Dev ($99) accounts.", table_cell)
        ],
        [
            Paragraph("<b>TOTAL SEED ALLOCATION</b>", table_cell_bold),
            Paragraph("<font color='#059669'><b>₹5,00,000</b></font>", table_cell_bold),
            Paragraph("<b>100.0%</b>", table_cell_bold),
            Paragraph("<b>Full 6-month operational runway leading to self-sufficiency.</b>", table_cell_bold)
        ]
    ]
    t_budget = Table(budget_data, colWidths=[180, 85, 60, 420])
    t_budget.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0F172A')),
        ('PADDING', (0,0), (-1,-1), 7),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [colors.HexColor('#FFFFFF'), colors.HexColor('#F8FAFC')]),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor('#ECFDF5')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_budget)
    story.append(Spacer(1, 15))
    
    # Efficiency Highlight
    eff_data = [
        [
            Paragraph("<b>MCKINSEY EFFICIENCY BENCHMARK:</b><br/>"
                      "Standard digital media startups burn ₹15-20 Lakhs on external dev agencies and generic PR firms. By having Sayan execute the tech architecture and Rajrup manage creator dealmaking directly, our <b>CAC is reduced by 68%</b> compared to industry averages.", body_text)
        ]
    ]
    t_eff = Table(eff_data, colWidths=[745])
    t_eff.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#F0FDF4')),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor('#10B981')),
        ('PADDING', (0,0), (-1,-1), 8),
    ]))
    story.append(t_eff)
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 5: MONTH-BY-MONTH TIMELINE & EXECUTION ROADMAP
    # -------------------------------------------------------------
    story.append(Paragraph("4. Month-by-Month Execution Roadmap", slide_title))
    story.append(Paragraph("Systematic 6-month operational execution path from architectural build to revenue self-sufficiency.", slide_subhead))
    
    timeline_data = [
        [
            Paragraph("Timeline", table_header),
            Paragraph("Engineering (Sayan Lead)", table_header),
            Paragraph("Growth & Distribution (Rajrup Lead)", table_header),
            Paragraph("Target Milestone & Revenue", table_header)
        ],
        [
            Paragraph("<b>Month 1</b><br/><font color='#64748B'>Architecture</font>", table_cell_bold),
            Paragraph("Build PWA + Flutter cross-platform app, integrate sports live score API & auto-bulletin generator.", table_cell),
            Paragraph("Map 100+ sports micro-creators, negotiate seed rates, prepare launch teaser graphics.", table_cell),
            Paragraph("<b>MVP Complete</b><br/>Pre-launch community: 1,000", table_cell)
        ],
        [
            Paragraph("<b>Month 2</b><br/><font color='#64748B'>Closed Beta</font>", table_cell_bold),
            Paragraph("Deploy closed beta on Android/Web, optimize push-notification latency to <3 seconds.", table_cell),
            Paragraph("15 creator seed drops, launch exclusive WhatsApp/Telegram alpha match bulletin channels.", table_cell),
            Paragraph("<b>5,000 Beta Users</b><br/>D1 Retention > 45%", table_cell)
        ],
        [
            Paragraph("<b>Month 3</b><br/><font color='#0284C7'><b>Public Launch</b></font>", table_cell_bold),
            Paragraph("Public release on Google Play & Web. Deploy automated matchday infographic cards.", table_cell),
            Paragraph("Scale creator syndication across Instagram Reels & X/Twitter match threads.", table_cell),
            Paragraph("<b>25,000 MAU</b><br/><font color='#059669'><b>First Rev: ₹25,000</b></font>", table_cell_bold)
        ],
        [
            Paragraph("<b>Month 4</b><br/><font color='#64748B'>Engagement</font>", table_cell_bold),
            Paragraph("Launch fantasy prediction polls, community battleground, and user badge gamification.", table_cell),
            Paragraph("Affiliate partnerships with fantasy sports (Dream11) & sportswear platforms.", table_cell),
            Paragraph("<b>45,000 MAU</b><br/><font color='#059669'><b>Rev: ₹70,000</b></font>", table_cell)
        ],
        [
            Paragraph("<b>Month 5</b><br/><font color='#64748B'>Monetization</font>", table_cell_bold),
            Paragraph("Deploy Hindi/vernacular bulletin feeds. Launch 'BALLR Pro' ad-free micro-subscription.", table_cell),
            Paragraph("Direct brand sponsorships for match-day bulletins with nutrition/beverage brands.", table_cell),
            Paragraph("<b>75,000 MAU</b><br/><font color='#059669'><b>Rev: ₹1,45,000</b></font>", table_cell)
        ],
        [
            Paragraph("<b>Month 6</b><br/><font color='#059669'><b>Self-Sufficient</b></font>", table_cell_bold),
            Paragraph("Complete telemetry audit, automate video card generation pipeline, scale serverless backend.", table_cell),
            Paragraph("Pitch validated metrics (CAC, LTV, Retention Cohorts) to institutional angel networks.", table_cell),
            Paragraph("<b>1,20,000 MAU</b><br/><font color='#059669'><b>MRR: ₹2,45,000</b></font><br/><b>Seed Round Pitch Ready</b>", table_cell_bold)
        ]
    ]
    t_timeline = Table(timeline_data, colWidths=[80, 230, 235, 200])
    t_timeline.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0F172A')),
        ('PADDING', (0,0), (-1,-1), 6),
        ('ROWBACKGROUNDS', (0,1), (-1,-1), [colors.HexColor('#FFFFFF'), colors.HexColor('#F8FAFC')]),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_timeline)
    story.append(PageBreak())

    # -------------------------------------------------------------
    # SLIDE 6: 12-MONTH FINANCIAL MODEL & REINVESTMENT FLYWHEEL
    # -------------------------------------------------------------
    story.append(Paragraph("5. 12-Month Financial Model & Profit Reinvestment", slide_title))
    story.append(Paragraph("Demonstrated trajectory from initial seed to cashflow positivity and long-term valuation scale.", slide_subhead))
    
    fin_data = [
        [
            Paragraph("Milestone Stage", table_header),
            Paragraph("MAU (Users)", table_header),
            Paragraph("Brand Sponsors", table_header),
            Paragraph("Affiliate Sales", table_header),
            Paragraph("Pro Micro-Subs", table_header),
            Paragraph("Total Monthly Revenue", table_header)
        ],
        [
            Paragraph("Month 1 (Build)", table_cell),
            Paragraph("—", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell)
        ],
        [
            Paragraph("Month 2 (Beta)", table_cell),
            Paragraph("5,000", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("₹0", table_cell)
        ],
        [
            Paragraph("Month 3 (Launch)", table_cell_bold),
            Paragraph("25,000", table_cell),
            Paragraph("₹15,000", table_cell),
            Paragraph("₹10,000", table_cell),
            Paragraph("₹0", table_cell),
            Paragraph("<font color='#0284C7'><b>₹25,000</b></font>", table_cell_bold)
        ],
        [
            Paragraph("Month 4 (Scale)", table_cell),
            Paragraph("45,000", table_cell),
            Paragraph("₹40,000", table_cell),
            Paragraph("₹25,000", table_cell),
            Paragraph("₹5,000", table_cell),
            Paragraph("<b>₹70,000</b>", table_cell_bold)
        ],
        [
            Paragraph("Month 5 (Growth)", table_cell),
            Paragraph("75,000", table_cell),
            Paragraph("₹80,000", table_cell),
            Paragraph("₹45,000", table_cell),
            Paragraph("₹20,000", table_cell),
            Paragraph("<b>₹1,45,000</b>", table_cell_bold)
        ],
        [
            Paragraph("Month 6 (Self-Sustaining)", table_cell_bold),
            Paragraph("1,20,000", table_cell_bold),
            Paragraph("₹1,30,000", table_cell),
            Paragraph("₹70,000", table_cell),
            Paragraph("₹45,000", table_cell),
            Paragraph("<font color='#059669'><b>₹2,45,000 / mo</b></font>", table_cell_bold)
        ],
        [
            Paragraph("Month 9 (Expansion)", table_cell),
            Paragraph("2,80,000", table_cell),
            Paragraph("₹2,80,000", table_cell),
            Paragraph("₹1,40,000", table_cell),
            Paragraph("₹1,10,000", table_cell),
            Paragraph("<font color='#059669'><b>₹5,30,000 / mo</b></font>", table_cell_bold)
        ],
        [
            Paragraph("<b>Month 12 (Target Run-Rate)</b>", table_cell_bold),
            Paragraph("<b>6,00,000</b>", table_cell_bold),
            Paragraph("<b>₹5,50,000</b>", table_cell_bold),
            Paragraph("<b>₹2,60,000</b>", table_cell_bold),
            Paragraph("<b>₹2,40,000</b>", table_cell_bold),
            Paragraph("<font color='#059669' size=10><b>₹10,50,000 / mo</b></font>", table_cell_bold)
        ]
    ]
    t_fin = Table(fin_data, colWidths=[140, 95, 110, 110, 110, 180])
    t_fin.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor('#0F172A')),
        ('PADDING', (0,0), (-1,-1), 5.5),
        ('ROWBACKGROUNDS', (0,1), (-1,-2), [colors.HexColor('#FFFFFF'), colors.HexColor('#F8FAFC')]),
        ('BACKGROUND', (0,-1), (-1,-1), colors.HexColor('#ECFDF5')),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor('#CBD5E1')),
        ('INNERGRID', (0,0), (-1,-1), 0.5, colors.HexColor('#E2E8F0')),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(t_fin)
    story.append(Spacer(1, 10))
    
    # Reinvestment Flywheel Table
    flywheel_data = [
        [
            Paragraph("<b>100% PROFIT REINVESTMENT ENGINE (MONTHS 6 - 18)</b><br/>"
                      "• <b>65% Reinvested in Growth:</b> Retainers for top-performing creators, regional campus ambassador networks, and targeted boost loops.<br/>"
                      "• <b>35% Reinvested in Tech Automation:</b> AI automated video bulletin generator, real-time voice commentary, and proprietary fantasy data models.<br/>"
                      "• <b>Institutional Scale Horizon:</b> Positioned for a ₹2.5 Cr – ₹5 Cr Seed/Series A institutional round with 1M+ active fans, targeted as a strategic acquisition for Disney-Reliance, Dream Sports, or Nazara.", body_text)
        ]
    ]
    t_flywheel = Table(flywheel_data, colWidths=[745])
    t_flywheel.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor('#EFF6FF')),
        ('BOX', (0,0), (-1,-1), 1.5, colors.HexColor('#2563EB')),
        ('PADDING', (0,0), (-1,-1), 7),
    ]))
    story.append(t_flywheel)

    # Build Document
    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"Successfully generated PDF at: {OUTPUT_PDF}")

if __name__ == '__main__':
    create_deck()
