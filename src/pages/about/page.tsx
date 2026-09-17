import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { HoverPreview } from "@/components/ui/hover-preview";

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        eyebrow="Engineering Digital Excellence"
        title={<>About <span className="text-[var(--skydot-orange)]">Skydot Infotech</span></>}
        description="Skydot Infotech is a mature technology partner focused on solving complex business challenges through rigorous software engineering and digital innovation."
      />

      <HoverPreview />
      {/* Trigger HMR */}

      {/* Story & What We Do */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mb-16 md:mb-20">
            <p className="home-label mb-5">Our Story</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">
              Founded on a commitment to delivering reliable technology solutions.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Over the years, we have grown into a comprehensive engineering firm, partnering with enterprises, government bodies, and educational institutions to modernize their digital infrastructure.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              We are technologists, but our focus is always on business outcomes. We design, engineer, and deploy custom software, enterprise web applications, and robust ERP systems.
            </p>

            <p className="home-label mb-5">What We Do</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light text-balance mb-8">
              Building the digital backbone for modern organizations.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Skydot Infotech specializes in enterprise software development, digital transformation, and modular ERP implementations. We build the digital backbone that organizations rely on to scale operations, manage resources, and deliver exceptional user experiences.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From intelligent AI automations to highly secure government infrastructure, our engineering capabilities span the entire modern technology stack.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            <div className="bg-background p-8 md:p-12 hover:bg-secondary/40 transition-colors duration-300">
              <p className="home-label mb-5 text-[var(--skydot-blue)]">Mission</p>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4 leading-snug">
                To empower organizations with scalable, secure, and intuitive technology solutions that drive operational efficiency and digital growth.
              </h3>
            </div>
            <div className="bg-background p-8 md:p-12 hover:bg-secondary/40 transition-colors duration-300">
              <p className="home-label mb-5 text-[var(--skydot-orange)]">Vision</p>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-4 leading-snug">
                To be the most trusted technology engineering partner for enterprises seeking reliable digital transformation.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-20 max-w-4xl">
            <p className="home-label mb-5">Our Values</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light tracking-tight text-balance">
              The principles that drive our engineering process.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <span className="home-label text-[var(--skydot-blue)] mb-4 block">01</span>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Engineering Rigor</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We believe in clean architecture, scalable code, and uncompromised security.
              </p>
            </div>
            
            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <span className="home-label text-[var(--skydot-orange)] mb-4 block">02</span>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Client Partnership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We act as an extension of your team, dedicated to your long-term success.
              </p>
            </div>

            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <span className="home-label text-green-500 mb-4 block">03</span>
              <h3 className="text-lg font-semibold tracking-tight mb-3">Practical Innovation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We deploy technology not for the hype, but to solve real business problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
