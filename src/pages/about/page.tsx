import { PageHeader } from "@/components/layout/page-header";
import { ContactCtaSection } from "@/components/sections/contact-cta-section";
import { HoverPreview } from "@/components/ui/hover-preview";




export default function AboutPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Engineering Digital Excellence"
        title={<>About <span className="text-primary">Skydot Infotech</span></>}
        description="Skydot Infotech is a mature technology partner focused on solving complex business challenges through rigorous software engineering and digital innovation."
      />

      <HoverPreview />
      {/* Trigger HMR */}

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="space-y-16">
            
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are & Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in [VERIFY YEAR], Skydot Infotech began with a focus on delivering reliable technology solutions. Over the years, we have grown into a comprehensive engineering firm, partnering with enterprises, government bodies, and educational institutions to modernize their digital infrastructure.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are technologists, but our focus is always on business outcomes. We design, engineer, and deploy custom software, enterprise web applications, and robust ERP systems.
              </p>
            </div>

            {/* What We Do */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Do</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Skydot Infotech specializes in enterprise software development, digital transformation, and modular ERP implementations. We build the digital backbone that organizations rely on to scale operations, manage resources, and deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From intelligent AI automations to highly secure government infrastructure, our engineering capabilities span the entire modern technology stack.
              </p>
            </div>

            {/* How we work */}
            <div>
              <h2 className="text-3xl font-bold mb-6">How We Work</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our methodology is rooted in agility and transparency. We prioritize deep technical discovery to understand your business logic before writing a single line of code, ensuring the final product aligns perfectly with your operational needs.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 bg-secondary/30 p-10 rounded-3xl border border-border">
              <div>
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower organizations with scalable, secure, and intuitive technology solutions that drive operational efficiency and digital growth.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most trusted technology engineering partner for enterprises seeking reliable digital transformation.
                </p>
              </div>
            </div>

            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Our Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="border border-border p-6 rounded-2xl bg-card">
                  <h3 className="text-xl font-bold mb-3">Engineering Rigor</h3>
                  <p className="text-muted-foreground">We believe in clean architecture, scalable code, and uncompromised security.</p>
                </div>
                <div className="border border-border p-6 rounded-2xl bg-card">
                  <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                  <p className="text-muted-foreground">We act as an extension of your team, dedicated to your long-term success.</p>
                </div>
                <div className="border border-border p-6 rounded-2xl bg-card">
                  <h3 className="text-xl font-bold mb-3">Practical Innovation</h3>
                  <p className="text-muted-foreground">We deploy technology not for the hype, but to solve real business problems.</p>
                </div>
              </div>
            </div>

            {/* Additional Sections */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Skydot?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We bridge the gap between deep technical expertise and business acumen. Our clients choose us because we don't just write code; we take ownership of the technical strategy and deliver predictable, enterprise-grade results.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Our Technology Approach</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We are stack-agnostic but highly opinionated on architecture. We leverage modern, proven technologies (like React, Next.js, Node, and Python) combined with robust cloud infrastructure to ensure high availability, security, and performance. Every system we build is designed with scale in mind.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Long-term Partnership</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Technology is not a one-time project; it's a continuous evolution. We engage in long-term partnerships, providing ongoing support, performance monitoring, and iterative feature development to ensure your software continues to serve your business year after year.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ContactCtaSection />
    </>
  );
}
