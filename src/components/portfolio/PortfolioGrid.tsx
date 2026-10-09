"use client";

import { useState } from "react";
import { PortfolioItem } from "@/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const CATEGORIES = ["Semua", "Website UMKM", "Undangan Digital", "Landing Page"];

export function PortfolioGrid({ items }: PortfolioGridProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredItems = items.filter((item) => 
    activeCategory === "Semua" ? true : item.category === activeCategory
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              activeCategory === category
                ? "bg-brand-accent-blue text-static-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                : "bg-brand-secondary text-brand-muted hover:text-brand-foreground hover:bg-brand-secondary border border-brand-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div key={item.id} className="group rounded-2xl overflow-hidden glass-card flex flex-col hover:border-brand-accent-cyan/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <Link href={`/portofolio/${item.slug}`} className="relative aspect-video bg-brand-secondary/90 overflow-hidden block">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary p-6 transition-transform duration-500 group-hover:scale-105">
                  <div className="w-16 h-16 rounded-full bg-brand-accent-blue/20 flex items-center justify-center mb-4">
                    <span className="text-brand-accent-blue font-bold text-xl">{item.title.charAt(0)}</span>
                  </div>
                  <h4 className="text-lg font-bold text-brand-foreground text-center opacity-50">{item.title}</h4>
                </div>
              )}
              
              {item.isConcept && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="bg-brand-primary/80 backdrop-blur-md text-[11px] font-semibold px-2.5 py-1 rounded-full text-brand-accent-cyan border border-brand-accent-cyan/30 shadow-sm">
                    Konsep Desain
                  </span>
                </div>
              )}
            </Link>
            
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-xs uppercase tracking-wider text-brand-accent-blue font-semibold mb-2">{item.category}</div>
              <Link href={`/portofolio/${item.slug}`}>
                <h3 className="text-xl font-bold text-brand-foreground mb-3 hover:text-brand-accent-cyan transition-colors">{item.title}</h3>
              </Link>
              <p className="text-brand-muted text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">{item.description}</p>
              
              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <div className="flex gap-2">
                  {item.tags.slice(0, 2).map((tag, i) => (
                    <span key={i} className="text-xs text-brand-muted bg-brand-primary border border-brand-border px-2 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={item.demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent-cyan hover:text-brand-foreground transition-colors cursor-pointer">
                  Lihat Demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredItems.length === 0 && (
        <div className="text-center py-20 text-brand-muted">
          Belum ada proyek di kategori ini.
        </div>
      )}
    </div>
  );
}
