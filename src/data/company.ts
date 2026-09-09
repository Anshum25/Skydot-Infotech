export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  locations: {
    title: string;
    address: string;
    mapUrl?: string;
  }[];
  social: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  verified: boolean;
}

export const companyData: CompanyInfo = {
  name: "Skydot Infotech",
  tagline: "Technology that moves businesses forward.",
  description: "From AI-powered solutions and enterprise software to web, mobile and ERP, Skydot Infotech helps organizations turn complex ideas into scalable technology. We are a trusted technology partner dedicated to building practical, robust solutions for modern businesses.",
  email: "info@skydotinfotech.com", // [CONTENT TO VERIFY]
  phone: "+91 00000 00000", // [CONTENT TO VERIFY]
  locations: [
    {
      title: "Rajkot (HQ)",
      address: "Rajkot, Gujarat, India", // [CONTENT TO VERIFY]
    }
  ],
  social: {
    facebook: "https://www.facebook.com/Skydotinfotech/",
    twitter: "https://x.com/Skydotinfotech",
    linkedin: "https://in.linkedin.com/in/skydotinfotech"
  },
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "300+", label: "Clients Worldwide" },
    { value: "15+", label: "Proprietary Products" },
    { value: "500+", label: "Projects Delivered" }
  ],
  verified: false // Awaiting final factual verification for stats and exact address
};
