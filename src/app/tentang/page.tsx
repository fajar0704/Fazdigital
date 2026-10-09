import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/config/site";
import { Target, Lightbulb, Users, ShieldCheck } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Mengenal FAZ DIGITAL, digital agency yang fokus membantu bisnis dan UMKM tumbuh melalui website profesional.",
};

export default function TentangPage() {
  const values = [
    {
      icon: Target,
      title: "Berorientasi pada Tujuan",
      desc: "Setiap website yang kami buat dirancang untuk mencapai tujuan spesifik, baik itu penjualan, prospek, maupun branding."
    },
    {
      icon: Lightbulb,
      title: "Solusi Kreatif",
      desc: "Kami menggabungkan estetika desain dengan pengalaman pengguna (UX) yang logis dan mudah dipahami."
    },
    {
      icon: Users,
      title: "Kolaborasi Erat",
      desc: "Kami menempatkan klien sebagai mitra kerja. Kami mendengarkan, memberi saran, dan bekerja sama mencapai hasil terbaik."
    },
    {
      icon: ShieldCheck,
      title: "Transparansi Penuh",
      desc: "Mulai dari estimasi harga hingga batasan fitur, semuanya kami komunikasikan secara terbuka di awal."
    }
  ];

  return (
    <>
      <div className="pt-24 pb-6 border-b border-brand-border relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-3xl">
          <SectionHeading 
            title={`Mengenal ${siteConfig.brandName}`}
            description="Kami hadir untuk membantu UMKM, pemilik bisnis, dan individu membangun kehadiran digital yang profesional dan memukau."
          />
        </Container>
      </div>
      
      <section className="py-12 bg-brand-primary">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-brand-foreground mb-6 leading-snug">Menjembatani Ide Anda ke Dunia Digital</h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Dunia digital terus berkembang, dan kami percaya bahwa setiap bisnis, besar maupun kecil, berhak memiliki representasi online yang berkualitas.
                </p>
                <p>
                  <strong>{siteConfig.brandName}</strong> berfokus pada pembuatan solusi digital yang tidak hanya terlihat indah secara visual, tetapi juga berfungsi optimal dalam menyampaikan pesan dan mendorong pengunjung untuk mengambil tindakan.
                </p>
                <p>
                  Pendekatan kami sederhana: pahami tujuan Anda, rancang solusinya, dan eksekusi dengan standar profesional. Kami tidak menjanjikan hasil yang mustahil, namun kami berkomitmen untuk memberikan karya terbaik sesuai dengan kebutuhan dan anggaran Anda.
                </p>
              </div>
            </div>
            
            <div className="glass-card p-2 rounded-3xl relative">
              
              <div className="aspect-[4/5] sm:aspect-square bg-brand-secondary rounded-2xl border border-brand-border flex items-center justify-center p-8 relative z-10 overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="FAZ DIGITAL Logo" 
                  className="w-3/4 h-auto max-w-[250px] object-contain mix-blend-multiply contrast-125 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-brand-foreground mb-8">Nilai yang Kami Pegang</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((val, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border-brand-border/50 hover:border-brand-accent-cyan/30 transition-colors">
                  <val.icon className="w-10 h-10 text-brand-accent-blue mb-4" />
                  <h4 className="text-xl font-bold text-brand-foreground mb-3">{val.title}</h4>
                  <p className="text-brand-muted">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
      
      <FinalCTA />
    </>
  );
}
