import PlacementRecruiters from "@/components/home/PlacementRecruiters";

export default function PlacementsPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Career Readiness
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Training &amp; Placement Cell (TPO)
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The dedicated Training and Placement Office at BSIET Kolhapur bridges the gap between academia and industry,
            empowering engineering students with aptitude conditioning, coding workshops, and campus placement drives.
          </p>
        </div>

        {/* TPO Message Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 mb-16" id="message">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900">
              Training &amp; Placement Officer&apos;s Message
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-4">
              Building Industry-Ready Engineers
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              &ldquo;Our structured 4-year training pathway introduces students to corporate soft skills in their second
              year, full-stack coding and specialized CAD tools in their third year, and rigorous mock interview rounds
              with industry leaders during their final year.&rdquo;
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              With deep ties across Pune, Mumbai, Kolhapur, and Bangalore manufacturing and software clusters, BSIET
              ensures every deserving graduate steps into a rewarding engineering career.
            </p>
          </div>
        </div>

        {/* Full Placement Section with Marquee */}
        <PlacementRecruiters />

        {/* Alumni Portal Notice (Light Theme) */}
        <div className="mt-16 bg-gradient-to-r from-amber-50/80 via-yellow-50/40 to-slate-50 border-2 border-amber-200/90 text-slate-900 rounded-3xl p-8 sm:p-10 shadow-sm" id="alumni">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded font-bold">
              Global Network
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-3 mb-3">
              BSIET Alumni Association
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
              Our alumni network spans top technology firms, automotive leaders, government services, and successful
              startup founders across India and abroad. Stay connected and mentor the next generation.
            </p>
            <a
              href="mailto:tpo@bsiet.org?subject=Alumni%20Registration"
              className="inline-flex items-center gap-2 bg-[#002b66] hover:bg-blue-900 text-[#ffcc00] font-bold text-xs px-6 py-3 rounded-xl shadow transition-all cursor-pointer"
            >
              Register on Alumni Portal &raquo;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
