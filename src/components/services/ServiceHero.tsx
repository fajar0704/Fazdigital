import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  badge: string;
  icon: LucideIcon;
}

export function ServiceHero({ title, description, badge, icon: Icon }: ServiceHeroProps) {
  return (
    <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden border-b border-brand-border">
      
      <Container>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-secondary border border-brand-border flex items-center justify-center text-brand-accent-cyan shadow-lg">
              <Icon className="w-8 h-8" />
            </div>
          </div>
          
          <div className="mb-6">
            <Badge>{badge}</Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-foreground mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed mb-10">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={getWhatsAppUrl(`Halo FAZ DIGITAL, saya tertarik dengan layanan ${title}.`)} size="lg" icon={ArrowRight}>
              Konsultasi Layanan
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
