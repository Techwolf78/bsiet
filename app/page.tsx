"use client";

import { useState } from "react";
import HeroSection from "@/components/home/HeroSection";
import StatStrip from "@/components/home/StatStrip";
import AcademicPrograms from "@/components/home/AcademicPrograms";
import DepartmentLabs from "@/components/home/DepartmentLabs";
import PlacementRecruiters from "@/components/home/PlacementRecruiters";
import BentoLeadership from "@/components/home/BentoLeadership";
import CampusLife from "@/components/home/CampusLife";
import ContactSection from "@/components/home/ContactSection";
import EnquiryModal from "@/components/modals/EnquiryModal";
import BrochureModal from "@/components/modals/BrochureModal";
import ProgramDetailsModal from "@/components/modals/ProgramDetailsModal";
import { Program } from "@/data/programs";

export default function HomePage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [brochureOpen, setBrochureOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  return (
    <>
      <HeroSection
        onOpenEnquiry={() => setEnquiryOpen(true)}
        onOpenBrochure={() => setBrochureOpen(true)}
      />
      <StatStrip />
      <AcademicPrograms
        onOpenEnquiry={() => setEnquiryOpen(true)}
        onOpenDetails={(prog) => setSelectedProgram(prog)}
      />
      <DepartmentLabs />
      <PlacementRecruiters />
      <BentoLeadership />
      <CampusLife />
      <ContactSection onOpenEnquiry={() => setEnquiryOpen(true)} />

      {/* Modals */}
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <BrochureModal isOpen={brochureOpen} onClose={() => setBrochureOpen(false)} />
      <ProgramDetailsModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onApply={() => setEnquiryOpen(true)}
      />
    </>
  );
}
