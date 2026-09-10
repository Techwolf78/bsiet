"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
  onOpenBrochure?: () => void;
}

const HERO_SLIDES = [
  { image: "/images/hero-annual-gathering.png", alt: "Annual Gathering & Cultural Festival" },
  { image: "/images/hero-induction.jpg", alt: "Student Induction Program" },
  { image: "/images/hero-campus-event.jpg", alt: "Convocation Ceremony" },
  { image: "/images/hero-alumni-slider.jpg", alt: "Alumni Meet" },
  { image: "/images/hero-seminar-hall.jpg", alt: "Campus Seminar Hall" },
  { image: "/images/hero-nss-camp.jpg", alt: "NSS Camp" },
  { image: "/images/hero-lab-activity-1.jpg", alt: "Engineering Workshop" },
];

export default function HeroSection({ onOpenBrochure }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form state
  const [courseType, setCourseType] = useState<"degree" | "diploma">("degree");
  const [branch, setBranch] = useState("Computer Science & Engineering");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

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
      `New Admission Enquiry:\nName: ${name}\nMobile: ${mobile}\nCity: ${city || "Not specified"}\nCourse: ${courseType.toUpperCase()}\nBranch: ${branch}`
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
      setCity("");
    }, 1200);
  };

  return (
    <section className="relative min-h-[600px] lg:min-h-[660px] text-white overflow-hidden flex items-center py-10 sm:py-14 lg:py-16 px-4 sm:px-6">
      {/* ══════════════════════════════════════════════
          BACKGROUND BANNER SLIDER
         ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Institutional navy gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001737]/95 via-[#001f4d]/90 to-[#07172e]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172e] via-transparent to-black/40" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* ══════════════════════════════════════════════
              LEFT SIDE: INSTITUTION NAME & PROGRAM OVERVIEW
             ══════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight uppercase">
              Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
            </h1>

            <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              Affiliated to <strong className="text-white font-semibold">DBATU, Lonere</strong> (B.Tech Degree) and{" "}
              <strong className="text-white font-semibold">MSBTE, Mumbai</strong> (Polytechnic Diploma). DTE Choice Code:{" "}
              <strong className="text-white font-semibold">6468</strong>. Located in Tarabai Park, Kolhapur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/academics"
                className="bg-white hover:bg-slate-100 text-[#002b66] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all text-center inline-flex items-center gap-1.5"
              >
                <span>Explore Academic Programs</span>
                <span>&raquo;</span>
              </Link>

              <button
                type="button"
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                <span>Information Brochure</span>
              </button>
            </div>

            {/* Slide Navigation Controls */}
            <div className="pt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-black/25 backdrop-blur-md border border-white/15 px-2 py-1 rounded-full">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
                >
                  ‹
                </button>
                <div className="flex gap-1 px-1">
                  {HERO_SLIDES.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        i === currentSlide ? "w-5 bg-[#c01e2e]" : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/20 text-white font-bold transition-colors cursor-pointer"
                >
                  ›
                </button>
              </div>

              <span className="text-xs text-slate-300 font-medium">
                {currentSlide + 1} / {HERO_SLIDES.length}
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT SIDE: ADMISSION ENQUIRY FORM
             ══════════════════════════════════════════════ */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900">
              <div className="mb-4">
                <h2 className="text-xl font-extrabold text-[#002b66]">
                  Admission Enquiry 2026-27
                </h2>
                <p className="text-slate-500 text-xs mt-1">
                  B.Tech Degree (DBATU) &amp; Polytechnic Diploma (MSBTE)
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-8 text-center text-[#002b66] font-bold text-sm bg-slate-50 border border-slate-200 rounded-2xl p-5">
                  <div className="text-2xl mb-1 text-[#c01e2e]">✓</div>
                  <div>Enquiry Submitted Successfully</div>
                  <div className="text-xs font-normal text-slate-600 mt-1">
                    Connecting with Admissions Desk on WhatsApp...
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Student full name"
                      className="w-full text-xs p-2.5 sm:p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        placeholder="10-digit mobile"
                        className="w-full text-xs p-2.5 sm:p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City / Town
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Kolhapur, etc."
                        className="w-full text-xs p-2.5 sm:p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Program *
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
                        className="w-full text-xs p-2.5 sm:p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50 transition-colors cursor-pointer"
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
                        className="w-full text-xs p-2.5 sm:p-3 rounded-xl border border-slate-200 focus:border-[#002b66] focus:outline-none bg-slate-50 transition-colors cursor-pointer"
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
                    className="w-full bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer mt-1"
                  >
                    Submit Enquiry &raquo;
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
