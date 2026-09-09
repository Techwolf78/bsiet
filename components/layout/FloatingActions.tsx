"use client";

import { useEffect, useState } from "react";

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [socialExpanded, setSocialExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isVisible = socialExpanded || isHovered;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. BOTTOM-LEFT FLOATING EXPANDABLE SOCIAL RIBBON                         */}
      {/* Expands on HOVER on Desktop, Toggles on Tap on Mobile                     */}
      {/* ========================================================================= */}
      <aside
        aria-label="Social connect ribbon"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setSocialExpanded(false);
        }}
        className="fixed bottom-4 left-3 z-40 flex items-center select-none"
      >
        <div className="bg-[#002b66] p-1 rounded-2xl shadow-2xl border border-white/20 flex items-center transition-all duration-300">
          {/* Circular Toggle Button */}
          <button
            onClick={() => setSocialExpanded(!socialExpanded)}
            aria-label={isVisible ? "Collapse social links" : "Expand social links"}
            title="Connect With BSIET"
            className="w-8 h-8 rounded-full bg-[#001f4d] hover:bg-[#002b66] text-white flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer"
          >
            <svg
              className={`w-4 h-4 fill-current transition-transform duration-300 ${
                isVisible ? "rotate-0" : "rotate-180"
              }`}
              viewBox="0 0 24 24"
            >
              {/* Left bookmark/arrow icon */}
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Expandable Social Buttons: White squares with dark icons (Slide on Hover/Click) */}
          <div
            className={`flex items-center gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
              isVisible
                ? "max-w-[200px] opacity-100 pl-1 pr-1 pointer-events-auto"
                : "max-w-0 opacity-0 pl-0 pr-0 pointer-events-none"
            }`}
          >
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 bg-white hover:bg-slate-100 rounded text-slate-900 flex items-center justify-center font-bold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <span className="text-white/30 text-[10px] font-thin shrink-0">|</span>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-7 h-7 bg-white hover:bg-slate-100 rounded text-slate-900 flex items-center justify-center font-bold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <span className="text-white/30 text-[10px] font-thin shrink-0">|</span>

            {/* Email Envelope */}
            <a
              href="mailto:principal@bsiet.org"
              aria-label="Send Email to BSIET"
              className="w-7 h-7 bg-white hover:bg-slate-100 rounded text-slate-900 flex items-center justify-center font-bold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

            <span className="text-white/30 text-[10px] font-thin shrink-0">|</span>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 bg-white hover:bg-slate-100 rounded text-slate-900 flex items-center justify-center font-bold text-xs shadow-xs hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* ========================================================================= */}
      {/* 2. BOTTOM-RIGHT FLOATING WHATSAPP BUTTON                                  */}
      {/* ========================================================================= */}
      <aside
        aria-label="WhatsApp quick connect"
        className="fixed bottom-4 right-4 z-40 flex flex-col items-center gap-2.5"
      >
        {/* Scroll-to-Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Scroll to Top"
          className={`w-10 h-10 rounded-full bg-[#0a2540] hover:bg-[#001737] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer ${
            showTopBtn
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
          </svg>
        </button>

        {/* WhatsApp Round Floating Button */}
        <a
          href="https://wa.me/917507515656?text=Hello%20BSIET%20Admissions%20Team%2C%20I%20am%20interested%20in%20Engineering%20Admission%20at%20BSIET%20Kolhapur."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with BSIET on WhatsApp"
          title="Chat on WhatsApp"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        >
          <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.02 17.79c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.83c.01 4.54-3.69 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.06 0 1.21.89 2.39 1.01 2.55.12.17 1.74 2.66 4.22 3.73.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.12-.23-.19-.48-.31z" />
          </svg>
        </a>
      </aside>
    </>
  );
}
