import React from "react";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  FileText,
  Mail,
  Server,
  Cpu,
  Database,
  Terminal,
  Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profileData } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] hero-glow-1 blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] hero-glow-2 blur-3xl pointer-events-none -z-10" />

      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2">
              <Badge variant="emerald" dot size="md">
                Available for Senior Roles & Consulting
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hey, I&apos;m <span className="gradient-text">{profileData.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-indigo-300 tracking-tight">
                {profileData.title}
              </p>
            </div>

            {/* Value proposition paragraph */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Specializing in modern full-stack web applications (React, Next.js, TypeScript), scalable Python microservices, REST APIs, and production AI integrations with over 6 years of verified engineering experience.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="block text-xl font-bold font-mono text-white">6+ Years</span>
                <span className="text-xs text-slate-400">Engineering Experience</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="block text-xl font-bold font-mono text-indigo-400">20+ Projects</span>
                <span className="text-xs text-slate-400">Web Apps & Systems</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="block text-xl font-bold font-mono text-cyan-400">Next.js & Python</span>
                <span className="text-xs text-slate-400">Full-Stack & Backend</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="/projects" variant="accent" size="lg" icon={ArrowRight}>
                Explore Projects
              </Button>
              <Button href="/meeting" variant="glass" size="lg" icon={Calendar}>
                Book Consultation
              </Button>
              <Button
                href={profileData.resume.path}
                variant="outline"
                size="lg"
                download
                icon={FileText}
              >
                Resume PDF
              </Button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80 text-slate-400">
              <span className="text-xs font-mono text-slate-500">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/usama124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-300 border border-slate-800 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/usamatahir-py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-300 border border-slate-800 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com/qureshi_speaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-300 border border-slate-800 transition-colors"
                  aria-label="Twitter / X Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:usamatahir717@gmail.com"
                  className="p-2 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-300 border border-slate-800 transition-colors"
                  aria-label="Email Usama Tahir"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Profile Card / Visual (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative background glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />

              <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-4 shadow-2xl backdrop-blur-xl">
                {/* Photo container */}
                <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden mb-4 border border-slate-800">
                  <Image
                    src="/images/usama-img.jpg"
                    alt="Usama Tahir (Osama Qureshi) - Senior Software Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-[50%_20%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                    <span className="font-mono bg-slate-950/80 px-2.5 py-1 rounded-md border border-white/10">
                      Lahore, Pakistan
                    </span>
                    <span className="font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Senior Engineer
                    </span>
                  </div>
                </div>

                {/* Quick tech capability badges */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>Engineering Focus</span>
                    <span className="text-indigo-400">Production Systems</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <Globe className="w-3.5 h-3.5 text-blue-400" />
                      <span>React / Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <Server className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Python Backends</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      <span>AI Integrations</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <Database className="w-3.5 h-3.5 text-emerald-400" />
                      <span>TypeScript / Node</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

