import { useParams } from "react-router-dom";
import { getProductData } from "@/data/products-detailed";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden border-b border-border/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        <div className="container relative z-10 px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                {product.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                {product.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                {product.overview}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "rounded-xl h-12 px-8 font-semibold text-md bg-primary hover:bg-primary/90 text-primary-foreground border-none" })}>
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="#capabilities" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-xl h-12 px-8 font-semibold text-md bg-card/50 backdrop-blur" })}>
                  Explore Features
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <ExplodedArchitecture />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="py-12 border-b border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-8">
            Trusted by organizations using {product.title}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold tracking-tighter">CLIENT A</div>
            <div className="text-2xl font-bold italic">PARTNER B</div>
            <div className="text-2xl font-black">ENTERPRISE C</div>
            <div className="text-2xl font-bold tracking-widest">ORG D</div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITIES GRID (Feature Highlights) */}
      <section id="capabilities" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Core Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              {product.problemSolved}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature: string, i: number) => (
              <div key={i} className="group p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col">
                <div className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamlessly integrated into the platform to ensure high performance and strict compliance with industry standards.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING DEEP DIVE SECTION */}
      <section className="py-24 border-t border-border bg-card/20 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="order-2 lg:order-1 relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent blur-3xl -z-10 rounded-full" />
               <div className="border border-border/50 rounded-2xl shadow-2xl bg-background overflow-hidden relative">
                 <div className="h-10 border-b border-border/50 bg-secondary/30 flex items-center px-4">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400/80" />
                     <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                     <div className="w-3 h-3 rounded-full bg-green-400/80" />
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Interactive Dashboard</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Experience full control over your operations. {product.title} provides a centralized hub to monitor performance, manage resources, and generate reports instantly.
                </p>
              </div>

              <div className="flex gap-2 border-b border-border/50 pb-2">
                <button 
                  onClick={() => setActiveTab(0)}
                  className={`pb-2 px-1 text-sm font-bold border-b-2 transition-colors ${activeTab === 0 ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab(1)}
                  className={`pb-2 px-1 text-sm font-bold border-b-2 transition-colors ${activeTab === 1 ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Automation
                </button>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Real-time data synchronization across all modules.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Role-based access control for enterprise security.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Customizable reporting and analytics engine.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY THIS PRODUCT / BUSINESS VALUE */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Business Value</h2>
              <p className="text-lg text-muted-foreground mb-8">
                How {product.title} directly impacts your bottom line and operational efficiency.
              </p>
              
              <div className="bg-background rounded-2xl p-6 border border-border">
                <h4 className="font-bold mb-4 flex items-center gap-2"><Target className="w-5 h-5 text-[var(--skydot-orange)]" /> Built For</h4>
                <div className="flex flex-wrap gap-2">
                  {product.targetUsers.map((user: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-full border border-border/50">
                      {user}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
              {product.benefits.map((benefit: any, i: number) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-border shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <ContactCtaSection />
      
    </div>
  );
}
