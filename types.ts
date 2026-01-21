
export interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}
