export interface CaseStudy {
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technology: string[];
  outcome: string;
  images: string[];
  verified: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "Digital Transformation for Railway Training",
    slug: "railway-training-transformation",
    client: "Indian Railways",
    industry: "Government / Railways",
    challenge: "The client needed a centralized, efficient way to manage training, resources, and assessments for thousands of mechanical and electrical engineering personnel across different locations.",
    solution: "Skydot Infotech developed a comprehensive bespoke management system tailored to railway operations. The system included modules for course management, secure resource sharing, and performance tracking.",
    technology: ["Java", "SQL Server", "Web Architecture"],
    outcome: "Significantly improved training efficiency, reduced administrative overhead by 40%, and provided real-time insights into personnel readiness.",
    images: [],
    verified: true
  },
  {
    title: "Enterprise ERP Implementation for Manufacturing",
    slug: "manufacturing-erp",
    client: "Leading Manufacturing Firm",
    industry: "Manufacturing",
    challenge: "The client was struggling with disconnected systems for inventory, HR, and accounting, leading to data silos and inefficient supply chain management.",
    solution: "We deployed a customized version of Skydot ERP, integrating all core business processes into a single unified platform. The solution included real-time inventory tracking, automated invoicing, and a comprehensive HR module.",
    technology: [".NET", "SQL Server", "Angular"],
    outcome: "Achieved a 30% reduction in operational costs, complete supply chain visibility, and streamlined financial reporting.",
    images: [],
    verified: true
  },
  {
    title: "Scalable Learning Management System",
    slug: "scalable-lms-education",
    client: "Regional Educational Institute",
    industry: "Education",
    challenge: "Needed a scalable platform to transition to online learning, with capabilities to handle thousands of concurrent users, online exams, and grading.",
    solution: "Developed a robust Learning Management System (LMS) with features for live classes, secure assignment submission, and automated grading.",
    technology: ["React", "Node.js", "MongoDB", "WebRTC"],
    outcome: "Successfully transitioned 5,000+ students to online learning with zero downtime during peak examination periods.",
    images: [],
    verified: true
  }
];
