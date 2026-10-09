"use client";

import { useState } from "react";
import { PricingPlan } from "@/types";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Check, X } from "lucide-react";

interface PricingCategoryTabsProps {
  plans: PricingPlan[];
}

const CATEGORIES = ["Website UMKM", "Undangan Digital", "Landing Page"];

export function PricingCategoryTabs({ plans }: PricingCategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const activePlans = plans.filter((plan) => plan.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-16">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-all ${
              activeCategory === category
                ? "bg-brand-accent-blue text-static-white shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                : "bg-brand-secondary text-brand-muted hover:text-brand-foreground hover:bg-brand-secondary border border-brand-border"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {activePlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`glass-card rounded-2xl p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 ${
              plan.isPopular ? "border-brand-accent-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-brand-secondary/80" : "border-brand-border hover:border-brand-accent-cyan/30"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan text-brand-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Paling Diminati
                </span>
              </div>
            )}
            
            <div className="mb-8 text-center pt-2">
              <h3 className="text-2xl font-bold text-brand-foreground mb-3">{plan.name}</h3>
              <p className="text-brand-muted text-sm h-10">{plan.targetUser}</p>
            </div>
            
            <div className="mb-8 text-center pb-8 border-b border-brand-border">
              {plan.price === null ? (
                <div className="text-xl font-bold text-brand-foreground h-12 flex items-center justify-center">Konsultasikan Kebutuhanmu</div>
              ) : (
                <div className="flex items-baseline justify-center gap-1 h-12">
                  <span className="text-xl text-brand-muted font-medium">Rp</span>
                  <span className="text-4xl font-bold text-brand-foreground tracking-tight">{plan.price.toLocaleString('id-ID')}</span>
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <p className="text-sm font-semibold text-brand-foreground mb-4">Fitur yang Termasuk:</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent-cyan shrink-0" />
                    <span className="text-sm text-brand-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {plan.limitations.length > 0 && (
                <>
                  <p className="text-sm font-semibold text-brand-muted mb-4 pt-4 border-t border-brand-border/50">Batasan / Tidak Termasuk:</p>
                  <ul className="space-y-4 mb-8">
                    {plan.limitations.map((limitation, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-red-400/70 shrink-0" />
                        <span className="text-sm text-brand-muted">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            
            <div className="mt-8 pt-6">
              <Button 
                href={getWhatsAppUrl(`Halo FAZ DIGITAL, saya tertarik dengan Paket ${plan.name} untuk layanan ${plan.category}.`)} 
                variant={plan.isPopular ? "primary" : "outline"} 
                fullWidth
              >
                Pilih Paket
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
