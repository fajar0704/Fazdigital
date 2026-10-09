import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { portfolios } from "@/data/portfolio";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portofolio & Karya",
  description: "Lihat hasil karya dan konsep desain website UMKM, undangan digital, serta landing page yang kami rancang.",
};

export default function PortfolioPage() {
  return (
    <>
      <div className="pt-24 pb-6 border-b border-brand-border relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <SectionHeading 
            title="Karya & Konsep Desain" 
            description="Eksplorasi hasil kerja dan konsep desain yang kami rancang dengan fokus pada estetika dan fungsionalitas."
          />
        </Container>
      </div>
      
      <section className="py-20 bg-brand-primary min-h-screen">
        <Container>
          <PortfolioGrid items={portfolios} />
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
