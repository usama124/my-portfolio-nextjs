import React from "react";
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

