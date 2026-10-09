import HeroSection from "@/components/home/HeroSection";
import TrustIndicators from "@/components/home/TrustIndicators";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ProcessSection from "@/components/home/ProcessSection";
import PricingPreview from "@/components/home/PricingPreview";
import CommitmentSection from "@/components/home/CommitmentSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustIndicators />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioPreview />
      <ProcessSection />
      <PricingPreview />
      <CommitmentSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
