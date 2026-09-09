"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS, GMAPS_URL } from "@/data/navigation";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const toggleMobileItem = (label: string) => {
    setExpandedMobileItem(expandedMobileItem === label ? null : label);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. MOBILE CLEAN WHITE HEADER (Matches Reference Layout)                   */}
      {/* ========================================================================= */}
      <header className="lg:hidden bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="px-3.5 py-2.5 flex items-center justify-between gap-2">
          {/* Left: Emblem + Multi-line Institution Name */}
          <Link href="/" className="flex items-center gap-2.5 min-w-0">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-slate-200 shadow-xs shrink-0 flex items-center justify-center">
              <Image
                src="/images/new-bapuji-logo-130x139.jpg"
                alt="BSIET Kolhapur Crest"
                width={38}
                height={38}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-slate-900 text-[11.5px] leading-tight tracking-tight uppercase truncate">
                DR. BAPUJI SALUNKHE
              </span>
              <span className="font-black text-slate-900 text-[10.5px] leading-tight tracking-tight uppercase truncate">
                INSTITUTE OF ENGG. &amp; TECH.
              </span>
              <span className="text-[8.5px] text-slate-500 font-bold uppercase tracking-wider leading-tight truncate mt-0.5">
                AFFILIATED TO DBATU &amp; MSBTE · DTE: 6468
              </span>
            </div>
          </Link>

          {/* Right: Clean 3-Line Hamburger Menu Icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-1.5 text-slate-800 hover:text-blue-900 rounded-lg active:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Spotlight / Notice Ticker Bar (Infinite Sliding Marquee) */}
        <div className="bg-slate-50 border-t border-slate-200/80 py-1.5 px-3 flex items-center gap-2 overflow-hidden relative">
          <span className="bg-[#002b66] text-white text-[9.5px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-sm shrink-0 shadow-xs z-10">
            SPOTLIGHT
          </span>
          <div className="overflow-hidden whitespace-nowrap flex-1 relative mask-fade">
            <div className="animate-ticker flex items-center gap-8 text-red-700 font-bold text-[11px] tracking-wide">
              <span>ADMISSIONS OPEN 2026-27: B.Tech Degree (DBATU) &amp; Polytechnic Diploma (MSBTE) — DTE Code: 6468</span>
              <span className="text-slate-400 font-normal">✦</span>
              <span>100% Government Scholarships Assistance via MahaDBT</span>
              <span className="text-slate-400 font-normal">✦</span>
              <span>ADMISSIONS OPEN 2026-27: B.Tech Degree (DBATU) &amp; Polytechnic Diploma (MSBTE) — DTE Code: 6468</span>
              <span className="text-slate-400 font-normal">✦</span>
              <span>100% Government Scholarships Assistance via MahaDBT</span>
              <span className="text-slate-400 font-normal">✦</span>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. DESKTOP NAVIGATION BAR (Preserved exactly for Desktop View)            */}
      {/* ========================================================================= */}
      <nav className="hidden lg:block sticky top-0 z-40 bg-[#002b66] border-b-[2.5px] border-[#ffcc00] shadow-md">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[52px]">
          {/* Desktop Navigation Links */}
          <ul className="flex items-center h-full gap-0.5 m-0 p-0 list-none">
            {NAV_ITEMS.map((item) => {
              const hasSub = (item.sections && item.sections.length > 0) || item.isMega;

              return (
                <li
                  key={item.label}
                  className="relative h-full flex items-center group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-[#ffcc00] hover:bg-[#001f4d] px-3.5 py-0 h-full inline-flex items-center gap-1 text-[13.5px] font-semibold tracking-wide transition-all whitespace-nowrap"
                  >
                    {item.label}
                    {hasSub && (
                      <svg
                        className="w-2.5 h-2.5 fill-current opacity-70 transition-transform group-hover:rotate-180"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 10l5 5 5-5z" />
                      </svg>
                    )}
                  </Link>

                  {/* Regular Dropdown */}
                  {item.sections && !item.isMega && (
                    <div
                      className={`absolute top-full left-0 min-w-[270px] bg-white border border-slate-200 border-t-2 border-t-amber-400 rounded-b-xl shadow-2xl p-2 z-50 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.sections.map((sec, sIdx) => (
                        <div key={sIdx}>
                          {sec.sectionLabel && (
                            <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 px-3 pt-2 pb-1">
                              {sec.sectionLabel}
                            </div>
                          )}
                          {sec.links.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-3 py-1.5 text-slate-700 hover:text-[#002b66] hover:bg-blue-50 text-xs font-semibold rounded-lg transition-all"
                            >
                              {sub.label}
                            </Link>
                          ))}
                          {sIdx < (item.sections?.length || 0) - 1 && (
                            <div className="h-px bg-slate-100 my-1 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Mega Dropdown for Departments */}
                  {item.isMega && item.columns && (
                    <div
                      className={`absolute top-full left-0 min-w-[540px] bg-white border border-slate-200 border-t-2 border-t-amber-400 rounded-b-xl shadow-2xl p-4 grid grid-cols-2 gap-4 z-50 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2 pointer-events-none"
                      }`}
                    >
                      {item.columns.map((col, cIdx) => (
                        <div key={cIdx} className="flex flex-col">
                          <div className="text-[11px] font-extrabold uppercase tracking-widest text-[#002b66] pb-1.5 border-b border-slate-100 mb-1.5">
                            {col.title}
                          </div>
                          {col.links.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="px-2.5 py-1.5 text-slate-700 hover:text-[#002b66] hover:bg-blue-50 text-xs font-semibold rounded-lg transition-all"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Action Button: Apply Now */}
          <button
            onClick={onOpenEnquiry}
            className="bg-gradient-to-r from-[#ffcc00] to-amber-500 hover:from-amber-300 hover:to-[#ffcc00] text-slate-950 font-bold text-sm px-4 py-1.5 rounded shadow hover:shadow-lg active:scale-95 transition-all whitespace-nowrap cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* 3. MOBILE SLIDE-OVER DRAWER MENU                                          */}
      {/* ========================================================================= */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          {/* Slide-out Drawer Panel */}
          <div className="relative w-[86%] max-w-[360px] h-full bg-white shadow-2xl flex flex-col justify-between z-10 overflow-hidden">
            {/* Drawer Top Bar */}
            <div className="bg-white p-4 border-b border-slate-200 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 border border-slate-200 shadow-xs shrink-0">
                  <Image
                    src="/images/new-bapuji-logo-130x139.jpg"
                    alt="BSIET Crest"
                    width={38}
                    height={38}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <span className="font-extrabold text-slate-900 text-xs tracking-tight block leading-tight">
                    BSIET Kolhapur
                  </span>
                  <span className="text-[9.5px] text-blue-700 font-bold uppercase tracking-wider block">
                    DTE: 6468 · Tarabai Park
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
            </div>

            {/* Drawer Body */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {/* Quick Jump Action Grid */}
              <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="bg-red-50 hover:bg-red-100 border border-red-200/80 rounded-xl p-2.5 flex items-center gap-2 transition-all"
                >
                  <span className="text-base">🎓</span>
                  <div className="text-left">
                    <span className="text-[11px] font-extrabold text-red-900 block leading-tight">
                      Admissions
                    </span>
                    <span className="text-[9px] text-red-700 font-semibold">2026-27 Open</span>
                  </div>
                </Link>

                <Link
                  href="/academics"
                  onClick={() => setMobileOpen(false)}
                  className="bg-blue-50 hover:bg-blue-100 border border-blue-200/80 rounded-xl p-2.5 flex items-center gap-2 transition-all"
                >
                  <span className="text-base">📚</span>
                  <div className="text-left">
                    <span className="text-[11px] font-extrabold text-blue-900 block leading-tight">
                      Programs
                    </span>
                    <span className="text-[9px] text-blue-700 font-semibold">Degree &amp; Diploma</span>
                  </div>
                </Link>

                <Link
                  href="/placements"
                  onClick={() => setMobileOpen(false)}
                  className="bg-amber-50 hover:bg-amber-100 border border-amber-200/80 rounded-xl p-2.5 flex items-center gap-2 transition-all"
                >
                  <span className="text-base">💼</span>
                  <div className="text-left">
                    <span className="text-[11px] font-extrabold text-amber-900 block leading-tight">
                      Placements
                    </span>
                    <span className="text-[9px] text-amber-700 font-semibold">12 LPA Highest</span>
                  </div>
                </Link>

                <a
                  href={GMAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 rounded-xl p-2.5 flex items-center gap-2 transition-all"
                >
                  <span className="text-base">📍</span>
                  <div className="text-left">
                    <span className="text-[11px] font-extrabold text-emerald-900 block leading-tight">
                      Directions
                    </span>
                    <span className="text-[9px] text-emerald-700 font-semibold">Google Maps</span>
                  </div>
                </a>
              </div>

              <div className="h-px bg-slate-200" />

              {/* Navigation Items with Accordions */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const hasSub = (item.sections && item.sections.length > 0) || (item.isMega && item.columns);
                  const isExpanded = expandedMobileItem === item.label;

                  if (!hasSub) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-100 text-xs sm:text-sm font-bold transition-colors"
                      >
                        <span>{item.label}</span>
                        <svg className="w-3.5 h-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden bg-slate-50/70 border border-slate-100">
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer text-left"
                      >
                        <span>{item.label}</span>
                        <svg
                          className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-blue-700" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 border-t border-slate-200/70 space-y-1">
                          {item.sections &&
                            item.sections.map((sec, sIdx) => (
                              <div key={sIdx} className="space-y-1">
                                {sec.sectionLabel && (
                                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 pt-1.5 pb-0.5">
                                    {sec.sectionLabel}
                                  </div>
                                )}
                                {sec.links.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                                  >
                                    • {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}

                          {item.isMega &&
                            item.columns &&
                            item.columns.map((col, cIdx) => (
                              <div key={cIdx} className="space-y-1">
                                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#002b66] pt-1.5 pb-0.5">
                                  {col.title}
                                </div>
                                {col.links.map((sub) => (
                                  <Link
                                    key={sub.label}
                                    href={sub.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-1.5 px-2 rounded-lg text-xs font-semibold text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                                  >
                                    • {sub.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sanstha Motto Card */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 text-center">
                <span className="text-[10px] font-bold text-slate-700 block leading-snug">
                  &ldquo;ज्ञान, विज्ञान आणि सुसंस्कार यासाठी शिक्षणप्रसार&rdquo;
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase tracking-wider block mt-0.5">
                  Shri Swami Vivekanand Shikshan Sanstha
                </span>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-2 shrink-0">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs py-2.5 rounded-xl shadow-md cursor-pointer text-center"
              >
                Enquire for Admission 2026
              </button>

              <div className="flex items-center justify-between gap-2 pt-1 text-xs">
                <a
                  href="tel:+917507515656"
                  className="flex-1 py-1.5 bg-blue-50 text-blue-800 rounded-lg text-center font-bold text-[11px] border border-blue-200"
                >
                  📞 Call Desk
                </a>
                <a
                  href="https://wa.me/917507515656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 bg-emerald-50 text-emerald-800 rounded-lg text-center font-bold text-[11px] border border-emerald-200"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
