import { PageHeader } from "@/components/layout/page-header";
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
  Target,
  Database,
  Building2,
  Users,
  BookOpen,
  Layout,
  BarChart,
  GraduationCap,
  Gamepad2,
  Hexagon,
  Layers
} from "lucide-react";
import { ExplodedArchitecture } from "@/components/animations/exploded-architecture";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";
import { IndiaMapDashboard } from "@/components/dashboard/india-map-dashboard";
import { McxLiveDashboard } from "@/components/dashboard/mcx-live-dashboard";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug || "";
  const product = getProductData(slug);

  const [activeTab, setActiveTab] = useState(0);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  useEffect(() => {
    if (product) {
      document.title = `${product.title} | Skydot Infotech`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", product.description);
      } else {
        const meta = document.createElement('meta');
        meta.name = "description";
        meta.content = product.description;
        document.head.appendChild(meta);
      }
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <PageHeader 
        eyebrow={product.category}
        title={product.title}
        description={product.overview}
      >
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
        {product.brochureUrl ? (
          <button
            onClick={() => setIsBrochureOpen(true)}
            className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[var(--skydot-orange)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[var(--skydot-orange)] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Explore Features
            </span>
          </button>
        ) : (
          <a
            href="#capabilities"
            className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[var(--skydot-orange)] active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-[var(--skydot-orange)] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Explore Features
            </span>
          </a>
        )}
      </PageHeader>

      {/* 2. TRUST STRIP */}
      {slug !== 'cms' && (
      <section className="home-section py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <p className="home-label mb-10 text-center">
            {slug === 'frappe-apps' ? 'Ecosystem of Frappe Apps' : `Trusted by organizations using ${product.title}`}
          </p>
          <div className="w-full overflow-hidden relative group">
            {/* Gradient Fades for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-[marquee_50s_linear_infinite] group-hover:[animation-play-state:paused]">
              {/* Double the logos to create the infinite scroll effect */}
              {Array(4).fill(
                slug === 'itms' ? [
                  { src: "/logo/zrti_logo.png", name: "ZRTI" },
                  { src: "/logo/download.jpg", name: "Indian railways" },
                  { src: "/logo/download.png", name: "AIIMS - Jodhpur" },
                  { src: "/logo/{1965A5EA-585C-47E4-82BA-5D4453C7956B}.png", name: "Diesel Loco Shed" },
                  { src: "/logo/{21D9C22A-BB55-4507-BD0D-BD9972142ED9}.png", name: "DIET'S - Rajkot" },
                  { src: "/logo/{3D4814A0-F5B2-4EA7-8AA8-B94B2A5DF761}.png", name: "IRISET - Secunderabad" },
                  { src: "/logo/{62975BE5-7A5D-4F87-B4CF-86E51B560F91}.png", name: "HPSCB" },
                  { src: "/logo/{63A40E57-CC72-4054-9892-19F71ADF5C8B}.png", name: "IRIDM" },
                  { src: "/logo/{A9A609EB-8AD9-4654-B949-7000BDA9E7F8}.png", name: "ITRA - Jamnagar" },
                  { src: "/logo/{CA86234D-B731-49A7-9242-25E268DD8C64}.png", name: "DIET'S - Mahesana" },
                  { src: "/logo/{CF4E29D4-A7FD-4000-8F99-EFE97B90A82B}.png", name: "ICAR" },
                  { src: "/logo/{E4770F11-014E-4AFD-84A7-FFF552A4AB3B}.png", name: "IRIMEE - Jamalpur" },
                  { src: "/logo/{EC50010A-A6E2-4C47-B4FE-9A1F68F385BD}.png", name: "STTI - Pandu" },
                  { src: "/logo/{F725BB55-6FB6-4673-B7D6-55F0802A7F1E}.png", name: "STTC" }
                ] :
                slug === 'frappe-apps' ? [
                { name: "ERPNext", icon: Database, color: "text-blue-500" },
                { name: "Frappe HR", icon: Users, color: "text-rose-500" },
                { name: "Frappe Books", icon: BookOpen, color: "text-amber-500" },
                { name: "Frappe Desk", icon: Layout, color: "text-slate-500" },
                { name: "Frappe Builder", icon: Box, color: "text-emerald-500" },
                { name: "Frappe Insights", icon: BarChart, color: "text-violet-500" },
                { name: "Frappe LMS", icon: GraduationCap, color: "text-cyan-500" },
                { name: "Gameplan", icon: Gamepad2, color: "text-orange-500" }
              ] : [
                { name: "CLIENT A", icon: Building2, color: "text-muted-foreground" },
                { name: "PARTNER B", icon: Hexagon, color: "text-muted-foreground" },
                { name: "ENTERPRISE C", icon: Layers, color: "text-muted-foreground" },
                { name: "ORG D", icon: Box, color: "text-muted-foreground" },
                { name: "BRAND E", icon: Target, color: "text-muted-foreground" },
                { name: "COMPANY F", icon: Database, color: "text-muted-foreground" }
              ]).flat().map((item: any, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 mx-6 md:mx-10 opacity-80 hover:opacity-100 transition-opacity duration-300 cursor-default"
                >
                  {item.src ? (
                    <>
                      <img 
                        src={item.src} 
                        alt={item.name} 
                        className="h-7 md:h-8 w-auto object-contain transition-all duration-300" 
                        loading="lazy"
                      />
                      <span className="font-semibold text-foreground/80 text-sm md:text-base tracking-tight whitespace-nowrap transition-colors">
                        {item.name}
                      </span>
                    </>
                  ) : (
                    <>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className="font-semibold text-foreground/80 text-sm md:text-base tracking-tight whitespace-nowrap transition-colors">
                        {item.name}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* 3. CAPABILITIES GRID (Feature Highlights) */}
      {slug !== 'mcx-apis' && (
        <>
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
                       {activeTab === 0 ? (
                         slug === 'itms' ? (
                           <div className="relative w-full h-full max-w-3xl mx-auto bg-card rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-border overflow-hidden">
                             <video 
                               src="/Viedeo/export-1791351493444.mp4" 
                               autoPlay 
                               loop 
                               muted 
                               playsInline 
                               className="w-full h-full object-cover"
                             />
                           </div>
                         ) : (
                           <DashboardMockup />
                         )
                       ) : (
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
      </>
      )}

      {slug === 'mcx-apis' && <McxLiveDashboard />}

      {slug === 'itms' && (
        <section className="home-section relative py-12 md:py-16 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <IndiaMapDashboard />
          </div>
        </section>
      )}

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
      
      {/* BROCHURE MODAL */}
      <AnimatePresence>
        {isBrochureOpen && product.brochureUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 md:p-10"
            onClick={() => setIsBrochureOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl h-[80vh] bg-card border border-border shadow-2xl rounded-lg overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
                <h3 className="font-semibold text-foreground">Explore Features (Brochure)</h3>
                <button 
                  onClick={() => setIsBrochureOpen(false)}
                  className="p-1.5 rounded-sm hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>
              <div className="flex-1 w-full bg-muted/20">
                <iframe 
                  src={product.brochureUrl} 
                  className="w-full h-full border-none"
                  title={`${product.title} Brochure`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


