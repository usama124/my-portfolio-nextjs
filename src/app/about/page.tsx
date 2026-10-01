import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  GraduationCap,
  Award,
  Globe2,
  FileText,
  Calendar,
  ArrowRight,
  MapPin,
  Mail,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/ui/tech-badge";
import { profileData } from "@/data/profile";
import { educationData, certificationsData, languagesData } from "@/data/education";

export const metadata: Metadata = {
  title: "About Usama Tahir",
  description:
    "Learn more about Usama Tahir (Osama Qureshi) — Senior Software Engineer & AI Engineer with 6+ years of experience in Python backends, microservices, and data pipelines.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* Header Section */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Bio text */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                badge="Engineering Profile"
                title="About"
                highlightedTitle="Usama Tahir"
                description="Senior Software Engineer & AI Engineer building scalable distributed backends and production AI systems."
                className="mb-0"
              />

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {profileData.longBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Contact Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-300">
                    Lahore, Punjab, Pakistan
                  </span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-slate-300 hover:text-white truncate"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              {/* Action row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  href={profileData.resume.path}
                  variant="accent"
                  size="md"
                  download
                  icon={FileText}
                >
                  Download Full Resume
                </Button>
                <Button
                  href="/meeting"
                  variant="glass"
                  size="md"
                  icon={Calendar}
                >
                  Schedule 30-Min Call
                </Button>
                <Button
                  href="/experience"
                  variant="outline"
                  size="md"
                  icon={ArrowRight}
                >
                  View Career Timeline
                </Button>
              </div>
            </div>

            {/* Right Profile Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl glass-panel p-4 border border-white/10 shadow-2xl relative">
                <div className="relative h-80 w-full rounded-2xl overflow-hidden mb-4 border border-slate-800">
                  <Image
                    src="/images/usama-img.jpg"
                    alt="Usama Tahir - Senior Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-[50%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">
                      B.Sc. CS (Honours) UET
                    </span>
                    <span className="font-mono text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-500/30">
                      6+ Years Exp
                    </span>
                  </div>
                </div>

                <div className="space-y-2 p-2">
                  <h4 className="font-bold text-white text-base">Identity & Aliases</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Known as <span className="text-white font-medium">Usama Tahir</span> (also <span className="text-white font-medium">Osama Tahir Qureshi</span> / <span className="text-cyan-400 font-mono">osamacodes</span>).
                  </p>
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span>Current Focus:</span>
                    <span className="text-indigo-400 font-mono">Python & Microservices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Comprehensive Categorized Skills Matrix */}
      <section className="py-12 bg-slate-950/40 border-y border-slate-900">
        <Container size="lg">
          <SectionHeading
            badge="Technical Toolkit"
            title="Categorized Skills &"
            highlightedTitle="Technologies"
            description="Verified tools, frameworks, databases, and protocols applied across production environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.skillsHierarchy.map((group, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="font-bold text-sm text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60">
                  {group.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} size="sm" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Education & Academic Foundation */}
      <section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Education column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeading
                badge="Academic History"
                title="Education &"
                highlightedTitle="Qualifications"
                description="Rigorous computer science degree and mathematics foundation."
                className="mb-0"
              />

              <div className="space-y-6">
                {educationData.map((edu) => (
                  <div
                    key={edu.id}
                    className="glass-panel p-6 rounded-2xl space-y-3 relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-indigo-400 shrink-0" />
                        {edu.degree}
                      </h3>
                      <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800 self-start sm:self-auto">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400">
                      {edu.institution}
                    </p>

                    {edu.grade && (
                      <p className="text-xs font-mono text-emerald-400">
                        {edu.grade}
                      </p>
                    )}

                    {edu.details && (
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Languages column (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Certifications */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span>Certifications</span>
                </h3>
                <div className="space-y-3">
                  {certificationsData.map((cert, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-4 rounded-xl flex items-center justify-between gap-3"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {cert.issuer}
                        </p>
                      </div>
                      <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Globe2 className="w-5 h-5 text-cyan-400" />
                  <span>Languages</span>
                </h3>
                <div className="space-y-3">
                  {languagesData.map((lang, idx) => (
                    <div
                      key={idx}
                      className="glass-panel p-4 rounded-xl flex items-center justify-between gap-3"
                    >
                      <span className="text-sm font-bold text-white">
                        {lang.language}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        {lang.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

