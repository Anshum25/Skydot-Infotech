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
  "irtpms": {
    title: "IRTPMS",
    category: "Infrastructure Management",
    description: "Scale-level management system engineered for complex tracking and compliance.",
    overview: "IRTPMS (Indian Railways Track Patrol Management System) is a comprehensive, enterprise-grade software platform designed to manage, monitor, and enforce compliance across large-scale physical infrastructures.",
    problemSolved: "Managing geographically distributed assets and ensuring maintenance personnel adhere to strict compliance schedules is highly error-prone with manual systems. IRTPMS digitizes this entire workflow, ensuring accountability and real-time oversight.",
    features: [
      "Real-time GPS Tracking",
      "Automated Compliance Reporting",
      "Offline Sync Capabilities",
      "Role-based Access Control",
      "Dashboard Analytics"
    ],
    benefits: [
      { title: "Operational Visibility", description: "Provides management with a real-time view of all ground-level operations." },
      { title: "Compliance Assurance", description: "Automates the logging of mandatory checks to ensure regulatory compliance." }
    ],
    targetUsers: ["Infrastructure Managers", "Safety Auditors", "Field Personnel"],
    relatedSolutions: [
      { title: "ERP Solutions", slug: "erp-solutions" },
      { title: "Custom Software", slug: "software-development" }
    ]
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
    relatedSolutions: [
      { title: "Web Development", slug: "web-development" },
      { title: "Mobile Applications", slug: "mobile-applications" }
    ]
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
