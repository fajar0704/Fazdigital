"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { 
      name: "Layanan", 
      href: "/layanan",
      dropdown: [
        { name: "Website UMKM", href: "/layanan/website-umkm" },
        { name: "Undangan Digital", href: "/layanan/undangan-digital" },
        { name: "Landing Page", href: "/layanan/landing-page" },
      ]
    },
    { name: "Portofolio", href: "/portofolio" },
    { name: "Harga", href: "/harga" },
    { name: "Tentang", href: "/tentang" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-brand-primary/90 backdrop-blur-md border-b border-brand-border py-4 shadow-lg" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <img src="/images/logo.png" alt="FAZ DIGITAL" className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform mix-blend-multiply contrast-125" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="flex items-center gap-1 text-sm font-medium text-brand-muted hover:text-brand-foreground cursor-pointer transition-colors py-2">
                    <Link href={link.href} className={`${pathname === link.href || pathname.startsWith(link.href) ? 'text-brand-foreground font-semibold' : ''}`}>{link.name}</Link>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors py-2 ${
                      pathname === link.href ? "text-brand-foreground font-semibold" : "text-brand-muted hover:text-brand-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 rounded-xl bg-brand-secondary border border-brand-border shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                    <div className="py-2">
                      {link.dropdown.map((drop) => (
                        <Link
                          key={drop.name}
                          href={drop.href}
                          className={`block px-4 py-2 text-sm hover:bg-brand-primary transition-colors ${pathname === drop.href ? 'text-brand-accent-cyan font-medium' : 'text-brand-foreground'}`}
                        >
                          {drop.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href={getWhatsAppUrl("Halo, saya ingin konsultasi gratis mengenai pembuatan website.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-accent-blue hover:bg-blue-600 text-static-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
            >
              Konsultasi Gratis
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brand-foreground p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
