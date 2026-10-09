import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon: Icon,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-primary";
  
  const variants = {
    primary: "bg-brand-accent-blue text-static-white hover:bg-blue-600 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] focus:ring-brand-accent-blue",
    secondary: "bg-static-white text-brand-foreground hover:bg-gray-100 focus:ring-static-white",
    outline: "border-2 border-brand-accent-blue text-brand-accent-blue hover:bg-brand-accent-blue hover:text-static-white focus:ring-brand-accent-blue bg-transparent",
    ghost: "text-brand-muted hover:text-brand-accent-blue hover:bg-brand-secondary focus:ring-brand-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyle} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    // Determine if it's an external link
    const isExternal = href.startsWith('http') || href.startsWith('mailto:');
    
    if (isExternal) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {Icon && <Icon className="w-5 h-5" />}
        </a>
      );
    }
    
    return (
      <Link href={href} className={classes}>
        {children}
        {Icon && <Icon className="w-5 h-5" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </button>
  );
}
