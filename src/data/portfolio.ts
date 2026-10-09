import { PortfolioItem } from "@/types";

export const portfolios: PortfolioItem[] = [
  {
    id: "p1",
    slug: "e-commerce",
    title: "E-Commerce",
    category: "Website UMKM",
    description: "Desain website e-commerce modern untuk UMKM yang dilengkapi dengan sistem keranjang belanja dan antarmuka yang ramah pengguna.",
    image: "/images/ecomerce_mockup.png",
    demoUrl: "https://bagsphanora.vercel.app/", // Isi dengan URL jika ada
    isConcept: true,
    tags: ["E-Commerce", "Toko Online", "UMKM"]
  },
  {
    id: "p2",
    slug: "Ahmad-dan-Natasya",
    title: "Ahmad dan Natasya",
    category: "Undangan Digital",
    description: "Undangan pernikahan digital interaktif dengan desain elegan, dilengkapi fitur RSVP pintar dan galeri foto.",
    image: "/images/wedding1.png",
    demoUrl: "https://undangan-ahmad.vercel.app/", // Isi dengan URL jika ada
    isConcept: true,
    tags: ["Pernikahan", "Elegan", "RSVP"]
  },
  {
    id: "p3",
    slug: "landing-page-promosi",
    title: "Landing Page Promosi",
    category: "Landing Page",
    description: "Halaman pendaratan tunggal (single page) yang dirancang secara khusus untuk memaksimalkan rasio konversi kampanye digital.",
    image: "/images/hero_mockup.jpg",
    demoUrl: "", // Isi dengan URL jika ada
    isConcept: true,
    tags: ["Promosi", "Konversi", "Kampanye"]
  }
];
