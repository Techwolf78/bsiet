export default function CampusLife() {
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
