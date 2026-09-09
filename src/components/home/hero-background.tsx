import { useEffect, useRef } from "react";
import gsap from "gsap";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-light-a", {
        x: 40,
        y: -20,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-light-b", {
        x: -30,
        y: 25,
        duration: 14,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-line-flow", {
        strokeDashoffset: 0,
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 home-grid-bg opacity-[0.35] dark:opacity-[0.2]" />
      <div
        className="hero-light-a absolute -top-[20%] left-[10%] h-[50vh] w-[50vw] rounded-full opacity-[0.07] dark:opacity-[0.12]"
        style={{ background: "radial-gradient(circle, #1677FF 0%, transparent 70%)" }}
      />
      <div
        className="hero-light-b absolute top-[30%] -right-[10%] h-[40vh] w-[40vw] rounded-full opacity-[0.05] dark:opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #FF6B2C 0%, transparent 70%)" }}
      />
      <svg className="absolute inset-0 h-full w-full opacity-[0.12] dark:opacity-[0.18]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1677FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#1677FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="hero-line-flow"
          d="M0 420 C 200 380, 400 460, 600 420 S 1000 360, 1200 400"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="1"
          strokeDasharray="8 12"
          strokeDashoffset="40"
        />
        <path
          className="hero-line-flow"
          d="M0 520 C 250 480, 450 560, 700 520 S 950 480, 1200 510"
          fill="none"
          stroke="url(#flowGrad)"
          strokeWidth="0.75"
          strokeDasharray="6 10"
          strokeDashoffset="30"
          style={{ animationDelay: "2s" }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
