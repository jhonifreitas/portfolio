import { BaseApi } from './abstract';

import { Skill } from '../../interfaces/skill';

class SkillService extends BaseApi {

  async getAll(active = true): Promise<Skill[]> {
    const params: {active?: boolean} = {};
    if (typeof active === 'boolean') params.active = active;
    return this.get('skill', params);
  }

  async getById(id: string): Promise<Skill> {
    return this.get(`skill/${id}`);
  }
}

export default new SkillService();