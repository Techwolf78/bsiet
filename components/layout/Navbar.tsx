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
              {/* Quick Jump Action Grid (Next-Level SaaS Style) */}
              <div className="grid grid-cols-2 gap-2 pt-1 pb-2">
                {/* 1. Admissions */}
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl p-2.5 flex items-center gap-2.5 transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98]"
                >
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11.5px] font-bold text-slate-900 block leading-tight truncate group-hover:text-rose-600 transition-colors">
                      Admissions
                    </span>
                    <span className="inline-flex items-center gap-1 text-[9px] text-rose-600 font-semibold mt-0.5 leading-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse shrink-0" />
                      2026-27 Open
                    </span>
                  </div>
                </Link>

                {/* 2. Programs */}
                <Link
                  href="/academics"
                  onClick={() => setMobileOpen(false)}
                  className="group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl p-2.5 flex items-center gap-2.5 transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98]"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                      <path d="M6 6h10" />
                      <path d="M6 10h10" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11.5px] font-bold text-slate-900 block leading-tight truncate group-hover:text-blue-600 transition-colors">
                      Programs
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium block truncate mt-0.5 leading-none">
                      Degree &amp; Diploma
                    </span>
                  </div>
                </Link>

                {/* 3. Placements */}
                <Link
                  href="/placements"
                  onClick={() => setMobileOpen(false)}
                  className="group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl p-2.5 flex items-center gap-2.5 transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98]"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      <rect width="20" height="14" x="2" y="6" rx="2" />
                      <path d="M12 11v1" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11.5px] font-bold text-slate-900 block leading-tight truncate group-hover:text-emerald-600 transition-colors">
                      Placements
                    </span>
                    <span className="text-[9px] text-emerald-700 font-bold block truncate mt-0.5 leading-none">
                      12 LPA Highest
                    </span>
                  </div>
                </Link>

                {/* 4. Directions */}
                <a
                  href={GMAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl p-2.5 flex items-center gap-2.5 transition-all duration-200 shadow-xs hover:shadow-sm active:scale-[0.98]"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg
                      className="w-4 h-4 stroke-current"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="text-left min-w-0">
                    <span className="text-[11.5px] font-bold text-slate-900 block leading-tight truncate group-hover:text-indigo-600 transition-colors">
                      Directions
                    </span>
                    <span className="text-[9px] text-slate-500 font-medium block truncate mt-0.5 leading-none">
                      Google Maps
                    </span>
                  </div>
                </a>
              </div>

              <div className="h-px bg-slate-200/80" />

              {/* Navigation Items with Accordions & SaaS micro-icons */}
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => {
                  const hasSub = (item.sections && item.sections.length > 0) || (item.isMega && item.columns);
                  const isExpanded = expandedMobileItem === item.label;

                  // Render SaaS-grade category icon for each nav item
                  const renderNavIcon = () => {
                    switch (item.label) {
                      case "Home":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                          </svg>
                        );
                      case "About Us":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                          </svg>
                        );
                      case "Academics":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                            <path d="M6 6h10" />
                            <path d="M6 10h10" />
                          </svg>
                        );
                      case "Departments":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="7" height="7" x="3" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="3" rx="1" />
                            <rect width="7" height="7" x="14" y="14" rx="1" />
                            <rect width="7" height="7" x="3" y="14" rx="1" />
                          </svg>
                        );
                      case "Admissions":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <line x1="19" x2="19" y1="8" y2="14" />
                            <line x1="22" x2="16" y1="11" y2="11" />
                          </svg>
                        );
                      case "Placements & Alumni":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                          </svg>
                        );
                      case "Campus Life":
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                          </svg>
                        );
                      default:
                        return (
                          <svg className="w-4 h-4 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        );
                    }
                  };

                  if (!hasSub) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between py-2.5 px-3 rounded-xl text-slate-800 hover:bg-slate-100 text-xs sm:text-sm font-semibold transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-700 flex items-center justify-center shrink-0 transition-colors">
                            {renderNavIcon()}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <svg className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                      </Link>
                    );
                  }

                  return (
                    <div key={item.label} className="rounded-xl overflow-hidden bg-slate-50/70 border border-slate-100">
                      <button
                        type="button"
                        onClick={() => toggleMobileItem(item.label)}
                        className="w-full flex items-center justify-between py-2.5 px-3 text-xs sm:text-sm font-semibold text-slate-900 hover:text-blue-900 transition-colors cursor-pointer text-left group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                              isExpanded
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-200/60 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-700"
                            }`}
                          >
                            {renderNavIcon()}
                          </span>
                          <span>{item.label}</span>
                        </div>
                        <svg
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
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
                                    className="block py-1.5 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
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
                                    className="block py-1.5 px-2 rounded-lg text-xs font-medium text-slate-700 hover:text-blue-900 hover:bg-blue-50 transition-colors"
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
              <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3 text-center">
                <span className="text-[10px] font-bold text-slate-800 block leading-snug">
                  &ldquo;ज्ञान, विज्ञान आणि सुसंस्कार यासाठी शिक्षणप्रसार&rdquo;
                </span>
                <span className="text-[9px] text-[#002b66] font-extrabold uppercase tracking-wider block mt-1">
                  Shri Swami Vivekanand Shikshan Sanstha
                </span>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-3.5 bg-slate-50/90 border-t border-slate-200/90 space-y-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 active:scale-[0.99] text-white font-bold text-xs py-2.5 rounded-xl shadow-sm cursor-pointer flex items-center justify-center gap-1.5 transition-all"
              >
                <span>Enquire for Admission 2026</span>
                <svg className="w-3.5 h-3.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <div className="flex items-center justify-between gap-2 pt-0.5 text-xs">
                <a
                  href="tel:+917507515656"
                  className="flex-1 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-xl text-center font-bold text-[11px] border border-slate-200/90 flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                >
                  <svg className="w-3.5 h-3.5 text-blue-700 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>Call Desk</span>
                </a>
                <a
                  href="https://wa.me/917507515656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 rounded-xl text-center font-bold text-[11px] border border-emerald-200 flex items-center justify-center gap-1.5 shadow-2xs transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-[#25d366]" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.02 17.79c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.23 8.23z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
