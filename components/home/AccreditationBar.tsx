export default function AccreditationBar() {
  const accreditations = [
    {
      img: "/images/aicte-100x100.jpg",
      title: "AICTE",
      sub: "Govt. of India Approval",
    },
    {
      img: "/images/logo_dte-98x100.jpg",
      title: "DTE Maharashtra",
      sub: "Institute Code: 6468",
    },
    {
      img: "/images/batu-66x100.jpg",
      title: "DBATU, Lonere",
      sub: "Affiliated B.Tech Degrees",
    },
    {
      img: "/images/msbte-101x100.jpg",
      title: "MSBTE, Mumbai",
      sub: "Polytechnic Diplomas",
    },
    {
      img: "/images/mhadbt-165x100.jpg",
      title: "MahaDBT Portal",
      sub: "100% Scholarship Benefit",
    },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-4 sm:py-6 px-3.5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 sm:text-slate-500 mb-3 sm:mb-5">
          Statutory Recognitions, University Affiliations &amp; Portals
        </p>

        {/* Mobile: Horizontal snap scroll with peek effect | Desktop: Centered flex row */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-2.5 sm:gap-8 sm:flex-wrap sm:justify-center items-center py-1">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="shrink-0 snap-center flex items-center gap-2.5 bg-slate-50 sm:bg-transparent border border-slate-200/80 sm:border-0 rounded-xl px-3 py-2 sm:p-0 transition-all hover:scale-105"
            >
              <img
                src={acc.img}
                alt={acc.title}
                className="h-8 sm:h-12 w-auto object-contain shrink-0"
              />
              <div className="text-left whitespace-nowrap">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {acc.title}
                </strong>
                <span className="text-[10px] sm:text-[11px] text-slate-500">
                  {acc.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
