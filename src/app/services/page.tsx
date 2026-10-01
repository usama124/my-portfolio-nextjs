import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Server,
  Code,
  Database,
  Search,
  Cpu,
  Layers,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "Consulting and technical development services by Usama Tahir — Python microservices, FastAPI REST APIs, ETL data pipelines, web crawlers, and AI integration.",
};

export default function ServicesPage() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-6 h-6 text-indigo-400" />;
      case "Code":
        return <Code className="w-6 h-6 text-cyan-400" />;
      case "Database":
        return <Database className="w-6 h-6 text-emerald-400" />;
      case "Search":
        return <Search className="w-6 h-6 text-amber-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      default:
        return <Layers className="w-6 h-6 text-rose-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Consulting & Development"
            title="Technical Engineering"
            highlightedTitle="Services"
            description="High-caliber backend engineering, asynchronous microservices, data pipelines, and AI system integrations built for production reliability."
            className="mb-0"
          />

          <Button href="/meeting" variant="accent" size="md" icon={Calendar}>
            Schedule Technical Call
          </Button>
        </div>

        {/* Services List */}
        <div className="space-y-12">
          {servicesData.map((service) => {
            const relatedProjects = service.relatedProjectSlugs
              ? projectsData.filter((p) =>
                  service.relatedProjectSlugs?.includes(p.slug)
                )
              : [];

            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden space-y-8 scroll-mt-28"
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-lg shrink-0 mt-1">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                        {service.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-mono text-cyan-400 mt-1">
                        Best For: {service.targetAudience}
                      </p>
                    </div>
                  </div>

                  <Button
                    href="/meeting"
                    variant="glass"
                    size="sm"
                    icon={Calendar}
                    className="self-start sm:self-auto shrink-0"
                  >
                    Discuss Scope
                  </Button>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Problems Solved & Deliverables Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
                  {/* Problems Solved */}
                  <div className="space-y-3 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rose-500" />
                      Problems Solved
                    </h3>
                    <ul className="space-y-2.5">
                      {service.problemsSolved.map((prob, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Concrete Deliverables */}
                  <div className="space-y-3 p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Key Deliverables
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack & Related Projects */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Stack:</span>
                    {service.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  {relatedProjects.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                      <span className="font-mono text-slate-500">Related:</span>
                      {relatedProjects.map((proj) => (
                        <Link
                          key={proj.slug}
                          href={`/projects/${proj.slug}`}
                          className="text-indigo-400 hover:text-indigo-300 hover:underline"
                        >
                          {proj.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}

