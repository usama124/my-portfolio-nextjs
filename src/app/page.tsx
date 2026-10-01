import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Usama Tahir — Senior Software & AI Engineer | Full-Stack & Python Expert",
  description:
    "Usama Tahir (Osama Tahir, Usama Qureshi, osamacodes) — Senior Software Engineer & AI Engineer with 6+ years of experience. Python backends, FastAPI microservices, AI/ML systems, ETL pipelines, and full-stack SaaS. Based in Lahore, Pakistan. Available for freelance and consulting.",
  keywords: [
    "Usama Tahir",
    "Osama Tahir",
    "Usama Qureshi",
    "Osama Qureshi",
    "Usama Tahir Qureshi",
    "osamacodes",
    "Senior Software Engineer Pakistan",
    "AI Engineer Lahore",
    "Python Developer Pakistan",
    "FastAPI Engineer",
    "Full Stack Developer Pakistan",
    "Machine Learning Engineer Pakistan",
    "Freelance Backend Developer",
    "FiveRivers Technologies",
    "KICS UET Lahore",
    "hire Python engineer",
    "backend consultant Pakistan",
  ],
  alternates: { canonical: "https://osamacodes.com" },
  openGraph: {
    title: "Usama Tahir — Senior Software & AI Engineer",
    description:
      "6+ years engineering Python backends, AI systems, and scalable SaaS platforms. Senior Software Engineer at FiveRivers Technologies. Available for freelance and consulting.",
    url: "https://osamacodes.com",
    siteName: "Usama Tahir — Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Usama Tahir — Senior Software & AI Engineer" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usama Tahir — Senior Software & AI Engineer",
    description:
      "6+ years engineering Python backends, AI systems, and scalable SaaS platforms. Available for freelance and consulting.",
    creator: "@osamacodes",
    images: ["/images/og-image.jpg"],
  },
};

import { HeroSection } from "@/components/sections/hero";
import { ExpertiseSection } from "@/components/sections/expertise";
import { FeaturedProjectsSection } from "@/components/sections/featured-projects";
import { ExperiencePreviewSection } from "@/components/sections/experience-preview";
import { ServicesPreviewSection } from "@/components/sections/services-preview";
import { CredibilitySection } from "@/components/sections/credibility";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ExpertiseSection />
      <FeaturedProjectsSection />
      <ExperiencePreviewSection />
      <ServicesPreviewSection />
      <CredibilitySection />
      <FinalCtaSection />
    </>
  );
}

