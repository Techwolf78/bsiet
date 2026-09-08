export interface Program {
  id: string;
  name: string;
  type: "degree" | "diploma";
  dteCode: string;
  affiliation: string;
  intake: number;
  duration: string;
  eligibility: string;
  description: string;
  iconType: "cse" | "aiml" | "mech" | "elec" | "civil";
  badgeColor: string;
}

export const DEGREE_PROGRAMS: Program[] = [
  {
    id: "cse",
    name: "Computer Science & Engineering",
    type: "degree",
    dteCode: "646824210",
    affiliation: "DBATU Lonere",
    intake: 60,
    duration: "4 Years",
    eligibility: "12th Sci (CET/JEE)",
    description:
      "Comprehensive curriculum spanning Data Structures, Algorithms, Cloud Computing, Full-Stack Software Development, Cyber Security, and DevOps Engineering.",
    iconType: "cse",
    badgeColor: "#2563eb",
  },
  {
    id: "aiml",
    name: "Artificial Intelligence & Machine Learning",
    type: "degree",
    dteCode: "646891110",
    affiliation: "DBATU Lonere",
    intake: 60,
    duration: "4 Years",
    eligibility: "12th Sci (CET/JEE)",
    description:
      "Cutting-edge specialization in Deep Neural Networks, Natural Language Processing (NLP), Computer Vision, Robotics, Autonomous Systems, and Generative AI.",
    iconType: "aiml",
    badgeColor: "#7c3aed",
  },
  {
    id: "mech",
    name: "Mechanical Engineering",
    type: "degree",
    dteCode: "646861210",
    affiliation: "DBATU Lonere",
    intake: 60,
    duration: "4 Years",
    eligibility: "12th Sci (CET/JEE)",
    description:
      "Industry 4.0 curriculum encompassing CNC Machining Centers, CAD/CAM/CAE Studios, Robotics Automation, Thermodynamics, and Finite Element Analysis.",
    iconType: "mech",
    badgeColor: "#d97706",
  },
  {
    id: "elec",
    name: "Electrical Engineering",
    type: "degree",
    dteCode: "646829310",
    affiliation: "DBATU Lonere",
    intake: 60,
    duration: "4 Years",
    eligibility: "12th Sci (CET/JEE)",
    description:
      "Modern electrical curriculum emphasizing Smart Grid Systems, Electric Vehicle (EV) Power Drives, Renewable Solar Energy, Power Electronics, and High-Voltage Switchgear.",
    iconType: "elec",
    badgeColor: "#0284c7",
  },
  {
    id: "civil",
    name: "Civil Engineering",
    type: "degree",
    dteCode: "646819110",
    affiliation: "DBATU Lonere",
    intake: 60,
    duration: "4 Years",
    eligibility: "12th Sci (CET/JEE)",
    description:
      "Advanced structural engineering, Total Station Digital Surveying, Environmental Water Systems, Soil Mechanics, and Green Infrastructure Architecture.",
    iconType: "civil",
    badgeColor: "#059669",
  },
];

export const DIPLOMA_PROGRAMS: Program[] = [
  {
    id: "poly-cse",
    name: "Diploma in Computer Engineering",
    type: "diploma",
    dteCode: "646824510",
    affiliation: "MSBTE Mumbai",
    intake: 60,
    duration: "3 Years / Direct 2nd Year",
    eligibility: "10th / 12th Pass",
    description:
      "Hands-on foundational engineering in Python, Java, Web Technologies, Computer Hardware Networking, and Relational Database Systems.",
    iconType: "cse",
    badgeColor: "#2563eb",
  },
  {
    id: "poly-mech",
    name: "Diploma in Mechanical Engineering",
    type: "diploma",
    dteCode: "646861210",
    affiliation: "MSBTE Mumbai",
    intake: 60,
    duration: "3 Years / Direct 2nd Year",
    eligibility: "10th / 12th Pass",
    description:
      "Rigorous workshop practice, Machine Drawing, Lathe & Milling operations, Automotive Mechanics, and Quality Control inspection.",
    iconType: "mech",
    badgeColor: "#d97706",
  },
  {
    id: "poly-civil",
    name: "Diploma in Civil Engineering",
    type: "diploma",
    dteCode: "646819110",
    affiliation: "MSBTE Mumbai",
    intake: 60,
    duration: "3 Years / Direct 2nd Year",
    eligibility: "10th / 12th Pass",
    description:
      "Construction Technology, Surveying, Quantity Estimating, Concrete Quality Control, and CAD civil drafting.",
    iconType: "civil",
    badgeColor: "#059669",
  },
  {
    id: "poly-elec",
    name: "Diploma in Electrical Engineering",
    type: "diploma",
    dteCode: "646829310",
    affiliation: "MSBTE Mumbai",
    intake: 60,
    duration: "3 Years / Direct 2nd Year",
    eligibility: "10th / 12th Pass",
    description:
      "Electrical circuits, AC/DC machines maintenance, Substation installation, and Domestic & Industrial wiring standards.",
    iconType: "elec",
    badgeColor: "#0284c7",
  },
];
