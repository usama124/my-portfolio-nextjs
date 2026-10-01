import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Projects",
  description:
    "Complete portfolio of engineering projects by Usama Tahir — Python microservices, web crawlers, AI platform backends, and data engineering pipelines.",
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

