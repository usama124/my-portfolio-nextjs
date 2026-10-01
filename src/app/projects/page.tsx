import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects | Usama Tahir — Python, AI & Full-Stack Systems",
  description: "20+ real engineering projects by Usama Tahir (Osama Qureshi, osamacodes) — modern Next.js/React web applications, web crawlers, AI platform APIs, FastAPI microservices, ETL pipelines, and full-stack SaaS systems.",
  keywords: ["Usama Tahir projects", "osamacodes GitHub", "Python microservices portfolio", "FastAPI projects", "AI engineering portfolio", "web crawler Python"],
  alternates: { canonical: "https://portfolio.devbite.dev/projects" },
  openGraph: {
    title: "Engineering Projects | Usama Tahir",
    description: "20+ real-world engineering projects — modern Next.js web applications, Python backends, AI APIs, web crawlers, and ETL pipelines.",
    url: "https://portfolio.devbite.dev/projects",
    siteName: "Usama Tahir — Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Usama Tahir" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Projects | Usama Tahir",
    description: "20+ real-world engineering projects — modern Next.js web applications, Python backends, AI APIs, web crawlers, and ETL pipelines.",
    creator: "@osamacodes",
    images: ["/images/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 space-y-12">
      <Container size="lg">
        <SectionHeading
          badge="Verified Works"
          title="Engineering Projects &"
          highlightedTitle="Systems"
          description="Explore 20+ production systems and web applications spanning modern Next.js/React frontends, Python backend microservices, web crawlers, AI platform APIs, and data pipelines."
        />

        {/* Interactive Filter and Project Grid */}
        <ProjectGrid projects={projectsData} />
      </Container>
    </div>
  );
}

