import Image from "next/image";
import { HERO_LEADER, SANSTHA_LEADERS, PRINCIPAL_DATA, SANSTHA_METRICS } from "@/data/leadership";

export default function BentoLeadership() {
  return (
    <section className="py-16 sm:py-20 px-4 bg-white" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* 1. PRESIDENT EXECUTIVE SPOTLIGHT (Executive Hero — Balanced & Commanding) */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all p-5 sm:p-7 mb-6 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Photo Frame — Exact 6:5 Aspect Ratio, 288px wide on Desktop, ZERO Cropping */}
          <div className="relative w-56 sm:w-72 aspect-[6/5] rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 shrink-0">
            <Image
              src={HERO_LEADER.image}
              alt={HERO_LEADER.name}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 640px) 224px, 288px"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="bg-blue-50 text-blue-800 border border-blue-200 text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                Hon&apos;ble President
              </span>
              <span className="text-xs text-slate-500 font-semibold tracking-wide">
                Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {HERO_LEADER.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
              {HERO_LEADER.role}
            </p>
          </div>
        </div>

        {/* 2. THE 4 SANSTHA LEADERS (Well-Proportioned Executive Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 max-w-6xl mx-auto mb-6">
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden group flex flex-col"
            >
              {/* Photo Frame — Exact 6:5 Aspect Ratio, Clean Edge-to-Edge */}
              <div className="relative w-full aspect-[6/5] bg-slate-50 overflow-hidden border-b border-slate-100">
                <Image
                  src={ldr.image}
                  alt={ldr.name}
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {ldr.tag && (
                  <div className="absolute top-2 left-2">
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full shadow-xs border border-white/40"
                      style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                    >
                      {ldr.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Content Cleanly Below Photo */}
              <div className="p-3.5">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm leading-snug">
                  {ldr.name}
                </h4>
                <span className="text-[11px] sm:text-xs text-blue-700 font-semibold block mt-0.5">
                  {ldr.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS (Compact Row — Matching Width) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 max-w-6xl mx-auto">
          {/* Principal's Desk */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-36 sm:w-44 aspect-[6/5] rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-50 shadow-sm">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-contain object-center"
                sizes="176px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded mb-1.5 inline-block font-bold">
                Principal&apos;s Message
              </span>
              <h4 className="font-bold text-slate-900 text-base">
                {PRINCIPAL_DATA.name}
              </h4>
              <span className="text-xs font-semibold text-slate-500 block mb-2">
                {PRINCIPAL_DATA.title}
              </span>
              <p className="text-slate-600 text-xs leading-relaxed italic border-l-2 border-blue-600 pl-3">
                &ldquo;{PRINCIPAL_DATA.message}&rdquo;
              </p>
            </div>
          </div>

          {/* Sanstha Legacy & Impact Metrics */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-white text-slate-900 rounded-3xl p-5 sm:p-6 border-2 border-blue-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded mb-1.5 inline-block font-bold">
                Sanstha Legacy (Since 1954)
              </span>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                Shri Swami Vivekanand Shikshan Sanstha
              </h4>
              <p className="text-slate-500 text-xs leading-relaxed mb-3">
                Founded by Shikshanmaharshi Dr. Bapuji Salunkhe across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              {SANSTHA_METRICS.map((met, mIdx) => (
                <div key={mIdx} className="bg-white p-2 rounded-xl border border-blue-100 shadow-xs">
                  <div className="text-base font-extrabold text-[#002b66] font-mono">
                    {met.value}
                  </div>
                  <div className="text-[9px] text-slate-600 font-semibold leading-tight mt-0.5">
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
