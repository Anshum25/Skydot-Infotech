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
  brochureUrl?: string;
}

export const detailedProducts: Record<string, ProductDetailData> = {
  "sky-erp": {
    title: "SKYDOTERP",
    category: "Enterprise",
    description: "An integrated enterprise platform powered by ERPNext for managing operations across finance, HR, manufacturing, and more.",
    overview: "SKYDOTERP is our flagship pre-configured ERPNext product built for global SMEs. It provides a unified view of your entire operation in real-time. It is tax-ready, industry-specific, and deployable in weeks, eliminating the cost of chaos with the power of clarity.",
    problemSolved: "Replaces disconnected systems, manual Excel reports, and slow decisions with one unified platform, automated workflows, and real-time dashboards.",
    features: [
      "Financial Control (GST, Banking, Multi-currency)",
      "HR & Payroll (Attendance, Appraisals, Self-Service)",
      "Manufacturing Operations (BOM, Work Orders, Quality)",
      "CRM & Sales (Lead Capture, Quotes, Campaigns)",
      "Distribution & Logistics (Multi-warehouse, Trips)"
    ],
    benefits: [
      { title: "One Platform", description: "Seamless operations across departments without duplicating data." },
      { title: "Real-Time Reports", description: "Live dashboards and automated reporting for faster decision-making." },
      { title: "Sky AI Copilot", description: "Chat with your ERP to get answers, run reports, and automate tasks instantly." }
    ],
    targetUsers: ["SMEs", "Manufacturing Plants", "Distribution Centers", "Enterprise Administrators"],
    relatedSolutions: [{ title: "ERPNext Implementation", slug: "erpnext-implementation" }]
  },
  "frappe-apps": {
    title: "Frappe Custom Apps",
    category: "Enterprise",
    description: "Custom-built applications on the Frappe framework, tailored precisely to your unique business workflows.",
    overview: "We leverage the world's best 100% open-source ERP framework to build tailored solutions. From customizing a single workflow to building an entire application from scratch, we handle it all with our Frappe-first team.",
    problemSolved: "Off-the-shelf software often fails to meet unique operational needs. Custom Frappe apps bridge these gaps efficiently without licensing fees.",
    features: [
      "100% Open Source Architecture",
      "Seamless ERPNext Integration",
      "Custom Workflow Automation",
      "No Licensing Fees per User",
      "Rapid Development & Deployment"
    ],
    benefits: [
      { title: "No Vendor Lock-in", description: "You own your data and the customized framework." },
      { title: "Highly Customizable", description: "Adapt the software to your exact business needs instead of the other way around." }
    ],
    targetUsers: ["Growing Enterprises", "Process-heavy Operations", "Organizations scaling rapidly"],
    relatedSolutions: [{ title: "Frappe Customization", slug: "frappe-customization" }]
  },
  "itms": {
    title: "ITMS",
    category: "Institute Training Management System",
    description: "Empowering Training Through Technology. Plan • Manage • Train • Assess • Analyze • Improve.",
    overview: "ITMS (Institute Training Management System) is an integrated digital platform designed to manage and streamline the complete training lifecycle of an institute. It brings training planning, course management, trainee records, faculty management, attendance, assessments, examinations, reports, and other training activities into a single centralized system.",
    problemSolved: "ITMS connects all major training activities through one centralized platform. It helps administrators plan courses, manage trainees and faculty, schedule training sessions, record attendance, conduct assessments and examinations, manage results, and generate reports. This reduces manual work and keeps training information organized, accessible, and up to date.",
    features: [
      "Training & Course Management",
      "Trainee & Faculty Records",
      "Attendance Tracking",
      "Assessments & Examinations",
      "Comprehensive Reports & Analytics"
    ],
    benefits: [
      { title: "Operational Efficiency", description: "Automates routine processes, reduces manual data entry, minimizes errors, and saves time across departments." },
      { title: "Data-Driven Decisions", description: "Transforms training data into meaningful insights. Centralized data helps management monitor performance, attendance, and faculty activities." }
    ],
    targetUsers: ["Training Administrators", "Faculty", "Trainees", "Management"],
    relatedSolutions: [{ title: "LMS", slug: "lms-moodle" }],
    brochureUrl: "/Institutional Training Management System (2) (2) (1).pdf"
  },
  "lms-moodle": {
    title: "LMS - Moodle",
    category: "Education Technology",
    description: "Comprehensive platform for digital education delivery, powered by highly interactive and customized Moodle deployments.",
    overview: "Our proprietary Learning Management System provides a highly scalable environment for educational institutions and corporate training departments. By customizing and deploying Moodle, we create branded, high-performance learning environments to deliver content, assess performance, and track engagement seamlessly.",
    problemSolved: "Fragmented tools for video hosting, assignment tracking, and grading create friction. This LMS provides a unified, reliable, open-source-based learning platform tailored to your specific institutional needs.",
    features: [
      "Video Course Hosting & Discussions",
      "Automated Grading & Analytics",
      "Custom Themes & Plugin Integration",
      "Scalable Moodle Hosting",
      "Certificate Generation"
    ],
    benefits: [
      { title: "Centralized & Cost-Effective", description: "All resources in one secure environment, leveraging robust open-source technology." },
      { title: "Actionable Insights", description: "Detailed analytics help identify struggling students early." },
      { title: "Highly Customizable", description: "Can be tailored to any educational workflow and branded perfectly." }
    ],
    targetUsers: ["Universities", "Schools", "Corporate Trainers", "EdTech Startups"],
    relatedSolutions: [{ title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }]
  },
  "cms": {
    title: "Course Management System (CMS)",
    category: "Education Technology",
    description: "One system for every course, batch and trainee. Plan batches, track attendance, manage faculty and publish results from one dashboard.",
    overview: "Plan batches, track attendance, manage faculty and publish results from one dashboard. No more registers, spreadsheets and lost circulars. It replaces paper attendance registers, separate Excel sheets, batch calendars kept in email, and result sheets passed around for sign-off.",
    problemSolved: "Replaces paper attendance registers, separate Excel sheets, batch calendars kept in email, result sheets passed around for sign-off, and chasing zones for nominations by phone.",
    features: [
      "Batches: Create batches, set dates, and follow progress.",
      "Trainees: Complete records for every trainee including history, attendance, and results.",
      "Attendance: Mark sessions quickly with auto-flagging for low attendance.",
      "Faculty & Results: Manage timetables, marks, sign-offs, and leave schedules.",
      "Nominations & Campus: Online nominations and tracking for hostel beds, labs, and classrooms."
    ],
    benefits: [
      { title: "Faster setup & Less errors", description: "Faster batch set-up and fewer manual attendance and result errors." },
      { title: "Streamlined Reporting", description: "Less time spent compiling monthly reports with one record per trainee across their whole career." }
    ],
    targetUsers: ["Training coordinators", "Faculty", "Zonal nominating officers", "Directors"],
    relatedSolutions: [{ title: "ITMS", slug: "itms" }]
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
    overview: `An advanced, scalable ${formattedTitle} platform engineered to handle complex business operations securely and efficiently.`,
    problemSolved: `Eliminates operational bottlenecks by unifying disconnected systems into a single, cohesive software architecture.`,
    features: [
      "Role-Based Access Control",
      "Real-time Analytics Dashboard",
      "Seamless API Integrations"
    ],
    benefits: [
      { title: "Increased Efficiency", description: "Automates repetitive tasks to save time and resources." },
      { title: "Data Security", description: "Ensures compliance with enterprise-grade security protocols." }
    ],
    targetUsers: ["Enterprise Administrators", "Operations Managers"],
    relatedSolutions: [
      { title: "Custom Software", slug: "software-development" }
    ]
  };
}
