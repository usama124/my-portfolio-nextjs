import React from "react";
import {
  Server,
  Code2,
  Database,
  Search,
  Cpu,
  Layers,
  Globe,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";

const expertisePillars = [
  {
    icon: Globe,
    iconColor: "text-blue-400",
    bgGradient: "from-blue-500/10 to-transparent",
    title: "Web & Full-Stack Development",
    description:
      "Engineering modern, type-safe, and responsive web applications with React, Next.js (App Router), TypeScript, Tailwind CSS, and Node.js with high Core Web Vitals performance.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Full-Stack"],
    link: "/services#modern-web-development",
  },
  {
    icon: Server,
    iconColor: "text-indigo-400",
    bgGradient: "from-indigo-500/10 to-transparent",
    title: "Backend & Microservices",
    description:
      "Architecting decoupled, high-concurrency Python backend services with clean repository patterns, asynchronous task handling, and containerized Docker deployments.",
    technologies: ["Python", "FastAPI", "Django", "Flask", "Docker", "Microservices"],
    link: "/services#backend-microservices",
  },
  {
    icon: Code2,
    iconColor: "text-cyan-400",
    bgGradient: "from-cyan-500/10 to-transparent",
    title: "High-Performance REST APIs",
    description:
      "Engineering resilient RESTful API endpoints with strict schema validation (Pydantic), token authorization, tiered rate limiting, and third-party gateway integrations.",
    technologies: ["FastAPI", "Django REST", "PostgreSQL", "Redis", "Stripe", "Twilio"],
    link: "/services#rest-api-engineering",
  },
  {
    icon: Database,
    iconColor: "text-emerald-400",
    bgGradient: "from-emerald-500/10 to-transparent",
    title: "Data Engineering & ETL",
    description:
      "Developing automated data ingestion, transformation workflows, and multi-destination data delivery pipelines with Apache Airflow and high-speed ClickHouse analytical stores.",
    technologies: ["Apache Airflow", "ClickHouse", "PostgreSQL", "Dask", "ETL Pipelines"],
    link: "/services#data-engineering-etl",
  },
  {
    icon: Search,
    iconColor: "text-amber-400",
    bgGradient: "from-amber-500/10 to-transparent",
    title: "Web Scraping & Crawling",
    description:
      "Building resilient web crawlers capable of parsing dynamic JavaScript single-page apps, session handling, proxy rotation, and indexing millions of multilingual documents.",
    technologies: ["Scrapy", "Playwright", "Selenium", "BeautifulSoup", "Apache Solr"],
    link: "/services#web-scraping-crawling",
  },
  {
    icon: Cpu,
    iconColor: "text-purple-400",
    bgGradient: "from-purple-500/10 to-transparent",
    title: "AI & ML Model Integration",
    description:
      "Bridging heavy machine learning inference (OCR, speech-to-text, NLP sentiment analysis, sensor fault detection) into low-latency asynchronous production web services.",
    technologies: ["FastAPI", "OCR", "Speech-to-Text", "NLP Classification", "Time-Series ML"],
    link: "/services#ai-ml-integration",
  },
  {
    icon: Layers,
    iconColor: "text-rose-400",
    bgGradient: "from-rose-500/10 to-transparent",
    title: "Database Architecture",
    description:
      "Relational schema modeling, multi-column index optimization, query execution plan tuning, and in-memory Redis caching to eliminate database bottlenecks.",
    technologies: ["PostgreSQL", "Redis", "MongoDB", "SQLAlchemy", "Tortoise ORM"],
    link: "/services#database-optimization",
  },
];

export function ExpertiseSection() {
  return (
    <section className="py-20 bg-slate-950/40 relative">
      <Container size="lg">
        <SectionHeading
          badge="Technical Competence"
          title="Core Engineering"
          highlightedTitle="Specialties"
          description="A proven technical foundation focused on reliable backends, high-throughput data processing, and enterprise API architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertisePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl glass-panel glass-panel-hover p-6 flex flex-col justify-between overflow-hidden"
              >
                {/* Ambient gradient */}
                <div
                  className={`absolute top-0 left-0 right-0 h-24 bg-gradient-to-b ${pillar.bgGradient} pointer-events-none opacity-50`}
                />

                <div className="space-y-4 relative">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center shadow-md">
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {pillar.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  <Link
                    href={pillar.link}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-400 hover:text-indigo-300 group/link pt-1"
                  >
                    <span>Explore capabilities</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

