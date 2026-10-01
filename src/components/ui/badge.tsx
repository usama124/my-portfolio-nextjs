import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "indigo" | "cyan" | "emerald" | "amber" | "purple" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
}: BadgeProps) {
  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide",
    md: "text-xs px-3 py-1 font-medium",
  };

  const variantStyles = {
    default: "bg-slate-800/80 text-slate-300 border border-slate-700/60",
    indigo: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20",
    cyan: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
    emerald: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
    amber: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
    purple: "bg-purple-500/10 text-purple-300 border border-purple-500/20",
    outline: "bg-transparent text-slate-400 border border-slate-700/80",
  };

  const dotColors = {
    default: "bg-slate-400",
    indigo: "bg-indigo-400",
    cyan: "bg-cyan-400",
    emerald: "bg-emerald-400",
    amber: "bg-amber-400",
    purple: "bg-purple-400",
    outline: "bg-slate-500",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full backdrop-blur-sm ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${dotColors[variant]} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

