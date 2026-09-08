import Link from "next/link";
import { GMAPS_URL } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#07172e] text-slate-300 pt-14 pb-8 border-t-4 border-[#ffcc00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Col */}
          <div>
            <h3 className="text-white text-base font-extrabold uppercase tracking-wide mb-3 leading-snug">
              Dr. Bapuji Salunkhe Institute of Engineering & Technology
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Under Shri Swami Vivekanand Shikshan Sanstha, Kolhapur. Approved by AICTE New Delhi, DTE Maharashtra
              (Code: 6468). Affiliated to DBATU Lonere & MSBTE Mumbai.
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-red-700 text-white text-[11px] font-bold px-2.5 py-1 rounded">
                DTE: 6468
              </span>
              <span className="bg-slate-800 text-slate-300 text-[11px] font-bold px-2.5 py-1 rounded border border-slate-700">
                TARABAI PARK, KOLHAPUR
              </span>
            </div>
            <div>
              <a
                href={GMAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#ffcc00] hover:text-white text-xs font-semibold hover:underline transition-colors mt-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>Find Us on Google Maps &raquo;</span>
              </a>
            </div>
          </div>

          {/* B.Tech Degree Col */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-[#ffcc00] pl-2.5">
              B.Tech Degree (DBATU)
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/departments/computer-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Computer Science & Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/aiml" className="hover:text-[#ffcc00] transition-colors">
                  AI & Machine Learning (AI&ML)
                </Link>
              </li>
              <li>
                <Link href="/departments/mechanical-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/electrical-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/civil-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Civil Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Polytechnic Diploma Col */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-[#ffcc00] pl-2.5">
              Polytechnic Diploma
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/departments/computer-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Diploma in Computer Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/mechanical-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Diploma in Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/civil-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Diploma in Civil Engineering
                </Link>
              </li>
              <li>
                <Link href="/departments/electrical-engineering" className="hover:text-[#ffcc00] transition-colors">
                  Diploma in Electrical Engineering
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-amber-400 font-medium hover:underline">
                  Direct 2nd Year Admissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Statutory Links Col */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-l-3 border-[#ffcc00] pl-2.5">
              Statutory Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.aicte-india.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">
                  AICTE Portal ↗
                </a>
              </li>
              <li>
                <a href="https://dte.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">
                  DTE Maharashtra ↗
                </a>
              </li>
              <li>
                <a href="https://dbatu.ac.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">
                  DBATU Lonere ↗
                </a>
              </li>
              <li>
                <a href="https://msbte.org.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">
                  MSBTE Mumbai ↗
                </a>
              </li>
              <li>
                <a href="https://mahadbt.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-[#ffcc00] transition-colors">
                  MahaDBT Scholarship ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Dr. Bapuji Salunkhe Institute of Engineering & Technology (BSIET), Kolhapur.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/about#disclosures" className="hover:text-slate-300 transition-colors">
              Mandatory Disclosure
            </Link>
            <span>•</span>
            <Link href="/about#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/about#antiragging" className="hover:text-slate-300 transition-colors">
              Anti-Ragging Committee
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
