import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osamacodes.com"),
  title: {
    default: "Usama Tahir — Senior Software & AI Engineer",
    template: "%s | Usama Tahir",
  },
  description:
    "Senior Software Engineer & AI Engineer based in Lahore, Pakistan. Specializing in full-stack development, AI/ML systems, and scalable SaaS platforms. Available for freelance and consulting engagements.",
  keywords: [
    "Usama Tahir",
    "Osama Tahir",
    "Usama Qureshi",
    "Osama Qureshi",
    "Usama Tahir Qureshi",
    "osamacodes",
    "Senior Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Python Developer",
    "Lahore Pakistan",
    "Freelance Developer",
    "Machine Learning Engineer",
  ],
  authors: [{ name: "Usama Tahir", url: "https://osamacodes.com" }],
  creator: "Usama Tahir",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osamacodes.com",
    siteName: "Usama Tahir — Portfolio",
    title: "Usama Tahir — Senior Software & AI Engineer",
    description:
      "Senior Software Engineer & AI Engineer building scalable full-stack platforms and intelligent AI systems.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Usama Tahir — Senior Software & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Tahir — Senior Software & AI Engineer",
    description:
      "Senior Software Engineer & AI Engineer building scalable full-stack platforms and intelligent AI systems.",
    creator: "@osamacodes",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://osamacodes.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usama Tahir",
  alternateName: [
    "Osama Tahir",
    "Usama Qureshi",
    "Osama Qureshi",
    "Usama Tahir Qureshi",
    "osamacodes",
  ],
  url: "https://osamacodes.com",
  email: "m.usamatahir0@gmail.com",
  jobTitle: "Senior Software Engineer & AI Engineer",
  worksFor: {
    "@type": "Organization",
    name: "FiveRivers Technologies",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: [
    "https://github.com/osamaqureshi",
    "https://linkedin.com/in/usama-tahir007",
    "https://twitter.com/osamacodes",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#07090e] text-slate-100 selection:bg-indigo-500 selection:text-white ambient-grid"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
