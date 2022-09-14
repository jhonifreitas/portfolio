import { BaseApi } from './abstract';

import { Company } from '../../interfaces/company';

class CompanyService extends BaseApi {

  async getAll(active = true): Promise<Company[]> {
    const params: {active?: boolean} = {};
    if (typeof active === 'boolean') params.active = active;
    return this.get('company', params);
  }

  async getById(id: string): Promise<Company> {
    return this.get(`company/${id}`);
  }
}

export default new CompanyService();