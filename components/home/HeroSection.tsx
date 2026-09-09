import Link from "next/link";

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
}

export default function HeroSection({ onOpenEnquiry, onOpenBrochure }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50/40 via-slate-50 to-white text-slate-900 py-6 sm:py-14 lg:py-20 px-3.5 sm:px-6 overflow-hidden border-b border-slate-200/80">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-0 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ========================================================================= */}
        {/* MOBILE TOP POSTER (Matches Reference Screenshot)                          */}
        {/* ========================================================================= */}
        <div className="lg:hidden mb-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group bg-white">
            <img
              src="/images/Induction-program-561x420.jpeg"
              alt="BSIET Kolhapur Induction & Campus Life"
              className="w-full h-56 sm:h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-3 right-3 text-[11px] text-white font-semibold backdrop-blur-sm bg-black/60 px-3 py-1.5 rounded-lg border border-white/20 flex items-center justify-between">
              <span className="truncate">📍 Campus Life &amp; Student Induction Ceremony</span>
              <span className="text-[10px] text-slate-200 font-mono shrink-0 ml-2">DTE: 6468</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-12 items-center">
          {/* Main Text Content */}
          <div className="lg:col-span-7">
            {/* Headline matching Reference Screenshot Structure */}
            <div className="mb-4 sm:mb-5">
              <span className="block text-slate-800 text-lg sm:text-2xl font-extrabold tracking-tight mb-1">
                Explore Your Potential At
              </span>
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#002b66] leading-tight uppercase">
                Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
              </h1>
            </div>

            <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
              Located in Tarabai Park, Kolhapur, Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology (BSIET)
              offers industry-focused B.Tech Degree &amp; Polytechnic Diploma engineering courses with state-of-the-art
              computing labs, precision CNC workshops, and active placement partnerships.
            </p>

            {/* CTAs with Unified, Professional Color Palette */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-10">
              <button
                onClick={onOpenEnquiry}
                className="w-full sm:w-auto bg-[#002b66] hover:bg-[#001f4d] text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer text-center"
              >
                Enquire for Admission 2026
              </button>

              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2.5 sm:gap-3">
                <Link
                  href="/academics"
                  className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-xs transition-all text-center flex items-center justify-center"
                >
                  Explore Programs
                </Link>

                <button
                  onClick={onOpenBrochure}
                  className="inline-flex items-center justify-center gap-1.5 border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5 text-slate-600 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                  </svg>
                  <span>Brochure</span>
                </button>
              </div>
            </div>

            {/* Stats Row - Unified Brand Navy Styling */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-slate-200">
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl p-2.5 sm:p-3 text-center">
                <span className="block text-lg sm:text-2xl font-black text-[#002b66] font-mono">15+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold">Years of Excellence</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl p-2.5 sm:p-3 text-center">
                <span className="block text-lg sm:text-2xl font-black text-[#002b66] font-mono">6468</span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold">DTE Choice Code</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl p-2.5 sm:p-3 text-center">
                <span className="block text-lg sm:text-2xl font-black text-[#002b66] font-mono">90%+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold">Placement Support</span>
              </div>
              <div className="bg-white border border-slate-200/90 shadow-xs rounded-xl p-2.5 sm:p-3 text-center">
                <span className="block text-lg sm:text-2xl font-black text-[#002b66] font-mono">2500+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-semibold">Engineers Graduated</span>
              </div>
            </div>
          </div>

          {/* Desktop Right Column: Poster Stack */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group bg-white">
              <img
                src="/images/Induction-program-561x420.jpeg"
                alt="BSIET College Induction & Campus Life"
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white font-semibold backdrop-blur-sm bg-black/60 px-3.5 py-2 rounded-lg border border-white/20">
                📍 Student Induction Ceremony @ BSIET Kolhapur
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
