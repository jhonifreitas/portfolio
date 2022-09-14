import { BaseModel } from './base';

export interface Profile extends BaseModel {
  name: string;
  photo?: string;
  profession_init: Date;

  profession_PT: string;
  profession_EN: string;

  about_PT: string;
  about_EN: string;

  CV_PT?: string;
  CV_EN?: string;
}
