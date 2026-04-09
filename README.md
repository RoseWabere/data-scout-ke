# Data Scout KE - Company Website

**Business-focused website for Data Scout KE — production-grade data engineering and AI systems consultancy.**

## 🎯 Strategic Positioning

This is NOT a portfolio clone. This is a **commercial vehicle** that:
- Sells services and solutions
- Positions Data Scout KE as a systems builder for organizations
- Emphasizes business value and ROI

**Core message:** "We deliver real-time data platforms for African enterprises."

## 🏗️ Architecture

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS (business theme)
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

### Project Structure
```
datascout-company/
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Business-focused nav
│   ├── Footer.tsx           # Company footer
│   └── sections/
│       ├── Hero.tsx         # Business positioning
│       ├── Solutions.tsx    # Service offerings
│       ├── CaseStudies.tsx  # Client results
│       ├── About.tsx        # Company story
│       └── Contact.tsx      # Lead capture
└── public/
    └── images/              # Company assets
```

## 🚀 Quick Start

### Installation
```bash
cd datascout-company
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3001](http://localhost:3001)

### Build for Production
```bash
npm run build
npm start
```

## 📊 Content Strategy

### Tone Shift from Personal Site
| Personal Site | Company Site |
|--------------|--------------|
| "I built a Kafka + Spark pipeline..." | "We deliver real-time data platforms..." |
| Deep technical breakdown | Outcome + ROI focus |
| Engineering decisions | Business impact |
| Architecture diagrams | Results metrics |

### Sections

#### 1. Hero
- **Focus:** Business outcomes
- **Message:** We solve problems for enterprises
- **CTA:** "Start a Project"

#### 2. Solutions
- **Format:** Service cards with pricing ranges
- **Categories:**
  - Real-Time Data Pipelines ($3,500+)
  - AI Decision Systems ($5,000+)
  - Analytics Dashboards ($2,500+)
  - Compliance Analytics ($4,000+)
  - Geospatial Systems ($3,000+)
  - Custom Integrations ($2,000+)

#### 3. Case Studies
- **Same projects as personal site, reframed:**
  - Challenge → Solution → Results
  - Emphasis on business metrics
  - Industry context
  - ROI where applicable

#### 4. About
- **Founder bio** (linked to personal site)
- **Why we're different** (governance + Africa-first)
- **Industries served**
- **Partnership model**

#### 5. Contact
- **Lead capture form**
- **WhatsApp (obfuscated)**
- **LinkedIn link**
- **Engagement process**

## 🎨 Design System

### Color Palette (Business Theme)
```css
--brand-navy: #1F3864
--brand-navy-dark: #122040
--brand-teal: #0D7377
--brand-teal-light: #14A085
```

### Typography
- **Display:** Syne (headings, bold)
- **Body:** DM Sans (professional, readable)

### Visual Style
- Light theme (white background)
- Professional, corporate feel
- Clean cards with hover effects
- Trust signals (stats, industries)

## 🔗 Integration with Personal Site

### Linking Strategy
```
Company Site → Personal Site:
"Meet the engineer behind the systems" (About section)

Personal Site → Company Site:
"Work with me / My company" (Contact section)
```

### Shared Backend (Future)
Both sites can pull from:
- Same GitHub repos for case studies
- Same MDX content (different rendering)
- Unified CMS (Sanity/Contentful)

## 📈 Conversion Goals

### Primary Goal: Generate Leads
**Conversions:**
- Contact form submissions
- WhatsApp clicks
- LinkedIn profile views

### Success Metrics
- Time on site > 1.5 minutes
- Solutions page views
- Case studies engagement
- Contact form completion rate

## 📝 Content Guidelines

### Case Studies
- **Structure:** Challenge → Solution → Results
- **Length:** 300-500 words per case study
- **Tone:** Business-focused, outcome-driven
- **Metrics:** Always include quantifiable results

### Solutions
- **Format:** Problem statement + our approach
- **Include:** Features, pricing range, tech stack
- **CTA:** "Discuss Your Project"

## 🔒 Security

- Contact form via Formspree (server-side)
- WhatsApp number obfuscated (array split)
- No exposed emails
- Rate limiting via Formspree

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
```

### Custom Domain
Recommended: `datascoutke.com` or `datascoutke.ai`

## 🎯 SEO Optimization

### Meta Tags
- Title: "Data Scout KE | Data Engineering & AI Systems | Nairobi, Kenya"
- Keywords: data engineering Kenya, AI systems Nairobi, ETL pipeline
- Description: Production-grade systems for African enterprises

### Structured Data
Add JSON-LD for:
- Organization
- LocalBusiness
- Service offerings

## 📞 Lead Qualification

### Contact Form Fields
1. Name (required)
2. Email (required)
3. Organization (optional but encouraged)
4. Project description (required)

### Response Protocol
- Acknowledge within 4 hours
- Initial consultation within 48 hours
- Proposal delivery within 1 week

## 🚧 Future Enhancements

### Phase 2
- [ ] Client testimonials slider
- [ ] Pricing calculator
- [ ] Blog integration (aggregated from personal site)
- [ ] Newsletter signup

### Phase 3
- [ ] Client portal
- [ ] Project tracking dashboard
- [ ] Online proposal system
- [ ] Payment integration

## 📊 Analytics Setup

### Recommended Tools
- **Google Analytics 4** - Traffic & behavior
- **Hotjar** - User experience insights
- **LinkedIn Insight Tag** - B2B conversion tracking

### Key Metrics to Track
- Page views (Solutions, Case Studies, Contact)
- Form submission rate
- WhatsApp click-through rate
- Avg. time on site
- Bounce rate by section

## 🔄 Relationship with Personal Site

| Personal Site | Company Site |
|--------------|--------------|
| **Purpose** | Technical authority | Commercial vehicle |
| **Audience** | Recruiters, engineers | Clients, enterprises |
| **Content** | Deep technical | Business outcomes |
| **CTA** | "Hire me" | "Work with us" |
| **Tone** | First person | Company voice |

**Both sites reinforce each other:**
- Personal site proves technical capability
- Company site converts that capability into business

## 📞 Support

For questions about this codebase:
- Email: contact@datascoutke.com (setup required)
- LinkedIn: linkedin.com/in/rosewabere
- WhatsApp: [obfuscated in code]

---

**Remember:** This is a sales tool. Every element serves the conversion goal of turning visitors into qualified leads.
