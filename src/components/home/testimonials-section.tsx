import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

export function HomeTestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--skydot-blue)] animate-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted-foreground">
            Client Stories
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-foreground max-w-3xl mx-auto text-balance">
          Trusted by <span className="font-semibold">visionaries</span> and <span className="font-semibold">builders</span>.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from the leaders who have transformed their businesses with our technology and expertise.
        </p>
      </div>
      
      <div className="w-full flex justify-center">
        <div className="w-full max-w-6xl">
          <StaggerTestimonials />
        </div>
      </div>
    </section>
  );
}
