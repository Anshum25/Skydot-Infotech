import { motion } from "framer-motion";

interface PageHeaderProps {
  title: React.ReactNode;
  description?: string;
  eyebrow?: string;
}

export function PageHeader({ title, description, eyebrow }: PageHeaderProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center text-foreground overflow-hidden border-b border-border">
      <HeroBg />
      
      <div className="container relative z-10 mx-auto px-6 md:px-12 pt-40 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {eyebrow && (
            <div className="mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted-foreground">
                <span className="w-4 h-px bg-[var(--skydot-orange)]" />
                {eyebrow}
              </span>
            </div>
          )}
          
          <h1 className="home-headline text-[clamp(2.4rem,5.5vw,5.2rem)] font-light tracking-tight mb-5 md:mb-6 text-balance">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-normal">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── 3D Grid Background ─────────────────────────── */
function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-background z-[-1]" aria-hidden>
      <div
        className="absolute inset-0 flex flex-col text-foreground opacity-[0.12] dark:opacity-[0.2]"
        style={{
          maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 80%)'
        }}
      >
        {/* Ceiling */}
        <div
          className="w-[400%] h-[50%] absolute top-0 left-[-150%] origin-bottom"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(400px) rotateX(-75deg)',
          }}
        />
        {/* Floor */}
        <div
          className="w-[400%] h-[50%] absolute bottom-0 left-[-150%] origin-top"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            transform: 'perspective(400px) rotateX(75deg)',
          }}
        />
      </div>
    </div>
  );
}
