"use client";

import { useState } from "react";
import EnquiryModal from "@/components/modals/EnquiryModal";

export default function AdmissionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  const eligibilityList = [
    {
      course: "First Year B.Tech Degree (4 Years)",
      eligibility:
        "Passed 10+2 (HSC Science) examination with Physics and Mathematics as compulsory subjects along with one of Chemistry/Biotechnology/Biology/Technical Vocational subject with minimum 45% marks (40% for reserved category). Valid score in MHT-CET 2026 or JEE Main.",
      dte: "Choice Code: 6468",
    },
    {
      course: "Direct Second Year B.Tech (Lateral Entry - 3 Years)",
      eligibility:
        "Passed Diploma in Engineering and Technology with at least 45% marks (40% for reserved category) in appropriate branch from MSBTE or recognized equivalent.",
      dte: "Choice Code: 6468 (DSE)",
    },
    {
      course: "First Year Polytechnic Diploma (3 Years)",
      eligibility:
        "Passed 10th Standard (SSC) examination of Maharashtra State Board or equivalent with minimum 35% aggregate marks.",
      dte: "Choice Code: 6468 (Diploma)",
    },
  ];

  const scholarships = [
    {
      name: "Government of Maharashtra EBC Concession",
      desc: "50% tuition fee concession for Open/General category students with annual family income up to ₹8,00,000 via MahaDBT.",
    },
    {
      name: "SC / ST Social Welfare Scholarship",
      desc: "100% Tuition and Development fee waiver along with maintenance allowance disbursed by Social Justice Department.",
    },
    {
      name: "OBC / VJNT / SBC Post-Matric Scholarship",
      desc: "50% to 100% tuition concession based on category and valid caste & non-creamy layer verification.",
    },
    {
      name: "AICTE Tuition Fee Waiver Scheme (TFWS)",
      desc: "5% supernumerary seats in every branch with 100% tuition fee waiver for merit-toppers with annual family income below ₹8 Lakhs.",
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
            Enroll for Academic Year 2026-27
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 mb-4">
            Admissions &amp; Eligibility Criteria
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Centralized Admission Process (CAP) governed by the Directorate of Technical Education (DTE), Maharashtra.
            Institutional DTE Choice Code: <strong className="text-slate-900 font-mono">6468</strong>.
          </p>
          <div className="mt-6">
            <button
              onClick={() => setEnquiryOpen(true)}
              className="bg-red-700 hover:bg-red-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Start Admission Counseling &raquo;
            </button>
          </div>
        </div>

        {/* Eligibility Cards */}
        <div className="space-y-6 mb-16" id="eligibility">
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-l-4 border-red-700 pl-3">
            Eligibility Benchmarks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eligibilityList.map((item, i) => (
              <div
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-800 px-2.5 py-0.5 rounded inline-block mb-3">
                    {item.dte}
                  </span>
                  <h3 className="font-extrabold text-slate-900 text-base mb-3 leading-snug">
                    {item.course}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.eligibility}
                  </p>
                </div>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="mt-6 w-full text-center bg-white hover:bg-[#002b66] text-blue-900 hover:text-[#ffcc00] border border-slate-300 font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Check Your Seat Eligibility
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FRA Fees & Concessions */}
        <div className="bg-[#07172e] text-white rounded-3xl p-8 sm:p-10 mb-16" id="fra">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#ffcc00] bg-amber-400/20 px-2.5 py-1 rounded">
              Government Regulated
            </span>
            <h2 className="text-2xl font-extrabold text-white mt-3 mb-3">
              Fee Regulating Authority (FRA) Approved Fees
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              All tuition and development fees at Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology are strictly
              fixed by the Maharashtra Fee Regulating Authority (FRA), Mumbai, ensuring transparent, non-capitation
              education.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setEnquiryOpen(true)}
                className="bg-[#ffcc00] hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg shadow cursor-pointer"
              >
                Request Current Year Fee Structure
              </button>
              <a
                href="https://sssamiti.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-white/50 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors inline-flex items-center gap-1.5"
              >
                <span>Visit Official FRA Portal</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scholarships */}
        <div className="mb-12" id="scholarships">
          <h2 className="text-xl font-bold text-slate-900 mb-6 border-l-4 border-[#ffcc00] pl-3">
            Government &amp; Sanstha Scholarships
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scholarships.map((sch, sIdx) => (
              <div
                key={sIdx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6"
              >
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {sch.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {sch.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
