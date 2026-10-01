import React from "react";
import type { Metadata } from "next";
import { FileText, Calendar } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";
import { experienceData } from "@/data/experience";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Explore the professional engineering timeline of Usama Tahir — Senior Software Engineer at FiveRivers Technologies and Research Officer at KICS UET Lahore.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <section>
        <Container size="lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading
              badge="Professional History"
              title="Engineering"
              highlightedTitle="Experience"
              description="A chronological narrative of roles, architectural contributions, and enterprise projects delivered across 6+ years."
              className="mb-0"
            />

            <div className="flex flex-wrap gap-3">
              <Button
                href={profileData.resume.path}
                variant="accent"
                size="md"
                download
                icon={FileText}
              >
                Download Resume (PDF)
              </Button>
              <Button
                href="/meeting"
                variant="glass"
                size="md"
                icon={Calendar}
              >
                Discuss Opportunities
              </Button>
            </div>
          </div>

          {/* Timeline */}
          <ExperienceTimeline items={experienceData} />
        </Container>
      </section>

      {/* Engineering Competence Summary */}
      <section className="py-12 bg-slate-950/40 border-y border-slate-900">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-indigo-400 font-semibold">Leadership & Growth</span>
              <h4 className="text-base font-bold text-white">Software Engineer → Senior Engineer</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Promoted at FiveRivers Technologies for driving backend excellence, mentoring junior developers, and delivering scalable microservices.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">Microservices Specialization</span>
              <h4 className="text-base font-bold text-white">Distributed Architecture & APIs</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Designed high-concurrency microservices, token authentication, Redis rate-limiting, and PostgreSQL database migrations.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl space-y-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold">High-Impact Research</span>
              <h4 className="text-base font-bold text-white">Big Data, NLP & Crawling at KICS</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Engineered Urdu web crawlers, Apache Solr indexing, and real-time Twitter sentiment and epidemic surveillance pipelines.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

