import React from "react";
import { ShieldCheck, Cpu, GitBranch, Zap } from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";

const credibilityPoints = [
  {
    icon: GitBranch,
    iconColor: "text-indigo-400",
    title: "Modular Microservices Architecture",
    description:
      "Strict separation of concerns, domain-driven boundaries, repository layers, and asynchronous event queues preventing monolithic lock-in.",
  },
  {
    icon: Zap,
    iconColor: "text-cyan-400",
    title: "High-Throughput & Low Latency",
    description:
      "Leveraging FastAPI's asynchronous ASGI framework, Redis caching layers, and optimized PostgreSQL indexes for sub-second query retrieval.",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-emerald-400",
    title: "Strict Data Integrity & Security",
    description:
      "Pydantic schema validation, tokenized JWT/OAuth authorization, HIPAA/RBAC access controls, and atomic transaction handling.",
  },
  {
    icon: Cpu,
    iconColor: "text-purple-400",
    title: "Production AI Pipeline Stability",
    description:
      "Decoupling compute-heavy machine learning inference from live API threads, ensuring predictable response payloads and zero server blocking.",
  },
];

export function CredibilitySection() {
  return (
    <section className="py-20 bg-slate-950/60 border-y border-slate-900 relative">
      <Container size="lg">
        <SectionHeading
          badge="Engineering Philosophy"
          title="Architecture &"
          highlightedTitle="Reliability Principles"
          description="How I approach backend systems engineering to deliver dependable, high-concurrency software."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityPoints.map((point, idx) => {
            const Icon = point.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl space-y-3 relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${point.iconColor}`} />
                </div>
                <h3 className="font-bold text-sm text-white">{point.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

