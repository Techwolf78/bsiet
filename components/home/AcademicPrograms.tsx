"use client";

import { useState } from "react";
import { DEGREE_PROGRAMS, DIPLOMA_PROGRAMS, Program } from "@/data/programs";

interface AcademicProgramsProps {
  onOpenEnquiry: () => void;
  onOpenDetails: (prog: Program) => void;
}

export default function AcademicPrograms({ onOpenEnquiry, onOpenDetails }: AcademicProgramsProps) {
  const [activeTab, setActiveTab] = useState<"degree" | "diploma">("degree");

  const programs = activeTab === "degree" ? DEGREE_PROGRAMS : DIPLOMA_PROGRAMS;

  const renderIcon = (type: string) => {
    switch (type) {
      case "cse":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#002b66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <rect x="9" y="9" width="6" height="6" fill="currentColor" fillOpacity="0.25" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
            <circle cx="12" cy="12" r="1.5" fill="currentColor" />
          </svg>
        );
      case "aiml":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#002b66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.5 2.1-1.2 2.8L16 11a4 4 0 0 1 3 3.9c0 1.2-.5 2.3-1.4 3.1l.4 2A2 2 0 0 1 16 22h-1a2 2 0 0 1-2-2v-1h-2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2l.4-2A4.1 4.1 0 0 1 5 14.9C5 12.7 6.7 11 8.8 11l1.2-2.2C9.3 8.1 8.8 7.1 8.8 6a4 4 0 0 1 4-4z" />
            <circle cx="12" cy="6" r="1.5" fill="currentColor" />
            <circle cx="9" cy="15" r="1.5" fill="currentColor" />
            <circle cx="15" cy="15" r="1.5" fill="currentColor" />
          </svg>
        );
      case "mech":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#002b66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case "elec":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#002b66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.25" />
          </svg>
        );
      case "civil":
        return (
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#002b66]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
            <path d="M6 12H4a2 2 0 0 0-2 2v8h4" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11h-4" />
            <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-slate-50" id="programs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-2">
            Academic Programs Offered
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Four-year B.Tech Degree (DBATU Lonere) and three-year Polytechnic Diploma (MSBTE Mumbai).
          </p>
        </div>

        {/* Native Segmented Tab Switcher */}
        <div className="max-w-md mx-auto mb-6 sm:mb-10 p-1 bg-slate-200/80 rounded-full flex items-center">
          <button
            onClick={() => setActiveTab("degree")}
            className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
              activeTab === "degree"
                ? "bg-[#002b66] text-white shadow-md"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            B.Tech Degree (DBATU)
          </button>
          <button
            onClick={() => setActiveTab("diploma")}
            className={`flex-1 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer text-center ${
              activeTab === "diploma"
                ? "bg-[#002b66] text-white shadow-md"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            Polytechnic (MSBTE)
          </button>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 hover:border-[#002b66] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 sm:p-2.5 bg-blue-50/70 border border-blue-100 rounded-xl">
                    {renderIcon(prog.iconType)}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                    DTE: {prog.dteCode}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 leading-snug">
                  {prog.name}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {prog.description}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-slate-100 mb-4">
                  <div>
                    <span className="text-slate-400 block text-[9px] sm:text-[10px] uppercase">Affiliation</span>
                    <strong className="text-slate-800 text-[11px] sm:text-xs truncate block">{prog.affiliation}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] sm:text-[10px] uppercase">Intake</span>
                    <strong className="text-slate-800 text-[11px] sm:text-xs block">{prog.intake} Seats</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] sm:text-[10px] uppercase">Duration</span>
                    <strong className="text-slate-800 text-[11px] sm:text-xs block">{prog.duration}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[9px] sm:text-[10px] uppercase">Eligibility</span>
                    <strong className="text-slate-800 text-[11px] sm:text-xs truncate block">{prog.eligibility}</strong>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={onOpenEnquiry}
                  className="flex-1 bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold text-xs py-2.5 rounded-lg shadow-xs active:scale-98 transition-all cursor-pointer text-center"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => onOpenDetails(prog)}
                  className="px-3.5 py-2.5 border border-slate-300 hover:border-slate-400 text-slate-700 hover:text-[#002b66] font-semibold text-xs rounded-lg active:bg-slate-50 transition-all cursor-pointer"
                >
                  Details &raquo;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
