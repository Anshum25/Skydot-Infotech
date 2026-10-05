export interface Product {
  title: string;
  slug: string;
  category: string;
  description: string;
  features: string[];
  screenshots: string[];
  industries: string[];
  technologies: string[];
  verified: boolean;
}

export const products: Product[] = [
  {
    title: "Sky ERP",
    slug: "sky-erp",
    category: "Enterprise",
    description: "An integrated enterprise platform powered by ERPNext for managing operations across finance, HR, manufacturing, and more.",
    features: ["Accounting & Finance", "HR & Payroll", "Manufacturing", "Inventory Management", "CRM"],
    screenshots: [],
    industries: ["Manufacturing", "Retail & E-commerce", "Healthcare", "Education", "Distribution"],
    technologies: ["Frappe", "Python", "MariaDB", "Redis"],
    verified: true
  },
  {
    title: "Frappe Custom Apps",
    slug: "frappe-apps",
    category: "Enterprise",
    description: "Custom-built applications on the Frappe framework, tailored precisely to your unique business workflows.",
    features: ["Rapid Development", "Seamless ERP Integration", "Open Source", "Custom Workflows"],
    screenshots: [],
    industries: ["Enterprise", "Logistics", "IT Sector", "Agriculture"],
    technologies: ["Frappe", "Python", "MariaDB"],
    verified: true
  },
  {
    title: "ITMS",
    slug: "itms",
    category: "Management",
    description: "Integrated Transport Management System for intelligent traffic and transportation routing.",
    features: ["Real-time tracking", "Route optimization", "Analytics dashboard"],
    screenshots: [],
    industries: ["Transportation", "Government"],
    technologies: ["Node.js", "PostgreSQL", "React"],
    verified: true
  },
  {
    title: "LMS",
    slug: "lms",
    category: "Education",
    description: "A comprehensive Learning Management System designed for educational institutions to manage courses and students.",
    features: ["Online classes", "Assignment tracking", "Gradebook"],
    screenshots: [],
    industries: ["Education", "Corporate Training"],
    technologies: ["React", "Node.js", "MongoDB"],
    verified: true
  },
  {
    title: "CMS",
    slug: "cms",
    category: "Enterprise",
    description: "Content Management System tailored for large-scale enterprise content delivery.",
    features: ["Role-based access", "Media management", "Workflow approvals"],
    screenshots: [],
    industries: ["Media", "Enterprise"],
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    verified: true
  },
  {
    title: "POS (Point of Sale)",
    slug: "pos",
    category: "Retail",
    description: "Advanced Point of Sale system integrating inventory, billing, and customer management.",
    features: ["Inventory tracking", "Billing & Invoicing", "Sales analytics"],
    screenshots: [],
    industries: ["Retail", "Hospitality"],
    technologies: ["React Native", "Node.js", "MySQL"],
    verified: true
  },
  {
    title: "MOODLE",
    slug: "moodle",
    category: "Education",
    description: "Customized Moodle deployment for scalable and highly interactive e-learning platforms.",
    features: ["Custom themes", "Plugin integration", "Scalable hosting"],
    screenshots: [],
    industries: ["Education", "Institutions"],
    technologies: ["PHP", "MariaDB", "Linux"],
    verified: true
  },
  {
    title: "MCX APIs",
    slug: "mcx-apis",
    category: "Finance",
    description: "High-performance APIs for integrating MCX commodity trading and market data.",
    features: ["Real-time data", "Low latency", "Secure endpoints"],
    screenshots: [],
    industries: ["Finance", "Trading"],
    technologies: ["Python", "FastAPI", "Redis"],
    verified: true
  }
];
