export interface Industry {
  name: string;
  slug: string;
  description: string;
  challenges: string[];
  solutions: string[];
  products: string[];
  iconName: string;
  verified: boolean;
}

export const industries: Industry[] = [
  {
    name: "NBFC & Finance",
    slug: "finance",
    description: "Compliance tracking, loan management, and highly secure financial reporting solutions.",
    challenges: ["Regulatory compliance", "Loan lifecycle management", "Data security"],
    solutions: ["Custom Application Development", "ERP Solutions"],
    products: ["SKYDOTERP", "MCX APIs"],
    iconName: "Landmark",
    verified: true
  },
  {
    name: "Logistics",
    slug: "logistics",
    description: "Fleet management and Transport Management Systems (TMS) for global and local supply chains.",
    challenges: ["Route optimization", "Fleet maintenance", "Real-time tracking"],
    solutions: ["Software Development", "ERP Solutions"],
    products: ["SKYDOTERP", "ITMS"],
    iconName: "Globe",
    verified: true
  },
  {
    name: "Government",
    slug: "government",
    description: "Secure, scalable, and compliant software solutions for public sector organizations and government bodies.",
    challenges: ["Data security and compliance", "Legacy system integration", "Public service delivery efficiency"],
    solutions: ["Custom Software Development", "Web Hosting", "ERP Solutions"],
    products: ["SKYDOTERP"],
    iconName: "Landmark",
    verified: true
  },
  {
    name: "Railways",
    slug: "railways",
    description: "Specialized monitoring and management systems designed specifically for railway operations and training.",
    challenges: ["Safety monitoring", "Large scale personnel training", "Real-time data processing"],
    solutions: ["Software Development", "Web Development"],
    products: ["ITMS"],
    iconName: "TrainTrack",
    verified: true
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "End-to-end ERP operations covering BOM, production planning, quality control, and shop floor management.",
    challenges: ["Equipment downtime", "Supply chain visibility", "Inventory and scrap management"],
    solutions: ["ERP Solutions", "ERPNext Implementation", "Frappe Development"],
    products: ["SKYDOTERP", "Frappe Custom Apps"],
    iconName: "Factory",
    verified: true
  },
  {
    name: "Distribution & Trading",
    slug: "distribution",
    description: "Streamlined multi-branch logistics, inventory tracking, and warehouse operations.",
    challenges: ["Multi-warehouse management", "Route planning", "Stock reconciliation"],
    solutions: ["ERP Solutions", "Business Automation"],
    products: ["SKYDOTERP"],
    iconName: "Truck",
    verified: true
  },
  {
    name: "Healthcare",
    slug: "healthcare",
    description: "Integrated clinical and administrative operations, patient management, and billing.",
    challenges: ["Patient data management", "Compliance", "Resource scheduling"],
    solutions: ["Web Development", "Custom Application Development"],
    products: ["SKYDOTERP", "Frappe Custom Apps"],
    iconName: "Activity",
    verified: true
  },
  {
    name: "Retail & E-commerce",
    slug: "retail",
    description: "Robust omnichannel operating systems bridging in-store POS and online storefronts.",
    challenges: ["Omnichannel experience", "Payment processing", "Customer retention"],
    solutions: ["Web Development", "Mobile Application Development", "ERP Solutions"],
    products: ["SKYDOTERP", "POS"],
    iconName: "ShoppingCart",
    verified: true
  },
  {
    name: "Education",
    slug: "education",
    description: "Comprehensive Campus OS, learning management, and student lifecycle administration.",
    challenges: ["Remote learning facilitation", "Student performance tracking", "Administrative overhead"],
    solutions: ["Web Development", "Mobile Application Development"],
    products: ["LMS", "MOODLE", "SKYDOTERP"],
    iconName: "GraduationCap",
    verified: true
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Project management and broker CRMs designed specifically for real estate developers and agencies.",
    challenges: ["Lead management", "Project lifecycle tracking", "Broker commissions"],
    solutions: ["Software Development", "Digital Marketing"],
    products: ["SKYDOTERP", "Frappe Custom Apps"],
    iconName: "Building2",
    verified: true
  },
  {
    name: "Textile & Garments",
    slug: "textile",
    description: "Style to season tracking, batch management, and precise manufacturing controls for apparel.",
    challenges: ["Variant management", "Seasonal demand forecasting", "Supply chain tracking"],
    solutions: ["ERP Solutions", "Business Automation"],
    products: ["SKYDOTERP"],
    iconName: "Scissors",
    verified: true
  },
  {
    name: "Dairy & FMCG",
    slug: "fmcg",
    description: "Batch control, FEFO (First Expired, First Out) management, and fast-moving inventory tracking.",
    challenges: ["Perishable goods tracking", "Quality compliance", "Fast distribution cycles"],
    solutions: ["ERP Solutions"],
    products: ["SKYDOTERP"],
    iconName: "Package",
    verified: true
  }
];
