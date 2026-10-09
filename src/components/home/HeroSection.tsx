import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-8 lg:pt-32 lg:pb-12 overflow-hidden">
      {/* Background elements */}
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-foreground">
              Tingkatkan Skala Bisnis Anda dengan <span className="gradient-text">Website Profesional.</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-muted max-w-xl leading-relaxed">
              Di era digital, bisnis tanpa website sama dengan toko tanpa papan nama. Kami merancang identitas digital yang memukau dan berfokus pada konversi penjualan Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={getWhatsAppUrl("Halo FAZ DIGITAL, saya ingin konsultasi gratis mengenai pembuatan website.")} size="lg" icon={ArrowRight}>
                Konsultasi Gratis
              </Button>
              <Button href="/portofolio" variant="outline" size="lg">
                Lihat Portofolio
              </Button>
            </div>

            <div className="pt-6 flex flex-wrap gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent-cyan" />
                <span className="text-sm font-medium text-brand-muted">Desain responsif</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent-cyan" />
                <span className="text-sm font-medium text-brand-muted">Tampilan modern</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-accent-cyan" />
                <span className="text-sm font-medium text-brand-muted">Sesuai kebutuhan</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:ml-auto w-full max-w-lg xl:max-w-xl">
            <div className="relative rounded-2xl overflow-hidden glass-card p-2 shadow-2xl aspect-[4/3] flex items-center justify-center bg-brand-secondary">
               <div className="w-full h-full bg-brand-primary rounded-xl overflow-hidden relative">
                 <img 
                   src="/images/hero_mockup.jpg" 
                   alt="Mockup Website Profesional" 
                   className="w-full h-full object-cover"
                 />
               </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
