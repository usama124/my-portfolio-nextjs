import React from "react";
import { Calendar, Mail, FileText } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profileData } from "@/data/profile";

export function FinalCtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] hero-glow-1 blur-3xl pointer-events-none -z-10" />

      <Container size="default">
        <div className="rounded-3xl glass-panel p-8 sm:p-12 md:p-16 text-center space-y-6 relative overflow-hidden border-indigo-500/20 shadow-2xl">
          {/* Subtle top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="inline-flex">
            <Badge variant="indigo" dot size="md">
              Let&apos;s Build Together
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-2xl mx-auto leading-tight">
            Have a Backend, ETL, or AI Project in Mind?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Whether you are looking to architect scalable microservices, integrate machine learning APIs, automate large-scale data ingestion, or hire a Senior Python Engineer.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              href="/meeting"
              variant="accent"
              size="lg"
              icon={Calendar}
            >
              Schedule 30-Min Call
            </Button>
            <Button
              href="/contact"
              variant="glass"
              size="lg"
              icon={Mail}
            >
              Send Direct Message
            </Button>
            <Button
              href={profileData.resume.path}
              variant="outline"
              size="lg"
              download
              icon={FileText}
            >
              Download Resume
            </Button>
          </div>

          <p className="text-xs font-mono text-slate-500 pt-4">
            Direct Email:{" "}
            <a
              href={`mailto:${profileData.contact.email}`}
              className="text-indigo-400 hover:underline font-medium"
            >
              {profileData.contact.email}
            </a>{" "}
            • WhatsApp:{" "}
            <a
              href={profileData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium"
            >
              {profileData.contact.phone}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
