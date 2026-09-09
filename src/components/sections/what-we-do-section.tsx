import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowRight, Bot, Code2, Database, LineChart } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";

gsap.registerPlugin(ScrollTrigger);

export function WhatWeDoSection() {
  const services = [
    {
      title: "AI & Automation",
      description: "Intelligent workflows and RAG systems that automate complex business processes, driving unprecedented efficiency without replacing human oversight.",
      icon: Bot,
      href: "/solutions/ai-automation",
    },
    {
      title: "ERP Systems",
      description: "Comprehensive enterprise resource planning implementations that unify operations, finance, and human capital into a single source of truth.",
      icon: Database,
      href: "/solutions/erp-solutions",
    },
    {
      title: "Custom Software",
      description: "High-performance enterprise software built for scale and security. We architect complex systems that off-the-shelf products cannot handle.",
      icon: Code2,
      href: "/solutions/software-development",
    },
    {
      title: "Digital Products",
      description: "Data-driven applications and portals designed for user engagement, backed by robust analytics and scalable cloud infrastructure.",
      icon: LineChart,
      href: "/solutions/digital-marketing",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const itemProgress = 1 / services.length;
    let newIndex = Math.floor(latest / itemProgress);
    newIndex = Math.max(0, Math.min(services.length - 1, newIndex));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  useEffect(() => {
    // Reveal the headline as you scroll into this section
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1, 
          y: 0, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "top 30%",
            scrub: true,
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-background relative">

      {/* Desktop Layout (Sticky Scroll Storytelling) */}
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-6 md:px-12">
            
            {/* The Headline that connects from Hero */}
            <div className="mb-16 md:mb-24">
              <h2 ref={headlineRef} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05] uppercase max-w-4xl">
                Systems Built Around <br/>
                <span className="text-muted-foreground">Real Business Needs.</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Column: Minimal Editorial Selector */}
              <div className="lg:col-span-5 flex flex-col gap-0 relative border-l border-border pl-8">
                {/* Active Indicator Line */}
                <motion.div
                  className="absolute left-[-1px] w-[2px] bg-primary transition-all duration-300 ease-out"
                  style={{
                    height: `${100 / services.length}%`,
                    top: `${(activeIndex * 100) / services.length}%`
                  }}
                />

                {services.map((service, i) => {
                  const isActive = i === activeIndex;
                  return (
                    <div
                      key={i}
                      className={cn(
                        "py-6 transition-all duration-500 cursor-default",
                        isActive ? "opacity-100" : "opacity-30 hover:opacity-50"
                      )}
                    >
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 uppercase tracking-tight">
                        {service.title}
                      </h3>
                      {/* Animate description appearance */}
                      <AnimatePresence mode="popLayout">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-md font-medium">
                              {service.description}
                            </p>
                            <Link
                              to={service.href}
                              className="inline-flex items-center text-sm font-bold text-foreground mt-6 group tracking-widest uppercase"
                            >
                              Explore Solution
                              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: The "Transformed" Product Interface */}
              <div className="lg:col-span-7 relative h-[400px] lg:h-[500px] flex items-center justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full flex flex-col justify-center"
                  >
                    {/* 
                      For the first item, we use the DashboardMockup to simulate 
                      the interface transitioning from the hero.
                      For other items, we use a clean structural layout. 
                    */}
                    {activeIndex === 0 ? (
                      <DashboardMockup />
                    ) : (
                      <div className="w-full max-w-3xl ml-auto aspect-[16/10] bg-card border border-border shadow-xl p-8 flex flex-col justify-between rounded-sm">
                        <div className="flex justify-between items-start border-b border-border pb-6">
                          <div className="flex items-center gap-3">
                            {(() => {
                              const ActiveIcon = services[activeIndex].icon;
                              return <ActiveIcon className="w-6 h-6 text-primary" />;
                            })()}
                            <span className="font-semibold text-lg">{services[activeIndex].title} Module</span>
                          </div>
                          <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                            SYS_ACTIVE
                          </div>
                        </div>
                        
                        <div className="flex-1 py-8 flex flex-col gap-4">
                          <div className="w-full h-8 bg-muted rounded-sm" />
                          <div className="w-3/4 h-8 bg-muted rounded-sm" />
                          <div className="w-5/6 h-8 bg-muted rounded-sm" />
                        </div>
                        
                        <div className="pt-6 border-t border-border flex justify-between text-xs text-muted-foreground font-mono">
                          <span>UPTIME: 99.99%</span>
                          <span>LATENCY: &lt;10ms</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
