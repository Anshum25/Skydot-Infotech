import { PageHeader } from "@/components/layout/page-header";
import { buttonVariants } from "@/components/ui/button";
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Join Skydot</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Engineering Culture</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We foster a culture of technical excellence and continuous learning. We value clean code, collaborative problem solving, and proactive communication. Here, your work directly impacts how organizations operate. We avoid bureaucratic overhead and focus on shipping reliable, secure, and scalable solutions.
                </p>
              </div>

              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Learning & Mentorship</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Work alongside senior engineers and technologists. We provide dedicated time for learning new frameworks, exploring emerging cloud architectures, and mastering AI integration. Your technical growth is a priority, not an afterthought.
                </p>
              </div>

              <div className="bg-secondary/30 p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-4">Growth & Progression</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We offer clear pathways for career advancement based on technical merit, leadership, and project execution. Whether you want to become a deep technical specialist or transition into engineering management, we provide the opportunities to get you there.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border rounded-3xl p-8 md:p-12 bg-secondary/20">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 gap-4">
              {positions.map((pos, i) => (
                <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <pos.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{pos.title}</h3>
                      <p className="text-muted-foreground text-sm">{pos.location}</p>
                    </div>
                  </div>
                  <Link to="#apply" className={buttonVariants({ variant: "outline", className: "rounded-full" })}>
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Don't see a role that fits? We are always looking for great talent.</p>
              <Link to="mailto:[VERIFY EMAIL]" className="text-primary font-medium hover:underline">
                Send us your resume
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
