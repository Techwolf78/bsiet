import Image from "next/image";
import Link from "next/link";

export default function InstitutionalHeader() {
  return (
    <header className="bg-white py-4 px-4 border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Top Sanstha Marathi Motto */}
        <div className="text-center mb-3 flex flex-col items-center gap-0.5">
          <span className="text-red-700 font-bold text-sm sm:text-base tracking-wide">
            &ldquo;ज्ञान, विज्ञान आणि सुसंस्कार यासाठी शिक्षणप्रसार&rdquo; — शिक्षणमहर्षी डॉ. बापूजी साळुंखे
          </span>
          <span className="text-slate-500 text-[11px] font-bold tracking-wider uppercase">
            SHRI SWAMI VIVEKANAND SHIKSHAN SANSTHA&apos;S
          </span>
        </div>

        {/* Identity Row with 3 Columns */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Left: Dr. Bapuji Salunkhe & Swami Vivekananda Portrait */}
          <div className="shrink-0 flex justify-center md:justify-start">
            <Image
              src="/images/new-bapuji-logo-130x139.jpg"
              alt="Dr. Bapuji Salunkhe & Swami Vivekananda"
              width={100}
              height={108}
              priority
              className="object-contain drop-shadow-md rounded"
            />
          </div>

          {/* Center: College Name & Affiliations */}
          <div className="flex-1 text-center flex flex-col items-center">
            <Link href="/" className="group">
              <h1 className="text-xl sm:text-2xl lg:text-[1.7rem] font-extrabold text-slate-900 tracking-tight uppercase leading-tight group-hover:text-blue-900 transition-colors">
                DR. BAPUJI SALUNKHE INSTITUTE OF ENGINEERING AND TECHNOLOGY
              </h1>
            </Link>

            {/* Dual Affiliation Strip */}
            <div className="mt-2.5 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-slate-50 border border-slate-200 py-1 px-4 rounded-full text-xs">
              <div className="flex items-center gap-1.5">
                <span className="text-red-700 font-extrabold tracking-wide">DEGREE</span>
                <span className="text-slate-600 font-medium">(Affiliated to DBATU, Lonere)</span>
              </div>
              <span className="text-slate-300 hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-red-700 font-extrabold tracking-wide">DIPLOMA</span>
                <span className="text-slate-600 font-medium">(Affiliated to MSBTE, Mumbai)</span>
              </div>
            </div>

            {/* DTE Code Badge */}
            <div className="mt-2 flex items-center gap-2 text-xs text-slate-600">
              <span className="font-extrabold text-slate-900 bg-slate-200 px-2 py-0.5 rounded font-mono tracking-wider">
                DTE Code : 6468
              </span>
              <span>•</span>
              <span className="font-semibold text-slate-700">Tarabai Park, Kolhapur, Maharashtra</span>
            </div>
          </div>

          {/* Right: BSIET Official Horizontal Logo */}
          <div className="shrink-0 flex justify-center md:justify-end">
            <Image
              src="/images/bsiet-logo-261x99.jpg"
              alt="BSIET Logo"
              width={150}
              height={57}
              priority
              className="object-contain drop-shadow-sm"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
