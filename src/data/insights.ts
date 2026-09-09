export interface Insight {
  title: string;
  slug: string;
  author: string;
  date: string;
  category: string;
  summary: string;
  content: string; // Storing as HTML/Markdown string or simplified for this demo
  relatedSlugs: string[];
}

export const insights: Record<string, Insight> = {
  "future-of-erp-in-manufacturing": {
    title: "The Future of ERP in Manufacturing",
    slug: "future-of-erp-in-manufacturing",
    author: "[VERIFY CONTENT] Engineering Team",
    date: "August 24, 2026",
    category: "Enterprise Software",
    summary: "How modular ERP systems are replacing monolithic architectures in the modern manufacturing sector.",
    content: "Modern manufacturing requires agility that legacy monolithic ERPs simply cannot provide. By shifting to modular, microservices-based ERP architectures, organizations can update individual components—like inventory management or HR—without disrupting the entire production floor. This piece explores the technical transition from legacy systems to modern architectures, highlighting the role of APIs and real-time data synchronization.",
    relatedSlugs: ["ai-in-document-processing"]
  },
  "ai-in-document-processing": {
    title: "Automating Compliance with AI Document Processing",
    slug: "ai-in-document-processing",
    author: "[VERIFY CONTENT] Skydot AI Lab",
    date: "August 15, 2026",
    category: "Artificial Intelligence",
    summary: "Leveraging OCR and Large Language Models to automate data extraction from unstructured forms.",
    content: "Extracting data from physical or unstructured digital documents has historically been a bottleneck for enterprise compliance. Today, Retrieval-Augmented Generation (RAG) combined with advanced OCR allows us to accurately parse complex documents, reducing manual entry time by up to 80%. We discuss the implementation challenges and security considerations when deploying these models on proprietary data.",
    relatedSlugs: ["future-of-erp-in-manufacturing"]
  }
};

export function getInsight(slug: string): Insight | null {
  return insights[slug] || null;
}

export function getAllInsights(): Insight[] {
  return Object.values(insights);
}
