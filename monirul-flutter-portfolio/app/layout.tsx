import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monirul Islam — Flutter Developer",
  description: "Flutter developer with 3+ years of experience and 15+ production apps across Android, iOS and Web.",
  keywords: ["Monirul Islam", "Flutter Developer", "Mobile Engineer", "Dart", "Bangladesh"],
  openGraph: {
    title: "Monirul Islam — Flutter Developer",
    description: "15+ production apps across Android, iOS and Web. Explore selected mobile engineering case studies.",
    type: "website",
    images: [{ url: "/og-card.png", width: 1200, height: 630, alt: "Monirul Islam — Flutter Developer portfolio" }],
  },
  twitter: { card: "summary_large_image", title: "Monirul Islam — Flutter Developer", description: "Mobile products engineered for performance, reliability and scale.", images: ["/og-card.png"] },
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
