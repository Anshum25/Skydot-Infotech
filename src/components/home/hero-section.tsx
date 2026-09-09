import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ArrowRight, Building2, Hexagon, Layers, Cpu, Globe, Boxes } from "lucide-react";
import { heroCopy } from "@/data/homepage";
import ShaderBackground from "@/components/ui/shader-background";

export function HomeHeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const logos = [
    { icon: Building2, name: "Enterprise Corp" },
    { icon: Hexagon, name: "TechGlobal" },
    { icon: Layers, name: "DataSystems" },
    { icon: Cpu, name: "CloudWorks" },
    { icon: Globe, name: "GlobalTrade" },
    { icon: Boxes, name: "LogisticsPlus" },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current) return;

    if (prefersReducedMotion) {
      gsap.set([headlineRef.current, subRef.current, ctaRef.current, labelRef.current, marqueeRef.current], {
        opacity: 1, y: 0
      });
      return;
    }

    const ctx = gsap.context(() => {
      // Entrance Animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(labelRef.current, { y: 12, opacity: 0, duration: 0.7 })
        .from(headlineRef.current, { y: 28, opacity: 0, duration: 0.9 }, "-=0.5")
        .from(subRef.current, { y: 20, opacity: 0, duration: 0.7 }, "-=0.6")
        .from(ctaRef.current, { y: 16, opacity: 0, duration: 0.6 }, "-=0.5")
        .from(marqueeRef.current, { y: 20, opacity: 0, duration: 0.8 }, "-=0.4");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative min-h-[90vh] flex flex-col justify-center text-foreground overflow-hidden"
      aria-label="Hero"
    >
      <HeroBg />

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-32 pb-16">
        <div ref={labelRef} className="mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
            <span className="w-4 h-px bg-[var(--skydot-orange)]" />
            Skydot Infotech
          </span>
        </div>

        <div className="max-w-5xl">
          <h1
            ref={headlineRef}
            className="home-headline text-[clamp(2.4rem,5.5vw,5.2rem)] font-light tracking-tight mb-5 md:mb-6 text-balance"
          >
            {heroCopy.headline}
          </h1>
          <p
            ref={subRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal"
          >
            {heroCopy.subheadline}
          </p>
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3 mt-8 md:mt-10">
            <Link
              to={heroCopy.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--skydot-orange)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:translate-x-0.5 active:scale-[0.98]"
            >
              {heroCopy.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to={heroCopy.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:bg-secondary"
            >
              {heroCopy.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Trusted By Marquee */}
        <div ref={marqueeRef} className="mt-20 md:mt-28 border-t border-border/40 pt-8">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-6">
            Trusted by Industry-Leading Organizations
          </p>
          <div className="w-full overflow-hidden relative group">
            {/* Gradient Fades for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            
            <div className="flex w-max animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {/* Double the logos to create the infinite scroll effect */}
              {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 mx-6 md:mx-10 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
                >
                  <logo.icon className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
                  <span className="font-semibold text-foreground text-sm tracking-tight whitespace-nowrap">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── Subtle animated background ─────────────────────────── */
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <ShaderBackground />
      <div className="absolute inset-0 bg-background/20 dark:bg-background/30 backdrop-blur-[12px] z-10" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent z-20" />
    </div>
  );
}
