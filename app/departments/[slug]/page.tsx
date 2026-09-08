import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DEPARTMENTS } from "@/data/departments";
import ComputerEngineeringShowcase from "@/components/departments/ComputerEngineeringShowcase";

export function generateStaticParams() {
  return DEPARTMENTS.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dept = DEPARTMENTS.find((d) => d.slug === slug);

  if (!dept) {
    notFound();
  }

  if (slug === "computer-engineering") {
    return <ComputerEngineeringShowcase />;
  }

  const labsList = dept.keyLabs.split(",").map((l) => l.trim());

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-blue-900">Home</Link>
          <span>/</span>
          <Link href="/departments" className="hover:text-blue-900">Departments</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{dept.name}</span>
        </div>

        {/* Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 bg-slate-950 text-white min-h-[360px] flex items-end p-6 sm:p-12">
          <Image
            src={dept.image}
            alt={dept.name}
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="relative z-10 max-w-3xl">
            <span className="bg-[#ffcc00] text-slate-950 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-3">
              Department of {dept.shortName}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              {dept.name}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {dept.overview}
            </p>
          </div>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Laboratory Infrastructure */}
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 border-l-4 border-red-700 pl-3">
                Key Laboratory Facilities &amp; Equipment
              </h2>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Students receive hands-on lab training under experienced faculty and lab assistants. Practical sessions
                accompany every technical course from semester one.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {labsList.map((lab, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-start gap-3"
                  >
                    <span className="w-7 h-7 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <div>
                      <strong className="text-slate-900 text-sm block mb-0.5">{lab}</strong>
                      <span className="text-slate-500 text-xs">High-end equipment and testing benches</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum Strengths */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Career Pathways &amp; Industry Relevance
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                Graduates from the {dept.name} department are recruited across core engineering companies, multinational
                consulting firms, and research laboratories. Specialized value-added certificate courses in Industry 4.0,
                AI integration, and cloud tools are provided each semester.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-700">
                  ✓ Industry Internships
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-700">
                  ✓ Major &amp; Minor Capstone Projects
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-700">
                  ✓ Technical Paper Publications
                </span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full font-medium text-slate-700">
                  ✓ Campus Placement Preparation
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* HOD Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm text-center">
              <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-amber-400 mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-slate-700">
                👨‍🏫
              </div>
              <h3 className="font-bold text-slate-900 text-base">{dept.hodName}</h3>
              <span className="text-xs text-slate-500 font-semibold block mt-0.5 mb-4">
                {dept.hodTitle}
              </span>
              <p className="text-slate-600 text-xs leading-relaxed italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                &ldquo;We focus on translating classroom engineering concepts into concrete, functional products and
                solutions.&rdquo;
              </p>
            </div>

            {/* Quick Apply Card */}
            <div className="bg-gradient-to-br from-[#002b66] to-[#07172e] text-white p-6 rounded-3xl border border-blue-900 shadow-md">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffcc00] bg-amber-400/20 px-2 py-0.5 rounded">
                DTE: 6468
              </span>
              <h4 className="text-lg font-bold text-white mt-2 mb-2">
                Join {dept.shortName} at BSIET
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed mb-5">
                Limited seats available for Academic Year 2026-27. Apply through CAP or institutional quota.
              </p>
              <Link
                href="/admissions"
                className="block text-center bg-[#ffcc00] hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 px-4 rounded-xl shadow transition-all"
              >
                Admission Guidance &raquo;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
