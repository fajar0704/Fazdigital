import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = "2026";

  return (
    <footer className="bg-brand-secondary border-t border-brand-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <img src="/images/logo.png" alt="FAZ DIGITAL Logo" className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform mix-blend-multiply contrast-125" />
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 pt-2">
              
              <a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent-cyan transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent-cyan transition-colors" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
              </a>
              <a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-brand-muted hover:text-brand-accent-cyan transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-brand-muted hover:text-brand-accent-cyan transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-brand-foreground mb-4">Navigasi</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Beranda</Link></li>
              <li><Link href="/portofolio" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Portofolio</Link></li>
              <li><Link href="/harga" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Harga Paket</Link></li>
              <li><Link href="/tentang" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Tentang Kami</Link></li>
              <li><Link href="/kontak" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Kontak</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-brand-foreground mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li><Link href="/layanan/website-umkm" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Website UMKM</Link></li>
              <li><Link href="/layanan/undangan-digital" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Undangan Digital</Link></li>
              <li><Link href="/layanan/landing-page" className="text-brand-muted hover:text-brand-foreground text-sm transition-colors">Landing Page</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-brand-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-brand-accent-blue shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">
                  {siteConfig.whatsappNumber}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent-blue shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">
                  {siteConfig.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent-blue shrink-0 mt-0.5" />
                <span className="text-brand-muted text-sm">
                  Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-muted text-sm">
            &copy; {currentYear} {siteConfig.brandName}. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
