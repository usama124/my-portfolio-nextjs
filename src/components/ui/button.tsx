import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "glass" | "accent";
  size?: "sm" | "md" | "lg";
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
  download?: boolean | string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  ariaLabel?: string;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  isExternal = false,
  download,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 active:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/30",
    accent:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 active:from-blue-700 active:to-indigo-700 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5",
    secondary:
      "bg-slate-800/90 text-slate-100 hover:bg-slate-700/90 active:bg-slate-800 border border-slate-700/80 shadow-sm",
    glass:
      "bg-slate-900/60 backdrop-blur-md text-slate-200 border border-white/10 hover:bg-white/10 hover:border-white/20 active:bg-white/5 shadow-sm",
    outline:
      "bg-transparent text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 active:bg-slate-800/60",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/60 active:bg-slate-800/80",
  };

  const classes = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const iconElement = Icon ? (
    <Icon
      className={`${size === "sm" ? "w-3.5 h-3.5" : size === "lg" ? "w-5 h-5" : "w-4 h-4"} shrink-0`}
      aria-hidden="true"
    />
  ) : null;

  const content = (
    <>
      {Icon && iconPosition === "left" && iconElement}
      <span>{children}</span>
      {Icon && iconPosition === "right" && iconElement}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          onClick={onClick}
          download={download}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    if (download) {
      return (
        <a
          href={href}
          download={download}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

