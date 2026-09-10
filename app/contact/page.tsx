"use client";

import { useState } from "react";
import ContactSection from "@/components/home/ContactSection";
import EnquiryModal from "@/components/modals/EnquiryModal";

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Contact Admissions &amp; Campus Office
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Reach out to our campus desk or visit our Tarabai Park campus. We are open Monday through Saturday from
            9:00 AM to 5:30 PM for campus tours and admission counseling.
          </p>
        </div>

        <ContactSection onOpenEnquiry={() => setEnquiryOpen(true)} />
      </div>

      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
