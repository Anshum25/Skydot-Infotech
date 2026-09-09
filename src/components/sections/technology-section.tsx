import { motion } from "framer-motion";

export function TechnologySection() {
  const categories = [
    {
      name: "Frontend",
      techs: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
    },
    {
      name: "Backend",
      techs: ["Node.js", "Python", "Java", ".NET", "Go", "PHP"],
    },
    {
      name: "Mobile",
      techs: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"],
    },
    {
      name: "Database",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch"],
    },
    {
      name: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      name: "AI & ERP",
      techs: ["OpenAI", "PyTorch", "TensorFlow", "ERPNext", "Odoo", "SAP"],
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4"
          >
            Technology Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            We utilize modern, scalable technologies to build secure and high-performance enterprise applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 border-b border-border pb-2">
                {category.name}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {category.techs.map((tech, j) => (
                  <li key={j} className="px-3 py-1.5 bg-muted border border-border rounded-md text-sm text-foreground font-medium">
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
