import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects | Usama Tahir — Python, AI & Full-Stack Systems",
  description: "19+ real engineering projects by Usama Tahir (Osama Qureshi, osamacodes) — web crawlers, AI platform APIs, FastAPI microservices, ETL pipelines, and full-stack SaaS systems. Open source on GitHub.",
  keywords: ["Usama Tahir projects", "osamacodes GitHub", "Python microservices portfolio", "FastAPI projects", "AI engineering portfolio", "web crawler Python"],
  alternates: { canonical: "https://osamacodes.com/projects" },
  openGraph: {
    title: "Engineering Projects | Usama Tahir",
    description: "19+ real-world engineering projects — Python backends, AI APIs, web crawlers, ETL pipelines, and SaaS systems.",
    url: "https://osamacodes.com/projects",
    siteName: "Usama Tahir — Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Usama Tahir" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Projects | Usama Tahir",
    description: "19+ real-world engineering projects — Python backends, AI APIs, web crawlers, ETL pipelines, and SaaS systems.",
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
          description="Explore 19+ systems spanning Python backend microservices, real-time web crawlers, AI platform APIs, and automated data engineering pipelines."
        />

        {/* Interactive Filter and Project Grid */}
        <ProjectGrid projects={projectsData} />
      </Container>
    </div>
  );
}

