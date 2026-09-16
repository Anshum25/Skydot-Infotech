import { ContactCtaSection } from "@/components/sections/contact-cta-section";
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
  ChevronRight
} from "lucide-react";
import { ExplodedArchitecture } from "@/components/animations/exploded-architecture";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";
import { AiWorkflowMock } from "@/components/animations/ai-workflow-mock";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    id: "frappe",
    title: "Custom Frappe/ERPNext Development",
    icon: <Database className="w-6 h-6 text-primary" />,
    description: "End-to-end bespoke ERP solutions built on the open-source Frappe framework. Designed specifically for your operational realities, not just standard templates.",
    href: "/products/frappe-erpnext"
  },
  {
    id: "whatsapp",
    title: "WhatsApp & Evolution Manager Integration",
    icon: <MessageSquareCode className="w-6 h-6 text-[var(--skydot-orange)]" />,
    description: "Connect your core systems with the world's most popular messaging app. Automate alerts, manage evolution systems, and interact with customers instantly.",
    href: "/products/whatsapp-evolution"
  },
  {
    id: "ai",
    title: "AI Chatbots & RAG Systems",
    icon: <Bot className="w-6 h-6 text-primary" />,
    description: "Deploy secure, private LLMs integrated with your proprietary company data (Retrieval-Augmented Generation) for intelligent internal search and automated customer support.",
    href: "/products/ai-rag"
  },
  {
    id: "trms",
    title: "TRMS (Training Resource Management System)",
    icon: <Terminal className="w-6 h-6 text-[var(--skydot-orange)]" />,
    description: "Complete institutional and corporate training management platform. Centralize course delivery, trainee progress, and resource allocation.",
    href: "/products/trms"
  }
];

export default function ProductsPage() {
  const [activeFrappeTab, setActiveFrappeTab] = useState(0);

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
                Enterprise Software Solutions
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                Custom Frappe & AI systems built for how you <span className="text-primary italic">actually</span> work.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
                We engineer robust, industry-specific software platforms—from custom ERPs to advanced RAG chatbots—ready for rapid deployment and total scale.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className={buttonVariants({ variant: "default", size: "lg", className: "rounded-xl h-12 px-8 font-semibold text-md bg-primary hover:bg-primary/90 text-primary-foreground border-none" })}>
                  Get a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/work" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-xl h-12 px-8 font-semibold text-md bg-card/50 backdrop-blur" })}>
                  View Case Studies
                </Link>
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
            Trusted by forward-thinking institutions and enterprises
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            {/* PLACEHOLDERS for actual client logos */}
            <div className="text-2xl font-bold tracking-tighter">COMPANY A</div>
            <div className="text-2xl font-bold italic">INSTITUTION B</div>
            <div className="text-2xl font-black">ENTERPRISE C</div>
            <div className="text-2xl font-bold tracking-widest">ORG D</div>
            <div className="text-2xl font-bold tracking-widest">BRAND E</div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT OVERVIEW GRID */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">The SkyDot Ecosystem</h2>
            <p className="text-lg text-muted-foreground">
              Powerful independent platforms that seamlessly integrate to form a complete digital backbone for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                  {product.description}
                </p>
                <Link to={product.href} className="inline-flex items-center text-sm font-bold text-primary group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ALTERNATING deep dive 1: FRAPPE / ERP */}
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
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Custom Frappe App Development</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't just configure software; we build robust, scalable applications natively on the Frappe framework. Get the exact functionality you need without the bloat.
                </p>
              </div>

              <div className="flex gap-2 border-b border-border/50 pb-2">
                <button 
                  onClick={() => setActiveFrappeTab(0)}
                  className={`pb-2 px-1 text-sm font-bold border-b-2 transition-colors ${activeFrappeTab === 0 ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Dashboard Interface
                </button>
                <button 
                  onClick={() => setActiveFrappeTab(1)}
                  className={`pb-2 px-1 text-sm font-bold border-b-2 transition-colors ${activeFrappeTab === 1 ? 'border-primary text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
                >
                  Custom Logic
                </button>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Bespoke ERP modules matching your exact workflow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">High-performance scalable backend on Python & MariaDB.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Seamless third-party API integrations (Payment, SMS, etc.).</span>
                </li>
              </ul>

              <Link to="/products/frappe-erpnext" className="inline-flex items-center font-bold text-primary group">
                Explore Custom Frappe Dev <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. ALTERNATING deep dive 2: AI & RAG */}
      <section className="py-24 border-t border-border bg-background overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">AI Chatbots & RAG Systems</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Turn your static documents and wikis into an intelligent, conversational oracle. We deploy secure, private RAG (Retrieval-Augmented Generation) pipelines.
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--skydot-orange)] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Chat instantly with your proprietary enterprise data.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--skydot-orange)] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">100% data privacy — models run securely in your cloud.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--skydot-orange)] shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">Automated Tier-1 customer support answering accurate FAQs.</span>
                </li>
              </ul>

              <Link to="/products/ai-rag" className="inline-flex items-center font-bold text-[var(--skydot-orange)] group">
                Explore AI Solutions <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-[var(--skydot-orange)]/10 to-transparent blur-3xl -z-10 rounded-full" />
               <div className="border border-border/50 rounded-2xl shadow-2xl bg-card p-2 md:p-8">
                 <AiWorkflowMock />
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. WHY SKYDOT (Differentiators) */}
      <section className="py-24 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Why partner with SkyDot?</h2>
            <p className="text-lg text-muted-foreground">
              We are not just a development shop. We are architectural partners ensuring your digital systems can handle tomorrow's scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Rapid Deployment</h3>
              <p className="text-muted-foreground leading-relaxed">
                By leveraging robust open-source foundations like Frappe, we slash development time by up to 60%, getting you to market faster.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--skydot-orange)]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[var(--skydot-orange)]" />
              </div>
              <h3 className="text-xl font-bold">Enterprise Reliability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our architectures are built for high availability. We utilize modern devops practices, automated testing, and secure VPCs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Layers className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Absolute Ownership</h3>
              <p className="text-muted-foreground leading-relaxed">
                No vendor lock-in. You own the custom code, the data, and the infrastructure. We build it, hand it over, and maintain it if you choose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <ContactCtaSection />
      
    </div>
  );
}
