"use client";

import { useState } from "react";
import Link from "next/link";
import { GMAPS_URL } from "@/data/navigation";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <footer className="bg-[#07172e] text-slate-300 pt-10 sm:pt-14 pb-14 sm:pb-8 border-t-4 border-[#ffcc00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div>
            <h3 className="text-white text-sm sm:text-base font-extrabold uppercase tracking-wide mb-2.5 sm:mb-3 leading-snug">
              Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3 sm:mb-4">
              Under Shri Swami Vivekanand Shikshan Sanstha, Kolhapur. Approved by AICTE New Delhi, DTE Maharashtra
              (Code: 6468). Affiliated to DBATU Lonere &amp; MSBTE Mumbai.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-red-700 text-white text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded">
                DTE: 6468
              </span>
              <span className="bg-slate-800 text-slate-300 text-[10px] sm:text-[11px] font-bold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-slate-700">
                TARABAI PARK, KOLHAPUR
              </span>
            </div>
            <div>
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ffcc00] hover:text-white text-xs font-semibold hover:underline transition-colors mt-0.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Find Us on Google Maps &raquo;</span>
              </a>
            </div>
          </div>

          {/* B.Tech Degree Col (Accordion on Mobile, Open on Desktop) */}
          <div className="border-t border-slate-800/80 md:border-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("degree")}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer"
            >
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider md:mb-4 border-l-3 border-[#ffcc00] pl-2.5">
                B.Tech Degree (DBATU)
              </h4>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform md:hidden ${
                  openSection === "degree" ? "rotate-180 text-amber-400" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              className={`space-y-2 text-xs pt-3 md:pt-0 ${
                openSection === "degree" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <Link href="/departments/computer-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Computer Science &amp; Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/aiml" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  AI &amp; Machine Learning (AI&amp;ML)
                </Link>
              </li>
              <li>
                <Link href="/departments/mechanical-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/electrical-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/civil-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Civil Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Polytechnic Diploma Col (Accordion on Mobile, Open on Desktop) */}
          <div className="border-t border-slate-800/80 md:border-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("diploma")}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer"
            >
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider md:mb-4 border-l-3 border-[#ffcc00] pl-2.5">
                Polytechnic Diploma
              </h4>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform md:hidden ${
                  openSection === "diploma" ? "rotate-180 text-amber-400" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              className={`space-y-2 text-xs pt-3 md:pt-0 ${
                openSection === "diploma" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <Link href="/departments/computer-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Diploma in Computer Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/mechanical-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Diploma in Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/civil-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Diploma in Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/electrical-engineering" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  Diploma in Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-amber-400 font-semibold hover:underline block py-0.5">
                  Direct 2nd Year Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Statutory Links Col (Accordion on Mobile, Open on Desktop) */}
          <div className="border-t border-slate-800/80 md:border-0 pt-4 md:pt-0">
            <button
              onClick={() => toggleSection("statutory")}
              className="w-full flex items-center justify-between text-left md:pointer-events-none cursor-pointer"
            >
              <h4 className="text-white text-xs sm:text-sm font-bold uppercase tracking-wider md:mb-4 border-l-3 border-[#ffcc00] pl-2.5">
                Statutory Links
              </h4>
              <svg
                className={`w-4 h-4 text-slate-400 transition-transform md:hidden ${
                  openSection === "statutory" ? "rotate-180 text-amber-400" : ""
                }`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              className={`space-y-2 text-xs pt-3 md:pt-0 ${
                openSection === "statutory" ? "block" : "hidden md:block"
              }`}
            >
              <li>
                <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  AICTE Portal ↗
                </a>
              </li>
              <li>
                <a href="https://dte.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  DTE Maharashtra ↗
                </a>
              </li>
              <li>
                <a href="https://dbatu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  DBATU Lonere ↗
                </a>
              </li>
              <li>
                <a href="https://msbte.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  MSBTE Mumbai ↗
                </a>
              </li>
              <li>
                <a href="https://mahadbt.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors block py-0.5">
                  MahaDBT Scholarship ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology (BSIET).
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <Link href="/about#disclosures" className="hover:text-slate-300 transition-colors">
              Mandatory Disclosure
            </Link>
            <span>•</span>
            <Link href="/about#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/about#antiragging" className="hover:text-slate-300 transition-colors">
              Anti-Ragging
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
