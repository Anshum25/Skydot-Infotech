import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function InsightsSection() {
  const insights = [
    {
      title: "The Future of ERP in Manufacturing",
      category: "Digital Transformation",
      date: "Oct 12, 2026",
      excerpt: "How modern cloud ERP systems are breaking down data silos and enabling real-time supply chain visibility.",
      slug: "future-of-erp-manufacturing",
      image: "https://images.unsplash.com/photo-1565439390118-bfa1af5b263b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Securing Government Infrastructure",
      category: "Security",
      date: "Sep 28, 2026",
      excerpt: "Best practices for implementing role-based access control (RBAC) in large-scale public sector applications.",
      slug: "securing-government-infrastructure",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Applying RAG in Enterprise Contexts",
      category: "AI & Automation",
      date: "Sep 15, 2026",
      excerpt: "A technical deep dive into Retrieval-Augmented Generation for proprietary business data.",
      slug: "applying-rag-enterprise-contexts",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-background relative border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="inline-flex items-center rounded-full border border-border bg-background shadow-sm px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
                Insights & Engineering Blog
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                Latest perspectives <br className="hidden md:block"/> on enterprise technology.
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.1}>
            <Link to="/insights" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post, i) => (
            <ScrollReveal key={i} delay={0.2 + (i * 0.1)} className="group cursor-pointer flex flex-col h-full">
              <Link to={`/insights/${post.slug}`} className="flex flex-col h-full">
                <div className="w-full aspect-[16/9] rounded-2xl mb-6 overflow-hidden border border-border relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300" />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
                  <span className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">{post.excerpt}</p>
                <div className="inline-flex items-center text-sm font-semibold text-primary mt-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
