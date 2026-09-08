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

        {/* BENTO GRID (Inspired by Modern Keynote Bento Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* 1. HERO BENTO: Hon. Chandrakant (Dada) Patil (2 cols x 2 rows) */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden border-2 border-amber-300/90 shadow-xl group bg-slate-100 min-h-[480px] lg:min-h-[580px] flex items-end">
            {/* Whole Photo covering the Bento card */}
            <Image
              src={HERO_LEADER.image}
              alt={HERO_LEADER.name}
              fill
              priority
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Vignette Scrim for depth and contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent pointer-events-none" />

            {/* Top Floating Pill Badge */}
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex flex-wrap items-center gap-2">
              <span className="bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-amber-300">
                👑 Hon&apos;ble President
              </span>
              <span className="bg-white/95 backdrop-blur-md text-slate-800 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm hidden sm:inline-block border border-slate-200">
                Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
              </span>
            </div>

            {/* Over That Photo: The Message Card */}
            <div className="relative z-10 w-full p-4 sm:p-6">
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-amber-300/80 shadow-2xl">
                <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1 sm:hidden">
                  Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                  {HERO_LEADER.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-blue-900 mb-2.5">
                  {HERO_LEADER.role}
                </p>

                {/* Quote */}
                <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-3 sm:p-3.5 shadow-xs">
                  <p className="text-slate-700 text-xs sm:text-[13px] leading-relaxed italic">
                    &ldquo;{HERO_LEADER.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2 - 5. THE 4 SANSTHA LEADERS (2x2 Grid with Full Photo & Floating Labels) */}
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group bg-slate-100 min-h-[260px] lg:min-h-[275px] flex items-end"
            >
              {/* Full photo filling card */}
              <Image
                src={ldr.image}
                alt={ldr.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

              {/* Floating Pill Tag at Top */}
              {ldr.tag && (
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span
                    className="text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs border border-white/20"
                    style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                  >
                    {ldr.tag}
                  </span>
                </div>
              )}

              {/* Floating White Pill Card at Bottom */}
              <div className="relative z-10 w-full p-3.5">
                <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200 shadow-lg">
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">
                    {ldr.name}
                  </h4>
                  <span className="text-[11px] text-blue-700 font-bold block mt-0.5">
                    {ldr.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6 & 7. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS (Bottom Bento Row) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Principal's Desk */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 bg-slate-100 shadow-sm">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-cover object-top"
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
