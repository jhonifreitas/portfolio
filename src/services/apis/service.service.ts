import { BaseApi } from './abstract';

import { Service } from '../../interfaces/service';

class ServiceService extends BaseApi {

  async getAll(active = true): Promise<Service[]> {
    const params: {active?: boolean} = {};
    if (typeof active === 'boolean') params.active = active;
    return this.get('service', params);
  }

  async getById(id: string): Promise<Service> {
    return this.get(`service/${id}`);
  }
}

export default new ServiceService();