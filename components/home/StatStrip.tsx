export default function StatStrip() {
  const stats = [
    { value: "1954", label: "Sanstha Legacy Founded", sub: "70+ Years of Service" },
    { value: "330+", label: "Institutes in Sanstha", sub: "Pan-Maharashtra Reach" },
    { value: "90%+", label: "Placement Assistance", sub: "Top Core & IT Recruiters" },
    { value: "6468", label: "DTE Choice Code", sub: "Government Recognized" },
  ];

  return (
    <div className="bg-[#001f4d] border-y border-amber-400/30 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#ffcc00] font-mono tracking-tight">
              {item.value}
            </span>
            <span className="text-white text-xs sm:text-sm font-bold mt-1">
              {item.label}
            </span>
            <span className="text-slate-400 text-[11px]">
              {item.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
