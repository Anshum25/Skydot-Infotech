import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function ParentCompanySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      tl.from(leftContentRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      .from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top",
        duration: 0.8,
        ease: "power3.inOut",
      }, "-=0.4")
      .from(rightContentRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      }, "-=0.6");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-background border-t border-border"
      aria-label="Parent Company"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* Left: Editorial Statement */}
          <div ref={leftContentRef} className="lg:col-span-7 flex flex-col">
            <span className="home-label mb-6 text-[var(--skydot-blue)] uppercase tracking-wider text-xs font-semibold">
              The Company Behind Skydot
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-balance leading-tight mb-8">
              Technology is the product.<br />
              Long-term partnership is the foundation.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Skydot is a technology brand of NivaSync Infotech Pvt. Ltd., bringing together enterprise software, ERP, AI, custom development and digital engineering under one customer-focused identity.
            </p>
          </div>

          {/* Right: Visual Brand Architecture */}
          <div className="lg:col-span-5 flex items-start gap-8 lg:border-l lg:border-border lg:pl-12 lg:h-full lg:min-h-[250px]">
            {/* The line is rendered as a CSS border on desktop, but we add a visual animated line for effect */}
            <div 
              ref={lineRef}
              className="hidden lg:block w-px bg-[var(--skydot-blue)] absolute h-full top-0 left-0"
              style={{ height: '100%', left: '-1px' }}
            />
            
            <div ref={rightContentRef} className="flex flex-col justify-center py-6">
              <div className="mb-8 relative pl-6 border-l border-[var(--skydot-orange)]/30">
                <h3 className="text-3xl md:text-4xl font-light tracking-widest text-muted-foreground leading-none">
                  NIVASYNC
                  <span className="block text-xl md:text-2xl mt-2 tracking-[0.2em] font-normal opacity-70">
                    INFOTECH
                  </span>
                </h3>
              </div>
              
              <a 
                href="https://www.nivasync.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[var(--skydot-blue)] hover:opacity-80 transition-opacity group"
              >
                Learn more about NivaSync 
                <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
