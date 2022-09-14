import { BaseModel } from './base';

export interface Company extends BaseModel {
  name: string;
  init: Date;
  description_PT: string;
  description_EN: string;

  end?: Date;
  link?: string;
  logo?: string;
}
