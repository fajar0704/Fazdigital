import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";
import { ArrowRight, Check } from "lucide-react";

export default function PricingPreview() {
  // Hanya ambil paket Standard / Professional (isPopular) sebagai preview
  const popularPlans = pricingPlans.filter(plan => plan.isPopular);

  return (
    <section className="py-12 bg-brand-primary">
      <Container>
        <SectionHeading 
          title="Pilih Paket yang Sesuai" 
          description="Transparansi paket untuk membantu Anda menyesuaikan dengan anggaran dan kebutuhan."
        />
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {popularPlans.map((plan) => (
            <div key={plan.id} className="glass-card rounded-2xl p-8 flex flex-col relative border-brand-accent-blue/40 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
              <div className="absolute top-0 right-8 -translate-y-1/2">
                <span className="bg-gradient-to-r from-brand-accent-blue to-brand-accent-cyan text-brand-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Paling Diminati
                </span>
              </div>
              
              <div className="mb-8">
                <h4 className="text-brand-accent-cyan font-semibold mb-2">{plan.category}</h4>
                <h3 className="text-2xl font-bold text-brand-foreground mb-2">{plan.name}</h3>
                <p className="text-brand-muted text-sm h-10">{plan.targetUser}</p>
              </div>
              
              <div className="mb-8">
                {plan.price === null ? (
                  <div className="text-2xl font-bold text-brand-foreground">Konsultasikan Kebutuhanmu</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl text-brand-muted">Rp</span>
                    <span className="text-4xl font-bold text-brand-foreground">{plan.price.toLocaleString('id-ID')}</span>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.slice(0, 5).map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-accent-cyan shrink-0" />
                    <span className="text-sm text-brand-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <Button href="/harga" variant="primary" fullWidth>
                  Lihat Detail Paket
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button href="/harga" variant="outline" size="lg" icon={ArrowRight}>
            Lihat Semua Pilihan Paket
          </Button>
        </div>
      </Container>
    </section>
  );
}
