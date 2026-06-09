export interface PortfolioProject {
  slug: string;
  title: string;
  industry: string;
  oneLiner: string;
  coverImage: string;
  route: string;
  pages: string;
  features: string[];
  demonstrates: string;
}

export interface ServiceVertical {
  id: string;
  icon: string;
  title: string;
  description: string;
  body: string;
  featureList: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProofPoint {
  number: string;
  title: string;
  body: string;
}
