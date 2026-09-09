import { products } from "./products";
import { industries } from "./industries";
import { services } from "./services";
import { getAllCaseStudies } from "./work";

export const heroCopy = {
  headline: "Technology built around your business.",
  subheadline:
    "AI, ERP, software and digital products engineered around the way your business works.",
  primaryCta: { label: "Explore Solutions", href: "/solutions" },
  secondaryCta: { label: "View Our Work", href: "/work" },
};

export const capabilityIntro = {
  headline: "One technology partner.",
  subheadline: "Multiple ways to move your business forward.",
};

export const capabilities = [
  {
    number: "01",
    title: "AI & Intelligent Systems",
    description: "Turn business data into useful intelligence.",
    href: "/solutions/ai-automation",
  },
  {
    number: "02",
    title: "ERP & Business Automation",
    description: "Connect operations, people and decisions in one system.",
    href: "/solutions/erp-enterprise",
  },
  {
    number: "03",
    title: "Custom Software",
    description: "Software designed around the way your organization actually works.",
    href: "/solutions/web-software-development",
  },
  {
    number: "04",
    title: "Digital Products",
    description: "From concept to launch, build digital experiences people use.",
    href: "/solutions/digital-growth",
  },
];

export const serviceGroups = [
  {
    title: "Digital Engineering",
    items: [
      { label: "Web Development", href: "/solutions/web-software-development" },
      { label: "Software Development", href: "/solutions/web-software-development" },
      { label: "Mobile Applications", href: "/solutions/mobile-development" },
    ],
  },
  {
    title: "Business Systems",
    items: [
      { label: "ERP", href: "/solutions/erp-enterprise" },
      { label: "HRMS", href: "/solutions/erp-enterprise" },
      { label: "Business Automation", href: "/solutions/ai-automation" },
    ],
  },
  {
    title: "Digital Infrastructure",
    items: [
      { label: "Domain", href: "/solutions/cloud-infrastructure" },
      { label: "Hosting", href: "/solutions/cloud-infrastructure" },
      { label: "SSL", href: "/solutions/cloud-infrastructure" },
      { label: "Business Email", href: "/solutions/cloud-infrastructure" },
    ],
  },
  {
    title: "Growth",
    items: [
      { label: "SEO", href: "/solutions/digital-growth" },
      { label: "Digital Marketing", href: "/solutions/digital-growth" },
      { label: "CMS", href: "/solutions/digital-growth" },
      { label: "Bulk SMS", href: "/solutions/digital-growth" },
    ],
  },
];

export const processSteps = [
  { number: "01", title: "Understand", description: "Map goals, constraints, and systems." },
  { number: "02", title: "Design", description: "Shape architecture and experience." },
  { number: "03", title: "Build", description: "Engineer with clarity and discipline." },
  { number: "04", title: "Launch", description: "Deploy, validate, and support." },
  { number: "05", title: "Improve", description: "Measure, refine, and evolve." },
];

export const featuredProducts = products.filter((p) => p.verified).slice(0, 4);

export const homepageIndustries = industries.filter((i) => i.verified);

export const homepageWork = getAllCaseStudies();

export const homepageServices = services.filter((s) => s.verified);

export const trustContent = {
  headline: "Technology is only valuable when it works in the real world.",
  pillars: [
    {
      label: "Industries",
      items: homepageIndustries.map((i) => ({ name: i.name, href: `/industries/${i.slug}` })),
    },
    {
      label: "Products",
      items: featuredProducts.map((p) => ({ name: p.title, href: `/products/${p.slug}` })),
    },
    {
      label: "Capabilities",
      items: homepageServices.map((s) => ({ name: s.title, href: `/solutions/${s.slug}` })),
    },
    {
      label: "Selected Work",
      items: homepageWork.map((w) => ({ name: w.title, href: `/work/${w.slug}` })),
    },
  ],
};
