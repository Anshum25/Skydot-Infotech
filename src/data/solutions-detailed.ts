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
    overview: "We deploy production-ready AI solutions designed to solve real business challenges. From intelligent routing systems to retrieval-augmented generation (RAG) over proprietary data, our AI & Automation practice focuses on measurable ROI and secure integration with your existing enterprise architecture. We also specialize in conversational AI, deploying next-generation Voice and Video Agents that redefine customer engagement and automate complex support workflows.",
    capabilities: [
      { title: "Voice & Video Agents", description: "Deploy highly realistic, interactive AI avatars and voice agents for automated customer support, onboarding, and virtual assistance." },
      { title: "RAG Systems", description: "Securely leverage Large Language Models against your own proprietary business data." },
      { title: "Document Intelligence", description: "Automate data extraction from invoices, contracts, and unstructured forms." },
      { title: "AI Chatbots", description: "Context-aware conversational agents for support and internal knowledge retrieval." }
    ],
    benefits: [
      { title: "Hyper-Personalized Engagement", description: "Video and voice agents provide a human-like touch, increasing customer satisfaction while lowering support costs." },
      { title: "Operational Efficiency", description: "Reduce manual processing time by automating repetitive data entry and routing tasks." },
      { title: "Data Security", description: "On-premise or private-cloud AI deployments ensuring your data never trains public models." }
    ],
    process: [
      { step: "Data Audit", description: "Evaluating your existing data structures and readiness for AI integration." },
      { step: "Proof of Concept", description: "Developing a contained prototype to validate ROI and accuracy." },
      { step: "Enterprise Deployment", description: "Scaling the solution securely across your organization." }
    ],
    technologies: ["Python", "TensorFlow", "LangChain", "OpenAI", "Vector Databases", "WebRTC", "TTS/STT Models"],
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
  },
  "cloud-infrastructure": {
    title: "Cloud & Infrastructure",
    description: "Robust cloud hosting, email solutions, and domain management tailored for your business.",
    overview: "We offer end-to-end cloud and infrastructure management, ensuring high availability, security, and performance. Whether you need reliable web hosting, professional email solutions, or domain procurement, our infrastructure services provide a solid foundation for your digital operations.",
    capabilities: [
      { title: "Gsuite & Workspace", description: "Setup, migration, and management of Google Workspace for enterprise-grade email and collaboration." },
      { title: "cPanel Web Mail", description: "Cost-effective, reliable business email hosting with easy-to-use cPanel management." },
      { title: "Domain Management", description: "Complete lifecycle management including domain procurement, DNS configuration, and automated renewals." }
    ],
    benefits: [
      { title: "Reliability", description: "Ensure maximum uptime with our secure hosting environments." },
      { title: "Brand Professionalism", description: "Custom business email addresses build trust with your clients." }
    ],
    process: [
      { step: "Needs Assessment", description: "Evaluating your current infrastructure and email requirements." },
      { step: "Migration & Setup", description: "Seamlessly transferring domains and emails with zero downtime." },
      { step: "Ongoing Support", description: "Continuous monitoring and proactive renewal management." }
    ],
    technologies: ["Gsuite", "cPanel", "AWS", "DNS", "Linux"],
    faqs: [
      { question: "Do you handle domain transfers?", answer: "Yes, we manage the entire domain transfer process to ensure zero disruption." },
      { question: "Can you migrate our existing emails to Gsuite?", answer: "Absolutely. We specialize in zero-data-loss email migrations to Google Workspace." }
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
    overview: `Skydot Infotech delivers comprehensive ${formattedTitle} capabilities engineered to meet the demands of modern enterprise environments.`,
    capabilities: [
      { title: "Strategic Implementation", description: "End-to-end execution aligned strictly with your operational objectives." },
      { title: "Scalable Architecture", description: "Solutions designed to grow dynamically with your business demands." }
    ],
    benefits: [
      { title: "Operational Excellence", description: "Streamlines processes to reduce overhead and improve output." },
      { title: "Future-Proofing", description: "Built on modern stacks to ensure long-term viability and security." }
    ],
    process: [
      { step: "Discovery", description: "Comprehensive analysis of existing systems and requirement gathering." },
      { step: "Implementation", description: "Agile deployment with rigorous testing and quality assurance." }
    ],
    technologies: ["Enterprise Frameworks", "Cloud Infrastructure"],
    faqs: [
      { question: "How is this customized for our business?", answer: "Every implementation begins with a deep architectural audit to ensure our solutions map perfectly to your unique workflows." }
    ]
  };
}
