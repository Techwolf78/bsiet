import Image from "next/image";
import BentoLeadership from "@/components/home/BentoLeadership";

export default function AboutPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            About Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Founded under the visionary banner of Shri Swami Vivekanand Shikshan Sanstha, Kolhapur — established in 1954
            with the sacred motto: &ldquo;ज्ञान, विज्ञान आणि सुसंस्कार यासाठी शिक्षणप्रसार&rdquo;.
          </p>
        </div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 mb-16" id="founder">
          <div className="md:col-span-4 flex justify-center">
            <div className="relative w-48 h-56 rounded-2xl overflow-hidden border-4 border-slate-200 shadow-xl bg-white">
              <Image
                src="/images/new-bapuji-logo-130x139.jpg"
                alt="Shikshanmaharshi Dr. Bapuji Salunkhe"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c01e2e]">
              The Revered Founder
            </span>
            <h2 className="text-2xl font-extrabold text-slate-900 mt-1 mb-3">
              Shikshanmaharshi Dr. Bapuji Salunkhe (1919 &ndash; 1987)
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              A towering figure in Maharashtra&apos;s educational renaissance, Dr. Bapuji Salunkhe dedicated his life to
              bringing quality education to the underprivileged, rural, and downtrodden sections of society.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              His vision blossomed into one of India&apos;s largest educational societies with over 330 schools, junior colleges,
              senior colleges, and professional technical institutions educating more than 2,00,000 students every year.
            </p>
          </div>
        </div>

        {/* Vision & Mission (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="vision">
          <div className="bg-white text-slate-900 p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#c01e2e]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#c01e2e] border border-red-100 flex items-center justify-center font-bold text-xl mb-4">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-slate-900">Our Vision</h3>
            <p className="text-slate-600 text-sm leading-relaxed italic border-l-2 border-[#c01e2e] pl-3 py-1 bg-slate-50 rounded-r-lg">
              &ldquo;To be the institute of quality engineering education and research for producing capable industry professionals with responsibilities towards nation building.&rdquo;
            </p>
          </div>

          <div className="bg-white text-slate-900 p-8 rounded-3xl border border-slate-200 shadow-sm hover:border-[#002b66]/40 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50/70 text-[#002b66] border border-blue-100 flex items-center justify-center font-bold text-xl mb-4">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-[#002b66]">Our Mission</h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border-l-2 border-[#002b66]">
                <span className="font-bold text-[#002b66] shrink-0">M1:</span>
                <p className="leading-relaxed">To imbibe and implement outcome-based education for effective teaching-learning process.</p>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border-l-2 border-[#002b66]">
                <span className="font-bold text-[#002b66] shrink-0">M2:</span>
                <p className="leading-relaxed">To upbring critical thinking, research aptitude and problem-solving attitude among the students &amp; teachers.</p>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border-l-2 border-[#002b66]">
                <span className="font-bold text-[#002b66] shrink-0">M3:</span>
                <p className="leading-relaxed">To strengthen industry interactions for upskilling and solving real world problems towards better internship &amp; job opportunities.</p>
              </div>
              <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border-l-2 border-[#002b66]">
                <span className="font-bold text-[#002b66] shrink-0">M4:</span>
                <p className="leading-relaxed">To sensitise all the stakeholders towards ethics, values, harmony, humanity &amp; environment and lifelong learning.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <BentoLeadership />
      </div>
    </div>
  );
}
