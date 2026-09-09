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
    title: "IRTPMS",
    slug: "irtpms",
    category: "Government / Railway",
    description: "Indian Railways Track Parameter Monitoring System. A specialized solution for the railway sector to monitor and manage track health and safety parameters.",
    features: ["Track monitoring", "Safety alerts", "Data logging", "Reporting dashboard"],
    screenshots: [],
    industries: ["Railways", "Government"],
    technologies: ["Java", "SQL Server"],
    verified: true
  },
  {
    title: "IRIMEE",
    slug: "irimee",
    category: "Education",
    description: "Indian Railways Institute of Mechanical and Electrical Engineering portal and management system.",
    features: ["Student portal", "Course management", "Resource sharing"],
    screenshots: [],
    industries: ["Railways", "Education"],
    technologies: ["PHP", "MySQL"],
    verified: true
  },
  {
    title: "IRISET",
    slug: "iriset",
    category: "Education",
    description: "Indian Railways Institute of Signal Engineering and Telecommunications management software.",
    features: ["Training management", "Certification tracking", "Exam module"],
    screenshots: [],
    industries: ["Railways", "Education"],
    technologies: [".NET", "SQL Server"],
    verified: true
  },
  {
    title: "LMS",
    slug: "lms",
    category: "Education",
    description: "A comprehensive Learning Management System designed for educational institutions to manage courses, students, and assessments online.",
    features: ["Online classes", "Assignment tracking", "Gradebook", "Student dashboard"],
    screenshots: [],
    industries: ["Education", "Corporate Training"],
    technologies: ["React", "Node.js", "MongoDB"],
    verified: true
  },
  {
    title: "Skydot ERP",
    slug: "erp",
    category: "Enterprise",
    description: "Full-scale Enterprise Resource Planning software tailored for diverse business needs including HR, Finance, and Supply Chain.",
    features: ["HRMS", "Inventory management", "Financial accounting", "CRM"],
    screenshots: [],
    industries: ["Manufacturing", "Retail", "Enterprises"],
    technologies: ["Next.js", "PostgreSQL", "Prisma"],
    verified: true
  },
  {
    title: "Gujpe",
    slug: "gujpe",
    category: "Business",
    description: "Digital payment and transaction management platform for local businesses.",
    features: ["Payment gateway integration", "Transaction history", "Wallet system"],
    screenshots: [],
    industries: ["Retail", "SMEs"],
    technologies: ["React Native", "Node.js"],
    verified: true
  },
  {
    title: "TPMIS",
    slug: "tpmis",
    category: "Industry Solutions",
    description: "Total Productive Maintenance Information System for manufacturing units to track equipment efficiency.",
    features: ["OEE tracking", "Maintenance scheduling", "Downtime analysis"],
    screenshots: [],
    industries: ["Manufacturing"],
    technologies: ["Python", "Django", "Vue.js"],
    verified: true
  },
  {
    title: "Accounting Software",
    slug: "accounting-software",
    category: "Business",
    description: "Easy-to-use accounting software for small to medium enterprises with GST compliance.",
    features: ["Invoicing", "GST Returns", "Ledger management", "Financial reports"],
    screenshots: [],
    industries: ["SMEs", "Professional Services"],
    technologies: ["React", "Express", "MySQL"],
    verified: true
  },
  {
    title: "Real Estate Portal",
    slug: "real-estate-portal",
    category: "Business",
    description: "A dynamic property listing and management portal for real estate agencies and independent brokers.",
    features: ["Property listings", "Advanced search filters", "Lead management", "Agent profiles"],
    screenshots: [],
    industries: ["Real Estate"],
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
    verified: true
  }
];
