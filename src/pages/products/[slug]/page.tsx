import { useParams } from "react-router-dom";
import { getProductData } from "@/data/products-detailed";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  ChevronRight,
  Box,
  Target
} from "lucide-react";
import { ExplodedArchitecture } from "@/components/animations/exploded-architecture";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug || "";
  const product = getProductData(slug);

  const [activeTab, setActiveTab] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center text-foreground overflow-hidden">
        <HeroBg />
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 pt-40 pb-16">
          <div className="mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
              <span className="w-4 h-px bg-[var(--skydot-orange)]" />
              {product.category}
            </span>
          </div>

          <div className="max-w-5xl">
            <h1 className="home-headline text-[clamp(2.4rem,5.5vw,5.2rem)] font-light tracking-tight mb-5 md:mb-6 text-balance">
              {product.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
              {product.overview}
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mt-8 md:mt-10">
              <Link
                to="/contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm bg-[var(--skydot-orange)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:translate-x-0.5 active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-[#1677FF] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
              <a
                href="#capabilities"
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[var(--skydot-orange)] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-[var(--skydot-orange)] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                  Explore Features
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="home-section py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <p className="home-label mb-6 text-center">Trusted by organizations using {product.title}</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold tracking-tighter">CLIENT A</div>
            <div className="text-2xl font-bold italic">PARTNER B</div>
            <div className="text-2xl font-black">ENTERPRISE C</div>
            <div className="text-2xl font-bold tracking-widest">ORG D</div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID (Feature Highlights) */}
      <section id="capabilities" className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16 md:mb-20">
            <p className="home-label mb-5">Features</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal text-balance">
              {product.problemSolved}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {product.features.map((feature: string, i: number) => (
              <div key={i} className="group bg-background p-7 md:p-9 flex flex-col min-h-[220px] hover:bg-secondary/40 transition-colors duration-300">
                <span className="home-label text-[var(--skydot-blue)] mb-4 block">0{i + 1}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3 leading-snug">{feature}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Seamlessly integrated into the platform to ensure high performance and strict compliance with industry standards.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING DEEP DIVE SECTION */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="border border-border/50 bg-background overflow-hidden relative shadow-sm">
                 <div className="h-8 border-b border-border/50 bg-secondary/30 flex items-center px-4">
                   <div className="flex gap-2">
                     <div className="w-2.5 h-2.5 rounded-full bg-border" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border" />
                     <div className="w-2.5 h-2.5 rounded-full bg-border" />
                   </div>
                 </div>
                 <div className="p-4 h-[400px]">
                   <AnimatePresence mode="wait">
                     <motion.div 
                       key={activeTab}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="h-full w-full"
                     >
                       {activeTab === 0 ? <DashboardMockup /> : (
                         <div className="h-full flex flex-col justify-center items-center text-center p-8 bg-secondary/10 rounded-xl border border-border/30">
                           <Box className="w-16 h-16 text-primary/40 mb-4" />
                           <h4 className="font-bold text-lg mb-2">Automated Workflows</h4>
                           <p className="text-sm text-muted-foreground">Everything runs automatically in the background, allowing your team to focus on critical tasks.</p>
                         </div>
                       )}
                     </motion.div>
                   </AnimatePresence>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="home-label mb-5">Interface</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-6">Interactive Dashboard</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                  Experience full control over your operations. {product.title} provides a centralized hub to monitor performance, manage resources, and generate reports instantly.
                </p>
              </div>

              <div className="flex gap-4 border-b border-border pb-2">
                <button 
                  onClick={() => setActiveTab(0)}
                  className={`pb-2 text-sm font-semibold border-b-[1.5px] transition-colors ${activeTab === 0 ? 'border-[var(--skydot-blue)] text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab(1)}
                  className={`pb-2 text-sm font-semibold border-b-[1.5px] transition-colors ${activeTab === 1 ? 'border-[var(--skydot-blue)] text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Automation
                </button>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Real-time data synchronization across all modules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Role-based access control for enterprise security.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Customizable reporting and analytics engine.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY THIS PRODUCT / BUSINESS VALUE */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20">
            <p className="home-label mb-5">Business Value</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light tracking-tight text-balance max-w-2xl">
              How {product.title} directly impacts your bottom line.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {product.benefits.map((benefit: any, i: number) => (
              <div key={i} className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
                <h3 className="text-lg font-semibold tracking-tight mb-3 leading-snug">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
            <div className="bg-background p-7 md:p-9 flex flex-col justify-center hover:bg-secondary/40 transition-colors duration-300">
              <h4 className="font-semibold mb-4 flex items-center gap-2 text-sm"><Target className="w-4 h-4 text-[var(--skydot-orange)]" /> Built For</h4>
              <div className="flex flex-wrap gap-2">
                {product.targetUsers.map((user: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 bg-secondary text-secondary-foreground text-[11px] font-semibold tracking-wide uppercase rounded-sm border border-border">
                    {user}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <HomeFinalCtaSection />
      
    </div>
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
