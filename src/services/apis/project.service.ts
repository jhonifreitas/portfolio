import { BaseApi } from './abstract';

import { Project } from '../../interfaces/project';

class ProjectService extends BaseApi {

  async getAll(active = true): Promise<Project[]> {
    const params: {active?: boolean} = {};
    if (typeof active === 'boolean') params.active = active;
    return this.get('project', params);
  }

  async getById(id: string): Promise<Project> {
    return this.get(`project/${id}`);
  }
}

export default new ProjectService();