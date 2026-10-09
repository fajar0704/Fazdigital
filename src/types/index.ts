export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  features: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  category: "Website UMKM" | "Undangan Digital" | "Landing Page";
  description: string;
  image: string;
  demoUrl?: string;
  isConcept: boolean;
  tags: string[];
}

export interface PricingPlan {
  id: string;
  category: "Website UMKM" | "Undangan Digital" | "Landing Page";
  name: string;
  targetUser: string;
  price: number | null; // Jika null, tampilkan "Konsultasikan Kebutuhanmu"
  features: string[];
  limitations: string[];
  isPopular?: boolean;
}

export interface FAQ {
  id: string;
  category?: string;
  question: string;
  answer: string;
}
