import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
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
      slug: "government-railways"
    },
    {
      name: "Education",
      overview: "Educational institutions are undergoing rapid digital transformation, requiring robust platforms for administration and learning delivery.",
      challenges: "Transitioning to remote learning, managing student records, conducting secure assessments.",
      solution: "We provide comprehensive digital education ecosystems, from learning management to automated examinations.",
      products: "LMS, Online Examination System, OMR Software, Education Directory",
      icon: GraduationCap,
      slug: "education"
    },
    {
      name: "Manufacturing & Logistics",
      overview: "Complex supply chains and production environments demand precise resource tracking and operational visibility.",
      challenges: "Inventory discrepancies, inefficient production planning, disconnected shop floor data.",
      solution: "We implement robust ERP and transport software to provide end-to-end supply chain visibility and automated resource planning.",
      products: "ERP, Transport Software",
      icon: Factory,
      slug: "manufacturing"
    }
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Sector Expertise"
        title="Industry-Specific Solutions"
        description="We engineer software that addresses the unique regulatory, operational, and scalability challenges of your specific sector."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {industries.map((industry, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center bg-secondary/30 p-8 md:p-12 rounded-3xl border border-border">
                <div>
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <industry.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{industry.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {industry.overview}
                  </p>
                  
                  <Link to={`/industries/${industry.slug}`} className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                    Explore Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-background border border-border p-6 rounded-2xl">
                    <h3 className="font-semibold text-foreground mb-2">Common Challenges</h3>
                    <p className="text-muted-foreground text-sm">{industry.challenges}</p>
                  </div>
                  <div className="bg-background border border-border p-6 rounded-2xl">
                    <h3 className="font-semibold text-foreground mb-2">How Skydot Helps</h3>
                    <p className="text-muted-foreground text-sm">{industry.solution}</p>
                  </div>
                  <div className="bg-background border border-border p-6 rounded-2xl">
                    <h3 className="font-semibold text-foreground mb-2">Relevant Products</h3>
                    <p className="text-muted-foreground text-sm font-medium">{industry.products}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
