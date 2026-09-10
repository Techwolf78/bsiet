import Link from "next/link";

export default function TopAnnouncement() {
  return (
    <div className="hidden md:block bg-slate-100 text-slate-700 py-2 px-4 border-b border-slate-200 text-xs relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="text-slate-500 font-bold uppercase tracking-wider hidden sm:inline">
            Notice Board:
          </span>
          <a
            href="https://bsiet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider inline-flex items-center gap-1 animate-pulse-alert"
          >
            Mock Test
          </a>
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-slate-800 font-semibold truncate">
            Admissions Open 2026-27 for B.Tech Degree (DBATU) &amp; Polytechnic Diploma (MSBTE) — DTE Code: 6468
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-600 font-medium shrink-0">
          <Link href="/admissions#fra" className="hover:text-[#002b66] transition-colors">
            FRA Fees
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/about#disclosures" className="hover:text-[#002b66] transition-colors">
            Mandatory Disclosure
          </Link>
          <span className="text-slate-300">•</span>
          <a
            href="https://mahadbt.maharashtra.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#002b66] hover:text-[#001f4d] font-semibold transition-colors"
          >
            MahaDBT Portal ↗
          </a>
        </div>
      </div>
    </div>
  );
}
