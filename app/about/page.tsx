import Image from "next/image";
import BentoLeadership from "@/components/home/BentoLeadership";

export default function AboutPage() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Heritage &amp; Vision
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
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
            <div className="relative w-48 h-56 rounded-2xl overflow-hidden border-4 border-amber-400/40 shadow-xl bg-white">
              <Image
                src="/images/new-bapuji-logo-130x139.jpg"
                alt="Shikshanmaharshi Dr. Bapuji Salunkhe"
                fill
                className="object-contain p-2"
              />
            </div>
          </div>
          <div className="md:col-span-8">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700">
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

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="vision">
          <div className="bg-[#002b66] text-white p-8 rounded-3xl border border-blue-900 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-[#ffcc00] flex items-center justify-center font-bold text-xl mb-4">
              🎯
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-[#ffcc00]">Our Vision</h3>
            <p className="text-slate-200 text-sm leading-relaxed">
              To be a globally recognized institution of technical education fostering intellectual competence,
              sustainable innovation, ethical values, and social responsiveness among engineering graduates.
            </p>
          </div>

          <div className="bg-[#07172e] text-white p-8 rounded-3xl border border-slate-800 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-bold text-xl mb-4">
              🚀
            </div>
            <h3 className="text-xl font-extrabold mb-3 text-red-400">Our Mission</h3>
            <ul className="text-slate-200 text-sm space-y-2.5 leading-relaxed">
              <li>• Deliver learner-centric curricula with deep practical laboratory immersion.</li>
              <li>• Foster industry collaboration, entrepreneurship, and applied scientific research.</li>
              <li>• Instill moral and ethical values echoing the philosophy of Swami Vivekananda.</li>
            </ul>
          </div>
        </div>

        {/* Leadership Section */}
        <BentoLeadership />
      </div>
    </div>
  );
}
