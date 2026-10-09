import { ServiceHero } from "@/components/services/ServiceHero";
import { Container } from "@/components/layout/Container";
import { CheckCircle2, Store } from "lucide-react";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Layanan Pembuatan Website UMKM",
  description: "Buat website profesional untuk bisnis UMKM Anda dengan desain responsif, fitur katalog, dan integrasi WhatsApp.",
};

export default function WebsiteUMKMPage() {
  const benefits = [
    "Meningkatkan kredibilitas bisnis di mata pelanggan.",
    "Buka 24 jam sebagai etalase digital tanpa hari libur.",
    "Memperluas jangkauan pasar melampaui lokasi fisik.",
    "Memudahkan pelanggan menemukan informasi produk/layanan."
  ];

  const features = [
    { title: "Profil Bisnis", desc: "Tampilkan sejarah, visi, dan misi usaha Anda." },
    { title: "Katalog Produk", desc: "Etalase digital dengan detail dan harga produk." },
    { title: "Galeri Foto", desc: "Tampilkan foto produk atau suasana toko Anda." },
    { title: "Informasi Lokasi", desc: "Integrasi Google Maps agar mudah ditemukan." },
    { title: "Kontak WhatsApp", desc: "Tombol mengambang untuk konsultasi langsung." },
    { title: "Testimoni", desc: "Tampilkan ulasan pelanggan untuk membangun kepercayaan." },
  ];

  return (
    <>
      <ServiceHero 
        title="Website Profesional untuk UMKM"
        description="Saatnya bawa usahamu selangkah lebih maju dengan website yang dirancang khusus untuk meningkatkan penjualan dan kredibilitas bisnis."
        badge="Layanan Digital"
        icon={Store}
      />
      
      <section className="py-12 bg-brand-secondary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-foreground mb-6">Mengapa Bisnis Anda Butuh Website?</h2>
              <p className="text-brand-muted mb-8 leading-relaxed">
                Di era digital, pelanggan mencari informasi melalui internet sebelum memutuskan untuk membeli. Tanpa kehadiran digital yang kuat, bisnis Anda berisiko tertinggal dari kompetitor yang sudah online.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-brand-accent-blue shrink-0" />
                    <span className="text-brand-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card rounded-2xl p-8 border-brand-accent-cyan/20">
              <h3 className="text-xl font-bold text-brand-foreground mb-6 text-center">Fitur yang Dapat Dibuat</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="bg-brand-primary/50 rounded-xl p-4 border border-brand-border">
                    <h4 className="text-brand-accent-cyan font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-brand-muted">{feature.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-brand-border text-center text-sm text-brand-muted">
                * Sistem transaksi online (payment gateway) dan manajemen stok bukan bagian dari paket standar.
              </div>
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
