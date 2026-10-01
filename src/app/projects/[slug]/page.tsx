import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  Layers,
  Cpu,
  Server,
  ShieldAlert,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { projectsData } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const techList = project.technologies.slice(0, 5).join(", ");
  const desc = `${project.description} Technologies: ${techList}.`;

  return {
    title: `${project.title} | Engineering Case Study — Usama Tahir`,
    description: desc,
    keywords: [
      project.title,
      ...project.technologies.slice(0, 6),
      "Usama Tahir",
      "Osama Qureshi",
      "osamacodes",
      "engineering case study",
    ],
    alternates: { canonical: `https://portfolio.devbite.dev/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Usama Tahir`,
      description: desc,
      url: `https://portfolio.devbite.dev/projects/${project.slug}`,
      siteName: "Usama Tahir — Portfolio",
      images: project.image
        ? [{ url: project.image, width: 1200, height: 630, alt: project.title }]
        : [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: project.title }],
      type: "article",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Usama Tahir`,
      description: project.description,
      creator: "@osamacodes",
      images: project.image ? [project.image] : ["/images/og-image.jpg"],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 space-y-16">
      <Container size="default">
        {/* Back Navigation */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group mb-8"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-indigo-400" />
            <span>Back to all projects</span>
          </Link>

          {/* Header Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="indigo" size="sm">
                {project.categoryLabel}
              </Badge>
              {project.featured && (
                <Badge variant="cyan" size="sm">
                  Featured Project
                </Badge>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-cyan-300 font-medium">
              {project.tagline}
            </p>

            {/* Metadata Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-y border-slate-800/80">
              {project.organization && (
                <div className="p-3">
                  <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Organization
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {project.organization}
                  </span>
                </div>
              )}
              {project.role && (
                <div className="p-3">
                  <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Role
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {project.role}
                  </span>
                </div>
              )}
              {project.period && (
                <div className="p-3 col-span-2 sm:col-span-1">
                  <span className="block text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                    Timeline
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {project.period}
                  </span>
                </div>
              )}
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {project.liveUrl && (
                <Button
                  href={project.liveUrl}
                  isExternal
                  variant="accent"
                  size="md"
                  icon={ExternalLink}
                >
                  Visit Live System
                </Button>
              )}
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  isExternal
                  variant="glass"
                  size="md"
                  icon={GithubIcon}
                >
                  View GitHub Source
                </Button>
              )}
              <Button href="/contact" variant="outline" size="md">
                Inquire About Similar Architecture
              </Button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 pt-8">
          {/* Overview */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-indigo-400" />
              <span>Project Overview</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Overview */}
          {project.architectureOverview && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                <span>Technical Architecture</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.architectureOverview}
              </p>
            </div>
          )}

          {/* Key Highlights / Features */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Engineering Highlights</span>
              </h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Challenges Solved */}
          {project.challengesSolved && project.challengesSolved.length > 0 && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-amber-400" />
                <span>Technical Challenges & Solutions</span>
              </h2>
              <ul className="space-y-3">
                {project.challengesSolved.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-purple-400" />
              <span>Technologies & Tools Applied</span>
            </h2>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="md" />
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Need a similar solution built?</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            I can help you design, implement, and deploy scalable backends, APIs, or data pipelines tailored to your architecture.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Button href="/meeting" variant="accent" size="md">
              Schedule Consultation
            </Button>
            <Button href="/projects" variant="glass" size="md">
              Browse More Projects
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

