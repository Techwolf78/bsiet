import Image from "next/image";
import Link from "next/link";
import { DEPARTMENTS } from "@/data/departments";

export default function DepartmentLabs() {
  return (
    <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-white" id="departments">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <span className="bg-red-100 text-red-700 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
            Infrastructure &amp; Research
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-2 sm:mt-3 mb-1 sm:mb-2">
            Academic Departments &amp; Labs
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            State-of-the-art laboratory infrastructure designed for practical engineering mastery.
          </p>
        </div>

        {/* Mobile: Smooth horizontal swipe carousel with peek | Desktop: 5-column grid */}
        <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory lg:grid lg:grid-cols-5 gap-3.5 sm:gap-5 pb-3 lg:pb-0">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.slug}
              className="w-[78vw] max-w-[280px] shrink-0 snap-center lg:w-auto lg:shrink group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Frosted Badge */}
              <div className="relative h-38 sm:h-44 overflow-hidden bg-slate-100">
                <Image
                  src={dept.image}
                  alt={`${dept.name} Lab`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 bg-slate-950/80 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-white/20">
                  {dept.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1 leading-snug group-hover:text-blue-900 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                    <strong className="text-slate-700">Key Labs:</strong> {dept.keyLabs}
                  </p>
                </div>

                <Link
                  href={`/departments/${dept.slug}`}
                  className="text-red-700 hover:text-red-800 text-xs font-bold inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                >
                  Explore Dept &raquo;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
