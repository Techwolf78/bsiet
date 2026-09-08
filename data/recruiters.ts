export interface Recruiter {
  name: string;
  category: string;
  logoText: string;
}

export const CAMPUS_RECRUITERS: Recruiter[] = [
  { name: "Tata Motors", category: "Automotive & EV", logoText: "TATA MOTORS" },
  { name: "Bajaj Auto", category: "Automotive Manufacturing", logoText: "BAJAJ AUTO" },
  { name: "Kirloskar Oil Engines", category: "Industrial Engines & Power", logoText: "KIRLOSKAR" },
  { name: "Cummins India", category: "Power Systems", logoText: "CUMMINS" },
  { name: "Bharat Forge", category: "Forging & Metallurgy", logoText: "BHARAT FORGE" },
  { name: "Suzlon Energy", category: "Renewable Power", logoText: "SUZLON" },
  { name: "John Deere", category: "Heavy Agritech", logoText: "JOHN DEERE" },
  { name: "Infosys", category: "Cloud & Software", logoText: "INFOSYS" },
  { name: "TCS", category: "Enterprise IT Services", logoText: "TCS" },
  { name: "Wipro", category: "Digital Transformation", logoText: "WIPRO" },
  { name: "Tech Mahindra", category: "Network & AI Systems", logoText: "TECH MAHINDRA" },
  { name: "Capgemini", category: "Engineering Consulting", logoText: "CAPGEMINI" },
];

export const PLACEMENT_STATS = [
  { value: "90%+", label: "Placement Assistance" },
  { value: "500+", label: "Offers in 3 Years" },
  { value: "12 LPA", label: "Highest Package Offered" },
  { value: "20+", label: "Visiting MNCs & Corporates" },
];
