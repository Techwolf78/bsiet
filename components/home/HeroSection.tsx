import Link from "next/link";

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
}

export default function HeroSection({ onOpenEnquiry, onOpenBrochure }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/70 via-slate-50 to-white text-slate-900 py-14 lg:py-20 px-4 overflow-hidden border-b border-slate-200/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Text, CTAs & Quick Stats */}
          <div className="lg:col-span-7">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-blue-100/80 border border-blue-300 text-blue-900 text-xs font-bold px-3.5 py-1.5 rounded-full mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              DTE Code: 6468 · AICTE &amp; Maharashtra State Approved
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
              Empowering Next-Gen Engineers with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002b66] via-blue-700 to-indigo-600">
                Practical Innovation
              </span>{" "}
              &amp; Values.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology (BSIET), located in Tarabai Park, Kolhapur,
              offers industry-focused B.Tech Degree &amp; Polytechnic Diploma engineering courses with state-of-the-art
              AI &amp; computing labs, CNC workshops, and premier corporate placement partnerships.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={onOpenEnquiry}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:shadow-red-600/20 transition-all cursor-pointer"
              >
                Enquire for Admission 2026
              </button>

              <Link
                href="/academics"
                className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-3 rounded-lg shadow-xs transition-all"
              >
                Explore Programs &amp; Intake
              </Link>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 border border-amber-400 hover:border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-sm px-5 py-3 rounded-lg shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 text-amber-700 fill-current" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                <span>Download Brochure</span>
              </button>
            </div>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-200">
              <div className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-amber-600 font-mono">15+</span>
                <span className="text-[11px] text-slate-600 font-semibold">Years of Excellence</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-[#002b66] font-mono">6468</span>
                <span className="text-[11px] text-slate-600 font-semibold">DTE Choice Code</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-emerald-600 font-mono">90%+</span>
                <span className="text-[11px] text-slate-600 font-semibold">Placement Support</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-sm rounded-xl p-3 text-center">
                <span className="block text-xl sm:text-2xl font-black text-[#002b66] font-mono">2500+</span>
                <span className="text-[11px] text-slate-600 font-semibold">Engineers Graduated</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Campus Induction Image & Floating Badges */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Top Floating Badge */}
            <div className="absolute -top-5 right-2 sm:-right-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 sm:px-4 sm:py-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
                </svg>
              </div>
              <div className="leading-tight">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900">DBATU &amp; MSBTE</strong>
                <span className="text-[11px] text-slate-500 font-medium">Dual Accreditation Pathways</span>
              </div>
            </div>

            {/* Main Campus Induction Photo Stack */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200 shadow-2xl group bg-white">
              <img
                src="/images/Induction-program-561x420.jpeg"
                alt="BSIET College Induction & Campus Life"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white font-semibold backdrop-blur-sm bg-black/60 px-3.5 py-2 rounded-lg border border-white/20">
                📍 Induction Program &amp; Student Induction Ceremony @ BSIET Kolhapur
              </div>
            </div>

            {/* Bottom Floating Badge */}
            <div className="absolute -bottom-5 left-2 sm:-left-3 z-20 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-xl p-3 sm:px-4 sm:py-3 shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div className="leading-tight">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900">Top MNC Recruiters</strong>
                <span className="text-[11px] text-slate-500 font-medium">Tata, Bajaj, Cummins, Bharat Forge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
