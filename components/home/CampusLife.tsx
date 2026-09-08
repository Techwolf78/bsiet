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
      desc: "Fully equipped machine shop, precision CNC lathes, milling machines, foundry, welding, and state-of-the-art metallurgy testing facilities.",
    },
    {
      img: "/images/Award--561x467.png",
      title: "Sports, Gymkhana & Cultural Clubs",
      desc: "Spacious sports grounds, indoor badminton, robotics club, annual technical festivals, and vibrant student extracurricular achievements.",
    },
  ];

  const facilities = [
    {
      title: "Central Digital Library",
      desc: "Thousands of engineering reference volumes, IEEE journals, DELNET e-resources, and a peaceful reading hall.",
      icon: "📚",
    },
    {
      title: "High-Speed Computing Hub",
      desc: "Gigabit internet backbone, high-performance Intel Core i7 workstations, and cloud computing sandbox.",
      icon: "💻",
    },
    {
      title: "Precision Workshop & CNC",
      desc: "Heavy machinery, CNC lathes, milling machines, welding shop, and modern metallurgy testing setups.",
      icon: "⚙️",
    },
    {
      title: "Hostel & Dining Facilities",
      desc: "Safe, secure hostel accommodations with nutritious mess facilities and 24/7 security surveillance.",
      icon: "🏢",
    },
    {
      title: "Sports & Physical Fitness",
      desc: "Spacious outdoor playgrounds, cricket turf, indoor badminton courts, and state-of-the-art gymnasiums.",
      icon: "🏏",
    },
    {
      title: "Technical Clubs & Hackathons",
      desc: "Active student chapters for coding, robotics, solar vehicle projects, and national hackathon participation.",
      icon: "🚀",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white" id="facilities">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Campus Ecosystem
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
            World-Class Campus Facilities
          </h2>
          <p className="text-slate-600 text-sm">
            Designed for 360-degree student development with modern classrooms, smart sports infrastructure, and
            holistic living amenities in the heart of Kolhapur.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 hover:border-blue-500 shadow-sm hover:shadow-md transition-all bg-slate-50/50 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{fac.icon}</div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{fac.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{fac.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
