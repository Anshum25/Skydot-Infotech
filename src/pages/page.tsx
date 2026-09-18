import { HomeHeroSection } from "@/components/home/hero-section";
import { CapabilityIntroSection } from "@/components/home/capability-intro";
import { CapabilityCarouselSection } from "@/components/home/capability-carousel";
import { HomeTrustSection } from "@/components/home/trust-section";
import { HomeIndustriesSection } from "@/components/home/industries-section";
import { HomeProductsShowcase } from "@/components/home/products-showcase";
import { HomeServicesSection } from "@/components/home/services-section";
import { HomeWorkSection } from "@/components/home/work-section";
import { HomeProcessSection } from "@/components/home/process-section";
import { HomeTestimonialsSection } from "@/components/home/testimonials-section";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { ParentCompanySection } from "@/components/home/parent-company-section";

export default function Home() {
  return (
    <>
      <HomeHeroSection />
      <CapabilityIntroSection />
      <CapabilityCarouselSection />
      <HomeTrustSection />
      <HomeIndustriesSection />
      <HomeProductsShowcase />
      <HomeWorkSection />
      <HomeServicesSection />
      <HomeProcessSection />
      <ParentCompanySection />
      <HomeTestimonialsSection />
      <HomeFinalCtaSection />
    </>
  );
}
