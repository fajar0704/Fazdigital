import { Container } from "@/components/layout/Container";
import { CheckCircle2 } from "lucide-react";

export default function CommitmentSection() {
  const commitments = [
    "Komunikasi yang jelas dan responsif.",
    "Ruang diskusi kebutuhan yang terbuka.",
    "Proses review yang disepakati bersama.",
    "Penjelasan ruang lingkup proyek secara transparan."
  ];

  return (
    <section className="py-12 bg-brand-accent-blue/5 border-y border-brand-accent-blue/10 relative overflow-hidden">
      
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-6">
            Komitmen Kami
          </h2>
          <p className="text-brand-muted text-lg mb-10 max-w-2xl mx-auto">
            Kami percaya bahwa hasil digital yang baik berasal dari kolaborasi yang transparan dan komunikasi yang lancar.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {commitments.map((item, index) => (
              <div key={index} className="glass-card rounded-xl p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-brand-accent-cyan shrink-0" />
                <span className="text-brand-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
