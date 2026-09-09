import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SlideSystems } from "./slide-systems";
import { SlideIntelligence } from "./slide-intelligence";
import { SlideScale } from "./slide-scale";

const slides = [
  {
    id: 1,
    headline: (
      <>
        We Build <span className="text-[#F58220]">Digital</span> <span className="text-primary">Systems</span> That Move Business.
      </>
    ),
    description: "We design, build, and scale enterprise-grade software solutions, AI architectures, and digital products that transform how modern organizations operate.",
  },
  {
    id: 2,
    headline: (
      <>
        We engineer <span className="text-[#F58220]">intelligence</span> into <span className="text-primary">everyday</span> operations.
      </>
    ),
    description: "From predictive AI models to automated workflows — we help organizations turn raw data into decisions that move faster than the competition.",
  },
  {
    id: 3,
    headline: (
      <>
        <span className="text-primary">Infrastructure</span> that scales with <span className="text-[#F58220]">you</span>, not against you.
      </>
    ),
    description: "Enterprise-grade architecture, cloud-native platforms, and integrations built to grow from startup to scale without a rebuild.",
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advance
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // 3 seconds per slide
    return () => clearInterval(timer);
  }, [isHovered]);



  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroBlur = useTransform(scrollY, [0, 600], ["blur(0px)", "blur(20px)"]);

  return (
    <motion.div 
      className="relative z-0 w-full min-h-screen bg-background overflow-hidden flex flex-col pt-24 pb-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ opacity: heroOpacity, filter: heroBlur }}
    >
      {/* Background glow for depth */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      {/* 2. Text Content & 3D Visual Grid */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full flex-1 grid lg:grid-cols-2 gap-12 items-center pointer-events-none">
        
        <div className="flex flex-col items-start pointer-events-auto w-full text-left">
          {/* Eyebrow */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3">
            <span className="text-[10px] sm:text-xs font-heading font-bold tracking-[0.15em] text-primary uppercase">
              SKYDOT INFOTECH / EST. 2013
            </span>
            <div className="h-px w-8 sm:w-12 bg-primary/50" />
          </div>

          {/* 3D Crossfading Headline & Description */}
          <div className="min-h-[280px] sm:min-h-[220px] md:min-h-[280px] w-full flex flex-col items-start [perspective:1000px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, rotateX: -60, y: 40 }}
                animate={{ opacity: 1, rotateX: 0, y: 0 }}
                exit={{ opacity: 0, rotateX: 60, y: -40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: "center center" }}
                className="w-full flex flex-col items-start"
              >
                <h1 className="font-heading text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight text-foreground leading-[1.1] mb-6 max-w-2xl">
                  {slides[currentIndex].headline}
                </h1>
                <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-xl font-medium mb-10 leading-[1.6]">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTAs (Static) */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full">
            <MagneticButton intensity={0.15}>
              <Link
                to="/solutions"
                className={buttonVariants({
                  size: "lg",
                  className: "h-14 px-8 text-base rounded hover:bg-primary/90 min-w-[200px] ease-custom",
                })}
              >
                Explore Solutions
              </Link>
            </MagneticButton>
            <MagneticButton intensity={0.15}>
              <Link
                to="/work"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "h-14 px-8 text-base rounded border-border text-foreground hover:bg-muted min-w-[200px] ease-custom",
                })}
              >
                View Our Work
              </Link>
            </MagneticButton>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex items-center gap-2 mt-12 pointer-events-auto">
            {slides.map((_, idx) => (
              <div key={idx} className="h-1.5 w-12 bg-muted rounded-full overflow-hidden cursor-pointer" onClick={() => setCurrentIndex(idx)}>
                {idx === currentIndex && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-primary"
                  />
                )}
                {idx < currentIndex && <div className="h-full w-full bg-primary/50" />}
              </div>
            ))}
          </div>

        </div>

        {/* Right Side: Animated Visual Carousel */}
        <div className="hidden lg:flex items-center justify-center pointer-events-auto w-full h-full relative [perspective:1000px]">
           <AnimatePresence mode="wait">
             <motion.div
               key={`visual-${currentIndex}`}
               initial={{ opacity: 0, rotateY: 90, scale: 0.9 }}
               animate={{ opacity: 1, rotateY: 0, scale: 1 }}
               exit={{ opacity: 0, rotateY: -90, scale: 0.9 }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
               className="absolute inset-0 w-full h-full flex items-center justify-center"
               style={{ transformOrigin: "center left" }}
             >
               {currentIndex === 0 && <SlideSystems />}
               {currentIndex === 1 && <SlideIntelligence />}
               {currentIndex === 2 && <SlideScale />}
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </motion.div>
  );
}
