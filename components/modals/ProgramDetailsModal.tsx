"use client";

import { Program } from "@/data/programs";

interface ProgramDetailsModalProps {
  program: Program | null;
  onClose: () => void;
  onApply: () => void;
}

export default function ProgramDetailsModal({
  program,
  onClose,
  onApply,
}: ProgramDetailsModalProps) {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <div className="mb-4">
          <span className="text-[11px] font-mono font-bold bg-blue-50 text-blue-800 px-2.5 py-1 rounded border border-blue-200">
            DTE Code: {program.dteCode}
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2">
            {program.name}
          </h3>
          <span className="text-xs font-semibold text-slate-500">
            {program.affiliation} &bull; {program.type === "degree" ? "4 Years B.Tech Degree" : "3 Years Polytechnic Diploma"}
          </span>
        </div>

        <p className="text-slate-600 text-xs leading-relaxed mb-6">
          {program.description}
        </p>

        <div className="grid grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-6">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Sanctioned Intake</span>
            <strong className="text-slate-800 text-sm">{program.intake} Seats</strong>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase">Course Duration</span>
            <strong className="text-slate-800 text-sm">{program.duration}</strong>
          </div>
          <div className="col-span-2 pt-2 border-t border-slate-200">
            <span className="text-slate-400 block text-[10px] uppercase">Eligibility Criteria</span>
            <strong className="text-slate-800">{program.eligibility}</strong>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => {
              onClose();
              onApply();
            }}
            className="flex-1 bg-[#002b66] hover:bg-[#001737] text-[#ffcc00] font-bold text-xs sm:text-sm py-3 rounded-xl shadow transition-all cursor-pointer text-center"
          >
            Apply for this Program &raquo;
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 border border-slate-300 text-slate-700 text-xs font-semibold rounded-xl hover:bg-slate-50 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
