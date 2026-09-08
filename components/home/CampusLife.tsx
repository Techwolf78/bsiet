export default function CampusLife() {
  const photoCards = [
    {
      img: "/images/DSC06540-561x315.jpg",
      title: "Central Library & E-Resource Hub",
      desc: "Extensive collection of engineering volumes, national & international journals, DELNET e-resources, and air-conditioned reading halls.",
    },
    {
      img: "/images/Mechanical-2-561x701.jpeg",
      title: "Advanced Workshops & CNC Centers",
      desc: "Fully equipped machine shop, precision CNC lathes, milling machines, foundry, welding, and metallurgy testing facilities.",
    },
    {
      img: "/images/Award--561x467.png",
      title: "Sports, Gymkhana & Cultural Clubs",
      desc: "Spacious sports grounds, indoor badminton, robotics club, annual technical festivals, and active student extracurricular activities.",
    },
  ];

  const facilities = [
    {
      title: "Central Digital Library",
      desc: "Engineering reference volumes, IEEE journals, DELNET e-resources, and a peaceful dedicated reading hall.",
      iconBg: "bg-blue-50 text-blue-700 border-blue-100",
      icon: (
        <svg className="w-5 h-5 text-blue-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
    {
      title: "High-Speed Computing Hub",
      desc: "Gigabit internet connectivity, Intel Core i7 workstations, and cloud sandbox labs for practical coursework.",
      iconBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
      icon: (
        <svg className="w-5 h-5 text-indigo-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
          <path d="m8 9 2 2-2 2" />
          <line x1="12" y1="13" x2="16" y2="13" />
        </svg>
      ),
    },
    {
      title: "Precision Workshop & CNC",
      desc: "Lathe machines, precision CNC setups, milling equipment, welding booth, and practical foundry workshop.",
      iconBg: "bg-amber-50 text-amber-700 border-amber-100",
      icon: (
        <svg className="w-5 h-5 text-amber-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      title: "Hostel & Dining Facilities",
      desc: "Safe, secure hostel accommodations with nutritious mess facilities, clean dining, and round-the-clock security.",
      iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <line x1="9" y1="22" x2="9" y2="2" />
          <path d="M14 6h2" />
          <path d="M14 10h2" />
          <path d="M14 14h2" />
          <path d="M14 18h2" />
        </svg>
      ),
    },
    {
      title: "Sports & Physical Fitness",
      desc: "Outdoor sports grounds, cricket practice area, indoor badminton court, and campus fitness spaces.",
      iconBg: "bg-rose-50 text-rose-700 border-rose-100",
      icon: (
        <svg className="w-5 h-5 text-rose-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1h10v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2z" />
        </svg>
      ),
    },
    {
      title: "Technical Clubs & Hackathons",
      desc: "Active student clubs for coding, robotics, solar vehicle innovation, and state-level competition participation.",
      iconBg: "bg-purple-50 text-purple-700 border-purple-100",
      icon: (
        <svg className="w-5 h-5 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 px-4 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Campus Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
            Campus Infrastructure &amp; Facilities
          </h2>
          <p className="text-slate-600 text-sm">
            Equipped for holistic student development with modern classrooms, practical workshops, sports spaces, and
            student amenities in the heart of Kolhapur.
          </p>
        </div>

        {/* 3 Prominent Facility Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {photoCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="h-52 overflow-hidden bg-slate-100 relative">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 text-base mb-2">{card.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Core Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 border ${fac.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                  {fac.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-blue-900 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
