import { BaseModel } from './base';

export interface Skill extends BaseModel {
  name: string;
  years: number;
  percent: number;
}
