import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { DashboardMockup } from "@/components/animations/dashboard-mockup";
import { getProductData } from "@/data/products-detailed";
import { CheckCircle2, ChevronRight, Users, Box } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

import { useParams } from "react-router-dom";
export default function ProductDetail() {
  const params = useParams();
  const slug = params.slug || "";

  const product = getProductData(slug);

  return (
    <>
      <PageHeader 
        eyebrow={product.category}
        title={product.title}
        description={product.description}
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-16">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Product Overview & Problem Solved */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Product Overview</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.overview}
                  </p>
                </div>
                <div className="bg-destructive/5 border border-destructive/10 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl font-bold text-destructive mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive"></span>
                    The Problem it Solves
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    {product.problemSolved}
                  </p>
                </div>
              </div>

              {/* UI Preview (Simulated) */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Platform Interface</h2>
                <div className="relative bg-secondary/20 border border-border/50 shadow-sm rounded-2xl overflow-hidden ring-1 ring-border/50">
                  <div className="h-10 border-b border-border/50 bg-background/50 backdrop-blur flex items-center px-4">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-border"></div>
                    </div>
                  </div>
                  <div className="p-4">
                    <DashboardMockup />
                  </div>
                </div>
              </div>

              {/* Features & Benefits */}
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Box className="w-6 h-6 text-primary" /> Key Features
                  </h2>
                  <ul className="space-y-3">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-6 h-6 text-[var(--skydot-orange)]" /> Business Value
                  </h2>
                  <div className="space-y-6">
                    {product.benefits.map((benefit, i) => (
                      <div key={i}>
                        <h4 className="font-bold text-foreground mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                
                {/* Target Users */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="font-bold text-lg mb-6 text-foreground">Target Users</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.targetUsers.map((user, i) => (
                      <span key={i} className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-xs font-medium rounded-full border border-border/50">
                        {user}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Solutions */}
                <div className="bg-card border border-border rounded-3xl p-8 shadow-sm">
                  <h3 className="font-bold text-lg mb-6 text-foreground">Related Services</h3>
                  <div className="space-y-3">
                    {product.relatedSolutions.map((sol, i) => (
                      <Link key={i} to={`/solutions/${sol.slug}`} className="flex items-center justify-between p-3 rounded-xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border group">
                        <span className="text-sm font-medium">{sol.title}</span>
                        <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Sidebar CTA */}
                <div className="bg-foreground text-background rounded-3xl p-8 shadow-xl">
                  <h3 className="font-bold text-2xl mb-4">Request a Demo</h3>
                  <p className="text-background/80 mb-8 text-sm leading-relaxed">
                    See how {product.title} can integrate into your existing workflow.
                  </p>
                  <Link to="/contact" className={buttonVariants({ variant: "default", className: "w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 border-0" })}>
                    Schedule Demo
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
