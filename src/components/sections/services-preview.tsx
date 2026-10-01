import React from "react";
import Link from "next/link";
import { Server, Code, Database, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";

export function ServicesPreviewSection() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Server":
        return <Server className="w-5 h-5 text-indigo-400" />;
      case "Code":
        return <Code className="w-5 h-5 text-cyan-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      default:
        return <Search className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section className="py-24 relative">
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="Consulting & Delivery"
            title="How I Help"
            highlightedTitle="Teams & Clients"
            description="End-to-end backend engineering, distributed pipelines, and production AI integrations tailored for scalable applications."
            className="mb-0"
          />

          <Button href="/services" variant="glass" size="md" icon={ArrowRight}>
            View All Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.slice(0, 4).map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shadow-xs">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/60">
                  {service.problemsSolved.slice(0, 2).map((prob, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{prob}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/60">
                <Link
                  href={`/services#${service.id}`}
                  className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 group/link"
                >
                  <span>Scope & Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

