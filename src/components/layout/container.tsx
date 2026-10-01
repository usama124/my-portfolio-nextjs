import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "narrow" | "wide";
  className?: string;
}

export function Container({
  children,
  size = "default",
  className = "",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-3xl 2xl:max-w-4xl",
    sm: "max-w-4xl 2xl:max-w-5xl",
    default: "max-w-6xl 2xl:max-w-7xl",
    lg: "max-w-7xl 2xl:max-w-[1440px]",
    wide: "max-w-[1600px] 2xl:max-w-[1800px]",
  };

  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 md:px-8 2xl:px-12 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
