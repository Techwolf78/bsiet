export default function StatStrip() {
  const stats = [
    { value: "1954", label: "Sanstha Legacy Founded", sub: "70+ Years of Service" },
    { value: "330+", label: "Institutes in Sanstha", sub: "Pan-Maharashtra Reach" },
    { value: "90%+", label: "Placement Assistance", sub: "Top Core & IT Recruiters" },
    { value: "6468", label: "DTE Choice Code", sub: "Government Recognized" },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200 py-4 sm:py-6 px-3.5 sm:px-4 shadow-xs">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 text-center">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center bg-white sm:bg-transparent border border-slate-200 sm:border-0 rounded-xl p-2.5 sm:p-0 shadow-xs sm:shadow-none"
          >
            <span className="text-xl sm:text-3xl font-black text-[#002b66] font-mono tracking-tight">
              {item.value}
            </span>
            <span className="text-slate-900 text-[11px] sm:text-sm font-extrabold mt-0.5 sm:mt-1 leading-tight">
              {item.label}
            </span>
            <span className="text-slate-500 text-[10px] sm:text-[11px] font-medium hidden sm:inline">
              {item.sub}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
