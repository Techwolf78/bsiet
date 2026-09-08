import Link from "next/link";

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
}

export default function HeroSection({ onOpenEnquiry, onOpenBrochure }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#040d1a] via-[#07172e] to-[#0a2540] text-white py-14 lg:py-20 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Text, CTAs & Quick Stats */}
          <div className="lg:col-span-7">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              DTE Code: 6468 · AICTE &amp; Maharashtra State Approved
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
              Empowering Next-Gen Engineers with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                World-Class Innovation
              </span>{" "}
              &amp; Values.
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology (BSIET), located in Tarabai Park, Kolhapur,
              offers industry-focused B.Tech Degree &amp; Polytechnic Diploma engineering courses with state-of-the-art
              AI &amp; computing labs, CNC workshops, and premier corporate placement partnerships.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all cursor-pointer"
              >
                Enquire for Admission 2026
              </button>

              <Link
                href="/academics"
                className="border border-white/25 hover:border-white/60 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-all"
              >
                Explore Programs &amp; Intake
              </Link>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 border border-amber-400/40 hover:border-amber-400 bg-amber-400/10 hover:bg-amber-400/20 text-amber-300 font-semibold text-sm px-5 py-3 rounded-lg transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-amber-400 font-mono">15+</span>
                <span className="text-[11px] text-slate-300 font-medium">Years of Excellence</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-white font-mono">6468</span>
                <span className="text-[11px] text-slate-300 font-medium">DTE Choice Code</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-400 font-mono">90%+</span>
                <span className="text-[11px] text-slate-300 font-medium">Placement Support</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-white font-mono">2500+</span>
                <span className="text-[11px] text-slate-300 font-medium">Engineers Graduated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Campus Induction Image & Floating Badges */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Top Floating Badge */}
            <div className="absolute -top-5 right-2 sm:-right-3 z-20 bg-[#0a2540]/90 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:px-4 sm:py-3 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <div className="leading-tight">
                <strong className="block text-xs sm:text-sm font-bold text-white">DBATU &amp; MSBTE</strong>
                <span className="text-[11px] text-slate-300">Dual Accreditation Pathways</span>
              </div>
            </div>

            {/* Main Campus Induction Photo Stack */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group bg-[#07172e]">
              <img
                src="/images/Induction-program-561x420.jpeg"
                alt="BSIET College Induction & Campus Life"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a]/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/95 font-medium backdrop-blur-sm bg-black/50 px-3.5 py-2 rounded-lg border border-white/10">
                📍 Induction Program &amp; Student Induction Ceremony @ BSIET Kolhapur
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 left-2 sm:-left-3 z-20 bg-[#0a2540]/90 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:px-4 sm:py-3 shadow-2xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <strong className="block text-xs sm:text-sm font-bold text-white">Top MNC Recruiters</strong>
                <span className="text-[11px] text-slate-300">Tata, Bajaj, Cummins, Bharat Forge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
