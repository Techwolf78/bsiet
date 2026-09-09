import Link from "next/link";

interface HeritageMissionProps {
  onOpenEnquiry?: () => void;
}

export default function HeritageMission({ onOpenEnquiry }: HeritageMissionProps) {
  const whyChooseReasons = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      pill: "Prime Location",
      pillBg: "bg-red-50 text-red-700 border-red-200/70",
      title: "Prime City Center Location",
      desc: "Situated in Tarabai Park, Kolhapur — safe, elite educational precinct, 5 mins from CBS bus stand and railway station.",
      perks: ["5 Mins from Central Bus Stand", "Safe Student Precinct", "Transit Hub Connectivity"],
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      pill: "Industry 4.0",
      pillBg: "bg-blue-50 text-blue-700 border-blue-200/70",
      title: "Outcome Based Education",
      desc: "Curriculum aligned with modern tech standards, AI/ML computing clusters, precision CNC centers, and active coding clubs.",
      perks: ["Hands-On Lab Mastery", "Live Industry Capstones", "National Hackathon Teams"],
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      pill: "Scholarships",
      pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
      title: "100% Govt Scholarships",
      desc: "Dedicated MahaDBT desk providing end-to-end processing for EBC, TFWS, SC, ST, VJNT, OBC, and Minority fee concessions.",
      perks: ["Zero-Delay Processing", "100% Fee Concessions", "Dedicated Guidance Desk"],
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      pill: "Corporate",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200/70",
      title: "Active Placement Cell",
      desc: "Pre-placement training, aptitude drills, and direct campus recruitments with Tata, Bajaj, Bharat Forge, and Kirloskar.",
      perks: ["90%+ Placement Support", "12 LPA Highest Package", "Internship Tie-ups"],
    },
  ];

  return (
    <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-slate-50/60 relative overflow-hidden" id="about">
      {/* Subtle decorative background gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Our Heritage &amp; Mission
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 sm:mb-3">
            Rooted in Tradition,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b66] via-blue-700 to-indigo-600">
              Driven by Technology
            </span>
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Founded under <strong className="text-slate-900 font-semibold">Shri Swami Vivekanand Shikshan Sanstha</strong>, Dr. Bapuji
            Salunkhe Institute of Engineering &amp; Technology (BSIET) prepares industry-ready engineers with ethical values.
          </p>
        </div>

        {/* Vision & Mission Container */}
        <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
          {/* 1. Our Vision */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between gap-3 mb-2 sm:mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-red-50 border border-red-200/60 flex items-center justify-center text-red-600 shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Our Vision
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/70 px-2 py-0.5 rounded-full">
                Vision
              </span>
            </div>

            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic border-l-3 sm:border-l-4 border-red-600 pl-3 sm:pl-4 py-1.5 sm:py-2 bg-slate-50/80 rounded-r-xl font-medium">
              &ldquo;To be the institute of quality engineering education and research for producing capable industry professionals with responsibilities towards nation building.&rdquo;
            </p>
          </div>

          {/* 2. Our Mission Directives (2x2 on Mobile, 4 Cols on Desktop) */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all">
            <div className="flex items-center justify-between gap-3 mb-3 sm:mb-5 pb-2 sm:pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#002b66] shrink-0">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-xl font-extrabold text-slate-900">
                  Our Mission Directives
                </h3>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#002b66] bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-full">
                Directives
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="inline-block bg-blue-100 text-[#002b66] text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md mb-1.5">
                  M1 · OBE
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Implement outcome-based education for an effective teaching-learning process.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="inline-block bg-indigo-100 text-indigo-900 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md mb-1.5">
                  M2 · Research
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Foster critical thinking, research aptitude, and problem-solving skills among students &amp; faculty.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="inline-block bg-cyan-100 text-cyan-900 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md mb-1.5">
                  M3 · Industry
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Strengthen corporate interactions to upskill students for high-value internships and placements.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
                <span className="inline-block bg-emerald-100 text-emerald-900 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-md mb-1.5">
                  M4 · Ethics
                </span>
                <p className="text-slate-700 text-xs leading-relaxed">
                  Sensitise stakeholders towards ethics, social harmony, environment, and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose BSIET Kolhapur? (Swipeable on Mobile, 4-Col Grid on Desktop) */}
        <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-10 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-10">
            <span className="bg-[#002b66]/10 text-[#002b66] border border-[#002b66]/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-0.5 rounded-full">
              Admission Decision Factors
            </span>
            <h3 className="text-lg sm:text-3xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-1 sm:mb-2">
              Why Choose BSIET Kolhapur?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm">
              Strategic, academic, and placement advantages preferred by engineering aspirants.
            </p>
          </div>

          {/* Mobile: Horizontal swipe carousel with peek | Desktop: 4 columns */}
          <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 pb-2 md:pb-0">
            {whyChooseReasons.map((item, idx) => (
              <div
                key={idx}
                className="w-[82vw] max-w-[290px] shrink-0 snap-center md:w-auto md:shrink bg-slate-50/80 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-blue-500 hover:bg-white shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.pillBg}`}>
                      {item.pill}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base mb-1.5 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed mb-3 sm:mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <ul className="space-y-1">
                    {item.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-slate-700">
                        <svg className="w-3 h-3 text-emerald-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner */}
          <div className="mt-6 sm:mt-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xs">
            <div className="text-center sm:text-left">
              <span className="text-[10px] sm:text-[11px] font-extrabold text-blue-900 uppercase tracking-wider block mb-0.5 sm:mb-1">
                Admissions Open 2026-27 · DTE: 6468
              </span>
              <h4 className="text-base sm:text-2xl font-black text-slate-900">
                Join Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl">
                B.Tech Degrees (DBATU) and Polytechnic Diplomas (MSBTE) with 100% scholarship processing.
              </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="flex-1 sm:flex-none bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-md hover:shadow-red-600/20 transition-all cursor-pointer whitespace-nowrap text-center"
                >
                  Enquire 2026
                </button>
              )}
              <Link
                href="/admissions"
                className="flex-1 sm:flex-none bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg shadow-xs transition-all whitespace-nowrap text-center"
              >
                Criteria &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
