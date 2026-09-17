import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { ArrowRight, Factory, GraduationCap, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function IndustriesPage() {
  const industries = [
    {
      name: "Government & Railways",
      overview: "Public sector entities require highly secure, compliant, and scalable infrastructure to manage public services and large-scale operations.",
      challenges: "Legacy system modernization, strict data security compliance, managing massive operational scale.",
      solution: "We build secure, reliable management systems (like IRTPMS) capable of handling critical infrastructure data with strict access controls.",
      products: "IRTPMS, IRIMEE, IRISET",
      icon: Building2,
      slug: "government-railways",
      colorClass: "text-[var(--skydot-blue)]"
    },
    {
      name: "Education",
      overview: "Educational institutions are undergoing rapid digital transformation, requiring robust platforms for administration and learning delivery.",
      challenges: "Transitioning to remote learning, managing student records, conducting secure assessments.",
      solution: "We provide comprehensive digital education ecosystems, from learning management to automated examinations.",
      products: "LMS, Online Examination System, OMR Software, Education Directory",
      icon: GraduationCap,
      slug: "education",
      colorClass: "text-[var(--skydot-orange)]"
    },
    {
      name: "Manufacturing & Logistics",
      overview: "Complex supply chains and production environments demand precise resource tracking and operational visibility.",
      challenges: "Inventory discrepancies, inefficient production planning, disconnected shop floor data.",
      solution: "We implement robust ERP and transport software to provide end-to-end supply chain visibility and automated resource planning.",
      products: "ERP, Transport Software",
      icon: Factory,
      slug: "manufacturing",
      colorClass: "text-green-500"
    }
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Sector Expertise"
        title="Industry-Specific Solutions"
        description="We engineer software that addresses the unique regulatory, operational, and scalability challenges of your specific sector."
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="space-y-24 md:space-y-32">
            {industries.map((industry, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="order-2 lg:order-1 relative">
                  <div className="grid gap-px bg-border shadow-sm">
                    <div className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Common Challenges</h3>
                      <p className="text-foreground leading-relaxed">{industry.challenges}</p>
                    </div>
                    <div className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">How Skydot Helps</h3>
                      <p className="text-foreground leading-relaxed">{industry.solution}</p>
                    </div>
                    <div className="bg-background p-7 md:p-9 hover:bg-secondary/40 transition-colors duration-300">
                      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-3">Relevant Products</h3>
                      <p className="text-foreground leading-relaxed font-medium">{industry.products}</p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <div className={`w-14 h-14 flex items-center justify-center shrink-0 mb-8 ${industry.colorClass}`}>
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-6">
                    {industry.name}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-normal mb-8">
                    {industry.overview}
                  </p>
                  
                  <Link to={`/industries/${industry.slug}`} className={`inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest group ${industry.colorClass}`}>
                    Explore Solutions
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
