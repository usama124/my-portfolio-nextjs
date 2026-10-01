import React from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { Project } from "@/types";
import { TechBadge } from "@/components/ui/tech-badge";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const hasDetailPage = [
    "humkinar-web-crawler",
    "humkinar-search-service",
    "datatera-ai-platform",
    "kinto-hr-backend",
    "ballogy-ai-basketball-backend",
    "etl-pipeline-application",
    "hermes-sensor-pipeline",
    "ehr-backend-base",
    "political-sentiment-analysis",
    "epidemic-surveillance-system",
    "custom-web-scraping-suite",
    "paybag-parcel-delivery-backend",
    "overmind-server-automation",
  ].includes(project.slug);

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl glass-panel glass-panel-hover p-6 sm:p-7 relative overflow-hidden transition-all duration-300 ${
        featured ? "border-indigo-500/30 shadow-indigo-950/20" : ""
      }`}
    >
      {/* Subtle corner highlight */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none rounded-tr-2xl" />

      <div>
        {/* Header row: category + featured badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant="indigo" size="sm">
            {project.categoryLabel}
          </Badge>
          {project.featured && (
            <Badge variant="cyan" size="sm">
              Featured
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors tracking-tight mb-2">
          {hasDetailPage ? (
            <Link href={`/projects/${project.slug}`} className="hover:underline focus:outline-none">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h3>

        {/* Tagline */}
        <p className="text-xs font-mono text-cyan-400 mb-3">{project.tagline}</p>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Key Highlights preview if present */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-6 space-y-1.5 border-t border-slate-800/80 pt-4">
            {project.highlights.slice(0, 2).map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer area: Tech tags & Action Links */}
      <div className="space-y-5 pt-4 border-t border-slate-800/60">
        {/* Technologies list */}
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
          {project.technologies.length > 5 && (
            <span className="text-[11px] font-mono text-slate-500 self-center pl-1">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
                aria-label={`View live site for ${project.title}`}
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live URL</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700/60 transition-colors"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Code</span>
              </a>
            )}
          </div>

          {hasDetailPage && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 group/link"
              aria-label={`Read case study for ${project.title}`}
            >
              <span>Deep Dive</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

