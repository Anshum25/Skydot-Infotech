export interface ProductDetailData {
  title: string;
  category: string;
  description: string;
  overview: string;
  problemSolved: string;
  features: string[];
  benefits: { title: string; description: string }[];
  targetUsers: string[];
  relatedSolutions: { title: string; slug: string }[];
}

export const detailedProducts: Record<string, ProductDetailData> = {
  "itms": {
    title: "ITMS",
    category: "Management",
    description: "Integrated Transport Management System for intelligent traffic routing.",
    overview: "ITMS provides a comprehensive platform for managing transportation networks, optimizing routes, and analyzing traffic data in real-time.",
    problemSolved: "Reduces congestion and improves fleet efficiency through advanced analytics and tracking.",
    features: ["Real-time tracking", "Route optimization", "Analytics dashboard"],
    benefits: [
      { title: "Efficiency", description: "Improves overall fleet management." },
      { title: "Data-Driven", description: "Real-time analytics for better decision making." }
    ],
    targetUsers: ["Transportation Agencies", "Fleet Operators"],
    relatedSolutions: [{ title: "ERP Solutions", slug: "erp-enterprise" }]
  },
  "lms": {
    title: "LMS",
    category: "Education Technology",
    description: "Comprehensive platform for digital education delivery and administration.",
    overview: "Our proprietary Learning Management System provides a highly scalable environment for educational institutions and corporate training departments to deliver content, assess performance, and track engagement.",
    problemSolved: "Fragmented tools for video hosting, assignment tracking, and grading create friction for both educators and learners. This LMS provides a unified, seamless experience.",
    features: [
      "Video Course Hosting",
      "Automated Grading",
      "Student Progress Analytics",
      "Interactive Discussion Boards",
      "Certificate Generation"
    ],
    benefits: [
      { title: "Centralized Learning", description: "All resources and interactions happen in one secure environment." },
      { title: "Actionable Insights", description: "Detailed analytics help identify struggling students early." }
    ],
    targetUsers: ["Universities", "Corporate Trainers", "EdTech Startups"],
    relatedSolutions: [{ title: "Web Development", slug: "web-software-development" }]
  },
  "cms": {
    title: "CMS",
    category: "Enterprise",
    description: "Content Management System tailored for large-scale enterprise content delivery.",
    overview: "A powerful CMS designed to handle vast amounts of content with role-based access control and media management.",
    problemSolved: "Simplifies content publication workflows across large organizations.",
    features: ["Role-based access", "Media management", "Workflow approvals"],
    benefits: [
      { title: "Scalability", description: "Handles high traffic and large media assets." },
      { title: "Collaboration", description: "Streamlines editorial workflows." }
    ],
    targetUsers: ["Media Publishers", "Enterprise Marketing Teams"],
    relatedSolutions: [{ title: "Web Development", slug: "web-software-development" }]
  },
  "pos": {
    title: "POS (Point of Sale)",
    category: "Retail",
    description: "Advanced Point of Sale system integrating inventory, billing, and customer management.",
    overview: "A unified POS system that brings together transactions, inventory management, and customer analytics in a single interface.",
    problemSolved: "Eliminates the need for disjointed systems in retail environments.",
    features: ["Inventory tracking", "Billing & Invoicing", "Sales analytics"],
    benefits: [
      { title: "Unified Operations", description: "All retail functions in one place." },
      { title: "Customer Insights", description: "Track buying patterns and history." }
    ],
    targetUsers: ["Retailers", "Restaurants"],
    relatedSolutions: [{ title: "ERP Solutions", slug: "erp-enterprise" }]
  },
  "moodle": {
    title: "MOODLE",
    category: "Education",
    description: "Customized Moodle deployment for scalable and highly interactive e-learning platforms.",
    overview: "We deploy and customize Moodle to create branded, high-performance learning environments.",
    problemSolved: "Provides a reliable, open-source based learning platform tailored to specific institutional needs.",
    features: ["Custom themes", "Plugin integration", "Scalable hosting"],
    benefits: [
      { title: "Cost-Effective", description: "Leverages open-source technology." },
      { title: "Highly Customizable", description: "Can be tailored to any educational workflow." }
    ],
    targetUsers: ["Schools", "Universities", "Corporate Training"],
    relatedSolutions: [{ title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }]
  },
  "mcx-apis": {
    title: "MCX APIs",
    category: "Finance",
    description: "High-performance APIs for integrating MCX commodity trading and market data.",
    overview: "Reliable and fast APIs to access real-time MCX market data, enabling automated trading and analytics.",
    problemSolved: "Provides low-latency access to critical financial data.",
    features: ["Real-time data", "Low latency", "Secure endpoints"],
    benefits: [
      { title: "Speed", description: "Ultra-fast data delivery." },
      { title: "Reliability", description: "High uptime for mission-critical trading." }
    ],
    targetUsers: ["Traders", "Financial Institutions"],
    relatedSolutions: [{ title: "Web Development", slug: "web-software-development" }]
  }
};

export function getProductData(slug: string): ProductDetailData {
  if (detailedProducts[slug]) {
    return detailedProducts[slug];
  }

  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: formattedTitle,
    category: "Enterprise Software",
    description: `Proprietary ${formattedTitle} platform by Skydot Infotech.`,
    overview: `[VERIFY CONTENT] Detailed overview of the ${formattedTitle} product goes here.`,
    problemSolved: `[VERIFY CONTENT] Description of the core business problem that ${formattedTitle} solves.`,
    features: [
      "[VERIFY CONTENT] Key Feature 1",
      "[VERIFY CONTENT] Key Feature 2",
      "[VERIFY CONTENT] Key Feature 3"
    ],
    benefits: [
      { title: "[VERIFY CONTENT] Benefit 1", description: "How this feature provides value." },
      { title: "[VERIFY CONTENT] Benefit 2", description: "How this feature provides value." }
    ],
    targetUsers: ["[VERIFY CONTENT] User Type 1", "[VERIFY CONTENT] User Type 2"],
    relatedSolutions: [
      { title: "Custom Software", slug: "software-development" }
    ]
  };
}
