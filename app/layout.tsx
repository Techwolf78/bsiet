import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import HeaderContainer from "@/components/layout/HeaderContainer";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dr. Bapuji Salunkhe Institute of Engineering & Technology (BSIET), Kolhapur",
  description:
    "Dr. Bapuji Salunkhe Institute of Engineering and Technology (BSIET), Kolhapur. Approved by AICTE, DTE Code 6468. Affiliated to DBATU (B.Tech Degree) and MSBTE (Polytechnic Diploma). Premier engineering college in Tarabai Park, Kolhapur.",
  keywords: [
    "BSIET",
    "BSIET Kolhapur",
    "Dr Bapuji Salunkhe Institute of Engineering and Technology",
    "Engineering College Kolhapur",
    "DBATU Kolhapur",
    "MSBTE Diploma",
    "Polytechnic Kolhapur",
    "DTE 6468",
    "AICTE Engineering",
  ],
  icons: {
    icon: "/images/bsiet-logo-512x512-01.png",
    apple: "/images/bsiet-logo-512x512-01.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900" suppressHydrationWarning>
        <HeaderContainer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
