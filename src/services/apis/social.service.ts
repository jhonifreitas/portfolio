import { BaseApi } from './abstract';

import { Social } from '../../interfaces/social';

class SocialService extends BaseApi {

  async getAll(active = true): Promise<Social[]> {
    const params: {active?: boolean} = {};
    if (typeof active === 'boolean') params.active = active;
    return this.get('social', params);
  }

  async getById(id: string): Promise<Social> {
    return this.get(`social/${id}`);
  }
}

export default new SocialService();