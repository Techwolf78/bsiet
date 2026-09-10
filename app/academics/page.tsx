"use client";

import { useState } from "react";
import AcademicPrograms from "@/components/home/AcademicPrograms";
import ProgramDetailsModal from "@/components/modals/ProgramDetailsModal";
import EnquiryModal from "@/components/modals/EnquiryModal";
import { Program } from "@/data/programs";

export default function AcademicsPage() {
  const [selectedProg, setSelectedProg] = useState<Program | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Academic Programs &amp; Calender
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Approved by AICTE New Delhi &amp; Directorate of Technical Education (DTE Code: 6468). Affiliated with Dr.
            Babasaheb Ambedkar Technological University (DBATU), Lonere for B.Tech Degree and Maharashtra State Board of
            Technical Education (MSBTE), Mumbai for Polytechnic Diploma.
          </p>
        </div>

        {/* Academic Programs Section */}
        <AcademicPrograms
          onOpenEnquiry={() => setEnquiryOpen(true)}
          onOpenDetails={(p) => setSelectedProg(p)}
        />

        {/* Academic Calendar Notice */}
        <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8" id="calendar">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span>📅</span>
            <span>Academic Schedule &amp; Examination Framework</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <strong className="text-[#002b66] block text-sm mb-1 font-bold">Semester Commencements</strong>
              <p className="text-slate-600">
                Odd Semester begins July/August. Even Semester begins January following DBATU &amp; MSBTE official
                schedules.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <strong className="text-[#002b66] block text-sm mb-1 font-bold">Continuous Evaluations</strong>
              <p className="text-slate-600">
                Two Mid-Semester Examinations (MSE), lab continuous assessments, seminar reviews, and mini-project
                viva.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
              <strong className="text-[#002b66] block text-sm mb-1 font-bold">End-Semester University Exams</strong>
              <p className="text-slate-600">
                Centralized evaluation by DBATU Lonere (Degree) and MSBTE Mumbai (Diploma) with external moderation.
              </p>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <ProgramDetailsModal
        program={selectedProg}
        onClose={() => setSelectedProg(null)}
        onApply={() => setEnquiryOpen(true)}
      />
    </div>
  );
}
