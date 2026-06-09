import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Navbar from "@/components/ui/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../../public/fonts/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lokesh Gile | Software Engineer",
  description: "Portfolio of Lokesh Gile - Full Stack Product Engineer building scalable products, AI systems, and mobile applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "AI Engineer", "React Developer", "Next.js Developer", "Lokesh Gile"],
  openGraph: {
    title: "Lokesh Gile | Software Engineer",
    description: "Full Stack Product Engineer building scalable products, AI systems, and mobile applications.",
    url: "https://lokeshgile.com",
    siteName: "Lokesh Gile Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lokesh Gile | Software Engineer",
    description: "Full Stack Product Engineer building scalable products, AI systems, and mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Lokesh Gile",
    jobTitle: "Software Engineer",
    url: "https://lokeshgile.com",
    sameAs: [
      "https://github.com/Loki3306",
      "https://www.linkedin.com/in/lokesh-gile-b61145248/"
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${cabinetGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground min-h-screen antialiased selection:bg-accent selection:text-black font-sans">
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
