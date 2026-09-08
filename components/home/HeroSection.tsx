import Link from "next/link";

interface HeroSectionProps {
  onOpenEnquiry: () => void;
  onOpenBrochure: () => void;
}

export default function HeroSection({ onOpenEnquiry, onOpenBrochure }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#040d1a] via-[#07172e] to-[#0a2540] text-white py-16 lg:py-24 px-4 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            DTE Code: 6468 · AICTE &amp; Maharashtra State Approved
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5">
            Empowering Next-Gen Engineers with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
              World-Class Innovation
            </span>{" "}
            &amp; Values.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology (BSIET), located in Tarabai Park, Kolhapur,
            offers industry-focused B.Tech Degree &amp; Polytechnic Diploma engineering courses with state-of-the-art
            AI &amp; computing labs, CNC workshops, and premier corporate placement partnerships.
          </p>

          <div className="flex flex-wrap items-center gap-4">
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
        </div>
      </div>
    </section>
  );
}
