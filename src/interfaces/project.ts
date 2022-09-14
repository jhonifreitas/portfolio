import { Skill } from "./skill";
import { BaseModel } from "./base";
import { Company } from "./company";

export interface Project extends BaseModel {
  companyId?: string;
  skillIds: string[];

  name: string;
  type: ProjectType;
  link?: string;

  description_PT: string;
  description_EN: string;

  images: string[];
  featured_image: number;

  company?: Company;
  skills: Skill[];
}

export type ProjectType = 'mobile' | 'system' | 'website' | 'e-commerce';
