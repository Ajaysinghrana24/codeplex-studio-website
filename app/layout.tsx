import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Codeplex Studio | Custom Web Development & Digital Transformation",
  description: "Codeplex Studio is a full-service digital agency providing custom web development, Shopify, HubSpot, CRM solutions, SaaS development, and UI/UX design to drive business growth.",
  keywords: ["digital agency", "web development", "shopify developer", "crm software", "hubspot integration", "saas development", "ui/ux design", "seo", "e-commerce"],
  authors: [{ name: "Codeplex Studio" }],
  openGraph: {
    title: "Codeplex Studio | Premium Digital Agency",
    description: "Enterprise-grade web development, Shopify stores, CRM integrations, and custom SaaS platforms designed for conversion.",
    type: "website",
    locale: "en_US",
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
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-bg-darker text-white font-sans">
        {children}
      </body>
    </html>
  );
}

