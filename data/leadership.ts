export interface Leader {
  id: string;
  name: string;
  role: string;
  organization?: string;
  image: string;
  desc?: string;
  quote?: string;
  tag?: string;
  tagBg?: string;
  tagColor?: string;
  isHero?: boolean;
}

export const HERO_LEADER: Leader = {
  id: "patil",
  name: "Hon. Chandrakant (Dada) Patil",
  role: "President, Shri Swami Vivekanand Shikshan Sanstha, Kolhapur",
  organization: "Shri Swami Vivekanand Shikshan Sanstha",
  image: "/images/chandrakant-dada-patil-362x310-1-360x300.png",
  quote:
    "Our commitment is to empower every young engineering aspirant with world-class technical education, innovative mindset, and ethical values to drive India's industrial and economic resurgence.",
  isHero: true,
};

export const SANSTHA_LEADERS: Leader[] = [
  {
    id: "salunkhe",
    name: "Prin. Abhaykumar Salunkhe",
    role: "Executive Chairman",
    image: "/images/s3-2-360x300.jpg",
    desc: "Leading the Sanstha with profound devotion, carrying forward Dr. Bapuji Salunkhe's mission of selfless service and educational dissemination across Maharashtra.",
    tag: "Sanstha Executive",
    tagBg: "#eff6ff",
    tagColor: "#2563eb",
  },
  {
    id: "gawade-s",
    name: "Mrs. Shubhangi M. Gawade",
    role: "Secretary, Sanstha",
    image: "/images/secretary-1-360x300.png",
    desc: "Pioneering administrative excellence, quality benchmarks, and empowering female engineers with comprehensive scholarships and mentorship support.",
    tag: "Academic Administration",
    tagBg: "#fef2f2",
    tagColor: "#c01e2e",
  },
  {
    id: "gawade-k",
    name: "Mr. Kaustubh M. Gawade",
    role: "Chief Executive Officer",
    image: "/images/CEO2-362x310-1-360x300.png",
    desc: "Spearheading modern digital governance, high-tech campus infrastructure, AI innovation hubs, and cutting-edge corporate collaborations.",
    tag: "Digital Transformation",
    tagBg: "#f0fdf4",
    tagColor: "#16a34a",
  },
  {
    id: "bhirdi",
    name: "Mr. Viren D. Bhirdi",
    role: "Director, Sanstha",
    image: "/images/sir-360x300.png",
    desc: "Ensuring robust institutional governance, continuous quality audits, modern workshop expansions, and holistic student career development.",
    tag: "Institutional Growth",
    tagBg: "#fefce8",
    tagColor: "#ca8a04",
  },
];

export const PRINCIPAL_DATA = {
  name: "Dr. Suhas G. Sapate",
  title: "Principal, BSIET Kolhapur",
  image: "/images/IMG_20240725_141055-2-360x300.jpg",
  message:
    "At Dr. Bapuji Salunkhe Institute of Engineering & Technology, we believe that education is not mere accumulation of facts, but the training of the mind to innovate responsibly. We welcome every student to emerge as competent, self-reliant global engineers.",
};

export const SANSTHA_METRICS = [
  { value: "1954", label: "Legacy Foundation" },
  { value: "330+", label: "Institutes & Centers" },
  { value: "2L+", label: "Students Annually" },
  { value: "6468", label: "DTE Choice Code" },
];
