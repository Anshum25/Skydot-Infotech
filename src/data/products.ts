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
  externalUrl?: string;
}

export const products: Product[] = [
  {
    title: "SKYDOTERP",
    slug: "sky-erp",
    category: "Enterprise",
    description: "An integrated enterprise platform powered by ERPNext for managing operations across finance, HR, manufacturing, and more.",
    features: ["Accounting & Finance", "HR & Payroll", "Manufacturing", "Inventory Management", "CRM"],
    screenshots: [],
    industries: ["Manufacturing", "Retail & E-commerce", "Healthcare", "Education", "Distribution"],
    technologies: ["Frappe", "Python", "MariaDB", "Redis"],
    verified: true,
    externalUrl: "https://skyerpnext.in"
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
    category: "Training Management",
    description: "An integrated digital platform designed to manage and streamline the complete training lifecycle of an institute.",
    features: ["Training Planning", "Course Management", "Assessments & Reports"],
    screenshots: [],
    industries: ["Education", "Corporate Training"],
    technologies: ["Node.js", "PostgreSQL", "React"],
    verified: true
  },
  {
    title: "LMS - Moodle",
    slug: "lms-moodle",
    category: "Education",
    description: "A comprehensive Learning Management System powered by customized Moodle deployment for scalable and highly interactive e-learning platforms.",
    features: ["Online classes", "Assignment tracking", "Custom themes", "Plugin integration"],
    screenshots: [],
    industries: ["Education", "Corporate Training", "Institutions"],
    technologies: ["PHP", "MariaDB", "Linux", "React"],
    verified: true,
    externalUrl: "https://skylms.in"
  },
  {
    title: "Course Management System (CMS)",
    slug: "cms",
    category: "Education Technology",
    description: "One system for every course, batch and trainee. Plan batches, track attendance, manage faculty and publish results from one dashboard.",
    features: ["Batches", "Trainees", "Attendance", "Faculty", "Results"],
    screenshots: [],
    industries: ["Education", "Corporate Training"],
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
