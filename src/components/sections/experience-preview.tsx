import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { experienceData } from "@/data/experience";
import { TechBadge } from "@/components/ui/tech-badge";

export function ExperiencePreviewSection() {
  return (
    <section className="py-20 bg-slate-950/50 relative">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Career Progression"
            title="Professional"
            highlightedTitle="Experience"
            description="Proven track record in senior software engineering, data pipeline architecture, and high-impact research initiatives."
            className="mb-0"
          />

          <Button href="/experience" variant="glass" size="md" icon={ArrowRight}>
            Full Career Timeline
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400">
                      {item.company}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {item.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400">Highlighted Contribution:</span>
                  <p className="text-xs text-slate-300">
                    {item.responsibilities[0]}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {item.technologies.slice(0, 4).map((tech) => (
                    <TechBadge key={tech} name={tech} size="sm" />
                  ))}
                  {item.technologies.length > 4 && (
                    <span className="text-[10px] font-mono text-slate-500 self-center">
                      +{item.technologies.length - 4}
                    </span>
                  )}
                </div>

                <Link
                  href="/experience"
                  className="text-xs font-medium text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

