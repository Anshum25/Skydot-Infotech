import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
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

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {solutions.map((sol, i) => (
              <Link key={i} to={`/solutions/${sol.slug}`} className="group flex flex-col p-7 md:p-9 bg-background hover:bg-secondary/40 transition-colors duration-300">
                <div className="w-10 h-10 flex items-center justify-center text-[var(--skydot-blue)] mb-6 group-hover:scale-110 transition-transform">
                  <sol.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground mb-3 group-hover:text-[var(--skydot-blue)] transition-colors">{sol.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{sol.description}</p>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary uppercase tracking-widest mt-auto pt-4 border-t border-border/50">
                  Explore Solution
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
