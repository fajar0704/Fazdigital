import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description: "Konsultasikan kebutuhan pembuatan website UMKM, undangan digital, atau landing page bersama FAZ DIGITAL.",
};

export default function KontakPage() {
  return (
    <>
      <div className="pt-24 pb-6 border-b border-brand-border relative overflow-hidden">
        <Container className="relative z-10 text-center">
          <SectionHeading 
            title="Mari Mulai Diskusi" 
            description="Isi formulir di bawah ini dan kami akan segera membalas pesan Anda melalui WhatsApp."
          />
        </Container>
      </div>
      
      <section className="py-20 bg-brand-primary">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 max-w-6xl mx-auto">
            {/* Form Section */}
            <div className="lg:col-span-3 order-2 lg:order-1 glass-card p-6 md:p-10 rounded-3xl border-brand-accent-blue/20">
              <h2 className="text-2xl font-bold text-brand-foreground mb-6">Formulir Konsultasi</h2>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-2 order-1 lg:order-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-brand-foreground mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center text-brand-accent-cyan shrink-0">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-muted mb-1">WhatsApp</p>
                      <p className="text-brand-foreground font-medium">{siteConfig.whatsappNumber}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center text-brand-accent-cyan shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-muted mb-1">Email</p>
                      <p className="text-brand-foreground font-medium">{siteConfig.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center text-brand-accent-cyan shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-brand-muted mb-1">Jam Operasional</p>
                      <p className="text-brand-foreground font-medium">Senin - Jumat: 09:00 - 17:00</p>
                      <p className="text-brand-foreground font-medium mt-1">Sabtu: 09:00 - 13:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-secondary rounded-2xl p-6 border border-brand-border">
                <h4 className="font-semibold text-brand-foreground mb-2">Respon Cepat</h4>
                <p className="text-sm text-brand-muted">
                  Kami berupaya membalas setiap pesan maksimal dalam 1x24 jam kerja.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
