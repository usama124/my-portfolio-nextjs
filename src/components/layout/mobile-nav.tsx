"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, ArrowRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/ui/icons";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/socials";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Meeting", href: "/meeting" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 active:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors touch-manipulation"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-indigo-500/40 shrink-0 shadow-md">
                <Image
                  src="/images/avatar.png"
                  alt="Usama Tahir"
                  fill
                  sizes="36px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-tight text-white group-hover:text-indigo-400 transition-colors leading-tight">
                  Usama Tahir
                </span>
                <span className="text-[11px] font-mono text-slate-400 leading-tight">
                  Senior Full-Stack & AI
                </span>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 focus:outline-none touch-manipulation"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="py-4 flex flex-col space-y-1.5 overflow-y-auto max-h-[60vh]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium transition-colors touch-manipulation ${
                    isActive
                      ? "bg-indigo-500/15 text-indigo-300 border border-indigo-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-900/70"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-slate-600"}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTAs & Socials */}
          <div className="pt-4 border-t border-slate-800/80 space-y-3">
            <Link
              href="/meeting"
              onClick={handleLinkClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-indigo-600/25 text-sm touch-manipulation"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 30-Min Consultation</span>
            </Link>

            <div className="flex items-center justify-center gap-3 text-slate-400 pt-1">
              <a
                href={socialLinks.find((s) => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.find((s) => s.name === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/qureshi_speaks"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href={profileData.contact.email ? `mailto:${profileData.contact.email}` : "/contact"}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
