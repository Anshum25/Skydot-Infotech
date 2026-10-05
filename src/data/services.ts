import { LucideIcon, Globe, Code, Smartphone, Cpu, Database, Settings, Layers, Workflow, Users, Globe2, Server, Lock, Mail, Cloud, Search, TrendingUp, Edit, MessageSquare } from "lucide-react";

export interface Service {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  industries: string[];
  technologies: string[];
  verified: boolean;
}

export const services: Service[] = [
  // DIGITAL ENGINEERING
  {
    title: "Web Development",
    slug: "web-development",
    category: "Digital Engineering",
    shortDescription: "Custom website design and highly performant web applications.",
    description: "We engineer high-performance, scalable web applications and corporate websites tailored to your unique business requirements. Our architecture ensures long-term reliability and growth.",
    icon: Globe,
    features: ["Custom Website Design", "Responsive Interfaces", "Progressive Web Apps", "Enterprise Portals"],
    industries: ["Retail", "Education", "Real Estate", "Enterprise"],
    technologies: ["React", "Next.js", "Node.js", "TypeScript"],
    verified: true,
  },
  {
    title: "Software Development",
    slug: "software-development",
    category: "Digital Engineering",
    shortDescription: "Creating custom software for real-world enterprise needs.",
    description: "End-to-end custom software development services that solve complex operational challenges. We build secure, scalable solutions that align perfectly with your business goals.",
    icon: Code,
    features: ["Enterprise Software", "Legacy Modernization", "API Development", "System Integration"],
    industries: ["Manufacturing", "Government", "Finance"],
    technologies: ["Python", "Java", "Node.js", "PostgreSQL"],
    verified: true,
  },
  {
    title: "Mobile Application Development",
    slug: "mobile-development",
    category: "Digital Engineering",
    shortDescription: "Turning ideas into powerful mobile experiences for iOS and Android.",
    description: "Engage your users anywhere with premium mobile experiences. We design robust, intuitive cross-platform and native mobile applications that drive engagement.",
    icon: Smartphone,
    features: ["iOS Apps", "Android Apps", "Cross-Platform", "Mobile Backends"],
    industries: ["E-Commerce", "Healthcare", "Logistics"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    verified: true,
  },
  {
    title: "Custom Application Development",
    slug: "custom-application",
    category: "Digital Engineering",
    shortDescription: "Bespoke applications designed for specialized workflows.",
    description: "We build custom Frappe applications and proprietary web apps from the ground up, designed to perfectly map onto your highly specific business logic.",
    icon: Cpu,
    features: ["Custom Frappe Apps", "Microservices", "Scalable Architectures"],
    industries: ["Enterprise", "Education", "Healthcare"],
    technologies: ["Frappe", "Python", "React", "MariaDB"],
    verified: true,
  },

  // BUSINESS SYSTEMS
  {
    title: "ERP Solutions",
    slug: "erp-solutions",
    category: "Business Systems",
    shortDescription: "Integrating business processes into one smart ERP system.",
    description: "Unify your business operations with comprehensive ERP solutions. We connect finance, inventory, HR, and sales into a single source of truth.",
    icon: Database,
    features: ["Financial Management", "Inventory Control", "Supply Chain", "CRM"],
    industries: ["Manufacturing", "Distribution", "Retail"],
    technologies: ["ERPNext", "Frappe", "Python", "SQL"],
    verified: true,
  },
  {
    title: "ERPNext Implementation",
    slug: "erpnext-implementation",
    category: "Business Systems",
    shortDescription: "End-to-end implementation of the ERPNext framework.",
    description: "From discovery to deployment, we provide full-lifecycle ERPNext implementation. We map your processes, configure modules, migrate data, and train your team.",
    icon: Settings,
    features: ["Requirement Analysis", "Data Migration", "System Configuration", "Training & Support"],
    industries: ["Manufacturing", "Retail", "Services"],
    technologies: ["ERPNext", "Frappe"],
    verified: true,
  },
  {
    title: "Frappe Development",
    slug: "frappe-development",
    category: "Business Systems",
    shortDescription: "Tailored customizations on the open-source Frappe framework.",
    description: "Leverage the power of the Frappe framework. We build custom doctypes, automate workflows, and develop tailored modules that fit your operational realities perfectly.",
    icon: Layers,
    features: ["Custom Modules", "API Integration", "Workflow Automation"],
    industries: ["Enterprise", "Education", "Logistics"],
    technologies: ["Frappe", "Python", "MariaDB"],
    verified: true,
  },
  {
    title: "Business Automation",
    slug: "business-automation",
    category: "Business Systems",
    shortDescription: "Automating repetitive workflows and integrating intelligent systems.",
    description: "Transform manual processes into automated workflows. We connect disparate systems and integrate AI-driven insights to save time and reduce errors.",
    icon: Workflow,
    features: ["Process Automation", "System Integration", "AI Copilots"],
    industries: ["Finance", "Healthcare", "Corporate"],
    technologies: ["Frappe", "Python", "OpenAI"],
    verified: true,
  },
  {
    title: "HR Management",
    slug: "hr-management",
    category: "Business Systems",
    shortDescription: "Managing people, policies, and performance.",
    description: "Streamline your human resources with comprehensive HRMS solutions. Handle payroll, attendance, leave management, and employee self-service efficiently.",
    icon: Users,
    features: ["Payroll Processing", "Attendance Tracking", "Appraisals", "Employee Portal"],
    industries: ["Corporate", "Manufacturing", "IT Sector"],
    technologies: ["Frappe HR", "ERPNext"],
    verified: true,
  },

  // DIGITAL INFRASTRUCTURE
  {
    title: "Domain Registration",
    slug: "domain-registration",
    category: "Digital Infrastructure",
    shortDescription: "Secure domain procurement and lifecycle management.",
    description: "Complete lifecycle management including domain procurement, DNS configuration, and automated renewals to protect your brand identity.",
    icon: Globe2,
    features: ["Domain Procurement", "DNS Management", "Automated Renewals"],
    industries: ["SMEs", "Enterprise", "Startups"],
    technologies: ["DNS", "Registrar APIs"],
    verified: true,
  },

];
