# Walkthrough: BSIET Next.js (App Router) & Tailwind CSS v4 Architecture Migration

## Overview of the Modernization
We transformed the previous monolithic single-file `index.html` (5,100+ lines) into an enterprise-grade, modular **Next.js (App Router) + Tailwind CSS v4** web application.

---

## 1. Modular Directory Structure

```
vss-website/
├── app/
│   ├── layout.tsx              # Global layout with Plus Jakarta Sans & Inter, metadata, and header/footer
│   ├── page.tsx                # Homepage assembling modular section components
│   ├── globals.css             # Tailwind CSS v4 theme directives & custom tokens
│   ├── about/page.tsx          # Sanstha heritage, founder vision, leadership & governance
│   ├── academics/page.tsx      # Degree & Diploma curriculum, academic calendar & committees
│   ├── admissions/page.tsx     # Eligibility criteria, DTE choice code 6468, fees & FRA sheets
│   ├── departments/
│   │   ├── page.tsx            # Department & laboratory directory
│   │   └── [slug]/page.tsx     # Dynamic individual department deep-dives (5 branches)
│   ├── placements/page.tsx     # TPO message, placement track record & recruiter marquee
│   └── contact/page.tsx        # Campus location, inquiry form & Google Maps integration
├── components/
│   ├── layout/
│   │   ├── HeaderContainer.tsx # Client state orchestrator for header & modals
│   │   ├── TopAnnouncement.tsx # Slate announcement bar with pulsing Mock Test link
│   │   ├── UtilityGoldBar.tsx  # Golden utility strip with contact phone/email/maps & socials
│   │   ├── InstitutionalHeader.tsx # Founder portrait, college title, dual DBATU/MSBTE badges
│   │   ├── Navbar.tsx          # Sticky royal navy navbar with 8 categories & rich dropdowns
│   │   └── Footer.tsx          # Multi-column footer with statutory links & campus maps
│   ├── home/
│   │   ├── HeroSection.tsx     # DTE 6468 spotlight, headline & dual CTAs
│   │   ├── StatStrip.tsx       # 1954 legacy, 330+ institutes, 90%+ placements
│   │   ├── BentoLeadership.tsx # Gen-Z Bento Grid with Hon. Chandrakant Patil
│   │   ├── AcademicPrograms.tsx# B.Tech Degree & Diploma interactive tabs with custom SVGs
│   │   ├── DepartmentLabs.tsx  # 5 high-res lab cards with frosted glass badges
│   │   ├── PlacementRecruiters.tsx # Recruiter statistics & infinite logo marquee
│   │   ├── CampusLife.tsx      # Infrastructure & campus facilities
│   │   └── ContactSection.tsx  # Visit Kolhapur campus, phone desk & map frame
│   └── modals/
│       ├── EnquiryModal.tsx    # Admission enquiry modal with WhatsApp dispatch
│       ├── BrochureModal.tsx   # PDF syllabus & prospectus download modal
│       └── ProgramDetailsModal.tsx # Degree/Diploma program details modal
├── data/
│   ├── navigation.ts           # Top-level and dropdown navigation items & Google Maps URL
│   ├── leadership.ts           # Leadership profiles, quotes, and impact metrics
│   ├── programs.ts             # Choice codes, intakes, durations, and eligibility
│   ├── departments.ts          # Lab equipment, descriptions, and HOD details
│   └── recruiters.ts           # Corporate partner list and placement metrics
└── public/
    └── images/                 # All 41 high-resolution images & verified lab photos
```

---

## 2. Key Highlights of the Architecture

### Seamless Content Management
- Content is decoupled from presentation: editing leadership quotes, choice codes, course intake, or lab names is as simple as updating clean TypeScript files in `data/`.

### Page-Wise Modular Routing
- In addition to the comprehensive homepage, visitors can now deep-link directly into dedicated pages:
  - `/about`
  - `/academics`
  - `/admissions`
  - `/departments`
  - `/departments/computer-engineering`
  - `/departments/aiml`
  - `/departments/mechanical-engineering`
  - `/departments/electrical-engineering`
  - `/departments/civil-engineering`
  - `/placements`
  - `/contact`

### Performance & Compilation Verification
- Ran full production build (`npm run build`) with Next.js Turbopack:
  - All 15 static routes pre-rendered with zero errors (`15/15`).
  - Strict TypeScript type-checking passed (`Finished TypeScript in 20.5s`).
  - Next.js Turbopack compilation succeeded with 0 warnings.

### Live Production Deployment
- Pushed commit `5f86aac` to GitHub: [Techwolf78/bsiet](https://github.com/Techwolf78/bsiet) on branch `main`.
- Vercel automatically deploys the Next.js application to production.
