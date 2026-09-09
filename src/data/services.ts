import { LucideIcon, BrainCircuit, Code, Smartphone, Database, Cloud, LineChart } from "lucide-react";

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
  {
    title: "AI & Automation",
    slug: "ai-automation",
    category: "AI",
    shortDescription: "Custom AI solutions and workflow automation to accelerate your business operations.",
    description: "Transform your business operations with our advanced AI and automation solutions. We build intelligent systems that streamline workflows, enhance decision-making, and reduce operational costs.",
    icon: BrainCircuit,
    features: [
      "AI Chatbots",
      "RAG Systems",
      "AI Assistants",
      "Document Intelligence",
      "Workflow Automation",
      "Predictive Analytics",
      "AI Integration",
      "Custom AI Solutions"
    ],
    industries: ["Enterprise", "Healthcare", "Manufacturing", "Finance"],
    technologies: ["OpenAI", "Python", "TensorFlow", "PyTorch", "LangChain"],
    verified: true,
  },
  {
    title: "Web & Software",
    slug: "web-software-development",
    category: "Development",
    shortDescription: "Scalable web applications and custom enterprise software development.",
    description: "We engineer high-performance web applications and custom software solutions tailored to your unique business requirements. Our scalable architectures ensure long-term reliability and growth.",
    icon: Code,
    features: [
      "Web Development",
      "Custom Software Development",
      "Enterprise Applications",
      "API Development",
      "System Integration",
      "Legacy Modernization"
    ],
    industries: ["Retail", "Education", "Real Estate", "Government"],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    verified: true,
  },
  {
    title: "Mobile Development",
    slug: "mobile-development",
    category: "Development",
    shortDescription: "Native and cross-platform mobile applications for iOS and Android.",
    description: "Engage your users anywhere with premium mobile experiences. We design and develop robust, intuitive mobile applications that drive engagement and business growth.",
    icon: Smartphone,
    features: [
      "Android Applications",
      "iOS Applications",
      "Cross-platform Applications",
      "Mobile Backend Systems",
      "UI/UX Design",
      "App Store Optimization"
    ],
    industries: ["E-Commerce", "Logistics", "Healthcare", "Education"],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
    verified: true,
  },
  {
    title: "ERP Solutions",
    slug: "erp-enterprise",
    category: "Enterprise",
    shortDescription: "Comprehensive enterprise resource planning and management systems.",
    description: "Unify your business processes with our custom ERP solutions. We build robust systems that integrate HR, accounting, manufacturing, and business management into a single source of truth.",
    icon: Database,
    features: [
      "ERP Solutions",
      "HR Management Systems",
      "Business Management Systems",
      "Accounting Solutions",
      "Manufacturing Solutions",
      "Supply Chain Management"
    ],
    industries: ["Manufacturing", "Government", "Railways", "Retail"],
    technologies: ["Java", "Spring Boot", "SQL Server", "Oracle", "Angular"],
    verified: true,
  },
  {
    title: "Cloud & Infrastructure",
    slug: "cloud-infrastructure",
    category: "Infrastructure",
    shortDescription: "Secure cloud hosting, domain registration, and infrastructure management.",
    description: "Scale your business with reliable cloud infrastructure. We provide comprehensive hosting, domain, and cloud solutions designed for high availability and security.",
    icon: Cloud,
    features: [
      "Cloud Solutions",
      "Web Hosting",
      "Domain Registration",
      "SSL Certificates",
      "Business Email",
      "Microsoft 365"
    ],
    industries: ["SMEs", "Enterprises", "Professional Services"],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    verified: true,
  },
  {
    title: "Digital Growth",
    slug: "digital-growth",
    category: "Marketing",
    shortDescription: "Data-driven SEO, digital marketing, and bulk SMS solutions.",
    description: "Accelerate your digital presence and reach your target audience effectively. Our digital growth strategies combine SEO, content marketing, and direct outreach to maximize ROI.",
    icon: LineChart,
    features: [
      "SEO",
      "Digital Marketing",
      "Content Management",
      "Bulk SMS",
      "Analytics & Reporting",
      "Conversion Optimization"
    ],
    industries: ["E-Commerce", "Real Estate", "Education", "Retail"],
    technologies: ["Google Analytics", "SEMrush", "Meta Ads", "Mailchimp"],
    verified: true,
  }
];
