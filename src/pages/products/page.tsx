import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { Box, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";




export default function ProductsPage() {
  const products = [
    {
      title: "IRTPMS",
      category: "Infrastructure / Management",
      description: "Specialized management system for infrastructure operations.",
      problem: "[VERIFY CONTENT]",
      benefits: "Streamlined operations, compliance tracking.",
      who: "Government, Railways, Infrastructure",
      slug: "irtpms"
    },
    {
      title: "IRIMEE & IRISET",
      category: "Education / Institutional",
      description: "Institutional management platforms for centralized administration.",
      problem: "Centralizing institutional administration.",
      benefits: "Improved administrative efficiency.",
      who: "Educational Institutes, Training Centers",
      slug: "irimee-iriset"
    },
    {
      title: "LMS (Learning Management System)",
      category: "Education Technology",
      description: "Comprehensive platform for digital education delivery and administration.",
      problem: "Managing digital course content, student progress, and remote learning efficiently.",
      benefits: "Scalable learning delivery, detailed performance analytics.",
      who: "Schools, Universities, Corporate Training Departments",
      slug: "lms"
    },
    {
      title: "ERP & TPMIS",
      category: "Enterprise Software",
      description: "Core business management applications for specific operational workflows.",
      problem: "Disconnected data and manual operations.",
      benefits: "Centralized data, real-time analytics.",
      who: "Manufacturing, Retail, Enterprises",
      slug: "erp"
    },
    {
      title: "Digital Assessments",
      category: "Education Technology",
      description: "Suite of digital assessment tools (MCQ, OMR, Online Exams) for robust, secure examinations.",
      problem: "Automating the creation, delivery, and grading of examinations.",
      benefits: "Reduced administrative overhead, instant results, cheating prevention.",
      who: "Educational Institutions, Certification Bodies",
      slug: "assessments"
    }
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Our Platforms"
        title="Proprietary Software Products"
        description="Robust, industry-specific software platforms engineered to solve distinct operational challenges, ready for rapid deployment and customization."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((prod, i) => (
              <div key={i} className="border border-border rounded-2xl p-8 bg-card hover:border-primary/50 transition-colors group flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-[var(--skydot-orange)]/10 flex items-center justify-center text-[var(--skydot-orange)] mb-6">
                  <Box className="w-6 h-6" />
                </div>
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">{prod.category}</div>
                <h3 className="text-2xl font-bold mb-3">{prod.title}</h3>
                <p className="text-muted-foreground mb-6">{prod.description}</p>
                
                <div className="space-y-4 mb-8 flex-1">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Problem Solved</div>
                    <p className="text-sm text-foreground/80">{prod.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Benefits</div>
                    <p className="text-sm text-foreground/80">{prod.benefits}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Who it's for</div>
                    <p className="text-sm text-foreground/80">{prod.who}</p>
                  </div>
                </div>

                <Link to={`/products/${prod.slug}`} className="inline-flex items-center text-sm font-semibold text-[var(--skydot-orange)] mt-auto">
                  Request a Demo
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
