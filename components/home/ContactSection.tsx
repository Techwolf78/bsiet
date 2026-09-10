import { GMAPS_URL } from "@/data/navigation";

interface ContactSectionProps {
  onOpenEnquiry: () => void;
}

export default function ContactSection({ onOpenEnquiry }: ContactSectionProps) {
  return (
    <section className="py-10 sm:py-16 px-3.5 sm:px-6 bg-slate-50" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mb-1 sm:mb-3">
            Visit Our Kolhapur Campus
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Conveniently located in the educational hub of Tarabai Park, Kolhapur.
          </p>
        </div>

        {/* Mobile 1-Tap Quick Action Row (Visible only on mobile) */}
        <div className="grid grid-cols-2 gap-2 sm:hidden mb-4">
          <a
            href="tel:+917507515656"
            className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 text-slate-800 shadow-xs active:bg-slate-50"
          >
            <span className="text-base">📞</span>
            <div className="text-left">
              <span className="text-[11px] font-bold block leading-tight">Call Helpline</span>
              <span className="text-[9px] text-[#002b66] font-semibold">+91 7507515656</span>
            </div>
          </a>

          <a
            href="https://wa.me/917507515656?text=Hello%20BSIET%20Admissions%2C%20I%20am%20interested%20in%20Admission."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center gap-2 text-slate-800 shadow-xs active:bg-slate-50"
          >
            <span className="text-base">💬</span>
            <div className="text-left">
              <span className="text-[11px] font-bold block leading-tight">WhatsApp Desk</span>
              <span className="text-[9px] text-slate-500">Quick Response</span>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-stretch">
          {/* Left: Contact Info Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              {/* Address */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-red-50 text-[#c01e2e] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-slate-900 text-xs sm:text-sm block mb-0.5 sm:mb-1">Campus Address:</strong>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    Dr. Bapuji Salunkhe Institute of Engineering &amp; Technology<br />
                    2130, E Ward, Tarabai Park, Kolhapur, Maharashtra &mdash; 416003
                  </p>
                  <a
                    href={GMAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#c01e2e] hover:text-[#9e1423] text-[11px] sm:text-xs font-bold hover:underline transition-colors mt-1.5"
                  >
                    <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span>Get Directions on Google Maps &raquo;</span>
                  </a>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#002b66] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-slate-900 text-xs sm:text-sm block mb-0.5 sm:mb-1">Admissions Helpline:</strong>
                  <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed">
                    Officer: <a href="tel:+917507515656" className="text-[#002b66] hover:underline font-bold">+91 7507515656</a><br />
                    Desk: <a href="tel:02312658610" className="text-[#002b66] hover:underline">0231-2658610</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-[#002b66] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <strong className="text-slate-900 text-xs sm:text-sm block mb-0.5 sm:mb-1">Official Email:</strong>
                  <p className="text-slate-600 text-[11px] sm:text-xs">
                    <a href="mailto:principal@bsiet.org" className="text-[#002b66] hover:underline">
                      principal@bsiet.org
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-100">
              <button
                onClick={onOpenEnquiry}
                className="w-full bg-[#c01e2e] hover:bg-[#9e1423] text-white font-bold text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-xl shadow-xs transition-all cursor-pointer text-center"
              >
                Schedule Campus Visit / Enquiry
              </button>
            </div>
          </div>

          {/* Right: Interactive Map Box */}
          <div className="lg:col-span-7 relative h-56 sm:h-80 lg:h-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-xs border border-slate-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6888126084364!2d74.23253731481617!3d16.70200898849312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1001e4a66a337%3A0x6b6df5258e727e02!2sDr.%20Bapuji%20Salunkhe%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BSIET Kolhapur Google Maps Location"
            />

            {/* Floating Navigation Button */}
            <a
              href={GMAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#07172e] hover:bg-[#c01e2e] text-white text-[11px] sm:text-xs font-bold py-2 px-3.5 sm:py-2.5 sm:px-4 rounded-full shadow-lg border border-white/20 inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-all cursor-pointer z-10"
            >
              <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Get Directions ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
