"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Calendar } from "lucide-react";
import { Container } from "./container";
import { MobileNav } from "./mobile-nav";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Success Stories", href: "/success-stories" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-indigo-500/40 group-hover:ring-indigo-400/70 transition-all duration-300 shadow-md shadow-indigo-500/20 group-hover:scale-105 shrink-0">
              <Image
                src="/images/avatar.png"
                alt="Usama Tahir"
                fill
                sizes="36px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-white group-hover:text-indigo-300 transition-colors leading-tight">
                Usama Tahir
              </span>
              <span className="text-[11px] font-mono text-slate-400 leading-tight">
                Senior Backend & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={`text-xs font-medium px-3.5 py-2 rounded-xl transition-colors ${
                pathname === "/contact"
                  ? "text-indigo-400 bg-indigo-500/10"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              Contact
            </Link>

            <Link
              href="/meeting"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Call</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}

