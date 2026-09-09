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
    name: "Government",
    slug: "government",
    description: "Secure, scalable, and compliant software solutions for public sector organizations and government bodies.",
    challenges: ["Data security and compliance", "Legacy system integration", "Public service delivery efficiency"],
    solutions: ["Custom Software Development", "Cloud & Infrastructure", "ERP Solutions"],
    products: ["IRTPMS", "Gujpe"],
    iconName: "Landmark",
    verified: true
  },
  {
    name: "Railways",
    slug: "railways",
    description: "Specialized monitoring and management systems designed specifically for railway operations and training.",
    challenges: ["Safety monitoring", "Large scale personnel training", "Real-time data processing"],
    solutions: ["Custom Software Development", "AI & Automation"],
    products: ["IRTPMS", "IRIMEE", "IRISET"],
    iconName: "TrainTrack",
    verified: true
  },
  {
    name: "Education",
    slug: "education",
    description: "Comprehensive digital platforms and learning management systems for schools, colleges, and training institutes.",
    challenges: ["Remote learning facilitation", "Student performance tracking", "Administrative overhead"],
    solutions: ["Web & Software", "Mobile Development"],
    products: ["LMS", "Online Examination System", "OMR Software"],
    iconName: "GraduationCap",
    verified: true
  },
  {
    name: "Manufacturing",
    slug: "manufacturing",
    description: "End-to-end ERP and efficiency tracking systems to optimize the manufacturing lifecycle and supply chain.",
    challenges: ["Equipment downtime", "Supply chain visibility", "Inventory management"],
    solutions: ["ERP Solutions", "AI & Automation", "Cloud & Infrastructure"],
    products: ["Skydot ERP", "TPMIS"],
    iconName: "Factory",
    verified: true
  },
  {
    name: "Real Estate",
    slug: "real-estate",
    description: "Dynamic property portals and CRM solutions for real estate agents, brokers, and property managers.",
    challenges: ["Lead management", "Property showcasing", "Client communication"],
    solutions: ["Web & Software", "Digital Growth"],
    products: ["Real Estate Portal", "Member Directory"],
    iconName: "Building2",
    verified: true
  },
  {
    name: "Retail & E-Commerce",
    slug: "retail",
    description: "Robust e-commerce platforms and retail management software to drive sales and customer engagement.",
    challenges: ["Omnichannel experience", "Payment processing", "Customer retention"],
    solutions: ["Web & Software", "Mobile Development", "Digital Growth"],
    products: ["E-Commerce / Shopping Cart", "Gujpe"],
    iconName: "ShoppingCart",
    verified: true
  }
];
