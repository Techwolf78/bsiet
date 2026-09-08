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

        {/* 1. PRESIDENT HERO BENTO CARD (Full Photo with Overlaid Message) */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-amber-300/90 shadow-xl mb-8 group bg-gradient-to-br from-amber-50/40 via-white to-slate-100 min-h-[460px] sm:min-h-[500px] flex items-end">
          {/* Whole Photo covering the Bento card */}
          <Image
            src={HERO_LEADER.image}
            alt={HERO_LEADER.name}
            fill
            priority
            className="object-cover object-top sm:object-right-top group-hover:scale-105 transition-transform duration-700"
            sizes="(max-width: 1024px) 100vw, 1200px"
          />

          {/* Vignette Scrim for depth and contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Floating Badge */}
          <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10 flex flex-wrap items-center gap-2">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md border border-amber-300">
              👑 Hon&apos;ble President
            </span>
            <span className="bg-white/95 backdrop-blur-md text-slate-800 font-bold text-xs px-3.5 py-1.5 rounded-full shadow-sm hidden sm:inline-block border border-slate-200">
              Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
            </span>
          </div>

          {/* Over That Photo: The Message Card */}
          <div className="relative z-10 w-full p-4 sm:p-6 lg:p-8">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-amber-300/80 shadow-2xl max-w-2xl">
              <span className="text-[11px] font-bold text-amber-800 uppercase tracking-wider block mb-1 sm:hidden">
                Shri Swami Vivekanand Shikshan Sanstha, Kolhapur
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                {HERO_LEADER.name}
              </h3>
              <p className="text-xs sm:text-sm font-bold text-blue-900 mb-3">
                {HERO_LEADER.role}
              </p>

              {/* Quote */}
              <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-r-xl p-3.5 sm:p-4 shadow-xs">
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{HERO_LEADER.quote}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2. THE 4 SANSTHA LEADERS (Light Theme Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {SANSTHA_LEADERS.map((ldr) => (
            <div
              key={ldr.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Full-width photo frame */}
                <div className="relative w-full h-52 sm:h-56 bg-slate-100 overflow-hidden">
                  <Image
                    src={ldr.image}
                    alt={ldr.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  {ldr.tag && (
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs"
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

        {/* 3. PRINCIPAL'S DESK & SANSTHA HERITAGE METRICS (Light Theme) */}
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

          {/* Sanstha Legacy & Impact Metrics (Light Theme) */}
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
