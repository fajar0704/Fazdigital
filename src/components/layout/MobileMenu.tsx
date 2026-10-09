"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: any[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-brand-primary/95 backdrop-blur-lg flex flex-col items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 text-brand-foreground bg-brand-secondary rounded-full border border-brand-border"
        aria-label="Close Menu"
      >
        <X className="w-6 h-6" />
      </button>

      <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
        {links.map((link) => (
          <div key={link.name} className="flex flex-col items-center w-full">
            <Link
              href={link.href}
              onClick={onClose}
              className="text-xl font-medium text-brand-foreground mb-2"
            >
              {link.name}
            </Link>
            
            {link.dropdown && (
              <div className="flex flex-col items-center gap-3 mt-2 mb-4 w-full bg-brand-secondary rounded-2xl p-4 border border-brand-border">
                {link.dropdown.map((drop: any) => (
                  <Link
                    key={drop.name}
                    href={drop.href}
                    onClick={onClose}
                    className="text-brand-muted hover:text-brand-accent-cyan transition-colors"
                  >
                    {drop.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        
        <Link
          href={getWhatsAppUrl("Halo, saya ingin konsultasi gratis mengenai pembuatan website.")}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-6 bg-brand-accent-blue w-full text-center hover:bg-blue-600 text-static-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Konsultasi Gratis
        </Link>
      </nav>
    </div>
  );
}
