import React from "react";
import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "default" | "indigo" | "cyan" | "emerald" | "amber" | "purple";
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  badgeVariant = "indigo",
  title,
  highlightedTitle,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`space-y-3 mb-12 md:mb-16 ${
        align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"
      } ${className}`}
    >
      {badge && (
        <div>
          <Badge variant={badgeVariant} dot>
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
        {title}{" "}
        {highlightedTitle && (
          <span className="gradient-accent">{highlightedTitle}</span>
        )}
      </h2>
      {description && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

