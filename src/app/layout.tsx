import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lokesh Gile | Software Engineer & AI Developer",
  description: "Premium engineering portfolio of Lokesh Gile - Software Engineer, AI Developer, and Research Engineer specializing in EEG Research, OCR, and AI Pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground min-h-screen antialiased selection:bg-white selection:text-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
