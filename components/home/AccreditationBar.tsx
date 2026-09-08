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
    <section className="bg-white border-b border-slate-200 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
          Statutory Recognitions, University Affiliations &amp; Scholarship Portals
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {accreditations.map((acc, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 transition-all hover:scale-105"
            >
              <img
                src={acc.img}
                alt={acc.title}
                className="h-11 sm:h-12 w-auto object-contain"
              />
              <div className="text-left">
                <strong className="block text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {acc.title}
                </strong>
                <span className="text-[11px] text-slate-500">
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
