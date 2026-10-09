import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="py-12 bg-brand-primary">
      <Container>
        <SectionHeading 
          title="Pertanyaan yang Sering Diajukan" 
          description="Temukan jawaban cepat untuk pertanyaan umum mengenai layanan kami."
        />
        
        <Accordion items={faqs} />
      </Container>
    </section>
  );
}
