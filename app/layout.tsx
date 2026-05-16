import type { Metadata } from "next";
import "./globals.css";

export const metadata = {
  title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
  description:
    "B2B SEO Kit helps marketers, founders, consultants, and SaaS teams turn keywords into content briefs, SEO checklists, product page optimization, and AI-search-ready workflows.",
  metadataBase: new URL("https://www.b2bseokit.com"),
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/logo-square.webp",
  },
  openGraph: {
    title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
    description:
      "Generate B2B keyword clusters, SEO content briefs, product page checklists, and AI-search-ready optimization workflows.",
    url: "https://www.b2bseokit.com",
    siteName: "B2B SEO Kit",
    images: ["/logo.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B SEO Kit | Free SEO Templates, Checklists & Tools",
    description:
      "Free B2B SEO templates, checklists, and tools for turning keywords into traffic, content, and leads.",
    images: ["/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
