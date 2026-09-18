export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; description: string }[];
  technologies: string[];
  imageUrl: string;
}

export const caseStudies: Record<string, CaseStudy> = {
  "national-railway-infrastructure": {
    title: "Digitizing National Railway Infrastructure Tracking",
    slug: "national-railway-infrastructure",
    client: "Indian Railways",
    industry: "Government & Railways",
    summary: "A comprehensive digital transformation of track patrolling, replacing manual logs with a real-time GPS-enabled tracking system.",
    challenge: "Managing thousands of kilometers of track requires rigorous daily inspections. The legacy paper-based system resulted in delayed reporting, lack of accountability, and vulnerability to human error.",
    solution: "Skydot engineered the IRTPMS platform, equipping patrolmen with a secure mobile application featuring offline sync capabilities. The system aggregates GPS data and patrol logs into a central dashboard for regional managers, automating compliance reporting.",
    results: [
      { metric: "100%", description: "Digitization of daily patrol logs." },
      { metric: "Real-time", description: "Visibility into asset compliance across regions." }
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "GPS/Geo-fencing"],
    imageUrl: "/placeholder.svg"
  },
  "enterprise-erp-manufacturing": {
    title: "Unifying Operations for Large-Scale Manufacturing",
    slug: "enterprise-erp-manufacturing",
    client: "Leading Manufacturing Firm",
    industry: "Manufacturing",
    summary: "Deployment of a modular ERP system connecting the shop floor to the finance department.",
    challenge: "The client was operating on fragmented legacy systems. Inventory data rarely matched financial records, leading to costly production delays and procurement inefficiencies.",
    solution: "We designed a bespoke ERP architecture tailored to their specific manufacturing workflows. The solution integrated procurement, inventory, production scheduling, and finance into a single source of truth.",
    results: [
      { metric: "40%", description: "Reduction in procurement discrepancies." },
      { metric: "3 Weeks", description: "Saved annually on financial reconciliation." }
    ],
    technologies: ["Java Spring Boot", "Angular", "Oracle DB"],
    imageUrl: "/placeholder.svg"
  },
  "ai-inventory-optimization": {
    title: "Predictive AI for Inventory Optimization",
    slug: "ai-inventory-optimization",
    client: "Global Retail Chain",
    industry: "Retail & E-commerce",
    summary: "Implemented a machine learning model to predict localized demand and optimize warehouse stock levels.",
    challenge: "The client faced millions in lost revenue due to localized stockouts of high-demand items, while simultaneously overstocking low-demand goods.",
    solution: "We deployed a custom predictive AI model that analyzes historical sales, seasonal trends, and local events to automate inventory restocking decisions.",
    results: [
      { metric: "22%", description: "Increase in local stock availability." },
      { metric: "$1.4M", description: "Saved in reduced holding costs." }
    ],
    technologies: ["Python", "TensorFlow", "AWS SageMaker", "React"],
    imageUrl: "/placeholder.svg"
  },
  "fintech-mobile-banking": {
    title: "Next-Generation Mobile Banking Experience",
    slug: "fintech-mobile-banking",
    client: "Regional Bank",
    industry: "Financial Services",
    summary: "Redesigned and rebuilt a legacy banking application into a modern, secure, and highly responsive mobile experience.",
    challenge: "A disjointed user experience and slow load times were causing a drop in mobile engagement and an increase in customer support tickets.",
    solution: "We completely overhauled the mobile architecture, introducing a microservices backend and a sleek React Native frontend with biometric security.",
    results: [
      { metric: "4.8", description: "App Store rating increase (from 3.1)." },
      { metric: "60%", description: "Reduction in app-related support tickets." }
    ],
    technologies: ["React Native", "Go", "Docker", "Kubernetes"],
    imageUrl: "/placeholder.svg"
  }
};

export function getCaseStudy(slug: string): CaseStudy | null {
  return caseStudies[slug] || null;
}

export function getAllCaseStudies(): CaseStudy[] {
  return Object.values(caseStudies);
}
