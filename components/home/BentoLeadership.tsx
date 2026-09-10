import Image from "next/image";
import { HERO_LEADER, SANSTHA_LEADERS, PRINCIPAL_DATA, SANSTHA_METRICS } from "@/data/leadership";

export default function BentoLeadership() {
  return (
    <section className="py-10 sm:py-20 px-3.5 sm:px-6 bg-white" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-1 sm:mb-3">
            Visionary Minds Guiding BSIET
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Guided by Shri Swami Vivekanand Shikshan Sanstha&apos;s illustrious legacy.
          </p>
        </div>

        {/* 1. PRESIDENT EXECUTIVE SPOTLIGHT */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-xs hover:shadow-md transition-all p-4 sm:p-7 mb-4 sm:mb-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 max-w-6xl mx-auto">
          {/* Photo Frame */}
          <div className="relative w-44 sm:w-72 aspect-[6/5] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-50 shrink-0">
            <Image
              src={HERO_LEADER.image}
              alt={HERO_LEADER.name}
              fill
              priority
              className="object-contain object-center"
              sizes="(max-width: 640px) 176px, 288px"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2 mb-1 sm:mb-2">
              <span className="bg-blue-50 text-[#002b66] border border-blue-200 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-xs">
                Hon&apos;ble President
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-semibold tracking-wide">
                Shri Swami Vivekanand Shikshan Sanstha
              </span>
            </div>

            <h3 className="text-lg sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {HERO_LEADER.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5 sm:mt-1">
              {HERO_LEADER.role}
            </p>
          </div>
        </div>

        {/* 2. THE 4 SANSTHA LEADERS (2-Col Grid on Mobile, 4-Col on Desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5 max-w-6xl mx-auto mb-4 sm:mb-6">
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-xl sm:rounded-2xl border border-slate-200 shadow-xs hover:shadow-md hover:border-[#002b66] transition-all overflow-hidden group flex flex-col"
            >
              {/* Photo Frame */}
              <div className="relative w-full aspect-[6/5] bg-slate-50 overflow-hidden border-b border-slate-100">
                <Image
                  src={ldr.image}
                  alt={ldr.name}
                  fill
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {ldr.tag && (
                  <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2">
                    <span
                      className="text-[8px] sm:text-[9px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full shadow-xs border border-white/40"
                      style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                    >
                      {ldr.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-2.5 sm:p-3.5">
                <h4 className="font-bold text-slate-900 text-[11px] sm:text-sm leading-snug">
                  {ldr.name}
                </h4>
                <span className="text-[10px] sm:text-xs text-[#002b66] font-semibold block mt-0.5 truncate">
                  {ldr.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 max-w-6xl mx-auto">
          {/* Principal's Desk */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
            <div className="relative w-28 sm:w-44 aspect-[6/5] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-50 shadow-xs">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-contain object-center"
                sizes="(max-width: 640px) 112px, 176px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#002b66] bg-blue-50 px-2 py-0.5 rounded mb-1 inline-block">
                Principal&apos;s Message
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                {PRINCIPAL_DATA.name}
              </h4>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-500 block mb-1.5 sm:mb-2">
                {PRINCIPAL_DATA.title}
              </span>
              <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed italic border-l-2 border-[#002b66] pl-2.5 sm:pl-3 text-left">
                &ldquo;{PRINCIPAL_DATA.message}&rdquo;
              </p>
            </div>
          </div>

          {/* Sanstha Legacy & Impact Metrics */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 to-white text-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#002b66] bg-blue-100 px-2 py-0.5 rounded mb-1 inline-block">
                Sanstha Legacy (Since 1954)
              </span>
              <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5 sm:mb-1">
                Shri Swami Vivekanand Shikshan Sanstha
              </h4>
              <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed mb-2.5 sm:mb-3">
                Founded by Shikshanmaharshi Dr. Bapuji Salunkhe across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 text-center">
              {SANSTHA_METRICS.map((met, mIdx) => (
                <div key={mIdx} className="bg-white p-2 rounded-xl border border-blue-100 shadow-xs">
                  <div className="text-sm sm:text-base font-extrabold text-[#002b66] font-mono">
                    {met.value}
                  </div>
                  <div className="text-[8px] sm:text-[9px] text-slate-600 font-semibold leading-tight mt-0.5">
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
