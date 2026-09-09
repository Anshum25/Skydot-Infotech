import { HeroCarousel } from "@/components/animations/hero-carousel";

export function HeroSection() {
  return (
    <section className="relative w-full h-[calc(100vh-72px)] min-h-[600px] overflow-hidden flex flex-col justify-center">
      {/* 
        The HeroCarousel now entirely manages the layout of the hero section,
        including the animated SVG backgrounds, rotating text content, and navigation controls.
      */}
      <HeroCarousel />
    </section>
  );
}
