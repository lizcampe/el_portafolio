export interface CaseStudy {
  id: string;
  number: string;
  client: string;
  role: string;
  title: string;
  lead: string;
  paragraphs: string[];
  implementationTitle?: string;
  implementationParagraphs?: string[];
  metrics?: {
    value: string;
    description: string;
    subtext?: string;
  }[];
  result: string;
  learning?: string;
}

export interface SkillItem {
  number: string;
  title: string;
  description: string;
  tools?: string[];
}

export interface ExperienceItem {
  status: 'Actual' | 'Pasado' | '';
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
}
