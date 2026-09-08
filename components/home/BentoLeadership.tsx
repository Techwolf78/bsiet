import Image from "next/image";
import { HERO_LEADER, SANSTHA_LEADERS, PRINCIPAL_DATA, SANSTHA_METRICS } from "@/data/leadership";

export default function BentoLeadership() {
  return (
    <section className="py-20 px-4 bg-white" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
            Institutional Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 mb-3">
            Visionary Minds Guiding BSIET
          </h2>
          <p className="text-slate-600 text-sm">
            Guided by Shri Swami Vivekanand Shikshan Sanstha&apos;s illustrious legacy, our leadership fosters
            state-of-the-art technical education, modern infrastructure, and industry integration.
          </p>
        </div>

        {/* BENTO GRID (Clean Light Aesthetic — No Text Over Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* 1. HERO BENTO: Hon. Chandrakant (Dada) Patil (2 cols x 2 rows) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-white via-amber-50/20 to-slate-50 rounded-3xl border-2 border-amber-300/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between p-5 sm:p-7 group">
            <div>
              {/* Header Pill & Organization */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                  👑 Hon&apos;ble President
                </span>
                <span className="text-xs text-slate-500 font-bold tracking-wide">
                  Shri Swami Vivekanand Shikshan Sanstha
                </span>
              </div>

              {/* Dedicated Photo Frame — 100% Clean & Unobstructed (Exact 6:5 Aspect Ratio, ZERO Cropping) */}
              <div className="relative w-full max-w-[380px] mx-auto aspect-[6/5] rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm bg-slate-100 mb-5">
                <Image
                  src={HERO_LEADER.image}
                  alt={HERO_LEADER.name}
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>

              {/* Leader Info Below Photo */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                {HERO_LEADER.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-amber-800 mb-4">
                {HERO_LEADER.role}
              </p>
            </div>

            {/* Quote Box Cleanly Below Photo */}
            <div className="bg-white border border-slate-200 border-l-4 border-l-amber-500 rounded-r-xl p-4 shadow-xs">
              <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                &ldquo;{HERO_LEADER.quote}&rdquo;
              </p>
            </div>
          </div>

          {/* 2 - 5. THE 4 SANSTHA LEADERS (2x2 Grid — Exact 6:5 Aspect Ratio, ZERO Cropping) */}
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Dedicated Photo Frame — Exact 6:5 Proportions (360x300) with ZERO Cropping */}
                <div className="relative w-full aspect-[6/5] bg-slate-100 overflow-hidden border-b border-slate-100">
                  <Image
                    src={ldr.image}
                    alt={ldr.name}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {ldr.tag && (
                    <div className="absolute top-2.5 left-2.5">
                      <span
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-white/40"
                        style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                      >
                        {ldr.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Cleanly Below Photo */}
                <div className="p-4 sm:p-5">
                  <h4 className="font-bold text-slate-900 text-sm leading-snug mb-0.5">
                    {ldr.name}
                  </h4>
                  <span className="text-xs text-blue-700 font-bold block mb-2">
                    {ldr.role}
                  </span>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                    {ldr.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6 & 7. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS (Bottom Bento Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Principal's Desk */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-28 sm:w-32 aspect-[6/5] rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 bg-slate-100 shadow-sm">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-contain object-center"
                sizes="128px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded mb-2 inline-block">
                Principal&apos;s Message
              </span>
              <h4 className="font-bold text-slate-900 text-lg">
                {PRINCIPAL_DATA.name}
              </h4>
              <span className="text-xs font-semibold text-slate-500 block mb-3">
                {PRINCIPAL_DATA.title}
              </span>
              <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed italic border-l-2 border-blue-600 pl-3.5">
                &ldquo;{PRINCIPAL_DATA.message}&rdquo;
              </p>
            </div>
          </div>

          {/* Sanstha Legacy & Impact Metrics */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white text-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-blue-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-1 rounded mb-2 inline-block font-bold">
                Sanstha Legacy (Since 1954)
              </span>
              <h4 className="font-bold text-slate-900 text-lg mb-1.5">
                Shri Swami Vivekanand Shikshan Sanstha
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed mb-4">
                Founded in 1954 by Shikshanmaharshi Dr. Bapuji Salunkhe with the vision of educational dissemination
                across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-blue-200/60 text-center">
              {SANSTHA_METRICS.map((met, mIdx) => (
                <div key={mIdx} className="bg-white p-2.5 rounded-xl border border-blue-100 shadow-xs">
                  <div className="text-xl font-extrabold text-[#002b66] font-mono">
                    {met.value}
                  </div>
                  <div className="text-[10px] text-slate-600 font-semibold">
                    {met.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
