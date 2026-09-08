import Image from "next/image";
import Link from "next/link";
import { DEPARTMENTS } from "@/data/departments";

export default function DepartmentLabs() {
  return (
    <section className="py-16 px-4 bg-white" id="departments">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Infrastructure &amp; Research
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
            Academic Departments &amp; Labs
          </h2>
          <p className="text-slate-600 text-sm">
            State-of-the-art laboratory infrastructure designed to give engineering students real-world practical
            mastery from day one.
          </p>
        </div>

        {/* 5 Department Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.slug}
              className="group bg-white rounded-2xl border border-slate-200 hover:border-blue-500 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Frame with Frosted Badge */}
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <Image
                  src={dept.image}
                  alt={`${dept.name} Lab`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-white/20">
                  {dept.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1.5 leading-snug group-hover:text-blue-900 transition-colors">
                    {dept.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">
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
