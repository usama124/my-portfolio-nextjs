import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Layers,
  CheckCircle2,
  ArrowRight,
  Calendar,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { successStoriesData } from "@/data/successStories";

export const metadata: Metadata = {
  title: "Success Stories & Architecture Deep Dives",
  description:
    "Explore in-depth technical case studies and architectural solutions engineered by Usama Tahir — from national search engine crawlers to multimodal AI platforms.",
};

export default function SuccessStoriesPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Engineering Case Studies"
            title="Technical Success Stories &"
            highlightedTitle="Deep Dives"
            description="Detailed technical narratives highlighting architecture decisions, data pipelines, and production outcomes across real systems."
            className="mb-0"
          />

          <Button href="/meeting" variant="accent" size="md" icon={Calendar}>
            Schedule Technical Consultation
          </Button>
        </div>

        {/* Stories List */}
        <div className="space-y-14">
          {successStoriesData.map((story) => (
            <div
              key={story.id}
              id={story.slug}
              className="glass-panel rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden"
            >
              {/* Header */}
              <div className="space-y-3 pb-6 border-b border-slate-800">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="indigo" size="sm">
                    {story.domain}
                  </Badge>
                  <span className="text-xs font-mono text-cyan-400 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800">
                    System: {story.clientOrProject}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {story.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-medium">
                  {story.subtitle}
                </p>
              </div>

              {/* Challenge & Solution Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Challenge */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>The Engineering Challenge</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {story.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>The Architectural Solution</span>
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {story.solution}
                  </p>
                </div>
              </div>

              {/* Architectural Details */}
              <div className="space-y-4 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80">
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <span>Architecture & Implementation Highlights</span>
                </h3>
                <ul className="space-y-2.5">
                  {story.architectureDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes & Tech */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
                {/* Concrete Outcomes (7 cols) */}
                <div className="lg:col-span-7 space-y-3">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Verified Production Deliverables</span>
                  </h3>
                  <ul className="space-y-2">
                    {story.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech & Project Link (5 cols) */}
                <div className="lg:col-span-5 space-y-4 lg:border-l lg:border-slate-800 lg:pl-6">
                  <div>
                    <span className="block text-xs font-mono text-slate-500 mb-2">
                      Applied Technologies:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {story.technologies.map((tech) => (
                        <TechBadge key={tech} name={tech} size="sm" />
                      ))}
                    </div>
                  </div>

                  {story.relatedProjectSlug && (
                    <div className="pt-2">
                      <Link
                        href={`/projects/${story.relatedProjectSlug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 group/link"
                      >
                        <span>View project details & repository</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

