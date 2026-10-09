import React from "react";

export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl ${className}`}>
      {children}
    </div>
  );
}
