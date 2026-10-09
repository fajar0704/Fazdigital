import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export function Badge({ children, variant = "primary" }: BadgeProps) {
  const baseStyle = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase";
  const variants = {
    primary: "bg-brand-accent-blue/10 text-brand-accent-blue border border-brand-accent-blue/20",
    outline: "border border-brand-border text-brand-muted",
  };
  
  return (
    <span className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </span>
  );
}
