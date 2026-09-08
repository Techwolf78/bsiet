import Link from "next/link";

export default function TopAnnouncement() {
  return (
    <div className="bg-[#0f172a] text-white py-2 px-4 border-b border-slate-800 text-xs relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-hidden whitespace-nowrap">
          <span className="text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline">
            Notice Board:
          </span>
          <a
            href="https://bsiet.org"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider inline-flex items-center gap-1 animate-pulse-alert"
          >
            Mock Test
          </a>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-200 font-medium truncate">
            Admissions Open 2026-27 for B.Tech Degree (DBATU) & Polytechnic Diploma (MSBTE) — DTE Code: 6468
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-slate-400 shrink-0">
          <Link href="/admissions#fra" className="hover:text-white transition-colors">
            FRA Fees
          </Link>
          <span className="text-slate-700">•</span>
          <Link href="/about#disclosures" className="hover:text-white transition-colors">
            Mandatory Disclosure
          </Link>
          <span className="text-slate-700">•</span>
          <a
            href="https://mahadbt.maharashtra.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            MahaDBT Portal ↗
          </a>
        </div>
      </div>
    </div>
  );
}
