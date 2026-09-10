"use client";

import { useState } from "react";

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [email, setEmail] = useState("");
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
    setTimeout(() => {
      alert("Official BSIET Information Prospectus & Syllabus download started!");
      setDownloaded(false);
      setEmail("");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
      <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-slate-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-800 p-1 text-xl font-bold cursor-pointer"
        >
          &times;
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#002b66] bg-blue-50/70 border border-blue-100 px-2.5 py-0.5 rounded">
            Official Prospectus
          </span>
          <h3 className="text-xl font-extrabold text-slate-900 mt-2">
            Download Information Brochure
          </h3>
          <p className="text-slate-500 text-xs mt-1">
            Get the full institutional guide containing fee breakdowns, scholarship schedules, lab facilities, and
            placement statistics.
          </p>
        </div>

        {downloaded ? (
          <div className="py-6 text-center text-[#002b66] font-bold text-sm bg-blue-50 border border-blue-200 rounded-2xl">
            ✓ Generating download link...
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Your Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all cursor-pointer"
            >
              Download PDF Brochure (Instant)
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
