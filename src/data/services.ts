import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "s1",
    slug: "website-umkm",
    title: "Website UMKM",
    shortDescription: "Website untuk memperkenalkan bisnis, menampilkan produk, dan memudahkan pelanggan menghubungi usahamu.",
    description: "Website UMKM dirancang khusus untuk pelaku usaha kecil dan menengah yang ingin memiliki kehadiran digital profesional. Kami membangun website yang informatif, ringan, dan fokus pada konversi pengunjung menjadi pelanggan.",
    features: [
      "Profil bisnis yang profesional",
      "Katalog produk atau layanan",
      "Galeri foto menarik",
      "Integrasi tombol WhatsApp",
      "Informasi lokasi & jam operasional",
      "Desain responsif di semua perangkat"
    ],
    icon: "Store"
  },
  {
    id: "s2",
    slug: "undangan-digital",
    title: "Undangan Digital",
    shortDescription: "Undangan online yang praktis dibagikan dan dirancang untuk menyampaikan informasi acara secara menarik.",
    description: "Sebarkan momen spesialmu dengan cara yang lebih modern, hemat, dan ramah lingkungan. Undangan digital kami dirancang untuk pernikahan, ulang tahun, atau acara penting lainnya dengan desain memukau.",
    features: [
      "Desain tema elegan dan responsif",
      "Informasi lengkap pasangan & acara",
      "Galeri foto dan video",
      "Navigasi lokasi (Google Maps)",
      "Hitung mundur acara",
      "Fitur RSVP (Buku Tamu)"
    ],
    icon: "Mail"
  },
  {
    id: "s3",
    slug: "landing-page",
    title: "Landing Page",
    shortDescription: "Halaman promosi yang berfokus pada satu produk, layanan, atau kampanye dengan CTA yang jelas.",
    description: "Tingkatkan penjualan atau prospek bisnismu dengan landing page yang dioptimalkan untuk konversi. Desain terfokus pada satu tujuan agar pengunjung melakukan tindakan yang kamu inginkan.",
    features: [
      "Headline dan copywriting menarik",
      "Penjelasan manfaat produk/layanan",
      "Galeri atau video promosi",
      "Testimoni pelanggan",
      "Call-to-Action (CTA) yang menonjol",
      "Formulir kontak atau integrasi WhatsApp"
    ],
    icon: "Layout"
  }
];
