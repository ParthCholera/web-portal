import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teqto Infotech | AI, Automation & Software Development",
  description:
    "Teqto Infotech delivers AI-powered software, custom development, web and mobile solutions, and digital growth services for startups, SMEs, and enterprises.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#03050C] font-sans text-white">{children}</body>
    </html>
  );
}
