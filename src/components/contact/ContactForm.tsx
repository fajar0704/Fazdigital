"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Send } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    budget: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Nama wajib diisi";
    if (!formData.category) newErrors.category = "Silakan pilih layanan yang diminati";
    if (!formData.description.trim()) newErrors.description = "Ceritakan sedikit tentang kebutuhan Anda";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const message = `Halo FAZ DIGITAL,
Nama: ${formData.name}
Layanan: ${formData.category}
Estimasi Anggaran: ${formData.budget || "Belum ditentukan"}

Deskripsi Kebutuhan:
${formData.description}

Saya ingin berkonsultasi lebih lanjut.`;
      
      const url = getWhatsAppUrl(message);
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-foreground mb-2">Nama Lengkap *</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full bg-brand-secondary border ${errors.name ? 'border-red-500' : 'border-brand-border focus:border-brand-accent-blue'} rounded-xl px-4 py-3 text-brand-foreground placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-accent-blue transition-colors`}
          placeholder="Masukkan nama Anda"
        />
        {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-brand-foreground mb-2">Layanan yang Diminati *</label>
        <select
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          className={`w-full bg-brand-secondary border ${errors.category ? 'border-red-500' : 'border-brand-border focus:border-brand-accent-blue'} rounded-xl px-4 py-3 text-brand-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent-blue transition-colors appearance-none`}
        >
          <option value="" disabled className="text-brand-muted">Pilih layanan</option>
          <option value="Website UMKM">Website UMKM</option>
          <option value="Undangan Digital">Undangan Digital</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Konsultasi Umum">Konsultasi Umum</option>
        </select>
        {errors.category && <p className="text-red-400 text-xs mt-2">{errors.category}</p>}
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-brand-foreground mb-2">Estimasi Anggaran (Opsional)</label>
        <select
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
          className="w-full bg-brand-secondary border border-brand-border focus:border-brand-accent-blue rounded-xl px-4 py-3 text-brand-foreground focus:outline-none focus:ring-1 focus:ring-brand-accent-blue transition-colors appearance-none"
        >
          <option value="" disabled className="text-brand-muted">Pilih estimasi (opsional)</option>
          <option value="Di bawah Rp 1.000.000">Di bawah Rp 1.000.000</option>
          <option value="Rp 1.000.000 - Rp 3.000.000">Rp 1.000.000 - Rp 3.000.000</option>
          <option value="Di atas Rp 3.000.000">Di atas Rp 3.000.000</option>
          <option value="Belum ditentukan">Belum ditentukan</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-brand-foreground mb-2">Deskripsi Kebutuhan *</label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={5}
          className={`w-full bg-brand-secondary border ${errors.description ? 'border-red-500' : 'border-brand-border focus:border-brand-accent-blue'} rounded-xl px-4 py-3 text-brand-foreground placeholder-brand-muted/50 focus:outline-none focus:ring-1 focus:ring-brand-accent-blue transition-colors resize-none`}
          placeholder="Ceritakan gambaran website atau undangan yang Anda inginkan..."
        />
        {errors.description && <p className="text-red-400 text-xs mt-2">{errors.description}</p>}
      </div>

      <div className="pt-2">
        <p className="text-xs text-brand-muted mb-4 text-center">
          Anda akan diarahkan ke WhatsApp untuk mengirim pesan ini. Kami tidak menyimpan data Anda di server kami.
        </p>
        <Button type="submit" fullWidth size="lg" icon={Send}>
          Lanjutkan ke WhatsApp
        </Button>
      </div>
    </form>
  );
}
