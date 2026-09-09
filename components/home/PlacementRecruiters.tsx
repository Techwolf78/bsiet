import Link from "next/link";
import { CAMPUS_RECRUITERS, PLACEMENT_STATS } from "@/data/recruiters";

export default function PlacementRecruiters() {
  return (
    <section className="py-10 sm:py-20 px-3.5 sm:px-6 bg-slate-50 border-y border-slate-200 text-slate-900" id="placements">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
            Training &amp; Placement Cell (TPO)
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-1 sm:mb-3">
            Industry Connections &amp; Placements
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Active placement cell liaising with Fortune 500 corporations, heavy engineering giants, and Tier-1 IT services.
          </p>
        </div>

        {/* Stats Grid (2x2 on Mobile, 4-col on Desktop) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-5 mb-8 sm:mb-14">
          {PLACEMENT_STATS.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/90 shadow-xs hover:shadow-md p-3.5 sm:p-6 rounded-2xl text-center transition-all"
            >
              <div className="text-2xl sm:text-4xl font-black text-[#002b66] font-mono mb-0.5 sm:mb-1">
                {st.value}
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 font-semibold leading-tight">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee of Recruiters */}
        <div className="relative overflow-hidden py-4 sm:py-6 border-y border-slate-200 bg-white/70 rounded-2xl">
          <div className="flex animate-marquee gap-3 sm:gap-6 items-center">
            {[...CAMPUS_RECRUITERS, ...CAMPUS_RECRUITERS, ...CAMPUS_RECRUITERS].map((rec, idx) => (
              <div
                key={idx}
                className="shrink-0 bg-white border border-slate-200 shadow-xs p-2.5 flex items-center justify-center w-[110px] sm:w-[145px] h-[65px] sm:h-[82px] rounded-xl hover:scale-105 transition-all"
                title={`${rec.name} - ${rec.category}`}
              >
                <img
                  src={rec.logo}
                  alt={rec.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-10">
          <Link
            href="/placements"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-xs hover:shadow-md transition-all"
          >
            <span>View Full Placement Records &amp; TPO Team</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
