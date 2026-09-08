export interface Recruiter {
  name: string;
  category: string;
  logo: string;
}

export const CAMPUS_RECRUITERS: Recruiter[] = [
  { name: "Tata Motors", category: "Automotive & EV", logo: "/images/tata-120x81.png" },
  { name: "Bajaj Auto", category: "Automotive Manufacturing", logo: "/images/bajaj-1-120x81.jpg" },
  { name: "Kirloskar Oil Engines", category: "Industrial Engines & Power", logo: "/images/kirloskar-120x81.jpg" },
  { name: "Cummins India", category: "Power Systems", logo: "/images/cummins-120x81.jpg" },
  { name: "Bharat Forge", category: "Forging & Metallurgy", logo: "/images/bharat-120x81.jpg" },
  { name: "Suzlon Energy", category: "Renewable Power", logo: "/images/suzlon-120x81.jpg" },
  { name: "John Deere", category: "Heavy Agritech", logo: "/images/John-Deere-120x80.png" },
];

export const PLACEMENT_STATS = [
  { value: "90%+", label: "Placement Assistance" },
  { value: "500+", label: "Offers in 3 Years" },
  { value: "12 LPA", label: "Highest Package Offered" },
  { value: "20+", label: "Visiting MNCs & Corporates" },
];
