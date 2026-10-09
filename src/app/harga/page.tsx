import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCategoryTabs } from "@/components/pricing/PricingCategoryTabs";
import { pricingPlans } from "@/data/pricing";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harga Paket Layanan",
  description: "Daftar harga paket pembuatan website UMKM, undangan digital, dan landing page FAZ DIGITAL.",
};

export default function HargaPage() {
  return (
    <>
      <div className="pt-24 pb-6 border-b border-brand-border relative overflow-hidden bg-brand-secondary/20">
        <Container className="relative z-10 text-center">
          <SectionHeading 
            title="Investasi Digital Anda" 
            description="Pilih paket yang sesuai dengan kebutuhan bisnis atau acara Anda. Transparan, tanpa biaya tersembunyi."
          />
        </Container>
      </div>
      
      <section className="py-20 bg-brand-primary">
        <Container>
          <PricingCategoryTabs plans={pricingPlans} />
        </Container>
      </section>
      
      <FAQSection />
      <FinalCTA />
    </>
  );
}
