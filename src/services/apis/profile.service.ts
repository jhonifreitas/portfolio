import { BaseApi } from './abstract';

import { Profile } from '../../interfaces/profile';

class ProfileService extends BaseApi {

  async getById(id: string): Promise<Profile> {
    return this.get(`profile/${id}`);
  }
}

export default new ProfileService();