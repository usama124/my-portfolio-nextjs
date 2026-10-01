import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { projectsData } from "@/data/projects";

export function FeaturedProjectsSection() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <section className="py-24 relative">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Selected Work"
            title="Featured Engineering"
            highlightedTitle="Projects"
            description="Real-world distributed systems, web crawlers, AI platforms, and microservices delivered for production environments."
            className="mb-0"
          />

          <Button href="/projects" variant="glass" size="md" icon={ArrowRight}>
            {`View All ${projectsData.length} Projects`}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.slice(0, 6).map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-sm font-medium text-slate-200 hover:text-white hover:border-indigo-500/40 transition-all hover:bg-slate-800 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>{`Explore the complete ${projectsData.length}-project catalog & applications`}</span>
            <ArrowRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

