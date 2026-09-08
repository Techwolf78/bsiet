import Link from "next/link";
import { CAMPUS_RECRUITERS, PLACEMENT_STATS } from "@/data/recruiters";

export default function PlacementRecruiters() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-[#07172e] text-white" id="placements">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-amber-400/20 text-[#ffcc00] border border-amber-400/40 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Training &amp; Placement Cell (TPO)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-3 mb-3">
            Industry Connections &amp; Placements
          </h2>
          <p className="text-slate-300 text-sm">
            Our active placement cell liaises with Fortune 500 corporations, heavy engineering giants, and Tier-1 IT
            services for direct on-campus recruitments.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {PLACEMENT_STATS.map((st, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-5 rounded-2xl text-center backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#ffcc00] font-mono mb-1">
                {st.value}
              </div>
              <div className="text-xs text-slate-300 font-medium">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee of Recruiters */}
        <div className="relative overflow-hidden py-4 border-y border-white/10">
          <div className="flex animate-marquee gap-8 items-center">
            {[...CAMPUS_RECRUITERS, ...CAMPUS_RECRUITERS].map((rec, idx) => (
              <div
                key={idx}
                className="shrink-0 bg-white/10 hover:bg-white/20 border border-white/15 px-6 py-3 rounded-xl flex flex-col items-center justify-center min-w-[170px] transition-all"
              >
                <span className="font-extrabold text-sm tracking-wider text-white font-mono">
                  {rec.logoText}
                </span>
                <span className="text-[10px] text-amber-300 font-semibold mt-0.5">
                  {rec.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/placements"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-full transition-all"
          >
            <span>View Full Placement Records &amp; TPO Team</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
