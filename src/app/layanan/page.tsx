import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ServicesSection from "@/components/home/ServicesSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Kami",
  description: "Eksplorasi layanan pembuatan website UMKM, undangan digital, dan landing page dari FAZ DIGITAL.",
};

export default function LayananPage() {
  return (
    <>
      <div className="pt-32 pb-10 border-b border-brand-border relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <SectionHeading 
            title="Layanan Digital Kami" 
            description="Solusi lengkap untuk membantu Anda membangun kehadiran online yang profesional dan berdampak."
          />
        </Container>
      </div>
      
      <ServicesSection />
      <FinalCTA />
    </>
  );
}
