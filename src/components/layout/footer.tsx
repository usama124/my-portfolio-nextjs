import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Calendar, FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from "@/components/ui/icons";
import { Container } from "./container";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/socials";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (name: string) => {
    switch (name) {
      case "GitHub":
        return <GithubIcon className="w-4 h-4" />;
      case "LinkedIn":
        return <LinkedinIcon className="w-4 h-4" />;
      case "X (Twitter)":
        return <TwitterIcon className="w-4 h-4" />;
      case "Instagram":
        return <InstagramIcon className="w-4 h-4" />;
      case "Google Calendar":
        return <Calendar className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="mt-24 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <Container size="lg" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xs shadow-md">
                UT
              </div>
              <span className="font-bold text-base text-white tracking-tight group-hover:text-indigo-300 transition-colors">
                Usama Tahir
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Senior Software Engineer & AI Engineer specializing in resilient Python backends, high-throughput microservices, data engineering pipelines, and production AI integrations.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks
                .filter((s) => s.primary)
                .map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-900/80 hover:bg-indigo-600/20 text-slate-400 hover:text-indigo-300 border border-slate-800 hover:border-indigo-500/30 transition-colors"
                    aria-label={`${social.name} profile of Usama Tahir`}
                  >
                    {getSocialIcon(social.name)}
                  </a>
                ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-white transition-colors">
                  Work Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Engineering Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Technical Services
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Specialties
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services#backend-microservices" className="hover:text-white transition-colors">
                  Python Microservices
                </Link>
              </li>
              <li>
                <Link href="/services#rest-api-engineering" className="hover:text-white transition-colors">
                  High-Performance APIs
                </Link>
              </li>
              <li>
                <Link href="/services#data-engineering-etl" className="hover:text-white transition-colors">
                  ETL & Airflow Pipelines
                </Link>
              </li>
              <li>
                <Link href="/services#web-scraping-crawling" className="hover:text-white transition-colors">
                  Web Crawling & Search
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml-integration" className="hover:text-white transition-colors">
                  AI Model Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Meeting */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {profileData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {profileData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="pt-2">
                <a
                  href={profileData.resume.path}
                  download
                  className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </li>
              <li>
                <Link
                  href="/meeting"
                  className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Usama Tahir (Osama Qureshi). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Contact
            </Link>
            <Link href="/meeting" className="hover:text-slate-400 transition-colors">
              Schedule Meeting
            </Link>
            <a
              href="https://osamacodes.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-400 transition-colors"
            >
              osamacodes.com
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

