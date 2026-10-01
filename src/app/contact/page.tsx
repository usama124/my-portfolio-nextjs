import React from "react";
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/icons";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { Button } from "@/components/ui/button";
import { profileData } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact Usama Tahir",
  description:
    "Get in touch with Usama Tahir (Osama Qureshi) — Senior Software Engineer & AI Engineer for project inquiries, technical consulting, or career opportunities.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <Container size="lg">
        <SectionHeading
          badge="Direct Inquiries"
          title="Let's Discuss Your Next"
          highlightedTitle="Engineering Project"
          description="Have a question, project inquiry, or senior engineering opportunity? Reach out via the direct message form, schedule a video meeting, or contact me directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-xl font-bold text-white mb-2">Send a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Details & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800">
                Contact Information
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500">Email Address</span>
                    <a
                      href={`mailto:${profileData.contact.email}`}
                      className="font-medium text-white hover:text-indigo-300 transition-colors"
                    >
                      {profileData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500">Phone & WhatsApp</span>
                    <a
                      href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                      className="font-medium text-white hover:text-cyan-300 transition-colors"
                    >
                      {profileData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500">Location</span>
                    <span className="font-medium text-white">
                      Lahore, Punjab, Pakistan
                    </span>
                  </div>
                </div>
              </div>

              {/* Fast connect buttons */}
              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <Button
                  href={profileData.contact.calendarUrl}
                  isExternal
                  variant="accent"
                  size="md"
                  icon={Calendar}
                  className="w-full"
                >
                  Schedule 30-Min Video Call
                </Button>

                <Button
                  href={profileData.contact.whatsappUrl}
                  isExternal
                  variant="glass"
                  size="md"
                  icon={MessageCircle}
                  className="w-full"
                >
                  Open WhatsApp Chat
                </Button>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white">Professional & Social Profiles</h3>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/usama124"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-indigo-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/usamatahir-py"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/qureshi_speaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <TwitterIcon className="w-4 h-4 text-blue-400" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href="https://www.instagram.com/osama_speaks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-purple-400" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

