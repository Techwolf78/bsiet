import Image from "next/image";
import { HERO_LEADER, SANSTHA_LEADERS, PRINCIPAL_DATA, SANSTHA_METRICS } from "@/data/leadership";

export default function BentoLeadership() {
  return (
    <section className="py-16 px-4 bg-slate-50" id="leadership">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Institutional Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
            Visionary Minds Guiding BSIET
          </h2>
          <p className="text-slate-600 text-sm">
            Guided by Shri Swami Vivekanand Shikshan Sanstha&apos;s illustrious legacy, our leadership fosters
            state-of-the-art technical education, modern infrastructure, and industry integration.
          </p>
        </div>

        {/* 1. PRESIDENT EXECUTIVE SPOTLIGHT (Balanced, sleek, contained height) */}
        <div className="bg-gradient-to-br from-[#051329] via-[#0a2540] to-[#0d3158] text-white rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-xl relative overflow-hidden mb-8 group">
          {/* Ambient gold glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            {/* President Portrait - Crisp and well-proportioned */}
            <div className="relative w-40 h-44 sm:w-48 sm:h-52 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shrink-0 bg-slate-950">
              <Image
                src={HERO_LEADER.image}
                alt={HERO_LEADER.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 160px, 192px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Info & Quote */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-2.5">
                <span className="bg-amber-400/20 border border-amber-400/40 text-[#ffcc00] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  👑 Hon&apos;ble President
                </span>
                <span className="text-xs text-slate-300 font-semibold tracking-wide">
                  Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                {HERO_LEADER.name}
              </h3>
              <p className="text-xs text-amber-300/90 font-medium mb-4">
                {HERO_LEADER.role}
              </p>

              {/* Quote */}
              <div className="bg-white/5 border border-white/10 border-l-4 border-l-[#ffcc00] rounded-r-xl p-4 backdrop-blur-sm text-left">
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{HERO_LEADER.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE 4 SANSTHA LEADERS (Prominent, large photos in 4 equal cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Large, Handsome Photo Frame (previously tiny 56px thumbnail) */}
                <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src={ldr.image}
                    alt={ldr.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                  {ldr.tag && (
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm"
                        style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                      >
                        {ldr.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-bold text-slate-900 text-base leading-snug mb-0.5">
                    {ldr.name}
                  </h4>
                  <span className="text-xs text-blue-700 font-bold block mb-2.5">
                    {ldr.role}
                  </span>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {ldr.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Principal's Desk (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center sm:items-start gap-5">
            <div className="relative w-28 h-32 sm:w-32 sm:h-36 rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 bg-slate-100 shadow-md">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-cover object-top"
                sizes="128px"
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded mb-2 inline-block">
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

          {/* Sanstha Legacy & Impact Metrics (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#002b66] to-[#001737] text-white rounded-3xl p-6 sm:p-7 border border-blue-900 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffcc00] bg-amber-400/20 px-2.5 py-1 rounded mb-2 inline-block">
                Sanstha Legacy (Since 1954)
              </span>
              <h4 className="font-bold text-white text-lg mb-1.5">
                Shri Swami Vivekanand Shikshan Sanstha
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-4">
                Founded in 1954 by Shikshanmaharshi Dr. Bapuji Salunkhe with the vision of educational dissemination
                across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-center">
              {SANSTHA_METRICS.map((met, mIdx) => (
                <div key={mIdx} className="bg-white/5 p-2.5 rounded-xl border border-white/5">
                  <div className="text-xl font-extrabold text-[#ffcc00] font-mono">
                    {met.value}
                  </div>
                  <div className="text-[10px] text-slate-300 font-semibold">
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
