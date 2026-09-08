export interface SubLink {
  label: string;
  href: string;
}

export interface SubMenuSection {
  sectionLabel?: string;
  links: SubLink[];
}

export interface NavItem {
  label: string;
  href: string;
  isMega?: boolean;
  sections?: SubMenuSection[];
  columns?: { title: string; links: SubLink[] }[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    sections: [
      {
        sectionLabel: "Institute Heritage",
        links: [
          { label: "About Sanstha (1954 Legacy)", href: "/about#sanstha" },
          { label: "About BSIET Kolhapur", href: "/about#institute" },
          { label: "Vision, Mission & Goals", href: "/about#vision" },
          { label: "Founder Dr. Bapuji Salunkhe", href: "/about#founder" },
        ],
      },
      {
        sectionLabel: "Leadership & Messages",
        links: [
          { label: "President's Message (Hon. Chandrakant Patil)", href: "/about#president" },
          { label: "Executive Chairman's Thoughts", href: "/about#chairman" },
          { label: "Word from Secretary & CEO", href: "/about#secretary" },
          { label: "Principal's Desk", href: "/about#principal" },
        ],
      },
      {
        sectionLabel: "Administration & Governance",
        links: [
          { label: "Governing Body & Administration", href: "/about#governance" },
          { label: "Mandatory Disclosure & AICTE Reports", href: "/about#disclosures" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    sections: [
      {
        links: [
          { label: "Programs Offered (Degree & Diploma)", href: "/academics#programs" },
          { label: "Academic Calendar & Curriculum", href: "/academics#calendar" },
          { label: "Merit Lists & Cutoffs", href: "/academics#merit" },
          { label: "Academic Committees & Best Practices", href: "/academics#committees" },
          { label: "Academic Audit Reports", href: "/academics#audit" },
        ],
      },
    ],
  },
  {
    label: "Departments",
    href: "/departments",
    isMega: true,
    columns: [
      {
        title: "Degree Programs (DBATU)",
        links: [
          { label: "Computer Science & Engineering", href: "/departments/computer-engineering" },
          { label: "Artificial Intelligence & ML", href: "/departments/aiml" },
          { label: "Mechanical Engineering", href: "/departments/mechanical-engineering" },
          { label: "Electrical Engineering", href: "/departments/electrical-engineering" },
          { label: "Civil Engineering", href: "/departments/civil-engineering" },
        ],
      },
      {
        title: "Diploma Programs (MSBTE)",
        links: [
          { label: "Diploma in Computer Engineering", href: "/departments/computer-engineering" },
          { label: "Diploma in Mechanical Engineering", href: "/departments/mechanical-engineering" },
          { label: "Diploma in Civil Engineering", href: "/departments/civil-engineering" },
          { label: "Diploma in Electrical Engineering", href: "/departments/electrical-engineering" },
        ],
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    sections: [
      {
        links: [
          { label: "Admission Process 2026-27", href: "/admissions#process" },
          { label: "Eligibility & Choice Codes (DTE: 6468)", href: "/admissions#eligibility" },
          { label: "Fees Structure", href: "/admissions#fees" },
          { label: "FRA-Fees Approved Sheets", href: "/admissions#fra" },
          { label: "MahaDBT Scholarships & Concessions", href: "/admissions#scholarships" },
          { label: "Online Admission Enquiry »", href: "/contact#enquiry" },
        ],
      },
    ],
  },
  {
    label: "Placements & Alumni",
    href: "/placements",
    sections: [
      {
        sectionLabel: "Training & Placement (TPO)",
        links: [
          { label: "Message from TPO", href: "/placements#message" },
          { label: "Placement Track Record & Stats", href: "/placements#stats" },
          { label: "Our Prominent Recruiters", href: "/placements#recruiters" },
          { label: "TPO Activities & Industrial Training", href: "/placements#activities" },
        ],
      },
      {
        sectionLabel: "Alumni Network",
        links: [
          { label: "Alumni Association & Portal", href: "/placements#alumni" },
          { label: "Notable Alumni Success Stories", href: "/placements#stories" },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    href: "/#facilities",
    sections: [
      {
        links: [
          { label: "Modern Labs & Workshops", href: "/#departments" },
          { label: "Library, Sports & Hostel", href: "/#facilities" },
          { label: "Life@BSIET Student Activities", href: "/#facilities" },
          { label: "News, Circulars & Events", href: "/#facilities" },
          { label: "Code of Conduct & Anti-Ragging", href: "/about#conduct" },
        ],
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const GMAPS_URL =
  "https://www.google.com/maps/place/Dr.+Bapuji+Salunke+Institute+Of+Engineering+%26+Technology/data=!4m2!3m1!1s0x0:0xa3a0f0995523d6f1?sa=X&ved=1t:2428&ictx=111";
