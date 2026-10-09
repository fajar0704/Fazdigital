import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PenTool, Laptop, Map, MessageCircle } from "lucide-react";

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
      icon: Map,
      title: "Informasi & Navigasi Jelas",
      description: "Pengunjung akan mudah menemukan informasi yang mereka cari karena struktur navigasi yang dirancang secara logis."
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="mx-auto w-16 h-16 rounded-full bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent-blue mb-6 group-hover:bg-brand-accent-blue group-hover:text-static-white transition-all">
                <reason.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brand-foreground mb-3">{reason.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
