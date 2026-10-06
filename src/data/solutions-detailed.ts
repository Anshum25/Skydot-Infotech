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
    description: "Practical artificial intelligence and automation services to streamline business workflows.",
    overview: "We deploy production-ready AI solutions designed to solve real business challenges. From intelligent routing systems to retrieval-augmented generation (RAG) over proprietary data, our AI & Automation practice focuses on measurable ROI and secure integration.",
    capabilities: [
      { title: "Voice & Video Agents", description: "Deploy highly realistic, interactive AI avatars." },
      { title: "RAG Systems", description: "Securely leverage Large Language Models against your own proprietary business data." },
      { title: "Document Intelligence", description: "Automate data extraction from invoices, contracts, and unstructured forms." }
    ],
    benefits: [
      { title: "Hyper-Personalized Engagement", description: "Video and voice agents provide a human-like touch." },
      { title: "Operational Efficiency", description: "Reduce manual processing time." }
    ],
    process: [
      { step: "Data Audit", description: "Evaluating existing data structures." },
      { step: "Proof of Concept", description: "Developing a prototype to validate ROI." },
      { step: "Enterprise Deployment", description: "Scaling the solution securely." }
    ],
    technologies: ["Sky AI Copilot", "Python", "TensorFlow"],
    faqs: [
      { question: "Is our data used to train public models?", answer: "No. We implement secure architectures that guarantee data privacy." }
    ]
  },
  "erp-solutions": {
    title: "ERP Solutions",
    description: "Modular Enterprise Resource Planning systems to centralize and streamline your operations.",
    overview: "We design and implement modular ERP systems that eliminate data silos. By connecting finance, inventory, HR, and sales into a single source of truth, we give management real-time visibility.",
    capabilities: [
      { title: "Finance & Accounting", description: "General ledger, automated reporting, and accounts management." },
      { title: "Inventory & Warehouse", description: "Real-time tracking, multi-location support, and automated reordering." },
      { title: "HR Management", description: "Integrated payroll, attendance, and employee lifecycle tracking." }
    ],
    benefits: [
      { title: "Unified Data", description: "Eliminate discrepancies between departments." },
      { title: "Process Automation", description: "Reduce manual data transfer and automate approvals." }
    ],
    process: [
      { step: "Requirements Gathering", description: "Deep dive into your current workflows." },
      { step: "Customization & Integration", description: "Tailoring the ERP modules to your logic." },
      { step: "Training & Rollout", description: "Phased deployment and training." }
    ],
    technologies: ["ERPNext", "Frappe", "SKYDOTERP"],
    faqs: [
      { question: "Can the ERP integrate with our legacy systems?", answer: "Yes, we build secure API bridges." }
    ]
  },
  "manufacturing": {
    title: "Manufacturing ERP Solutions",
    description: "End-to-end operations covering BOM, production planning, quality control, and shop floor management.",
    overview: "Manufacturers face equipment downtime, poor supply chain visibility, and inventory chaos. Our ERP solution brings production tracking, quality control, and material planning into a single unified platform.",
    capabilities: [
      { title: "Bill of Materials (BOM)", description: "Manage complex multi-level BOMs seamlessly." },
      { title: "Work Orders & Production", description: "Track manufacturing processes from start to finish." },
      { title: "Quality Control", description: "Ensure compliance with built-in quality checks." },
      { title: "Subcontracting & Scrap", description: "Manage external processing and material waste efficiently." }
    ],
    benefits: [
      { title: "Complete Visibility", description: "Real-time insights into production output and bottlenecks." },
      { title: "Reduced Wastage", description: "Better scrap management and raw material planning." }
    ],
    process: [
      { step: "Process Mapping", description: "Documenting your exact shop floor processes." },
      { step: "Configuration", description: "Setting up BOMs, routing, and workstations." },
      { step: "Deployment", description: "Phased go-live with minimal disruption." }
    ],
    technologies: ["SKYDOTERP", "Frappe Apps"],
    faqs: [
      { question: "Does it support multi-level BOMs?", answer: "Yes, completely integrated and hierarchical." }
    ]
  },
  "distribution": {
    title: "Distribution & Trading Solutions",
    description: "Streamlined multi-branch logistics, inventory tracking, and warehouse operations.",
    overview: "Manage the complexities of multi-warehouse tracking, delivery routing, and inventory reconciliation. We help distributors eliminate duplicate data and slow decisions.",
    capabilities: [
      { title: "Multi-warehouse Management", description: "Track stock across different geographical locations." },
      { title: "Route Management", description: "Plan and optimize delivery trips." },
      { title: "Stock Reconciliation", description: "Automated tracking for accurate inventory levels." },
      { title: "Returns Management", description: "Handle sales and purchase returns efficiently." }
    ],
    benefits: [
      { title: "Inventory Accuracy", description: "Near 100% accuracy in stock tracking." },
      { title: "Faster Fulfillment", description: "Optimized picking and packing workflows." }
    ],
    process: [
      { step: "Warehouse Setup", description: "Digital mapping of your physical locations." },
      { step: "Logistics Configuration", description: "Setting up delivery routes and vehicles." },
      { step: "Integration", description: "Connecting with eCommerce and payment gateways." }
    ],
    technologies: ["SKYDOTERP", "Logistics Modules"],
    faqs: [
      { question: "Can we track batch expiry?", answer: "Yes, complete batch and serial number tracking is built-in." }
    ]
  },
  "healthcare": {
    title: "Healthcare Solutions",
    description: "Integrated clinical and administrative operations, patient management, and billing.",
    overview: "A unified operating system for clinics and hospitals to handle patient records, appointment scheduling, billing, and lab management without disjointed software.",
    capabilities: [
      { title: "Patient Management", description: "Complete EMR and patient history tracking." },
      { title: "Appointment Scheduling", description: "Manage doctors' calendars and patient visits." },
      { title: "Integrated Billing", description: "Automated invoicing and insurance management." }
    ],
    benefits: [
      { title: "Improved Care", description: "Doctors have instant access to patient history." },
      { title: "Streamlined Admin", description: "Less paperwork and faster patient processing." }
    ],
    process: [
      { step: "Compliance Review", description: "Ensuring all data handling meets medical standards." },
      { step: "System Setup", description: "Configuring wards, beds, and specialized departments." },
      { step: "Staff Training", description: "Comprehensive training for medical and admin staff." }
    ],
    technologies: ["SKYDOTERP Healthcare", "Frappe Apps"],
    faqs: [
      { question: "Is the data secure?", answer: "Yes, we implement strict RBAC and encryption." }
    ]
  },
  "education": {
    title: "Education & Campus OS",
    description: "Comprehensive Campus OS, learning management, and student lifecycle administration.",
    overview: "Manage everything from student admissions and fee collections to online examinations and alumni networks on a single scalable platform.",
    capabilities: [
      { title: "Student Lifecycle", description: "Manage admissions, attendance, and academics." },
      { title: "Fee Management", description: "Automated fee collection and receipt generation." },
      { title: "LMS Integration", description: "Built-in learning management system for digital classrooms." }
    ],
    benefits: [
      { title: "Centralized Admin", description: "One platform for teachers, students, and parents." },
      { title: "Better Analytics", description: "Track institutional performance and student success rates." }
    ],
    process: [
      { step: "Institute Setup", description: "Configuring courses, batches, and academic terms." },
      { step: "Data Migration", description: "Importing existing student and staff records." },
      { step: "Portal Launch", description: "Rolling out student and parent portals." }
    ],
    technologies: ["SKYDOTERP Education", "LMS"],
    faqs: [
      { question: "Do parents get access?", answer: "Yes, dedicated portals are available for parents to track progress and pay fees." }
    ]
  }
};

export function getSolutionData(slug: string): SolutionDetailData {
  if (detailedSolutions[slug]) {
    return detailedSolutions[slug];
  }

  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: formattedTitle,
    description: `Enterprise-grade ${formattedTitle} solutions designed to modernize your operations.`,
    overview: `Skydot Infotech delivers comprehensive ${formattedTitle} capabilities engineered to meet the demands of modern enterprise environments. We bridge the gap between complex operations and seamless digital experiences.`,
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
    technologies: ["SKYDOTERP", "Frappe Framework", "Enterprise Architectures"],
    faqs: [
      { question: "How is this customized for our business?", answer: "Every implementation begins with a deep architectural audit to ensure our solutions map perfectly to your unique workflows." }
    ]
  };
}
