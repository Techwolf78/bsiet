"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "@/components/modals/EnquiryModal";
import BrochureModal from "@/components/modals/BrochureModal";

export default function ComputerEngineeringShowcase() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [activeYear, setActiveYear] = useState<number>(1);

  const labs = [
    {
      name: "Cloud Computing & DevOps Innovation Hub",
      badge: "Cloud & Virtualization",
      specs: "35 High-Performance Intel Core i7 Systems (32GB RAM, 1TB NVMe SSD), Gigabit Ethernet, OpenStack & AWS Sandbox.",
      skills: ["Kubernetes", "Docker Containers", "Microservices", "AWS/Azure Cloud"],
      icon: "☁️",
    },
    {
      name: "Advanced Software & Full-Stack Development Lab",
      badge: "Enterprise Development",
      specs: "Modern development environments with high-speed fiber backbone, dual-display workstations, and local Git lab servers.",
      skills: ["Next.js & React", "Python & Django", "Java Spring Boot", "REST & GraphQL APIs"],
      icon: "💻",
    },
    {
      name: "Data Science & AI/ML Computing Suite",
      badge: "Deep Learning & Vision",
      specs: "Dedicated NVIDIA RTX GPU workstations with CUDA support, JupyterHub cluster, and pre-trained foundation models.",
      skills: ["PyTorch & TensorFlow", "Computer Vision", "Natural Language Processing", "Big Data Analytics"],
      icon: "🤖",
    },
    {
      name: "Cyber Security & Network Testing Sandbox",
      badge: "Information Security",
      specs: "Cisco managed switches, hardware firewall appliances, isolated penetration testing network, and packet analysis units.",
      skills: ["Ethical Hacking", "Network Protocols", "Firewall Configuration", "Cryptography"],
      icon: "🛡️",
    },
    {
      name: "Database Systems & Big Data Engineering Lab",
      badge: "Data Infrastructure",
      specs: "Enterprise Oracle 19c database setups, distributed PostgreSQL and MongoDB NoSQL server clusters.",
      skills: ["SQL Optimization", "NoSQL Architectures", "Apache Spark", "Data Warehousing"],
      icon: "🗄️",
    },
  ];

  const curriculum = [
    {
      year: 1,
      title: "First Year (Foundations of Computing)",
      tag: "Semester I & II",
      summary: "Building rigorous mathematical intuition, problem-solving habits, and foundational programming literacy.",
      subjects: [
        "Engineering Mathematics I & II (Calculus & Linear Algebra)",
        "Problem Solving using C & C++ Programming",
        "Digital Electronics & Logic Design",
        "Foundations of Python Programming",
        "Computer Hardware & Operating System Basics",
        "Professional Communication & Technical Writing",
      ],
    },
    {
      year: 2,
      title: "Second Year (Core Systems Architecture)",
      tag: "Semester III & IV",
      summary: "Deep-diving into classic algorithms, database architectures, operating systems, and computer hardware design.",
      subjects: [
        "Data Structures & Advanced Algorithms (DSA)",
        "Discrete Mathematics & Graph Theory",
        "Database Management Systems (DBMS & SQL)",
        "Computer Organization & Architecture (COA)",
        "Object-Oriented Programming with Java & C++",
        "Operating System Kernels (Linux & Unix Systems)",
      ],
    },
    {
      year: 3,
      title: "Third Year (Applied Software & Cloud Engineering)",
      tag: "Semester V & VI",
      summary: "Mastering distributed networking, scalable cloud architectures, web frameworks, and cyber defense.",
      subjects: [
        "Design & Analysis of Algorithms (DAA)",
        "Computer Networks & Transmission Protocols",
        "Cloud Computing Architecture & Virtualization",
        "Full-Stack Web Development (Next.js, Node, React)",
        "Cyber Security & Cryptographic Systems",
        "Artificial Intelligence & Machine Learning Basics",
      ],
    },
    {
      year: 4,
      title: "Final Year (Specialization & Industry Immersion)",
      tag: "Semester VII & VIII",
      summary: "Engaging in cutting-edge DevOps, deep capstone engineering, and full-time 6-month corporate internships.",
      subjects: [
        "DevOps Engineering, CI/CD Pipelines & Cloud Automation",
        "Deep Learning, Generative AI & Natural Language Processing",
        "Distributed Systems & Cloud Native Microservices",
        "Software Project Management & Agile Methodologies",
        "6-Month Full-Time Corporate Industry Internship",
        "Major B.Tech Capstone Project & Research Publication",
      ],
    },
  ];

  const techStack = [
    { name: "Python", category: "AI / Backend", icon: "🐍" },
    { name: "Java", category: "Enterprise", icon: "☕" },
    { name: "C++", category: "Core Systems", icon: "⚡" },
    { name: "Next.js / React", category: "Frontend", icon: "⚛️" },
    { name: "TypeScript", category: "Modern Web", icon: "📘" },
    { name: "Docker", category: "Containers", icon: "🐳" },
    { name: "Kubernetes", category: "Orchestration", icon: "☸️" },
    { name: "AWS Cloud", category: "Cloud Platform", icon: "☁️" },
    { name: "PostgreSQL", category: "Databases", icon: "🐘" },
    { name: "MongoDB", category: "NoSQL", icon: "🍃" },
    { name: "PyTorch", category: "Deep Learning", icon: "🔥" },
    { name: "Linux Bash", category: "OS & Shell", icon: "🐧" },
  ];

  const studentClubs = [
    {
      title: "CodeX — Algorithmic Coding Club",
      desc: "Weekly competitive coding contests, LeetCode sprints, and peer-to-peer DSA mentorship preparing students for Tier-1 coding interviews.",
      tag: "Competitive Coding",
      color: "border-blue-200 bg-blue-50/50",
    },
    {
      title: "Hackathon & Open-Source Wing",
      desc: "Active teams participating in Smart India Hackathon (SIH), Google Summer of Code (GSoC), and developing community open-source utilities.",
      tag: "Product Innovation",
      color: "border-amber-200 bg-amber-50/50",
    },
    {
      title: "CyberShield — Ethical Hacking Chapter",
      desc: "Hands-on workshops on vulnerability assessment, penetration testing, CTF competitions, and zero-day defense drills.",
      tag: "Cyber Security",
      color: "border-red-200 bg-red-50/50",
    },
    {
      title: "Cloud & AI Developers Society",
      desc: "Workshops on building LLM agents, cloud-native deployments, and hosting tech talks with alumni engineers working at Silicon Valley firms.",
      tag: "Emerging Tech",
      color: "border-emerald-200 bg-emerald-50/50",
    },
  ];

  const techRecruiters = [
    "Tata Motors",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "Capgemini",
    "Tech Mahindra",
    "Persistent Systems",
    "Hexaware",
    "L&T Technology Services",
    "Bajaj Auto",
    "Bharat Forge",
  ];

  return (
    <div className="bg-white">
      {/* ══════════════════════════════════════════════
          1. HERO SHOWCASE SECTION
         ══════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-[#020914] via-[#07172e] to-[#0a2540] text-white py-16 lg:py-24 px-4 overflow-hidden">
        {/* Glow rings */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-xs text-slate-400 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/departments" className="hover:text-white transition-colors">
              Departments
            </Link>
            <span>/</span>
            <span className="text-[#ffcc00] font-semibold">Computer Engineering</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                DTE Code: 646824210 · Affiliated to DBATU Lonere &amp; MSBTE Mumbai
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
                Department of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Computer Science &amp; Engineering
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                Empowering the next generation of software engineers, cloud architects, and AI pioneers.
                BSIET CSE pairs rigorous mathematical algorithmic mastery with hands-on enterprise software
                development, high-speed fiber-backed computing labs, and premier placement partnerships.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer"
                >
                  Apply for CSE Admission 2026
                </button>

                <button
                  onClick={() => setBrochureOpen(true)}
                  className="inline-flex items-center gap-2 border border-amber-400/40 hover:border-amber-400 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold text-sm px-5 py-3 rounded-lg transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                  </svg>
                  <span>Download CSE Syllabus</span>
                </button>

                <a
                  href="#labs"
                  className="border border-white/20 hover:border-white/50 text-white text-sm font-semibold px-4 py-3 rounded-lg transition-all"
                >
                  Explore Labs ↓
                </a>
              </div>

              {/* 4 Key Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-[#ffcc00] font-mono">60 Seats</span>
                  <span className="text-[11px] text-slate-300 font-medium">B.Tech (DBATU)</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-white font-mono">60 Seats</span>
                  <span className="text-[11px] text-slate-300 font-medium">Polytechnic (MSBTE)</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-mono">12 LPA</span>
                  <span className="text-[11px] text-slate-300 font-medium">Highest Tech Package</span>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                  <span className="block text-xl sm:text-2xl font-black text-white font-mono">100+</span>
                  <span className="text-[11px] text-slate-300 font-medium">Computing Workstations</span>
                </div>
              </div>
            </div>

            {/* Right Visual Photo Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/30 shadow-2xl bg-slate-950 group">
                <img
                  src="/images/lab-computer.jpg"
                  alt="BSIET Computer Engineering Laboratory"
                  className="w-full h-[380px] sm:h-[440px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020914] via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg shrink-0">
                      ⚡
                    </div>
                    <div>
                      <strong className="block text-white text-sm font-bold">
                        Cloud &amp; High-Performance Computing Lab
                      </strong>
                      <span className="text-slate-300 text-xs">
                        1 Gbps High-Speed Dedicated Fiber Backbone
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. DEPARTMENT VISION, MISSION & OBJECTIVES
         ══════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-3 py-1 rounded-full inline-block mb-4">
                  Department Vision
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Pioneering Global Technical Excellence
                </h3>
                <blockquote className="text-slate-700 text-sm leading-relaxed italic border-l-4 border-red-600 pl-4 py-1">
                  &ldquo;To emerge as a premier center of excellence in computer engineering education and applied
                  research, transforming aspiring students into globally competent software professionals, ethical coders,
                  and innovative entrepreneurs dedicated to nation building.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                <span>🎯 Goal: 100% Industry Readiness &amp; Applied Innovation</span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full inline-block mb-4">
                  Department Mission
                </span>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  Outcome-Based Technical Mastery
                </h3>
                <ul className="space-y-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span>To impart rigorous outcome-based education in core algorithms, distributed cloud systems, and modern AI technologies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">2.</span>
                    <span>To bridge industrial demands through hands-on laboratory workshops, national coding hackathons, and corporate internships.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">3.</span>
                    <span>To nurture professional ethics, collaborative team leadership, and lifelong adaptability in the rapidly evolving software ecosystem.</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 pt-4 mt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                <span>🚀 Mission: Bridge Academia to Fortune 500 Careers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. SPECIALIZED COMPUTING LABORATORIES (DETAILED)
         ══════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white" id="labs">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Infrastructure &amp; Research
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
              State-of-the-Art Computing Laboratories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Hands-on practical mastery from semester one. Every computing laboratory is equipped with high-speed
              fiber connectivity, dedicated uninterruptible power supplies (UPS), and licensed enterprise software suites.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {labs.map((lab, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-blue-500 hover:bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{lab.icon}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-full">
                      {lab.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-snug">
                    {lab.name}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-5">
                    {lab.specs}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Core Competencies Learned:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {lab.skills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-white border border-slate-200 text-slate-800 text-[11px] font-medium px-2 py-0.5 rounded-md"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Virtual Lab Tour Box */}
            <div className="bg-gradient-to-br from-[#002b66] to-[#040d1a] rounded-3xl p-6 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#ffcc00] bg-amber-400/20 px-2.5 py-1 rounded-full inline-block mb-3">
                  Hardware &amp; Connectivity
                </span>
                <h3 className="text-xl font-bold mb-3 text-white">
                  Campus-Wide Gigabit Fiber Backbone
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  100% networked campus with 1 Gbps leased line, dedicated server rooms hosting virtualization
                  hypervisors, and 24/7 power backup through central generators and UPS arrays.
                </p>
              </div>

              <button
                onClick={() => setEnquiryOpen(true)}
                className="w-full bg-[#ffcc00] hover:bg-amber-300 text-slate-950 font-bold text-xs py-3 rounded-xl transition-all cursor-pointer text-center"
              >
                Schedule an In-Person Lab Visit →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. 4-YEAR B.TECH CURRICULUM ROADMAP
         ══════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              DBATU Affiliated Syllabus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              4-Year B.Tech Academic Roadmap
            </h2>
            <p className="text-slate-600 text-sm">
              Our outcome-based curriculum is designed in consultation with academic leaders and corporate CTOs to
              ensure maximum industry relevance.
            </p>
          </div>

          {/* Year Switcher Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {curriculum.map((c) => (
              <button
                key={c.year}
                onClick={() => setActiveYear(c.year)}
                className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                  activeYear === c.year
                    ? "bg-[#002b66] text-[#ffcc00] shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                Year 0{c.year} Roadmap
              </button>
            ))}
          </div>

          {/* Active Year Details */}
          {curriculum
            .filter((c) => c.year === activeYear)
            .map((c) => (
              <div
                key={c.year}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md max-w-4xl mx-auto animate-fade-in"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {c.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {c.tag}
                  </span>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {c.summary}
                </p>

                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                  Core Modules &amp; Laboratories:
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {c.subjects.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2.5 text-xs text-slate-800 font-medium"
                    >
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                        ✓
                      </span>
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. TECH STACK & INDUSTRY TOOLS
         ══════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="bg-red-50 text-red-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Industry 4.0 Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              Technologies Mastered by BSIET Coders
            </h2>
            <p className="text-slate-600 text-sm">
              From day one, students code on modern software stacks used by global technology corporations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all text-center flex flex-col items-center justify-center"
              >
                <div className="text-3xl mb-2">{t.icon}</div>
                <strong className="text-slate-900 text-sm block font-bold">{t.name}</strong>
                <span className="text-[10px] text-slate-500 font-medium">{t.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. PLACEMENT RECORD & TECH RECRUITERS
         ══════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-[#07172e] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="bg-amber-400/20 text-[#ffcc00] border border-amber-400/40 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              TPO Career Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-3">
              Direct On-Campus Placements for CSE Graduates
            </h2>
            <p className="text-slate-300 text-sm">
              Our active Training &amp; Placement Cell liaises directly with Tier-1 IT corporations and fast-growing tech product startups.
            </p>
          </div>

          {/* Placement Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-[#ffcc00] font-mono mb-1">92%+</div>
              <div className="text-xs text-slate-300 font-medium">CSE Placement Rate</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono mb-1">12 LPA</div>
              <div className="text-xs text-slate-300 font-medium">Highest Package Offered</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono mb-1">4.8 LPA</div>
              <div className="text-xs text-slate-300 font-medium">Average Package</div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-black text-white font-mono mb-1">100%</div>
              <div className="text-xs text-slate-300 font-medium">Internship Placement Assistance</div>
            </div>
          </div>

          {/* Recruiters Badges */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
              Major IT &amp; Core Corporates Hiring CSE Engineers
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techRecruiters.map((rec, idx) => (
                <span
                  key={idx}
                  className="bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                >
                  {rec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. STUDENT CLUBS, HACKATHONS & CODING CULTURE
         ══════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
              Student Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
              Hackathons, Student Clubs &amp; Culture
            </h2>
            <p className="text-slate-600 text-sm">
              Engineering life at BSIET CSE extends beyond textbooks into vibrant student chapters, 24-hour hackathons, and real open-source software releases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {studentClubs.map((club, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl border ${club.color} flex flex-col justify-between transition-all hover:shadow-lg`}
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-white px-2.5 py-1 rounded-full border border-slate-200 inline-block mb-3">
                    {club.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {club.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {club.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          8. HOD PROFILE & ADMISSION CTA
         ══════════════════════════════════════════════ */}
      <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* HOD Profile */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center gap-6">
              <div className="relative w-28 h-32 sm:w-36 sm:h-40 rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 bg-slate-100 shadow-md">
                <img
                  src="/images/management-1.jpg"
                  alt="Dr. S. K. Patil - HOD Computer Engineering"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded inline-block mb-2">
                  Head of Department
                </span>
                <h3 className="text-xl font-bold text-slate-900">Dr. S. K. Patil</h3>
                <span className="text-xs font-semibold text-slate-500 block mb-3">
                  Ph.D., M.Tech (CSE) · 18+ Years Academic &amp; Research Experience
                </span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic border-l-2 border-blue-600 pl-3">
                  &ldquo;Our vision is to empower students not only to write code, but to engineer robust, scalable solutions for real societal and industrial challenges. We welcome every young aspiring technologist to BSIET CSE.&rdquo;
                </p>
              </div>
            </div>

            {/* Admission Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#002b66] to-[#001737] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-extrabold text-[#ffcc00] uppercase tracking-wider block mb-1">
                  Admissions 2026-27 · DTE: 646824210
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Join Computer Science &amp; Engineering
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  12th Science (PCM with MHT-CET/JEE) for 4-Year B.Tech or Direct 2nd Year for Polytechnic Diploma holders.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs py-3 rounded-lg shadow transition-all cursor-pointer text-center"
                >
                  Enquire Now via WhatsApp
                </button>
                <Link
                  href="/admissions"
                  className="bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold text-xs py-3 px-4 rounded-lg transition-all text-center"
                >
                  Fees &amp; Scholarships →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
    </div>
  );
}
