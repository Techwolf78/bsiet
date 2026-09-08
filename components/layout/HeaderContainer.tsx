"use client";

import { useState } from "react";
import TopAnnouncement from "./TopAnnouncement";
import UtilityGoldBar from "./UtilityGoldBar";
import InstitutionalHeader from "./InstitutionalHeader";
import Navbar from "./Navbar";
import EnquiryModal from "../modals/EnquiryModal";

export default function HeaderContainer() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <TopAnnouncement />
      <UtilityGoldBar />
      <InstitutionalHeader />
      <Navbar onOpenEnquiry={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
