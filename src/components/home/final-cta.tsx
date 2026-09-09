import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function HomeFinalCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!sectionRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Content reveal
      gsap.from(contentRef.current, {
        y: 40, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
      });

      // Background subtle parallax/expansion
      gsap.fromTo(bgRef.current, 
        { scale: 0.95, opacity: 0 },
        { 
          scale: 1, opacity: 1, duration: 1.5, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="home-section relative py-32 md:py-48 bg-background border-t border-border overflow-hidden"
      aria-label="Final call to action"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <div ref={contentRef} className="max-w-3xl">
          <h2 className="home-headline text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance">
            Let's build what matters.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
            Have a business problem, product idea or system that needs to work better? Let's talk.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-[3px] bg-[var(--skydot-blue)] px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 active:scale-[0.98]"
          >
            Start a Conversation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Premium subtle background element */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="absolute inset-0 home-grid-bg opacity-[0.15] dark:opacity-[0.08]" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vh] w-[80vw] rounded-full opacity-[0.08] dark:opacity-[0.1]"
          style={{ background: "radial-gradient(circle, #1677FF 0%, transparent 60%)" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent" />
      </div>
    </section>
  );
}
