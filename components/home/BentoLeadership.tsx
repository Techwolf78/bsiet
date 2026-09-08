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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. HERO BENTO: Hon. Chandrakant (Dada) Patil (2 cols x 2 rows) */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-[#051329] via-[#0a2540] to-[#0d3158] text-white rounded-3xl p-6 sm:p-8 border border-amber-400/30 shadow-xl flex flex-col justify-between relative overflow-hidden group">
            {/* Ambient gold glow */}
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
                <span className="bg-amber-400/20 border border-amber-400/40 text-amber-300 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  👑 Hon&apos;ble President
                </span>
                <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  Shri Swami Vivekanand Shikshan Sanstha
                </span>
              </div>

              {/* Split Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Portrait */}
                <div className="sm:col-span-5 relative aspect-[1/1.15] rounded-2xl overflow-hidden border-2 border-amber-400/35 shadow-2xl bg-slate-950">
                  <Image
                    src={HERO_LEADER.image}
                    alt={HERO_LEADER.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Info & Quote */}
                <div className="sm:col-span-7 flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-1">
                    {HERO_LEADER.name}
                  </h3>
                  <span className="text-xs font-bold text-[#ffcc00] tracking-wide mb-4 block">
                    {HERO_LEADER.role}
                  </span>

                  {/* Executive Glass Quote Box */}
                  <div className="bg-white/5 border border-white/10 border-l-4 border-l-[#ffcc00] rounded-r-xl p-4 relative backdrop-blur-sm">
                    <svg
                      className="w-6 h-6 text-amber-400/25 absolute top-2 right-2"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-slate-200 text-xs sm:text-[13px] leading-relaxed italic relative z-10">
                      &ldquo;{HERO_LEADER.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 - 5. Sanstha Leaders Cards */}
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-blue-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
                    <Image
                      src={ldr.image}
                      alt={ldr.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">
                      {ldr.name}
                    </h4>
                    <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                      {ldr.role}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {ldr.desc}
                </p>
              </div>

              {ldr.tag && (
                <div className="mt-4 pt-2 border-t border-slate-100">
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full inline-block"
                    style={{ backgroundColor: ldr.tagBg, color: ldr.tagColor }}
                  >
                    {ldr.tag}
                  </span>
                </div>
              )}
            </div>
          ))}

          {/* 6. Principal's Desk Card (2 cols) */}
          <div className="md:col-span-2 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-600/30 shrink-0 bg-slate-100 shadow-md">
              <Image
                src={PRINCIPAL_DATA.image}
                alt={PRINCIPAL_DATA.name}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded mb-1.5 inline-block">
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

          {/* 7. Sanstha Legacy & Impact Metrics (2 cols) */}
          <div className="md:col-span-2 bg-gradient-to-br from-[#002b66] to-[#001737] text-white rounded-3xl p-6 border border-blue-900 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffcc00] bg-amber-400/20 px-2 py-0.5 rounded mb-1.5 inline-block">
                Sanstha Legacy (Since 1954)
              </span>
              <h4 className="font-bold text-white text-base mb-1">
                Shri Swami Vivekanand Shikshan Sanstha
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Founded in 1954 by Shikshanmaharshi Dr. Bapuji Salunkhe with the vision of educational dissemination
                across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-white/10 text-center">
              {SANSTHA_METRICS.map((met, mIdx) => (
                <div key={mIdx} className="bg-white/5 p-2 rounded-xl border border-white/5">
                  <div className="text-lg font-extrabold text-[#ffcc00] font-mono">
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
