export interface Job {
  title: string;
  slug: string;
  experience: string;
  location: string;
  type: string;
  skills: string[];
  responsibilities: string[];
  requirements: string[];
  verified: boolean;
}

export const jobs: Job[] = [
  {
    title: "Senior Full Stack Developer",
    slug: "senior-full-stack-developer",
    experience: "3-5 Years",
    location: "Rajkot, Gujarat (On-site)",
    type: "Full-time",
    skills: ["React", "Node.js", "Next.js", "TypeScript", "PostgreSQL"],
    responsibilities: [
      "Architect and develop scalable web applications.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Ensure the best possible performance, quality, and responsiveness of applications.",
      "Identify and correct bottlenecks and fix bugs."
    ],
    requirements: [
      "Proven experience as a Full Stack Developer or similar role.",
      "Familiarity with common stacks and agile methodologies.",
      "Knowledge of multiple front-end languages and libraries (e.g. HTML/ CSS, JavaScript, XML, jQuery).",
      "Excellent communication and teamwork skills."
    ],
    verified: false // Placeholder until active job listings are provided
  },
  {
    title: "Mobile App Developer (React Native)",
    slug: "mobile-app-developer-react-native",
    experience: "2-4 Years",
    location: "Rajkot, Gujarat (On-site)",
    type: "Full-time",
    skills: ["React Native", "Redux", "REST APIs", "iOS", "Android"],
    responsibilities: [
      "Build pixel-perfect, buttery smooth UIs across both mobile platforms.",
      "Leverage native APIs for deep integrations with both platforms.",
      "Diagnose and fix bugs and performance bottlenecks for performance that feels native."
    ],
    requirements: [
      "Firm grasp of the JavaScript and TypeScript language and its nuances.",
      "Knowledge of functional or object-oriented programming.",
      "Ability to write well-documented, clean Javascript code.",
      "Familiarity with native build tools, like XCode, Gradle."
    ],
    verified: false
  }
];
