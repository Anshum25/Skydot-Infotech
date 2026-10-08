import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  MessageSquareCode, 
  Database, 
  Bot,
  Zap,
  Shield,
  Layers,
  ChevronRight,
  Server,
  ShoppingCart,
  GraduationCap,
  Code
} from "lucide-react";
import { ExplodedArchitecture } from "@/components/animations/exploded-architecture";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";
import { AiWorkflowMock } from "@/components/animations/ai-workflow-mock";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "itms",
    title: "ITMS",
    icon: <Terminal className="w-6 h-6 text-primary" />,
    description: "Integrated Transport Management System for intelligent traffic and transportation routing.",
    href: "/products/itms"
  },
  {
    id: "lms",
    title: "LMS",
    icon: <GraduationCap className="w-6 h-6 text-[var(--skydot-orange)]" />,
    description: "A comprehensive Learning Management System designed for educational institutions to manage courses and students.",
    href: "/products/lms"
  },
  {
    id: "cms",
    title: "CMS",
    icon: <Layers className="w-6 h-6 text-primary" />,
    description: "Content Management System tailored for large-scale enterprise content delivery.",
    href: "/products/cms"
  },
  {
    id: "pos",
    title: "POS (Point of Sale)",
    icon: <ShoppingCart className="w-6 h-6 text-[var(--skydot-orange)]" />,
    description: "Advanced Point of Sale system integrating inventory, billing, and customer management.",
    href: "/products/pos"
  },
  {
    id: "moodle",
    title: "MOODLE",
    icon: <Database className="w-6 h-6 text-primary" />,
    description: "Customized Moodle deployment for scalable and highly interactive e-learning platforms.",
    href: "https://skylms.in"
  },
  {
    id: "mcx-apis",
    title: "MCX APIs",
    icon: <Code className="w-6 h-6 text-[var(--skydot-orange)]" />,
    description: "High-performance APIs for integrating MCX commodity trading and market data.",
    href: "/products/mcx-apis"
  }
];

export default function ProductsPage() {
  const [activeFrappeTab, setActiveFrappeTab] = useState(0);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <PageHeader 
        eyebrow="Enterprise Software Solutions"
        title={<>Custom Enterprise & AI systems built for how you <span className="text-[var(--skydot-orange)] italic font-medium">actually</span> work.</>}
        description="We engineer robust, industry-specific software platforms—from custom ERPs to advanced RAG chatbots—ready for rapid deployment and total scale."
      >
        <Link
          to="/contact"
          className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm bg-[var(--skydot-orange)] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:translate-x-0.5 active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-[#1677FF] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          <span className="relative z-10 flex items-center gap-2">
            Get a Demo
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </Link>
        <Link
          to="/work"
          className="group relative overflow-hidden inline-flex items-center gap-2 rounded-sm border border-border bg-background/60 px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all hover:border-[var(--skydot-orange)] active:scale-[0.98]"
        >
          <div className="absolute inset-0 bg-[var(--skydot-orange)] translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            View Case Studies
          </span>
        </Link>
      </PageHeader>

      {/* 2. TRUST STRIP */}
      <section className="home-section py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <p className="home-label mb-6 text-center">Trusted by forward-thinking institutions and enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <div className="text-2xl font-bold tracking-tighter">COMPANY A</div>
            <div className="text-2xl font-bold italic">INSTITUTION B</div>
            <div className="text-2xl font-black">ENTERPRISE C</div>
            <div className="text-2xl font-bold tracking-widest">ORG D</div>
            <div className="text-2xl font-bold tracking-widest">BRAND E</div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW GRID */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16 md:mb-20">
            <p className="home-label mb-5">Ecosystem</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-4">
              The SkyDot Ecosystem
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-normal text-balance">
              Powerful independent platforms that seamlessly integrate to form a complete digital backbone for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {products.map((product, i) => (
              <Link key={product.id} to={product.href} className="group bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6">
                  {product.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight mb-3 leading-snug">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-blue)] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-200">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING deep dive 1: FRAPPE / ERP */}
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
                       key={activeFrappeTab}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className="h-full w-full"
                     >
                       {activeFrappeTab === 0 ? <DashboardMockup /> : (
                         <div className="h-full flex flex-col justify-center items-center text-center p-8 bg-secondary/10 rounded-xl border border-border/30">
                           <Database className="w-16 h-16 text-primary/40 mb-4" />
                           <h4 className="font-bold text-lg mb-2">Custom DocTypes & Workflows</h4>
                           <p className="text-sm text-muted-foreground">Rapidly scaffolded database structures tailored instantly to your unique operations.</p>
                         </div>
                       )}
                     </motion.div>
                   </AnimatePresence>
                 </div>
               </div>
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="home-label mb-5">Frappe / ERPNext</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-6">Custom Frappe App Development</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                  We don't just configure software; we build robust, scalable applications natively on the Frappe framework. Get the exact functionality you need without the bloat.
                </p>
              </div>

              <div className="flex gap-4 border-b border-border pb-2">
                <button 
                  onClick={() => setActiveFrappeTab(0)}
                  className={`pb-2 text-sm font-semibold border-b-[1.5px] transition-colors ${activeFrappeTab === 0 ? 'border-[var(--skydot-blue)] text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Dashboard Interface
                </button>
                <button 
                  onClick={() => setActiveFrappeTab(1)}
                  className={`pb-2 text-sm font-semibold border-b-[1.5px] transition-colors ${activeFrappeTab === 1 ? 'border-[var(--skydot-blue)] text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Custom Logic
                </button>
              </div>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Bespoke ERP modules matching your exact workflow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">High-performance scalable backend on Python & MariaDB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-blue)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Seamless third-party API integrations (Payment, SMS, etc.).</span>
                </li>
              </ul>

              <Link to="/products/frappe-erpnext" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-blue)] uppercase tracking-widest group">
                Explore Custom Frappe Dev <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ALTERNATING deep dive 2: AI & RAG */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            
            <div className="space-y-8">
              <div>
                <p className="home-label mb-5 text-[var(--skydot-orange)]">AI Integration</p>
                <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-6">AI Chatbots & RAG Systems</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-normal">
                  Turn your static documents and wikis into an intelligent, conversational oracle. We deploy secure, private RAG (Retrieval-Augmented Generation) pipelines.
                </p>
              </div>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-orange)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Chat instantly with your proprietary enterprise data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-orange)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">100% data privacy — models run securely in your cloud.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[var(--skydot-orange)] shrink-0 mt-1" />
                  <span className="text-sm text-muted-foreground">Automated Tier-1 customer support answering accurate FAQs.</span>
                </li>
              </ul>

              <Link to="/products/ai-rag" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-orange)] uppercase tracking-widest group">
                Explore AI Solutions <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
               <div className="border border-border/50 rounded-[3px] bg-card p-4 shadow-sm relative z-10">
                 <AiWorkflowMock />
               </div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--skydot-orange)]/10 blur-[100px] -z-10 rounded-full" />
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY SKYDOT (Differentiators) */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 max-w-4xl">
            <p className="home-label mb-5">Why SkyDot</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light tracking-tight text-balance">
              We are architectural partners ensuring your digital systems handle tomorrow's scale.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <div className="mb-6">
                <Zap className="w-5 h-5 text-[var(--skydot-blue)]" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Rapid Deployment</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By leveraging robust open-source foundations like Frappe, we slash development time by up to 60%, getting you to market faster.
              </p>
            </div>
            
            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <div className="mb-6">
                <Shield className="w-5 h-5 text-[var(--skydot-orange)]" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Enterprise Reliability</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our architectures are built for high availability. We utilize modern devops practices, automated testing, and secure VPCs.
              </p>
            </div>

            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <div className="mb-6">
                <Layers className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Absolute Ownership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                No vendor lock-in. You own the custom code, the data, and the infrastructure. We build it, hand it over, and maintain it if you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <HomeFinalCtaSection />
      
    </div>
  );
}


