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


  const knownNames: Record<string, string> = {
    "moodle_logo_TM.svg": "Moodle",
    "shreelifecare-removebg-preview.png": "Shree Lifecare",
    "sprecturm logo without name (1).png": "Spectrum Printech",
    "verdict removebg-preview.png": "Verdict Group",
    "vge_llp-removebg-preview.png": "VGE LLP",
    "Millenio_Ventures_LLP_Logo-removebg-preview.png": "Millenio Ventures",
    "metalix logo.png": "Metalix",
    "zrti_logo.png": "ZRTI",
    "12.png" : "Uzalla BioGas",
    "WhatsApp Image 2026-10-05 at 12.15.09 PM.jpeg": "Pragna Chemicals",
    "WhatsApp Image 2026-10-05 at 12.15.29 PM.jpeg": "Katariya Snacks",
    "WhatsApp Image 2026-10-05 at 12.16.29 PM.jpeg": "3 Square Design",
    "WhatsApp Image 2026-10-05 at 12.19.15 PM.jpeg": "7 Star Pune",
    "download.jpg": "Indian railways",
    "download.png": "AIIMS - Jodhpur",
    "{1965A5EA-585C-47E4-82BA-5D4453C7956B}.png": "Diesel Loco Shed",
    "{21D9C22A-BB55-4507-BD0D-BD9972142ED9}.png": "DIET'S - Rajkot",
    "{3D4814A0-F5B2-4EA7-8AA8-B94B2A5DF761}.png": "IRISET - Secunderabad",
    "{62975BE5-7A5D-4F87-B4CF-86E51B560F91}.png": "HPSCB",
    "{63A40E57-CC72-4054-9892-19F71ADF5C8B}.png": "IRIDM",
    "{A9A609EB-8AD9-4654-B949-7000BDA9E7F8}.png": "ITRA - Jamnagar",
    "{CA86234D-B731-49A7-9242-25E268DD8C64}.png": "DIET'S - Mahesana",
    "{CF4E29D4-A7FD-4000-8F99-EFE97B90A82B}.png": "ICAR",
    "{E4770F11-014E-4AFD-84A7-FFF552A4AB3B}.png": "IRIMEE - Jamalpur",
    "{EC50010A-A6E2-4C47-B4FE-9A1F68F385BD}.png": "STTI - Pandu",
    "{F725BB55-6FB6-4673-B7D6-55F0802A7F1E}.png": "STTC",
  };

  const getLogoName = (filename: string) => {
    if (knownNames[filename]) return knownNames[filename];
    if (filename.startsWith("{") || filename.startsWith("WhatsApp") || filename.startsWith("download") || filename === "12.png") {
      return "";
    }
    return filename.split('.')[0];
  };

  const logos = Object.keys(knownNames).map(file => ({
    src: `/logo/${encodeURIComponent(file)}`,
    name: getLogoName(file)
  }));


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

      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-40 pb-16">
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
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm bg-[var(--skydot-orange)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:translate-x-0.5 active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-[#1677FF] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2">
                {heroCopy.primaryCta.label}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              to={heroCopy.secondaryCta.href}
              className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[var(--skydot-orange)] active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-[var(--skydot-orange)] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                {heroCopy.secondaryCta.label}
              </span>
            </Link>
          </div>
        </div>

        {/* Trusted By Marquee */}
        <div ref={marqueeRef} className="mt-20 md:mt-28 border-t border-border/40 pt-8 text-center md:text-left">
          <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-widest mb-8 md:mb-6 text-center">
            TRUSTED BY GLOBAL TEAMS
          </p>
          <div className="w-full overflow-hidden relative group">
            {/* Gradient Fades for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex items-center w-max animate-[marquee_60s_linear_infinite] group-hover:[animation-play-state:paused]">
              {/* Double the logos to create the infinite scroll effect */}
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 mx-6 md:mx-10 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default group/logo"
                >
                  <img src={logo.src} alt={logo.name || "Client Logo"} className="h-8 md:h-10 w-auto object-contain max-w-[100px]" />
                  {logo.name && (
                    <span className="font-semibold text-muted-foreground group-hover/logo:text-foreground text-sm tracking-tight whitespace-nowrap transition-colors">
                      {logo.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─── 3D Grid Background ─────────────────────────── */
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background z-[-1]" aria-hidden>
      <div
        className="absolute inset-0 flex flex-col text-foreground opacity-[0.12] dark:opacity-[0.2]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
        }}
      >
        {/* Ceiling */}
        <div
          className="w-[400%] h-[50%] absolute top-0 left-[-150%] origin-bottom"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(400px) rotateX(-75deg)',
          }}
        />
        {/* Floor */}
        <div
          className="w-[400%] h-[50%] absolute bottom-0 left-[-150%] origin-top"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(400px) rotateX(75deg)',
          }}
        />
      </div>
    </div>
  );
}
