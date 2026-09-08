import Link from "next/link";

interface HeritageMissionProps {
  onOpenEnquiry?: () => void;
}

export default function HeritageMission({ onOpenEnquiry }: HeritageMissionProps) {
  const whyChooseReasons = [
    {
      icon: (
        <svg className="w-6 h-6 text-red-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      pill: "Prime Location",
      pillBg: "bg-red-50 text-red-700 border-red-200/70",
      title: "Prime City Center Location",
      desc: "Situated in Tarabai Park, Kolhapur — safe, elite educational precinct, easily accessible and connected to Central Bus Stand (CBS) and Railway Station.",
      perks: ["5 Mins from Central Bus Stand", "Safe Student Precinct", "Transit Hub Connectivity"],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      pill: "Industry 4.0",
      pillBg: "bg-blue-50 text-blue-700 border-blue-200/70",
      title: "Outcome Based Education (OBE)",
      desc: "Strong curriculum alignment with modern tech standards, coding bootcamps, AI/ML computing clusters, precision CNC centers, and active technical clubs.",
      perks: ["Hands-On Lab Mastery", "Live Industry Capstones", "National Hackathon Teams"],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      pill: "Financial Support",
      pillBg: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
      title: "100% Government Scholarships",
      desc: "Dedicated MahaDBT facilitation desk providing end-to-end processing for EBC, TFWS, SC, ST, VJNT, OBC, SBC, and Minority fee concessions.",
      perks: ["Zero-Delay Processing", "100% Fee Concessions Supported", "Dedicated Guidance Desk"],
    },
    {
      icon: (
        <svg className="w-6 h-6 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      pill: "Corporate Connect",
      pillBg: "bg-amber-50 text-amber-800 border-amber-200/70",
      title: "Active Training & Placement Cell",
      desc: "Comprehensive pre-placement training, soft skills, aptitude drills, and direct campus recruitments with leaders like Tata, Bajaj, Bharat Forge, Kirloskar, and Cummins.",
      perks: ["90%+ Placement Assistance", "12 LPA Highest Package", "Industry Internship Tie-ups"],
    },
  ];

  return (
    <section className="py-14 sm:py-16 px-4 bg-slate-50/60 relative overflow-hidden" id="about">
      {/* Subtle decorative background gradients */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            Our Heritage &amp; Mission
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
            Rooted in Tradition,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b66] via-blue-700 to-indigo-600">
              Driven by Technology
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Founded under the banner of{" "}
            <strong className="text-slate-900 font-semibold">Shri Swami Vivekanand Shikshan Sanstha</strong>, Dr. Bapuji
            Salunkhe Institute of Engineering &amp; Technology (BSIET) is dedicated to delivering industry-ready
            engineering talent with ethical values and social responsibility.
          </p>
        </div>

        {/* Vision & Mission Cards Grid (Compact & Clean Light Theme) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
          {/* Vision Card */}
          <div className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:border-red-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 border border-red-200/60 flex items-center justify-center text-red-600 shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Our Vision
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-700 bg-red-50 border border-red-200/70 px-2.5 py-0.5 rounded-full">
                  Vision
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic border-l-2 border-red-600 pl-3 py-1 my-3 bg-slate-50/70 rounded-r-lg">
                &ldquo;To be the institute of quality engineering education and research for producing capable industry
                professionals with responsibilities towards nation building.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Quality Technical Education
              </span>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Applied Research
              </span>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Nation Building
              </span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/60 flex items-center justify-center text-[#002b66] shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Our Mission
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#002b66] bg-blue-50 border border-blue-200/70 px-2.5 py-0.5 rounded-full">
                  Mission
                </span>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic border-l-2 border-blue-600 pl-3 py-1 my-3 bg-slate-50/70 rounded-r-lg">
                &ldquo;To imbibe and implement outcome-based education for effective teaching-learning process, bridging
                industrial demands through hands-on practical competencies, technical ethics, and collaborative
                research.&rdquo;
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Outcome-Based Education (OBE)
              </span>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Hands-on Competency
              </span>
              <span className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/60 px-2.5 py-0.5 rounded-md">
                ✓ Industry-Ready Ethics
              </span>
            </div>
          </div>
        </div>

        {/* Why Choose BSIET Kolhapur? — 4 Decision Factors */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-[#002b66]/10 text-[#002b66] border border-[#002b66]/20 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
              Admission Decision Factors
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              Why Choose BSIET Kolhapur?
            </h3>
            <p className="text-slate-600 text-sm">
              Discover the strategic, academic, and placement advantages that make BSIET Kolhapur the preferred choice
              for engineering aspirants across Maharashtra and Karnataka.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseReasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 hover:border-blue-500 hover:bg-white shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.pillBg}`}>
                      {item.pill}
                    </span>
                  </div>

                  <h4 className="font-extrabold text-slate-900 text-base mb-2 leading-snug">
                    {item.title}
                  </h4>

                  <p className="text-slate-600 text-xs leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <ul className="space-y-1.5">
                    {item.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                        <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout Banner (Light Theme) */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-200/80 rounded-2xl p-6 sm:p-8 text-slate-900 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <span className="text-[11px] font-extrabold text-blue-900 uppercase tracking-wider block mb-1">
                Admissions Open 2026-27 · DTE Code: 6468
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                Start Your Career at Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                DBATU Lonere affiliated B.Tech Degrees and MSBTE Mumbai affiliated Polytechnic Diplomas with 100% scholarship support.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-red-600/20 transition-all cursor-pointer whitespace-nowrap"
                >
                  Enquire for Admission 2026
                </button>
              )}
              <Link
                href="/admissions"
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-xs transition-all whitespace-nowrap"
              >
                Admission Criteria &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
