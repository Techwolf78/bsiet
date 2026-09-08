import Link from "next/link";
import { CAMPUS_RECRUITERS, PLACEMENT_STATS } from "@/data/recruiters";

export default function PlacementRecruiters() {
  return (
    <section className="py-20 px-4 bg-slate-50 border-y border-slate-200 text-slate-900" id="placements">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
            Training &amp; Placement Cell (TPO)
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            Industry Connections &amp; Placements
          </h2>
          <p className="text-slate-600 text-sm">
            Our active placement cell liaises with Fortune 500 corporations, heavy engineering giants, and Tier-1 IT
            services for direct on-campus recruitments.
          </p>
        </div>

        {/* Stats Grid (Light Theme) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {PLACEMENT_STATS.map((st, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200/90 shadow-sm hover:shadow-md p-6 rounded-2xl text-center transition-all"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#002b66] font-mono mb-1">
                {st.value}
              </div>
              <div className="text-xs text-slate-600 font-semibold">
                {st.label}
              </div>
            </div>
          ))}
        </div>

        {/* Infinite Marquee of Recruiters (Light Theme with White Shadowed Cards) */}
        <div className="relative overflow-hidden py-6 border-y border-slate-200 bg-white/70 rounded-2xl">
          <div className="flex animate-marquee gap-6 items-center">
            {[...CAMPUS_RECRUITERS, ...CAMPUS_RECRUITERS, ...CAMPUS_RECRUITERS].map((rec, idx) => (
              <div
                key={idx}
                className="shrink-0 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 p-3 flex items-center justify-center w-[145px] h-[82px] rounded-xl hover:scale-105 transition-all"
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

        <div className="text-center mt-10">
          <Link
            href="/placements"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-xs hover:shadow-md transition-all"
          >
            <span>View Full Placement Records &amp; TPO Team</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
