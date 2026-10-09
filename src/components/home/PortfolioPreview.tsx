import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { portfolios } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function PortfolioPreview() {
  const previewItems = portfolios.slice(0, 6);

  return (
    <section className="py-12 bg-brand-primary">
      <Container>
        <SectionHeading 
          title="Beberapa Konsep Digital yang Kami Rancang" 
          description="Eksplorasi ide dan konsep desain yang kami kembangkan untuk berbagai kebutuhan bisnis dan acara."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {previewItems.map((item) => (
            <div key={item.id} className="group rounded-2xl overflow-hidden glass-card flex flex-col hover:border-brand-accent-cyan/50 transition-colors">
              <div className="relative aspect-video bg-brand-secondary/80 overflow-hidden">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-secondary to-brand-primary p-6">
                    <div className="w-16 h-16 rounded-full bg-brand-accent-blue/20 flex items-center justify-center mb-4">
                      <span className="text-brand-accent-blue font-bold text-xl">{item.title.charAt(0)}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-foreground text-center opacity-50">{item.title}</h4>
                  </div>
                )}
                
                {item.isConcept && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-brand-primary/80 backdrop-blur text-xs font-semibold px-3 py-1 rounded-full text-brand-accent-cyan border border-brand-accent-cyan/30">
                      Concept Project
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-brand-accent-blue font-medium mb-2">{item.category}</div>
                <h3 className="text-xl font-bold text-brand-foreground mb-3">{item.title}</h3>
                <p className="text-brand-muted text-sm mb-6 flex-1">{item.description}</p>
                
                <div className="pt-4 border-t border-brand-border">
                  <a href={item.demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-foreground hover:text-brand-accent-cyan transition-colors">
                    Lihat Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/portofolio" size="lg" icon={ArrowRight}>
            Eksplorasi Seluruh Portofolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
