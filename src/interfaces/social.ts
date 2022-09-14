import { BaseModel } from './base';

export interface Social extends BaseModel {
  link: string;
  type: SocialType;
}

export type SocialType = 'email' | 'phone' | 'whatsapp' | 'linked-in' | 'github' | 'facebook';
