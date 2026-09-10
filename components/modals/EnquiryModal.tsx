"use client";

import { useState } from "react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [courseType, setCourseType] = useState("degree");
  const [branch, setBranch] = useState("Computer Science & Engineering");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const degreeBranches = [
    "Computer Science & Engineering",
    "Artificial Intelligence & Machine Learning",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
  ];

  const diplomaBranches = [
    "Diploma in Computer Engineering",
    "Diploma in Mechanical Engineering",
    "Diploma in Electrical Engineering",
    "Diploma in Civil Engineering",
  ];

  const branches = courseType === "degree" ? degreeBranches : diplomaBranches;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    const waUrl = `https://wa.me/917507515656?text=${encodeURIComponent(
      `New Admission Enquiry:\nName: ${name}\nMobile: ${mobile}\nCourse: ${courseType.toUpperCase()}\nBranch: ${branch}`
    )}`;

    setTimeout(() => {
      if (
        confirm(
          "Would you like to connect directly on WhatsApp with our Admissions Officer now?"
        )
      ) {
        window.open(waUrl, "_blank");
      }
      setIsSubmitted(false);
      setName("");
      setMobile("");
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#c01e2e] bg-red-50 px-2.5 py-0.5 rounded">
            Admissions 2026-27 (DTE: 6468)
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2">
            Apply / Admission Enquiry
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            Fill in your details to receive full syllabus, fee structures, and immediate counseling guidance.
          </p>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center text-[#002b66] font-bold text-sm bg-blue-50/80 border border-blue-200 rounded-2xl p-4">
            ✓ Enquiry Submitted Successfully! Redirecting to admissions officer...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Student Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                WhatsApp Mobile Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="10-digit mobile number"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Course Stream *
                </label>
                <select
                  value={courseType}
                  onChange={(e) => {
                    const ct = e.target.value as "degree" | "diploma";
                    setCourseType(ct);
                    setBranch(
                      ct === "degree"
                        ? "Computer Science & Engineering"
                        : "Diploma in Computer Engineering"
                    );
                  }}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50"
                >
                  <option value="degree">B.Tech Degree</option>
                  <option value="diploma">Polytechnic Diploma</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Branch Preference *
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50"
                >
                  {branches.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer mt-2"
            >
              Submit Admission Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
