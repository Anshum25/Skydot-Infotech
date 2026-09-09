export interface IndustryDetailData {
  title: string;
  description: string;
  challenges: { title: string; description: string }[];
  howWeHelp: string;
  workflows: { step: string; description: string }[];
  relevantSolutions: { title: string; slug: string }[];
  relevantProducts: { title: string; slug: string }[];
}

export const detailedIndustries: Record<string, IndustryDetailData> = {
  "government": {
    title: "Government & Public Sector",
    description: "Secure, compliant, and highly available infrastructure for public services.",
    challenges: [
      { title: "Data Security & Compliance", description: "Strict adherence to national security standards and data localization laws." },
      { title: "Legacy System Modernization", description: "Transitioning decades-old monolithic systems to modern cloud architectures without downtime." },
      { title: "Massive Scale", description: "Handling millions of concurrent users during public service announcements or registrations." }
    ],
    howWeHelp: "Skydot Infotech engineers secure public-facing portals and internal management systems. We implement strict Role-Based Access Control (RBAC), end-to-end encryption, and robust audit logging to ensure total compliance while delivering modern user experiences.",
    workflows: [
      { step: "Citizen Portals", description: "Secure authentication and service delivery platforms." },
      { step: "Internal Operations", description: "Digitized approval matrices and inter-departmental data sharing." },
      { step: "Infrastructure Monitoring", description: "Real-time dashboards for public utility oversight." }
    ],
    relevantSolutions: [
      { title: "Custom Software Development", slug: "software-development" },
      { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }
    ],
    relevantProducts: [
      { title: "IRTPMS", slug: "irtpms" },
      { title: "Custom ERP", slug: "erp" }
    ]
  },
  "education": {
    title: "Education & EdTech",
    description: "Scalable learning management and campus administration platforms.",
    challenges: [
      { title: "Fragmented Tools", description: "Institutions often use disconnected tools for grading, video, and administration." },
      { title: "Remote Accessibility", description: "Ensuring low-latency access to heavy video and interactive content globally." },
      { title: "Data Privacy", description: "Protecting student records and maintaining compliance with educational data standards." }
    ],
    howWeHelp: "We build unified digital ecosystems for schools, universities, and corporate training centers. Our platforms integrate video hosting, automated assessments, and administrative ERPs into a single, seamless interface.",
    workflows: [
      { step: "Student Lifecycle", description: "From admission tracking to alumni management." },
      { step: "Digital Classrooms", description: "Interactive portals for live sessions and resource distribution." },
      { step: "Automated Grading", description: "AI-assisted assessment and instant feedback generation." }
    ],
    relevantSolutions: [
      { title: "Web Development", slug: "web-development" },
      { title: "Mobile Applications", slug: "mobile-applications" }
    ],
    relevantProducts: [
      { title: "LMS", slug: "lms" },
      { title: "Online Examination System", slug: "online-examination-system" }
    ]
  }
};

export function getIndustryData(slug: string): IndustryDetailData {
  if (detailedIndustries[slug]) {
    return detailedIndustries[slug];
  }

  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: formattedTitle,
    description: `Enterprise technology solutions tailored for the ${formattedTitle} industry.`,
    challenges: [
      { title: "[VERIFY CONTENT] Operational Challenge", description: "A core issue faced by companies in this sector." },
      { title: "[VERIFY CONTENT] Technical Challenge", description: "A system or architectural hurdle." }
    ],
    howWeHelp: `[VERIFY CONTENT] Detailed explanation of how Skydot Infotech solves the specific problems of the ${formattedTitle} industry using modern technology.`,
    workflows: [
      { step: "[VERIFY CONTENT] Workflow 1", description: "How a specific process is digitized." },
      { step: "[VERIFY CONTENT] Workflow 2", description: "How a specific process is digitized." }
    ],
    relevantSolutions: [
      { title: "ERP Solutions", slug: "erp-solutions" },
      { title: "AI & Automation", slug: "ai-automation" }
    ],
    relevantProducts: [
      { title: "ERP", slug: "erp" }
    ]
  };
}
