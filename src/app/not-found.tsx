import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-brand-primary relative overflow-hidden">
      
      <Container className="relative z-10 text-center">
        <h1 className="text-8xl md:text-9xl font-bold text-brand-accent-cyan/20 mb-4 tracking-tighter">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-brand-foreground mb-6">
          Halaman Tidak Ditemukan
        </h2>
        <p className="text-brand-muted mb-10 max-w-md mx-auto">
          Maaf, halaman yang Anda cari mungkin telah dipindahkan, dihapus, atau tidak pernah ada.
        </p>
        <Button href="/" icon={Home} size="lg">
          Kembali ke Beranda
        </Button>
      </Container>
    </section>
  );
}
