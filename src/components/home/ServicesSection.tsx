import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { Store, Mail, Layout, ArrowRight, Check } from "lucide-react";

const iconMap: Record<string, any> = {
  Store: Store,
  Mail: Mail,
  Layout: Layout,
};

export default function ServicesSection() {
  return (
    <section className="py-12 bg-brand-primary">
      <Container>
        <SectionHeading 
          title="Solusi Digital untuk Kebutuhanmu" 
          description="Pilih layanan yang sesuai dengan tujuan bisnis atau acara yang ingin kamu wujudkan."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            
            return (
              <div 
                key={service.id} 
                className="glass-card rounded-2xl p-8 flex flex-col group hover:border-brand-accent-blue/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent-cyan mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-bold text-brand-foreground mb-4">{service.title}</h3>
                <p className="text-brand-muted mb-8 flex-grow">
                  {service.shortDescription}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-accent-blue shrink-0" />
                      <span className="text-sm text-brand-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto pt-6 border-t border-brand-border">
                  <Button 
                    href={`/layanan/${service.slug}`} 
                    variant="outline" 
                    fullWidth 
                    icon={ArrowRight}
                  >
                    {service.slug === 'undangan-digital' ? 'Lihat Detail' : (service.slug === 'landing-page' ? 'Lihat Detail' : 'Jelajahi Layanan')}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
