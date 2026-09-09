import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { capabilityIntro, capabilities } from "@/data/homepage";

gsap.registerPlugin(ScrollTrigger);

export function CapabilityIntroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 32, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 82%",
        },
      });

      const cards = gridRef.current?.children;
      if (cards) {
        gsap.from(Array.from(cards), {
          y: 24, opacity: 0, duration: 0.6, ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-24 md:py-32 bg-background border-t border-border"
      aria-label="Capabilities overview"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div ref={headlineRef} className="max-w-4xl mb-16 md:mb-20">
          <p className="home-label mb-5">Capabilities</p>
          <h2 className="home-headline text-4xl md:text-6xl lg:text-[4.5rem] font-light text-balance">
            {capabilityIntro.headline}
          </h2>
          <p className="home-headline text-4xl md:text-6xl lg:text-[4.5rem] font-light text-muted-foreground/40 text-balance">
            {capabilityIntro.subheadline}
          </p>
        </div>

        {/* Four capabilities — editorial grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {capabilities.map((cap) => (
            <Link
              key={cap.number}
              to={cap.href}
              className="group bg-background p-7 md:p-9 flex flex-col justify-between min-h-[220px] hover:bg-secondary/40 transition-colors duration-300"
            >
              <span className="home-label text-[var(--skydot-blue)] mb-4 block">{cap.number}</span>
              <div>
                <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {cap.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-blue)] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
