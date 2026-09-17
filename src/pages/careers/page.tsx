import { PageHeader } from "@/components/layout/page-header";
import { HomeFinalCtaSection } from "@/components/home/final-cta";
import { ArrowRight, Code, Laptop, Database, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareersPage() {
  const positions = [
    { title: "Senior Full-Stack Engineer", icon: Code, location: "[VERIFY CONTENT]" },
    { title: "Mobile Application Developer", icon: Laptop, location: "[VERIFY CONTENT]" },
    { title: "ERP Implementation Specialist", icon: Database, location: "[VERIFY CONTENT]" },
    { title: "Digital Marketing Executive", icon: LineChart, location: "[VERIFY CONTENT]" },
  ];

  return (
    <>
      <PageHeader 
        eyebrow="Join Our Team"
        title="Build Technology That Matters"
        description="Join a team of dedicated engineers and digital specialists solving complex problems for diverse industries. At Skydot Infotech, you will work on challenging projects, learn modern technology stacks, and grow your career in a supportive environment."
      />

      <section className="home-section relative py-24 md:py-32 bg-background border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="mb-16 md:mb-20 max-w-4xl">
            <p className="home-label mb-5 text-[var(--skydot-blue)]">Our Culture</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light tracking-tight text-balance">
              Why Join Skydot
            </h2>
          </div>
            
          <div className="grid md:grid-cols-3 gap-px bg-border mb-32">
            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <h3 className="text-lg font-semibold tracking-tight mb-3">Engineering Culture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We foster a culture of technical excellence and continuous learning. We value clean code, collaborative problem solving, and proactive communication. Here, your work directly impacts how organizations operate. We avoid bureaucratic overhead and focus on shipping reliable, secure, and scalable solutions.
              </p>
            </div>

            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <h3 className="text-lg font-semibold tracking-tight mb-3">Learning & Mentorship</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Work alongside senior engineers and technologists. We provide dedicated time for learning new frameworks, exploring emerging cloud architectures, and mastering AI integration. Your technical growth is a priority, not an afterthought.
              </p>
            </div>

            <div className="bg-background p-7 md:p-9 flex flex-col hover:bg-secondary/40 transition-colors duration-300">
              <h3 className="text-lg font-semibold tracking-tight mb-3">Growth & Progression</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer clear pathways for career advancement based on technical merit, leadership, and project execution. Whether you want to become a deep technical specialist or transition into engineering management, we provide the opportunities to get you there.
              </p>
            </div>
          </div>

          <div className="mb-16 md:mb-20 max-w-4xl">
            <p className="home-label mb-5 text-[var(--skydot-orange)]">Careers</p>
            <h2 className="home-headline text-3xl md:text-5xl font-light tracking-tight text-balance">
              Open Positions
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-px bg-border">
            {positions.map((pos, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-7 md:p-9 bg-background hover:bg-secondary/40 transition-colors duration-300">
                <div className="flex items-center gap-6 mb-6 md:mb-0">
                  <div className="w-10 h-10 flex items-center justify-center text-[var(--skydot-orange)] shrink-0">
                    <pos.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">{pos.title}</h3>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider">{pos.location}</p>
                  </div>
                </div>
                <Link to="#apply" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-blue)] uppercase tracking-widest group">
                  Apply Now
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 border-t border-border pt-12 flex flex-col items-center text-center">
            <p className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Don't see a role that fits? We are always looking for great talent.</p>
            <Link to="mailto:[VERIFY EMAIL]" className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[var(--skydot-orange)] uppercase tracking-widest group">
              Send us your resume <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      <HomeFinalCtaSection />
    </>
  );
}
