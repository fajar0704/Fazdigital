import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Konsultasi",
      desc: "Diskusikan kebutuhan, tujuan, dan referensi desain secara detail melalui WhatsApp.",
    },
    {
      num: "02",
      title: "Perencanaan",
      desc: "Pemilihan paket, penyusunan sitemap dasar, dan penentuan estimasi waktu pengerjaan.",
    },
    {
      num: "03",
      title: "Desain & Pengembangan",
      desc: "Proses pembuatan visual dan perakitan website sesuai dengan kesepakatan.",
    },
    {
      num: "04",
      title: "Review & Serah Terima",
      desc: "Peninjauan hasil akhir, revisi jika diperlukan, lalu website siap online.",
    },
  ];

  return (
    <section className="py-12 bg-brand-secondary border-y border-brand-border">
      <Container>
        <SectionHeading title="Proses Kerja yang Jelas" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-brand-border border-dashed border-t border-brand-border/50 z-0"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-brand-primary border-2 border-brand-accent-blue/30 flex items-center justify-center mb-6 shadow-lg shadow-brand-accent-blue/10 text-brand-foreground font-bold text-2xl">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-brand-foreground mb-3">{step.title}</h3>
              <p className="text-brand-muted text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
