import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
  description:
    "B2B SEO Kit helps marketers, founders, consultants, and SaaS teams turn keywords into content briefs, SEO checklists, product page optimization, and AI-search-ready workflows.",
  metadataBase: new URL("https://www.b2bseokit.com"),
  openGraph: {
    title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
    description:
      "Generate B2B keyword clusters, SEO content briefs, product page checklists, and AI-search-ready optimization workflows.",
    url: "https://www.b2bseokit.com",
    siteName: "B2B SEO Kit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
    description:
      "Free B2B SEO templates, checklists, and tools for turning keywords into traffic, content, and leads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
