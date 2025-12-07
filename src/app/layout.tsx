import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://krutibas.vercel.app"),
  title: {
    default: "Krutibas Dwibedi | Electrical Engineering Student",
    template: "%s | Krutibas Dwibedi",
  },
  description: "Portfolio of Krutibas Dwibedi, an Electrical Engineer at Powergrid Corporation of India Limited. IIT Kharagpur dropout, GATE 2024 AIR-653.",
  keywords: ["Krutibas Dwibedi", "Electrical Engineer", "Powergrid", "Portfolio", "IIT Kharagpur", "GATE 2024", "Engineering Student", "Web Developer"],
  authors: [{ name: "Krutibas Dwibedi" }],
  creator: "Krutibas Dwibedi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://krutibas.vercel.app",
    title: "Krutibas Dwibedi | Electrical Engineering Student",
    description: "Portfolio of Krutibas Dwibedi, an Electrical Engineer at Powergrid Corporation of India Limited.",
    siteName: "Krutibas Dwibedi Portfolio",
    images: [
      {
        url: "/kruti.jpeg",
        width: 1200,
        height: 630,
        alt: "Krutibas Dwibedi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krutibas Dwibedi | Electrical Engineering Student",
    description: "Portfolio of Krutibas Dwibedi, an Electrical Engineer at Powergrid Corporation of India Limited.",
    images: ["/kruti.jpeg"],
  },
  icons: {
    icon: "/favicon-v4.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krutibas Dwibedi",
  url: "https://krutibas.vercel.app",
  image: "https://krutibas.vercel.app/kruti.jpeg",
  sameAs: [
    "https://www.linkedin.com/in/krutibas-dwibedi",
    "https://github.com/krutibas",
    // Add other social links if available
  ],
  jobTitle: "Electrical Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Powergrid Corporation of India Limited"
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "IIT Kharagpur"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
