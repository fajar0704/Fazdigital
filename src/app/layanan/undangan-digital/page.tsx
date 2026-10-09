import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mail, CheckCircle2 } from "lucide-react";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pembuatan Undangan Digital",
  description: "Undangan online yang elegan, praktis, dan informatif untuk momen spesial Anda.",
};

export default function UndanganDigitalPage() {
  const features = [
    { title: "Desain Elegan", desc: "Pilih dari berbagai tema atau buat kustom sesuai konsep acara." },
    { title: "Hitung Mundur", desc: "Fitur countdown timer menuju hari istimewa Anda." },
    { title: "Galeri Foto", desc: "Tampilkan foto-foto pre-wedding atau momen berharga." },
    { title: "Peta Digital", desc: "Integrasi Google Maps agar tamu mudah menemukan lokasi." },
    { title: "Buku Tamu / RSVP", desc: "Terima konfirmasi kehadiran tamu secara langsung." },
    { title: "Background Music", desc: "Tambahkan lagu favorit untuk membangun suasana." },
  ];

  return (
    <>
      <ServiceHero 
        title="Undangan Digital untuk Momen Spesial"
        description="Sebarkan kabar bahagia dengan cara yang lebih praktis, modern, dan ramah lingkungan. Kami merancang undangan digital yang memukau dan informatif."
        badge="Layanan Digital"
        icon={Mail}
      />
      
      <section className="py-12 bg-brand-secondary">
        <Container>
          <SectionHeading 
            title="Sampaikan Kabar Bahagia dengan Lebih Baik" 
            description="Undangan digital memberikan kebebasan untuk menyajikan informasi lengkap yang sulit dimasukkan ke undangan cetak."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card rounded-xl p-6 hover:border-brand-accent-blue/50 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-brand-accent-cyan mb-4" />
                <h4 className="text-xl font-bold text-brand-foreground mb-3">{feature.title}</h4>
                <p className="text-brand-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-2xl mx-auto text-center p-6 bg-brand-primary rounded-2xl border border-brand-border">
             <p className="text-brand-muted">
                <strong className="text-brand-foreground">Catatan:</strong> Undangan bersifat informatif. Sistem ini tidak menyertakan otomatisasi pengiriman pesan satu-per-satu ke kontak Anda.
             </p>
          </div>
        </Container>
      </section>

      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
