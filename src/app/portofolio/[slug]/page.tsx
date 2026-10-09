import { portfolios } from "@/data/portfolio";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Metadata } from "next";

export async function generateStaticParams() {
  return portfolios.map((portfolio) => ({
    slug: portfolio.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const portfolio = portfolios.find((p) => p.slug === params.slug);
  if (!portfolio) return { title: "Portfolio Not Found" };
  
  return {
    title: `${portfolio.title} - Studi Kasus FAZ DIGITAL`,
    description: portfolio.description,
  };
}

export default function PortfolioDetail({ params }: { params: { slug: string } }) {
  const portfolio = portfolios.find((p) => p.slug === params.slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <>
      <div className="pt-24 pb-6 border-b border-brand-border bg-brand-secondary/30 relative overflow-hidden">
        <Container className="relative z-10 max-w-4xl">
          <Link href="/portofolio" className="inline-flex items-center gap-2 text-brand-muted hover:text-brand-foreground transition-colors text-sm font-medium mb-8">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Portofolio
          </Link>
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Badge variant="outline">{portfolio.category}</Badge>
            {portfolio.isConcept && (
              <Badge variant="primary">
                Konsep Desain
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-brand-foreground mb-6 leading-tight">
            {portfolio.title}
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted leading-relaxed max-w-2xl">
            {portfolio.description}
          </p>
        </Container>
      </div>

      <section className="py-12 bg-static-white">
        <Container className="max-w-4xl">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 bg-brand-secondary border border-brand-border relative aspect-video">
            <img 
              src={portfolio.image} 
              alt={portfolio.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brand-foreground mb-4">Tentang Proyek</h3>
                <p className="text-brand-muted leading-relaxed">
                  Proyek <strong>{portfolio.title}</strong> merupakan inisiatif digital dalam kategori {portfolio.category.toLowerCase()}. {portfolio.description} Desain ini dirancang dengan fokus pada kenyamanan pengguna (User Experience) dan estetika visual yang relevan dengan target pasar.
                </p>
                <p className="text-brand-muted leading-relaxed mt-4">
                  Sebagai sebuah konsep, proyek ini mendemonstrasikan kemampuan tim kami dalam menciptakan identitas visual yang solid, alur navigasi yang intuitif, serta struktur halaman yang dioptimalkan untuk konversi tinggi.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-2xl border-brand-border">
                <h4 className="font-bold text-brand-foreground mb-4">Informasi Proyek</h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="block text-brand-muted mb-1">Kategori</span>
                    <span className="font-medium text-brand-foreground">{portfolio.category}</span>
                  </div>
                  <div>
                    <span className="block text-brand-muted mb-1">Status</span>
                    <span className="font-medium text-brand-foreground">{portfolio.isConcept ? "Konsep / Siap Digunakan" : "Selesai"}</span>
                  </div>
                  <div>
                    <span className="block text-brand-muted mb-2">Tag</span>
                    <div className="flex flex-wrap gap-2">
                      {portfolio.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-brand-secondary text-brand-foreground rounded-full text-xs border border-brand-border font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-brand-border space-y-3">
                  <a href={portfolio.demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-2 bg-brand-foreground text-static-white hover:opacity-80 px-4 py-3 rounded-full text-sm font-bold transition-all">
                    Lihat Demo <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section specifically for this project */}
      <section className="py-24 bg-brand-secondary relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-brand-foreground mb-6">Tertarik dengan Gaya Desain Ini?</h2>
          <p className="text-brand-muted mb-8 leading-relaxed">
            Kami dapat menyesuaikan desain {portfolio.title} ini agar sesuai dengan identitas dan kebutuhan bisnis Anda secara spesifik.
          </p>
          <Button 
            href={getWhatsAppUrl(`Halo FAZ DIGITAL, saya tertarik untuk membuat website dengan konsep desain seperti ${portfolio.title}. Bisa kita diskusikan?`)} 
            size="lg" 
            icon={ArrowRight}
          >
            Diskusikan Proyek Anda
          </Button>
        </Container>
      </section>
    </>
  );
}
