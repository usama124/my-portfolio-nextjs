import React from "react";

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: "sm" | "md";
}

export function TechBadge({ name, className = "", size = "md" }: TechBadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 font-mono",
    md: "text-xs px-2.5 py-1 font-mono",
  };

  return (
    <span
      className={`inline-flex items-center rounded-lg bg-slate-900/80 text-slate-300 border border-slate-700/50 hover:border-slate-600 transition-colors shadow-xs ${sizeStyles[size]} ${className}`}
    >
      {name}
    </span>
  );
}

