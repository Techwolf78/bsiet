"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
  onOpenBrochure?: () => void;
}

const HERO_SLIDES = [
  { image: "/images/hero-campus-event.jpg", alt: "Convocation & Campus Event" },
  {
    image: "/images/hero-seminar-hall.jpg",
    alt: "Modern Central Seminar Hall",
  },
  {
    image: "/images/hero-annual-gathering.png",
    alt: "Annual Gathering & Youth Festival",
  },
  { image: "/images/hero-induction.jpg", alt: "Student Induction Program" },
  { image: "/images/hero-alumni-slider.jpg", alt: "Global Alumni Meet" },
  {
    image: "/images/hero-lab-activity-1.jpg",
    alt: "Practical Engineering Workshop",
  },
  { image: "/images/hero-nss-camp.jpg", alt: "NSS & Social Outreach Camp" },
];

const STATES = [
  "Maharashtra",
  "Karnataka",
  "Goa",
  "Gujarat",
  "Madhya Pradesh",
  "Other State",
];

const CITIES_BY_STATE: Record<string, string[]> = {
  Maharashtra: [
    "Kolhapur",
    "Sangli",
    "Satara",
    "Pune",
    "Mumbai",
    "Solapur",
    "Ichalkaranji",
    "Ratnagiri",
    "Sindhudurg",
    "Belgaum",
    "Other City",
  ],
  Karnataka: [
    "Belgaum",
    "Nipani",
    "Hubli",
    "Dharwad",
    "Bengaluru",
    "Bagalkot",
    "Other City",
  ],
  Goa: ["Panaji", "Margao", "Mapusa", "Vasco", "Ponda", "Other City"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Other City"],
  "Madhya Pradesh": ["Indore", "Bhopal", "Gwalior", "Jabalpur", "Other City"],
  "Other State": ["Other City"],
};

export default function HeroSection({ onOpenBrochure }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form states matching user specification
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [state, setState] = useState("Maharashtra");
  const [city, setCity] = useState("Kolhapur");
  const [discipline, setDiscipline] = useState("Engineering & Technology");
  const [course, setCourse] = useState("B.Tech (First Year)");
  const [program, setProgram] = useState("Computer Science & Engineering");
  const [cetScore, setCetScore] = useState("");

  // Captcha states
  const [captchaCode, setCaptchaCode] = useState("8d5c3b");
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [agreeConsent, setAgreeConsent] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate random 6-character captcha
  const refreshCaptcha = useCallback(() => {
    const chars = "23456789abcdefghkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaError("");
  }, []);

  useEffect(() => {
    refreshCaptcha();
  }, [refreshCaptcha]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length,
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Courses based on discipline
  const courses =
    discipline === "Engineering & Technology"
      ? ["B.Tech (First Year)", "Direct Second Year B.Tech (DSE)"]
      : [
          "Polytechnic Diploma (First Year)",
          "Direct Second Year Diploma (DSE)",
        ];

  // Programs offered
  const programs = [
    "Computer Science & Engineering",
    "Artificial Intelligence & Machine Learning",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verify Captcha
    if (captchaInput.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setCaptchaError("Invalid Captcha code. Please re-enter.");
      refreshCaptcha();
      setCaptchaInput("");
      return;
    }

    if (!agreeConsent) {
      alert("Please check the agreement checkbox to continue.");
      return;
    }

    setCaptchaError("");
    setIsSubmitted(true);

    const waMsg = `New Admission Enquiry 2026-27:
• Name: ${name}
• Email: ${email}
• Mobile: ${countryCode} ${mobile}
• Location: ${city}, ${state}
• Discipline: ${discipline}
• Course: ${course}
• Program: ${program}
• Score: ${cetScore || "Not provided"}`;

    const waUrl = `https://wa.me/917507515656?text=${encodeURIComponent(waMsg)}`;

    setTimeout(() => {
      if (
        confirm(
          "Enquiry registered successfully! Would you like to connect directly on WhatsApp with our Admissions Desk now?",
        )
      ) {
        window.open(waUrl, "_blank");
      }
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setMobile("");
      setCetScore("");
      setCaptchaInput("");
      refreshCaptcha();
    }, 1200);
  };

  const availableCities = CITIES_BY_STATE[state] || ["Other City"];

  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] text-white overflow-hidden flex items-center py-8 sm:py-12 lg:py-14 px-3.5 sm:px-6">
      {/* ══════════════════════════════════════════════
          BACKGROUND BANNER SLIDER (VIBRANT & CLEARLY VISIBLE)
         ══════════════════════════════════════════════ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              transitionProperty: "opacity, transform",
              transitionDuration: "1000ms",
            }}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              className="object-cover object-center brightness-105 contrast-105"
              sizes="100vw"
            />
          </div>
        ))}

        {/* Translucent overlay: keeps behind photos bright and visible while guaranteeing sharp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* ══════════════════════════════════════════════
              LEFT SIDE: INSTITUTION NAME & PROGRAM DETAILS
             ══════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div>
              <span className="block text-slate-200 text-sm sm:text-lg font-medium tracking-wide mb-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Explore Your Potential At
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology
              </h1>
            </div>

            <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
              Affiliated to{" "}
              <strong className="text-white font-semibold">
                DBATU, Lonere
              </strong>{" "}
              (B.Tech Degree) and{" "}
              <strong className="text-white font-semibold">
                MSBTE, Mumbai
              </strong>{" "}
              (Polytechnic Diploma). DTE Choice Code:{" "}
              <strong className="text-white font-semibold">6468</strong>.
              Located in Tarabai Park, Kolhapur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/academics"
                className="bg-white hover:bg-slate-100 text-[#002b66] font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all text-center inline-flex items-center gap-1.5"
              >
                <span>Explore Academic Programs</span>
                <span>&raquo;</span>
              </Link>

              <button
                type="button"
                onClick={onOpenBrochure}
                className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 bg-black/30 hover:bg-black/40 backdrop-blur-md text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
                </svg>
                <span>Brochure</span>
              </button>
            </div>

            {/* Slide Navigation Controls */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md border border-white/20 px-2 py-1 rounded-full shadow-md">
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
                        i === currentSlide
                          ? "w-5 bg-[#c01e2e]"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
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

              <span className="text-xs text-white/90 font-medium drop-shadow">
                {currentSlide + 1} / {HERO_SLIDES.length} ·{" "}
                {HERO_SLIDES[currentSlide].alt}
              </span>
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT SIDE: COMPREHENSIVE ADMISSION ENQUIRY FORM
             ══════════════════════════════════════════════ */}
          <div className="lg:col-span-5">
            <div className="bg-white/98 backdrop-blur-sm rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-300 text-slate-900">
              {/* Form Header */}
              <div className="mb-3 pb-2.5 border-b border-slate-200">
                <h3 className="text-base sm:text-lg font-bold text-[#002b66] leading-snug">
                  Admission Enquiry 2026-27
                </h3>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center text-[#002b66] font-bold text-sm bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <div className="text-3xl mb-2 text-[#c01e2e]">✓</div>
                  <div className="text-base">
                    Enquiry Registered Successfully
                  </div>
                  <p className="text-xs font-normal text-slate-600 mt-1.5 leading-relaxed">
                    Our Admissions Team is reviewing your submission and will
                    connect with you on WhatsApp shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5">
                  {/* Field: Name */}
                  <div>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Name *"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c01e2e] bg-white transition-colors"
                    />
                  </div>

                  {/* Field: Email */}
                  <div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address *"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c01e2e] bg-white transition-colors"
                    />
                  </div>

                  {/* Field: Phone with Country Code */}
                  <div className="flex gap-2">
                    <div className="relative w-24 shrink-0">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="w-full border border-slate-300 rounded px-2 py-2 text-xs text-slate-800 bg-slate-50 focus:outline-none focus:border-[#c01e2e] cursor-pointer"
                      >
                        <option value="+91">+91 ▾</option>
                        <option value="+1">+1 ▾</option>
                        <option value="+44">+44 ▾</option>
                        <option value="+971">+971 ▾</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter Mobile Number *"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c01e2e] bg-white transition-colors"
                    />
                  </div>

                  {/* Row: State & City */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <select
                        value={state}
                        onChange={(e) => {
                          const newState = e.target.value;
                          setState(newState);
                          const cities = CITIES_BY_STATE[newState] || [
                            "Other City",
                          ];
                          setCity(cities[0]);
                        }}
                        className="w-full border border-slate-300 rounded px-2.5 py-2 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#c01e2e] cursor-pointer truncate"
                      >
                        <option value="" disabled>
                          Select State *
                        </option>
                        {STATES.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full border border-slate-300 rounded px-2.5 py-2 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#c01e2e] cursor-pointer truncate"
                      >
                        <option value="" disabled>
                          Select City *
                        </option>
                        {availableCities.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row: Discipline & Course */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div>
                      <select
                        value={discipline}
                        onChange={(e) => {
                          const newDisc = e.target.value;
                          setDiscipline(newDisc);
                          setCourse(
                            newDisc === "Engineering & Technology"
                              ? "B.Tech (First Year)"
                              : "Polytechnic Diploma (First Year)",
                          );
                        }}
                        className="w-full border border-slate-300 rounded px-2.5 py-2 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#c01e2e] cursor-pointer truncate"
                      >
                        <option value="Engineering & Technology">
                          Engineering &amp; Technology
                        </option>
                        <option value="Polytechnic (Diploma)">
                          Polytechnic (Diploma)
                        </option>
                      </select>
                    </div>

                    <div>
                      <select
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full border border-slate-300 rounded px-2.5 py-2 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#c01e2e] cursor-pointer truncate"
                      >
                        {courses.map((crs) => (
                          <option key={crs} value={crs}>
                            {crs}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Field: Program */}
                  <div>
                    <select
                      value={program}
                      onChange={(e) => setProgram(e.target.value)}
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-700 bg-white focus:outline-none focus:border-[#c01e2e] cursor-pointer"
                    >
                      <option value="" disabled>
                        Select Program *
                      </option>
                      {programs.map((prg) => (
                        <option key={prg} value={prg}>
                          {prg}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Field: CET Score */}
                  <div>
                    <input
                      type="text"
                      value={cetScore}
                      onChange={(e) => setCetScore(e.target.value)}
                      placeholder="Enter CET Score"
                      className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c01e2e] bg-white transition-colors"
                    />
                  </div>

                  {/* Row: Captcha display + input */}
                  <div className="grid grid-cols-2 gap-2.5 items-center">
                    <div className="relative flex items-center justify-between border border-slate-300 rounded px-3 py-1.5 bg-slate-50 overflow-hidden select-none">
                      {/* Decorative colored blur circles behind code (matching user image) */}
                      <div className="absolute -left-1 top-0 w-6 h-6 rounded-full bg-purple-500/30 blur-[2px] pointer-events-none" />
                      <div className="absolute left-4 -bottom-1 w-6 h-6 rounded-full bg-green-500/40 blur-[2px] pointer-events-none" />
                      <div className="absolute left-8 top-1 w-5 h-5 rounded-full bg-yellow-400/30 blur-[2px] pointer-events-none" />

                      <span className="relative z-10 font-mono font-bold tracking-widest text-slate-800 text-sm select-all">
                        {captchaCode}
                      </span>

                      <button
                        type="button"
                        onClick={refreshCaptcha}
                        title="Generate new captcha"
                        className="relative z-10 text-slate-600 hover:text-slate-900 p-1 transition-colors cursor-pointer text-sm"
                        aria-label="Refresh Captcha"
                      >
                        🔄
                      </button>
                    </div>

                    <div>
                      <input
                        type="text"
                        required
                        value={captchaInput}
                        onChange={(e) => {
                          setCaptchaInput(e.target.value);
                          if (captchaError) setCaptchaError("");
                        }}
                        placeholder="Enter Captcha"
                        className="w-full border border-slate-300 rounded px-3 py-2 text-xs text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#c01e2e] bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <div className="text-[11px] font-semibold text-red-600">
                      {captchaError}
                    </div>
                  )}

                  {/* Checkbox Consent */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="hero-enquiry-consent"
                      checked={agreeConsent}
                      onChange={(e) => setAgreeConsent(e.target.checked)}
                      className="mt-0.5 w-3.5 h-3.5 text-[#c01e2e] rounded border-slate-300 focus:ring-[#c01e2e] cursor-pointer"
                    />
                    <label
                      htmlFor="hero-enquiry-consent"
                      className="text-[11px] text-slate-700 leading-tight select-none cursor-pointer"
                    >
                      I agree to receive information regarding my submitted
                      enquiry*
                    </label>
                  </div>

                  {/* SUBMIT Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#c01e2e] hover:bg-[#a31523] text-white font-extrabold text-xs sm:text-sm py-2.5 sm:py-3 rounded shadow-md hover:shadow-lg transition-colors cursor-pointer uppercase tracking-wider mt-1"
                  >
                    SUBMIT
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
