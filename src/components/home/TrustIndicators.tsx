import { Container } from "@/components/layout/Container";
import { MonitorSmartphone, Settings, MessageSquare, Layout } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    { icon: MonitorSmartphone, label: "Responsive Design" },
    { icon: Settings, label: "Customizable" },
    { icon: MessageSquare, label: "Clear Communication" },
    { icon: Layout, label: "Modern Interface" },
  ];

  return (
    <section className="py-10 border-y border-brand-border bg-brand-secondary">
      <Container>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {indicators.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-primary border border-brand-border flex items-center justify-center text-brand-accent-cyan">
                <item.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-brand-muted">{item.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
