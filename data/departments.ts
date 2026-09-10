export interface Department {
  slug: string;
  name: string;
  shortName: string;
  image: string;
  tag: string;
  keyLabs: string;
  overview: string;
  hodName: string;
  hodTitle: string;
}

export const DEPARTMENTS: Department[] = [
  {
    slug: "computer-engineering",
    name: "Computer Engineering",
    shortName: "CSE",
    image: "/images/modern-computer-lab.jpg",
    tag: "Cloud & HPC",
    keyLabs:
      "Cloud Computing Lab, Advanced Java & Python, Database Systems, Cyber Security Lab.",
    overview:
      "The Department of Computer Engineering delivers cutting-edge instruction in software architecture, cloud platforms, and full-stack enterprise development, supported by high-speed fiber-backed computing clusters.",
    hodName: "Dr. S. K. Patil",
    hodTitle: "Head of Computer Engineering Department",
  },
  {
    slug: "aiml",
    name: "AI & Machine Learning",
    shortName: "AI & ML",
    image: "/images/modern-aiml-lab.jpg",
    tag: "AI & GPU Labs",
    keyLabs:
      "Deep Learning GPU Workstations, Data Science Hub, Robotics & Vision Testing.",
    overview:
      "Equipped with dedicated NVIDIA GPU workstations, the AI & ML department fosters research in generative neural models, robotic vision, natural language understanding, and automated intelligence pipelines.",
    hodName: "Prof. P. R. Deshmukh",
    hodTitle: "Head of AI & ML Department",
  },
  {
    slug: "mechanical-engineering",
    name: "Mechanical Engineering",
    shortName: "Mechanical",
    image: "/images/modern-mechanical-lab.jpg",
    tag: "CNC & CAD/CAM",
    keyLabs:
      "CNC Machine Center, CAD/CAM Studio, Fluid Mechanics & Heat Transfer, Metallurgy Lab.",
    overview:
      "Featuring high-precision CNC machining centers and advanced engineering design workstations, our mechanical department bridges core physics with modern automated manufacturing.",
    hodName: "Prof. V. M. Jadhav",
    hodTitle: "Head of Mechanical Engineering Department",
  },
  {
    slug: "electrical-engineering",
    name: "Electrical Engineering",
    shortName: "Electrical",
    image: "/images/modern-electrical-lab.jpg",
    tag: "Power & EV Lab",
    keyLabs:
      "AC/DC Machines Lab, Power Electronics & Drives, Switchgear & Protection, EV Simulation.",
    overview:
      "Preparing engineers for India's clean energy transformation with hands-on labs in high-voltage switchgear, electric vehicle powertrain testing, and smart grid automation.",
    hodName: "Prof. A. B. Shinde",
    hodTitle: "Head of Electrical Engineering Department",
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    shortName: "Civil",
    image: "/images/modern-civil-lab.jpg",
    tag: "Materials & Survey",
    keyLabs:
      "Total Station Surveying, Strength of Materials Lab, Environmental Engineering, Concrete Testing.",
    overview:
      "Equipped with electronic Total Station surveying instruments and comprehensive material testing compression rigs for practical civil, structural, and environmental expertise.",
    hodName: "Prof. R. N. Kulkarni",
    hodTitle: "Head of Civil Engineering Department",
  },
];
