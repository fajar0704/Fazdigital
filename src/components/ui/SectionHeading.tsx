import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, description, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-16 ${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-foreground">
        {title}
      </h2>
      {description && (
        <p className="text-brand-muted text-lg md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
