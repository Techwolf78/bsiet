"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/data/navigation";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="sticky top-0 z-50 bg-[#002b66] border-b-[2.5px] border-[#ffcc00] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[52px]">
        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center h-full gap-0.5 m-0 p-0 list-none">
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

                {/* Regular Dropdown (Light Theme) */}
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

                {/* Mega Dropdown for Departments (Light Theme) */}
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

        {/* Action Button: Apply Now & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEnquiry}
            className="bg-gradient-to-r from-[#ffcc00] to-amber-500 hover:from-amber-300 hover:to-[#ffcc00] text-slate-950 font-bold text-xs sm:text-sm px-4 py-1.5 rounded shadow hover:shadow-lg hover:-translate-y-0.5 transition-all whitespace-nowrap cursor-pointer"
          >
            Apply Now
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobile}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden text-white hover:text-amber-400 p-1.5 cursor-pointer"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Light Theme) */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b-2 border-[#002b66] py-3 px-4 shadow-2xl">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-slate-100 pb-1">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-bold text-slate-900 hover:text-blue-900"
                >
                  {item.label}
                </Link>
                {item.sections && (
                  <div className="pl-3 pb-1.5 flex flex-col gap-1">
                    {item.sections.flatMap((s) => s.links).map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-slate-600 hover:text-[#002b66] py-0.5 font-medium"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
                {item.isMega && item.columns && (
                  <div className="pl-3 pb-1.5 flex flex-col gap-1">
                    {item.columns.flatMap((c) => c.links).map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-xs text-slate-600 hover:text-[#002b66] py-0.5 font-medium"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
