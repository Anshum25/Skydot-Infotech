import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Factory, GraduationCap, Building2, Train, Truck, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/scroll-reveal";

export function IndustriesSection() {
  const industries = [
    {
      name: "Manufacturing",
      problem: "Fragmented supply chain and production tracking.",
      solution: "Integrated ERP with real-time inventory and production modules.",
      icon: Factory,
    },
    {
      name: "Education",
      problem: "Disconnected student information and remote learning management.",
      solution: "Comprehensive LMS and student information ecosystem.",
      icon: GraduationCap,
    },
    {
      name: "Government",
      problem: "Outdated legacy systems slowing down public service delivery.",
      solution: "Secure, compliant digital transformation and e-governance platforms.",
      icon: Building2,
    },
    {
      name: "Railways",
      problem: "Complex asset monitoring and workforce management at scale.",
      solution: "Custom tracking platforms like IRTPMS and specialized HR systems.",
      icon: Train,
    },
    {
      name: "Logistics",
      problem: "Inefficient fleet routing and delayed shipment tracking.",
      solution: "End-to-end transport management software with GPS integration.",
      icon: Truck,
    },
    {
      name: "Real Estate",
      problem: "Scattered property listings and disconnected lead management.",
      solution: "Centralized property portals and integrated CRM solutions.",
      icon: Home,
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">

        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
                Industry Expertise
              </h2>
              <p className="text-lg text-muted-foreground">
                Tailored technology solutions for highly regulated and complex sectors.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex flex-col border-t border-border">
          {industries.map((industry, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group border-b border-border transition-colors duration-300 ${isHovered ? 'bg-background' : 'hover:bg-background/50'}`}
              >
                <Link to={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="block px-4 md:px-8 py-6 md:py-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

                    <div className="flex items-center gap-6 md:w-1/3">
                      <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 ${isHovered ? 'bg-primary text-primary-foreground border-primary' : 'bg-background border-border text-muted-foreground'}`}>
                        <industry.icon className="w-6 h-6" />
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                        {industry.name}
                      </h3>
                    </div>

                    <div className="md:w-1/2">
                      <AnimatePresence>
                        {isHovered ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="grid sm:grid-cols-2 gap-6 pt-2 md:pt-0 pb-4">
                              <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">The Challenge</div>
                                <p className="text-sm text-foreground/80 leading-relaxed">{industry.problem}</p>
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Our Solution</div>
                                <p className="text-sm font-medium text-foreground leading-relaxed">{industry.solution}</p>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="hidden md:block"
                          >
                            <p className="text-muted-foreground line-clamp-1">{industry.solution}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="hidden md:flex justify-end md:w-1/6">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered ? 'bg-primary text-primary-foreground -rotate-45' : 'bg-muted text-muted-foreground'}`}>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Mobile Arrow */}
                    <div className="md:hidden flex items-center text-sm font-medium text-primary mt-4">
                      Explore {industry.name} <ArrowRight className="ml-2 w-4 h-4" />
                    </div>

                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
