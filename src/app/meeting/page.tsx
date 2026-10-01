import React from "react";
import type { Metadata } from "next";
import {
  Clock,
  Video,
  ExternalLink,
  MessageCircle,
  Mail,
  Server,
  Zap,
  Cpu,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Book a Meeting | Consult with Usama Tahir — Senior Software & AI Engineer",
  description: "Schedule a free 30-minute technical consultation with Usama Tahir (Osama Qureshi, osamacodes) via Google Calendar. Discuss backend architecture, AI integration, freelance projects, or senior engineering roles.",
  keywords: ["book meeting Usama Tahir", "consult Python engineer", "hire AI engineer Pakistan", "schedule technical consultation", "freelance developer consultation"],
  alternates: { canonical: "https://portfolio.devbite.dev/meeting" },
  openGraph: {
    title: "Book a Meeting | Usama Tahir — Senior Software & AI Engineer",
    description: "Schedule a 30-minute technical consultation to discuss backend architecture, AI integration, freelance projects, or senior engineering opportunities.",
    url: "https://portfolio.devbite.dev/meeting",
    siteName: "Usama Tahir — Portfolio",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Usama Tahir" }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Meeting | Usama Tahir — Senior Software & AI Engineer",
    description: "Schedule a 30-minute technical consultation to discuss backend architecture, AI integration, freelance projects, or senior engineering opportunities.",
    creator: "@osamacodes",
    images: ["/images/og-image.jpg"],
  },
};

const meetingAgendas = [
  {
    icon: Server,
    title: "Backend Architecture & Microservices",
    description:
      "Discuss designing decoupled Python services, migrating monoliths, database schema planning, or performance bottlenecks.",
  },
  {
    icon: Zap,
    title: "RESTful API Design & Integrations",
    description:
      "Review high-throughput API endpoints, token authentication, rate-limiting strategies, or third-party platform integrations (Stripe, Twilio).",
  },
  {
    icon: Cpu,
    title: "Data Engineering & AI Integrations",
    description:
      "Explore automated ETL ingestion pipelines with Apache Airflow, web scraping crawlers, or integrating multimodal AI models into production.",
  },
  {
    icon: Video,
    title: "Senior Role or Contract Opportunity",
    description:
      "Discuss a Senior Software Engineer / Python Backend opening, technical advisory role, or dedicated freelance consulting contract.",
  },
];

export default function MeetingPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <Container size="default">
        <SectionHeading
          badge="Direct Booking"
          title="Schedule a Technical"
          highlightedTitle="Consultation"
          description="Select a convenient time directly on my Google Calendar for a 30-minute video discussion regarding your engineering requirements or project scope."
          align="center"
        />

        {/* Primary Booking Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center space-y-8 border-indigo-500/30 shadow-2xl relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-4 py-1.5 rounded-full text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>30-Minute Video Meeting via Google Meet</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Google Calendar Appointment Scheduling
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Open the interactive Google Calendar booking schedule to select your timezone and choose an open slot.
            </p>
          </div>

          {/* Primary CTA */}
          <div className="pt-2">
            <Button
              href={profileData.contact.calendarUrl}
              isExternal
              variant="accent"
              size="lg"
              icon={ExternalLink}
              className="text-base px-8 py-4 shadow-xl shadow-indigo-600/30"
            >
              Open Google Calendar Scheduler
            </Button>
          </div>

          {/* Direct link info */}
          <p className="text-xs font-mono text-slate-500">
            Link:{" "}
            <a
              href={profileData.contact.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              calendar.app.google/woZtgKv7DYBVE3917
            </a>
          </p>
        </div>

        {/* What we can discuss grid */}
        <div className="space-y-6 pt-6">
          <h3 className="text-lg font-bold text-white text-center">
            Common Discussion Topics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {meetingAgendas.map((agenda, idx) => {
              const Icon = agenda.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">
                      {agenda.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {agenda.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Alternative contact methods */}
        <div className="glass-panel p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Need an immediate response?</h4>
            <p className="text-xs text-slate-400">
              For urgent inquiries or fast questions, reach out via WhatsApp or email.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Button
              href={profileData.contact.whatsappUrl}
              isExternal
              variant="glass"
              size="sm"
              icon={MessageCircle}
            >
              WhatsApp Direct
            </Button>
            <Button
              href={`mailto:${profileData.contact.email}`}
              variant="outline"
              size="sm"
              icon={Mail}
            >
              Send Email
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

