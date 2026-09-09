import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { Bot, Code2, Smartphone, Database, Users, Cloud, LineChart, Search, Layout, Globe, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";




export default function SolutionsPage() {
  const solutions = [
    {
      title: "AI & Automation",
      description: "Practical artificial intelligence for business workflows. We integrate applied AI and automation technologies to eliminate manual processes.",
      icon: Bot,
      slug: "ai-automation"
    },
    {
      title: "Web Development",
      description: "Scalable web applications and platforms. We engineer secure, high-performance web applications tailored to your specific business requirements.",
      icon: Code2,
      slug: "web-development"
    },
    {
      title: "Software Development",
      description: "Purpose-built software engineering. From legacy system modernization to new product development.",
      icon: Layout,
      slug: "software-development"
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile engineering. Intuitive, high-performance applications for iOS and Android.",
      icon: Smartphone,
      slug: "mobile-development"
    },
    {
      title: "ERP",
      description: "Comprehensive Enterprise Resource Planning. Centralize your data and operations with our modular ERP solutions.",
      icon: Database,
      slug: "erp-solutions"
    },
    {
      title: "HR Management",
      description: "Streamlined workforce administration. Digital platforms to manage the complete employee lifecycle.",
      icon: Users,
      slug: "hr-management"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Secure, scalable hosting and deployment. Architect and manage robust cloud infrastructure.",
      icon: Cloud,
      slug: "cloud-infrastructure"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven digital growth strategies. Targeted campaigns to increase brand visibility and generate leads.",
      icon: LineChart,
      slug: "digital-marketing"
    },
    {
      title: "SEO",
      description: "Technical search engine optimization to improve organic discoverability and brand authority.",
      icon: Search,
      slug: "seo"
    },
    {
      title: "CMS",
      description: "Custom Content Management Systems. Empower your team to manage digital content effortlessly.",
      icon: Layout,
      slug: "cms"
    },
    {
      title: "Domain & Hosting",
      description: "Reliable domain management and web hosting with guaranteed uptime and enhanced security.",
      icon: Globe,
      slug: "domain-hosting"
    },
    {
      title: "Business Email",
      description: "Professional, secure corporate communication with advanced security and spam protection.",
      icon: Mail,
      slug: "business-email"
    },
    {
      title: "Bulk SMS",
      description: "Reliable SMS communication gateways for transactional alerts and critical business notifications.",
      icon: MessageSquare,
      slug: "bulk-sms"
    }
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Our Services"
        title="Enterprise Technology Solutions"
        description="End-to-end engineering and digital services designed to modernize operations, scale infrastructure, and drive business efficiency."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <div key={i} className="border border-border rounded-2xl p-8 bg-card hover:border-primary/50 transition-colors group flex flex-col h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <sol.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1">{sol.description}</p>
                <Link to={`/solutions/${sol.slug}`} className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                  Explore {sol.title}
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
