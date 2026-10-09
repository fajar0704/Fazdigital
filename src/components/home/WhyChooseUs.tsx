import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PenTool, Laptop, Map, MessageCircle, Rocket, ShieldCheck } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: PenTool,
      title: "Desain Sesuai Kebutuhan",
      description: "Kami tidak sekadar menggunakan template instan. Desain disesuaikan dengan identitas brand agar tampil unik dan profesional."
    },
    {
      icon: Laptop,
      title: "Responsif di Berbagai Perangkat",
      description: "Website dijamin tampil sempurna dan rapi, baik saat diakses melalui smartphone, tablet, maupun komputer desktop."
    },
    {
      icon: Rocket,
      title: "Performa Cepat & Optimasi SEO",
      description: "Website dibangun dengan kecepatan tinggi dan kaidah SEO yang baik agar mudah ditemukan di pencarian Google."
    },
    {
      icon: Map,
      title: "Informasi & Navigasi Jelas",
      description: "Pengunjung akan mudah menemukan informasi yang mereka cari karena struktur navigasi yang dirancang secara logis."
    },
    {
      icon: ShieldCheck,
      title: "Dukungan & Pemeliharaan",
      description: "Kami memberikan garansi dan dukungan teknis setelah website rilis untuk memastikan semuanya berjalan lancar."
    },
    {
      icon: MessageCircle,
      title: "Komunikasi Proyek Transparan",
      description: "Kami menjaga komunikasi yang jelas mulai dari diskusi kebutuhan hingga serah terima, tanpa biaya tersembunyi."
    }
  ];

  return (
    <section className="py-12 bg-brand-secondary border-y border-brand-border">
      <Container>
        <SectionHeading title="Mengapa Memilih FAZ DIGITAL?" align="center" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group flex flex-col h-full">
              <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent-blue mb-6 group-hover:bg-brand-accent-blue group-hover:text-static-white transition-all">
                <reason.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-brand-foreground mb-3 min-h-[56px] flex items-center justify-center">
                  {reason.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
