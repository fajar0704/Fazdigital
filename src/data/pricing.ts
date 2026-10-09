import { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  // Website UMKM
  {
    id: "w-basic",
    category: "Website UMKM",
    name: "Starter",
    targetUser: "Bagus untuk usaha yang baru merintis",
    price: 950000,
    features: [
      "1 Halaman Utama (Single Page)",
      "Profil Singkat Bisnis",
      "Katalog Produk Sederhana (Maks 10)",
      "Tombol WhatsApp",
      "Desain Responsif",
      "Pengerjaan 3-5 Hari"
    ],
    limitations: [
      "Tidak ada fitur keranjang belanja",
      "Tidak ada sistem manajemen stok"
    ]
  },
  {
    id: "w-standard",
    category: "Website UMKM",
    name: "Professional",
    targetUser: "Cocok untuk usaha berkembang",
    price: 2500000,
    isPopular: true,
    features: [
      "Hingga 5 Halaman (Beranda, Tentang, Produk, dll)",
      "Desain Premium & Disesuaikan",
      "Katalog Produk Lebih Banyak (Maks 50)",
      "Galeri Foto & Testimoni",
      "Formulir Kontak",
      "Domain (.com) & Hosting 1 Tahun",
      "Pengerjaan 7-14 Hari"
    ],
    limitations: [
      "Payment gateway kustom tidak termasuk"
    ]
  },
  {
    id: "w-custom",
    category: "Website UMKM",
    name: "Custom",
    targetUser: "Sesuai kebutuhan spesifik bisnis",
    price: 5000000,
    features: [
      "Jumlah Halaman Sesuai Kesepakatan",
      "Desain Eksklusif Sesuai Brand",
      "Fitur Kompleks Tambahan (Booking/Keranjang)",
      "Prioritas Dukungan",
      "Revisi Ekstensif"
    ],
    limitations: [
      "Waktu pengerjaan bergantung pada kompleksitas"
    ]
  },
  // Undangan Digital
  {
    id: "u-basic",
    category: "Undangan Digital",
    name: "Simpel",
    targetUser: "Undangan praktis tanpa banyak fitur",
    price: 150000,
    features: [
      "Pilihan Tema Template",
      "Informasi Pasangan & Acara",
      "Maksimal 3 Foto",
      "Navigasi Google Maps",
      "Aktif Selama 3 Bulan"
    ],
    limitations: [
      "Tanpa lagu latar",
      "Tanpa RSVP/Buku Tamu"
    ]
  },
  {
    id: "u-standard",
    category: "Undangan Digital",
    name: "Elegan",
    targetUser: "Pilihan favorit dengan fitur lengkap",
    price: 350000,
    isPopular: true,
    features: [
      "Pilihan Tema Template Premium",
      "Informasi Detail Acara",
      "Galeri Foto (Maks 10 Foto)",
      "Navigasi Google Maps & Hitung Mundur",
      "Lagu Latar (Bebas Pilih)",
      "RSVP / Buku Tamu Digital",
      "Aktif Selama 6 Bulan"
    ],
    limitations: [
      "Desain template tidak bisa dirombak total"
    ]
  },
  {
    id: "u-custom",
    category: "Undangan Digital",
    name: "Eksklusif",
    targetUser: "Desain undangan unik sepenuhnya",
    price: 850000,
    features: [
      "Desain Kustom dari Nol",
      "Ilustrasi Khusus (Sesuai Permintaan)",
      "Galeri Foto Tidak Terbatas",
      "Semua Fitur Premium",
      "Revisi Prioritas",
      "Aktif Selama 1 Tahun"
    ],
    limitations: []
  },
  // Landing Page
  {
    id: "l-basic",
    category: "Landing Page",
    name: "Promo",
    targetUser: "Promosi produk tunggal atau event",
    price: 750000,
    features: [
      "1 Halaman Memanjang",
      "Desain Fokus Konversi",
      "Copywriting Disediakan Klien",
      "1 CTA Utama",
      "Maksimal 4 Section"
    ],
    limitations: [
      "Tanpa integrasi analitik khusus"
    ]
  },
  {
    id: "l-standard",
    category: "Landing Page",
    name: "Lead Gen",
    targetUser: "Menangkap prospek & jualan optimal",
    price: 1500000,
    isPopular: true,
    features: [
      "Desain High-Converting",
      "Bantuan Copywriting Dasar",
      "Galeri/Video Promosi",
      "Testimoni & FAQ Section",
      "Hingga 8 Section",
      "Integrasi Formulir Leads ke WA"
    ],
    limitations: [
      "CRM eksternal mungkin butuh biaya tambahan"
    ]
  },
  {
    id: "l-custom",
    category: "Landing Page",
    name: "Komersial",
    targetUser: "Kampanye besar & spesifik",
    price: 3500000,
    features: [
      "Desain Eksklusif untuk Brand Besar",
      "Struktur Tidak Terbatas",
      "Animasi Kompleks",
      "Integrasi Facebook/Tiktok Pixel",
      "Integrasi Analitik"
    ],
    limitations: []
  }
];
