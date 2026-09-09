export interface SolutionDetailData {
  title: string;
  description: string;
  overview: string;
  capabilities: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  process: { step: string; description: string }[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
}

export const detailedSolutions: Record<string, SolutionDetailData> = {
  "ai-automation": {
    title: "AI & Automation",
    description: "Practical artificial intelligence and automation services to streamline business workflows, improve data processing, and integrate intelligent capabilities.",
    overview: "We deploy production-ready AI solutions designed to solve real business challenges. From intelligent routing systems to retrieval-augmented generation (RAG) over proprietary data, our AI & Automation practice focuses on measurable ROI and secure integration with your existing enterprise architecture.",
    capabilities: [
      { title: "RAG Systems", description: "Securely leverage Large Language Models against your own proprietary business data." },
      { title: "Document Intelligence", description: "Automate data extraction from invoices, contracts, and unstructured forms." },
      { title: "AI Chatbots", description: "Context-aware conversational agents for support and internal knowledge retrieval." }
    ],
    benefits: [
      { title: "Operational Efficiency", description: "Reduce manual processing time by automating repetitive data entry and routing tasks." },
      { title: "Data Security", description: "On-premise or private-cloud AI deployments ensuring your data never trains public models." }
    ],
    process: [
      { step: "Data Audit", description: "Evaluating your existing data structures and readiness for AI integration." },
      { step: "Proof of Concept", description: "Developing a contained prototype to validate ROI and accuracy." },
      { step: "Enterprise Deployment", description: "Scaling the solution securely across your organization." }
    ],
    technologies: ["Python", "TensorFlow", "LangChain", "OpenAI", "Vector Databases"],
    faqs: [
      { question: "Is our data used to train public models?", answer: "No. We implement secure architectures (like Azure OpenAI or local LLMs) that guarantee your data remains private." },
      { question: "How long does a typical AI integration take?", answer: "A PoC typically takes 4-6 weeks, with full production deployment following in 2-3 months." }
    ]
  },
  "web-development": {
    title: "Web Development",
    description: "Scalable, high-performance web applications engineered for the enterprise.",
    overview: "Our web development practice focuses on building robust architectures that scale. We don't just build websites; we engineer complex, secure, and highly interactive web applications that serve as the digital foundation of your business.",
    capabilities: [
      { title: "Custom Web Applications", description: "Bespoke systems designed for complex business logic and high concurrent user loads." },
      { title: "Progressive Web Apps (PWA)", description: "Web applications that deliver native-like experiences with offline capabilities." },
      { title: "API Integration", description: "Seamless connection of your web platform with existing ERPs, CRMs, and third-party services." }
    ],
    benefits: [
      { title: "Scalability", description: "Architectures designed to handle growing traffic and data volumes seamlessly." },
      { title: "Performance", description: "Optimized load times and fluid interactions that improve user retention and SEO." }
    ],
    process: [
      { step: "Architecture Design", description: "Selecting the right tech stack and defining the database schema." },
      { step: "Development & Testing", description: "Agile sprints with continuous integration and automated testing." },
      { step: "Deployment & Monitoring", description: "Smooth transition to production with real-time performance monitoring." }
    ],
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "AWS"],
    faqs: [
      { question: "Do you provide ongoing support?", answer: "Yes, we offer long-term maintenance and SLA-backed support contracts." }
    ]
  },
  "erp-solutions": {
    title: "ERP Solutions",
    description: "Modular Enterprise Resource Planning systems to centralize and streamline your operations.",
    overview: "We design and implement modular ERP systems that eliminate data silos. By connecting finance, inventory, HR, and sales into a single source of truth, we give management real-time visibility and control over the entire organization.",
    capabilities: [
      { title: "Finance & Accounting", description: "General ledger, automated reporting, and accounts management." },
      { title: "Inventory & Warehouse", description: "Real-time tracking, multi-location support, and automated reordering." },
      { title: "HR Management", description: "Integrated payroll, attendance, and employee lifecycle tracking." }
    ],
    benefits: [
      { title: "Unified Data", description: "Eliminate discrepancies between departments with a centralized database." },
      { title: "Process Automation", description: "Reduce manual data transfer and automate approvals across departments." }
    ],
    process: [
      { step: "Requirements Gathering", description: "Deep dive into your current workflows and pain points." },
      { step: "Customization & Integration", description: "Tailoring the ERP modules to your specific business logic." },
      { step: "Training & Rollout", description: "Change management, employee training, and phased deployment." }
    ],
    technologies: ["Java", "Spring Boot", "SQL Server", "React"],
    faqs: [
      { question: "Can the ERP integrate with our legacy systems?", answer: "Yes, we build secure API bridges to ensure smooth data flow from legacy infrastructure." }
    ]
  }
};

// Generic fallback generator for the remaining services to ensure the dynamic route never breaks.
export function getSolutionData(slug: string): SolutionDetailData {
  if (detailedSolutions[slug]) {
    return detailedSolutions[slug];
  }

  // Fallback for missing 10 categories
  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: formattedTitle,
    description: `Enterprise-grade ${formattedTitle} services designed to modernize your operations.`,
    overview: `[VERIFY CONTENT] Detailed overview of Skydot Infotech's ${formattedTitle} capabilities goes here.`,
    capabilities: [
      { title: "[VERIFY CONTENT] Core Capability 1", description: "Description of this capability and how it functions." },
      { title: "[VERIFY CONTENT] Core Capability 2", description: "Description of this capability and how it functions." }
    ],
    benefits: [
      { title: "[VERIFY CONTENT] Business Benefit 1", description: "How this improves the client's bottom line or efficiency." },
      { title: "[VERIFY CONTENT] Business Benefit 2", description: "How this improves the client's bottom line or efficiency." }
    ],
    process: [
      { step: "Discovery", description: "[VERIFY CONTENT] Initial consultation and requirement gathering." },
      { step: "Implementation", description: "[VERIFY CONTENT] Execution of the service." }
    ],
    technologies: ["[VERIFY CONTENT]", "[VERIFY CONTENT]"],
    faqs: [
      { question: "[VERIFY CONTENT] Frequently Asked Question?", answer: "[VERIFY CONTENT] Answer to the question." }
    ]
  };
}
