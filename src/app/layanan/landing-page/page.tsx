import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/layout/Container";
import { Layout, Target } from "lucide-react";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pembuatan Landing Page Promosi",
  description: "Landing page konversi tinggi untuk meningkatkan penjualan produk atau promosi kampanye Anda.",
};

export default function LandingPageService() {
  const elements = [
    { title: "Headline Promosi", desc: "Copywriting yang memancing perhatian pengunjung sejak detik pertama." },
    { title: "Penjelasan Manfaat", desc: "Fokus pada solusi yang diberikan produk kepada calon pembeli." },
    { title: "Keunggulan Produk", desc: "Daftar visual menarik mengenai fitur dan keunggulan spesifik." },
    { title: "Testimoni", desc: "Bukti sosial (social proof) untuk meningkatkan kepercayaan." },
    { title: "FAQ", desc: "Menjawab keraguan calon pembeli secara langsung." },
    { title: "Call to Action (CTA)", desc: "Tombol konversi kuat yang mengarah ke WhatsApp atau formulir pemesanan." },
  ];

  return (
    <>
      <ServiceHero 
        title="Landing Page Berfokus pada Konversi"
        description="Fokuskan perhatian pengunjung pada satu penawaran menarik. Kami merancang landing page untuk memaksimalkan prospek dan penjualan."
        badge="Layanan Digital"
        icon={Layout}
      />
      
      <section className="py-12 bg-brand-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 glass-card rounded-2xl p-8 border-brand-accent-blue/20">
              <h3 className="text-xl font-bold text-brand-foreground mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-brand-accent-cyan" />
                Elemen Landing Page Optimal
              </h3>
              <div className="space-y-4">
                {elements.map((element, i) => (
                  <div key={i} className="flex flex-col gap-1 border-b border-brand-border/50 pb-3 last:border-0 last:pb-0">
                    <h4 className="text-brand-foreground font-semibold">{element.title}</h4>
                    <p className="text-sm text-brand-muted">{element.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border text-xs text-brand-muted">
                * Tracking iklan (Facebook Pixel, Google Tag), integrasi CRM, dan automasi marketing tidak termasuk kecuali disepakati terpisah.
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-brand-foreground mb-6">Ubah Pengunjung Menjadi Pembeli</h2>
              <p className="text-brand-muted mb-6 leading-relaxed">
                Berbeda dengan website utama yang memiliki banyak halaman dan link, landing page dirancang tanpa gangguan. 
                Satu halaman, satu tujuan: <strong>konversi</strong>.
              </p>
              <p className="text-brand-muted mb-8 leading-relaxed">
                Baik untuk peluncuran produk baru, promosi event, pendaftaran webinar, maupun penawaran e-book, 
                kami merancang struktur visual yang memandu pengunjung dari perhatian awal hingga mengambil tindakan.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <PricingPreview />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
