import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-secondary z-0" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent-blue/20 to-brand-accent-cyan/20 z-0" />
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-card border border-brand-accent-blue/30 rounded-3xl p-8 md:p-16 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-foreground mb-6">
            Punya Ide Website? <br />
            <span className="gradient-text">Mari Wujudkan Bersama.</span>
          </h2>
          <p className="text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
            Ceritakan kebutuhanmu dan diskusikan solusi digital yang sesuai bersama FAZ DIGITAL. Kami siap membantu merancang kehadiran digital yang tepat.
          </p>
          
          <Button 
            href={getWhatsAppUrl("Halo FAZ DIGITAL, saya punya ide website dan ingin mewujudkannya. Mari berdiskusi!")} 
            size="lg" 
            icon={MessageCircle}
          >
            Konsultasi via WhatsApp
          </Button>
        </div>
      </Container>
    </section>
  );
}
